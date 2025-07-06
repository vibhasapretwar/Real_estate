import React from 'react'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const Contact = () => {


const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "70560e72-a000-40e6-bdc6-b93152c5fb85");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form submitted successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult(" ");
    }
  };


  return (
    <motion.div
    initial={{ opacity: 0, x:-200 }}
      // animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    
    
    className='text-center  p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
      {/* <div className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Contact'> */}
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center '> Contact <span className='underline underline-offset-4 decoration-1 underline font-light'>With Us</span></h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Get in touch with us for any inquiries or assistance.</p>
    

        <form onSubmit={onSubmit} className='max-w-md mx-auto bg-white p-8 rounded-lg shadow-md'>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 text-left'>Your Name
                <input className='w-full border border-gray-300 py-3 px-4 mt-2 rounded' type="text" name='Name' placeholder='Your Name' required/>
                </div>

                <div className='w-full md:w-1/2 text-left md:pl-4'>Your Email
                <input className='w-full border border-gray-300 py-3 px-4 mt-2 rounded' type="email" name='Email' placeholder='Your Email' required/>
                </div>

            </div>
            <div className='my-6 text-left'>
                Message
                <textarea className='w-full border border-gray-300 py-3 px-4 mt-2 rounded' name="message" rows="5" placeholder='Message' required></textarea>
            </div>
            <button type='submit' className='bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-800 cursor-pointer'>{result ? result : "Send Message"}</button>
            </form>
    </motion.div>
  )
}

export default Contact
