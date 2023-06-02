
/*
Progam: Computation of Grades Using Function
Programmer : Jose Gabriel Abaya
Section: AN22

*/

class Student{
    constructor(names,enablingAssesment,summativeExam,majorGradeExam){
    this.names = names
    this.enablingAssesment = enablingAssesment
    this.summativeExam = summativeExam
    this.majorGradeExam = majorGradeExam
    }
    calculateEnablingAssesment(){
        let total = 0;
        for (let i = 0; i < this.enablingAssesment.length; i++) {
          total += this.enablingAssesment[i];
        }
        return total / this.enablingAssesment.length;
      }

    calculateSummativeExam(){
        let total = 0;
        for (let i = 0; i < this.summativeExam.length; i++) {
          total += this.summativeExam[i];
        }
        return total / this.summativeExam.length;
      }
      calculateMajorGradeExam(){
        let score = this.majorGradeExam
        return score
      }
      getGradeScore(){
        let total = (this.calculateEnablingAssesment() *.3) + (this.calculateSummativeExam()*.3) + (this.calculateMajorGradeExam() *.4)
        return total
      }
      getLetterGrade() {
        const gradeScore = this.getGradeScore();
        if (gradeScore >= 90) {
          return 'A';
        } else if (gradeScore >= 80) {
          return 'B';
        } else if (gradeScore >= 70) {
          return 'C';
        } else if (gradeScore >= 60) {
          return 'D';
        } else {
          return 'F';
        }
      }
      toString() {
        const enablingAssessment = this.calculateEnablingAssesment()
        const summativeExam = this.calculateSummativeExam();
        const majorGradeExam = this.calculateMajorGradeExam();
        const gradeScore = this.getGradeScore();
        const letterGrade = this.getLetterGrade();
        return `| Name: ${this.names} | Enabling Assessment: ${enablingAssessment} | Summative Exam: ${summativeExam} | Major Grade Exam: ${majorGradeExam} | Grade Score: ${gradeScore} | Letter Grade: ${letterGrade} |`;
    }

}
let studentArray = []
for(let i = 0 ; i < 5;i++){
let names = prompt("Enter the name of student")
let enablingAssesment = []
let summativeExam = []
for(let i = 1 ; i <= 5 ; i++){
    let enablingAssesmentInput = prompt("Enter enabling Assesment "+ i+":")
    enablingAssesment.push(parseFloat(enablingAssesmentInput))
}
for(let i = 1 ; i <= 3 ; i++){
    let summativeExamInput = prompt("Enter Summative assesment "+ i+":")
    summativeExam.push(parseFloat(summativeExamInput))
}
let majorgradeExam = prompt("Enter Major Grade Exam")
let student = new Student(names,enablingAssesment,summativeExam,majorgradeExam)
studentArray.push(student)
}
for(let i = 0 ; i < studentArray.length ; i++){
    console.log(studentArray[i].toString())
    console.log("")
}











