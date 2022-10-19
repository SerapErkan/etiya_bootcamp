let urunler = [
	{fiyat: 100, ad: "Ürün1", indirim: true, oran: 15},
	{fiyat: 150, ad: "Ürün2", indirim: false, oran: 0},
	{fiyat: 200, ad: "Ürün3", indirim: true, oran: 2.5},
];

//filter

let filtrelenmisUrunler = urunler.filter(urun => {
	return urun.fiyat > 160;
});

console.log(filtrelenmisUrunler);


//map yeni array olusturur ve döner.

let maplenmisArray = urunler.map(urun => {
	return {
		fiyat: urun.fiyat * 2,
		ad: urun.ad,
		indirim: urun.indirim,
		oran: urun.oran,
	};
});
console.log("Maparray:", maplenmisArray);

//Map kullanarak
//indirim ve oran konsolda gözükmeyecek
//indirim true ise oran kadar fiyat düşecek
//kullanıcıya fiyat, ad ve indirim tutarı gösterilecek


let product= urunler.map(urun => {
	return {
		fiyat:urun.indirim == true ? 
        urun.fiyat - urun.fiyat * (urun.oran / 100) : 
        urun.fiyat,ad: urun.ad,indirimTutari: urun.fiyat * (urun.oran / 100),
	};
});
console.log(product);


urunler.forEach(urun=>{
    if(urun.indirim==true){
       let indirimT =  urun.fiyat * (urun.oran / 100);

        console.log(urun.fiyat-indirimT, "ad: ",urun.ad, "indirimTutari :" ,indirimT)
    }
    else{
       console.log(urun.fiyat, "ad: ",urun.ad, "indirimTutari :" ,urun.fiyat * (urun.oran / 100),) 
    }
})



let cart = [
	{id: 1, productName: "product1", quantity: 3, unitPrice: 3000},
	{id: 2, productName: "product2", quantity: 2, unitPrice: 1000},
	{id: 3, productName: "product3", quantity: 1, unitPrice: 500},
];

//adet*unitPrice ile toplam fiyatı bul
//Kullanıcıya--{totalPrice:300,totalProductCount:6}

// -forEach
let totalPrice=0;
let totalProductCount=0;
cart.forEach((c)=>{
   totalPrice += c.quantity*c.unitPrice
   totalProductCount += c.quantity
}
);
console.log("totalPrice:",totalPrice, "totalProductCount:",totalProductCount);


// -map
let totalPrice2 = 0;
let totalProductCount2 = 0;
let Product2 = cart.map(c => {
	totalPrice2 += c.quantity*c.unitPrice
	totalProductCount2+= c.quantity
        return 0;
});
console.log("totalPrice:",totalPrice2,"totalProductCount:",totalProductCount2);

//-for
let totalPrice3 = 0;
let totalProductCount3 = 0;
for (let index = 0; index < cart.length; index++) {
	
    totalPrice3 += cart[index].quantity * cart[index].unitPrice;
	totalProductCount3 +=cart[index].quantity;
}

console.log("totalPrice:", totalPrice3, "totalProductCount:",totalProductCount3); 


//reduce

const totalProductCount4 = cart.reduce((hesap,el)=>
(hesap=hesap + el.quantity),0
);

const totalprice4 = cart.reduce((hesap,el)=>
(hesap=hesap + el.quantity*el.unitPrice),0
);

console.log("totalPrice:",totalprice4, "totalProductCount:",totalProductCount4);
