import Link from 'next/link';
import React, { use } from 'react';

const NewsArticle = ({ params, searchParams }:
    {
        params: Promise<{ EditId: string }>;
        searchParams: Promise<{ lan: string }>
    }) => {
    const { EditId } = use(params)
    const { lan } = use(searchParams)
    return (
        <div className='flex flex-col gap-2.5 mt-10 items-center'>
            <h1 className='text-3xl font-bold text-red-500'>Article Id: {EditId}</h1>
            <h1 className='text-lg font-bold text-blue-950'>Reading Id: {lan}</h1>
            <Link className='border-2 border-fuchsia-600 w-20 flex justify-center items-center rounded-lg hover:bg-fuchsia-600 hover:text-white duration-200' href={`/Edit/${EditId}?lan=En`}>English</Link>
            <Link className='border-2 border-fuchsia-600 w-20 flex justify-center items-center rounded-lg hover:bg-fuchsia-600 hover:text-white duration-200' href={`/Edit/${EditId}?lan=FF`}>France</Link>
        </div>
    );
};

export default NewsArticle;