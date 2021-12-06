const mongoose = require('mongoose');

let ContentSchema = mongoose.Schema({
    owner:{
      type:String,
      required:true
    },
    title:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    public:{
        type:Boolean,
        required: true,
        default: true
    },
    url: {
        type: String,
        required: true
    },
    date_created:{
        type: Date,
        required:true,
        default: Date.now
    }
});

module.exports = mongoose.model('Content', ContentSchema);