"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const Plate = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    const [input, setInput] = useState("")
    return (
        <div className='space-y-3 py-12'>
            <input type="text" className='border-2 border-fuchsia-600' value={input} onChange={(e) => setInput(e.target.value)} />
            {children}
            <div className='flex gap-3 bg-emerald-600'>
                
                <Link href={{
                    pathname: "/plate/glass",
                    query: { value: input },
                }} className='text-md font-bold text-white px-3 py-1 rounded-[10px] bg-red-600'>Glass</Link>
                <Link href={"/plate/chamos"} className='text-md font-bold text-white px-3 py-1 rounded-[10px] bg-red-600'>Chamos</Link>
                <Link href={"/plate/rice"} className='text-md font-bold text-white px-3 py-1 rounded-[10px] bg-red-600' >Rice</Link>
            </div>
        </div>
    );
};

export default Plate;
// /plate/glass?value=hello
// for template.tsx then every each page will be reset state value