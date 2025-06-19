let btn = document.getElementById('Genrate');
let input = document.getElementById('pass');
let copy = document.getElementById('Copy')
let NumberUse = document.getElementById('Number')
let ChracterUse = document.getElementById("Character")
let len = document.getElementById('len')



btn.addEventListener('click' , function(){

    let length = document.getElementById('length').value;   
    let password = "" ;

    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"  
    let lowerCase = "abcdefghijklmnopqrstuvwxyz" 
    let number = "0123456789" 
    let char = "~!@#$%%^&*(())_+"     

    
  
    if(NumberUse.checked){
      set = upperCase + lowerCase + number ;
    } 
     else if (ChracterUse.checked){
      set = upperCase + lowerCase + char 
     }
     else{
      set = upperCase + lowerCase 
     }
    

   for (let i = 0; i < length; i++) {
    const element = Math.floor(Math.random() * set.length);
    
     password = set[element] + password;
    
   }
   input.value = password;
   

  copy.addEventListener('click' , function(){     

  navigator.clipboard.writeText(input.value)
  
 
 })

   
})


