import Link from 'next/link';
import { IContact } from "@/interfaces/contact";
import { Icon } from "../Icon/Icon";
import { contact } from '@/data';
import { faDribbble } from '@fortawesome/free-brands-svg-icons/faDribbble';

interface ISocialIconProps {
    redirectLink?: string;
}

export const ISocialIcons = ({ redirectLink = '/profile' }: ISocialIconProps) => {
    return (
        <nav>
            <ul className="icons">
                {
                    contact.map(contact => <li key={contact.id}>
                        <Icon
                            link={contact.link.startsWith('/') ? redirectLink : contact.link}
                            icon={contact.icon}
                            iconType={contact.iconType}
                            iconName={contact.iconName}
                            label={contact.label}
                        />
                    </li>)
                }
            </ul>
        </nav>

    )
}