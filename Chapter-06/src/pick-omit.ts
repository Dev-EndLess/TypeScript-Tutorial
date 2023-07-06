/* Utility Types */

// Pick - Omit //

interface Assignment {
  studentId: string,
  title: string,
  grade: number,
  verified?: boolean
}

type AssignResult = Pick<Assignment, "studentId" | "grade">

const score: AssignResult = {
  studentId: "k123",
  grade: 85,
}

type AssignPreview = Omit<Assignment, "grade" | "verified">

const preview: AssignPreview = {
  studentId: "k123",
  title: "Final Project",
}
