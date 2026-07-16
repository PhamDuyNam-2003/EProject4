FROM node:20-alpine

WORKDIR /app

# Copy package files and prisma schema first to optimize caching
COPY package*.json ./
COPY prisma ./prisma/

# Install dependencies
RUN npm install

# Generate Prisma Client
RUN npx prisma generate

# Copy the rest of the source code
COPY . .

# Expose port (default 3004)
EXPOSE 3004

# Run development mode using tsx
CMD ["npm", "run", "dev"]
