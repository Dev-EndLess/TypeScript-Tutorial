/* Utility Types */

// Record //

const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
}

type Students = "Sara" | "Kelly" | "EndLess"
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students, LetterGrades> = {
  Sara: "B",
  Kelly: "U",
  EndLess: "C"
}

interface Grades {
  assign1: number,
  assign2: number,
}

const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 85, assign2: 93 },
  Kelly: { assign1: 76, assign2: 15 },
  EndLess: { assign1: 73, assign2: 12 },
}

// Nonnullable //

type AllPossibleGrades = 'Dave' | 'John' | null | undefined
type NamesOnly = NonNullable<AllPossibleGrades>

// Return Type // 

//type newAssign = { title: string, points: number }

const createNewAssign = (title: string, points: number) => {
  return { title, points }
}

type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign("Utility Types", 100)
console.log(tsAssign)

console.log('-----------------------1-----------------------')

// Awaited - helps us with the ReturnType of a Promise //

interface User {
  id: number,
  name: string,
  username: string,
  email: string,
}

const fetchUsers = async (): Promise<User[]> => {

  const data = await fetch(
      'https://jsonplaceholder.typicode.com/users'
  ).then(res => {
      return res.json()
  }).catch(err => {
      if (err instanceof Error) console.log(err.message)
  })
  return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users))