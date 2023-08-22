import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

import prismadb from '@/lib/prismadb';

export const isUserStore = async (storeId: string) => {
  const { userId } = auth();

  if (!userId) {
    return new NextResponse('Unauthenticated', { status: 403 });
  }

  if (!storeId) {
    return new NextResponse('Store id is required', { status: 400 });
  }

  const storeByUserId = await prismadb.store.findFirst({
    where: {
      id: storeId,
      userId,
    },
  });

  if (!storeByUserId) {
    return new NextResponse('Unauthorized', { status: 405 });
  }

  return true;
};
