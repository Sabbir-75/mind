import React from 'react';

const layout = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            <div className='text-3xl text-red-700 font-bold text-center mb-10'>
                Produvt Feature by Separate By id
            </div>
            {children}
        </>
    );
};

export default layout;