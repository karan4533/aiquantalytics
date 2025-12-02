import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  const { name, phone, email, message } = req.body || {}

  if (!name || !phone || !email || !message) {
    return res.status(400).json({ success: false, message: 'Missing required fields' })
  }

  // Check if required environment variables are set
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.CONTACT_TO_PRIMARY) {
    console.error('Missing required environment variables:', {
      SMTP_HOST: !!process.env.SMTP_HOST,
      SMTP_USER: !!process.env.SMTP_USER,
      SMTP_PASS: !!process.env.SMTP_PASS,
      CONTACT_TO_PRIMARY: !!process.env.CONTACT_TO_PRIMARY,
    })
    return res.status(500).json({ 
      success: false, 
      message: 'Server configuration error. Please contact support.' 
    })
  }

  try {
    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const htmlBody = `
      <h2>New Contact Query from AIQuantalytics Website</h2>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</li>
      </ul>
    `

    const mailOptions = {
      from: `"Website Form" <${process.env.SMTP_USER}>`,
      to: [
        process.env.CONTACT_TO_PRIMARY,
        process.env.CONTACT_TO_SECONDARY,
      ].filter(Boolean),
      subject: 'New Contact Query - AIQuantalytics',
      html: htmlBody,
    }

    await transporter.sendMail(mailOptions)

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      response: error.response,
      envCheck: {
        SMTP_HOST: !!process.env.SMTP_HOST,
        SMTP_USER: !!process.env.SMTP_USER,
        SMTP_PASS: !!process.env.SMTP_PASS,
        CONTACT_TO_PRIMARY: !!process.env.CONTACT_TO_PRIMARY,
        CONTACT_TO_SECONDARY: !!process.env.CONTACT_TO_SECONDARY,
      }
    })
    return res.status(500).json({ 
      success: false, 
      message: error.message || 'Error sending email',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    })
  }
}


