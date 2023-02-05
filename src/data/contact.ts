import { IContact } from '@/interfaces/contact';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faDribbble } from '@fortawesome/free-brands-svg-icons/faDribbble';
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
// import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
// import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free

export const contact: IContact[] = [
    {
        id: '1',
        link: 'https://www.linkedin.com/in/hsnmnr/',
        icon: faLinkedinIn,
        iconType: 'brands',
        iconName: 'fa-linkedin',
        label: 'LinkedIn',
    },
    {
        id: '2',
        link: 'https://www.github.com/hsnmnr/',
        icon: faGithub,
        iconType: 'brands',
        iconName: 'fa-github',
        label: 'Github',
    },
    {
        id: '3',
        link: 'mailto:hassanmunir.me@gmail.com',
        icon: faEnvelope,
        iconType: 'solid',
        iconName: 'fa-envelope',
        label: 'Email',
    },
    {
        id: '4',
        link: '/',
        icon: faDribbble,
        iconType: 'brands',
        iconName: 'fa-dribbble',
        label: 'Website',
    }
]