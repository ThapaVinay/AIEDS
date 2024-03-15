import rectangle from "./../../assets/RectangleUp.svg"
const ContextSection = () => {
  return (
    <div className='w-full h-fit mt-[30vh] flex flex-col justify-center items-center'>
      <div className='relative w-[83rem] h-[38rem]'>
        <img src={rectangle} className="absolute w-[83rem]" alt="" />
        <div className="z-5 absolute w-full h-full flex flex-col justify-center items-center">
          <div className="py-1 px-4 flex justify-center items-center text-[0.8rem]  bordergradient rounded-2xl bg-secondary-background font-plusjakarta font-medium text-primary-white">
            Attention: AI Enthusiasts and Knowledge Seekers
          </div>
          <h1 className="text-primary-white font-plusjakarta font-bold w-[60rem] text-[3rem] text-center titletextbackground">Harness the Power of AI: <br /> Explore Chat, Notes, and PDF Upload Capabilities</h1>
          <p className='text-[1rem] text-primary-white w-[54rem] text-center font-plusjakarta drop-shadow-xl shadow-black'>Unlock the potential of AI-driven tools for seamless text interaction, efficient note-taking, and effortless PDF uploads. Our AI model is designed to streamline your workflow and enhance productivity across various tasks.</p>
          <button className="bg-white rounded-2xl text-black font-plusjakarta font-semibold text-[1rem] py-2 px-[4rem] mt-6">
            Start Now
          </button>
        </div>
      </div>
      <div className='my-6'>
        <p className='text-[1rem] blacktextbackground w-[54rem] text-center font-plusjakarta '>Experience the convenience and efficiency of AI-driven solutions tailored to meet your needs. Join countless users worldwide who rely on our platform for enhanced productivity and seamless integration of AI technologies.</p>
      </div>
      <div className='relative w-[83rem] h-[38rem]'>
        <img src={rectangle} className="absolute w-[83rem] rotate-180" alt="" />
      </div>
    </div>
  )
}

export default ContextSection
