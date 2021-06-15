import { INewsItem } from "./INewsItem";
import { ITopic } from "./ITopic";

export interface IDisplayList extends ITopic {
    newsitems: INewsItem[]
}