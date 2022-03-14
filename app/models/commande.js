import mongoose from "mongoose"
import uid from "../helpers/uuid"

const Schema = mongoose.Schema

const CommandeSchema = new Schema({
    commande_id : {
        
            type: String,
            default: ""
        
    },
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
			ref: "User"
	},
	produits: [
        {
            product_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            },
            quantity: {
                type: Number,
                default:1
            }
        }
    ],
	
	
},

	{
		timestamps: true
	}
)
CommandeSchema.pre("save", async function(next) {
    const commande = this;
    commande.commande_id = uid({ prefix: "CMD" });
    next();
  });
const Commande = mongoose.model("Commande", CommandeSchema)

export default Commande
