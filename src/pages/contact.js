import { useState } from "react";
import { isEmail } from "validator";
import axios from "axios";
import Image from "next/image";

import Card from "../components/Card/Card";
import Input from "../components/Input/Input";
import Textarea from "../components/Textarea/Textarea";
import Button from "../components/Button/Button";

function Contact() {
  return (
    <div className="relative right-120">
      <Card className="lg:min-w-lg_card p-20">
        <Form />
      </Card>
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
          className="flex justify-center text-32 text-moonlight border border-moonlight w-full rounded p-10 font-bold disabled:border-cloudy disabled:text-cloudy disabled:cursor-default"
          disabled={!isFormFilled}>
          {sending ? <SpinnerGap className="animate-spin" size={32} /> : "Send"}
        </Button>
      </form>
    </>
  );
}

export default Contact;
