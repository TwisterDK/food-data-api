# Use an ARM-compatible base image
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the application (for TypeScript projects)
RUN npm run build

# Expose the app port
EXPOSE 19200

# Run the app
CMD ["npm", "start"]
