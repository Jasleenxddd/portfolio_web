"use client";

import { useState } from "react";
import Image from "next/image";
export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="w-full flex justify-center py-24 bg-[#faf8e8]">
      {/* FRAME */}
      <div className="relative max-w-4xl w-full">
        {/* SHADOW */}
        <div className="absolute inset-0 translate-x-[10px] translate-y-[10px] bg-black/25" />

        {/* CARD */}
        <div className="relative bg-white border-[4px] border-black p-10">
          {/* STAR (optional decoration) */}
          <div className="absolute -top-24 right-48 text-pink-400 text-4xl">
            <Image
            src="/staruu.png"
      alt="button accent"
      width={140}
      height={140}
      className=""/>
          </div>

          {/* HEADING */}
          <h2 className="text-3xl font-bold text-center">
            Let’s start designing your project
          </h2>

          <p className="text-center text-gray-700 mt-3 max-w-2xl mx-auto">
            Want to see how to transform your brand into a unique style.
            Send us a message.
          </p>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6 max-w-2xl mx-auto"
          >
            {/* NAME */}
            <input
              type="text"
              name="name"
              placeholder="Hey there! Who am I chatting with?"
              value={form.name}
              onChange={handleChange}
              className="
                w-full
                border-[3px] border-black
                px-4 py-3
                rounded-md
                outline-none
              "
            />

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              placeholder="Where can I reach you?"
              value={form.email}
              onChange={handleChange}
              className="
                w-full
                border-[3px] border-black
                px-4 py-3
                rounded-md
                outline-none
              "
            />

            {/* MESSAGE */}
            <textarea
              name="message"
              rows={5}
              placeholder="Tell me your thoughts, ideas, or just say hi!"
              value={form.message}
              onChange={handleChange}
              className="
                w-full
                border-[3px] border-black
                px-4 py-3
                rounded-md
                resize-none
                outline-none
              "
            />

            <div className="flex justify-center pt-4">
  <div className="relative inline-block">
    <button
      type="submit"
      className="
       border-4 border-black
    bg-sky-200
    text-black font-semibold
        px-8 py-3
        rounded-full
        font-semibold
        hover:translate-y-[-2px]
        transition
      "
    >
      Send us message
    </button>

    {/* CORNER IMAGE */}
    <Image
      src="/icons/Frame 13.png"
      alt="button accent"
      width={40}
      height={40}
      className="
        absolute
        -right-8
        -bottom-5
      "
    />
  </div>
</div>

          </form>
        </div>
      </div>
    </section>
  );
}
