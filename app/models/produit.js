import mongoose from "mongoose"
import uid from "../helpers/uuid"

const Schema = mongoose.Schema

const ProduitSchema = new Schema({

	product_id: {
		type: mongoose.Schema.Types.ObjectId,
			ref: "User"
	},
	produit_name: {
		type: String,
		default: ""
	}
		
},

	{
		timestamps: true
	}
)
ProduitSchema.pre("save", async function(next) {
    const produit = this;
    produit.product_id = uid({ prefix: "PRD" });
    next();
  });
const Produit = mongoose.model("Produit", ProduitSchema)

export default Produit
