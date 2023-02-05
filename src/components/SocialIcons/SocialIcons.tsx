import { IContact } from "@/interfaces/contact";
import { Icon } from "../Icon/Icon";

interface ISocialIconProps {
    size: 'small' | 'large',
    data: IContact[];
}

export const ISocialIconProps = ({ size, data }: ISocialIconProps) => {
    return (
        <nav>
            <ul>
                {
                    data.map(contact => <li key={contact.id}>
                        <Icon
                            size={size}
                            link={contact.link}
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