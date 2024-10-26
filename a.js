// console.log(a);
// function show(){ 
//     console.log(a);
//     var a="kanita"; 
//     console.log(a);
// }

// show();


// function show(){
//     let a=[1,2,3,4];
//     for(let i=a.length;i>=0 ;i--){
//         console.log(a[i]);

//     }
// }show();





// let s={eno:101,'name':'kanita'}
// console.log(s);
// console.log(s.eno);
// console.log('name='+s.name);
// document.writeln(`the detailes of object is a &{s}`);

// document.write("whole obj="+s);
 


// let e1={name:'vijay',sal:2500}
// let e2={name:'sita',sal:1500}
// console.log(e1);
// console.log(e2);



// array of object
//  let e=[{eno:101,'name':'kanita'},{eno:102,'name':'verma'}];
//  for(let i of e){
//     console.log(i);
//     console.log(i.name)
//  }
//  for(let i=0;i<e.length;i++){
//     console.log(e[i]);
//     console.log(e[1]);
//  }



// for(let i of e){
//     console.log(i.eno)
//     console.log(i.name)
// }



//Array of array
let e=[[101,'kanita'],[102,'verma']]

for(let i=0;i<e.length;i++){
    for(let j=0;j<e[i].length;i++){
        console.log(e[i][j]);
    }
}

