
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

	SetPanelStateu341("pd1u341");

SetWidgetFormText('u564', GetGlobalVariableValue('$YourName'));

SetWidgetFormText('u563', GetGlobalVariableValue('$yourEmail'));

SetWidgetRichText('u322', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#003366; font-size:19px;">Customize [[GroupName]] Sign-Up Sheet&nbsp; &nbsp;&nbsp; </span><span style=" font-family:\'Helvetica\'; color:#006699; font-size:13px;"><u>Change Group Name</u></span>'));

SetWidgetFormText('u362', GetGlobalVariableValue('$closeDate'));

SetWidgetFormText('u374', GetGlobalVariableValue('$groupPrice'));

SetWidgetFormText('u386', GetGlobalVariableValue('$paymtInfo'));

SetWidgetFormText('u394', GetGlobalVariableValue('$dlvyInfo'));

SetWidgetFormText('u445', GetGlobalVariableValue('$Welcome'));

}
else
if (true) {

SetWidgetFormText('u564', GetGlobalVariableValue('$YourName'));

SetWidgetFormText('u563', GetGlobalVariableValue('$yourEmail'));

SetWidgetRichText('u322', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#003366; font-size:19px;">Customize [[GroupName]] Sign-Up Sheet&nbsp; &nbsp;&nbsp; </span><span style=" font-family:\'Helvetica\'; color:#006699; font-size:13px;"><u>Change Group Name</u></span>'));

SetWidgetFormText('u362', GetGlobalVariableValue('$closeDate'));

SetWidgetFormText('u374', GetGlobalVariableValue('$groupPrice'));

SetWidgetFormText('u386', GetGlobalVariableValue('$paymtInfo'));

SetWidgetFormText('u394', GetGlobalVariableValue('$dlvyInfo'));

SetWidgetFormText('u445', GetGlobalVariableValue('$Welcome'));

}

}

eval(GetDynamicPanelScript('u227', 1));

eval(GetDynamicPanelScript('u367', 1));

eval(GetDynamicPanelScript('u213', 1));

eval(GetDynamicPanelScript('u113', 2));

eval(GetDynamicPanelScript('u417', 1));

eval(GetDynamicPanelScript('u480', 3));

eval(GetDynamicPanelScript('u11', 2));

eval(GetDynamicPanelScript('u379', 1));

eval(GetDynamicPanelScript('u0', 1));

eval(GetDynamicPanelScript('u369', 2));

eval(GetDynamicPanelScript('u3', 7));

eval(GetDynamicPanelScript('u19', 3));

eval(GetDynamicPanelScript('u341', 2));

eval(GetDynamicPanelScript('u358', 1));

eval(GetDynamicPanelScript('u311', 1));

eval(GetDynamicPanelScript('u380', 1));

eval(GetDynamicPanelScript('u397', 1));

eval(GetDynamicPanelScript('u424', 1));

eval(GetDynamicPanelScript('u219', 1));

eval(GetDynamicPanelScript('u537', 2));

eval(GetDynamicPanelScript('u388', 1));

eval(GetDynamicPanelScript('u321', 2));

eval(GetDynamicPanelScript('u389', 1));

eval(GetDynamicPanelScript('u121', 1));

eval(GetDynamicPanelScript('u223', 1));

eval(GetDynamicPanelScript('u198', 1));

eval(GetDynamicPanelScript('u184', 1));

var u270 = document.getElementById('u270');
gv_vAlignTable['u270'] = 'center';
var u271 = document.getElementById('u271');
gv_vAlignTable['u271'] = 'top';
var u272 = document.getElementById('u272');
gv_vAlignTable['u272'] = 'top';
var u273 = document.getElementById('u273');
gv_vAlignTable['u273'] = 'top';
var u274 = document.getElementById('u274');
gv_vAlignTable['u274'] = 'top';
var u275 = document.getElementById('u275');
gv_vAlignTable['u275'] = 'top';
var u276 = document.getElementById('u276');

var u277 = document.getElementById('u277');
gv_vAlignTable['u277'] = 'center';
var u278 = document.getElementById('u278');

var u279 = document.getElementById('u279');
gv_vAlignTable['u279'] = 'center';
var u280 = document.getElementById('u280');
gv_vAlignTable['u280'] = 'top';
var u281 = document.getElementById('u281');
gv_vAlignTable['u281'] = 'top';
var u282 = document.getElementById('u282');
gv_vAlignTable['u282'] = 'top';
var u283 = document.getElementById('u283');
gv_vAlignTable['u283'] = 'top';
var u284 = document.getElementById('u284');
gv_vAlignTable['u284'] = 'top';
var u285 = document.getElementById('u285');
gv_vAlignTable['u285'] = 'top';
var u286 = document.getElementById('u286');

u286.style.cursor = 'pointer';
if (bIE) u286.attachEvent("onclick", Clicku286);
else u286.addEventListener("click", Clicku286, true);
function Clicku286(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("This is not enabled in the prototype."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u287 = document.getElementById('u287');
gv_vAlignTable['u287'] = 'center';
var u288 = document.getElementById('u288');
gv_vAlignTable['u288'] = 'top';
var u289 = document.getElementById('u289');
gv_vAlignTable['u289'] = 'top';
var u490 = document.getElementById('u490');

var u491 = document.getElementById('u491');
gv_vAlignTable['u491'] = 'center';
var u492 = document.getElementById('u492');

u492.style.cursor = 'pointer';
if (bIE) u492.attachEvent("onclick", Clicku492);
else u492.addEventListener("click", Clicku492, true);
function Clicku492(e)
{

if ((GetCheckState('u364')) == (false)) {

	SetPanelStateu480("pd0u480");

	SetPanelStateu537("pd0u537");

	SetPanelVisibilityu537("");

SetGlobalVariableValue('$closeDate', PopulateVariables('02/23/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Wednesday, February 23, 2011'));

SetWidgetRichText('u477', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u362', GetGlobalVariableValue('$closeDate'));

}
else
if (true) {

	SetPanelStateu480("pd0u480");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u493 = document.getElementById('u493');

u493.style.cursor = 'pointer';
if (bIE) u493.attachEvent("onclick", Clicku493);
else u493.addEventListener("click", Clicku493, true);
function Clicku493(e)
{

if ((GetCheckState('u364')) == (false)) {

	SetPanelStateu480("pd0u480");

SetGlobalVariableValue('$closeDate', PopulateVariables('02/24/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Thursday, February 24, 2011'));

SetWidgetRichText('u477', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u362', GetGlobalVariableValue('$closeDate'));

SetWidgetRichText('u545', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0066CC; font-size:11px;">Friday, February 26</span>'));

SetWidgetRichText('u547', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Friday, March 11</span>'));

SetWidgetRichText('u549', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Friday, March 4 </span><span style=" font-family:\'Helvetica\'; color:#949494; font-size:11px;">(25% add\'l cost)</span>'));

}
else
if (true) {

	SetPanelStateu480("pd0u480");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u494 = document.getElementById('u494');

var u495 = document.getElementById('u495');
gv_vAlignTable['u495'] = 'center';
var u496 = document.getElementById('u496');

var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'center';
var u101 = document.getElementById('u101');

u101.style.cursor = 'pointer';
if (bIE) u101.attachEvent("onclick", Clicku101);
else u101.addEventListener("click", Clicku101, true);
function Clicku101(e)
{

if (true) {

SetWidgetFormText('u362', GetGlobalVariableValue('$closeDate'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Monday, February 28, 2011'));

SetWidgetRichText('u477', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will be available until 11:59 pm Eastern Time [[CloseExDate]].&nbsp; After the close date participants will see your sheet but will not be able to sign up online. </span>'));

SetWidgetRichText('u554', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#FF6600; font-size:11px;">2 week FREE delivery to [[ZIP]] by Wednesday, March 16</span></b>'));

	BringToFront("u311");

	SetPanelStateu0("pd0u0");

	SetPanelStateu537("pd1u537");

	SetPanelVisibilityu537("");

}

}

var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'center';
var u103 = document.getElementById('u103');

u103.style.cursor = 'pointer';
if (bIE) u103.attachEvent("onclick", Clicku103);
else u103.addEventListener("click", Clicku103, true);
function Clicku103(e)
{

if (((GetSelectedOption('u103')) == (PopulateVariables('1'))) && ((GetSelectedOption('u97')) == (PopulateVariables('FREE Standard delivery')))) {

SetGlobalVariableValue('$closeDate', PopulateVariables('03/01/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Tuesday, March 1'));

SetGlobalVariableValue('$OrderExDate', PopulateVariables('Wednesday, March 2'));

SetWidgetRichText('u100', PopulateVariables('<span style=" font-family:\'Arial\'; font-size:13px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; Sign up would close on&nbsp; </span><span style=" font-family:\'Arial\'; color:#FF6600; font-size:13px;">[[CloseExDate]]</span>'));

}
else
if (((GetSelectedOption('u103')) == (PopulateVariables('2'))) && ((GetSelectedOption('u97')) == (PopulateVariables('FREE Standard delivery')))) {

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Monday, February 28'));

SetGlobalVariableValue('$closeDate', PopulateVariables('02/28/2011'));

SetGlobalVariableValue('$OrderExDate', PopulateVariables('Wednesday, March 2'));

SetWidgetRichText('u100', PopulateVariables('<span style=" font-family:\'Arial\'; font-size:13px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; Sign up would close on&nbsp; </span><span style=" font-family:\'Arial\'; color:#FF6600; font-size:13px;">[[CloseExDate]]</span>'));

}
else
if (((GetSelectedOption('u103')) == (PopulateVariables('2'))) && ((GetSelectedOption('u97')) == (PopulateVariables(' Rush delivery ')))) {

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Monday, March 7'));

SetGlobalVariableValue('$closeDate', PopulateVariables('03/07/2011'));

SetGlobalVariableValue('$OrderExDate', PopulateVariables('Wednesday, March 9'));

SetWidgetRichText('u100', PopulateVariables('<span style=" font-family:\'Arial\'; font-size:13px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; Sign up would close on&nbsp; </span><span style=" font-family:\'Arial\'; color:#FF6600; font-size:13px;">[[CloseExDate]]</span>'));

}
else
if (((GetSelectedOption('u103')) == (PopulateVariables('1'))) && ((GetSelectedOption('u97')) == (PopulateVariables(' Rush delivery ')))) {

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Tuesday, March 8'));

SetGlobalVariableValue('$closeDate', PopulateVariables('03/08/2011'));

SetGlobalVariableValue('$OrderExDate', PopulateVariables('Wednesday, March 9'));

SetWidgetRichText('u100', PopulateVariables('<span style=" font-family:\'Arial\'; font-size:13px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; Sign up would close on&nbsp; </span><span style=" font-family:\'Arial\'; color:#FF6600; font-size:13px;">[[CloseExDate]]</span>'));

}

}

var u104 = document.getElementById('u104');

u104.style.cursor = 'pointer';
if (bIE) u104.attachEvent("onclick", Clicku104);
else u104.addEventListener("click", Clicku104, true);
function Clicku104(e)
{

if (true) {

	BringToFront("u311");

SetWidgetRichText('u477', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will be available until 11:59 pm Eastern Time on the date you choose.&nbsp; <br>After the close date participants can see your sheet but cannot sign up online. <br><br>Click &quot;Help me choose a date&quot; to check your last date to get FREE standard shipping.</span>'));

}

}
gv_vAlignTable['u104'] = 'top';
var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'top';
var u106 = document.getElementById('u106');

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'center';
var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'top';
var u109 = document.getElementById('u109');

var u297 = document.getElementById('u297');

var u298 = document.getElementById('u298');
gv_vAlignTable['u298'] = 'center';
var u299 = document.getElementById('u299');

var u500 = document.getElementById('u500');

u500.style.cursor = 'pointer';
if (bIE) u500.attachEvent("onclick", Clicku500);
else u500.addEventListener("click", Clicku500, true);
function Clicku500(e)
{

if ((GetCheckState('u364')) == (false)) {

	SetPanelStateu480("pd0u480");

SetGlobalVariableValue('$closeDate', PopulateVariables('02/27/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Sunday, February 27, 2011'));

SetWidgetRichText('u477', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u362', GetGlobalVariableValue('$closeDate'));

SetWidgetRichText('u545', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0066CC; font-size:11px;">Monday, February 28</span>'));

SetWidgetRichText('u547', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Monday, March 14</span>'));

SetWidgetRichText('u549', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Monday, March 7 </span><span style=" font-family:\'Helvetica\'; color:#949494; font-size:11px;">(25% add\'l cost)</span>'));

}
else
if (true) {

	SetPanelStateu480("pd0u480");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u392 = document.getElementById('u392');

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u110 = document.getElementById('u110');

u110.style.cursor = 'pointer';
if (bIE) u110.attachEvent("onclick", Clicku110);
else u110.addEventListener("click", Clicku110, true);
function Clicku110(e)
{

if (true) {

	BringToFront("u311");

}

}

var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'center';
var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u113 = document.getElementById('u113');

var u114 = document.getElementById('u114');

if (bIE) u114.attachEvent("onblur", LostFocusu114);
else u114.addEventListener("blur", LostFocusu114, true);
function LostFocusu114(e)
{

if (true) {

SetGlobalVariableValue('$yourEmail', GetWidgetFormText('u114'));

}

}

var u115 = document.getElementById('u115');

u115.style.cursor = 'pointer';
if (bIE) u115.attachEvent("onclick", Clicku115);
else u115.addEventListener("click", Clicku115, true);
function Clicku115(e)
{

if (true) {

	SetPanelStateu113("pd1u113");

	SetPanelVisibilityu121("");

SetGlobalVariableValue('$yourEmail', GetWidgetFormText('u114'));

SetWidgetRichText('u119', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">[[yourEmail]]</span>'));

}

}

var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'center';
var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'top';
var u118 = document.getElementById('u118');

u118.style.cursor = 'pointer';
if (bIE) u118.attachEvent("onclick", Clicku118);
else u118.addEventListener("click", Clicku118, true);
function Clicku118(e)
{

if (true) {

	SetPanelStateu113("pd0u113");

	SetPanelVisibilityu121("hidden");

SetWidgetFormText('u114', GetGlobalVariableValue('$yourEmail'));

}

}
gv_vAlignTable['u118'] = 'top';
var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'top';
var u510 = document.getElementById('u510');

u510.style.cursor = 'pointer';
if (bIE) u510.attachEvent("onclick", Clicku510);
else u510.addEventListener("click", Clicku510, true);
function Clicku510(e)
{

if ((GetCheckState('u364')) == (false)) {

	SetPanelStateu480("pd0u480");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/05/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Saturday, March 5, 2011'));

SetWidgetRichText('u477', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u362', GetGlobalVariableValue('$closeDate'));

SetWidgetRichText('u545', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0066CC; font-size:11px;">Sunday, March 6</span>'));

SetWidgetRichText('u547', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Sunday, March 20</span>'));

SetWidgetRichText('u549', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Sunday, March 13 </span><span style=" font-family:\'Helvetica\'; color:#949494; font-size:11px;">(25% add\'l cost)</span>'));

}
else
if (true) {

	SetPanelStateu480("pd0u480");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u33 = document.getElementById('u33');

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u35 = document.getElementById('u35');

u35.style.cursor = 'pointer';
if (bIE) u35.attachEvent("onclick", Clicku35);
else u35.addEventListener("click", Clicku35, true);
function Clicku35(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please call customer service for delivery rates for Super Rush."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'top';
var u121 = document.getElementById('u121');

var u122 = document.getElementById('u122');

var u123 = document.getElementById('u123');

var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'top';
var u125 = document.getElementById('u125');

var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'top';
var u127 = document.getElementById('u127');

var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u129 = document.getElementById('u129');

var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'top';
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

u501.style.cursor = 'pointer';
if (bIE) u501.attachEvent("onclick", Clicku501);
else u501.addEventListener("click", Clicku501, true);
function Clicku501(e)
{

if ((GetCheckState('u364')) == (false)) {

	SetPanelStateu480("pd0u480");

SetGlobalVariableValue('$closeDate', PopulateVariables('02/28/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Sunday, February 28, 2011'));

SetWidgetRichText('u477', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u362', GetGlobalVariableValue('$closeDate'));

SetWidgetRichText('u545', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0066CC; font-size:11px;">Tuesday, March 1</span>'));

SetWidgetRichText('u547', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Tuesday, March 15</span>'));

SetWidgetRichText('u549', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Tuesday, March 8 </span><span style=" font-family:\'Helvetica\'; color:#949494; font-size:11px;">(25% add\'l cost)</span>'));

}
else
if (true) {

	SetPanelStateu480("pd0u480");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u502 = document.getElementById('u502');

var u503 = document.getElementById('u503');
gv_vAlignTable['u503'] = 'center';
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

if ((GetCheckState('u364')) == (false)) {

	SetPanelStateu480("pd0u480");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/08/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Tuesday, March 8, 2011'));

SetWidgetRichText('u477', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u362', GetGlobalVariableValue('$closeDate'));

SetWidgetRichText('u545', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0066CC; font-size:11px;">Wednesday, March 9</span>'));

SetWidgetRichText('u547', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Wednesday, March 23</span>'));

SetWidgetRichText('u549', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Wednesday, March 16 </span><span style=" font-family:\'Helvetica\'; color:#949494; font-size:11px;">(25% add\'l cost)</span>'));

}
else
if (true) {

	SetPanelStateu480("pd0u480");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u512 = document.getElementById('u512');

u512.style.cursor = 'pointer';
if (bIE) u512.attachEvent("onclick", Clicku512);
else u512.addEventListener("click", Clicku512, true);
function Clicku512(e)
{

if ((GetCheckState('u364')) == (false)) {

	SetPanelStateu480("pd0u480");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/09/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Wednesday, March 9, 2011'));

SetWidgetRichText('u477', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u362', GetGlobalVariableValue('$closeDate'));

SetWidgetRichText('u545', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0066CC; font-size:11px;">Thursday, March 10</span>'));

SetWidgetRichText('u547', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Thursday, March 24</span>'));

SetWidgetRichText('u549', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Thursday, March 17 </span><span style=" font-family:\'Helvetica\'; color:#949494; font-size:11px;">(25% add\'l cost)</span>'));

}
else
if (true) {

	SetPanelStateu480("pd0u480");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u513 = document.getElementById('u513');

u513.style.cursor = 'pointer';
if (bIE) u513.attachEvent("onclick", Clicku513);
else u513.addEventListener("click", Clicku513, true);
function Clicku513(e)
{

if ((GetCheckState('u364')) == (false)) {

	SetPanelStateu480("pd0u480");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/10/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Thursday, March 10, 2011'));

SetWidgetRichText('u477', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u362', GetGlobalVariableValue('$closeDate'));

SetWidgetRichText('u545', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0066CC; font-size:11px;">Friday, March 11</span>'));

SetWidgetRichText('u547', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Friday, March 25</span>'));

SetWidgetRichText('u549', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Friday, March 18 </span><span style=" font-family:\'Helvetica\'; color:#949494; font-size:11px;">(25% add\'l cost)</span>'));

}
else
if (true) {

	SetPanelStateu480("pd0u480");

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

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u26 = document.getElementById('u26');

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u28 = document.getElementById('u28');

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'top';
var u161 = document.getElementById('u161');

var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'top';
var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'top';
var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'top';
var u165 = document.getElementById('u165');

u165.style.cursor = 'pointer';
if (bIE) u165.attachEvent("onclick", Clicku165);
else u165.addEventListener("click", Clicku165, true);
function Clicku165(e)
{

if (true) {

;

;

}

}

if (bIE) u165.attachEvent("onmouseover", MouseOveru165);
else u165.addEventListener("mouseover", MouseOveru165, true);
function MouseOveru165(e)
{
if (!IsTrueMouseOver('u165',e)) return;
if (true) {

	SetPanelVisibilityu184("");

	MoveWidgetTo('u184',110,110);

}

}

if (bIE) u165.attachEvent("onmouseout", MouseOutu165);
else u165.addEventListener("mouseout", MouseOutu165, true);
function MouseOutu165(e)
{
if (!IsTrueMouseOut('u165',e)) return;
if (true) {

	SetPanelVisibilityu184("hidden");

}

}
gv_vAlignTable['u165'] = 'top';
var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'top';
var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'top';
var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'top';
var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'top';
var u521 = document.getElementById('u521');

u521.style.cursor = 'pointer';
if (bIE) u521.attachEvent("onclick", Clicku521);
else u521.addEventListener("click", Clicku521, true);
function Clicku521(e)
{

if ((GetCheckState('u364')) == (false)) {

	SetPanelStateu480("pd0u480");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/18/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Friday, March 18, 2011'));

SetWidgetRichText('u477', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u362', GetGlobalVariableValue('$closeDate'));

SetWidgetRichText('u545', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0066CC; font-size:11px;">Saturday, March 19</span>'));

SetWidgetRichText('u547', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Saturday, April 2</span>'));

SetWidgetRichText('u549', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Saturday, March 26 </span><span style=" font-family:\'Helvetica\'; color:#949494; font-size:11px;">(25% add\'l cost)</span>'));

}
else
if (true) {

	SetPanelStateu480("pd0u480");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u522 = document.getElementById('u522');

u522.style.cursor = 'pointer';
if (bIE) u522.attachEvent("onclick", Clicku522);
else u522.addEventListener("click", Clicku522, true);
function Clicku522(e)
{

if ((GetCheckState('u364')) == (false)) {

	SetPanelStateu480("pd0u480");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/19/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Saturday, March 19, 2011'));

SetWidgetRichText('u477', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u362', GetGlobalVariableValue('$closeDate'));

SetWidgetRichText('u545', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0066CC; font-size:11px;">Sunday, March 20</span>'));

SetWidgetRichText('u547', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Sunday, April 3</span>'));

SetWidgetRichText('u549', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Sunday, March 27 </span><span style=" font-family:\'Helvetica\'; color:#949494; font-size:11px;">(25% add\'l cost)</span>'));

}
else
if (true) {

	SetPanelStateu480("pd0u480");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u203 = document.getElementById('u203');

var u30 = document.getElementById('u30');

u30.style.cursor = 'pointer';
if (bIE) u30.attachEvent("onclick", Clicku30);
else u30.addEventListener("click", Clicku30, true);
function Clicku30(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please call customer service for delivery rates for Super Rush."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u31 = document.getElementById('u31');

var u206 = document.getElementById('u206');

var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'center';
var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'top';
var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'top';
var u36 = document.getElementById('u36');

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'center';
var u38 = document.getElementById('u38');

u38.style.cursor = 'pointer';
if (bIE) u38.attachEvent("onclick", Clicku38);
else u38.addEventListener("click", Clicku38, true);
function Clicku38(e)
{

if (true) {

	SetPanelStateu19("pd1u19");

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

}

}

var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'top';
var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'top';
var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'top';
var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'top';
var u174 = document.getElementById('u174');

u174.style.cursor = 'pointer';
if (bIE) u174.attachEvent("onclick", Clicku174);
else u174.addEventListener("click", Clicku174, true);
function Clicku174(e)
{

if (true) {

;

;

}

}

if (bIE) u174.attachEvent("onmouseover", MouseOveru174);
else u174.addEventListener("mouseover", MouseOveru174, true);
function MouseOveru174(e)
{
if (!IsTrueMouseOver('u174',e)) return;
if (true) {

	SetPanelVisibilityu184("");

	MoveWidgetTo('u184',110,140);

}

}

if (bIE) u174.attachEvent("onmouseout", MouseOutu174);
else u174.addEventListener("mouseout", MouseOutu174, true);
function MouseOutu174(e)
{
if (!IsTrueMouseOut('u174',e)) return;
if (true) {

	SetPanelVisibilityu184("hidden");

}

}
gv_vAlignTable['u174'] = 'top';
var u175 = document.getElementById('u175');

u175.style.cursor = 'pointer';
if (bIE) u175.attachEvent("onclick", Clicku175);
else u175.addEventListener("click", Clicku175, true);
function Clicku175(e)
{

if (true) {

;

;

}

}

if (bIE) u175.attachEvent("onmouseover", MouseOveru175);
else u175.addEventListener("mouseover", MouseOveru175, true);
function MouseOveru175(e)
{
if (!IsTrueMouseOver('u175',e)) return;
if (true) {

	SetPanelVisibilityu184("");

	MoveWidgetTo('u184',110,170);

}

}

if (bIE) u175.attachEvent("onmouseout", MouseOutu175);
else u175.addEventListener("mouseout", MouseOutu175, true);
function MouseOutu175(e)
{
if (!IsTrueMouseOut('u175',e)) return;
if (true) {

	SetPanelVisibilityu184("hidden");

}

}
gv_vAlignTable['u175'] = 'top';
var u176 = document.getElementById('u176');

u176.style.cursor = 'pointer';
if (bIE) u176.attachEvent("onclick", Clicku176);
else u176.addEventListener("click", Clicku176, true);
function Clicku176(e)
{

if (true) {

;

;

}

}

if (bIE) u176.attachEvent("onmouseover", MouseOveru176);
else u176.addEventListener("mouseover", MouseOveru176, true);
function MouseOveru176(e)
{
if (!IsTrueMouseOver('u176',e)) return;
if (true) {

	SetPanelVisibilityu184("");

	MoveWidgetTo('u184',110,200);

}

}

if (bIE) u176.attachEvent("onmouseout", MouseOutu176);
else u176.addEventListener("mouseout", MouseOutu176, true);
function MouseOutu176(e)
{
if (!IsTrueMouseOut('u176',e)) return;
if (true) {

	SetPanelVisibilityu184("hidden");

}

}
gv_vAlignTable['u176'] = 'top';
var u177 = document.getElementById('u177');

u177.style.cursor = 'pointer';
if (bIE) u177.attachEvent("onclick", Clicku177);
else u177.addEventListener("click", Clicku177, true);
function Clicku177(e)
{

if (true) {

;

;

}

}

if (bIE) u177.attachEvent("onmouseover", MouseOveru177);
else u177.addEventListener("mouseover", MouseOveru177, true);
function MouseOveru177(e)
{
if (!IsTrueMouseOver('u177',e)) return;
if (true) {

	SetPanelVisibilityu184("");

	MoveWidgetTo('u184',110,230);

}

}

if (bIE) u177.attachEvent("onmouseout", MouseOutu177);
else u177.addEventListener("mouseout", MouseOutu177, true);
function MouseOutu177(e)
{
if (!IsTrueMouseOut('u177',e)) return;
if (true) {

	SetPanelVisibilityu184("hidden");

}

}
gv_vAlignTable['u177'] = 'top';
var u178 = document.getElementById('u178');

u178.style.cursor = 'pointer';
if (bIE) u178.attachEvent("onclick", Clicku178);
else u178.addEventListener("click", Clicku178, true);
function Clicku178(e)
{

if (true) {

;

;

}

}

if (bIE) u178.attachEvent("onmouseover", MouseOveru178);
else u178.addEventListener("mouseover", MouseOveru178, true);
function MouseOveru178(e)
{
if (!IsTrueMouseOver('u178',e)) return;
if (true) {

	SetPanelVisibilityu184("");

	MoveWidgetTo('u184',110,260);

}

}

if (bIE) u178.attachEvent("onmouseout", MouseOutu178);
else u178.addEventListener("mouseout", MouseOutu178, true);
function MouseOutu178(e)
{
if (!IsTrueMouseOut('u178',e)) return;
if (true) {

	SetPanelVisibilityu184("hidden");

}

}
gv_vAlignTable['u178'] = 'top';
var u179 = document.getElementById('u179');

u179.style.cursor = 'pointer';
if (bIE) u179.attachEvent("onclick", Clicku179);
else u179.addEventListener("click", Clicku179, true);
function Clicku179(e)
{

if (true) {

;

;

}

}

if (bIE) u179.attachEvent("onmouseover", MouseOveru179);
else u179.addEventListener("mouseover", MouseOveru179, true);
function MouseOveru179(e)
{
if (!IsTrueMouseOver('u179',e)) return;
if (true) {

	SetPanelVisibilityu184("");

	MoveWidgetTo('u184',110,290);

}

}

if (bIE) u179.attachEvent("onmouseout", MouseOutu179);
else u179.addEventListener("mouseout", MouseOutu179, true);
function MouseOutu179(e)
{
if (!IsTrueMouseOut('u179',e)) return;
if (true) {

	SetPanelVisibilityu184("hidden");

}

}
gv_vAlignTable['u179'] = 'top';
var u531 = document.getElementById('u531');

u531.style.cursor = 'pointer';
if (bIE) u531.attachEvent("onclick", Clicku531);
else u531.addEventListener("click", Clicku531, true);
function Clicku531(e)
{

if ((GetCheckState('u364')) == (false)) {

	SetPanelStateu480("pd0u480");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/28/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Monday, March 28, 2011'));

SetWidgetRichText('u477', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u362', GetGlobalVariableValue('$closeDate'));

SetWidgetRichText('u545', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0066CC; font-size:11px;">Tuesday, March 29</span>'));

SetWidgetRichText('u547', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Tuesday, April 12</span>'));

SetWidgetRichText('u549', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Tuesday, April 5 </span><span style=" font-family:\'Helvetica\'; color:#949494; font-size:11px;">(25% add\'l cost)</span>'));

}
else
if (true) {

	SetPanelStateu480("pd0u480");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u532 = document.getElementById('u532');

u532.style.cursor = 'pointer';
if (bIE) u532.attachEvent("onclick", Clicku532);
else u532.addEventListener("click", Clicku532, true);
function Clicku532(e)
{

if ((GetCheckState('u364')) == (false)) {

	SetPanelStateu480("pd0u480");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/29/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Tuesday, March 29, 2011'));

SetWidgetRichText('u477', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u362', GetGlobalVariableValue('$closeDate'));

SetWidgetRichText('u545', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0066CC; font-size:11px;">Wednesday, March 30</span>'));

SetWidgetRichText('u547', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Wednesday,April 13</span>'));

SetWidgetRichText('u549', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Wednesday, April 6 </span><span style=" font-family:\'Helvetica\'; color:#949494; font-size:11px;">(25% add\'l cost)</span>'));

}
else
if (true) {

	SetPanelStateu480("pd0u480");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u533 = document.getElementById('u533');

u533.style.cursor = 'pointer';
if (bIE) u533.attachEvent("onclick", Clicku533);
else u533.addEventListener("click", Clicku533, true);
function Clicku533(e)
{

if ((GetCheckState('u364')) == (false)) {

	SetPanelStateu480("pd0u480");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/30/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Wednesday, March 30, 2011'));

SetWidgetRichText('u477', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u362', GetGlobalVariableValue('$closeDate'));

SetWidgetRichText('u545', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0066CC; font-size:11px;">Thursday, March 31</span>'));

SetWidgetRichText('u547', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Thursday, April 14</span>'));

SetWidgetRichText('u549', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Thursday, April 7 </span><span style=" font-family:\'Helvetica\'; color:#949494; font-size:11px;">(25% add\'l cost)</span>'));

}
else
if (true) {

	SetPanelStateu480("pd0u480");

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

SetGlobalVariableValue('$eventDate', PopulateVariables('Wednesday, March 23, 2011'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/23/2011'));

SetWidgetFormText('u73', GetGlobalVariableValue('$dlvryDate'));

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

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/24/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Thursday, March 24, 2011'));

SetWidgetFormText('u73', GetGlobalVariableValue('$dlvryDate'));

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

SetGlobalVariableValue('$eventDate', PopulateVariables('Friday, March 25, 2011'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/25/2011'));

SetWidgetFormText('u73', GetGlobalVariableValue('$dlvryDate'));

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

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/26/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Saturday, March 26, 2011'));

SetWidgetFormText('u73', GetGlobalVariableValue('$dlvryDate'));

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

SetGlobalVariableValue('$eventDate', PopulateVariables('Sunday, March 20, 2011`'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/20/2011'));

SetWidgetFormText('u73', GetGlobalVariableValue('$dlvryDate'));

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

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/21/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Monday, March 21, 2011'));

SetWidgetFormText('u73', GetGlobalVariableValue('$dlvryDate'));

}

}

var u46 = document.getElementById('u46');

u46.style.cursor = 'pointer';
if (bIE) u46.attachEvent("onclick", Clicku46);
else u46.addEventListener("click", Clicku46, true);
function Clicku46(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$eventDate', PopulateVariables('Tuesday, March 22, 2011'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/22/2011'));

SetWidgetFormText('u73', GetGlobalVariableValue('$dlvryDate'));

}

}

var u47 = document.getElementById('u47');

u47.style.cursor = 'pointer';
if (bIE) u47.attachEvent("onclick", Clicku47);
else u47.addEventListener("click", Clicku47, true);
function Clicku47(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$eventDate', PopulateVariables('Sunday, March 27'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/27/2011'));

SetWidgetFormText('u73', GetGlobalVariableValue('$dlvryDate'));

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

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/28/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Thursday, March 28, 2011'));

SetWidgetFormText('u73', GetGlobalVariableValue('$dlvryDate'));

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

SetGlobalVariableValue('$eventDate', PopulateVariables('Wednesday, March 30'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/30/2011'));

SetWidgetFormText('u73', GetGlobalVariableValue('$dlvryDate'));

}

}

var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'top';
var u181 = document.getElementById('u181');

u181.style.cursor = 'pointer';
if (bIE) u181.attachEvent("onclick", Clicku181);
else u181.addEventListener("click", Clicku181, true);
function Clicku181(e)
{

if (true) {

;

;

}

}

if (bIE) u181.attachEvent("onmouseover", MouseOveru181);
else u181.addEventListener("mouseover", MouseOveru181, true);
function MouseOveru181(e)
{
if (!IsTrueMouseOver('u181',e)) return;
if (true) {

	SetPanelVisibilityu184("");

	MoveWidgetTo('u184',110,320);

}

}

if (bIE) u181.attachEvent("onmouseout", MouseOutu181);
else u181.addEventListener("mouseout", MouseOutu181, true);
function MouseOutu181(e)
{
if (!IsTrueMouseOut('u181',e)) return;
if (true) {

	SetPanelVisibilityu184("hidden");

}

}
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

	SetPanelVisibilityu184("");

	MoveWidgetTo('u184',110,350);

}

}

if (bIE) u182.attachEvent("onmouseout", MouseOutu182);
else u182.addEventListener("mouseout", MouseOutu182, true);
function MouseOutu182(e)
{
if (!IsTrueMouseOut('u182',e)) return;
if (true) {

	SetPanelVisibilityu184("hidden");

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

	NewWindow("Resources/Other.html#other=" + encodeURI("Closes the modal and goes to the lab"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u184 = document.getElementById('u184');

var u185 = document.getElementById('u185');

var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'center';
var u187 = document.getElementById('u187');

var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'center';
var u189 = document.getElementById('u189');

var u541 = document.getElementById('u541');
gv_vAlignTable['u541'] = 'center';
var u542 = document.getElementById('u542');

var u543 = document.getElementById('u543');
gv_vAlignTable['u543'] = 'center';
var u50 = document.getElementById('u50');

u50.style.cursor = 'pointer';
if (bIE) u50.attachEvent("onclick", Clicku50);
else u50.addEventListener("click", Clicku50, true);
function Clicku50(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/31/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Thursday, March 31, 2011'));

SetWidgetFormText('u73', GetGlobalVariableValue('$dlvryDate'));

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

SetGlobalVariableValue('$eventDate', PopulateVariables('Tuesday, March 29'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/29/2011'));

SetWidgetFormText('u73', GetGlobalVariableValue('$dlvryDate'));

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

SetGlobalVariableValue('$eventDate', PopulateVariables('Wednesday, March 16, 2011'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/16/2011'));

SetWidgetFormText('u73', GetGlobalVariableValue('$dlvryDate'));

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

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/17/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Thursday, March 17, 2011'));

SetWidgetFormText('u73', GetGlobalVariableValue('$dlvryDate'));

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

SetGlobalVariableValue('$eventDate', PopulateVariables('Friday, March 18, 2011'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/18/2011'));

SetWidgetFormText('u73', GetGlobalVariableValue('$dlvryDate'));

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

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/19/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Saturday, March 19, 2011'));

SetWidgetFormText('u73', GetGlobalVariableValue('$dlvryDate'));

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

SetGlobalVariableValue('$eventDate', PopulateVariables('Sunday, March 13, 2011'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/13/2011'));

SetWidgetFormText('u73', GetGlobalVariableValue('$dlvryDate'));

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

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/14/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Monday, March 14, 2011'));

SetWidgetFormText('u73', GetGlobalVariableValue('$dlvryDate'));

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

SetGlobalVariableValue('$eventDate', PopulateVariables('Tuesday, March 15, 2011'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/15/2011'));

SetWidgetFormText('u73', GetGlobalVariableValue('$dlvryDate'));

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

SetGlobalVariableValue('$eventDate', PopulateVariables('Wednesday, March 9, 2011'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/09/2011'));

SetWidgetFormText('u73', GetGlobalVariableValue('$dlvryDate'));

}

}

var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'center';
var u191 = document.getElementById('u191');

u191.style.cursor = 'pointer';
if (bIE) u191.attachEvent("onclick", Clicku191);
else u191.addEventListener("click", Clicku191, true);
function Clicku191(e)
{

if (true) {

}

}

var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'center';
var u193 = document.getElementById('u193');

var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'center';
var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'top';
var u196 = document.getElementById('u196');

u196.style.cursor = 'pointer';
if (bIE) u196.attachEvent("onclick", Clicku196);
else u196.addEventListener("click", Clicku196, true);
function Clicku196(e)
{

if (true) {

	BringToFront("u311");

}

}

var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'center';
var u198 = document.getElementById('u198');

var u199 = document.getElementById('u199');

var u551 = document.getElementById('u551');

var u552 = document.getElementById('u552');
gv_vAlignTable['u552'] = 'center';
var u553 = document.getElementById('u553');

var u60 = document.getElementById('u60');

u60.style.cursor = 'pointer';
if (bIE) u60.attachEvent("onclick", Clicku60);
else u60.addEventListener("click", Clicku60, true);
function Clicku60(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/10/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Thursday, March 10, 2011'));

SetWidgetFormText('u73', GetGlobalVariableValue('$dlvryDate'));

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

SetGlobalVariableValue('$eventDate', PopulateVariables('Friday, March 11, 2011'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/11/2011'));

SetWidgetFormText('u73', GetGlobalVariableValue('$dlvryDate'));

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

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/12/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Saturday, March 12, 2011'));

SetWidgetFormText('u73', GetGlobalVariableValue('$dlvryDate'));

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

SetGlobalVariableValue('$eventDate', PopulateVariables('Sunday, March 6, 2011`'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/06/2011'));

SetWidgetFormText('u73', GetGlobalVariableValue('$dlvryDate'));

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

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/07/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Monday, March 7, 2011'));

SetWidgetFormText('u73', GetGlobalVariableValue('$dlvryDate'));

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

SetGlobalVariableValue('$eventDate', PopulateVariables('Tuesday, March 8, 2011'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/08/2011'));

SetWidgetFormText('u73', GetGlobalVariableValue('$dlvryDate'));

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

SetGlobalVariableValue('$eventDate', PopulateVariables('Wednesday, March 2, 2011'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/02/2011'));

SetWidgetFormText('u73', GetGlobalVariableValue('$dlvryDate'));

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

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/03/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Thursday, March 3, 2011'));

SetWidgetFormText('u73', GetGlobalVariableValue('$dlvryDate'));

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

SetGlobalVariableValue('$eventDate', PopulateVariables('Friday, March 4, 2011'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/04/2011'));

SetWidgetFormText('u73', GetGlobalVariableValue('$dlvryDate'));

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

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/5/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Saturday, March 05, 2011'));

SetWidgetFormText('u73', GetGlobalVariableValue('$dlvryDate'));

}

}

var u560 = document.getElementById('u560');
gv_vAlignTable['u560'] = 'center';
var u561 = document.getElementById('u561');

u561.style.cursor = 'pointer';
if (bIE) u561.attachEvent("onclick", Clicku561);
else u561.addEventListener("click", Clicku561, true);
function Clicku561(e)
{

if (true) {

	BringToFront("u0");

	SetPanelStateu3("pd2u3");

SetWidgetFormText('u114', GetGlobalVariableValue('$yourEmail'));

}

}
gv_vAlignTable['u561'] = 'top';
var u562 = document.getElementById('u562');
gv_vAlignTable['u562'] = 'top';
var u563 = document.getElementById('u563');

var u70 = document.getElementById('u70');

u70.style.cursor = 'pointer';
if (bIE) u70.attachEvent("onclick", Clicku70);
else u70.addEventListener("click", Clicku70, true);
function Clicku70(e)
{

if (true) {

	SetPanelStateu19("pd0u19");

SetGlobalVariableValue('$eventDate', PopulateVariables('Tuesday, March 1, 2011'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('03/01/2011'));

SetWidgetFormText('u73', GetGlobalVariableValue('$dlvryDate'));

}

}

var u71 = document.getElementById('u71');

u71.style.cursor = 'pointer';
if (bIE) u71.attachEvent("onclick", Clicku71);
else u71.addEventListener("click", Clicku71, true);
function Clicku71(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("This is not working in the prototype"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u73 = document.getElementById('u73');

u73.style.cursor = 'pointer';
if (bIE) u73.attachEvent("onclick", Clicku73);
else u73.addEventListener("click", Clicku73, true);
function Clicku73(e)
{

if (true) {

SetWidgetFormText('u73', PopulateVariables(''));

	SetPanelStateu19("pd1u19");

	BringToFront("u11");

}

}

var u74 = document.getElementById('u74');

u74.style.cursor = 'pointer';
if (bIE) u74.attachEvent("onclick", Clicku74);
else u74.addEventListener("click", Clicku74, true);
function Clicku74(e)
{

if (true) {

	SetPanelStateu11("pd1u11");

SetWidgetRichText('u89', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#FF6600; font-size:16px;">Order dates for delivery to ZIP/Postal [[ZIP]] by Wednesday, March 16.</span></b>'));

SetGlobalVariableValue('$OrderExDate', PopulateVariables('Wednesday, March 2'));

SetGlobalVariableValue('$closeDate', PopulateVariables('02/28/2011'));

}

}

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u76 = document.getElementById('u76');

u76.style.cursor = 'pointer';
if (bIE) u76.attachEvent("onclick", Clicku76);
else u76.addEventListener("click", Clicku76, true);
function Clicku76(e)
{

if (true) {

	BringToFront("u311");

SetWidgetRichText('u477', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will be available until 11:59 pm Eastern Time on the date you choose.&nbsp; <br>After the close date participants can see your sheet but cannot sign up online. <br><br>Click &quot;Help me choose a date&quot; to check your last date to get FREE standard shipping.</span>'));

}

}
gv_vAlignTable['u76'] = 'top';
var u77 = document.getElementById('u77');

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'center';
var u79 = document.getElementById('u79');

var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'center';
var u81 = document.getElementById('u81');

var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'center';
var u83 = document.getElementById('u83');

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'center';
var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'top';
var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'top';
var u87 = document.getElementById('u87');

var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'center';
var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u93 = document.getElementById('u93');

u93.style.cursor = 'pointer';
if (bIE) u93.attachEvent("onclick", Clicku93);
else u93.addEventListener("click", Clicku93, true);
function Clicku93(e)
{

if (true) {

	SetPanelStateu11("pd0u11");

}

}
gv_vAlignTable['u93'] = 'top';
var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'top';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'top';
var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u97 = document.getElementById('u97');

u97.style.cursor = 'pointer';
if (bIE) u97.attachEvent("onclick", Clicku97);
else u97.addEventListener("click", Clicku97, true);
function Clicku97(e)
{

if (((GetSelectedOption('u103')) == (PopulateVariables('1'))) && ((GetSelectedOption('u97')) == (PopulateVariables('FREE Standard delivery')))) {

SetWidgetRichText('u100', PopulateVariables('<span style=" font-family:\'Arial\'; font-size:13px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; Sign up would close on&nbsp; </span><span style=" font-family:\'Arial\'; color:#FF6600; font-size:13px;">Tuesday, March 1</span>'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Tuesday, March 1'));

SetGlobalVariableValue('$closeDate', PopulateVariables('03/01/2011'));

}
else
if (((GetSelectedOption('u97')) == (PopulateVariables('FREE Standard delivery'))) && ((GetSelectedOption('u103')) == (PopulateVariables('2')))) {

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Monday, February 28'));

SetWidgetRichText('u100', PopulateVariables('<span style=" font-family:\'Arial\'; font-size:13px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; Sign up would close on&nbsp; </span><span style=" font-family:\'Arial\'; color:#FF6600; font-size:13px;">Monday, February 28</span>'));

SetGlobalVariableValue('$closeDate', PopulateVariables('02/28/2011'));

}
else
if (((GetSelectedOption('u97')) == (PopulateVariables(' Rush delivery '))) && ((GetSelectedOption('u103')) == (PopulateVariables('2')))) {

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Monday, March 7'));

SetWidgetRichText('u100', PopulateVariables('<span style=" font-family:\'Arial\'; font-size:13px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; Sign up would close on&nbsp; </span><span style=" font-family:\'Arial\'; color:#FF6600; font-size:13px;">Monday, March 7</span>'));

SetGlobalVariableValue('$closeDate', PopulateVariables('03/07/2011'));

}
else
if (((GetSelectedOption('u97')) == (PopulateVariables(' Rush delivery '))) && ((GetSelectedOption('u103')) == (PopulateVariables('1')))) {

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Tuesday, March 8'));

SetWidgetRichText('u100', PopulateVariables('<span style=" font-family:\'Arial\'; font-size:13px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; Sign up would close on&nbsp; </span><span style=" font-family:\'Arial\'; color:#FF6600; font-size:13px;">Tuesday, March 8</span>'));

SetGlobalVariableValue('$closeDate', PopulateVariables('03/08/2011'));

}

}

var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u99 = document.getElementById('u99');

var u400 = document.getElementById('u400');

var u401 = document.getElementById('u401');

var u402 = document.getElementById('u402');
gv_vAlignTable['u402'] = 'center';
var u403 = document.getElementById('u403');

var u404 = document.getElementById('u404');
gv_vAlignTable['u404'] = 'center';
var u405 = document.getElementById('u405');
gv_vAlignTable['u405'] = 'top';
var u406 = document.getElementById('u406');

var u407 = document.getElementById('u407');
gv_vAlignTable['u407'] = 'top';
var u408 = document.getElementById('u408');

var u409 = document.getElementById('u409');
gv_vAlignTable['u409'] = 'top';
var u410 = document.getElementById('u410');

var u411 = document.getElementById('u411');
gv_vAlignTable['u411'] = 'top';
var u412 = document.getElementById('u412');

var u413 = document.getElementById('u413');

var u414 = document.getElementById('u414');
gv_vAlignTable['u414'] = 'center';
var u415 = document.getElementById('u415');

var u416 = document.getElementById('u416');
gv_vAlignTable['u416'] = 'center';
var u417 = document.getElementById('u417');

var u418 = document.getElementById('u418');

u418.style.cursor = 'pointer';
if (bIE) u418.attachEvent("onclick", Clicku418);
else u418.addEventListener("click", Clicku418, true);
function Clicku418(e)
{

if (true) {

SetWidgetFormText('u418', PopulateVariables(''));

SetGlobalVariableValue('$Comments', PopulateVariables(''));

}

}

if (bIE) u418.attachEvent("onblur", LostFocusu418);
else u418.addEventListener("blur", LostFocusu418, true);
function LostFocusu418(e)
{

if (true) {

SetGlobalVariableValue('$Comments', GetWidgetFormText('u418'));

}

}

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

var u426 = document.getElementById('u426');
gv_vAlignTable['u426'] = 'center';
var u427 = document.getElementById('u427');

u427.style.cursor = 'pointer';
if (bIE) u427.attachEvent("onclick", Clicku427);
else u427.addEventListener("click", Clicku427, true);
function Clicku427(e)
{

if ((GetGlobalVariableValue('$round')) == (PopulateVariables('0'))) {

SetGlobalVariableValue('$round', PopulateVariables('1'));

SetGlobalVariableValue('$Welcome', GetWidgetFormText('u445'));

SetGlobalVariableValue('$contactEmail', GetWidgetFormText('u563'));

SetGlobalVariableValue('$contactName', GetWidgetFormText('u564'));

SetGlobalVariableValue('$contactPhone', GetWidgetFormText('u567'));

	self.location.href="Preview.html" + GetQuerystring();

}
else
if ((GetGlobalVariableValue('$round')) == (PopulateVariables('1'))) {

	self.location.href="Manage.html" + GetQuerystring();

SetGlobalVariableValue('$Welcome', GetWidgetFormText('u445'));

}

}

var u428 = document.getElementById('u428');
gv_vAlignTable['u428'] = 'center';
var u429 = document.getElementById('u429');

var u290 = document.getElementById('u290');
gv_vAlignTable['u290'] = 'top';
var u291 = document.getElementById('u291');
gv_vAlignTable['u291'] = 'top';
var u292 = document.getElementById('u292');
gv_vAlignTable['u292'] = 'top';
var u293 = document.getElementById('u293');
gv_vAlignTable['u293'] = 'top';
var u294 = document.getElementById('u294');
gv_vAlignTable['u294'] = 'top';
var u295 = document.getElementById('u295');
gv_vAlignTable['u295'] = 'top';
var u296 = document.getElementById('u296');
gv_vAlignTable['u296'] = 'top';
var u430 = document.getElementById('u430');

var u431 = document.getElementById('u431');
gv_vAlignTable['u431'] = 'center';
var u432 = document.getElementById('u432');

var u433 = document.getElementById('u433');
gv_vAlignTable['u433'] = 'center';
var u434 = document.getElementById('u434');
gv_vAlignTable['u434'] = 'top';
var u435 = document.getElementById('u435');

u435.style.cursor = 'pointer';
if (bIE) u435.attachEvent("onclick", Clicku435);
else u435.addEventListener("click", Clicku435, true);
function Clicku435(e)
{

if (((GetCheckState('u435')) == (false)) && ((GetCheckState('u456')) == (false))) {

SetGlobalVariableValue('$emaiNew', PopulateVariables('Do not send email notifications.'));

;

}
else
if (((GetCheckState('u435')) == (true)) && ((GetCheckState('u456')) == (true))) {

SetGlobalVariableValue('$emaiNew', PopulateVariables('Each time someone signs up and when my sign-up sheet closes.'));

;

}
else
if (((GetCheckState('u435')) == (true)) && ((GetCheckState('u456')) == (false))) {

SetGlobalVariableValue('$emaiNew', PopulateVariables('Each time someone  signs up.'));

}
else
if (((GetCheckState('u435')) == (false)) && ((GetCheckState('u456')) == (true))) {

SetGlobalVariableValue('$emaiNew', PopulateVariables('When my sign-up sheet closes.'));

}

}

var u436 = document.getElementById('u436');
gv_vAlignTable['u436'] = 'top';
var u437 = document.getElementById('u437');

var u438 = document.getElementById('u438');
gv_vAlignTable['u438'] = 'top';
var u439 = document.getElementById('u439');

var u440 = document.getElementById('u440');

var u441 = document.getElementById('u441');
gv_vAlignTable['u441'] = 'center';
var u442 = document.getElementById('u442');

var u443 = document.getElementById('u443');
gv_vAlignTable['u443'] = 'center';
var u444 = document.getElementById('u444');
gv_vAlignTable['u444'] = 'top';
var u445 = document.getElementById('u445');

var u446 = document.getElementById('u446');

var u447 = document.getElementById('u447');

var u448 = document.getElementById('u448');
gv_vAlignTable['u448'] = 'center';
var u449 = document.getElementById('u449');

var u450 = document.getElementById('u450');
gv_vAlignTable['u450'] = 'center';
var u451 = document.getElementById('u451');

var u452 = document.getElementById('u452');
gv_vAlignTable['u452'] = 'center';
var u453 = document.getElementById('u453');

var u454 = document.getElementById('u454');
gv_vAlignTable['u454'] = 'center';
var u455 = document.getElementById('u455');
gv_vAlignTable['u455'] = 'top';
var u456 = document.getElementById('u456');

u456.style.cursor = 'pointer';
if (bIE) u456.attachEvent("onclick", Clicku456);
else u456.addEventListener("click", Clicku456, true);
function Clicku456(e)
{

if (((GetCheckState('u456')) == (false)) && ((GetCheckState('u435')) == (false))) {

SetGlobalVariableValue('$emaiNew', PopulateVariables('Do not send email notifications.'));

;

}
else
if (((GetCheckState('u456')) == (false)) && ((GetCheckState('u435')) == (true))) {

SetGlobalVariableValue('$emaiNew', PopulateVariables('Each time someone signs up.'));

}
else
if (((GetCheckState('u456')) == (true)) && ((GetCheckState('u435')) == (true))) {

SetGlobalVariableValue('$emaiNew', PopulateVariables('Each time someone signs up and when my sign-up sheet closes.'));

}
else
if (((GetCheckState('u456')) == (true)) && ((GetCheckState('u435')) == (false))) {

SetGlobalVariableValue('$emaiNew', PopulateVariables('When my sign-up sheet closes.'));

}

}

var u457 = document.getElementById('u457');
gv_vAlignTable['u457'] = 'top';
var u458 = document.getElementById('u458');

u458.style.cursor = 'pointer';
if (bIE) u458.attachEvent("onclick", Clicku458);
else u458.addEventListener("click", Clicku458, true);
function Clicku458(e)
{

if ((GetCheckState('u458')) == (true)) {

	SetPanelVisibilityu389("");

	MoveWidgetTo('u397',0,120);

}
else
if (true) {

	SetPanelVisibilityu389("hidden");

SetGlobalVariableValue('$dlvyInfo', PopulateVariables(''));

SetWidgetFormText('u394', PopulateVariables(' '));

	MoveWidgetTo('u397',0,25);

}

}

var u459 = document.getElementById('u459');
gv_vAlignTable['u459'] = 'top';
var u460 = document.getElementById('u460');

u460.style.cursor = 'pointer';
if (bIE) u460.attachEvent("onclick", Clicku460);
else u460.addEventListener("click", Clicku460, true);
function Clicku460(e)
{

if ((GetCheckState('u460')) == (true)) {

	MoveWidgetTo('u388',0,120);

	SetPanelVisibilityu380("");

}
else
if (true) {

	MoveWidgetTo('u388',0,25);

SetGlobalVariableValue('$paymtInfo', PopulateVariables(''));

SetWidgetFormText('u386', PopulateVariables(''));

	SetPanelVisibilityu380("hidden");

}

}

var u461 = document.getElementById('u461');
gv_vAlignTable['u461'] = 'top';
var u462 = document.getElementById('u462');

u462.style.cursor = 'pointer';
if (bIE) u462.attachEvent("onclick", Clicku462);
else u462.addEventListener("click", Clicku462, true);
function Clicku462(e)
{

if ((GetCheckState('u462')) == (true)) {

	MoveWidgetTo('u379',0,120);

	SetPanelStateu369("pd1u369");

}
else
if (true) {

	MoveWidgetTo('u379',0,50);

	SetPanelStateu369("pd0u369");

SetGlobalVariableValue('$groupPrice', PopulateVariables(''));

SetWidgetFormText('u374', PopulateVariables(''));

}

}

var u463 = document.getElementById('u463');
gv_vAlignTable['u463'] = 'top';
var u464 = document.getElementById('u464');
gv_vAlignTable['u464'] = 'top';
var u465 = document.getElementById('u465');

var u466 = document.getElementById('u466');
gv_vAlignTable['u466'] = 'center';
var u467 = document.getElementById('u467');

var u468 = document.getElementById('u468');
gv_vAlignTable['u468'] = 'center';
var u469 = document.getElementById('u469');

var u470 = document.getElementById('u470');

var u471 = document.getElementById('u471');
gv_vAlignTable['u471'] = 'center';
var u472 = document.getElementById('u472');

var u473 = document.getElementById('u473');

var u474 = document.getElementById('u474');
gv_vAlignTable['u474'] = 'center';
var u475 = document.getElementById('u475');

var u476 = document.getElementById('u476');
gv_vAlignTable['u476'] = 'center';
var u477 = document.getElementById('u477');
gv_vAlignTable['u477'] = 'top';
var u478 = document.getElementById('u478');

var u479 = document.getElementById('u479');
gv_vAlignTable['u479'] = 'center';
var u480 = document.getElementById('u480');

var u481 = document.getElementById('u481');

u481.style.cursor = 'pointer';
if (bIE) u481.attachEvent("onclick", Clicku481);
else u481.addEventListener("click", Clicku481, true);
function Clicku481(e)
{

if (true) {

	SetPanelStateu3("pd1u3");

	SetPanelStateu480("pd0u480");

	BringToFront("u0");

	ScrollToWidget('u10', false,true);

SetWidgetFormText('u14', PopulateVariables(''));

SetWidgetFormText('u73', PopulateVariables('mm/dd/yyyy'));

}

}

var u482 = document.getElementById('u482');

var u483 = document.getElementById('u483');
gv_vAlignTable['u483'] = 'center';
var u484 = document.getElementById('u484');

u484.style.cursor = 'pointer';
if (bIE) u484.attachEvent("onclick", Clicku484);
else u484.addEventListener("click", Clicku484, true);
function Clicku484(e)
{

if (true) {

	SetPanelStateu480("pd2u480");

}

}

var u485 = document.getElementById('u485');

u485.style.cursor = 'pointer';
if (bIE) u485.attachEvent("onclick", Clicku485);
else u485.addEventListener("click", Clicku485, true);
function Clicku485(e)
{

if (true) {

	SetPanelStateu480("pd0u480");

}

}

var u486 = document.getElementById('u486');

var u487 = document.getElementById('u487');
gv_vAlignTable['u487'] = 'center';
var u488 = document.getElementById('u488');

var u489 = document.getElementById('u489');
gv_vAlignTable['u489'] = 'center';
var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'center';
var u300 = document.getElementById('u300');
gv_vAlignTable['u300'] = 'center';
var u301 = document.getElementById('u301');

u301.style.cursor = 'pointer';
if (bIE) u301.attachEvent("onclick", Clicku301);
else u301.addEventListener("click", Clicku301, true);
function Clicku301(e)
{

if (true) {

	BringToFront("u311");

}

}

var u302 = document.getElementById('u302');
gv_vAlignTable['u302'] = 'center';
var u303 = document.getElementById('u303');

var u304 = document.getElementById('u304');
gv_vAlignTable['u304'] = 'center';
var u305 = document.getElementById('u305');
gv_vAlignTable['u305'] = 'top';
var u306 = document.getElementById('u306');

var u307 = document.getElementById('u307');
gv_vAlignTable['u307'] = 'center';
var u308 = document.getElementById('u308');
gv_vAlignTable['u308'] = 'top';
var u309 = document.getElementById('u309');

u309.style.cursor = 'pointer';
if (bIE) u309.attachEvent("onclick", Clicku309);
else u309.addEventListener("click", Clicku309, true);
function Clicku309(e)
{

if (true) {

	BringToFront("u311");

}

}

var u497 = document.getElementById('u497');
gv_vAlignTable['u497'] = 'center';
var u498 = document.getElementById('u498');

u498.style.cursor = 'pointer';
if (bIE) u498.attachEvent("onclick", Clicku498);
else u498.addEventListener("click", Clicku498, true);
function Clicku498(e)
{

if ((GetCheckState('u364')) == (false)) {

	SetPanelStateu480("pd0u480");

SetGlobalVariableValue('$closeDate', PopulateVariables('02/25/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Friday, February 25, 2011'));

SetWidgetRichText('u477', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u362', GetGlobalVariableValue('$closeDate'));

SetWidgetRichText('u545', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0066CC; font-size:11px;">Saturday, February 27</span>'));

SetWidgetRichText('u547', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Saturday, March 12</span>'));

SetWidgetRichText('u549', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Saturday, March 5 </span><span style=" font-family:\'Helvetica\'; color:#949494; font-size:11px;">(25% add\'l cost)</span>'));

}
else
if (true) {

	SetPanelStateu480("pd0u480");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u499 = document.getElementById('u499');

u499.style.cursor = 'pointer';
if (bIE) u499.attachEvent("onclick", Clicku499);
else u499.addEventListener("click", Clicku499, true);
function Clicku499(e)
{

if ((GetCheckState('u364')) == (false)) {

	SetPanelStateu480("pd0u480");

SetGlobalVariableValue('$closeDate', PopulateVariables('02/26/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Saturday, February 26, 2011'));

SetWidgetRichText('u477', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u362', GetGlobalVariableValue('$closeDate'));

SetWidgetRichText('u545', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0066CC; font-size:11px;">Sunday, February 28</span>'));

SetWidgetRichText('u547', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Sunday, March 13</span>'));

SetWidgetRichText('u549', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Sunday, March 6 </span><span style=" font-family:\'Helvetica\'; color:#949494; font-size:11px;">(25% add\'l cost)</span>'));

}
else
if (true) {

	SetPanelStateu480("pd0u480");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u504 = document.getElementById('u504');

u504.style.cursor = 'pointer';
if (bIE) u504.attachEvent("onclick", Clicku504);
else u504.addEventListener("click", Clicku504, true);
function Clicku504(e)
{

if (true) {

	SetPanelStateu480("pd1u480");

}

}

var u505 = document.getElementById('u505');

u505.style.cursor = 'pointer';
if (bIE) u505.attachEvent("onclick", Clicku505);
else u505.addEventListener("click", Clicku505, true);
function Clicku505(e)
{

if (true) {

	SetPanelStateu480("pd0u480");

}

}

var u506 = document.getElementById('u506');

u506.style.cursor = 'pointer';
if (bIE) u506.attachEvent("onclick", Clicku506);
else u506.addEventListener("click", Clicku506, true);
function Clicku506(e)
{

if ((GetCheckState('u364')) == (false)) {

	SetPanelStateu480("pd0u480");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/01/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Tuesday, March 1, 2011'));

SetWidgetRichText('u477', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u362', GetGlobalVariableValue('$closeDate'));

SetWidgetRichText('u545', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0066CC; font-size:11px;">Wednesday, March 2</span>'));

SetWidgetRichText('u547', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Wednesday, March 16</span>'));

SetWidgetRichText('u549', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Wednesday, March 9 </span><span style=" font-family:\'Helvetica\'; color:#949494; font-size:11px;">(25% add\'l cost)</span>'));

}
else
if (true) {

	SetPanelStateu480("pd0u480");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u507 = document.getElementById('u507');

u507.style.cursor = 'pointer';
if (bIE) u507.attachEvent("onclick", Clicku507);
else u507.addEventListener("click", Clicku507, true);
function Clicku507(e)
{

if ((GetCheckState('u364')) == (false)) {

	SetPanelStateu480("pd0u480");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/02/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Wednesday, March 2, 2011'));

SetWidgetRichText('u477', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u362', GetGlobalVariableValue('$closeDate'));

SetWidgetRichText('u545', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0066CC; font-size:11px;">Thursday, March 3</span>'));

SetWidgetRichText('u547', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Thursday, March 17</span>'));

SetWidgetRichText('u549', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Thursday, March 10 </span><span style=" font-family:\'Helvetica\'; color:#949494; font-size:11px;">(25% add\'l cost)</span>'));

}
else
if (true) {

	SetPanelStateu480("pd0u480");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u508 = document.getElementById('u508');

u508.style.cursor = 'pointer';
if (bIE) u508.attachEvent("onclick", Clicku508);
else u508.addEventListener("click", Clicku508, true);
function Clicku508(e)
{

if ((GetCheckState('u364')) == (false)) {

	SetPanelStateu480("pd0u480");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/03/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Thursday, March 3, 2011'));

SetWidgetRichText('u477', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u362', GetGlobalVariableValue('$closeDate'));

SetWidgetRichText('u545', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0066CC; font-size:11px;">Friday, March 4</span>'));

SetWidgetRichText('u547', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Friday, March 18</span>'));

SetWidgetRichText('u549', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Friday, March 11 </span><span style=" font-family:\'Helvetica\'; color:#949494; font-size:11px;">(25% add\'l cost)</span>'));

}
else
if (true) {

	SetPanelStateu480("pd0u480");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u509 = document.getElementById('u509');

u509.style.cursor = 'pointer';
if (bIE) u509.attachEvent("onclick", Clicku509);
else u509.addEventListener("click", Clicku509, true);
function Clicku509(e)
{

if ((GetCheckState('u364')) == (false)) {

	SetPanelStateu480("pd0u480");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/04/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Friday, March 4, 2011'));

SetWidgetRichText('u477', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u362', GetGlobalVariableValue('$closeDate'));

SetWidgetRichText('u545', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0066CC; font-size:11px;">Saturday, March 5</span>'));

SetWidgetRichText('u547', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Saturday, March 19</span>'));

SetWidgetRichText('u549', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Saturday, March 12 </span><span style=" font-family:\'Helvetica\'; color:#949494; font-size:11px;">(25% add\'l cost)</span>'));

}
else
if (true) {

	SetPanelStateu480("pd0u480");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u310 = document.getElementById('u310');
gv_vAlignTable['u310'] = 'center';
var u311 = document.getElementById('u311');

var u312 = document.getElementById('u312');

var u313 = document.getElementById('u313');
gv_vAlignTable['u313'] = 'center';
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

;

;

;

SetGlobalVariableValue('$contactName', GetGlobalVariableValue('$YourName'));

SetGlobalVariableValue('$contactEmail', GetGlobalVariableValue('$yourEmail'));

SetGlobalVariableValue('$contactPhone', GetGlobalVariableValue('$yourPhone'));

	MoveWidgetTo('u358',12,620);

}

}

var u318 = document.getElementById('u318');
gv_vAlignTable['u318'] = 'top';
var u319 = document.getElementById('u319');

u319.style.cursor = 'pointer';
if (bIE) u319.attachEvent("onclick", Clicku319);
else u319.addEventListener("click", Clicku319, true);
function Clicku319(e)
{

if (true) {

	MoveWidgetTo('u358',12,780);

}

}

var u514 = document.getElementById('u514');

u514.style.cursor = 'pointer';
if (bIE) u514.attachEvent("onclick", Clicku514);
else u514.addEventListener("click", Clicku514, true);
function Clicku514(e)
{

if ((GetCheckState('u364')) == (false)) {

	SetPanelStateu480("pd0u480");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/11/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Friday, March 11, 2011'));

SetWidgetRichText('u477', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u362', GetGlobalVariableValue('$closeDate'));

SetWidgetRichText('u545', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0066CC; font-size:11px;">Saturday, March 12</span>'));

SetWidgetRichText('u547', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Saturday, March 26</span>'));

SetWidgetRichText('u549', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Saturday, March 19 </span><span style=" font-family:\'Helvetica\'; color:#949494; font-size:11px;">(25% add\'l cost)</span>'));

}
else
if (true) {

	SetPanelStateu480("pd0u480");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u515 = document.getElementById('u515');

u515.style.cursor = 'pointer';
if (bIE) u515.attachEvent("onclick", Clicku515);
else u515.addEventListener("click", Clicku515, true);
function Clicku515(e)
{

if ((GetCheckState('u364')) == (false)) {

	SetPanelStateu480("pd0u480");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/12/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Saturday, March 12, 2011'));

SetWidgetRichText('u477', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u362', GetGlobalVariableValue('$closeDate'));

SetWidgetRichText('u545', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0066CC; font-size:11px;">Sunday, March 13</span>'));

SetWidgetRichText('u547', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Sunday, March 27</span>'));

SetWidgetRichText('u549', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Sunday, March 20 </span><span style=" font-family:\'Helvetica\'; color:#949494; font-size:11px;">(25% add\'l cost)</span>'));

}
else
if (true) {

	SetPanelStateu480("pd0u480");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u516 = document.getElementById('u516');

u516.style.cursor = 'pointer';
if (bIE) u516.attachEvent("onclick", Clicku516);
else u516.addEventListener("click", Clicku516, true);
function Clicku516(e)
{

if ((GetCheckState('u364')) == (false)) {

	SetPanelStateu480("pd0u480");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/07/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Monday, March 7, 2011'));

SetWidgetRichText('u477', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u362', GetGlobalVariableValue('$closeDate'));

SetWidgetRichText('u545', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0066CC; font-size:11px;">Tuesday, March 8</span>'));

SetWidgetRichText('u547', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Tuesday, March 22</span>'));

SetWidgetRichText('u549', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Tuesday, March 15 </span><span style=" font-family:\'Helvetica\'; color:#949494; font-size:11px;">(25% add\'l cost)</span>'));

}
else
if (true) {

	SetPanelStateu480("pd0u480");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u517 = document.getElementById('u517');

u517.style.cursor = 'pointer';
if (bIE) u517.attachEvent("onclick", Clicku517);
else u517.addEventListener("click", Clicku517, true);
function Clicku517(e)
{

if ((GetCheckState('u364')) == (false)) {

	SetPanelStateu480("pd0u480");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/06/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Sunday, March 6, 2011'));

SetWidgetRichText('u477', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u362', GetGlobalVariableValue('$closeDate'));

SetWidgetRichText('u545', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0066CC; font-size:11px;">Monday, March 7</span>'));

SetWidgetRichText('u547', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Monday, March 21</span>'));

SetWidgetRichText('u549', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Monday, March 14 </span><span style=" font-family:\'Helvetica\'; color:#949494; font-size:11px;">(25% add\'l cost)</span>'));

}
else
if (true) {

	SetPanelStateu480("pd0u480");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u518 = document.getElementById('u518');

u518.style.cursor = 'pointer';
if (bIE) u518.attachEvent("onclick", Clicku518);
else u518.addEventListener("click", Clicku518, true);
function Clicku518(e)
{

if ((GetCheckState('u364')) == (false)) {

	SetPanelStateu480("pd0u480");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/15/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Tuesday, March 15, 2011'));

SetWidgetRichText('u477', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u362', GetGlobalVariableValue('$closeDate'));

SetWidgetRichText('u545', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0066CC; font-size:11px;">Wednesday, March 16</span>'));

SetWidgetRichText('u547', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Wednesday, March 30</span>'));

SetWidgetRichText('u549', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Wednesday, March 23 </span><span style=" font-family:\'Helvetica\'; color:#949494; font-size:11px;">(25% add\'l cost)</span>'));

}
else
if (true) {

	SetPanelStateu480("pd0u480");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u519 = document.getElementById('u519');

u519.style.cursor = 'pointer';
if (bIE) u519.attachEvent("onclick", Clicku519);
else u519.addEventListener("click", Clicku519, true);
function Clicku519(e)
{

if ((GetCheckState('u364')) == (false)) {

	SetPanelStateu480("pd0u480");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/16/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Wednesday, March 16, 2011'));

SetWidgetRichText('u477', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u362', GetGlobalVariableValue('$closeDate'));

SetWidgetRichText('u545', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0066CC; font-size:11px;">Thursday, March 17</span>'));

SetWidgetRichText('u547', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Thursday, March 31</span>'));

SetWidgetRichText('u549', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Thursday, March 24 </span><span style=" font-family:\'Helvetica\'; color:#949494; font-size:11px;">(25% add\'l cost)</span>'));

}
else
if (true) {

	SetPanelStateu480("pd0u480");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u320 = document.getElementById('u320');
gv_vAlignTable['u320'] = 'top';
var u321 = document.getElementById('u321');

var u322 = document.getElementById('u322');

u322.style.cursor = 'pointer';
if (bIE) u322.attachEvent("onclick", Clicku322);
else u322.addEventListener("click", Clicku322, true);
function Clicku322(e)
{

if (true) {

	SetPanelStateu321("pd1u321");

SetWidgetFormText('u324', GetGlobalVariableValue('$GroupName'));

}

}
gv_vAlignTable['u322'] = 'top';
var u323 = document.getElementById('u323');
gv_vAlignTable['u323'] = 'top';
var u324 = document.getElementById('u324');

var u325 = document.getElementById('u325');

u325.style.cursor = 'pointer';
if (bIE) u325.attachEvent("onclick", Clicku325);
else u325.addEventListener("click", Clicku325, true);
function Clicku325(e)
{

if (true) {

	SetPanelStateu321("pd0u321");

SetGlobalVariableValue('$GroupName', GetWidgetFormText('u324'));

SetWidgetRichText('u322', PopulateVariables('<span style=" font-family:\'Myriad Pro\'; color:#003366; font-size:21px;">Settings for the [[GroupName]] Sign-up Sheet</span><span style=" font-family:\'Helvetica\'; color:#003366; font-size:19px;">&nbsp; &nbsp;&nbsp; </span><span style=" font-family:\'Helvetica\'; color:#006699; font-size:13px;"><u>Change Group Name</u></span>'));

;

}

}

var u326 = document.getElementById('u326');
gv_vAlignTable['u326'] = 'center';
var u327 = document.getElementById('u327');
gv_vAlignTable['u327'] = 'top';
var u328 = document.getElementById('u328');
gv_vAlignTable['u328'] = 'top';
var u329 = document.getElementById('u329');

var u520 = document.getElementById('u520');

u520.style.cursor = 'pointer';
if (bIE) u520.attachEvent("onclick", Clicku520);
else u520.addEventListener("click", Clicku520, true);
function Clicku520(e)
{

if ((GetCheckState('u364')) == (false)) {

	SetPanelStateu480("pd0u480");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/17/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Thursday, March 17, 2011'));

SetWidgetRichText('u477', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u362', GetGlobalVariableValue('$closeDate'));

SetWidgetRichText('u545', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0066CC; font-size:11px;">Friday, March 18</span>'));

SetWidgetRichText('u547', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Friday, April 1</span>'));

SetWidgetRichText('u549', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Friday, March 25 </span><span style=" font-family:\'Helvetica\'; color:#949494; font-size:11px;">(25% add\'l cost)</span>'));

}
else
if (true) {

	SetPanelStateu480("pd0u480");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u523 = document.getElementById('u523');

u523.style.cursor = 'pointer';
if (bIE) u523.attachEvent("onclick", Clicku523);
else u523.addEventListener("click", Clicku523, true);
function Clicku523(e)
{

if ((GetCheckState('u364')) == (false)) {

	SetPanelStateu480("pd0u480");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/21/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Monday, March 21, 2011'));

SetWidgetRichText('u477', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u362', GetGlobalVariableValue('$closeDate'));

SetWidgetRichText('u545', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0066CC; font-size:11px;">Tuesday, March 22</span>'));

SetWidgetRichText('u547', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Tuesday, April 5</span>'));

SetWidgetRichText('u549', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Tuesday, March 29 </span><span style=" font-family:\'Helvetica\'; color:#949494; font-size:11px;">(25% add\'l cost)</span>'));

}
else
if (true) {

	SetPanelStateu480("pd0u480");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u524 = document.getElementById('u524');

u524.style.cursor = 'pointer';
if (bIE) u524.attachEvent("onclick", Clicku524);
else u524.addEventListener("click", Clicku524, true);
function Clicku524(e)
{

if ((GetCheckState('u364')) == (false)) {

	SetPanelStateu480("pd0u480");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/13/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Sunday, March 13, 2011'));

SetWidgetRichText('u477', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u362', GetGlobalVariableValue('$closeDate'));

SetWidgetRichText('u545', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0066CC; font-size:11px;">Monday, March 14</span>'));

SetWidgetRichText('u547', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Monday, March 28</span>'));

SetWidgetRichText('u549', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Monday, March 21 </span><span style=" font-family:\'Helvetica\'; color:#949494; font-size:11px;">(25% add\'l cost)</span>'));

}
else
if (true) {

	SetPanelStateu480("pd0u480");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u525 = document.getElementById('u525');

u525.style.cursor = 'pointer';
if (bIE) u525.attachEvent("onclick", Clicku525);
else u525.addEventListener("click", Clicku525, true);
function Clicku525(e)
{

if ((GetCheckState('u364')) == (false)) {

	SetPanelStateu480("pd0u480");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/22/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Tuesday, March 22, 2011'));

SetWidgetRichText('u477', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u362', GetGlobalVariableValue('$closeDate'));

SetWidgetRichText('u545', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0066CC; font-size:11px;">Wednesday, March 23</span>'));

SetWidgetRichText('u547', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Wednesday,April 6</span>'));

SetWidgetRichText('u549', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Wednesday, March 30 </span><span style=" font-family:\'Helvetica\'; color:#949494; font-size:11px;">(25% add\'l cost)</span>'));

}
else
if (true) {

	SetPanelStateu480("pd0u480");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u526 = document.getElementById('u526');

u526.style.cursor = 'pointer';
if (bIE) u526.attachEvent("onclick", Clicku526);
else u526.addEventListener("click", Clicku526, true);
function Clicku526(e)
{

if ((GetCheckState('u364')) == (false)) {

	SetPanelStateu480("pd0u480");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/23/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Wednesday, March 23, 2011'));

SetWidgetRichText('u477', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u362', GetGlobalVariableValue('$closeDate'));

SetWidgetRichText('u545', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0066CC; font-size:11px;">Thursday, March 24</span>'));

SetWidgetRichText('u547', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Thursday, April 7</span>'));

SetWidgetRichText('u549', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Thursday, March 31 </span><span style=" font-family:\'Helvetica\'; color:#949494; font-size:11px;">(25% add\'l cost)</span>'));

}
else
if (true) {

	SetPanelStateu480("pd0u480");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u527 = document.getElementById('u527');

u527.style.cursor = 'pointer';
if (bIE) u527.attachEvent("onclick", Clicku527);
else u527.addEventListener("click", Clicku527, true);
function Clicku527(e)
{

if ((GetCheckState('u364')) == (false)) {

	SetPanelStateu480("pd0u480");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/24/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Thursday, March 24, 2011'));

SetWidgetRichText('u477', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u362', GetGlobalVariableValue('$closeDate'));

SetWidgetRichText('u545', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0066CC; font-size:11px;">Friday, March 25</span>'));

SetWidgetRichText('u547', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Friday, April 8</span>'));

SetWidgetRichText('u549', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Friday, April 1 </span><span style=" font-family:\'Helvetica\'; color:#949494; font-size:11px;">(25% add\'l cost)</span>'));

}
else
if (true) {

	SetPanelStateu480("pd0u480");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u528 = document.getElementById('u528');

u528.style.cursor = 'pointer';
if (bIE) u528.attachEvent("onclick", Clicku528);
else u528.addEventListener("click", Clicku528, true);
function Clicku528(e)
{

if ((GetCheckState('u364')) == (false)) {

	SetPanelStateu480("pd0u480");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/25/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Friday, March 25, 2011'));

SetWidgetRichText('u477', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u362', GetGlobalVariableValue('$closeDate'));

SetWidgetRichText('u545', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0066CC; font-size:11px;">Saturday, March 26</span>'));

SetWidgetRichText('u547', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Saturday, April 9</span>'));

SetWidgetRichText('u549', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Saturday, April 2 </span><span style=" font-family:\'Helvetica\'; color:#949494; font-size:11px;">(25% add\'l cost)</span>'));

}
else
if (true) {

	SetPanelStateu480("pd0u480");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u529 = document.getElementById('u529');

u529.style.cursor = 'pointer';
if (bIE) u529.attachEvent("onclick", Clicku529);
else u529.addEventListener("click", Clicku529, true);
function Clicku529(e)
{

if ((GetCheckState('u364')) == (false)) {

	SetPanelStateu480("pd0u480");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/26/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Saturday, March 26, 2011'));

SetWidgetRichText('u477', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u362', GetGlobalVariableValue('$closeDate'));

SetWidgetRichText('u545', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0066CC; font-size:11px;">Sunday, March 27</span>'));

SetWidgetRichText('u547', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Sunday, April 10</span>'));

SetWidgetRichText('u549', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Sunday, April 3 </span><span style=" font-family:\'Helvetica\'; color:#949494; font-size:11px;">(25% add\'l cost)</span>'));

}
else
if (true) {

	SetPanelStateu480("pd0u480");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u330 = document.getElementById('u330');
gv_vAlignTable['u330'] = 'center';
var u331 = document.getElementById('u331');

var u332 = document.getElementById('u332');
gv_vAlignTable['u332'] = 'center';
var u333 = document.getElementById('u333');

var u334 = document.getElementById('u334');

var u335 = document.getElementById('u335');
gv_vAlignTable['u335'] = 'center';
var u336 = document.getElementById('u336');

u336.style.cursor = 'pointer';
if (bIE) u336.attachEvent("onclick", Clicku336);
else u336.addEventListener("click", Clicku336, true);
function Clicku336(e)
{

if (true) {

	MoveWidgetTo('u358',12,780);

}

}

var u337 = document.getElementById('u337');
gv_vAlignTable['u337'] = 'top';
var u338 = document.getElementById('u338');

u338.style.cursor = 'pointer';
if (bIE) u338.attachEvent("onclick", Clicku338);
else u338.addEventListener("click", Clicku338, true);
function Clicku338(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Display participant sheet"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}
gv_vAlignTable['u338'] = 'top';
var u339 = document.getElementById('u339');

var u530 = document.getElementById('u530');

u530.style.cursor = 'pointer';
if (bIE) u530.attachEvent("onclick", Clicku530);
else u530.addEventListener("click", Clicku530, true);
function Clicku530(e)
{

if ((GetCheckState('u364')) == (false)) {

	SetPanelStateu480("pd0u480");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/20/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Sunday, March 20, 2011'));

SetWidgetRichText('u477', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u362', GetGlobalVariableValue('$closeDate'));

SetWidgetRichText('u545', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0066CC; font-size:11px;">Monday, March 21</span>'));

SetWidgetRichText('u547', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Monday, April 4</span>'));

SetWidgetRichText('u549', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Monday, March 28 </span><span style=" font-family:\'Helvetica\'; color:#949494; font-size:11px;">(25% add\'l cost)</span>'));

}
else
if (true) {

	SetPanelStateu480("pd0u480");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u534 = document.getElementById('u534');

u534.style.cursor = 'pointer';
if (bIE) u534.attachEvent("onclick", Clicku534);
else u534.addEventListener("click", Clicku534, true);
function Clicku534(e)
{

if ((GetCheckState('u364')) == (false)) {

	SetPanelStateu480("pd0u480");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/31/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Thursday, March 31, 2011'));

SetWidgetRichText('u477', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u362', GetGlobalVariableValue('$closeDate'));

SetWidgetRichText('u545', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0066CC; font-size:11px;">Friday, April 1</span>'));

SetWidgetRichText('u547', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Friday, April 15</span>'));

SetWidgetRichText('u549', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Friday, April 8 </span><span style=" font-family:\'Helvetica\'; color:#949494; font-size:11px;">(25% add\'l cost)</span>'));

}
else
if (true) {

	SetPanelStateu480("pd0u480");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u535 = document.getElementById('u535');

u535.style.cursor = 'pointer';
if (bIE) u535.attachEvent("onclick", Clicku535);
else u535.addEventListener("click", Clicku535, true);
function Clicku535(e)
{

if ((GetCheckState('u364')) == (false)) {

	SetPanelStateu480("pd0u480");

SetGlobalVariableValue('$closeDate', PopulateVariables('03/27/2011'));

SetGlobalVariableValue('$CloseExDate', PopulateVariables('Sunday, March 27, 2011'));

SetWidgetRichText('u477', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on [[CloseExDate]] at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetWidgetFormText('u362', GetGlobalVariableValue('$closeDate'));

SetWidgetRichText('u545', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0066CC; font-size:11px;">Monday, March 28</span>'));

SetWidgetRichText('u547', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Monday, April 11</span>'));

SetWidgetRichText('u549', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Monday, April 4 </span><span style=" font-family:\'Helvetica\'; color:#949494; font-size:11px;">(25% add\'l cost)</span>'));

}
else
if (true) {

	SetPanelStateu480("pd0u480");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck the box to &quot;Leave it open until I close it&quot; if you want to set a closing date for your sheet."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u536 = document.getElementById('u536');

u536.style.cursor = 'pointer';
if (bIE) u536.attachEvent("onclick", Clicku536);
else u536.addEventListener("click", Clicku536, true);
function Clicku536(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("This is not working in this prototype"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u537 = document.getElementById('u537');

var u538 = document.getElementById('u538');

var u539 = document.getElementById('u539');
gv_vAlignTable['u539'] = 'center';
var u340 = document.getElementById('u340');
gv_vAlignTable['u340'] = 'center';
var u341 = document.getElementById('u341');

var u342 = document.getElementById('u342');

u342.style.cursor = 'pointer';
if (bIE) u342.attachEvent("onclick", Clicku342);
else u342.addEventListener("click", Clicku342, true);
function Clicku342(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u343 = document.getElementById('u343');
gv_vAlignTable['u343'] = 'center';
var u344 = document.getElementById('u344');
gv_vAlignTable['u344'] = 'top';
var u345 = document.getElementById('u345');
gv_vAlignTable['u345'] = 'top';
var u346 = document.getElementById('u346');

var u347 = document.getElementById('u347');
gv_vAlignTable['u347'] = 'center';
var u348 = document.getElementById('u348');
gv_vAlignTable['u348'] = 'top';
var u349 = document.getElementById('u349');
gv_vAlignTable['u349'] = 'top';
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

var u550 = document.getElementById('u550');
gv_vAlignTable['u550'] = 'top';
var u554 = document.getElementById('u554');
gv_vAlignTable['u554'] = 'center';
var u555 = document.getElementById('u555');

var u556 = document.getElementById('u556');
gv_vAlignTable['u556'] = 'center';
var u557 = document.getElementById('u557');

var u558 = document.getElementById('u558');
gv_vAlignTable['u558'] = 'center';
var u559 = document.getElementById('u559');

var u360 = document.getElementById('u360');
gv_vAlignTable['u360'] = 'center';
var u361 = document.getElementById('u361');
gv_vAlignTable['u361'] = 'top';
var u362 = document.getElementById('u362');

u362.style.cursor = 'pointer';
if (bIE) u362.attachEvent("onclick", Clicku362);
else u362.addEventListener("click", Clicku362, true);
function Clicku362(e)
{

if ((GetCheckState('u364')) == (false)) {

SetWidgetFormText('u362', PopulateVariables(''));

SetGlobalVariableValue('$DaysLeftNum', PopulateVariables('8'));

SetGlobalVariableValue('$DaysLeftText', PopulateVariables('Days Left'));

SetGlobalVariableValue('$SignUpEndsText', PopulateVariables('Sign-Up ends'));

	BringToFront("u480");

	SetPanelStateu480("pd1u480");

}
else
if ((GetCheckState('u364')) == (true)) {

SetWidgetFormText('u362', PopulateVariables('mm/dd/yyyy'));

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck &quot;Leave it open until I close it&quot; before selecting an event date."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

if (bIE) u362.attachEvent("onblur", LostFocusu362);
else u362.addEventListener("blur", LostFocusu362, true);
function LostFocusu362(e)
{

if (((GetCheckState('u364')) == (false)) && (((GetWidgetFormText('u362')) != (PopulateVariables('mm/dd/yyyy'))) && ((GetWidgetFormText('u362')) != (PopulateVariables(''))))) {

SetGlobalVariableValue('$closeDate', GetWidgetFormText('u362'));

SetGlobalVariableValue('$DaysLeftNum', PopulateVariables('8'));

SetGlobalVariableValue('$DaysLeftText', PopulateVariables('Days Left'));

SetGlobalVariableValue('$SignUpEndsText', PopulateVariables('Sign-Up ends'));

}

}

var u363 = document.getElementById('u363');
gv_vAlignTable['u363'] = 'top';
var u364 = document.getElementById('u364');

u364.style.cursor = 'pointer';
if (bIE) u364.attachEvent("onclick", Clicku364);
else u364.addEventListener("click", Clicku364, true);
function Clicku364(e)
{

if ((GetCheckState('u364')) == (true)) {

SetWidgetFormText('u362', PopulateVariables('mm/dd/yyyy'));

SetWidgetRichText('u477', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Your sign-up sheet will remain open until you close it.&nbsp; <br><br>Use “Help me choose a date” to see delivery timeframes for your location.</span>'));

	SetPanelStateu480("pd0u480");

	SetPanelVisibilityu537("hidden");

}
else
if ((GetWidgetFormText('u362')) != (PopulateVariables('mm/dd/yyyy'))) {

SetWidgetRichText('u477', PopulateVariables('<span style=" font-family:\'Arial\'; font-size:13px;">The last day to order for FREE SHIPPING guaranteed by [delivery date] is [order date].&nbsp; </span>'));

}
else
if (true) {

SetWidgetRichText('u477', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Place your order at least 2 weeks in advance of your delivery date to get FREE SHIPPING in the 48 US states and Canada.</span>'));

}

}

if (bIE) u364.attachEvent("onblur", LostFocusu364);
else u364.addEventListener("blur", LostFocusu364, true);
function LostFocusu364(e)
{

if (true) {

SetWidgetRichText('u477', PopulateVariables(''));

}

}

var u365 = document.getElementById('u365');
gv_vAlignTable['u365'] = 'top';
var u366 = document.getElementById('u366');
gv_vAlignTable['u366'] = 'top';
var u367 = document.getElementById('u367');

var u368 = document.getElementById('u368');
gv_vAlignTable['u368'] = 'top';
var u369 = document.getElementById('u369');

var u564 = document.getElementById('u564');

var u565 = document.getElementById('u565');
gv_vAlignTable['u565'] = 'top';
var u566 = document.getElementById('u566');
gv_vAlignTable['u566'] = 'top';
var u567 = document.getElementById('u567');

var u568 = document.getElementById('u568');

u568.style.cursor = 'pointer';
if (bIE) u568.attachEvent("onclick", Clicku568);
else u568.addEventListener("click", Clicku568, true);
function Clicku568(e)
{

if (true) {

;

;

}

}
gv_vAlignTable['u568'] = 'top';
var u370 = document.getElementById('u370');
gv_vAlignTable['u370'] = 'top';
var u371 = document.getElementById('u371');

var u372 = document.getElementById('u372');
gv_vAlignTable['u372'] = 'center';
var u373 = document.getElementById('u373');
gv_vAlignTable['u373'] = 'top';
var u374 = document.getElementById('u374');

if (bIE) u374.attachEvent("onfocus", Focusu374);
else u374.addEventListener("focus", Focusu374, true);
function Focusu374(e)
{

if (true) {

SetGlobalVariableValue('$groupPrice', PopulateVariables(''));

}

}

if (bIE) u374.attachEvent("onblur", LostFocusu374);
else u374.addEventListener("blur", LostFocusu374, true);
function LostFocusu374(e)
{

if (true) {

SetGlobalVariableValue('$groupPrice', GetWidgetFormText('u374'));

}

}

var u375 = document.getElementById('u375');
gv_vAlignTable['u375'] = 'top';
var u376 = document.getElementById('u376');

u376.style.cursor = 'pointer';
if (bIE) u376.attachEvent("onclick", Clicku376);
else u376.addEventListener("click", Clicku376, true);
function Clicku376(e)
{

if (true) {

	BringToFront("u0");

	SetPanelStateu3("pd4u3");

;

}

}
gv_vAlignTable['u376'] = 'top';
var u377 = document.getElementById('u377');

var u378 = document.getElementById('u378');
gv_vAlignTable['u378'] = 'center';
var u379 = document.getElementById('u379');

var u380 = document.getElementById('u380');

var u381 = document.getElementById('u381');

var u382 = document.getElementById('u382');
gv_vAlignTable['u382'] = 'center';
var u383 = document.getElementById('u383');

var u384 = document.getElementById('u384');
gv_vAlignTable['u384'] = 'center';
var u385 = document.getElementById('u385');
gv_vAlignTable['u385'] = 'top';
var u386 = document.getElementById('u386');

if (bIE) u386.attachEvent("onblur", LostFocusu386);
else u386.addEventListener("blur", LostFocusu386, true);
function LostFocusu386(e)
{

if (true) {

SetGlobalVariableValue('$paymtInfo', GetWidgetFormText('u386'));

}

}

var u387 = document.getElementById('u387');
gv_vAlignTable['u387'] = 'top';
var u388 = document.getElementById('u388');

var u389 = document.getElementById('u389');

var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'center';
var u201 = document.getElementById('u201');

var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'center';
var u390 = document.getElementById('u390');

var u391 = document.getElementById('u391');
gv_vAlignTable['u391'] = 'center';
var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'top';
var u393 = document.getElementById('u393');
gv_vAlignTable['u393'] = 'center';
var u394 = document.getElementById('u394');

if (bIE) u394.attachEvent("onblur", LostFocusu394);
else u394.addEventListener("blur", LostFocusu394, true);
function LostFocusu394(e)
{

if (true) {

SetGlobalVariableValue('$dlvyInfo', GetWidgetFormText('u394'));

}

}

var u395 = document.getElementById('u395');
gv_vAlignTable['u395'] = 'top';
var u396 = document.getElementById('u396');
gv_vAlignTable['u396'] = 'top';
var u397 = document.getElementById('u397');

var u398 = document.getElementById('u398');

var u399 = document.getElementById('u399');
gv_vAlignTable['u399'] = 'center';
var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'top';
var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'top';
var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'top';
var u213 = document.getElementById('u213');

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

var u220 = document.getElementById('u220');

var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'center';
var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'top';
var u223 = document.getElementById('u223');

var u224 = document.getElementById('u224');

var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'center';
var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'top';
var u227 = document.getElementById('u227');

var u228 = document.getElementById('u228');

var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'center';
var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'top';
var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'top';
var u232 = document.getElementById('u232');

var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'top';
var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'top';
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

var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'center';
var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'top';
var u244 = document.getElementById('u244');

u244.style.cursor = 'pointer';
if (bIE) u244.attachEvent("onclick", Clicku244);
else u244.addEventListener("click", Clicku244, true);
function Clicku244(e)
{

if (true) {

	BringToFront("u311");

}

}

var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'center';
var u246 = document.getElementById('u246');

var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'top';
var u248 = document.getElementById('u248');

var u249 = document.getElementById('u249');
gv_vAlignTable['u249'] = 'center';
var u250 = document.getElementById('u250');

var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'center';
var u252 = document.getElementById('u252');

var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'center';
var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'top';
var u255 = document.getElementById('u255');

var u256 = document.getElementById('u256');
gv_vAlignTable['u256'] = 'center';
var u257 = document.getElementById('u257');

var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'center';
var u259 = document.getElementById('u259');

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

	BringToFront("u311");

}

}

var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'center';
var u261 = document.getElementById('u261');

var u262 = document.getElementById('u262');
gv_vAlignTable['u262'] = 'center';
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
