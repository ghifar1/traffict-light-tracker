import * as express from "express";
import TraffictLightHandler from "../handler/TraffictLightHandler";

const api = express.Router()
api.get('/traffict-light', TraffictLightHandler.get)
api.post('/traffict-light', TraffictLightHandler.post)

export default api