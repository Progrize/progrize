import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IIconProps {
    size: 'small' | 'large',
    link: string;
    icon: IconDefinition;
    iconType: string;
    iconName: string;
    label: string;
}

export const Icon = ({ size, link, icon, iconType, iconName, label }: IIconProps) => {
    return (
        <>
            {size === 'small' ?
                <a href={link} rel="noreferrer" target="_blank">
                    <FontAwesomeIcon icon={icon} />
                    <span className="label">{label}</span>
                </a> :
                <a href={link} className={`icon ${iconType} ${iconName}`}>
                    <span className="label">{label}</span>
                </a>
            }
        </>

    )
}