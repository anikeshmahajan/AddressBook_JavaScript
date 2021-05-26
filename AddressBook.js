class AddressBook{
    constructor(...params) {
        
        this.firstName =params[0];
        this.lastName =params[1];
        this.address =params[2]; 
        this.city =params[3];
        this.state =params[4];
        this.zip =params[5];
        this.phNo =params[6];
        this.email =params[7];
    }

        getFirstName()
        {
            return this.firstName
        }
        setFirstName(firstName)
        {
            return this.firstName = firstName;
        }
        
        getlastName()
        {
            return this.lastName
        }
        setlastName(lastName)
        {
            return this.lastName = lastName;
        }
        
        getzip()
        {
            return this.zip
        }
        setZip(zip)
        {
            return this.zip = zip;
        }
        
        getAddress()
        {
            return this.address
        }
        setAddress(address)
        {
            return this.address = address;
        }
        
        getCity()
        {
            return this.city
        }
    
        setCity(city)
        {
            return this.city = city;
        }
        getState()
        {
            return this.state
        }
    
        setState(state)
        {
            return this.state = state;
        }
        getPhoneNo()
        {
            return this.phNo
        }
    
        setPhoneNo(phNo)
        {
            return this.phNo = phNo;
        }
        getEmail()
        {
            return this.email
        }
    
        setEmail(email)
        {
            return this.email = email;
        }

    toString()
    {
        return  "FirstName :" +" "+ this.firstName + " "+ "LastName :"+" "+ this.lastName  +
        " "+  "Address :"+" "+  this.address +" "+ "City:"+" "+ this.city+" "+ "State :"+
        " "+ this.state+" "+ "Zip :"+" "+ this.zip +" "+ "PhoneNo :"+" "+ this.phNo+
        " "+ "Email :"+" "+ this.email;
    }
}
     let addressbook = new AddressBook("Anikesh","Mahajan","Akhnoor","Jammu","J&K","181201","1111111111","anikesh@0725@gmail.com");
     console.log(addressbook.toString());

