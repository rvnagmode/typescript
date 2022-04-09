console.log("hello");
function Accept(emp) {
    console.log(emp);
}
var emp = { fname: 'rushikesh', lname: 'reddy', empid: 1, salary: 10000 };
Accept(emp);
var Employee = /** @class */ (function () {
    function Employee(id) {
        this.eid = id;
    }
    //number is the return type of accept number
    Employee.prototype.accept = function (id) {
        id = 21;
        return id;
    };
    return Employee;
}());
//# sourceMappingURL=Demo.js.map