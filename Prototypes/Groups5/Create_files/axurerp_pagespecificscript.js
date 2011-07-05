
var PageName = 'Create';
var PageId = 'p6748a06179c64d9ba1a9e13e708ef92f'
var PageUrl = 'Create.html'
document.title = 'Create';

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

if ((GetGlobalVariableValue('$PageView')) == (PopulateVariables('2'))) {

	SetPanelStateu390("pd1u390");

SetWidgetFormText('u570', GetGlobalVariableValue('$YourName'));

SetWidgetFormText('u569', GetGlobalVariableValue('$yourEmail'));

SetWidgetRichText('u372', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#003366; font-size:19px;">Customize [[GroupName]] Sign-Up Sheet&nbsp; &nbsp;&nbsp; </span><span style=" font-family:\'Helvetica\'; color:#006699; font-size:13px;"><u>Change Group Name</u></span>'));

SetWidgetFormText('u422', GetGlobalVariableValue('$closeDate'));

SetWidgetFormText('u432', GetGlobalVariableValue('$groupPrice'));

SetWidgetFormText('u444', GetGlobalVariableValue('$paymtInfo'));

SetWidgetFormText('u452', GetGlobalVariableValue('$dlvyInfo'));

SetWidgetFormText('u503', GetGlobalVariableValue('$Welcome'));

SetWidgetRichText('u417', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#006699; font-size:13px;">You are in the Organizer\'s View of the [[GroupName]] Sign-Up Sheet</span></b>'));

}
else
if (true) {

SetWidgetFormText('u570', GetGlobalVariableValue('$YourName'));

SetWidgetFormText('u569', GetGlobalVariableValue('$yourEmail'));

SetWidgetRichText('u372', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#003366; font-size:19px;">Customize [[GroupName]] Sign-Up Sheet&nbsp; &nbsp;&nbsp; </span><span style=" font-family:\'Helvetica\'; color:#006699; font-size:13px;"><u>Change Group Name</u></span>'));

SetWidgetFormText('u422', GetGlobalVariableValue('$closeDate'));

SetWidgetFormText('u432', GetGlobalVariableValue('$groupPrice'));

SetWidgetFormText('u444', GetGlobalVariableValue('$paymtInfo'));

SetWidgetFormText('u452', GetGlobalVariableValue('$dlvyInfo'));

SetWidgetFormText('u503', GetGlobalVariableValue('$Welcome'));

}

}

eval(GetDynamicPanelScript('u543', 2));

eval(GetDynamicPanelScript('u475', 1));

eval(GetDynamicPanelScript('u263', 1));

eval(GetDynamicPanelScript('u269', 1));

eval(GetDynamicPanelScript('u371', 2));

eval(GetDynamicPanelScript('u446', 1));

eval(GetDynamicPanelScript('u447', 1));

eval(GetDynamicPanelScript('u28', 4));

eval(GetDynamicPanelScript('u234', 1));

eval(GetDynamicPanelScript('u163', 2));

eval(GetDynamicPanelScript('u482', 1));

eval(GetDynamicPanelScript('u418', 1));

eval(GetDynamicPanelScript('u69', 3));

eval(GetDynamicPanelScript('u273', 1));

eval(GetDynamicPanelScript('u277', 1));

eval(GetDynamicPanelScript('u455', 1));

eval(GetDynamicPanelScript('u538', 2));

eval(GetDynamicPanelScript('u171', 1));

eval(GetDynamicPanelScript('u248', 1));

eval(GetDynamicPanelScript('u425', 1));

eval(GetDynamicPanelScript('u427', 2));

eval(GetDynamicPanelScript('u0', 1));

eval(GetDynamicPanelScript('u3', 7));

eval(GetDynamicPanelScript('u390', 2));

eval(GetDynamicPanelScript('u11', 4));

eval(GetDynamicPanelScript('u361', 1));

eval(GetDynamicPanelScript('u437', 1));

eval(GetDynamicPanelScript('u438', 1));

eval(GetDynamicPanelScript('u19', 2));

var u270 = document.getElementById('u270');

var u271 = document.getElementById('u271');
gv_vAlignTable['u271'] = 'center';
var u272 = document.getElementById('u272');
gv_vAlignTable['u272'] = 'top';
var u273 = document.getElementById('u273');

var u274 = document.getElementById('u274');

var u275 = document.getElementById('u275');
gv_vAlignTable['u275'] = 'center';
var u276 = document.getElementById('u276');
gv_vAlignTable['u276'] = 'top';
var u277 = document.getElementById('u277');

var u278 = document.getElementById('u278');

var u279 = document.getElementById('u279');
gv_vAlignTable['u279'] = 'center';
var u280 = document.getElementById('u280');
gv_vAlignTable['u280'] = 'top';
var u281 = document.getElementById('u281');
gv_vAlignTable['u281'] = 'top';
var u282 = document.getElementById('u282');

var u283 = document.getElementById('u283');
gv_vAlignTable['u283'] = 'top';
var u284 = document.getElementById('u284');
gv_vAlignTable['u284'] = 'top';
var u285 = document.getElementById('u285');

var u286 = document.getElementById('u286');
gv_vAlignTable['u286'] = 'center';
var u287 = document.getElementById('u287');

var u288 = document.getElementById('u288');
gv_vAlignTable['u288'] = 'center';
var u289 = document.getElementById('u289');

var u490 = document.getElementById('u490');

var u491 = document.getElementById('u491');
gv_vAlignTable['u491'] = 'center';
var u492 = document.getElementById('u492');
gv_vAlignTable['u492'] = 'top';
var u493 = document.getElementById('u493');

u493.style.cursor = 'pointer';
if (bIE) u493.attachEvent("onclick", Clicku493);
else u493.addEventListener("click", Clicku493, true);
function Clicku493(e)
{

if (((GetCheckState('u493')) == (false)) && ((GetCheckState('u514')) == (false))) {

SetGlobalVariableValue('$emaiNew', PopulateVariables('Do not send email notifications.'));

;

}
else
if (((GetCheckState('u493')) == (true)) && ((GetCheckState('u514')) == (true))) {

SetGlobalVariableValue('$emaiNew', PopulateVariables('Each time someone signs up and when my sign-up sheet closes.'));

;

}
else
if (((GetCheckState('u493')) == (true)) && ((GetCheckState('u514')) == (false))) {

SetGlobalVariableValue('$emaiNew', PopulateVariables('Each time someone  signs up.'));

}
else
if (((GetCheckState('u493')) == (false)) && ((GetCheckState('u514')) == (true))) {

SetGlobalVariableValue('$emaiNew', PopulateVariables('When my sign-up sheet closes.'));

}

}

var u494 = document.getElementById('u494');
gv_vAlignTable['u494'] = 'top';
var u495 = document.getElementById('u495');

var u496 = document.getElementById('u496');
gv_vAlignTable['u496'] = 'top';
var u100 = document.getElementById('u100');

u100.style.cursor = 'pointer';
if (bIE) u100.attachEvent("onclick", Clicku100);
else u100.addEventListener("click", Clicku100, true);
function Clicku100(e)
{

if (true) {

	SetPanelStateu69("pd0u69");

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/31/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Thursday, March 31, 2011'));

SetWidgetFormText('u123', GetGlobalVariableValue('$dlvryDate'));

}

}

var u101 = document.getElementById('u101');

u101.style.cursor = 'pointer';
if (bIE) u101.attachEvent("onclick", Clicku101);
else u101.addEventListener("click", Clicku101, true);
function Clicku101(e)
{

if (true) {

	SetPanelStateu69("pd0u69");

SetGlobalVariableValue('$eventDate', PopulateVariables('Tuesday, March 29'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/29/2011'));

SetWidgetFormText('u123', GetGlobalVariableValue('$dlvryDate'));

}

}

var u102 = document.getElementById('u102');

u102.style.cursor = 'pointer';
if (bIE) u102.attachEvent("onclick", Clicku102);
else u102.addEventListener("click", Clicku102, true);
function Clicku102(e)
{

if (true) {

	SetPanelStateu69("pd0u69");

SetGlobalVariableValue('$eventDate', PopulateVariables('Wednesday, March 16, 2011'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/16/2011'));

SetWidgetFormText('u123', GetGlobalVariableValue('$dlvryDate'));

}

}

var u103 = document.getElementById('u103');

u103.style.cursor = 'pointer';
if (bIE) u103.attachEvent("onclick", Clicku103);
else u103.addEventListener("click", Clicku103, true);
function Clicku103(e)
{

if (true) {

	SetPanelStateu69("pd0u69");

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/17/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Thursday, March 17, 2011'));

SetWidgetFormText('u123', GetGlobalVariableValue('$dlvryDate'));

}

}

var u104 = document.getElementById('u104');

u104.style.cursor = 'pointer';
if (bIE) u104.attachEvent("onclick", Clicku104);
else u104.addEventListener("click", Clicku104, true);
function Clicku104(e)
{

if (true) {

	SetPanelStateu69("pd0u69");

SetGlobalVariableValue('$eventDate', PopulateVariables('Friday, March 18, 2011'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/18/2011'));

SetWidgetFormText('u123', GetGlobalVariableValue('$dlvryDate'));

}

}

var u105 = document.getElementById('u105');

u105.style.cursor = 'pointer';
if (bIE) u105.attachEvent("onclick", Clicku105);
else u105.addEventListener("click", Clicku105, true);
function Clicku105(e)
{

if (true) {

	SetPanelStateu69("pd0u69");

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/19/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Saturday, March 19, 2011'));

SetWidgetFormText('u123', GetGlobalVariableValue('$dlvryDate'));

}

}

var u106 = document.getElementById('u106');

u106.style.cursor = 'pointer';
if (bIE) u106.attachEvent("onclick", Clicku106);
else u106.addEventListener("click", Clicku106, true);
function Clicku106(e)
{

if (true) {

	SetPanelStateu69("pd0u69");

SetGlobalVariableValue('$eventDate', PopulateVariables('Sunday, March 13, 2011'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/13/2011'));

SetWidgetFormText('u123', GetGlobalVariableValue('$dlvryDate'));

}

}

var u107 = document.getElementById('u107');

u107.style.cursor = 'pointer';
if (bIE) u107.attachEvent("onclick", Clicku107);
else u107.addEventListener("click", Clicku107, true);
function Clicku107(e)
{

if (true) {

	SetPanelStateu69("pd0u69");

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/14/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Monday, March 14, 2011'));

SetWidgetFormText('u123', GetGlobalVariableValue('$dlvryDate'));

}

}

var u108 = document.getElementById('u108');

u108.style.cursor = 'pointer';
if (bIE) u108.attachEvent("onclick", Clicku108);
else u108.addEventListener("click", Clicku108, true);
function Clicku108(e)
{

if (true) {

	SetPanelStateu69("pd0u69");

SetGlobalVariableValue('$eventDate', PopulateVariables('Tuesday, March 15, 2011'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/15/2011'));

SetWidgetFormText('u123', GetGlobalVariableValue('$dlvryDate'));

}

}

var u109 = document.getElementById('u109');

u109.style.cursor = 'pointer';
if (bIE) u109.attachEvent("onclick", Clicku109);
else u109.addEventListener("click", Clicku109, true);
function Clicku109(e)
{

if (true) {

	SetPanelStateu69("pd0u69");

SetGlobalVariableValue('$eventDate', PopulateVariables('Wednesday, March 9, 2011'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/09/2011'));

SetWidgetFormText('u123', GetGlobalVariableValue('$dlvryDate'));

}

}

var u297 = document.getElementById('u297');
gv_vAlignTable['u297'] = 'top';
var u298 = document.getElementById('u298');

var u299 = document.getElementById('u299');
gv_vAlignTable['u299'] = 'center';
var u500 = document.getElementById('u500');

var u392 = document.getElementById('u392');
gv_vAlignTable['u392'] = 'center';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u110 = document.getElementById('u110');

u110.style.cursor = 'pointer';
if (bIE) u110.attachEvent("onclick", Clicku110);
else u110.addEventListener("click", Clicku110, true);
function Clicku110(e)
{

if (true) {

	SetPanelStateu69("pd0u69");

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/10/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Thursday, March 10, 2011'));

SetWidgetFormText('u123', GetGlobalVariableValue('$dlvryDate'));

}

}

var u111 = document.getElementById('u111');

u111.style.cursor = 'pointer';
if (bIE) u111.attachEvent("onclick", Clicku111);
else u111.addEventListener("click", Clicku111, true);
function Clicku111(e)
{

if (true) {

	SetPanelStateu69("pd0u69");

SetGlobalVariableValue('$eventDate', PopulateVariables('Friday, March 11, 2011'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/11/2011'));

SetWidgetFormText('u123', GetGlobalVariableValue('$dlvryDate'));

}

}

var u112 = document.getElementById('u112');

u112.style.cursor = 'pointer';
if (bIE) u112.attachEvent("onclick", Clicku112);
else u112.addEventListener("click", Clicku112, true);
function Clicku112(e)
{

if (true) {

	SetPanelStateu69("pd0u69");

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/12/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Saturday, March 12, 2011'));

SetWidgetFormText('u123', GetGlobalVariableValue('$dlvryDate'));

}

}

var u113 = document.getElementById('u113');

u113.style.cursor = 'pointer';
if (bIE) u113.attachEvent("onclick", Clicku113);
else u113.addEventListener("click", Clicku113, true);
function Clicku113(e)
{

if (true) {

	SetPanelStateu69("pd0u69");

SetGlobalVariableValue('$eventDate', PopulateVariables('Sunday, March 6, 2011`'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/06/2011'));

SetWidgetFormText('u123', GetGlobalVariableValue('$dlvryDate'));

}

}

var u114 = document.getElementById('u114');

u114.style.cursor = 'pointer';
if (bIE) u114.attachEvent("onclick", Clicku114);
else u114.addEventListener("click", Clicku114, true);
function Clicku114(e)
{

if (true) {

	SetPanelStateu69("pd0u69");

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/07/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Monday, March 7, 2011'));

SetWidgetFormText('u123', GetGlobalVariableValue('$dlvryDate'));

}

}

var u115 = document.getElementById('u115');

u115.style.cursor = 'pointer';
if (bIE) u115.attachEvent("onclick", Clicku115);
else u115.addEventListener("click", Clicku115, true);
function Clicku115(e)
{

if (true) {

	SetPanelStateu69("pd0u69");

SetGlobalVariableValue('$eventDate', PopulateVariables('Tuesday, March 8, 2011'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/08/2011'));

SetWidgetFormText('u123', GetGlobalVariableValue('$dlvryDate'));

}

}

var u116 = document.getElementById('u116');

u116.style.cursor = 'pointer';
if (bIE) u116.attachEvent("onclick", Clicku116);
else u116.addEventListener("click", Clicku116, true);
function Clicku116(e)
{

if (true) {

	SetPanelStateu69("pd0u69");

SetGlobalVariableValue('$eventDate', PopulateVariables('Wednesday, March 2, 2011'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/02/2011'));

SetWidgetFormText('u123', GetGlobalVariableValue('$dlvryDate'));

}

}

var u117 = document.getElementById('u117');

u117.style.cursor = 'pointer';
if (bIE) u117.attachEvent("onclick", Clicku117);
else u117.addEventListener("click", Clicku117, true);
function Clicku117(e)
{

if (true) {

	SetPanelStateu69("pd0u69");

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/03/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Thursday, March 3, 2011'));

SetWidgetFormText('u123', GetGlobalVariableValue('$dlvryDate'));

}

}

var u118 = document.getElementById('u118');

u118.style.cursor = 'pointer';
if (bIE) u118.attachEvent("onclick", Clicku118);
else u118.addEventListener("click", Clicku118, true);
function Clicku118(e)
{

if (true) {

	SetPanelStateu69("pd0u69");

SetGlobalVariableValue('$eventDate', PopulateVariables('Friday, March 4, 2011'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/04/2011'));

SetWidgetFormText('u123', GetGlobalVariableValue('$dlvryDate'));

}

}

var u119 = document.getElementById('u119');

u119.style.cursor = 'pointer';
if (bIE) u119.attachEvent("onclick", Clicku119);
else u119.addEventListener("click", Clicku119, true);
function Clicku119(e)
{

if (true) {

	SetPanelStateu69("pd0u69");

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/5/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Saturday, March 05, 2011'));

SetWidgetFormText('u123', GetGlobalVariableValue('$dlvryDate'));

}

}

var u510 = document.getElementById('u510');
gv_vAlignTable['u510'] = 'center';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u34 = document.getElementById('u34');

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u120 = document.getElementById('u120');

u120.style.cursor = 'pointer';
if (bIE) u120.attachEvent("onclick", Clicku120);
else u120.addEventListener("click", Clicku120, true);
function Clicku120(e)
{

if (true) {

	SetPanelStateu69("pd0u69");

SetGlobalVariableValue('$eventDate', PopulateVariables('Tuesday, March 1, 2011'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/01/2011'));

SetWidgetFormText('u123', GetGlobalVariableValue('$dlvryDate'));

}

}

var u121 = document.getElementById('u121');

u121.style.cursor = 'pointer';
if (bIE) u121.attachEvent("onclick", Clicku121);
else u121.addEventListener("click", Clicku121, true);
function Clicku121(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("This is not working in the prototype"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'top';
var u123 = document.getElementById('u123');

u123.style.cursor = 'pointer';
if (bIE) u123.attachEvent("onclick", Clicku123);
else u123.addEventListener("click", Clicku123, true);
function Clicku123(e)
{

if (true) {

SetWidgetFormText('u123', PopulateVariables(''));

	SetPanelStateu69("pd1u69");

	BringToFront("u11");

}

}

var u124 = document.getElementById('u124');

u124.style.cursor = 'pointer';
if (bIE) u124.attachEvent("onclick", Clicku124);
else u124.addEventListener("click", Clicku124, true);
function Clicku124(e)
{

if (true) {

	SetPanelStateu11("pd3u11");

SetWidgetRichText('u139', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#FF6600; font-size:16px;">Order dates for delivery to ZIP/Postal [[ZIP]] by Wednesday, March 16.</span></b>'));

SetGlobalVariableValue('$OrderExDate', PopulateVariables('Wednesday, March 2'));

SetGlobalVariableValue('$closeDate', PopulateVariables('02/28/2011'));

}

}

var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'center';
var u126 = document.getElementById('u126');

u126.style.cursor = 'pointer';
if (bIE) u126.attachEvent("onclick", Clicku126);
else u126.addEventListener("click", Clicku126, true);
function Clicku126(e)
{

if (true) {

	BringToFront("u361");

SetWidgetRichText('u535', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will be available until 11:59 pm Eastern Time on the date you choose.&nbsp; <br>After the close date participants can see your sheet but cannot sign up online. <br><br>Click &quot;Help me choose a date&quot; to check your last date to get FREE standard shipping.</span>'));

}

}
gv_vAlignTable['u126'] = 'top';
var u127 = document.getElementById('u127');

var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'center';
var u129 = document.getElementById('u129');

var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'center';
var u131 = document.getElementById('u131');

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'center';
var u133 = document.getElementById('u133');

var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'center';
var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'top';
var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'top';
var u137 = document.getElementById('u137');

var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'center';
var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'top';
var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'top';
var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'top';
var u143 = document.getElementById('u143');

u143.style.cursor = 'pointer';
if (bIE) u143.attachEvent("onclick", Clicku143);
else u143.addEventListener("click", Clicku143, true);
function Clicku143(e)
{

if (true) {

	SetPanelStateu11("pd2u11");

}

}
gv_vAlignTable['u143'] = 'top';
var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'top';
var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'top';
var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'top';
var u147 = document.getElementById('u147');

u147.style.cursor = 'pointer';
if (bIE) u147.attachEvent("onclick", Clicku147);
else u147.addEventListener("click", Clicku147, true);
function Clicku147(e)
{

if (((GetSelectedOption('u153')) == (PopulateVariables('1'))) && ((GetSelectedOption('u147')) == (PopulateVariables('FREE Standard delivery')))) {

SetWidgetRichText('u150', PopulateVariables('<span style=" font-family:\'Arial\'; font-size:13px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; Sign up would close on&nbsp; </span><span style=" font-family:\'Arial\'; color:#FF6600; font-size:13px;">Tuesday, March 1</span>'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Tuesday, March 1'));

SetGlobalVariableValue('$closeDate', PopulateVariables('03/01/2011'));

}
else
if (((GetSelectedOption('u147')) == (PopulateVariables('FREE Standard delivery'))) && ((GetSelectedOption('u153')) == (PopulateVariables('2')))) {

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Monday, February 28'));

SetWidgetRichText('u150', PopulateVariables('<span style=" font-family:\'Arial\'; font-size:13px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; Sign up would close on&nbsp; </span><span style=" font-family:\'Arial\'; color:#FF6600; font-size:13px;">Monday, February 28</span>'));

SetGlobalVariableValue('$closeDate', PopulateVariables('02/28/2011'));

}
else
if (((GetSelectedOption('u147')) == (PopulateVariables(' Rush delivery '))) && ((GetSelectedOption('u153')) == (PopulateVariables('2')))) {

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Monday, March 7'));

SetWidgetRichText('u150', PopulateVariables('<span style=" font-family:\'Arial\'; font-size:13px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; Sign up would close on&nbsp; </span><span style=" font-family:\'Arial\'; color:#FF6600; font-size:13px;">Monday, March 7</span>'));

SetGlobalVariableValue('$closeDate', PopulateVariables('03/07/2011'));

}
else
if (((GetSelectedOption('u147')) == (PopulateVariables(' Rush delivery '))) && ((GetSelectedOption('u153')) == (PopulateVariables('1')))) {

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Tuesday, March 8'));

SetWidgetRichText('u150', PopulateVariables('<span style=" font-family:\'Arial\'; font-size:13px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; Sign up would close on&nbsp; </span><span style=" font-family:\'Arial\'; color:#FF6600; font-size:13px;">Tuesday, March 8</span>'));

SetGlobalVariableValue('$closeDate', PopulateVariables('03/08/2011'));

}

}

var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'top';
var u149 = document.getElementById('u149');

var u501 = document.getElementById('u501');
gv_vAlignTable['u501'] = 'center';
var u502 = document.getElementById('u502');
gv_vAlignTable['u502'] = 'top';
var u503 = document.getElementById('u503');

var u10 = document.getElementById('u10');

var u11 = document.getElementById('u11');

var u12 = document.getElementById('u12');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u14 = document.getElementById('u14');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'top';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'top';
var u18 = document.getElementById('u18');

u18.style.cursor = 'pointer';
if (bIE) u18.attachEvent("onclick", Clicku18);
else u18.addEventListener("click", Clicku18, true);
function Clicku18(e)
{

if (true) {

SetWidgetFormText('u18', PopulateVariables(''));

	SetPanelStateu19("pd1u19");

	BringToFront("u19");

}

}

var u19 = document.getElementById('u19');

var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'center';
var u151 = document.getElementById('u151');

u151.style.cursor = 'pointer';
if (bIE) u151.attachEvent("onclick", Clicku151);
else u151.addEventListener("click", Clicku151, true);
function Clicku151(e)
{

if (true) {

SetWidgetFormText('u422', GetGlobalVariableValue('$closeDate'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Monday, February 28, 2011'));

SetWidgetRichText('u535', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will be available until 11:59 pm Eastern Time [[CloseExDate]].&nbsp; After the close date participants will see your sheet but will not be able to sign up online. </span>'));

SetWidgetRichText('u560', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#FF6600; font-size:11px;">2 week FREE delivery to [[ZIP]] by Wednesday, March 16</span></b>'));

	BringToFront("u361");

	SetPanelStateu0("pd0u0");

	SetPanelStateu543("pd1u543");

	SetPanelVisibilityu543("");

}

}

var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'center';
var u153 = document.getElementById('u153');

u153.style.cursor = 'pointer';
if (bIE) u153.attachEvent("onclick", Clicku153);
else u153.addEventListener("click", Clicku153, true);
function Clicku153(e)
{

if (((GetSelectedOption('u153')) == (PopulateVariables('1'))) && ((GetSelectedOption('u147')) == (PopulateVariables('FREE Standard delivery')))) {

SetGlobalVariableValue('$closeDate', PopulateVariables('03/01/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Tuesday, March 1'));

SetGlobalVariableValue('$OrderExDate', PopulateVariables('Wednesday, March 2'));

SetWidgetRichText('u150', PopulateVariables('<span style=" font-family:\'Arial\'; font-size:13px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; Sign up would close on&nbsp; </span><span style=" font-family:\'Arial\'; color:#FF6600; font-size:13px;">[[CloseExDate]]</span>'));

}
else
if (((GetSelectedOption('u153')) == (PopulateVariables('2'))) && ((GetSelectedOption('u147')) == (PopulateVariables('FREE Standard delivery')))) {

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Monday, February 28'));

SetGlobalVariableValue('$closeDate', PopulateVariables('02/28/2011'));

SetGlobalVariableValue('$OrderExDate', PopulateVariables('Wednesday, March 2'));

SetWidgetRichText('u150', PopulateVariables('<span style=" font-family:\'Arial\'; font-size:13px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; Sign up would close on&nbsp; </span><span style=" font-family:\'Arial\'; color:#FF6600; font-size:13px;">[[CloseExDate]]</span>'));

}
else
if (((GetSelectedOption('u153')) == (PopulateVariables('2'))) && ((GetSelectedOption('u147')) == (PopulateVariables(' Rush delivery ')))) {

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Monday, March 7'));

SetGlobalVariableValue('$closeDate', PopulateVariables('03/07/2011'));

SetGlobalVariableValue('$OrderExDate', PopulateVariables('Wednesday, March 9'));

SetWidgetRichText('u150', PopulateVariables('<span style=" font-family:\'Arial\'; font-size:13px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; Sign up would close on&nbsp; </span><span style=" font-family:\'Arial\'; color:#FF6600; font-size:13px;">[[CloseExDate]]</span>'));

}
else
if (((GetSelectedOption('u153')) == (PopulateVariables('1'))) && ((GetSelectedOption('u147')) == (PopulateVariables(' Rush delivery ')))) {

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Tuesday, March 8'));

SetGlobalVariableValue('$closeDate', PopulateVariables('03/08/2011'));

SetGlobalVariableValue('$OrderExDate', PopulateVariables('Wednesday, March 9'));

SetWidgetRichText('u150', PopulateVariables('<span style=" font-family:\'Arial\'; font-size:13px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; Sign up would close on&nbsp; </span><span style=" font-family:\'Arial\'; color:#FF6600; font-size:13px;">[[CloseExDate]]</span>'));

}

}

var u154 = document.getElementById('u154');

u154.style.cursor = 'pointer';
if (bIE) u154.attachEvent("onclick", Clicku154);
else u154.addEventListener("click", Clicku154, true);
function Clicku154(e)
{

if (true) {

	BringToFront("u361");

SetWidgetRichText('u535', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will be available until 11:59 pm Eastern Time on the date you choose.&nbsp; <br>After the close date participants can see your sheet but cannot sign up online. <br><br>Click &quot;Help me choose a date&quot; to check your last date to get FREE standard shipping.</span>'));

}

}
gv_vAlignTable['u154'] = 'top';
var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'top';
var u156 = document.getElementById('u156');

var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'center';
var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'top';
var u159 = document.getElementById('u159');

var u511 = document.getElementById('u511');

var u512 = document.getElementById('u512');
gv_vAlignTable['u512'] = 'center';
var u513 = document.getElementById('u513');
gv_vAlignTable['u513'] = 'top';
var u20 = document.getElementById('u20');

u20.style.cursor = 'pointer';
if (bIE) u20.attachEvent("onclick", Clicku20);
else u20.addEventListener("click", Clicku20, true);
function Clicku20(e)
{

if ((GetWidgetFormText('u18')) == (PopulateVariables('04/05/2011'))) {

	SetPanelStateu11("pd0u11");

	SetPanelStateu28("pd3u28");

	SetPanelStateu19("pd0u19");

	BringToFront("u28");

}
else
if ((GetWidgetFormText('u18')) == (PopulateVariables('04/08/2011'))) {

	SetPanelStateu11("pd0u11");

	SetPanelStateu28("pd2u28");

	SetPanelStateu19("pd0u19");

	BringToFront("u28");

}
else
if ((GetWidgetFormText('u18')) == (PopulateVariables('04/22/2011'))) {

	SetPanelStateu11("pd0u11");

	SetPanelStateu28("pd1u28");

	SetPanelStateu19("pd0u19");

	BringToFront("u28");

}

}

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u22 = document.getElementById('u22');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u24 = document.getElementById('u24');

u24.style.cursor = 'pointer';
if (bIE) u24.attachEvent("onclick", Clicku24);
else u24.addEventListener("click", Clicku24, true);
function Clicku24(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

	SetPanelStateu28("pd0u28");

SetWidgetFormText('u18', PopulateVariables('04/08/2011'));

	BringToFront("u28");

}

}

var u25 = document.getElementById('u25');

u25.style.cursor = 'pointer';
if (bIE) u25.attachEvent("onclick", Clicku25);
else u25.addEventListener("click", Clicku25, true);
function Clicku25(e)
{

if (true) {

	SetPanelStateu28("pd0u28");

	SetPanelStateu19("pd0u19");

	BringToFront("u28");

}

}

var u26 = document.getElementById('u26');

u26.style.cursor = 'pointer';
if (bIE) u26.attachEvent("onclick", Clicku26);
else u26.addEventListener("click", Clicku26, true);
function Clicku26(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

	SetPanelStateu28("pd0u28");

	BringToFront("u28");

SetWidgetFormText('u18', PopulateVariables('04/05/2011'));

}

}

var u27 = document.getElementById('u27');

u27.style.cursor = 'pointer';
if (bIE) u27.attachEvent("onclick", Clicku27);
else u27.addEventListener("click", Clicku27, true);
function Clicku27(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

	SetPanelStateu28("pd0u28");

SetWidgetFormText('u18', PopulateVariables('04/22/2011'));

	BringToFront("u28");

}

}

var u28 = document.getElementById('u28');

var u29 = document.getElementById('u29');

u29.style.cursor = 'pointer';
if (bIE) u29.attachEvent("onclick", Clicku29);
else u29.addEventListener("click", Clicku29, true);
function Clicku29(e)
{

if (true) {

	BringToFront("u361");

	SetPanelStateu3("pd0u3");

	SetPanelStateu28("pd0u28");

SetWidgetFormText('u18', PopulateVariables('mm/dd/yyyy'));

}

}
gv_vAlignTable['u29'] = 'top';
var u160 = document.getElementById('u160');

u160.style.cursor = 'pointer';
if (bIE) u160.attachEvent("onclick", Clicku160);
else u160.addEventListener("click", Clicku160, true);
function Clicku160(e)
{

if (true) {

	BringToFront("u361");

}

}

var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'center';
var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'top';
var u163 = document.getElementById('u163');

var u164 = document.getElementById('u164');

if (bIE) u164.attachEvent("onblur", LostFocusu164);
else u164.addEventListener("blur", LostFocusu164, true);
function LostFocusu164(e)
{

if (true) {

SetGlobalVariableValue('$yourEmail', GetWidgetFormText('u164'));

}

}

var u165 = document.getElementById('u165');

u165.style.cursor = 'pointer';
if (bIE) u165.attachEvent("onclick", Clicku165);
else u165.addEventListener("click", Clicku165, true);
function Clicku165(e)
{

if (true) {

	SetPanelStateu163("pd1u163");

	SetPanelVisibilityu171("");

SetGlobalVariableValue('$yourEmail', GetWidgetFormText('u164'));

SetWidgetRichText('u169', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">[[yourEmail]]</span>'));

}

}

var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'center';
var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'top';
var u168 = document.getElementById('u168');

u168.style.cursor = 'pointer';
if (bIE) u168.attachEvent("onclick", Clicku168);
else u168.addEventListener("click", Clicku168, true);
function Clicku168(e)
{

if (true) {

	SetPanelStateu163("pd0u163");

	SetPanelVisibilityu171("hidden");

SetWidgetFormText('u164', GetGlobalVariableValue('$yourEmail'));

}

}
gv_vAlignTable['u168'] = 'top';
var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'top';
var u521 = document.getElementById('u521');
gv_vAlignTable['u521'] = 'top';
var u522 = document.getElementById('u522');
gv_vAlignTable['u522'] = 'top';
var u203 = document.getElementById('u203');

var u30 = document.getElementById('u30');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'top';
var u207 = document.getElementById('u207');

var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'top';
var u209 = document.getElementById('u209');

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'top';
var u171 = document.getElementById('u171');

var u172 = document.getElementById('u172');

var u173 = document.getElementById('u173');

var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'top';
var u175 = document.getElementById('u175');

var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'top';
var u177 = document.getElementById('u177');

var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'top';
var u179 = document.getElementById('u179');

var u531 = document.getElementById('u531');

var u532 = document.getElementById('u532');
gv_vAlignTable['u532'] = 'center';
var u533 = document.getElementById('u533');

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u43 = document.getElementById('u43');

u43.style.cursor = 'pointer';
if (bIE) u43.attachEvent("onclick", Clicku43);
else u43.addEventListener("click", Clicku43, true);
function Clicku43(e)
{

if (true) {

	BringToFront("u361");

	SetPanelStateu3("pd0u3");

	SetPanelStateu28("pd0u28");

SetWidgetFormText('u18', PopulateVariables('mm/dd/yyyy'));

}

}
gv_vAlignTable['u43'] = 'top';
var u44 = document.getElementById('u44');

var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'center';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u48 = document.getElementById('u48');

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'top';
var u181 = document.getElementById('u181');

var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'top';
var u183 = document.getElementById('u183');

var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'top';
var u185 = document.getElementById('u185');

var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'top';
var u187 = document.getElementById('u187');

var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'top';
var u189 = document.getElementById('u189');

var u541 = document.getElementById('u541');
gv_vAlignTable['u541'] = 'center';
var u542 = document.getElementById('u542');

u542.style.cursor = 'pointer';
if (bIE) u542.attachEvent("onclick", Clicku542);
else u542.addEventListener("click", Clicku542, true);
function Clicku542(e)
{

if (false) {

	SetPanelStateu538("pd0u538");

SetGlobalVariableValue('$closeDate', PopulateVariables('04/13/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Wednesday, April 13, 2011'));

SetWidgetFormText('u422', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu538("pd0u538");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u543 = document.getElementById('u543');

var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u56 = document.getElementById('u56');

u56.style.cursor = 'pointer';
if (bIE) u56.attachEvent("onclick", Clicku56);
else u56.addEventListener("click", Clicku56, true);
function Clicku56(e)
{

if (true) {

	BringToFront("u361");

	SetPanelStateu3("pd0u3");

	SetPanelStateu28("pd0u28");

SetWidgetFormText('u18', PopulateVariables('mm/dd/yyyy'));

}

}
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

	BringToFront("u361");

	SetPanelStateu3("pd0u3");

	SetPanelStateu28("pd0u28");

SetWidgetFormText('u18', PopulateVariables('mm/dd/yyyy'));

}

}
gv_vAlignTable['u58'] = 'top';
var u59 = document.getElementById('u59');

var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'top';
var u191 = document.getElementById('u191');

var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'top';
var u193 = document.getElementById('u193');

var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'top';
var u195 = document.getElementById('u195');

var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'top';
var u197 = document.getElementById('u197');

var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'top';
var u199 = document.getElementById('u199');

var u551 = document.getElementById('u551');
gv_vAlignTable['u551'] = 'center';
var u552 = document.getElementById('u552');

var u553 = document.getElementById('u553');
gv_vAlignTable['u553'] = 'center';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
var u61 = document.getElementById('u61');

u61.style.cursor = 'pointer';
if (bIE) u61.attachEvent("onclick", Clicku61);
else u61.addEventListener("click", Clicku61, true);
function Clicku61(e)
{

if (true) {

	BringToFront("u361");

	SetPanelStateu3("pd0u3");

	SetPanelStateu28("pd0u28");

SetWidgetFormText('u18', PopulateVariables('mm/dd/yyyy'));

}

}
gv_vAlignTable['u61'] = 'top';
var u62 = document.getElementById('u62');

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'center';
var u64 = document.getElementById('u64');

if (bIE) u64.attachEvent("onblur", LostFocusu64);
else u64.addEventListener("blur", LostFocusu64, true);
function LostFocusu64(e)
{

if (true) {

SetGlobalVariableValue('$ZIP', GetWidgetFormText('u64'));

}

}

var u65 = document.getElementById('u65');

var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'center';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'top';
var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u69 = document.getElementById('u69');

var u560 = document.getElementById('u560');
gv_vAlignTable['u560'] = 'center';
var u561 = document.getElementById('u561');

var u562 = document.getElementById('u562');
gv_vAlignTable['u562'] = 'center';
var u563 = document.getElementById('u563');

var u70 = document.getElementById('u70');

var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u72 = document.getElementById('u72');

u72.style.cursor = 'pointer';
if (bIE) u72.attachEvent("onclick", Clicku72);
else u72.addEventListener("click", Clicku72, true);
function Clicku72(e)
{

if (true) {

	SetPanelStateu69("pd2u69");

}

}

var u73 = document.getElementById('u73');

u73.style.cursor = 'pointer';
if (bIE) u73.attachEvent("onclick", Clicku73);
else u73.addEventListener("click", Clicku73, true);
function Clicku73(e)
{

if (true) {

	SetPanelStateu69("pd0u69");

}

}

var u74 = document.getElementById('u74');

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u76 = document.getElementById('u76');

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
var u78 = document.getElementById('u78');

var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'center';
var u570 = document.getElementById('u570');

var u571 = document.getElementById('u571');
gv_vAlignTable['u571'] = 'top';
var u572 = document.getElementById('u572');
gv_vAlignTable['u572'] = 'top';
var u573 = document.getElementById('u573');

var u80 = document.getElementById('u80');

u80.style.cursor = 'pointer';
if (bIE) u80.attachEvent("onclick", Clicku80);
else u80.addEventListener("click", Clicku80, true);
function Clicku80(e)
{

if (true) {

	SetPanelStateu69("pd0u69");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please call customer service for delivery rates for Super Rush."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u81 = document.getElementById('u81');

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

if (true) {

	SetPanelStateu69("pd0u69");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please call customer service for delivery rates for Super Rush."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u86 = document.getElementById('u86');

var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'center';
var u88 = document.getElementById('u88');

u88.style.cursor = 'pointer';
if (bIE) u88.attachEvent("onclick", Clicku88);
else u88.addEventListener("click", Clicku88, true);
function Clicku88(e)
{

if (true) {

	SetPanelStateu69("pd1u69");

}

}

var u89 = document.getElementById('u89');

u89.style.cursor = 'pointer';
if (bIE) u89.attachEvent("onclick", Clicku89);
else u89.addEventListener("click", Clicku89, true);
function Clicku89(e)
{

if (true) {

	SetPanelStateu69("pd0u69");

}

}

var u90 = document.getElementById('u90');

u90.style.cursor = 'pointer';
if (bIE) u90.attachEvent("onclick", Clicku90);
else u90.addEventListener("click", Clicku90, true);
function Clicku90(e)
{

if (true) {

	SetPanelStateu69("pd0u69");

SetGlobalVariableValue('$eventDate', PopulateVariables('Wednesday, March 23, 2011'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/23/2011'));

SetWidgetFormText('u123', GetGlobalVariableValue('$dlvryDate'));

}

}

var u91 = document.getElementById('u91');

u91.style.cursor = 'pointer';
if (bIE) u91.attachEvent("onclick", Clicku91);
else u91.addEventListener("click", Clicku91, true);
function Clicku91(e)
{

if (true) {

	SetPanelStateu69("pd0u69");

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/24/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Thursday, March 24, 2011'));

SetWidgetFormText('u123', GetGlobalVariableValue('$dlvryDate'));

}

}

var u92 = document.getElementById('u92');

u92.style.cursor = 'pointer';
if (bIE) u92.attachEvent("onclick", Clicku92);
else u92.addEventListener("click", Clicku92, true);
function Clicku92(e)
{

if (true) {

	SetPanelStateu69("pd0u69");

SetGlobalVariableValue('$eventDate', PopulateVariables('Friday, March 25, 2011'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/25/2011'));

SetWidgetFormText('u123', GetGlobalVariableValue('$dlvryDate'));

}

}

var u93 = document.getElementById('u93');

u93.style.cursor = 'pointer';
if (bIE) u93.attachEvent("onclick", Clicku93);
else u93.addEventListener("click", Clicku93, true);
function Clicku93(e)
{

if (true) {

	SetPanelStateu69("pd0u69");

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/26/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Saturday, March 26, 2011'));

SetWidgetFormText('u123', GetGlobalVariableValue('$dlvryDate'));

}

}

var u94 = document.getElementById('u94');

u94.style.cursor = 'pointer';
if (bIE) u94.attachEvent("onclick", Clicku94);
else u94.addEventListener("click", Clicku94, true);
function Clicku94(e)
{

if (true) {

	SetPanelStateu69("pd0u69");

SetGlobalVariableValue('$eventDate', PopulateVariables('Sunday, March 20, 2011`'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/20/2011'));

SetWidgetFormText('u123', GetGlobalVariableValue('$dlvryDate'));

}

}

var u95 = document.getElementById('u95');

u95.style.cursor = 'pointer';
if (bIE) u95.attachEvent("onclick", Clicku95);
else u95.addEventListener("click", Clicku95, true);
function Clicku95(e)
{

if (true) {

	SetPanelStateu69("pd0u69");

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/21/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Monday, March 21, 2011'));

SetWidgetFormText('u123', GetGlobalVariableValue('$dlvryDate'));

}

}

var u96 = document.getElementById('u96');

u96.style.cursor = 'pointer';
if (bIE) u96.attachEvent("onclick", Clicku96);
else u96.addEventListener("click", Clicku96, true);
function Clicku96(e)
{

if (true) {

	SetPanelStateu69("pd0u69");

SetGlobalVariableValue('$eventDate', PopulateVariables('Tuesday, March 22, 2011'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/22/2011'));

SetWidgetFormText('u123', GetGlobalVariableValue('$dlvryDate'));

}

}

var u97 = document.getElementById('u97');

u97.style.cursor = 'pointer';
if (bIE) u97.attachEvent("onclick", Clicku97);
else u97.addEventListener("click", Clicku97, true);
function Clicku97(e)
{

if (true) {

	SetPanelStateu69("pd0u69");

SetGlobalVariableValue('$eventDate', PopulateVariables('Sunday, March 27'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/27/2011'));

SetWidgetFormText('u123', GetGlobalVariableValue('$dlvryDate'));

}

}

var u98 = document.getElementById('u98');

u98.style.cursor = 'pointer';
if (bIE) u98.attachEvent("onclick", Clicku98);
else u98.addEventListener("click", Clicku98, true);
function Clicku98(e)
{

if (true) {

	SetPanelStateu69("pd0u69");

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/28/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Thursday, March 28, 2011'));

SetWidgetFormText('u123', GetGlobalVariableValue('$dlvryDate'));

}

}

var u99 = document.getElementById('u99');

u99.style.cursor = 'pointer';
if (bIE) u99.attachEvent("onclick", Clicku99);
else u99.addEventListener("click", Clicku99, true);
function Clicku99(e)
{

if (true) {

	SetPanelStateu69("pd0u69");

SetGlobalVariableValue('$eventDate', PopulateVariables('Wednesday, March 30'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/30/2011'));

SetWidgetFormText('u123', GetGlobalVariableValue('$dlvryDate'));

}

}

var u400 = document.getElementById('u400');
gv_vAlignTable['u400'] = 'center';
var u401 = document.getElementById('u401');
gv_vAlignTable['u401'] = 'top';
var u402 = document.getElementById('u402');
gv_vAlignTable['u402'] = 'top';
var u403 = document.getElementById('u403');

var u404 = document.getElementById('u404');
gv_vAlignTable['u404'] = 'center';
var u405 = document.getElementById('u405');
gv_vAlignTable['u405'] = 'top';
var u406 = document.getElementById('u406');
gv_vAlignTable['u406'] = 'top';
var u407 = document.getElementById('u407');

var u408 = document.getElementById('u408');
gv_vAlignTable['u408'] = 'center';
var u409 = document.getElementById('u409');

u409.style.cursor = 'pointer';
if (bIE) u409.attachEvent("onclick", Clicku409);
else u409.addEventListener("click", Clicku409, true);
function Clicku409(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u410 = document.getElementById('u410');
gv_vAlignTable['u410'] = 'center';
var u411 = document.getElementById('u411');

u411.style.cursor = 'pointer';
if (bIE) u411.attachEvent("onclick", Clicku411);
else u411.addEventListener("click", Clicku411, true);
function Clicku411(e)
{

if (true) {

	self.location.href="Preview.html" + GetQuerystring();

}

}

var u412 = document.getElementById('u412');
gv_vAlignTable['u412'] = 'center';
var u413 = document.getElementById('u413');

u413.style.cursor = 'pointer';
if (bIE) u413.attachEvent("onclick", Clicku413);
else u413.addEventListener("click", Clicku413, true);
function Clicku413(e)
{

if (true) {

	self.location.href="Share.html" + GetQuerystring();

}

}

var u414 = document.getElementById('u414');
gv_vAlignTable['u414'] = 'center';
var u415 = document.getElementById('u415');

u415.style.cursor = 'pointer';
if (bIE) u415.attachEvent("onclick", Clicku415);
else u415.addEventListener("click", Clicku415, true);
function Clicku415(e)
{

if (true) {

	self.location.href="Manage.html" + GetQuerystring();

}

}

var u416 = document.getElementById('u416');
gv_vAlignTable['u416'] = 'center';
var u417 = document.getElementById('u417');
gv_vAlignTable['u417'] = 'top';
var u418 = document.getElementById('u418');

var u419 = document.getElementById('u419');

var u420 = document.getElementById('u420');
gv_vAlignTable['u420'] = 'center';
var u421 = document.getElementById('u421');
gv_vAlignTable['u421'] = 'top';
var u422 = document.getElementById('u422');

u422.style.cursor = 'pointer';
if (bIE) u422.attachEvent("onclick", Clicku422);
else u422.addEventListener("click", Clicku422, true);
function Clicku422(e)
{

if (true) {

SetWidgetFormText('u422', PopulateVariables(''));

SetGlobalVariableValue('$DaysLeftNum', PopulateVariables('8'));

SetGlobalVariableValue('$DaysLeftText', PopulateVariables('Days Left'));

SetGlobalVariableValue('$SignUpEndsText', PopulateVariables('Sign-Up ends'));

	BringToFront("u538");

	SetPanelStateu538("pd1u538");

}

}

if (bIE) u422.attachEvent("onblur", LostFocusu422);
else u422.addEventListener("blur", LostFocusu422, true);
function LostFocusu422(e)
{

if ((false) && (((GetWidgetFormText('u422')) != (PopulateVariables('mm/dd/yyyy'))) && ((GetWidgetFormText('u422')) != (PopulateVariables(''))))) {

SetGlobalVariableValue('$closeDate', GetWidgetFormText('u422'));

SetGlobalVariableValue('$DaysLeftNum', PopulateVariables('8'));

SetGlobalVariableValue('$DaysLeftText', PopulateVariables('Days Left'));

SetGlobalVariableValue('$SignUpEndsText', PopulateVariables('Sign-Up ends'));

}

}

var u423 = document.getElementById('u423');
gv_vAlignTable['u423'] = 'top';
var u424 = document.getElementById('u424');
gv_vAlignTable['u424'] = 'top';
var u425 = document.getElementById('u425');

var u426 = document.getElementById('u426');
gv_vAlignTable['u426'] = 'top';
var u427 = document.getElementById('u427');

var u428 = document.getElementById('u428');
gv_vAlignTable['u428'] = 'top';
var u429 = document.getElementById('u429');

var u290 = document.getElementById('u290');
gv_vAlignTable['u290'] = 'center';
var u291 = document.getElementById('u291');

var u292 = document.getElementById('u292');
gv_vAlignTable['u292'] = 'center';
var u293 = document.getElementById('u293');
gv_vAlignTable['u293'] = 'top';
var u294 = document.getElementById('u294');

u294.style.cursor = 'pointer';
if (bIE) u294.attachEvent("onclick", Clicku294);
else u294.addEventListener("click", Clicku294, true);
function Clicku294(e)
{

if (true) {

	BringToFront("u361");

}

}

var u295 = document.getElementById('u295');
gv_vAlignTable['u295'] = 'center';
var u296 = document.getElementById('u296');

var u430 = document.getElementById('u430');
gv_vAlignTable['u430'] = 'center';
var u431 = document.getElementById('u431');
gv_vAlignTable['u431'] = 'top';
var u432 = document.getElementById('u432');

if (bIE) u432.attachEvent("onfocus", Focusu432);
else u432.addEventListener("focus", Focusu432, true);
function Focusu432(e)
{

if (true) {

SetGlobalVariableValue('$groupPrice', PopulateVariables(''));

}

}

if (bIE) u432.attachEvent("onblur", LostFocusu432);
else u432.addEventListener("blur", LostFocusu432, true);
function LostFocusu432(e)
{

if (true) {

SetGlobalVariableValue('$groupPrice', GetWidgetFormText('u432'));

}

}

var u433 = document.getElementById('u433');
gv_vAlignTable['u433'] = 'top';
var u434 = document.getElementById('u434');

u434.style.cursor = 'pointer';
if (bIE) u434.attachEvent("onclick", Clicku434);
else u434.addEventListener("click", Clicku434, true);
function Clicku434(e)
{

if (true) {

	BringToFront("u0");

	SetPanelStateu3("pd4u3");

;

}

}
gv_vAlignTable['u434'] = 'top';
var u435 = document.getElementById('u435');

var u436 = document.getElementById('u436');
gv_vAlignTable['u436'] = 'center';
var u437 = document.getElementById('u437');

var u438 = document.getElementById('u438');

var u439 = document.getElementById('u439');

var u440 = document.getElementById('u440');
gv_vAlignTable['u440'] = 'center';
var u441 = document.getElementById('u441');

var u442 = document.getElementById('u442');
gv_vAlignTable['u442'] = 'center';
var u443 = document.getElementById('u443');
gv_vAlignTable['u443'] = 'top';
var u444 = document.getElementById('u444');

if (bIE) u444.attachEvent("onblur", LostFocusu444);
else u444.addEventListener("blur", LostFocusu444, true);
function LostFocusu444(e)
{

if (true) {

SetGlobalVariableValue('$paymtInfo', GetWidgetFormText('u444'));

}

}

var u445 = document.getElementById('u445');
gv_vAlignTable['u445'] = 'top';
var u446 = document.getElementById('u446');

var u447 = document.getElementById('u447');

var u448 = document.getElementById('u448');

var u449 = document.getElementById('u449');
gv_vAlignTable['u449'] = 'center';
var u450 = document.getElementById('u450');

var u451 = document.getElementById('u451');
gv_vAlignTable['u451'] = 'center';
var u452 = document.getElementById('u452');

if (bIE) u452.attachEvent("onblur", LostFocusu452);
else u452.addEventListener("blur", LostFocusu452, true);
function LostFocusu452(e)
{

if (true) {

SetGlobalVariableValue('$dlvyInfo', GetWidgetFormText('u452'));

}

}

var u453 = document.getElementById('u453');
gv_vAlignTable['u453'] = 'top';
var u454 = document.getElementById('u454');
gv_vAlignTable['u454'] = 'top';
var u455 = document.getElementById('u455');

var u456 = document.getElementById('u456');

var u457 = document.getElementById('u457');
gv_vAlignTable['u457'] = 'center';
var u458 = document.getElementById('u458');

var u459 = document.getElementById('u459');

var u460 = document.getElementById('u460');
gv_vAlignTable['u460'] = 'center';
var u461 = document.getElementById('u461');

var u462 = document.getElementById('u462');
gv_vAlignTable['u462'] = 'center';
var u463 = document.getElementById('u463');
gv_vAlignTable['u463'] = 'top';
var u464 = document.getElementById('u464');

var u465 = document.getElementById('u465');
gv_vAlignTable['u465'] = 'top';
var u466 = document.getElementById('u466');

var u467 = document.getElementById('u467');
gv_vAlignTable['u467'] = 'top';
var u468 = document.getElementById('u468');

var u469 = document.getElementById('u469');
gv_vAlignTable['u469'] = 'top';
var u470 = document.getElementById('u470');

var u471 = document.getElementById('u471');

var u472 = document.getElementById('u472');
gv_vAlignTable['u472'] = 'center';
var u473 = document.getElementById('u473');

var u474 = document.getElementById('u474');
gv_vAlignTable['u474'] = 'center';
var u475 = document.getElementById('u475');

var u476 = document.getElementById('u476');

u476.style.cursor = 'pointer';
if (bIE) u476.attachEvent("onclick", Clicku476);
else u476.addEventListener("click", Clicku476, true);
function Clicku476(e)
{

if (true) {

SetWidgetFormText('u476', PopulateVariables(''));

SetGlobalVariableValue('$Comments', PopulateVariables(''));

}

}

if (bIE) u476.attachEvent("onblur", LostFocusu476);
else u476.addEventListener("blur", LostFocusu476, true);
function LostFocusu476(e)
{

if (true) {

SetGlobalVariableValue('$Comments', GetWidgetFormText('u476'));

}

}

var u477 = document.getElementById('u477');

var u478 = document.getElementById('u478');
gv_vAlignTable['u478'] = 'center';
var u479 = document.getElementById('u479');

var u480 = document.getElementById('u480');
gv_vAlignTable['u480'] = 'center';
var u481 = document.getElementById('u481');
gv_vAlignTable['u481'] = 'top';
var u482 = document.getElementById('u482');

var u483 = document.getElementById('u483');

var u484 = document.getElementById('u484');
gv_vAlignTable['u484'] = 'center';
var u485 = document.getElementById('u485');

u485.style.cursor = 'pointer';
if (bIE) u485.attachEvent("onclick", Clicku485);
else u485.addEventListener("click", Clicku485, true);
function Clicku485(e)
{

if ((GetGlobalVariableValue('$round')) == (PopulateVariables('0'))) {

SetGlobalVariableValue('$round', PopulateVariables('1'));

SetGlobalVariableValue('$Welcome', GetWidgetFormText('u503'));

SetGlobalVariableValue('$contactEmail', GetWidgetFormText('u569'));

SetGlobalVariableValue('$contactName', GetWidgetFormText('u570'));

SetGlobalVariableValue('$contactPhone', GetWidgetFormText('u573'));

	self.location.href="Preview.html" + GetQuerystring();

}
else
if ((GetGlobalVariableValue('$round')) == (PopulateVariables('1'))) {

	self.location.href="Manage.html" + GetQuerystring();

SetGlobalVariableValue('$Welcome', GetWidgetFormText('u503'));

}

}

var u486 = document.getElementById('u486');
gv_vAlignTable['u486'] = 'center';
var u487 = document.getElementById('u487');

var u488 = document.getElementById('u488');

var u489 = document.getElementById('u489');
gv_vAlignTable['u489'] = 'center';
var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'top';
var u300 = document.getElementById('u300');

var u301 = document.getElementById('u301');
gv_vAlignTable['u301'] = 'center';
var u302 = document.getElementById('u302');

var u303 = document.getElementById('u303');
gv_vAlignTable['u303'] = 'center';
var u304 = document.getElementById('u304');
gv_vAlignTable['u304'] = 'top';
var u305 = document.getElementById('u305');

var u306 = document.getElementById('u306');
gv_vAlignTable['u306'] = 'center';
var u307 = document.getElementById('u307');

var u308 = document.getElementById('u308');
gv_vAlignTable['u308'] = 'center';
var u309 = document.getElementById('u309');

var u497 = document.getElementById('u497');

var u498 = document.getElementById('u498');

var u499 = document.getElementById('u499');
gv_vAlignTable['u499'] = 'center';
var u504 = document.getElementById('u504');

var u505 = document.getElementById('u505');

var u506 = document.getElementById('u506');
gv_vAlignTable['u506'] = 'center';
var u507 = document.getElementById('u507');

var u508 = document.getElementById('u508');
gv_vAlignTable['u508'] = 'center';
var u509 = document.getElementById('u509');

var u310 = document.getElementById('u310');
gv_vAlignTable['u310'] = 'center';
var u311 = document.getElementById('u311');

var u312 = document.getElementById('u312');
gv_vAlignTable['u312'] = 'center';
var u313 = document.getElementById('u313');

var u314 = document.getElementById('u314');
gv_vAlignTable['u314'] = 'center';
var u315 = document.getElementById('u315');

var u316 = document.getElementById('u316');
gv_vAlignTable['u316'] = 'center';
var u317 = document.getElementById('u317');

var u318 = document.getElementById('u318');
gv_vAlignTable['u318'] = 'center';
var u319 = document.getElementById('u319');

var u514 = document.getElementById('u514');

u514.style.cursor = 'pointer';
if (bIE) u514.attachEvent("onclick", Clicku514);
else u514.addEventListener("click", Clicku514, true);
function Clicku514(e)
{

if (((GetCheckState('u514')) == (false)) && ((GetCheckState('u493')) == (false))) {

SetGlobalVariableValue('$emaiNew', PopulateVariables('Do not send email notifications.'));

;

}
else
if (((GetCheckState('u514')) == (false)) && ((GetCheckState('u493')) == (true))) {

SetGlobalVariableValue('$emaiNew', PopulateVariables('Each time someone signs up.'));

}
else
if (((GetCheckState('u514')) == (true)) && ((GetCheckState('u493')) == (true))) {

SetGlobalVariableValue('$emaiNew', PopulateVariables('Each time someone signs up and when my sign-up sheet closes.'));

}
else
if (((GetCheckState('u514')) == (true)) && ((GetCheckState('u493')) == (false))) {

SetGlobalVariableValue('$emaiNew', PopulateVariables('When my sign-up sheet closes.'));

}

}

var u515 = document.getElementById('u515');
gv_vAlignTable['u515'] = 'top';
var u516 = document.getElementById('u516');

u516.style.cursor = 'pointer';
if (bIE) u516.attachEvent("onclick", Clicku516);
else u516.addEventListener("click", Clicku516, true);
function Clicku516(e)
{

if ((GetCheckState('u516')) == (true)) {

	SetPanelVisibilityu447("");

	MoveWidgetTo('u455',0,120);

}
else
if (true) {

	SetPanelVisibilityu447("hidden");

SetGlobalVariableValue('$dlvyInfo', PopulateVariables(''));

SetWidgetFormText('u452', PopulateVariables(' '));

	MoveWidgetTo('u455',0,25);

}

}

var u517 = document.getElementById('u517');
gv_vAlignTable['u517'] = 'top';
var u518 = document.getElementById('u518');

u518.style.cursor = 'pointer';
if (bIE) u518.attachEvent("onclick", Clicku518);
else u518.addEventListener("click", Clicku518, true);
function Clicku518(e)
{

if ((GetCheckState('u518')) == (true)) {

	MoveWidgetTo('u446',0,120);

	SetPanelVisibilityu438("");

}
else
if (true) {

	MoveWidgetTo('u446',0,25);

SetGlobalVariableValue('$paymtInfo', PopulateVariables(''));

SetWidgetFormText('u444', PopulateVariables(''));

	SetPanelVisibilityu438("hidden");

}

}

var u519 = document.getElementById('u519');
gv_vAlignTable['u519'] = 'top';
var u320 = document.getElementById('u320');
gv_vAlignTable['u320'] = 'center';
var u321 = document.getElementById('u321');
gv_vAlignTable['u321'] = 'top';
var u322 = document.getElementById('u322');
gv_vAlignTable['u322'] = 'top';
var u323 = document.getElementById('u323');
gv_vAlignTable['u323'] = 'top';
var u324 = document.getElementById('u324');
gv_vAlignTable['u324'] = 'top';
var u325 = document.getElementById('u325');
gv_vAlignTable['u325'] = 'top';
var u326 = document.getElementById('u326');

var u327 = document.getElementById('u327');
gv_vAlignTable['u327'] = 'center';
var u328 = document.getElementById('u328');

var u329 = document.getElementById('u329');
gv_vAlignTable['u329'] = 'center';
var u520 = document.getElementById('u520');

u520.style.cursor = 'pointer';
if (bIE) u520.attachEvent("onclick", Clicku520);
else u520.addEventListener("click", Clicku520, true);
function Clicku520(e)
{

if ((GetCheckState('u520')) == (true)) {

	MoveWidgetTo('u437',0,120);

	SetPanelStateu427("pd1u427");

}
else
if (true) {

	MoveWidgetTo('u437',0,50);

	SetPanelStateu427("pd0u427");

SetGlobalVariableValue('$groupPrice', PopulateVariables(''));

SetWidgetFormText('u432', PopulateVariables(''));

}

}

var u523 = document.getElementById('u523');

var u524 = document.getElementById('u524');
gv_vAlignTable['u524'] = 'center';
var u525 = document.getElementById('u525');

var u526 = document.getElementById('u526');
gv_vAlignTable['u526'] = 'center';
var u527 = document.getElementById('u527');

var u528 = document.getElementById('u528');

var u529 = document.getElementById('u529');
gv_vAlignTable['u529'] = 'center';
var u330 = document.getElementById('u330');
gv_vAlignTable['u330'] = 'top';
var u331 = document.getElementById('u331');
gv_vAlignTable['u331'] = 'top';
var u332 = document.getElementById('u332');
gv_vAlignTable['u332'] = 'top';
var u333 = document.getElementById('u333');
gv_vAlignTable['u333'] = 'top';
var u334 = document.getElementById('u334');
gv_vAlignTable['u334'] = 'top';
var u335 = document.getElementById('u335');
gv_vAlignTable['u335'] = 'top';
var u336 = document.getElementById('u336');

u336.style.cursor = 'pointer';
if (bIE) u336.attachEvent("onclick", Clicku336);
else u336.addEventListener("click", Clicku336, true);
function Clicku336(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("This is not enabled in the prototype."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u337 = document.getElementById('u337');
gv_vAlignTable['u337'] = 'center';
var u338 = document.getElementById('u338');
gv_vAlignTable['u338'] = 'top';
var u339 = document.getElementById('u339');
gv_vAlignTable['u339'] = 'top';
var u530 = document.getElementById('u530');

var u534 = document.getElementById('u534');
gv_vAlignTable['u534'] = 'center';
var u535 = document.getElementById('u535');
gv_vAlignTable['u535'] = 'top';
var u536 = document.getElementById('u536');

var u537 = document.getElementById('u537');
gv_vAlignTable['u537'] = 'center';
var u538 = document.getElementById('u538');

var u539 = document.getElementById('u539');

u539.style.cursor = 'pointer';
if (bIE) u539.attachEvent("onclick", u539Click);
else u539.addEventListener("click", u539Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u539LinksClick'></DIV>")
var u539LinksClick = document.getElementById('u539LinksClick');
function u539Click(e) 
{

	ToggleLinks(e, 'u539LinksClick');
}

InsertBeforeEnd(u539LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u539Clickud0cccffd9a6a4f4a807b4128a27aedea(event)'>Enhanced</div>");
function u539Clickud0cccffd9a6a4f4a807b4128a27aedea(e)
{

	SetPanelStateu3("pd1u3");

	SetPanelStateu538("pd0u538");

	SetPanelStateu11("pd0u11");

	ScrollToWidget('u10', false,true);

	BringToFront("u0");

	ToggleLinks(e, 'u539LinksClick');
}

InsertBeforeEnd(u539LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u539Clicku11cda0e028b74f0ab6adde9c87f3d3a4(event)'>Basic</div>");
function u539Clicku11cda0e028b74f0ab6adde9c87f3d3a4(e)
{

	SetPanelStateu3("pd1u3");

	SetPanelStateu538("pd0u538");

	SetPanelStateu11("pd1u11");

	ScrollToWidget('u10', false,true);

	BringToFront("u0");

	ToggleLinks(e, 'u539LinksClick');
}

var u340 = document.getElementById('u340');
gv_vAlignTable['u340'] = 'top';
var u341 = document.getElementById('u341');
gv_vAlignTable['u341'] = 'top';
var u342 = document.getElementById('u342');
gv_vAlignTable['u342'] = 'top';
var u343 = document.getElementById('u343');
gv_vAlignTable['u343'] = 'top';
var u344 = document.getElementById('u344');
gv_vAlignTable['u344'] = 'top';
var u345 = document.getElementById('u345');
gv_vAlignTable['u345'] = 'top';
var u346 = document.getElementById('u346');
gv_vAlignTable['u346'] = 'top';
var u347 = document.getElementById('u347');

var u348 = document.getElementById('u348');
gv_vAlignTable['u348'] = 'center';
var u349 = document.getElementById('u349');

var u540 = document.getElementById('u540');

var u544 = document.getElementById('u544');

var u545 = document.getElementById('u545');
gv_vAlignTable['u545'] = 'center';
var u546 = document.getElementById('u546');

var u547 = document.getElementById('u547');
gv_vAlignTable['u547'] = 'center';
var u548 = document.getElementById('u548');

var u549 = document.getElementById('u549');
gv_vAlignTable['u549'] = 'center';
var u350 = document.getElementById('u350');
gv_vAlignTable['u350'] = 'center';
var u351 = document.getElementById('u351');

u351.style.cursor = 'pointer';
if (bIE) u351.attachEvent("onclick", Clicku351);
else u351.addEventListener("click", Clicku351, true);
function Clicku351(e)
{

if (true) {

	BringToFront("u361");

}

}

var u352 = document.getElementById('u352');
gv_vAlignTable['u352'] = 'center';
var u353 = document.getElementById('u353');

var u354 = document.getElementById('u354');
gv_vAlignTable['u354'] = 'center';
var u355 = document.getElementById('u355');
gv_vAlignTable['u355'] = 'top';
var u356 = document.getElementById('u356');

var u357 = document.getElementById('u357');
gv_vAlignTable['u357'] = 'center';
var u358 = document.getElementById('u358');
gv_vAlignTable['u358'] = 'top';
var u359 = document.getElementById('u359');

u359.style.cursor = 'pointer';
if (bIE) u359.attachEvent("onclick", Clicku359);
else u359.addEventListener("click", Clicku359, true);
function Clicku359(e)
{

if (true) {

	BringToFront("u361");

}

}

var u550 = document.getElementById('u550');

var u554 = document.getElementById('u554');

var u555 = document.getElementById('u555');
gv_vAlignTable['u555'] = 'center';
var u556 = document.getElementById('u556');
gv_vAlignTable['u556'] = 'top';
var u557 = document.getElementById('u557');

var u558 = document.getElementById('u558');
gv_vAlignTable['u558'] = 'center';
var u559 = document.getElementById('u559');

var u360 = document.getElementById('u360');
gv_vAlignTable['u360'] = 'center';
var u361 = document.getElementById('u361');

var u362 = document.getElementById('u362');

var u363 = document.getElementById('u363');
gv_vAlignTable['u363'] = 'center';
var u364 = document.getElementById('u364');

var u365 = document.getElementById('u365');
gv_vAlignTable['u365'] = 'center';
var u366 = document.getElementById('u366');
gv_vAlignTable['u366'] = 'top';
var u367 = document.getElementById('u367');

u367.style.cursor = 'pointer';
if (bIE) u367.attachEvent("onclick", Clicku367);
else u367.addEventListener("click", Clicku367, true);
function Clicku367(e)
{

if (true) {

;

;

;

SetGlobalVariableValue('$contactName', GetGlobalVariableValue('$YourName'));

SetGlobalVariableValue('$contactEmail', GetGlobalVariableValue('$yourEmail'));

SetGlobalVariableValue('$contactPhone', GetGlobalVariableValue('$yourPhone'));

	MoveWidgetTo('u418',12,620);

}

}

var u368 = document.getElementById('u368');
gv_vAlignTable['u368'] = 'top';
var u369 = document.getElementById('u369');

u369.style.cursor = 'pointer';
if (bIE) u369.attachEvent("onclick", Clicku369);
else u369.addEventListener("click", Clicku369, true);
function Clicku369(e)
{

if (true) {

	MoveWidgetTo('u418',12,780);

}

}

var u564 = document.getElementById('u564');
gv_vAlignTable['u564'] = 'center';
var u565 = document.getElementById('u565');

var u566 = document.getElementById('u566');
gv_vAlignTable['u566'] = 'center';
var u567 = document.getElementById('u567');

u567.style.cursor = 'pointer';
if (bIE) u567.attachEvent("onclick", Clicku567);
else u567.addEventListener("click", Clicku567, true);
function Clicku567(e)
{

if (true) {

	BringToFront("u0");

	SetPanelStateu3("pd2u3");

SetWidgetFormText('u164', GetGlobalVariableValue('$yourEmail'));

}

}
gv_vAlignTable['u567'] = 'top';
var u568 = document.getElementById('u568');
gv_vAlignTable['u568'] = 'top';
var u569 = document.getElementById('u569');

var u370 = document.getElementById('u370');
gv_vAlignTable['u370'] = 'top';
var u371 = document.getElementById('u371');

var u372 = document.getElementById('u372');

u372.style.cursor = 'pointer';
if (bIE) u372.attachEvent("onclick", Clicku372);
else u372.addEventListener("click", Clicku372, true);
function Clicku372(e)
{

if (true) {

	SetPanelStateu371("pd1u371");

SetWidgetFormText('u374', GetGlobalVariableValue('$GroupName'));

}

}
gv_vAlignTable['u372'] = 'top';
var u373 = document.getElementById('u373');
gv_vAlignTable['u373'] = 'top';
var u374 = document.getElementById('u374');

var u375 = document.getElementById('u375');

u375.style.cursor = 'pointer';
if (bIE) u375.attachEvent("onclick", Clicku375);
else u375.addEventListener("click", Clicku375, true);
function Clicku375(e)
{

if (true) {

	SetPanelStateu371("pd0u371");

SetGlobalVariableValue('$GroupName', GetWidgetFormText('u374'));

SetWidgetRichText('u372', PopulateVariables('<span style=" font-family:\'Myriad Pro\'; color:#003366; font-size:21px;">Settings for the [[GroupName]] Sign-up Sheet</span><span style=" font-family:\'Helvetica\'; color:#003366; font-size:19px;">&nbsp; &nbsp;&nbsp; </span><span style=" font-family:\'Helvetica\'; color:#006699; font-size:13px;"><u>Change Group Name</u></span>'));

;

}

}

var u376 = document.getElementById('u376');
gv_vAlignTable['u376'] = 'center';
var u377 = document.getElementById('u377');
gv_vAlignTable['u377'] = 'top';
var u378 = document.getElementById('u378');
gv_vAlignTable['u378'] = 'top';
var u379 = document.getElementById('u379');

var u574 = document.getElementById('u574');

u574.style.cursor = 'pointer';
if (bIE) u574.attachEvent("onclick", Clicku574);
else u574.addEventListener("click", Clicku574, true);
function Clicku574(e)
{

if (true) {

;

;

}

}
gv_vAlignTable['u574'] = 'top';
var u380 = document.getElementById('u380');
gv_vAlignTable['u380'] = 'center';
var u381 = document.getElementById('u381');

var u382 = document.getElementById('u382');
gv_vAlignTable['u382'] = 'center';
var u383 = document.getElementById('u383');

var u384 = document.getElementById('u384');

var u385 = document.getElementById('u385');
gv_vAlignTable['u385'] = 'center';
var u386 = document.getElementById('u386');

u386.style.cursor = 'pointer';
if (bIE) u386.attachEvent("onclick", Clicku386);
else u386.addEventListener("click", Clicku386, true);
function Clicku386(e)
{

if (true) {

	MoveWidgetTo('u418',12,780);

}

}

var u387 = document.getElementById('u387');
gv_vAlignTable['u387'] = 'top';
var u388 = document.getElementById('u388');

var u389 = document.getElementById('u389');
gv_vAlignTable['u389'] = 'center';
var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'top';
var u201 = document.getElementById('u201');

var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'top';
var u390 = document.getElementById('u390');

var u391 = document.getElementById('u391');

u391.style.cursor = 'pointer';
if (bIE) u391.attachEvent("onclick", Clicku391);
else u391.addEventListener("click", Clicku391, true);
function Clicku391(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u205 = document.getElementById('u205');

var u393 = document.getElementById('u393');
gv_vAlignTable['u393'] = 'top';
var u394 = document.getElementById('u394');
gv_vAlignTable['u394'] = 'top';
var u395 = document.getElementById('u395');

var u396 = document.getElementById('u396');
gv_vAlignTable['u396'] = 'center';
var u397 = document.getElementById('u397');
gv_vAlignTable['u397'] = 'top';
var u398 = document.getElementById('u398');
gv_vAlignTable['u398'] = 'top';
var u399 = document.getElementById('u399');

var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'top';
var u211 = document.getElementById('u211');

var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'top';
var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'top';
var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'top';
var u215 = document.getElementById('u215');

u215.style.cursor = 'pointer';
if (bIE) u215.attachEvent("onclick", Clicku215);
else u215.addEventListener("click", Clicku215, true);
function Clicku215(e)
{

if (true) {

;

;

}

}

if (bIE) u215.attachEvent("onmouseover", MouseOveru215);
else u215.addEventListener("mouseover", MouseOveru215, true);
function MouseOveru215(e)
{
if (!IsTrueMouseOver('u215',e)) return;
if (true) {

	SetPanelVisibilityu234("");

	MoveWidgetTo('u234',110,110);

}

}

if (bIE) u215.attachEvent("onmouseout", MouseOutu215);
else u215.addEventListener("mouseout", MouseOutu215, true);
function MouseOutu215(e)
{
if (!IsTrueMouseOut('u215',e)) return;
if (true) {

	SetPanelVisibilityu234("hidden");

}

}
gv_vAlignTable['u215'] = 'top';
var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'top';
var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'top';
var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'top';
var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'top';
var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'top';
var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'top';
var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'top';
var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'top';
var u224 = document.getElementById('u224');

u224.style.cursor = 'pointer';
if (bIE) u224.attachEvent("onclick", Clicku224);
else u224.addEventListener("click", Clicku224, true);
function Clicku224(e)
{

if (true) {

;

;

}

}

if (bIE) u224.attachEvent("onmouseover", MouseOveru224);
else u224.addEventListener("mouseover", MouseOveru224, true);
function MouseOveru224(e)
{
if (!IsTrueMouseOver('u224',e)) return;
if (true) {

	SetPanelVisibilityu234("");

	MoveWidgetTo('u234',110,140);

}

}

if (bIE) u224.attachEvent("onmouseout", MouseOutu224);
else u224.addEventListener("mouseout", MouseOutu224, true);
function MouseOutu224(e)
{
if (!IsTrueMouseOut('u224',e)) return;
if (true) {

	SetPanelVisibilityu234("hidden");

}

}
gv_vAlignTable['u224'] = 'top';
var u225 = document.getElementById('u225');

u225.style.cursor = 'pointer';
if (bIE) u225.attachEvent("onclick", Clicku225);
else u225.addEventListener("click", Clicku225, true);
function Clicku225(e)
{

if (true) {

;

;

}

}

if (bIE) u225.attachEvent("onmouseover", MouseOveru225);
else u225.addEventListener("mouseover", MouseOveru225, true);
function MouseOveru225(e)
{
if (!IsTrueMouseOver('u225',e)) return;
if (true) {

	SetPanelVisibilityu234("");

	MoveWidgetTo('u234',110,170);

}

}

if (bIE) u225.attachEvent("onmouseout", MouseOutu225);
else u225.addEventListener("mouseout", MouseOutu225, true);
function MouseOutu225(e)
{
if (!IsTrueMouseOut('u225',e)) return;
if (true) {

	SetPanelVisibilityu234("hidden");

}

}
gv_vAlignTable['u225'] = 'top';
var u226 = document.getElementById('u226');

u226.style.cursor = 'pointer';
if (bIE) u226.attachEvent("onclick", Clicku226);
else u226.addEventListener("click", Clicku226, true);
function Clicku226(e)
{

if (true) {

;

;

}

}

if (bIE) u226.attachEvent("onmouseover", MouseOveru226);
else u226.addEventListener("mouseover", MouseOveru226, true);
function MouseOveru226(e)
{
if (!IsTrueMouseOver('u226',e)) return;
if (true) {

	SetPanelVisibilityu234("");

	MoveWidgetTo('u234',110,200);

}

}

if (bIE) u226.attachEvent("onmouseout", MouseOutu226);
else u226.addEventListener("mouseout", MouseOutu226, true);
function MouseOutu226(e)
{
if (!IsTrueMouseOut('u226',e)) return;
if (true) {

	SetPanelVisibilityu234("hidden");

}

}
gv_vAlignTable['u226'] = 'top';
var u227 = document.getElementById('u227');

u227.style.cursor = 'pointer';
if (bIE) u227.attachEvent("onclick", Clicku227);
else u227.addEventListener("click", Clicku227, true);
function Clicku227(e)
{

if (true) {

;

;

}

}

if (bIE) u227.attachEvent("onmouseover", MouseOveru227);
else u227.addEventListener("mouseover", MouseOveru227, true);
function MouseOveru227(e)
{
if (!IsTrueMouseOver('u227',e)) return;
if (true) {

	SetPanelVisibilityu234("");

	MoveWidgetTo('u234',110,230);

}

}

if (bIE) u227.attachEvent("onmouseout", MouseOutu227);
else u227.addEventListener("mouseout", MouseOutu227, true);
function MouseOutu227(e)
{
if (!IsTrueMouseOut('u227',e)) return;
if (true) {

	SetPanelVisibilityu234("hidden");

}

}
gv_vAlignTable['u227'] = 'top';
var u228 = document.getElementById('u228');

u228.style.cursor = 'pointer';
if (bIE) u228.attachEvent("onclick", Clicku228);
else u228.addEventListener("click", Clicku228, true);
function Clicku228(e)
{

if (true) {

;

;

}

}

if (bIE) u228.attachEvent("onmouseover", MouseOveru228);
else u228.addEventListener("mouseover", MouseOveru228, true);
function MouseOveru228(e)
{
if (!IsTrueMouseOver('u228',e)) return;
if (true) {

	SetPanelVisibilityu234("");

	MoveWidgetTo('u234',110,260);

}

}

if (bIE) u228.attachEvent("onmouseout", MouseOutu228);
else u228.addEventListener("mouseout", MouseOutu228, true);
function MouseOutu228(e)
{
if (!IsTrueMouseOut('u228',e)) return;
if (true) {

	SetPanelVisibilityu234("hidden");

}

}
gv_vAlignTable['u228'] = 'top';
var u229 = document.getElementById('u229');

u229.style.cursor = 'pointer';
if (bIE) u229.attachEvent("onclick", Clicku229);
else u229.addEventListener("click", Clicku229, true);
function Clicku229(e)
{

if (true) {

;

;

}

}

if (bIE) u229.attachEvent("onmouseover", MouseOveru229);
else u229.addEventListener("mouseover", MouseOveru229, true);
function MouseOveru229(e)
{
if (!IsTrueMouseOver('u229',e)) return;
if (true) {

	SetPanelVisibilityu234("");

	MoveWidgetTo('u234',110,290);

}

}

if (bIE) u229.attachEvent("onmouseout", MouseOutu229);
else u229.addEventListener("mouseout", MouseOutu229, true);
function MouseOutu229(e)
{
if (!IsTrueMouseOut('u229',e)) return;
if (true) {

	SetPanelVisibilityu234("hidden");

}

}
gv_vAlignTable['u229'] = 'top';
var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'top';
var u231 = document.getElementById('u231');

u231.style.cursor = 'pointer';
if (bIE) u231.attachEvent("onclick", Clicku231);
else u231.addEventListener("click", Clicku231, true);
function Clicku231(e)
{

if (true) {

;

;

}

}

if (bIE) u231.attachEvent("onmouseover", MouseOveru231);
else u231.addEventListener("mouseover", MouseOveru231, true);
function MouseOveru231(e)
{
if (!IsTrueMouseOver('u231',e)) return;
if (true) {

	SetPanelVisibilityu234("");

	MoveWidgetTo('u234',110,320);

}

}

if (bIE) u231.attachEvent("onmouseout", MouseOutu231);
else u231.addEventListener("mouseout", MouseOutu231, true);
function MouseOutu231(e)
{
if (!IsTrueMouseOut('u231',e)) return;
if (true) {

	SetPanelVisibilityu234("hidden");

}

}
gv_vAlignTable['u231'] = 'top';
var u232 = document.getElementById('u232');

u232.style.cursor = 'pointer';
if (bIE) u232.attachEvent("onclick", Clicku232);
else u232.addEventListener("click", Clicku232, true);
function Clicku232(e)
{

if (true) {

;

;

}

}

if (bIE) u232.attachEvent("onmouseover", MouseOveru232);
else u232.addEventListener("mouseover", MouseOveru232, true);
function MouseOveru232(e)
{
if (!IsTrueMouseOver('u232',e)) return;
if (true) {

	SetPanelVisibilityu234("");

	MoveWidgetTo('u234',110,350);

}

}

if (bIE) u232.attachEvent("onmouseout", MouseOutu232);
else u232.addEventListener("mouseout", MouseOutu232, true);
function MouseOutu232(e)
{
if (!IsTrueMouseOut('u232',e)) return;
if (true) {

	SetPanelVisibilityu234("hidden");

}

}
gv_vAlignTable['u232'] = 'top';
var u233 = document.getElementById('u233');

u233.style.cursor = 'pointer';
if (bIE) u233.attachEvent("onclick", Clicku233);
else u233.addEventListener("click", Clicku233, true);
function Clicku233(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Closes the modal and goes to the lab"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u234 = document.getElementById('u234');

var u235 = document.getElementById('u235');

var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'center';
var u237 = document.getElementById('u237');

var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'center';
var u239 = document.getElementById('u239');

var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'center';
var u241 = document.getElementById('u241');

u241.style.cursor = 'pointer';
if (bIE) u241.attachEvent("onclick", Clicku241);
else u241.addEventListener("click", Clicku241, true);
function Clicku241(e)
{

if (true) {

}

}

var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'center';
var u243 = document.getElementById('u243');

var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'center';
var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'top';
var u246 = document.getElementById('u246');

u246.style.cursor = 'pointer';
if (bIE) u246.attachEvent("onclick", Clicku246);
else u246.addEventListener("click", Clicku246, true);
function Clicku246(e)
{

if (true) {

	BringToFront("u361");

}

}

var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'center';
var u248 = document.getElementById('u248');

var u249 = document.getElementById('u249');

var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'center';
var u251 = document.getElementById('u251');

var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'center';
var u253 = document.getElementById('u253');

var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'center';
var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'top';
var u256 = document.getElementById('u256');

var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'center';
var u258 = document.getElementById('u258');
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

	BringToFront("u361");

}

}

var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'top';
var u261 = document.getElementById('u261');
gv_vAlignTable['u261'] = 'top';
var u262 = document.getElementById('u262');
gv_vAlignTable['u262'] = 'top';
var u263 = document.getElementById('u263');

var u264 = document.getElementById('u264');

var u265 = document.getElementById('u265');
gv_vAlignTable['u265'] = 'center';
var u266 = document.getElementById('u266');
gv_vAlignTable['u266'] = 'top';
var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'top';
var u268 = document.getElementById('u268');
gv_vAlignTable['u268'] = 'top';
var u269 = document.getElementById('u269');

if (window.OnLoad) OnLoad();
