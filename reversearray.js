 var array = [1,2,3,4,5];
  var arr1 =[];
  function reverse(arr)
  {
       for(let i=arr.length-1; i>=0; i--)
        {
          arr1.push(arr[i]);
        
       }
       console.log(arr1);
  }
  reverse(array)
 