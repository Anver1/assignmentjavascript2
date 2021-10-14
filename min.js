var array = [12,45,67,23,1]

function minArray(arr){
    for(i=1; i<arr.length; i++)
    {
        min= arr[0]
        if(min>arr[i])
        {
        min=arr[i]
        }
    }
console.log("min is :" +min)
}
minArray(array)