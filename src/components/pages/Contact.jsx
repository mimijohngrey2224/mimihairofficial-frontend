
// import { FaWhatsapp, FaEnvelope, FaFacebook } from "react-icons/fa";
// import { BsInstagram } from "react-icons/bs";
// import { FaTiktok } from "react-icons/fa6";

// function Contact() {
//   const CONTACT = {
//     email: "support@mimihair.com",
//     whatsapp: "https://wa.me/2348012345678",
//     facebook: "https://facebook.com/mimihairofficial",
//     instagram: "https://instagram.com/mimihairofficial",
//     tiktok: "https://www.tiktok.com/@mimihair036",
//   };

//   return (
//     <>
//       {/* ===== STYLES ===== */}
//       <style>{`
//         .contact {
//           min-height: 70vh;
//           padding: 60px 25px;
//           background: #f9fafb;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }

//         .contact-box {
//           background: white;
//           padding: 40px;
//           max-width: 600px;
//           width: 100%;
//           border-radius: 12px;
//           box-shadow: 0 10px 25px rgba(0,0,0,0.08);
//         }

//         .contact-box h1 {
//           margin-bottom: 10px;
//           color: #333;
//         }

//         .contact-box p {
//           margin-bottom: 30px;
//           color: #6b7280;
//         }

//         .contact-item {
//           display: flex;
//           align-items: center;
//           gap: 15px;
//           margin-bottom: 20px;
//           font-size: 16px;
//         }

//         .contact-item a {
//           color: #ec4899;
//           text-decoration: none;
//           font-weight: 500;
//         }

//         .contact-item a:hover {
//           text-decoration: underline;
//         }

//         .icon {
//           font-size: 22px;
//           color: #ec4899;
//         }

//         .socials {
//           margin-top: 30px;
//           display: flex;
//           gap: 18px;
//         }

//         .socials a {
//           font-size: 22px;
//           color: #ec4899;
//           transition: 0.3s;
//         }

//         .socials a:hover {
//           color: #333;
//           transform: scale(1.1);
//         }

//         @media (max-width: 480px) {
//           .contact-box {
//             padding: 25px;
//           }
//         }
//       `}</style>

//       {/* ===== CONTENT ===== */}
//       <section className="contact">
//         <div className="contact-box">
//           <h1>Contact Us</h1>
//           <p>We’re always happy to hear from you. Reach us through any of the options below.</p>

//           {/* Email */}
//           <div className="contact-item">
//             <FaEnvelope className="icon" />
//             {/* <a href={`mailto:${CONTACT.CONTACT = {
//   email: "mimihairofficial@gmail.com",
// };}`}>{CONTACTCONTACT = {
//   email: "mimihairofficial@gmail.com",
// };}}</a> */}
            
//             {/* const CONTACT = {
//   email: "mimihairofficial@gmail.com",
// }; */}

// function Contact() {
//   const CONTACT = {
//     email: "mimihairofficial@gmail.com",
//   };

//   return (
//     <a href={`mailto:${CONTACT.email}`}>
//       {CONTACT.email}
//     </a>
//   );
// }



//              <a
//                 href="https://mail.google.com/mail/?view=cm&to=@mimihairofficial@gmail.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Email"
//                 className="transform transition duration-300 hover:scale-110 hover:text-yellow-400"
//               >
//                 <FaEnvelope size={30} />
//               </a>
//           </div>

//           {/* WhatsApp */}
//           <div className="contact-item">
//             <FaWhatsapp className="icon" />
//             <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">
//               Chat with us on WhatsApp
//             </a>
//           </div>

//           {/* Social icons */}
//           <div className="socials">
//             <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer">
//               <FaFacebook />
//             </a>
//             <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer">
//               <BsInstagram />
//             </a>
//             <a href={CONTACT.tiktok} target="_blank" rel="noopener noreferrer">
//               <FaTiktok />
//             </a>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Contact;


import { FaWhatsapp, FaEnvelope, FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa6";

function Contact() {
  // ✅ ALL DATA GOES HERE (ABOVE RETURN)
  const CONTACT = {
    email: "support@mimihairofficial@gmail.com",
    whatsapp: "https://wa.me/2348012345678",
    facebook: "https://www.facebook.com/share/17n9sZmhLS/?mibextid=wwXIfr",
    instagram: "https://instagram.com/mimihairofficial",
    tiktok: "https://www.tiktok.com/@mimihair036",
  };

  return (
    <>
      {/* ===== STYLES ===== */}
      <style>{`
        .contact {
          min-height: 70vh;
          padding: 60px 25px;
          background: #f9fafb;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .contact-box {
          background: white;
          padding: 40px;
          max-width: 600px;
          width: 100%;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
        }

        .contact-box h1 {
          margin-bottom: 10px;
          color: #333;
        }

        .contact-box p {
          margin-bottom: 30px;
          color: #6b7280;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
          font-size: 16px;
        }

        .contact-item a {
          color: #ec4899;
          text-decoration: none;
          font-weight: 500;
        }

        .contact-item a:hover {
          text-decoration: underline;
        }

        .icon {
          font-size: 22px;
          color: #ec4899;
        }

        .socials {
          margin-top: 30px;
          display: flex;
          gap: 18px;
        }

        .socials a {
          font-size: 22px;
          color: #ec4899;
          transition: 0.3s;
        }

        .socials a:hover {
          color: #333;
          transform: scale(1.1);
        }
      `}</style>

      {/* ===== CONTENT ===== */}
      <section className="contact">
        <div className="contact-box">
          <h1>Contact Us</h1>
          <p>
            We’re always happy to hear from you. Reach us through any of the
            options below.
          </p>

          {/* ✅ EMAIL (CORRECT WAY) */}
          <div className="contact-item">
            <FaEnvelope className="icon" />
            {/* <a href={`mailto:${CONTACT.email}`}>
              {CONTACT.email}
            </a> */}
            <a
  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}`}
  target="_blank"
  rel="noopener noreferrer"
>
  {CONTACT.email}
</a>

          </div>

          {/* ✅ WHATSAPP */}
          <div className="contact-item">
            <FaWhatsapp className="icon" />
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat with us on WhatsApp
            </a>
          </div>
          {/* <div>

            <BsInstagram  className="icon" />
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              DM with us on Instagram
            </a>
          </div> */}

          {/* <a
  href={CONTACT.instagram}
  target="_blank"
  rel="noopener noreferrer"
  className="contact-item"
>
  <BsInstagram className="icon" />
  <span>DM us on Instagram</span>
</a> */}


          {/* ✅ SOCIAL ICONS */}
          <div className="socials">
            <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer">
              <BsInstagram />
            </a>
            <a href={CONTACT.tiktok} target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
