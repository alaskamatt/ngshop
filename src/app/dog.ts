export class Dog {
    id: string;
    name: string;
    thumbnail: string;
    favorite: boolean;

    constructor (id, name, thumbnail) {
        this.id = id;
        this.name = name;
        this.thumbnail = thumbnail;
        this.favorite = false;
    }
}
