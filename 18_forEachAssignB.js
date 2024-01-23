
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

console.log(`=========================Step1===============================================`);
arrayEmployees.forEach((element) => {

    if (element.emp_company=="TCS") {
        console.log(`Employee Name is: ${element.emp_name}, Company Name: ${element.emp_company}`);
    }
    
});

console.log(`=========================Step2===============================================`);

arrayEmployees.forEach((element) => {

    if (element.emp_salary >= 50000) {
      element.getDetails();   
     }
    
});


console.log(`=========================Step3===============================================`);
const totalSalary = arrayEmployees.reduce( ( runningTotal, element) => {
    return runningTotal + element.emp_salary;
},0);
console.log(`Total Salary Of all Employee: ${totalSalary}`);

console.log(`=========================Step4===============================================`);
let average;
average = totalSalary/arrayEmployees.length;

console.log(`Average Salary is: ${average}`);


console.log(`=========================Step5===============================================`);


arrayEmployees.forEach(element => {
    
    if (element.emp_dept=="IT" && element.emp_dept=="HR" || element.emp_salary>=75000 ) {
      
            element.getDetails();

       
    }
});

console.log(`                                                            `);





