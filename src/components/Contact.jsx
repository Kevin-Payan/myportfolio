import { LuMail, LuGithub } from "react-icons/lu";
import { LiaLinkedin } from "react-icons/lia";
import { FaTwitter } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="bg-custom-background max-w-4xl mx-auto text-center px-4 sm:px-8 py-12">
      <h1 className='flex text-2xl text-custom-primary mb-8 font-medium'>CONTACT</h1>
        <h2 className="text-4xl font-semibold mb-6 font-custom-alt text-custom-secondary">Get In Touch</h2>
        <p className="text-lg leading-relaxed mb-10">
          I’m always open to new opportunities and would love to hear from you. <br />
          Feel free to reach out if you have any questions or just want to connect.
        </p>

        <div className="text-left max-w-sm mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-custom-secondary">Socials</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <a href="mailto:kevinpn@hotmail.com" className="flex items-center gap-2 transition-transform transform hover:scale-110 hover:text-custom-primary hover:drop-shadow-[0_0_5px_rgba(255,215,0,0.5)]" target="_blank">
              <LuMail className="w-5 h-5 text-custom-primary" />
              <span>kevinpn@hotmail.com</span>
              </a>
            </li>
            <li className="flex items-center gap-3">
              <a href="https://www.linkedin.com/in/kevinpayan/" className="flex items-center gap-2 transition-transform transform hover:scale-110 hover:text-custom-primary hover:drop-shadow-[0_0_5px_rgba(255,215,0,0.5)]" target="_blank">
              <LiaLinkedin className="w-5 h-5 text-custom-primary" />
              <span>Kevin Payan</span>
              </a>
            </li>
            <li className="flex items-center gap-3">
              <a href="https://github.com/Kevin-Payan" className="flex items-center gap-2 transition-transform transform hover:scale-110 hover:text-custom-primary hover:drop-shadow-[0_0_5px_rgba(255,215,0,0.5)]" target="_blank">
              <LuGithub className="w-5 h-5 text-custom-primary" />
              <span>Kevin-Payan</span>
              </a>
            </li>
          </ul>
        </div>

        <blockquote className="italic text-xl mt-14 mb-6 text-custom-secondary">
          -“Intentional by design.”
        </blockquote>

        <p className="text-sm text-custom-border">
          Designed and coded by <span className="font-medium">Kevin Payan</span>
        </p>
    </section>
  );
};

export default ContactSection;
