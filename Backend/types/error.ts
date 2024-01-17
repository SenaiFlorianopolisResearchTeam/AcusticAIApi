import { Type } from '@sinclair/typebox';

const ErrorSchema = Type.Object({
    statusCode: Type.Integer(),
    error: Type.String(),
    message: Type.String(),
})

export default ErrorSchema