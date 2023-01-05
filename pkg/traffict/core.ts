const traffictLights = [
    {
        id: 1,
        name: 'Persimpangan Mampang',
        intersectionType: '4-way',
        lights: [
            {
                id: 1,
                leftDestination: 'Mampang',
                rightDestination: 'Kuningan',
                status: "green",
                durationLeft: 30,
                duration: [
                    {
                        id: 1,
                        startTime: null,
                        endTime: null,
                        greenLightDuration: 30,
                        yellowLightDuration: 2,
                    },
                ]

            }, {
                id: 2,
                leftDestination: 'Bangka',
                rightDestination: 'Tegal Parang',
                status: "red",
                durationLeft: 0,
                duration: [
                    {
                        id: 1,
                        startTime: null,
                        endTime: null,
                        greenLightDuration: 15,
                        yellowLightDuration: 2,
                    },
                ]
            }
        ],
        lightCurrent: 0,
    },
    {
        id: 1,
        name: 'Persimpangan Kemang',
        intersectionType: '4-way',
        lights: [
            {
                id: 1,
                leftDestination: 'Kemang',
                rightDestination: 'Blok A',
                status: "green",
                durationLeft: 15,
                duration: [
                    {
                        id: 1,
                        startTime: null,
                        endTime: null,
                        greenLightDuration: 15,
                        yellowLightDuration: 2,
                    },
                ]

            }, {
                id: 2,
                leftDestination: 'Cipete',
                rightDestination: 'Blok M',
                status: "red",
                durationLeft: 0,
                duration: [
                    {
                        id: 1,
                        startTime: null,
                        endTime: null,
                        greenLightDuration: 50,
                        yellowLightDuration: 2,
                    },
                ]
            }
        ],
        lightCurrent: 0,
    }
]

const TraffictCore = () => {

    const loop = setInterval(() => {
        traffictLights.map((traffictLight, tlKey) => {
            let activeLights = traffictLight.lights[traffictLight.lightCurrent]

            if (activeLights.durationLeft === 0) {
                // if active light status now is green
                if (activeLights.status === "green") {
                    // then change it to yellow
                    activeLights.status = "yellow"
                    // set duration left to yellow light duration
                    activeLights.durationLeft = activeLights.duration[0].yellowLightDuration
                    // set another light to yellow too
                    traffictLight.lights[traffictLight.lightCurrent === 0 ? 1 : 0].status = "yellow"
                    // if active light is yellow
                } else if (activeLights.status === "yellow") {
                    // then change it to red
                    activeLights.status = "red"
                    // set duration left to red light duration for next loop
                    activeLights.durationLeft = activeLights.duration[0].greenLightDuration
                    // change active light to another light
                    if (traffictLight.lightCurrent === traffictLight.lights.length - 1) {
                        traffictLight.lightCurrent = 0
                    } else {
                        traffictLight.lightCurrent++
                    }
                    // set another light to green
                    traffictLight.lights[traffictLight.lightCurrent].status = "green"
                    // set duration left to green light duration
                    traffictLight.lights[traffictLight.lightCurrent].durationLeft = traffictLight.lights[traffictLight.lightCurrent].duration[0].greenLightDuration
                    return
                } else if (activeLights.status === "red") {
                    activeLights.status = "green"
                    activeLights.durationLeft = activeLights.duration[0].greenLightDuration
                    traffictLight.lights[traffictLight.lightCurrent === 0 ? 1 : 0].status = "red"
                }
                return
            }
            activeLights.durationLeft--
            console.log(traffictLight)
        })
    }, 1000)
}

export default TraffictCore