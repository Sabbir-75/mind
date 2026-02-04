"use client"
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import { useRouter } from 'next/navigation';
import React from 'react';

const page = () => {
    const router = useRouter()
    return (
        <div>
            <h1>File</h1>
            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger onClick={() => router.push("/File/File1")} className="cursor-pointer">File 1</MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger onClick={() => router.push("/File/File2")} className="cursor-pointer">File 2</MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger onClick={() => router.push("/")} className="cursor-pointer">Go to Home page</MenubarTrigger>
                </MenubarMenu>
            </Menubar>

        </div>
    );
};

export default page;