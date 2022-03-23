import React from 'react';
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
// FORMIK, email validator, yup
const ValidatedLoginForm = ({ onAdd }) => (
    <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
            onAdd({values});
        }}
        validationSchema = { Yup.object().shape({
            email: Yup.string()
                .email()
                .required("Required"),
            password: Yup.string().required("Required")
                .min(8)
                .matches(/(?=.*[0-9])/, "Password must contain a number.")
        })}
    >

        {props => {
            const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit
            } = props;
            return (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        type="text"
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.email && touched.email && "error"}
                    />
                    {
                        errors.email && touched.email && (
                            <div className="input-feedback">{errors.email}</div>
                        )
                    }
                    <label htmlFor="email">Password</label>
                    <input
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.password && touched.password && "error"}
                    />
                    {
                        errors.password && touched.password && (
                            <div className="input-feedback">{errors.password}</div>
                        )
                    }
                    <button type="submit">Login</button>
                </form>
            );
        }}
    </Formik>
);
export default ValidatedLoginForm;
