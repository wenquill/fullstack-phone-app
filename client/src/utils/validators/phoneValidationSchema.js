import * as yup from 'yup';

export const PHONE_VALIDATION_SCHEMA = yup.object({
  brand: yup.string().trim().min(2).max(32).required(),
  model: yup.string().trim().min(1).max(32).required(),
  manufacturedYear: yup.number().min(1970).max(new Date().getFullYear()),
  ramSize: yup.number().moreThan(0),
  screenDiagonal: yup.number().moreThan(0),
  hasNfc: yup.boolean(),
  phonePhoto: yup.mixed(),
  processorId: yup.number().required(),
});
