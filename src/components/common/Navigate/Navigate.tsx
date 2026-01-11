"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const Navigate = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    const router = useRouter()
    return (
        <button className='cursor-pointer hover:border-2 border-2 border-transparent hover:border-pink-600 duration-200 rounded-md px-3 py-2' onClick={() => router.push(`/products/${children}`)}>
              Product No : {children}
        </button>
    );
};

export default Navigate;