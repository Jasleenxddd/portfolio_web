"use client";

import Image from "next/image";
import { useState } from "react";

type SubmissionStatus = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<SubmissionStatus>("idle");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/jasleenkaurvasir@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...form,
            _subject: `Portfolio message from ${form.name}`,
            _template: "table",
            _replyto: form.email,
            _honey: "",
          }),
        }
      );

      if (!response.ok) throw new Error("Unable to send message");

      setForm({ name: "", email: "", message: "" });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="flex w-full justify-center bg-[#faf8e8] px-5 py-16 scroll-mt-28 sm:px-6 sm:py-24 sm:scroll-mt-36"
    >
      <div className="relative w-full max-w-4xl">
        <div className="absolute inset-0 translate-x-[10px] translate-y-[10px] bg-black/25" />

        <div className="relative border-[4px] border-black bg-white p-5 sm:p-10">
          <div className="absolute -top-20 right-8 hidden text-4xl text-pink-400 sm:block md:right-48">
            <Image src="/staruu.png" alt="" width={140} height={140} />
          </div>

          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Let&apos;s build something meaningful
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-gray-700">
            Have an opportunity, project idea, or just want to connect? I&apos;d
            love to hear from you.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 max-w-2xl space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Hey there! Who am I chatting with?"
              value={form.name}
              onChange={handleChange}
              required
              minLength={2}
              autoComplete="name"
              className="w-full rounded-md border-[3px] border-black px-4 py-3 outline-none focus:ring-4 focus:ring-yellow-200"
            />

            <input
              type="email"
              name="email"
              placeholder="Where can I reach you?"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
              className="w-full rounded-md border-[3px] border-black px-4 py-3 outline-none focus:ring-4 focus:ring-yellow-200"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Tell me your thoughts, ideas, or just say hi!"
              value={form.message}
              onChange={handleChange}
              required
              minLength={10}
              className="w-full resize-none rounded-md border-[3px] border-black px-4 py-3 outline-none focus:ring-4 focus:ring-yellow-200"
            />

            <div className="flex justify-center pt-4">
              <div className="relative inline-block">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="rounded-full border-4 border-black bg-sky-200 px-8 py-3 font-semibold text-black transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
                <Image
                  src="/icons/Frame 13.png"
                  alt=""
                  width={40}
                  height={40}
                  className="absolute -bottom-5 -right-8"
                />
              </div>
            </div>

            <div
              aria-live="polite"
              className="min-h-6 text-center text-sm font-semibold"
            >
              {status === "success" && (
                <p className="text-green-700">
                  Message sent successfully. I&apos;ll get back to you soon!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-700">
                  The message could not be sent. Please email me at{" "}
                  <a
                    className="underline"
                    href="mailto:jasleenkaurvasir@gmail.com"
                  >
                    jasleenkaurvasir@gmail.com
                  </a>
                  .
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
