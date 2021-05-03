import mongoose from 'mongoose';

const subTopicSchema = mongoose.Schema(
  {
    subTopicTitle: String,
    doc: String,
    video: String,
    topic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Courseware',
    },
  },
  {
    timestamps: true,
  }
);
const Subtopic = mongoose.model('SubTopic', subTopicSchema);
export default Subtopic;
