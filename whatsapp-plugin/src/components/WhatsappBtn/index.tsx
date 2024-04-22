import { FaWhatsapp } from 'react-icons/fa';

interface WhatsAppBtnProps {
  onClick: () => void;
}

export function WhatsAppBtn({ onClick }: WhatsAppBtnProps) {
  return (
    <button
      className="fixed bottom-4 right-4 z-50 p-0 w-16 h-16 rounded-full cursor-pointer shadow-lg transition duration-300 flex items-center justify-center outline-none bg-green-500 hover:bg-green-700"
      onClick={onClick}
      aria-label="Chat via WhatsApp"
      title="Chat via WhatsApp"
      style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.25)' }}
    >
      <FaWhatsapp className="text-white w-10 h-10" />
    </button>
  );
}