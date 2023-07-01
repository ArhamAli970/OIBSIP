function fun(){  
    num=document.getElementById('p23').value
    
    if(isNaN(num)){ 
    document.getElementById('p44').innerHTML="* Input should be numeric";
    document.getElementById('er87').innerText=""; 
    return;
    }
    else if(!isNaN(num)){ 
    document.getElementById('p44').innerHTML=""; 
    
    
    }
    
    
    if(document.getElementById("p49").selectedIndex==0){  
    val=(num*(9/5))+32 
    document.getElementById('er87').innerText=val
    
    
    }
    
    else{ 
        val=(num-32)*(5/9)
        document.getElementById('er87').innerText=val
       
        
    
    }
    
    }