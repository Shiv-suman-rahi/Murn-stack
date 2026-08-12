class Human{
    #Name;
    #age;
    constructor(name,age){
        this.#Name =name;
        this.#age =age;

    }
    speak(){
        console.log(`Hallo May Name is ${this.#Name}.`);
    }
    get fetchName(){
        return this.#Name;
    }
    set setName(value){
        this.#Name=value;
    }
}

let obj = new Human("Shiv",22);
obj.speak();