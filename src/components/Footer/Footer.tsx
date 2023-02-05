import { info } from '@/data'
import { SocialIcons } from '../SocialIcons/SocialIcons'

export const Footer = () => {
    return (
        <>
            <footer id='footer'>
                <div className='inner'>
                    <ul className='icons'>
                        <SocialIcons redirectLink={'/'} />
                    </ul>
                    <ul className='copyright'>
                        <li>&copy;{` ${info.copyright}`}</li>
                    </ul>
                </div>
            </footer>
        </>
    )
}
