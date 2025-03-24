import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const key = import.meta.env.VITE_FORM_KEY;
  const [state, handleSubmit] = useForm(key || "");

  // Controlled form state
  const [formData, setFormData] = useState({ email: "", message: "" });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Watch for successful submission and reset form
  useEffect(() => {
    if (state.succeeded) {
      setFormData({ email: "", message: "" });
    }
  }, [state.succeeded]);

  return (
    <div id="contact" className="min-h-[100vh] flex flex-col justify-center items-center">
      <div className="relative">
        <h1 className="mt-10 text-center font-exo font-bold text-4xl before:content-[''] before:h-1.5 before:w-24 before:rounded-full before:left-[25%] before:absolute before:bg-primary before:-bottom-6">
          Contact Us<span className="text-6xl text-primary"> .</span>
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-28 flex px-6 w-full sm:w-[450px] mx-auto flex-col gap-4"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-medium">Your email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="jack@gmail.com"
            className="w-full rounded-md border-2 border-primary bg-slate-900 dark:bg-slate-200 p-2 outline-primary"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Let's talk about..."
            className="w-full resize-none rounded-md border-2 border-primary bg-slate-900 dark:bg-slate-200 p-2 outline-primary"
            required
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <button
          disabled={state.submitting}
          className="mt-2 w-full rounded-md bg-primary p-2 transition duration-300 ease-out hover:bg-red-700 dark:text-slate-100"
        >
          {state.submitting ? <span className="loader"></span> : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
