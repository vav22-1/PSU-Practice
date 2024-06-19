class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    yearlySalary() {
        return this.salary * 12;
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    yearlySalary() {
        const baseSalary = super.yearlySalary(); 
        const bonus = 1500; 
        return baseSalary + bonus;
    }
}

const manager1 = new Manager("Иван", 2000, "Маркетинг");
const manager2 = new Manager("Ольга", 1800, "Разработка");

console.log(`Годовая зарплата работника ${manager1.name}: ${manager1.yearlySalary()}`);
console.log(`Годовая зарплата работника ${manager2.name}: ${manager2.yearlySalary()}`);
