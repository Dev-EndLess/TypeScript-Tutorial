/* Index Signatures */

interface TransactionObj {
  readonly [index: string]: number
  Pizza: number,
  Books: number,
  Job: number
}

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50
}

console.log(todaysTransactions.Pizza)
console.log(todaysTransactions['Pizza'])

let prop: string = 'Pizza'
console.log(todaysTransactions[prop])

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0
  for (const transactions in todaysTransactions) {
    total += todaysTransactions[transactions]
  }
  return total
}

console.log(todaysNet(todaysTransactions))


interface Student {
  // [key: string]: string | number | number[] | undefined
  name: string,
  GPA: number,
  classes?: number[]
}

const student: Student = {
  name: 'Fabri',
  GPA: 3.4,
  classes: [100, 200]
}

// console.log(student.test)
console.log('-----------------------1--------------------------')

// If we dont have indexSignature uphere
for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`)
}

console.log('-----------------------2--------------------------')

// If we dont know the type of Student, use object as a reference
Object.keys(student).map(key => {
  console.log(student[key as keyof typeof student])
})

console.log('-----------------------3--------------------------')

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`)
}

logStudentKey(student, 'name')
logStudentKey(student, 'classes')

console.log('-----------------------3--------------------------')

// interface Incomes {
//     [key: string]: number
// }

type Streams = 'salary' | 'bonus' | 'sidehustle'

type Incomes = Record<Streams, number>

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
}

for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes])
}