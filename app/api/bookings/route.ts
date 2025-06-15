import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import nodemailer from 'nodemailer'

const bookingSchema = z.object({
  tripType: z.string().min(1, 'Trip type is required'),
  from: z.string().min(1, 'From location is required'),
  to: z.string().min(1, 'Destination is required'),
  pickupDate: z.string().min(1, 'Pickup date is required'),
  pickupTime: z.string().min(1, 'Pickup time is required'),
  carType: z.string().min(1, 'Car type is required'),
  contactNumber: z.string().min(10, 'Valid contact number is required'),
  email: z.string().email('Please enter a valid email address').optional(),
  driverLanguage: z.string().optional(),
  additionalRequirements: z.string().optional(),
})

const transporter = nodemailer.createTransporter({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER || '',
    pass: process.env.EMAIL_PASSWORD || '',
  },
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const bookingData = bookingSchema.parse(body)
    
    // Send notification email to owner
    if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
      const ownerEmail = process.env.OWNER_EMAIL || 'gauthamnadar123@gmail.com'
      
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: ownerEmail,
        subject: `New Booking: ${bookingData.tripType} from ${bookingData.from} to ${bookingData.to}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #3B82F6;">New Booking Received</h2>
            <p>A new booking has been submitted with the following details:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold; width: 150px;">Trip Type:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${bookingData.tripType}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">From:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${bookingData.from}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">To:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${bookingData.to}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Pickup Date:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${bookingData.pickupDate}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Pickup Time:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${bookingData.pickupTime}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Car Type:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${bookingData.carType}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Contact Number:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${bookingData.contactNumber}</td>
              </tr>
              ${bookingData.email ? `
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${bookingData.email}</td>
              </tr>
              ` : ''}
              ${bookingData.driverLanguage ? `
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Driver Language:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${bookingData.driverLanguage}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Additional Requirements:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${bookingData.additionalRequirements || 'None'}</td>
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
      }

      await transporter.sendMail(mailOptions)
      
      // Send customer confirmation if email provided
      if (bookingData.email) {
        const customerMailOptions = {
          from: process.env.EMAIL_USER,
          to: bookingData.email,
          subject: 'Booking Confirmation - Gautham Tours and Travels',
          html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
              <h2 style="color: #3B82F6;">Booking Confirmation</h2>
              <p>Dear Customer,</p>
              <p>Thank you for choosing Gautham Tours and Travels! Your booking request has been received and is being processed.</p>
              
              <h3 style="color: #3B82F6;">Booking Details:</h3>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold; width: 150px;">Trip Type:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd;">${bookingData.tripType}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">From:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd;">${bookingData.from}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">To:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd;">${bookingData.to}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Pickup Date:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd;">${bookingData.pickupDate}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Pickup Time:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd;">${bookingData.pickupTime}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Car Type:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd;">${bookingData.carType}</td>
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
        }

        await transporter.sendMail(customerMailOptions)
      }
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Booking created successfully! We\'ll contact you shortly to confirm details.'
    })
  } catch (error) {
    console.error('Booking creation error:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: error instanceof Error ? error.message : 'Invalid booking data' 
      },
      { status: 400 }
    )
  }
}