import Router from "express";
import {
  createPair,
  deletePair,
  getPairs,
  updatePair,
} from "../controllers/pairController.js";

const router = Router();

router.route("/create/pair").post(createPair);
router.route("/get/pairs").get(getPairs);
router.route("/delete/:pairID").delete(deletePair);
router.route("/update/:pairID").put(updatePair);

export default router;
