var yup = require('yup')
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

import TableService from '../pages/api/table-service';

// const [activeLines, setActiveLines] = useState([0]);

const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

function generateLineSelectionField(lines) {

    return (
        <Formik
            initialValues={{
                line: '',
            }}
            validationSchema={Yup.object({
                lineType: Yup.string()
                    .oneOf(
                        [lines],
                        'Linha inválida'
                    )
                    .required('Required'),
            })}

            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}>

            <Form>
                <MySelect label="Line Type" name="lineType">
                    {console.log(lines)}
                    <option value="">Select a job type</option>
                    <option value="other">Other</option>
                </MySelect>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}

export default function SelecionarOP({ activeLines }) {

    return (
        <div>
            <h2>Escolha uma linha e operação</h2>
            <div>
                {/* {generateLineSelectionField({ activeLines })} */}
            </div>
        </div>
    )
}