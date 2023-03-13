import  express  from "express";
import {  getQuestionBySearch } from "../controller/controller.js";

const router = express.Router()
router.get("/search/getSearch",getQuestionBySearch);

export default router;