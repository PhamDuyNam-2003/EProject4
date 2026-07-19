FROM node:20-alpine

WORKDIR /app

# Copy package files first to optimize layer caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the source code
COPY . .

EXPOSE 3006

CMD ["npm", "run", "dev"]
