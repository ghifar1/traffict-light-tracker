type ValidationSchema = {
    key: string
    type: "string" | "number" | "date" | "boolean" | "object" | "array" | "any"
    required: boolean
}

type ValidationResponse = {
    errors: Array<string> | null
    isValid: boolean
}

type IValidation = (shouldExist: Array<ValidationSchema>, object: Object) => ValidationResponse

export default IValidation