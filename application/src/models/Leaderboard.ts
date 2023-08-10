import { Schema, model } from "mongoose";

const eachRecordSchema = new Schema({
    rank: {
        type: Number,
        required: true,
        trim: true,
        maxlength: 10,
        minlength: 1,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    runTime: {
        type: Number,
        required: true,
        trim: true,
        maxlength: 10,
        minlength: 1,
    },
    finishTime: {
        type: Number,
        required: true,
        trim: true,
        maxlength: 10,
        minlength: 1,
    },
    registrationNumber: {
        type: String,
        required: true,
        trim: true,
        maxlength: 12,
        minlength: 8,
    },
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50,
        minlength: 3,
    },
});

const leaderboardSchema = new Schema({
    record: {
        type: [eachRecordSchema],
        required: true,
    },
});

const Leaderboard = model("Leaderboard", leaderboardSchema);

export default Leaderboard;