$(document).ready(function(){
    var count=0;
    $("#clickid").click(function(){
       
        $.ajax({
            type:"GET",
            url:"https://jsonplaceholder.typicode.com/todos",
            beforeSend:()=>{
               $("#im").show();
            },
            success:function(data){
                $("#im").hide();
                var res="";
                for(var i in data)
                {
                 
                    res+="<div class='card'><table class='table'><tr><td><input type='checkbox' class='box'/></td><td>"+data[i].title+"</td></tr><table></div><br>";
                }
                document.getElementById("pid").innerHTML=res;
                $(".box").click(function(){
                    
                    if($(this).prop("checked")==true)
                    {
                      count++;
                     //alert(count);
                                    var mp=new Promise((resolve,reject)=>{
                    
                                   if(count>=5)
                                    {
                        
                                     resolve("aim");
                                 }
                                 else{
                                 reject();
                                  }
                                                    })
                
                                  mp.then(()=>{
                                   alert(" Congrats. 5 Tasks have been Successfully Completed ");
                                            })
                        
                    
                

                    
               
                    
                
                     }  
                     else
                     {
                         count--;
                     }  
        })
    }
})
})})
    

   
  
    

    


