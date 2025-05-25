import express from "express";
import comments from "../comments.js"

const ProductRoutes = express.Router();

ProductRoutes.get("/", (req, res) => {
  res
    .status(200)
    .send({
      status: 200,
      message: "you are succesfully done",
      data: comments,
    });
});

ProductRoutes.get("/:id", (req, res) => {
    res.status(200).send({
      status: 200,
      message: "you are succesfully done",
      data: comments[req.params.id],
    });
});

export default ProductRoutes;
