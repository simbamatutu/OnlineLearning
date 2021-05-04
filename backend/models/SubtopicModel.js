import mongoose from 'mongoose';

const subTopicSchema = mongoose.Schema(
  {
    subTopicTitle: String,
    doc: String,
    video: String,
    courseware: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Courseware',
    },
    embbedVideo: String,
  },

  {
    timestamps: true,
  }
);
const Subtopic = mongoose.model('SubTopic', subTopicSchema);
export default Subtopic;
