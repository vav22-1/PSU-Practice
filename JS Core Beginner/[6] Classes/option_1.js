class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    displayInfo() {
        console.log(`Имя: ${this.name}, Возраст: ${this.age}, Страна: ${this.country}`);
    }
}

const person1 = new Person("Алексей", 30, "Россия");
const person2 = new Person("Anna", 25, "Belarus");

person1.displayInfo();
person2.displayInfo();
