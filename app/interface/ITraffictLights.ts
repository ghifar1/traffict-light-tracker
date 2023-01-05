
interface ITraffictLights {
    name: string
    color: "red" | "yellow" | "green"
    timeStart: Date
    location: {
        latitude: number
        longitude: number
        address: string
    }
    defaultGreenDuration: number
    defaultRedDuration: number
}

export {
    ITraffictLights
}