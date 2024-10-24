import React from 'react';
import { FaPhone, FaEnvelope, FaTwitter, FaFacebook, FaSkype } from 'react-icons/fa';
import { SiGitlab } from 'react-icons/si';
import '../../Assets/styles/address.css';

const contactData = [
  { icon: <FaPhone className='iconColor' />, text: 'Phone', number: '+9955 7738 0381', link: 'tel:+995577380381' },
  { icon: <FaEnvelope className='iconColor' />, text: 'Email', number: 'imaghalashvili@gmail.com', link: 'mailto:imaghalashvili@gmail.com' },
  { icon: <FaTwitter className='iconColor' />, text: 'Twitter', number: 'https://twitter.com/IrmaIrinka', link: 'https://twitter.com/IrmaIrinka' },
  { icon: <FaFacebook className='iconColor' />, text: 'Facebook', number: 'https://www.facebook.com/magalashviliirma', link: 'https://www.facebook.com/magalashviliirma' },
  { icon: <FaSkype className='iconColor' />, text: 'Skype', number: 'https://join.skype.com/invite/p52fNdzuSehO', link: 'https://join.skype.com/invite/p52fNdzuSehO' },
  { icon: <SiGitlab className='iconColor' />, text: 'GitLab', number: 'https://gitlab.com/irmamaghalashvili', link: 'https://gitlab.com/irmamaghalashvili' },
];

function Address() {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <ul>
        {contactData.map((contact, index) => (
          <li key={index} className='contact-li'>
            {contact.icon}
            <a href={contact.link} target='_blank' rel="noopener noreferrer" className='contactLink'>
              <span className='text'>{contact.text}</span>
              <span className="number">{contact.number}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Address;
