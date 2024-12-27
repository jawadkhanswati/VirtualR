import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"

const HeroSection = () => {
  return (
    <>
    <div className="flex flex-col items-center mt-6 lg:mt-20">
       <h1 className="text-4xl font-bold sm:text-6xl lg:7xl text-center tracking-wide">
        VirtualR Build Tools <span className="bg-gradient-to-r from-orange-500 to-orange-900 text-transparent bg-clip-text">For Developer</span>
       </h1>
       <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit dolorum et reiciendis corporis quia nemo enim beatae dolor nostrum provident rem, amet labore, minus deleniti. Est dolor quisquam, exercitationem unde in repellendus?
       </p>
       <div className="flex justify-center items-center my-10">
        <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-900 py-3 px-4 mx-3 rounded-md">Start For Free</a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">Documentation</a>
       </div>
       <div className="flex mt-10 justify-center">
        <video src={video1} autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
        your browser does not support this video
        </video>
        <video src={video2} autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
        your browser does not support this video
        </video>
       </div>
    </div>
    </>
  )
}

export default HeroSection
