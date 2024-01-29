

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


console.log(`==================Step 1 - Descending order of employee ID=================================================================`);

arrayEmployees.sort((s1, s2) => {
    return s1.emp_id >= s2.emp_id ? -1 : 1;
});
arrayEmployees.forEach((element) => {
    console.log(`Employee ID is : ${element.emp_id}, Employee Name is : ${element.emp_name}, Employee Department : ${element.emp_dept}`);
});

console.log(`                              `);
console.log(`==================Step 2 - Ascending order of employee Department=================================================================`);

arrayEmployees.sort((s1, s2) => {
    return s1.emp_dept >= s2.emp_dept ? 1 : -1;
});
arrayEmployees.forEach((element) => {
    console.log(`Employee Is is: ${element.emp_id}, Employee Department is : ${element.emp_dept}, Employee Company : ${element.emp_company}`);
});


console.log(`                              `);
console.log(`==================Step 3 - Descending order of employee Salary=================================================================`);

arrayEmployees.sort((s1, s2) => {
    return s1.emp_salary >= s2.emp_salary ? -1 : 1;
});
arrayEmployees.forEach((element) => {
    console.log(`Employee Name is : ${element.emp_name}, Employee Salary is : ${element.emp_salary}, Employee Company : ${element.emp_company}`);
});



