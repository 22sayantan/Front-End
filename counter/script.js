const plus = document.querySelector(".increase"),
minus = document.querySelector(".decrease"),
reset = document.querySelector(".reset");
let value = document.getElementById("v");
const x =0;
let m = x;

function add(){
    console.log("clicked");
    // console.log(value); 
    m += 1;
    value = m;
    console.log(value);
    present_value = value;
    
    document.getElementById("val").innerHTML= window.present_value;
    // x += 1;
    // value = x;
    // console.log(value);
}

function sub(){
    console.log("clicked");
    present_value -= 1;
    if(present_value>=0){
        console.log(present_value);
        document.getElementById("val").innerHTML= window.present_value;
    }else{
        console.log("it's already 0 please increament number ");
    }
    

}

function zero(){
    console.log("clicked");
    m=0;
    document.getElementById("val").innerHTML=m;
}

plus.addEventListener("click",add);
minus.addEventListener("click",sub);
reset.addEventListener("click",zero);