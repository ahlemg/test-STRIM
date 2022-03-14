import mongoose from "mongoose"
import uid from "../helpers/uuid"

const Schema = mongoose.Schema

export const PANIER_STATUS = {
	STATUS_VALIDATED: 1,
	STATUS_NON_VALIDATED: 0
}
const PanierSchema = new Schema({
    panier_id : {
        
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
    status: {
        type: Number,
        default: PANIER_STATUS.STATUS_NON_VALIDATED
    }
	
	
},

	{
		timestamps: true
	}
)

PanierSchema.pre("save", async function(next) {
    const panier = this;
    panier.panier_id = uid({ prefix: "PNR" });
    next();
  });
const Panier = mongoose.model("Panier", PanierSchema)

export default Panier
