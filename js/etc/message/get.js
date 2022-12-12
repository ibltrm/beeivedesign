import {
   SERVER_URL,
   MESSAGE_GET_ROUTE,
   JWT_STORAGE_PROP,
} from '../ENV.js';

const loginPopup = document.getElementById('login_popup');

export default async function getMessage() {

   const token = window?.localStorage.getItem(JWT_STORAGE_PROP);

   const loginBtn = document.getElementById('sign_in_btn');
   const logoutBtn = document.getElementById('logout_btn');

   //@@ If not logged in @@//
   if (!token) {
      showLoginPopupBtn(true);
      openLoginPopup();
      loginBtn.style.display = 'block';
      logoutBtn.style.display = 'none';
      return;
   }

   loginBtn.style.display = 'none';
   logoutBtn.style.display = 'block';

   closeLoginPopup(); // Just to make sure.

   // const getMsgURL = new URL(MESSAGE_GET_ROUTE, SERVER_URL).href;
   const getMsgURL = SERVER_URL + '/' + MESSAGE_GET_ROUTE;

   const response = await fetch(getMsgURL, {
      headers: {
         'Authorization': `Bearer-${token}`,
      },
      method: 'GET',
   });

   const result = await response.json();

   //@@ If JWT expired @@//
   if (('loggedIn' in result) && !result.loggedIn) {
      window.localStorage.removeItem(JWT_STORAGE_PROP);
      console.log(result.msg);
      showLoginPopupBtn(true);
      openLoginPopup();
      return;
   }

   showLoginPopupBtn(false);

   //@@ Show messages! @@//
   const msgs = result.data;
   if (!msgs || msgs.length < 1) {
      console.log('No messages available');
      return;
   }

   // const chatBoxTemplate = `
   //    <div class="msg left-msg">
   //       <div class="image"></div>
   //       <div class="msg-square">
   //          <div class="msg-info">
   //             <div class="msg-name">JJUJJU</div>
   //             <div class="msg-date-time"> 10/25/2022 05:17</div>
   //          </div>
   //          <div class="msg-text">
   //             My girlfriend is so pretty I love her so much. She is so smart, cute, nice and makes me so happy
   //             only by existing. I am going to let her use my credit card forever as a way to show her my love.
   //          </div>
   //       </div>
   //    </div>
   // `;

   const msgContainer = document.getElementById('msg_container');

   if (!msgContainer) return; // Just in case.

   msgs.forEach(msg => {
      // const msgBoxTemplate = document.getElementById('msg_box');
      const template = document.createElement('template');
      const msgBoxTemp = `
         <div id="msg_box" class="msg left-msg">
            <img src="images/1message-icon.png" class="image">
            <div class="msg-square">
               <div class="msg-info">
                  <div id="msg_sender" class="msg-name">JJUJJU</div>
                  <div id="msg_createdAt" class="msg-date-time"> 10/25/2022 05:17</div>
               </div>
               <div id="msg_email" class="msg-email">abcdefg@gmail.com</div>
               <div id="msg_message" class="msg-text">
                  My girlfriend is so pretty I love her so much. She is so smart, cute, nice and makes me so happy
                  only by existing. I am going to let her use my credit card forever as a way to show her my love.
               </div>
            </div>
         </div>
      `;
      template.innerHTML = msgBoxTemp.trim();
      const msgBoxTemplate = template.content.firstChild;

      const msgBox = msgBoxTemplate.cloneNode(true);

      const propsArray = Object.keys(msg);
      propsArray.forEach(prop => {
         const contentEl = msgBox.querySelector(`#msg_${prop}`);
         if (!contentEl) return;
         contentEl.innerHTML = msg[prop]
      });

      msgContainer.appendChild(msgBox);
   });

};

function showLoginPopupBtn(show = true) {
   const btn = document.getElementById('open_login_popup_btn');
   btn.style.display = show ? 'flex' : 'none';
}

function openLoginPopup() {
   loginPopup.classList.add('open-popup');
}

function closeLoginPopup() {
   loginPopup.classList.remove('open-popup');
}