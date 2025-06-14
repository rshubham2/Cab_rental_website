import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { sendBookingEmail, sendContactEmail, sendCustomerBookingConfirmation } from "./mailer-simple";

// Validation schemas
const bookingSchema = z.object({
  tripType: z.string().min(1, "Trip type is required"),
  from: z.string().min(1, "From location is required"),
  to: z.string().min(1, "Destination is required"),
  startDate: z.string().min(1, "Start date is required"),
  returnDate: z.string().optional(),
  carType: z.string().min(1, "Car type is required"),
  contactNumber: z.string().min(10, "Valid contact number is required"),
  email: z.string().email("Please enter a valid email address").optional(),
  driverLanguage: z.string().optional(),
  additionalRequirements: z.string().optional(),
});

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Booking submission endpoint
  app.post("/api/bookings", async (req: Request, res: Response) => {
    try {
      const bookingData = bookingSchema.parse(req.body);
      
      // Send notification email to owner
      try {
        const emailResult = await sendBookingEmail(bookingData);
        
        // If customer email is provided, send a confirmation email
        if (bookingData.email) {
          try {
            await sendCustomerBookingConfirmation(bookingData, bookingData.email);
            console.log("Customer booking confirmation sent to:", bookingData.email);
          } catch (customerEmailError) {
            console.error("Failed to send customer confirmation email:", customerEmailError);
            // Continue with the process even if customer email fails
          }
        }
        
        // If we're using a test account, return the preview URL
        if (emailResult.previewUrl) {
          return res.status(201).json({ 
            success: true, 
            emailSent: true,
            emailPreviewUrl: emailResult.previewUrl,
            message: "Booking created successfully! We'll contact you shortly to confirm details."
          });
        }
      } catch (emailError) {
        console.error("Failed to send booking notification email:", emailError);
        // Continue with the response even if email fails
      }
      
      res.status(201).json({ 
        success: true, 
        message: "Booking created successfully! We'll contact you shortly to confirm details."
      });
    } catch (error) {
      console.error("Booking creation error:", error);
      res.status(400).json({ 
        success: false, 
        message: error instanceof Error ? error.message : "Invalid booking data" 
      });
    }
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const contactData = contactSchema.parse(req.body);
      
      // Send notification email to owner
      try {
        const emailResult = await sendContactEmail(contactData);
        
        // If we're using a test account, return the preview URL
        if (emailResult.previewUrl) {
          return res.status(201).json({ 
            success: true, 
            emailSent: true,
            emailPreviewUrl: emailResult.previewUrl,
            message: "Your message has been sent successfully! We'll get back to you soon."
          });
        }
      } catch (emailError) {
        console.error("Failed to send contact notification email:", emailError);
        // Continue with the response even if email fails
      }
      
      res.status(201).json({ 
        success: true, 
        message: "Your message has been sent successfully! We'll get back to you soon."
      });
    } catch (error) {
      console.error("Contact creation error:", error);
      res.status(400).json({ 
        success: false, 
        message: error instanceof Error ? error.message : "Invalid contact data" 
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req: Request, res: Response) => {
    res.json({ 
      status: 'OK', 
      timestamp: new Date().toISOString(),
      service: 'Gautham Tours and Travels API'
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}