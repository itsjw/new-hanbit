import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const { Schema } = mongoose

const User = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
})

User.methods.encryptPassword = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(7), null)
}

User.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

export default mongoose.model('User', User)
