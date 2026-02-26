FROM node:20-alpine AS base

# Install pnpm
RUN npm install -g pnpm

# Install Encore CLI
RUN npm install -g encore.dev@latest

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy application code
COPY . .

# Expose port
EXPOSE 4000

# Start development server
CMD ["encore", "run", "--listen", "0.0.0.0:4000"]
