import React, { useState } from "react";

const QuickEnquiryForm = () => {
  const [data, setData] = useState({ name: "", email: "", phone: "", course: "" });

  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <section id="enquiry" className="py-16 bg-blue-50">
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Quick Enquiry</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" onChange={handleChange} placeholder="Name" className="w-full border p-2 rounded" />
          <input name="email" onChange={handleChange} placeholder="Email" className="w-full border p-2 rounded" />
          <input name="phone" onChange={handleChange} placeholder="Phone" className="w-full border p-2 rounded" />
          <select name="course" onChange={handleChange} className="w-full border p-2 rounded">
            <option value="">Select Course</option>
            <option>Python</option>
            <option>Java</option>
            <option>Full Stack</option>
          </select>
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default QuickEnquiryForm;
