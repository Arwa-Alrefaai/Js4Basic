//------------Ex1-------------
document.getElementById("calcresult").addEventListener("click" , sum);
let colorElemnt = " "
let result2 =""
function sum(){
    let fname = document.getElementById("Fname").value;
    let lname = document.getElementById("Lname").value;
    let age =  document.getElementById("age").value;
    let result1 = (fname + " " + lname + " " + age);
    if(fname.length > 5 ){
        colorElemnt = "red";
    }
    else{
        colorElemnt = "green";
    }
    document.getElementById("result").innerHTML = result1 ;
    document.getElementById("result").setAttribute("class", colorElemnt);
}

//------------Ex1-2-------------

document.getElementById("selectv").addEventListener("click" , colorbg)
let valselect = document.getElementById("selectv").value;
let colorE = " ";
function colorbg(){
    if (valselect == " IT " ){
        colorE = "yellow";
}
     

else{
         if (valselect == "hospitality" ){
             colorE = "blueviolet";}

else{
        valselect=="driver";
        colorE = "aqua";
    }
    document.getElementById("result2").setAttribute("class",colorE);
}
   


}
