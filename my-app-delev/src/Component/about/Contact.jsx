import React from 'react'
import emailjs from "emailjs-com";
import { Link ,useNavigate} from 'react-router-dom'

function Contact() {

  function sendEmail(e) {
    e.preventDefault();

emailjs.sendForm('service_de7ooak', 'template_4lxrlmu', e.target, 'c1KDl9CcFGoJ5SOA2')
    .then((result) => {
     console.log(result);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()

}

  return (
  
    <section class="bg-yellow-200 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-white text-center absolute top-5 pb-5  w-full">FAST <span className="text-yellow-300">&& </span>  YUMMY</h1>
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center mt-5 text-gray-900 dark:text-white">Contact Us</h2>
        <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about FAST && YUMMY? Need details about our Business plan? Let us know.</p>
        <form  class="space-y-8" onSubmit={sendEmail}>
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                <input type="email" name="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
            </div>
            <div>
                <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                <input type="text" name="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
            </div>
            <div class="sm:col-span-2">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                <textarea name="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
            </div>
          <Link  type="submit"  onClick={()=>{alert("thank you we will reaply soon")}} class="bg-tawlnd text-white bg-black font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-primary-300 hover:bg-primary-400 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" to="/">Send message</Link> 
        
        </form>
    </div>
  </section>
  )
}

export default Contact