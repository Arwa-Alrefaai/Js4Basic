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
// let valselect = document.getElementById("selectv").value;
let colorE = " ";
function colorbg(){
    let valselect = document.getElementById("selectv");
    let optionVal = valselect.value;
    console.log(optionVal);
    if (optionVal =="it"){
    colorE = "blueviolet";
}
else{
        if (optionVal == "hospitality" ){
             colorE = "aqua";}
  else {
            optionVal =="driver";
        colorE = "yellow";
    }
}
    document.getElementById("result2").setAttribute("class", colorE);  
}
