var str ="hello"
var str1=""
 
 function reverse(array)
 {
      for(let i=array.length-1; i>=0; i--)
      {
           str1 = str1+array[i]
           
      }
      console.log("the reverse string is:" +str1)
      
      
 }
 reverse(str)