import ScrollReveal from "./ScllorAnimation";
function ContactUs() {

  return (
    <ScrollReveal from="bottom">
      <form className="flex flex-col items-center text-slate-100 text-sm py-8 p-5">
        <div className="text-xl mt-1 md:mt-1 lg:text-3xl  ml-2 md:ml-10 text-center text-slate-100 text-shadow-2xs text-shadow-amber-50 ">
          Contact-Us
        </div>
        <div className="flex justify-center w-full">
          <hr className="bg-orange-500 ml-2 md:ml-10 h-1 rounded-full w-25 lg:w-35 mt-1 mb-5  border-yellow-500 " />
        </div>
        <h1 className="text-3xl font-semibold text-slate-100 pb-4 text-center">
          Get in touch with us
        </h1>
        <p className="md:text-xl text-gray-200 text-center pb-10">
          Feel free to contact Easyway Classes — we're always here to help you learn better!
          <br />
          Lorem Ipsum has been the industry's standard dummy text.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-8 w-[330px] md:w-[700px]">
          <div className="w-full">
            <label className="" htmlFor="name">
              Your Name
            </label>
            <input
              className="h-12 p-2 mt-2 w-full border border-gray-300 rounded outline-none focus:border-indigo-300"
              type="text"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="w-full">
            <label className="" htmlFor="name">
              Your Email
            </label>
            <input
              className="h-12 p-2 mt-2 w-full border border-gray-300 rounded outline-none focus:border-indigo-300"
              placeholder="Enter Your Email"
              type="email"
              required
            />
          </div>
        </div>

        <div className="mt-6 w-[330px] md:w-[700px]">
          <label className="" htmlFor="name">
            Message
          </label>
          <textarea
            className="w-full mt-2 p-2 h-40 border border-gray-300 rounded resize-none outline-none focus:border-indigo-300"
            placeholder="Enter Your Message"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="mt-5 bg-slate-900 opacity-98 border-1 border-slate-200 text-white h-12 w-56 px-4 rounded active:scale-95 transition"
        >
          Send Message
        </button>
      </form>
    </ScrollReveal>
  );
}

export default ContactUs;
