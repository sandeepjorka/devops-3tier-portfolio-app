# Build stage
FROM node:18 as build

WORKDIR /app

# Copy only dependencies first (for caching)
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Remove old build (IMPORTANT)
RUN rm -rf build

# Build fresh React app
RUN npm run build


# Production stage
FROM nginx:alpine

# Copy only built files
COPY --from=build /app/build /usr/share/nginx/html