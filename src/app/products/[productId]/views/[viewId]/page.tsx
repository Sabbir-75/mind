import React from 'react';

const page = async ({ params }: {
    params: Promise<{ productId: string; viewId: string }>
}) => {
    const { productId, viewId } = await params
    return (
        <div className='text-center'>
            <a className='cursor-pointer bg-teal-700 text-white inline-block hover:border-2 border-2 border-transparent hover:border-pink-600 duration-200 rounded-md px-3 py-2'>
                Product No : {productId} and ViewId No : {viewId}
            </a>
        </div>
    );
};

export default page;