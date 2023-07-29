import mongoose from "mongoose";

const updatedEmailSchema = new mongoose.Schema({
    oldEmail: {type: String, required: true, unique: true},
    newEmail: {type: String, required: true, unique: true},
    registrationNumber: {type: String, required: true, unique: true},
    date: {type: Date, default: Date.now},
}, {timestamps: true});

updatedEmailSchema.index({createdAt: 1},{expireAfterSeconds: 604800});

export const UEModel = mongoose.model('UE', updatedEmailSchema);

export const didChange = async (registrationNumber: string) => UEModel.findOne({registrationNumber: registrationNumber});