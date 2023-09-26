import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {
    userNames = ["Jaga", "Arun", "Sai", "John"]
    fetchDetailHandler() {
        const element = this.template.querySelector('h1')
        element.style.border = "1px solid red"
        console.log(element.innerText)

        const userElement = this.template.querySelectorAll('.parent')
        Array.from(userElement).forEach(item => {
            console.log(item.innerText)
            item.setAttribute("title", item.innerText)
        })


        //lwc:dom="manual" demo
        const childElem = this.template.querySelector('.child')
        childElem.innerHTML = '<p>Hey I am from child element by uning lwc:dom="manual"</p>'
    }
}