import * as Yup from 'yup';

const userSchema = Yup.object().shape({
    username: Yup
        .string()
        .required("Must include a name."),
    firstname: Yup
        .string()
        .required("Must include a first name."),
    lastname: Yup
        .string()
        .required("Must include a last name."),
    primaryemail: Yup
        .string()
        .required("Must include an email address"),
    phone: Yup
        .string()
        .required("Must include a phone number")
});

export default userSchema;