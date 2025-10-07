# BeyondxIT - Fintech Solutions Platform

## Overview

BeyondxIT is a modern fintech solutions platform that provides mobile financial services (MFS), digital financial services (DFS), eKYC identity verification, and other financial technology solutions. The application is built as a full-stack web application with a marketing/landing page that showcases services, allows contact form submissions, and newsletter subscriptions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

The frontend is built using React with TypeScript and follows a component-based architecture:

- **UI Framework**: React 18+ with TypeScript for type safety
- **Styling**: Tailwind CSS with custom CSS variables for theming, using the shadcn/ui component library (New York style variant)
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation via @hookform/resolvers
- **Build Tool**: Vite for fast development and optimized production builds

**Design Decisions**:
- Single-page application (SPA) architecture with a home page and 404 fallback
- Component composition using shadcn/ui primitives (Radix UI) for accessibility
- CSS-in-JS avoided in favor of utility-first Tailwind CSS
- Custom fonts (Inter and Poppins) loaded from Google Fonts

### Backend Architecture

The backend follows an Express.js server architecture with TypeScript:

- **Runtime**: Node.js with ES modules
- **Web Framework**: Express.js for HTTP server and API routes
- **Development Server**: Vite middleware integration for HMR during development
- **Production Build**: esbuild for server-side code bundling
- **Email Service**: Nodemailer for transactional emails (contact form notifications)
- **Validation**: Zod schemas shared between client and server via the `shared` directory

**Design Decisions**:
- Separation of concerns with dedicated routes file (`server/routes.ts`)
- In-memory storage abstraction (`MemStorage`) allowing for future database integration
- Environment-based configuration for SMTP and email settings
- Middleware for request logging and JSON parsing with raw body capture
- Static file serving in production, Vite dev server in development

### Data Storage Solutions

The application uses a **dual-storage approach**:

- **Development/Demo**: In-memory storage (`MemStorage` class) with Map-based data structures
- **Production-Ready**: Drizzle ORM configured for PostgreSQL with schema defined in `shared/schema.ts`

**Database Schema** (PostgreSQL via Drizzle):
- `users`: User authentication (id, username, password)
- `contacts`: Contact form submissions (id, firstName, lastName, email, phone, company, serviceInterest, message, createdAt)
- `newsletters`: Newsletter subscriptions (id, email, subscribedAt)

**Design Decisions**:
- Storage abstraction pattern (`IStorage` interface) allows swapping between in-memory and database implementations
- Drizzle ORM chosen for type-safe database queries and migrations
- Schema validation using drizzle-zod for runtime type checking
- PostgreSQL dialect with Neon serverless driver for edge-compatible deployments

### Authentication & Authorization

Currently, the application has minimal authentication:

- User schema exists in database but no active authentication flow implemented
- Contact and newsletter endpoints are publicly accessible
- Future implementation would likely add session-based or token-based auth

**Design Considerations**:
- Session storage could use `connect-pg-simple` (already in dependencies)
- User passwords stored in database (would need hashing implementation)

### API Structure

RESTful API endpoints:

- `POST /api/contact`: Submit contact form (stores data + sends email notification)
- `POST /api/newsletter`: Subscribe to newsletter (stores email with uniqueness constraint)

**Design Decisions**:
- JSON request/response format
- Zod schema validation before processing
- Error handling with descriptive messages
- Email notifications sent asynchronously for contact submissions

## External Dependencies

### Third-Party Services

1. **Email Service (SMTP)**
   - Provider: Configurable (defaults to Gmail)
   - Configuration: Environment variables (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS)
   - Purpose: Sending contact form notifications

2. **Database**
   - Provider: Neon (PostgreSQL serverless)
   - Configuration: DATABASE_URL environment variable
   - Driver: @neondatabase/serverless for edge compatibility

3. **Font Services**
   - Provider: Google Fonts
   - Fonts: Inter (sans-serif), Poppins (display), Roboto (fallback)
   - Loading: Link tags in HTML with display=swap optimization

### Key NPM Packages

**Frontend**:
- `@tanstack/react-query`: Server state management and caching
- `@radix-ui/*`: Accessible UI primitive components (via shadcn/ui)
- `react-hook-form` + `@hookform/resolvers`: Form handling and validation
- `zod`: Runtime type validation
- `wouter`: Lightweight routing
- `tailwindcss`: Utility-first CSS framework
- `date-fns`: Date formatting and manipulation

**Backend**:
- `express`: Web server framework
- `drizzle-orm` + `drizzle-kit`: Type-safe ORM and migration tools
- `nodemailer`: Email sending
- `zod-validation-error`: Friendly validation error messages

**Development**:
- `vite`: Build tool and dev server
- `typescript`: Type checking
- `tsx`: TypeScript execution for development
- `esbuild`: Production server bundling
- Replit-specific plugins for development experience

### Environment Variables Required

```
DATABASE_URL          # PostgreSQL connection string
SMTP_HOST            # SMTP server hostname
SMTP_PORT            # SMTP server port
SMTP_USER            # SMTP authentication username
SMTP_PASS            # SMTP authentication password
EMAIL_USER           # Fallback for SMTP_USER
EMAIL_PASS           # Fallback for SMTP_PASS
CONTACT_EMAIL        # Recipient for contact form notifications
NODE_ENV             # development|production
```