import nodemailer from 'nodemailer';
import { Booking } from '@shared/schema';

// Create a transporter with SMTP or other configurations
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.example.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER || '',
    pass: process.env.EMAIL_PASSWORD || '',
  },
});

// Email template for new bookings
export const sendBookingNotification = async (booking: Booking): Promise<boolean> => {
  try {
    // Skip sending if we're missing email configuration
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.log('Email configuration missing. Skipping notification email.');
      return false;
    }

    const ownerEmail = process.env.OWNER_EMAIL || 'info@roadtripindia.com';
    
    // Format dates properly
    const startDate = new Date(booking.startDate).toLocaleDateString();
    const returnDate = booking.returnDate 
      ? new Date(booking.returnDate).toLocaleDateString() 
      : 'Not specified';
    
    // Email content for the owner notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: ownerEmail,
      subject: `New Booking: ${booking.tripType} from ${booking.from} to ${booking.to}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #FF6B35;">New Booking Received</h2>
          <p>A new booking has been submitted with the following details:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold; width: 150px;">Trip Type:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${booking.tripType}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">From:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${booking.from}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">To:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${booking.to}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Start Date:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${startDate}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Return Date:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${returnDate}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Car Type:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${booking.carType}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Contact Number:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${booking.contactNumber}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Additional Requirements:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${booking.additionalRequirements || 'None'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Booking Date:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${new Date(booking.createdAt).toLocaleString()}</td>
            </tr>
          </table>
          
          <p>Please respond to the customer as soon as possible to confirm the booking.</p>
          
          <p style="margin-top: 30px; font-size: 12px; color: #777;">
            This is an automated notification from the RoadTrip India booking system.
          </p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Booking notification email sent to the owner');
    return true;
  } catch (error) {
    console.error('Error sending booking notification email:', error);
    return false;
  }
};

// Email template for new contact messages
export const sendContactNotification = async (contact: any): Promise<boolean> => {
  try {
    // Skip sending if we're missing email configuration
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.log('Email configuration missing. Skipping contact notification email.');
      return false;
    }

    const ownerEmail = process.env.OWNER_EMAIL || 'info@roadtripindia.com';
    
    // Email content for the owner notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: ownerEmail,
      subject: `New Contact Message: ${contact.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #FF6B35;">New Contact Message Received</h2>
          <p>A new message has been submitted with the following details:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold; width: 150px;">Name:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${contact.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${contact.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Phone:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${contact.phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Subject:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${contact.subject}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Message:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${contact.message}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Submitted On:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${new Date(contact.createdAt).toLocaleString()}</td>
            </tr>
          </table>
          
          <p>Please respond to this inquiry as soon as possible.</p>
          
          <p style="margin-top: 30px; font-size: 12px; color: #777;">
            This is an automated notification from the RoadTrip India contact system.
          </p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Contact notification email sent to the owner');
    return true;
  } catch (error) {
    console.error('Error sending contact notification email:', error);
    return false;
  }
};