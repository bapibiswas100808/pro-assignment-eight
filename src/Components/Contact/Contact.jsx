import { IoLocationOutline } from "react-icons/io5";
import { FaHeadphonesAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  return (
    <div>
      <div className="min-h-screen mt-5 lg:mt-10">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-5 lg:gap-10">
          <div className="text-center lg:text-left flex-1 py-2 px-4 rounded-xl bg-[#f3f3f3] shadow-lg">
            <h1 className="text-2xl lg:text-4xl font-bold font-play">
              Subscribe Book Store!
            </h1>
            <p className="pb-3 font-sans">
              Subscribe to our bookstore for exclusive offers, new releases, and
              personalized recommendations. Join now for literary delights
              delivered straight to your inbox!
            </p>
            <div className="">
              <p className="text-sans text-lg">Contact Us:</p>
              <p className="font-sans font-semibold">
                <IoLocationOutline />
                <span className="ml-2">
                  Location: 123 Bookworm Lane, Fiction City, USA
                </span>
              </p>
              <p className="font-sans font-semibold mb-0">
                <FaHeadphonesAlt />
                <span className="ml-2">Phone: +1 (555) 123-4567</span>
              </p>
              <p className="font-sans font-semibold lg:flex lg:items-center gap-2">
                <MdOutlineMail />
                <span className="ml-2 lg:ml-0">
                  Email: info@fictionalbookstore.com
                </span>
              </p>
            </div>
          </div>
          <div className="card w-full flex-1 min-h-[355px]">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-green-500 hover:bg-red-500 text-white font-sans">
                  Subscribe Now!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
