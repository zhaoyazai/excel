/**
 * Created by Administrator on 2018/2/11.
 */
/* xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */
importScripts('../js/shim.min.js');
importScripts('../js/xlsx.full.min.js');
postMessage({t:"ready"});

onmessage = function (evt) {
    var v;
    try {
        v = XLSX.read(evt.data.d, {type: evt.data.b});
        postMessage({t:"xlsx", d:JSON.stringify(v)});
    } catch(e) { postMessage({t:"e",d:e.stack||e}); }
};