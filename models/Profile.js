const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  name: {
    type: String
  },
  items: {
    type: [String],
    required: true
  },
  stats: [
    {
      race: {
        type: String,
        required: true
      },
      class: {
        type: String,
        required: true
      },
      level: {
        type: Number
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
