import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import type { FC } from 'react';

type DashBoardLayoutProps = {
  children: React.ReactNode;
  params: { storeId: string };
};

const DashboardLayout: FC<DashBoardLayoutProps> = async ({ children }) => {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  return <div>{children}</div>;
};

export default DashboardLayout;
