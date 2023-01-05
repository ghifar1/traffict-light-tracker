import IValidation from "../interface/IValidation"

const Validation: IValidation = (shouldExist, object) => {
    const arrayError = []
    shouldExist.forEach((item) => {
        if (!object[item.key] && item.required) {
            arrayError.push(`${item.key} is required`)
            return
        }

        if (typeof object[item.key] !== item.type) {
            arrayError.push(`${item.key} must be ${item.type}`)
            return
        }
    })

    return {
        errors: arrayError.length > 0 ? arrayError : null,
        isValid: arrayError.length > 0 ? false : true
    }
}

export default Validation