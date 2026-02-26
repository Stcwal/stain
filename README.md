# Web App

A simple web application with TypeScript backend (Encore framework) and HTMX frontend.

## Tech Stack

- **Backend**: Encore.dev (TypeScript)
- **Frontend**: HTMX
- **Package Manager**: pnpm
- **Containerization**: Docker Compose

## Getting Started

### Prerequisites

- Docker and Docker Compose
- pnpm (optional, for local development)

### Running with Docker Compose

```bash
# Start the application
docker-compose up --build

# Start in detached mode
docker-compose up -d --build

# Stop the application
docker-compose down
```

The application will be available at `http://localhost:3000`

### Available Pages

- Home: `http://localhost:3000/`
- About: `http://localhost:3000/about`
- Contact: `http://localhost:3000/contact`

## Development

The backend supports hot-reload in development mode. Changes to the code will automatically restart the server.

### Local Development (without Docker)

```bash
# Install dependencies
cd backend
pnpm install

# Run development server
pnpm dev
```

## Project Structure

```
.
├── backend/              # Encore TypeScript backend
│   ├── pages/           # Page routes and API endpoints
│   ├── package.json     # Backend dependencies
│   ├── tsconfig.json    # TypeScript configuration
│   └── Dockerfile       # Backend Docker configuration
├── docker-compose.yml   # Docker Compose configuration
└── README.md           # This file
```
