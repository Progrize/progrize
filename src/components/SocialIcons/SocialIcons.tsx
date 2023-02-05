import { Icon } from '../Icon/Icon';
import { contact } from '@/data';

interface ISocialIconProps {
    redirectLink?: string;
}

export const SocialIcons = ({ redirectLink = '/profile' }: ISocialIconProps) => {
    return (
        <>
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
        </>
    )
}