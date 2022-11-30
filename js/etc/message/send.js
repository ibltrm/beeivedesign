import {
   SERVER_URL,
   MESSAGE_SEND_ROUTE,
} from '../ENV.js';

export default function sendMessage() {
   const submitBtn = document.getElementById('message_submit_button');
   if (!submitBtn) return;

   console.log('MESSAGE FUNC')

   submitBtn.addEventListener('submit', event => {
      event.preventDefault();
   });

   submitBtn.addEventListener('click', async event => {
      // event.preventDefault();
      const senderField = document.getElementById('message_sender');
      const emailField = document.getElementById('email');
      const messageField = document.getElementById('message_message');

      const elements = [senderField, emailField, messageField];

      let valid = true;
      for (let i = 0; i < elements.length; i++) {
         const element = elements[i];
         const validity = element.matches(':valid');
         valid = validity;
         if (!validity) break;
      }
      if (!valid) return;

      const body = JSON.stringify({
         sender: senderField.value,
         email: emailField.value,
         message: messageField.value,
      });

      const sendMsgURL = new URL(MESSAGE_SEND_ROUTE, SERVER_URL).href;

      const response = await fetch(sendMsgURL, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body,
      });


      const popupSuccess = document.getElementById('popup_success');
      const popupFailed = document.getElementById('popup_failed');

      if (!response.ok) {
         popupFailed.classList.add('open-popup');
         return;
      }

      const result = await response.json();

      if (!result.status) {
         popupFailed.classList.add('open-popup');
         return;
      }

      popupSuccess.classList.add('open-popup');

      elements.forEach(element => {
         element.value = '';
      });

      console.log(result);

   });
}