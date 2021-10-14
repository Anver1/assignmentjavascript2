  var x;
  function palin(x)
{
  
    x = x.toString()
   if(x===x.split('').reverse().join(''))
   {
   return true
   }
   else
   {
   return false
   }

}
var a =palin(121);
console.log(a)