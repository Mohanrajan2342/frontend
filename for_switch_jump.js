//advance for
let arr = [1,2,3,4,5,2,1]
        // 0,1,2,3,4,5,6
for(let a of arr){
    console.log("first",a);
}


for(let a in arr){
    console.log("second",a);
}

for(let b of arr){
    if(b==6)
        break;
    console.log("third",b);
}

for(let k of arr){
    if(k==3){
        break;
    }
    console.log("Array element:"+k);
}

let object = {name:"Mohan",age:23,qualification:"Mca"};
for(let key in object){
    console.log("Values:"+object[key]);
}

for(let i=0;i<5;i++){
    if(i==4){
        continue;
    }
    console.log("Values:"+i);
}

//switch statement
let grade = "B";
switch(grade){
    case"A":
        console.log("First class");
        break;
    case"B":
        console.log("Second class");
        break;
    case"C":
        console.log("Third class");
        break;
    default:
        console.log("Fail");
}


