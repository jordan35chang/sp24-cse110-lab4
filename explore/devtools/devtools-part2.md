## **1.**  
The bug was that it was taking in the user inputs and leaving it as a string. So when the addition expression was executed, it performed the operation for strings, thus combining the two strings rather than adding them numerically.  
  
## **2.**  
In order to fix the bug, you would have to convert the user's input into an integer, and then perform the addition operation.