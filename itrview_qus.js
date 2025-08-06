// //find duplicate and unique number 
// let arr=[5,9,4,8,2,8,9];
// let obj ={}
// for(let a of arr){
//     if(!obj[a]){
//         obj[a]=1;
//     }else{
//         obj[a]++;
//     }
// }
// for(let  i in obj){
//     if(obj[i]>1){
//         console.log("Duplicate values:"+i);
//     }
// }
// for(let i in obj){
//     if(obj[i]==1){
//         console.log("Unique values:"+i)
//     }
// }









//find second largest number
let number =[6,7,8,9,5,4,3,2]
let largest=0;
let secondlargest=0;
for(i=0;i<number.length;i++){
    if(number[i]>largest){
        secondlargest=largest;
        largest=number[i];
    }else if(number[i]>secondlargest && number[i] !== largest){
        secondlargest=number[i];
    }
}
console.log("Largest:"+largest);
console.log("secondlargest:"+secondlargest);