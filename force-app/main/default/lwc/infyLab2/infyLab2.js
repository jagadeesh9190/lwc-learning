import { LightningElement, track } from 'lwc';

export default class InfyLab2 extends LightningElement {
    @track name 
    @track age
    @track salary
    @track isVisible = false
    nameHandler(event){
        this.name = event.target.value;
    }
    ageHandler(event){
        this.age = event.target.value;
    }
    salaryHandler(event){
        this.salary = event.target.value;
    }
    handleClick(){
        this.isVisible = true;
    }
}