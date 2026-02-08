"use client"
import React from 'react';

const Error = ({ error }: { error: Error }) => {
    return (
        <div className='text-2xl text-red-900 text-center'>
            {error.message}
        </div>
    );
};

export default Error;