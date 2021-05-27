

let firstNameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
let lastNameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
let addressRegex = RegExp("^.{4,}$");
let cityRegex = RegExp("^[a-zA-Z]{4,}$");
let stateRegex = RegExp("^[a-zA-Z\\s]{4,}$");
let zipCodeRegex = RegExp("^[1-9]{1}[0-9]{2}[\\s]?[0-9]{3}$");
let phoneRegex = RegExp("^[0-9]{1,}$");
let emailRegex = RegExp("^[a-zA-Z0-9+_-]+([.][a-zA-Z0-9]+)*@([a-zA-Z0-9]+)([.][a-z]+)?[.][a-z]{2,}$");

class ValidationError extends Error {
    constructor(message) {
      super(message); 
      this.name = "ValidationError"; 
    }
}
class AddressBook{
    constructor(...params) {
        
        if(firstNameRegex.test(params[0])) this.firstName = params[0];
        else throw new ValidationError("Invalid First Name: "+params[0]);

        if(lastNameRegex.test(params[1])) this.lastName = params[1];
        else throw new ValidationError("Invalid Last Name: "+params[1]);

        if(addressRegex.test(params[2])) this.address = params[2];
        else throw new ValidationError("Invalid Address: "+params[2]);
        
        if(cityRegex.test(params[3])) this.city = params[3];
        else throw new ValidationError("Invalid City: "+params[3]);
       
        if(stateRegex.test(params[4])) this.state = params[4];
        else throw new ValidationError("Invalid State: "+params[4]);
        
        if(zipCodeRegex.test(params[5])) this.zip= params[5];
        else throw new ValidationError("Invalid ZIP Code: "+params[5]);
    
        if(phoneRegex.test(params[6])) this.phNo = params[6];
        else throw new ValidationError("Invalid Phone Number: "+params[6]);

        if(emailRegex.test(params[7])) this.email = params[7];
        else throw new ValidationError("Invalid Email: "+params[7]);
    }

  
    toString()
    {
        return  "FirstName :" +" "+ this.firstName + " "+ "LastName :"+" "+ this.lastName  +
        " "+  "Address :"+" "+  this.address +" "+ "City:"+" "+ this.city+" "+ "State :"+
        " "+ this.state+" "+ "Zip :"+" "+ this.zip +" "+ "PhoneNo :"+" "+ this.phNo+
        " "+ "Email :"+" "+ this.email;
    }
    
}
     let addressbook = new AddressBook("Anikesh","Mahajan","Akhnoor","Akhnoor","Jammu","181201","1111111111","anikesh0725@gmail.com");
     console.log(addressbook.toString());
     
     let addressBookArry = new Array();
       addressBookArry.push(addressbook)
        addressBookArry.push(new AddressBook("Ankush","Mahajan","Akhnoor","Kashmir","Kashmir","181221","1111111111","ankush@gmail.com"));
       console.log(addressBookArry)
      
       
       function searchByNameAndEdit(firstName,newName)
       {
          for(contact of addressBookArry){
              if(contact.firstName == firstName)
              {
                  contact.firstName=newName;
                console.log("Updated new Name is : "+ contact.firstName );
              }
              
          }
       }
       searchByNameAndEdit("Anikesh","Raju")
       function searchByNameAndDelete(firstName)
       {
        for(contact of addressBookArry){
            if(contact.firstName == firstName)
            {
              addressBookArry.pop(contact)
            }
            
        }

       }
       searchByNameAndDelete("Ankush")
       console.log(addressBookArry)

       function count(contactCount){
        return ++contactCount;
    }
    
    function getCount(){
        console.log("Contact Count: "+addressBookArry.reduce(count,0)+"\n");
    }
    getCount();    
    
    function checkDuplicacy(firstName)
    {
        let d =  addressBookArry.filter(contact=>
              contact.firstName==firstName ).map(contact => contact.firstName.toString() )
              if(d.length >0)
              {
              console.log(firstName + " " +  "Already Exists ")
              }
              else
              console.log(firstName + " "+"Doesnt Exist")
    }
 
    checkDuplicacy("Raj")

    function searchContactOnCityState(firstName,city,state){
        let citySearch=addressBookArry.filter(contacts => contacts.firstName == firstName && contacts.city == city).toString();
        let stateSearch=addressBookArry.filter(contacts => contacts.firstName == firstName && contacts.state == state).toString();
        
        if (citySearch.length >0 ){
           
            console.log(" Match")
        }else{
            console.log(" No Match")
        }
    
        if(stateSearch.length >0)
        {
            console.log(" Match")
        }else{
            console.log(" No Match")
        }
    }
    searchContactOnCityState("Raju","Akhnoor","Jammu");
   

 
  function viewByCity(city){
        addressBookArry.filter(contact=>contact.city==city).forEach(contact=>console.log(contact))
    }
    
    function viewByState(state){
        addressBookArry.filter(contact=>contact.state==state).forEach(contact=>console.log(contact))
    }
    console.log("Who lives in Akhnoor?");
    viewByCity("Akhnoor");
    console.log("Who lives in Jammu ?");
    viewByState("Jammu");


    function getCountByCityState(cityOrState){
        let count = 0;
        addressBookArry.filter(contact=>contact.city==cityOrState).forEach(contact=>++count);
        addressBookArry.filter(contact=>contact.state==cityOrState).forEach(contact=>++count);
        return count;
    }
    console.log("Count in Jammu: "+getCountByCityState("Jammu"));
    console.log("Count in Akhnoor: "+getCountByCityState("Akhnoor"));

    function sortContactsByName(){
       let sortedRecord= addressBookArry.sort();
       console.log("The sorted Address Book on Name is: ");
       console.log(sortedRecord);
     }
     sortContactsByName();
   