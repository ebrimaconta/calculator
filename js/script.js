$(document).ready(function(){

  function calculator(){
    var sum = "";
    var len;
     var error =false;
    var inputVal = document.getElementById("screen");
    $(".buttons .digit").on('click', function() {
      var num = $(this).attr('value');
      sum += num;
       $("#screen").html(sum);
    });

    $(".buttons .operator").on('click', function(e) {
      var ops = $(this).attr('value');
      sum += ops;
      $("#screen").html(sum);
    });


    $("#equal").on('click', function() {
      var splitSum = sum.split("");
      var operatorErr = splitSum[splitSum.length-1];
      var errorlist = ["/","+",".","-","*"];
      if( errorlist.includes(operatorErr)||splitSum[0] == "/" ||splitSum[0] == "*"){
         $("#screen").html(sum + " E" );
          error=true;
          setTimeout(function(){ 
              $("#screen").html(0);
              sum = "";
              error= false;     
           }, 1000);
      } else{
      var total =  eval(sum);
      $("#screen").html(total );
      setTimeout(function(){ 
              $("#screen").html(0);
              sum = "";    
           }, 2000);
      }
      
    });

    $("#clear").on('click', function() {
       sum = "";
        $("#screen").html(0);
    });

    };
    calculator();
});
