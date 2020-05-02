
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name
        this.age = age
    }

    getGretting() {
        return `Hi i am ${this.name}`
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }

}

class Student extends Person {

    constructor(name, age = 0, major) {
        super(name, age)
        this.major = major
    }

    hasMajor() {
        return !!this.major
    }

    getDescription() {
        let description = super.getDescription()

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`
        }

        return description

    }

}

class Traveler extends Person {

    constructor(name,age,location) {
        super(name,age)
        this.location = location
    }

    hasLocation() {
        return !!this.location
    }
    getGretting() {
        let message = super.getGretting()

        if (this.hasLocation()) {
            message += ` I'm visiting from ${this.location}`
        }

        return message

    }

}


const me = new Student('Ahmad Berahman', 30, 'Computer Science')
console.log(me.getDescription());

const other = new Student()
console.log(other.hasMajor())

const traveler=new Traveler('Pouria Berahman',30,'Amesterdam')
console.log(traveler.getGretting())


