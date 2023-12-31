const DescriptionText = () => {
  return (
    <div className="text-white">
      <div className="font-extrabold text-transparent text-5xl lg:text-9xl bg-clip-text bg-gradient-to-r from-purple-400 to-green-600 mb-5">IFTA</div>     
      <div className="font-extrabold text-transparent text-4xl lg:text-8xl bg-clip-text bg-gradient-to-b from-white via-green-500 to-black  mb-5">Intelligent Farming Technological Assets</div>
      <div className=" text-transparent text-lg lg:text-2xl bg-clip-text bg-gradient-to-b from-white to-black font-helvetica mb-5">
        Where cutting-edge AI complements sustainable agriculture and land conservation. Our mission
        is to transform agriculture for better output at a minimum environmental cost by leveraging
        on Artificial Intelligence and data-driven decisions.
        <div>
          <button type="button" className="btn btn-outline-light rounded-none mt-5" >Join waiting list &rarr;</button>
        </div>
      </div>
    </div>
  );
};

export default DescriptionText;

