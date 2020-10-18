$(document).ready(function(){
   var email;
   $("#emailForm").submit(function(){
      var myEmail = $("#myEmail").val();
      var myName = $("#myName").val();
      var myPhone = $("#myPhone").val();

      
     $.post("/email",{email: myEmail, name: myName, phone: myPhone}, function(data){
       if(data==='yes') {
           alert("Thank you for contacting ResilienceFitness.net");
         } else {
            alert("There was an error with your contact information, please try again");
         }
     });
   });
});