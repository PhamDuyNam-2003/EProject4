import { prisma } from '@/config/prisma.js';

export const createPromotion = async (data: any) => {
  return await prisma.promotion.create({ data });
};

export const validateVoucher = async (code: string, originalPrice: number) => {
  const voucher = await prisma.promotion.findUnique({ where: { code } });

  if (!voucher || !voucher.isActive) {
    throw new Error('Voucher không tồn tại hoặc đã bị vô hiệu hóa');
  }

  const now = new Date();
  if (now < new Date(voucher.startDate) || now > new Date(voucher.endDate)) {
    throw new Error('Voucher đã hết hạn sử dụng hoặc chưa đến thời gian áp dụng');
  }

  let discountAmount = 0;
  if (voucher.discountType === 'PERCENT') {
    discountAmount = (originalPrice * voucher.discountValue.toNumber()) / 100;
    if (voucher.maxDiscount && discountAmount > voucher.maxDiscount.toNumber()) {
      discountAmount = voucher.maxDiscount.toNumber();
    }
  } else if (voucher.discountType === 'FIXED_AMOUNT') {
    discountAmount = voucher.discountValue.toNumber();
  }

  if (discountAmount > originalPrice) discountAmount = originalPrice;

  const finalPrice = originalPrice - discountAmount;

  return {
    code: voucher.code,
    discountType: voucher.discountType,
    discountAmount,
    finalPrice
  };
};