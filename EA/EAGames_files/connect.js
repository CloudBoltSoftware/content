
var head  = document.getElementsByTagName('head')[0];
var link  = document.createElement('link');
link.rel  = 'stylesheet';
link.type = 'text/css';
link.href = 'https://eaassets-a.akamaihd.net/signin_ea_com/p/statics/gus/css/gus.v_1459245330-min.css';
head.appendChild(link);

window.EA = !window.EA ? {} : window.EA ;
EA.gusSettings = !EA.gusSettings ? {} : EA.gusSettings;

var jq = document.createElement('script');
jq.type = 'text/javascript';
jq.id = 'gusjquery';
jq.src = 'https://eaassets-a.akamaihd.net/signin_ea_com/p/ui/core/js/jquery-1.8.3.min.v_1459245330.js';
jq.onload = jq.onreadystatechange = function () {
  if (!jq.readyState || jq.readyState === 'loaded' || jq.readyState === 'complete') {
    jq.onload = jq.onreadystatechange = null;

    var gusJs = document.createElement('script');
    gusJs.type = 'text/javascript';
    gusJs.id = 'setsso';
    gusJs.src = 'https://signin.ea.com/p/gus/gus.js?locale=en_US';
    var gusjquery = document.getElementById('gusjquery');
    gusjquery.parentNode.insertBefore(gusJs, gusjquery.nextSibling);
  };
};
var first = document.getElementsByTagName('script')[0];
first.parentNode.insertBefore(jq, first);

