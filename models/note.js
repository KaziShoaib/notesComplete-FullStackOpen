const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

console.log('connecting to ',url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(result => {
    console.log('connected to MONGODB')
  })
  .catch((error)=>{
    console.log('error connecting to MONGODB: ',error.message);
  })

const noteSchema = new mongoose.Schema({
  content: {
    type: String,
    minlength: 5,
    required: true,
  },
  date:{
    type: Date,
    required: true,
  },
  important: { 
    type : Boolean,
    required : true,
  }
  
})

noteSchema.set('toJSON', {
  transform : (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Note', noteSchema);