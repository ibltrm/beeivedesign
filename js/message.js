import { message } from "./etc/index.js";
import {
   LOGIN_ROUTE,
   SERVER_URL,
   JWT_STORAGE_PROP,
} from './etc/ENV.js';

(function iife() {
   const loginPopupBtn = document.getElementById('open_login_popup_btn');
   loginPopupBtn.addEventListener('click', () => {
      const loginPopup = document.getElementById('login_popup');
      loginPopup.classList.toggle('open-popup');
   });

   const signInBtn = document.getElementById('sign_in_btn');
   signInBtn.addEventListener('click', async () => {
      const username = document.getElementById('sign_in_username').value;
      const password = document.getElementById('sign_in_password').value;
      if (!username || !password) return;

      try {
         const loginURL = new URL(LOGIN_ROUTE, SERVER_URL);
         const response = await fetch(loginURL, {
            headers: {
               'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
               username, password,
            }),
         });
         // if (!response.ok) {
         //    //!! error !!//
         //    console.error('server err..?');
         //    return;
         // }

         const result = await response.json();
         if (!result.status || !result.token) {
            //!! error !!//
            console.error('token creation error');
            window.alert(result.msg);
            return;
         }

         const token = result.token;

         window.localStorage.setItem(JWT_STORAGE_PROP, token);

         message.get.default();

      } catch (error) {
         console.error(error);
      }
   });

   message.get.default();
})();