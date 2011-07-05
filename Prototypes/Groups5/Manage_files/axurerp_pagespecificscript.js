
var PageName = 'Manage';
var PageId = 'p73451ca5b8114a8d8d014fc7fa2e9fd7'
var PageUrl = 'Manage.html'
document.title = 'Manage';

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

if ((GetGlobalVariableValue('$PageView')) != (PopulateVariables('2'))) {

;

SetWidgetRichText('u86', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#003366; font-size:19px;">Manage Sign-Up Sheet For:&nbsp; [[GroupName]]</span>'));

SetWidgetRichText('u95', PopulateVariables('<span style=" font-family:\'Helvetica\'; font-size:16px;">Sign-up closing date:</span><span style=" font-family:\'Helvetica\'; font-size:13px;">&nbsp; </span><span style=" font-family:\'Helvetica\'; color:#006600; font-size:13px;"><b>[[CloseExDate]]</span></b>'));

SetGlobalVariableValue('$Extras', PopulateVariables(' '));

SetGlobalVariableValue('$PageView', PopulateVariables('2'));

;

;

;

;

;

;

;

	SetPanelStateu448("pd0u448");

}
else
if (true) {

;

SetWidgetRichText('u86', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#003366; font-size:19px;">Manage Sign-Up Sheet For:&nbsp; [[GroupName]]</span>'));

SetWidgetRichText('u95', PopulateVariables('<span style=" font-family:\'Helvetica\'; font-size:16px;">Sign-up closing date:</span><span style=" font-family:\'Helvetica\'; font-size:13px;">&nbsp; </span><span style=" font-family:\'Helvetica\'; color:#006600; font-size:13px;"><b>[[CloseExDate]]</span></b>'));

SetGlobalVariableValue('$Extras', PopulateVariables(' '));

SetGlobalVariableValue('$PageView', PopulateVariables('2'));

}

}

eval(GetDynamicPanelScript('u94', 4));

eval(GetDynamicPanelScript('u489', 1));

eval(GetDynamicPanelScript('u129', 1));

eval(GetDynamicPanelScript('u612', 1));

eval(GetDynamicPanelScript('u363', 3));

eval(GetDynamicPanelScript('u350', 3));

eval(GetDynamicPanelScript('u0', 1));

eval(GetDynamicPanelScript('u75', 2));

eval(GetDynamicPanelScript('u640', 2));

eval(GetDynamicPanelScript('u3', 2));

eval(GetDynamicPanelScript('u558', 1));

eval(GetDynamicPanelScript('u341', 3));

eval(GetDynamicPanelScript('u546', 2));

eval(GetDynamicPanelScript('u448', 2));

eval(GetDynamicPanelScript('u332', 3));

eval(GetDynamicPanelScript('u631', 2));

eval(GetDynamicPanelScript('u439', 1));

eval(GetDynamicPanelScript('u138', 2));

eval(GetDynamicPanelScript('u492', 1));

var u270 = document.getElementById('u270');
gv_vAlignTable['u270'] = 'top';
var u271 = document.getElementById('u271');

var u272 = document.getElementById('u272');
gv_vAlignTable['u272'] = 'top';
var u273 = document.getElementById('u273');

var u274 = document.getElementById('u274');
gv_vAlignTable['u274'] = 'top';
var u275 = document.getElementById('u275');

var u276 = document.getElementById('u276');
gv_vAlignTable['u276'] = 'top';
var u277 = document.getElementById('u277');
gv_vAlignTable['u277'] = 'top';
var u278 = document.getElementById('u278');

var u279 = document.getElementById('u279');
gv_vAlignTable['u279'] = 'center';
var u631 = document.getElementById('u631');

var u632 = document.getElementById('u632');

var u633 = document.getElementById('u633');
gv_vAlignTable['u633'] = 'center';
var u634 = document.getElementById('u634');

var u635 = document.getElementById('u635');
gv_vAlignTable['u635'] = 'center';
var u636 = document.getElementById('u636');

var u637 = document.getElementById('u637');

var u638 = document.getElementById('u638');
gv_vAlignTable['u638'] = 'center';
var u639 = document.getElementById('u639');
gv_vAlignTable['u639'] = 'top';
var u280 = document.getElementById('u280');

var u281 = document.getElementById('u281');

var u282 = document.getElementById('u282');
gv_vAlignTable['u282'] = 'center';
var u283 = document.getElementById('u283');

var u284 = document.getElementById('u284');

var u285 = document.getElementById('u285');
gv_vAlignTable['u285'] = 'top';
var u286 = document.getElementById('u286');

var u287 = document.getElementById('u287');
gv_vAlignTable['u287'] = 'top';
var u288 = document.getElementById('u288');

var u289 = document.getElementById('u289');
gv_vAlignTable['u289'] = 'top';
var u641 = document.getElementById('u641');

var u642 = document.getElementById('u642');
gv_vAlignTable['u642'] = 'center';
var u643 = document.getElementById('u643');

u643.style.cursor = 'pointer';
if (bIE) u643.attachEvent("onclick", Clicku643);
else u643.addEventListener("click", Clicku643, true);
function Clicku643(e)
{

if (true) {

	self.location.href="Create.html" + GetQuerystring();

}

}

var u644 = document.getElementById('u644');
gv_vAlignTable['u644'] = 'center';
var u645 = document.getElementById('u645');

u645.style.cursor = 'pointer';
if (bIE) u645.attachEvent("onclick", Clicku645);
else u645.addEventListener("click", Clicku645, true);
function Clicku645(e)
{

if (true) {

	self.location.href="Preview.html" + GetQuerystring();

}

}

var u646 = document.getElementById('u646');
gv_vAlignTable['u646'] = 'center';
var u647 = document.getElementById('u647');

u647.style.cursor = 'pointer';
if (bIE) u647.attachEvent("onclick", Clicku647);
else u647.addEventListener("click", Clicku647, true);
function Clicku647(e)
{

if (true) {

	self.location.href="Share.html" + GetQuerystring();

}

}

var u648 = document.getElementById('u648');
gv_vAlignTable['u648'] = 'center';
var u490 = document.getElementById('u490');

var u491 = document.getElementById('u491');
gv_vAlignTable['u491'] = 'center';
var u492 = document.getElementById('u492');

var u493 = document.getElementById('u493');
gv_vAlignTable['u493'] = 'top';
var u494 = document.getElementById('u494');

var u495 = document.getElementById('u495');
gv_vAlignTable['u495'] = 'center';
var u496 = document.getElementById('u496');

u496.style.cursor = 'pointer';
if (bIE) u496.attachEvent("onclick", Clicku496);
else u496.addEventListener("click", Clicku496, true);
function Clicku496(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Not enabled for this test."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'top';
var u102 = document.getElementById('u102');

u102.style.cursor = 'pointer';
if (bIE) u102.attachEvent("onclick", Clicku102);
else u102.addEventListener("click", Clicku102, true);
function Clicku102(e)
{

if (true) {

	SetPanelStateu94("pd2u94");

}

}
gv_vAlignTable['u102'] = 'top';
var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'top';
var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'top';
var u105 = document.getElementById('u105');

u105.style.cursor = 'pointer';
if (bIE) u105.attachEvent("onclick", Clicku105);
else u105.addEventListener("click", Clicku105, true);
function Clicku105(e)
{

if (true) {

	SetPanelStateu94("pd1u94");

}

}
gv_vAlignTable['u105'] = 'top';
var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u107 = document.getElementById('u107');

u107.style.cursor = 'pointer';
if (bIE) u107.attachEvent("onclick", Clicku107);
else u107.addEventListener("click", Clicku107, true);
function Clicku107(e)
{

if (true) {

	self.location.href="Create.html" + GetQuerystring();

}

}
gv_vAlignTable['u107'] = 'top';
var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'top';
var u109 = document.getElementById('u109');

u109.style.cursor = 'pointer';
if (bIE) u109.attachEvent("onclick", Clicku109);
else u109.addEventListener("click", Clicku109, true);
function Clicku109(e)
{

if (true) {

	self.location.href="Create.html" + GetQuerystring();

}

}
gv_vAlignTable['u109'] = 'top';
var u297 = document.getElementById('u297');
gv_vAlignTable['u297'] = 'top';
var u298 = document.getElementById('u298');

var u299 = document.getElementById('u299');
gv_vAlignTable['u299'] = 'top';
var u651 = document.getElementById('u651');
gv_vAlignTable['u651'] = 'top';
var u652 = document.getElementById('u652');

u652.style.cursor = 'pointer';
if (bIE) u652.attachEvent("onclick", Clicku652);
else u652.addEventListener("click", Clicku652, true);
function Clicku652(e)
{

if (true) {

	self.location.href="Create.html" + GetQuerystring();

}

}

var u653 = document.getElementById('u653');
gv_vAlignTable['u653'] = 'center';
var u654 = document.getElementById('u654');
gv_vAlignTable['u654'] = 'top';
var u655 = document.getElementById('u655');
gv_vAlignTable['u655'] = 'top';
var u500 = document.getElementById('u500');

u500.style.cursor = 'pointer';
if (bIE) u500.attachEvent("onclick", Clicku500);
else u500.addEventListener("click", Clicku500, true);
function Clicku500(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('Youth Extra Small'))) {

ApplyImageAndTextStyles('o', 'u504', 'u505', '', false);
ApplyImageAndTextStyles('s', 'u500', 'u501', sJsonu501, false);
ApplyImageAndTextStyles('o', 'u508', 'u509', '', false);
ApplyImageAndTextStyles('o', 'u512', 'u513', '', false);
ApplyImageAndTextStyles('o', 'u516', 'u517', '', false);
ApplyImageAndTextStyles('o', 'u520', 'u521', '', false);
ApplyImageAndTextStyles('o', 'u524', 'u525', '', false);
ApplyImageAndTextStyles('o', 'u528', 'u529', '', false);
ApplyImageAndTextStyles('o', 'u532', 'u533', '', false);
ApplyImageAndTextStyles('o', 'u536', 'u537', '', false);
ApplyImageAndTextStyles('o', 'u544', 'u545', '', false);
ApplyImageAndTextStyles('o', 'u540', 'u541', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('Youth Extra Small'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

ApplyImageAndTextStyles('s', 'u500', 'u501', sJsonu501, false);
ApplyImageAndTextStyles('o', 'u504', 'u505', '', false);
ApplyImageAndTextStyles('o', 'u508', 'u509', '', false);
ApplyImageAndTextStyles('o', 'u512', 'u513', '', false);
ApplyImageAndTextStyles('o', 'u516', 'u517', '', false);
ApplyImageAndTextStyles('o', 'u524', 'u525', '', false);
ApplyImageAndTextStyles('o', 'u528', 'u529', '', false);
ApplyImageAndTextStyles('o', 'u520', 'u521', '', false);
ApplyImageAndTextStyles('o', 'u540', 'u541', '', false);
ApplyImageAndTextStyles('o', 'u544', 'u545', '', false);
ApplyImageAndTextStyles('o', 'u532', 'u533', '', false);
ApplyImageAndTextStyles('o', 'u536', 'u537', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$Qty1', PopulateVariables('2'));

}

}

var u392 = document.getElementById('u392');
gv_vAlignTable['u392'] = 'center';
var u658 = document.getElementById('u658');
gv_vAlignTable['u658'] = 'top';
var u659 = document.getElementById('u659');
gv_vAlignTable['u659'] = 'top';
var u9 = document.getElementById('u9');

u9.style.cursor = 'pointer';
if (bIE) u9.attachEvent("onclick", Clicku9);
else u9.addEventListener("click", Clicku9, true);
function Clicku9(e)
{

if (true) {

	BringToFront("u75");

	SetPanelStateu0("pd0u0");

}

}

var u110 = document.getElementById('u110');

var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'center';
var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u113 = document.getElementById('u113');

var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'center';
var u115 = document.getElementById('u115');

var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'center';
var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'top';
var u118 = document.getElementById('u118');

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
var u660 = document.getElementById('u660');

var u661 = document.getElementById('u661');
gv_vAlignTable['u661'] = 'center';
var u662 = document.getElementById('u662');
gv_vAlignTable['u662'] = 'top';
var u663 = document.getElementById('u663');
gv_vAlignTable['u663'] = 'top';
var u664 = document.getElementById('u664');

var u665 = document.getElementById('u665');
gv_vAlignTable['u665'] = 'center';
var u510 = document.getElementById('u510');

var u667 = document.getElementById('u667');
gv_vAlignTable['u667'] = 'top';
var u668 = document.getElementById('u668');
gv_vAlignTable['u668'] = 'top';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u33 = document.getElementById('u33');

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u35 = document.getElementById('u35');

var u120 = document.getElementById('u120');

u120.style.cursor = 'pointer';
if (bIE) u120.attachEvent("onclick", Clicku120);
else u120.addEventListener("click", Clicku120, true);
function Clicku120(e)
{

if (true) {

	self.location.href="Share.html" + GetQuerystring();

}

}

var u121 = document.getElementById('u121');

var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'center';
var u123 = document.getElementById('u123');

var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'center';
var u125 = document.getElementById('u125');

var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'top';
var u127 = document.getElementById('u127');

var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'center';
var u129 = document.getElementById('u129');

var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'top';
var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'top';
var u132 = document.getElementById('u132');

var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'center';
var u134 = document.getElementById('u134');

var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'center';
var u136 = document.getElementById('u136');

var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'center';
var u138 = document.getElementById('u138');

var u139 = document.getElementById('u139');

u139.style.cursor = 'pointer';
if (bIE) u139.attachEvent("onclick", Clicku139);
else u139.addEventListener("click", Clicku139, true);
function Clicku139(e)
{

if (true) {

	BringToFront("u0");

	SetPanelStateu3("pd0u3");

SetWidgetFormText('u17', GetGlobalVariableValue('$yourEmail'));

}

}

var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'center';
var u141 = document.getElementById('u141');

u141.style.cursor = 'pointer';
if (bIE) u141.attachEvent("onclick", Clicku141);
else u141.addEventListener("click", Clicku141, true);
function Clicku141(e)
{

if (true) {

	SetPanelStateu138("pd1u138");

}

}
gv_vAlignTable['u141'] = 'top';
var u142 = document.getElementById('u142');

u142.style.cursor = 'pointer';
if (bIE) u142.attachEvent("onclick", Clicku142);
else u142.addEventListener("click", Clicku142, true);
function Clicku142(e)
{

if (true) {

	SetPanelStateu138("pd1u138");

}

}

var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'center';
var u144 = document.getElementById('u144');

var u145 = document.getElementById('u145');

var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'top';
var u147 = document.getElementById('u147');

var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'top';
var u149 = document.getElementById('u149');

var u501 = document.getElementById('u501');
gv_vAlignTable['u501'] = 'center';
var u502 = document.getElementById('u502');

var u503 = document.getElementById('u503');
gv_vAlignTable['u503'] = 'center';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'bottom';
var u11 = document.getElementById('u11');

u11.style.cursor = 'pointer';
if (bIE) u11.attachEvent("onclick", Clicku11);
else u11.addEventListener("click", Clicku11, true);
function Clicku11(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Next screen will be checkout for CustomInk order"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'bottom';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
var u15 = document.getElementById('u15');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'top';
var u17 = document.getElementById('u17');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'top';
var u151 = document.getElementById('u151');

var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'top';
var u153 = document.getElementById('u153');

var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'top';
var u155 = document.getElementById('u155');

var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'top';
var u157 = document.getElementById('u157');

var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'top';
var u159 = document.getElementById('u159');

var u511 = document.getElementById('u511');
gv_vAlignTable['u511'] = 'center';
var u512 = document.getElementById('u512');

u512.style.cursor = 'pointer';
if (bIE) u512.attachEvent("onclick", Clicku512);
else u512.addEventListener("click", Clicku512, true);
function Clicku512(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('Youth Large'))) {

ApplyImageAndTextStyles('s', 'u512', 'u513', sJsonu513, false);
ApplyImageAndTextStyles('o', 'u500', 'u501', '', false);
ApplyImageAndTextStyles('o', 'u504', 'u505', '', false);
ApplyImageAndTextStyles('o', 'u516', 'u517', '', false);
ApplyImageAndTextStyles('o', 'u524', 'u525', '', false);
ApplyImageAndTextStyles('o', 'u508', 'u509', '', false);
ApplyImageAndTextStyles('o', 'u520', 'u521', '', false);
ApplyImageAndTextStyles('o', 'u528', 'u529', '', false);
ApplyImageAndTextStyles('o', 'u532', 'u533', '', false);
ApplyImageAndTextStyles('o', 'u536', 'u537', '', false);
ApplyImageAndTextStyles('o', 'u540', 'u541', '', false);
ApplyImageAndTextStyles('o', 'u544', 'u545', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('Youth Large'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty1', PopulateVariables('2'));

ApplyImageAndTextStyles('o', 'u500', 'u501', '', false);
ApplyImageAndTextStyles('o', 'u504', 'u505', '', false);
ApplyImageAndTextStyles('o', 'u508', 'u509', '', false);
ApplyImageAndTextStyles('s', 'u512', 'u513', sJsonu513, false);
ApplyImageAndTextStyles('o', 'u516', 'u517', '', false);
ApplyImageAndTextStyles('o', 'u520', 'u521', '', false);
ApplyImageAndTextStyles('o', 'u528', 'u529', '', false);
ApplyImageAndTextStyles('o', 'u524', 'u525', '', false);
ApplyImageAndTextStyles('o', 'u536', 'u537', '', false);
ApplyImageAndTextStyles('o', 'u540', 'u541', '', false);
ApplyImageAndTextStyles('o', 'u532', 'u533', '', false);
ApplyImageAndTextStyles('o', 'u544', 'u545', '', false);
}

}

var u513 = document.getElementById('u513');
gv_vAlignTable['u513'] = 'center';
var u20 = document.getElementById('u20');

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u22 = document.getElementById('u22');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u24 = document.getElementById('u24');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u27 = document.getElementById('u27');

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
var u29 = document.getElementById('u29');

var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'top';
var u161 = document.getElementById('u161');

var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'top';
var u163 = document.getElementById('u163');

var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'top';
var u165 = document.getElementById('u165');

var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'top';
var u167 = document.getElementById('u167');

var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'top';
var u169 = document.getElementById('u169');

var u521 = document.getElementById('u521');
gv_vAlignTable['u521'] = 'center';
var u522 = document.getElementById('u522');

var u203 = document.getElementById('u203');

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u31 = document.getElementById('u31');

var u206 = document.getElementById('u206');

var u207 = document.getElementById('u207');

var u208 = document.getElementById('u208');

var u209 = document.getElementById('u209');

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u37 = document.getElementById('u37');

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u39 = document.getElementById('u39');

var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'top';
var u171 = document.getElementById('u171');

var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'center';
var u173 = document.getElementById('u173');

var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'center';
var u175 = document.getElementById('u175');

var u176 = document.getElementById('u176');

var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'top';
var u178 = document.getElementById('u178');

var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'top';
var u531 = document.getElementById('u531');
gv_vAlignTable['u531'] = 'center';
var u532 = document.getElementById('u532');

u532.style.cursor = 'pointer';
if (bIE) u532.attachEvent("onclick", Clicku532);
else u532.addEventListener("click", Clicku532, true);
function Clicku532(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('Extra Large'))) {

ApplyImageAndTextStyles('s', 'u532', 'u533', sJsonu533, false);
ApplyImageAndTextStyles('o', 'u500', 'u501', '', false);
ApplyImageAndTextStyles('o', 'u504', 'u505', '', false);
ApplyImageAndTextStyles('o', 'u512', 'u513', '', false);
ApplyImageAndTextStyles('o', 'u520', 'u521', '', false);
ApplyImageAndTextStyles('o', 'u508', 'u509', '', false);
ApplyImageAndTextStyles('o', 'u516', 'u517', '', false);
ApplyImageAndTextStyles('o', 'u524', 'u525', '', false);
ApplyImageAndTextStyles('o', 'u528', 'u529', '', false);
ApplyImageAndTextStyles('o', 'u536', 'u537', '', false);
ApplyImageAndTextStyles('o', 'u544', 'u545', '', false);
ApplyImageAndTextStyles('o', 'u540', 'u541', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('Extra Large'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$Qty1', PopulateVariables('2'));

ApplyImageAndTextStyles('o', 'u500', 'u501', '', false);
ApplyImageAndTextStyles('o', 'u508', 'u509', '', false);
ApplyImageAndTextStyles('o', 'u504', 'u505', '', false);
ApplyImageAndTextStyles('o', 'u516', 'u517', '', false);
ApplyImageAndTextStyles('o', 'u520', 'u521', '', false);
ApplyImageAndTextStyles('o', 'u524', 'u525', '', false);
ApplyImageAndTextStyles('o', 'u512', 'u513', '', false);
ApplyImageAndTextStyles('o', 'u528', 'u529', '', false);
ApplyImageAndTextStyles('s', 'u532', 'u533', sJsonu533, false);
ApplyImageAndTextStyles('o', 'u540', 'u541', '', false);
ApplyImageAndTextStyles('o', 'u536', 'u537', '', false);
ApplyImageAndTextStyles('o', 'u544', 'u545', '', false);
}

}

var u533 = document.getElementById('u533');
gv_vAlignTable['u533'] = 'center';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u41 = document.getElementById('u41');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u48 = document.getElementById('u48');

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u180 = document.getElementById('u180');

var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'top';
var u182 = document.getElementById('u182');

var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'top';
var u184 = document.getElementById('u184');

var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'top';
var u186 = document.getElementById('u186');

var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'top';
var u188 = document.getElementById('u188');

var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'top';
var u541 = document.getElementById('u541');
gv_vAlignTable['u541'] = 'center';
var u542 = document.getElementById('u542');

var u543 = document.getElementById('u543');
gv_vAlignTable['u543'] = 'center';
var u50 = document.getElementById('u50');

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u58 = document.getElementById('u58');

u58.style.cursor = 'pointer';
if (bIE) u58.attachEvent("onclick", Clicku58);
else u58.addEventListener("click", Clicku58, true);
function Clicku58(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("This is not enabled in the prototype."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'center';
var u190 = document.getElementById('u190');

var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'top';
var u192 = document.getElementById('u192');

var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'top';
var u194 = document.getElementById('u194');

var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'top';
var u196 = document.getElementById('u196');

var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'top';
var u198 = document.getElementById('u198');

var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'top';
var u551 = document.getElementById('u551');

u551.style.cursor = 'pointer';
if (bIE) u551.attachEvent("onclick", Clicku551);
else u551.addEventListener("click", Clicku551, true);
function Clicku551(e)
{

if (true) {

	SetPanelStateu631("pd0u631");

	SetPanelStateu558("pd0u558");

	SetPanelVisibilityu558("");

SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

	SetPanelVisibilityu489("hidden");

	MoveWidgetTo('u612',16,550);

}

}

var u552 = document.getElementById('u552');
gv_vAlignTable['u552'] = 'top';
var u553 = document.getElementById('u553');

var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'top';
var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u69 = document.getElementById('u69');

var u560 = document.getElementById('u560');

var u561 = document.getElementById('u561');
gv_vAlignTable['u561'] = 'center';
var u562 = document.getElementById('u562');

u562.style.cursor = 'pointer';
if (bIE) u562.attachEvent("onclick", Clicku562);
else u562.addEventListener("click", Clicku562, true);
function Clicku562(e)
{

if (true) {

	SetPanelStateu489("pd0u489");

	SetPanelStateu631("pd1u631");

	SetPanelVisibilityu558("hidden");

	SetPanelVisibilityu489("");

}

}

var u563 = document.getElementById('u563');

var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'center';
var u71 = document.getElementById('u71');

var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
var u73 = document.getElementById('u73');

u73.style.cursor = 'pointer';
if (bIE) u73.attachEvent("onclick", Clicku73);
else u73.addEventListener("click", Clicku73, true);
function Clicku73(e)
{

if (true) {

	BringToFront("u75");

}

}

var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'center';
var u75 = document.getElementById('u75');

var u76 = document.getElementById('u76');

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
var u78 = document.getElementById('u78');

var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'center';
var u570 = document.getElementById('u570');
gv_vAlignTable['u570'] = 'center';
var u571 = document.getElementById('u571');

var u572 = document.getElementById('u572');
gv_vAlignTable['u572'] = 'center';
var u573 = document.getElementById('u573');

u573.style.cursor = 'pointer';
if (bIE) u573.attachEvent("onclick", Clicku573);
else u573.addEventListener("click", Clicku573, true);
function Clicku573(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u573', 'u574', sJsonu574, false);
ApplyImageAndTextStyles('o', 'u565', 'u566', '', false);
ApplyImageAndTextStyles('o', 'u569', 'u570', '', false);
ApplyImageAndTextStyles('o', 'u577', 'u578', '', false);
ApplyImageAndTextStyles('o', 'u581', 'u582', '', false);
ApplyImageAndTextStyles('o', 'u585', 'u586', '', false);
ApplyImageAndTextStyles('o', 'u589', 'u590', '', false);
ApplyImageAndTextStyles('o', 'u609', 'u610', '', false);
ApplyImageAndTextStyles('o', 'u605', 'u606', '', false);
ApplyImageAndTextStyles('o', 'u601', 'u602', '', false);
ApplyImageAndTextStyles('o', 'u597', 'u598', '', false);
ApplyImageAndTextStyles('o', 'u593', 'u594', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Youth Medium'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u80 = document.getElementById('u80');

var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'top';
var u83 = document.getElementById('u83');

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'top';
var u85 = document.getElementById('u85');

var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'center';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'top';
var u88 = document.getElementById('u88');

u88.style.cursor = 'pointer';
if (bIE) u88.attachEvent("onclick", Clicku88);
else u88.addEventListener("click", Clicku88, true);
function Clicku88(e)
{

if (true) {

	SetPanelStateu94("pd0u94");

}

}
gv_vAlignTable['u88'] = 'top';
var u89 = document.getElementById('u89');

u89.style.cursor = 'pointer';
if (bIE) u89.attachEvent("onclick", Clicku89);
else u89.addEventListener("click", Clicku89, true);
function Clicku89(e)
{

if (true) {

	SetPanelStateu94("pd1u94");

}

}
gv_vAlignTable['u89'] = 'top';
var u580 = document.getElementById('u580');
gv_vAlignTable['u580'] = 'center';
var u581 = document.getElementById('u581');

u581.style.cursor = 'pointer';
if (bIE) u581.attachEvent("onclick", Clicku581);
else u581.addEventListener("click", Clicku581, true);
function Clicku581(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u581', 'u582', sJsonu582, false);
ApplyImageAndTextStyles('o', 'u565', 'u566', '', false);
ApplyImageAndTextStyles('o', 'u569', 'u570', '', false);
ApplyImageAndTextStyles('o', 'u573', 'u574', '', false);
ApplyImageAndTextStyles('o', 'u577', 'u578', '', false);
ApplyImageAndTextStyles('o', 'u585', 'u586', '', false);
ApplyImageAndTextStyles('o', 'u589', 'u590', '', false);
ApplyImageAndTextStyles('o', 'u593', 'u594', '', false);
ApplyImageAndTextStyles('o', 'u597', 'u598', '', false);
ApplyImageAndTextStyles('o', 'u601', 'u602', '', false);
ApplyImageAndTextStyles('o', 'u605', 'u606', '', false);
ApplyImageAndTextStyles('o', 'u609', 'u610', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Youth Extra Large'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u582 = document.getElementById('u582');
gv_vAlignTable['u582'] = 'center';
var u583 = document.getElementById('u583');

var u90 = document.getElementById('u90');

u90.style.cursor = 'pointer';
if (bIE) u90.attachEvent("onclick", Clicku90);
else u90.addEventListener("click", Clicku90, true);
function Clicku90(e)
{

if (true) {

	SetPanelStateu94("pd2u94");

}

}
gv_vAlignTable['u90'] = 'top';
var u91 = document.getElementById('u91');

u91.style.cursor = 'pointer';
if (bIE) u91.attachEvent("onclick", Clicku91);
else u91.addEventListener("click", Clicku91, true);
function Clicku91(e)
{

if (true) {

	SetPanelStateu94("pd3u94");

}

}
gv_vAlignTable['u91'] = 'top';
var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u93 = document.getElementById('u93');

var u94 = document.getElementById('u94');

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'top';
var u96 = document.getElementById('u96');

u96.style.cursor = 'pointer';
if (bIE) u96.attachEvent("onclick", Clicku96);
else u96.addEventListener("click", Clicku96, true);
function Clicku96(e)
{

if (true) {

	self.location.href="Create.html" + GetQuerystring();

}

}
gv_vAlignTable['u96'] = 'top';
var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'top';
var u98 = document.getElementById('u98');

u98.style.cursor = 'pointer';
if (bIE) u98.attachEvent("onclick", Clicku98);
else u98.addEventListener("click", Clicku98, true);
function Clicku98(e)
{

if (true) {

	SetPanelStateu94("pd2u94");

SetWidgetRichText('u104', PopulateVariables('<span style=" font-family:\'Helvetica\'; font-size:16px;">Sign-up closing date:</span><span style=" font-family:\'Helvetica\'; font-size:13px;">&nbsp; </span><span style=" font-family:\'Helvetica\'; color:#FF0000; font-size:13px;"><b>Wednesday, February 2&nbsp; at 6:15 pm Eastern Time.</span></b>'));

}

}
gv_vAlignTable['u98'] = 'top';
var u99 = document.getElementById('u99');

u99.style.cursor = 'pointer';
if (bIE) u99.attachEvent("onclick", Clicku99);
else u99.addEventListener("click", Clicku99, true);
function Clicku99(e)
{

if (true) {

	self.location.href="Create.html" + GetQuerystring();

}

}
gv_vAlignTable['u99'] = 'top';
var u400 = document.getElementById('u400');
gv_vAlignTable['u400'] = 'top';
var u401 = document.getElementById('u401');

var u402 = document.getElementById('u402');
gv_vAlignTable['u402'] = 'top';
var u403 = document.getElementById('u403');

var u404 = document.getElementById('u404');
gv_vAlignTable['u404'] = 'top';
var u405 = document.getElementById('u405');

var u406 = document.getElementById('u406');
gv_vAlignTable['u406'] = 'top';
var u407 = document.getElementById('u407');

var u408 = document.getElementById('u408');
gv_vAlignTable['u408'] = 'top';
var u409 = document.getElementById('u409');

var u597 = document.getElementById('u597');

u597.style.cursor = 'pointer';
if (bIE) u597.attachEvent("onclick", Clicku597);
else u597.addEventListener("click", Clicku597, true);
function Clicku597(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u597', 'u598', sJsonu598, false);
ApplyImageAndTextStyles('o', 'u565', 'u566', '', false);
ApplyImageAndTextStyles('o', 'u569', 'u570', '', false);
ApplyImageAndTextStyles('o', 'u577', 'u578', '', false);
ApplyImageAndTextStyles('o', 'u585', 'u586', '', false);
ApplyImageAndTextStyles('o', 'u573', 'u574', '', false);
ApplyImageAndTextStyles('o', 'u581', 'u582', '', false);
ApplyImageAndTextStyles('o', 'u589', 'u590', '', false);
ApplyImageAndTextStyles('o', 'u593', 'u594', '', false);
ApplyImageAndTextStyles('o', 'u601', 'u602', '', false);
ApplyImageAndTextStyles('o', 'u609', 'u610', '', false);
ApplyImageAndTextStyles('o', 'u605', 'u606', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Extra Large'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u598 = document.getElementById('u598');
gv_vAlignTable['u598'] = 'center';
var u599 = document.getElementById('u599');

var u410 = document.getElementById('u410');
gv_vAlignTable['u410'] = 'top';
var u411 = document.getElementById('u411');

var u412 = document.getElementById('u412');
gv_vAlignTable['u412'] = 'top';
var u413 = document.getElementById('u413');

var u414 = document.getElementById('u414');
gv_vAlignTable['u414'] = 'top';
var u415 = document.getElementById('u415');

var u416 = document.getElementById('u416');
gv_vAlignTable['u416'] = 'top';
var u417 = document.getElementById('u417');

var u418 = document.getElementById('u418');
gv_vAlignTable['u418'] = 'top';
var u419 = document.getElementById('u419');

var u620 = document.getElementById('u620');

var u420 = document.getElementById('u420');
gv_vAlignTable['u420'] = 'top';
var u421 = document.getElementById('u421');

var u422 = document.getElementById('u422');
gv_vAlignTable['u422'] = 'top';
var u423 = document.getElementById('u423');
gv_vAlignTable['u423'] = 'top';
var u424 = document.getElementById('u424');
gv_vAlignTable['u424'] = 'top';
var u425 = document.getElementById('u425');
gv_vAlignTable['u425'] = 'top';
var u426 = document.getElementById('u426');
gv_vAlignTable['u426'] = 'top';
var u427 = document.getElementById('u427');
gv_vAlignTable['u427'] = 'top';
var u428 = document.getElementById('u428');
gv_vAlignTable['u428'] = 'top';
var u429 = document.getElementById('u429');

var u290 = document.getElementById('u290');

var u291 = document.getElementById('u291');
gv_vAlignTable['u291'] = 'top';
var u292 = document.getElementById('u292');

var u293 = document.getElementById('u293');
gv_vAlignTable['u293'] = 'top';
var u294 = document.getElementById('u294');

var u295 = document.getElementById('u295');
gv_vAlignTable['u295'] = 'top';
var u296 = document.getElementById('u296');

var u430 = document.getElementById('u430');
gv_vAlignTable['u430'] = 'center';
var u431 = document.getElementById('u431');
gv_vAlignTable['u431'] = 'top';
var u432 = document.getElementById('u432');

var u433 = document.getElementById('u433');
gv_vAlignTable['u433'] = 'center';
var u434 = document.getElementById('u434');

var u435 = document.getElementById('u435');
gv_vAlignTable['u435'] = 'center';
var u436 = document.getElementById('u436');

var u437 = document.getElementById('u437');
gv_vAlignTable['u437'] = 'center';
var u438 = document.getElementById('u438');
gv_vAlignTable['u438'] = 'top';
var u439 = document.getElementById('u439');

var u440 = document.getElementById('u440');

var u441 = document.getElementById('u441');
gv_vAlignTable['u441'] = 'center';
var u442 = document.getElementById('u442');
gv_vAlignTable['u442'] = 'top';
var u443 = document.getElementById('u443');

var u444 = document.getElementById('u444');
gv_vAlignTable['u444'] = 'center';
var u445 = document.getElementById('u445');

var u446 = document.getElementById('u446');

var u447 = document.getElementById('u447');
gv_vAlignTable['u447'] = 'center';
var u448 = document.getElementById('u448');

var u449 = document.getElementById('u449');

var u630 = document.getElementById('u630');
gv_vAlignTable['u630'] = 'top';
var u450 = document.getElementById('u450');
gv_vAlignTable['u450'] = 'center';
var u451 = document.getElementById('u451');

u451.style.cursor = 'pointer';
if (bIE) u451.attachEvent("onclick", Clicku451);
else u451.addEventListener("click", Clicku451, true);
function Clicku451(e)
{

if (true) {

	self.location.href="Create.html" + GetQuerystring();

}

}

var u452 = document.getElementById('u452');
gv_vAlignTable['u452'] = 'center';
var u453 = document.getElementById('u453');

u453.style.cursor = 'pointer';
if (bIE) u453.attachEvent("onclick", Clicku453);
else u453.addEventListener("click", Clicku453, true);
function Clicku453(e)
{

if (true) {

	self.location.href="Preview.html" + GetQuerystring();

}

}

var u454 = document.getElementById('u454');
gv_vAlignTable['u454'] = 'center';
var u455 = document.getElementById('u455');

u455.style.cursor = 'pointer';
if (bIE) u455.attachEvent("onclick", Clicku455);
else u455.addEventListener("click", Clicku455, true);
function Clicku455(e)
{

if (true) {

	self.location.href="Share.html" + GetQuerystring();

}

}

var u456 = document.getElementById('u456');
gv_vAlignTable['u456'] = 'center';
var u457 = document.getElementById('u457');

u457.style.cursor = 'pointer';
if (bIE) u457.attachEvent("onclick", Clicku457);
else u457.addEventListener("click", Clicku457, true);
function Clicku457(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u458 = document.getElementById('u458');
gv_vAlignTable['u458'] = 'center';
var u459 = document.getElementById('u459');
gv_vAlignTable['u459'] = 'top';
var u640 = document.getElementById('u640');

var u649 = document.getElementById('u649');

u649.style.cursor = 'pointer';
if (bIE) u649.attachEvent("onclick", Clicku649);
else u649.addEventListener("click", Clicku649, true);
function Clicku649(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u460 = document.getElementById('u460');

u460.style.cursor = 'pointer';
if (bIE) u460.attachEvent("onclick", Clicku460);
else u460.addEventListener("click", Clicku460, true);
function Clicku460(e)
{

if (true) {

	self.location.href="Create.html" + GetQuerystring();

}

}

var u461 = document.getElementById('u461');
gv_vAlignTable['u461'] = 'center';
var u462 = document.getElementById('u462');
gv_vAlignTable['u462'] = 'top';
var u463 = document.getElementById('u463');
gv_vAlignTable['u463'] = 'top';
var u464 = document.getElementById('u464');

var u465 = document.getElementById('u465');
gv_vAlignTable['u465'] = 'center';
var u466 = document.getElementById('u466');
gv_vAlignTable['u466'] = 'top';
var u467 = document.getElementById('u467');
gv_vAlignTable['u467'] = 'top';
var u468 = document.getElementById('u468');

var u469 = document.getElementById('u469');
gv_vAlignTable['u469'] = 'center';
var u650 = document.getElementById('u650');
gv_vAlignTable['u650'] = 'center';
var u656 = document.getElementById('u656');

var u657 = document.getElementById('u657');
gv_vAlignTable['u657'] = 'center';
var u470 = document.getElementById('u470');
gv_vAlignTable['u470'] = 'top';
var u471 = document.getElementById('u471');
gv_vAlignTable['u471'] = 'top';
var u472 = document.getElementById('u472');

var u473 = document.getElementById('u473');
gv_vAlignTable['u473'] = 'center';
var u474 = document.getElementById('u474');
gv_vAlignTable['u474'] = 'top';
var u475 = document.getElementById('u475');
gv_vAlignTable['u475'] = 'top';
var u476 = document.getElementById('u476');

var u477 = document.getElementById('u477');
gv_vAlignTable['u477'] = 'center';
var u478 = document.getElementById('u478');

var u479 = document.getElementById('u479');
gv_vAlignTable['u479'] = 'center';
var u666 = document.getElementById('u666');
gv_vAlignTable['u666'] = 'top';
var u480 = document.getElementById('u480');

var u481 = document.getElementById('u481');
gv_vAlignTable['u481'] = 'center';
var u482 = document.getElementById('u482');

var u483 = document.getElementById('u483');
gv_vAlignTable['u483'] = 'center';
var u484 = document.getElementById('u484');

var u485 = document.getElementById('u485');
gv_vAlignTable['u485'] = 'center';
var u486 = document.getElementById('u486');

var u487 = document.getElementById('u487');
gv_vAlignTable['u487'] = 'center';
var u488 = document.getElementById('u488');
gv_vAlignTable['u488'] = 'top';
var u489 = document.getElementById('u489');

var u204 = document.getElementById('u204');

var u300 = document.getElementById('u300');

var u301 = document.getElementById('u301');
gv_vAlignTable['u301'] = 'top';
var u302 = document.getElementById('u302');

var u303 = document.getElementById('u303');
gv_vAlignTable['u303'] = 'top';
var u304 = document.getElementById('u304');

var u305 = document.getElementById('u305');
gv_vAlignTable['u305'] = 'top';
var u306 = document.getElementById('u306');

var u307 = document.getElementById('u307');
gv_vAlignTable['u307'] = 'top';
var u308 = document.getElementById('u308');

var u309 = document.getElementById('u309');
gv_vAlignTable['u309'] = 'top';
var u497 = document.getElementById('u497');
gv_vAlignTable['u497'] = 'top';
var u498 = document.getElementById('u498');

var u499 = document.getElementById('u499');
gv_vAlignTable['u499'] = 'center';
var u504 = document.getElementById('u504');

u504.style.cursor = 'pointer';
if (bIE) u504.attachEvent("onclick", Clicku504);
else u504.addEventListener("click", Clicku504, true);
function Clicku504(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('Youth Small'))) {

ApplyImageAndTextStyles('s', 'u504', 'u505', sJsonu505, false);
ApplyImageAndTextStyles('o', 'u500', 'u501', '', false);
ApplyImageAndTextStyles('o', 'u508', 'u509', '', false);
ApplyImageAndTextStyles('o', 'u516', 'u517', '', false);
ApplyImageAndTextStyles('o', 'u512', 'u513', '', false);
ApplyImageAndTextStyles('o', 'u520', 'u521', '', false);
ApplyImageAndTextStyles('o', 'u524', 'u525', '', false);
ApplyImageAndTextStyles('o', 'u528', 'u529', '', false);
ApplyImageAndTextStyles('o', 'u532', 'u533', '', false);
ApplyImageAndTextStyles('o', 'u536', 'u537', '', false);
ApplyImageAndTextStyles('o', 'u540', 'u541', '', false);
ApplyImageAndTextStyles('o', 'u544', 'u545', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('Youth Small'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty1', PopulateVariables('2'));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

ApplyImageAndTextStyles('o', 'u500', 'u501', '', false);
ApplyImageAndTextStyles('s', 'u504', 'u505', sJsonu505, false);
ApplyImageAndTextStyles('o', 'u512', 'u513', '', false);
ApplyImageAndTextStyles('o', 'u516', 'u517', '', false);
ApplyImageAndTextStyles('o', 'u508', 'u509', '', false);
ApplyImageAndTextStyles('o', 'u520', 'u521', '', false);
ApplyImageAndTextStyles('o', 'u528', 'u529', '', false);
ApplyImageAndTextStyles('o', 'u524', 'u525', '', false);
ApplyImageAndTextStyles('o', 'u532', 'u533', '', false);
ApplyImageAndTextStyles('o', 'u536', 'u537', '', false);
ApplyImageAndTextStyles('o', 'u544', 'u545', '', false);
ApplyImageAndTextStyles('o', 'u540', 'u541', '', false);
}

}

var u505 = document.getElementById('u505');
gv_vAlignTable['u505'] = 'center';
var u506 = document.getElementById('u506');

var u507 = document.getElementById('u507');
gv_vAlignTable['u507'] = 'center';
var u508 = document.getElementById('u508');

u508.style.cursor = 'pointer';
if (bIE) u508.attachEvent("onclick", Clicku508);
else u508.addEventListener("click", Clicku508, true);
function Clicku508(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('Youth Medium'))) {

ApplyImageAndTextStyles('s', 'u508', 'u509', sJsonu509, false);
ApplyImageAndTextStyles('o', 'u500', 'u501', '', false);
ApplyImageAndTextStyles('o', 'u504', 'u505', '', false);
ApplyImageAndTextStyles('o', 'u512', 'u513', '', false);
ApplyImageAndTextStyles('o', 'u516', 'u517', '', false);
ApplyImageAndTextStyles('o', 'u520', 'u521', '', false);
ApplyImageAndTextStyles('o', 'u524', 'u525', '', false);
ApplyImageAndTextStyles('o', 'u544', 'u545', '', false);
ApplyImageAndTextStyles('o', 'u540', 'u541', '', false);
ApplyImageAndTextStyles('o', 'u536', 'u537', '', false);
ApplyImageAndTextStyles('o', 'u532', 'u533', '', false);
ApplyImageAndTextStyles('o', 'u528', 'u529', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('Youth Medium'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty1', PopulateVariables('2'));

ApplyImageAndTextStyles('o', 'u500', 'u501', '', false);
ApplyImageAndTextStyles('o', 'u504', 'u505', '', false);
ApplyImageAndTextStyles('o', 'u512', 'u513', '', false);
ApplyImageAndTextStyles('s', 'u508', 'u509', sJsonu509, false);
ApplyImageAndTextStyles('o', 'u516', 'u517', '', false);
ApplyImageAndTextStyles('o', 'u524', 'u525', '', false);
ApplyImageAndTextStyles('o', 'u528', 'u529', '', false);
ApplyImageAndTextStyles('o', 'u520', 'u521', '', false);
ApplyImageAndTextStyles('o', 'u532', 'u533', '', false);
ApplyImageAndTextStyles('o', 'u536', 'u537', '', false);
ApplyImageAndTextStyles('o', 'u540', 'u541', '', false);
ApplyImageAndTextStyles('o', 'u544', 'u545', '', false);
}

}

var u509 = document.getElementById('u509');
gv_vAlignTable['u509'] = 'center';
var u310 = document.getElementById('u310');

var u311 = document.getElementById('u311');
gv_vAlignTable['u311'] = 'top';
var u312 = document.getElementById('u312');

var u313 = document.getElementById('u313');
gv_vAlignTable['u313'] = 'top';
var u314 = document.getElementById('u314');

var u315 = document.getElementById('u315');
gv_vAlignTable['u315'] = 'top';
var u316 = document.getElementById('u316');

var u317 = document.getElementById('u317');
gv_vAlignTable['u317'] = 'top';
var u318 = document.getElementById('u318');

var u319 = document.getElementById('u319');
gv_vAlignTable['u319'] = 'top';
var u514 = document.getElementById('u514');

var u515 = document.getElementById('u515');
gv_vAlignTable['u515'] = 'center';
var u516 = document.getElementById('u516');

u516.style.cursor = 'pointer';
if (bIE) u516.attachEvent("onclick", Clicku516);
else u516.addEventListener("click", Clicku516, true);
function Clicku516(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('Youth Extra Large'))) {

ApplyImageAndTextStyles('s', 'u516', 'u517', sJsonu517, false);
ApplyImageAndTextStyles('o', 'u500', 'u501', '', false);
ApplyImageAndTextStyles('o', 'u504', 'u505', '', false);
ApplyImageAndTextStyles('o', 'u508', 'u509', '', false);
ApplyImageAndTextStyles('o', 'u512', 'u513', '', false);
ApplyImageAndTextStyles('o', 'u520', 'u521', '', false);
ApplyImageAndTextStyles('o', 'u524', 'u525', '', false);
ApplyImageAndTextStyles('o', 'u528', 'u529', '', false);
ApplyImageAndTextStyles('o', 'u532', 'u533', '', false);
ApplyImageAndTextStyles('o', 'u536', 'u537', '', false);
ApplyImageAndTextStyles('o', 'u540', 'u541', '', false);
ApplyImageAndTextStyles('o', 'u544', 'u545', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('Youth Extra Large'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$Qty1', PopulateVariables('2'));

ApplyImageAndTextStyles('o', 'u500', 'u501', '', false);
ApplyImageAndTextStyles('o', 'u508', 'u509', '', false);
ApplyImageAndTextStyles('o', 'u504', 'u505', '', false);
ApplyImageAndTextStyles('o', 'u512', 'u513', '', false);
ApplyImageAndTextStyles('s', 'u516', 'u517', sJsonu517, false);
ApplyImageAndTextStyles('o', 'u520', 'u521', '', false);
ApplyImageAndTextStyles('o', 'u528', 'u529', '', false);
ApplyImageAndTextStyles('o', 'u524', 'u525', '', false);
ApplyImageAndTextStyles('o', 'u544', 'u545', '', false);
ApplyImageAndTextStyles('o', 'u540', 'u541', '', false);
ApplyImageAndTextStyles('o', 'u536', 'u537', '', false);
ApplyImageAndTextStyles('o', 'u532', 'u533', '', false);
}

}

var u517 = document.getElementById('u517');
gv_vAlignTable['u517'] = 'center';
var u518 = document.getElementById('u518');

var u519 = document.getElementById('u519');
gv_vAlignTable['u519'] = 'center';
var u320 = document.getElementById('u320');

var u321 = document.getElementById('u321');
gv_vAlignTable['u321'] = 'top';
var u322 = document.getElementById('u322');

var u323 = document.getElementById('u323');
gv_vAlignTable['u323'] = 'top';
var u324 = document.getElementById('u324');

var u325 = document.getElementById('u325');
gv_vAlignTable['u325'] = 'top';
var u326 = document.getElementById('u326');

var u327 = document.getElementById('u327');
gv_vAlignTable['u327'] = 'top';
var u328 = document.getElementById('u328');

var u329 = document.getElementById('u329');
gv_vAlignTable['u329'] = 'top';
var u520 = document.getElementById('u520');

u520.style.cursor = 'pointer';
if (bIE) u520.attachEvent("onclick", Clicku520);
else u520.addEventListener("click", Clicku520, true);
function Clicku520(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('Small'))) {

ApplyImageAndTextStyles('s', 'u520', 'u521', sJsonu521, false);
ApplyImageAndTextStyles('o', 'u500', 'u501', '', false);
ApplyImageAndTextStyles('o', 'u504', 'u505', '', false);
ApplyImageAndTextStyles('o', 'u508', 'u509', '', false);
ApplyImageAndTextStyles('o', 'u512', 'u513', '', false);
ApplyImageAndTextStyles('o', 'u516', 'u517', '', false);
ApplyImageAndTextStyles('o', 'u524', 'u525', '', false);
ApplyImageAndTextStyles('o', 'u528', 'u529', '', false);
ApplyImageAndTextStyles('o', 'u536', 'u537', '', false);
ApplyImageAndTextStyles('o', 'u540', 'u541', '', false);
ApplyImageAndTextStyles('o', 'u532', 'u533', '', false);
ApplyImageAndTextStyles('o', 'u544', 'u545', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('Small'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$Qty1', PopulateVariables('2'));

ApplyImageAndTextStyles('o', 'u500', 'u501', '', false);
ApplyImageAndTextStyles('o', 'u504', 'u505', '', false);
ApplyImageAndTextStyles('o', 'u512', 'u513', '', false);
ApplyImageAndTextStyles('o', 'u508', 'u509', '', false);
ApplyImageAndTextStyles('o', 'u516', 'u517', '', false);
ApplyImageAndTextStyles('s', 'u520', 'u521', sJsonu521, false);
ApplyImageAndTextStyles('o', 'u528', 'u529', '', false);
ApplyImageAndTextStyles('o', 'u524', 'u525', '', false);
ApplyImageAndTextStyles('o', 'u532', 'u533', '', false);
ApplyImageAndTextStyles('o', 'u536', 'u537', '', false);
ApplyImageAndTextStyles('o', 'u544', 'u545', '', false);
ApplyImageAndTextStyles('o', 'u540', 'u541', '', false);
}

}

var u523 = document.getElementById('u523');
gv_vAlignTable['u523'] = 'center';
var u524 = document.getElementById('u524');

u524.style.cursor = 'pointer';
if (bIE) u524.attachEvent("onclick", Clicku524);
else u524.addEventListener("click", Clicku524, true);
function Clicku524(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('Medium'))) {

ApplyImageAndTextStyles('s', 'u524', 'u525', sJsonu525, false);
ApplyImageAndTextStyles('o', 'u500', 'u501', '', false);
ApplyImageAndTextStyles('o', 'u504', 'u505', '', false);
ApplyImageAndTextStyles('o', 'u512', 'u513', '', false);
ApplyImageAndTextStyles('o', 'u520', 'u521', '', false);
ApplyImageAndTextStyles('o', 'u508', 'u509', '', false);
ApplyImageAndTextStyles('o', 'u516', 'u517', '', false);
ApplyImageAndTextStyles('o', 'u528', 'u529', '', false);
ApplyImageAndTextStyles('o', 'u540', 'u541', '', false);
ApplyImageAndTextStyles('o', 'u536', 'u537', '', false);
ApplyImageAndTextStyles('o', 'u532', 'u533', '', false);
ApplyImageAndTextStyles('o', 'u544', 'u545', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('Medium'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$Qty1', PopulateVariables('2'));

ApplyImageAndTextStyles('o', 'u500', 'u501', '', false);
ApplyImageAndTextStyles('o', 'u504', 'u505', '', false);
ApplyImageAndTextStyles('o', 'u508', 'u509', '', false);
ApplyImageAndTextStyles('o', 'u516', 'u517', '', false);
ApplyImageAndTextStyles('o', 'u512', 'u513', '', false);
ApplyImageAndTextStyles('o', 'u528', 'u529', '', false);
ApplyImageAndTextStyles('s', 'u524', 'u525', sJsonu525, false);
ApplyImageAndTextStyles('o', 'u520', 'u521', '', false);
ApplyImageAndTextStyles('o', 'u532', 'u533', '', false);
ApplyImageAndTextStyles('o', 'u536', 'u537', '', false);
ApplyImageAndTextStyles('o', 'u540', 'u541', '', false);
ApplyImageAndTextStyles('o', 'u544', 'u545', '', false);
}

}

var u525 = document.getElementById('u525');
gv_vAlignTable['u525'] = 'center';
var u526 = document.getElementById('u526');

var u527 = document.getElementById('u527');
gv_vAlignTable['u527'] = 'center';
var u528 = document.getElementById('u528');

u528.style.cursor = 'pointer';
if (bIE) u528.attachEvent("onclick", Clicku528);
else u528.addEventListener("click", Clicku528, true);
function Clicku528(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('Large'))) {

ApplyImageAndTextStyles('s', 'u528', 'u529', sJsonu529, false);
ApplyImageAndTextStyles('o', 'u500', 'u501', '', false);
ApplyImageAndTextStyles('o', 'u504', 'u505', '', false);
ApplyImageAndTextStyles('o', 'u516', 'u517', '', false);
ApplyImageAndTextStyles('o', 'u520', 'u521', '', false);
ApplyImageAndTextStyles('o', 'u524', 'u525', '', false);
ApplyImageAndTextStyles('o', 'u508', 'u509', '', false);
ApplyImageAndTextStyles('o', 'u512', 'u513', '', false);
ApplyImageAndTextStyles('o', 'u536', 'u537', '', false);
ApplyImageAndTextStyles('o', 'u544', 'u545', '', false);
ApplyImageAndTextStyles('o', 'u540', 'u541', '', false);
ApplyImageAndTextStyles('o', 'u532', 'u533', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('Large'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$Qty1', PopulateVariables('2'));

ApplyImageAndTextStyles('o', 'u500', 'u501', '', false);
ApplyImageAndTextStyles('o', 'u504', 'u505', '', false);
ApplyImageAndTextStyles('o', 'u512', 'u513', '', false);
ApplyImageAndTextStyles('o', 'u516', 'u517', '', false);
ApplyImageAndTextStyles('o', 'u508', 'u509', '', false);
ApplyImageAndTextStyles('o', 'u520', 'u521', '', false);
ApplyImageAndTextStyles('o', 'u524', 'u525', '', false);
ApplyImageAndTextStyles('o', 'u532', 'u533', '', false);
ApplyImageAndTextStyles('o', 'u536', 'u537', '', false);
ApplyImageAndTextStyles('s', 'u528', 'u529', sJsonu529, false);
ApplyImageAndTextStyles('o', 'u544', 'u545', '', false);
ApplyImageAndTextStyles('o', 'u540', 'u541', '', false);
}

}

var u529 = document.getElementById('u529');
gv_vAlignTable['u529'] = 'center';
var u330 = document.getElementById('u330');

var u331 = document.getElementById('u331');
gv_vAlignTable['u331'] = 'top';
var u332 = document.getElementById('u332');

var u333 = document.getElementById('u333');

var u334 = document.getElementById('u334');
gv_vAlignTable['u334'] = 'center';
var u335 = document.getElementById('u335');

var u336 = document.getElementById('u336');
gv_vAlignTable['u336'] = 'center';
var u337 = document.getElementById('u337');

var u338 = document.getElementById('u338');
gv_vAlignTable['u338'] = 'center';
var u339 = document.getElementById('u339');

var u530 = document.getElementById('u530');

var u534 = document.getElementById('u534');

var u535 = document.getElementById('u535');
gv_vAlignTable['u535'] = 'center';
var u536 = document.getElementById('u536');

u536.style.cursor = 'pointer';
if (bIE) u536.attachEvent("onclick", Clicku536);
else u536.addEventListener("click", Clicku536, true);
function Clicku536(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('2XL'))) {

ApplyImageAndTextStyles('s', 'u536', 'u537', sJsonu537, false);
ApplyImageAndTextStyles('o', 'u500', 'u501', '', false);
ApplyImageAndTextStyles('o', 'u504', 'u505', '', false);
ApplyImageAndTextStyles('o', 'u508', 'u509', '', false);
ApplyImageAndTextStyles('o', 'u512', 'u513', '', false);
ApplyImageAndTextStyles('o', 'u520', 'u521', '', false);
ApplyImageAndTextStyles('o', 'u516', 'u517', '', false);
ApplyImageAndTextStyles('o', 'u540', 'u541', '', false);
ApplyImageAndTextStyles('o', 'u532', 'u533', '', false);
ApplyImageAndTextStyles('o', 'u544', 'u545', '', false);
ApplyImageAndTextStyles('o', 'u528', 'u529', '', false);
ApplyImageAndTextStyles('o', 'u524', 'u525', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('2XL'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

ApplyImageAndTextStyles('o', 'u500', 'u501', '', false);
ApplyImageAndTextStyles('o', 'u504', 'u505', '', false);
ApplyImageAndTextStyles('o', 'u508', 'u509', '', false);
ApplyImageAndTextStyles('o', 'u512', 'u513', '', false);
ApplyImageAndTextStyles('o', 'u520', 'u521', '', false);
ApplyImageAndTextStyles('o', 'u516', 'u517', '', false);
ApplyImageAndTextStyles('o', 'u524', 'u525', '', false);
ApplyImageAndTextStyles('o', 'u528', 'u529', '', false);
ApplyImageAndTextStyles('o', 'u532', 'u533', '', false);
ApplyImageAndTextStyles('s', 'u536', 'u537', sJsonu537, false);
ApplyImageAndTextStyles('o', 'u540', 'u541', '', false);
ApplyImageAndTextStyles('o', 'u544', 'u545', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$Qty1', PopulateVariables('2'));

}

}

var u537 = document.getElementById('u537');
gv_vAlignTable['u537'] = 'center';
var u538 = document.getElementById('u538');

var u539 = document.getElementById('u539');
gv_vAlignTable['u539'] = 'center';
var u340 = document.getElementById('u340');
gv_vAlignTable['u340'] = 'center';
var u341 = document.getElementById('u341');

var u342 = document.getElementById('u342');

var u343 = document.getElementById('u343');
gv_vAlignTable['u343'] = 'center';
var u344 = document.getElementById('u344');

var u345 = document.getElementById('u345');
gv_vAlignTable['u345'] = 'center';
var u346 = document.getElementById('u346');

var u347 = document.getElementById('u347');
gv_vAlignTable['u347'] = 'center';
var u348 = document.getElementById('u348');

var u349 = document.getElementById('u349');
gv_vAlignTable['u349'] = 'center';
var u540 = document.getElementById('u540');

u540.style.cursor = 'pointer';
if (bIE) u540.attachEvent("onclick", Clicku540);
else u540.addEventListener("click", Clicku540, true);
function Clicku540(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('3XL'))) {

ApplyImageAndTextStyles('s', 'u540', 'u541', sJsonu541, false);
ApplyImageAndTextStyles('o', 'u500', 'u501', '', false);
ApplyImageAndTextStyles('o', 'u504', 'u505', '', false);
ApplyImageAndTextStyles('o', 'u512', 'u513', '', false);
ApplyImageAndTextStyles('o', 'u508', 'u509', '', false);
ApplyImageAndTextStyles('o', 'u516', 'u517', '', false);
ApplyImageAndTextStyles('o', 'u520', 'u521', '', false);
ApplyImageAndTextStyles('o', 'u536', 'u537', '', false);
ApplyImageAndTextStyles('o', 'u532', 'u533', '', false);
ApplyImageAndTextStyles('o', 'u528', 'u529', '', false);
ApplyImageAndTextStyles('o', 'u524', 'u525', '', false);
ApplyImageAndTextStyles('o', 'u544', 'u545', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('3XL'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

ApplyImageAndTextStyles('o', 'u500', 'u501', '', false);
ApplyImageAndTextStyles('o', 'u508', 'u509', '', false);
ApplyImageAndTextStyles('o', 'u504', 'u505', '', false);
ApplyImageAndTextStyles('o', 'u512', 'u513', '', false);
ApplyImageAndTextStyles('o', 'u516', 'u517', '', false);
ApplyImageAndTextStyles('o', 'u520', 'u521', '', false);
ApplyImageAndTextStyles('o', 'u528', 'u529', '', false);
ApplyImageAndTextStyles('o', 'u524', 'u525', '', false);
ApplyImageAndTextStyles('o', 'u532', 'u533', '', false);
ApplyImageAndTextStyles('o', 'u536', 'u537', '', false);
ApplyImageAndTextStyles('o', 'u544', 'u545', '', false);
ApplyImageAndTextStyles('s', 'u540', 'u541', sJsonu541, false);
SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$Qty1', PopulateVariables('2'));

}

}

var u544 = document.getElementById('u544');

u544.style.cursor = 'pointer';
if (bIE) u544.attachEvent("onclick", Clicku544);
else u544.addEventListener("click", Clicku544, true);
function Clicku544(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('4XL'))) {

ApplyImageAndTextStyles('s', 'u544', 'u545', sJsonu545, false);
ApplyImageAndTextStyles('o', 'u500', 'u501', '', false);
ApplyImageAndTextStyles('o', 'u540', 'u541', '', false);
ApplyImageAndTextStyles('o', 'u532', 'u533', '', false);
ApplyImageAndTextStyles('o', 'u536', 'u537', '', false);
ApplyImageAndTextStyles('o', 'u528', 'u529', '', false);
ApplyImageAndTextStyles('o', 'u524', 'u525', '', false);
ApplyImageAndTextStyles('o', 'u520', 'u521', '', false);
ApplyImageAndTextStyles('o', 'u516', 'u517', '', false);
ApplyImageAndTextStyles('o', 'u512', 'u513', '', false);
ApplyImageAndTextStyles('o', 'u508', 'u509', '', false);
ApplyImageAndTextStyles('o', 'u504', 'u505', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('4XL'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

ApplyImageAndTextStyles('o', 'u500', 'u501', '', false);
ApplyImageAndTextStyles('o', 'u508', 'u509', '', false);
ApplyImageAndTextStyles('o', 'u504', 'u505', '', false);
ApplyImageAndTextStyles('o', 'u512', 'u513', '', false);
ApplyImageAndTextStyles('o', 'u520', 'u521', '', false);
ApplyImageAndTextStyles('o', 'u524', 'u525', '', false);
ApplyImageAndTextStyles('o', 'u528', 'u529', '', false);
ApplyImageAndTextStyles('o', 'u532', 'u533', '', false);
ApplyImageAndTextStyles('o', 'u516', 'u517', '', false);
ApplyImageAndTextStyles('o', 'u536', 'u537', '', false);
ApplyImageAndTextStyles('o', 'u540', 'u541', '', false);
ApplyImageAndTextStyles('s', 'u544', 'u545', sJsonu545, false);
SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$Qty1', PopulateVariables('2'));

}

}

var u545 = document.getElementById('u545');
gv_vAlignTable['u545'] = 'center';
var u546 = document.getElementById('u546');

var u547 = document.getElementById('u547');

var u548 = document.getElementById('u548');
gv_vAlignTable['u548'] = 'center';
var u549 = document.getElementById('u549');

var u350 = document.getElementById('u350');

var u351 = document.getElementById('u351');

var u352 = document.getElementById('u352');
gv_vAlignTable['u352'] = 'center';
var u353 = document.getElementById('u353');

var u354 = document.getElementById('u354');
gv_vAlignTable['u354'] = 'center';
var u355 = document.getElementById('u355');

var u356 = document.getElementById('u356');
gv_vAlignTable['u356'] = 'center';
var u357 = document.getElementById('u357');

var u358 = document.getElementById('u358');
gv_vAlignTable['u358'] = 'center';
var u359 = document.getElementById('u359');
gv_vAlignTable['u359'] = 'top';
var u550 = document.getElementById('u550');
gv_vAlignTable['u550'] = 'center';
var u554 = document.getElementById('u554');
gv_vAlignTable['u554'] = 'top';
var u555 = document.getElementById('u555');

var u556 = document.getElementById('u556');
gv_vAlignTable['u556'] = 'top';
var u557 = document.getElementById('u557');

var u558 = document.getElementById('u558');

var u559 = document.getElementById('u559');
gv_vAlignTable['u559'] = 'top';
var u360 = document.getElementById('u360');
gv_vAlignTable['u360'] = 'top';
var u361 = document.getElementById('u361');
gv_vAlignTable['u361'] = 'top';
var u362 = document.getElementById('u362');
gv_vAlignTable['u362'] = 'top';
var u363 = document.getElementById('u363');

var u364 = document.getElementById('u364');

var u365 = document.getElementById('u365');
gv_vAlignTable['u365'] = 'center';
var u366 = document.getElementById('u366');

u366.style.cursor = 'pointer';
if (bIE) u366.attachEvent("onclick", Clicku366);
else u366.addEventListener("click", Clicku366, true);
function Clicku366(e)
{

if (true) {

SetGlobalVariableValue('$Extras', PopulateVariables('1'));

	SetPanelStateu75("pd1u75");

}

}
gv_vAlignTable['u366'] = 'top';
var u367 = document.getElementById('u367');

u367.style.cursor = 'pointer';
if (bIE) u367.attachEvent("onclick", Clicku367);
else u367.addEventListener("click", Clicku367, true);
function Clicku367(e)
{

if (true) {

SetGlobalVariableValue('$Extras', PopulateVariables('1'));

	SetPanelStateu75("pd1u75");

}

}

var u368 = document.getElementById('u368');
gv_vAlignTable['u368'] = 'center';
var u369 = document.getElementById('u369');
gv_vAlignTable['u369'] = 'top';
var u564 = document.getElementById('u564');
gv_vAlignTable['u564'] = 'center';
var u565 = document.getElementById('u565');

u565.style.cursor = 'pointer';
if (bIE) u565.attachEvent("onclick", Clicku565);
else u565.addEventListener("click", Clicku565, true);
function Clicku565(e)
{

if (true) {

ApplyImageAndTextStyles('o', 'u569', 'u570', '', false);
ApplyImageAndTextStyles('s', 'u565', 'u566', sJsonu566, false);
ApplyImageAndTextStyles('o', 'u573', 'u574', '', false);
ApplyImageAndTextStyles('o', 'u577', 'u578', '', false);
ApplyImageAndTextStyles('o', 'u581', 'u582', '', false);
ApplyImageAndTextStyles('o', 'u585', 'u586', '', false);
ApplyImageAndTextStyles('o', 'u589', 'u590', '', false);
ApplyImageAndTextStyles('o', 'u593', 'u594', '', false);
ApplyImageAndTextStyles('o', 'u597', 'u598', '', false);
ApplyImageAndTextStyles('o', 'u601', 'u602', '', false);
ApplyImageAndTextStyles('o', 'u609', 'u610', '', false);
ApplyImageAndTextStyles('o', 'u605', 'u606', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Youth Extra Small'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u566 = document.getElementById('u566');
gv_vAlignTable['u566'] = 'center';
var u567 = document.getElementById('u567');

var u568 = document.getElementById('u568');
gv_vAlignTable['u568'] = 'center';
var u569 = document.getElementById('u569');

u569.style.cursor = 'pointer';
if (bIE) u569.attachEvent("onclick", Clicku569);
else u569.addEventListener("click", Clicku569, true);
function Clicku569(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u569', 'u570', sJsonu570, false);
ApplyImageAndTextStyles('o', 'u565', 'u566', '', false);
ApplyImageAndTextStyles('o', 'u573', 'u574', '', false);
ApplyImageAndTextStyles('o', 'u581', 'u582', '', false);
ApplyImageAndTextStyles('o', 'u577', 'u578', '', false);
ApplyImageAndTextStyles('o', 'u585', 'u586', '', false);
ApplyImageAndTextStyles('o', 'u589', 'u590', '', false);
ApplyImageAndTextStyles('o', 'u593', 'u594', '', false);
ApplyImageAndTextStyles('o', 'u597', 'u598', '', false);
ApplyImageAndTextStyles('o', 'u601', 'u602', '', false);
ApplyImageAndTextStyles('o', 'u605', 'u606', '', false);
ApplyImageAndTextStyles('o', 'u609', 'u610', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Youth Small'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u370 = document.getElementById('u370');
gv_vAlignTable['u370'] = 'top';
var u371 = document.getElementById('u371');

var u372 = document.getElementById('u372');
gv_vAlignTable['u372'] = 'center';
var u373 = document.getElementById('u373');

var u374 = document.getElementById('u374');

var u375 = document.getElementById('u375');
gv_vAlignTable['u375'] = 'top';
var u376 = document.getElementById('u376');

var u377 = document.getElementById('u377');
gv_vAlignTable['u377'] = 'top';
var u378 = document.getElementById('u378');

var u379 = document.getElementById('u379');
gv_vAlignTable['u379'] = 'top';
var u574 = document.getElementById('u574');
gv_vAlignTable['u574'] = 'center';
var u575 = document.getElementById('u575');

var u576 = document.getElementById('u576');
gv_vAlignTable['u576'] = 'center';
var u577 = document.getElementById('u577');

u577.style.cursor = 'pointer';
if (bIE) u577.attachEvent("onclick", Clicku577);
else u577.addEventListener("click", Clicku577, true);
function Clicku577(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u577', 'u578', sJsonu578, false);
ApplyImageAndTextStyles('o', 'u565', 'u566', '', false);
ApplyImageAndTextStyles('o', 'u569', 'u570', '', false);
ApplyImageAndTextStyles('o', 'u581', 'u582', '', false);
ApplyImageAndTextStyles('o', 'u589', 'u590', '', false);
ApplyImageAndTextStyles('o', 'u573', 'u574', '', false);
ApplyImageAndTextStyles('o', 'u585', 'u586', '', false);
ApplyImageAndTextStyles('o', 'u593', 'u594', '', false);
ApplyImageAndTextStyles('o', 'u597', 'u598', '', false);
ApplyImageAndTextStyles('o', 'u601', 'u602', '', false);
ApplyImageAndTextStyles('o', 'u605', 'u606', '', false);
ApplyImageAndTextStyles('o', 'u609', 'u610', '', false);
SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

SetGlobalVariableValue('$Size1', PopulateVariables('Youth Large'));

}

}

var u578 = document.getElementById('u578');
gv_vAlignTable['u578'] = 'center';
var u579 = document.getElementById('u579');

var u380 = document.getElementById('u380');

var u381 = document.getElementById('u381');
gv_vAlignTable['u381'] = 'top';
var u382 = document.getElementById('u382');

var u383 = document.getElementById('u383');
gv_vAlignTable['u383'] = 'top';
var u384 = document.getElementById('u384');

var u385 = document.getElementById('u385');
gv_vAlignTable['u385'] = 'top';
var u386 = document.getElementById('u386');
gv_vAlignTable['u386'] = 'top';
var u387 = document.getElementById('u387');
gv_vAlignTable['u387'] = 'top';
var u388 = document.getElementById('u388');
gv_vAlignTable['u388'] = 'top';
var u389 = document.getElementById('u389');
gv_vAlignTable['u389'] = 'top';
var u584 = document.getElementById('u584');
gv_vAlignTable['u584'] = 'center';
var u585 = document.getElementById('u585');

u585.style.cursor = 'pointer';
if (bIE) u585.attachEvent("onclick", Clicku585);
else u585.addEventListener("click", Clicku585, true);
function Clicku585(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u585', 'u586', sJsonu586, false);
ApplyImageAndTextStyles('o', 'u565', 'u566', '', false);
ApplyImageAndTextStyles('o', 'u569', 'u570', '', false);
ApplyImageAndTextStyles('o', 'u573', 'u574', '', false);
ApplyImageAndTextStyles('o', 'u577', 'u578', '', false);
ApplyImageAndTextStyles('o', 'u581', 'u582', '', false);
ApplyImageAndTextStyles('o', 'u589', 'u590', '', false);
ApplyImageAndTextStyles('o', 'u593', 'u594', '', false);
ApplyImageAndTextStyles('o', 'u601', 'u602', '', false);
ApplyImageAndTextStyles('o', 'u605', 'u606', '', false);
ApplyImageAndTextStyles('o', 'u597', 'u598', '', false);
ApplyImageAndTextStyles('o', 'u609', 'u610', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Small'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u586 = document.getElementById('u586');
gv_vAlignTable['u586'] = 'center';
var u587 = document.getElementById('u587');

var u588 = document.getElementById('u588');
gv_vAlignTable['u588'] = 'center';
var u589 = document.getElementById('u589');

u589.style.cursor = 'pointer';
if (bIE) u589.attachEvent("onclick", Clicku589);
else u589.addEventListener("click", Clicku589, true);
function Clicku589(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u589', 'u590', sJsonu590, false);
ApplyImageAndTextStyles('o', 'u565', 'u566', '', false);
ApplyImageAndTextStyles('o', 'u569', 'u570', '', false);
ApplyImageAndTextStyles('o', 'u577', 'u578', '', false);
ApplyImageAndTextStyles('o', 'u585', 'u586', '', false);
ApplyImageAndTextStyles('o', 'u573', 'u574', '', false);
ApplyImageAndTextStyles('o', 'u581', 'u582', '', false);
ApplyImageAndTextStyles('o', 'u593', 'u594', '', false);
ApplyImageAndTextStyles('o', 'u605', 'u606', '', false);
ApplyImageAndTextStyles('o', 'u601', 'u602', '', false);
ApplyImageAndTextStyles('o', 'u597', 'u598', '', false);
ApplyImageAndTextStyles('o', 'u609', 'u610', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Medium'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u200 = document.getElementById('u200');

var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'top';
var u202 = document.getElementById('u202');

var u390 = document.getElementById('u390');

u390.style.cursor = 'pointer';
if (bIE) u390.attachEvent("onclick", Clicku390);
else u390.addEventListener("click", Clicku390, true);
function Clicku390(e)
{

if (true) {

SetGlobalVariableValue('$Extras', PopulateVariables('2'));

	SetPanelStateu75("pd1u75");

}

}
gv_vAlignTable['u390'] = 'top';
var u391 = document.getElementById('u391');

u391.style.cursor = 'pointer';
if (bIE) u391.attachEvent("onclick", Clicku391);
else u391.addEventListener("click", Clicku391, true);
function Clicku391(e)
{

if (true) {

SetGlobalVariableValue('$Extras', PopulateVariables('2'));

	SetPanelStateu75("pd1u75");

}

}

var u205 = document.getElementById('u205');

var u393 = document.getElementById('u393');

var u394 = document.getElementById('u394');
gv_vAlignTable['u394'] = 'center';
var u395 = document.getElementById('u395');

u395.style.cursor = 'pointer';
if (bIE) u395.attachEvent("onclick", Clicku395);
else u395.addEventListener("click", Clicku395, true);
function Clicku395(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Not enabled for this test"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}
gv_vAlignTable['u395'] = 'top';
var u396 = document.getElementById('u396');

u396.style.cursor = 'pointer';
if (bIE) u396.attachEvent("onclick", Clicku396);
else u396.addEventListener("click", Clicku396, true);
function Clicku396(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Not enabled for this test."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u397 = document.getElementById('u397');
gv_vAlignTable['u397'] = 'center';
var u398 = document.getElementById('u398');

var u399 = document.getElementById('u399');

var u590 = document.getElementById('u590');
gv_vAlignTable['u590'] = 'center';
var u591 = document.getElementById('u591');

var u592 = document.getElementById('u592');
gv_vAlignTable['u592'] = 'center';
var u593 = document.getElementById('u593');

u593.style.cursor = 'pointer';
if (bIE) u593.attachEvent("onclick", Clicku593);
else u593.addEventListener("click", Clicku593, true);
function Clicku593(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u593', 'u594', sJsonu594, false);
ApplyImageAndTextStyles('o', 'u565', 'u566', '', false);
ApplyImageAndTextStyles('o', 'u569', 'u570', '', false);
ApplyImageAndTextStyles('o', 'u581', 'u582', '', false);
ApplyImageAndTextStyles('o', 'u585', 'u586', '', false);
ApplyImageAndTextStyles('o', 'u589', 'u590', '', false);
ApplyImageAndTextStyles('o', 'u573', 'u574', '', false);
ApplyImageAndTextStyles('o', 'u577', 'u578', '', false);
ApplyImageAndTextStyles('o', 'u601', 'u602', '', false);
ApplyImageAndTextStyles('o', 'u609', 'u610', '', false);
ApplyImageAndTextStyles('o', 'u605', 'u606', '', false);
ApplyImageAndTextStyles('o', 'u597', 'u598', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Large'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u594 = document.getElementById('u594');
gv_vAlignTable['u594'] = 'center';
var u595 = document.getElementById('u595');

var u596 = document.getElementById('u596');
gv_vAlignTable['u596'] = 'center';
var u210 = document.getElementById('u210');

var u211 = document.getElementById('u211');

var u212 = document.getElementById('u212');

var u213 = document.getElementById('u213');

var u214 = document.getElementById('u214');

var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'center';
var u216 = document.getElementById('u216');

var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'center';
var u218 = document.getElementById('u218');

u218.style.cursor = 'pointer';
if (bIE) u218.attachEvent("onclick", Clicku218);
else u218.addEventListener("click", Clicku218, true);
function Clicku218(e)
{

if (true) {

	SetPanelStateu138("pd0u138");

SetWidgetRichText('u174', PopulateVariables('<div style="text-align:right"><span style=" font-family:\'Helvetica\'; color:#003366; font-size:13px;">&nbsp; Total Quantity:&nbsp; 10</span></div>'));

SetWidgetRichText('u162', PopulateVariables('<div style="text-align:right"><span style=" font-family:\'Helvetica\'; font-size:12px;"> 2</span></div>'));

SetWidgetRichText('u170', PopulateVariables('<div style="text-align:right"><span style=" font-family:\'Helvetica\'; color:#006600; font-size:12px;">2</span></div>'));

SetWidgetRichText('u92', PopulateVariables('<span style=" font-family:\'Helvetica\'; font-size:13px;"> 2 shirts were added as extras</span>'));

SetWidgetRichText('u170', PopulateVariables('<div style="text-align:right"><span style=" font-family:\'Helvetica\'; color:#006600; font-size:12px;">2</span></div>'));

}

}

var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'center';
var u220 = document.getElementById('u220');

var u221 = document.getElementById('u221');

var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'top';
var u223 = document.getElementById('u223');

var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'top';
var u225 = document.getElementById('u225');

var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'top';
var u227 = document.getElementById('u227');

var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'top';
var u229 = document.getElementById('u229');

var u600 = document.getElementById('u600');
gv_vAlignTable['u600'] = 'center';
var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'top';
var u231 = document.getElementById('u231');

var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'top';
var u233 = document.getElementById('u233');

var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'top';
var u235 = document.getElementById('u235');

var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'top';
var u237 = document.getElementById('u237');

var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'top';
var u239 = document.getElementById('u239');

var u610 = document.getElementById('u610');
gv_vAlignTable['u610'] = 'center';
var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'top';
var u241 = document.getElementById('u241');

var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'top';
var u243 = document.getElementById('u243');

var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'top';
var u245 = document.getElementById('u245');

var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'top';
var u247 = document.getElementById('u247');

var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'top';
var u249 = document.getElementById('u249');

var u601 = document.getElementById('u601');

u601.style.cursor = 'pointer';
if (bIE) u601.attachEvent("onclick", Clicku601);
else u601.addEventListener("click", Clicku601, true);
function Clicku601(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u601', 'u602', sJsonu602, false);
ApplyImageAndTextStyles('o', 'u565', 'u566', '', false);
ApplyImageAndTextStyles('o', 'u569', 'u570', '', false);
ApplyImageAndTextStyles('o', 'u573', 'u574', '', false);
ApplyImageAndTextStyles('o', 'u577', 'u578', '', false);
ApplyImageAndTextStyles('o', 'u585', 'u586', '', false);
ApplyImageAndTextStyles('o', 'u581', 'u582', '', false);
ApplyImageAndTextStyles('o', 'u605', 'u606', '', false);
ApplyImageAndTextStyles('o', 'u597', 'u598', '', false);
ApplyImageAndTextStyles('o', 'u609', 'u610', '', false);
ApplyImageAndTextStyles('o', 'u593', 'u594', '', false);
ApplyImageAndTextStyles('o', 'u589', 'u590', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('2XL'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u602 = document.getElementById('u602');
gv_vAlignTable['u602'] = 'center';
var u603 = document.getElementById('u603');

var u604 = document.getElementById('u604');
gv_vAlignTable['u604'] = 'center';
var u605 = document.getElementById('u605');

u605.style.cursor = 'pointer';
if (bIE) u605.attachEvent("onclick", Clicku605);
else u605.addEventListener("click", Clicku605, true);
function Clicku605(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u605', 'u606', sJsonu606, false);
ApplyImageAndTextStyles('o', 'u565', 'u566', '', false);
ApplyImageAndTextStyles('o', 'u569', 'u570', '', false);
ApplyImageAndTextStyles('o', 'u577', 'u578', '', false);
ApplyImageAndTextStyles('o', 'u573', 'u574', '', false);
ApplyImageAndTextStyles('o', 'u581', 'u582', '', false);
ApplyImageAndTextStyles('o', 'u585', 'u586', '', false);
ApplyImageAndTextStyles('o', 'u601', 'u602', '', false);
ApplyImageAndTextStyles('o', 'u597', 'u598', '', false);
ApplyImageAndTextStyles('o', 'u593', 'u594', '', false);
ApplyImageAndTextStyles('o', 'u589', 'u590', '', false);
ApplyImageAndTextStyles('o', 'u609', 'u610', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('3XL'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u606 = document.getElementById('u606');
gv_vAlignTable['u606'] = 'center';
var u607 = document.getElementById('u607');

var u608 = document.getElementById('u608');
gv_vAlignTable['u608'] = 'center';
var u609 = document.getElementById('u609');

u609.style.cursor = 'pointer';
if (bIE) u609.attachEvent("onclick", Clicku609);
else u609.addEventListener("click", Clicku609, true);
function Clicku609(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u609', 'u610', sJsonu610, false);
ApplyImageAndTextStyles('o', 'u565', 'u566', '', false);
ApplyImageAndTextStyles('o', 'u605', 'u606', '', false);
ApplyImageAndTextStyles('o', 'u597', 'u598', '', false);
ApplyImageAndTextStyles('o', 'u601', 'u602', '', false);
ApplyImageAndTextStyles('o', 'u593', 'u594', '', false);
ApplyImageAndTextStyles('o', 'u589', 'u590', '', false);
ApplyImageAndTextStyles('o', 'u585', 'u586', '', false);
ApplyImageAndTextStyles('o', 'u581', 'u582', '', false);
ApplyImageAndTextStyles('o', 'u577', 'u578', '', false);
ApplyImageAndTextStyles('o', 'u573', 'u574', '', false);
ApplyImageAndTextStyles('o', 'u569', 'u570', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('4XL'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'top';
var u251 = document.getElementById('u251');

var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'top';
var u253 = document.getElementById('u253');

var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'top';
var u255 = document.getElementById('u255');

var u256 = document.getElementById('u256');
gv_vAlignTable['u256'] = 'top';
var u257 = document.getElementById('u257');

var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'top';
var u259 = document.getElementById('u259');

var u611 = document.getElementById('u611');
gv_vAlignTable['u611'] = 'top';
var u612 = document.getElementById('u612');

var u613 = document.getElementById('u613');
gv_vAlignTable['u613'] = 'top';
var u614 = document.getElementById('u614');

u614.style.cursor = 'pointer';
if (bIE) u614.attachEvent("onclick", Clicku614);
else u614.addEventListener("click", Clicku614, true);
function Clicku614(e)
{

if (true) {

	SetPanelStateu75("pd0u75");

}

}

var u615 = document.getElementById('u615');
gv_vAlignTable['u615'] = 'bottom';
var u616 = document.getElementById('u616');

u616.style.cursor = 'pointer';
if (bIE) u616.attachEvent("onclick", Clicku616);
else u616.addEventListener("click", Clicku616, true);
function Clicku616(e)
{

if ((GetGlobalVariableValue('$Extras')) == (PopulateVariables('1'))) {

	SetPanelStateu75("pd0u75");

	SetPanelStateu363("pd1u363");

SetWidgetRichText('u377', PopulateVariables('<span style=" font-family:\'Helvetica\'; font-size:12px;">[[XName]] </span>'));

SetWidgetRichText('u375', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:12px;"> [[XEmail]]</span>'));

SetWidgetRichText('u381', PopulateVariables('<span style=" font-family:\'Helvetica\'; font-size:12px;">[[XComments]] <i>[[quotevar]]</i></span>'));

SetWidgetRichText('u379', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:12px;">[[Qty1]] [[Size1]] [[Qty2]] [[Size2]]</span>'));

SetWidgetRichText('u82', PopulateVariables('<span style=" font-family:\'Arial\'; font-size:13px;">4 people signed up for 8 shirts</span>'));

SetWidgetRichText('u131', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#003366; font-size:16px;">4 people have signed up</span></b>'));

SetWidgetRichText('u174', PopulateVariables('<div style="text-align:right"><span style=" font-family:\'Helvetica\'; color:#003366; font-size:13px;">&nbsp; Total Quantity:&nbsp; 8</span></div>'));

SetWidgetRichText('u217', PopulateVariables('<div style="text-align:right"><span style=" font-family:\'Helvetica\'; color:#003366; font-size:13px;">&nbsp; Total Quantity:&nbsp; 8</span></div>'));

SetWidgetRichText('u264', PopulateVariables('<div style="text-align:right"><span style=" font-family:\'Helvetica\'; font-size:12px;">3</span></div>'));

SetWidgetRichText('u266', PopulateVariables('<div style="text-align:right"><span style=" font-family:\'Helvetica\'; font-size:12px;">3</span></div>'));

SetWidgetRichText('u276', PopulateVariables('<div style="text-align:right"><span style=" font-family:\'Helvetica\'; font-size:12px;">8</span></div>'));

SetWidgetFormText('u624', PopulateVariables(''));

SetWidgetFormText('u626', PopulateVariables(''));

SetWidgetFormText('u628', PopulateVariables(''));

ApplyImageAndTextStyles('o', 'u500', 'u501', '', false);
ApplyImageAndTextStyles('o', 'u504', 'u505', '', false);
ApplyImageAndTextStyles('o', 'u508', 'u509', '', false);
ApplyImageAndTextStyles('o', 'u512', 'u513', '', false);
ApplyImageAndTextStyles('o', 'u516', 'u517', '', false);
ApplyImageAndTextStyles('o', 'u520', 'u521', '', false);
ApplyImageAndTextStyles('o', 'u524', 'u525', '', false);
ApplyImageAndTextStyles('o', 'u532', 'u533', '', false);
ApplyImageAndTextStyles('o', 'u536', 'u537', '', false);
ApplyImageAndTextStyles('o', 'u528', 'u529', '', false);
ApplyImageAndTextStyles('o', 'u540', 'u541', '', false);
ApplyImageAndTextStyles('o', 'u565', 'u566', '', false);
ApplyImageAndTextStyles('o', 'u569', 'u570', '', false);
ApplyImageAndTextStyles('o', 'u544', 'u545', '', false);
ApplyImageAndTextStyles('o', 'u573', 'u574', '', false);
ApplyImageAndTextStyles('o', 'u577', 'u578', '', false);
ApplyImageAndTextStyles('o', 'u581', 'u582', '', false);
ApplyImageAndTextStyles('o', 'u589', 'u590', '', false);
ApplyImageAndTextStyles('o', 'u585', 'u586', '', false);
ApplyImageAndTextStyles('o', 'u593', 'u594', '', false);
ApplyImageAndTextStyles('o', 'u601', 'u602', '', false);
ApplyImageAndTextStyles('o', 'u597', 'u598', '', false);
ApplyImageAndTextStyles('o', 'u609', 'u610', '', false);
ApplyImageAndTextStyles('o', 'u605', 'u606', '', false);
	SetPanelVisibilityu558("hidden");

	SetPanelVisibilityu489("hidden");

	SetPanelVisibilityu558("");

}
else
if ((GetGlobalVariableValue('$Extras')) == (PopulateVariables('2'))) {

	BringToFront("u75");

;

;

;

;

;

;

;

;

SetWidgetRichText('u82', PopulateVariables('<span style=" font-family:\'Arial\'; font-size:13px;">5 people signed up for 10 shirts</span>'));

;

;

}

}

var u617 = document.getElementById('u617');
gv_vAlignTable['u617'] = 'bottom';
var u618 = document.getElementById('u618');

var u619 = document.getElementById('u619');
gv_vAlignTable['u619'] = 'center';
var u0 = document.getElementById('u0');

var u1 = document.getElementById('u1');

var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'center';
var u3 = document.getElementById('u3');

var u4 = document.getElementById('u4');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'top';
var u7 = document.getElementById('u7');

u7.style.cursor = 'pointer';
if (bIE) u7.attachEvent("onclick", Clicku7);
else u7.addEventListener("click", Clicku7, true);
function Clicku7(e)
{

if (true) {

	BringToFront("u75");

}

}

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'top';
var u261 = document.getElementById('u261');

var u262 = document.getElementById('u262');
gv_vAlignTable['u262'] = 'top';
var u263 = document.getElementById('u263');

var u264 = document.getElementById('u264');
gv_vAlignTable['u264'] = 'top';
var u265 = document.getElementById('u265');

var u266 = document.getElementById('u266');
gv_vAlignTable['u266'] = 'top';
var u267 = document.getElementById('u267');

var u268 = document.getElementById('u268');
gv_vAlignTable['u268'] = 'top';
var u269 = document.getElementById('u269');

var u621 = document.getElementById('u621');
gv_vAlignTable['u621'] = 'center';
var u622 = document.getElementById('u622');
gv_vAlignTable['u622'] = 'top';
var u623 = document.getElementById('u623');
gv_vAlignTable['u623'] = 'top';
var u624 = document.getElementById('u624');

if (bIE) u624.attachEvent("onblur", LostFocusu624);
else u624.addEventListener("blur", LostFocusu624, true);
function LostFocusu624(e)
{

if (true) {

SetGlobalVariableValue('$XName', GetWidgetFormText('u624'));

}

}

var u625 = document.getElementById('u625');
gv_vAlignTable['u625'] = 'top';
var u626 = document.getElementById('u626');

if (bIE) u626.attachEvent("onblur", LostFocusu626);
else u626.addEventListener("blur", LostFocusu626, true);
function LostFocusu626(e)
{

if (true) {

SetGlobalVariableValue('$XEmail', GetWidgetFormText('u626'));

}

}

var u627 = document.getElementById('u627');
gv_vAlignTable['u627'] = 'top';
var u628 = document.getElementById('u628');

if (bIE) u628.attachEvent("onblur", LostFocusu628);
else u628.addEventListener("blur", LostFocusu628, true);
function LostFocusu628(e)
{

if (true) {

SetGlobalVariableValue('$XComments', GetWidgetFormText('u628'));

}

}

var u629 = document.getElementById('u629');

u629.style.cursor = 'pointer';
if (bIE) u629.attachEvent("onclick", Clicku629);
else u629.addEventListener("click", Clicku629, true);
function Clicku629(e)
{

if ((GetCheckState('u629')) == (true)) {

SetGlobalVariableValue('$quotevar', PopulateVariables('(Private)'));

}

}

if (window.OnLoad) OnLoad();
