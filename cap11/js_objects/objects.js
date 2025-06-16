const playstation = {
  id: 123,
  name: "PlayStation",
  type: "console",
  releaseYear: 1994,
}


const xbox = {
  id: 456,
  name: "Xbox",
  type: "console",
  releaseYear: 2001,
}

console.log(playstation.releaseYear);
console.log(xbox);

// Function to create a new object
function User(id, user, password, email) {
  this.id = id;
  this.user = user;
  this.password = password;
  this.email = email;
}


const user1 = new User(1, "john_doe", "password123", "doe@doe.com")

console.log(user1);

// Function to create a hero object
function createHero(name, power, age) {
  return {
    name: name,
    power: power,
    age: age,
  };
}

const hero1 = createHero("Superman", "Flight", 30);
const hero2 = createHero("Batman", "Intelligence", 35);

// Displaying hero information
function Person(name, age, height, city, profession) {
  return {
    name,
    age,
    height,
    city,
    profession,
    showInfo: function() {
      console.log(`Name: ${this.name},
        Age: ${this.age},
        Height: ${this.height},
        City: ${this.city},
        Profession: ${this.profession}`);
    }
  };
}
const person1 = new Person("Alice", 28, "5'6\"", "New York", "Engineer");

person1.showInfo();
