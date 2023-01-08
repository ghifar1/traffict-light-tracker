const lightsArray = [
    {
        id: 1,
        name: 'light_mampang_to_kuningan',
        from: "mampang",
        to: "kuningan",
    },
    {
        id: 2,
        name: 'light_mampang_to_tegal_parang',
        from: "mampang",
        to: "tegal parang"
    },
    {
        id: 3,
        name: 'light_kuningan_to_mampang',
        from: "kuningan",
        to: "mampang"
    },
    {
        id: 4,
        name: 'light_tegal_parang_to_bangka',
        from: "tegal parang",
        to: "bangka"
    }
]

const lightsTimeline = [
    {
        durations: [
            {
                startAt: new Date().setHours(0, 0, 0, 0),
                endAt: new Date().setHours(1, 0, 0, 0),
                duration: 30
            }, {
                startAt: new Date().setHours(1, 0, 0, 1),
                endAt: new Date().setHours(2, 0, 0, 0),
                duration: 100
            }
        ],
        lights: [
            {
                id: [1, 2],

                changeLightTo: 'green'
            }, {
                id: [3, 4],
                changeLightTo: 'red'
            }
        ],
        triggers: [
            {
                id: 1,
                startAtDuration: 15,
                lights: [
                    {
                        id: [2, 3],
                        changeLightTo: 'yellow'
                    }
                ]
            }, {
                id: 2,
                startAtDuration: 13,
                lights: [
                    {
                        id: 2,
                        changeLightTo: 'red'
                    }, {
                        id: 3,
                        changeLightTo: 'green'
                    }
                ]
            }, {
                id: 3,
                startAtDuration: 2,
                lights: [
                    {
                        id: [1, 2, 3, 4],
                        changeLightTo: 'yellow'
                    }
                ]
            }
        ]
    },
    {
        durations: [
            {
                startAt: new Date().setHours(0, 0, 0, 0),
                endAt: new Date().setHours(1, 0, 0, 0),
                duration: 10
            }, {
                startAt: new Date().setHours(1, 0, 0, 1),
                endAt: new Date().setHours(2, 0, 0, 0),
                duration: 50
            }
        ],
        lights: [
            {
                id: [1, 2, 3],
                changeLightTo: 'red'
            }, {
                id: 4,
                changeLightTo: 'green'
            }
        ],
        triggers: [{
            id: 3,
            startAtDuration: 2,
            lights: [
                {
                    id: [1, 2, 3, 4],
                    changeLightTo: 'yellow'
                }
            ]
        }]
    }
]

const independentLights = () => {
    timeline()

}

const timeline = () => {
    const objectCore = {
        timeLeft: -1,
        indexCurrent: 0,
        lights: [],
        triggers: []
    }

    lightsArray.forEach((light) => {
        objectCore.lights.push({
            id: light.id,
            name: light.name,
            status: 'red'
        })
    })

    setInterval(() => {
        if (objectCore.timeLeft == -1) {
            // if time now is between startAt and endAt of durations, then set duration
            lightsTimeline[objectCore.indexCurrent].durations.forEach((duration) => {
                if (new Date().getTime() >= duration.startAt && new Date().getTime() <= duration.endAt) {
                    objectCore.timeLeft = duration.duration
                }
            })
            objectCore.triggers = lightsTimeline[objectCore.indexCurrent].triggers
            // change light
            lightsTimeline[objectCore.indexCurrent].lights.forEach((light) => {
                // check if id lights is array or not
                if (Array.isArray(light.id)) {
                    light.id.forEach((id) => {
                        const lightIndex = objectCore.lights.findIndex((item) => item.id == id)
                        objectCore.lights[lightIndex].status = light.changeLightTo
                    })
                } else {
                    const lightIndex = objectCore.lights.findIndex((item) => item.id == light.id)
                    objectCore.lights[lightIndex].status = light.changeLightTo
                }

            })
        }

        if (objectCore.timeLeft == 0) {
            // if time now is between startAt and endAt of durations, then set duration
            lightsTimeline[objectCore.indexCurrent].durations.forEach((duration) => {
                if (new Date().getTime() >= duration.startAt && new Date().getTime() <= duration.endAt) {
                    objectCore.timeLeft = duration.duration
                }
            })
            if (objectCore.indexCurrent == lightsTimeline.length - 1) {
                objectCore.indexCurrent = 0
            } else {
                objectCore.indexCurrent++
            }
            objectCore.triggers = lightsTimeline[objectCore.indexCurrent].triggers
            // change light
            lightsTimeline[objectCore.indexCurrent].lights.forEach((light) => {
                // check if id lights is array or not
                if (Array.isArray(light.id)) {
                    light.id.forEach((id) => {
                        const lightIndex = objectCore.lights.findIndex((item) => item.id == id)
                        objectCore.lights[lightIndex].status = light.changeLightTo
                    })
                } else {
                    const lightIndex = objectCore.lights.findIndex((item) => item.id == light.id)
                    objectCore.lights[lightIndex].status = light.changeLightTo
                }

            })
        }

        objectCore.triggers.forEach((trigger) => {
            if (trigger.startAtDuration == objectCore.timeLeft) {
                // find lights by id
                trigger.lights.forEach((light) => {
                    // check if id lights is array or not
                    if (Array.isArray(light.id)) {
                        light.id.forEach((id) => {
                            const lightIndex = objectCore.lights.findIndex((item) => item.id == id)
                            objectCore.lights[lightIndex].status = light.changeLightTo
                        })
                    } else {
                        const lightIndex = objectCore.lights.findIndex((item) => item.id == light.id)
                        objectCore.lights[lightIndex].status = light.changeLightTo
                    }

                })
            }
        })
        console.log(objectCore)
        objectCore.timeLeft--

    }, 1000)


}

export default independentLights