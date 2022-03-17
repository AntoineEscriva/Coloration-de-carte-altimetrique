function PopupWindow(source, strWindowToOpen){ 
var strWindowFeatures = "toolbar=no,resize=no,titlebar=no,"; 
strWindowFeatures = strWindowFeatures + "menubar=no,width=400,height=360,maximize=null"; 
window.open(strWindowToOpen, '', strWindowFeatures); }