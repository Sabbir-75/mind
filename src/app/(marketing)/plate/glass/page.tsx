"use client"
import { useSearchParams } from 'next/navigation';
import React from 'react';

const Glass = () => {
    const searchParam = useSearchParams()
    const value = searchParam.get("value");
    console.log(value)
    return (
        <div className='text-2xl font-bold'>
            This is glass page for {value}
        </div>
    );
};

export default Glass;