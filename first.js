//pratice qn 

let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.shift();
console.log(companies);
companies.splice(2,1,"Ola");
console.log(companies);
companies.push("amazon");
console.log(companies);
//slice(),splice()
// let name=["Samip","Diwas","Usha","Amisha","kripa"];
// name.splice(1,1,"Aashika");
// console.log(name);
// console.log(name.slice(1,3));
//concat,unshift,shift
//  let name=["Samip","Diwas","Usha"];
//  name.shift();
//  console.log(name);
//  let age=[21,24,23];
//  let color=["yellow","blue","red"];
//  let concat=name.concat(age,color);
//  console.log(concat);
//array method
//push(),pop(),tostring
// let name=["Samip","Diwas","Usha"];
// console.log(name);
// console.log(name.toString());
// console.log(name);
// name.pop();
// console.log(name);
// let names=name.pop();
// console.log(names);
// name.push("Don");
// console.log(name);
// pratice qn 2
// let items=[250,645,300,900,50];
// for(i=0;i<items.length;i++)
// {
//     let value=items[i]/10;
//     let off=items[i]-value;
//   items[i]=off;
// console.log(`The value of  item after 10% off ${items[i]}`);
// }
//pratice qn 1
// let marks=[85,97,44,37,76,60];
// let sum=0;
// for (let i=0;i<marks.length;i++){
//     sum=sum+marks[i];
// }
// let avg=sum/marks.length;
// console.log(`The averge marks of total student is= ${avg}`);
// let marks=[20,34,35,37,54,70,80,60];
// //for loop
// for(let i=0;i<marks.length;i++)
// {
//     console.log(marks[i]);
// }
// let books=["Science","Math","English","Nepali"];
// for(let book of books){
//     console.log(book.toUpperCase());
// }
// console.log(marks);
// console.log(marks[2]);
// console.log(marks[5]);//undefine
// let books=["Science","Math","English"];
// console.log(books);
// console.log(marks.length);
// books[1]="Samip";
// console.log(books);