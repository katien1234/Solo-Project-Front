import React, { Component } from 'react';
import './Component.css';

class DisplayQuiz extends Component {
    constructor() {
        super();

        this.clickTrue = this.clickTrue.bind(this);
        this.clickFalse = this.clickFalse.bind(this);

    }

    state = {
        question: undefined,
        answer: undefined,
        counter: "",

    }

    clickTrue() {
        if (this.state.answer === "True" || this.state.answer === "true") {
            console.log("Correct")
            this.setState({
                counter: "Correct",

            })
        }
        else this.setState({
            counter: "Incorrect",
        })
    }

    clickFalse() {
        if (this.state.answer === "False" || this.state.answer === "false") {
            console.log("Correct")
            this.setState({
                counter: "Correct",
            })
        }
        else this.setState({
            counter: "Incorrect",
        })
    }

    componentDidMount() {
        this.setState({
            question: this.props.item.question,
            answer: this.props.item.answer

        })
    }

    render() {
        return (
            <div className="quiz">
                <p>
                    {this.props.item.question}</p>
                <button name="True" onClick={this.clickTrue}>True</button>
                <button id="True" name="False" onClick={this.clickFalse}> False </button>
                <p>
                    {this.state.counter}
                </p>
            </div>
        );
    }
}

export default DisplayQuiz;