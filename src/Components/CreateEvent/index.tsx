function CreateEvent() {
  return (
    <>
      <div className="h-screen flex flex-col justify-end">
        <section className="session flex flex-col gap-5 justify-center items-center bg-[#F2EFEB] pt-6">
          <div className=" text-blueCustom">
            Créer une session
          </div>
          <form className="flex flex-col gap-2 w-full text-right px-10">
            <input
              placeholder="Titre"
              name="Titre"
              className="text-right"
            />
            <textarea
              placeholder="Description"
              name="Description"
              className="text-right w-full"
            />
            <input
              placeholder="Activité"
              name="Activité"
              className="text-right"
            />
            <input
              placeholder="Niveau"
              name="Niveau"
              className="text-right"
            />
            <input
              placeholder="Date"
              name="Date"
              type="text"
              className="text-right"
            />
            <input
              placeholder="Début de session"
              name="Début de session"
              className="text-right"
            />
            <input
              placeholder="Fin de session"
              name="Fin de session"
              className="text-right"
            />
            <input
              placeholder="Nombre de places"
              name="Nombre de places"
              className="text-right"
            />
          </form>
          <button className="bg-blue text-white mt-16 mb-5 py-3 px-7 shadow-lg shadow-black-500/40 rounded-lg">
            <img src="./img/Arrow_right.svg" alt="Arrow_right" />
          </button>
        </section>
      </div>
    </>
  );
}
  
export default CreateEvent;