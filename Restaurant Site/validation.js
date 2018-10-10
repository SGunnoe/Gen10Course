
/*
Name: Shantazia Gunnoe
Date Created: September 28, 2018
Most recent revision: 1
*/

  function Validation()
{
   var name = document.forms["RegForm"]["MyNameInput"];
   var email = document.forms["RegForm"]["MyEmailInput"];
   var phone = document.forms["RegForm"]["PhoneNumInput"]; var inq = document.forms["RegForm"]["Inquiry"]; 
   var add = document.forms["RegForm"]["AddInformation"];
   var ans = document.forms["RegForm"]["answer"];
   var day = document.forms["RegForm"]["days"];
    
    if (name.value == "")                                  
    { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    } 
   
                    
                }
                       
