import CrudService from "../../../../services/crud";
import { ExampleModel as Model } from "../../../../models";

const create = async (req, res, next) => {
  let found = await CrudService.findOne(Model, { email: req.body.email });
  if (found) {
    res.status(409).json({
      message: "Object with these information does exist",
      data: {}
    });
    return;
  }

  ///Traitement

  const data = await CrudService.create(Model, { ...req.body });

  res.status(data ? 201 : 500).json({
    message: data ? "Created Successfully" : "Couldn't Be Created",
    data: data ? data : {}
  });
};

const findAll = async (req, res, next) => {
  const data = await CrudService.findAll(Model);

  res.json({
    message: "Fetched Successfully",
    data: data
  });
};

const findOne = async (req, res, next) => {
  const data = await CrudService.findOne(Model, { _id: req.params.id });

  res.status(data ? 200 : 404).json({
    message: data ? "Fetched Successfully" : "Not Found",
    data: data || {}
  });
};

const update = async (req, res, next) => {
  let foundCrud = await CrudService.findOne(Model, { _id: req.params.id });
console.log("******",foundCrud, Model)
  if (!foundCrud) {
    res.status(404).json({
      message: "Object with these information doesn't exist",
      data: {}
    });
    return
  }

  const data = await CrudService.update(
    Model,
    { _id: req.params.id },
    req.body
  );
  res.status(data ? 200 : 500).json({
    message: data ? "Updated Successfully" : "Not Updated",
    data: {}
  });
};

const remove = async (req, res, next) => {
  let foundCrud = await CrudService.findOne(Model, { _id: req.params.id });

  if (!foundCrud) {
    await res.status(404).json({
      message: "Object with these information doesn't exist",
      data: {}
    });
    return;
  } 

  const success = foundCrud.remove();
  res.status(success ? 200 : 500).json({
    message: success ? "Deleted Successfully" : "Server Error",
    data: {}
  });
};

export default {
  create,
  findAll,
  findOne,
  update,
  remove
};
