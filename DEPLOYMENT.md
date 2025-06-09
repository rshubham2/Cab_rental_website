# Deployment Guide for Gautham Tours and Travels

This guide covers deploying the Gautham Tours and Travels website to Vercel and Netlify, along with environment setup and configuration.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Environment Variables](#environment-variables)
- [Vercel Deployment](#vercel-deployment)
- [Netlify Deployment](#netlify-deployment)
- [Database Setup](#database-setup)
- [Email Configuration](#email-configuration)
- [Domain Configuration](#domain-configuration)
- [Monitoring and Analytics](#monitoring-and-analytics)

## Prerequisites

Before deploying, ensure you have:
- Node.js 18+ installed
- Git repository with your code
- Vercel or Netlify account
- Email service provider account (Gmail, SendGrid, etc.)
- Database service (if using external database)

## Environment Variables

Create a `.env` file in your project root with the following variables:

### Required Environment Variables

```env
# Database Configuration
DATABASE_URL=your_database_connection_string

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
OWNER_EMAIL=info@gauthamtoursandtravels.com

# Application Configuration
NODE_ENV=production
PORT=5000

# Optional: Analytics and Monitoring
GOOGLE_ANALYTICS_ID=your_ga_id
SENTRY_DSN=your_sentry_dsn
```

### Email Configuration Options

#### Gmail Setup
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
   - Use this password in `EMAIL_PASSWORD`

#### SendGrid Setup
```env
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_USER=apikey
EMAIL_PASSWORD=your_sendgrid_api_key
```

#### Other SMTP Providers
- **Outlook/Hotmail**: smtp-mail.outlook.com:587
- **Yahoo**: smtp.mail.yahoo.com:587
- **Custom SMTP**: Use your provider's settings

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

### Method 2: GitHub Integration

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your GitHub repository
5. Configure build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### Vercel Environment Variables

In your Vercel dashboard:
1. Go to Project Settings → Environment Variables
2. Add all variables from your `.env` file
3. Set appropriate environments (Production, Preview, Development)

### Vercel Configuration

Create `vercel.json` in your project root:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "server/index.ts",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/server/index.ts"
    },
    {
      "src": "/(.*)",
      "dest": "/client/index.html"
    }
  ],
  "env": {
    "NODE_ENV": "production"
  }
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

### Method 2: Git Integration

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Netlify Dashboard](https://app.netlify.com/)
3. Click "New site from Git"
4. Connect your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

### Netlify Configuration

The `netlify.toml` file is already configured in the project:

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

### Netlify Environment Variables

1. Go to Site Settings → Environment Variables
2. Add all variables from your `.env` file

## Database Setup

### Option 1: Neon Database (Recommended)

1. Sign up at [Neon](https://neon.tech/)
2. Create a new project
3. Copy the connection string
4. Add to `DATABASE_URL` environment variable

### Option 2: Supabase

1. Sign up at [Supabase](https://supabase.com/)
2. Create a new project
3. Go to Settings → Database
4. Copy the connection string
5. Add to `DATABASE_URL` environment variable

### Option 3: Railway

1. Sign up at [Railway](https://railway.app/)
2. Create a new PostgreSQL database
3. Copy the connection string
4. Add to `DATABASE_URL` environment variable

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

1. **Gmail** (Free, limited)
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

### Vercel Performance

- Automatic compression and CDN
- Edge functions for API routes
- Image optimization built-in

### Netlify Performance

- Global CDN included
- Asset optimization
- Form handling built-in

## Security Considerations

1. **Environment Variables**: Never commit `.env` files
2. **HTTPS**: Always use HTTPS in production
3. **CORS**: Configure CORS properly for your domain
4. **Rate Limiting**: Implement rate limiting for API endpoints
5. **Input Validation**: Validate all user inputs

## Backup and Recovery

### Database Backups

1. **Automated backups** through your database provider
2. **Manual backups** before major deployments
3. **Test restore procedures** regularly

### Code Backups

1. **Git repository** as primary backup
2. **Multiple remotes** (GitHub, GitLab, etc.)
3. **Tagged releases** for version control

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Check for TypeScript errors

2. **Environment Variables**
   - Ensure all required variables are set
   - Check variable names for typos
   - Verify values are correct

3. **Database Connection**
   - Check connection string format
   - Verify database is accessible
   - Check firewall settings

4. **Email Issues**
   - Verify SMTP credentials
   - Check spam folders
   - Test with different email providers

### Debugging Steps

1. Check deployment logs
2. Verify environment variables
3. Test API endpoints individually
4. Check database connectivity
5. Validate email configuration

## Support and Maintenance

### Regular Maintenance

1. **Update dependencies** monthly
2. **Monitor performance** metrics
3. **Review error logs** weekly
4. **Backup verification** monthly

### Support Channels

- **Documentation**: Refer to this guide
- **Platform Support**: Vercel/Netlify support
- **Community**: Stack Overflow, Discord
- **Professional**: Consider hiring developers for complex issues

## Conclusion

This deployment guide covers the essential steps to deploy your Gautham Tours and Travels website. Remember to:

1. Test thoroughly in staging before production
2. Monitor your application after deployment
3. Keep your dependencies updated
4. Maintain regular backups
5. Monitor performance and user experience

For additional help, refer to the official documentation of your chosen platform or reach out to the development community.