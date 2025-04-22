import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("masuk");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="form-control max-w-md mx-auto gap-4 bg-base-100 shadow-lg p-6 rounded-xl flex flex-col"
    >
      <h2 className="text-xl font-semibold text-center">Contact Me</h2>
      <div className="form-group">
        <label className="label pb-1">
          <span className="label-text font-medium">Your Name</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="Agus Sampurno"
          className="input input-bordered w-full"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label className="label pb-1">
          <span className="label-text font-medium">Your Email</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          className="input input-bordered w-full"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <label className="label pb-1">
          <span className="label-text font-medium">Your Message</span>
        </label>
        <textarea
          name="message"
          className="textarea textarea-bordered w-full"
          placeholder="Type your message here..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={4}
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary w-full mt-6">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
