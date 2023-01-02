document.getElementById("signup").addEventListener('click',sign);


function sign(){
    var input = document.getElementById("name").value ;
    var input2 = document.getElementById("email").value ;
    var input3 = document.getElementById("password").value ;
  
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
    if(input3 ===""){
        document.getElementById("result").innerHTML = 
        '<div class="alert alert-warning"role="alert">Invalid Value!</div>';
        return;
    }

   
}