
const calc = () =>{
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
 
    let heightSquare = height * 2;
    let BMI = weight / heightSquare;

    document.getElementById("answer").value=BMI;

    if(BMI >= 25.0){
        document.getElementById("advise").innerHTML = "you are overweight, kindly work on your safe to maintain a healthy health."
    }
    else if(BMI >=18.5 && BMI <= 24.9){
        document.getElementById("advise").innerHTML = "your Body  Mass Index is good, make sure you maintain it, thank you."
    }
    else if(!BMI){
        document.getElementById("advise").innerHTML = ""
    }
    else{
        document.getElementById("advise").innerHTML = "Please see a doctor"
    }
}