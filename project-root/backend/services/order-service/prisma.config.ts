import { defineConfig } from '@prisma/config'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(process.cwd(), '.env.dev') })

export default defineConfig({
  earlyAccess: true,
  datasource: {
    url: process.env.DATABASE_URL
  }
})
