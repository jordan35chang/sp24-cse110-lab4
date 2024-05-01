## **12.**  
### **A.**  
student.name  
### **B.**  
student["Grad Year"]  
### **C.**  
student.greeting()  
### **D.**  
student["Favorite Teacher"].name  
### **E.**  
student.courseLoad[0]  
  
## **13. Arithmetic**  
### **A.**  
This equation produces the string '32' since integers map to their exact string representation.  
### **B.**  
This equation produces the integer 1, since the string '3' gets converted to an integer, resulting in 3-2.  
### **C.**  
This equation produces the integer 3, since null becomes 0 in numeric conversion.  
### **D.**  
This equation produces the string '3null', since null is converted to a string, thus combining both strings together.  
### **E.**  
This equation produces the integer 4, since true gets converted to 1 in numeric conversion.  
### **F.**  
This equation produces the integer 0, since false and null both get converted to 0 in numeric conversion.  
### **G.**  
This equation produces the string '3undefined', since undefined gets converted to 'undefined' through string conversion, thus combining the two strings.  
### **H.**  
This equation produce NaN, since undefined gets converted to NaN through numeric conversion, causing an error in the equation, thus giving NaN as the end result.  
  
## **14. Comparison**  
### **A.**  
This comparison gives true, since '2' is converted to 2 through numeric conversion.  
### **B.**  
This comparison gives false, since when comparing strings javascript uses lexicographical order, so comparing the first letter, '2' is not less than '1', thus giving false.  
### **C.**  
This comparison gives true, since when comparing values of different types, javascript converts them to numbers, so '2' becomes 2.  
### **D.**  
This comparison gives false, since you are using the strict equality (===), which does not convert types, so since 2 and '2' are different types, it returns false.  
### **E.**  
This comparison gives false, since javascript converts the types to integers, so true becomes 1, which is not == to 2.  
### **F.**  
This comparison gives true, since 2 becomes true by boolean conversion, and true is === to true, thus giving the result true.  
  
## **15.**  
The difference between == and === operators is that the == operator checks for equality by converting types to numbers if the two types being compared are different, while the === operator is a strict equality, meaning that the operator does not do type conversion, so it will immediately return false if the two elements being compared are of different types.  
  
## **17.**  
The result from calling modifyArray([1, 2, 3], doSomething), is a new array [2, 4, 6]. To get this result, you first look at the modifyArray function, where it goes through each element in the parameter array. This means it first looks at 1, since we are passing [1, 2, 3] as the array. Then the for loop pushes a new element to newArr, and the new element is found by running the callback function(in this case doSomething), with the parameter num(in this case 1). The for loop continues to push new elements into the newArr until exiting the for loop, and once exited, modifyArray returns the newArr, in this case being [2, 4, 6].  
  
## **19.**  
This code prints out 1, then prints out 4, then prints out 3, and pauses slightly before printing out 2. The function runs the first console.log, thus printing out 1 first, then it runs the next console.log, printing out 4 next. After it then runs the setTimeout commands, printing out 2 after a delay of 1000ms, and prints 3 with a delay of 0ms. This causes the output to be 1, then 4, then 3, and then finally 2 after a delay.  