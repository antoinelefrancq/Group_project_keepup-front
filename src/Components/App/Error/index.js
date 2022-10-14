

const ErrorPage = () =>{

  return (
    <div className="relative h-[calc(100vh-130px)] w-full">
      <img src='/img/error.png' className="absolute bottom-0 w-full mx-auto"/>
      <div className="text-white text-3xl md:text-5xl p-10 text-center">
        <p className="">Oups</p>
        <p className="">il n'y a rien à voir ici</p>
        <p className="mt-5 tracking-wide">ERREUR 404</p>
      </div>
    </div>
  );
};
  
export default ErrorPage;