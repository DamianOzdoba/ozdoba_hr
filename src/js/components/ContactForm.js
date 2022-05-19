import React from 'react';
import {send} from 'emailjs-com';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import Button from "@mui/material/Button";
import MyTextInput from "./MyTextInput";
import MyTextarea from "./MyTextarea";

function ContactForm() {
    const validateBoxShadow = 'inset 0 0 30px #ec9d9d';

    return (
        <Formik
            initialValues={{firstName: '', lastName: '', email: '', phone: '', message: ''}}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .required(validateBoxShadow),
                lastName: Yup.string()
                    .required(validateBoxShadow),
                email: Yup.string()
                    .email('Invalid email address')
                    .required(validateBoxShadow),
                phone: Yup.string()
                    .required(validateBoxShadow),
                message: Yup.string()
                    .required(validateBoxShadow),
            })}
            onSubmit={(values) => {
                send(
                    'service_7m7cw02',
                    'template_ve7onhg',
                    values,
                    'xMZf6l7RP5IN2SC3x'
                )
                    .then((response) => {
                        console.log('SUCCESS!', response.status, response.text);
                    })
                    .catch((err) => {
                        console.log('FAILED...', err);
                    });
            }
            }
        >

            <Form className="form">
                <div className="form__container">
                    <MyTextInput
                        name="firstName"
                        type="text"
                        placeholder="YOUR FIRST NAME"
                    />
                    <MyTextInput
                        name="lastName"
                        type="text"
                        placeholder="YOUR LAST NAME"
                    />
                </div>
                <div className="form__container">
                    <MyTextInput
                        name="email"
                        type="email"
                        placeholder="YOUR EMAIL"
                    />
                    <MyTextInput
                        name="phone"
                        type="phone"
                        placeholder="YOUR PHONE"
                    />
                </div>
                <MyTextarea
                    name="message"
                    placeholder="YOUR MESSAGE"
                />
                <Button
                    variant="contained"
                    fullWidth
                    type="submit"
                    sx={{
                        fontSize: '1rem',
                        fontFamily: '"Open Sans", sans serif',
                        borderRadius: '0',
                    }}>
                    SUBMIT
                </Button>
            </Form>
        </Formik>
    )
}


export default ContactForm;