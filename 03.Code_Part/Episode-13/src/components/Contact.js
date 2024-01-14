const Contact = () => {
  return (
    <div className="text-center">
      <h1 className=" font-bold text-2xl p-4 m-4">
        Contact Us Page
      </h1>
      <form>
    <input type="text" name="name" className="border border-black p-2 m-2 rounded-lg" placeholder="name"></input>
    <input type="text" name="message" className="border border-black p-2 m-2 rounded-lg" placeholder="message"></input>
    <button className="border border-black px-4 py-2 m-2 rounded-lg bg-slate-200">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
