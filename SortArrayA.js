 function sort(){
 let arr=[3,5,2,3,6,9];
 let temp;
 for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
            
        }
    }
 }
 for(let k=0;k<arr.length;k++){
    console.log(arr[k]);
 }
}
 sort();