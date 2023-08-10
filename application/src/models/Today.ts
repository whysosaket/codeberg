import { Schema, model } from "mongoose";

const todaySchema = new Schema({
    questionId: {
        type: Schema.Types.ObjectId,
        ref: "Question",
        required: true,
    },
    question: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100,
        minlength: 3,
    },
    questionName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 40,
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
    Date: {
        type: Date,
        default: Date.now,
    },
});

const Today = model("Today", todaySchema);

export default Today;