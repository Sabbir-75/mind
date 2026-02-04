"use client"
import { usePathname } from "next/navigation";

const NotFound = () => {

    const location = usePathname()
    const productId = location.split("/")[2]
    const product = location.split("/")[1]
    const viewsId = location.split("/")[4]
    

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-500 text-white p-6">
            <h1 className="text-9xl font-extrabold animate-pulse">404</h1>
            <p className="text-2xl md:text-3xl mt-4 mb-8 text-center">
                Oops {product}! The page you are looking for productId: {productId} and viewsId : {viewsId} does not exist.
            </p>
            <a href={'/'} className="px-6 py-3 bg-white text-indigo-600 font-bold rounded-lg shadow-lg hover:bg-indigo-50 transition-colors"
            >
                Go Home
            </a>

            {/* Optional: colorful circles */}
            <div className="absolute top-25 left-20 w-40 h-40 bg-yellow-300 rounded-full opacity-30 animate-bounce mix-blend-multiply"></div>
            <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-pink-500 rounded-full opacity-40 animate-spin-slow mix-blend-multiply"></div>
        </div>
    );

};

export default NotFound;