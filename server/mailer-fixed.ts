import nodemailer from 'nodemailer';
import { Booking, Contact } from '@shared/schema';

// Email configuration
const emailConfig = {
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER || '',
    pass: process.env.EMAIL_PASSWORD || '',
  },
};

// Fallback to ethereal email for development if no credentials
let testAccount: nodemailer.TestAccount | null = null;

async function getTransporter() {
  // If we don't have email credentials, create a test account
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    console.log('⚠️ Email credentials not found. Using ethereal.email test account');
    if (!testAccount) {
      testAccount = await nodemailer.createTestAccount();
      console.log('Test account created:', testAccount);
    }
    
    return nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
  }
  
  // Use real credentials
  return nodemailer.createTransport(emailConfig);
}

// Email template for bookings
export async function sendBookingEmail(booking: Booking): Promise<{ success: boolean; info?: any; previewUrl?: string }> {
  try {
    const transporter = await getTransporter();
    
    // Format dates
    const startDate = new Date(booking.startDate).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    const returnDate = booking.returnDate 
      ? new Date(booking.returnDate).toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      : 'Not specified';
    
    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || (testAccount ? testAccount.user : 'bookings@gauthamtoursandtravels.com'),
      to: process.env.ADMIN_EMAIL || 'info@gauthamtoursandtravels.com',
      subject: `New Booking: ${booking.tripType} - ${booking.from} to ${booking.to}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background: linear-gradient(90deg, #3b82f6, #f59e0b); padding: 20px; color: white; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">New Booking Request</h1>
            <p style="margin: 5px 0 0;">Gautham Tours and Travels</p>
          </div>
          
          <div style="padding: 20px;">
            <p style="font-size: 16px; color: #4b5563;">A new booking request has been submitted with the following details:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 140px; color: #1e40af;">Trip Type:</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${booking.tripType}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #1e40af;">From:</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${booking.from}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #1e40af;">To:</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${booking.to}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #1e40af;">Start Date:</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${startDate}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #1e40af;">Return Date:</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${returnDate}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #1e40af;">Car Type:</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${booking.carType}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #1e40af;">Contact Number:</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${booking.contactNumber}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #1e40af;">Requirements:</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${booking.additionalRequirements || 'None specified'}</td>
              </tr>
            </table>
            
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; margin-top: 20px;">
              <p style="margin: 0; color: #4b5563;">Please contact the customer as soon as possible to confirm their booking.</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <a href="tel:${booking.contactNumber}" style="display: inline-block; background-color: #3b82f6; color: white; text-decoration: none; padding: 10px 20px; border-radius: 4px; font-weight: bold;">Call Customer</a>
            </div>
          </div>
          
          <div style="padding: 15px; background-color: #f9fafb; text-align: center; font-size: 12px; color: #6b7280;">
            <p style="margin: 0;">This is an automated notification from Gautham Tours and Travels booking system.</p>
            <p style="margin: 5px 0 0;">© ${new Date().getFullYear()} Gautham Tours and Travels. All rights reserved.</p>
          </div>
        </div>
      `,
    };
    
    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Booking notification email sent successfully');
    
    // Return the Ethereal URL if using test account
    if (testAccount) {
      const previewUrl = nodemailer.getTestMessageUrl(info);
      if (previewUrl) {
        console.log('Preview URL:', previewUrl);
        return { success: true, info, previewUrl };
      }
    }
    
    return { success: true, info };
  } catch (error) {
    console.error('❌ Error sending booking notification email:', error);
    return { success: false };
  }
}

// Email template for contact form submissions
export async function sendContactEmail(contact: Contact): Promise<{ success: boolean; info?: any; previewUrl?: string }> {
  try {
    const transporter = await getTransporter();
    
    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || (testAccount ? testAccount.user : 'contact@gauthamtoursandtravels.com'),
      to: process.env.ADMIN_EMAIL || 'info@gauthamtoursandtravels.com',
      subject: `New Contact Message: ${contact.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background: linear-gradient(90deg, #3b82f6, #f59e0b); padding: 20px; color: white; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">New Contact Message</h1>
            <p style="margin: 5px 0 0;">Gautham Tours and Travels</p>
          </div>
          
          <div style="padding: 20px;">
            <p style="font-size: 16px; color: #4b5563;">A new message has been submitted through the contact form:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 140px; color: #1e40af;">Name:</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${contact.name}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #1e40af;">Email:</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${contact.email}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #1e40af;">Phone:</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${contact.phone}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #1e40af;">Subject:</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${contact.subject}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #1e40af;">Message:</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${contact.message}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #1e40af;">Date:</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${new Date(contact.createdAt).toLocaleString()}</td>
              </tr>
            </table>
            
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; margin-top: 20px;">
              <p style="margin: 0; color: #4b5563;">Please respond to this inquiry as soon as possible.</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <a href="mailto:${contact.email}" style="display: inline-block; background-color: #3b82f6; color: white; text-decoration: none; padding: 10px 20px; border-radius: 4px; font-weight: bold; margin-right: 10px;">Reply by Email</a>
              <a href="tel:${contact.phone}" style="display: inline-block; background-color: #10b981; color: white; text-decoration: none; padding: 10px 20px; border-radius: 4px; font-weight: bold;">Call Back</a>
            </div>
          </div>
          
          <div style="padding: 15px; background-color: #f9fafb; text-align: center; font-size: 12px; color: #6b7280;">
            <p style="margin: 0;">This is an automated notification from Gautham Tours and Travels contact system.</p>
            <p style="margin: 5px 0 0;">© ${new Date().getFullYear()} Gautham Tours and Travels. All rights reserved.</p>
          </div>
        </div>
      `,
    };
    
    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Contact notification email sent successfully');
    
    // Return the Ethereal URL if using test account
    if (testAccount) {
      const previewUrl = nodemailer.getTestMessageUrl(info);
      if (previewUrl) {
        console.log('Preview URL:', previewUrl);
        return { success: true, info, previewUrl };
      }
    }
    
    return { success: true, info };
  } catch (error) {
    console.error('❌ Error sending contact notification email:', error);
    return { success: false };
  }
}

// Confirmation email for the customer who made a booking
export async function sendCustomerBookingConfirmation(booking: Booking, customerEmail: string): Promise<{ success: boolean; info?: any; previewUrl?: string }> {
  try {
    const transporter = await getTransporter();
    
    // Format dates
    const startDate = new Date(booking.startDate).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    const returnDate = booking.returnDate 
      ? new Date(booking.returnDate).toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      : 'Not specified';
    
    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || (testAccount ? testAccount.user : 'bookings@gauthamtoursandtravels.com'),
      to: customerEmail,
      subject: `Booking Confirmation - ${booking.from} to ${booking.to}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background: linear-gradient(90deg, #3b82f6, #f59e0b); padding: 20px; color: white; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">Booking Confirmation</h1>
            <p style="margin: 5px 0 0;">Thank you for choosing Gautham Tours and Travels</p>
          </div>
          
          <div style="padding: 20px;">
            <p style="font-size: 16px; color: #4b5563;">Dear Customer,</p>
            <p style="font-size: 16px; color: #4b5563;">Thank you for booking with us. We've received your booking request with the following details:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 140px; color: #1e40af;">Booking ID:</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">#${booking.id}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #1e40af;">Trip Type:</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${booking.tripType}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #1e40af;">From:</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${booking.from}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #1e40af;">To:</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${booking.to}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #1e40af;">Start Date:</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${startDate}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #1e40af;">Return Date:</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${returnDate}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #1e40af;">Car Type:</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${booking.carType}</td>
              </tr>
            </table>
            
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; margin-top: 20px;">
              <p style="margin: 0; color: #4b5563;">Our team will contact you shortly to confirm your booking and discuss further details.</p>
            </div>
            
            <p style="margin-top: 20px; color: #4b5563;">If you have any questions or need to modify your booking, please don't hesitate to call us at <strong>+91 9045450000</strong> or reply to this email.</p>
            
            <p style="margin-top: 20px; color: #4b5563;">We look forward to serving you!</p>
            
            <p style="margin-top: 10px; color: #4b5563;">Best regards,<br>The Gautham Tours and Travels Team</p>
          </div>
          
          <div style="padding: 15px; background-color: #f9fafb; text-align: center; font-size: 12px; color: #6b7280;">
            <p style="margin: 0;">© ${new Date().getFullYear()} Gautham Tours and Travels. All rights reserved.</p>
            <p style="margin: 5px 0 0;">123 Transport Tower, MG Road, New Delhi - 110001</p>
          </div>
        </div>
      `,
    };
    
    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Customer booking confirmation email sent successfully');
    
    // Return the Ethereal URL if using test account
    if (testAccount) {
      const previewUrl = nodemailer.getTestMessageUrl(info);
      if (previewUrl) {
        console.log('Preview URL:', previewUrl);
        return { success: true, info, previewUrl };
      }
    }
    
    return { success: true, info };
  } catch (error) {
    console.error('❌ Error sending customer booking confirmation email:', error);
    return { success: false };
  }
}