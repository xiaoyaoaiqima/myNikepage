'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Page() {
    const router = useRouter()

    return (
        <main>
            {/* 导航栏 */}
            <nav className="w-full h-10 bg-sky-100 py-2"  >
                <img src="vercel.svg" alt="Logo" width={110}/>
                <ul className='flex-1 flex-row px-3 justify-between
                items-center
                max-lg:hidden'>
                    <li className='rounded-md basis-1/5 me-3 bg-sky-200 hover:bg-sky-600'>
                        <Link href='/big'>
                            <h1 className='text-center'>big</h1>
                        </Link>
                    </li>
                    <li className='rounded-md basis-1/5 me-3 bg-sky-200 hover:bg-sky-600'>
                        <Link href='/big'>
                            <h1 className='text-center'>big</h1>
                        </Link>
                    </li>
                    <li className='rounded-md basis-1/5 me-3 bg-sky-200 hover:bg-sky-600'>
                        <Link href='/big'>
                            <h1 className='text-center'>big</h1>
                        </Link>
                    </li>
                    <li className='rounded-md basis-1/5 me-3 bg-sky-200 hover:bg-sky-600'>
                        <Link href='/big'>
                            <h1 className='text-center'>big</h1>
                        </Link>
                    </li>
                </ul>
            </nav>

            <h1>This Big2</h1>
            <div className="gap=8 columns-3">
                <p className=''>one</p>
                <p className=''>two</p>
                <p className=''>Three</p>
            </div>
            <div className="object-container"></div>
            <div className="box-border h-32 w-32 p-4 border-4">
                <div className="bg-sky-300 ob">good</div>
            </div>
        </main>
    )
}
