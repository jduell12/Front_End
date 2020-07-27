import * as Yup from 'yup';

const addPlantFormSchema = Yup.object().shape({
    name: Yup
        .string()
        .required("Must include a name."),
    species: Yup
        .string()
        .required("Must include a plant species."),
    water_frequency: Yup
        .string()
        .required("Must include watering schedule for plant.")
});

export default addPlantFormSchema;