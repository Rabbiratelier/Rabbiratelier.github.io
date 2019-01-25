function excludeInput(){
	var elem=document.getElementsByTagName("textarea");
	for(i=0;i<elem.length;i++)elem[i].value=elem[i].value.replace(/《<a href.+?>(.+?)<\/a>》/g,'《$1》');
	
	elem=document.getElementsByTagName("input");
	for(i=0;i<elem.length;i++)elem[i].value=elem[i].value.replace(/《<a href.+?>(.+?)<\/a>》/g,'《$1》');
}
window.onload=function(){
	document.body.innerHTML=document.body.innerHTML.replace(/《([^_!].*?)》/g,'《<a href="http://yugioh-wiki.net/kamaseinu.cgi?$1" target="_blank">$1</a>》');
	document.body.innerHTML=document.body.innerHTML.replace(/《!(.*?)》/g,'《<a href="http://yugioh-wiki.net/kamaseinu.cgi?$1">$1</a>》');
	document.body.innerHTML=document.body.innerHTML.replace(/《_(.*?)》/g,'《$1》');
	excludeInput();
}