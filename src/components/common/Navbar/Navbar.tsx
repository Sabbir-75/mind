"use client"

import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"
import { usePathname, useRouter } from "next/navigation"

const navlink = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Blog",
        path: "/blog"
    },
    {
        name: "File",
        path: "/File"
    },
    {
        name: "Edit-1",
        path: "/Edit/breaking-news-1111?lan=En"
    },
    {
        name: "Edit-2",
        path: "/Edit/breaking-news-0000?lan=Fr"
    },
    {
        name: "View",
        path: "/View"
    },
    {
        name: "Profiles",
        path: "/Profile"
    },
    {
        name: "Products",
        path: "/products"
    },
    {
        name: "Plate",
        path: "/plate"
    },
]

export function Navbar() {
    const router = useRouter()
    const pathname = usePathname()
    console.log(pathname)
    return (
        <Menubar>
            {
                navlink.map(item => {
                    const isActive = pathname === (item.path) || (pathname.startsWith(item.path) && item.path !== "/")
                    return (

                        <MenubarMenu key={item.path}>
                            <MenubarTrigger isActive={isActive} onClick={() => router.push(`${item.path}`)} className="cursor-pointer">{item.name}</MenubarTrigger>
                        </MenubarMenu>
                    )
                })
            }

        </Menubar>
    )
}

