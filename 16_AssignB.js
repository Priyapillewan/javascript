

class Employees{

    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){

        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
    getDetails(){
        console.log(`Employee ID: ${this.emp_id}, Employee Name: ${this.emp_name}, Department is: ${this.emp_dept}, Employee Salary is: ${this.emp_salary}, Company Name is: ${this.emp_company}`);
     } 
}
const emp_anil = new Employees(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employees(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employees(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employees(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employees(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employees(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employees(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi ];

console.log(`=============Step1 - Employee working in TCS only=================================================`);

for (const element of arrayEmployees) {

    if (element.emp_company=="TCS") {
        console.log(`Employee name is: ${element.emp_name} & Company name is: ${element.emp_company}`);
    }
    
}
console.log(`                                                                        `);

console.log(`=============Step2 - Finance department employee only=================================================`);

for (const element of arrayEmployees) {
    if (element.emp_dept=="Finance") {
        console.log(`Employee name is: ${element.emp_name} & Department is: ${element.emp_dept}`);
    }
    
}
console.log(`                                                                        `);
console.log(`=============Step3 - Employee name starts with "R"=================================================`);

for (const element of arrayEmployees) {
    if (element.emp_name.startsWith("R")) {
        element.getDetails();        
    }

}
console.log(`                                                                        `);

console.log(`=============Step4 - Emp Salary is >75000=================================================`);

for (const element of arrayEmployees) {
    if (element.emp_salary>75000) {
    console.log(`Employee name is: ${element.emp_name}, Company name is: ${element.emp_dept} & Salary is: ${element.emp_salary}`);
      
    }
    
}
console.log(`                                                                        `);

console.log(`==============Step5 - Salary>=50000 =================================================`);

for (const element of arrayEmployees) {
    if (element.emp_salary>=50000 && element.emp_dept=="IT") {
        element.getDetails();

    }
    
}

console.log(`                                                                        `);

console.log(`===============Step6 - Emp from company "Infy"=================================================`);

for (const element of arrayEmployees) {
    if (element.emp_company=="Infy") {
        
        element.getDetails();
    }
    
}

console.log(`                                                                 `);















