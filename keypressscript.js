function displayKey(e) {
       // which key was pressed?
	   if (e.keyCode) {
          var keycode=e.keyCode;
       }  else {
          var keycode=e.which;
       }
	   
	   var vowels = ["a", "e", "i", "o", "u"];
	   
       character=String.fromCharCode(keycode);
	   
	   //capitalize vowels
	   if(vowels.includes(character)){
		   character = character.toUpperCase();
	   }
	   
	   
	   //switch case for R, G, B button
	   switch(character){
		   case "r":
		   document.body.style.backgroundColor = "red";
		   document.body.style.color = "white";
		   break;
		   
		   case "R":
		   document.body.style.backgroundColor = "red";
		   document.body.style.color = "white";
		   break;
		   
		   case "G":
		   document.body.style.backgroundColor = "green";
		   document.body.style.color = "white";
		   break;
		   
		   case "g":
		   document.body.style.backgroundColor = "green";
		   document.body.style.color = "white";
		   break;
		   
		   case "B":
		   document.body.style.backgroundColor = "blue";
		   document.body.style.color = "white";
		   break;
		   
		   case "b":
		   document.body.style.backgroundColor = "blue";
		   document.body.style.color = "white";
		   break;
		   
		   default:
		   document.body.style.backgroundColor = "white";
		   document.body.style.color = "black";
		   break;
	   }
	   
       // find the object for the destination paragraph
       var keysParagraph = document.getElementById('keys');
       // add the character to the paragraph
       keysParagraph.innerHTML += character;
    };