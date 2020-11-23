  
import Document from "./document";

import {pubAt} from "./document.js";

import Person from "./person.js";

export class Book extends Document{
    isbn: number
    edition: number
    volume: number

constructor(isbn: number, edition: number, volume: number, title: string, subtitle: string, publishedAt: pubAt, author: Person){
    super(title, subtitle, publishedAt, author)
    this.isbn = isbn
    this.edition = edition
    this.volume = volume
    }
}

export default Document