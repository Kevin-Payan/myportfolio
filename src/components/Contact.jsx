import { LuMail, LuGithub } from "react-icons/lu";
import { LiaLinkedin } from "react-icons/lia";
import { FaTwitter } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="bg-custom-background  px-6 py-16 md:px-16">
      <div className="max-w-2xl mx-auto text-center">
      <h1 className='flex text-2xl text-custom-primary p-2 m-2 font-medium'>CONTACT</h1>
        <h2 className="text-4xl font-medium mb-6 font-custom-alt">Get In Touch</h2>
        <p className="text-lg leading-relaxed mb-10">
          I’m always open to new opportunities and would love to hear from you. <br />
          Feel free to reach out if you have any questions or just want to connect.
        </p>

        <div className="text-left max-w-sm mx-auto">
          <h3 className="text-xl font-semibold mb-4">Socials</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <LuMail className="w-5 h-5 text-custom-primary" />
              <span>kevinpn@hotmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <LiaLinkedin className="w-5 h-5 text-custom-primary" />
              <span>Kevin Payan</span>
            </li>
            <li className="flex items-center gap-3">
              <LuGithub className="w-5 h-5 text-custom-primary" />
              <span>Kevin-Payan</span>
            </li>
          </ul>
        </div>

        <blockquote className="italic text-xl mt-14 mb-6">
          “Intentional by design”
        </blockquote>

        <p className="text-sm text-custom-border">
          © 2025 All rights reserved. Designed and coded by <span className="font-medium">Kevin Payan</span>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
