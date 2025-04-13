// function popup(message) {
//     alert(message);
// }
// var a=prompt("Enter  your first name: ");
// var b=prompt("Enter your last name: ");
// var c='Hello! '+ a +" "+b;
// alert(c);

// var a = prompt("Enter your favourite mobile name: ");
// var b = a.length;
// alert("Length of string is: " + b);

// var a = "Pakistani";
// var b = a.indexOf("n");
// alert("Index of 'n' in Pakistani is: " + b);

// var a = "Hello World!";
// var b = a.lastIndexOf("l");
// alert("Index of 'l' in Hello World! is: " + b);

// var a = "Pakistani";
// var b = a.charAt(3);
// alert("Character at index 3 in Pakistani is: " + b);

// var a = "Hyderabad";
// var b = a.replace("Hyder","Islam");
// alert("City: " + b);

// var a = "Ali and Sami are best friends. They play cricket and football together.";
// var b = a.replace(/and/g, "&");
// alert(b);

// var a = "472";
// var b = Number(a);
// alert("Value: " + a);

// var a = prompt("Enter any word: ");
// var b = a.toUpperCase();
// alert("Upper case: " + b);


// var a = prompt("Enter any word: ");
// var b = a.split(" ");
//  for (var i = 0; i < b.length; i++) {
// var c = b[i];
// b[i] = c.charAt(0).toUpperCase()+c.slice(1).toLowerCase();
//     }
// var d = b.join(" ");
// alert("TitleCase: " + d);


// var a=prompt("Enter any word: ");
// var b =a.split(" ");
// for(var i=0;i<b.length;i++){
//     var c=b[i];
//     b[i]=c.charAt(0).toUpperCase()+c.slice(1).toLowerCase();
// }
// var d=b.join(" ");
// alert("TitleCase: "+d);

// var a=3455555.4832;
// var b=a.toString().replace(".","")
// alert("String: "+b);


// var a = "3444.444,5.5525.5555";
// var b=a.replaceAll(".","").replaceAll(",","");
// alert("String: "+b);

// var a=prompt("Enter your username: ");
// var b=a.split("");
// var c=b.indexOf("@")
// b.indexOf(".")
// b.indexOf("!")
// b.indexOf(",")
// if(c!==-1){
//     alert("Please enter a valid username.");
// }
// else{
//     alert("Valid username.");
// }
// while (true) {
//     // Prompt user to enter a username
//     var username = prompt("Enter your username:");

//     // Check if username contains any special characters [@, ., !, ,]
//     if (
//         username.includes("@") ||
//         username.includes(".") ||
//         username.includes("!") ||
//         username.includes(",")
//     ) {
//         // If special characters found, show valid username message
//         alert("Valid username!.");
//         break; // Exit loop when valid username is found
//     } else {
//         // If special characters not found, show invalid username message
//         alert("Invalid username! You must include at least one of these special characters: @, ., !, ,");
//     }
// }


