import { LightningElement, api } from 'lwc';

export default class P2cSliderComponent extends LightningElement {
    count = 10;
    
    changeHandler(event){
        this.count = event.target.value;
    }
    @api resetSlider(){
        this.count = 50;
    }
    @api cardHeading;

}