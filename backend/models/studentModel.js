import mongoose from 'mongoose';
import Course from './courseModel.js';

const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    loginName: {
      type: String,
      required: true,
      unique: true,
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

    studentNumber: {
      type: String,
      default: false,
      required: true,
    },
    enrolledCourses: {
      type: [Course.schema],
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model('Student', studentSchema);
export default Student;
