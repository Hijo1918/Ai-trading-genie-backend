# Use the official Node.js 18 image.
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install --production

# Bundle app source
COPY . .

# Build the NestJS app
RUN npm run build

# Set environment variables for production
ENV NODE_ENV=production
EXPOSE 8080

# Start the app
CMD ["npm", "run", "start"]
