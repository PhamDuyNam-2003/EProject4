FROM node:20-alpine

WORKDIR /app

# Install dependencies first for caching
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Generate Prisma client and compile typescript
RUN npx prisma generate
RUN npm run build

EXPOSE 3001

CMD ["npm", "start"]
