import * as Yup from 'yup';

const addPlantFormSchema = Yup.object().shape({
    nickname: Yup
        .string(),
    species: Yup
        .string()
        .required("Must include a plant species."),
    water: Yup
        .string()
        .required("Must include watering schedule for plant.")
});

export default addPlantFormSchema;