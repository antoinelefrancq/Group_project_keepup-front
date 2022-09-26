import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="bg-cover bg-no-repeat bg-center bg-home w-screen h-screen">
            <div className="bg-opacity-20 bg-black text-white pb-6 mb-20">
                <h3 className="text-2xl font-bold pt-7 pb-1 pl-4"><p>Besoin de</p><p>Motivation ?</p></h3>
                <p className="pl-4"><p>Trouve-toi le partenaire</p><p>sportif idéal to <span className="text-blue">Keep</span><span className="text-red">'Up</span> !</p> </p>
            </div>    
            <div className="flex flex-col text-center pt-40">
                <Link to="/signup" ><button type="button" className="rounded-full py-3 px-8 text-2xl bg-gradient-to-b from-red to-blue hover:from-pink-500 hover:to-yellow-500 text-white">Lance toi</button></Link>
                <Link to="/login" className="pt-3 text-red">déjà inscrit ?</Link>
                

            </div>        
        </div>
    );
}

export default Home;