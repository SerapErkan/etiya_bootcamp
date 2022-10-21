// product.js
//ürünleri al
//-1isme göre filtreleme fonksiyonu
//-2isme göre ilk bulunan productu getirme fonk
//-3unitprice < parametre getirme fonk (array)
//-4unitprice > parametre getirme fonk(array)
//-5indirimdeki ürünleri getirme //ürün ekleme
//-6verilen isim ile ürün silme //tüm ürünleri getirme

let products = [
  { unitPrice: 100, productName: "f", discount: true, rate: 15 },
  { unitPrice: 150, productName: "Ürün2", discount: false, rate: 0 },
  { unitPrice: 200, productName: "a3", discount: true, rate: 2.5 },
//   { unitPrice: 200, productName: "fff", discount: true, rate: 2.5 }, // 2-test 
];

//////////////

console.log("//-5indirimdeki ürünleri getirme //ürün ekleme");

function getByDiscount() {
    let productsFilter=products.filter((p)=>{
        return p.discount== true;
    });
    console.log(productsFilter);
}
getByDiscount()

///////////
console.log("-4 unitprice > parametre getirme fonk(array)");
function getByUnitPrice(unitPrice) {

    products.forEach(product => {
        if (product.unitPrice > unitPrice) {
            console.log(product)
        }
    })

}
 getByUnitPrice(160)


///////////
console.log("-3 unitprice < parametre getirme fonk (array)");

function getByUnitPrice(unitPrice) {
    products.forEach(product => {
        if (product.unitPrice < unitPrice) {
            console.log(product)
        }
    })
}
getByUnitPrice(110);

///////////

console.log("-1 isme göre filtreleme fonksiyonu");

const NameFilter = function (productName) {
 
  let filter = products.filter((p) => {
    return p.productName.includes(productName);
  });
  console.log(filter);
};
NameFilter("Ürün1");

///////////
console.log("-7tüm ürünleri getir ");

function allProduct(){
    console.log( products);   
    }
allProduct();


//-6verilen isim ile ürün silme 

function getByDelete(product) {
   
        let del = products.findIndex(c => c.productName === product);
        if (del > -1) {
            products.splice(del,1);
        }
}

getByDelete("Ürün2");
allProduct();



console.log("-2 isme göre sıralı  ilk bulunan productu getirme fonk");

function getArrangement(productName){
  
        let filter = products.filter((p,i) => {
          return p.productName.includes(productName);
        });
        console.log("filitrelenen ilk değer",filter[0],filter[1]);
      };

getArrangement("f");
