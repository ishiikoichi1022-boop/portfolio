import { ta1sh1 } from "./ta1sh1";
import { portfolio } from "./portfolio";

export type { Work, WorkImage, ApproachItem } from "./type";

export const works = [ta1sh1, portfolio];

export function getWork(slug: string) {
    return works.find((work) => work.slug === slug);
}