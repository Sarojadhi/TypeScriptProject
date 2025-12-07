let students = [];
const addStudent = (student) => {
    students.push(student);
    console.log(`Student added: ${student.name}`);
};
const showStudents = () => {
    console.log("Showing Students:");
    students.forEach((s) => console.log(`ID: ${s.id}, Name: ${s.name}, Age: ${s.age}, Grade: ${s.grade}`));
};
const findStudent = (id) => {
    const student = students.find((s) => s.id === id);
    if (student) {
        console.log("\nFound Student:", student);
    }
    else {
        console.log("\nStudent not found!");
    }
};
addStudent({ id: 1, name: "Saroj", age: 20, grade: "A" });
addStudent({ id: 2, name: "Sudip", age: 21, grade: "B" });
addStudent({ id: 3, name: "Sagar", age: 20, grade: "C" });
addStudent({ id: 4, name: "Sumandra", age: 21, grade: "B" });
addStudent({ id: 5, name: "Sumit", age: 20, grade: "A" });
addStudent({ id: 6, name: "Sushil", age: 21, grade: "B" });
showStudents();
findStudent(3);
export {};
//# sourceMappingURL=Student.js.map