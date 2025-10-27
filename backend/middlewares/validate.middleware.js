export const validateSchema = (schema) => async (req, res, next) => {
    try {
        schema.parse(req.body)
        next()
    } catch (error) {
        console.log(error)
        if (error.errors && Array.isArray(error.errors)){
            return res.status(400).json(error.errors.map((err) => err.message))
        }
        return res.status(400).json({ message: "Error de validación" })
    }
}