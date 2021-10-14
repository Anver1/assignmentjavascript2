 var n;
 function primeNumber(n){
      if(n===0){
          return false;
      }
      else{
          if(n===2)
          {
              return true;
          }
          else{
              for(i=2; i<=n; i++){
                  if(n%i==0){
                      return false;
                  }
                  else{
                      return true;
                  }
              }
          }
      }
 }

 console.log("the number is:" +primeNumber(37));
