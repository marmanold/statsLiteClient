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

//curl -X POST https://bz2gq8s1sb.execute-api.us-east-1.amazonaws.com/dev/log --data '{"site":"marcom","referrer":"http://localhost:1313/","browser":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:51.0) Gecko/20100101 Firefox/51.0","resolution":"2560x1440","page":"http://localhost:1313/","title":"Marmanold.com"}'
