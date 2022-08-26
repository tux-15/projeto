import style from "../styles/loginForm.module.css"

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useRouter } from 'next/router'

import AuthService from "../pages/api/auth-service";

export default function LoginForm() {

    const router = useRouter();

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
        try {
            AuthService.login(data.username, data.password).then(
                () => {
                    console.log("Login request succesful");
                    router.push("/paginaTabela");
                },
            )
        } catch (e) {
            console.log(e);
        }
        return false;
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
                <label>Usuário</label>
                <div style={{ marginBottom: "30px" }}>
                    <input name="username"
                        autoComplete="off"
                        type="text" {...register('username')}
                        className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
                </div>

                {errors.username ?
                    <div className={style.errorMessage}>
                        {errors.username?.message}
                    </div> :
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
                    <div className={style.errorMessage}>
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