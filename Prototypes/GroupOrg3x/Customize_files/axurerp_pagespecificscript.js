
var PageName = 'Customize';
var PageId = 'p6748a06179c64d9ba1a9e13e708ef92f'
var PageUrl = 'Customize.html'
document.title = 'Customize';

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

SetWidgetFormText('u589', GetGlobalVariableValue('$YourName'));

SetWidgetFormText('u588', GetGlobalVariableValue('$yourEmail'));

SetWidgetRichText('u330', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#003366; font-size:19px;">Customize [[GroupName]] Sign-Up Sheet</span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

SetWidgetFormText('u392', GetGlobalVariableValue('$groupPrice'));

SetWidgetFormText('u404', GetGlobalVariableValue('$paymtInfo'));

SetWidgetFormText('u412', GetGlobalVariableValue('$dlvyInfo'));

SetWidgetFormText('u463', GetGlobalVariableValue('$Welcome'));

}

}

eval(GetDynamicPanelScript('u227', 1));

eval(GetDynamicPanelScript('u329', 2));

eval(GetDynamicPanelScript('u415', 1));

eval(GetDynamicPanelScript('u129', 1));

eval(GetDynamicPanelScript('u376', 1));

eval(GetDynamicPanelScript('u319', 1));

eval(GetDynamicPanelScript('u11', 2));

eval(GetDynamicPanelScript('u406', 1));

eval(GetDynamicPanelScript('u407', 1));

eval(GetDynamicPanelScript('u206', 1));

eval(GetDynamicPanelScript('u0', 1));

eval(GetDynamicPanelScript('u3', 7));

eval(GetDynamicPanelScript('u19', 3));

eval(GetDynamicPanelScript('u498', 3));

eval(GetDynamicPanelScript('u442', 1));

eval(GetDynamicPanelScript('u387', 2));

eval(GetDynamicPanelScript('u397', 1));

eval(GetDynamicPanelScript('u398', 1));

eval(GetDynamicPanelScript('u231', 1));

eval(GetDynamicPanelScript('u349', 2));

eval(GetDynamicPanelScript('u435', 1));

eval(GetDynamicPanelScript('u192', 1));

eval(GetDynamicPanelScript('u235', 1));

eval(GetDynamicPanelScript('u221', 1));

eval(GetDynamicPanelScript('u121', 2));

eval(GetDynamicPanelScript('u562', 2));

eval(GetDynamicPanelScript('u385', 1));

var u270 = document.getElementById('u270');
gv_vAlignTable['u270'] = 'center';
var u271 = document.getElementById('u271');

var u272 = document.getElementById('u272');
gv_vAlignTable['u272'] = 'center';
var u273 = document.getElementById('u273');

var u274 = document.getElementById('u274');
gv_vAlignTable['u274'] = 'center';
var u275 = document.getElementById('u275');

var u276 = document.getElementById('u276');
gv_vAlignTable['u276'] = 'center';
var u277 = document.getElementById('u277');

var u278 = document.getElementById('u278');
gv_vAlignTable['u278'] = 'center';
var u279 = document.getElementById('u279');
gv_vAlignTable['u279'] = 'top';
var u280 = document.getElementById('u280');
gv_vAlignTable['u280'] = 'top';
var u281 = document.getElementById('u281');
gv_vAlignTable['u281'] = 'top';
var u282 = document.getElementById('u282');
gv_vAlignTable['u282'] = 'top';
var u283 = document.getElementById('u283');
gv_vAlignTable['u283'] = 'top';
var u284 = document.getElementById('u284');

var u285 = document.getElementById('u285');
gv_vAlignTable['u285'] = 'center';
var u286 = document.getElementById('u286');

var u287 = document.getElementById('u287');
gv_vAlignTable['u287'] = 'center';
var u288 = document.getElementById('u288');
gv_vAlignTable['u288'] = 'top';
var u289 = document.getElementById('u289');
gv_vAlignTable['u289'] = 'top';
var u490 = document.getElementById('u490');

var u491 = document.getElementById('u491');

var u492 = document.getElementById('u492');
gv_vAlignTable['u492'] = 'center';
var u493 = document.getElementById('u493');

var u494 = document.getElementById('u494');
gv_vAlignTable['u494'] = 'center';
var u495 = document.getElementById('u495');
gv_vAlignTable['u495'] = 'top';
var u496 = document.getElementById('u496');

var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u101 = document.getElementById('u101');

u101.style.cursor = 'pointer';
if (bIE) u101.attachEvent("onclick", Clicku101);
else u101.addEventListener("click", Clicku101, true);
function Clicku101(e)
{

if (true) {

}

}
gv_vAlignTable['u101'] = 'top';
var u102 = document.getElementById('u102');
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

if (((GetSelectedOption('u111')) == (PopulateVariables('1'))) && ((GetSelectedOption('u105')) == (PopulateVariables('FREE Standard delivery')))) {

SetWidgetRichText('u108', PopulateVariables('<span style=" font-family:\'Arial\'; font-size:13px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; Sign up would close on&nbsp; </span><span style=" font-family:\'Arial\'; color:#FF6600; font-size:13px;">Tuesday, February 22</span>'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Tuesday, February 22'));

SetGlobalVariableValue('$closeDate', PopulateVariables('02/22/2011'));

}
else
if (((GetSelectedOption('u105')) == (PopulateVariables('FREE Standard delivery'))) && ((GetSelectedOption('u111')) == (PopulateVariables('2')))) {

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Monday, February 21'));

SetWidgetRichText('u108', PopulateVariables('<span style=" font-family:\'Arial\'; font-size:13px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; Sign up would close on&nbsp; </span><span style=" font-family:\'Arial\'; color:#FF6600; font-size:13px;">Monday, February 21</span>'));

SetGlobalVariableValue('$closeDate', PopulateVariables('02/21/2011'));

}

}

var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u107 = document.getElementById('u107');

var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'center';
var u109 = document.getElementById('u109');

u109.style.cursor = 'pointer';
if (bIE) u109.attachEvent("onclick", Clicku109);
else u109.addEventListener("click", Clicku109, true);
function Clicku109(e)
{

if (true) {

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Monday, February 21, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will be available until 11:59 pm Eastern Time [[CloseExDate]].&nbsp; After the close date participants will see your sheet but will not be able to sign up online. </span>'));

SetWidgetRichText('u579', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#FF6600; font-size:11px;">2 week FREE delivery to [[ZIP]] by Wednesday, March 9</span></b>'));

	BringToFront("u319");

	SetPanelStateu0("pd0u0");

	SetPanelStateu562("pd1u562");

	SetPanelVisibilityu562("");

}

}

var u297 = document.getElementById('u297');
gv_vAlignTable['u297'] = 'top';
var u298 = document.getElementById('u298');
gv_vAlignTable['u298'] = 'top';
var u299 = document.getElementById('u299');
gv_vAlignTable['u299'] = 'top';
var u500 = document.getElementById('u500');

var u392 = document.getElementById('u392');

if (bIE) u392.attachEvent("onfocus", Focusu392);
else u392.addEventListener("focus", Focusu392, true);
function Focusu392(e)
{

if (true) {

SetGlobalVariableValue('$groupPrice', PopulateVariables(''));

}

}

if (bIE) u392.attachEvent("onblur", LostFocusu392);
else u392.addEventListener("blur", LostFocusu392, true);
function LostFocusu392(e)
{

if (true) {

SetGlobalVariableValue('$groupPrice', GetWidgetFormText('u392'));

}

}

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'center';
var u111 = document.getElementById('u111');

u111.style.cursor = 'pointer';
if (bIE) u111.attachEvent("onclick", Clicku111);
else u111.addEventListener("click", Clicku111, true);
function Clicku111(e)
{

if (((GetSelectedOption('u111')) == (PopulateVariables('1'))) && ((GetSelectedOption('u105')) == (PopulateVariables('FREE Standard delivery')))) {

SetGlobalVariableValue('$closeDate', PopulateVariables('02/22/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Tuesday, February 22'));

SetGlobalVariableValue('$OrderExDate', PopulateVariables('Wednesday, February 23'));

SetWidgetRichText('u108', PopulateVariables('<span style=" font-family:\'Arial\'; font-size:13px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; Sign up would close on&nbsp; </span><span style=" font-family:\'Arial\'; color:#FF6600; font-size:13px;">[[CloseExDate]]</span>'));

}
else
if (((GetSelectedOption('u111')) == (PopulateVariables('2'))) && ((GetSelectedOption('u105')) == (PopulateVariables('FREE Standard delivery')))) {

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Monday, February 21'));

SetGlobalVariableValue('$closeDate', PopulateVariables('02/21/2011'));

SetGlobalVariableValue('$OrderExDate', PopulateVariables('Wednesday, February 23'));

SetWidgetRichText('u108', PopulateVariables('<span style=" font-family:\'Arial\'; font-size:13px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; Sign up would close on&nbsp; </span><span style=" font-family:\'Arial\'; color:#FF6600; font-size:13px;">[[CloseExDate]]</span>'));

}

}

var u112 = document.getElementById('u112');

u112.style.cursor = 'pointer';
if (bIE) u112.attachEvent("onclick", Clicku112);
else u112.addEventListener("click", Clicku112, true);
function Clicku112(e)
{

if (true) {

	BringToFront("u319");

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will be available until 11:59 pm Eastern Time on the date you choose.&nbsp; <br>After the close date participants can see your sheet but cannot sign up online. <br><br>Click &quot;Help me choose a date&quot; to check your last date to get FREE standard shipping.</span>'));

}

}
gv_vAlignTable['u112'] = 'top';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'top';
var u114 = document.getElementById('u114');

var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'center';
var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'top';
var u117 = document.getElementById('u117');

var u118 = document.getElementById('u118');

u118.style.cursor = 'pointer';
if (bIE) u118.attachEvent("onclick", Clicku118);
else u118.addEventListener("click", Clicku118, true);
function Clicku118(e)
{

if (true) {

	BringToFront("u319");

}

}

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
var u510 = document.getElementById('u510');
gv_vAlignTable['u510'] = 'center';
var u32 = document.getElementById('u32');

u32.style.cursor = 'pointer';
if (bIE) u32.attachEvent("onclick", Clicku32);
else u32.addEventListener("click", Clicku32, true);
function Clicku32(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$dlvryDate', PopulateVariables('02/17/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Thursday, February 17, 2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u33 = document.getElementById('u33');

u33.style.cursor = 'pointer';
if (bIE) u33.attachEvent("onclick", Clicku33);
else u33.addEventListener("click", Clicku33, true);
function Clicku33(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please call customer service for delivery rates for Super Rush."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u34 = document.getElementById('u34');

u34.style.cursor = 'pointer';
if (bIE) u34.attachEvent("onclick", Clicku34);
else u34.addEventListener("click", Clicku34, true);
function Clicku34(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$eventDate', PopulateVariables('Friday, February 18'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('02/18/2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u35 = document.getElementById('u35');

u35.style.cursor = 'pointer';
if (bIE) u35.attachEvent("onclick", Clicku35);
else u35.addEventListener("click", Clicku35, true);
function Clicku35(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$dlvryDate', PopulateVariables('02/19/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Saturday, February 19, 2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'top';
var u121 = document.getElementById('u121');

var u122 = document.getElementById('u122');

if (bIE) u122.attachEvent("onblur", LostFocusu122);
else u122.addEventListener("blur", LostFocusu122, true);
function LostFocusu122(e)
{

if (true) {

SetGlobalVariableValue('$yourEmail', GetWidgetFormText('u122'));

}

}

var u123 = document.getElementById('u123');

u123.style.cursor = 'pointer';
if (bIE) u123.attachEvent("onclick", Clicku123);
else u123.addEventListener("click", Clicku123, true);
function Clicku123(e)
{

if (true) {

	SetPanelStateu121("pd1u121");

	SetPanelVisibilityu129("");

SetGlobalVariableValue('$yourEmail', GetWidgetFormText('u122'));

SetWidgetRichText('u127', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">[[yourEmail]]</span>'));

}

}

var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'center';
var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'top';
var u126 = document.getElementById('u126');

u126.style.cursor = 'pointer';
if (bIE) u126.attachEvent("onclick", Clicku126);
else u126.addEventListener("click", Clicku126, true);
function Clicku126(e)
{

if (true) {

	SetPanelStateu121("pd0u121");

	SetPanelVisibilityu129("hidden");

SetWidgetFormText('u122', GetGlobalVariableValue('$yourEmail'));

}

}
gv_vAlignTable['u126'] = 'top';
var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'top';
var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u129 = document.getElementById('u129');

var u130 = document.getElementById('u130');

var u131 = document.getElementById('u131');

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'top';
var u133 = document.getElementById('u133');

var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'top';
var u135 = document.getElementById('u135');

var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'top';
var u137 = document.getElementById('u137');

var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'top';
var u139 = document.getElementById('u139');

var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u141 = document.getElementById('u141');

var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'top';
var u143 = document.getElementById('u143');

var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'top';
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

u502.style.cursor = 'pointer';
if (bIE) u502.attachEvent("onclick", Clicku502);
else u502.addEventListener("click", Clicku502, true);
function Clicku502(e)
{

if (true) {

	SetPanelStateu498("pd2u498");

}

}

var u503 = document.getElementById('u503');

u503.style.cursor = 'pointer';
if (bIE) u503.attachEvent("onclick", Clicku503);
else u503.addEventListener("click", Clicku503, true);
function Clicku503(e)
{

if (true) {

	SetPanelStateu498("pd0u498");

}

}

var u10 = document.getElementById('u10');

var u11 = document.getElementById('u11');

var u12 = document.getElementById('u12');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u14 = document.getElementById('u14');

if (bIE) u14.attachEvent("onblur", LostFocusu14);
else u14.addEventListener("blur", LostFocusu14, true);
function LostFocusu14(e)
{

if (true) {

SetGlobalVariableValue('$ZIP', GetWidgetFormText('u14'));

}

}

var u15 = document.getElementById('u15');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'top';
var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u19 = document.getElementById('u19');

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

u511.style.cursor = 'pointer';
if (bIE) u511.attachEvent("onclick", Clicku511);
else u511.addEventListener("click", Clicku511, true);
function Clicku511(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('02/13/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Sunday, February 13, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u512 = document.getElementById('u512');

u512.style.cursor = 'pointer';
if (bIE) u512.attachEvent("onclick", Clicku512);
else u512.addEventListener("click", Clicku512, true);
function Clicku512(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('02/14/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Monday, February 14, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u513 = document.getElementById('u513');

u513.style.cursor = 'pointer';
if (bIE) u513.attachEvent("onclick", Clicku513);
else u513.addEventListener("click", Clicku513, true);
function Clicku513(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('02/15/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Tuesday, February 15, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

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

	SetPanelStateu19("pd2u19");

}

}

var u23 = document.getElementById('u23');

u23.style.cursor = 'pointer';
if (bIE) u23.attachEvent("onclick", Clicku23);
else u23.addEventListener("click", Clicku23, true);
function Clicku23(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

}

}

var u24 = document.getElementById('u24');

u24.style.cursor = 'pointer';
if (bIE) u24.attachEvent("onclick", Clicku24);
else u24.addEventListener("click", Clicku24, true);
function Clicku24(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please call customer service for delivery rates for Super Rush."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u25 = document.getElementById('u25');

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
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

u521.style.cursor = 'pointer';
if (bIE) u521.attachEvent("onclick", Clicku521);
else u521.addEventListener("click", Clicku521, true);
function Clicku521(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('02/28/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Monday, February 28, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u522 = document.getElementById('u522');

u522.style.cursor = 'pointer';
if (bIE) u522.attachEvent("onclick", Clicku522);
else u522.addEventListener("click", Clicku522, true);
function Clicku522(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('02/22/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Tuesday, February 22, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

	SetPanelVisibilityu562("hidden");

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'top';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u31 = document.getElementById('u31');

u31.style.cursor = 'pointer';
if (bIE) u31.attachEvent("onclick", Clicku31);
else u31.addEventListener("click", Clicku31, true);
function Clicku31(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$eventDate', PopulateVariables('Wednesday, February 16'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('02/16/2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u206 = document.getElementById('u206');

var u207 = document.getElementById('u207');

var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'center';
var u209 = document.getElementById('u209');

var u36 = document.getElementById('u36');

u36.style.cursor = 'pointer';
if (bIE) u36.attachEvent("onclick", Clicku36);
else u36.addEventListener("click", Clicku36, true);
function Clicku36(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$eventDate', PopulateVariables('Wednesday, February 23'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('02/23/2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u37 = document.getElementById('u37');

u37.style.cursor = 'pointer';
if (bIE) u37.attachEvent("onclick", Clicku37);
else u37.addEventListener("click", Clicku37, true);
function Clicku37(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$dlvryDate', PopulateVariables('02/24/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Thursday, February 24, 2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u38 = document.getElementById('u38');

u38.style.cursor = 'pointer';
if (bIE) u38.attachEvent("onclick", Clicku38);
else u38.addEventListener("click", Clicku38, true);
function Clicku38(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$eventDate', PopulateVariables('Friday, February 25'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('02/25/2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u39 = document.getElementById('u39');

u39.style.cursor = 'pointer';
if (bIE) u39.attachEvent("onclick", Clicku39);
else u39.addEventListener("click", Clicku39, true);
function Clicku39(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$dlvryDate', PopulateVariables('02/26/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Saturday, February 26, 2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'top';
var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'top';
var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'top';
var u173 = document.getElementById('u173');

u173.style.cursor = 'pointer';
if (bIE) u173.attachEvent("onclick", Clicku173);
else u173.addEventListener("click", Clicku173, true);
function Clicku173(e)
{

if (true) {

;

;

}

}

if (bIE) u173.attachEvent("onmouseover", MouseOveru173);
else u173.addEventListener("mouseover", MouseOveru173, true);
function MouseOveru173(e)
{
if (!IsTrueMouseOver('u173',e)) return;
if (true) {

	SetPanelVisibilityu192("");

	MoveWidgetTo('u192',110,110);

}

}

if (bIE) u173.attachEvent("onmouseout", MouseOutu173);
else u173.addEventListener("mouseout", MouseOutu173, true);
function MouseOutu173(e)
{
if (!IsTrueMouseOut('u173',e)) return;
if (true) {

	SetPanelVisibilityu192("hidden");

}

}
gv_vAlignTable['u173'] = 'top';
var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'top';
var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'top';
var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'top';
var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'top';
var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'top';
var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'top';
var u531 = document.getElementById('u531');

u531.style.cursor = 'pointer';
if (bIE) u531.attachEvent("onclick", Clicku531);
else u531.addEventListener("click", Clicku531, true);
function Clicku531(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/06/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Sunday, March 6, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u532 = document.getElementById('u532');

u532.style.cursor = 'pointer';
if (bIE) u532.attachEvent("onclick", Clicku532);
else u532.addEventListener("click", Clicku532, true);
function Clicku532(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/07/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Monday, March 7, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u533 = document.getElementById('u533');

u533.style.cursor = 'pointer';
if (bIE) u533.attachEvent("onclick", Clicku533);
else u533.addEventListener("click", Clicku533, true);
function Clicku533(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/08/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Tuesday, March 8, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u40 = document.getElementById('u40');

u40.style.cursor = 'pointer';
if (bIE) u40.attachEvent("onclick", Clicku40);
else u40.addEventListener("click", Clicku40, true);
function Clicku40(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$eventDate', PopulateVariables('Sunday, February 20'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('02/20/2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u41 = document.getElementById('u41');

u41.style.cursor = 'pointer';
if (bIE) u41.attachEvent("onclick", Clicku41);
else u41.addEventListener("click", Clicku41, true);
function Clicku41(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$dlvryDate', PopulateVariables('02/21/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Thursday, February 21, 2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u42 = document.getElementById('u42');

u42.style.cursor = 'pointer';
if (bIE) u42.attachEvent("onclick", Clicku42);
else u42.addEventListener("click", Clicku42, true);
function Clicku42(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$eventDate', PopulateVariables('Tuesday, February 22'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('02/22/2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u43 = document.getElementById('u43');

u43.style.cursor = 'pointer';
if (bIE) u43.attachEvent("onclick", Clicku43);
else u43.addEventListener("click", Clicku43, true);
function Clicku43(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$eventDate', PopulateVariables('Sunday, February 27'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('02/27/2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u44 = document.getElementById('u44');

u44.style.cursor = 'pointer';
if (bIE) u44.attachEvent("onclick", Clicku44);
else u44.addEventListener("click", Clicku44, true);
function Clicku44(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$dlvryDate', PopulateVariables('02/28/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Thursday, February 28, 2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u45 = document.getElementById('u45');

u45.style.cursor = 'pointer';
if (bIE) u45.attachEvent("onclick", Clicku45);
else u45.addEventListener("click", Clicku45, true);
function Clicku45(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetWidgetFormText('u81', PopulateVariables('03/04/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Friday, March 4'));

SetGlobalVariableValue('$DlvryExDate', PopulateVariables('Friday, March 4, 2011'));

}

}

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'center';
var u47 = document.getElementById('u47');

u47.style.cursor = 'pointer';
if (bIE) u47.attachEvent("onclick", Clicku47);
else u47.addEventListener("click", Clicku47, true);
function Clicku47(e)
{

if (true) {

	SetPanelStateu19("pd1u19");

}

}

var u48 = document.getElementById('u48');

u48.style.cursor = 'pointer';
if (bIE) u48.attachEvent("onclick", Clicku48);
else u48.addEventListener("click", Clicku48, true);
function Clicku48(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

}

}

var u49 = document.getElementById('u49');

u49.style.cursor = 'pointer';
if (bIE) u49.attachEvent("onclick", Clicku49);
else u49.addEventListener("click", Clicku49, true);
function Clicku49(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$eventDate', PopulateVariables('Wednesday, March 23, 2011'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/23/2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'top';
var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'top';
var u182 = document.getElementById('u182');

u182.style.cursor = 'pointer';
if (bIE) u182.attachEvent("onclick", Clicku182);
else u182.addEventListener("click", Clicku182, true);
function Clicku182(e)
{

if (true) {

;

;

}

}

if (bIE) u182.attachEvent("onmouseover", MouseOveru182);
else u182.addEventListener("mouseover", MouseOveru182, true);
function MouseOveru182(e)
{
if (!IsTrueMouseOver('u182',e)) return;
if (true) {

	SetPanelVisibilityu192("");

	MoveWidgetTo('u192',110,140);

}

}

if (bIE) u182.attachEvent("onmouseout", MouseOutu182);
else u182.addEventListener("mouseout", MouseOutu182, true);
function MouseOutu182(e)
{
if (!IsTrueMouseOut('u182',e)) return;
if (true) {

	SetPanelVisibilityu192("hidden");

}

}
gv_vAlignTable['u182'] = 'top';
var u183 = document.getElementById('u183');

u183.style.cursor = 'pointer';
if (bIE) u183.attachEvent("onclick", Clicku183);
else u183.addEventListener("click", Clicku183, true);
function Clicku183(e)
{

if (true) {

;

;

}

}

if (bIE) u183.attachEvent("onmouseover", MouseOveru183);
else u183.addEventListener("mouseover", MouseOveru183, true);
function MouseOveru183(e)
{
if (!IsTrueMouseOver('u183',e)) return;
if (true) {

	SetPanelVisibilityu192("");

	MoveWidgetTo('u192',110,170);

}

}

if (bIE) u183.attachEvent("onmouseout", MouseOutu183);
else u183.addEventListener("mouseout", MouseOutu183, true);
function MouseOutu183(e)
{
if (!IsTrueMouseOut('u183',e)) return;
if (true) {

	SetPanelVisibilityu192("hidden");

}

}
gv_vAlignTable['u183'] = 'top';
var u184 = document.getElementById('u184');

u184.style.cursor = 'pointer';
if (bIE) u184.attachEvent("onclick", Clicku184);
else u184.addEventListener("click", Clicku184, true);
function Clicku184(e)
{

if (true) {

;

;

}

}

if (bIE) u184.attachEvent("onmouseover", MouseOveru184);
else u184.addEventListener("mouseover", MouseOveru184, true);
function MouseOveru184(e)
{
if (!IsTrueMouseOver('u184',e)) return;
if (true) {

	SetPanelVisibilityu192("");

	MoveWidgetTo('u192',110,200);

}

}

if (bIE) u184.attachEvent("onmouseout", MouseOutu184);
else u184.addEventListener("mouseout", MouseOutu184, true);
function MouseOutu184(e)
{
if (!IsTrueMouseOut('u184',e)) return;
if (true) {

	SetPanelVisibilityu192("hidden");

}

}
gv_vAlignTable['u184'] = 'top';
var u185 = document.getElementById('u185');

u185.style.cursor = 'pointer';
if (bIE) u185.attachEvent("onclick", Clicku185);
else u185.addEventListener("click", Clicku185, true);
function Clicku185(e)
{

if (true) {

;

;

}

}

if (bIE) u185.attachEvent("onmouseover", MouseOveru185);
else u185.addEventListener("mouseover", MouseOveru185, true);
function MouseOveru185(e)
{
if (!IsTrueMouseOver('u185',e)) return;
if (true) {

	SetPanelVisibilityu192("");

	MoveWidgetTo('u192',110,230);

}

}

if (bIE) u185.attachEvent("onmouseout", MouseOutu185);
else u185.addEventListener("mouseout", MouseOutu185, true);
function MouseOutu185(e)
{
if (!IsTrueMouseOut('u185',e)) return;
if (true) {

	SetPanelVisibilityu192("hidden");

}

}
gv_vAlignTable['u185'] = 'top';
var u186 = document.getElementById('u186');

u186.style.cursor = 'pointer';
if (bIE) u186.attachEvent("onclick", Clicku186);
else u186.addEventListener("click", Clicku186, true);
function Clicku186(e)
{

if (true) {

;

;

}

}

if (bIE) u186.attachEvent("onmouseover", MouseOveru186);
else u186.addEventListener("mouseover", MouseOveru186, true);
function MouseOveru186(e)
{
if (!IsTrueMouseOver('u186',e)) return;
if (true) {

	SetPanelVisibilityu192("");

	MoveWidgetTo('u192',110,260);

}

}

if (bIE) u186.attachEvent("onmouseout", MouseOutu186);
else u186.addEventListener("mouseout", MouseOutu186, true);
function MouseOutu186(e)
{
if (!IsTrueMouseOut('u186',e)) return;
if (true) {

	SetPanelVisibilityu192("hidden");

}

}
gv_vAlignTable['u186'] = 'top';
var u187 = document.getElementById('u187');

u187.style.cursor = 'pointer';
if (bIE) u187.attachEvent("onclick", Clicku187);
else u187.addEventListener("click", Clicku187, true);
function Clicku187(e)
{

if (true) {

;

;

}

}

if (bIE) u187.attachEvent("onmouseover", MouseOveru187);
else u187.addEventListener("mouseover", MouseOveru187, true);
function MouseOveru187(e)
{
if (!IsTrueMouseOver('u187',e)) return;
if (true) {

	SetPanelVisibilityu192("");

	MoveWidgetTo('u192',110,290);

}

}

if (bIE) u187.attachEvent("onmouseout", MouseOutu187);
else u187.addEventListener("mouseout", MouseOutu187, true);
function MouseOutu187(e)
{
if (!IsTrueMouseOut('u187',e)) return;
if (true) {

	SetPanelVisibilityu192("hidden");

}

}
gv_vAlignTable['u187'] = 'top';
var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'top';
var u189 = document.getElementById('u189');

u189.style.cursor = 'pointer';
if (bIE) u189.attachEvent("onclick", Clicku189);
else u189.addEventListener("click", Clicku189, true);
function Clicku189(e)
{

if (true) {

;

;

}

}

if (bIE) u189.attachEvent("onmouseover", MouseOveru189);
else u189.addEventListener("mouseover", MouseOveru189, true);
function MouseOveru189(e)
{
if (!IsTrueMouseOver('u189',e)) return;
if (true) {

	SetPanelVisibilityu192("");

	MoveWidgetTo('u192',110,320);

}

}

if (bIE) u189.attachEvent("onmouseout", MouseOutu189);
else u189.addEventListener("mouseout", MouseOutu189, true);
function MouseOutu189(e)
{
if (!IsTrueMouseOut('u189',e)) return;
if (true) {

	SetPanelVisibilityu192("hidden");

}

}
gv_vAlignTable['u189'] = 'top';
var u541 = document.getElementById('u541');

u541.style.cursor = 'pointer';
if (bIE) u541.attachEvent("onclick", Clicku541);
else u541.addEventListener("click", Clicku541, true);
function Clicku541(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/16/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Wednesday, March 16, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u542 = document.getElementById('u542');

u542.style.cursor = 'pointer';
if (bIE) u542.attachEvent("onclick", Clicku542);
else u542.addEventListener("click", Clicku542, true);
function Clicku542(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/17/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Thursday, March 17, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u543 = document.getElementById('u543');

u543.style.cursor = 'pointer';
if (bIE) u543.attachEvent("onclick", Clicku543);
else u543.addEventListener("click", Clicku543, true);
function Clicku543(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/18/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Friday, March 18, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u50 = document.getElementById('u50');

u50.style.cursor = 'pointer';
if (bIE) u50.attachEvent("onclick", Clicku50);
else u50.addEventListener("click", Clicku50, true);
function Clicku50(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/24/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Thursday, March 24, 2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u51 = document.getElementById('u51');

u51.style.cursor = 'pointer';
if (bIE) u51.attachEvent("onclick", Clicku51);
else u51.addEventListener("click", Clicku51, true);
function Clicku51(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$eventDate', PopulateVariables('Friday, March 25, 2011'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/25/2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u52 = document.getElementById('u52');

u52.style.cursor = 'pointer';
if (bIE) u52.attachEvent("onclick", Clicku52);
else u52.addEventListener("click", Clicku52, true);
function Clicku52(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/26/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Saturday, March 26, 2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u53 = document.getElementById('u53');

u53.style.cursor = 'pointer';
if (bIE) u53.attachEvent("onclick", Clicku53);
else u53.addEventListener("click", Clicku53, true);
function Clicku53(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$eventDate', PopulateVariables('Sunday, March 20, 2011`'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/20/2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u54 = document.getElementById('u54');

u54.style.cursor = 'pointer';
if (bIE) u54.attachEvent("onclick", Clicku54);
else u54.addEventListener("click", Clicku54, true);
function Clicku54(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/21/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Monday, March 21, 2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u55 = document.getElementById('u55');

u55.style.cursor = 'pointer';
if (bIE) u55.attachEvent("onclick", Clicku55);
else u55.addEventListener("click", Clicku55, true);
function Clicku55(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$eventDate', PopulateVariables('Tuesday, March 22, 2011'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/22/2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u56 = document.getElementById('u56');

u56.style.cursor = 'pointer';
if (bIE) u56.attachEvent("onclick", Clicku56);
else u56.addEventListener("click", Clicku56, true);
function Clicku56(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$eventDate', PopulateVariables('Sunday, March 27'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/27/2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u57 = document.getElementById('u57');

u57.style.cursor = 'pointer';
if (bIE) u57.attachEvent("onclick", Clicku57);
else u57.addEventListener("click", Clicku57, true);
function Clicku57(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/28/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Thursday, March 28, 2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u58 = document.getElementById('u58');

u58.style.cursor = 'pointer';
if (bIE) u58.attachEvent("onclick", Clicku58);
else u58.addEventListener("click", Clicku58, true);
function Clicku58(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$eventDate', PopulateVariables('Wednesday, March 30'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/30/2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u59 = document.getElementById('u59');

u59.style.cursor = 'pointer';
if (bIE) u59.attachEvent("onclick", Clicku59);
else u59.addEventListener("click", Clicku59, true);
function Clicku59(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/31/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Thursday, March 31, 2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u190 = document.getElementById('u190');

u190.style.cursor = 'pointer';
if (bIE) u190.attachEvent("onclick", Clicku190);
else u190.addEventListener("click", Clicku190, true);
function Clicku190(e)
{

if (true) {

;

;

}

}

if (bIE) u190.attachEvent("onmouseover", MouseOveru190);
else u190.addEventListener("mouseover", MouseOveru190, true);
function MouseOveru190(e)
{
if (!IsTrueMouseOver('u190',e)) return;
if (true) {

	SetPanelVisibilityu192("");

	MoveWidgetTo('u192',110,350);

}

}

if (bIE) u190.attachEvent("onmouseout", MouseOutu190);
else u190.addEventListener("mouseout", MouseOutu190, true);
function MouseOutu190(e)
{
if (!IsTrueMouseOut('u190',e)) return;
if (true) {

	SetPanelVisibilityu192("hidden");

}

}
gv_vAlignTable['u190'] = 'top';
var u191 = document.getElementById('u191');

u191.style.cursor = 'pointer';
if (bIE) u191.attachEvent("onclick", Clicku191);
else u191.addEventListener("click", Clicku191, true);
function Clicku191(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Closes the modal and goes to the lab"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u192 = document.getElementById('u192');

var u193 = document.getElementById('u193');

var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'center';
var u195 = document.getElementById('u195');

var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'center';
var u197 = document.getElementById('u197');

var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'center';
var u199 = document.getElementById('u199');

u199.style.cursor = 'pointer';
if (bIE) u199.attachEvent("onclick", Clicku199);
else u199.addEventListener("click", Clicku199, true);
function Clicku199(e)
{

if (true) {

}

}

var u551 = document.getElementById('u551');

u551.style.cursor = 'pointer';
if (bIE) u551.attachEvent("onclick", Clicku551);
else u551.addEventListener("click", Clicku551, true);
function Clicku551(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/26/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Saturday, March 26, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u552 = document.getElementById('u552');

u552.style.cursor = 'pointer';
if (bIE) u552.attachEvent("onclick", Clicku552);
else u552.addEventListener("click", Clicku552, true);
function Clicku552(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/27/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Sunday, March 27, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u553 = document.getElementById('u553');

u553.style.cursor = 'pointer';
if (bIE) u553.attachEvent("onclick", Clicku553);
else u553.addEventListener("click", Clicku553, true);
function Clicku553(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/28/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Monday, March 28, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u60 = document.getElementById('u60');

u60.style.cursor = 'pointer';
if (bIE) u60.attachEvent("onclick", Clicku60);
else u60.addEventListener("click", Clicku60, true);
function Clicku60(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$eventDate', PopulateVariables('Tuesday, March 29'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/29/2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u61 = document.getElementById('u61');

u61.style.cursor = 'pointer';
if (bIE) u61.attachEvent("onclick", Clicku61);
else u61.addEventListener("click", Clicku61, true);
function Clicku61(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$eventDate', PopulateVariables('Wednesday, March 16, 2011'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/16/2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u62 = document.getElementById('u62');

u62.style.cursor = 'pointer';
if (bIE) u62.attachEvent("onclick", Clicku62);
else u62.addEventListener("click", Clicku62, true);
function Clicku62(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/17/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Thursday, March 17, 2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u63 = document.getElementById('u63');

u63.style.cursor = 'pointer';
if (bIE) u63.attachEvent("onclick", Clicku63);
else u63.addEventListener("click", Clicku63, true);
function Clicku63(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$eventDate', PopulateVariables('Friday, March 18, 2011'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/18/2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u64 = document.getElementById('u64');

u64.style.cursor = 'pointer';
if (bIE) u64.attachEvent("onclick", Clicku64);
else u64.addEventListener("click", Clicku64, true);
function Clicku64(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/19/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Saturday, March 19, 2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u65 = document.getElementById('u65');

u65.style.cursor = 'pointer';
if (bIE) u65.attachEvent("onclick", Clicku65);
else u65.addEventListener("click", Clicku65, true);
function Clicku65(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$eventDate', PopulateVariables('Sunday, March 13, 2011'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/13/2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u66 = document.getElementById('u66');

u66.style.cursor = 'pointer';
if (bIE) u66.attachEvent("onclick", Clicku66);
else u66.addEventListener("click", Clicku66, true);
function Clicku66(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/14/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Monday, March 14, 2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u67 = document.getElementById('u67');

u67.style.cursor = 'pointer';
if (bIE) u67.attachEvent("onclick", Clicku67);
else u67.addEventListener("click", Clicku67, true);
function Clicku67(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$eventDate', PopulateVariables('Tuesday, March 15, 2011'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/15/2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u68 = document.getElementById('u68');

u68.style.cursor = 'pointer';
if (bIE) u68.attachEvent("onclick", Clicku68);
else u68.addEventListener("click", Clicku68, true);
function Clicku68(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$eventDate', PopulateVariables('Wednesday, March 9, 2011'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/09/2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u69 = document.getElementById('u69');

u69.style.cursor = 'pointer';
if (bIE) u69.attachEvent("onclick", Clicku69);
else u69.addEventListener("click", Clicku69, true);
function Clicku69(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/10/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Thursday, March 10, 2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u560 = document.getElementById('u560');

u560.style.cursor = 'pointer';
if (bIE) u560.attachEvent("onclick", Clicku560);
else u560.addEventListener("click", Clicku560, true);
function Clicku560(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/04/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Friday, March 4, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u561 = document.getElementById('u561');

u561.style.cursor = 'pointer';
if (bIE) u561.attachEvent("onclick", Clicku561);
else u561.addEventListener("click", Clicku561, true);
function Clicku561(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/05/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Saturday, March 5, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u562 = document.getElementById('u562');

var u563 = document.getElementById('u563');

var u70 = document.getElementById('u70');

u70.style.cursor = 'pointer';
if (bIE) u70.attachEvent("onclick", Clicku70);
else u70.addEventListener("click", Clicku70, true);
function Clicku70(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$eventDate', PopulateVariables('Friday, March 11, 2011'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/11/2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u71 = document.getElementById('u71');

u71.style.cursor = 'pointer';
if (bIE) u71.attachEvent("onclick", Clicku71);
else u71.addEventListener("click", Clicku71, true);
function Clicku71(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/12/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Saturday, March 12, 2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u72 = document.getElementById('u72');

u72.style.cursor = 'pointer';
if (bIE) u72.attachEvent("onclick", Clicku72);
else u72.addEventListener("click", Clicku72, true);
function Clicku72(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$eventDate', PopulateVariables('Sunday, March 6, 2011`'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/06/2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u73 = document.getElementById('u73');

u73.style.cursor = 'pointer';
if (bIE) u73.attachEvent("onclick", Clicku73);
else u73.addEventListener("click", Clicku73, true);
function Clicku73(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/07/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Monday, March 7, 2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u74 = document.getElementById('u74');

u74.style.cursor = 'pointer';
if (bIE) u74.attachEvent("onclick", Clicku74);
else u74.addEventListener("click", Clicku74, true);
function Clicku74(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$eventDate', PopulateVariables('Tuesday, March 8, 2011'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/08/2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u75 = document.getElementById('u75');

u75.style.cursor = 'pointer';
if (bIE) u75.attachEvent("onclick", Clicku75);
else u75.addEventListener("click", Clicku75, true);
function Clicku75(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$eventDate', PopulateVariables('Wednesday, March 2, 2011'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/02/2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u76 = document.getElementById('u76');

u76.style.cursor = 'pointer';
if (bIE) u76.attachEvent("onclick", Clicku76);
else u76.addEventListener("click", Clicku76, true);
function Clicku76(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/03/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Thursday, March 3, 2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u77 = document.getElementById('u77');

u77.style.cursor = 'pointer';
if (bIE) u77.attachEvent("onclick", Clicku77);
else u77.addEventListener("click", Clicku77, true);
function Clicku77(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$eventDate', PopulateVariables('Friday, March 4, 2011'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/04/2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u78 = document.getElementById('u78');

u78.style.cursor = 'pointer';
if (bIE) u78.attachEvent("onclick", Clicku78);
else u78.addEventListener("click", Clicku78, true);
function Clicku78(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/5/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Saturday, March 05, 2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u79 = document.getElementById('u79');

u79.style.cursor = 'pointer';
if (bIE) u79.attachEvent("onclick", Clicku79);
else u79.addEventListener("click", Clicku79, true);
function Clicku79(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$eventDate', PopulateVariables('Tuesday, March 1, 2011'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/01/2011'));

SetWidgetFormText('u81', GetGlobalVariableValue('$dlvryDate'));

}

}

var u570 = document.getElementById('u570');
gv_vAlignTable['u570'] = 'center';
var u571 = document.getElementById('u571');

var u572 = document.getElementById('u572');
gv_vAlignTable['u572'] = 'center';
var u573 = document.getElementById('u573');

var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'top';
var u81 = document.getElementById('u81');

u81.style.cursor = 'pointer';
if (bIE) u81.attachEvent("onclick", Clicku81);
else u81.addEventListener("click", Clicku81, true);
function Clicku81(e)
{

if (true) {

SetWidgetFormText('u81', PopulateVariables(''));

	SetPanelStateu19("pd1u19");

	BringToFront("u11");

}

}

var u82 = document.getElementById('u82');

u82.style.cursor = 'pointer';
if (bIE) u82.attachEvent("onclick", Clicku82);
else u82.addEventListener("click", Clicku82, true);
function Clicku82(e)
{

if (true) {

	SetPanelStateu11("pd1u11");

SetWidgetRichText('u97', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#FF6600; font-size:16px;">Order dates for delivery to ZIP/Postal [[ZIP]] by Wednesday, March 9.</span></b>'));

SetGlobalVariableValue('$OrderExDate', PopulateVariables('Wednesday, February 23'));

SetGlobalVariableValue('$closeDate', PopulateVariables('02/21/2011'));

}

}

var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'center';
var u84 = document.getElementById('u84');

u84.style.cursor = 'pointer';
if (bIE) u84.attachEvent("onclick", Clicku84);
else u84.addEventListener("click", Clicku84, true);
function Clicku84(e)
{

if (true) {

	BringToFront("u319");

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will be available until 11:59 pm Eastern Time on the date you choose.&nbsp; <br>After the close date participants can see your sheet but cannot sign up online. <br><br>Click &quot;Help me choose a date&quot; to check your last date to get FREE standard shipping.</span>'));

}

}
gv_vAlignTable['u84'] = 'top';
var u85 = document.getElementById('u85');

var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'center';
var u87 = document.getElementById('u87');

var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'center';
var u89 = document.getElementById('u89');

var u580 = document.getElementById('u580');

var u581 = document.getElementById('u581');
gv_vAlignTable['u581'] = 'center';
var u582 = document.getElementById('u582');

var u583 = document.getElementById('u583');
gv_vAlignTable['u583'] = 'center';
var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'center';
var u91 = document.getElementById('u91');

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'center';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'top';
var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'top';
var u95 = document.getElementById('u95');

var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'center';
var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'top';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'top';
var u400 = document.getElementById('u400');
gv_vAlignTable['u400'] = 'center';
var u401 = document.getElementById('u401');

var u402 = document.getElementById('u402');
gv_vAlignTable['u402'] = 'center';
var u403 = document.getElementById('u403');
gv_vAlignTable['u403'] = 'top';
var u404 = document.getElementById('u404');

if (bIE) u404.attachEvent("onblur", LostFocusu404);
else u404.addEventListener("blur", LostFocusu404, true);
function LostFocusu404(e)
{

if (true) {

SetGlobalVariableValue('$paymtInfo', GetWidgetFormText('u404'));

}

}

var u405 = document.getElementById('u405');
gv_vAlignTable['u405'] = 'top';
var u406 = document.getElementById('u406');

var u407 = document.getElementById('u407');

var u408 = document.getElementById('u408');

var u409 = document.getElementById('u409');
gv_vAlignTable['u409'] = 'center';
var u410 = document.getElementById('u410');

var u411 = document.getElementById('u411');
gv_vAlignTable['u411'] = 'center';
var u412 = document.getElementById('u412');

if (bIE) u412.attachEvent("onblur", LostFocusu412);
else u412.addEventListener("blur", LostFocusu412, true);
function LostFocusu412(e)
{

if (true) {

SetGlobalVariableValue('$dlvyInfo', GetWidgetFormText('u412'));

}

}

var u413 = document.getElementById('u413');
gv_vAlignTable['u413'] = 'top';
var u414 = document.getElementById('u414');
gv_vAlignTable['u414'] = 'top';
var u415 = document.getElementById('u415');

var u416 = document.getElementById('u416');

var u417 = document.getElementById('u417');
gv_vAlignTable['u417'] = 'center';
var u418 = document.getElementById('u418');

var u419 = document.getElementById('u419');

var u420 = document.getElementById('u420');
gv_vAlignTable['u420'] = 'center';
var u421 = document.getElementById('u421');

var u422 = document.getElementById('u422');
gv_vAlignTable['u422'] = 'center';
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
gv_vAlignTable['u290'] = 'top';
var u291 = document.getElementById('u291');
gv_vAlignTable['u291'] = 'top';
var u292 = document.getElementById('u292');
gv_vAlignTable['u292'] = 'top';
var u293 = document.getElementById('u293');
gv_vAlignTable['u293'] = 'top';
var u294 = document.getElementById('u294');

u294.style.cursor = 'pointer';
if (bIE) u294.attachEvent("onclick", Clicku294);
else u294.addEventListener("click", Clicku294, true);
function Clicku294(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("This is not enabled in the prototype."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u295 = document.getElementById('u295');
gv_vAlignTable['u295'] = 'center';
var u296 = document.getElementById('u296');
gv_vAlignTable['u296'] = 'top';
var u430 = document.getElementById('u430');

var u431 = document.getElementById('u431');

var u432 = document.getElementById('u432');
gv_vAlignTable['u432'] = 'center';
var u433 = document.getElementById('u433');

var u434 = document.getElementById('u434');
gv_vAlignTable['u434'] = 'center';
var u435 = document.getElementById('u435');

var u436 = document.getElementById('u436');

u436.style.cursor = 'pointer';
if (bIE) u436.attachEvent("onclick", Clicku436);
else u436.addEventListener("click", Clicku436, true);
function Clicku436(e)
{

if (true) {

SetWidgetFormText('u436', PopulateVariables(''));

SetGlobalVariableValue('$Comments', PopulateVariables(''));

}

}

if (bIE) u436.attachEvent("onblur", LostFocusu436);
else u436.addEventListener("blur", LostFocusu436, true);
function LostFocusu436(e)
{

if (true) {

SetGlobalVariableValue('$Comments', GetWidgetFormText('u436'));

}

}

var u437 = document.getElementById('u437');

var u438 = document.getElementById('u438');
gv_vAlignTable['u438'] = 'center';
var u439 = document.getElementById('u439');

var u440 = document.getElementById('u440');
gv_vAlignTable['u440'] = 'center';
var u441 = document.getElementById('u441');
gv_vAlignTable['u441'] = 'top';
var u442 = document.getElementById('u442');

var u443 = document.getElementById('u443');

var u444 = document.getElementById('u444');
gv_vAlignTable['u444'] = 'center';
var u445 = document.getElementById('u445');

u445.style.cursor = 'pointer';
if (bIE) u445.attachEvent("onclick", Clicku445);
else u445.addEventListener("click", Clicku445, true);
function Clicku445(e)
{

if ((GetGlobalVariableValue('$round')) == (PopulateVariables('0'))) {

SetGlobalVariableValue('$round', PopulateVariables('1'));

SetGlobalVariableValue('$Welcome', GetWidgetFormText('u463'));

SetGlobalVariableValue('$contactEmail', GetWidgetFormText('u588'));

SetGlobalVariableValue('$contactName', GetWidgetFormText('u589'));

SetGlobalVariableValue('$contactPhone', GetWidgetFormText('u592'));

	self.location.href="Preview.html" + GetQuerystring();

}
else
if ((GetGlobalVariableValue('$round')) == (PopulateVariables('1'))) {

	self.location.href="Manage.html" + GetQuerystring();

SetGlobalVariableValue('$Welcome', GetWidgetFormText('u463'));

}

}

var u446 = document.getElementById('u446');
gv_vAlignTable['u446'] = 'center';
var u447 = document.getElementById('u447');

var u448 = document.getElementById('u448');

var u449 = document.getElementById('u449');
gv_vAlignTable['u449'] = 'center';
var u450 = document.getElementById('u450');

var u451 = document.getElementById('u451');
gv_vAlignTable['u451'] = 'center';
var u452 = document.getElementById('u452');
gv_vAlignTable['u452'] = 'top';
var u453 = document.getElementById('u453');

u453.style.cursor = 'pointer';
if (bIE) u453.attachEvent("onclick", Clicku453);
else u453.addEventListener("click", Clicku453, true);
function Clicku453(e)
{

if (((GetCheckState('u453')) == (false)) && ((GetCheckState('u474')) == (false))) {

SetGlobalVariableValue('$emaiNew', PopulateVariables('Do not send email notifications.'));

;

}
else
if (((GetCheckState('u453')) == (true)) && ((GetCheckState('u474')) == (true))) {

SetGlobalVariableValue('$emaiNew', PopulateVariables('Each time someone signs up and when my sign-up sheet closes.'));

;

}
else
if (((GetCheckState('u453')) == (true)) && ((GetCheckState('u474')) == (false))) {

SetGlobalVariableValue('$emaiNew', PopulateVariables('Each time someone  signs up.'));

}
else
if (((GetCheckState('u453')) == (false)) && ((GetCheckState('u474')) == (true))) {

SetGlobalVariableValue('$emaiNew', PopulateVariables('When my sign-up sheet closes.'));

}

}

var u454 = document.getElementById('u454');
gv_vAlignTable['u454'] = 'top';
var u455 = document.getElementById('u455');

var u456 = document.getElementById('u456');
gv_vAlignTable['u456'] = 'top';
var u457 = document.getElementById('u457');

var u458 = document.getElementById('u458');

var u459 = document.getElementById('u459');
gv_vAlignTable['u459'] = 'center';
var u460 = document.getElementById('u460');

var u461 = document.getElementById('u461');
gv_vAlignTable['u461'] = 'center';
var u462 = document.getElementById('u462');
gv_vAlignTable['u462'] = 'top';
var u463 = document.getElementById('u463');

var u464 = document.getElementById('u464');

var u465 = document.getElementById('u465');

var u466 = document.getElementById('u466');
gv_vAlignTable['u466'] = 'center';
var u467 = document.getElementById('u467');

var u468 = document.getElementById('u468');
gv_vAlignTable['u468'] = 'center';
var u469 = document.getElementById('u469');

var u470 = document.getElementById('u470');
gv_vAlignTable['u470'] = 'center';
var u471 = document.getElementById('u471');

var u472 = document.getElementById('u472');
gv_vAlignTable['u472'] = 'center';
var u473 = document.getElementById('u473');
gv_vAlignTable['u473'] = 'top';
var u474 = document.getElementById('u474');

u474.style.cursor = 'pointer';
if (bIE) u474.attachEvent("onclick", Clicku474);
else u474.addEventListener("click", Clicku474, true);
function Clicku474(e)
{

if (((GetCheckState('u474')) == (false)) && ((GetCheckState('u453')) == (false))) {

SetGlobalVariableValue('$emaiNew', PopulateVariables('Do not send email notifications.'));

;

}
else
if (((GetCheckState('u474')) == (false)) && ((GetCheckState('u453')) == (true))) {

SetGlobalVariableValue('$emaiNew', PopulateVariables('Each time someone signs up.'));

}
else
if (((GetCheckState('u474')) == (true)) && ((GetCheckState('u453')) == (true))) {

SetGlobalVariableValue('$emaiNew', PopulateVariables('Each time someone signs up and when my sign-up sheet closes.'));

}
else
if (((GetCheckState('u474')) == (true)) && ((GetCheckState('u453')) == (false))) {

SetGlobalVariableValue('$emaiNew', PopulateVariables('When my sign-up sheet closes.'));

}

}

var u475 = document.getElementById('u475');
gv_vAlignTable['u475'] = 'top';
var u476 = document.getElementById('u476');

u476.style.cursor = 'pointer';
if (bIE) u476.attachEvent("onclick", Clicku476);
else u476.addEventListener("click", Clicku476, true);
function Clicku476(e)
{

if ((GetCheckState('u476')) == (true)) {

	SetPanelVisibilityu407("");

	MoveWidgetTo('u415',0,120);

}
else
if (true) {

	SetPanelVisibilityu407("hidden");

SetGlobalVariableValue('$dlvyInfo', PopulateVariables(''));

SetWidgetFormText('u412', PopulateVariables(' '));

	MoveWidgetTo('u415',0,25);

}

}

var u477 = document.getElementById('u477');
gv_vAlignTable['u477'] = 'top';
var u478 = document.getElementById('u478');

u478.style.cursor = 'pointer';
if (bIE) u478.attachEvent("onclick", Clicku478);
else u478.addEventListener("click", Clicku478, true);
function Clicku478(e)
{

if ((GetCheckState('u478')) == (true)) {

	MoveWidgetTo('u406',0,120);

	SetPanelVisibilityu398("");

}
else
if (true) {

	MoveWidgetTo('u406',0,25);

SetGlobalVariableValue('$paymtInfo', PopulateVariables(''));

SetWidgetFormText('u404', PopulateVariables(''));

	SetPanelVisibilityu398("hidden");

}

}

var u479 = document.getElementById('u479');
gv_vAlignTable['u479'] = 'top';
var u480 = document.getElementById('u480');

u480.style.cursor = 'pointer';
if (bIE) u480.attachEvent("onclick", Clicku480);
else u480.addEventListener("click", Clicku480, true);
function Clicku480(e)
{

if ((GetCheckState('u480')) == (true)) {

	MoveWidgetTo('u397',0,120);

	SetPanelStateu387("pd1u387");

}
else
if (true) {

	MoveWidgetTo('u397',0,50);

	SetPanelStateu387("pd0u387");

SetGlobalVariableValue('$groupPrice', PopulateVariables(''));

SetWidgetFormText('u392', PopulateVariables(''));

}

}

var u481 = document.getElementById('u481');
gv_vAlignTable['u481'] = 'top';
var u482 = document.getElementById('u482');
gv_vAlignTable['u482'] = 'top';
var u483 = document.getElementById('u483');

var u484 = document.getElementById('u484');
gv_vAlignTable['u484'] = 'center';
var u485 = document.getElementById('u485');

var u486 = document.getElementById('u486');
gv_vAlignTable['u486'] = 'center';
var u487 = document.getElementById('u487');

var u488 = document.getElementById('u488');

var u489 = document.getElementById('u489');
gv_vAlignTable['u489'] = 'center';
var u204 = document.getElementById('u204');

u204.style.cursor = 'pointer';
if (bIE) u204.attachEvent("onclick", Clicku204);
else u204.addEventListener("click", Clicku204, true);
function Clicku204(e)
{

if (true) {

	BringToFront("u319");

}

}

var u300 = document.getElementById('u300');
gv_vAlignTable['u300'] = 'top';
var u301 = document.getElementById('u301');
gv_vAlignTable['u301'] = 'top';
var u302 = document.getElementById('u302');
gv_vAlignTable['u302'] = 'top';
var u303 = document.getElementById('u303');
gv_vAlignTable['u303'] = 'top';
var u304 = document.getElementById('u304');
gv_vAlignTable['u304'] = 'top';
var u305 = document.getElementById('u305');

var u306 = document.getElementById('u306');
gv_vAlignTable['u306'] = 'center';
var u307 = document.getElementById('u307');

var u308 = document.getElementById('u308');
gv_vAlignTable['u308'] = 'center';
var u309 = document.getElementById('u309');

u309.style.cursor = 'pointer';
if (bIE) u309.attachEvent("onclick", Clicku309);
else u309.addEventListener("click", Clicku309, true);
function Clicku309(e)
{

if (true) {

	BringToFront("u319");

}

}

var u497 = document.getElementById('u497');
gv_vAlignTable['u497'] = 'center';
var u498 = document.getElementById('u498');

var u499 = document.getElementById('u499');

u499.style.cursor = 'pointer';
if (bIE) u499.attachEvent("onclick", Clicku499);
else u499.addEventListener("click", Clicku499, true);
function Clicku499(e)
{

if (true) {

	SetPanelStateu3("pd1u3");

	SetPanelStateu498("pd0u498");

	BringToFront("u0");

	ScrollToWidget('u10', false,true);

SetWidgetFormText('u14', PopulateVariables(''));

SetWidgetFormText('u81', PopulateVariables('mm/dd/yyyy'));

}

}

var u504 = document.getElementById('u504');

u504.style.cursor = 'pointer';
if (bIE) u504.attachEvent("onclick", Clicku504);
else u504.addEventListener("click", Clicku504, true);
function Clicku504(e)
{

if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please call customer service for delivery rates for Super Rush."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

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
gv_vAlignTable['u313'] = 'top';
var u314 = document.getElementById('u314');

var u315 = document.getElementById('u315');
gv_vAlignTable['u315'] = 'center';
var u316 = document.getElementById('u316');
gv_vAlignTable['u316'] = 'top';
var u317 = document.getElementById('u317');

u317.style.cursor = 'pointer';
if (bIE) u317.attachEvent("onclick", Clicku317);
else u317.addEventListener("click", Clicku317, true);
function Clicku317(e)
{

if (true) {

	BringToFront("u319");

}

}

var u318 = document.getElementById('u318');
gv_vAlignTable['u318'] = 'center';
var u319 = document.getElementById('u319');

var u514 = document.getElementById('u514');

u514.style.cursor = 'pointer';
if (bIE) u514.attachEvent("onclick", Clicku514);
else u514.addEventListener("click", Clicku514, true);
function Clicku514(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('02/16/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Wednesday, February 16, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u515 = document.getElementById('u515');

u515.style.cursor = 'pointer';
if (bIE) u515.attachEvent("onclick", Clicku515);
else u515.addEventListener("click", Clicku515, true);
function Clicku515(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('02/17/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Thursday, February 17, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u516 = document.getElementById('u516');

u516.style.cursor = 'pointer';
if (bIE) u516.attachEvent("onclick", Clicku516);
else u516.addEventListener("click", Clicku516, true);
function Clicku516(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('02/18/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Friday, February 18, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u517 = document.getElementById('u517');

u517.style.cursor = 'pointer';
if (bIE) u517.attachEvent("onclick", Clicku517);
else u517.addEventListener("click", Clicku517, true);
function Clicku517(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('02/19/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Saturday, February 19, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u518 = document.getElementById('u518');

u518.style.cursor = 'pointer';
if (bIE) u518.attachEvent("onclick", Clicku518);
else u518.addEventListener("click", Clicku518, true);
function Clicku518(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('02/20/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Sunday, February 20, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u519 = document.getElementById('u519');

u519.style.cursor = 'pointer';
if (bIE) u519.attachEvent("onclick", Clicku519);
else u519.addEventListener("click", Clicku519, true);
function Clicku519(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('02/27/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Sunday, February 27, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u320 = document.getElementById('u320');

var u321 = document.getElementById('u321');
gv_vAlignTable['u321'] = 'center';
var u322 = document.getElementById('u322');

var u323 = document.getElementById('u323');
gv_vAlignTable['u323'] = 'center';
var u324 = document.getElementById('u324');
gv_vAlignTable['u324'] = 'top';
var u325 = document.getElementById('u325');

u325.style.cursor = 'pointer';
if (bIE) u325.attachEvent("onclick", Clicku325);
else u325.addEventListener("click", Clicku325, true);
function Clicku325(e)
{

if (true) {

;

;

;

SetGlobalVariableValue('$contactName', GetGlobalVariableValue('$YourName'));

SetGlobalVariableValue('$contactEmail', GetGlobalVariableValue('$yourEmail'));

SetGlobalVariableValue('$contactPhone', GetGlobalVariableValue('$yourPhone'));

	MoveWidgetTo('u376',12,620);

}

}

var u326 = document.getElementById('u326');
gv_vAlignTable['u326'] = 'top';
var u327 = document.getElementById('u327');

u327.style.cursor = 'pointer';
if (bIE) u327.attachEvent("onclick", Clicku327);
else u327.addEventListener("click", Clicku327, true);
function Clicku327(e)
{

if (true) {

	MoveWidgetTo('u376',12,780);

}

}

var u328 = document.getElementById('u328');
gv_vAlignTable['u328'] = 'top';
var u329 = document.getElementById('u329');

var u520 = document.getElementById('u520');

u520.style.cursor = 'pointer';
if (bIE) u520.attachEvent("onclick", Clicku520);
else u520.addEventListener("click", Clicku520, true);
function Clicku520(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('02/21/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Monday, February 21, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u523 = document.getElementById('u523');

u523.style.cursor = 'pointer';
if (bIE) u523.attachEvent("onclick", Clicku523);
else u523.addEventListener("click", Clicku523, true);
function Clicku523(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

	SetPanelStateu562("pd0u562");

	SetPanelVisibilityu562("");

SetGlobalVariableValue('$closeDate', PopulateVariables('02/23/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Wednesday, February 23, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

SetWidgetRichText('u568', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#FF6600; font-size:11px;">1 week Rush delivery to [[ZIP]] by:</span></b>'));

SetWidgetRichText('u566', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#FF6600; font-size:11px;">2 week FREE delivery to [[ZIP]] by:</span></b>'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u524 = document.getElementById('u524');

u524.style.cursor = 'pointer';
if (bIE) u524.attachEvent("onclick", Clicku524);
else u524.addEventListener("click", Clicku524, true);
function Clicku524(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('02/24/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Thursday, February 24, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u525 = document.getElementById('u525');

u525.style.cursor = 'pointer';
if (bIE) u525.attachEvent("onclick", Clicku525);
else u525.addEventListener("click", Clicku525, true);
function Clicku525(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('02/25/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Friday, February 25, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u526 = document.getElementById('u526');

u526.style.cursor = 'pointer';
if (bIE) u526.attachEvent("onclick", Clicku526);
else u526.addEventListener("click", Clicku526, true);
function Clicku526(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('02/26/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Saturday, February 26, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u527 = document.getElementById('u527');

var u528 = document.getElementById('u528');
gv_vAlignTable['u528'] = 'center';
var u529 = document.getElementById('u529');

u529.style.cursor = 'pointer';
if (bIE) u529.attachEvent("onclick", Clicku529);
else u529.addEventListener("click", Clicku529, true);
function Clicku529(e)
{

if (true) {

	SetPanelStateu498("pd1u498");

}

}

var u330 = document.getElementById('u330');

u330.style.cursor = 'pointer';
if (bIE) u330.attachEvent("onclick", Clicku330);
else u330.addEventListener("click", Clicku330, true);
function Clicku330(e)
{

if (true) {

	SetPanelStateu329("pd1u329");

SetWidgetFormText('u332', GetGlobalVariableValue('$GroupName'));

}

}
gv_vAlignTable['u330'] = 'top';
var u331 = document.getElementById('u331');
gv_vAlignTable['u331'] = 'top';
var u332 = document.getElementById('u332');

var u333 = document.getElementById('u333');

u333.style.cursor = 'pointer';
if (bIE) u333.attachEvent("onclick", Clicku333);
else u333.addEventListener("click", Clicku333, true);
function Clicku333(e)
{

if (true) {

	SetPanelStateu329("pd0u329");

SetGlobalVariableValue('$GroupName', GetWidgetFormText('u332'));

SetWidgetRichText('u330', PopulateVariables('<span style=" font-family:\'Myriad Pro\'; color:#003366; font-size:21px;">Customize Sign-up Sheet For: [[GroupName]]</span><span style=" font-family:\'Helvetica\'; color:#003366; font-size:21px;">&nbsp; &nbsp; &nbsp; </span><span style=" font-family:\'Helvetica\'; color:#006699; font-size:12px;">Change group name</span>'));

;

}

}

var u334 = document.getElementById('u334');
gv_vAlignTable['u334'] = 'center';
var u335 = document.getElementById('u335');
gv_vAlignTable['u335'] = 'top';
var u336 = document.getElementById('u336');
gv_vAlignTable['u336'] = 'top';
var u337 = document.getElementById('u337');

var u338 = document.getElementById('u338');
gv_vAlignTable['u338'] = 'center';
var u339 = document.getElementById('u339');

var u530 = document.getElementById('u530');

u530.style.cursor = 'pointer';
if (bIE) u530.attachEvent("onclick", Clicku530);
else u530.addEventListener("click", Clicku530, true);
function Clicku530(e)
{

if (true) {

	SetPanelStateu498("pd0u498");

}

}

var u534 = document.getElementById('u534');

u534.style.cursor = 'pointer';
if (bIE) u534.attachEvent("onclick", Clicku534);
else u534.addEventListener("click", Clicku534, true);
function Clicku534(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/09/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Wednesday, March 9, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u535 = document.getElementById('u535');

u535.style.cursor = 'pointer';
if (bIE) u535.attachEvent("onclick", Clicku535);
else u535.addEventListener("click", Clicku535, true);
function Clicku535(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/10/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Thursday, March 10, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u536 = document.getElementById('u536');

u536.style.cursor = 'pointer';
if (bIE) u536.attachEvent("onclick", Clicku536);
else u536.addEventListener("click", Clicku536, true);
function Clicku536(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/11/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Friday, March 11, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u537 = document.getElementById('u537');

u537.style.cursor = 'pointer';
if (bIE) u537.attachEvent("onclick", Clicku537);
else u537.addEventListener("click", Clicku537, true);
function Clicku537(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/12/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Saturday, March 12, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u538 = document.getElementById('u538');

u538.style.cursor = 'pointer';
if (bIE) u538.attachEvent("onclick", Clicku538);
else u538.addEventListener("click", Clicku538, true);
function Clicku538(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/13/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Sunday, March 13, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u539 = document.getElementById('u539');

u539.style.cursor = 'pointer';
if (bIE) u539.attachEvent("onclick", Clicku539);
else u539.addEventListener("click", Clicku539, true);
function Clicku539(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/14/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Monday, March 14, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u340 = document.getElementById('u340');
gv_vAlignTable['u340'] = 'center';
var u341 = document.getElementById('u341');

var u342 = document.getElementById('u342');

var u343 = document.getElementById('u343');
gv_vAlignTable['u343'] = 'center';
var u344 = document.getElementById('u344');

u344.style.cursor = 'pointer';
if (bIE) u344.attachEvent("onclick", Clicku344);
else u344.addEventListener("click", Clicku344, true);
function Clicku344(e)
{

if (true) {

	MoveWidgetTo('u376',12,780);

}

}

var u345 = document.getElementById('u345');
gv_vAlignTable['u345'] = 'top';
var u346 = document.getElementById('u346');

u346.style.cursor = 'pointer';
if (bIE) u346.attachEvent("onclick", Clicku346);
else u346.addEventListener("click", Clicku346, true);
function Clicku346(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Display participant sheet"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}
gv_vAlignTable['u346'] = 'top';
var u347 = document.getElementById('u347');

var u348 = document.getElementById('u348');
gv_vAlignTable['u348'] = 'center';
var u349 = document.getElementById('u349');

var u540 = document.getElementById('u540');

u540.style.cursor = 'pointer';
if (bIE) u540.attachEvent("onclick", Clicku540);
else u540.addEventListener("click", Clicku540, true);
function Clicku540(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/15/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Tuesday, March 15, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u544 = document.getElementById('u544');

u544.style.cursor = 'pointer';
if (bIE) u544.attachEvent("onclick", Clicku544);
else u544.addEventListener("click", Clicku544, true);
function Clicku544(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/19/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Saturday, March 19, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u545 = document.getElementById('u545');

u545.style.cursor = 'pointer';
if (bIE) u545.attachEvent("onclick", Clicku545);
else u545.addEventListener("click", Clicku545, true);
function Clicku545(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/20/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Sunday, March 20, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u546 = document.getElementById('u546');

u546.style.cursor = 'pointer';
if (bIE) u546.attachEvent("onclick", Clicku546);
else u546.addEventListener("click", Clicku546, true);
function Clicku546(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/21/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Monday, March 21, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u547 = document.getElementById('u547');

u547.style.cursor = 'pointer';
if (bIE) u547.attachEvent("onclick", Clicku547);
else u547.addEventListener("click", Clicku547, true);
function Clicku547(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/22/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Tuesday, March 22, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u548 = document.getElementById('u548');

u548.style.cursor = 'pointer';
if (bIE) u548.attachEvent("onclick", Clicku548);
else u548.addEventListener("click", Clicku548, true);
function Clicku548(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/23/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Wednesday, March 23, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u549 = document.getElementById('u549');

u549.style.cursor = 'pointer';
if (bIE) u549.attachEvent("onclick", Clicku549);
else u549.addEventListener("click", Clicku549, true);
function Clicku549(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/24/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Thursday, March 24, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u350 = document.getElementById('u350');

u350.style.cursor = 'pointer';
if (bIE) u350.attachEvent("onclick", Clicku350);
else u350.addEventListener("click", Clicku350, true);
function Clicku350(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u351 = document.getElementById('u351');
gv_vAlignTable['u351'] = 'center';
var u352 = document.getElementById('u352');
gv_vAlignTable['u352'] = 'top';
var u353 = document.getElementById('u353');
gv_vAlignTable['u353'] = 'top';
var u354 = document.getElementById('u354');

var u355 = document.getElementById('u355');
gv_vAlignTable['u355'] = 'center';
var u356 = document.getElementById('u356');
gv_vAlignTable['u356'] = 'top';
var u357 = document.getElementById('u357');
gv_vAlignTable['u357'] = 'top';
var u358 = document.getElementById('u358');

var u359 = document.getElementById('u359');
gv_vAlignTable['u359'] = 'center';
var u550 = document.getElementById('u550');

u550.style.cursor = 'pointer';
if (bIE) u550.attachEvent("onclick", Clicku550);
else u550.addEventListener("click", Clicku550, true);
function Clicku550(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/25/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Friday, March 25, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u554 = document.getElementById('u554');

u554.style.cursor = 'pointer';
if (bIE) u554.attachEvent("onclick", Clicku554);
else u554.addEventListener("click", Clicku554, true);
function Clicku554(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/29/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Tuesday, March 29, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u555 = document.getElementById('u555');

u555.style.cursor = 'pointer';
if (bIE) u555.attachEvent("onclick", Clicku555);
else u555.addEventListener("click", Clicku555, true);
function Clicku555(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/30/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Wednesday, March 30, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u556 = document.getElementById('u556');

u556.style.cursor = 'pointer';
if (bIE) u556.attachEvent("onclick", Clicku556);
else u556.addEventListener("click", Clicku556, true);
function Clicku556(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/31/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Thursday, March 31, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u557 = document.getElementById('u557');

u557.style.cursor = 'pointer';
if (bIE) u557.attachEvent("onclick", Clicku557);
else u557.addEventListener("click", Clicku557, true);
function Clicku557(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/01/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Tuesday, March 1, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u558 = document.getElementById('u558');

u558.style.cursor = 'pointer';
if (bIE) u558.attachEvent("onclick", Clicku558);
else u558.addEventListener("click", Clicku558, true);
function Clicku558(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/02/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Wednesday, March 2, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u559 = document.getElementById('u559');

u559.style.cursor = 'pointer';
if (bIE) u559.attachEvent("onclick", Clicku559);
else u559.addEventListener("click", Clicku559, true);
function Clicku559(e)
{

if ((GetCheckState('u382')) == (false)) {

	SetPanelStateu498("pd0u498");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/03/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Thursday, March 03, 2011'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u380', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu498("pd0u498");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u360 = document.getElementById('u360');
gv_vAlignTable['u360'] = 'top';
var u361 = document.getElementById('u361');
gv_vAlignTable['u361'] = 'top';
var u362 = document.getElementById('u362');

var u363 = document.getElementById('u363');
gv_vAlignTable['u363'] = 'center';
var u364 = document.getElementById('u364');
gv_vAlignTable['u364'] = 'top';
var u365 = document.getElementById('u365');
gv_vAlignTable['u365'] = 'top';
var u366 = document.getElementById('u366');

var u367 = document.getElementById('u367');
gv_vAlignTable['u367'] = 'center';
var u368 = document.getElementById('u368');

u368.style.cursor = 'pointer';
if (bIE) u368.attachEvent("onclick", Clicku368);
else u368.addEventListener("click", Clicku368, true);
function Clicku368(e)
{

if (true) {

	self.location.href="Preview.html" + GetQuerystring();

}

}

var u369 = document.getElementById('u369');
gv_vAlignTable['u369'] = 'center';
var u564 = document.getElementById('u564');
gv_vAlignTable['u564'] = 'center';
var u565 = document.getElementById('u565');

var u566 = document.getElementById('u566');
gv_vAlignTable['u566'] = 'center';
var u567 = document.getElementById('u567');

var u568 = document.getElementById('u568');
gv_vAlignTable['u568'] = 'center';
var u569 = document.getElementById('u569');

var u370 = document.getElementById('u370');

u370.style.cursor = 'pointer';
if (bIE) u370.attachEvent("onclick", Clicku370);
else u370.addEventListener("click", Clicku370, true);
function Clicku370(e)
{

if (true) {

	self.location.href="Share.html" + GetQuerystring();

}

}

var u371 = document.getElementById('u371');
gv_vAlignTable['u371'] = 'center';
var u372 = document.getElementById('u372');

u372.style.cursor = 'pointer';
if (bIE) u372.attachEvent("onclick", Clicku372);
else u372.addEventListener("click", Clicku372, true);
function Clicku372(e)
{

if (true) {

	self.location.href="Manage.html" + GetQuerystring();

}

}

var u373 = document.getElementById('u373');
gv_vAlignTable['u373'] = 'center';
var u374 = document.getElementById('u374');

var u375 = document.getElementById('u375');

var u376 = document.getElementById('u376');

var u377 = document.getElementById('u377');

var u378 = document.getElementById('u378');
gv_vAlignTable['u378'] = 'center';
var u379 = document.getElementById('u379');
gv_vAlignTable['u379'] = 'top';
var u574 = document.getElementById('u574');
gv_vAlignTable['u574'] = 'center';
var u575 = document.getElementById('u575');
gv_vAlignTable['u575'] = 'top';
var u576 = document.getElementById('u576');

var u577 = document.getElementById('u577');
gv_vAlignTable['u577'] = 'center';
var u578 = document.getElementById('u578');

var u579 = document.getElementById('u579');
gv_vAlignTable['u579'] = 'center';
var u380 = document.getElementById('u380');

u380.style.cursor = 'pointer';
if (bIE) u380.attachEvent("onclick", Clicku380);
else u380.addEventListener("click", Clicku380, true);
function Clicku380(e)
{

if ((GetCheckState('u382')) == (false)) {

SetWidgetFormText('u380', PopulateVariables(''));

SetGlobalVariableValue('$DaysLeftNum', PopulateVariables('8'));

SetGlobalVariableValue('$DaysLeftText', PopulateVariables('Days Left'));

SetGlobalVariableValue('$SignUpEndsText', PopulateVariables('Sign-Up ends'));

	BringToFront("u498");

	SetPanelStateu498("pd1u498");

}
else
if ((GetCheckState('u382')) == (true)) {

SetWidgetFormText('u380', PopulateVariables('mm/dd/yyyy'));

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck &quot;Leave it open until I close it&quot; before selecting an event date."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

if (bIE) u380.attachEvent("onblur", LostFocusu380);
else u380.addEventListener("blur", LostFocusu380, true);
function LostFocusu380(e)
{

if (((GetCheckState('u382')) == (false)) && (((GetWidgetFormText('u380')) != (PopulateVariables('mm/dd/yyyy'))) && ((GetWidgetFormText('u380')) != (PopulateVariables(''))))) {

SetGlobalVariableValue('$closeDate', GetWidgetFormText('u380'));

SetGlobalVariableValue('$DaysLeftNum', PopulateVariables('8'));

SetGlobalVariableValue('$DaysLeftText', PopulateVariables('Days Left'));

SetGlobalVariableValue('$SignUpEndsText', PopulateVariables('Sign-Up ends'));

}

}

var u381 = document.getElementById('u381');
gv_vAlignTable['u381'] = 'top';
var u382 = document.getElementById('u382');

u382.style.cursor = 'pointer';
if (bIE) u382.attachEvent("onclick", Clicku382);
else u382.addEventListener("click", Clicku382, true);
function Clicku382(e)
{

if ((GetCheckState('u382')) == (true)) {

SetWidgetFormText('u380', PopulateVariables('mm/dd/yyyy'));

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Place your order at least 2 weeks in advance of your delivery date to get FREE SHIPPING in the 48 US states and Canada.</span>'));

	SetPanelStateu498("pd0u498");

	SetPanelVisibilityu562("hidden");

}
else
if ((GetWidgetFormText('u380')) != (PopulateVariables('mm/dd/yyyy'))) {

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Arial\'; font-size:13px;">The last day to order for FREE SHIPPING guaranteed by [delivery date] is [order date].&nbsp; </span>'));

}
else
if (true) {

SetWidgetRichText('u495', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Place your order at least 2 weeks in advance of your delivery date to get FREE SHIPPING in the 48 US states and Canada.</span>'));

}

}

if (bIE) u382.attachEvent("onblur", LostFocusu382);
else u382.addEventListener("blur", LostFocusu382, true);
function LostFocusu382(e)
{

if (true) {

SetWidgetRichText('u495', PopulateVariables(''));

}

}

var u383 = document.getElementById('u383');
gv_vAlignTable['u383'] = 'top';
var u384 = document.getElementById('u384');
gv_vAlignTable['u384'] = 'top';
var u385 = document.getElementById('u385');

var u386 = document.getElementById('u386');
gv_vAlignTable['u386'] = 'top';
var u387 = document.getElementById('u387');

var u388 = document.getElementById('u388');
gv_vAlignTable['u388'] = 'top';
var u389 = document.getElementById('u389');

var u584 = document.getElementById('u584');

var u585 = document.getElementById('u585');
gv_vAlignTable['u585'] = 'center';
var u586 = document.getElementById('u586');

u586.style.cursor = 'pointer';
if (bIE) u586.attachEvent("onclick", Clicku586);
else u586.addEventListener("click", Clicku586, true);
function Clicku586(e)
{

if (true) {

	BringToFront("u0");

	SetPanelStateu3("pd2u3");

SetWidgetFormText('u122', GetGlobalVariableValue('$yourEmail'));

}

}
gv_vAlignTable['u586'] = 'top';
var u587 = document.getElementById('u587');
gv_vAlignTable['u587'] = 'top';
var u588 = document.getElementById('u588');

var u589 = document.getElementById('u589');

var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'center';
var u201 = document.getElementById('u201');

var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'center';
var u390 = document.getElementById('u390');
gv_vAlignTable['u390'] = 'center';
var u391 = document.getElementById('u391');
gv_vAlignTable['u391'] = 'top';
var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'center';
var u393 = document.getElementById('u393');
gv_vAlignTable['u393'] = 'top';
var u394 = document.getElementById('u394');

u394.style.cursor = 'pointer';
if (bIE) u394.attachEvent("onclick", Clicku394);
else u394.addEventListener("click", Clicku394, true);
function Clicku394(e)
{

if (true) {

	BringToFront("u0");

	SetPanelStateu3("pd4u3");

;

}

}
gv_vAlignTable['u394'] = 'top';
var u395 = document.getElementById('u395');

var u396 = document.getElementById('u396');
gv_vAlignTable['u396'] = 'center';
var u397 = document.getElementById('u397');

var u398 = document.getElementById('u398');

var u399 = document.getElementById('u399');

var u590 = document.getElementById('u590');
gv_vAlignTable['u590'] = 'top';
var u591 = document.getElementById('u591');
gv_vAlignTable['u591'] = 'top';
var u592 = document.getElementById('u592');

var u593 = document.getElementById('u593');

u593.style.cursor = 'pointer';
if (bIE) u593.attachEvent("onclick", Clicku593);
else u593.addEventListener("click", Clicku593, true);
function Clicku593(e)
{

if (true) {

;

;

}

}
gv_vAlignTable['u593'] = 'top';
var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'center';
var u211 = document.getElementById('u211');

var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'center';
var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'top';
var u214 = document.getElementById('u214');

var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'center';
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

var u222 = document.getElementById('u222');

var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'center';
var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'top';
var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'top';
var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'top';
var u227 = document.getElementById('u227');

var u228 = document.getElementById('u228');

var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'center';
var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'top';
var u231 = document.getElementById('u231');

var u232 = document.getElementById('u232');

var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'center';
var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'top';
var u235 = document.getElementById('u235');

var u236 = document.getElementById('u236');

var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'center';
var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'top';
var u239 = document.getElementById('u239');
gv_vAlignTable['u239'] = 'top';
var u240 = document.getElementById('u240');

var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'top';
var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'top';
var u243 = document.getElementById('u243');

var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'center';
var u245 = document.getElementById('u245');

var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'center';
var u247 = document.getElementById('u247');

var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'center';
var u249 = document.getElementById('u249');

var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'center';
var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'top';
var u252 = document.getElementById('u252');

u252.style.cursor = 'pointer';
if (bIE) u252.attachEvent("onclick", Clicku252);
else u252.addEventListener("click", Clicku252, true);
function Clicku252(e)
{

if (true) {

	BringToFront("u319");

}

}

var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'center';
var u254 = document.getElementById('u254');

var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'top';
var u256 = document.getElementById('u256');

var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'center';
var u258 = document.getElementById('u258');

var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'center';
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

	BringToFront("u319");

}

}

var u260 = document.getElementById('u260');

var u261 = document.getElementById('u261');
gv_vAlignTable['u261'] = 'center';
var u262 = document.getElementById('u262');
gv_vAlignTable['u262'] = 'top';
var u263 = document.getElementById('u263');

var u264 = document.getElementById('u264');
gv_vAlignTable['u264'] = 'center';
var u265 = document.getElementById('u265');

var u266 = document.getElementById('u266');
gv_vAlignTable['u266'] = 'center';
var u267 = document.getElementById('u267');

var u268 = document.getElementById('u268');
gv_vAlignTable['u268'] = 'center';
var u269 = document.getElementById('u269');

if (window.OnLoad) OnLoad();
