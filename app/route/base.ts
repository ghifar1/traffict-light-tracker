import * as express from "express";
import api from "./api";
const baseRoute = express.Router()

baseRoute.use('/api', api)

export default baseRoute