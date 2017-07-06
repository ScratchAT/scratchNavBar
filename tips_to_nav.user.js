// ==UserScript==
// @name         Scratch AT Nav Link
// @namespace    herohamp.scratchatlink
// @version      0.3
// @description  try to take over the world!
// @author       edited by herohamp, created by nathanprocks
// @match        https://scratch.mit.edu/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var link;
    if (typeof scratch === "undefined") {
        link = document.querySelector("#navigation a[href='/tips']");
    } else {
        link = document.querySelector(".site-nav a[href='/tips']");
    }
    link.href = "/discuss/31/";
    link.textContent = "AT";
    
    var link;
    if (typeof scratch === "undefined") {
        link = document.querySelector("#navigation a[href='/About']");
    } else {
        link = document.querySelector(".site-nav a[href='/About']");
    }
    link.href = "https://atc.captainwebservices.com/";
    link.textContent = "ATC";
})();
