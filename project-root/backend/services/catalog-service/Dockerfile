FROM node:22-alpine

WORKDIR /app

# Copy package.json and tsconfig.json
COPY package*.json ./
COPY tsconfig.json ./

# Install dependencies
RUN npm install

# Copy source code and prisma
COPY src ./src
COPY prisma ./prisma
COPY prisma.config.js ./

# Generate Prisma Client
RUN npx prisma generate

EXPOSE 3005

CMD ["npm", "run", "dev"]
