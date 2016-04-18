
    
    // creating a variable event1 which stores the input on     
    var event1 = document.getElementById("button1");
    
     // Event listener - Add an event listener which invokes the myfirst function when the webpage first load - the window object has a method called addeventlistener which accepts 3 arguments.
    event1.addEventListener('click',myfirst,false);
    
    function myfirst(){
        
        //storing the users inout into local variable called userinput1
        var userinput1 =document.getElementById("input1").value;
        
        //writing the local variable back to html DOM where element has an id of demo 
        document.getElementById("demo").innerHTML =userinput1;
    }
   
   
  
 
