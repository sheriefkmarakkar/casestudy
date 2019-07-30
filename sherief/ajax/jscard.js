$(document).ready(function(){
    $("#b2").click(function(){

   
       $.ajax({
           type:"GET",
           url:"https://jsonplaceholder.typicode.com/users",
           success:function(data){
               console.log(data);
               
              var result="<div class='row'>";
               for(var i in data)
               {
                var out="<div class='card' class='col col-6' style='width: 18rem;'><div class='card-header'>"+data[i].name+"</div><div class='card-body'><p class='card-text'>"+data[i].id+"</p><p class='card-text'>"+data[i].username+"</p><p class='card-text'>"+data[i].email+"</p><p class='card-text'>"+data[i].address.street+"</p><a href='#' class='btn btn-primary'>Go somewhere</a></div></div>";
               result+=out; 
            }
           
          
            $("#result").html(result);
            
             
               
               
           }
       });
    });
});