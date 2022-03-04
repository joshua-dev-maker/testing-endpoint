const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  //   password: {
  //     type: String,
  //   },
});

// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();

//   const hashPassword = await bcrypt.hash(this.password, 10);
//   return hashPassword;
// });

// userSchema.methods.verifyPassword = async function (
//   password,
//   candidatePassword
// ) {
//   const validPassword = await bcrypt.compare(password, candidatePassword);
//   return validPassword;
// };

module.exports = mongoose.model("User", userSchema);
