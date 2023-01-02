document.getElementById("login").addEventListener('click',login);


function login(){
    var input = document.getElementById("username").value ;
    
    var input2 = document.getElementById("passwd").value ;
  
    if(input ===""){
        document.getElementById("result").innerHTML = 
        '<div class="alert alert-warning"role="alert">Invalid Value!</div>';
        return;
    }
    if(input2 ===""){
        document.getElementById("result").innerHTML = 
        '<div class="alert alert-warning"role="alert">Invalid Value!</div>';
        return;
    }
   

   
}