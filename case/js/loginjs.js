$(document).ready(function(){
    $("#btn").click(function(){
       
        
        var a=$("#uname").val();
        var b=$("#pass").val();
        check(a,b,()=>{
           
            window.location.href="main.html";
        })
        function check(x,y,callback)
        {
        if(a=="admin"&&b=="12345")
        {
           
            callback();
        }
        else
        {
            alert("invalid");
        }
    }
    });
  
        
    
})
    
