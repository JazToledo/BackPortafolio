import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: String,
    },
    name: {
      type: String,
    },
    firstName: {
      type: String,
    },
    secondName: {
      type: String,
    },
    gender: {
      type: Boolean,
    },
    age: {
      type: Number,
    },
    avatar: {
      type: String,
    },
    // nationality,
  },
  { timestamps: true }
);

// userSchema.pre('save', async function (next) {
//     try {
//         const hashedPassword = await bcrypt.hash(this.password, 10);
//         this.password = hashedPassword;
//         next();
//     } catch (error) {
//         next(error);
//     }
// });

const User = model("User", userSchema);

export default User;
