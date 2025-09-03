
// node array.js

let Myarray = ["hello",3,7,8,5 ,"world"]

Myarray.unshift("hi") // ad element in first index

 Myarray.shift() // remove first index element


Myarray.push("arqam") //add element tu last index

Myarray.pop() //remove last index element

// console.log(Myarray); 

//  slice and splice

let myarr2 =["myarr2",1,2,3,4,5]

let newarr2 = myarr2.slice(1,3) // not change original array only give element from index 1 to 3 but not include 3

console.log(myarr2);

console.log("slice",newarr2);

let myarr3 =[ "myarr3" ,1,2,3,4,5]

let newarr3= myarr3.splice(1,3) // it change original array  from index 1 to 3 but not include 3 
                                                                    //  and  return removed element in an array 

console.log(myarr3);

console.log("splice",newarr3);

// array conacat

 let hero =["ironman","superman","batman"]

 let hero2 =["spiderman","thor","hulk"]

 let all_hereos = hero.concat(hero2)

 console.log(all_hereos);
 
 console.log(all_hereos[3]);

 console.log(all_hereos.indexOf("spiderman"));
 
 
 
 