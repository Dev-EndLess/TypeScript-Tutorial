/* Utility Types */

// Exclude and Extract //

type Letters= "NG" | "D" | "C" | "B" | "A" | "S"

type adjustedGrade = Exclude<Letters, "C">

type highGrades = Extract<Letters, "A" | "B">