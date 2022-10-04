import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/Hooks';
import { closeModale } from '../../../redux/reducer/userReducer';

const UserModale:React.FC = () => {
  console.log('hello');
  const dispatch=useAppDispatch();
  return (
    <section id='modale' className="h-1/2 w-full fixed bottom-0 z-10 rounded-t-[10px] bg-white flex flex-col items-center">
      <button 
        onClick={()=>{
          dispatch(closeModale());
        }}
        className='absolute top-3 right-4 w-6 h-6'>
        <img src="/img/bi_arrow-down-circle.svg" alt="flèche_du_bas" />
      </button>
      <Link to='/myprofil'onClick={()=>{dispatch(closeModale());}}>
        <img className="w-[56px] h-[56px] rounded-full mt-[33px] mb-[45px]" src="/img/Nathan_2.png" alt="profil picture" />
      </Link>
      <Link to='/myprofil' onClick={()=>{dispatch(closeModale());}} className='mb-[18px]'>Mon profil</Link>
      <a className='mb-[18px]'>Mes sessions <span>3</span></a>
      <a className='mt-[12px] pt-[14px] w-full border-t-[#E3E3E3] border-t-4 border-solid mb-[18px] text-center'>Se Déconnecter</a>
    </section>
  );};
export default UserModale;