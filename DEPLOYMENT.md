# Deployment Guide for Gautham Tours and Travels

This comprehensive guide covers deploying the Gautham Tours and Travels website to various platforms including Vercel, Netlify, and other hosting providers.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Environment Variables](#environment-variables)
- [Vercel Deployment](#vercel-deployment)
- [Netlify Deployment](#netlify-deployment)
- [Database Setup](#database-setup)
- [Email Configuration](#email-configuration)
- [Domain Configuration](#domain-configuration)
- [Monitoring and Analytics](#monitoring-and-analytics)
- [Performance Optimization](#performance-optimization)
- [Security Considerations](#security-considerations)
- [Troubleshooting](#troubleshooting)

## Prerequisites

Before deploying, ensure you have:
- Node.js 18+ installed
- Git repository with your code
- Hosting platform account (Vercel/Netlify)
- Email service provider account
- Database service (optional for production)

## Environment Variables

Create a `.env` file in your project root with the following variables:

### Required Environment Variables

```env
# Database Configuration (Optional - uses in-memory storage by default)
DATABASE_URL=your_database_connection_string

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=gauthamnadar123@gmail.com
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

# Optional: Analytics and Monitoring
GOOGLE_ANALYTICS_ID=your_ga_id
SENTRY_DSN=your_sentry_dsn
```

### Email Configuration Setup

#### Gmail Setup (Recommended)
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
   - Use this password in `EMAIL_PASSWORD`

#### Alternative Email Providers
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

# Yahoo
EMAIL_HOST=smtp.mail.yahoo.com
EMAIL_PORT=587
EMAIL_USER=your_email@yahoo.com
EMAIL_PASSWORD=your_password
```

## Vercel Deployment

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

4. Follow the prompts and configure your project.

### Method 2: GitHub Integration (Recommended)

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your GitHub repository
5. Configure build settings:
   - **Framework Preset**: Other
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### Vercel Environment Variables

In your Vercel dashboard:
1. Go to Project Settings → Environment Variables
2. Add all variables from your `.env` file
3. Set appropriate environments (Production, Preview, Development)

### Vercel Configuration

The project includes a `vercel.json` file with the correct configuration:

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

### Method 1: Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Deploy:
```bash
netlify deploy --prod
```

### Method 2: Git Integration (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Netlify Dashboard](https://app.netlify.com/)
3. Click "New site from Git"
4. Connect your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

### Netlify Configuration

The project includes a `netlify.toml` file:

```toml
[build]
  publish = "dist"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Netlify Environment Variables

1. Go to Site Settings → Environment Variables
2. Add all variables from your `.env` file

## Database Setup

### Option 1: In-Memory Storage (Default)
The application uses in-memory storage by default, which is suitable for demonstration purposes. No additional setup required.

### Option 2: PostgreSQL Database (Production)

#### Neon Database (Recommended)
1. Sign up at [Neon](https://neon.tech/)
2. Create a new project
3. Copy the connection string
4. Add to `DATABASE_URL` environment variable

#### Supabase
1. Sign up at [Supabase](https://supabase.com/)
2. Create a new project
3. Go to Settings → Database
4. Copy the connection string
5. Add to `DATABASE_URL` environment variable

#### Railway
1. Sign up at [Railway](https://railway.app/)
2. Create a new PostgreSQL database
3. Copy the connection string
4. Add to `DATABASE_URL` environment variable

### Database Migration

If using a PostgreSQL database, run migrations:

```bash
npm run db:push
```

## Email Configuration

### Testing Email Locally

For development, you can use Ethereal Email:

```env
EMAIL_HOST=smtp.ethereal.email
EMAIL_PORT=587
EMAIL_USER=your_ethereal_user
EMAIL_PASSWORD=your_ethereal_password
```

### Production Email Setup

For production, use a reliable email service:

1. **Gmail** (Free, limited to 500 emails/day)
2. **SendGrid** (Reliable, good free tier)
3. **Mailgun** (Developer-friendly)
4. **Amazon SES** (Cost-effective for high volume)

## Domain Configuration

### Custom Domain on Vercel

1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed
4. Wait for SSL certificate provisioning

### Custom Domain on Netlify

1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS records
4. Enable HTTPS

### DNS Configuration Example

```
Type: CNAME
Name: www
Value: your-site.vercel.app (or your-site.netlify.app)

Type: A
Name: @
Value: 76.76.19.61 (Vercel) or 75.2.60.5 (Netlify)
```

## Monitoring and Analytics

### Google Analytics

1. Create a Google Analytics account
2. Get your tracking ID
3. Add to environment variables:
```env
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

### Error Monitoring with Sentry

1. Sign up at [Sentry](https://sentry.io/)
2. Create a new project
3. Get your DSN
4. Add to environment variables:
```env
SENTRY_DSN=your_sentry_dsn
```

## Performance Optimization

### Build Optimization

1. **Enable compression** in your hosting platform
2. **Configure caching** for static assets
3. **Enable CDN** for global distribution

### Vercel Performance Features

- Automatic compression and CDN
- Edge functions for API routes
- Image optimization built-in
- Automatic HTTPS

### Netlify Performance Features

- Global CDN included
- Asset optimization
- Form handling built-in
- Automatic HTTPS

## Security Considerations

1. **Environment Variables**: Never commit `.env` files to version control
2. **HTTPS**: Always use HTTPS in production (automatic on Vercel/Netlify)
3. **CORS**: Configure CORS properly for your domain
4. **Rate Limiting**: Implement rate limiting for API endpoints
5. **Input Validation**: Validate all user inputs (already implemented)

## Backup and Recovery

### Code Backups

1. **Git repository** as primary backup
2. **Multiple remotes** (GitHub, GitLab, etc.)
3. **Tagged releases** for version control

### Data Backups

1. **Database backups** through your database provider
2. **Export booking data** regularly if using in-memory storage
3. **Email notifications** as backup records

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version compatibility (use Node 18+)
   - Verify all dependencies are installed
   - Check for TypeScript errors

2. **Environment Variables**
   - Ensure all required variables are set
   - Check variable names for typos
   - Verify values are correct

3. **Email Issues**
   - Verify SMTP credentials
   - Check spam folders
   - Test with different email providers
   - Ensure Gmail App Password is used (not regular password)

4. **Routing Issues**
   - Verify redirect rules are configured
   - Check that SPA routing is enabled

### Debugging Steps

1. Check deployment logs in your hosting platform
2. Verify environment variables are set correctly
3. Test the application locally with production environment variables
4. Check browser console for JavaScript errors
5. Validate email configuration with test emails

### Platform-Specific Troubleshooting

#### Vercel
- Check Function Logs in the dashboard
- Verify build output directory is correct
- Ensure serverless functions are working

#### Netlify
- Check Deploy Logs for build errors
- Verify redirect rules in netlify.toml
- Test form submissions if using Netlify Forms

## Support and Maintenance

### Regular Maintenance Tasks

1. **Update dependencies** monthly
2. **Monitor performance** metrics
3. **Review error logs** weekly
4. **Test email functionality** regularly
5. **Backup data** regularly

### Support Resources

- **Platform Documentation**: Vercel/Netlify docs
- **Community Support**: Stack Overflow, Discord
- **Email Support**: Platform-specific support channels

## Deployment Checklist

Before going live, ensure:

- [ ] All environment variables are set
- [ ] Email configuration is tested
- [ ] Contact forms are working
- [ ] Booking forms are functional
- [ ] Mobile responsiveness is verified
- [ ] Performance is optimized
- [ ] Analytics are configured
- [ ] Domain is configured (if using custom domain)
- [ ] SSL certificate is active
- [ ] Error monitoring is set up

## Post-Deployment

After successful deployment:

1. **Test all functionality** thoroughly
2. **Monitor error logs** for the first few days
3. **Set up monitoring alerts**
4. **Document any custom configurations**
5. **Train team members** on the deployment process

## Conclusion

This deployment guide provides comprehensive instructions for deploying the Gautham Tours and Travels website. The application is designed to be easily deployable on modern hosting platforms with minimal configuration.

For additional support or questions about deployment, refer to the platform-specific documentation or reach out to the development team.

---

**Last Updated**: January 2025
**Version**: 1.0