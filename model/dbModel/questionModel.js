const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    questionName : {
        type : String,
        required : [true, "A question should have a Name"]
    },
    subject : {
        type : String,
        required : [true, "A question should have a subject"]
    },
    description : {
        type : String,
        required : [true, "A question should have a description"]
    },
    statement : {
        type : String,
        required : [true, "A question should have a statement"]
    },
    options : {
        type : Array,
        required : [true, "A question should have options"]
    },
    correctOption : {
        type : String,
        required : [true, "A question should have a correct option"]
    }
})

const Question = mongoose.model("Question",questionSchema);
module.exports = Question;