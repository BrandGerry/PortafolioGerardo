import React from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    axios
      .post(
        "https://getform.io/f/d4ef8e58-77b2-4340-a808-e03841391884",
        formData
      )
      .then((response) => {
        Swal.fire({
          icon: "success",
          iconColor: "#0bacb2",
          title:
            "Gracias por contactarme, En pronto me pondre en contacto contigo.",
          showConfirmButton: true,
          background: "#191a19",
          color: "#fff",
          confirmButtonColor: "#116f79",
          backdrop: `
                        rgba(54, 55, 54,0.4)
                    `,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    event.target.reset();
  };

  return (
    <section
      name="Contact"
      className="relative w-full md:h-screen p-4 text-white h-unset"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-sky-800 sm:text-5xl">
            Contact
          </h2>
          <p className="py-6">Llena el formulario para ponernos en contacto.</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-sky-800"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-sky-800"
              required
            />

            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-sky-800"
              required
            ></textarea>

            <button className="text-black font-semibold bg-gradient-to-t bg-sky-400 to-primary-color px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
