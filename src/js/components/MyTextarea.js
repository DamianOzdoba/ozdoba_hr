import React from "react";
import {useField} from "formik";

const MyTextarea = ({...props}) => {
    const [field, meta] = useField(props);

    return (
            <textarea {...field} {...props}
                   style={{boxShadow: `${meta.touched && meta.error ? meta.error : null}`}}/>
    );
};

export default MyTextarea;