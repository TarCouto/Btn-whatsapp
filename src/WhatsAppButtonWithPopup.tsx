
import { useState } from 'react';
import { GoogleTagManager } from './components/Google Tag Manager/GoogleTagManager';
import { WhatsAppBtn } from './components/WhatsappBtn';
import { Popup } from './components/PopUp/Popup';

interface WhatsAppButtonWithPopupProps {
    userName: string;
    userStatus: string;
    userImage: string;
    whatsappNumber: string;
    emailServiceId: string;
    emailTemplateId: string;
    userEmailId: string;
    gtmId: string;
}
  
export function WhatsAppButtonWithPopup({
    userName,
    userStatus,
    userImage,
    whatsappNumber,
    emailServiceId,
    emailTemplateId,
    userEmailId,
    gtmId
}: WhatsAppButtonWithPopupProps ) {
  const [showPopup, setShowPopup] = useState(false);

  const handleWhatsAppClick = () => setShowPopup(true);

  return (
    <>
      <GoogleTagManager gtmId={gtmId} />
      <WhatsAppBtn onClick={handleWhatsAppClick} />
      {showPopup && (
        <Popup 
          isOpen={showPopup} 
          onClose={() => setShowPopup(false)}
          userName={userName}
          userStatus={userStatus}
          userImage={userImage}
          whatsappNumber={whatsappNumber}
          emailServiceId={emailServiceId}
          emailTemplateId={emailTemplateId}
          userEmailId={userEmailId}
          gtmId={gtmId}
        />
      )}
    </>
  );
}
