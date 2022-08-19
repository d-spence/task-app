const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    default: '',
  },
  priority: {
    type: Number,
    default: 0,
  },
  pinned: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: '#ffffff',
    match: /^#(([0-9a-fA-F]{2}){3}|([0-9a-fA-F]){3})$/,
  }
}, { timestamps: true });

module.exports = mongoose.model('Task', schema);
