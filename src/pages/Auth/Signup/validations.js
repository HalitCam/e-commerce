import * as yup from 'yup'; //this means all things is being installed as the name of "yup"

const validations = yup.object().shape({
    email: yup
        .string()
        .email('Gecerli bir email girin !')
        .required('Zorunlu alan!'),
    password: yup
    .string()
    .min(5, 'Parolaniz en az 5 karakter olamali !')
    .required(),
    passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')],"Parolalar uyusmuyor")
    .required(),
})

export default validations;