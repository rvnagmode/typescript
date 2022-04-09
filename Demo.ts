console.log("hello");
interface Iemp {
    fname: string;
    lname: string;
    empid: number;
    salary: number;
}
function Accept(emp: Iemp) {
    console.log(emp);
}
var emp = { fname: 'rushikesh', lname: 'reddy', empid: 1, salary: 10000 };
Accept(emp);
class Employee {
    eid: number;
    constructor(id: number) {
        this.eid = id;
    }
    //number is the return type of accept number
    accept(id): number {
        id = 21;
        return id;
    }
}