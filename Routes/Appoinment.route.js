const express = require("express");
const appoinmentModel = require("../model/Appoinment.model");

const appoinmentRoutes = express.Router();

appoinmentRoutes.post("/appointments", async (req, res) => {
  try {
    let data = new appoinmentModel(req.body);
    await data.save();
    res.send("Added successfully");
  } catch (error) {
    res.send(error.message);
  }
});

appoinmentRoutes.get("/", async (req, res) => {
  const { specialization, Search, page } = req.query;
  const query = {};

  if (specialization) {
    query.specialization = specialization;
  }
  if (Search) {
    query.name = new RegExp(Search, "i");
  }

  const pageNumber = page || 1;
  const pageLimit = 4;
  const pagination = pageNumber * pageLimit - pageLimit || 0;
  try {
    const appoinments = await appoinmentModel
      .find(query)
      .skip(pagination)
      .limit(4);
    res.send(appoinments);
  } catch (error) {
    console.log(error);
  }
});

appoinmentRoutes.patch("/:id", async (req, res) => {
  try {
    const data = await appoinmentModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.send("update Sucessfull");
  } catch (error) {
    console.log(error);
  }
});
module.exports = appoinmentRoutes;
