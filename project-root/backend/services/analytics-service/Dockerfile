FROM node:20-alpine

WORKDIR /app

# Copy package files and prisma schema first to optimise layer caching
COPY package*.json ./
COPY prisma ./prisma/

# Install dependencies
RUN npm install

# Generate Prisma Client
RUN npx prisma generate

# Copy rest of the source code
COPY . .

EXPOSE 3005

CMD ["npm", "run", "dev"]
