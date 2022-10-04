import { ParsedUrlQuery } from "querystring";

export interface IPost {
    id: string;
    title: string;
    content: string;
    published: boolean;
    author: string;
    authorId: string;
}

export interface IRegUser {
    username: string;
    email: string;
    password: string;
}