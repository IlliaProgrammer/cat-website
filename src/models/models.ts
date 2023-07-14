import { ReactNode } from "react";


export interface IRoute {
    path: string;
    element: ReactNode;
}

export interface IBreed {
    id: number;
    breed: string;
    shortInfo: string;
    imageUrl: string;
}

export interface ICustomer {
    id: number;
    name: string;
    breed: string;
    imgUrl: string;
}

export interface IPost {
    id: number;
    title: string;
    content: string;
    date: string;
    imgUrl: string;
    category: string;
}