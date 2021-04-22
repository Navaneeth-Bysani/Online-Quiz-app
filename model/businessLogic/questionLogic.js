const Question = require("./../../model/dbModel/questionModel.js");
const mongoose = require("mongoose");

exports.createQuestionLogic = async(questionDetails) => {
    try {
        const newQuestion = await Question.create(questionDetails);
        return newQuestion;
    } catch (error) {
        console.log(error);
    }
}