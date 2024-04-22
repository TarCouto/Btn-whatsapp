import { GoogleTagManager } from './components/Google Tag Manager/GoogleTagManager';
import { WhatsAppBtn } from './components/WhatsappBtn';
import { Popup } from './components/PopUp/Popup';
import { useState } from 'react';


export function App() {
  const [showPopup, setShowPopup] = useState(false);

  const handleWhatsAppClick = () => {
    setShowPopup(true);
  };

  return (
    <>
      <GoogleTagManager gtmId="GTM-XXXXXX" />
      <WhatsAppBtn onClick={handleWhatsAppClick} />
      <Popup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
}
