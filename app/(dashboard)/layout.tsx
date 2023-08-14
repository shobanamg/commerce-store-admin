import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import type { FC } from 'react';

import Navbar from '@/components/navbar';

type DashBoardLayoutProps = {
  children: React.ReactNode;
  params: { storeId: string };
};

const DashboardLayout: FC<DashBoardLayoutProps> = async ({ children }) => {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default DashboardLayout;
