// product.js
//ürünleri al
//-1isme göre filtreleme fonksiyonu
//-2isme göre ilk bulunan productu getirme fonk
//-3unitprice < parametre getirme fonk (array)
//-4unitprice > parametre getirme fonk(array)
//-5indirimdeki ürünleri getirme //ürün ekleme
//-6verilen isim ile ürün silme //tüm ürünleri getirme


let products = [
  { unitPrice: 100, productName: "ürünler", discount: true, rate: 15 },
  { unitPrice: 150, productName: "ü", discount: false, rate: 0 },
  { unitPrice: 200, productName: "üsr", discount: true, rate: 2.5 },
  { unitPrice: 210, productName: "üü", discount: true, rate: 2.5 }, // 2-test
];


// ürün ekleme
// function AddedProduct(unitPrice,productName,discount,rate){
//     let obj = {unitPrice,productName,discount,rate}
//     return products.push(obj);
// }
// AddedProduct(5000,"cikolata",true,50)
// console.log(products);



//-5indirimdeki ürünleri getirme 

// console.log("-5 indirimdeki ürünleri getirme ");
// function getByDiscount() {
//     let productsFilter=products.filter((p)=>{
//         return p.discount== true;
//     });
//     console.log(productsFilter);
// }
// getByDiscount()



// ikinci yol forEach
// function getByDis()
// {
// products.forEach(product=>{
//     if(product.discount==true){
//    console.log(product);
//     }
// })

// }
// getByDis()




// map 3 yol 

// function getByMapDis(){
//     let maped=products.map( product =>
//     {
//      return product.discount==true ? console.log(product): ""
//     })
// }
// getByMapDis();


 // 4 yol for of 
// function getForOfDis() {
//   let forDis = [];

//   for (const product of products) {
//     if (product.discount === true) {
//       forDis.push(product);
//     }
//   }
//   return forDis;
// }
// console.log(getForOfDis());

//-4 unitprice > parametre getirme fonk

// console.log("-4 unitprice > parametre getirme fonk(array)");
// function getByUnitPrice(unitPrice) {

//     products.forEach(product => {
//         if (product.unitPrice > unitPrice) {
//             console.log(`${unitPrice}`,"degerinden büyük",product)
//         }
//     })
// }
//  getByUnitPrice(160)


//yeni deneme sort() sıralama   ;
// const sorted= ()=>{
//     let sortedProductName =products.sort((x,y)=>{
//         if(x.productName>y.productName)
//         {
//             return 1;
//         }
//         else if(x.productName<y.productName){
//             return -1;
//         }
//         else {
//             return 0;
//         }
//     })
//     return sortedProductName;
// }
// console.log(sorted());


//-3 unitprice < parametre getirme fonk
// console.log("-3 unitprice < parametre getirme fonk (array)");

// function getByUnitPrice(unitPrice) {
//     products.forEach(product => {
//         if (product.unitPrice < unitPrice) {
//             console.log(`${unitPrice}`,"degerinden küçük",product)
//         }
//     })
// }
// getByUnitPrice(110);

//3 unitprice < parametre getirme fonk
// function getByUnitPrice(unitPrice) {
//    let prd= products.forEach(product => {
//         if (product.unitPrice < unitPrice) {
//             console.log(`${unitPrice}`,"degerinden küçük",product)

//         }
//     })
//     return prd
// }
//   getByUnitPrice(160);

//-1 isme göre filtreleme fonksiyonu
// console.log("-1 isme göre filtreleme fonksiyonu");
// const NameFilter = function (productName) {
 
//   let filter = products.filter((p) => {
//     return p.productName.includes(productName);
//   });
//   console.log(filter);
// };
// NameFilter("ü");



//-7tüm ürünleri getir
// console.log("-7tüm ürünleri getir ");
// function allProduct(){
//     return products;
//     }
//     console.log("tüm ürünleri :", products)


// -6verilen isim ile ürün silme 
// function getByDelete(product) {
   
//         let del = products.findIndex(c => c.productName === product);
//         if (del > -1) {
//             products.splice(del,1);
//         }
// }

// getByDelete("üü");
//  console.log(products);


// -6verilen isim ile ürün silme  deneme (filter)
// tek satır
// function getDeleteProduct2(product){
// return products.filter(f=>f.productName!==product)   
// }
// console.log( getDeleteProduct2("ürü"));


//produsts yeniden tanımlama 
// function getDeleteProduct(product){
   
//     products= products.filter(f=>f.productName!== product)   
//     return products
// }
// getDeleteProduct("ürünler")
// console.log(products)


//-2 isme göre sıralı  ilk bulunan productu getirme fonk
// console.log("-2 isme göre sıralı  ilk bulunan productu getirme fonk");

// function getArrangement(productName){
//         let filter = products.filter((p) => {
//           return p.productName.includes(productName);
//         });
//         console.log("filitrelenen ilk değer",filter[0]) ;
//       };
// getArrangement("ü");


// find() ilk gelen harfi alır - Bulma
// function getArrangement(productName){
//     let find=products.find(f=>f.productName==productName )
//     return find 
// }
//  console.log (getArrangement("ürünler"));

//  //findIndex() index Bulma 
//  function getArrangementIndex(productName){
//     let find=products.findIndex(f=>f.productName==productName )
//     return find 
// }
//  console.log (getArrangementIndex("ürünler"));



