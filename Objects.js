
  // node Objects.js

  const mysym = Symbol("key1")

   const person ={
      name:"arqam",
      [mysym]:"mykey1",
      age:22,
      city:"fsd",
      degree:"bcss"
   }

   console.log(person.name);

   console.log(person["age"]);

   console.log(person[mysym]);
   

   person.age=23; // change value of age 

   console.log(person.age);

   person.city="lhr" //change value of city

   console.log(person.city);

   Object.freeze(person)  // now the values of objects can not be cahnged

   person.degree="msc"

   console.log(person.degree);
   
   console.log(person);

   // object within object


   const person2={}

   person2.name="shahzaib"
   person2.age=20

   const personinfo={
    shahinfo:{
      age:24,
      shahcityinfo:{
         city:"islamabad",
         city2:"lahore"
      }
    }
   }
   
   console.log(person2);

   console.log(personinfo.shahinfo.age);
   
   console.log(personinfo.shahinfo.shahcityinfo.city);
   
   console.log(personinfo.shahinfo.shahcityinfo.city2);


   // merge two or more objects in one object

   let obj1={
      key_1:1,
      key_2:2,
      key_3:3
   }
   let obj2={
      key_4:4,
      key_5:5,
      key_6:6
   }
   
   let obj3={
      key_7:7,
      key_8:8,
      key_9:9
   }

   // const finalobj = Object.assign( {},obj1,obj2)     //assign used to merge two or more objects

   const finalobj={...obj1,...obj2,...obj3} // also used to merge objects

   console.log(finalobj);



   console.log(Object.keys(finalobj)); //gives keys of finalobj 


   console.log(Object.values(personinfo)); //gives values of personinfo object

   console.log(Object.entries(finalobj)); //gives values and keys in arrays
   
   
   
   



   
   

   
   


   