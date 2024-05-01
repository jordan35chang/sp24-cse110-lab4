# Part 1. A Quick Introduction
## **1.**  
values added: 20  
  
## **2.**  
final result: 20  
  
## **3.**  
values added: 20  
  
## **4.**  
This line produces an error. Because the variable 'result' has been declared with the keyword 'let' instead of 'var', the variable's scope is only within the if block. Since line 13 is out of the block, 'result' is then not defined, producing an error.  
  
## **5.**  
Line 9 produces an error. Since we declared result using the 'const' keyword, it means we cannot reassign it's value after it has already been assigned. Since we try to reassign results value to be the sum of num1 and num2 after already assigning it the value of 0, it produces an error.  
  
## **6.**  
Line 13 will produce an error. Since 'const'gives the variable the same scope as the 'let' keyword, 'result' would then still only be in the scope of the if code block. So similar to question 4, link 13 is outside of the code block, and thus not in the scope of 'result', producing an error.  
  
# Part 2. A Little More of a Challenge...  
## **1.**  
Line 12 will print 3. Because i is declared using the var keyword, it has a scope of the function, so running line 12 would print the value of i, which would be 3.  
  
## **2.**  
Line 13 will print 150. discountedPrice is declared using var, so it also has scope of the entire function, so this allows for discountedPrice to be assigned the new value within the for loop. After the last iteration in the for loop, discountedPrice is no longer assigned a new value, so line 13 then prints then prints the current value of discounted price, being 150.  
  
## **3.**  
Line 14 will print 150. Similar to the discountedPrice variable, finalPrice is also declased using var, allowing for it to be assigned new values within the for loop. After the last iteration, line 14 prints the value of finalPrice after the iterations are complete, thus printing 150.   
  
## **4.**  
This function returns the new array created after running the function, however it does not print out anything to the console. Since there are no commands to print out any values, nothing is actually outputed, but since the function returns discounted after running through the whole function, it will update discount to no longer be an empty array, and now is the array [50, 100, 150].  
  
## **5.**  
Line 12 will produce an error. Since the variable i is now declared using the let keyword, it no longer has scope of the whole function, but now the scope is within the for loop. Since line 12 is not in the for loop, i would therefore not be defined, thus producing an error.  
  
## **6.**  
Line 13 also will produce an error. Similar to the previous question, the variable discountedPrice is also declared within the for loop using the let keyword, so it also has a scope only within the for loop. Thus when line 13 calls discountedPrice, it will produce an error since line 13 is not inside the for loop, so discountedPrice would not be defined.  
  
## **7.**  
Line 14 will print 150. Since the variable finalPrice is declared inside the function using let keyword, it's scope is the entire function. This allows for the value of the variable to be reassigned within the for loop, and also allows for line 14 to properly call the variable. When line 14 calls finalPrice, the value of the variable would be the value assigned to it during the last iteration of the for loop, thus printing out 150.  
  
## **8.**  
This function will return the updated value of the variable discounted, however nothing will be outputed to the console. Because the variable discounted is declared in the function using let, the scope is still the entire function. This allows for the value of discounted to be changed within the for loop, and the new array produced in discounted is then returned. However, since there are no commands that print anything to the console, the console will not have any output, but the discounted array is still updated to be [50, 100, 150].  
  
## **9.**  
Line 11 will produce an error. Since the variable i is still being declared using the keyword let, the scope of i is still within the for loop. Because line 11 is outside of the for loop, when it calls the variable i, it will produce an error, saying that the variable i is not defined.  
  
## **10.**  
Line 12 will print 3. When the variable length is declared, it is given the value of the length of the array prices, which in this case is 3. Since the variable is declared using the keyword const, it means that the variable cannot be assigned any new value, so when line 12 is ran, it will print the value originally given to it when it was declared, thus printing 3.  
  
## **11.**  
This function will return the updated value of the discounted array. Although the variable discounted is declared using the const keyword, the array can still be modified using the push method. Because of this, the for loop still is able to update discounted and cahnge it's value. So when discounted is returned, it will now have the value of [50, 100, 200], however nothing gets outputed to the console, so the console remains blank.  