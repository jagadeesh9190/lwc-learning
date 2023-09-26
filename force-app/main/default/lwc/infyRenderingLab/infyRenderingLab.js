import { LightningElement, track } from 'lwc';

export default class InfyRenderingLab extends LightningElement {
    @track fName 
    @track lName
    @track age
    firstNameHandler(event){
        this.fName = event.target.value;
    }
    lastNameHandler(event){
        this.lName = event.target.value;
    }
    ageHandler(event){
        this.age = event.target.value;
    }





}