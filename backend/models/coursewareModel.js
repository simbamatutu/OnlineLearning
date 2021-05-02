import mongoose from 'mongoose';
const subTopicSchema = mongoose.Schema(
  {
    subTopicTitle: String,
    doc: String,
    video: String,
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
    },
  },
  {
    timestamps: true,
  }
);
const coursewareSchema = mongoose.Schema(
  {
    topicName: String,
    numberofTopics: {
      type: Number,
      default: 0,
    },
    subTopics: [subTopicSchema],
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

export default { Courseware };
