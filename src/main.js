'use strict';

import Promise from 'promise-polyfill';

if (!window.Promise) {
  window.Promise = Promise;
}

import 'whatwg-fetch';

const logSite = document.domain || 'Unknown';
const logReferrer = document.referrer || 'N/A';
const logBrowser = navigator.userAgent || 'Unknown';
const logResolution = `${screen.width}x${screen.height}` || 'Unknown';
const logPage = document.URL || 'Unknown';

let logTitle = document.title;
if (logTitle.indexOf(" - ") > 0) {
  logTitle = logTitle.split(' - ')[0];
}

const params = {
    site: logSite,
    referrer: logReferrer,
    browser: logBrowser,
    resolution: logResolution,
    page: logPage,
    title: logTitle
};

fetch('https://bz2gq8s1sb.execute-api.us-east-1.amazonaws.com/dev/log', {
  method: 'POST',
  headers: {
    'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
    'Content-Type': 'application/json'
  },
  mode: 'cors',
  body: JSON.stringify(params)
});
