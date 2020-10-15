$(document).ready(function(){
   var email;
   $("#submit").click(function(){
      var myEmail = $("#myEmail").val();
      var myName = $("#myName").val();
      var myPhone = $("#myPhone").val();

      
     $.post("/email",{email: myEmail, name: myName, phone: myPhone}, function(data){
       if(data==='yes') {
           alert("Thank you for contacting ResilienceFitness.net");
         }
     });
   });
});