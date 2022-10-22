 
var name="SRP";
name="123";
var name ="Serap"; //unutulum bir çok yerde bir çok kez tanımlana bilir güvenilir değil !
console.log(name);
let nameLet="serap";
// let nameLet="SRP"; tanımlanamaz !
nameLet="serap";
console.log(nameLet);

// const başlangıç değeri verilmeli değersiz undefined tanımlanamaz
// ikikez tanımlanamaz
// verilen değişken değiştirilemez 

const name2 ="ssss";
console.log(name2);

// sadece dizilerde eleman eklerken değeri degil referns ettiği yer nedeniyle eklene bilir.
// anın degeri değişmez a nın gösterdiği yerin değeri değişir.
const a=[1,2,3,4,5];
console.log(a);
a.push(7);
a.unshift(2);

console.log(a);

  
// veri tip değişimleri
let value=String(123);
console.log(value);
console.log(typeof value);

value2=Number("123");

// null -0
// undefined -Nan
// string-function-arry ----> NaN
value=Number("3.14");
console.log(value,typeof value);
value= parseFloat("3,14");
console.log(value,typeof value);
value= parseInt("3")
console.log(value,typeof value);
 

 //function es6+

 const merhaba =function(){
    console.log("merhaba");
 }

 //arrow function
 const merhaba2= ()=>{
    console.log("arrow Function")
 }

 //paremetre gönderim 
 const merhaba3= (firtName)=>{
    console.log("arrow Function")
 }

 // tek satırda kullanalım
  //paremetre gönderim 
  const merhaba4= (firtName,lastName)=>console.log("arrow Function",firtName,lastName)

  //tek işlem ve return ise return yazmadan dahakısa yazılabilir
  const cube=x=>{
    return x*x*x;
  }
  const cube2=x=>x*x*x;
  
  

  merhaba();
  merhaba2();
  merhaba3("se");
  merhaba4("se","er");
  console.log("x*x*x",cube(3));
  console.log("x*x*x",cube2(3));





 let num1,num2;
 let arr=[100,200,300];
  
//   num1=arr[0];
//   num2=arr[1];

//   arr[0]=num2;
//   arr[1]=num1;


 //Destructing
  [num1,num2]=arr;
  console.log("arr[0]",num1,"arr[1]",num2);

const [number3,number4]=arr;
console.log(number4)
// obje Destruction

const numbers={

  
    b:20,
    c:30,
    d:40,
    e:50,
    f:10
};



// const {f,d,e} = numbers;
// console.log(f,d,e);

const{f:number1,d:number2,e:number8}=numbers;
console.log(number1,number2,number8);



//function Destruction

const getLangs =()=>["python","java","c++"];
// bir dizi dönen fonksiyon 

const[lang1,lang2,lang3]=getLangs();

console.log(lang1,lang2,lang3);



//Spread Operator 
const langs=["python","c++","java","php"];

console.log(langs[0],langs[1],langs[2],langs[3]);

console.log(...langs)



// alıştırma 
const Num=[1,2,3,5,6,7];
const addNumber=(a,b,c)=>console.log(a,b,c)

addNumber(...Num);

//for in
const person={
    name:"serap",
    age:"27",
    job:"developer"
}
for(let index in person){
    console.log(index,person[index]);
}

// for of  object not interable
// character ve arry kunlanıla bilir

//  for (const iterator of object) {
    
//  }

// mapler -key -value

let myMap=new Map();

const key1="serp";
const key2={a:10,b:20,c:30};
const key3=()=>2;

myMap.set(key1,"string");
myMap.set(key2,"object");
myMap.set(key3,"function");

console.log(myMap.get(key1));
console.log(myMap.get(key2));


// myMap.size map boyutu 
// map keys map value




