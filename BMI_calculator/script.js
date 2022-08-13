
const button = document.getElementById('btn');


function calculate(){
    var bmi;

    var result = document.getElementById('result');
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);

    bmi = (weight/(Math.pow((height/100),2))).toFixed(2);
    result.innerText = bmi;
    console.log(bmi);

if(bmi<18.5){
    category = "underweight";
    result.style.color = "#ffc44d";
}
else if(bmi>=18.5 && bmi<=24.9){
    category = "normal";
    result.style.color = "#0be881";
    emoji = "😍";
}
else if(bmi>=25 && bmi<=29.9){
    category = "over weight";
    result.style.color = "#ff884d";
}
else{
    category = "obese";
    result.style.color = "#ff5e57";
}
console.log(category);
document.getElementById("category").innerText = category;
document.getElementById("emoji").innerText = emoji;
}


button.addEventListener('click',calculate);