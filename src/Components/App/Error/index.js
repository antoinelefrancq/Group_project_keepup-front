import './style.scss';

const ErrorPage = () =>{
  return (
    <div className="relative h-[calc(100vh-130px)] w-full">
      <img src='/img/error.png' className="absolute bottom-0 w-full mx-auto"/>
      <div className="text-white text-3xl md:text-5xl p-10 text-center">
        <p className="">Oups</p>
        <p className="mb-5">il n'y a rien à voir ici</p>
        <div className='hello text-red'>ERREUR</div>
        <div className='hello text-orange'>ERREUR </div>
        <div className='hello text-blue'>ERREUR </div>
        <div className='text-red hello-more'> 404</div>
        <div className='text-orange hello-more'> 404</div>
        <div className='text-blue hello-more'> 404</div>
      </div>
    </div>
  );
};
  
export default ErrorPage;