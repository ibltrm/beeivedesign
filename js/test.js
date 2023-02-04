import {
   SERVER_URL,
} from './etc/ENV.js';

(async () => {
   const contentEl = document.getElementById('content');
   if (!contentEl) return window.alert('Could not find content el');

   try {
      const fetchURL = SERVER_URL + '/test';
      const response = fetch(fetchURL);
      if (!response.ok) {
         contentEl.innerHTML = `Failed to fetch to: ${fetchURL}`;
         return;
      }

      const result = await response.json();
      contentEl.innerHTML = result;
   } catch (e) {
      console.error(e);
   }

})();