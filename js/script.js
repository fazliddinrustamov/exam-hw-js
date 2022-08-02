var elQuestionForm = document.querySelector(".question-form");
var elStudentName = elQuestionForm.querySelector(".students-name");
var elStudentScore = elQuestionForm.querySelector(".students-score");

console.log(elQuestionForm);

var elResultTaker = document.querySelector(".result-taker");

elQuestionForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

  var studentsScore = Number(elStudentScore.value);

  if (isNaN(studentsScore)) {
    elResultTaker.textContent = "Add your score using number!";
  } else if (studentsScore <= 0) {
    elResultTaker.textContent = "Add your score using positive numbers!";
  } else if (studentsScore > 120) {
    elResultTaker.textContent = `Mr ${elStudentName.value} don't play with us, 120 is a max score :(`;
  } else if (studentsScore >= 90) {
    elResultTaker.textContent = `Mr ${elStudentName.value} did an excellent job with the exams, and won the grand! Congratulations :)`;
  } else if (studentsScore >= 60) {
    elResultTaker.textContent = `Mr ${elStudentName.value} joined to our family with the contract! Congratulations :)`;
  } else if (studentsScore >= 35) {
    elResultTaker.textContent = `Mr ${elStudentName.value} joined to university with the super contract! I am really sorry :(`;
  } else if (studentsScore >= 0) {
    elResultTaker.textContent = `Mr ${elStudentName.value} failed exams, try harder next year! Good luck)`;
  }
})