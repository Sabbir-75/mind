import React from 'react';
import { notFound, redirect } from 'next/navigation';
const round = (number: number) => {
    return Math.floor(Math.random() * number)
}
const page = async ({ params }: {
    params: Promise<{ productId: string; viewId: string }>
}) => {

    const getNumber = round(2)
    const { productId, viewId } = await params
    if (parseInt(viewId) > 100) {
        // return notFound()
        redirect("/")
    }
    console.log(getNumber)
    if (getNumber === 1) {
        throw new Error(`This is Error because does not match this props number : ${viewId}`)
    }

    return (
        <div className='text-center'>
            <a className='cursor-pointer bg-teal-700 text-white inline-block hover:border-2 border-2 border-transparent hover:border-pink-600 duration-200 rounded-md px-3 py-2'>
                Product No : {productId} and ViewId No : {viewId} for this page
            </a>
        </div>
    );
};

export default page;