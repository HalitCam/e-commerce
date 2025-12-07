import  * as yup  from "yup";

const SigninValidation = yup.object.shape({
    email: yup.string().email("Enter valid email !").required("Required field !"),
    password : yup.string().min(5,"Enter at least 5 Characters !").required("Enter your password !")
})

export default SigninValidation;