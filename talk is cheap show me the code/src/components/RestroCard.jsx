const RestroCard = () => {
  return (
    <>
     
        <main className="inline-block mt-10 mb-10 mx-5">
          <div className=" w-72 h-48  box-content hover:border-2 hover:rounded-t-lg shadow-lg cursor-pointer">
            <div className="Restro image">
              <img
                src="public\assets\logo.jpg"
                alt="Restro card image"
                className="w-80 h-32 rounded-t-lg"
              />
            </div>
            <div>
              <p className="ml-5 text-lg">Dist name</p>

              <div className="flex justify-around">
                <span>Deleviry time</span>
                <span>Prise</span>
                <span>Rating</span>
              </div>
            </div>
          </div>
        </main>
     
    </>
  );
};

export default RestroCard;
