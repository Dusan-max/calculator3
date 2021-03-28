


let N0 = document.getElementById("n0"); //
let N1 = document.getElementById("n1"); //
let N2 = document.getElementById("n2"); //
let N3 = document.getElementById("n3"); //
let N4 = document.getElementById("n4"); //
let N5 = document.getElementById("n5"); //
let N6 = document.getElementById("n6"); //
let N7 = document.getElementById("n7"); //
let N8 = document.getElementById("n8"); //
let N9 = document.getElementById("n9"); //
let Nequal = document.getElementById("nequal"); //
let Ndiv = document.getElementById("ndiv"); //
let Nmult = document.getElementById("nmult"); //
let Nmns = document.getElementById("nmns"); //
let Npls = document.getElementById("npls"); // 
let Ndot = document.getElementById("ndot"); //
let NCE = document.getElementById("nCE"); //
let display = document.getElementById("display"); //
///////////////////////////////////////////////////////
///////////////GETTING THE ELEMENTS////////////////////
///////////////////////////////////////////////////////
N0.addEventListener("click",mehanika0);
N1.addEventListener("click",mehanika1);
N2.addEventListener("click",mehanika2);
N3.addEventListener("click",mehanika3);
N4.addEventListener("click",mehanika4);
N5.addEventListener("click",mehanika5);
N6.addEventListener("click",mehanika6);
N7.addEventListener("click",mehanika7);
N8.addEventListener("click",mehanika8);
N9.addEventListener("click",mehanika9);
NCE.addEventListener("click",mehanikaCE);
Ndot.addEventListener("click",mehanikaDOT);
Npls.addEventListener("click",sabiranje);
Nequal.addEventListener("click", jednakost);
Nmns.addEventListener("click", oduzimanje);
Nmult.addEventListener("click", mnozenje);
Ndiv.addEventListener("click", djeljenje);





var keyContent = 0;
var arrayNumbers = [];
var arr2 = [];
var result = 0;


function mehanika0 () {
	
	 keyContent = 0;
	 display.textContent = keyContent;
	 dodavanje()
	if (tick3 === 1 
	 	|| tick3 === 2
	 	|| tick3 === 3
	 	|| tick3 === 4) {
	 	sabiranje2()
	 }
		 
}

function mehanika1 () {
	
	 keyContent = 1;
	 display.textContent = keyContent;
	 dodavanje()
	 if (tick3 === 1 
	 	|| tick3 === 2
	 	|| tick3 === 3
	 	|| tick3 === 4) {
	 	sabiranje2()
	 }
	 
	 
}

function mehanika2 () {
	
	 keyContent = 2;
	 display.textContent = keyContent;
	 dodavanje()
	if (tick3 === 1 
	 	|| tick3 === 2
	 	|| tick3 === 3
	 	|| tick3 === 4) {
	 	sabiranje2()
	 }
	 
}

function mehanika3 () {
	 keyContent = 3;
	 display.textContent = keyContent;
	 dodavanje()
	 if (tick3 === 1 
	 	|| tick3 === 2
	 	|| tick3 === 3
	 	|| tick3 === 4) {
	 	sabiranje2()
	 }
	 
	 
}

function mehanika4 () {
	 keyContent = 4;
	 display.textContent = keyContent;
	 dodavanje()
	if (tick3 === 1 
	 	|| tick3 === 2
	 	|| tick3 === 3
	 	|| tick3 === 4) {
	 	sabiranje2()
	 }
	 
}

function mehanika5 () {
	 keyContent = 5;
	 display.textContent = keyContent;
	 dodavanje()
	 if (tick3 === 1 
	 	|| tick3 === 2
	 	|| tick3 === 3
	 	|| tick3 === 4) {
	 	sabiranje2()
	 }
	 
}

function mehanika6 () {
	 keyContent = 6;
	 display.textContent = keyContent;
	 dodavanje()
	 if (tick3 === 1 
	 	|| tick3 === 2
	 	|| tick3 === 3
	 	|| tick3 === 4) {
	 	sabiranje2()
	 }
	 
}

function mehanika7 () {
	 keyContent = 7;
	 display.textContent = keyContent;
	 dodavanje()
	 if (tick3 === 1 
	 	|| tick3 === 2
	 	|| tick3 === 3
	 	|| tick3 === 4) {
	 	sabiranje2()
	 }
	 
}

function mehanika8 () {
	 keyContent = 8;
	 display.textContent = keyContent;
	 dodavanje()
	if (tick3 === 1 
	 	|| tick3 === 2
	 	|| tick3 === 3
	 	|| tick3 === 4) {
	 	sabiranje2()
	 }
	
}

function mehanika9 () {
     keyContent = 9;
	 display.textContent = keyContent;
	 dodavanje()
	 if (tick3 === 1 
	 	|| tick3 === 2
	 	|| tick3 === 3
	 	|| tick3 === 4) {
	 	sabiranje2()
	 }

	 
	 
}

////////////////////////////////////////////////////////////////////////////////////////////////
function mehanikaCE () {
	display.textContent = 0;
	arrayNumbers = [];
	arr2 = [];
	tick = 0;
	tick2 = 0;
	tick3 = 0;
	i = 0;
	

	
}
var i = 0
function mehanikaDOT () {
	
	
      
      
     	while (i<1) {
     arrayNumbers = arrayNumbers.concat(".");
	 display.textContent = arrayNumbers.join("");
	 tick=5;
	 i = 10;
	 
	 
	} 
	while (i > 11) {
		arr2 = arr2.concat(".");
	 display.textContent = arr2.join("");
	 tick=5;
	 i = 10;
	 
	}
	

}


    
////////////////////////////////////////////////////////
var tick3 = 0;
let tick = 0;
function dodavanje() {

	if (tick3 === 0) {


 if (arrayNumbers.length < 10){



arrayNumbers = arrayNumbers.concat(keyContent);

		display.textContent = arrayNumbers.join("");
		tick++;
} else if (arrayNumbers.length > 9 || arr2.length > 9) {
	display.textContent = "Exceeded limit";
}

}

}

 ///////////////////////////

/////////////////////////////////////////////////////////////////////////








//BUG List /// :)

//treba pisat tri cife da bi se mogla dodat nula , zarez se sjebe kad sabiramo , 




///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

//function sabiranje () {

	//display.textContent = 0;

	



	// F U N K C I O N A L N O S T
	 //var toNum = parseInt(arrayNumbers.join('')) + sum2arr;
  //arrayNumbers = toNum.toString().split('').map(Number);
  //arr = arrayNumbers.join("");
  //display.textContent = arr  
//}

function sabiranje () {
		tick3 = 1;
		display.textContent = 0;
		i=12;
		
		

}
var tick3 = 0;
function sabiranje2 () {
	
	
		arr2 = arr2.concat(keyContent)
		

	
		display.textContent = arr2.join("");

		
}

function oduzimanje () {
		tick3 = 2;
		display.textContent = 0;
		i=12;
}

function mnozenje () {
	tick3= 3;
	display.textContent = 0;
	i=12;
}
function djeljenje () {
	tick3= 4;
	display.textContent = 0;
	i=12;
}

function jednakost () {
	
		if (arr2.length === 2) {
			arr2 = arr2[0].toString() + arr2[1].toString();

		}
		else if (arr2.length === 3) {
			arr2 = arr2[0].toString() + arr2[1].toString() + arr2[2].toString()
			
		}
		else if (arr2.length === 4) {
			arr2 = arr2[0].toString() + arr2[1].toString() + arr2[2].toString() + arr2[3].toString()
			
		}
		else if (arr2.length === 5) {
			arr2 = arr2[0].toString() + arr2[1].toString()  + arr2[2].toString() + arr2[3].toString() + arr2[4].toString()
			
		}
		else if (arr2.length === 6) {
			arr2 = arr2[0].toString() + arr2[1].toString() + arr2[2].toString() + arr2[3].toString() + arr2[4].toString() + arr2[5].toString()
			
		}
		else if (arr2.length === 7) {
			arr2 = arr2[0].toString() + arr2[1].toString() + arr2[2].toString() + arr2[3].toString() + arr2[4].toString() + arr2[5].toString() + arr2[6].toString()
			
		}
		else if (arr2.length === 8) {
			arr2 = arr2[0].toString() + arr2[1].toString() + arr2[2].toString() + arr2[3].toString() + arr2[4].toString() + arr2[5].toString() + arr2[6].toString() + arr2[7].toString()
			
		}
		else if (arr2.length === 9) {
			arr2 = arr2[0].toString() + arr2[1].toString() + arr2[2].toString() + arr2[3].toString() + arr2[4].toString() + arr2[5].toString() + arr2[6].toString() + arr2[7].toString() + arr2[8].toString()
			
		}

//////////////////////////////////

		if (arrayNumbers.length === 2) {
			arrayNumbers = arrayNumbers[0].toString() + arrayNumbers[1].toString();

		}
		else if (arrayNumbers.length === 3) {
			arrayNumbers = arrayNumbers[0].toString() + arrayNumbers[1].toString() + arrayNumbers[2].toString()
			
		}
		else if (arrayNumbers.length === 4) {
			arrayNumbers = arrayNumbers[0].toString() + arrayNumbers[1].toString() + arrayNumbers[2].toString() + arrayNumbers[3].toString()
			
		}
		else if (arrayNumbers.length === 5) {
			arrayNumbers = arrayNumbers[0].toString() + arrayNumbers[1].toString()  + arrayNumbers[2].toString() + arrayNumbers[3].toString() + arrayNumbers[4].toString()
			
		}
		else if (arrayNumbers.length === 6) {
			arrayNumbers = arrayNumbers[0].toString() + arrayNumbers[1].toString() + arrayNumbers[2].toString() + arrayNumbers[3].toString() + arrayNumbers[4].toString() + arrayNumbers[5].toString()
			
		}
		else if (arrayNumbers.length === 7) {
			arrayNumbers = arrayNumbers[0].toString() + arrayNumbers[1].toString() + arrayNumbers[2].toString() + arrayNumbers[3].toString() + arrayNumbers[4].toString() + arrayNumbers[5].toString() + arrayNumbers[6].toString()
			
		}
		else if (arrayNumbers.length === 8) {
			arrayNumbers = arrayNumbers[0].toString() + arrayNumbers[1].toString() + arrayNumbers[2].toString() + arrayNumbers[3].toString() + arrayNumbers[4].toString() + arrayNumbers[5].toString() + arrayNumbers[6].toString() + arrayNumbers[7].toString()
			
		}
		else if (arrayNumbers.length === 9) {
			arrayNumbers = arrayNumbers[0].toString() + arrayNumbers[1].toString() + arrayNumbers[2].toString() + arrayNumbers[3].toString() + arrayNumbers[4].toString() + arrayNumbers[5].toString() + arrayNumbers[6].toString() + arrayNumbers[7].toString() + arrayNumbers[8].toString()
			
		}
		

			if (tick3 === 1) {
		arrayNumbers = Number(arrayNumbers);
		arr2 = Number(arr2);

		display.textContent = arrayNumbers + arr2;

	} else if (tick3 === 2) {
		arrayNumbers = Number(arrayNumbers);
		arr2 = Number(arr2);

		display.textContent = arrayNumbers - arr2;
		
	} else if (tick3 === 3) {
		arrayNumbers = Number(arrayNumbers);
		arr2 = Number(arr2);
		
		
		result = arrayNumbers * arr2;
		result = roundToThree(result);
		display.textContent = result;
	} else if (tick3 === 4) {
		arrayNumbers = Number(arrayNumbers);
		arr2 = Number(arr2);
		result = arrayNumbers / arr2;
		result = roundToThree(result);
		display.textContent = result;
	}

	





}

function roundToThree(num) {    
    return +(Math.round(num + "e+3")  + "e-3");
}