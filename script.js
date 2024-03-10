let listForGrades = new Array(12).fill();
console.log(listForGrades);

let grades = listForGrades.map(function () {
  let grade = Math.floor(Math.random() * 100 + 1);
  return grade;
});

console.log(grades);

function calculateAverage(array) {
  let total = 0;

  array.forEach(function (num) {
    total += num;
  });

  return Math.floor(total / (array.length - 1));
}

console.log(`Средний балл студентов: ${calculateAverage(grades)}`);
console.log(`Максимальный балл: ${Math.max(...grades)}`);
console.log(`Минимальный балл: ${Math.min(...grades)}`);

const passedStudents = grades.filter((el) => el >= 60);
console.log(`Положительных оценок: ${passedStudents.length}`);

const notPassedStudents = grades.filter((el) => el < 60);
console.log(`Отрицательных оценок: ${notPassedStudents.length}`);

let letterGrades = [...grades];
console.log(letterGrades);

letterGrades = letterGrades.map(function (item) {
  if (item >= 80 && item <= 100) {
    return "A";
  } else if (item >= 60 && item <= 79) {
    return "B";
  } else if (item >= 40 && item <= 59) {
    return "C";
  } else if (item >= 20 && item <= 39) {
    return "D";
  } else {
    return "E";
  }
});

console.log(letterGrades);
