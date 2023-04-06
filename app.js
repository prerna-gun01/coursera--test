var student = {
    name:"",
    type:"student"
};

document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event){
    document.getElementById('name').addEventListener("keyup", keyUp);
}

function keyUp(event){
    calculateNumericOutput();
}

function calculateNumericOutput(){
    student.name = document.getElementById('name').ariaValueMax;
    var totalNumberValue = 0;
    for(var i =0; i<student.name.length; i++){
        totalNumberValue += student.name.charCodeAt(i);
    }
    var output = "Total Numeric value of person's name is " + totalNumberValue;
    document.getElementById('output').innerText = output;
}