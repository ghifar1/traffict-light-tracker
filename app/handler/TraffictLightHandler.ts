import { Request, Response } from "express"
import TraffictLight from "../model/TraffictLights"
import Validation from "../helper/validation"
class TraffictLightHandler {

    constructor() {

    }

    public get(req: Request, res: Response) {

        TraffictLight.find().then((traffictLights) => {
            res.json(traffictLights)
        }).catch((err) => {
            res.status(500).json(err)
        })
    }

    public post(req: Request, res: Response) {
        let validate = Validation([
            {
                key: 'color',
                type: "string",
                required: true
            },
            {
                key: 'timeStart',
                type: "string",
                required: true
            }
        ], req.body)
        if (!validate.isValid) {
            res.status(400).json(validate.errors)
        }

        let traffictLight = new TraffictLight(req.body)
        traffictLight.save().then((traffictLight) => {
            res.json(traffictLight)
        }).catch((err) => {
            res.status(500).json(err)
        })
    }

}

export default new TraffictLightHandler()