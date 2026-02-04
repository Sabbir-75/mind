import React from 'react';
import { notFound } from 'next/navigation';

const page = async ({ params }: {
    params: Promise<{ productId: string; viewId: string }>
}) => {
    const { productId, viewId } = await params
    if (parseInt(viewId) > 100) {
        return notFound()
    }
    return (
        <div className='text-center'>
            <a className='cursor-pointer bg-teal-700 text-white inline-block hover:border-2 border-2 border-transparent hover:border-pink-600 duration-200 rounded-md px-3 py-2'>
                Product No : {productId} and ViewId No : {viewId}
            </a>
        </div>
    );
};

export default page;


// "use client";
// import { FaMoon } from "react-icons/fa6";
// import { MdSunny } from "react-icons/md";
// import { useEffect, useRef, useState } from "react";
// import { usePathname } from "next/navigation";

// export default function ThemeToggle() {
//     // স্টেট ডিফাইন করার সময় টাইপ নিশ্চিত করা
//     const [theme, setTheme] = useState<"light" | "dark">("light");
//     const [mounted, setMounted] = useState(false);
//     const audioRef = useRef<HTMLAudioElement>(null);
//     const pathname = usePathname();

//     useEffect(() => {
//         const savedTheme = localStorage.getItem("theme");
//         // ভ্যালু চেক করে সেট করা
//         if (savedTheme === "light" || savedTheme === "dark") {
//             setTheme(savedTheme );
//         }
//         setMounted(true);
//     }, []);

//     useEffect(() => {
//         if (!mounted) return;
//         document.documentElement.classList.toggle("dark", theme === "dark");
//         document.documentElement.setAttribute("data-theme", theme);
//         localStorage.setItem("theme", theme);
//     }, [theme, mounted]);

//     const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
//         if (audioRef.current) {
//             audioRef.current.volume = 0.05;
//             audioRef.current.play().catch(() => {}); 
//         }
//         setTheme(e.target.checked ? "dark" : "light");
//     };

//     if (!mounted) return null;

//     // পাথ চেক করার সহজ উপায়
//     const excludedPaths = ["/ai_assistant", "/noticeBoard", "/user-dashboard", "/admin-dashboard", "/teacher-dashboard", "/student-dashboard"];
//     if (excludedPaths.some(p => pathname?.startsWith(p))) return null;

//     return (
//         <div className="p-0.5 rounded-full hover:bg-primary/30 duration-500 max-w-19 fixed top-40 rotate-90 z-20">
//             <div className="p-1 rounded-full bg-primary/30">
//                 <label className={`relative flex items-center cursor-pointer w-14 h-8 border-2 border-primary rounded-full transition-colors duration-300 ${theme === "dark" ? "bg-[#FAFAFA]" : "bg-[#010515]"}`}>
//                     <input type="checkbox" checked={theme === "dark"} onChange={handleToggle} className="sr-only" />
//                     <div className={`absolute w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${theme === "dark" ? "translate-x-6" : ""}`}>
//                         {theme === "dark" ? (
//                             <FaMoon className="text-primary p-1.5 -rotate-120 text-2xl bg-[#010515] rounded-full" />
//                         ) : (
//                             <MdSunny className="text-primary p-1.5 text-[24px] bg-[#FAFAFA] rounded-full" />
//                         )}
//                     </div>
//                 </label>
//                 <audio ref={audioRef} src="/audio/toggle.mp3" />
//             </div>
//         </div>
//     );
// }


