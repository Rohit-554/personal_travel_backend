import { Schema, model } from 'mongoose';
import { hash, compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

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

export default model('User', UserSchema);
