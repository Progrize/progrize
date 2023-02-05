import { contact, info } from '@/data'
import { ISocialIcons } from '../SocialIcons/SocialIcons'

export const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="inner">
                    <ISocialIcons redirectLink={'/'}/>
                    <ul className="copyright">
                        <li>&copy;{` ${info.copyright}`}</li>
                    </ul>
                </div>
            </footer>
        </>
    )
}
