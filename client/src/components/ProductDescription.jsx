import React from 'react'

function ProductDescription() {
  return (
    <div className='mt-14 ring-1 ring-slate-900/10 rounded-lg'>
        <div className='flex gap-3'>
            <button className='medium-14 p-3 w-32  border-b-2 border-secondary'>Description</button>
            <button className='medium-14 p-3 w-32 '>Color Guide</button>
            <button className='medium-14 p-3 w-32 '>Size Guide</button>
        </div>
        <hr className='h-[1px] w-full border-gray-500/30'/>
        <div className='flex flex-col gap-3 p-3'>
            <div>
                <h5 className='h5'>Details</h5>
                <p>
                    Our collection covers everything from timeless classics to modern bestsellers, ensuring there’s something for everyone. Whether you’re into thrilling fiction, inspiring self-help, or insightful non-fiction, you’ll always find a book that suits your mood.</p>
                <p>We provide helpful reviews, recommendations, and tips to guide you toward your next great read. Our content makes it easier to discover books that inspire, entertain, and enrich your life.</p>
            </div>
            <div>
                <h5 className='h5'>Benefit</h5>
                <ul className='list-disc pl-5 text-sm flex flex-col gap-1'>
                    <li className='text-gray-50'>High quality materials ensure long-lasting durability and comfort</li>
                    <li className='text-gray-50'>Designed to meet the needs of modern, action lifestyles.</li>
                    <li className='text-gray-50'>Available in a wide range of colors and trendy colors</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ProductDescription