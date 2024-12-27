import { testimonials } from "../constants"

const Testimonials = () => {
  return (
    <div className=" my-6 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20-">What peoples are saying</h2>
      <div className="flex flex-wrap justify-cente">
        {testimonials.map((testimonial,index)=>(
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 py-2 px-4">
                <div className="bg-neutral rounded-md p-6 text-md border border-neutral-600 font-thin">
                    <p>{testimonial.text}</p>
                    <div className="flex mt-8 items-center gap-1 ">
                        <img src={testimonial.image} className="size-12 mr-6 rounded-full border border-neutral-300" alt="" />
                        <div>
                        <h6>{testimonial.user}</h6>
                        <span className="text-sm font-normal italic text-neutral-600">{testimonial.company}</span>
                        </div>
                    </div>
                </div>
            </div>
            
        ))}
      </div>
    </div>
  )
}

export default Testimonials
