
var PageName = 'New Page 1';
var PageId = 'p0a330c459a2d4178bd4f09ca447a753d'
var PageUrl = 'New_Page_1.html'
document.title = 'New Page 1';

if (top.location != self.location)
{
	if (parent.HandleMainFrameChanged) {
		parent.HandleMainFrameChanged();
	}
}

var $OnLoadVariable = '';

var $price1 = '';

var $price2 = '';

var $GroupName = '';

var $YourName = '';

var $groupPrice = '';

var $contactName = '';

var $yourEmail = '';

var $closeDate = '';

var $personalize = '';

var $quotevar = '';

var $ZIP = '';

var $NameNum = '';

var $Size1 = '';

var $Size2 = '';

var $Size3 = '';

var $paymtInfo = '';

var $dlvyInfo = '';

var $Welcome = '';

var $yourPhone = '';

var $contactEmail = '';

var $eventDate = '';

var $priceNote = '';

var $contactPhone = '';

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
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&price1=' + encodeURIComponent($price1) + '&price2=' + encodeURIComponent($price2) + '&GroupName=' + encodeURIComponent($GroupName) + '&YourName=' + encodeURIComponent($YourName) + '&groupPrice=' + encodeURIComponent($groupPrice) + '&contactName=' + encodeURIComponent($contactName) + '&yourEmail=' + encodeURIComponent($yourEmail) + '&closeDate=' + encodeURIComponent($closeDate) + '&personalize=' + encodeURIComponent($personalize) + '&quotevar=' + encodeURIComponent($quotevar) + '&ZIP=' + encodeURIComponent($ZIP) + '&NameNum=' + encodeURIComponent($NameNum) + '&Size1=' + encodeURIComponent($Size1) + '&Size2=' + encodeURIComponent($Size2) + '&Size3=' + encodeURIComponent($Size3) + '&paymtInfo=' + encodeURIComponent($paymtInfo) + '&dlvyInfo=' + encodeURIComponent($dlvyInfo) + '&Welcome=' + encodeURIComponent($Welcome) + '&yourPhone=' + encodeURIComponent($yourPhone) + '&contactEmail=' + encodeURIComponent($contactEmail) + '&eventDate=' + encodeURIComponent($eventDate) + '&priceNote=' + encodeURIComponent($priceNote) + '&contactPhone=' + encodeURIComponent($contactPhone) + '&CSUM=1';
}

function PopulateVariables(value) {
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[price1\]\]/g, $price1);
  value = value.replace(/\[\[price2\]\]/g, $price2);
  value = value.replace(/\[\[GroupName\]\]/g, $GroupName);
  value = value.replace(/\[\[YourName\]\]/g, $YourName);
  value = value.replace(/\[\[groupPrice\]\]/g, $groupPrice);
  value = value.replace(/\[\[contactName\]\]/g, $contactName);
  value = value.replace(/\[\[yourEmail\]\]/g, $yourEmail);
  value = value.replace(/\[\[closeDate\]\]/g, $closeDate);
  value = value.replace(/\[\[personalize\]\]/g, $personalize);
  value = value.replace(/\[\[quotevar\]\]/g, $quotevar);
  value = value.replace(/\[\[ZIP\]\]/g, $ZIP);
  value = value.replace(/\[\[NameNum\]\]/g, $NameNum);
  value = value.replace(/\[\[Size1\]\]/g, $Size1);
  value = value.replace(/\[\[Size2\]\]/g, $Size2);
  value = value.replace(/\[\[Size3\]\]/g, $Size3);
  value = value.replace(/\[\[paymtInfo\]\]/g, $paymtInfo);
  value = value.replace(/\[\[dlvyInfo\]\]/g, $dlvyInfo);
  value = value.replace(/\[\[Welcome\]\]/g, $Welcome);
  value = value.replace(/\[\[yourPhone\]\]/g, $yourPhone);
  value = value.replace(/\[\[contactEmail\]\]/g, $contactEmail);
  value = value.replace(/\[\[eventDate\]\]/g, $eventDate);
  value = value.replace(/\[\[priceNote\]\]/g, $priceNote);
  value = value.replace(/\[\[contactPhone\]\]/g, $contactPhone);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  return value;
}

function OnLoad(e) {

}

eval(GetDynamicPanelScript('u22', 1));

eval(GetDynamicPanelScript('u0', 1));

eval(GetDynamicPanelScript('u25', 1));

eval(GetDynamicPanelScript('u28', 1));

eval(GetDynamicPanelScript('u19', 1));

var u20 = document.getElementById('u20');

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u22 = document.getElementById('u22');

var u23 = document.getElementById('u23');

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u25 = document.getElementById('u25');

var u26 = document.getElementById('u26');

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u28 = document.getElementById('u28');

var u29 = document.getElementById('u29');

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u0 = document.getElementById('u0');

var u1 = document.getElementById('u1');

var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'center';
var u3 = document.getElementById('u3');

var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
var u5 = document.getElementById('u5');

var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u7 = document.getElementById('u7');

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'top';
var u10 = document.getElementById('u10');

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'top';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
var u15 = document.getElementById('u15');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'top';
var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u19 = document.getElementById('u19');

if (window.OnLoad) OnLoad();
