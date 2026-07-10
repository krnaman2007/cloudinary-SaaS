# AI-Powered Media SaaS Platform

A full-stack SaaS application for AI-powered image and video transformation, built with Next.js and Cloudinary's AI capabilities. Users can upload media, apply AI-driven transformations (resizing, format conversion), and manage their content through a secure, authenticated dashboard.

## Features

- 🔐 **Authentication** — Secure sign-up/sign-in and session management via Clerk
- 🏠 **Home Dashboard** — Central feed to view and manage uploaded media
- 📐 **Social Share Tool** — AI-powered resizing/cropping of images for social media formats (Instagram, Twitter, etc.)
- 🎥 **Video Upload & Processing** — Upload, compress, and preview videos with Cloudinary's AI-powered optimization
- 🖼️ **Image Upload** — Upload images directly to Cloudinary with automatic optimization
- 📊 **Video Listing** — Fetch and browse previously uploaded videos via dedicated API route
- ☁️ **Cloud Storage** — All media assets stored and served via Cloudinary CDN
- 🗄️ **Persistent Metadata** — User and media metadata stored in PostgreSQL (NeonDB) via Prisma ORM

## Tech Stack

| Layer          | Technology                        |
|----------------|------------------------------------|
| Framework      | Next.js (App Router)               |
| Auth           | Clerk                               |
| Database       | PostgreSQL (NeonDB)                 |
| ORM            | Prisma                              |
| Media Storage  | Cloudinary                          |
| Styling        | Tailwind CSS                        |
| Language       | TypeScript                          |

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm
- A [NeonDB](https://neon.tech) PostgreSQL database
- A [Cloudinary](https://cloudinary.com) account
- A [Clerk](https://clerk.com) application

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/krnaman2007/cloudinary-SaaS
   cd cloudinary-saas
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables (see below)

4. Generate Prisma client and push schema
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. Run the development server
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

Create a `.env` file in the root directory:

```env
# Database (NeonDB — use the pooled connection string for the app, direct for migrations)
DATABASE_URL=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=


NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/

# Cloudinary
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

## Project Structure

```
cloudinary-saas/
├── app/
│   ├── (app)/
│   │   ├── home/
│   │   │   └── page.tsx           # Main dashboard / media feed
│   │   ├── social-share/
│   │   │   └── page.tsx           # Social media format resizing tool
│   │   └── video-upload/
│   │       ├── page.tsx           # Video upload UI
│   │       └── layout.tsx
│   ├── (auth)/
│   │   ├── sign-in/[[...sign-in]]/page.tsx
│   │   └── sign-up/[[...sign-up]]/page.tsx
│   ├── api/
│   │   ├── image-upload/route.ts  # Handles image uploads to Cloudinary
│   │   ├── video-upload/route.ts  # Handles video uploads to Cloudinary
│   │   └── videos/route.ts        # Fetch/list uploaded videos
│   ├── generated/                 # Prisma client custom output
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── VideoCard.tsx              # Video preview/display card
├── lib/
│   └── prisma.ts                  # Prisma client singleton
├── prisma/
│   ├── migrations/
│   └── schema.prisma
├── public/
├── types/
└── .env
```