import { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaTimes, FaPaperPlane } from 'react-icons/fa';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  userName: string;
  userStatus: string;
  userImage: string;
  whatsappNumber: string;
  emailServiceId: string;
  emailTemplateId: string;
  userEmailId: string;
  gtmId: string;
}

export function Popup({
  isOpen,
  onClose,
  userName,
  userStatus,
  userImage,
  whatsappNumber,
  emailServiceId,
  emailTemplateId,
  userEmailId,
  gtmId
}: PopupProps) {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      user_name: name,
      user_phone: phone,
    };

    try {
      const response = await emailjs.send(emailServiceId, emailTemplateId, templateParams, userEmailId);
      console.log('Email successfully sent!', response);
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'lead_submission',
        'leadName': name,
        'leadPhone': phone,
        'gtmId': gtmId // Assuming you want to track which GTM ID is used
      });
      const whatsappMessage = encodeURIComponent(`Olá, meu nome é ${name} e estou interessado em mais informações.`);
      window.location.href = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    } catch (err) {
      console.error('Failed to send email. Error: ', err);
    }

    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} className="fixed bottom-20 right-4 z-50 flex items-end justify-end">
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md">
        <div className="bg-emerald-700 p-4 flex items-center justify-between text-white rounded-t-2xl">
          <img
            src={userImage}
            alt={userName}
            className="rounded-full cursor-pointer w-10 h-10 mr-2"
          />
          <div className="flex-grow">
            <h2 className="font-bold">{userName}</h2>
            <span className="opacity-75">{userStatus}</span>
          </div>
          <button type="button" onClick={onClose} className="p-2">
            <FaTimes size="24px" />
          </button>
        </div>
        <div className="p-4 bg-cover" style={{ backgroundImage: "url('../../../public/Fundo-WhatsApp.jpg')" }}>
          <input
            type="text"
            placeholder="Seu Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="pl-4 py-3 my-2 w-full focus:outline-none border-2 rounded-full"
          />
          <input
            type="text"
            placeholder="Seu Telefone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="pl-4 py-3 my-2 w-full focus:outline-none border-2 rounded-full"
          />
          <button type="submit" className="flex items-center justify-center w-full bg-emerald-700 text-white py-3 mt-4 rounded-full hover:bg-green-600 focus:ring focus:ring-green-300">
            <span>Iniciar Conversa</span>
            <FaPaperPlane className="ml-2" />
          </button>
        </div>
      </div>
    </form>
  );
}
