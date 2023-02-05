import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface IContact {
    id: string;
    link: string;
    icon: IconDefinition;
    iconType: string;
    iconName: string;
    label: string;
}