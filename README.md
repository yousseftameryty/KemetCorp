# KEMET CORP

A Next.js web application built for Vercel deployment.

## Features

- Modern Next.js 14 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Supabase integration
- Real-time network stats
- Social feed display
- Responsive design

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file (copy from `env.example`):

```env
NEXT_PUBLIC_SUPABASE_URL=https://gqxsrxadgsehcwjhsgor.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_Zb-UfacK3yWOkg2XDo3z6A_R3yXVo6E
```

**Note:** For Vercel deployment, add these environment variables in your Vercel project settings.

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Deployment

This project is configured for Vercel deployment. Simply connect your GitHub repository to Vercel and deploy.

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **Deployment**: Vercel

