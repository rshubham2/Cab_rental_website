# Deployment Guide for Gautham Tours and Travels

This guide covers deploying the simplified React application with SMTP email functionality to various platforms.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Environment Variables](#environment-variables)
- [Vercel Deployment](#vercel-deployment)
- [Netlify Deployment](#netlify-deployment)
- [Replit Deployment](#replit-deployment)
- [Email Configuration](#email-configuration)
- [Troubleshooting](#troubleshooting)

## Prerequisites

Before deploying, ensure you have:
- Node.js 18+ installed
- Git repository with your code
- Email service provider account (Gmail recommended)
- Hosting platform account

## Environment Variables

Create a `.env` file in your project root with the following variables:

### Required Environment Variables

```env
# Email Configuration (Required)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_gmail_app_password
OWNER_EMAIL=gauthamnadar123@gmail.com

# Application Configuration
NODE_ENV=production
PORT=5000

# Contact Information
CONTACT_PHONE_1=9833401900
CONTACT_PHONE_2=8850919298
CONTACT_PHONE_3=9619455668
CONTACT_EMAIL=gauthamnadar123@gmail.com
```

## Email Configuration

### Gmail Setup (Recommended)

1. **Enable 2-factor authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
   - Use this password in `EMAIL_PASSWORD`

### Alternative Email Providers

```env
# SendGrid
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_USER=apikey
EMAIL_PASSWORD=your_sendgrid_api_key

# Outlook/Hotmail
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
EMAIL_USER=your_email@outlook.com
EMAIL_PASSWORD=your_password
```

## Vercel Deployment

### Method 1: GitHub Integration (Recommended)

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your GitHub repository
5. Configure build settings:
   - **Framework Preset**: Other
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### Environment Variables in Vercel

1. Go to Project Settings → Environment Variables
2. Add all variables from your `.env` file
3. Set for Production, Preview, and Development environments

### Vercel Configuration

Create `vercel.json`:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/api/server.js"
    },
    {
      "handle": "filesystem"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

## Netlify Deployment

### Method 1: Git Integration

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Netlify Dashboard](https://app.netlify.com/)
3. Click "New site from Git"
4. Connect your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

### Netlify Configuration

Create `netlify.toml`:

```toml
[build]
  publish = "dist"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Environment Variables in Netlify

1. Go to Site Settings → Environment Variables
2. Add all variables from your `.env` file

## Replit Deployment

### For Replit Users

1. **Fork or Import** the repository to Replit
2. **Set Environment Variables**:
   - Go to Secrets tab in Replit
   - Add all environment variables from `.env.example`
3. **Configure Run Command**:
   - Ensure `.replit` file has: `run = "npm run dev"`
4. **Install Dependencies**:
   ```bash
   npm install
   ```
5. **Start the Application**:
   ```bash
   npm run dev
   ```

### Replit Configuration

The `.replit` file should contain:

```toml
modules = ["nodejs-20", "web"]
run = "npm run dev"
hidden = [".config", ".git", "node_modules", "dist"]

[nix]
channel = "stable-24_05"

[deployment]
deploymentTarget = "autoscale"
build = ["npm", "run", "build"]
run = ["npm", "run", "start"]

[[ports]]
localPort = 5000
externalPort = 80

[workflows]
runButton = "Project"

[[workflows.workflow]]
name = "Project"
mode = "parallel"
author = "agent"

[[workflows.workflow.tasks]]
task = "workflow.run"
args = "Start application"

[[workflows.workflow]]
name = "Start application"
author = "agent"

[[workflows.workflow.tasks]]
task = "shell.exec"
args = "npm run dev"
waitForPort = 5000
```

## Application Architecture

### Simplified Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── sections/      # Section components
│   │   └── hooks/         # Custom React hooks
├── server/                # Backend Express application
│   ├── index.ts           # Server entry point
│   ├── routes-simple.ts   # API routes
│   ├── mailer-simple.ts   # Email service
│   └── vite.ts           # Vite configuration
└── shared/               # Shared types (minimal)
```

### Key Features

- **No Database**: All data is sent via email
- **SMTP Integration**: Forms send emails directly
- **Simple API**: Only booking and contact endpoints
- **React Frontend**: Modern UI with Tailwind CSS
- **TypeScript**: Type safety throughout

## Testing Email Functionality

### Local Testing

1. **Set up environment variables**
2. **Start the development server**:
   ```bash
   npm run dev
   ```
3. **Test forms** on `http://localhost:5000`
4. **Check email delivery** in your configured email account

### Production Testing

1. **Deploy to your chosen platform**
2. **Verify environment variables** are set correctly
3. **Test all forms** on the live site
4. **Monitor email delivery**

## Troubleshooting

### Common Issues

1. **Email Not Sending**
   - Verify SMTP credentials
   - Check Gmail App Password (not regular password)
   - Ensure 2FA is enabled for Gmail
   - Check spam folders

2. **Build Failures**
   - Verify Node.js version (18+)
   - Check for TypeScript errors
   - Ensure all dependencies are installed

3. **Environment Variables**
   - Verify all required variables are set
   - Check for typos in variable names
   - Ensure values don't have extra spaces

4. **WebSocket Errors (Development)**
   - These are normal in development
   - Don't affect production builds
   - Can be ignored for deployment

### Platform-Specific Issues

#### Vercel
- Check Function Logs for errors
- Verify build output directory
- Ensure API routes are working

#### Netlify
- Check Deploy Logs for build errors
- Verify redirect rules
- Test form submissions

#### Replit
- Ensure all secrets are set
- Check console for errors
- Verify port configuration

## Performance Optimization

1. **Enable compression** on hosting platform
2. **Configure caching** for static assets
3. **Optimize images** (already using external URLs)
4. **Enable CDN** (automatic on Vercel/Netlify)

## Security Considerations

1. **Environment Variables**: Never commit `.env` files
2. **HTTPS**: Automatic on modern platforms
3. **Input Validation**: Implemented with Zod
4. **Rate Limiting**: Consider adding for production

## Monitoring

### Email Delivery

1. **Test regularly** to ensure emails are being sent
2. **Monitor spam folders** for delivery issues
3. **Set up email alerts** for failed deliveries

### Application Health

1. **Use platform monitoring** tools
2. **Check error logs** regularly
3. **Monitor form submission success rates**

## Support

For deployment issues:
- **Vercel**: [Vercel Documentation](https://vercel.com/docs)
- **Netlify**: [Netlify Documentation](https://docs.netlify.com/)
- **Replit**: [Replit Documentation](https://docs.replit.com/)

## Migration from Complex Setup

If migrating from a database-heavy setup:

1. **Remove database dependencies**
2. **Simplify API routes** to only handle email
3. **Update environment variables**
4. **Test email functionality**
5. **Deploy to chosen platform**

This simplified setup is perfect for small businesses that need:
- Contact forms
- Booking requests
- Email notifications
- No complex data storage requirements

---

**Last Updated**: January 2025
**Version**: 2.0 (Simplified)