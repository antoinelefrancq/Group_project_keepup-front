import { useState } from 'react';
import { Link } from 'react-router-dom';
import InputText from '../Globals/Input/Text';


//Function component
const Login:React.FC = () => {
//State local
  const [name, setName] = useState<string>('');
  
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const user = {
      _id: `6336f41bca5ce57484fa9d6a${name}`,
      firstname: name,
      email: `${name}@${name}.com`,
    };
  
    localStorage.setItem('user', JSON.stringify(user));
  };

  //Components
  return (
    <>
      <section className="login flex flex-col drop-shadow-2xl shadow-lg shadow-blue md:block md:max-w-sm md:mx-auto my-20">
        <h1 className='text-blueCustom signup-title flex flex-col items-center md: pt-8'>
                Te Revoilà !
        </h1>
        <form className='flex flex-col items-center gap-5' onSubmit={handleSubmit}>
          <input type="text" name="name" onChange={(e) =>setName(e.target.value)} />
          {/* <InputText value={email} name='email' placeholder='E-mail' changeField={setMail} />
          <InputText value={password} name='password' placeholder='Mot de passe' changeField={setPassword} /> */}
          <Link to="/profile/:id/edit"><button type="button" className="rounded-full py-3 px-8 text-2xl bg-gradient-to-b from-red to-blue hover:from-pink-500 hover:to-yellow-500 text-white transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300">Connexion</button></Link>
          <Link to='/' className='text-blue hover:underline md:pb-20'>Mot de passe oublié ?</Link>
        </form>
      </section>
    </>
  );
};

export default Login;