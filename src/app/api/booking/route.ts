import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Create transporter
const transporter = nodemailer.createTransporter({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Validate required fields
    const requiredFields = ['serviceType', 'from', 'to', 'date', 'time', 'passengers', 'vehicleType', 'name', 'phone']
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        )
      }
    }

    // Prepare email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
          New Booking Request - Gautham Tours
        </h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e293b; margin-top: 0;">Booking Details</h3>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Service Type:</td>
              <td style="padding: 8px 0; color: #1e293b;">${data.serviceType}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">From:</td>
              <td style="padding: 8px 0; color: #1e293b;">${data.from}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">To:</td>
              <td style="padding: 8px 0; color: #1e293b;">${data.to}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Date:</td>
              <td style="padding: 8px 0; color: #1e293b;">${data.date}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Time:</td>
              <td style="padding: 8px 0; color: #1e293b;">${data.time}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Passengers:</td>
              <td style="padding: 8px 0; color: #1e293b;">${data.passengers}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Vehicle Type:</td>
              <td style="padding: 8px 0; color: #1e293b;">${data.vehicleType}</td>
            </tr>
            ${data.driverLanguage ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Driver Language:</td>
              <td style="padding: 8px 0; color: #1e293b;">${data.driverLanguage}</td>
            </tr>
            ` : ''}
          </table>
        </div>

        <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e293b; margin-top: 0;">Customer Information</h3>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Name:</td>
              <td style="padding: 8px 0; color: #1e293b;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Phone:</td>
              <td style="padding: 8px 0; color: #1e293b;">${data.phone}</td>
            </tr>
            ${data.email ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email:</td>
              <td style="padding: 8px 0; color: #1e293b;">${data.email}</td>
            </tr>
            ` : ''}
          </table>
        </div>

        ${data.requirements ? `
        <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #92400e; margin-top: 0;">Additional Requirements</h3>
          <p style="color: #92400e; margin: 0;">${data.requirements}</p>
        </div>
        ` : ''}

        <div style="background-color: #2563eb; color: white; padding: 15px; border-radius: 8px; text-align: center; margin: 20px 0;">
          <p style="margin: 0; font-weight: bold;">Please contact the customer as soon as possible!</p>
        </div>

        <div style="text-align: center; color: #64748b; font-size: 12px; margin-top: 30px;">
          <p>This email was sent from the Gautham Tours booking system.</p>
          <p>Booking submitted on: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `

    // Send email to owner
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL,
      subject: `New Booking: ${data.serviceType} - ${data.from} to ${data.to}`,
      html: emailContent,
    })

    // Send confirmation email to customer if email provided
    if (data.email) {
      const customerEmailContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            Booking Confirmation - Gautham Tours
          </h2>
          
          <p>Dear ${data.name},</p>
          
          <p>Thank you for choosing Gautham Tours and Travels! We have received your booking request and our team will contact you shortly to confirm the details.</p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Your Booking Summary</h3>
            <p><strong>Service:</strong> ${data.serviceType}</p>
            <p><strong>Route:</strong> ${data.from} to ${data.to}</p>
            <p><strong>Date & Time:</strong> ${data.date} at ${data.time}</p>
            <p><strong>Passengers:</strong> ${data.passengers}</p>
            <p><strong>Vehicle:</strong> ${data.vehicleType}</p>
          </div>
          
          <div style="background-color: #dbeafe; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">What's Next?</h3>
            <ul style="color: #1e40af; margin: 0; padding-left: 20px;">
              <li>Our team will call you within 2 hours to confirm details</li>
              <li>We'll provide you with driver details and vehicle information</li>
              <li>Payment can be made after the trip completion</li>
              <li>We also provide hotel booking and trip planning services</li>
            </ul>
          </div>
          
          <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #166534; margin-top: 0;">Contact Us</h3>
            <p style="color: #166534; margin: 5px 0;"><strong>Phone:</strong> +91 9833401900, +91 8850919298</p>
            <p style="color: #166534; margin: 5px 0;"><strong>Email:</strong> gauthamnadar123@gmail.com</p>
          </div>
          
          <p>Thank you for choosing us for your travel needs!</p>
          
          <p>Best regards,<br>
          <strong>Gautham Tours and Travels Team</strong></p>
        </div>
      `

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: data.email,
        subject: 'Booking Confirmation - Gautham Tours and Travels',
        html: customerEmailContent,
      })
    }

    return NextResponse.json(
      { message: 'Booking submitted successfully!' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Booking submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit booking. Please try again.' },
      { status: 500 }
    )
  }
}