const Question = require("./../model/dbModel/questionModel.js");

const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

const {
    createQuestionLogic
} = require("./../model/businessLogic/questionLogic.js");

exports.createQuestion = catchAsync(async(req,res,next) => {
    const questionDetails = {
        questionName : req.body.questionName,
        subject : req.body.subject,
        description : req.body.description,
        statement : req.body.statement,
        options : req.body.options,
        correctOption : req.body.correctOption
    }

    const newQuestion = await createQuestionLogic(questionDetails);
    res.status(201).json({
        status : "success",
        message : "Question created successfully",
        newQuestion
    })
})

