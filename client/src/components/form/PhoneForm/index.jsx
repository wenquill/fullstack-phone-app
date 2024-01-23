import { Formik, Form, Field, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import { PHONE_VALIDATION_SCHEMA } from '../../../utils/validators/phoneValidationSchema';
import FormInput from '../FormInput';
import styles from './PhoneForm.module.scss';

function PhoneForm ({ createPhone }) {
  const initialValues = {
    brand: '',
    model: '',
    manufacturedYear: '',
    ramSize: '',
    screenDiagonal: '',
    hasNfc: false,
    // phonePhoto: '',
  };

  const handleSubmit = (values, formikBag) => {
    const formData = new FormData();

    formData.append('brand', values.brand);
    formData.append('model', values.model);
    formData.append('manufacturedYear', values.manufacturedYear);
    formData.append('ramSize', values.ramSize);
    formData.append('screenDiagonal', values.screenDiagonal);
    formData.append('hasNfc', values.hasNfc);
    formData.append('phonePhoto', values.phonePhoto);

    createPhone(formData);
    formikBag.resetForm();
  };

  const classes = {
    error: styles.error,
    input: styles.input,
    valid: styles.valid,
    invalid: styles.invalid,
  };

  return (
    <div>
      <h1 className={styles.title}>Create a new phone</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={PHONE_VALIDATION_SCHEMA}
      >
        {formikProps => (
          <Form className={styles.form}>
            <div className={styles.row}>
              <FormInput
                label='brand:'
                type='text'
                name='brand'
                placeholder='brand'
                classes={classes}
              />
              <FormInput
                label='model:'
                type='text'
                name='model'
                placeholder='model'
                classes={classes}
              />
            </div>
            <div className={styles.row}>
              <FormInput
                label='manufactured year:'
                type='number'
                name='manufacturedYear'
                placeholder='enter a year'
                classes={classes}
              />
              <FormInput
                label='RAM size:'
                type='number'
                name='ramSize'
                placeholder='enter a RAM size'
                classes={classes}
              />
              <FormInput
                label='screen diagonal:'
                type='number'
                name='screenDiagonal'
                placeholder='enter a screen diagonal'
                classes={classes}
              />
            </div>

            <div className={styles.row}>
              <label className={styles.column}>
                <span>photo:</span>
                <input
                  type='file'
                  name='phonePhoto'
                  id='fileInput'
                  onChange={e =>
                    formikProps.setFieldValue('phonePhoto', e.target.files[0])
                  }
                  className={styles.customInput}
                />
              </label>
            </div>
            <label className={styles.column}>
              <button type='submit'>Save</button>
            </label>
          </Form>
        )}
      </Formik>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  createPhone: data => dispatch(),
});

export default connect(null, mapDispatchToProps)(PhoneForm);
