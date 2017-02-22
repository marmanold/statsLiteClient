'use strict';

import Promise from 'promise-polyfill';
import 'whatwg-fetch';

const logSite = 'marcom';
const logReferrer = document.referrer;
const logBrowser = navigator.userAgent;
const logResolution = `${screen.width}x${screen.height}`;
const logPage = document.URL;

var logTitle = document.title;
if (logTitle.indexOf(" - ") > 0) {
  logTitle = logTitle.split(' - ')[1];
}

const params = {
    site: logSite,
    referrer: logReferrer,
    browser: logBrowser,
    resolution: logResolution,
    page: logPage,
    title: logTitle
};

var custHeaders = new Headers();
custHeaders.append("Content-Type", "application/json");
custHeaders.append("Access-Control-Allow-Origin", "*");

fetch('https://bz2gq8s1sb.execute-api.us-east-1.amazonaws.com/dev/log', {
  method: 'POST',
  headers: new Headers(),
  mode: 'no-cors',
  body: JSON.stringify(params)
});
