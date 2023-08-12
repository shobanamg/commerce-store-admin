import { auth, UserButton } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react';

import MainNav from '@/components/ui/main-nav';

const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
