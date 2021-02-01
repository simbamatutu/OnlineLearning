import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    loginName: {
      type: String,
      required: true,
      unique: true,
    },
    profilePic: {
      type: String,
    },
    about: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: Boolean,
    },
    isStudent: {
      type: Boolean,
      default: false,
      required: true,
    },
    isTeacher: {
      type: Boolean,
      default: false,
      required: true,
    },
    studentNumber: {
      type: String,
      default: false,
      required: true,
    },
    isTeacher: {
      type: Boolean,
      default: false,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
export default User;
