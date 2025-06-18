import Header from "@/layouts/header-layout";
import Layout from "@/layouts/layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, subject, message } = formData;

    if (firstName && lastName && email && phone && subject && message) {
      toast.success("Submitted Request ✅");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } else {
      toast.error("Please fill all the fields ⚠️");
    }
  };

  return (
    <div className="w-full cursor-default bg-light dark:bg-dark min-h-screen">
      <Header />
      <Layout>
        <div className="contact-page-sec flex items-center justify-center gap-12 max-w-7xl mx-auto">
          <div className="flex-shrink-0">
            <img
              src="https://blush.design/api/download?shareUri=c1UkldsAbIS8I4IR&c=Skin_0%7Eedb98a&w=800&h=800&fm=png"
              alt="Vaishnav Illustration"
              className="h-full max-h-[500px] w-auto object-contain"
            />
          </div>

          <div className="max-w-3xl rounded-lg shadow p-8 text-center flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">Contact Me</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Have a project idea, DevOps collab, or cloud experiment? Drop me a message!
            </p>

            <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 mb-6">
              <p>
                📧 <span className="font-medium">Email:</span>{" "}
                <a href="mailto:vaishnavyejju@gmail.com" className="text-blue-600 hover:underline">vaishnavyejju@gmail.com</a>
              </p>
              <p>
                💼 <span className="font-medium">LinkedIn:</span>{" "}
                <a href="https://www.linkedin.com/in/vaishnav-yejju" target="_blank" className="text-blue-600 hover:underline">linkedin.com/in/vaishnav-yejju</a>
              </p>
              <p>
                🐙 <span className="font-medium">GitHub:</span>{" "}
                <a href="https://github.com/VaishnavYejju" target="_blank" className="text-blue-600 hover:underline">github.com/VaishnavYejju</a>
              </p>
            </div>
          </div>

          <div className="flex-shrink-0">
            <img
              src="https://blush.design/api/download?shareUri=c1UkldsAbIS8I4IR&c=Skin_0%7Eedb98a&w=800&h=800&fm=png"
              alt="Vaishnav Illustration Flipped"
              className="h-full max-h-[500px] w-auto object-contain scale-x-[-1]"
            />
          </div>
        </div>

        <hr className="border-t-4 border-dashed border-gray-400 my-8" />

        <div className="py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">We’d Love to Hear From You</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">Questions, feedback, or just a hello — drop it below!</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="border p-3 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="border p-3 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border p-3 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border p-3 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="col-span-2 border p-3 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="col-span-2 border p-3 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                ></textarea>
              </div>

              <button type="submit" className="mt-6 bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </Layout>

      <ToastContainer />
    </div>
  );
}

export default Contact;
