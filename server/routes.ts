import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingSchema, insertContactSchema } from "@shared/schema";
import { sendBookingEmail, sendContactEmail, sendCustomerBookingConfirmation } from "./mailer-fixed";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // Booking submission endpoint
  app.post("/api/bookings", async (req, res) => {
    try {
      const bookingData = insertBookingSchema.parse(req.body);
      const booking = await storage.createBooking(bookingData);
      
      // Send notification email to owner
      try {
        const emailResult = await sendBookingEmail(booking);
        
        // If customer email is provided, send a confirmation email
        if (booking.email) {
          try {
            await sendCustomerBookingConfirmation(booking, booking.email);
            console.log("Customer booking confirmation sent to:", booking.email);
          } catch (customerEmailError) {
            console.error("Failed to send customer confirmation email:", customerEmailError);
            // Continue with the process even if customer email fails
          }
        }
        
        // If we're using a test account, return the preview URL
        if (emailResult.previewUrl) {
          return res.status(201).json({ 
            success: true, 
            booking, 
            emailSent: true,
            emailPreviewUrl: emailResult.previewUrl
          });
        }
      } catch (emailError) {
        console.error("Failed to send booking notification email:", emailError);
        // Continue with the response even if email fails
      }
      
      res.status(201).json({ 
        success: true, 
        booking,
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

  // Get all bookings
  app.get("/api/bookings", async (req, res) => {
    try {
      const bookings = await storage.getBookings();
      res.status(200).json(bookings);
    } catch (error) {
      console.error("Error retrieving bookings:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve bookings" 
      });
    }
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      
      // Send notification email to owner
      try {
        const emailResult = await sendContactEmail(contact);
        
        // If we're using a test account, return the preview URL
        if (emailResult.previewUrl) {
          return res.status(201).json({ 
            success: true, 
            contact, 
            emailSent: true,
            emailPreviewUrl: emailResult.previewUrl
          });
        }
      } catch (emailError) {
        console.error("Failed to send contact notification email:", emailError);
        // Continue with the response even if email fails
      }
      
      res.status(201).json({ 
        success: true, 
        contact,
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

  // Get all contacts
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.status(200).json(contacts);
    } catch (error) {
      console.error("Error retrieving contacts:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve contacts" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
