// Создайте пустой массив с именем grades и заполните массив случайными оценками от 1 до 100 для 12 студентов. Для генерации случайных оценок, используйте функцию Math.random().
let listForGrades = new Array(12).fill();
console.log(listForGrades);

let grades = listForGrades.map(function () {
  let grade = Math.floor(Math.random() * 100 + 1);
  return grade;
});

console.log(grades);

//Рассчитайте и выведите средний балл студентов, используя методы массивов.
function calculateAverage(array) {
  let total = 0;

  array.forEach(function (num, index) {
    total += num;
  });

  return Math.floor(total / (array.length - 1));
}

console.log(`Средний балл студентов: ${calculateAverage(grades)}`);
//Найдите и выведите максимальный балл среди студентов, используя соответствующий метод массива.
console.log(`Максимальный балл: ${Math.max(...grades)}`);
//Найдите и выведите минимальный балл среди студентов, используя соответствующий метод массива.
console.log(`Минимальный балл: ${Math.min(...grades)}`);
// Посчитайте и выведите количество студентов, получивших положительную оценку (балл выше или равен 60). Используйте метод массива, который фильтрует оценки и оставляет только те, которые соответствуют заданному условию. Затем посчитайте количество оставшихся оценок и выведите результат.

const passedStudents = grades.filter((el) => el >= 60);
console.log(`Положительных оценок: ${passedStudents.length}`);

// Посчитайте и выведите количество студентов, получивших отрицательную оценку (балл ниже 60). Используйте аналогичный подход, как в предыдущем шаге.

const notPassedStudents = grades.filter((el) => el < 60);
console.log(`Отрицательных оценок: ${notPassedStudents.length}`);
// Преобразуйте числовые оценки в формат буквенных оценок A/B/C/D/E, используя следующие правила:
// Если оценка находится в диапазоне от 80 до 100, преобразуйте её в "A"
// Если оценка находится в диапазоне от 60 до 79, преобразуйте её в "B"
// Если оценка находится в диапазоне от 40 до 59, преобразуйте её в "C"
// Если оценка находится в диапазоне от 20 до 39, преобразуйте её в "D"
// Если оценка ниже 20, преобразуйте её в "E"
// Выведите все найденные значения на экран.

let letterGrades = [...grades];
console.log(letterGrades);

letterGrades = letterGrades.map(function convertToLetterGrade(grade) {
  let letterGrade;

  switch (true) {
    case grade >= 80 && grade <= 100:
      letterGrade = "A";
      break;
    case grade >= 60 && grade <= 79:
      letterGrade = "B";
      break;
    case grade >= 40 && grade <= 59:
      letterGrade = "C";
      break;
    case grade >= 20 && grade <= 39:
      letterGrade = "D";
      break;
    default:
      letterGrade = "E";
  }

  return letterGrade;
});

console.log(letterGrades);
