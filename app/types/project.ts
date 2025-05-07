import { ImageMeta } from "./image";

export interface Project {
    title: string;
    shortDescription?: string;
    link?: string;
    github?: string;
    images?: {
        thumbnailImg?: ImageMeta;
        cardLinkImg?: ImageMeta;
        displayImg?: ImageMeta;
    }
    relatedLinks?: {
        linkTitle: string;
        linkHref: string;
    }[];
    featured?: boolean;
}