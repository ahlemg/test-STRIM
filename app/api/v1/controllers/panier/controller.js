import CrudService from "../../../../services/crud";
import { ExampleModel as Model } from "../../../../models";
import Panier, { PANIER_STATUS } from "../../../../models/panier";
import panier from "../../../../helpers/validations/panier";

const create = async (req, res) => {
  //get userid from token sended bu middleware
  const user_id =  req.query.userId;
  //check if user has already non validated panier

  const found = await CrudService.findOne(Panier, { user_id, status: PANIER_STATUS.STATUS_NON_VALIDATED});
  if (found) {
    res.status(200).json({
      message: "user has already non validated panier",
      data: {
        panier_id: panier.panier_id
      }
    });
    return;
  }
  
  const create = await  CrudService.create(Panier, {user_id});

  res.status(create ? 201 : 500).json({
    message: create ? "Created Successfully" : "Couldn't Be Created",
    data: create ? create : {}
  });
};



export default {
  create
  
};
