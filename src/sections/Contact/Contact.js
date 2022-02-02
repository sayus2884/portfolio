import { useState } from "react";
import { isEmail } from "validator";
import Link from "next/link";
import axios from "axios";
import { PaperPlaneTilt, LinkBreak, SpinnerGap } from "phosphor-react";

import Input from "../../components/Input/Input";
import Textarea from "../../components/Textarea/Textarea";
import Button from "../../components/Button/Button";

function About({ children, className, ...props }) {
  const [messageSent, setMessageSent] = useState(false);
  const [messageSentFailed, setMessageSentFailed] = useState(false);

  return (
    <div className={className}>
      <div className="relative flex flex-col gap-30 items-center px-45 h-full overflow-auto">
        {!messageSent && !messageSentFailed && (
          <Form
            onMessageSent={() => setMessageSent(true)}
            onMessageSentFailed={() => setMessageSentFailed(true)}
          />
        )}

        {messageSent && <SuccessPrompt />}

        {messageSentFailed && <FailedPrompt />}
      </div>
    </div>
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
        console.log(res);
        if (res) {
          onMessageSent();
        }
      })
      .catch((err) => onMessageSentFailed())
      .finally(() => setSending(false));
  };

  return (
    <>
      <h2 className="text-32 font-header tracking-widest mb-24">Get In Touch!</h2>

      <form className="flex flex-col gap-24" onSubmit={handleSubmit}>
        <Input
          className="bg-transparent border border-moonlight p-15 rounded"
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleNameChange}
          value={name}
          required
        />

        <Input
          className="bg-transparent border border-moonlight p-15 rounded"
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={handleEmailChange}
          value={email}
          required
        />

        <Textarea
          className="bg-transparent border border-moonlight h-180 p-15 rounded"
          type="text"
          name="message"
          value={message}
          onChange={handleMessageChange}
          placeholder="What do you have in mind?"
          minLength="2"
          maxLength="1000"
          required
        />

        <Button
          type="submit"
          className="flex justify-center text-24 text-moonlight border border-moonlight w-full rounded p-10 disabled:opacity-50 disabled:cursor-default"
          disabled={!isFormFilled}>
          {sending ? <SpinnerGap className="animate-spin" size={32} /> : "Send"}
        </Button>
      </form>
    </>
  );
}

function SuccessPrompt() {
  return (
    <div className="flex flex-col items-center gap-24 text-center">
      <PaperPlaneTilt size={80} />
      <h2 className="text-36">Message Sent!</h2>
      <p className="text-22">
        Thanks for contacting me. I&apos;ll be sure respond as soon as I can!
      </p>
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

export default About;
