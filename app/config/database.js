import mongoose from 'mongoose'
import config from './config'

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const database = mongoose.connect(process.env.MONGO_URL, options)
  .then(() => {
    console.log(`** connected to database ${process.env.MONGO_URL} **`)
  })
  .catch(err => console.error('Error connecting to database:', err.message));

export default database
