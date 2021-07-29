
console.log("hello world");


// creating new string from given string by adding first 3 and last 3 chareteters..and lenth should be 3 or more if not return org.
const makeNewString=(str) => str.length < 3 ?  str : str.slice (0, 3) + str.slice(-3);
console.log(makeNewString('abcdefgh'));
console.log(makeNewString('abdff'));  


    
 //extract first half of string of even length 
 const firstHalf = (str)=> str.slice(0,str.length/2);
 console.log(firstHalf('lmnop'));

 // concatenate two strings except their first charecters
  const firstChar =(str1 , str2) => str1.slice(1) + str2.slice(1);
  console.log(firstChar('abcde','lmnop' ));

  //program to fnd out which one is nearest to 100
  const closeTo100 =(a,b) => (100 - a) < (100-b)? a:b;
  console.log(closeTo100(55,56));

  //program find no of even digits in an array of integers
  const countEvenNum = (arr) => arr.filter(num => num % 2 ===0).length;
  console.log(countEvenNum([1,2,3,4,5,6]));

//find num of even values up to a given number
 const createArrayOfNumbers = (num) => {
     const returnArray =[];
     for (let i=1; i<= num; i+= 1){
         returnArray.push(i);
     }
     return returnArray;
     };
     console.log(countEvenNum(createArrayOfNumbers(6)));
     console.log(countEvenNum(createArrayOfNumbers(9)));


//check weather a given array of integers is sorted in ascending order
const isAscendingOrd =(arr) => {
    for(let i =0; i< arr.length; i +=1){
        if (arr[i-1] < arr[i]) return false; 
    }
    return true;
    }
console.log(isAscendingOrd([1,2,3,4,5,6]));
console.log(isAscendingOrd([1,2,5,4,6,6]));
console.log(isAscendingOrd([1,2,3,4,6,7]));


     
 
 
 
console.log('lmo')
