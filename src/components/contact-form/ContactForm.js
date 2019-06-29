import React from "react";
import {toast} from 'react-toastify';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import contactFormService from '../../services/contact-form'

const ContactFormSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    message: Yup.string()
        .min(1, 'Too Short!')
        .max(1000, 'Too Long!')
        .required('Required'),
});

class ContactForm extends React.Component {
    onSubmit = (data) => {
        contactFormService.submit(data)
            .then(res => {
                if (typeof res.data.status !== 'undefined') {
                    if (res.data.status === 'error') {
                        toast(res.data.message);
                    } else {
                        toast("Successfully submitted");
                        this.setState({email: '', message: ''});
                    }
                } else {
                    toast("Something is broken. Please try again later");
                }
            })
            .catch(error => {
                toast("Something is broken. Please try again later");
            });
    };

    render() {
        return (
            <Formik
                initialValues={{
                    email: '',
                    message: '',
                }}
                validationSchema={ContactFormSchema}
                onSubmit={values => {
                    this.onSubmit(values);
                }}
            >
                {({errors, touched}) => (
                    <Form>
                        <div className="formGroup">
                            <label htmlFor="email">Email address</label>
                            <Field name="email" type="email" id="email" className="form-control"/>
                        </div>
                        {errors.email && touched.email ?
                            <div className="alert alert-danger">{errors.email}</div> : null}

                        <div className="formGroup">
                            <label htmlFor="message">Your message</label>
                            <Field name="message" component="textarea" rows="2" className="form-control"/>
                        </div>
                        {errors.message && touched.message ? (
                            <div className="alert alert-danger">{errors.message}</div>
                        ) : null}
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </Form>
                )}
            </Formik>
        )
    }
}

export default ContactForm;
