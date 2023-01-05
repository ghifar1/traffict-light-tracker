import { Schema, model } from "mongoose";
import { ITraffictLights } from "../interface/ITraffictLights";

const traffictLightsSchema = new Schema<ITraffictLights>({
    name: { type: String, required: true },
    color: { type: String, enum: ['red', 'yellow', 'green'], default: 'red' },
    timeStart: { type: Date, required: true },
    defaultGreenDuration: { type: Number, required: true },
    defaultRedDuration: { type: Number, required: true },
    location: {
        latitude: { type: Number, required: false },
        longitude: { type: Number, required: false },
        address: { type: String, required: false },
    },
})

const TraffictLight = model<ITraffictLights>("TraffictLight", traffictLightsSchema);

export default TraffictLight;