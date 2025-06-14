# Deployment Guide for Gautham Tours and Travels (Next.js)

This guide covers deploying the Next.js version of Gautham Tours and Travels website to Vercel and other platforms.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Environment Variables](#environment-variables)
- [Vercel Deployment](#vercel-deployment)
- [Netlify Deployment](#netlify-deployment)
- [Email Configuration](#email-configuration)
- [Domain Configuration](#domain-configuration)
- [Troubleshooting](#troubleshooting)

## Prerequisites

- Node.js 18+ installed
- Git repository with your code
- Hosting platform account (Vercel/Netlify)
- Gmail account for email service

## Environment Variables

Create a `.env.local` file in your project root:

```env
# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=true
EMAIL_USER=shubhamrane290@gmail.com
EMAIL_PASSWORD=llio oziw exkw vstc
OWNER_EMAIL=shubhamrane290@gmail.com
ADMIN_EMAIL=shubhamrane290@gmail.com
ADMIN_NAME=Gautham Nadar

# Application Configuration
NODE_ENV=production
PORT=3000

# Contact Information
CONTACT_PHONE_1=9833401900
CONTACT_PHONE_2=8850919298
CONTACT_PHONE_3=9619455668
CONTACT_EMAIL=gauthamnadar123@gmail.com
```

## Vercel Deployment (Recommended)

### Method 1: Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

### Method 2: GitHub Integration

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js configuration

### Environment Variables in Vercel

1. Go to Project Settings → Environment Variables
2. Add all variables from your `.env.local` file
3. Set for Production, Preview, and Development environments

## Netlify Deployment

### Method 1: Git Integration

1. Push code to GitHub/GitLab/Bitbucket
2. Go to [Netlify Dashboard](https://app.netlify.com/)
3. Click "New site from Git"
4. Connect your repository
5. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`

### Netlify Configuration

Create `netlify.toml`:

```toml
[build]
  publish = ".next"
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

## Email Configuration

### Gmail Setup

1. Enable 2-factor authentication on Gmail
2. Generate App Password:
   - Google Account → Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
   - Use this password in `EMAIL_PASSWORD`

### Testing Email Locally

```bash
npm run dev
```

Test the booking form to ensure emails are being sent.

## Domain Configuration

### Custom Domain on Vercel

1. Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed
4. SSL certificate is automatic

### DNS Configuration Example

```
Type: CNAME
Name: www
Value: your-project.vercel.app

Type: A
Name: @
Value: 76.76.19.61
```

## Performance Optimization

### Next.js Features

- Automatic code splitting
- Image optimization with `next/image`
- Static generation for better performance
- API routes for backend functionality

### Build Optimization

```bash
npm run build
npm run start
```

## Security Considerations

1. **Environment Variables**: Never commit `.env.local` to version control
2. **API Routes**: Validate all inputs in API routes
3. **HTTPS**: Always use HTTPS in production (automatic on Vercel)
4. **Rate Limiting**: Consider implementing rate limiting for API endpoints

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version (use 18+)
   - Verify all dependencies are installed
   - Check for TypeScript errors

2. **Email Issues**
   - Verify Gmail App Password (not regular password)
   - Check environment variables are set correctly
   - Test with different email providers if needed

3. **API Route Issues**
   - Check API route file structure (`src/app/api/*/route.ts`)
   - Verify environment variables in production
   - Check server logs for errors

### Debugging Steps

1. Check deployment logs in Vercel/Netlify dashboard
2. Verify environment variables are set correctly
3. Test API routes locally first
4. Check browser console for client-side errors

### Email Debugging

```javascript
// Add to API route for debugging
console.log('Email config:', {
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  user: process.env.EMAIL_USER,
  // Don't log password
})
```

## Deployment Checklist

Before going live:

- [ ] All environment variables are set
- [ ] Email configuration is tested
- [ ] Booking form works correctly
- [ ] Contact form sends emails
- [ ] Mobile responsiveness verified
- [ ] Performance optimized
- [ ] Domain configured (if using custom domain)
- [ ] SSL certificate active

## Post-Deployment

1. **Test all functionality** thoroughly
2. **Monitor error logs** for the first few days
3. **Set up monitoring** (Vercel Analytics, etc.)
4. **Test email delivery** to different providers

## Support

For deployment issues:
- **Vercel**: [Vercel Documentation](https://vercel.com/docs)
- **Netlify**: [Netlify Documentation](https://docs.netlify.com)
- **Next.js**: [Next.js Documentation](https://nextjs.org/docs)

---

**Last Updated**: January 2025
**Framework**: Next.js 14
**Deployment**: Vercel (Recommended)