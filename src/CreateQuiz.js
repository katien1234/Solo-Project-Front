import React, { Component } from 'react';
import Question from './components/Question.js'
import './CreateQuiz.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

class CreateQuiz extends Component {

    state = {
        question: undefined,
        answer: undefined,
        quizList: [],
    }

    deleteQuiz = async (e) => {
        e.preventDefault();
        const requestbody = {
            question: e.target.elements.question.value,
            answer: e.target.elements.answer.value,
            category: e.target.elements.category.value

        }
        const api_call = await fetch('katie4113.uksouth.cloudapp.azure.com:8181/QuizAPI/api/quiz/deleteQuiz/' + requestbody, {
            method: 'DELETE',
        });

        const response = await api_call.json();
        console.log(response);
        toast(response.message);
    }


    createQuiz = async (e) => {
        e.preventDefault();

        const requestbody = {
            question: e.target.elements.question.value,
            answer: e.target.elements.answer.value,
            category: e.target.elements.category.value
        }
        const api_call = await fetch('katie4113.uksouth.cloudapp.azure.com:8181/QuizAPI/api/quiz/createQuiz', {
            method: 'POST',
            body: JSON.stringify(requestbody)
        });
        try {
            const response = await api_call.json();
            console.log(response);
            await toast(response.message);
        }
        catch (error) {
            console.log("Error please try again");
        }
    }

    updateQuiz = async (e) => {
        e.preventDefault();
        const requestbody = {
            question: e.target.elements.question.value,
            answer: e.target.elements.answer.value,
            category: e.target.elements.category.value
        }
        const api_call = await fetch('katie4113.uksouth.cloudapp.azure.com:8181/QuizAPI/api/quiz/updateQuiz/' + requestbody.question, {
            method: 'PUT',
            body: JSON.stringify(requestbody)

        });
        try {
            const response = await api_call.json();
            console.log(response);
            toast(response.message);
        }
        catch (error) {
            console.log("Error please try again");
        }
    }


    getQuiz = async (e) => {
        e.preventDefault();
        try {
            const api_call = await fetch('katie4113.uksouth.cloudapp.azure.com:8181/QuizAPI/api/quiz/getQuiz');
            const response = await api_call.json();
            const tempQuizList = []
            var i = 0
            for (let i = 0; i < response.length; i++) {
                let tempQuiz = {
                    id: i,
                    question: response[i].question,
                    answer: response[i].answer
                }
                tempQuizList.push(tempQuiz);
            }
            console.log(response);

            this.setState({
                question: response[0].question,
                answer: response[0].answer,
                quizList: tempQuizList,
            });
        }
        catch (error) {
            console.log("Error please try again" + error);
        }
    }
  
    getQuizByCat = async (e) => {
        e.preventDefault();
        try{
        const api_call = await fetch('katie4113.uksouth.cloudapp.azure.com:8181/QuizAPI/api/quiz/getQuizByCat/' + e.target.elements.category.value);
        const response = await api_call.json();
        const tempQuizList = []
        var i = 0
        for (let i = 0; i < response.length; i++) {
            let tempQuiz = {
                id: i,
                question: response[i].question,
                answer: response[i].answer
            }
            tempQuizList.push(tempQuiz);
        }
        console.log(response);

        this.setState({
            question: response[0].question,
            answer: response[0].answer,
            quizList: tempQuizList,
        });
        }
    catch (error) {
            console.log("Error please try again" + error);
            toast("Please select a category");    
    }

    }

    render() {
        return (
            <div><br/><br/><br/><br/>
            <div className="CreateQuizText">
                    <h2> Create your own Quiz! </h2>
                </div>
            <div className="AllCreate">
                <div className="Row">
                    <div className="CUDQuestion">
                        <div>
                            <form className="createQuiz" onSubmit={this.createQuiz}>
                                <input name="question" type="text" placeholder="Question" required /><br />
                                <input name="answer" type="text" placeholder="Answer: True or False" required /><br />
                                <input name="category" type="text" placeholder="Username or Category" required /><br />
                                <button>Create a question!</button>
                            </form>
                        </div>
                        <div>
                            <form className="updateQuiz" onSubmit={this.updateQuiz}>
                                <input name="question" type="text" placeholder="Question" required /><br />
                                <input name="answer" type="text" placeholder="Answer: True or False" required /><br />
                                <input name="category" type="text" placeholder="Username or Category" required /><br />
                                <button>Update question</button>
                            </form>
                        </div>
                        <div>
                            <form className="deleteQuiz" onSubmit={this.deleteQuiz}>
                                <input name="question" type="text" placeholder="Question" required /><br />
                                <input name="answer" type="text" placeholder="Answer: True or False" required /><br />
                                <input name="category" type="text" placeholder="Username or Category" required /><br />
                                <button>Delete question</button>
                            </form>
                        </div>
                        <div className="QuestionButtons">
                            <div className="getQuestionsByCat">
                                <form className="getQuizByCat" onSubmit={this.getQuizByCat}>
                                    <input name="category" type="text" placeholder="Username or Category" required /><br />
                                    <button>Get questions by category or username!</button>
                                </form>
                            </div>
                            <div className="getQuestions">
                                <button onClick={this.getQuiz}>Get all questions</button>
                                {this.state.quizList.map((item, key) =>
                                    <Question item={item} key={item.id} />)}
                            </div>
                        </div>
                    </div>
                </div>

                <ToastContainer />
            </div>
            </div>
        )
    }

}
export default CreateQuiz;