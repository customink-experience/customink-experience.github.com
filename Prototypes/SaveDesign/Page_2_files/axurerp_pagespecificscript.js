
var PageName = 'Page 2';
var PageId = 'pd02a2c69dfe849fcbfcb6db6a1ae0578'
var PageUrl = 'Page_2.html'
document.title = 'Page 2';

if (top.location != self.location)
{
	if (parent.HandleMainFrameChanged) {
		parent.HandleMainFrameChanged();
	}
}

var $OnLoadVariable = '';

var $designName = '';

var $linksel = '';

var $email = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURIComponent(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: The variable values were too long to pass to this page.\nIf you are using IE, using Firefox will support more data.');
}

function GetQuerystring() {
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&designName=' + encodeURIComponent($designName) + '&linksel=' + encodeURIComponent($linksel) + '&email=' + encodeURIComponent($email) + '&CSUM=1';
}

function PopulateVariables(value) {
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[designName\]\]/g, $designName);
  value = value.replace(/\[\[linksel\]\]/g, $linksel);
  value = value.replace(/\[\[email\]\]/g, $email);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  return value;
}

function OnLoad(e) {

}

if (window.OnLoad) OnLoad();
