console.log(`----------------------------------------Assignment 1------------------------------------------------------------------`);

console.log(
  `======================================Step1================================================================================`
);

class Vehicle {
  constructor(name, type, number, color, price) {
    this.name = name;
    this.type = type;
    this.number = number;
    this.color = color;
    this.price = price;
  }

  getDetails() {
    console.log(
      `Vehicle name is : ${this.name}, Vehical type is: ${this.type}, Vehical number is: ${this.number}, Vehical color is: ${this.color}, Vehical price is: ${this.price} `
    );
  }
}

const audi = new Vehicle("AUDI", "Car", 4545, "Black", "43 Lakh");
const yamaha = new Vehicle("YAMAHA", "Bike", 8985, "Green", "1.67 Lakh");
const apache = new Vehicle("APACHE", "Bike", 6954, "Red", "1.19 Lakh");
const baleno = new Vehicle("BALENO", "Car", 3698, "Blue", "7.6 Lakh");
const brezza = new Vehicle("BREZZA", "Car", 1245, "Brown", "10.6 Lakh");

const arrayOfVehicles = [audi, yamaha, apache, baleno, brezza];
for (const element of arrayOfVehicles) {
  element.getDetails();
  console.log(`                                                   `);
}

console.log(
  `======================================Step2================================================================================`
);

class College {
    constructor( place, name, established, course) {
      this.name = name;
      this.place = place;
      this.established = established;
      this.course = course;
    }

      display(){
        console.log(
          `College name is : ${this.name}, Located at: ${this.place}, Established in: ${this.established}, Course is: ${this.course}`
        );


      }
      
   

  }
  
  const nagpur = new College("Nagpur", "KDK College", 1989, "Science");
  nagpur.display();
  console.log(`                                                   `);
  const pune = new College("Pune", "Kamala Neharu College", 1990, "Arts");
  pune.display();
  console.log(`                                                   `);
  const mumbai = new College("Mumbai", "Binzani College", 1998, "commerce");
  mumbai.display();
  console.log(`                                                   `);
  const wardha = new College("Wardha", "YCC College", 1970, "Science"); 
  wardha.display();
  console.log(`                                                   `);


  console.log(
    `======================================Step3================================================================================`
  );
  

  
    function traverseObject(data) {

    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        const element = data[key];
        console.log(`Key ==> ${key}, Value ==> ${element}`);
        
      }
    }

  }
    traverseObject(nagpur);
    console.log(`                                              `);
    traverseObject(pune);
    console.log(`                                              `);
    traverseObject(mumbai);
    console.log(`                                              `);
    traverseObject(wardha);

  






