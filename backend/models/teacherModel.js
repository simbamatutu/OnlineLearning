import mongoose from 'mongoose';

const teacherSchema = mongoose.Schema(
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
    coursesTaught: {
      type: Array,
    },

    teacherNumber: {
      type: String,
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

const Teacher = mongoose.model('Teacher', teacherSchema);
export default Teacher;
