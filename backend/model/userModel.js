
const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  img:{
    type:String,
    required:true
  },
  recentJobs: [
    {
      jobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job'  // Reference to a Job model
      },
      title: {
        type: String,
        required: true
      },
      description: String,
      postedDate: {
        type: Date,
        default: Date.now
      },
      skills: [
        {
          type: String,
          required: true
        }
      ]
    }
  ],
  registrationDate: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true 
});

module.exports = mongoose.model('Client', ClientSchema);
