import './style.scss';

const ErrorPage = () =>{
  return (
    <div className="relative h-[calc(100vh-130px)] w-full flex flex-row justify-center">
      <img src='/img/error.png' className="absolute bottom-0 max-h-[50%] mx-auto lg:max-h-[100%] lg:relative lg:aspect-[700/670]"/>
      <div className="text-white text-3xl md:text-5xl p-10 text-center lg:p-2 lg:w-1/2 lg:flex lg:flex-col lg:justify-around">
        <div className='relative'>
          <p className="">Oups</p>
          <p className="mb-5">il n'y a rien à voir ici</p>
        </div> 
        <div className='relative h-1/3'>
          <p className='hello text-red'>ERREUR</p>
          <p className='hello text-orange'>ERREUR </p>
          <p className='hello text-blue'>ERREUR </p>
          <p className='text-red hello-more'> 404</p>
          <p className='text-orange hello-more'> 404</p>
          <p className='text-blue hello-more'> 404</p>
        </div>
      </div>
    </div>
  );
};
  
export default ErrorPage;