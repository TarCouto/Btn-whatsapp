import { WhatsAppButtonWithPopup } from "./WhatsAppButtonWithPopup";

export function App() {


  // Note que a propriedade isOpen e a função onClose já são manipuladas dentro do próprio componente WhatsAppButtonWithPopup.  // Portanto, elas não precisam ser passadas aqui novamente.

  return (
    <WhatsAppButtonWithPopup
      userName="Nome do Usuário"
      userStatus="Status do Usuário"
      userImage="url/para/imagem/do/usuario"
      whatsappNumber="+5511912345678"
      emailServiceId="id-do-servico-de-email"
      emailTemplateId="id-do-template-de-email"
      userEmailId="id-do-email-do-usuario"
      gtmId="GTM-XXXXXX"
    />
  );
}
