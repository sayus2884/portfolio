import React, { useState, forwardRef, useRef, useEffect, createContext, useContext } from "react";
import { isEmail } from "validator";
import axios from "axios";
import { PaperPlaneTilt, LinkBreak, SpinnerGap } from "phosphor-react";

import Input from "../components/Input/Input";
import Textarea from "../components/Textarea/Textarea";
import Button from "../components/Button/Button";

const useContact = () => {
  const [name, setNameValue] = useState("");
  return { name, setNameValue };
};

const ContactContext = createContext(undefined);

interface Props {
  className?: string;
}

const Contact: React.FC<Props> = ({ children, className, ...props }) => {
  const [messageSent, setMessageSent] = useState(false);
  const [messageSentFailed, setMessageSentFailed] = useState(false);
  const { name, setNameValue } = useContact();

  return (
    <div className="bg-blackberry lg:rounded-l-lg w-full overflow-auto">
      <div className="flex justify-center py-20 lg:py-40 h-full">
        <div className="flex flex-col gap-30 w-full md:max-w-500 px-20 md:px-40 lg:px-0 items-center">
          <ContactContext.Provider value={{ name, setNameValue }}>
            {!messageSent && !messageSentFailed && (
              <Form
                onMessageSent={() => setMessageSent(true)}
                onMessageSentFailed={() => setMessageSentFailed(true)}
              />
            )}

            {messageSent && <SuccessPrompt sender={name} />}

            {messageSentFailed && <FailedPrompt />}
          </ContactContext.Provider>
        </div>
      </div>
    </div>
  );
};

interface FormProps {
  onMessageSent: () => void;
  onMessageSentFailed: () => void;
}

const Form: React.FC<FormProps> = ({ onMessageSent, onMessageSentFailed }) => {
  const { setNameValue } = useContext(ContactContext);
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
          setNameValue(name);
          onMessageSent();
        }
      })
      .catch((err) => {
        console.log(err);

        onMessageSentFailed();
      });
  };

  useEffect(() => {
    return setSending(false);
  }, [onMessageSent]);

  return (
    <>
      <h2 className="text-32 font-header tracking-widest w-full">Get In Touch!</h2>

      <form className="flex flex-col gap-24 w-full" onSubmit={handleSubmit}>
        <label className="w-full">
          <span className="block mb-[5px]">Name</span>
          <Input
            className="bg-transparent border border-moonlight p-15 w-full rounded"
            type="text"
            name="name"
            onChange={handleNameChange}
            value={name}
            id="name"
            required
          />
        </label>

        <label>
          <span className="block mb-[5px]">Email</span>
          <Input
            className="bg-transparent border border-moonlight p-15 w-full rounded"
            type="email"
            name="email"
            onChange={handleEmailChange}
            value={email}
            required
          />
        </label>

        <label>
          <span className="block mb-[5px]">What do you have in mind?</span>
          <Textarea
            className="bg-transparent border border-moonlight h-180 p-15 w-full rounded"
            type="text"
            name="message"
            value={message}
            onChange={handleMessageChange}
            minLength="2"
            maxLength="1000"
            required
          />
        </label>

        <Button
          type="submit"
          className="flex justify-center text-24 text-moonlight border border-moonlight w-full rounded p-10 disabled:opacity-50 disabled:cursor-default"
          disabled={!isFormFilled}>
          {sending ? <SpinnerGap className="animate-spin" size={32} /> : "Send"}
        </Button>
      </form>
    </>
  );
};

const SuccessPrompt = ({ sender = "test" }) => {
  return (
    <div className="flex flex-col items-center gap-24 text-justify justify-center h-4/5">
      <PaperPlaneTilt size={80} />
      <h2 className="text-36">Message Sent!</h2>
      <p className="text-22">
        Thanks for contacting me,{" "}
        <span className="font-bold text-plum">{sender.split(" ")[0]}</span>. I&apos;ll be sure
        respond as soon as I can!
      </p>
    </div>
  );
};

const FailedPrompt = () => {
  return (
    <div className="flex flex-col items-center gap-24 text-justify justify-center h-4/5">
      <LinkBreak size={80} />
      <h2 className="text-36">Message was not sent... :(</h2>
      <p className="text-22">
        Sorry. It appears I have reached the maximum amount of emails that my email provider can
        handle. But you can still send me an email at{" "}
        <span className="underline text-moonlight">contact@jonacius-villamor.com</span>. Cheers!
      </p>
    </div>
  );
};

export default Contact;
