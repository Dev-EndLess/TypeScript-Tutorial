"use strict";
/* Utility Types */
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
/* Require and Readonly */
const recordAssignment = (assign) => {
    // send to database, etc... 
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
console.log('-----------------------2-----------------------');
