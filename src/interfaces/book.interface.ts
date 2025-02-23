export interface Book {
    id: number;
    title: string;
    author: string;
    gender: string;
    date: string;
}

export interface BookToUpdate {
    id: number;
    title?: string;
    author?: string;
    gender?: string;
    date?: string;
}