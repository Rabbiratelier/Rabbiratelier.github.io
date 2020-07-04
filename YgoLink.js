function excludeInput(){
	var elem=document.getElementsByTagName("textarea");
	for(i=0;i<elem.length;i++)elem[i].value=elem[i].value.replace(/《<a href.+?>(.+?)<\/a>》/g,'《$1》');
	
	elem=document.getElementsByTagName("input");
	for(i=0;i<elem.length;i++)elem[i].value=elem[i].value.replace(/《<a href.+?>(.+?)<\/a>》/g,'《$1》');
}
window.onload=function(){
	document.body.innerHTML=document.body.innerHTML
	.replace(/《([^_＿!！].*?)》/g,function(all,s) {
		s = s.replace(/[A-Za-z0-9]/g, function(a) {return String.fromCharCode(a.charCodeAt(0) + 0xFEE0);})
		return '《<a href="http://yugioh-wiki.net/?《' + s + '》" target="_blank">' + s + '</a>》';
	})
	.replace(/《[!！](.*?)》/g, function(all,s) {
		s = s.replace(/[A-Za-z0-9]/g, function(a) {return String.fromCharCode(a.charCodeAt(0) + 0xFEE0);})
		return '《<a href="http://yugioh-wiki.net/kamaseinu.cgi?《' + s + '》">' + s + '</a>》';
	})
	.replace(/《[_＿](.*?)》/g,'《$1》')
	.replace(/kamaseinu\.cgi\?《融合》"/g,'index.php?%A1%D4%CD%BB%B9%E7%A1%D5"');

	excludeInput();
}
