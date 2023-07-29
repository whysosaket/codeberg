import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 32,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  avatar: String,
  points: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  batch: {
    type: String,
    required: true,
    trim: true,
    maxlength: 4,
    minlength: 4,
  },
  program: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
    minlength: 3,
  },
  branch: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
    minlength: 3,
  },
  gender: {
    type: String,
    required: true,
    trim: true,
    maxlength: 6,
    minlength: 1,
  },
  sectionCode: {
    type: String,
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
  dob: {
    type: String,
    required: true,
    trim: true,
    maxlength: 10,
    minlength: 10,
  },
    phone: {
    type: String,
    required: true,
    trim: true,
    maxlength: 10,
    minlength: 10,
    },
    password: {
    type: String,
    required: true,
    trim: true,
    maxlength: 255,
    minlength: 6,
    },
});

const UserModel = model("User", userSchema);

export default UserModel;

export const findUserByEmail = (email: string) => UserModel.findOne({ email });
