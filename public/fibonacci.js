/**
 * 
 */

 const bilgiSatiri="Fibonacci burada gösterilir.";

 
function fibonacci(){
	var sayiAdedi=+document.getElementById("input-1").value;
	var birOnce,ikiOnce,Fibonacci;
	
	var geciciDizgi="";
	var donguDenetim;
	
	
	if (sayiAdedi<3)
	alert("Lütfen en az 3 değeri giriniz.")
	else{
		geciciDizgi="İlk" + sayiAdedi + " adet Fibonacci sayisi:1,1, ";
		ikiOnce=1;
		birOnce=1;
		
		for (donguDenetim=0; donguDenetim < sayiAdedi-2; donguDenetim++){
			Fibonacci=birOnce+ikiOnce;
			ikiOnce=birOnce;
			birOnce=Fibonacci;
			geciciDizgi=geciciDizgi+ "," + Fibonacci
		};
		document.getElementById("p-1").innerHTML = geciciDizgi
	}
}
 
 
 
 function sayfaYukle(){
	 document.getElementById("p-1").innerHTML=bilgiSatiri;
	 document.getElementById("button-2").disabled=true;

 }
 
 function veriGirisi(){
	 if ( document.getElementById("button-2").disabled)
	 document.getElementById("button-2").disabled=false;
	 
 }
 function temizle(){
	 document.getElementById("input-1").value="";
	 sayfaYukle();
	 document.getElementById("button-2").disabled=true;
 }