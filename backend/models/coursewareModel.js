import mongoose from 'mongoose';

const coursewareSchema = mongoose.Schema(
  {
    topicName: String,
    numberofTopics: {
      type: Number,
      default: 0,
    },
    subTopics: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subtopic',
      },
    ],
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
    },
  },
  {
    timestamps: true,
  }
);

const Courseware = mongoose.model('Courseware', coursewareSchema);
export default Courseware;
