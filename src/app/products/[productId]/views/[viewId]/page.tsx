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