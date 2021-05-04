import mongoose from 'mongoose';

const courseSchema = mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,

      ref: 'User',
    },

    courseName: {
      type: String,
    },

    courseImage: {
      type: String,
    },

    courseTeachers: [
      {
        type: mongoose.Schema.Types.ObjectId,

        ref: 'User',
      },
    ],

    overview: {
      type: String,
    },
    school: {
      type: Number,
    },
    maxCapacity: {
      type: Number,
    },
    enrolled: {
      type: Number,
      default: 0,
    },
    class: {
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
    },
    level: {
      type: Number,
      default: 1,
    },

    courseware: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Courseware',
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model('Course', courseSchema);
export default Course;
