import { Schema, model } from "mongoose";

const exampleSchema = new Schema({
    input: {
        type: String,
        required: true,
        trim: true,
        maxlength: 3000,
        minlength: 1,
    },
    output: {
        type: String,
        required: true,
        trim: true,
        maxlength: 3000,
        minlength: 1,
    },
    explanation: {
        type: String,
        required: true,
        trim: true,
        maxlength: 3000,
        minlength: 1,
    }
});

const questionSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 40,
        minlength: 3,
    },
    question: {
        type: String,
        required: true,
        trim: true,
        maxlength: 3000,
        minlength: 3,
    },
    examples: {
        type: [exampleSchema],
        required: true,
    },
    testCases: {
        type: [String],
        required: true,
        trim: true,
        maxlength: 3000,
        minlength: 3,
    },
    difficulty: {
        type: String,
        required: true,
        trim: true,
        maxlength: 10,
        minlength: 1,
        enum: ["easy", "medium", "hard"],
        default: "easy",
    },
    constraints: {
        type: [String],
        required: true,
        trim: true,
        maxlength: 3000,
        minlength: 2,
    },
    timeLimit: {
        type: Number,
        required: true,
        trim: true,
        maxlength: 10,
        minlength: 1,
    },
    Date: {
        type: Date,
        default: Date.now,
    },
});

const Question = model("Question", questionSchema);

export default Question;
export {questionSchema};