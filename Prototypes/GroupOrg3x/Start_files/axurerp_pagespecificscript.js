
var PageName = 'Start';
var PageId = 'p9b0f7a33b8584ea0abb4775eb35f92a8'
var PageUrl = 'Start.html'
document.title = 'Start';

if (top.location != self.location)
{
	if (parent.HandleMainFrameChanged) {
		parent.HandleMainFrameChanged();
	}
}

var $OnLoadVariable = '';

var $closeDate = '';

var $CloseExDate = '';

var $Comments = '';

var $contactEmail = '';

var $contactName = '';

var $customButton = '';

var $contactPhone = '';

var $DaysLeftNum = '';

var $DaysLeftText = '';

var $dlvryDate = '';

var $DlvryExDate = '';

var $dlvyInfo = '';

var $eventDate = '';

var $Extras = '';

var $GroupName = '';

var $groupPrice = '';

var $NameNum = '';

var $OrderExDate = '';

var $paymtInfo = '';

var $personalize = '';

var $price2 = '';

var $price1 = '';

var $priceNote = '';

var $PageView = '';

var $Qty1 = '';

var $Qty2 = '';

var $quotevar = '';

var $round = '';

var $SignUpEndsText = '';

var $Size1 = '';

var $Size2 = '';

var $Welcome = '';

var $WelcomeOnly = '';

var $XName = '';

var $XEmail = '';

var $XComments = '';

var $yourEmail = '';

var $YourName = '';

var $yourPhone = '';

var $ZIP = '';

var $emaiNew = '';

var $emailClose = '';

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
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&closeDate=' + encodeURIComponent($closeDate) + '&CloseExDate=' + encodeURIComponent($CloseExDate) + '&Comments=' + encodeURIComponent($Comments) + '&contactEmail=' + encodeURIComponent($contactEmail) + '&contactName=' + encodeURIComponent($contactName) + '&customButton=' + encodeURIComponent($customButton) + '&contactPhone=' + encodeURIComponent($contactPhone) + '&DaysLeftNum=' + encodeURIComponent($DaysLeftNum) + '&DaysLeftText=' + encodeURIComponent($DaysLeftText) + '&dlvryDate=' + encodeURIComponent($dlvryDate) + '&DlvryExDate=' + encodeURIComponent($DlvryExDate) + '&dlvyInfo=' + encodeURIComponent($dlvyInfo) + '&eventDate=' + encodeURIComponent($eventDate) + '&Extras=' + encodeURIComponent($Extras) + '&GroupName=' + encodeURIComponent($GroupName) + '&groupPrice=' + encodeURIComponent($groupPrice) + '&NameNum=' + encodeURIComponent($NameNum) + '&OrderExDate=' + encodeURIComponent($OrderExDate) + '&paymtInfo=' + encodeURIComponent($paymtInfo) + '&personalize=' + encodeURIComponent($personalize) + '&price2=' + encodeURIComponent($price2) + '&price1=' + encodeURIComponent($price1) + '&priceNote=' + encodeURIComponent($priceNote) + '&PageView=' + encodeURIComponent($PageView) + '&Qty1=' + encodeURIComponent($Qty1) + '&Qty2=' + encodeURIComponent($Qty2) + '&quotevar=' + encodeURIComponent($quotevar) + '&round=' + encodeURIComponent($round) + '&SignUpEndsText=' + encodeURIComponent($SignUpEndsText) + '&Size1=' + encodeURIComponent($Size1) + '&Size2=' + encodeURIComponent($Size2) + '&Welcome=' + encodeURIComponent($Welcome) + '&WelcomeOnly=' + encodeURIComponent($WelcomeOnly) + '&XName=' + encodeURIComponent($XName) + '&XEmail=' + encodeURIComponent($XEmail) + '&XComments=' + encodeURIComponent($XComments) + '&yourEmail=' + encodeURIComponent($yourEmail) + '&YourName=' + encodeURIComponent($YourName) + '&yourPhone=' + encodeURIComponent($yourPhone) + '&ZIP=' + encodeURIComponent($ZIP) + '&emaiNew=' + encodeURIComponent($emaiNew) + '&emailClose=' + encodeURIComponent($emailClose) + '&CSUM=1';
}

function PopulateVariables(value) {
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[closeDate\]\]/g, $closeDate);
  value = value.replace(/\[\[CloseExDate\]\]/g, $CloseExDate);
  value = value.replace(/\[\[Comments\]\]/g, $Comments);
  value = value.replace(/\[\[contactEmail\]\]/g, $contactEmail);
  value = value.replace(/\[\[contactName\]\]/g, $contactName);
  value = value.replace(/\[\[customButton\]\]/g, $customButton);
  value = value.replace(/\[\[contactPhone\]\]/g, $contactPhone);
  value = value.replace(/\[\[DaysLeftNum\]\]/g, $DaysLeftNum);
  value = value.replace(/\[\[DaysLeftText\]\]/g, $DaysLeftText);
  value = value.replace(/\[\[dlvryDate\]\]/g, $dlvryDate);
  value = value.replace(/\[\[DlvryExDate\]\]/g, $DlvryExDate);
  value = value.replace(/\[\[dlvyInfo\]\]/g, $dlvyInfo);
  value = value.replace(/\[\[eventDate\]\]/g, $eventDate);
  value = value.replace(/\[\[Extras\]\]/g, $Extras);
  value = value.replace(/\[\[GroupName\]\]/g, $GroupName);
  value = value.replace(/\[\[groupPrice\]\]/g, $groupPrice);
  value = value.replace(/\[\[NameNum\]\]/g, $NameNum);
  value = value.replace(/\[\[OrderExDate\]\]/g, $OrderExDate);
  value = value.replace(/\[\[paymtInfo\]\]/g, $paymtInfo);
  value = value.replace(/\[\[personalize\]\]/g, $personalize);
  value = value.replace(/\[\[price2\]\]/g, $price2);
  value = value.replace(/\[\[price1\]\]/g, $price1);
  value = value.replace(/\[\[priceNote\]\]/g, $priceNote);
  value = value.replace(/\[\[PageView\]\]/g, $PageView);
  value = value.replace(/\[\[Qty1\]\]/g, $Qty1);
  value = value.replace(/\[\[Qty2\]\]/g, $Qty2);
  value = value.replace(/\[\[quotevar\]\]/g, $quotevar);
  value = value.replace(/\[\[round\]\]/g, $round);
  value = value.replace(/\[\[SignUpEndsText\]\]/g, $SignUpEndsText);
  value = value.replace(/\[\[Size1\]\]/g, $Size1);
  value = value.replace(/\[\[Size2\]\]/g, $Size2);
  value = value.replace(/\[\[Welcome\]\]/g, $Welcome);
  value = value.replace(/\[\[WelcomeOnly\]\]/g, $WelcomeOnly);
  value = value.replace(/\[\[XName\]\]/g, $XName);
  value = value.replace(/\[\[XEmail\]\]/g, $XEmail);
  value = value.replace(/\[\[XComments\]\]/g, $XComments);
  value = value.replace(/\[\[yourEmail\]\]/g, $yourEmail);
  value = value.replace(/\[\[YourName\]\]/g, $YourName);
  value = value.replace(/\[\[yourPhone\]\]/g, $yourPhone);
  value = value.replace(/\[\[ZIP\]\]/g, $ZIP);
  value = value.replace(/\[\[emaiNew\]\]/g, $emaiNew);
  value = value.replace(/\[\[emailClose\]\]/g, $emailClose);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  return value;
}

function OnLoad(e) {

if (true) {

SetGlobalVariableValue('$PageView', PopulateVariables('1'));

}

}

eval(GetDynamicPanelScript('u15', 1));

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u18 = document.getElementById('u18');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u16 = document.getElementById('u16');

var u15 = document.getElementById('u15');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u11 = document.getElementById('u11');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u13 = document.getElementById('u13');

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u0 = document.getElementById('u0');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u2 = document.getElementById('u2');

u2.style.cursor = 'pointer';
if (bIE) u2.attachEvent("onclick", Clicku2);
else u2.addEventListener("click", Clicku2, true);
function Clicku2(e)
{

if ((GetWidgetVisibility('u15')) == (true)) {

	SetPanelVisibilityu15("hidden");

}
else
if (true) {

	SetPanelVisibilityu15("");

}

}

var u3 = document.getElementById('u3');

u3.style.cursor = 'pointer';
if (bIE) u3.attachEvent("onclick", Clicku3);
else u3.addEventListener("click", Clicku3, true);
function Clicku3(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("These controls are not functional in the prototype model."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u4 = document.getElementById('u4');

u4.style.cursor = 'pointer';
if (bIE) u4.attachEvent("onclick", Clicku4);
else u4.addEventListener("click", Clicku4, true);
function Clicku4(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("These controls are not functional in the prototype model."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u5 = document.getElementById('u5');

var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u7 = document.getElementById('u7');

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u9 = document.getElementById('u9');

u9.style.cursor = 'pointer';
if (bIE) u9.attachEvent("onclick", Clicku9);
else u9.addEventListener("click", Clicku9, true);
function Clicku9(e)
{

if (true) {

	self.location.href="New.html" + GetQuerystring();

}

}

if (window.OnLoad) OnLoad();
