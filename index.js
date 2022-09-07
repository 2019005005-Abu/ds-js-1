console.log("Welcome to the data strucrure and Algorithoms in Javascript ");

//Readable code
const add=function(first_number,second_number){
   return first_number+second_number;
}
console.log(add(100,200));

const sumOfNumbers=function(){
    let sum=0;
    for(var i=0;i<=100;i++){
        sum+=i;
    }
}
console.log(sumOdNumber(100));
console.log(sumOdNumber(10000000000000000));
//(5n+2)=======>Big 0(n);


function sumOdNumber(n){
    return n*(n+1)/2;
}
console.log(sumOdNumber(100));
console.log(sumOdNumber(10000000000000000));


const mulTipleArray=function(n){
     for(var i=0;i<5;i++){
        for(var j=0;j<5;j++){
             console.log(i*j);
        }
     }
}
console.log(mulTipleArray(3))
//The  complexity her =>O(n)*O(n)=>O(n^2)=>Big O(n) square

//Time complexity if this program is =>Big 0(1)

const maxNumber=function (n) {
 for(let i=0;i<=Math.max(5,n);i++){
    console.log(i);
 }
  }
  console.log("Mx-Number",maxNumber(3));
//Time complexity=>BigO(n)

  const minNumber=function(n){
    for(let i=0;i<=Math.min(10,n);i++){
        console.log(i);
    }
  }
  console.log('Min-Number',minNumber(9));
//Time Complexity=>BigO(1)



//Space complexity=>
function sum(arr){
    let total=0;
    for(let i=0;i<arr.length;i++){
        total+=arr[i];
    }
    return total;
}
console.log(sum([10,20,30,40]));

//The Space complexity of this array is O(1) or Order of 1;

const double=function(arr){
    let newArr=[];
    for(let i=0;i<newArr.length;i++){
        newArr.push(arr[i]*2);
    }
    return newArr;
}

console.log(double([10,20,30,40,50,60]));
//The space complexity of this array is O(n) or Order of n;

