// let element: Node|null|undefined|Element = null;
// let element2: any = null;

class DataRepository<T>{
    protected _collection: T[];
    public name: string;

    constructor(name: string, collection: T[]) {
        this.name = name;
        this._collection = collection;
    }

    display(): string {
        let output: string = this.name

        this._collection.forEach(item => {
            output += ` ${item.toString()}`;
        })
        return output;
    }
}

class PostCards {
    private _date: Date;
    private _description: string;

    constructor(description: string) {
        this._date = new Date();
        this._description = description;
    }

    toString(): string {
        return `${this._date.toDateString()} ${this._description}`;
    }
}

class Stickers {
    private _date: Date;
    private _hero: string;

    constructor(hero: string) {
        this._date = new Date();
        this._hero = hero;
    }

    toString(): string {
        return `${this._date.toDateString()} ${this._hero}`;
    }
}

const myPlayersCollection: DataRepository<Stickers> = new DataRepository(
    'piłkarze',
    [new Stickers("Zenek"), new Stickers("Boruc"), new Stickers("Lewandowski")]
)


const myCardsCollection: DataRepository<PostCards> = new DataRepository(
    'pocztówki',
    [new PostCards("Malborka"), new PostCards("Zakopane")]
)


const myListCollection: DataRepository<string> = new DataRepository(
    'listy',
    ["Hello, what are you doing?", "Hi there!"]
)


console.log(myPlayersCollection.display());
console.log(myCardsCollection.display());
console.log(myListCollection.display());
