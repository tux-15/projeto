import style from "../styles/navegador.module.css"

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useRouter } from 'next/router'

import AuthService from "../pages/api/auth-service";

export default function LoginForm() {

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .required('Nome de usuário é obrigatório'),
        password: Yup.string()
            .required('Senha é obrigatório')
    })

    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data) {
        // display form data on success
        //Fazer call parar API aqui
        // alert("data =>")
        // alert(data.username);
        // alert(data.password);
        AuthService.login(data.username, data.password).then(
            () => {
                // useRouter.push("/paginaTabelas");
                // window.location.reload();
            },
        )
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        return false;
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}
                style={{
                    marginTop: "10px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                <label>Usuário</label>
                <div style={{ marginBottom: "10px" }}>
                    <input name="username"
                        type="text" {...register('username')}
                        autoComplete="off"
                        className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
                </div >

                {errors.username ?
                    <>
                        <div style={{
                            marginBottom: "10px",
                            fontSize: "1rem",
                            backgroundColor: "#EE6C4D",
                            padding: "5px",
                            borderRadius: "45px"
                        }}>
                            {errors.username?.message}
                        </div>
                    </> :
                    <></>}


                <label>Senha</label>
                <div style={{ marginBottom: "10px" }}>
                    <div >
                        <input name="password"
                            type="password" {...register('password')}
                            className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                    </div>
                </div>
                {errors.password ?
                    <div style={{
                        marginBottom: "10px",
                        fontSize: "1rem",
                        backgroundColor: "#EE6C4D",
                        padding: "5px",
                        borderRadius: "45px"
                    }}>
                        {errors.password?.message}
                    </div> : <></>
                }


                <div className="form-group">
                    <button type="submit" className="btn btn-primary mr-1">Entrar</button>
                </div>
            </form >
        </div >
    )
}

// const required = value => {
//     if (!value) {
//         return (
//             <div role="alert">
//                 Este campo é obrigatório.
//             </div>
//         );
//     }
// }

// export default function LoginForm() {

//     const form = useRef();
//     const checkBtn = useRef();
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [message, setMessage] = useState("");
//     const onChangeUsername = (e) => {
//         const username = e.target.value;
//         setUsername(username);
//     };
//     const onChangePassword = (e) => {
//         const password = e.target.value;
//         setPassword(password);
//     };
//     const handleLogin = (e) => {
//         e.preventDefault();
//         setMessage("");
//         setLoading(true);
//         form.current.validateAll();
//         if (checkBtn.current.context._errors.length === 0) {
//             AuthService.login(username, password).then(
//                 () => {
//                     useRouter.push("/paginaTabela");
//                     window.location.reload();
//                 },
//                 (error) => {
//                     const resMessage =
//                         (error.response &&
//                             error.response.data &&
//                             error.response.data.message) ||
//                         error.message ||
//                         error.toString();
//                     setLoading(false);
//                     setMessage(resMessage);
//                 }
//             );
//         } else {
//             setLoading(false);
//         }
//     };

//     return (
//             <form onSubmit={handleLogin} ref={form}
//                 style={{
//                     marginTop: "10px",
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                 }}>
//                 <div>Usuário</div>

//                 <label htmlFor="username"></label>

//                 <div style={{ marginTop: "10px" }}>Senha</div>

//                 <label htmlFor="password"></label>

//                 <div>
//                     <input className={style.submitButton}
//                         type="submit" value="Entrar" />
//                 </div>
//             </form>
//     )
// }