import * as yup from 'yup'

const COMMON_ERROR_MESSAGE="Email or password must be entered"

export const LoginValidateSchema=yup.object().shape({
    password:yup.string().min(6,"en az 6 simvol olmalidi").required(COMMON_ERROR_MESSAGE),
    email:yup.string().required(COMMON_ERROR_MESSAGE).email("email formatu duz deil")
})