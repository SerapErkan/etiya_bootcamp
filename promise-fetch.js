
//pending =>bekleme durumu  state:pending ,value:undifun
//resolve olumlu state:resolve value(456);
//reject  olumsuz state:reject value(error);

// then olumlu -response    kulanım :çok kez then
//catch olumsuz -err        kullanım :1 kez catch



//örnek-1

/* function getData(data){
     //promise objesini döndüren Fonksiyon 
     return new Promise(function(resolve,reject){
         setTimeout(function(){
             resolve("olumlu sonuç ");
             //reject("olumsuz sonuç");
        },1000);
     });
 }
 console.log(getData("merhaba"));
*/


function getData(data){
    //promise objesini döndüren Fonksiyon 
    return new Promise(function(resolve,reject){

        setTimeout(function(){

            if(typeof data==="string"){
                resolve(data);
            }else{
                reject("deger string değil");
                //reject(new Error("lütfen string bir deger giriniz ")); // error obj. ulasılır
            }
        
          

        },5000);

    });
}

//.then kullanımı
// getData("merhaba").then(function(response){
//     console.log(response);
// })

//. catch kullanımı 
// getData("merhaba").catch(function(err){
//     console.log(err);
// })

//..birlikte

getData("serap").then(function(response){
    console.log("gelen değer "+ response)
}).catch(function(err){
    // console.log(err);
    console.error(err); // consolda kırmızı hata verir 
})


//daha güzel yazım türü
getData(24)
.then(response=>console.log("gelen deger"+response))
.catch(err=>console.error(err));


function  addTwo(number){
    return new Promise(function(resolve,reject){
       
        setTimeout(() => {
            if(typeof number === "number"){
                resolve(number+2);
            }else{
                reject(new Error("lütfen sayi giriniz"));
            }

        }, 5000);
    })
}

addTwo(7).then(response=>{
    console.log(response);
    return response+2; // promise döner
}).then(response2=>console.log(response2)).catch(err=>console.err(err));
   
//9
//11
