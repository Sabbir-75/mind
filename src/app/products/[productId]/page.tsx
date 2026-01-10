import React from 'react';

const page = async ({ params }: {
    params: Promise<{ productId: string }>
}) => {

    const id = (await params).productId
    return (
        <div>
            <h1 className='text-2xl text-center pt-10'>Product No : {id}</h1>
        </div>
    );
};

export default page;