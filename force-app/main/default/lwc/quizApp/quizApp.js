import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    seleacted = {} //for storing answers
    correctAnswers = 0 // to show the number of correct answer
    isSubmitted = false //use to show the result 

    myQuestions = [
        {
            id: "Question1",
            question: "Which one of the following is not a template loop?",
            answers: {
                a: "for:each",
                b: "iteration",
                c: "map loop"
            },
            correctAnswer: "c"

        },
        {
            id: "Question2",
            question: "Which of the file is invalid in LWC component folder?",
            answers: {
                a: ".svg",
                b: ".apex",
                c: ".js"
            },
            correctAnswer: "b"

        },
        {
            id: "Question3",
            question: "Which one of the following is not a directive?",
            answers: {
                a: "lwc:else",
                b: "lwc:if",
                c: "@track"
            },
            correctAnswer: "c"

        }
    ]
    // used for disabling the submit button
    get allNotSelected() {
        return !(Object.keys(this.seleacted).length === this.myQuestions.length)
    }
    //for applying dynamic styling to our result
    get isScoredFull() {
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers ?
            'slds-text-color_success' : 'slds-text-color_error'}`
    }
    //changeHandler get's called on every click on the option
    changeHandler(event) {
        //console.log("name", event.target.name)
        //console.log("value", event.target.value)
        //const name = event.target.name
        //const value = event.target.value
        const { name, value } = event.target //using object destructuring
        this.seleacted = { ...this.seleacted, [name]: value }
    }
    //form submit handler
    submitHandler(event) {
        event.preventDefault()
        let correct = this.myQuestions.filter(item => this.seleacted[item.id] === item.correctAnswer)
        this.correctAnswers = correct.length
        this.isSubmitted = true
        //console.log("Correct Answer", this.correctAnswers) 
    }
    //form reset handler 
    resetHandler() {
        this.seleacted = {}
        this.correctAnswers = 0
        this.isSubmitted = false
    }
}