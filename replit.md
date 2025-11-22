# Hawaii Running Project - Web Application

## Overview

Hawaii Running Project is a community-focused nonprofit organization (501(c)(3)) dedicated to promoting health and wellness through running programs across Hawaii. The web application serves as the primary digital presence for the organization, providing information about weekly runs, membership options, coaching services, sponsors, and donation opportunities.

The application is built as a modern single-page application (SPA) using React and Vite, with a focus on clean design, mobile responsiveness, and user engagement. It features a Hawaiian-inspired design system with tropical colors and gradients that reflect the organization's island heritage.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite (configured for SPA mode)
- **Routing**: React Router DOM for client-side navigation
- **UI Components**: Custom component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom Hawaiian-inspired design tokens
- **State Management**: TanStack React Query for data fetching (though currently minimal backend interaction)

**Design System:**
The application uses a comprehensive design system with:
- Custom color palette inspired by Hawaiian landscapes (ocean blues, tropical greens, sunset oranges)
- Two primary font families: Inter (sans-serif) and Poppins (display)
- Predefined gradients for visual consistency
- Reusable UI components from shadcn/ui (accordion, alert, button, card, etc.)
- CSS variables for theming and dark mode support via next-themes

**Component Organization:**
- Page components in `client/src/pages/` (Home, About, Schedule, Join, Store, Coaching, Sponsors, Donate, NotFound)
- Feature components in `client/src/components/` (Hero, About, Programs, Events, JoinUs, etc.)
- Reusable UI primitives in `client/src/components/ui/`
- Each page wraps a corresponding feature component with proper layout

**Routing Structure:**
- `/` - Home page with hero section and quick access cards
- `/about` - Organization information, mission, and board members
- `/schedule` - Weekly workout schedule across different locations
- `/join` - Membership tiers and signup information
- `/store` - Links to HRP and partner merchandise stores
- `/coaching` - Professional coaching and physical therapy services
- `/sponsors` - Sponsor information and partnership details
- `/donate` - Donation page with tax-deductible information
- `*` - 404 Not Found page with navigation back to home

### Backend Architecture

**Server Setup:**
The application includes a minimal Express.js server primarily for development and build serving:
- Express middleware for JSON parsing and URL encoding
- Request logging for API endpoints
- Vite development server integration for hot module replacement
- Static file serving for production builds
- Error handling middleware

**Current State:**
- The backend is currently minimal with placeholder routes (`server/routes.ts`)
- In-memory storage interface defined (`server/storage.ts`) but not actively used
- No database integration currently implemented
- Application is primarily frontend-focused with external service integrations

**Development vs Production:**
- Development mode uses Vite's middleware mode with HMR
- Production mode serves static files from `dist/public`
- Server listens on port 5000 with host binding to 0.0.0.0

### Data Storage Solutions

**Current Approach:**
- No persistent data storage implemented
- All content is hardcoded in components
- External data accessed via links to third-party services (RunSignUp for store and donations)

**Future Considerations:**
- The architecture includes placeholders for database integration via the storage interface
- Schema definitions ready in `shared/schema.ts` using Zod for type validation
- Could easily integrate a database (e.g., Postgres with Drizzle ORM) if dynamic content management is needed

### External Dependencies

**Third-Party Services:**
1. **RunSignUp**: Used for membership management, online store, and donation processing
   - Store: `https://runsignup.com/Club/Store/HI/Honolulu/HawaiiRunningProject`
   - Donations: `https://runsignup.com/Club/Donate/HI/Honolulu/HawaiiRunningProject`

2. **HOKA**: Sponsor partnership for run club and merchandise
   - HOKA Store location at Ala Moana

3. **Queen Kapiolani Hotel**: Sponsor partnership for accommodations and event hosting
   - Website: `https://www.queenkapiolani.com/packages.htm`

4. **Road Runners Club of America (RRCA)**: Parent organization providing 501(c)(3) status
   - Enables tax-deductible donations

5. **Social Media Platforms**:
   - Facebook: Primary community engagement platform
   - Instagram and Twitter: Listed but links not fully configured

**Development Tools:**
- Lovable: Project development platform (referenced in README)
- ESLint with TypeScript support for code quality
- PostCSS with Tailwind and Autoprefixer for styling

**UI Component Libraries:**
- Radix UI: Accessible component primitives (27+ components)
- Lucide React: Icon library
- React Hook Form with Zod resolvers for form handling
- date-fns for date manipulation
- embla-carousel-react for carousel functionality
- cmdk for command palette
- class-variance-authority and clsx for conditional styling

**Key Design Decisions:**
1. **SPA Architecture**: Chosen for fast navigation and smooth user experience without page reloads
2. **External Service Integration**: Leveraging RunSignUp reduces custom backend complexity for e-commerce and donations
3. **Component-First Development**: Modular component structure enables easy updates and maintenance
4. **Mobile-First Responsive Design**: Tailwind breakpoints ensure proper display across all devices
5. **TypeScript with Relaxed Strictness**: Type safety enabled but with pragmatic configuration (`strict: false`) to balance development speed
6. **Vite for Build Tool**: Fast HMR and optimized production builds compared to traditional webpack setups