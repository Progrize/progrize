import Link from 'next/link'
import { info } from '@/data'
import Image from 'next/image'

export const Sidebar = () => {
    return (
        <>
            <header id="header">
                <div className="inner">
                    <Link href="/" className="image avatar"><Image src="/images/avatar.jpg" width={100} height={100} alt="avatar" /></Link>
                    <h1>
                        {info.intro.map((intro, idx) => {
                            if (idx === 0) return <><strong>{`${intro} ${info.firstName}`}</strong></>
                            if (idx === 1) return <>{`, ${intro}`}</>
                            if (idx === info.intro.length - 1) return <><br /><strong>{intro}</strong></>
                            return <><br />{intro}</>
                        })}
                    </h1>
                </div>
            </header>
        </>
    )
}
