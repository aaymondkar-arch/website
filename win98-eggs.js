// Easter eggs for the Win98 titlebar buttons (minimize / maximize / close).
// Shared across all pages — each page just includes this script.
(function () {
  'use strict';

  // ---------- Shared dialog styles ----------
  const style = document.createElement('style');
  style.textContent = `
    .egg-overlay {
      position: fixed;
      inset: 0;
      z-index: 9000; /* below the custom cursor (#cursor-el at 9999) */
      background: rgba(0, 0, 0, 0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .egg-dialog {
      background: #c0c0c0;
      border: 1px solid #000000;
      box-shadow: inset 1px 1px 0 #ffffff, inset -1px -1px 0 #808080,
                  4px 4px 0 rgba(0, 0, 0, 0.35);
      width: 320px;
      max-width: 100%;
    }
    .egg-titlebar {
      background: linear-gradient(to right, #4a4a4a 0%, #7a7a7a 100%);
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 3px 3px 3px 8px;
      user-select: none;
    }
    .egg-titlebar span {
      color: #ffffff;
      font-family: "Tahoma", "MS Sans Serif", Arial, sans-serif;
      font-size: 12px;
      font-weight: 700;
    }
    .egg-titlebar button {
      width: 20px; height: 20px;
      background: #c0c0c0;
      border: 1px solid #000000;
      box-shadow: inset 1px 1px 0 #ffffff, inset -1px -1px 0 #808080;
      font-family: "MS Sans Serif", "Tahoma", Arial, sans-serif;
      font-size: 10px; font-weight: bold; line-height: 1;
      color: #000000;
      display: flex; align-items: center; justify-content: center;
      padding: 0 0 1px;
      cursor: pointer;
    }
    .egg-titlebar button:active {
      box-shadow: inset -1px -1px 0 #ffffff, inset 1px 1px 0 #808080;
    }
    .egg-body {
      padding: 20px 20px 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 14px;
      text-align: center;
    }
    .egg-body img {
      width: 180px;
      max-width: 100%;
      height: auto;
      display: block;
      border: 1px solid #808080;
    }
    .egg-body p {
      margin: 0;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-weight: 700;
      font-size: 14px;
      line-height: 1.4;
      color: #000000;
    }
    .egg-body .egg-ok {
      min-width: 80px;
      padding: 4px 12px;
      background: #c0c0c0;
      border: 1px solid #000000;
      box-shadow: inset 1px 1px 0 #ffffff, inset -1px -1px 0 #808080;
      font-family: "MS Sans Serif", "Tahoma", Arial, sans-serif;
      font-size: 12px;
      color: #000000;
      cursor: pointer;
    }
    .egg-body .egg-ok:active {
      box-shadow: inset -1px -1px 0 #ffffff, inset 1px 1px 0 #808080;
    }
  `;
  document.head.appendChild(style);

  // ---------- Shared Win98 popup ----------
  function showEggDialog(imgSrc, imgAlt, text) {
    if (document.querySelector('.egg-overlay')) return;

    const overlay = document.createElement('div');
    overlay.className = 'egg-overlay';
    overlay.innerHTML = `
      <div class="egg-dialog" role="dialog" aria-modal="true" aria-label="Message">
        <div class="egg-titlebar">
          <span>Message</span>
          <button type="button" aria-label="Close message">✕</button>
        </div>
        <div class="egg-body">
          <img src="${imgSrc}" alt="${imgAlt}">
          <p>${text}</p>
          <button type="button" class="egg-ok">OK</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    function dismiss() {
      overlay.remove();
      document.removeEventListener('keydown', onKey);
    }
    function onKey(e) {
      if (e.key === 'Escape') dismiss();
    }
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) dismiss();
    });
    overlay.querySelector('.egg-titlebar button').addEventListener('click', dismiss);
    overlay.querySelector('.egg-ok').addEventListener('click', dismiss);
    document.addEventListener('keydown', onKey);
  }

  // ---------- Wire up the titlebar buttons ----------
  function wireButton(label, handler) {
    const btn = document.querySelector('.win98-btn[aria-label="' + label + '"]');
    if (btn) {
      btn.style.cursor = 'pointer';
      btn.addEventListener('click', handler);
    }
  }

  wireButton('Close', function () {
    showEggDialog('sad face.jpg', 'sad face', 'why do you want to leave (also its not gonna work)');
  });

  wireButton('Minimize', function () {
    showEggDialog('why.jpg', 'why', 'why do you think that was going to work?');
  });

  wireButton('Maximize', function () {
    showEggDialog('ok.jpg', 'ok', 'ummmmmmm?');
  });
})();
