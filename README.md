# Gautham Tours and Travels - Premium Cab Services

A modern, responsive web application for Gautham Tours and Travels, offering premium chauffeur-driven cab services across Maharashtra and beyond.

## 🚗 Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Booking System**: Easy-to-use booking forms for various travel needs
- **Fleet Management**: Showcase of available vehicles with detailed information
- **Contact Forms**: Multiple ways for customers to get in touch
- **Testimonials**: Customer reviews and ratings
- **One-Way Fares**: Transparent pricing for popular routes
- **Particle Effects**: Enhanced visual appeal with animated backgrounds

## 🛠 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Wouter** for routing
- **React Hook Form** with Zod validation
- **Tanstack Query** for data fetching
- **Lucide React** for icons
- **Radix UI** components
- **Custom Particle System** for visual effects

### Backend
- **Node.js** with Express
- **TypeScript** for type safety
- **Drizzle ORM** for database operations
- **Zod** for schema validation
- **Nodemailer** for email services

### Development Tools
- **Vite** for fast development and building
- **ESLint** and **Prettier** for code quality
- **Husky** for git hooks

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── sections/      # Section components for home page
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions and configurations
│   │   └── index.css      # Global styles and animations
├── server/                # Backend Express application
│   ├── routes.ts          # API route definitions
│   ├── storage.ts         # Data storage layer
│   ├── emailService.ts    # Email service configuration
│   └── index.ts           # Server entry point
├── shared/                # Shared types and schemas
│   └── schema.ts          # Database schemas and validation
└── docs/                  # Documentation
    └── DEPLOYMENT.md      # Deployment guide
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/gautham-tours-travels.git
   cd gautham-tours-travels
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your configuration:
   ```env
   # Database
   DATABASE_URL=your_database_url
   
   # Email Configuration
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASSWORD=your_app_password
   OWNER_EMAIL=info@gauthamtoursandtravels.com
   
   # Application
   NODE_ENV=development
   PORT=5000
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5000`

## 📱 Pages and Features

### Main Pages
- **Home** (`/`) - Landing page with hero section, features, and booking form
- **About** (`/about`) - Company information, mission, and values
- **Services** (`/services`) - Detailed service offerings
- **Fleet** (`/fleet`) - Vehicle showcase with specifications
- **Testimonials** (`/testimonials`) - Customer reviews and ratings
- **One-Way Fares** (`/one-way-fares`) - Pricing for popular routes
- **Contact** (`/contact`) - Contact information and inquiry form
- **Booking** (`/booking`) - Comprehensive booking form

### Key Features
- **Responsive Navigation** with dropdown menus
- **Particle Background Effects** for enhanced visual appeal
- **Smooth Animations** and hover effects
- **Form Validation** with real-time feedback
- **Email Notifications** for bookings and inquiries
- **Mobile-First Design** approach
- **SEO Optimized** with proper meta tags

## 🎨 Design System

### Colors
- **Primary**: Blue (#3B82F6) - Trust and reliability
- **Secondary**: Orange (#FF6B35) - Energy and enthusiasm
- **Success**: Green (#10B981) - Positive actions
- **Gray Scale**: Various shades for text and backgrounds

### Typography
- **Headings**: Sans-serif font family
- **Body**: Clean, readable typography
- **Consistent spacing** using 8px grid system

### Components
- **Cards**: Elevated surfaces with shadows
- **Buttons**: Multiple variants (primary, secondary, outline)
- **Forms**: Consistent styling with validation states
- **Icons**: Lucide React icon library

## 📧 Email Configuration

The application supports multiple email providers:

### Gmail Setup
1. Enable 2-factor authentication
2. Generate an App Password
3. Use in EMAIL_PASSWORD environment variable

### SendGrid Setup
```env
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_USER=apikey
EMAIL_PASSWORD=your_sendgrid_api_key
```

### Other Providers
- Outlook: smtp-mail.outlook.com:587
- Yahoo: smtp.mail.yahoo.com:587
- Custom SMTP servers supported

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Configure environment variables
3. Deploy automatically on push

### Netlify
1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Manual Deployment
```bash
npm run build
npm start
```

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Bundle Size**: Optimized with code splitting
- **Image Optimization**: Responsive images with proper formats

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - Type checking
- `npm run db:push` - Push database schema

### Code Quality
- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type safety
- **Husky** for pre-commit hooks

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and inquiries:
- **Email**: info@gauthamtoursandtravels.com
- **Phone**: +91 96194556608
- **Website**: [gauthamtoursandtravels.com](https://gauthamtoursandtravels.com)

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Radix UI** for accessible component primitives
- **Lucide** for beautiful icons
- **Vercel** for excellent hosting platform

---

**Built with ❤️ for Gautham Tours and Travels**