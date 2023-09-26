import { LightningElement } from 'lwc';

export default class Looping extends LightningElement
{
    //Array of Elements
    carList= ["Audi","Maruti","Ford","Hundai","Mercedes","Renault","Mahendra","Tata"];
    stateList=["Andhra Praders", "Telangana","Tamil Nadu","Kerala"];
    
    //Array of Objects
    addresses=[
        {
            addressType: "Home",
            city:"Narsapur",
            postalCode: 534275,
            state: "Andhra Pradesh"
        },
        {
            addressType: "School",
            city:"Gudivada",
            postalCode: 534000,
            state: "Andhra Pradesh"
        },
        {
            addressType: "Collage",
            city:"Vijayawada",
            postalCode: 534111,
            state: "Andhra Pradesh"
        },
        {
            addressType: "Graduate",
            city:"Vizag",
            postalCode: 500011,
            state: "Andhra Pradesh"
        }
    ]

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