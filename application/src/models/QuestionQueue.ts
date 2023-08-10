import { Schema, model } from "mongoose";
import {questionSchema} from "./Question";

const questionQueueSchema = new Schema({
    questions: {
        type: [questionSchema],
        ref: "Question",
        required: true,
    },
});

const QuestionQueue = model("QuestionQueue", questionQueueSchema);

export default QuestionQueue;