
let dolarKurDun = 18.74;
let dolarKurBugun = 18.76;

//dolarkurbugun daha fazlaysa veya eşitse consola fazla daha az ise az yaz

if (dolarKurBugun > dolarKurDun) {
	console.log("Dünden fazla");
} else if (dolarKurBugun == dolarKurDun) {
	console.log("Değisim yok");
} else {
	console.log("Dünden az");
}

//one line if statement
//koşul ? kod1 : kod2

dolarKurBugun > dolarKurDun
	? console.log("arttı")
	: console.log("azaldı");

//switch-case

let toplamB = 100;
let secilenKur = "EUR";

switch (secilenKur) {
	case "USD":
		toplamB *= 17;
		break;
	case "EUR":
		toplamB *= 20;
		break;
	default:
		console.warn("Hata");
		break;
}

console.log("Toplam:", toplamB);

//secilen kredi 
//tasit :2 
//ihtiyac : 1.5
//konut: 2.5 ile carp
//hiç biri değilse hata 
//en son krediTutarini yazdir.

let secilenKredi = "tasit";
let krediTutari = 150000;

switch (secilenKredi) {
	case "tasit":
		console.log("Taşıt kredisi ");
		krediTutari *= 2;
		break;
	case "ihtiyac":
		console.log("İhtiyaç kredisi ");
		krediTutari *= 1.5;
		break;
	case "konut":
		console.log("Konut kredisi ");
		krediTutari *= 2.5;
		break;
	default:
		console.error("Hata");
		break;
}

console.log("Krediniz: ", krediTutari);

// % => MOD operatör
let sayi = 89;

if (sayi % 2 == 0) {
	console.log("cift");
} else {
	console.log("tek");
}

sayi % 2== 0 ? console.log("S cift"):console.log("S tek");


