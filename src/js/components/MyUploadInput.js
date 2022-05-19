import React from 'react';

function MyUploadInput() {
    return (
        <input id="file" name="file" type="file" onChange={(event) => {
            setFieldValue("file", event.currentTarget.files[0]);
        }} />
    );
}

export default MyUploadInput;