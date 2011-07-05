
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

var $paymtInfo = '';

var $dlvyInfo = '';

var $Welcome = '';

var $yourPhone = '';

var $contactEmail = '';

var $eventDate = '';

var $priceNote = '';

var $contactPhone = '';

var $dlvryDate = '';

var $DlvryExDate = '';

var $CloseExDate = '';

var $OrderExDate = '';

var $Extras = '';

var $Qty1 = '';

var $Qty2 = '';

var $XName = '';

var $XEmail = '';

var $XComments = '';

var $round = '';

var $DaysLeftNum = '';

var $DaysLeftText = '';

var $SignUpEndsText = '';

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
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&price1=' + encodeURIComponent($price1) + '&price2=' + encodeURIComponent($price2) + '&GroupName=' + encodeURIComponent($GroupName) + '&YourName=' + encodeURIComponent($YourName) + '&groupPrice=' + encodeURIComponent($groupPrice) + '&contactName=' + encodeURIComponent($contactName) + '&yourEmail=' + encodeURIComponent($yourEmail) + '&closeDate=' + encodeURIComponent($closeDate) + '&personalize=' + encodeURIComponent($personalize) + '&quotevar=' + encodeURIComponent($quotevar) + '&ZIP=' + encodeURIComponent($ZIP) + '&NameNum=' + encodeURIComponent($NameNum) + '&Size1=' + encodeURIComponent($Size1) + '&Size2=' + encodeURIComponent($Size2) + '&paymtInfo=' + encodeURIComponent($paymtInfo) + '&dlvyInfo=' + encodeURIComponent($dlvyInfo) + '&Welcome=' + encodeURIComponent($Welcome) + '&yourPhone=' + encodeURIComponent($yourPhone) + '&contactEmail=' + encodeURIComponent($contactEmail) + '&eventDate=' + encodeURIComponent($eventDate) + '&priceNote=' + encodeURIComponent($priceNote) + '&contactPhone=' + encodeURIComponent($contactPhone) + '&dlvryDate=' + encodeURIComponent($dlvryDate) + '&DlvryExDate=' + encodeURIComponent($DlvryExDate) + '&CloseExDate=' + encodeURIComponent($CloseExDate) + '&OrderExDate=' + encodeURIComponent($OrderExDate) + '&Extras=' + encodeURIComponent($Extras) + '&Qty1=' + encodeURIComponent($Qty1) + '&Qty2=' + encodeURIComponent($Qty2) + '&XName=' + encodeURIComponent($XName) + '&XEmail=' + encodeURIComponent($XEmail) + '&XComments=' + encodeURIComponent($XComments) + '&round=' + encodeURIComponent($round) + '&DaysLeftNum=' + encodeURIComponent($DaysLeftNum) + '&DaysLeftText=' + encodeURIComponent($DaysLeftText) + '&SignUpEndsText=' + encodeURIComponent($SignUpEndsText) + '&CSUM=1';
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
  value = value.replace(/\[\[paymtInfo\]\]/g, $paymtInfo);
  value = value.replace(/\[\[dlvyInfo\]\]/g, $dlvyInfo);
  value = value.replace(/\[\[Welcome\]\]/g, $Welcome);
  value = value.replace(/\[\[yourPhone\]\]/g, $yourPhone);
  value = value.replace(/\[\[contactEmail\]\]/g, $contactEmail);
  value = value.replace(/\[\[eventDate\]\]/g, $eventDate);
  value = value.replace(/\[\[priceNote\]\]/g, $priceNote);
  value = value.replace(/\[\[contactPhone\]\]/g, $contactPhone);
  value = value.replace(/\[\[dlvryDate\]\]/g, $dlvryDate);
  value = value.replace(/\[\[DlvryExDate\]\]/g, $DlvryExDate);
  value = value.replace(/\[\[CloseExDate\]\]/g, $CloseExDate);
  value = value.replace(/\[\[OrderExDate\]\]/g, $OrderExDate);
  value = value.replace(/\[\[Extras\]\]/g, $Extras);
  value = value.replace(/\[\[Qty1\]\]/g, $Qty1);
  value = value.replace(/\[\[Qty2\]\]/g, $Qty2);
  value = value.replace(/\[\[XName\]\]/g, $XName);
  value = value.replace(/\[\[XEmail\]\]/g, $XEmail);
  value = value.replace(/\[\[XComments\]\]/g, $XComments);
  value = value.replace(/\[\[round\]\]/g, $round);
  value = value.replace(/\[\[DaysLeftNum\]\]/g, $DaysLeftNum);
  value = value.replace(/\[\[DaysLeftText\]\]/g, $DaysLeftText);
  value = value.replace(/\[\[SignUpEndsText\]\]/g, $SignUpEndsText);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  return value;
}

function OnLoad(e) {

if (true) {

SetWidgetRichText('u388', PopulateVariables('<span style=" font-family:\'Helvetica\'; font-size:11px;">Welcome [[YourName]] |&nbsp; Not [[YourName]]? <span style=" font-family:\'Helvetica\'; font-size:11px;"> <span style=" font-family:\'Helvetica\'; font-size:11px;">Click Here</span></span></span>'));

SetWidgetRichText('u272', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#003366; font-size:19px;">Manage [[GroupName]]</span></b>'));

SetWidgetRichText('u246', PopulateVariables('<span style=" font-family:\'Helvetica\'; font-size:16px;">Sign-up closing date:</span><span style=" font-family:\'Helvetica\'; font-size:13px;">&nbsp; </span><span style=" font-family:\'Helvetica\'; color:#006600; font-size:13px;"><b>[[CloseExDate]]</span></b>'));

SetGlobalVariableValue('$Extras', PopulateVariables('0'));

}

}

eval(GetDynamicPanelScript('u474', 3));

eval(GetDynamicPanelScript('u275', 2));

eval(GetDynamicPanelScript('u465', 3));

eval(GetDynamicPanelScript('u15', 1));

eval(GetDynamicPanelScript('u0', 1));

eval(GetDynamicPanelScript('u18', 2));

eval(GetDynamicPanelScript('u151', 1));

eval(GetDynamicPanelScript('u3', 3));

eval(GetDynamicPanelScript('u456', 3));

eval(GetDynamicPanelScript('u487', 3));

eval(GetDynamicPanelScript('u245', 4));

eval(GetDynamicPanelScript('u236', 1));

eval(GetDynamicPanelScript('u93', 1));

var u270 = document.getElementById('u270');
gv_vAlignTable['u270'] = 'top';
var u271 = document.getElementById('u271');

var u272 = document.getElementById('u272');
gv_vAlignTable['u272'] = 'center';
var u273 = document.getElementById('u273');

u273.style.cursor = 'pointer';
if (bIE) u273.attachEvent("onclick", Clicku273);
else u273.addEventListener("click", Clicku273, true);
function Clicku273(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Shows participant sign up sheet"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}
gv_vAlignTable['u273'] = 'top';
var u274 = document.getElementById('u274');
gv_vAlignTable['u274'] = 'top';
var u275 = document.getElementById('u275');

var u276 = document.getElementById('u276');

u276.style.cursor = 'pointer';
if (bIE) u276.attachEvent("onclick", Clicku276);
else u276.addEventListener("click", Clicku276, true);
function Clicku276(e)
{

if (true) {

	BringToFront("u0");

	SetPanelStateu3("pd1u3");

SetWidgetFormText('u181', GetGlobalVariableValue('$yourEmail'));

}

}

var u277 = document.getElementById('u277');
gv_vAlignTable['u277'] = 'center';
var u278 = document.getElementById('u278');

u278.style.cursor = 'pointer';
if (bIE) u278.attachEvent("onclick", Clicku278);
else u278.addEventListener("click", Clicku278, true);
function Clicku278(e)
{

if ((GetGlobalVariableValue('$Extras')) == (PopulateVariables('1'))) {

SetGlobalVariableValue('$Extras', PopulateVariables('2'));

SetGlobalVariableValue('$XName', GetGlobalVariableValue('$YourName'));

SetGlobalVariableValue('$XEmail', GetGlobalVariableValue('$yourEmail'));

SetWidgetFormText('u160', GetGlobalVariableValue('$XName'));

SetWidgetFormText('u162', GetGlobalVariableValue('$XEmail'));

SetWidgetFormText('u164', PopulateVariables('Extra items'));

SetGlobalVariableValue('$XComments', PopulateVariables('Extra items'));

	SetPanelStateu3("pd0u3");

	SetPanelVisibilityu93("");

	BringToFront("u0");

	SetPanelVisibilityu15("hidden");

	MoveWidgetTo('u151',16,230);

	ScrollToWidget('u167', false,true);

}
else
if (true) {

SetGlobalVariableValue('$Extras', PopulateVariables('1'));

SetGlobalVariableValue('$XName', GetGlobalVariableValue('$YourName'));

SetGlobalVariableValue('$XEmail', GetGlobalVariableValue('$yourEmail'));

SetGlobalVariableValue('$XComments', PopulateVariables('Extra items'));

SetWidgetFormText('u160', GetGlobalVariableValue('$XName'));

SetWidgetFormText('u162', GetGlobalVariableValue('$XEmail'));

SetWidgetFormText('u164', GetGlobalVariableValue('$XComments'));

	BringToFront("u0");

	ScrollToWidget('u167', false,true);

	SetPanelStateu3("pd0u3");

}

}
gv_vAlignTable['u278'] = 'top';
var u279 = document.getElementById('u279');

u279.style.cursor = 'pointer';
if (bIE) u279.attachEvent("onclick", Clicku279);
else u279.addEventListener("click", Clicku279, true);
function Clicku279(e)
{

if (true) {

SetGlobalVariableValue('$Extras', PopulateVariables('2'));

SetGlobalVariableValue('$XName', PopulateVariables(''));

SetGlobalVariableValue('$XEmail', PopulateVariables(''));

SetWidgetFormText('u160', GetGlobalVariableValue('$XName'));

SetWidgetFormText('u162', GetGlobalVariableValue('$XEmail'));

SetWidgetFormText('u164', PopulateVariables('Extra items'));

SetGlobalVariableValue('$XComments', PopulateVariables('Extra items'));

	SetPanelStateu3("pd0u3");

	BringToFront("u0");

	SetPanelVisibilityu15("hidden");

	MoveWidgetTo('u151',16,230);

	ScrollToWidget('u167', false,true);

	SetPanelVisibilityu93("");

}

}

var u280 = document.getElementById('u280');
gv_vAlignTable['u280'] = 'center';
var u281 = document.getElementById('u281');

var u282 = document.getElementById('u282');

var u283 = document.getElementById('u283');
gv_vAlignTable['u283'] = 'top';
var u284 = document.getElementById('u284');

var u285 = document.getElementById('u285');
gv_vAlignTable['u285'] = 'top';
var u286 = document.getElementById('u286');

var u287 = document.getElementById('u287');
gv_vAlignTable['u287'] = 'top';
var u288 = document.getElementById('u288');

var u289 = document.getElementById('u289');
gv_vAlignTable['u289'] = 'top';
var u490 = document.getElementById('u490');

var u491 = document.getElementById('u491');
gv_vAlignTable['u491'] = 'center';
var u492 = document.getElementById('u492');

var u493 = document.getElementById('u493');

var u494 = document.getElementById('u494');
gv_vAlignTable['u494'] = 'center';
var u495 = document.getElementById('u495');
gv_vAlignTable['u495'] = 'top';
var u496 = document.getElementById('u496');

u496.style.cursor = 'pointer';
if (bIE) u496.attachEvent("onclick", Clicku496);
else u496.addEventListener("click", Clicku496, true);
function Clicku496(e)
{

if (true) {

SetGlobalVariableValue('$Extras', PopulateVariables('1'));

	SetPanelStateu3("pd0u3");

	BringToFront("u0");

	ScrollToWidget('u167', false,true);

}

}
gv_vAlignTable['u496'] = 'top';
var u100 = document.getElementById('u100');

u100.style.cursor = 'pointer';
if (bIE) u100.attachEvent("onclick", Clicku100);
else u100.addEventListener("click", Clicku100, true);
function Clicku100(e)
{

if (true) {

ApplyImageAndTextStyles('o', 'u104', 'u105', '', false);
ApplyImageAndTextStyles('s', 'u100', 'u101', sJsonu101, false);
ApplyImageAndTextStyles('o', 'u108', 'u109', '', false);
ApplyImageAndTextStyles('o', 'u112', 'u113', '', false);
ApplyImageAndTextStyles('o', 'u116', 'u117', '', false);
ApplyImageAndTextStyles('o', 'u120', 'u121', '', false);
ApplyImageAndTextStyles('o', 'u124', 'u125', '', false);
ApplyImageAndTextStyles('o', 'u128', 'u129', '', false);
ApplyImageAndTextStyles('o', 'u132', 'u133', '', false);
ApplyImageAndTextStyles('o', 'u136', 'u137', '', false);
ApplyImageAndTextStyles('o', 'u144', 'u145', '', false);
ApplyImageAndTextStyles('o', 'u140', 'u141', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Youth Extra Small'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'center';
var u102 = document.getElementById('u102');

var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'center';
var u104 = document.getElementById('u104');

u104.style.cursor = 'pointer';
if (bIE) u104.attachEvent("onclick", Clicku104);
else u104.addEventListener("click", Clicku104, true);
function Clicku104(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u104', 'u105', sJsonu105, false);
ApplyImageAndTextStyles('o', 'u100', 'u101', '', false);
ApplyImageAndTextStyles('o', 'u108', 'u109', '', false);
ApplyImageAndTextStyles('o', 'u116', 'u117', '', false);
ApplyImageAndTextStyles('o', 'u112', 'u113', '', false);
ApplyImageAndTextStyles('o', 'u120', 'u121', '', false);
ApplyImageAndTextStyles('o', 'u124', 'u125', '', false);
ApplyImageAndTextStyles('o', 'u128', 'u129', '', false);
ApplyImageAndTextStyles('o', 'u132', 'u133', '', false);
ApplyImageAndTextStyles('o', 'u136', 'u137', '', false);
ApplyImageAndTextStyles('o', 'u140', 'u141', '', false);
ApplyImageAndTextStyles('o', 'u144', 'u145', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Youth Small'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'center';
var u106 = document.getElementById('u106');

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'center';
var u108 = document.getElementById('u108');

u108.style.cursor = 'pointer';
if (bIE) u108.attachEvent("onclick", Clicku108);
else u108.addEventListener("click", Clicku108, true);
function Clicku108(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u108', 'u109', sJsonu109, false);
ApplyImageAndTextStyles('o', 'u100', 'u101', '', false);
ApplyImageAndTextStyles('o', 'u104', 'u105', '', false);
ApplyImageAndTextStyles('o', 'u112', 'u113', '', false);
ApplyImageAndTextStyles('o', 'u116', 'u117', '', false);
ApplyImageAndTextStyles('o', 'u120', 'u121', '', false);
ApplyImageAndTextStyles('o', 'u124', 'u125', '', false);
ApplyImageAndTextStyles('o', 'u144', 'u145', '', false);
ApplyImageAndTextStyles('o', 'u140', 'u141', '', false);
ApplyImageAndTextStyles('o', 'u136', 'u137', '', false);
ApplyImageAndTextStyles('o', 'u132', 'u133', '', false);
ApplyImageAndTextStyles('o', 'u128', 'u129', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Youth Medium'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'center';
var u297 = document.getElementById('u297');
gv_vAlignTable['u297'] = 'top';
var u298 = document.getElementById('u298');

var u299 = document.getElementById('u299');
gv_vAlignTable['u299'] = 'top';
var u500 = document.getElementById('u500');
gv_vAlignTable['u500'] = 'top';
var u392 = document.getElementById('u392');

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u110 = document.getElementById('u110');

var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'center';
var u112 = document.getElementById('u112');

u112.style.cursor = 'pointer';
if (bIE) u112.attachEvent("onclick", Clicku112);
else u112.addEventListener("click", Clicku112, true);
function Clicku112(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u112', 'u113', sJsonu113, false);
ApplyImageAndTextStyles('o', 'u100', 'u101', '', false);
ApplyImageAndTextStyles('o', 'u104', 'u105', '', false);
ApplyImageAndTextStyles('o', 'u116', 'u117', '', false);
ApplyImageAndTextStyles('o', 'u124', 'u125', '', false);
ApplyImageAndTextStyles('o', 'u108', 'u109', '', false);
ApplyImageAndTextStyles('o', 'u120', 'u121', '', false);
ApplyImageAndTextStyles('o', 'u128', 'u129', '', false);
ApplyImageAndTextStyles('o', 'u132', 'u133', '', false);
ApplyImageAndTextStyles('o', 'u136', 'u137', '', false);
ApplyImageAndTextStyles('o', 'u140', 'u141', '', false);
ApplyImageAndTextStyles('o', 'u144', 'u145', '', false);
SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

SetGlobalVariableValue('$Size1', PopulateVariables('Youth Large'));

}

}

var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'center';
var u114 = document.getElementById('u114');

var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'center';
var u116 = document.getElementById('u116');

u116.style.cursor = 'pointer';
if (bIE) u116.attachEvent("onclick", Clicku116);
else u116.addEventListener("click", Clicku116, true);
function Clicku116(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u116', 'u117', sJsonu117, false);
ApplyImageAndTextStyles('o', 'u100', 'u101', '', false);
ApplyImageAndTextStyles('o', 'u104', 'u105', '', false);
ApplyImageAndTextStyles('o', 'u108', 'u109', '', false);
ApplyImageAndTextStyles('o', 'u112', 'u113', '', false);
ApplyImageAndTextStyles('o', 'u120', 'u121', '', false);
ApplyImageAndTextStyles('o', 'u124', 'u125', '', false);
ApplyImageAndTextStyles('o', 'u128', 'u129', '', false);
ApplyImageAndTextStyles('o', 'u132', 'u133', '', false);
ApplyImageAndTextStyles('o', 'u136', 'u137', '', false);
ApplyImageAndTextStyles('o', 'u140', 'u141', '', false);
ApplyImageAndTextStyles('o', 'u144', 'u145', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Youth Extra Large'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
var u118 = document.getElementById('u118');

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
var u510 = document.getElementById('u510');

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u34 = document.getElementById('u34');

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u120 = document.getElementById('u120');

u120.style.cursor = 'pointer';
if (bIE) u120.attachEvent("onclick", Clicku120);
else u120.addEventListener("click", Clicku120, true);
function Clicku120(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u120', 'u121', sJsonu121, false);
ApplyImageAndTextStyles('o', 'u100', 'u101', '', false);
ApplyImageAndTextStyles('o', 'u104', 'u105', '', false);
ApplyImageAndTextStyles('o', 'u108', 'u109', '', false);
ApplyImageAndTextStyles('o', 'u112', 'u113', '', false);
ApplyImageAndTextStyles('o', 'u116', 'u117', '', false);
ApplyImageAndTextStyles('o', 'u124', 'u125', '', false);
ApplyImageAndTextStyles('o', 'u128', 'u129', '', false);
ApplyImageAndTextStyles('o', 'u136', 'u137', '', false);
ApplyImageAndTextStyles('o', 'u140', 'u141', '', false);
ApplyImageAndTextStyles('o', 'u132', 'u133', '', false);
ApplyImageAndTextStyles('o', 'u144', 'u145', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Small'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'center';
var u122 = document.getElementById('u122');

var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'center';
var u124 = document.getElementById('u124');

u124.style.cursor = 'pointer';
if (bIE) u124.attachEvent("onclick", Clicku124);
else u124.addEventListener("click", Clicku124, true);
function Clicku124(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u124', 'u125', sJsonu125, false);
ApplyImageAndTextStyles('o', 'u100', 'u101', '', false);
ApplyImageAndTextStyles('o', 'u104', 'u105', '', false);
ApplyImageAndTextStyles('o', 'u112', 'u113', '', false);
ApplyImageAndTextStyles('o', 'u120', 'u121', '', false);
ApplyImageAndTextStyles('o', 'u108', 'u109', '', false);
ApplyImageAndTextStyles('o', 'u116', 'u117', '', false);
ApplyImageAndTextStyles('o', 'u128', 'u129', '', false);
ApplyImageAndTextStyles('o', 'u140', 'u141', '', false);
ApplyImageAndTextStyles('o', 'u136', 'u137', '', false);
ApplyImageAndTextStyles('o', 'u132', 'u133', '', false);
ApplyImageAndTextStyles('o', 'u144', 'u145', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Medium'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'center';
var u126 = document.getElementById('u126');

var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u128 = document.getElementById('u128');

u128.style.cursor = 'pointer';
if (bIE) u128.attachEvent("onclick", Clicku128);
else u128.addEventListener("click", Clicku128, true);
function Clicku128(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u128', 'u129', sJsonu129, false);
ApplyImageAndTextStyles('o', 'u100', 'u101', '', false);
ApplyImageAndTextStyles('o', 'u104', 'u105', '', false);
ApplyImageAndTextStyles('o', 'u116', 'u117', '', false);
ApplyImageAndTextStyles('o', 'u120', 'u121', '', false);
ApplyImageAndTextStyles('o', 'u124', 'u125', '', false);
ApplyImageAndTextStyles('o', 'u108', 'u109', '', false);
ApplyImageAndTextStyles('o', 'u112', 'u113', '', false);
ApplyImageAndTextStyles('o', 'u136', 'u137', '', false);
ApplyImageAndTextStyles('o', 'u144', 'u145', '', false);
ApplyImageAndTextStyles('o', 'u140', 'u141', '', false);
ApplyImageAndTextStyles('o', 'u132', 'u133', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Large'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'center';
var u130 = document.getElementById('u130');

var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'center';
var u132 = document.getElementById('u132');

u132.style.cursor = 'pointer';
if (bIE) u132.attachEvent("onclick", Clicku132);
else u132.addEventListener("click", Clicku132, true);
function Clicku132(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u132', 'u133', sJsonu133, false);
ApplyImageAndTextStyles('o', 'u100', 'u101', '', false);
ApplyImageAndTextStyles('o', 'u104', 'u105', '', false);
ApplyImageAndTextStyles('o', 'u112', 'u113', '', false);
ApplyImageAndTextStyles('o', 'u120', 'u121', '', false);
ApplyImageAndTextStyles('o', 'u108', 'u109', '', false);
ApplyImageAndTextStyles('o', 'u116', 'u117', '', false);
ApplyImageAndTextStyles('o', 'u124', 'u125', '', false);
ApplyImageAndTextStyles('o', 'u128', 'u129', '', false);
ApplyImageAndTextStyles('o', 'u136', 'u137', '', false);
ApplyImageAndTextStyles('o', 'u144', 'u145', '', false);
ApplyImageAndTextStyles('o', 'u140', 'u141', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Extra Large'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'center';
var u134 = document.getElementById('u134');

var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'center';
var u136 = document.getElementById('u136');

u136.style.cursor = 'pointer';
if (bIE) u136.attachEvent("onclick", Clicku136);
else u136.addEventListener("click", Clicku136, true);
function Clicku136(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u136', 'u137', sJsonu137, false);
ApplyImageAndTextStyles('o', 'u100', 'u101', '', false);
ApplyImageAndTextStyles('o', 'u104', 'u105', '', false);
ApplyImageAndTextStyles('o', 'u108', 'u109', '', false);
ApplyImageAndTextStyles('o', 'u112', 'u113', '', false);
ApplyImageAndTextStyles('o', 'u120', 'u121', '', false);
ApplyImageAndTextStyles('o', 'u116', 'u117', '', false);
ApplyImageAndTextStyles('o', 'u140', 'u141', '', false);
ApplyImageAndTextStyles('o', 'u132', 'u133', '', false);
ApplyImageAndTextStyles('o', 'u144', 'u145', '', false);
ApplyImageAndTextStyles('o', 'u128', 'u129', '', false);
ApplyImageAndTextStyles('o', 'u124', 'u125', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('2XL'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'center';
var u138 = document.getElementById('u138');

var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'center';
var u140 = document.getElementById('u140');

u140.style.cursor = 'pointer';
if (bIE) u140.attachEvent("onclick", Clicku140);
else u140.addEventListener("click", Clicku140, true);
function Clicku140(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u140', 'u141', sJsonu141, false);
ApplyImageAndTextStyles('o', 'u100', 'u101', '', false);
ApplyImageAndTextStyles('o', 'u104', 'u105', '', false);
ApplyImageAndTextStyles('o', 'u112', 'u113', '', false);
ApplyImageAndTextStyles('o', 'u108', 'u109', '', false);
ApplyImageAndTextStyles('o', 'u116', 'u117', '', false);
ApplyImageAndTextStyles('o', 'u120', 'u121', '', false);
ApplyImageAndTextStyles('o', 'u136', 'u137', '', false);
ApplyImageAndTextStyles('o', 'u132', 'u133', '', false);
ApplyImageAndTextStyles('o', 'u128', 'u129', '', false);
ApplyImageAndTextStyles('o', 'u124', 'u125', '', false);
ApplyImageAndTextStyles('o', 'u144', 'u145', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('3XL'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'center';
var u142 = document.getElementById('u142');

var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'center';
var u144 = document.getElementById('u144');

u144.style.cursor = 'pointer';
if (bIE) u144.attachEvent("onclick", Clicku144);
else u144.addEventListener("click", Clicku144, true);
function Clicku144(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u144', 'u145', sJsonu145, false);
ApplyImageAndTextStyles('o', 'u100', 'u101', '', false);
ApplyImageAndTextStyles('o', 'u140', 'u141', '', false);
ApplyImageAndTextStyles('o', 'u132', 'u133', '', false);
ApplyImageAndTextStyles('o', 'u136', 'u137', '', false);
ApplyImageAndTextStyles('o', 'u128', 'u129', '', false);
ApplyImageAndTextStyles('o', 'u124', 'u125', '', false);
ApplyImageAndTextStyles('o', 'u120', 'u121', '', false);
ApplyImageAndTextStyles('o', 'u116', 'u117', '', false);
ApplyImageAndTextStyles('o', 'u112', 'u113', '', false);
ApplyImageAndTextStyles('o', 'u108', 'u109', '', false);
ApplyImageAndTextStyles('o', 'u104', 'u105', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('4XL'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'center';
var u146 = document.getElementById('u146');

u146.style.cursor = 'pointer';
if (bIE) u146.attachEvent("onclick", Clicku146);
else u146.addEventListener("click", Clicku146, true);
function Clicku146(e)
{

if ((GetCheckState('u146')) == (true)) {

;

}
else
if (true) {

;

}

}

var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'top';
var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'top';
var u149 = document.getElementById('u149');

var u501 = document.getElementById('u501');

var u502 = document.getElementById('u502');
gv_vAlignTable['u502'] = 'center';
var u503 = document.getElementById('u503');

var u10 = document.getElementById('u10');

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u12 = document.getElementById('u12');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
var u15 = document.getElementById('u15');

var u16 = document.getElementById('u16');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u18 = document.getElementById('u18');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'center';
var u151 = document.getElementById('u151');

var u152 = document.getElementById('u152');

u152.style.cursor = 'pointer';
if (bIE) u152.attachEvent("onclick", Clicku152);
else u152.addEventListener("click", Clicku152, true);
function Clicku152(e)
{

if (true) {

	BringToFront("u236");

	SetPanelStateu487("pd0u487");

}

}

var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'bottom';
var u154 = document.getElementById('u154');

var u155 = document.getElementById('u155');

u155.style.cursor = 'pointer';
if (bIE) u155.attachEvent("onclick", Clicku155);
else u155.addEventListener("click", Clicku155, true);
function Clicku155(e)
{

if ((GetGlobalVariableValue('$Extras')) == (PopulateVariables('1'))) {

	BringToFront("u236");

	SetPanelStateu487("pd2u487");

SetWidgetRichText('u555', PopulateVariables('<span style=" font-family:\'Helvetica\'; font-size:12px;">[[XName]]</span>'));

SetWidgetRichText('u553', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:12px;">[[XEmail]]</span>'));

SetWidgetRichText('u559', PopulateVariables('<span style=" font-family:\'Helvetica\'; font-size:12px;">[[XComments]] [[quotevar]]</span>'));

SetWidgetRichText('u557', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:12px;">[[Qty1]] [[Size1]]&nbsp; [[Qty2]] [[Size2]]</span>'));

SetWidgetRichText('u514', PopulateVariables('<span style=" font-family:\'Helvetica\'; font-size:12px;">[[XEmail]]</span>'));

SetWidgetRichText('u516', PopulateVariables('<span style=" font-family:\'Helvetica\'; font-size:12px;">[[XName]]</span>'));

SetWidgetRichText('u518', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:12px;">2 Medium</span>'));

SetWidgetRichText('u520', PopulateVariables('<span style=" font-family:\'Helvetica\'; font-size:12px;">[[XComments]] [[quotevar]]</span>'));

SetWidgetFormText('u160', PopulateVariables(''));

SetWidgetFormText('u162', PopulateVariables(''));

SetWidgetFormText('u164', PopulateVariables(''));

SetCheckState('u146', false);

SetWidgetRichText('u244', PopulateVariables('<span style=" font-family:\'Arial\'; font-size:13px;">4 people signed up for 8 shirts</span>'));

SetWidgetRichText('u263', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#003366; font-size:16px;">4 people have signed up</span></b>'));

SetWidgetRichText('u384', PopulateVariables('<div style="text-align:right"><span style=" font-family:\'Helvetica\'; font-size:12px;">8</span></div>'));

ApplyImageAndTextStyles('o', 'u61', 'u62', '', false);
ApplyImageAndTextStyles('o', 'u65', 'u66', '', false);
ApplyImageAndTextStyles('o', 'u69', 'u70', '', false);
ApplyImageAndTextStyles('o', 'u73', 'u74', '', false);
ApplyImageAndTextStyles('o', 'u120', 'u121', '', false);
ApplyImageAndTextStyles('o', 'u124', 'u125', '', false);
ApplyImageAndTextStyles('o', 'u132', 'u133', '', false);
ApplyImageAndTextStyles('o', 'u128', 'u129', '', false);
}
else
if ((GetGlobalVariableValue('$Extras')) == (PopulateVariables('2'))) {

	BringToFront("u236");

	SetPanelStateu487("pd1u487");

SetWidgetRichText('u528', PopulateVariables('<span style=" font-family:\'Helvetica\'; font-size:12px;">[[XName]]</span>'));

SetWidgetRichText('u526', PopulateVariables('<span style=" font-family:\'Helvetica\'; font-size:12px;">[[XEmail]]</span>'));

SetWidgetRichText('u532', PopulateVariables('<span style=" font-family:\'Helvetica\'; font-size:12px;">[[XComments]] [[quotevar]]</span>'));

SetWidgetRichText('u530', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:12px;">[[Qty1]] [[Size1]]&nbsp; [[Qty2]] [[Size2]]</span>'));

SetWidgetFormText('u164', PopulateVariables(''));

SetWidgetFormText('u162', PopulateVariables(''));

SetWidgetFormText('u160', PopulateVariables(''));

SetCheckState('u146', false);

SetWidgetRichText('u244', PopulateVariables('<span style=" font-family:\'Arial\'; font-size:13px;">5 people signed up for 10 shirts</span>'));

SetWidgetRichText('u263', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#003366; font-size:16px;">5 people have signed up</span></b>'));

SetWidgetRichText('u384', PopulateVariables('<div style="text-align:right"><span style=" font-family:\'Helvetica\'; font-size:12px;">10</span></div>'));

ApplyImageAndTextStyles('o', 'u61', 'u62', '', false);
ApplyImageAndTextStyles('o', 'u69', 'u70', '', false);
ApplyImageAndTextStyles('o', 'u73', 'u74', '', false);
ApplyImageAndTextStyles('o', 'u65', 'u66', '', false);
ApplyImageAndTextStyles('o', 'u120', 'u121', '', false);
ApplyImageAndTextStyles('o', 'u124', 'u125', '', false);
ApplyImageAndTextStyles('o', 'u128', 'u129', '', false);
ApplyImageAndTextStyles('o', 'u132', 'u133', '', false);
}

}

var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'bottom';
var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'top';
var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'top';
var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'top';
var u511 = document.getElementById('u511');
gv_vAlignTable['u511'] = 'center';
var u512 = document.getElementById('u512');

var u513 = document.getElementById('u513');

var u20 = document.getElementById('u20');

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u22 = document.getElementById('u22');

u22.style.cursor = 'pointer';
if (bIE) u22.attachEvent("onclick", Clicku22);
else u22.addEventListener("click", Clicku22, true);
function Clicku22(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Not enabled for this test."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u23 = document.getElementById('u23');

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u25 = document.getElementById('u25');

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u27 = document.getElementById('u27');

u27.style.cursor = 'pointer';
if (bIE) u27.attachEvent("onclick", Clicku27);
else u27.addEventListener("click", Clicku27, true);
function Clicku27(e)
{

if (true) {

	SetPanelStateu93("pd0u93");

	SetPanelVisibilityu93("");

SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

	SetPanelVisibilityu15("hidden");

	MoveWidgetTo('u151',16,230);

}

}

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
var u29 = document.getElementById('u29');

var u160 = document.getElementById('u160');

if (bIE) u160.attachEvent("onblur", LostFocusu160);
else u160.addEventListener("blur", LostFocusu160, true);
function LostFocusu160(e)
{

if (true) {

SetGlobalVariableValue('$XName', GetWidgetFormText('u160'));

}

}

var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'top';
var u162 = document.getElementById('u162');

if (bIE) u162.attachEvent("onblur", LostFocusu162);
else u162.addEventListener("blur", LostFocusu162, true);
function LostFocusu162(e)
{

if (true) {

SetGlobalVariableValue('$XEmail', GetWidgetFormText('u162'));

}

}

var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'top';
var u164 = document.getElementById('u164');

if (bIE) u164.attachEvent("onblur", LostFocusu164);
else u164.addEventListener("blur", LostFocusu164, true);
function LostFocusu164(e)
{

if (true) {

SetGlobalVariableValue('$XComments', GetWidgetFormText('u164'));

}

}

var u165 = document.getElementById('u165');

u165.style.cursor = 'pointer';
if (bIE) u165.attachEvent("onclick", Clicku165);
else u165.addEventListener("click", Clicku165, true);
function Clicku165(e)
{

if ((GetCheckState('u165')) == (true)) {

SetGlobalVariableValue('$quotevar', PopulateVariables('(Private)'));

}

}

var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'top';
var u167 = document.getElementById('u167');

var u168 = document.getElementById('u168');

var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'center';
var u521 = document.getElementById('u521');

var u522 = document.getElementById('u522');
gv_vAlignTable['u522'] = 'top';
var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'center';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u31 = document.getElementById('u31');

u31.style.cursor = 'pointer';
if (bIE) u31.attachEvent("onclick", Clicku31);
else u31.addEventListener("click", Clicku31, true);
function Clicku31(e)
{

if ((false) && (false)) {

	SetPanelStateu93("pd0u93");

	SetPanelVisibilityu93("");

SetGlobalVariableValue('$Size2', PopulateVariables(''));

;

;

;

;

;

;

;

;

}
else
if ((false) && (false)) {

	SetPanelStateu93("pd0u93");

	SetPanelVisibilityu93("");

SetGlobalVariableValue('$Size2', PopulateVariables(''));

;

;

;

;

;

;

;

}
else
if ((false) && (false)) {

	SetPanelStateu93("pd0u93");

	SetPanelVisibilityu93("");

SetGlobalVariableValue('$Size2', PopulateVariables(''));

;

;

;

;

;

;

;

}
else
if ((false) && (false)) {

	SetPanelStateu93("pd0u93");

	SetPanelVisibilityu93("");

SetGlobalVariableValue('$Size2', PopulateVariables(''));

;

;

;

;

;

;

;

;

}
else
if (true) {

	SetPanelStateu93("pd0u93");

	SetPanelVisibilityu93("");

SetGlobalVariableValue('$Size2', PopulateVariables(''));

;

;

;

;

;

;

;

;

}

}

var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'top';
var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'top';
var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'top';
var u209 = document.getElementById('u209');

var u36 = document.getElementById('u36');

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u38 = document.getElementById('u38');

var u39 = document.getElementById('u39');

var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'top';
var u171 = document.getElementById('u171');

u171.style.cursor = 'pointer';
if (bIE) u171.attachEvent("onclick", Clicku171);
else u171.addEventListener("click", Clicku171, true);
function Clicku171(e)
{

if (true) {

}

}

var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'center';
var u173 = document.getElementById('u173');

u173.style.cursor = 'pointer';
if (bIE) u173.attachEvent("onclick", Clicku173);
else u173.addEventListener("click", Clicku173, true);
function Clicku173(e)
{

if (true) {

	BringToFront("u236");

	SetPanelStateu0("pd0u0");

	SetPanelStateu3("pd0u3");

}

}

var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'bottom';
var u175 = document.getElementById('u175');

u175.style.cursor = 'pointer';
if (bIE) u175.attachEvent("onclick", Clicku175);
else u175.addEventListener("click", Clicku175, true);
function Clicku175(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Next screen will be checkout for CustomInk order"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'bottom';
var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'top';
var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'top';
var u179 = document.getElementById('u179');

var u531 = document.getElementById('u531');

var u532 = document.getElementById('u532');
gv_vAlignTable['u532'] = 'top';
var u533 = document.getElementById('u533');

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u41 = document.getElementById('u41');

u41.style.cursor = 'pointer';
if (bIE) u41.attachEvent("onclick", Clicku41);
else u41.addEventListener("click", Clicku41, true);
function Clicku41(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('Youth Extra Small'))) {

ApplyImageAndTextStyles('o', 'u45', 'u46', '', false);
ApplyImageAndTextStyles('s', 'u41', 'u42', sJsonu42, false);
ApplyImageAndTextStyles('o', 'u49', 'u50', '', false);
ApplyImageAndTextStyles('o', 'u53', 'u54', '', false);
ApplyImageAndTextStyles('o', 'u57', 'u58', '', false);
ApplyImageAndTextStyles('o', 'u61', 'u62', '', false);
ApplyImageAndTextStyles('o', 'u65', 'u66', '', false);
ApplyImageAndTextStyles('o', 'u69', 'u70', '', false);
ApplyImageAndTextStyles('o', 'u73', 'u74', '', false);
ApplyImageAndTextStyles('o', 'u77', 'u78', '', false);
ApplyImageAndTextStyles('o', 'u85', 'u86', '', false);
ApplyImageAndTextStyles('o', 'u81', 'u82', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('Youth Extra Small'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

ApplyImageAndTextStyles('s', 'u41', 'u42', sJsonu42, false);
ApplyImageAndTextStyles('o', 'u45', 'u46', '', false);
ApplyImageAndTextStyles('o', 'u49', 'u50', '', false);
ApplyImageAndTextStyles('o', 'u53', 'u54', '', false);
ApplyImageAndTextStyles('o', 'u57', 'u58', '', false);
ApplyImageAndTextStyles('o', 'u65', 'u66', '', false);
ApplyImageAndTextStyles('o', 'u69', 'u70', '', false);
ApplyImageAndTextStyles('o', 'u61', 'u62', '', false);
ApplyImageAndTextStyles('o', 'u81', 'u82', '', false);
ApplyImageAndTextStyles('o', 'u85', 'u86', '', false);
ApplyImageAndTextStyles('o', 'u73', 'u74', '', false);
ApplyImageAndTextStyles('o', 'u77', 'u78', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$Qty1', PopulateVariables('2'));

}

}

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u43 = document.getElementById('u43');

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'center';
var u45 = document.getElementById('u45');

u45.style.cursor = 'pointer';
if (bIE) u45.attachEvent("onclick", Clicku45);
else u45.addEventListener("click", Clicku45, true);
function Clicku45(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('Youth Small'))) {

ApplyImageAndTextStyles('s', 'u45', 'u46', sJsonu46, false);
ApplyImageAndTextStyles('o', 'u41', 'u42', '', false);
ApplyImageAndTextStyles('o', 'u49', 'u50', '', false);
ApplyImageAndTextStyles('o', 'u57', 'u58', '', false);
ApplyImageAndTextStyles('o', 'u53', 'u54', '', false);
ApplyImageAndTextStyles('o', 'u61', 'u62', '', false);
ApplyImageAndTextStyles('o', 'u65', 'u66', '', false);
ApplyImageAndTextStyles('o', 'u69', 'u70', '', false);
ApplyImageAndTextStyles('o', 'u73', 'u74', '', false);
ApplyImageAndTextStyles('o', 'u77', 'u78', '', false);
ApplyImageAndTextStyles('o', 'u81', 'u82', '', false);
ApplyImageAndTextStyles('o', 'u85', 'u86', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('Youth Small'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty1', PopulateVariables('2'));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

ApplyImageAndTextStyles('o', 'u41', 'u42', '', false);
ApplyImageAndTextStyles('s', 'u45', 'u46', sJsonu46, false);
ApplyImageAndTextStyles('o', 'u53', 'u54', '', false);
ApplyImageAndTextStyles('o', 'u57', 'u58', '', false);
ApplyImageAndTextStyles('o', 'u49', 'u50', '', false);
ApplyImageAndTextStyles('o', 'u61', 'u62', '', false);
ApplyImageAndTextStyles('o', 'u69', 'u70', '', false);
ApplyImageAndTextStyles('o', 'u65', 'u66', '', false);
ApplyImageAndTextStyles('o', 'u73', 'u74', '', false);
ApplyImageAndTextStyles('o', 'u77', 'u78', '', false);
ApplyImageAndTextStyles('o', 'u85', 'u86', '', false);
ApplyImageAndTextStyles('o', 'u81', 'u82', '', false);
}

}

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'center';
var u47 = document.getElementById('u47');

var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'center';
var u49 = document.getElementById('u49');

u49.style.cursor = 'pointer';
if (bIE) u49.attachEvent("onclick", Clicku49);
else u49.addEventListener("click", Clicku49, true);
function Clicku49(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('Youth Medium'))) {

ApplyImageAndTextStyles('s', 'u49', 'u50', sJsonu50, false);
ApplyImageAndTextStyles('o', 'u41', 'u42', '', false);
ApplyImageAndTextStyles('o', 'u45', 'u46', '', false);
ApplyImageAndTextStyles('o', 'u53', 'u54', '', false);
ApplyImageAndTextStyles('o', 'u57', 'u58', '', false);
ApplyImageAndTextStyles('o', 'u61', 'u62', '', false);
ApplyImageAndTextStyles('o', 'u65', 'u66', '', false);
ApplyImageAndTextStyles('o', 'u85', 'u86', '', false);
ApplyImageAndTextStyles('o', 'u81', 'u82', '', false);
ApplyImageAndTextStyles('o', 'u77', 'u78', '', false);
ApplyImageAndTextStyles('o', 'u73', 'u74', '', false);
ApplyImageAndTextStyles('o', 'u69', 'u70', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('Youth Medium'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty1', PopulateVariables('2'));

ApplyImageAndTextStyles('o', 'u41', 'u42', '', false);
ApplyImageAndTextStyles('o', 'u45', 'u46', '', false);
ApplyImageAndTextStyles('o', 'u53', 'u54', '', false);
ApplyImageAndTextStyles('s', 'u49', 'u50', sJsonu50, false);
ApplyImageAndTextStyles('o', 'u57', 'u58', '', false);
ApplyImageAndTextStyles('o', 'u65', 'u66', '', false);
ApplyImageAndTextStyles('o', 'u69', 'u70', '', false);
ApplyImageAndTextStyles('o', 'u61', 'u62', '', false);
ApplyImageAndTextStyles('o', 'u73', 'u74', '', false);
ApplyImageAndTextStyles('o', 'u77', 'u78', '', false);
ApplyImageAndTextStyles('o', 'u81', 'u82', '', false);
ApplyImageAndTextStyles('o', 'u85', 'u86', '', false);
}

}

var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'top';
var u181 = document.getElementById('u181');

var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'top';
var u183 = document.getElementById('u183');

var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'center';
var u185 = document.getElementById('u185');

var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'center';
var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'top';
var u188 = document.getElementById('u188');

var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'center';
var u541 = document.getElementById('u541');
gv_vAlignTable['u541'] = 'top';
var u542 = document.getElementById('u542');
gv_vAlignTable['u542'] = 'top';
var u543 = document.getElementById('u543');

var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'center';
var u51 = document.getElementById('u51');

var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'center';
var u53 = document.getElementById('u53');

u53.style.cursor = 'pointer';
if (bIE) u53.attachEvent("onclick", Clicku53);
else u53.addEventListener("click", Clicku53, true);
function Clicku53(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('Youth Large'))) {

ApplyImageAndTextStyles('s', 'u53', 'u54', sJsonu54, false);
ApplyImageAndTextStyles('o', 'u41', 'u42', '', false);
ApplyImageAndTextStyles('o', 'u45', 'u46', '', false);
ApplyImageAndTextStyles('o', 'u57', 'u58', '', false);
ApplyImageAndTextStyles('o', 'u65', 'u66', '', false);
ApplyImageAndTextStyles('o', 'u49', 'u50', '', false);
ApplyImageAndTextStyles('o', 'u61', 'u62', '', false);
ApplyImageAndTextStyles('o', 'u69', 'u70', '', false);
ApplyImageAndTextStyles('o', 'u73', 'u74', '', false);
ApplyImageAndTextStyles('o', 'u77', 'u78', '', false);
ApplyImageAndTextStyles('o', 'u81', 'u82', '', false);
ApplyImageAndTextStyles('o', 'u85', 'u86', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('Youth Large'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty1', PopulateVariables('2'));

ApplyImageAndTextStyles('o', 'u41', 'u42', '', false);
ApplyImageAndTextStyles('o', 'u45', 'u46', '', false);
ApplyImageAndTextStyles('o', 'u49', 'u50', '', false);
ApplyImageAndTextStyles('s', 'u53', 'u54', sJsonu54, false);
ApplyImageAndTextStyles('o', 'u57', 'u58', '', false);
ApplyImageAndTextStyles('o', 'u61', 'u62', '', false);
ApplyImageAndTextStyles('o', 'u69', 'u70', '', false);
ApplyImageAndTextStyles('o', 'u65', 'u66', '', false);
ApplyImageAndTextStyles('o', 'u77', 'u78', '', false);
ApplyImageAndTextStyles('o', 'u81', 'u82', '', false);
ApplyImageAndTextStyles('o', 'u73', 'u74', '', false);
ApplyImageAndTextStyles('o', 'u85', 'u86', '', false);
}

}

var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'center';
var u55 = document.getElementById('u55');

var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'center';
var u57 = document.getElementById('u57');

u57.style.cursor = 'pointer';
if (bIE) u57.attachEvent("onclick", Clicku57);
else u57.addEventListener("click", Clicku57, true);
function Clicku57(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('Youth Extra Large'))) {

ApplyImageAndTextStyles('s', 'u57', 'u58', sJsonu58, false);
ApplyImageAndTextStyles('o', 'u41', 'u42', '', false);
ApplyImageAndTextStyles('o', 'u45', 'u46', '', false);
ApplyImageAndTextStyles('o', 'u49', 'u50', '', false);
ApplyImageAndTextStyles('o', 'u53', 'u54', '', false);
ApplyImageAndTextStyles('o', 'u61', 'u62', '', false);
ApplyImageAndTextStyles('o', 'u65', 'u66', '', false);
ApplyImageAndTextStyles('o', 'u69', 'u70', '', false);
ApplyImageAndTextStyles('o', 'u73', 'u74', '', false);
ApplyImageAndTextStyles('o', 'u77', 'u78', '', false);
ApplyImageAndTextStyles('o', 'u81', 'u82', '', false);
ApplyImageAndTextStyles('o', 'u85', 'u86', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('Youth Extra Large'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$Qty1', PopulateVariables('2'));

ApplyImageAndTextStyles('o', 'u41', 'u42', '', false);
ApplyImageAndTextStyles('o', 'u49', 'u50', '', false);
ApplyImageAndTextStyles('o', 'u45', 'u46', '', false);
ApplyImageAndTextStyles('o', 'u53', 'u54', '', false);
ApplyImageAndTextStyles('s', 'u57', 'u58', sJsonu58, false);
ApplyImageAndTextStyles('o', 'u61', 'u62', '', false);
ApplyImageAndTextStyles('o', 'u69', 'u70', '', false);
ApplyImageAndTextStyles('o', 'u65', 'u66', '', false);
ApplyImageAndTextStyles('o', 'u85', 'u86', '', false);
ApplyImageAndTextStyles('o', 'u81', 'u82', '', false);
ApplyImageAndTextStyles('o', 'u77', 'u78', '', false);
ApplyImageAndTextStyles('o', 'u73', 'u74', '', false);
}

}

var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'center';
var u59 = document.getElementById('u59');

var u190 = document.getElementById('u190');

var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'center';
var u192 = document.getElementById('u192');

var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'center';
var u194 = document.getElementById('u194');

var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'center';
var u196 = document.getElementById('u196');

var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'center';
var u198 = document.getElementById('u198');

var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'center';
var u551 = document.getElementById('u551');

var u552 = document.getElementById('u552');

var u553 = document.getElementById('u553');
gv_vAlignTable['u553'] = 'top';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
var u61 = document.getElementById('u61');

u61.style.cursor = 'pointer';
if (bIE) u61.attachEvent("onclick", Clicku61);
else u61.addEventListener("click", Clicku61, true);
function Clicku61(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('Small'))) {

ApplyImageAndTextStyles('s', 'u61', 'u62', sJsonu62, false);
ApplyImageAndTextStyles('o', 'u41', 'u42', '', false);
ApplyImageAndTextStyles('o', 'u45', 'u46', '', false);
ApplyImageAndTextStyles('o', 'u49', 'u50', '', false);
ApplyImageAndTextStyles('o', 'u53', 'u54', '', false);
ApplyImageAndTextStyles('o', 'u57', 'u58', '', false);
ApplyImageAndTextStyles('o', 'u65', 'u66', '', false);
ApplyImageAndTextStyles('o', 'u69', 'u70', '', false);
ApplyImageAndTextStyles('o', 'u77', 'u78', '', false);
ApplyImageAndTextStyles('o', 'u81', 'u82', '', false);
ApplyImageAndTextStyles('o', 'u73', 'u74', '', false);
ApplyImageAndTextStyles('o', 'u85', 'u86', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('Small'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$Qty1', PopulateVariables('2'));

ApplyImageAndTextStyles('o', 'u41', 'u42', '', false);
ApplyImageAndTextStyles('o', 'u45', 'u46', '', false);
ApplyImageAndTextStyles('o', 'u53', 'u54', '', false);
ApplyImageAndTextStyles('o', 'u49', 'u50', '', false);
ApplyImageAndTextStyles('o', 'u57', 'u58', '', false);
ApplyImageAndTextStyles('s', 'u61', 'u62', sJsonu62, false);
ApplyImageAndTextStyles('o', 'u69', 'u70', '', false);
ApplyImageAndTextStyles('o', 'u65', 'u66', '', false);
ApplyImageAndTextStyles('o', 'u73', 'u74', '', false);
ApplyImageAndTextStyles('o', 'u77', 'u78', '', false);
ApplyImageAndTextStyles('o', 'u85', 'u86', '', false);
ApplyImageAndTextStyles('o', 'u81', 'u82', '', false);
}

}

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'center';
var u63 = document.getElementById('u63');

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u65 = document.getElementById('u65');

u65.style.cursor = 'pointer';
if (bIE) u65.attachEvent("onclick", Clicku65);
else u65.addEventListener("click", Clicku65, true);
function Clicku65(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('Medium'))) {

ApplyImageAndTextStyles('s', 'u65', 'u66', sJsonu66, false);
ApplyImageAndTextStyles('o', 'u41', 'u42', '', false);
ApplyImageAndTextStyles('o', 'u45', 'u46', '', false);
ApplyImageAndTextStyles('o', 'u53', 'u54', '', false);
ApplyImageAndTextStyles('o', 'u61', 'u62', '', false);
ApplyImageAndTextStyles('o', 'u49', 'u50', '', false);
ApplyImageAndTextStyles('o', 'u57', 'u58', '', false);
ApplyImageAndTextStyles('o', 'u69', 'u70', '', false);
ApplyImageAndTextStyles('o', 'u81', 'u82', '', false);
ApplyImageAndTextStyles('o', 'u77', 'u78', '', false);
ApplyImageAndTextStyles('o', 'u73', 'u74', '', false);
ApplyImageAndTextStyles('o', 'u85', 'u86', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('Medium'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$Qty1', PopulateVariables('2'));

ApplyImageAndTextStyles('o', 'u41', 'u42', '', false);
ApplyImageAndTextStyles('o', 'u45', 'u46', '', false);
ApplyImageAndTextStyles('o', 'u49', 'u50', '', false);
ApplyImageAndTextStyles('o', 'u57', 'u58', '', false);
ApplyImageAndTextStyles('o', 'u53', 'u54', '', false);
ApplyImageAndTextStyles('o', 'u69', 'u70', '', false);
ApplyImageAndTextStyles('s', 'u65', 'u66', sJsonu66, false);
ApplyImageAndTextStyles('o', 'u61', 'u62', '', false);
ApplyImageAndTextStyles('o', 'u73', 'u74', '', false);
ApplyImageAndTextStyles('o', 'u77', 'u78', '', false);
ApplyImageAndTextStyles('o', 'u81', 'u82', '', false);
ApplyImageAndTextStyles('o', 'u85', 'u86', '', false);
}

}

var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'center';
var u67 = document.getElementById('u67');

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'center';
var u69 = document.getElementById('u69');

u69.style.cursor = 'pointer';
if (bIE) u69.attachEvent("onclick", Clicku69);
else u69.addEventListener("click", Clicku69, true);
function Clicku69(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('Large'))) {

ApplyImageAndTextStyles('s', 'u69', 'u70', sJsonu70, false);
ApplyImageAndTextStyles('o', 'u41', 'u42', '', false);
ApplyImageAndTextStyles('o', 'u45', 'u46', '', false);
ApplyImageAndTextStyles('o', 'u57', 'u58', '', false);
ApplyImageAndTextStyles('o', 'u61', 'u62', '', false);
ApplyImageAndTextStyles('o', 'u65', 'u66', '', false);
ApplyImageAndTextStyles('o', 'u49', 'u50', '', false);
ApplyImageAndTextStyles('o', 'u53', 'u54', '', false);
ApplyImageAndTextStyles('o', 'u77', 'u78', '', false);
ApplyImageAndTextStyles('o', 'u85', 'u86', '', false);
ApplyImageAndTextStyles('o', 'u81', 'u82', '', false);
ApplyImageAndTextStyles('o', 'u73', 'u74', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('Large'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$Qty1', PopulateVariables('2'));

ApplyImageAndTextStyles('o', 'u41', 'u42', '', false);
ApplyImageAndTextStyles('o', 'u45', 'u46', '', false);
ApplyImageAndTextStyles('o', 'u53', 'u54', '', false);
ApplyImageAndTextStyles('o', 'u57', 'u58', '', false);
ApplyImageAndTextStyles('o', 'u49', 'u50', '', false);
ApplyImageAndTextStyles('o', 'u61', 'u62', '', false);
ApplyImageAndTextStyles('o', 'u65', 'u66', '', false);
ApplyImageAndTextStyles('o', 'u73', 'u74', '', false);
ApplyImageAndTextStyles('o', 'u77', 'u78', '', false);
ApplyImageAndTextStyles('s', 'u69', 'u70', sJsonu70, false);
ApplyImageAndTextStyles('o', 'u85', 'u86', '', false);
ApplyImageAndTextStyles('o', 'u81', 'u82', '', false);
}

}

var u560 = document.getElementById('u560');

var u561 = document.getElementById('u561');
gv_vAlignTable['u561'] = 'top';
var u562 = document.getElementById('u562');

var u563 = document.getElementById('u563');
gv_vAlignTable['u563'] = 'top';
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

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('Extra Large'))) {

ApplyImageAndTextStyles('s', 'u73', 'u74', sJsonu74, false);
ApplyImageAndTextStyles('o', 'u41', 'u42', '', false);
ApplyImageAndTextStyles('o', 'u45', 'u46', '', false);
ApplyImageAndTextStyles('o', 'u53', 'u54', '', false);
ApplyImageAndTextStyles('o', 'u61', 'u62', '', false);
ApplyImageAndTextStyles('o', 'u49', 'u50', '', false);
ApplyImageAndTextStyles('o', 'u57', 'u58', '', false);
ApplyImageAndTextStyles('o', 'u65', 'u66', '', false);
ApplyImageAndTextStyles('o', 'u69', 'u70', '', false);
ApplyImageAndTextStyles('o', 'u77', 'u78', '', false);
ApplyImageAndTextStyles('o', 'u85', 'u86', '', false);
ApplyImageAndTextStyles('o', 'u81', 'u82', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('Extra Large'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$Qty1', PopulateVariables('2'));

ApplyImageAndTextStyles('o', 'u41', 'u42', '', false);
ApplyImageAndTextStyles('o', 'u49', 'u50', '', false);
ApplyImageAndTextStyles('o', 'u45', 'u46', '', false);
ApplyImageAndTextStyles('o', 'u57', 'u58', '', false);
ApplyImageAndTextStyles('o', 'u61', 'u62', '', false);
ApplyImageAndTextStyles('o', 'u65', 'u66', '', false);
ApplyImageAndTextStyles('o', 'u53', 'u54', '', false);
ApplyImageAndTextStyles('o', 'u69', 'u70', '', false);
ApplyImageAndTextStyles('s', 'u73', 'u74', sJsonu74, false);
ApplyImageAndTextStyles('o', 'u81', 'u82', '', false);
ApplyImageAndTextStyles('o', 'u77', 'u78', '', false);
ApplyImageAndTextStyles('o', 'u85', 'u86', '', false);
}

}

var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'center';
var u75 = document.getElementById('u75');

var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'center';
var u77 = document.getElementById('u77');

u77.style.cursor = 'pointer';
if (bIE) u77.attachEvent("onclick", Clicku77);
else u77.addEventListener("click", Clicku77, true);
function Clicku77(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('2XL'))) {

ApplyImageAndTextStyles('s', 'u77', 'u78', sJsonu78, false);
ApplyImageAndTextStyles('o', 'u41', 'u42', '', false);
ApplyImageAndTextStyles('o', 'u45', 'u46', '', false);
ApplyImageAndTextStyles('o', 'u49', 'u50', '', false);
ApplyImageAndTextStyles('o', 'u53', 'u54', '', false);
ApplyImageAndTextStyles('o', 'u61', 'u62', '', false);
ApplyImageAndTextStyles('o', 'u57', 'u58', '', false);
ApplyImageAndTextStyles('o', 'u81', 'u82', '', false);
ApplyImageAndTextStyles('o', 'u73', 'u74', '', false);
ApplyImageAndTextStyles('o', 'u85', 'u86', '', false);
ApplyImageAndTextStyles('o', 'u69', 'u70', '', false);
ApplyImageAndTextStyles('o', 'u65', 'u66', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('2XL'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

ApplyImageAndTextStyles('o', 'u41', 'u42', '', false);
ApplyImageAndTextStyles('o', 'u45', 'u46', '', false);
ApplyImageAndTextStyles('o', 'u49', 'u50', '', false);
ApplyImageAndTextStyles('o', 'u53', 'u54', '', false);
ApplyImageAndTextStyles('o', 'u61', 'u62', '', false);
ApplyImageAndTextStyles('o', 'u57', 'u58', '', false);
ApplyImageAndTextStyles('o', 'u65', 'u66', '', false);
ApplyImageAndTextStyles('o', 'u69', 'u70', '', false);
ApplyImageAndTextStyles('o', 'u73', 'u74', '', false);
ApplyImageAndTextStyles('s', 'u77', 'u78', sJsonu78, false);
ApplyImageAndTextStyles('o', 'u81', 'u82', '', false);
ApplyImageAndTextStyles('o', 'u85', 'u86', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$Qty1', PopulateVariables('2'));

}

}

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'center';
var u79 = document.getElementById('u79');

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

	self.location.href="Customize.html" + GetQuerystring();

}

}

if (bIE) u573.attachEvent("onmouseover", MouseOveru573);
else u573.addEventListener("mouseover", MouseOveru573, true);
function MouseOveru573(e)
{
if (!IsTrueMouseOver('u573',e)) return;
if (true) {

SetWidgetRichText('u575', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#006699; font-size:9px;">CUSTOMIZE</span></b>'));

}

}

if (bIE) u573.attachEvent("onmouseout", MouseOutu573);
else u573.addEventListener("mouseout", MouseOutu573, true);
function MouseOutu573(e)
{
if (!IsTrueMouseOut('u573',e)) return;
if (true) {

SetWidgetRichText('u575', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006699; font-size:9px;">CUSTOMIZE</span>'));

}

}
gv_vAlignTable['u573'] = 'top';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'center';
var u81 = document.getElementById('u81');

u81.style.cursor = 'pointer';
if (bIE) u81.attachEvent("onclick", Clicku81);
else u81.addEventListener("click", Clicku81, true);
function Clicku81(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('3XL'))) {

ApplyImageAndTextStyles('s', 'u81', 'u82', sJsonu82, false);
ApplyImageAndTextStyles('o', 'u41', 'u42', '', false);
ApplyImageAndTextStyles('o', 'u45', 'u46', '', false);
ApplyImageAndTextStyles('o', 'u53', 'u54', '', false);
ApplyImageAndTextStyles('o', 'u49', 'u50', '', false);
ApplyImageAndTextStyles('o', 'u57', 'u58', '', false);
ApplyImageAndTextStyles('o', 'u61', 'u62', '', false);
ApplyImageAndTextStyles('o', 'u77', 'u78', '', false);
ApplyImageAndTextStyles('o', 'u73', 'u74', '', false);
ApplyImageAndTextStyles('o', 'u69', 'u70', '', false);
ApplyImageAndTextStyles('o', 'u65', 'u66', '', false);
ApplyImageAndTextStyles('o', 'u85', 'u86', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('3XL'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

ApplyImageAndTextStyles('o', 'u41', 'u42', '', false);
ApplyImageAndTextStyles('o', 'u49', 'u50', '', false);
ApplyImageAndTextStyles('o', 'u45', 'u46', '', false);
ApplyImageAndTextStyles('o', 'u53', 'u54', '', false);
ApplyImageAndTextStyles('o', 'u57', 'u58', '', false);
ApplyImageAndTextStyles('o', 'u61', 'u62', '', false);
ApplyImageAndTextStyles('o', 'u69', 'u70', '', false);
ApplyImageAndTextStyles('o', 'u65', 'u66', '', false);
ApplyImageAndTextStyles('o', 'u73', 'u74', '', false);
ApplyImageAndTextStyles('o', 'u77', 'u78', '', false);
ApplyImageAndTextStyles('o', 'u85', 'u86', '', false);
ApplyImageAndTextStyles('s', 'u81', 'u82', sJsonu82, false);
SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$Qty1', PopulateVariables('2'));

}

}

var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'center';
var u83 = document.getElementById('u83');

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'center';
var u85 = document.getElementById('u85');

u85.style.cursor = 'pointer';
if (bIE) u85.attachEvent("onclick", Clicku85);
else u85.addEventListener("click", Clicku85, true);
function Clicku85(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('4XL'))) {

ApplyImageAndTextStyles('s', 'u85', 'u86', sJsonu86, false);
ApplyImageAndTextStyles('o', 'u41', 'u42', '', false);
ApplyImageAndTextStyles('o', 'u81', 'u82', '', false);
ApplyImageAndTextStyles('o', 'u73', 'u74', '', false);
ApplyImageAndTextStyles('o', 'u77', 'u78', '', false);
ApplyImageAndTextStyles('o', 'u69', 'u70', '', false);
ApplyImageAndTextStyles('o', 'u65', 'u66', '', false);
ApplyImageAndTextStyles('o', 'u61', 'u62', '', false);
ApplyImageAndTextStyles('o', 'u57', 'u58', '', false);
ApplyImageAndTextStyles('o', 'u53', 'u54', '', false);
ApplyImageAndTextStyles('o', 'u49', 'u50', '', false);
ApplyImageAndTextStyles('o', 'u45', 'u46', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('4XL'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

ApplyImageAndTextStyles('o', 'u41', 'u42', '', false);
ApplyImageAndTextStyles('o', 'u49', 'u50', '', false);
ApplyImageAndTextStyles('o', 'u45', 'u46', '', false);
ApplyImageAndTextStyles('o', 'u53', 'u54', '', false);
ApplyImageAndTextStyles('o', 'u61', 'u62', '', false);
ApplyImageAndTextStyles('o', 'u65', 'u66', '', false);
ApplyImageAndTextStyles('o', 'u69', 'u70', '', false);
ApplyImageAndTextStyles('o', 'u73', 'u74', '', false);
ApplyImageAndTextStyles('o', 'u57', 'u58', '', false);
ApplyImageAndTextStyles('o', 'u77', 'u78', '', false);
ApplyImageAndTextStyles('o', 'u81', 'u82', '', false);
ApplyImageAndTextStyles('s', 'u85', 'u86', sJsonu86, false);
SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$Qty1', PopulateVariables('2'));

}

}

var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'center';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'top';
var u88 = document.getElementById('u88');

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u90 = document.getElementById('u90');

var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u92 = document.getElementById('u92');

var u93 = document.getElementById('u93');

var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'top';
var u95 = document.getElementById('u95');

var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'center';
var u97 = document.getElementById('u97');

u97.style.cursor = 'pointer';
if (bIE) u97.attachEvent("onclick", Clicku97);
else u97.addEventListener("click", Clicku97, true);
function Clicku97(e)
{

if (true) {

	SetPanelStateu15("pd0u15");

	SetPanelVisibilityu93("hidden");

	SetPanelVisibilityu15("");

	MoveWidgetTo('u151',16,300);

}

}

var u98 = document.getElementById('u98');

var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'center';
var u400 = document.getElementById('u400');
gv_vAlignTable['u400'] = 'center';
var u401 = document.getElementById('u401');

var u402 = document.getElementById('u402');
gv_vAlignTable['u402'] = 'center';
var u403 = document.getElementById('u403');

u403.style.cursor = 'pointer';
if (bIE) u403.attachEvent("onclick", Clicku403);
else u403.addEventListener("click", Clicku403, true);
function Clicku403(e)
{

if (true) {

	SetPanelStateu245("pd0u245");

}

}
gv_vAlignTable['u403'] = 'top';
var u404 = document.getElementById('u404');

u404.style.cursor = 'pointer';
if (bIE) u404.attachEvent("onclick", Clicku404);
else u404.addEventListener("click", Clicku404, true);
function Clicku404(e)
{

if (true) {

	SetPanelStateu245("pd1u245");

}

}
gv_vAlignTable['u404'] = 'top';
var u405 = document.getElementById('u405');

u405.style.cursor = 'pointer';
if (bIE) u405.attachEvent("onclick", Clicku405);
else u405.addEventListener("click", Clicku405, true);
function Clicku405(e)
{

if (true) {

	SetPanelStateu245("pd2u245");

}

}
gv_vAlignTable['u405'] = 'top';
var u406 = document.getElementById('u406');

u406.style.cursor = 'pointer';
if (bIE) u406.attachEvent("onclick", Clicku406);
else u406.addEventListener("click", Clicku406, true);
function Clicku406(e)
{

if (true) {

	SetPanelStateu245("pd3u245");

}

}
gv_vAlignTable['u406'] = 'top';
var u407 = document.getElementById('u407');

var u408 = document.getElementById('u408');

var u409 = document.getElementById('u409');
gv_vAlignTable['u409'] = 'top';
var u410 = document.getElementById('u410');

var u411 = document.getElementById('u411');
gv_vAlignTable['u411'] = 'top';
var u412 = document.getElementById('u412');

var u413 = document.getElementById('u413');
gv_vAlignTable['u413'] = 'top';
var u414 = document.getElementById('u414');

var u415 = document.getElementById('u415');
gv_vAlignTable['u415'] = 'top';
var u416 = document.getElementById('u416');

var u417 = document.getElementById('u417');
gv_vAlignTable['u417'] = 'top';
var u418 = document.getElementById('u418');

var u419 = document.getElementById('u419');
gv_vAlignTable['u419'] = 'top';
var u420 = document.getElementById('u420');

var u421 = document.getElementById('u421');
gv_vAlignTable['u421'] = 'top';
var u422 = document.getElementById('u422');

var u423 = document.getElementById('u423');
gv_vAlignTable['u423'] = 'top';
var u424 = document.getElementById('u424');

var u425 = document.getElementById('u425');
gv_vAlignTable['u425'] = 'top';
var u426 = document.getElementById('u426');

var u427 = document.getElementById('u427');
gv_vAlignTable['u427'] = 'top';
var u428 = document.getElementById('u428');

var u429 = document.getElementById('u429');
gv_vAlignTable['u429'] = 'top';
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

var u431 = document.getElementById('u431');
gv_vAlignTable['u431'] = 'top';
var u432 = document.getElementById('u432');

var u433 = document.getElementById('u433');
gv_vAlignTable['u433'] = 'top';
var u434 = document.getElementById('u434');

var u435 = document.getElementById('u435');
gv_vAlignTable['u435'] = 'top';
var u436 = document.getElementById('u436');

var u437 = document.getElementById('u437');
gv_vAlignTable['u437'] = 'top';
var u438 = document.getElementById('u438');

var u439 = document.getElementById('u439');
gv_vAlignTable['u439'] = 'top';
var u440 = document.getElementById('u440');

var u441 = document.getElementById('u441');
gv_vAlignTable['u441'] = 'top';
var u442 = document.getElementById('u442');

var u443 = document.getElementById('u443');
gv_vAlignTable['u443'] = 'top';
var u444 = document.getElementById('u444');

var u445 = document.getElementById('u445');
gv_vAlignTable['u445'] = 'top';
var u446 = document.getElementById('u446');

var u447 = document.getElementById('u447');
gv_vAlignTable['u447'] = 'top';
var u448 = document.getElementById('u448');

var u449 = document.getElementById('u449');
gv_vAlignTable['u449'] = 'top';
var u450 = document.getElementById('u450');

var u451 = document.getElementById('u451');
gv_vAlignTable['u451'] = 'top';
var u452 = document.getElementById('u452');

var u453 = document.getElementById('u453');
gv_vAlignTable['u453'] = 'top';
var u454 = document.getElementById('u454');

var u455 = document.getElementById('u455');
gv_vAlignTable['u455'] = 'top';
var u456 = document.getElementById('u456');

var u457 = document.getElementById('u457');

var u458 = document.getElementById('u458');
gv_vAlignTable['u458'] = 'center';
var u459 = document.getElementById('u459');

var u460 = document.getElementById('u460');
gv_vAlignTable['u460'] = 'center';
var u461 = document.getElementById('u461');

var u462 = document.getElementById('u462');
gv_vAlignTable['u462'] = 'center';
var u463 = document.getElementById('u463');

var u464 = document.getElementById('u464');
gv_vAlignTable['u464'] = 'center';
var u465 = document.getElementById('u465');

var u466 = document.getElementById('u466');

var u467 = document.getElementById('u467');
gv_vAlignTable['u467'] = 'center';
var u468 = document.getElementById('u468');

var u469 = document.getElementById('u469');
gv_vAlignTable['u469'] = 'center';
var u470 = document.getElementById('u470');

var u471 = document.getElementById('u471');
gv_vAlignTable['u471'] = 'center';
var u472 = document.getElementById('u472');

var u473 = document.getElementById('u473');
gv_vAlignTable['u473'] = 'center';
var u474 = document.getElementById('u474');

var u475 = document.getElementById('u475');

var u476 = document.getElementById('u476');
gv_vAlignTable['u476'] = 'center';
var u477 = document.getElementById('u477');

var u478 = document.getElementById('u478');
gv_vAlignTable['u478'] = 'center';
var u479 = document.getElementById('u479');

var u480 = document.getElementById('u480');
gv_vAlignTable['u480'] = 'center';
var u481 = document.getElementById('u481');

var u482 = document.getElementById('u482');
gv_vAlignTable['u482'] = 'center';
var u483 = document.getElementById('u483');
gv_vAlignTable['u483'] = 'top';
var u484 = document.getElementById('u484');
gv_vAlignTable['u484'] = 'top';
var u485 = document.getElementById('u485');
gv_vAlignTable['u485'] = 'top';
var u486 = document.getElementById('u486');
gv_vAlignTable['u486'] = 'top';
var u487 = document.getElementById('u487');

var u488 = document.getElementById('u488');

var u489 = document.getElementById('u489');
gv_vAlignTable['u489'] = 'center';
var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'top';
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

var u497 = document.getElementById('u497');

u497.style.cursor = 'pointer';
if (bIE) u497.attachEvent("onclick", Clicku497);
else u497.addEventListener("click", Clicku497, true);
function Clicku497(e)
{

if (true) {

SetGlobalVariableValue('$Extras', PopulateVariables('1'));

	SetPanelStateu3("pd0u3");

	BringToFront("u0");

	ScrollToWidget('u167', false,true);

}

}

var u498 = document.getElementById('u498');
gv_vAlignTable['u498'] = 'center';
var u499 = document.getElementById('u499');
gv_vAlignTable['u499'] = 'top';
var u504 = document.getElementById('u504');
gv_vAlignTable['u504'] = 'center';
var u505 = document.getElementById('u505');

var u506 = document.getElementById('u506');

var u507 = document.getElementById('u507');
gv_vAlignTable['u507'] = 'center';
var u508 = document.getElementById('u508');
gv_vAlignTable['u508'] = 'top';
var u509 = document.getElementById('u509');
gv_vAlignTable['u509'] = 'top';
var u310 = document.getElementById('u310');

var u311 = document.getElementById('u311');

var u312 = document.getElementById('u312');

var u313 = document.getElementById('u313');

var u314 = document.getElementById('u314');

var u315 = document.getElementById('u315');

var u316 = document.getElementById('u316');

var u317 = document.getElementById('u317');

var u318 = document.getElementById('u318');

var u319 = document.getElementById('u319');

var u514 = document.getElementById('u514');
gv_vAlignTable['u514'] = 'top';
var u515 = document.getElementById('u515');

var u516 = document.getElementById('u516');
gv_vAlignTable['u516'] = 'top';
var u517 = document.getElementById('u517');

var u518 = document.getElementById('u518');
gv_vAlignTable['u518'] = 'top';
var u519 = document.getElementById('u519');

var u320 = document.getElementById('u320');

var u321 = document.getElementById('u321');
gv_vAlignTable['u321'] = 'center';
var u322 = document.getElementById('u322');

var u323 = document.getElementById('u323');
gv_vAlignTable['u323'] = 'center';
var u324 = document.getElementById('u324');

var u325 = document.getElementById('u325');
gv_vAlignTable['u325'] = 'center';
var u326 = document.getElementById('u326');

var u327 = document.getElementById('u327');
gv_vAlignTable['u327'] = 'center';
var u328 = document.getElementById('u328');

var u329 = document.getElementById('u329');

var u520 = document.getElementById('u520');
gv_vAlignTable['u520'] = 'top';
var u523 = document.getElementById('u523');

var u524 = document.getElementById('u524');
gv_vAlignTable['u524'] = 'top';
var u525 = document.getElementById('u525');

var u526 = document.getElementById('u526');
gv_vAlignTable['u526'] = 'top';
var u527 = document.getElementById('u527');

var u528 = document.getElementById('u528');
gv_vAlignTable['u528'] = 'top';
var u529 = document.getElementById('u529');

var u330 = document.getElementById('u330');
gv_vAlignTable['u330'] = 'top';
var u331 = document.getElementById('u331');

var u332 = document.getElementById('u332');
gv_vAlignTable['u332'] = 'top';
var u333 = document.getElementById('u333');

var u334 = document.getElementById('u334');
gv_vAlignTable['u334'] = 'top';
var u335 = document.getElementById('u335');

var u336 = document.getElementById('u336');
gv_vAlignTable['u336'] = 'top';
var u337 = document.getElementById('u337');

var u338 = document.getElementById('u338');
gv_vAlignTable['u338'] = 'top';
var u339 = document.getElementById('u339');

var u530 = document.getElementById('u530');
gv_vAlignTable['u530'] = 'top';
var u534 = document.getElementById('u534');
gv_vAlignTable['u534'] = 'top';
var u535 = document.getElementById('u535');

var u536 = document.getElementById('u536');
gv_vAlignTable['u536'] = 'top';
var u537 = document.getElementById('u537');
gv_vAlignTable['u537'] = 'top';
var u538 = document.getElementById('u538');
gv_vAlignTable['u538'] = 'top';
var u539 = document.getElementById('u539');
gv_vAlignTable['u539'] = 'top';
var u340 = document.getElementById('u340');
gv_vAlignTable['u340'] = 'top';
var u341 = document.getElementById('u341');

var u342 = document.getElementById('u342');
gv_vAlignTable['u342'] = 'top';
var u343 = document.getElementById('u343');

var u344 = document.getElementById('u344');
gv_vAlignTable['u344'] = 'top';
var u345 = document.getElementById('u345');

var u346 = document.getElementById('u346');
gv_vAlignTable['u346'] = 'top';
var u347 = document.getElementById('u347');

var u348 = document.getElementById('u348');
gv_vAlignTable['u348'] = 'top';
var u349 = document.getElementById('u349');

var u540 = document.getElementById('u540');
gv_vAlignTable['u540'] = 'top';
var u544 = document.getElementById('u544');
gv_vAlignTable['u544'] = 'center';
var u545 = document.getElementById('u545');

var u546 = document.getElementById('u546');
gv_vAlignTable['u546'] = 'center';
var u547 = document.getElementById('u547');

var u548 = document.getElementById('u548');

var u549 = document.getElementById('u549');
gv_vAlignTable['u549'] = 'center';
var u350 = document.getElementById('u350');
gv_vAlignTable['u350'] = 'top';
var u351 = document.getElementById('u351');

var u352 = document.getElementById('u352');
gv_vAlignTable['u352'] = 'top';
var u353 = document.getElementById('u353');

var u354 = document.getElementById('u354');
gv_vAlignTable['u354'] = 'top';
var u355 = document.getElementById('u355');

var u356 = document.getElementById('u356');
gv_vAlignTable['u356'] = 'top';
var u357 = document.getElementById('u357');

var u358 = document.getElementById('u358');
gv_vAlignTable['u358'] = 'top';
var u359 = document.getElementById('u359');

var u550 = document.getElementById('u550');
gv_vAlignTable['u550'] = 'top';
var u554 = document.getElementById('u554');

var u555 = document.getElementById('u555');
gv_vAlignTable['u555'] = 'top';
var u556 = document.getElementById('u556');

var u557 = document.getElementById('u557');
gv_vAlignTable['u557'] = 'top';
var u558 = document.getElementById('u558');

var u559 = document.getElementById('u559');
gv_vAlignTable['u559'] = 'top';
var u360 = document.getElementById('u360');
gv_vAlignTable['u360'] = 'top';
var u361 = document.getElementById('u361');

var u362 = document.getElementById('u362');
gv_vAlignTable['u362'] = 'top';
var u363 = document.getElementById('u363');

var u364 = document.getElementById('u364');
gv_vAlignTable['u364'] = 'top';
var u365 = document.getElementById('u365');

var u366 = document.getElementById('u366');
gv_vAlignTable['u366'] = 'top';
var u367 = document.getElementById('u367');

var u368 = document.getElementById('u368');
gv_vAlignTable['u368'] = 'top';
var u369 = document.getElementById('u369');

var u564 = document.getElementById('u564');
gv_vAlignTable['u564'] = 'top';
var u565 = document.getElementById('u565');
gv_vAlignTable['u565'] = 'top';
var u566 = document.getElementById('u566');
gv_vAlignTable['u566'] = 'top';
var u567 = document.getElementById('u567');
gv_vAlignTable['u567'] = 'top';
var u568 = document.getElementById('u568');

u568.style.cursor = 'pointer';
if (bIE) u568.attachEvent("onclick", Clicku568);
else u568.addEventListener("click", Clicku568, true);
function Clicku568(e)
{

if (true) {

SetGlobalVariableValue('$Extras', PopulateVariables('2'));

	SetPanelStateu3("pd0u3");

	SetPanelVisibilityu93("");

	BringToFront("u0");

	SetPanelVisibilityu15("hidden");

	MoveWidgetTo('u151',16,230);

	ScrollToWidget('u167', false,true);

}

}
gv_vAlignTable['u568'] = 'top';
var u569 = document.getElementById('u569');

u569.style.cursor = 'pointer';
if (bIE) u569.attachEvent("onclick", Clicku569);
else u569.addEventListener("click", Clicku569, true);
function Clicku569(e)
{

if (true) {

SetGlobalVariableValue('$Extras', PopulateVariables('2'));

	SetPanelStateu3("pd0u3");

	BringToFront("u0");

	SetPanelVisibilityu15("hidden");

	MoveWidgetTo('u151',16,230);

	ScrollToWidget('u167', false,true);

	SetPanelVisibilityu93("");

}

}

var u370 = document.getElementById('u370');
gv_vAlignTable['u370'] = 'top';
var u371 = document.getElementById('u371');

var u372 = document.getElementById('u372');
gv_vAlignTable['u372'] = 'top';
var u373 = document.getElementById('u373');

var u374 = document.getElementById('u374');
gv_vAlignTable['u374'] = 'top';
var u375 = document.getElementById('u375');

var u376 = document.getElementById('u376');
gv_vAlignTable['u376'] = 'top';
var u377 = document.getElementById('u377');

var u378 = document.getElementById('u378');
gv_vAlignTable['u378'] = 'top';
var u379 = document.getElementById('u379');

var u574 = document.getElementById('u574');
gv_vAlignTable['u574'] = 'top';
var u575 = document.getElementById('u575');

u575.style.cursor = 'pointer';
if (bIE) u575.attachEvent("onclick", Clicku575);
else u575.addEventListener("click", Clicku575, true);
function Clicku575(e)
{

if (true) {

	self.location.href="View.html" + GetQuerystring();

}

}

if (bIE) u575.attachEvent("onmouseover", MouseOveru575);
else u575.addEventListener("mouseover", MouseOveru575, true);
function MouseOveru575(e)
{
if (!IsTrueMouseOver('u575',e)) return;
if (true) {

SetWidgetRichText('u575', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#006699; font-size:9px;">PREVIEW</span></b>'));

}

}

if (bIE) u575.attachEvent("onmouseout", MouseOutu575);
else u575.addEventListener("mouseout", MouseOutu575, true);
function MouseOutu575(e)
{
if (!IsTrueMouseOut('u575',e)) return;
if (true) {

SetWidgetRichText('u575', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006699; font-size:9px;">PREVIEW</span>'));

}

}
gv_vAlignTable['u575'] = 'top';
var u576 = document.getElementById('u576');
gv_vAlignTable['u576'] = 'top';
var u577 = document.getElementById('u577');

u577.style.cursor = 'pointer';
if (bIE) u577.attachEvent("onclick", Clicku577);
else u577.addEventListener("click", Clicku577, true);
function Clicku577(e)
{

if (true) {

	self.location.href="Share.html" + GetQuerystring();

}

}

if (bIE) u577.attachEvent("onmouseover", MouseOveru577);
else u577.addEventListener("mouseover", MouseOveru577, true);
function MouseOveru577(e)
{
if (!IsTrueMouseOver('u577',e)) return;
if (true) {

SetWidgetRichText('u577', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#006699; font-size:9px;">SHARE</span></b>'));

}

}

if (bIE) u577.attachEvent("onmouseout", MouseOutu577);
else u577.addEventListener("mouseout", MouseOutu577, true);
function MouseOutu577(e)
{
if (!IsTrueMouseOut('u577',e)) return;
if (true) {

SetWidgetRichText('u577', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006699; font-size:9px;">SHARE</span>'));

}

}
gv_vAlignTable['u577'] = 'top';
var u578 = document.getElementById('u578');
gv_vAlignTable['u578'] = 'top';
var u579 = document.getElementById('u579');
gv_vAlignTable['u579'] = 'top';
var u380 = document.getElementById('u380');
gv_vAlignTable['u380'] = 'top';
var u381 = document.getElementById('u381');

var u382 = document.getElementById('u382');
gv_vAlignTable['u382'] = 'top';
var u383 = document.getElementById('u383');

var u384 = document.getElementById('u384');
gv_vAlignTable['u384'] = 'top';
var u385 = document.getElementById('u385');

u385.style.cursor = 'pointer';
if (bIE) u385.attachEvent("onclick", Clicku385);
else u385.addEventListener("click", Clicku385, true);
function Clicku385(e)
{

if (true) {

	BringToFront("u0");

	SetPanelStateu3("pd2u3");

}

}

var u386 = document.getElementById('u386');
gv_vAlignTable['u386'] = 'center';
var u387 = document.getElementById('u387');
gv_vAlignTable['u387'] = 'top';
var u388 = document.getElementById('u388');

u388.style.cursor = 'pointer';
if (bIE) u388.attachEvent("onclick", Clicku388);
else u388.addEventListener("click", Clicku388, true);
function Clicku388(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Display participant sheet"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}
gv_vAlignTable['u388'] = 'top';
var u389 = document.getElementById('u389');

var u200 = document.getElementById('u200');

var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'center';
var u202 = document.getElementById('u202');

var u390 = document.getElementById('u390');
gv_vAlignTable['u390'] = 'center';
var u391 = document.getElementById('u391');

var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'top';
var u393 = document.getElementById('u393');
gv_vAlignTable['u393'] = 'center';
var u394 = document.getElementById('u394');

var u395 = document.getElementById('u395');
gv_vAlignTable['u395'] = 'center';
var u396 = document.getElementById('u396');

var u397 = document.getElementById('u397');

var u398 = document.getElementById('u398');
gv_vAlignTable['u398'] = 'center';
var u399 = document.getElementById('u399');

var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'center';
var u211 = document.getElementById('u211');

var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'center';
var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'top';
var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'top';
var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'top';
var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'top';
var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'top';
var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'top';
var u219 = document.getElementById('u219');

u219.style.cursor = 'pointer';
if (bIE) u219.attachEvent("onclick", Clicku219);
else u219.addEventListener("click", Clicku219, true);
function Clicku219(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("This is not enabled in the prototype."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'center';
var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'top';
var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'top';
var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'top';
var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'top';
var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'top';
var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'top';
var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'top';
var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'top';
var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'top';
var u230 = document.getElementById('u230');

var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'center';
var u232 = document.getElementById('u232');

var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'center';
var u234 = document.getElementById('u234');

u234.style.cursor = 'pointer';
if (bIE) u234.attachEvent("onclick", Clicku234);
else u234.addEventListener("click", Clicku234, true);
function Clicku234(e)
{

if (true) {

	BringToFront("u236");

}

}

var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'center';
var u236 = document.getElementById('u236');

var u237 = document.getElementById('u237');

var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'center';
var u239 = document.getElementById('u239');

var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'center';
var u241 = document.getElementById('u241');

var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'center';
var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'top';
var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'top';
var u245 = document.getElementById('u245');

var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'top';
var u247 = document.getElementById('u247');

u247.style.cursor = 'pointer';
if (bIE) u247.attachEvent("onclick", Clicku247);
else u247.addEventListener("click", Clicku247, true);
function Clicku247(e)
{

if (true) {

	self.location.href="Customize.html" + GetQuerystring();

}

}
gv_vAlignTable['u247'] = 'top';
var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'top';
var u249 = document.getElementById('u249');

u249.style.cursor = 'pointer';
if (bIE) u249.attachEvent("onclick", Clicku249);
else u249.addEventListener("click", Clicku249, true);
function Clicku249(e)
{

if (true) {

	SetPanelStateu245("pd2u245");

SetWidgetRichText('u255', PopulateVariables('<span style=" font-family:\'Helvetica\'; font-size:16px;">Sign-up closing date:</span><span style=" font-family:\'Helvetica\'; font-size:13px;">&nbsp; </span><span style=" font-family:\'Helvetica\'; color:#FF0000; font-size:13px;"><b>Wednesday, February 2&nbsp; at 6:15 pm Eastern Time.</span></b>'));

}

}
gv_vAlignTable['u249'] = 'top';
var u250 = document.getElementById('u250');

u250.style.cursor = 'pointer';
if (bIE) u250.attachEvent("onclick", Clicku250);
else u250.addEventListener("click", Clicku250, true);
function Clicku250(e)
{

if (true) {

	self.location.href="Customize.html" + GetQuerystring();

}

}
gv_vAlignTable['u250'] = 'top';
var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'top';
var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'top';
var u253 = document.getElementById('u253');

u253.style.cursor = 'pointer';
if (bIE) u253.attachEvent("onclick", Clicku253);
else u253.addEventListener("click", Clicku253, true);
function Clicku253(e)
{

if (true) {

	SetPanelStateu245("pd2u245");

}

}
gv_vAlignTable['u253'] = 'top';
var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'top';
var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'top';
var u256 = document.getElementById('u256');

u256.style.cursor = 'pointer';
if (bIE) u256.attachEvent("onclick", Clicku256);
else u256.addEventListener("click", Clicku256, true);
function Clicku256(e)
{

if (true) {

	SetPanelStateu245("pd1u245");

}

}
gv_vAlignTable['u256'] = 'top';
var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'top';
var u258 = document.getElementById('u258');

u258.style.cursor = 'pointer';
if (bIE) u258.attachEvent("onclick", Clicku258);
else u258.addEventListener("click", Clicku258, true);
function Clicku258(e)
{

if (true) {

	self.location.href="Customize.html" + GetQuerystring();

}

}
gv_vAlignTable['u258'] = 'top';
var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'top';
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
gv_vAlignTable['u7'] = 'top';
var u8 = document.getElementById('u8');

u8.style.cursor = 'pointer';
if (bIE) u8.attachEvent("onclick", Clicku8);
else u8.addEventListener("click", Clicku8, true);
function Clicku8(e)
{

if (true) {

	BringToFront("u236");

}

}

var u260 = document.getElementById('u260');

u260.style.cursor = 'pointer';
if (bIE) u260.attachEvent("onclick", Clicku260);
else u260.addEventListener("click", Clicku260, true);
function Clicku260(e)
{

if (true) {

	self.location.href="Customize.html" + GetQuerystring();

}

}
gv_vAlignTable['u260'] = 'top';
var u261 = document.getElementById('u261');
gv_vAlignTable['u261'] = 'top';
var u262 = document.getElementById('u262');

var u263 = document.getElementById('u263');
gv_vAlignTable['u263'] = 'top';
var u264 = document.getElementById('u264');

var u265 = document.getElementById('u265');
gv_vAlignTable['u265'] = 'center';
var u266 = document.getElementById('u266');

var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'center';
var u268 = document.getElementById('u268');

var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'center';
if (window.OnLoad) OnLoad();
