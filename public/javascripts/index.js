function  refresh(){
    console.log("nesto");
    console.log(Date.now());

    $.ajax({
        url: "/ref",

        success: function( result ) {
         $( "#history" ).html( "<p>" + result + "</p>" );
            console.log(result);
        }
    });


    setTimeout(function(){
        refresh()
    },1000);
}


function sendMesseges() {

let msg=$("#message").val();
    $.ajax({
        method:"post",
        url: "/ref",
        data:{message:msg}
    }).done(function(msg){
      //  alert("Data saved:"+msg);
        }

    )



}

