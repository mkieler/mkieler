# Build stage
FROM node:20-alpine AS builder

# Install pnpm
RUN corepack enable && corepack prepare pnpm@10.18.0 --activate

WORKDIR /app

# Copy dependency files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy source code
COPY . .

# Generate static site
RUN npm run generate

# Production stage - serve static files with nginx
FROM nginx:alpine

# Copy generated static files to nginx
COPY --from=builder /app/.output/public /usr/share/nginx/html

# Copy nginx config for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]