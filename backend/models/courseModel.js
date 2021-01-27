import mongoose from 'mongoose';

const courseSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
      unique: true,
    },
    courseNum: {
      type: String,
      required: true,
    },
    level: {
      type: Number,
      default: 1,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model('Course', userSchema);
export default Course;
