class Animal {
    constructor(options){
        this.name = options.name;
        this.color = options.color;
    }

    voice() { 
        console.log('Base voice from', this.name);
    }

}

const dog = new Animal({name: 'Sharik', color: 'black'});


class Cat extends Animal { 
    constructor(options){
    super(options);
    this.type = 'cat';
    this.tail= options.tail;
    }
}

const cat = new Cat({name: 'Kisa', color: 'white', tail: true});

class Breed extends Cat {
    constructor(options){
        super(options);
        this.age = options.age;
        this.pedigree = options.pedigree;
    }
}

const breed = new Breed({name: 'Kisa', color: 'white', tail: true, age: 10, pedigree: true})

