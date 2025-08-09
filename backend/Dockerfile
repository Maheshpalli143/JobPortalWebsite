# Use a lightweight Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json separately for better caching
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy the rest of the application
COPY . .

# Expose the backend port
EXPOSE 5000

# Start the backend server
CMD ["npm", "start"]

