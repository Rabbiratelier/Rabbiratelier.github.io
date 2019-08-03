function excludeInput(){
	var elem=document.getElementsByTagName("textarea");
	for(i=0;i<elem.length;i++)elem[i].value=elem[i].value.replace(/《<a href.+?>(.+?)<\/a>》/g,'《$1》');
	
	elem=document.getElementsByTagName("input");
	for(i=0;i<elem.length;i++)elem[i].value=elem[i].value.replace(/《<a href.+?>(.+?)<\/a>》/g,'《$1》');
}
window.onload=function(){
	document.body.innerHTML=document.body.innerHTML.replace(/《([^_＿!！].*?)》/g,'《<a href="http://yugioh-wiki.net/kamaseinu.cgi?$1" target="_blank">$1</a>》')
	.replace(/《[!！](.*?)》/g,'《<a href="http://yugioh-wiki.net/kamaseinu.cgi?$1">$1</a>》')
	.replace(/《[_＿](.*?)》/g,'《$1》')
	.replace(/kamaseinu\.cgi\?融合"/g,'index.php?%A1%D4%CD%BB%B9%E7%A1%D5');
	excludeInput();
}
