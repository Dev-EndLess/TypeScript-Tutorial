"use strict";
/* Index Signatures */
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transactions in todaysTransactions) {
        total += todaysTransactions[transactions];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
const student = {
    name: 'Fabri',
    GPA: 3.4,
    classes: [100, 200]
};
// console.log(student.test)
console.log('-----------------------1--------------------------');
// If we dont have indexSignature uphere
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
console.log('-----------------------2--------------------------');
// If we dont know the type of Student, use object as a reference
Object.keys(student).map(key => {
    console.log(student[key]);
});
console.log('-----------------------3--------------------------');
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'name');
logStudentKey(student, 'classes');
console.log('-----------------------3--------------------------');
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
