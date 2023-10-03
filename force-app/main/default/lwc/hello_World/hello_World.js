import { LightningElement, track } from 'lwc';

export default class Hello_World extends LightningElement {
    //String Data Type
    firstName = "Jagadeesh";
    //Object Data Type
    object={
        lastName :  "Tirumalasetti",
        workLocation: "Hyderabad"
    }
    //String Data Type
    courseTitle = "LWC";
    //Method
    courseHandler(event){
        this.courseTitle = event.target.value;
    }
    //Object with @tract to rendering the data from HTML 
    @track address1 ={
        city : "Narsapur",
        postalCode : 534275,
        state : "Andhra Praders",
        country : "India"
    }
    address1Handler(event){
        this.address1.city = event.target.value;
    }
    //By using spread operator (...) rendering the data from HTML
    address2 = {
        city : "Vizag",
        postalCode : 530002,
        state: "Andhra Praders",
        country : "India"
    }
    address2Handler(event){
        this.address2 ={...this.address2, "city":event.target.value}
    }
    // Doing Operations in Controller(JS) and by using GETTER rendering the value in Template(HTML)
    users = ["Jagadeesh", "Lokesh","Rakesh","Rikesh","Gopi"]
    get firstUser(){
        return this.users[0].toUpperCase();
    }
    num1 = 80;
    num2 = 50;
    get multiplication(){
        return this.num1*this.num2;
    }
}


