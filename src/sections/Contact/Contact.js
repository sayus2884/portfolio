import { useState } from "react";
import { isEmail } from "validator";
import axios from "axios";
import { Container } from "./Contact.styles";
import { PaperPlaneTilt, LinkBreak, SpinnerGap } from "phosphor-react";

function Contact(props) {
  const [messageSent, setMessageSent] = useState(false);
  const [messageSentFailed, setMessageSentFailed] = useState(false);

  return (
    <section
      {...props}
      className="flex items-center justify-center px-55 py-140 gap-100 text-white">
      <h2 className="text-130 text-center leading-extra-loose tracking-wider font-semibold max-w-735 font-semibold">
        Ready <span className="text-moonlight">to build your website</span>?
      </h2>
      <div className="flex flex-col mx-22 w-420">
        {!messageSent && !messageSentFailed && (
          <Form
            onMessageSent={() => setMessageSent(true)}
            onMessageSentFailed={() => setMessageSentFailed(true)}
          />
        )}

        {messageSent && <SuccessPrompt />}

        {messageSentFailed && <FailedPrompt />}
      </div>
    </section>
  );
}

function Form({ onMessageSent, onMessageSentFailed }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const isFormFilled = name.length > 1 && isEmail(email) && message.length > 10;

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
    setSending(true);
    axios
      .post("/api/message", {
        name,
        email,
        message,
      })
      .then((res) => {
        if (res) {
          onMessageSent();
        }
      })
      .catch((err) => onMessageSentFailed())
      .finally(() => setSending(false));
  };

  return (
    <>
      <h3 className="text-32 font-semibold mb-24">Get In Touch!</h3>

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
          className="flex justify-center text-32 text-moonlight border border-moonlight w-full rounded p-10 font-bold disabled:border-cloudy disabled:text-cloudy disabled:cursor-default"
          disabled={!isFormFilled}>
          {sending ? <SpinnerGap className="animate-spin" size={32} /> : "Send"}
        </button>
      </form>
    </>
  );
}

function SuccessPrompt() {
  return (
    <div className="flex flex-col items-center gap-24 text-center">
      <PaperPlaneTilt size={80} />
      <h2 className="text-36">Message Sent!</h2>
      <p className="text-22">Thanks for contacting me. I'll be sure respond as soon as I can!</p>
    </div>
  );
}

function FailedPrompt() {
  return (
    <div className="flex flex-col items-center gap-24 text-center">
      <LinkBreak size={80} />
      <h2 className="text-36">Message was not sent... :(</h2>
      <p className="text-22">
        Sorry. It appears I have reached the maximum amount of emails that my email provider can
        handle. But you can still send me an email at{" "}
        <span className="underline text-moonlight">contact@jonacius-villamor.com</span>. Cheers!
      </p>
    </div>
  );
}

export default Contact;
