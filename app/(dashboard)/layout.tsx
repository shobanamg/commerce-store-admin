import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import type { FC } from 'react';

import Navbar from '@/components/navbar';
import prismadb from '@/lib/prismadb';

type DashBoardLayoutProps = {
  children: React.ReactNode;
  params: { storeId: string };
};

const DashboardLayout: FC<DashBoardLayoutProps> = async ({ children }) => {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const store = await prismadb.store.findFirst({
    where: {
      userId,
    },
  });

  if (!store) {
    redirect('/');
  }
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default DashboardLayout;
