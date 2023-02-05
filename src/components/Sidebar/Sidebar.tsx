import Link from 'next/link'
import { info } from '@/data'
import Image from 'next/image'

export const Sidebar = () => {
    return (
        <>
            <header id='header'>
                <div className='inner'>
                    <Link href='/' className='image avatar'><Image src='/images/avatar.jpg' width={100} height={100} alt='avatar' /></Link>
                    <h1>
                        {info.subtitle.map((subtitle, idx) => {
                            if (idx === 0) return <><strong>{`${subtitle} ${info.firstName}`}</strong></>
                            if (idx === 1) return <>{`, ${subtitle}`}</>
                            if (idx === info.subtitle.length - 1) return <><br /><strong>{subtitle}</strong></>
                            return <><br />{subtitle}</>
                        })}
                    </h1>
                </div>
            </header>
        </>
    )
}
