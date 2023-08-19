'use client';

import { ClipLoader } from 'react-spinners';

export const Loader = () => {
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center">
      <ClipLoader color="#3498db" size={50} />
    </div>
  );
};
