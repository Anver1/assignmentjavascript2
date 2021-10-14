 var  array = [12,23,11,45,67]
 var max =0;
 function maxArray(arr, max){
      for( i=0; i<arr.length; i++){
          if(arr[i]>max)
          {
              max =arr[i]
          }
    

        }
        console.log("max :" +max);
 }
 maxArray(array,0)

