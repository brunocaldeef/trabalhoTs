import Document from "./document";
export class Book extends Document {
    constructor(isbn, edition, volume, title, subtitle, publishedAt, author) {
        super(title, subtitle, publishedAt, author);
        this.isbn = isbn;
        this.edition = edition;
        this.volume = volume;
    }
}
export default Document;
