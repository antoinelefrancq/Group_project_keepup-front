import { useState } from 'react';
import { Link } from 'react-router-dom';
import InputText from '../Globals/Input/Text';


//Function component
const Login:React.FC = () => {
//State local
  const [email, setMail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  //Components
  return (
    <div className='login'>
      <>
      
        <section className="flex flex-col h-80">
          <h1 className='text-blueCustom signup-title flex flex-col items-center'>
                Te Revoilà !
          </h1>
          <form className='flex flex-col items-center gap-5'>
            <InputText value={email} name='email' placeholder='E-mail' changeField={setMail} />
            <InputText value={password} name='password' placeholder='Mot de passe' changeField={setPassword} />
            <Link to="/"><button type="button" className="rounded-full py-3 px-8 text-2xl bg-gradient-to-b from-red to-blue hover:from-pink-500 hover:to-yellow-500 text-white">Connexion</button></Link>

          </form>
        </section>
     
      </>
    </div>
  );
};

export default Login;