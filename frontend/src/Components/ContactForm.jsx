export default function ContactForm() {
  return (
    <div className="flex items-center justify-center mt-40">
      <div className="flex-col lg:w-[30%] w-[80%]">
        <h1 className="text-3xl m-7 text-center">Contact me</h1>
        <form className="space-y-4 ">
          <div className="flex-col">
            <div className="">
              <label htmlFor="email" className="text-xl">
                Email
              </label>
            </div>
            <input
              type="email"
              className="bg-gray-700 w-full p-2 rounded-xl"
              placeholder="@your email"
            />
          </div>
          <div className="flex-col">
            <div>
              <label htmlFor="message" className="text-xl">
                Message
              </label>
            </div>
            <input
              type="text"
              className="bg-gray-700 w-full p-2 rounded-xl"
              placeholder="message"
            />
          </div>
          <button className="border-2 rounded-3xl text-xl px-4 py-2">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
