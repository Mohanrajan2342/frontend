//statements
//condition itterative switch jump
//if
if(""){
    console.log("True");
}else{
    console.log("False");
}

if(12)
    console.log("12");

if(undefined){
    console.log("True");
}else{
    console.log("False");
}

if(0){
    console.log("True");
}else{
    console.log("False");
}

if(false)
    ;
console.log("2nd state is run");

//ladder
let marks = 64;
if(marks >= 80) {
    console.log(marks,"has A Grade");    
}else if(marks >=70) {
    console.log(marks,"has B Grade");
}else if(marks >=60) {
    console.log(marks,"has C Grade");
}else {
    console.log(marks,"has D Grade");
}

//itterative
let age = 21;
let percentage = 80;
if (age >= 18) {
    if (percentage >= 70) {
        console.log("Eligible for apply job");
    }else {
        console.log("Not eligible for apply job");
    }
}else {
    console.log("You are not for this position");
}

//for
for(let i=0;i<6;i++) {
    console.log("itterative: "+i);
}

for (let j=0; j<5;){
    console.log(j);
    j++;
}

let a = [1,3,5,7];
for(let i=0;i<5;i++){
    console.log("For using:"+ a[i]);
}

//while
let i=0;
while(i<a.length){
    console.log("Array element:"+ a[i]);
    i++;
}

//do while
i=0;
do{
    console.log("Do while element");
}while(i>0){
    console.log("While also working");
}

