

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

const arrayEmps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi ];


console.log(`========================Step1=======================================================================================`);
const arrayWipro = arrayEmps.filter( (element) => {
    return element.emp_company=='Wipro';
} );
console.log(`Employee from Wipro :-> `);

arrayWipro.forEach(element => {
    element.getDetails();
});

console.log(`                                                          `);
console.log(`========================Step2=========================================================================================`);

const arrayItHr = arrayEmps.filter((element) => { 
    return element.emp_dept=="IT" || element.emp_dept=="HR";
});
console.log(`Employee from IT & HR Departments are: `);

arrayItHr.forEach(element => {
    element.getDetails();
});

console.log(`                                                          `);
console.log(`========================Step3=========================================================================================`);

const arrayId = arrayEmps.filter( element => {
    return element.emp_id>50;
});
console.log(`Employees whose ID greater than 50 are: `);

arrayId.forEach(elemet => {
    elemet.getDetails();
});

console.log(`                                                          `);
console.log(`========================Step4=========================================================================================`);

const arrayName = arrayEmps.filter( element => {
    return element.emp_name.startsWith("A") || element.emp_name.startsWith("V") || element.emp_name.startsWith("M");
})

arrayName.forEach(element => {
    element.getDetails();
});


console.log(`                                                          `);
console.log(`========================Step5=========================================================================================`);

const totalSalary = arrayEmps.reduce((runningTotal, element) => {
    return runningTotal + element.emp_salary;
}, 0);

console.log(`Average Salary of all Employees is: ${totalSalary/arrayEmps.length}`);


console.log(`                                                          `);
console.log(`========================Step6=========================================================================================`);

const arrayIt = arrayEmps.filter((element) => { 
    return element.emp_dept=="IT" ;
});

const totalSalIt = arrayIt.reduce((runningTotal, element) => {
    return runningTotal + element.emp_salary;
}, 0);

console.log(`Average Salary of all IT Department Employees is: ${totalSalIt/arrayIt.length}`);

console.log(`                                                          `);
