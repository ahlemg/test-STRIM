import mongoose from "mongoose"
import uid from "../helpers/uuid"

const Schema = mongoose.Schema

const UserSchema = new Schema({
	user_id: {
		type: String,
		default: ""
	},
	email: {
		type: String,

	},
	password: 
		{
			type: String,
		}
	
})
UserSchema.pre("save", async function(next) {
    const user = this;
    user.user_id = uid({ prefix: "USR" });
    next();
  });

const User = mongoose.model("User", UserSchema)

export default User
