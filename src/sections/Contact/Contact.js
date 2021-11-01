import { useState } from "react";
import { Container } from "./Contact.styles";

function Contact(props) {
  return (
    <section
      {...props}
      className="flex items-center justify-center px-55 py-140 gap-100 text-white">
      <h2 className="text-130 text-center leading-extra-loose tracking-wider font-semibold max-w-735 font-semibold">
        Ready <span className="text-moonlight">to build your website</span>?
      </h2>
      <div className="flex flex-col mx-22 w-420">
        <h3 className="text-32 font-semibold mb-24">Contact Me</h3>
        <Form />
      </div>
    </section>
  );
}

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("send form here");
  };

  return (
    <form className="flex flex-col gap-24" onSubmit={handleSubmit}>
      <input
        className="bg-transparent border border-moonlight p-15 rounded"
        type="text"
        name="name"
        placeholder="Your Name"
        onChange={handleNameChange}
        value={name}
        required
      />

      <input
        className="bg-transparent border border-moonlight p-15 rounded"
        type="email"
        name="email"
        placeholder="Your Email"
        onChange={handleEmailChange}
        value={email}
        required
      />

      <textarea
        className="bg-transparent border border-moonlight h-180 p-15 rounded"
        type="text"
        name="message"
        value={message}
        onChange={handleMessageChange}
        placeholder="What do you need?"
        minLength="2"
        maxLength="1000"
        required
      />

      <button
        type="submit"
        className="text-moonlight text-32 border border-moonlight w-full rounded p-10 font-bold">
        Get In Touch
      </button>
    </form>
  );
}

export default Contact;
