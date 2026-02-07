import Navigate from '@/components/common/Navigate/Navigate';
import React from 'react';

const page = async () => {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolve is Running");
        }, 3000)
    })
    return (
        <div className='flex flex-col items-center gap-3'>
            <Navigate>1</Navigate>
            <Navigate>2</Navigate>
            <Navigate>3</Navigate>
            <Navigate>4</Navigate>
            <Navigate>5</Navigate>
            <Navigate>3</Navigate>
            <Navigate>4</Navigate>
            <Navigate>5</Navigate>
            <Navigate>3</Navigate>
            <Navigate>4</Navigate>
            <Navigate>5</Navigate>
            <Navigate>3</Navigate>
            <Navigate>4</Navigate>
            <Navigate>5</Navigate>
            <Navigate>3</Navigate>
            <Navigate>4</Navigate>
            <Navigate>5</Navigate>
            <Navigate>3</Navigate>
            <Navigate>4</Navigate>
            <Navigate>5</Navigate>
            <Navigate>3</Navigate>
            <Navigate>4</Navigate>
            <Navigate>5</Navigate>
            <Navigate>3</Navigate>
            <Navigate>4</Navigate>
            <Navigate>5</Navigate>
            <Navigate>3</Navigate>
            <Navigate>4</Navigate>
            <Navigate>5</Navigate>
            <Navigate>3</Navigate>
            <Navigate>4</Navigate>
            <Navigate>5</Navigate>
            <Navigate>3</Navigate>
            <Navigate>4</Navigate>
            <Navigate>5</Navigate>
            <Navigate>3</Navigate>
            <Navigate>4</Navigate>
            <Navigate>5</Navigate>
            <Navigate>3</Navigate>
            <Navigate>4</Navigate>
            <Navigate>5</Navigate>
            <Navigate>3</Navigate>
            <Navigate>4</Navigate>
            <Navigate>5</Navigate>
        </div>
    );
};

export default page;