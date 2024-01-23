import classNames from 'classnames';
import { Field } from 'formik';
import React from 'react';
import styles from './../PhoneForm/PhoneForm.module.scss'

function FormInput (props) {
  const { name, label, classes, ...restProps } = props;
  return (
    <Field name={name}>
      {({ field, form: { errors, touched }, meta }) => {
        const inputClassNames = classNames(classes.input, {
          [classes.valid]: !meta.error && meta.touched,
          [classes.invalid]: meta.error && meta.touched,
        });

        return (
          <label className={styles.column}>
            <p>{label}</p>
            <input className={inputClassNames} {...restProps} {...field} />
            {meta.error && meta.touched && (
              <small className={classes.error}>{meta.error}</small>
            )}
          </label>
        );
      }}
    </Field>
  );
}

export default FormInput;
