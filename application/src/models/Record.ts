import { Schema, model } from "mongoose";

const recordSchema = new Schema({
    questionId: {
        type: Schema.Types.ObjectId,
        ref: "Question",
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    code: {
        type: String,
        required: true,
        trim: true,
        maxlength: 3000,
        minlength: 3,
    },
    language: {
        type: String,
        required: true,
        trim: true,
        maxlength: 10,
        minlength: 1,
        enum: ["cpp", "java", "python"],
        default: "java",
    },
    status: {
        type: String,
        required: true,
        trim: true,
        maxlength: 10,
        minlength: 1,
        enum: ["pending", "accepted", "rejected"],
        default: "pending",
    },
    timeTaken: {
        type: Number,
        required: true,
        trim: true,
        maxlength: 10,
        minlength: 1,
    },
    memoryTaken: {
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

const Record = model("Record", recordSchema);

export default Record;