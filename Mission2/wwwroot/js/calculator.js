$('#btncalculate').click(function () {
    //grab all the values
    assignment = $('#assignments').val() * .55
    project = $('#project').val() * .05
    quizzes = $('#quizzes').val() * .10
    exams = $('#exams').val() * .20
    intex = $('#intex').val() * .10

    //total grade
    totalgrade = assignment + project + quizzes + exams + intex

    //determine letter grade
    lettergrade = ''

    if (totalgrade >= 94) {
        lettergrade = 'A'
    } else if (totalgrade >= 90) {
        lettergrade = 'A-'
    } else if (totalgrade >= 87) {
        lettergrade = 'B+'
    } else if (totalgrade >= 84) {
        lettergrade = 'B'
    } else if (totalgrade >= 80) {
        lettergrade = 'B-'
    } else if (totalgrade >= 77) {
        lettergrade = 'C+'
    } else if (totalgrade >= 74) {
        lettergrade = 'C'
    } else if (totalgrade >= 70) {
        lettergrade = 'C-'
    } else if (totalgrade >= 67) {
        lettergrade = 'D+'
    } else if (totalgrade >= 64) {
        lettergrade = 'D'
    } else if (totalgrade >= 60) {
        lettergrade = 'D-'
    } else {
        lettergrade = 'E'
    }

    //display 
    alert("Grade: " + totalgrade.toFixed(2) + "%\nLetter Grade: " + lettergrade)
})