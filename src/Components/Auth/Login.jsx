import axios from 'axios';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const Login = (props)=>{
    const navigate = useNavigate();
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [userRole,setUserRole] = useState()
    const loginSubmit = (e)=>{
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('email',email)
        formdata.append('password',password)
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('api/login',formdata).then(({data})=>{
              if(data.status == 200){
                localStorage.setItem('auth_token',data.token);
                localStorage.setItem('auth_name',data.username);
                localStorage.setItem('role',data.role);
                
                window.location.reload();
              }else{
                Swal.fire({
                    icon:'error',
                    text:data.message
                })
              }

                 
            })
        })
    }
    return(
        <div>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div  className="card">
                            <div className="card-header">
                            <h4>Login</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={loginSubmit}>
                                    
                                    <div className="form-group mb-3">
                                        <label>Email</label>
                                        <input type="text" onChange={(e)=>{
                                            setEmail(e.target.value)
                                        }}></input>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Password</label>
                                        <input type="password" onChange={(e)=>{
                                            setPassword(e.target.value)
                                        }}></input>
                                    </div>
                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}