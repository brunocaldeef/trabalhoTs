import Document from "./document";

import {pubAt} from "./document.js";

import Person from "./person.js";

export class Periodical extends Document{
    issn: number
    volume: number
    issue: number

constructor (issn: number, volume: number, issue: number, title: string, subtitle: string, publishedAt: pubAt, author: Person){
    super(title, subtitle, publishedAt, author)
    this.issn = issn
    this.volume = volume
    this.issue = issue
    }
}
export default Periodical