$(document).ready(function(){
     $("#b2").click(function(){

        alert("hello");
    
        $.ajax({
            type:"GET",
            url:"https://jsonplaceholder.typicode.com/users",
            success:function(data){
                console.log(data);
                var out="<table><thead><tr><th>ID</th><th>NAME</th><th>USERNAME</th><th>EMAIL</th><th>STREET</th></tr></thead>";
               
                for(var i in data)
                {
                    out+="<tr><td>"+data[i].id+"</td><td>"+data[i].name+"</td><td>"+data[i].username+"</td><td>"+data[i].email+"</td><td>"+data[i].address.street+"</td></tr>";
                }
              
                out+="</table";
                $("#result").html(out);
            }
        });
     });
 });