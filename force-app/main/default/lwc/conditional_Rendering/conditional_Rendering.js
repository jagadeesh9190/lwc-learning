import { LightningElement } from 'lwc';

export default class Conditional_Rendering extends LightningElement {
    isVisible = false;
    handleClick(){
        this.isVisible = true;
    }
    name;           //property Undefined
    textHandler(event){
        this.name = event.target.value;
    } 
    get textMethod(){
        return this.name === 'Jagadeesh';
    }
    get textMethod2(){
        return this.name === 'Tirumalasetti';
    }


}