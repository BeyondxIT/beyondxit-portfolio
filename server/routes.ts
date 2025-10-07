import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertNewsletterSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Configure nodemailer transporter (using environment variables)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER || process.env.EMAIL_USER,
      pass: process.env.SMTP_PASS || process.env.EMAIL_PASS,
    },
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      
      // Store contact in database
      const contact = await storage.createContact(validatedData);
      
      // Send email notification
      const mailOptions = {
        from: process.env.SMTP_USER || process.env.EMAIL_USER,
        to: process.env.CONTACT_EMAIL || "contact@beyondxit.com",
        subject: `New Contact Form Submission - ${validatedData.serviceInterest}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Phone:</strong> ${validatedData.phone || 'Not provided'}</p>
          <p><strong>Company:</strong> ${validatedData.company || 'Not provided'}</p>
          <p><strong>Service Interest:</strong> ${validatedData.serviceInterest}</p>
          <p><strong>Message:</strong></p>
          <p>${validatedData.message}</p>
        `,
      };

      await transporter.sendMail(mailOptions);
      
      res.json({ 
        success: true, 
        message: "Contact form submitted successfully",
        contactId: contact.id 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      const errorMessage = error instanceof Error ? fromError(error).toString() : "Failed to submit contact form";
      res.status(400).json({ 
        success: false, 
        message: errorMessage
      });
    }
  });

  // Newsletter subscription
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      
      // Check if email already exists
      const existing = await storage.getNewsletterByEmail(validatedData.email);
      if (existing) {
        return res.status(409).json({ 
          success: false, 
          message: "Email already subscribed" 
        });
      }
      
      // Store newsletter subscription
      const newsletter = await storage.createNewsletter(validatedData);
      
      // Send welcome email
      const mailOptions = {
        from: process.env.SMTP_USER || process.env.EMAIL_USER,
        to: validatedData.email,
        subject: "Welcome to BeyondxIT Newsletter",
        html: `
          <h2>Welcome to BeyondxIT!</h2>
          <p>Thank you for subscribing to our newsletter. You'll receive the latest updates and insights about financial technology directly in your inbox.</p>
          <p>Stay tuned for:</p>
          <ul>
            <li>Product updates and new features</li>
            <li>Industry insights and trends</li>
            <li>Educational content about fintech</li>
            <li>Company news and announcements</li>
          </ul>
          <p>Best regards,<br>The BeyondxIT Team</p>
        `,
      };

      await transporter.sendMail(mailOptions);
      
      res.json({ 
        success: true, 
        message: "Successfully subscribed to newsletter",
        subscriptionId: newsletter.id 
      });
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      const errorMessage = error instanceof Error ? fromError(error).toString() : "Failed to subscribe to newsletter";
      res.status(400).json({ 
        success: false, 
        message: errorMessage
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
