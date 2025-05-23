import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    otp?: number;
    otpExpires?: Date;
    emailVerifiedAt?: Date;
}

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    password: { type: String, required: true },
    otp: { type: Number, required: false },
    otpExpires: { type: Date, required: false },
    emailVerifiedAt: { type: Date, required: false },
}, { timestamps: true });

const User = mongoose.model<IUser>('User', userSchema);
export default User;