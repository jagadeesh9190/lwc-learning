import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    /**** Getter Example ****/
    //1.Invalid expression form JS to HTML template by uing array or operations
    /* users = ["Jagadeesg","Purna","Vara"]
    num1 = 10
    num2 = 20 */

    //2. Valid expression for array and operations by using GETTER Method
    usersName = ["Jaga", "Purna", "Vara", "Anju"]
    get firstUserName(){
        return this.usersName[0].toUpperCase()
    }
    num1 =25
    num2 =26
    get multiplyOperation(){
        return this.num1 * this.num2
    }



    /****  Track property binding example ****/
    @track address = {    //property = address, key= city, value=1234
        city: "NSP",
        postcode: 1234,
        country: "India"
    }
    trackHandler(event) {
        this.address.city = event.target.value
        //this.address={...this.address,"city":event.target.value}
    }

    /**** Two way data binding Example ****/
    fullName = "Zero To Hero"
    title = "Aura"
    changeHandler(event) {
        this.title = event.target.value
    }

    /**** properties like string, number, boolian, object, array ect ****/
    //properties
    name
    age = 25;
    fullname = "Salesforce India"
    showData = false
    details = {
        name: "dummy",
        place: "NSP"
    }
    //array
    userList = ["A", "B", "C"]

    fullname = "Zero To Hero"
    //object
    obj = {
        name: "Jagadeesh"
    }

    // methods in the JS
    getName() {
        //performing the logic in two ways 1)From HTML 2)From Class

    }
}


