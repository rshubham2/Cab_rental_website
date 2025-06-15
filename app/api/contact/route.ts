import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import nodemailer from 'nodemailer'

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
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
    const contactData = contactSchema.parse(body)
    
    // Send notification email to owner
    if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
      const ownerEmail = process.env.OWNER_EMAIL || 'gauthamnadar123@gmail.com'
      
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: ownerEmail,
        subject: `New Contact Message: ${contactData.subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #3B82F6;">New Contact Message Received</h2>
            <p>A new message has been submitted with the following details:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold; width: 150px;">Name:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${contactData.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${contactData.email}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Phone:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${contactData.phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Subject:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${contactData.subject}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Message:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${contactData.message}</td>
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
      }

      await transporter.sendMail(mailOptions)
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Your message has been sent successfully! We\'ll get back to you soon.'
    })
  } catch (error) {
    console.error('Contact creation error:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: error instanceof Error ? error.message : 'Invalid contact data' 
      },
      { status: 400 }
    )
  }
}