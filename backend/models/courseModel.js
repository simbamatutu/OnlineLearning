import mongoose from 'mongoose';

const courseSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    courseName: {
      type: String,
    },

    courseImage: {
      type: String,
    },
    overview: {
      type: String,
      required: true,
    },
    school: {
      type: Number,
    },
    maxCapacity: {
      type: Number,
    },
    enrolled: {
      type: Number,
    },
    category: {
      type: Array,
    },
    lectures: {
      type: Number,
    },
    startingWeek: {
      type: Number,
    },
    endingWeek: {
      type: Number,
    },
    exam: {
      type: String,
    },
    language: {
      type: String,
    },
    assingments: {
      type: String,
    },
    quiz: {
      type: String,
    },
    courseNum: {
      type: String,
      required: true,
    },
    level: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model('Course', courseSchema);
export default Course;
