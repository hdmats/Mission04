$("#sendBtn").click(function () {
    //stops sight from auto refreshing after button was clicked (so the final grade actually says on the page)
    //event.preventDefault();

    
    //grabs variables from form
    let assignment = $("#assignment").val();
    let group = $("#group").val();
    let quiz = $("#quiz").val();
    let midterm = $("#midterm").val();
    let final = $("#final").val();
    let intex = $("#intex").val();

    ////gets the finalgrade using the weights from the syllabus
    let total = (assignment * .5) + (group * .1) + (quiz * .1) + (midterm * .1) + (final * .1) + (intex * .1);

    ////converts total grade into letter grade
    let finalGrade;
    if (total >= 94) {
        finalGrade = "A"
    }
    else if (total >= 90) {
        finalGrade = "A-"
    }
    else if (total >= 87) {
        finalGrade = "B+"
    }
    else if (total >= 84) {
        finalGrade = "B"
    }
    else if (total >= 80) {
        finalGrade = "B-"
    }
    else if (total >= 77) {
        finalGrade = "C+"
    }
    else if (total >= 74) {
        finalGrade = "C"
    }
    else if (total >= 70) {
        finalGrade = "C-"
    }
    else if (total >= 67) {
        finalGrade = "D+"
    }
    else if (total >= 64) {
        finalGrade = "D"
    }
    else if (total >= 60) {
        finalGrade = "D-"
    }
    else{
        finalGrade = "E"
    }

    ////replaces the html of the finalGrade element on the index page with final grade output
    //// Output Ex: "Final Grade: 99.25% A"
    $("#finalGrade").html("Final Grade: " + total.toFixed(2) + "% " + finalGrade);
})