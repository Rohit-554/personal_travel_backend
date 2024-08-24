import { Schema, model } from 'mongoose';
import pkg from 'bcryptjs';
// import { hash, compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
const {sign} = jwt; 

const { hash, compare } = pkg;

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await hash(this.password, 10);
  }
  next();
});

UserSchema.methods.comparePassword = function (password) {
  return compare(password, this.password);
};

UserSchema.methods.generateToken = function () {
  return sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

UserSchema.statics.findOneByEmail = async function (email) {
  return this.findOne({ email });
};

export default model('User', UserSchema);
