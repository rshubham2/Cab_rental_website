import nodemailer from 'nodemailer';

// Create a transporter with SMTP configuration
const transporter = nodemailer.createTransporter({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER || '',
    pass: process.env.EMAIL_PASSWORD || '',
  },
});

// Email template for new bookings
export const sendBookingEmail = async (booking: any): Promise<{ success: boolean; previewUrl?: string }> => {
  try {
    // Skip sending if we're missing email configuration
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.log('Email configuration missing. Skipping notification email.');
      return { success: false };
    }

    const ownerEmail = process.env.OWNER_EMAIL || 'gauthamnadar123@gmail.com';
    
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
          <h2 style="color: #3B82F6;">New Booking Received</h2>
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
            ${booking.email ? `
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${booking.email}</td>
            </tr>
            ` : ''}
            ${booking.driverLanguage ? `
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Driver Language:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${booking.driverLanguage}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Additional Requirements:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${booking.additionalRequirements || 'None'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Booking Date:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${new Date().toLocaleString()}</td>
            </tr>
          </table>
          
          <p>Please respond to the customer as soon as possible to confirm the booking.</p>
          
          <p style="margin-top: 30px; font-size: 12px; color: #777;">
            This is an automated notification from Gautham Tours and Travels booking system.
          </p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Booking notification email sent to the owner');
    return { success: true };
  } catch (error) {
    console.error('Error sending booking notification email:', error);
    return { success: false };
  }
};

// Email template for new contact messages
export const sendContactEmail = async (contact: any): Promise<{ success: boolean; previewUrl?: string }> => {
  try {
    // Skip sending if we're missing email configuration
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.log('Email configuration missing. Skipping contact notification email.');
      return { success: false };
    }

    const ownerEmail = process.env.OWNER_EMAIL || 'gauthamnadar123@gmail.com';
    
    // Email content for the owner notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: ownerEmail,
      subject: `New Contact Message: ${contact.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #3B82F6;">New Contact Message Received</h2>
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
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${new Date().toLocaleString()}</td>
            </tr>
          </table>
          
          <p>Please respond to this inquiry as soon as possible.</p>
          
          <p style="margin-top: 30px; font-size: 12px; color: #777;">
            This is an automated notification from Gautham Tours and Travels contact system.
          </p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Contact notification email sent to the owner');
    return { success: true };
  } catch (error) {
    console.error('Error sending contact notification email:', error);
    return { success: false };
  }
};

// Customer confirmation email for bookings
export const sendCustomerBookingConfirmation = async (booking: any, customerEmail: string): Promise<{ success: boolean }> => {
  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.log('Email configuration missing. Skipping customer confirmation email.');
      return { success: false };
    }

    const startDate = new Date(booking.startDate).toLocaleDateString();
    const returnDate = booking.returnDate 
      ? new Date(booking.returnDate).toLocaleDateString() 
      : 'Not specified';

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: customerEmail,
      subject: `Booking Confirmation - Gautham Tours and Travels`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #3B82F6;">Booking Confirmation</h2>
          <p>Dear Customer,</p>
          <p>Thank you for choosing Gautham Tours and Travels! Your booking request has been received and is being processed.</p>
          
          <h3 style="color: #3B82F6;">Booking Details:</h3>
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
          </table>
          
          <p>Our team will contact you within 24 hours to confirm the details and provide you with the final quotation.</p>
          
          <h3 style="color: #3B82F6;">Contact Information:</h3>
          <p>
            Phone: +91 9833401900, +91 8850919298, +91 9619455668<br>
            Email: gauthamnadar123@gmail.com
          </p>
          
          <p>Thank you for choosing us for your travel needs!</p>
          
          <p style="margin-top: 30px; font-size: 12px; color: #777;">
            Best regards,<br>
            Gautham Tours and Travels Team
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Customer booking confirmation sent');
    return { success: true };
  } catch (error) {
    console.error('Error sending customer confirmation email:', error);
    return { success: false };
  }
};