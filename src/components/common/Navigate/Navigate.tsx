"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const Navigate = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    const router = useRouter()
    return (
        <button className='cursor-pointer' onClick={() => router.push(`/products/${children}`)}>
              Product No : {children}
        </button>
    );
};

export default Navigate;