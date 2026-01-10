"use client"
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import { useRouter } from 'next/navigation';
import React from 'react';

const page = () => {
    const router = useRouter()
    return (
        <div>
       <h1>File 1</h1>
            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger onClick={() => router.push("/File")} className="cursor-pointer">Go to File</MenubarTrigger>
                </MenubarMenu>
            </Menubar>
        </div>

    );
};

export default page;