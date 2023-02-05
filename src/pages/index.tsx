import Link from 'next/link'
import Image from 'next/image'
import { ISocialIcons } from '@/components/SocialIcons/SocialIcons'
import { info } from '@/data'

export default function Home() {
  return (
    <>
      <div className='landing-is-preload' id='landing-wrapper'>
        {/* <div id='landing-bg'></div> */}
        <div className="bg-img">
          <Image
            alt='background image'
            src="/images/bg-4.jpg"
            fill
            quality={100}
            priority
          />
          <Image
            alt='background image'
            src="/images/bg-4.jpg"
            fill
            quality={100}
            style={{ marginLeft: '99vw' }}
            priority
          />
        </div>
        <div id='landing-overlay'></div>
        <div id='landing-main'>
          <header id='landing-header'>
            <h1 >{`${info.firstName} ${info.lastName}`}</h1>
            <p style={{ color: 'white', fontWeight: '500' }}>
              {
                info.titles.map((title, idx) => idx === 0 ? `${title} ` : <span key={idx}>&nbsp;&bull;&nbsp; {title}</span>)
              }
            </p>
            <ISocialIcons  />
          </header>

          <footer id='landing-footer'>
            <Link className='link' href="/profile">
              <span className='landing-copyright'>
                &copy; {`${info.firstName} ${info.lastName} `}
              </span>
            </Link>
          </footer>
        </div>
      </div>
    </>
  )
}
