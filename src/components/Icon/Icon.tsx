import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Link from 'next/link';

interface IIconProps {
    link: string;
    icon: IconDefinition;
    iconType: string;
    iconName: string;
    label: string;
}

export const Icon = ({ link, icon, iconType, iconName, label }: IIconProps) => {
    return (
        <>
            {link.startsWith('/') ?
                <Link href={link} className={`icon ${iconType} ${iconName}`} >
                    <span className="label">{label}</span>
                </Link>
                :
                <a href={link} rel="noreferrer" target="_blank" className={`icon ${iconType} ${iconName}`}>
                    <span className="label">{label}</span>
                </a>}
        </>
    )
}