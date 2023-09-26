import { LightningElement, api } from 'lwc';

export default class P2cProgressComponent extends LightningElement {
    @api cardHeading
    @api progressValue
}