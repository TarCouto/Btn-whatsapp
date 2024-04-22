# WhatsApp Plugin

Este pacote fornece um botão WhatsApp fácil de usar que, quando clicado, abre um popup com um formulário para enviar uma mensagem diretamente para um número especificado via WhatsApp.

## Instalação

Para instalar o pacote, execute o seguinte comando:

```bash
npm install whatsapp-plugin

ou se você estiver usando yarn:

yarn add whatsapp-plugin


Com certeza! Vamos começar criando um esqueleto básico para o seu arquivo README.md. Você pode expandir e ajustar as informações conforme necessário:

markdown
Copy code

## WhatsApp Plugin

Este pacote fornece um botão WhatsApp fácil de usar que, quando clicado, abre um popup com um formulário para enviar uma mensagem diretamente para um número especificado via WhatsApp.

## Instalação

Para instalar o pacote, execute o seguinte comando:

```bash
npm install whatsapp-plugin
ou se você estiver usando yarn:

bash
Copy code
yarn add whatsapp-plugin
Uso
Para usar o componente em seu projeto React, importe-o e adicione-o ao seu JSX:

jsx
Copy code
import React from 'react';
import { WhatsAppButtonWithPopup } from 'whatsapp-plugin';

function App() {
  return (
    <div>
      <WhatsAppButtonWithPopup
        userName="Seu Nome"
        userStatus="Seu Status"
        userImage="URL da sua imagem"
        whatsappNumber="+5511900001111"
        emailServiceId="ID do serviço de email"
        emailTemplateId="ID do template de email"
        userEmailId="ID do usuário de email"
        gtmId="GTM-XXXXXX"
      />
    </div>
  );
}

export default App;
Certifique-se de substituir os valores das props pelo conteúdo que você deseja que seja utilizado.

Props
O componente aceita as seguintes props:

userName: Nome do usuário que aparecerá no popup.
userStatus: Status do usuário que aparecerá no popup.
userImage: URL da imagem do usuário para o ícone do popup.
whatsappNumber: Número do WhatsApp para o qual as mensagens serão enviadas.
emailServiceId: ID do serviço de email para o EmailJS.
emailTemplateId: ID do template de email para o EmailJS.
userEmailId: ID do usuário de email para o EmailJS.
gtmId: ID do Google Tag Manager para rastreamento.
Suporte
Para suporte, abra uma issue no repositório GitHub.

Contribuindo
Contribuições são sempre bem-vindas! Veja CONTRIBUTING.md para mais detalhes.

Substitua `https://github.com/TarCouto` pelo URL do seu repositório no GitHub e ajuste as descrições das props conforme a funcionalidade do seu componente. Além disso, lembre-se de adicionar arquivos de contribuição e licença, se necessário, ao seu repositório.




