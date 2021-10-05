// ==UserScript==
// @name         Account link in clogin
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  Quick link inside clogin to go to the Account
// @author       TheKeymaster
// @match        https://secure.findologic.com/login.symfony/web/app.php/*
// @icon         https://www.google.com/s2/favicons?domain=findologic.com
// @grant        none
// @downloadURL  https://github.com/TheKeymaster/clogin-account-link/raw/main/clogin-account-link.js
// ==/UserScript==

(function() {
    'use strict';

    const assumeButton = document.querySelector('a.btn.btn-large.btn-assume.btn-inverse');
    if (!assumeButton) {
        return;
    }

    const linkParts = assumeButton.href.split('=');
    const shopId = linkParts[linkParts.length - 1]; // Last part of the link is the shop id.

    const accountLink = document.createElement('a');
    accountLink.href = 'https://account.findologic.io/#/' + shopId;
    accountLink.classList.add('btn');
    accountLink.innerText = 'ACCOUNT ➡';
    accountLink.setAttribute('target', '_blank');

    const upperButtonContainer = document.querySelector('.well.pull-right.upper-buttons');
    upperButtonContainer.appendChild(accountLink);
})();
