// ======================================================
//          ACADEMIC STUDENT MANAGEMENT SYSTEM
// ======================================================

console.clear();

console.log(
    "%c ACADEMIC STUDENT MANAGEMENT SYSTEM ",
    "background:#23585B; color:white; font-size:20px; font-weight:bold; padding:12px;"
);

console.log(
    "%c Student Academic Results Analysis ",
    "color:#398B82; font-size:14px; font-weight:bold;"
);


// ======================================================
// 1. CREATE STUDENT CLASS
// ======================================================

class Student {

    constructor(id, name, grades, attendance) {
        this.id = id;
        this.name = name;
        this.grades = grades;
        this.attendance = attendance;
    }


    // Calculate Average Using Reduce
    calculateAverage() {

        if (this.grades.length === 0) {
            return 0;
        }

        let total = this.grades.reduce(
            (sum, grade) => sum + grade, 0
        );

        return total / this.grades.length;
    }


    // Determine Letter Grade
    getLetterGrade() {

        let average = this.calculateAverage();

        if (average >= 90) {
            return "A";
        }
        else if (average >= 80) {
            return "B";
        }
        else if (average >= 70) {
            return "C";
        }
        else if (average >= 60) {
            return "D";
        }
        else if (average >= 50) {
            return "E";
        }
        else {
            return "F";
        }
    }


    // Determine Final Result
    getResult() {

        let average = this.calculateAverage();

        if (average >= 50 && this.attendance >= 75) {
            return "PASSED";
        }
        else {
            return "NEEDS REVIEW";
        }
    }

}


// ======================================================
// 2. CREATE STUDENTS LIST
// ======================================================

let studentsList = [

    new Student(101, "Ahmed", [95, 90, 88, 92], 95),

    new Student(102, "Sara", [80, 85, 78, 82], 90),

    new Student(103, "Mohamed", [45, 42, 48, 44], 85),

    new Student(104, "Mona", [50, 45, 42, 43], 70)

];


// ======================================================
// 3. DISPLAY STUDENTS REPORTS
// ======================================================

console.log("\n");
console.log("%c========== STUDENTS ACADEMIC REPORTS ==========",
    "color:#23585B; font-size:17px; font-weight:bold;");


// Different Color For Each Student

let studentColors = [

    "#2196F3",
    "#2E9B65",
    "#9B59B6",
    "#E67E22"

];


studentsList.forEach((student, index) => {

    let color = studentColors[index % studentColors.length];

    let average = student.calculateAverage().toFixed(2);

    let letterGrade = student.getLetterGrade();

    let result = student.getResult();


    console.log(
        "%c╔══════════════════════════════════════════════╗",
        `color:${color}; font-weight:bold;`
    );

    console.log(
        `%c║              STUDENT REPORT 0${index + 1}               ║`,
        `color:${color}; font-weight:bold;`
    );

    console.log(
        "%c╠══════════════════════════════════════════════╣",
        `color:${color}; font-weight:bold;`
    );

    console.log(
        `%c║ ID           : ${student.id}`,
        `color:${color}; font-weight:bold;`
    );

    console.log(
        `%c║ NAME         : ${student.name}`,
        `color:${color}; font-weight:bold;`
    );

    console.log(
        `%c║ GRADES       : ${student.grades.join(" | ")}`,
        `color:${color}; font-weight:bold;`
    );

    console.log(
        `%c║ AVERAGE      : ${average}`,
        `color:${color}; font-weight:bold;`
    );

    console.log(
        `%c║ LETTER GRADE : ${letterGrade}`,
        `color:${color}; font-weight:bold;`
    );

    console.log(
        `%c║ ATTENDANCE   : ${student.attendance}%`,
        `color:${color}; font-weight:bold;`
    );

    console.log(
        `%c║ RESULT       : ${result}`,
        `color:${color}; font-weight:bold;`
    );

    console.log(
        "%c╚══════════════════════════════════════════════╝",
        `color:${color}; font-weight:bold;`
    );

    console.log("\n");

});


// ======================================================
// 4. FILTER STRUGGLING STUDENTS
// ======================================================

console.log(
    "%c========== STRUGGLING STUDENTS ==========",
    "color:#C0392B; font-size:16px; font-weight:bold;"
);


let strugglingStudents = studentsList.filter(student => {

    let average = student.calculateAverage();

    return average >= 40 && average < 50;

});


console.table(

    strugglingStudents.map(student => ({

        ID: student.id,

        Name: student.name,

        Average: student.calculateAverage().toFixed(2),

        Attendance: student.attendance + "%"

    }))

);


// ======================================================
// 5. ADD 5 BONUS MARKS
// ======================================================

console.log(
    "%c========== BONUS MARKS ANALYSIS ==========",
    "color:#398B82; font-size:16px; font-weight:bold;"
);


let bonusResults = strugglingStudents.map(student => {

    let oldAverage = student.calculateAverage();

    let newAverage = oldAverage + 5;

    return {

        id: student.id,

        name: student.name,

        oldAverage: oldAverage,

        newAverage: newAverage

    };

});


console.table(

    bonusResults.map(student => ({

        ID: student.id,

        Name: student.name,

        "Original Average": student.oldAverage.toFixed(2),

        "Bonus Marks": 5,

        "New Average": student.newAverage.toFixed(2)

    }))

);


// ======================================================
// 6. CALCULATE TOTAL NEW AVERAGES USING REDUCE
// ======================================================

let totalNewAverages = bonusResults.reduce(

    (total, student) => total + student.newAverage,

    0

);


// ======================================================
// 7. CALCULATE FINAL AVERAGE
// ======================================================

let finalAverage = 0;

if (bonusResults.length > 0) {

    finalAverage = totalNewAverages / bonusResults.length;

}


// ======================================================
// 8. FINAL SUMMARY
// ======================================================

console.log(
    "%c========== FINAL ACADEMIC SUMMARY ==========",
    "background:#23585B; color:white; font-size:16px; font-weight:bold; padding:8px;"
);


console.table([{

    "Total Students": studentsList.length,

    "Struggling Students": strugglingStudents.length,

    "Total New Averages": totalNewAverages.toFixed(2),

    "Average After Bonus": finalAverage.toFixed(2)

}]);


// ======================================================
// 9. SYSTEM COMPLETED
// ======================================================

console.log(
    "%c SYSTEM EXECUTED SUCCESSFULLY! ",
    "background:#26766F; color:white; font-size:18px; font-weight:bold; padding:12px;"
);

console.log(
    "%c All Student Reports Have Been Generated.",
    "color:#398B82; font-size:14px; font-weight:bold;"
);
function showConsoleInstructions() {

    const instructions = document.getElementById("consoleInstructions");

    instructions.hidden = false;

}