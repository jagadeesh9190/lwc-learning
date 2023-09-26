import { LightningElement, track } from 'lwc';

export default class InfyLab3 extends LightningElement {
    @track value1;
    @track value2;
    @track principalAmount;
    @track noOfYears;
    @track rateOfInterest;
    @track showSimpleCalculator = false; 
    @track showSimpleInterestCalculator = false;
    @track result;
    @track clear;

    handleSampleCalculator(){
        this.showSimpleCalculator = true;
        this.showSimpleInterestCalculator = false;
        this.result = null;

    }
    firstNumberHandler(event){
        this.value1 = event.target.value;
    }
    secodNumberHandler(event){
        this.value2 = event.target.value;
    }
    
    add(){
        this.result = parseFloat(this.value1) + parseFloat(this.value2);
    }
    subtract(){
        this.result = this.value1 - this.value2;
    }
    multiply(){
        this.result = this.value1 * this.value2;
    }
    divide(){
        this.result = this.value1 / this.value2; 
    }

    handleSampleIntrestCalculator(){
        this.showSimpleInterestCalculator = true;
        this.showSimpleCalculator = false;
        this.result = null;
    }
    principalAmountHandler(event){
        this.principalAmount = event.target.value;
    }
    noOfYearsHandler(event){
        this.noOfYears = event.target.value;
    }
    rateOfInterestHandler(event){
        this.rateOfInterest = event.target.value;
    }

    calculateSimpleInterest(){
        this.result = (parseFloat(this.principalAmount) * parseFloat(this.noOfYears) * parseFloat(this.rateOfInterest)) / 100;
    }
    clear(){
        this.value1='';
        this.value2='';
        this.principalAmount='';
        this.noOfYears='';
        this.rateOfInterest='';
    }
}