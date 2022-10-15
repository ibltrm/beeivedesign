const SERVER_URL = "http://localhost:8081";

(function iife() {
   const submitBtn = document.getElementById('message_submit_button');
   if (!submitBtn) return;

   submitBtn.addEventListener('click', async event => {
      // event.preventDefault();
      const senderField = document.getElementById('message_sender');
      const emailField = document.getElementById('message_email');
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

      const response = await fetch(SERVER_URL + '/msg-send', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body,
      });

      if (!response.ok) return;
      const result = await response.json();

      elements.forEach( element => {
         element.value = '';
      });
      console.log(result);

   });
})();