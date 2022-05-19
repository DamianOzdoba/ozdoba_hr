import React from "react";
import {useField} from "formik";

const MyTextInput = ({...props}) => {
    const [field, meta] = useField(props);

    return (
        <>
            <input className="text-input" {...field} {...props}
                   style={{boxShadow: `${meta.touched && meta.error ? meta.error : null}`}}/>
        </>
    );
};

export default MyTextInput;