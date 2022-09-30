import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../constant';
import InputText from '../Globals/Input/Text';


//Function component
const Login:React.FC = () => {
//State local
  // const [email, setMail] = useState<string>('');
  // const [password, setPassword] = useState<string>('');
  
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  //Components
  // localStorage.setItem('Test123', JSON.stringify({refresh: 'ajkezjapziejazpe'}));

  // const token = localStorage.getItem('Test123');
  // console.log(JSON.parse(token));
  
  const handleChange = (event) => {
    setForm({...form, [event.target.name]: event.target.value});
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // if(verif()){
    // api call /auth/login
    /**
     * 
     *  {
          email: 'test@testo.com',
          password: 'password123'
        }
     * 
     */
    console.log(form);
        
    axios.post('http://ptsaxcy.cluster030.hosting.ovh.net/api/v1/auth/login', {
      email: form.email,
      password: form.password
    })
      .then((reponse) => {
        console.log('reponse', reponse);
      })
      .catch((error) => {
        console.log('error', error);
      });

    // status !== 200 => erreur 

    // si c'est ok refresh tu store dans localstorage
    // {refresh: "ajkezjapziejazpe"}
      
    // }else{
    // renvoie ton erreur
    // }
  };

  // const verif = () => {


  //   // si mon mdp est trop petit tu renvoie une erreur => return false

  //   // etc ;..

  //   return true;
  // };

  return (
    <>
      <section className="login flex flex-col drop-shadow-2xl shadow-lg shadow-blue md:block md:max-w-sm md:mx-auto my-20">
        <h1 className='text-blueCustom signup-title flex flex-col items-center md: pt-8'>
                Te Revoilà !
        </h1>
        <form onSubmit={handleSubmit} className='flex flex-col items-center gap-5'>
          {/* <InputText value={form.email} name='email' placeholder='E-mail' changeField={handleChange} />
          <InputText value={form.password} name='password' placeholder='Mot de passe' changeField={handleChange} /> */}
          <input name='email'  onChange={handleChange} />
          <input name='password' onChange={handleChange} />
          <button type="submit" className="rounded-full py-3 px-8 text-2xl bg-gradient-to-b from-red to-blue hover:from-pink-500 hover:to-yellow-500 text-white transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300">Connexion</button>
          <Link to='/' className='text-blue hover:underline md:pb-20'>Mot de passe oublié ?</Link>
        </form>
      </section>
    </>
  );
};

export default Login;