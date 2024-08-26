import * as yup from "yup"

export const quoteSchema = yup.object().shape({
    name: yup.string().required('Name is required').min(2).max(50).typeError('Name must be between 2 and 50 characters'),
    phoneNumber: yup.string()
        .required('Phone number is required')
        .max(15)
        .typeError('Phone number not valid')
        .matches(/^(?:\+?\d{1,3})?\d{10}$/, 'Invalid phone number'),
    email: yup.string().required('Email is required').email('Invalid email address').typeError('Email must be a valid email address'),
    message: yup.string().required('Message is required').min(10).max(500),
    file: yup.mixed().required().optional()
})

export type QuoteFormData = yup.InferType<typeof quoteSchema>