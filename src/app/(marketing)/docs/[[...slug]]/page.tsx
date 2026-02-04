import React from 'react';

const page = async ({ params }: {
    params: Promise<{ slug: string[] }>
}) => {
    const { slug } = await params;
    // console.log(slug)  // slug retun to Array[]
    if (slug?.length === 2) {
        return (
            <div className="text-center">
                <h1 className="bg-amber-600 font-bold px-3 py-2 rounded-md">
                    hello index 1 : {slug[0]} and index 2 : {slug[1]}
                </h1>
            </div>
        );
    }

    else if (slug?.length === 1) {
        return (
            <div className="text-center">
                <h1 className="bg-amber-600 font-bold px-3 py-2 rounded-md">
                    hello index 1 : {slug[0]}
                </h1>
            </div>
        );
    }
    else if (slug?.length === 3) {
        return (
            <div className="text-center">
                <h1 className="bg-amber-600 font-bold px-3 py-2 rounded-md">
                    hello index 3 : {slug[2]}
                </h1>
            </div>
        );
    }
    return (
        <div>
                   hello docs
        </div>
    );
};

export default page;

// interface PageProps {
//   params: { slug: string[] };
// }

// const page = async ({ params }: PageProps) => {
//     return (
//         <div></div>
//     )
// }