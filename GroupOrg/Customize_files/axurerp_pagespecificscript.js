
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

if (true) {

SetWidgetRichText('u339', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#003366; font-size:21px;">Customize [[GroupName]]\'s Sign-up Sheet&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span><span style=" font-family:\'Helvetica\'; color:#006699; font-size:12px;">Change group name</span>'));

SetWidgetRichText('u345', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#CC6600; font-size:13px;">Your Sign up sheet for [[GroupName]] has been successfully created.&nbsp; Now customize it for your group.</span></b>'));

SetWidgetRichText('u335', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">[[YourName]]</span>'));

SetWidgetRichText('u336', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">[[yourEmail]]</span>'));

SetGlobalVariableValue('$contactName', GetGlobalVariableValue('$YourName'));

SetGlobalVariableValue('$contactEmail', GetGlobalVariableValue('$yourEmail'));

}

}

eval(GetDynamicPanelScript('u264', 1));

eval(GetDynamicPanelScript('u275', 1));

eval(GetDynamicPanelScript('u289', 1));

eval(GetDynamicPanelScript('u215', 1));

eval(GetDynamicPanelScript('u24', 2));

eval(GetDynamicPanelScript('u71', 3));

eval(GetDynamicPanelScript('u258', 1));

eval(GetDynamicPanelScript('u265', 2));

eval(GetDynamicPanelScript('u0', 1));

eval(GetDynamicPanelScript('u248', 2));

eval(GetDynamicPanelScript('u3', 4));

eval(GetDynamicPanelScript('u63', 2));

eval(GetDynamicPanelScript('u338', 2));

eval(GetDynamicPanelScript('u247', 1));

eval(GetDynamicPanelScript('u157', 3));

eval(GetDynamicPanelScript('u321', 1));

eval(GetDynamicPanelScript('u328', 2));

eval(GetDynamicPanelScript('u230', 1));

eval(GetDynamicPanelScript('u146', 2));

eval(GetDynamicPanelScript('u131', 2));

eval(GetDynamicPanelScript('u294', 1));

eval(GetDynamicPanelScript('u235', 3));

eval(GetDynamicPanelScript('u220', 4));

eval(GetDynamicPanelScript('u280', 2));

eval(GetDynamicPanelScript('u279', 1));

eval(GetDynamicPanelScript('u364', 1));

var u230 = document.getElementById('u230');

var u231 = document.getElementById('u231');

var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'center';
var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'top';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u71 = document.getElementById('u71');

var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u101 = document.getElementById('u101');

var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'center';
var u103 = document.getElementById('u103');

var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'top';
var u105 = document.getElementById('u105');

u105.style.cursor = 'pointer';
if (bIE) u105.attachEvent("onclick", Clicku105);
else u105.addEventListener("click", Clicku105, true);
function Clicku105(e)
{

if (true) {

	SetPanelStateu63("pd0u63");

	SetPanelStateu131("pd0u131");

	MoveWidgetTo('u131',290,300);

}

}
gv_vAlignTable['u105'] = 'top';
var u106 = document.getElementById('u106');

u106.style.cursor = 'pointer';
if (bIE) u106.attachEvent("onclick", Clicku106);
else u106.addEventListener("click", Clicku106, true);
function Clicku106(e)
{

if ((GetSelectedOption('u99')) == (PopulateVariables(' 2'))) {

	BringToFront("u215");

	SetPanelStateu0("pd0u0");

SetWidgetFormText('u234', PopulateVariables('01/27/2011'));

SetWidgetRichText('u242', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will be available until 11:59 pm Pacific Time January 27.&nbsp; After the close date participants will see your sheet but will not be able to sign up online. <br><br>For FREE delivery by Feburary 12 to [[ZIP]], place your order by 11:59 pm Eastern Time on January 29.&nbsp; </span>'));

SetGlobalVariableValue('$closeDate', PopulateVariables('01/27/2011'));

}
else
if (true) {

}

}

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'center';
var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'top';
var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'top';
var u258 = document.getElementById('u258');

var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'top';
var u351 = document.getElementById('u351');

var u80 = document.getElementById('u80');

var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u82 = document.getElementById('u82');

var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'center';
var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'top';
var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'top';
var u86 = document.getElementById('u86');

var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'center';
var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'top';
var u89 = document.getElementById('u89');

var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'center';
var u119 = document.getElementById('u119');

var u268 = document.getElementById('u268');

var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'center';
var u363 = document.getElementById('u363');

var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'center';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u93 = document.getElementById('u93');

var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'center';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'top';
var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u97 = document.getElementById('u97');

var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'center';
var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u128 = document.getElementById('u128');

var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'center';
var u278 = document.getElementById('u278');
gv_vAlignTable['u278'] = 'top';
var u279 = document.getElementById('u279');

var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'top';
var u131 = document.getElementById('u131');

var u132 = document.getElementById('u132');

u132.style.cursor = 'pointer';
if (bIE) u132.attachEvent("onclick", Clicku132);
else u132.addEventListener("click", Clicku132, true);
function Clicku132(e)
{

if (true) {

	SetPanelStateu63("pd1u63");

	SetPanelStateu131("pd1u131");

SetWidgetRichText('u85', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#003366; font-size:13px;">For delivery to ZIP/Postal Code [[ZIP]]</span></b>'));

	MoveWidgetTo('u131',290,350);

}

}

var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'center';
var u134 = document.getElementById('u134');

u134.style.cursor = 'pointer';
if (bIE) u134.attachEvent("onclick", Clicku134);
else u134.addEventListener("click", Clicku134, true);
function Clicku134(e)
{

if (true) {

	BringToFront("u215");

SetWidgetRichText('u242', PopulateVariables('<br><span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will be available until 11:59 PM PST on the date you choose.&nbsp; <br>After the close date participants will see your sheet but will not be able to sign up online. For FREE shipping to most US and Canada locations, allow 2 weeks after you place your order.</span>'));

}

}

var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'center';
var u136 = document.getElementById('u136');

u136.style.cursor = 'pointer';
if (bIE) u136.attachEvent("onclick", Clicku136);
else u136.addEventListener("click", Clicku136, true);
function Clicku136(e)
{

if (true) {

	BringToFront("u215");

SetWidgetRichText('u242', PopulateVariables('<br><span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will be available until 11:59 PM PST on the date you choose.&nbsp; <br>After the close date participants will see your sheet but will not be able to sign up online. For FREE shipping to most US and Canada locations, allow 2 weeks after you place your order.</span>'));

}

}

var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'center';
var u138 = document.getElementById('u138');

u138.style.cursor = 'pointer';
if (bIE) u138.attachEvent("onclick", Clicku138);
else u138.addEventListener("click", Clicku138, true);
function Clicku138(e)
{

if (true) {

	SetPanelStateu3("pd3u3");

}

}
gv_vAlignTable['u138'] = 'top';
var u139 = document.getElementById('u139');

var u288 = document.getElementById('u288');
gv_vAlignTable['u288'] = 'top';
var u289 = document.getElementById('u289');

var u300 = document.getElementById('u300');

var u301 = document.getElementById('u301');
gv_vAlignTable['u301'] = 'center';
var u349 = document.getElementById('u349');
gv_vAlignTable['u349'] = 'top';
var u302 = document.getElementById('u302');

u302.style.cursor = 'pointer';
if (bIE) u302.attachEvent("onclick", Clicku302);
else u302.addEventListener("click", Clicku302, true);
function Clicku302(e)
{

if (true) {

	SetPanelStateu3("pd3u3");

	SetPanelStateu235("pd0u235");

;

	ScrollToWidget('u62', false,true);

	BringToFront("u0");

}

}
gv_vAlignTable['u302'] = 'top';
var u303 = document.getElementById('u303');

u303.style.cursor = 'pointer';
if (bIE) u303.attachEvent("onclick", Clicku303);
else u303.addEventListener("click", Clicku303, true);
function Clicku303(e)
{

if (true) {

SetWidgetRichText('u304', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:12px;">Your Welcome message will be at the top of the sign-up sheet.</span>'));

}

}

if (bIE) u303.attachEvent("onblur", LostFocusu303);
else u303.addEventListener("blur", LostFocusu303, true);
function LostFocusu303(e)
{

if (true) {

SetGlobalVariableValue('$Welcome', GetWidgetFormText('u303'));

SetWidgetRichText('u304', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:12px;"> </span>'));

}

}

var u304 = document.getElementById('u304');
gv_vAlignTable['u304'] = 'top';
var u305 = document.getElementById('u305');
gv_vAlignTable['u305'] = 'top';
var u306 = document.getElementById('u306');
gv_vAlignTable['u306'] = 'top';
var u309 = document.getElementById('u309');

var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'center';
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

	BringToFront("u215");

}

}

var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'center';
var u145 = document.getElementById('u145');

var u146 = document.getElementById('u146');

var u147 = document.getElementById('u147');

var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'center';
var u149 = document.getElementById('u149');

var u275 = document.getElementById('u275');

var u276 = document.getElementById('u276');
gv_vAlignTable['u276'] = 'top';
var u277 = document.getElementById('u277');

if (bIE) u277.attachEvent("onblur", LostFocusu277);
else u277.addEventListener("blur", LostFocusu277, true);
function LostFocusu277(e)
{

if (true) {

SetGlobalVariableValue('$paymtInfo', GetWidgetFormText('u277'));

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

var u316 = document.getElementById('u316');
gv_vAlignTable['u316'] = 'center';
var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'center';
var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'top';
var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'top';
var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'top';
var u154 = document.getElementById('u154');

u154.style.cursor = 'pointer';
if (bIE) u154.attachEvent("onclick", Clicku154);
else u154.addEventListener("click", Clicku154, true);
function Clicku154(e)
{

if (true) {

SetWidgetFormText('u154', PopulateVariables(''));

	SetPanelStateu157("pd1u157");

	BringToFront("u146");

}

}

var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'top';
var u156 = document.getElementById('u156');

var u157 = document.getElementById('u157');

var u158 = document.getElementById('u158');

if (bIE) u158.attachEvent("onblur", LostFocusu158);
else u158.addEventListener("blur", LostFocusu158, true);
function LostFocusu158(e)
{

if (true) {

SetGlobalVariableValue('$ZIP', GetWidgetFormText('u158'));

}

}

var u159 = document.getElementById('u159');

u159.style.cursor = 'pointer';
if (bIE) u159.attachEvent("onclick", Clicku159);
else u159.addEventListener("click", Clicku159, true);
function Clicku159(e)
{

if (true) {

	SetPanelStateu146("pd1u146");

SetWidgetRichText('u184', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#FF6600; font-size:16px;">Sign-Up closing dates for delivery to ZIP/Postal [[ZIP]] by Saturday, February 12</span></b>'));

	MoveWidgetTo('u131',290,350);

}

}

var u234 = document.getElementById('u234');

u234.style.cursor = 'pointer';
if (bIE) u234.attachEvent("onclick", Clicku234);
else u234.addEventListener("click", Clicku234, true);
function Clicku234(e)
{

if ((GetCheckState('u244')) == (false)) {

SetWidgetFormText('u234', PopulateVariables(''));

;

SetWidgetRichText('u242', PopulateVariables('<span style=" font-family:\'Arial\'; font-size:13px;"> </span>'));

	BringToFront("u235");

	SetPanelStateu235("pd1u235");

}
else
if (true) {

SetWidgetFormText('u234', PopulateVariables('mm/dd/yyyy'));

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck &quot;Leave it open until I close it&quot; before selecting an event date."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

if (bIE) u234.attachEvent("onblur", LostFocusu234);
else u234.addEventListener("blur", LostFocusu234, true);
function LostFocusu234(e)
{

if (((GetCheckState('u244')) == (false)) && (((GetWidgetFormText('u234')) != (PopulateVariables('mm/dd/yyyy'))) && ((GetWidgetFormText('u234')) != (PopulateVariables(''))))) {

SetGlobalVariableValue('$eventDate', GetWidgetFormText('u234'));

}

}

var u235 = document.getElementById('u235');

var u284 = document.getElementById('u284');
gv_vAlignTable['u284'] = 'center';
var u285 = document.getElementById('u285');

u285.style.cursor = 'pointer';
if (bIE) u285.attachEvent("onclick", Clicku285);
else u285.addEventListener("click", Clicku285, true);
function Clicku285(e)
{

if (true) {

	SetPanelVisibilityu289("hidden");

SetGlobalVariableValue('$dlvyInfo', PopulateVariables(''));

SetWidgetFormText('u290', PopulateVariables(' '));

	SetPanelStateu280("pd0u280");

	MoveWidgetTo('u294',0,75);

}

}

var u286 = document.getElementById('u286');
gv_vAlignTable['u286'] = 'top';
var u287 = document.getElementById('u287');

u287.style.cursor = 'pointer';
if (bIE) u287.attachEvent("onclick", Clicku287);
else u287.addEventListener("click", Clicku287, true);
function Clicku287(e)
{

if (true) {

	SetPanelVisibilityu289("");

	SetPanelStateu280("pd1u280");

	MoveWidgetTo('u294',0,180);

}

}

var u361 = document.getElementById('u361');

var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'center';
var u161 = document.getElementById('u161');

u161.style.cursor = 'pointer';
if (bIE) u161.attachEvent("onclick", Clicku161);
else u161.addEventListener("click", Clicku161, true);
function Clicku161(e)
{

if (true) {

	BringToFront("u215");

SetWidgetRichText('u242', PopulateVariables('<br><span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will be available until 11:59 PM PST on the date you choose.&nbsp; <br>After the close date participants will see your sheet but will not be able to sign up online. For FREE shipping to most US and Canada locations, allow 2 weeks after you place your order.</span>'));

}

}

var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'center';
var u163 = document.getElementById('u163');

u163.style.cursor = 'pointer';
if (bIE) u163.attachEvent("onclick", Clicku163);
else u163.addEventListener("click", Clicku163, true);
function Clicku163(e)
{

if (true) {

	SetPanelStateu157("pd0u157");

SetWidgetFormText('u154', PopulateVariables('01/31/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Monday, January 31'));

}

}

var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'center';
var u165 = document.getElementById('u165');

u165.style.cursor = 'pointer';
if (bIE) u165.attachEvent("onclick", Clicku165);
else u165.addEventListener("click", Clicku165, true);
function Clicku165(e)
{

if (true) {

	SetPanelStateu157("pd2u157");

}

}

var u166 = document.getElementById('u166');

u166.style.cursor = 'pointer';
if (bIE) u166.attachEvent("onclick", Clicku166);
else u166.addEventListener("click", Clicku166, true);
function Clicku166(e)
{

if (true) {

	SetPanelStateu157("pd0u157");

SetWidgetFormText('u154', PopulateVariables('02/12/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Saturday, February 12'));

SetGlobalVariableValue('$OnLoadVariable', PopulateVariables(''));

}

}

var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'center';
var u168 = document.getElementById('u168');

u168.style.cursor = 'pointer';
if (bIE) u168.attachEvent("onclick", Clicku168);
else u168.addEventListener("click", Clicku168, true);
function Clicku168(e)
{

if (true) {

	SetPanelStateu157("pd1u157");

}

}

var u169 = document.getElementById('u169');

var u293 = document.getElementById('u293');
gv_vAlignTable['u293'] = 'top';
var u294 = document.getElementById('u294');

var u295 = document.getElementById('u295');

u295.style.cursor = 'pointer';
if (bIE) u295.attachEvent("onclick", Clicku295);
else u295.addEventListener("click", Clicku295, true);
function Clicku295(e)
{

if (true) {

	self.location.href="Share_with_Friends.html" + GetQuerystring();

}

}

var u296 = document.getElementById('u296');
gv_vAlignTable['u296'] = 'center';
var u297 = document.getElementById('u297');

var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'center';
var u171 = document.getElementById('u171');

var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'center';
var u173 = document.getElementById('u173');

var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'center';
var u175 = document.getElementById('u175');

var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'center';
var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'top';
var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'top';
var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'top';
var u251 = document.getElementById('u251');

var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'center';
var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'top';
var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'center';
var u72 = document.getElementById('u72');

u72.style.cursor = 'pointer';
if (bIE) u72.attachEvent("onclick", Clicku72);
else u72.addEventListener("click", Clicku72, true);
function Clicku72(e)
{

if (true) {

	SetPanelStateu71("pd0u71");

SetWidgetFormText('u79', PopulateVariables('01/31/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Monday, January 31'));

	BringToFront("u131");

}

}

var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'center';
var u74 = document.getElementById('u74');

u74.style.cursor = 'pointer';
if (bIE) u74.attachEvent("onclick", Clicku74);
else u74.addEventListener("click", Clicku74, true);
function Clicku74(e)
{

if (true) {

	SetPanelStateu71("pd2u71");

}

}

var u75 = document.getElementById('u75');

u75.style.cursor = 'pointer';
if (bIE) u75.attachEvent("onclick", Clicku75);
else u75.addEventListener("click", Clicku75, true);
function Clicku75(e)
{

if ((GetCheckState('u244')) == (false)) {

	SetPanelStateu71("pd0u71");

SetWidgetFormText('u234', PopulateVariables('02/14/2011'));

SetWidgetRichText('u242', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:12px;">For 2 week FREE DELIVERY by 2/14/2011 you must place your order by 1/31/2011.&nbsp; <br><br>We recommend closing your sign-up sheet no later than 1/29/2011.</span>'));

	MoveWidgetTo('u247',0,346);

}
else
if (true) {

	SetPanelStateu71("pd0u71");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck &quot;I don't know&quot; before selecting a date."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'center';
var u77 = document.getElementById('u77');

u77.style.cursor = 'pointer';
if (bIE) u77.attachEvent("onclick", Clicku77);
else u77.addEventListener("click", Clicku77, true);
function Clicku77(e)
{

if (true) {

	SetPanelStateu71("pd1u71");

}

}

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u79 = document.getElementById('u79');

u79.style.cursor = 'pointer';
if (bIE) u79.attachEvent("onclick", Clicku79);
else u79.addEventListener("click", Clicku79, true);
function Clicku79(e)
{

if (true) {

SetWidgetFormText('u79', PopulateVariables(''));

	SetPanelStateu71("pd1u71");

	BringToFront("u63");

}

}

var u180 = document.getElementById('u180');

var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'center';
var u182 = document.getElementById('u182');

var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'center';
var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'top';
var u185 = document.getElementById('u185');

var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'center';
var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'top';
var u188 = document.getElementById('u188');

var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'center';
var u307 = document.getElementById('u307');

var u308 = document.getElementById('u308');
gv_vAlignTable['u308'] = 'center';
var u260 = document.getElementById('u260');

if (bIE) u260.attachEvent("onfocus", Focusu260);
else u260.addEventListener("focus", Focusu260, true);
function Focusu260(e)
{

if (true) {

SetGlobalVariableValue('$groupPrice', PopulateVariables(''));

}

}

if (bIE) u260.attachEvent("onblur", LostFocusu260);
else u260.addEventListener("blur", LostFocusu260, true);
function LostFocusu260(e)
{

if (true) {

SetGlobalVariableValue('$groupPrice', GetWidgetFormText('u260'));

}

}

var u262 = document.getElementById('u262');

u262.style.cursor = 'pointer';
if (bIE) u262.attachEvent("onclick", Clicku262);
else u262.addEventListener("click", Clicku262, true);
function Clicku262(e)
{

if (true) {

	BringToFront("u0");

	SetPanelStateu3("pd0u3");

SetWidgetRichText('u25', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">Sample prices for your design with FREE 2 week delivery:</span></b>'));

	ScrollToWidget('u53', false,true);

}

}
gv_vAlignTable['u262'] = 'top';
var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'center';
var u211 = document.getElementById('u211');

var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'center';
var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'top';
var u214 = document.getElementById('u214');

u214.style.cursor = 'pointer';
if (bIE) u214.attachEvent("onclick", Clicku214);
else u214.addEventListener("click", Clicku214, true);
function Clicku214(e)
{

if (true) {

	SetPanelStateu3("pd2u3");

}

}
gv_vAlignTable['u214'] = 'top';
var u215 = document.getElementById('u215');

var u352 = document.getElementById('u352');
gv_vAlignTable['u352'] = 'center';
var u353 = document.getElementById('u353');

var u354 = document.getElementById('u354');
gv_vAlignTable['u354'] = 'center';
var u355 = document.getElementById('u355');

var u356 = document.getElementById('u356');
gv_vAlignTable['u356'] = 'center';
var u357 = document.getElementById('u357');

var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'top';
var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'top';
var u192 = document.getElementById('u192');

u192.style.cursor = 'pointer';
if (bIE) u192.attachEvent("onclick", Clicku192);
else u192.addEventListener("click", Clicku192, true);
function Clicku192(e)
{

if (true) {

	BringToFront("u215");

	SetPanelStateu0("pd0u0");

SetWidgetFormText('u234', PopulateVariables('01/27/2011'));

SetWidgetRichText('u242', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will be available until 11:59 pm Eastern Time Thursday, January 27.&nbsp; After the close date participants will see your sheet but will not be able to sign up online. <br><br>For FREE delivery by Saturday, Feburary 12 to [[ZIP]], place your order by 11:59 pm Eastern Time on Saturday, January 29.&nbsp; </span>'));

SetGlobalVariableValue('$closeDate', PopulateVariables('01/27/2011'));

}

}

var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'center';
var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'top';
var u195 = document.getElementById('u195');

var u196 = document.getElementById('u196');

var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'center';
var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'top';
var u199 = document.getElementById('u199');

u199.style.cursor = 'pointer';
if (bIE) u199.attachEvent("onclick", Clicku199);
else u199.addEventListener("click", Clicku199, true);
function Clicku199(e)
{

if (true) {

	BringToFront("u215");

SetWidgetRichText('u242', PopulateVariables('<br><span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will be available until 11:59 PM PST on the date you choose.&nbsp; <br>After the close date participants will see your sheet but will not be able to sign up online. For FREE shipping to most US and Canada locations, allow 2 weeks after you place your order.</span>'));

}

}

var u317 = document.getElementById('u317');

u317.style.cursor = 'pointer';
if (bIE) u317.attachEvent("onclick", Clicku317);
else u317.addEventListener("click", Clicku317, true);
function Clicku317(e)
{

if (true) {

	SetPanelVisibilityu321("hidden");

SetWidgetFormText('u323', PopulateVariables(' '));

SetWidgetFormText('u322', PopulateVariables(''));

SetWidgetFormText('u326', PopulateVariables(' '));

SetGlobalVariableValue('$contactName', GetGlobalVariableValue('$YourName'));

SetGlobalVariableValue('$contactEmail', GetGlobalVariableValue('$yourEmail'));

SetGlobalVariableValue('$contactPhone', GetGlobalVariableValue('$yourPhone'));

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

	SetPanelVisibilityu321("");

}

}

var u272 = document.getElementById('u272');

u272.style.cursor = 'pointer';
if (bIE) u272.attachEvent("onclick", Clicku272);
else u272.addEventListener("click", Clicku272, true);
function Clicku272(e)
{

if (true) {

	SetPanelStateu265("pd1u265");

	SetPanelVisibilityu275("");

	MoveWidgetTo('u279',0,170);

}

}

var u220 = document.getElementById('u220');

var u221 = document.getElementById('u221');

var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'center';
var u223 = document.getElementById('u223');

var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'center';
var u360 = document.getElementById('u360');
gv_vAlignTable['u360'] = 'center';
var u225 = document.getElementById('u225');

var u362 = document.getElementById('u362');
gv_vAlignTable['u362'] = 'center';
var u99 = document.getElementById('u99');

var u364 = document.getElementById('u364');

var u365 = document.getElementById('u365');

var u366 = document.getElementById('u366');

u366.style.cursor = 'pointer';
if (bIE) u366.attachEvent("onclick", Clicku366);
else u366.addEventListener("click", Clicku366, true);
function Clicku366(e)
{

if (true) {

	SetPanelStateu328("pd0u328");

SetWidgetFormText('u329', GetGlobalVariableValue('$yourEmail'));

SetWidgetFormText('u330', GetGlobalVariableValue('$YourName'));

}

}
gv_vAlignTable['u366'] = 'top';
var u367 = document.getElementById('u367');

var u320 = document.getElementById('u320');
gv_vAlignTable['u320'] = 'top';
var u321 = document.getElementById('u321');

var u322 = document.getElementById('u322');

if (bIE) u322.attachEvent("onblur", LostFocusu322);
else u322.addEventListener("blur", LostFocusu322, true);
function LostFocusu322(e)
{

if ((GetCheckState('u319')) == (true)) {

SetGlobalVariableValue('$contactName', GetWidgetFormText('u322'));

}

}

var u323 = document.getElementById('u323');

if (bIE) u323.attachEvent("onblur", LostFocusu323);
else u323.addEventListener("blur", LostFocusu323, true);
function LostFocusu323(e)
{

if ((GetCheckState('u319')) == (true)) {

SetGlobalVariableValue('$contactEmail', GetWidgetFormText('u323'));

}

}

var u324 = document.getElementById('u324');
gv_vAlignTable['u324'] = 'top';
var u325 = document.getElementById('u325');
gv_vAlignTable['u325'] = 'top';
var u326 = document.getElementById('u326');

if (bIE) u326.attachEvent("onblur", LostFocusu326);
else u326.addEventListener("blur", LostFocusu326, true);
function LostFocusu326(e)
{

if ((GetCheckState('u319')) == (true)) {

SetGlobalVariableValue('$contactPhone', GetWidgetFormText('u326'));

}

}

var u327 = document.getElementById('u327');
gv_vAlignTable['u327'] = 'top';
var u328 = document.getElementById('u328');

var u329 = document.getElementById('u329');

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

	BringToFront("u215");

}

}

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u9 = document.getElementById('u9');

var u330 = document.getElementById('u330');

var u331 = document.getElementById('u331');

u331.style.cursor = 'pointer';
if (bIE) u331.attachEvent("onclick", Clicku331);
else u331.addEventListener("click", Clicku331, true);
function Clicku331(e)
{

if (true) {

	SetPanelStateu328("pd1u328");

SetGlobalVariableValue('$YourName', GetWidgetFormText('u330'));

SetGlobalVariableValue('$yourEmail', GetWidgetFormText('u329'));

SetWidgetRichText('u335', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">[[YourName]]</span>'));

SetWidgetRichText('u336', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">[[yourEmail]]</span>'));

}

}

var u332 = document.getElementById('u332');
gv_vAlignTable['u332'] = 'center';
var u333 = document.getElementById('u333');
gv_vAlignTable['u333'] = 'top';
var u334 = document.getElementById('u334');
gv_vAlignTable['u334'] = 'top';
var u335 = document.getElementById('u335');

u335.style.cursor = 'pointer';
if (bIE) u335.attachEvent("onclick", Clicku335);
else u335.addEventListener("click", Clicku335, true);
function Clicku335(e)
{

if (true) {

	SetPanelStateu328("pd0u328");

SetWidgetFormText('u329', GetGlobalVariableValue('$yourEmail'));

SetWidgetFormText('u330', GetGlobalVariableValue('$YourName'));

}

}
gv_vAlignTable['u335'] = 'top';
var u336 = document.getElementById('u336');

u336.style.cursor = 'pointer';
if (bIE) u336.attachEvent("onclick", Clicku336);
else u336.addEventListener("click", Clicku336, true);
function Clicku336(e)
{

if (true) {

	SetPanelStateu328("pd0u328");

SetWidgetFormText('u329', GetGlobalVariableValue('$yourEmail'));

SetWidgetFormText('u330', GetGlobalVariableValue('$YourName'));

}

}
gv_vAlignTable['u336'] = 'top';
var u337 = document.getElementById('u337');

u337.style.cursor = 'pointer';
if (bIE) u337.attachEvent("onclick", Clicku337);
else u337.addEventListener("click", Clicku337, true);
function Clicku337(e)
{

if (true) {

	SetPanelStateu328("pd0u328");

	MoveWidgetTo('u364',53,385);

}

}
gv_vAlignTable['u337'] = 'top';
var u338 = document.getElementById('u338');

var u339 = document.getElementById('u339');

u339.style.cursor = 'pointer';
if (bIE) u339.attachEvent("onclick", Clicku339);
else u339.addEventListener("click", Clicku339, true);
function Clicku339(e)
{

if (true) {

	SetPanelStateu338("pd1u338");

SetWidgetFormText('u341', GetGlobalVariableValue('$GroupName'));

}

}
gv_vAlignTable['u339'] = 'top';
var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'center';
var u241 = document.getElementById('u241');

u241.style.cursor = 'pointer';
if (bIE) u241.attachEvent("onclick", Clicku241);
else u241.addEventListener("click", Clicku241, true);
function Clicku241(e)
{

if (true) {

	SetPanelStateu235("pd1u235");

}

}

var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'top';
var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'top';
var u244 = document.getElementById('u244');

u244.style.cursor = 'pointer';
if (bIE) u244.attachEvent("onclick", Clicku244);
else u244.addEventListener("click", Clicku244, true);
function Clicku244(e)
{

if ((GetCheckState('u244')) == (true)) {

;

SetWidgetFormText('u234', PopulateVariables('mm/dd/yyyy'));

SetWidgetRichText('u242', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Place your order at least 2 weeks in advance of your delivery date to get FREE SHIPPING in the 48 US states and Canada.</span>'));

	SetPanelStateu235("pd0u235");

}
else
if ((GetWidgetFormText('u234')) != (PopulateVariables('mm/dd/yyyy'))) {

SetWidgetRichText('u242', PopulateVariables('<span style=" font-family:\'Arial\'; font-size:13px;">The last day to order for 2 week FREE SHIPPING guaranteed by [delivery date] is [order date].&nbsp; </span>'));

}
else
if (true) {

SetWidgetRichText('u242', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Place your order at least 2 weeks in advance of your delivery date to get FREE SHIPPING in the 48 US states and Canada.</span>'));

}

}

if (bIE) u244.attachEvent("onblur", LostFocusu244);
else u244.addEventListener("blur", LostFocusu244, true);
function LostFocusu244(e)
{

if (true) {

SetWidgetRichText('u242', PopulateVariables(''));

}

}

var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'top';
var u298 = document.getElementById('u298');

var u299 = document.getElementById('u299');
gv_vAlignTable['u299'] = 'center';
var u10 = document.getElementById('u10');

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'top';
var u13 = document.getElementById('u13');

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u15 = document.getElementById('u15');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u17 = document.getElementById('u17');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u344 = document.getElementById('u344');
gv_vAlignTable['u344'] = 'top';
var u345 = document.getElementById('u345');
gv_vAlignTable['u345'] = 'top';
var u346 = document.getElementById('u346');
gv_vAlignTable['u346'] = 'top';
var u347 = document.getElementById('u347');

var u348 = document.getElementById('u348');
gv_vAlignTable['u348'] = 'top';
var u340 = document.getElementById('u340');
gv_vAlignTable['u340'] = 'top';
var u341 = document.getElementById('u341');

var u342 = document.getElementById('u342');

u342.style.cursor = 'pointer';
if (bIE) u342.attachEvent("onclick", Clicku342);
else u342.addEventListener("click", Clicku342, true);
function Clicku342(e)
{

if (true) {

	SetPanelStateu338("pd0u338");

SetGlobalVariableValue('$GroupName', GetWidgetFormText('u341'));

SetWidgetRichText('u339', PopulateVariables('<span style=" font-family:\'Myriad Pro\'; color:#003366; font-size:21px;">Customize [[GroupName]]\'s Sign-up Sheet</span>'));

}

}

var u343 = document.getElementById('u343');
gv_vAlignTable['u343'] = 'center';
var u110 = document.getElementById('u110');

var u111 = document.getElementById('u111');

u111.style.cursor = 'pointer';
if (bIE) u111.attachEvent("onclick", Clicku111);
else u111.addEventListener("click", Clicku111, true);
function Clicku111(e)
{

if (true) {

	BringToFront("u215");

	SetPanelStateu0("pd0u0");

SetWidgetFormText('u79', PopulateVariables('01/16/2011'));

SetWidgetRichText('u242', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will be available until 11:59 PM PST January 16.&nbsp; After the close date participants will see your sheet but will not be able to sign up online. <br><br>For FREE delivery by January 31 to [[ZIP]], place your order by January 17.&nbsp; </span>'));

}

}

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'center';
var u113 = document.getElementById('u113');

var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'center';
var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'center';
var u115 = document.getElementById('u115');

var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'center';
var u117 = document.getElementById('u117');

var u254 = document.getElementById('u254');

u254.style.cursor = 'pointer';
if (bIE) u254.attachEvent("onclick", Clicku254);
else u254.addEventListener("click", Clicku254, true);
function Clicku254(e)
{

if (true) {

	SetPanelVisibilityu258("hidden");

	SetPanelStateu248("pd0u248");

	MoveWidgetTo('u264',0,73);

}

}

var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'top';
var u256 = document.getElementById('u256');

u256.style.cursor = 'pointer';
if (bIE) u256.attachEvent("onclick", Clicku256);
else u256.addEventListener("click", Clicku256, true);
function Clicku256(e)
{

if (true) {

	SetPanelVisibilityu258("");

	SetPanelStateu248("pd1u248");

	MoveWidgetTo('u264',0,120);

}

}

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u24 = document.getElementById('u24');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u26 = document.getElementById('u26');

var u27 = document.getElementById('u27');

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
var u29 = document.getElementById('u29');

var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'center';
var u207 = document.getElementById('u207');

var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'center';
var u209 = document.getElementById('u209');

var u358 = document.getElementById('u358');
gv_vAlignTable['u358'] = 'center';
var u359 = document.getElementById('u359');

var u350 = document.getElementById('u350');
gv_vAlignTable['u350'] = 'top';
var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'center';
var u121 = document.getElementById('u121');

var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'center';
var u123 = document.getElementById('u123');

var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'center';
var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'top';
var u261 = document.getElementById('u261');
gv_vAlignTable['u261'] = 'top';
var u126 = document.getElementById('u126');

var u263 = document.getElementById('u263');
gv_vAlignTable['u263'] = 'top';
var u264 = document.getElementById('u264');

var u265 = document.getElementById('u265');

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u31 = document.getElementById('u31');

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u33 = document.getElementById('u33');

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u35 = document.getElementById('u35');

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u37 = document.getElementById('u37');

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u39 = document.getElementById('u39');

var u216 = document.getElementById('u216');

var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'center';
var u218 = document.getElementById('u218');

var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'center';
var u368 = document.getElementById('u368');
gv_vAlignTable['u368'] = 'center';
var u201 = document.getElementById('u201');

u201.style.cursor = 'pointer';
if (bIE) u201.attachEvent("onclick", Clicku201);
else u201.addEventListener("click", Clicku201, true);
function Clicku201(e)
{

if (true) {

	SetPanelStateu146("pd0u146");

}

}
gv_vAlignTable['u201'] = 'top';
var u202 = document.getElementById('u202');

u202.style.cursor = 'pointer';
if (bIE) u202.attachEvent("onclick", u202Click);
else u202.addEventListener("click", u202Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u202LinksClick'></DIV>")
var u202LinksClick = document.getElementById('u202LinksClick');
function u202Click(e) 
{

	ToggleLinks(e, 'u202LinksClick');
}

InsertBeforeEnd(u202LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u202Clicku6f77a70dd1404c2db7061ac1fffd3500(event)'>Case 1</div>");
function u202Clicku6f77a70dd1404c2db7061ac1fffd3500(e)
{

	BringToFront("u215");

	SetPanelStateu0("pd0u0");

SetWidgetFormText('u234', PopulateVariables('02/05/2011'));

SetWidgetRichText('u242', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will be available until 11:59 pm Eastern Time February 5.&nbsp; After the close date participants will see your sheet but will not be able to sign up online. <br><br>For RUSH delivery by Feburary 12 to [[ZIP]], place your order by 11:59 pm Eastern Time on February 7.&nbsp; Add 25% to your cost.</span>'));

SetGlobalVariableValue('$closeDate', PopulateVariables('02/05/2011'));

	ToggleLinks(e, 'u202LinksClick');
}

InsertBeforeEnd(u202LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u202Clicku4a21c6d2ca8e4ed3beb663a1f1ddaa89(event)'>Case 2</div>");
function u202Clicku4a21c6d2ca8e4ed3beb663a1f1ddaa89(e)
{

	ToggleLinks(e, 'u202LinksClick');
}

var u266 = document.getElementById('u266');

var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'center';
var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'center';
var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'top';
var u205 = document.getElementById('u205');

var u270 = document.getElementById('u270');

u270.style.cursor = 'pointer';
if (bIE) u270.attachEvent("onclick", Clicku270);
else u270.addEventListener("click", Clicku270, true);
function Clicku270(e)
{

if (true) {

	SetPanelStateu265("pd0u265");

SetGlobalVariableValue('$paymtInfo', PopulateVariables(''));

SetWidgetFormText('u277', PopulateVariables(''));

	MoveWidgetTo('u279',0,98);

	SetPanelVisibilityu275("hidden");

}

}

var u271 = document.getElementById('u271');
gv_vAlignTable['u271'] = 'top';
var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'top';
var u273 = document.getElementById('u273');
gv_vAlignTable['u273'] = 'top';
var u274 = document.getElementById('u274');
gv_vAlignTable['u274'] = 'top';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u41 = document.getElementById('u41');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u43 = document.getElementById('u43');

u43.style.cursor = 'pointer';
if (bIE) u43.attachEvent("onclick", Clicku43);
else u43.addEventListener("click", Clicku43, true);
function Clicku43(e)
{

if (true) {

	BringToFront("u215");

    var reload = ParentWindowNeedsReload("http://www.customink.com/cink/create/pricing/quickquote.jsp?styleno=04600");
	top.opener.window.location.href = "http://www.customink.com/cink/create/pricing/quickquote.jsp?styleno=04600" + "";
    if (reload) {
        top.opener.window.location = "Resources/reload.html#" + encodeURI(top.opener.window.location.href);
    }

}

}
gv_vAlignTable['u43'] = 'top';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u47 = document.getElementById('u47');

u47.style.cursor = 'pointer';
if (bIE) u47.attachEvent("onclick", Clicku47);
else u47.addEventListener("click", Clicku47, true);
function Clicku47(e)
{

if (true) {

	BringToFront("u215");

    var reload = ParentWindowNeedsReload("http://www.customink.com/cink/create/pricing/quickquote.jsp?styleno=04600");
	top.opener.window.location.href = "http://www.customink.com/cink/create/pricing/quickquote.jsp?styleno=04600" + "";
    if (reload) {
        top.opener.window.location = "Resources/reload.html#" + encodeURI(top.opener.window.location.href);
    }

}

}
gv_vAlignTable['u47'] = 'top';
var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u49 = document.getElementById('u49');

u49.style.cursor = 'pointer';
if (bIE) u49.attachEvent("onclick", Clicku49);
else u49.addEventListener("click", Clicku49, true);
function Clicku49(e)
{

if (true) {

	SetPanelStateu24("pd1u24");

}

}
gv_vAlignTable['u49'] = 'top';
var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'center';
var u227 = document.getElementById('u227');

var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'center';
var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'top';
var u280 = document.getElementById('u280');

var u281 = document.getElementById('u281');

var u282 = document.getElementById('u282');
gv_vAlignTable['u282'] = 'center';
var u283 = document.getElementById('u283');

var u50 = document.getElementById('u50');

u50.style.cursor = 'pointer';
if (bIE) u50.attachEvent("onclick", Clicku50);
else u50.addEventListener("click", Clicku50, true);
function Clicku50(e)
{

if (true) {

	SetPanelStateu24("pd0u24");

}

}
gv_vAlignTable['u50'] = 'top';
var u51 = document.getElementById('u51');

u51.style.cursor = 'pointer';
if (bIE) u51.attachEvent("onclick", Clicku51);
else u51.addEventListener("click", Clicku51, true);
function Clicku51(e)
{

if (true) {

	BringToFront("u215");

}

}

var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'center';
var u53 = document.getElementById('u53');

var u54 = document.getElementById('u54');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u56 = document.getElementById('u56');

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u236 = document.getElementById('u236');

u236.style.cursor = 'pointer';
if (bIE) u236.attachEvent("onclick", Clicku236);
else u236.addEventListener("click", Clicku236, true);
function Clicku236(e)
{

if ((GetCheckState('u244')) == (false)) {

	SetPanelStateu235("pd0u235");

SetWidgetFormText('u234', PopulateVariables('01/27/2011'));

SetWidgetRichText('u242', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on 1/27/2011 at 11:59pm PST.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetGlobalVariableValue('$closeDate', PopulateVariables('Thursday, January 27'));

}
else
if ((GetCheckState('u244')) == (true)) {

	SetPanelStateu235("pd0u235");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck &quot;Leave it open until I close it&quot; before selecting a date."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'center';
var u238 = document.getElementById('u238');

u238.style.cursor = 'pointer';
if (bIE) u238.attachEvent("onclick", Clicku238);
else u238.addEventListener("click", Clicku238, true);
function Clicku238(e)
{

if (true) {

	SetPanelStateu235("pd2u235");

}

}

var u239 = document.getElementById('u239');

u239.style.cursor = 'pointer';
if (bIE) u239.attachEvent("onclick", Clicku239);
else u239.addEventListener("click", Clicku239, true);
function Clicku239(e)
{

if ((GetCheckState('u244')) == (false)) {

	SetPanelStateu235("pd0u235");

SetWidgetFormText('u234', PopulateVariables('02/12/2011'));

SetWidgetRichText('u242', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on 2/12/2011 at 11:59pm PST.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

}
else
if (true) {

	SetPanelStateu235("pd0u235");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck &quot;I don't know&quot; before selecting a date."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u290 = document.getElementById('u290');

if (bIE) u290.attachEvent("onblur", LostFocusu290);
else u290.addEventListener("blur", LostFocusu290, true);
function LostFocusu290(e)
{

if (true) {

SetGlobalVariableValue('$dlvyInfo', GetWidgetFormText('u290'));

}

}

var u291 = document.getElementById('u291');
gv_vAlignTable['u291'] = 'top';
var u292 = document.getElementById('u292');
gv_vAlignTable['u292'] = 'top';
var u60 = document.getElementById('u60');

u60.style.cursor = 'pointer';
if (bIE) u60.attachEvent("onclick", Clicku60);
else u60.addEventListener("click", Clicku60, true);
function Clicku60(e)
{

if (true) {

	BringToFront("u215");

}

}

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'center';
var u62 = document.getElementById('u62');

var u63 = document.getElementById('u63');

var u64 = document.getElementById('u64');

var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'center';
var u66 = document.getElementById('u66');

if (bIE) u66.attachEvent("onblur", LostFocusu66);
else u66.addEventListener("blur", LostFocusu66, true);
function LostFocusu66(e)
{

if (true) {

SetGlobalVariableValue('$ZIP', GetWidgetFormText('u66'));

}

}

var u67 = document.getElementById('u67');

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'center';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'top';
var u247 = document.getElementById('u247');

var u248 = document.getElementById('u248');

var u249 = document.getElementById('u249');

if (window.OnLoad) OnLoad();
