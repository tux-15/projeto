// var yup = require('yup')
// import yup from "yup"
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

import TableService from '../api/table-service';
import { useEffect } from 'react';

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

    const teste = lines.data;
    console.log(teste)

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
                <MySelect label="Linha" name="lineType">
                    {/* {console.log(lines)} */}
                    {lines.map(function(line){
                        return <option value={line.line}>{line.line}</option>
                    })}
                    <option value="">Selecione uma linha</option>
                </MySelect>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}

export default function SelecionarOP() {

    const [activeLines, setActiveLines] = useState([]);

    useEffect(() => {
        async function getLines(){
            const res = await TableService.getAllLines();
            // console.log(res)
            setActiveLines(res.data)
            // console.log("inside")
        }

        getLines();
    },[setActiveLines]);

    return (
        <div>
            <h2>Escolha uma linha e operação</h2>
            <div>
                {generateLineSelectionField(activeLines)}
            </div>
        </div>
    )
}