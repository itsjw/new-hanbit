import mongoose from 'mongoose'
import { mongoUri } from 'config'

const connectMongodb = () => {
  mongoose.Promise = global.Promise

  return mongoose.connect(mongoUri, {
    useMongoClient: true,
  }).then(() => console.log('db successfully connected!'))
  .catch(e => console.error(e))
}

export default connectMongodb

