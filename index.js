// Function Declaration Write a function that accepts two numbers as parameters, and returns the sum. 

function sum(num1, num2) {
	return num1 + num2
	}
  var result = sum;
console.log(sum(15, 33))
console.log("^It Worked 15+33")
console.log(sum(-4, 33))
console.log("^It Worked -4+33")
console.log(sum(-4, -4))
console.log("^It Worked -4+(-4)")

//Write a function that accepts three numbers as parameters, and returns the largest of those numbers.
function grtnum(num1,num2,num3){
        return Math.max(num1, num2, num3);
      }
console.log(grtnum(457, 2, 2788))
console.log("^console.log(grtnum(457, 2, 2788))")

//Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");

function isEven(num1) {
        var isNum = Number.isFinite(num1);
        if (!isNum) {
          return false;
        }
        if (num1 % 2 == 0) return "even";
        else return "odd";
      }
console.log(isEven(1));
console.log("^isEven(1)");
console.log(isEven(2)); 
console.log("^isEven(2)");
console.log(isEven(3)); 
console.log("^isEven(3)");
console.log(isEven(4)); 
console.log("^isEven(4)");
console.log(isEven(5)); 
console.log("^isEven(5)");
console.log(isEven(5.5)); 
console.log("^isEven(5.5)need to fix this with some code");

//Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string. You will need to use a string method or two:
//-slice()
//-concat() (optional)

function stringLength(string) {
        if (string.length <= 20) {
          return string.concat(string)
        } else {
          var index = string.length / 2;
          return string.slice(0, index);
        }
      }
console.log(stringLength("Tear down this wall!"));
console.log("^Tear down this wall! x2");
console.log(stringLength("Mr. Gorbachev, tear down this wall!"));
console.log("^Mr. Gorbachev, tear down this wall! cut in 1/2");

//Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers and return their sum.
function fibonacci(n) {
        var next;
        var sum = 0;
        
        var num1 = 1; 
        var num2 = 1; 
        
        for (var i = 0; i < n; i++) {
          console.log(num1);
          sum = sum + num1;
          next = num1 + num2; 
          num1 = num2; 
          num2 = next; 
        } 
        return sum;
      }
      fibonacci(12);
      console.log("^fun fact 12x12 is a GROSS I learned this just this weekend from my daughter");
      
      
      let ASCII_SIZE = 256;
      function getMaxOccuringChar(str)
      {
       
          // Create array to keep the count of individual
          // characters and initialize the array as 0
          let count = new Array(ASCII_SIZE);
          for (let i = 0; i < ASCII_SIZE; i++)
          {
              count[i] = 0;
          }
           
          // Construct character count array from the input
          // string.
          let len = str.length;
          for (let i = 0; i < len; i++)
          {
              count[str[i].charCodeAt(0)] += 1;
          }
          let max = -1;   // Initialize max count
          let result = ' ';   // Initialize result
           
          // Traversing through the string and maintaining
          // the count of each character
          for (let i = 0; i < len; i++)
          {
              if (max < count[str[i].charCodeAt(0)])
              {
                  max = count[str[i].charCodeAt(0)];
                  result = str[i];
              }
          }
          return result;
      }
       
      // Driver Method
      let str = "peter piper picked a peck of pickled peppers";
      console.log("Max occurring character is " , getMaxOccuringChar(str));
      console.log("^peter piper picked a peck of pickled peppers")
     