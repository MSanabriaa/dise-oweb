let cadena="anita lava la tina"; 
 letesPalindromo= true; 
  
 //Convertimos la cadena a minúsculas y eliminamos los espacios en blanco 
 cadena=cadena.toLowerCase().replace(/\s/g,""); 
  
 //Iteramos sobrela mitad de la cadena para comparar los caracteres 
 for(leti=0;i<cadena.length /2;i++) { 
         if (cadena[i] !== cadena[cadena.length - 1 - i]) { 
                 esPalindromo = false; 
              break; 
       } 
 } 
  
 if (esPalindromo) { 
        console.log("La cadena es un palíndromo."); 
 } else { 
        console.log("La cadena no es un palíndromo."); 
 }