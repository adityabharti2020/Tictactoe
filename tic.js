function main(){
	var b1,b2,b3,b4,b5,b6,b7,b8,b9;
	b1 = document.querySelector("#b1").value;
	b2 = document.querySelector("#b2").value;
	b3 = document.querySelector("#b3").value;
	b4 = document.querySelector("#b4").value;
	b5 = document.querySelector("#b5").value;
	b6 = document.querySelector("#b6").value;
	b7 = document.querySelector("#b7").value;
	b8 = document.querySelector("#b8").value;
	b9 = document.querySelector("#b9").value;

    
    var b1btn,b2btn,b3btn,b4btn,b5btn,b6btn,b7btn,b8btn,b9btn;
	b1btn = document.querySelector("#b1");
	b2btn = document.querySelector("#b2");
	b3btn = document.querySelector("#b3");
	b4btn = document.querySelector("#b4");
	b5btn = document.querySelector("#b5");
	b6btn = document.querySelector("#b6");
	b7btn = document.querySelector("#b7");
	b8btn = document.querySelector("#b8");
	b9btn = document.querySelector("#b9");

    // to win For player x
   if((b1 == "x" || b1 == "X") && (b2 == "x" || b2 == "X") && (b3 == "x" || b3 == "X"))
   {
   	document.querySelector("#message").innerHTML = "Player X Won";
   	b4btn.disabled = true;
   	b5btn.disabled = true;
   	b6btn.disabled = true;
   	b7btn.disabled = true;
   	b8btn.disabled = true;
   	b9btn.disabled = true;

   	b1btn.style.color = "red";
   	b2btn.style.color = "red";
   	b3btn.style.color = "red";
   }
   else if((b1 == "x" || b1 == "X") && (b4 == "x" || b4 == "X") && (b7 == "x" || b7 == "X"))
   {
   	document.querySelector("#message").innerHTML = "Player X Won";
   	b2btn.disabled = true;
   	b3btn.disabled = true;
   	b5btn.disabled = true;
   	b6btn.disabled = true;
   	b8btn.disabled = true;
   	b9btn.disabled = true;

   	b1btn.style.color = "red";
   	b4btn.style.color = "red";
   	b7btn.style.color = "red";
   }
   else if((b7 == "x" || b7 == "X") && (b8 == "x" || b8 == "X") && (b9 == "x" || b9 == "X"))
   {
   	document.querySelector("#message").innerHTML = "Player X Won";
   	b1btn.disabled = true;
   	b2btn.disabled = true;
   	b3btn.disabled = true;
   	b4btn.disabled = true;
   	b5btn.disabled = true;
   	b6btn.disabled = true;

   	b8btn.style.color = "red";
   	b9btn.style.color = "red";
   	b7btn.style.color = "red";
   }
   else if((b3 == "x" || b3 == "X") && (b6 == "x" || b6 == "X") && (b9 == "x" || b9 == "X"))
   {
   	document.querySelector("#message").innerHTML = "Player X Won";
   	b1btn.disabled = true;
   	b2btn.disabled = true;
   	b4btn.disabled = true;
   	b5btn.disabled = true;
   	b7btn.disabled = true;
   	b8btn.disabled = true;

   	b3btn.style.color = "red";
   	b6btn.style.color = "red";
   	b9btn.style.color = "red";
   }
   else if((b1 == "x" || b1 == "X") && (b5 == "x" || b5 == "X") && (b9 == "x" || b9 == "X"))
   {
   	document.querySelector("#message").innerHTML = "Player X Won";
   	b2btn.disabled = true;
   	b3btn.disabled = true;
   	b4btn.disabled = true;
   	b6btn.disabled = true;
   	b7btn.disabled = true;
   	b8btn.disabled = true;

   	b1btn.style.color = "red";
   	b5btn.style.color = "red";
   	b9btn.style.color = "red";
   }
   else if((b3 == "x" || b3 == "X") && (b5 == "x" || b5 == "X") && (b7 == "x" || b7 == "X"))
   {
   	document.querySelector("#message").innerHTML = "Player X Won";
   	b1btn.disabled = true;
   	b2btn.disabled = true;
   	b4btn.disabled = true;
   	b6btn.disabled = true;
   	b8btn.disabled = true;
   	b9btn.disabled = true;

   	b3btn.style.color = "red";
   	b5btn.style.color = "red";
   	b7btn.style.color = "red";
   }
   else if((b2 == "x" || b2 == "X") && (b5 == "x" || b5 == "X") && (b8 == "x" || b8 == "X"))
   {
   	document.querySelector("#message").innerHTML = "Player X Won";
   	b1btn.disabled = true;
   	b3btn.disabled = true;
   	b4btn.disabled = true;
   	b6btn.disabled = true;
   	b7btn.disabled = true;
   	b9btn.disabled = true;

   	b2btn.style.color = "red";
   	b5btn.style.color = "red";
   	b8btn.style.color = "red";
   }
   else if((b4 == "x" || b4 == "X") && (b5 == "x" || b5 == "X") && (b6 == "x" || b6 == "X"))
   {
   	document.querySelector("#message").innerHTML = "Player X Won";
   	b1btn.disabled = true;
   	b2btn.disabled = true;
   	b3btn.disabled = true;
   	b7btn.disabled = true;
   	b8btn.disabled = true;
   	b9btn.disabled = true;

   	b4btn.style.color = "red";
   	b5btn.style.color = "red";
   	b6btn.style.color = "red";
   }

    // to win For player O
   if((b1 == "o" || b1 == "O") && (b2 == "o" || b2 == "O") && (b3 == "o" || b3 == "O"))
   {
   	document.querySelector("#message").innerHTML = "Player O Won";
   	b4btn.disabled = true;
   	b5btn.disabled = true;
   	b6btn.disabled = true;
   	b7btn.disabled = true;
   	b8btn.disabled = true;
   	b9btn.disabled = true;

   	b1btn.style.color = "red";
   	b2btn.style.color = "red";
   	b3btn.style.color = "red";
   }
   else if((b1 == "o" || b1 == "O") && (b4 == "o" || b4 == "O") && (b7 == "o" || b7 == "O"))
   {
   	document.querySelector("#message").innerHTML = "Player O Won";
   	b2btn.disabled = true;
   	b3btn.disabled = true;
   	b5btn.disabled = true;
   	b6btn.disabled = true;
   	b8btn.disabled = true;
   	b9btn.disabled = true;

   	b1btn.Otyle.color = "red";
   	b4btn.style.color = "red";
   	b7btn.style.color = "red";
   }
   else if((b7 == "o" || b7 == "O") && (b8 == "o" || b8 == "O") && (b9 == "o" || b9 == "O"))
   {
   	document.querySelector("#message").innerHTML = "Player O Won";
   	b1btn.disabled = true;
   	b2btn.disabled = true;
   	b3btn.disabled = true;
   	b4btn.disabled = true;
   	b5btn.disabled = true;
   	b6btn.disabled = true;

   	b8btn.style.color = "red";
   	b9btn.style.color = "red";
   	b7btn.style.color = "red";
   }
   else if((b3 == "o" || b3 == "O") && (b6 == "o" || b6 == "O") && (b9 == "o" || b9 == "O"))
   {
   	document.querySelector("#message").innerHTML = "Player O Won";
   	b1btn.disabled = true;
   	b2btn.disabled = true;
   	b4btn.disabled = true;
   	b5btn.disabled = true;
   	b7btn.disabled = true;
   	b8btn.disabled = true;

   	b3btn.style.color = "red";
   	b6btn.style.color = "red";
   	b9btn.style.color = "red";
   }
   else if((b1 == "o" || b1 == "O") && (b5 == "o" || b5 == "O") && (b9 == "o" || b9 == "O"))
   {
   	document.querySelector("#message").innerHTML = "Player O Won";
   	b2btn.disabled = true;
   	b3btn.disabled = true;
   	b4btn.disabled = true;
   	b6btn.disabled = true;
   	b7btn.disabled = true;
   	b8btn.disabled = true;

   	b1btn.style.color = "red";
   	b5btn.style.color = "red";
   	b9btn.style.color = "red";
   }
   else if((b3 == "o" || b3 == "O") && (b5 == "o" || b5 == "O") && (b7 == "o" || b7 == "O"))
   {
   	document.querySelector("#message").innerHTML = "Player O Won";
   	b1btn.disabled = true;
   	b2btn.disabled = true;
   	b4btn.disabled = true;
   	b6btn.disabled = true;
   	b8btn.disabled = true;
   	b9btn.disabled = true;

   	b3btn.style.color = "red";
   	b5btn.style.color = "red";
   	b7btn.style.color = "red";
   }
   else if((b2 == "o" || b2 == "O") && (b5 == "o" || b5 == "O") && (b8 == "o" || b8 == "O"))
   {
   	document.querySelector("#message").innerHTML = "Player O Won";
   	b1btn.disabled = true;
   	b3btn.disabled = true;
   	b4btn.disabled = true;
   	b6btn.disabled = true;
   	b7btn.disabled = true;
   	b9btn.disabled = true;

   	b2btn.style.color = "red";
   	b5btn.style.color = "red";
   	b8btn.style.color = "red";
   }
   else if((b4 == "o" || b4 == "O") && (b5 == "o" || b5 == "O") && (b6 == "o" || b6 == "O"))
   {
   	document.querySelector("#message").innerHTML = "Player O Won";
   	b1btn.disabled = true;
   	b2btn.disabled = true;
   	b3btn.disabled = true;
   	b7btn.disabled = true;
   	b8btn.disabled = true;
   	b9btn.disabled = true;

   	b4btn.style.color = "red";
   	b5btn.style.color = "red";
   	b6btn.style.color = "red";
   }
   else if((b1 == "X" || b1 == "O") && (b2 == "X" || b2 == "O") && (b3 == "X" || b3 == "O") && 
   	(b4 == "X" || b4 == "O") && (b5 == "X" || b5 == "O") && (b6 == "X" || b6 == "O") && 
   	(b7 == "X" || b7 == "O") && (b8 == "X" || b8 == "O") && (b9 == "X" || b9 == "O") 
	
)
   {
   	document.querySelector("#message").innerHTML = "Match tie";
   	
   }
   else{ 

   	if(win == 1){
    document.querySelector("#print").innerHTML = "Player X won";   }
    else{
    	document.querySelector("#print").innerHTML = "Player O won";
    }
}
}
function button(){
	location.reload();
	b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = '';
}

// to check turn of the player
 var win=1;
function input1(){
	if(win==1){
		document.querySelector("#b1").value = "X";
		document.querySelector("#b1").disabled = true;
		win = 0;
	}
	else{
		document.querySelector("#b1").value = "O";
		document.querySelector("#b1").disabled = true;
		win = 1;
	}
}

function input2(){
	if(win==1){
		document.querySelector("#b2").value = "X";
		document.querySelector("#b2").disabled = true;
		win = 0;
	}
	else{
		document.querySelector("#b2").value = "O";
		document.querySelector("#b2").disabled = true;
		win = 1;
	}
}

function input3(){
	if(win==1){
		document.querySelector("#b3").value = "X";
		document.querySelector("#b3").disabled = true;
		win = 0;
	}
	else{
		document.querySelector("#b3").value = "O";
		document.querySelector("#b3").disabled = true;
		win = 1;
	}
}

function input4(){
	if(win==1){
		document.querySelector("#b4").value = "X";
		document.querySelector("#b4").disabled = true;
		win = 0;
	}
	else{
		document.querySelector("#b4").value = "O";
		document.querySelector("#b4").disabled = true;
		win = 1;
	}
}
function input5(){
	if(win==1){
		document.querySelector("#b5").value = "X";
		document.querySelector("#b5").disabled = true;
		win = 0;
	}
	else{
		document.querySelector("#b5").value = "O";
		document.querySelector("#b5").disabled = true;
		win = 1;
	}
}
function input6(){
	if(win==1){
		document.querySelector("#b6").value = "X";
		document.querySelector("#b6").disabled = true;
		win = 0;
	}
	else{
		document.querySelector("#b6").value = "O";
		document.querySelector("#b6").disabled = true;
		win = 1;
	}
}
function input7(){
	if(win==1){
		document.querySelector("#b7").value = "X";
		document.querySelector("#b7").disabled = true;
		win = 0;
	}
	else{
		document.querySelector("#b7").value = "O";
		document.querySelector("#b7").disabled = true;
		win = 1;
	}
}
function input8(){
	if(win==1){
		document.querySelector("#b8").value = "X";
		document.querySelector("#b8").disabled = true;
		win = 0;
	}
	else{
		document.querySelector("#b8").value = "O";
		document.querySelector("#b8").disabled = true;
		win = 1;
	}
}
function input9(){
	if(win==1){
		document.querySelector("#b9").value = "X";
		document.querySelector("#b9").disabled = true;
		win = 0;
	}
	else{
		document.querySelector("#b9").value = "O";
		document.querySelector("#b9").disabled = true;
		win = 1;
	}
}
