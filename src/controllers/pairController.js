import { syncIndexes } from "mongoose";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { Pair } from "../models/pairModel.js";

const createPair = asyncHandler(async (req, res) => {
  const pairData = req.body;

  console.log(pairData);

  if (!pairData) {
    throw new ApiError(400, "Pair data is required!");
  }

  const pair = await Pair.create(pairData);

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        schemaVersion: "1.0.0",
        pairs: pair,
      },
      "Pair created successfully !"
    )
  );
});

const getPairs = asyncHandler(async (req, res) => {
  const pairs = await Pair.find();
  //   const pairs = await Pair.find().sort({ pairCreatedAt: 1 });

  if (!pairs) {
    return new ApiError(400, "pairs not found !");
  }

  return res.json(
    new ApiResponse(200, "1.0.0", pairs, "All data is fetched !")
  );
});

const deletePair = asyncHandler(async (req, res) => {
  const { pairID } = req.params;

  const searchForPair = await Pair.findById(pairID);
  console.log(searchForPair);
  if (!searchForPair) {
    throw new ApiError(400, "pairs not found !");
  }

  const deletedPair = await Pair.findByIdAndDelete(pairID);
  console.log(deletePair);
  return res.json(
    new ApiResponse(200, deletePair, "Pair deleted successfully !")
  );
});

const updatePair = asyncHandler(async (req, res) => {
  const { pairID } = req.params;
  const data = req.body;

  console.log(data);
  const pairExist = await Pair.findById(pairID);

  if (!pairExist) {
    throw new ApiError(400, "Pair does'not exist !");
  }

  const upadtedPair = await Pair.findByIdAndUpdate(pairID, data, { new: true });

  return res.json(
    new ApiResponse(200, upadtedPair, "pair updated sucessfully !")
  );
});

export { createPair, getPairs, deletePair, updatePair };
