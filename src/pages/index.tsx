import { ISocialIconProps } from '@/components/SocialIcons/SocialIcons'
import { info, contact } from '@/data'

export default function Home() {
  return (
    <>
      <div className="is-preload" id="wrapper">
        <div id="bg"></div>
        <div id="overlay"></div>
        <div id="main">
          <header id="header">
            <h1>{`${info.firstName} ${info.lastName}`}</h1>
            <p>
              {
                info.titles.map((title, idx) => idx === 0 ? `${title} ` : <span key={idx}>&nbsp;&bull;&nbsp; {title}</span>)
              }
            </p>
            <ISocialIconProps size={'large'} data={contact} />
          </header>

          <footer id="footer">
            <span className="copyright">
              &copy; {`${info.firstName} ${info.lastName} `}
            </span>
          </footer>
        </div>
      </div>
    </>
  )
}
