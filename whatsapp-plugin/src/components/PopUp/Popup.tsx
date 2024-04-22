import { useState } from 'react';
import { FaUserCircle, FaTimes, FaPaperPlane } from 'react-icons/fa';

// Estilo padrão para mensagens com imagem de fundo


interface Message {
  content: string;
  timestamp: string;
  isUser: boolean;
}

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export function Popup({ isOpen, onClose }: PopupProps) {
  if (!isOpen) return null;

  const messageStyle = "p-4 pt-8 pb-4 bg-cover bg-center bg-no-repeat";
  const [userMessage, setUserMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<Message[]>([
    {
      content: 'Olá, poderia me informar seu nome, email e telefone?',
      timestamp: '10:24',
      isUser: false,
    },
  ]);

  const handleSubmit = async () => {
    const regexNome = /nome ([A-Za-z]+ [A-Za-z]+)/;
    const regexEmail = /emial ([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/;
    const regexTelefone = /telefone (\+?55\s?\d[\d\s.-]+)/;

    const nomeMatch = userMessage.match(regexNome);
    const emailMatch = userMessage.match(regexEmail);
    const telefoneMatch = userMessage.match(regexTelefone);

    const nome = nomeMatch ? nomeMatch[1] : '';
    const email = emailMatch ? emailMatch[1] : '';
    const telefone = telefoneMatch ? telefoneMatch[1] : '';

    try {
      const response = await fetch('URL_DO_SEU_BACKEND', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: nome,
          email: email,
          telefone: telefone,
        }),
      });

      if (response.ok) {

        window.dataLayer.push({
          event: 'lead_conversion',
          lead_info: {
            nome: nome,
            email: email,
            telefone: telefone,
          },
        })

        window.location.href = 'https://wa.me/SEU_NUMERO_DE_TELEFONE?text=SUA_MENSAGEM'; // Redirecionamento para o WhatsApp
      } else {
        console.error('Erro ao enviar dados para o backend');
      }

      setUserMessage('');
    } catch (error) {
      console.error('Erro ao enviar dados para o backend:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserMessage(e.target.value);
  };

  return (
    <div className="fixed bottom-20 right-4 z-50 flex items-end justify-end">
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md">
        {/* Cabeçalho verde com nome de usuário e status */}
        <div className="bg-green-500 p-7 flex items-center justify-between text-white rounded-t-2xl">
          <div className="flex items-center">
            <FaUserCircle size="35px" className="mr-2" />
            <h2 className="font-bold">Daniella</h2>
            <span className="bg-green-200 text-green-900 text-xs font-semibold px-2 py-0.5 rounded-full ml-2">Online</span>
          </div>
          <button onClick={onClose} className="text-white">
            <FaTimes size="24px" />
          </button>
        </div>

        {/* Renderização das mensagens */}
        <div className="message-container bg-yellow-100 shadow">
          {chatMessages.map((message, index) => (
            <div key={index} className={`${messageStyle} ${message.isUser ? 'bg-user-message' : 'bg-system-message'}`}>
              <div className="bg-white p-4 rounded-lg relative shadow">
                <p className="text-gray-800">{message.content}</p>
                <span className="text-sm text-gray-500 block text-right">{message.timestamp}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Campo de entrada com fundo branco */}
        <div className="mt-4 px-3 pb-4 bg-white rounded-b-2xl">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Digite"
              value={userMessage}
              onChange={handleChange}
              className="pl-4 py-3 pr-12 focus:outline-none border-0 rounded-full w-full"

            />
            <button onClick={handleSubmit} className="absolute inset-y-0 right-0 flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-3xl hover:bg-green-600">
              <FaPaperPlane size="20px" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}



