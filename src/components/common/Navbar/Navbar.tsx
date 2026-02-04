"use client"

import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"
import { useRouter } from "next/navigation"

export function Navbar() {
    const router = useRouter()
    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger onClick={() => router.push("/blog")} className="cursor-pointer">Blog</MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger onClick={() => router.push("/File")} className="cursor-pointer">File</MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger onClick={() => router.push("/Edit")} className="cursor-pointer">Edit</MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger onClick={() => router.push("/View")} className="cursor-pointer">View</MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger onClick={() => router.push("/Profile")} className="cursor-pointer">Profiles</MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger onClick={() => router.push("/products")} className="cursor-pointer">Products</MenubarTrigger>
            </MenubarMenu>
        </Menubar>
    )
}

