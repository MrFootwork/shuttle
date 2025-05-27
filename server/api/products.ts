import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async _event => {
  const products = await prisma.product.findMany()
  return products
})
