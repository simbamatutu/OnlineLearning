import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';
import Course from './courseModel.js';
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
      type: [Course.schema],
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
    isTeacher: {
      type: Boolean,
      default: false,
      required: true,
    },
    isStudent: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

teacherSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcryptjs.compare(enteredPassword, this.password);
};

teacherSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcryptjs.genSalt(10);
  this.password = await bcryptjs.hash(this.password, salt);
});

const Teacher = mongoose.model('Teacher', teacherSchema);
export default Teacher;
