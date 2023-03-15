import { LightningElement } from 'lwc';

export default class Looping extends LightningElement
{
    carList= ["Audi","Maruti","Ford","Hundai","Mercedes"]

    ceoList = [
        {
            id:1,
            company:"Google",
            name:"Sundar Pichai"
        },
        {
            id:2,
            company:"Apple Inc.",
            name:"Tim Cook"
        },
        {
            id:3,
            company:"Facebook",
            name:"Mark Zukerberg"
        },
        {
            id:4,
            company:"Amazon",
            name:"Jeff Bezos"
        }
    ]

}