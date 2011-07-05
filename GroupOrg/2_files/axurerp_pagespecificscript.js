
var PageName = '2';
var PageId = 'p6748a06179c64d9ba1a9e13e708ef92f'
var PageUrl = '2.html'
document.title = '2';

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

var $dlvryDate = '';

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
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&price1=' + encodeURIComponent($price1) + '&price2=' + encodeURIComponent($price2) + '&GroupName=' + encodeURIComponent($GroupName) + '&YourName=' + encodeURIComponent($YourName) + '&groupPrice=' + encodeURIComponent($groupPrice) + '&contactName=' + encodeURIComponent($contactName) + '&yourEmail=' + encodeURIComponent($yourEmail) + '&closeDate=' + encodeURIComponent($closeDate) + '&personalize=' + encodeURIComponent($personalize) + '&quotevar=' + encodeURIComponent($quotevar) + '&ZIP=' + encodeURIComponent($ZIP) + '&NameNum=' + encodeURIComponent($NameNum) + '&Size1=' + encodeURIComponent($Size1) + '&Size2=' + encodeURIComponent($Size2) + '&Size3=' + encodeURIComponent($Size3) + '&paymtInfo=' + encodeURIComponent($paymtInfo) + '&dlvyInfo=' + encodeURIComponent($dlvyInfo) + '&Welcome=' + encodeURIComponent($Welcome) + '&yourPhone=' + encodeURIComponent($yourPhone) + '&contactEmail=' + encodeURIComponent($contactEmail) + '&eventDate=' + encodeURIComponent($eventDate) + '&priceNote=' + encodeURIComponent($priceNote) + '&contactPhone=' + encodeURIComponent($contactPhone) + '&dlvryDate=' + encodeURIComponent($dlvryDate) + '&CSUM=1';
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
  value = value.replace(/\[\[dlvryDate\]\]/g, $dlvryDate);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  return value;
}

function OnLoad(e) {

if (true) {

SetWidgetRichText('u340', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#003366; font-size:21px;">Customize [[GroupName]]\'s Sign-up Sheet&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span><span style=" font-family:\'Helvetica\'; color:#006699; font-size:12px;">Change group name</span>'));

SetWidgetRichText('u346', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#CC6600; font-size:13px;">Your Sign up sheet for [[GroupName]] has been successfully created.&nbsp; Now customize it for your group.</span></b>'));

SetWidgetRichText('u336', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">[[YourName]]</span>'));

SetWidgetRichText('u337', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">[[yourEmail]]</span>'));

SetWidgetFormText('u330', GetGlobalVariableValue('$yourEmail'));

SetWidgetFormText('u331', GetGlobalVariableValue('$YourName'));

SetGlobalVariableValue('$contactName', GetGlobalVariableValue('$YourName'));

SetGlobalVariableValue('$contactEmail', GetGlobalVariableValue('$yourEmail'));

}

}

eval(GetDynamicPanelScript('u20', 2));

eval(GetDynamicPanelScript('u266', 2));

eval(GetDynamicPanelScript('u216', 1));

eval(GetDynamicPanelScript('u276', 1));

eval(GetDynamicPanelScript('u101', 2));

eval(GetDynamicPanelScript('u322', 1));

eval(GetDynamicPanelScript('u329', 2));

eval(GetDynamicPanelScript('u265', 1));

eval(GetDynamicPanelScript('u0', 1));

eval(GetDynamicPanelScript('u208', 2));

eval(GetDynamicPanelScript('u3', 4));

eval(GetDynamicPanelScript('u259', 1));

eval(GetDynamicPanelScript('u339', 2));

eval(GetDynamicPanelScript('u140', 2));

eval(GetDynamicPanelScript('u249', 2));

eval(GetDynamicPanelScript('u290', 1));

eval(GetDynamicPanelScript('u295', 1));

eval(GetDynamicPanelScript('u231', 1));

eval(GetDynamicPanelScript('u248', 1));

eval(GetDynamicPanelScript('u148', 3));

eval(GetDynamicPanelScript('u280', 1));

eval(GetDynamicPanelScript('u236', 3));

eval(GetDynamicPanelScript('u221', 4));

eval(GetDynamicPanelScript('u281', 2));

eval(GetDynamicPanelScript('u31', 3));

eval(GetDynamicPanelScript('u365', 1));

var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'top';
var u231 = document.getElementById('u231');

var u232 = document.getElementById('u232');

var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'center';
var u70 = document.getElementById('u70');

var u71 = document.getElementById('u71');

var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u101 = document.getElementById('u101');

var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'top';
var u103 = document.getElementById('u103');

var u104 = document.getElementById('u104');

var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'top';
var u106 = document.getElementById('u106');

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u108 = document.getElementById('u108');

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'top';
var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'top';
var u259 = document.getElementById('u259');

var u351 = document.getElementById('u351');
gv_vAlignTable['u351'] = 'top';
var u80 = document.getElementById('u80');

var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u82 = document.getElementById('u82');

var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'center';
var u84 = document.getElementById('u84');

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'center';
var u86 = document.getElementById('u86');

var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'center';
var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'top';
var u89 = document.getElementById('u89');

u89.style.cursor = 'pointer';
if (bIE) u89.attachEvent("onclick", Clicku89);
else u89.addEventListener("click", Clicku89, true);
function Clicku89(e)
{

if (true) {

	SetPanelStateu3("pd3u3");

}

}
gv_vAlignTable['u89'] = 'top';
var u118 = document.getElementById('u118');

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'top';
var u268 = document.getElementById('u268');
gv_vAlignTable['u268'] = 'center';
var u269 = document.getElementById('u269');

var u363 = document.getElementById('u363');
gv_vAlignTable['u363'] = 'center';
var u90 = document.getElementById('u90');

var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'center';
var u92 = document.getElementById('u92');

var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'center';
var u94 = document.getElementById('u94');

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'top';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u127 = document.getElementById('u127');

u127.style.cursor = 'pointer';
if (bIE) u127.attachEvent("onclick", Clicku127);
else u127.addEventListener("click", Clicku127, true);
function Clicku127(e)
{

if (true) {

	SetPanelStateu101("pd0u101");

}

}
gv_vAlignTable['u127'] = 'top';
var u128 = document.getElementById('u128');

u128.style.cursor = 'pointer';
if (bIE) u128.attachEvent("onclick", Clicku128);
else u128.addEventListener("click", Clicku128, true);
function Clicku128(e)
{

if (true) {

	BringToFront("u216");

}

}

var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'center';
var u278 = document.getElementById('u278');

if (bIE) u278.attachEvent("onblur", LostFocusu278);
else u278.addEventListener("blur", LostFocusu278, true);
function LostFocusu278(e)
{

if (true) {

SetGlobalVariableValue('$paymtInfo', GetWidgetFormText('u278'));

}

}

var u279 = document.getElementById('u279');
gv_vAlignTable['u279'] = 'top';
var u130 = document.getElementById('u130');

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

u137.style.cursor = 'pointer';
if (bIE) u137.attachEvent("onclick", Clicku137);
else u137.addEventListener("click", Clicku137, true);
function Clicku137(e)
{

if (true) {

	BringToFront("u216");

}

}

var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'center';
var u139 = document.getElementById('u139');

var u288 = document.getElementById('u288');

u288.style.cursor = 'pointer';
if (bIE) u288.attachEvent("onclick", Clicku288);
else u288.addEventListener("click", Clicku288, true);
function Clicku288(e)
{

if (true) {

	SetPanelVisibilityu290("");

	SetPanelStateu281("pd1u281");

	MoveWidgetTo('u295',0,180);

}

}

var u289 = document.getElementById('u289');
gv_vAlignTable['u289'] = 'top';
var u300 = document.getElementById('u300');
gv_vAlignTable['u300'] = 'center';
var u301 = document.getElementById('u301');

var u349 = document.getElementById('u349');
gv_vAlignTable['u349'] = 'top';
var u302 = document.getElementById('u302');
gv_vAlignTable['u302'] = 'center';
var u303 = document.getElementById('u303');

u303.style.cursor = 'pointer';
if (bIE) u303.attachEvent("onclick", Clicku303);
else u303.addEventListener("click", Clicku303, true);
function Clicku303(e)
{

if (true) {

	SetPanelStateu3("pd1u3");

	SetPanelStateu236("pd0u236");

;

	ScrollToWidget('u139', false,true);

	BringToFront("u0");

}

}
gv_vAlignTable['u303'] = 'top';
var u304 = document.getElementById('u304');

u304.style.cursor = 'pointer';
if (bIE) u304.attachEvent("onclick", Clicku304);
else u304.addEventListener("click", Clicku304, true);
function Clicku304(e)
{

if (true) {

SetWidgetRichText('u305', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:12px;">Your Welcome message will be at the top of the sign-up sheet.</span>'));

}

}

if (bIE) u304.attachEvent("onblur", LostFocusu304);
else u304.addEventListener("blur", LostFocusu304, true);
function LostFocusu304(e)
{

if (true) {

SetGlobalVariableValue('$Welcome', GetWidgetFormText('u304'));

SetWidgetRichText('u305', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:12px;"> </span>'));

}

}

var u305 = document.getElementById('u305');
gv_vAlignTable['u305'] = 'top';
var u306 = document.getElementById('u306');
gv_vAlignTable['u306'] = 'top';
var u309 = document.getElementById('u309');
gv_vAlignTable['u309'] = 'center';
var u140 = document.getElementById('u140');

var u141 = document.getElementById('u141');

var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'center';
var u143 = document.getElementById('u143');

if (bIE) u143.attachEvent("onblur", LostFocusu143);
else u143.addEventListener("blur", LostFocusu143, true);
function LostFocusu143(e)
{

if (true) {

SetGlobalVariableValue('$ZIP', GetWidgetFormText('u143'));

}

}

var u144 = document.getElementById('u144');

var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'center';
var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'top';
var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'top';
var u148 = document.getElementById('u148');

var u149 = document.getElementById('u149');

u149.style.cursor = 'pointer';
if (bIE) u149.attachEvent("onclick", Clicku149);
else u149.addEventListener("click", Clicku149, true);
function Clicku149(e)
{

if (true) {

	SetPanelStateu148("pd0u148");

SetWidgetFormText('u156', PopulateVariables('01/31/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Monday, January 31'));

	BringToFront("u208");

}

}

var u275 = document.getElementById('u275');
gv_vAlignTable['u275'] = 'top';
var u276 = document.getElementById('u276');

var u277 = document.getElementById('u277');
gv_vAlignTable['u277'] = 'top';
var u310 = document.getElementById('u310');

var u311 = document.getElementById('u311');
gv_vAlignTable['u311'] = 'center';
var u312 = document.getElementById('u312');

var u313 = document.getElementById('u313');

var u314 = document.getElementById('u314');
gv_vAlignTable['u314'] = 'center';
var u315 = document.getElementById('u315');

var u316 = document.getElementById('u316');

var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'center';
var u151 = document.getElementById('u151');

u151.style.cursor = 'pointer';
if (bIE) u151.attachEvent("onclick", Clicku151);
else u151.addEventListener("click", Clicku151, true);
function Clicku151(e)
{

if (true) {

	SetPanelStateu148("pd2u148");

}

}

var u152 = document.getElementById('u152');

u152.style.cursor = 'pointer';
if (bIE) u152.attachEvent("onclick", Clicku152);
else u152.addEventListener("click", Clicku152, true);
function Clicku152(e)
{

if ((GetCheckState('u245')) == (false)) {

	SetPanelStateu148("pd0u148");

SetWidgetFormText('u235', PopulateVariables('02/14/2011'));

SetWidgetRichText('u243', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:12px;">For 2 week FREE DELIVERY by 2/14/2011 you must place your order by 1/31/2011.&nbsp; <br><br>We recommend closing your sign-up sheet no later than 1/29/2011.</span>'));

	MoveWidgetTo('u248',0,346);

}
else
if (true) {

	SetPanelStateu148("pd0u148");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck &quot;I don't know&quot; before selecting a date."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'center';
var u154 = document.getElementById('u154');

u154.style.cursor = 'pointer';
if (bIE) u154.attachEvent("onclick", Clicku154);
else u154.addEventListener("click", Clicku154, true);
function Clicku154(e)
{

if (true) {

	SetPanelStateu148("pd1u148");

}

}

var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'top';
var u156 = document.getElementById('u156');

u156.style.cursor = 'pointer';
if (bIE) u156.attachEvent("onclick", Clicku156);
else u156.addEventListener("click", Clicku156, true);
function Clicku156(e)
{

if (true) {

SetWidgetFormText('u156', PopulateVariables(''));

	SetPanelStateu148("pd1u148");

	BringToFront("u140");

}

}

var u157 = document.getElementById('u157');

var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'center';
var u159 = document.getElementById('u159');

var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'top';
var u235 = document.getElementById('u235');

u235.style.cursor = 'pointer';
if (bIE) u235.attachEvent("onclick", Clicku235);
else u235.addEventListener("click", Clicku235, true);
function Clicku235(e)
{

if ((GetCheckState('u245')) == (false)) {

SetWidgetFormText('u235', PopulateVariables(''));

SetWidgetRichText('u243', PopulateVariables('<span style=" font-family:\'Arial\'; font-size:13px;"> </span>'));

	BringToFront("u236");

	SetPanelStateu236("pd1u236");

}
else
if (true) {

SetWidgetFormText('u235', PopulateVariables('mm/dd/yyyy'));

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck &quot;Leave it open until I close it&quot; before selecting an event date."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

if (bIE) u235.attachEvent("onblur", LostFocusu235);
else u235.addEventListener("blur", LostFocusu235, true);
function LostFocusu235(e)
{

if (((GetCheckState('u245')) == (false)) && (((GetWidgetFormText('u235')) != (PopulateVariables('mm/dd/yyyy'))) && ((GetWidgetFormText('u235')) != (PopulateVariables(''))))) {

SetGlobalVariableValue('$eventDate', GetWidgetFormText('u235'));

}

}

var u284 = document.getElementById('u284');

var u285 = document.getElementById('u285');
gv_vAlignTable['u285'] = 'center';
var u286 = document.getElementById('u286');

u286.style.cursor = 'pointer';
if (bIE) u286.attachEvent("onclick", Clicku286);
else u286.addEventListener("click", Clicku286, true);
function Clicku286(e)
{

if (true) {

	SetPanelVisibilityu290("hidden");

SetGlobalVariableValue('$dlvyInfo', PopulateVariables(''));

SetWidgetFormText('u291', PopulateVariables(' '));

	SetPanelStateu281("pd0u281");

	MoveWidgetTo('u295',0,75);

}

}

var u287 = document.getElementById('u287');
gv_vAlignTable['u287'] = 'top';
var u361 = document.getElementById('u361');
gv_vAlignTable['u361'] = 'center';
var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'center';
var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'top';
var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'top';
var u163 = document.getElementById('u163');

var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'center';
var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'top';
var u166 = document.getElementById('u166');

var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'center';
var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'top';
var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'top';
var u293 = document.getElementById('u293');
gv_vAlignTable['u293'] = 'top';
var u294 = document.getElementById('u294');
gv_vAlignTable['u294'] = 'top';
var u295 = document.getElementById('u295');

var u296 = document.getElementById('u296');

u296.style.cursor = 'pointer';
if (bIE) u296.attachEvent("onclick", Clicku296);
else u296.addEventListener("click", Clicku296, true);
function Clicku296(e)
{

if (true) {

	self.location.href="3.html" + GetQuerystring();

}

}

var u297 = document.getElementById('u297');
gv_vAlignTable['u297'] = 'center';
var u170 = document.getElementById('u170');

var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'center';
var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'top';
var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'top';
var u174 = document.getElementById('u174');

var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'center';
var u176 = document.getElementById('u176');

var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'top';
var u178 = document.getElementById('u178');

var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'center';
var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'center';
var u252 = document.getElementById('u252');

var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'center';
var u200 = document.getElementById('u200');

var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'top';
var u74 = document.getElementById('u74');

u74.style.cursor = 'pointer';
if (bIE) u74.attachEvent("onclick", Clicku74);
else u74.addEventListener("click", Clicku74, true);
function Clicku74(e)
{

if (true) {

	BringToFront("u216");

SetWidgetRichText('u243', PopulateVariables('<br><span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will be available until 11:59 PM EasternTime on the date you choose.&nbsp; <br>After the close date participants will see your sheet but will not be able to sign up online. For FREE shipping to most US and Canada locations, allow 2 weeks after you place your order.</span>'));

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

	SetPanelStateu20("pd0u20");

}

}
gv_vAlignTable['u76'] = 'top';
var u77 = document.getElementById('u77');

u77.style.cursor = 'pointer';
if (bIE) u77.attachEvent("onclick", u77Click);
else u77.addEventListener("click", u77Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u77LinksClick'></DIV>")
var u77LinksClick = document.getElementById('u77LinksClick');
function u77Click(e) 
{

	ToggleLinks(e, 'u77LinksClick');
}

InsertBeforeEnd(u77LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u77Clicku13d198c682ed4288b5bc0468767ae7d8(event)'>Case 1</div>");
function u77Clicku13d198c682ed4288b5bc0468767ae7d8(e)
{

	BringToFront("u216");

	SetPanelStateu0("pd0u0");

SetWidgetFormText('u235', PopulateVariables('02/05/2011'));

SetWidgetRichText('u243', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will be available until 11:59 pm Eastern Time February 5.&nbsp; After the close date participants will see your sheet but will not be able to sign up online. <br><br>For RUSH delivery by Feburary 12 to [[ZIP]], place your order by 11:59 pm Eastern Time on February 7.&nbsp; Add 25% to your cost.</span>'));

SetGlobalVariableValue('$closeDate', PopulateVariables('02/05/2011'));

	ToggleLinks(e, 'u77LinksClick');
}

InsertBeforeEnd(u77LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u77Clicku9e600de06a7d498587a1412019f97e3e(event)'>Case 2</div>");
function u77Clicku9e600de06a7d498587a1412019f97e3e(e)
{

	ToggleLinks(e, 'u77LinksClick');
}

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'center';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
var u180 = document.getElementById('u180');

var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'top';
var u182 = document.getElementById('u182');

u182.style.cursor = 'pointer';
if (bIE) u182.attachEvent("onclick", Clicku182);
else u182.addEventListener("click", Clicku182, true);
function Clicku182(e)
{

if (true) {

	SetPanelStateu140("pd0u140");

	SetPanelStateu208("pd0u208");

	MoveWidgetTo('u208',290,300);

}

}
gv_vAlignTable['u182'] = 'top';
var u183 = document.getElementById('u183');

u183.style.cursor = 'pointer';
if (bIE) u183.attachEvent("onclick", Clicku183);
else u183.addEventListener("click", Clicku183, true);
function Clicku183(e)
{

if ((GetSelectedOption('u176')) == (PopulateVariables(' 2'))) {

	BringToFront("u216");

	SetPanelStateu0("pd0u0");

SetWidgetFormText('u235', PopulateVariables('01/27/2011'));

SetWidgetRichText('u243', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will be available until 11:59 pm Pacific Time January 27.&nbsp; After the close date participants will see your sheet but will not be able to sign up online. <br><br>For FREE delivery by Feburary 12 to [[ZIP]], place your order by 11:59 pm Eastern Time on January 29.&nbsp; </span>'));

SetGlobalVariableValue('$closeDate', PopulateVariables('01/27/2011'));

}
else
if (true) {

}

}

var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'center';
var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'top';
var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'top';
var u187 = document.getElementById('u187');

var u188 = document.getElementById('u188');

u188.style.cursor = 'pointer';
if (bIE) u188.attachEvent("onclick", Clicku188);
else u188.addEventListener("click", Clicku188, true);
function Clicku188(e)
{

if (true) {

	BringToFront("u216");

	SetPanelStateu0("pd0u0");

SetWidgetFormText('u156', PopulateVariables('01/16/2011'));

SetWidgetRichText('u243', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will be available until 11:59 PM PST January 16.&nbsp; After the close date participants will see your sheet but will not be able to sign up online. <br><br>For FREE delivery by January 31 to [[ZIP]], place your order by January 17.&nbsp; </span>'));

}

}

var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'center';
var u307 = document.getElementById('u307');
gv_vAlignTable['u307'] = 'top';
var u308 = document.getElementById('u308');

var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'top';
var u262 = document.getElementById('u262');
gv_vAlignTable['u262'] = 'top';
var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'center';
var u211 = document.getElementById('u211');

u211.style.cursor = 'pointer';
if (bIE) u211.attachEvent("onclick", Clicku211);
else u211.addEventListener("click", Clicku211, true);
function Clicku211(e)
{

if (true) {

	BringToFront("u216");

SetWidgetRichText('u243', PopulateVariables('<br><span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will be available until 11:59 PM PST on the date you choose.&nbsp; <br>After the close date participants will see your sheet but will not be able to sign up online. For FREE shipping to most US and Canada locations, allow 2 weeks after you place your order.</span>'));

}

}

var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'center';
var u213 = document.getElementById('u213');

u213.style.cursor = 'pointer';
if (bIE) u213.attachEvent("onclick", Clicku213);
else u213.addEventListener("click", Clicku213, true);
function Clicku213(e)
{

if (true) {

	BringToFront("u216");

SetWidgetRichText('u243', PopulateVariables('<br><span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will be available until 11:59 PM PST on the date you choose.&nbsp; <br>After the close date participants will see your sheet but will not be able to sign up online. For FREE shipping to most US and Canada locations, allow 2 weeks after you place your order.</span>'));

}

}

var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'center';
var u215 = document.getElementById('u215');

u215.style.cursor = 'pointer';
if (bIE) u215.attachEvent("onclick", Clicku215);
else u215.addEventListener("click", Clicku215, true);
function Clicku215(e)
{

if (true) {

	SetPanelStateu3("pd1u3");

}

}
gv_vAlignTable['u215'] = 'top';
var u352 = document.getElementById('u352');

var u353 = document.getElementById('u353');
gv_vAlignTable['u353'] = 'center';
var u354 = document.getElementById('u354');

var u355 = document.getElementById('u355');
gv_vAlignTable['u355'] = 'center';
var u356 = document.getElementById('u356');

var u357 = document.getElementById('u357');
gv_vAlignTable['u357'] = 'center';
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
var u317 = document.getElementById('u317');
gv_vAlignTable['u317'] = 'center';
var u318 = document.getElementById('u318');

u318.style.cursor = 'pointer';
if (bIE) u318.attachEvent("onclick", Clicku318);
else u318.addEventListener("click", Clicku318, true);
function Clicku318(e)
{

if (true) {

	SetPanelVisibilityu322("hidden");

SetWidgetFormText('u324', PopulateVariables(' '));

SetWidgetFormText('u323', PopulateVariables(''));

SetWidgetFormText('u327', PopulateVariables(' '));

SetGlobalVariableValue('$contactName', GetGlobalVariableValue('$YourName'));

SetGlobalVariableValue('$contactEmail', GetGlobalVariableValue('$yourEmail'));

SetGlobalVariableValue('$contactPhone', GetGlobalVariableValue('$yourPhone'));

}

}

var u319 = document.getElementById('u319');
gv_vAlignTable['u319'] = 'top';
var u272 = document.getElementById('u272');
gv_vAlignTable['u272'] = 'top';
var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'center';
var u221 = document.getElementById('u221');

var u222 = document.getElementById('u222');

var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'center';
var u224 = document.getElementById('u224');

var u360 = document.getElementById('u360');

var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'center';
var u362 = document.getElementById('u362');

var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'top';
var u364 = document.getElementById('u364');

var u365 = document.getElementById('u365');

var u366 = document.getElementById('u366');

var u367 = document.getElementById('u367');

u367.style.cursor = 'pointer';
if (bIE) u367.attachEvent("onclick", Clicku367);
else u367.addEventListener("click", Clicku367, true);
function Clicku367(e)
{

if (true) {

	SetPanelStateu329("pd0u329");

SetWidgetFormText('u330', GetGlobalVariableValue('$yourEmail'));

SetWidgetFormText('u331', GetGlobalVariableValue('$YourName'));

}

}
gv_vAlignTable['u367'] = 'top';
var u320 = document.getElementById('u320');

u320.style.cursor = 'pointer';
if (bIE) u320.attachEvent("onclick", Clicku320);
else u320.addEventListener("click", Clicku320, true);
function Clicku320(e)
{

if (true) {

	SetPanelVisibilityu322("");

}

}

var u321 = document.getElementById('u321');
gv_vAlignTable['u321'] = 'top';
var u322 = document.getElementById('u322');

var u323 = document.getElementById('u323');

if (bIE) u323.attachEvent("onblur", LostFocusu323);
else u323.addEventListener("blur", LostFocusu323, true);
function LostFocusu323(e)
{

if ((GetCheckState('u320')) == (true)) {

SetGlobalVariableValue('$contactName', GetWidgetFormText('u323'));

}

}

var u324 = document.getElementById('u324');

if (bIE) u324.attachEvent("onblur", LostFocusu324);
else u324.addEventListener("blur", LostFocusu324, true);
function LostFocusu324(e)
{

if ((GetCheckState('u320')) == (true)) {

SetGlobalVariableValue('$contactEmail', GetWidgetFormText('u324'));

}

}

var u325 = document.getElementById('u325');
gv_vAlignTable['u325'] = 'top';
var u326 = document.getElementById('u326');
gv_vAlignTable['u326'] = 'top';
var u327 = document.getElementById('u327');

if (bIE) u327.attachEvent("onblur", LostFocusu327);
else u327.addEventListener("blur", LostFocusu327, true);
function LostFocusu327(e)
{

if ((GetCheckState('u320')) == (true)) {

SetGlobalVariableValue('$contactPhone', GetWidgetFormText('u327'));

}

}

var u328 = document.getElementById('u328');
gv_vAlignTable['u328'] = 'top';
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

	BringToFront("u216");

}

}

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u9 = document.getElementById('u9');

var u330 = document.getElementById('u330');

var u331 = document.getElementById('u331');

var u332 = document.getElementById('u332');

u332.style.cursor = 'pointer';
if (bIE) u332.attachEvent("onclick", Clicku332);
else u332.addEventListener("click", Clicku332, true);
function Clicku332(e)
{

if (true) {

	SetPanelStateu329("pd1u329");

SetGlobalVariableValue('$YourName', GetWidgetFormText('u331'));

SetGlobalVariableValue('$yourEmail', GetWidgetFormText('u330'));

SetWidgetRichText('u336', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">[[YourName]]</span>'));

SetWidgetRichText('u337', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">[[yourEmail]]</span>'));

}

}

var u333 = document.getElementById('u333');
gv_vAlignTable['u333'] = 'center';
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

	SetPanelStateu329("pd0u329");

SetWidgetFormText('u330', GetGlobalVariableValue('$yourEmail'));

SetWidgetFormText('u331', GetGlobalVariableValue('$YourName'));

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

	SetPanelStateu329("pd0u329");

SetWidgetFormText('u330', GetGlobalVariableValue('$yourEmail'));

SetWidgetFormText('u331', GetGlobalVariableValue('$YourName'));

}

}
gv_vAlignTable['u337'] = 'top';
var u338 = document.getElementById('u338');

u338.style.cursor = 'pointer';
if (bIE) u338.attachEvent("onclick", Clicku338);
else u338.addEventListener("click", Clicku338, true);
function Clicku338(e)
{

if (true) {

	SetPanelStateu329("pd0u329");

	MoveWidgetTo('u365',53,385);

}

}
gv_vAlignTable['u338'] = 'top';
var u339 = document.getElementById('u339');

var u240 = document.getElementById('u240');

u240.style.cursor = 'pointer';
if (bIE) u240.attachEvent("onclick", Clicku240);
else u240.addEventListener("click", Clicku240, true);
function Clicku240(e)
{

if ((GetCheckState('u245')) == (false)) {

	SetPanelStateu236("pd0u236");

SetWidgetFormText('u235', PopulateVariables('02/12/2011'));

SetWidgetRichText('u243', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on 2/12/2011 at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

}
else
if (true) {

	SetPanelStateu236("pd0u236");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck &quot;I don't know&quot; before selecting a date."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'center';
var u242 = document.getElementById('u242');

u242.style.cursor = 'pointer';
if (bIE) u242.attachEvent("onclick", Clicku242);
else u242.addEventListener("click", Clicku242, true);
function Clicku242(e)
{

if (true) {

	SetPanelStateu236("pd1u236");

}

}

var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'top';
var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'top';
var u245 = document.getElementById('u245');

u245.style.cursor = 'pointer';
if (bIE) u245.attachEvent("onclick", Clicku245);
else u245.addEventListener("click", Clicku245, true);
function Clicku245(e)
{

if ((GetCheckState('u245')) == (true)) {

;

SetWidgetFormText('u235', PopulateVariables('mm/dd/yyyy'));

SetWidgetRichText('u243', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Place your order at least 2 weeks in advance of your delivery date to get FREE SHIPPING in the 48 US states and Canada.</span>'));

	SetPanelStateu236("pd0u236");

}
else
if ((GetWidgetFormText('u235')) != (PopulateVariables('mm/dd/yyyy'))) {

SetWidgetRichText('u243', PopulateVariables('<span style=" font-family:\'Arial\'; font-size:13px;">The last day to order for FREE SHIPPING guaranteed by [delivery date] is [order date].&nbsp; </span>'));

}
else
if (true) {

SetWidgetRichText('u243', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Place your order at least 2 weeks in advance of your delivery date to get FREE SHIPPING in the 48 US states and Canada.</span>'));

}

}

if (bIE) u245.attachEvent("onblur", LostFocusu245);
else u245.addEventListener("blur", LostFocusu245, true);
function LostFocusu245(e)
{

if (true) {

SetWidgetRichText('u243', PopulateVariables(''));

}

}

var u298 = document.getElementById('u298');

var u299 = document.getElementById('u299');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'top';
var u11 = document.getElementById('u11');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u13 = document.getElementById('u13');

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'top';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'top';
var u17 = document.getElementById('u17');

u17.style.cursor = 'pointer';
if (bIE) u17.attachEvent("onclick", Clicku17);
else u17.addEventListener("click", Clicku17, true);
function Clicku17(e)
{

if (true) {

	BringToFront("u216");

}

}

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u19 = document.getElementById('u19');

var u344 = document.getElementById('u344');
gv_vAlignTable['u344'] = 'center';
var u345 = document.getElementById('u345');
gv_vAlignTable['u345'] = 'top';
var u346 = document.getElementById('u346');
gv_vAlignTable['u346'] = 'top';
var u347 = document.getElementById('u347');
gv_vAlignTable['u347'] = 'top';
var u348 = document.getElementById('u348');

var u340 = document.getElementById('u340');

u340.style.cursor = 'pointer';
if (bIE) u340.attachEvent("onclick", Clicku340);
else u340.addEventListener("click", Clicku340, true);
function Clicku340(e)
{

if (true) {

	SetPanelStateu339("pd1u339");

SetWidgetFormText('u342', GetGlobalVariableValue('$GroupName'));

}

}
gv_vAlignTable['u340'] = 'top';
var u341 = document.getElementById('u341');
gv_vAlignTable['u341'] = 'top';
var u342 = document.getElementById('u342');

var u343 = document.getElementById('u343');

u343.style.cursor = 'pointer';
if (bIE) u343.attachEvent("onclick", Clicku343);
else u343.addEventListener("click", Clicku343, true);
function Clicku343(e)
{

if (true) {

	SetPanelStateu339("pd0u339");

SetGlobalVariableValue('$GroupName', GetWidgetFormText('u342'));

SetWidgetRichText('u340', PopulateVariables('<span style=" font-family:\'Myriad Pro\'; color:#003366; font-size:21px;">Customize [[GroupName]]\'s Sign-up Sheet</span><span style=" font-family:\'Helvetica\'; color:#003366; font-size:21px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span><span style=" font-family:\'Helvetica\'; color:#006699; font-size:12px;">Change group name</span>'));

}

}

var u110 = document.getElementById('u110');

var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'top';
var u112 = document.getElementById('u112');

var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'top';
var u114 = document.getElementById('u114');

var u250 = document.getElementById('u250');

var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'top';
var u116 = document.getElementById('u116');

var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'top';
var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'top';
var u255 = document.getElementById('u255');

u255.style.cursor = 'pointer';
if (bIE) u255.attachEvent("onclick", Clicku255);
else u255.addEventListener("click", Clicku255, true);
function Clicku255(e)
{

if (true) {

	SetPanelVisibilityu259("hidden");

	SetPanelStateu249("pd0u249");

	MoveWidgetTo('u265',0,73);

}

}

var u256 = document.getElementById('u256');
gv_vAlignTable['u256'] = 'top';
var u20 = document.getElementById('u20');

var u21 = document.getElementById('u21');

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u23 = document.getElementById('u23');

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u28 = document.getElementById('u28');

u28.style.cursor = 'pointer';
if (bIE) u28.attachEvent("onclick", Clicku28);
else u28.addEventListener("click", Clicku28, true);
function Clicku28(e)
{

if (true) {

SetWidgetFormText('u28', PopulateVariables(''));

	SetPanelStateu31("pd1u31");

	BringToFront("u20");

}

}

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'top';
var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'center';
var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'top';
var u208 = document.getElementById('u208');

var u209 = document.getElementById('u209');

u209.style.cursor = 'pointer';
if (bIE) u209.attachEvent("onclick", Clicku209);
else u209.addEventListener("click", Clicku209, true);
function Clicku209(e)
{

if (true) {

	SetPanelStateu140("pd1u140");

	SetPanelStateu208("pd1u208");

SetWidgetRichText('u162', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#003366; font-size:13px;">For delivery to ZIP/Postal Code [[ZIP]]</span></b>'));

	MoveWidgetTo('u208',290,350);

}

}

var u358 = document.getElementById('u358');

var u359 = document.getElementById('u359');
gv_vAlignTable['u359'] = 'center';
var u350 = document.getElementById('u350');
gv_vAlignTable['u350'] = 'top';
var u120 = document.getElementById('u120');

u120.style.cursor = 'pointer';
if (bIE) u120.attachEvent("onclick", Clicku120);
else u120.addEventListener("click", Clicku120, true);
function Clicku120(e)
{

if (true) {

	BringToFront("u216");

    var reload = ParentWindowNeedsReload("http://www.customink.com/cink/create/pricing/quickquote.jsp?styleno=04600");
	top.opener.window.location.href = "http://www.customink.com/cink/create/pricing/quickquote.jsp?styleno=04600" + "";
    if (reload) {
        top.opener.window.location = "Resources/reload.html#" + encodeURI(top.opener.window.location.href);
    }

}

}
gv_vAlignTable['u120'] = 'top';
var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'top';
var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'top';
var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'top';
var u124 = document.getElementById('u124');

u124.style.cursor = 'pointer';
if (bIE) u124.attachEvent("onclick", Clicku124);
else u124.addEventListener("click", Clicku124, true);
function Clicku124(e)
{

if (true) {

	BringToFront("u216");

    var reload = ParentWindowNeedsReload("http://www.customink.com/cink/create/pricing/quickquote.jsp?styleno=04600");
	top.opener.window.location.href = "http://www.customink.com/cink/create/pricing/quickquote.jsp?styleno=04600" + "";
    if (reload) {
        top.opener.window.location = "Resources/reload.html#" + encodeURI(top.opener.window.location.href);
    }

}

}
gv_vAlignTable['u124'] = 'top';
var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'top';
var u261 = document.getElementById('u261');

if (bIE) u261.attachEvent("onfocus", Focusu261);
else u261.addEventListener("focus", Focusu261, true);
function Focusu261(e)
{

if (true) {

SetGlobalVariableValue('$groupPrice', PopulateVariables(''));

}

}

if (bIE) u261.attachEvent("onblur", LostFocusu261);
else u261.addEventListener("blur", LostFocusu261, true);
function LostFocusu261(e)
{

if (true) {

SetGlobalVariableValue('$groupPrice', GetWidgetFormText('u261'));

}

}

var u126 = document.getElementById('u126');

u126.style.cursor = 'pointer';
if (bIE) u126.attachEvent("onclick", Clicku126);
else u126.addEventListener("click", Clicku126, true);
function Clicku126(e)
{

if (true) {

	SetPanelStateu101("pd1u101");

}

}
gv_vAlignTable['u126'] = 'top';
var u263 = document.getElementById('u263');

u263.style.cursor = 'pointer';
if (bIE) u263.attachEvent("onclick", Clicku263);
else u263.addEventListener("click", Clicku263, true);
function Clicku263(e)
{

if (true) {

	BringToFront("u0");

	SetPanelStateu3("pd0u3");

SetWidgetRichText('u102', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">Sample prices for your design with FREE 2 week delivery:</span></b>'));

	ScrollToWidget('u130', false,true);

}

}
gv_vAlignTable['u263'] = 'top';
var u264 = document.getElementById('u264');
gv_vAlignTable['u264'] = 'top';
var u265 = document.getElementById('u265');

var u30 = document.getElementById('u30');

var u31 = document.getElementById('u31');

var u32 = document.getElementById('u32');

if (bIE) u32.attachEvent("onblur", LostFocusu32);
else u32.addEventListener("blur", LostFocusu32, true);
function LostFocusu32(e)
{

if (true) {

SetGlobalVariableValue('$ZIP', GetWidgetFormText('u32'));

}

}

var u33 = document.getElementById('u33');

u33.style.cursor = 'pointer';
if (bIE) u33.attachEvent("onclick", Clicku33);
else u33.addEventListener("click", Clicku33, true);
function Clicku33(e)
{

if (true) {

	SetPanelStateu20("pd1u20");

SetWidgetRichText('u59', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#FF6600; font-size:16px;">Sign-Up closing dates for delivery to ZIP/Postal [[ZIP]] by Saturday, February 12</span></b>'));

	MoveWidgetTo('u208',290,350);

}

}

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u35 = document.getElementById('u35');

u35.style.cursor = 'pointer';
if (bIE) u35.attachEvent("onclick", Clicku35);
else u35.addEventListener("click", Clicku35, true);
function Clicku35(e)
{

if (true) {

	BringToFront("u216");

SetWidgetRichText('u243', PopulateVariables('<br><span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will be available until 11:59 PM PST on the date you choose.&nbsp; <br>After the close date participants will see your sheet but will not be able to sign up online. For FREE shipping to most US and Canada locations, allow 2 weeks after you place your order.</span>'));

}

}

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u37 = document.getElementById('u37');

u37.style.cursor = 'pointer';
if (bIE) u37.attachEvent("onclick", Clicku37);
else u37.addEventListener("click", Clicku37, true);
function Clicku37(e)
{

if (true) {

	SetPanelStateu31("pd0u31");

SetWidgetFormText('u28', PopulateVariables('01/31/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Monday, January 31'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('01/31/2011'));

}

}

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u39 = document.getElementById('u39');

u39.style.cursor = 'pointer';
if (bIE) u39.attachEvent("onclick", Clicku39);
else u39.addEventListener("click", Clicku39, true);
function Clicku39(e)
{

if (true) {

	SetPanelStateu31("pd2u31");

}

}

var u216 = document.getElementById('u216');

var u217 = document.getElementById('u217');

var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'center';
var u219 = document.getElementById('u219');

var u368 = document.getElementById('u368');

var u369 = document.getElementById('u369');
gv_vAlignTable['u369'] = 'center';
var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'center';
var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'top';
var u266 = document.getElementById('u266');

var u267 = document.getElementById('u267');

var u203 = document.getElementById('u203');

var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'center';
var u205 = document.getElementById('u205');

var u270 = document.getElementById('u270');
gv_vAlignTable['u270'] = 'center';
var u271 = document.getElementById('u271');

u271.style.cursor = 'pointer';
if (bIE) u271.attachEvent("onclick", Clicku271);
else u271.addEventListener("click", Clicku271, true);
function Clicku271(e)
{

if (true) {

	SetPanelStateu266("pd0u266");

SetGlobalVariableValue('$paymtInfo', PopulateVariables(''));

SetWidgetFormText('u278', PopulateVariables(''));

	MoveWidgetTo('u280',0,98);

	SetPanelVisibilityu276("hidden");

}

}

var u257 = document.getElementById('u257');

u257.style.cursor = 'pointer';
if (bIE) u257.attachEvent("onclick", Clicku257);
else u257.addEventListener("click", Clicku257, true);
function Clicku257(e)
{

if (true) {

	SetPanelVisibilityu259("");

	SetPanelStateu249("pd1u249");

	MoveWidgetTo('u265',0,120);

}

}

var u273 = document.getElementById('u273');

u273.style.cursor = 'pointer';
if (bIE) u273.attachEvent("onclick", Clicku273);
else u273.addEventListener("click", Clicku273, true);
function Clicku273(e)
{

if (true) {

	SetPanelStateu266("pd1u266");

	SetPanelVisibilityu276("");

	MoveWidgetTo('u280',0,170);

}

}

var u274 = document.getElementById('u274');
gv_vAlignTable['u274'] = 'top';
var u40 = document.getElementById('u40');

u40.style.cursor = 'pointer';
if (bIE) u40.attachEvent("onclick", Clicku40);
else u40.addEventListener("click", Clicku40, true);
function Clicku40(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Delivery should be Feb 12.&nbsp; Only Rush shipping is available on these dates."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u41 = document.getElementById('u41');

u41.style.cursor = 'pointer';
if (bIE) u41.attachEvent("onclick", Clicku41);
else u41.addEventListener("click", Clicku41, true);
function Clicku41(e)
{

if (true) {

	SetPanelStateu31("pd0u31");

SetWidgetFormText('u28', PopulateVariables('02/12/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Saturday, February 12'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('02/12/2011'));

}

}

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u43 = document.getElementById('u43');

u43.style.cursor = 'pointer';
if (bIE) u43.attachEvent("onclick", Clicku43);
else u43.addEventListener("click", Clicku43, true);
function Clicku43(e)
{

if (true) {

	SetPanelStateu31("pd1u31");

}

}

var u44 = document.getElementById('u44');

var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'center';
var u46 = document.getElementById('u46');

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u48 = document.getElementById('u48');

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u226 = document.getElementById('u226');

var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'center';
var u228 = document.getElementById('u228');

var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'center';
var u280 = document.getElementById('u280');

var u281 = document.getElementById('u281');

var u282 = document.getElementById('u282');

var u283 = document.getElementById('u283');
gv_vAlignTable['u283'] = 'center';
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

var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'center';
var u57 = document.getElementById('u57');

var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'center';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u236 = document.getElementById('u236');

var u237 = document.getElementById('u237');

u237.style.cursor = 'pointer';
if (bIE) u237.attachEvent("onclick", Clicku237);
else u237.addEventListener("click", Clicku237, true);
function Clicku237(e)
{

if ((GetCheckState('u245')) == (false)) {

	SetPanelStateu236("pd0u236");

SetWidgetFormText('u235', PopulateVariables('01/27/2011'));

SetWidgetRichText('u243', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on 1/27/2011 at 11:59pm PST.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetGlobalVariableValue('$closeDate', PopulateVariables('Thursday, January 27'));

}
else
if ((GetCheckState('u245')) == (true)) {

	SetPanelStateu236("pd0u236");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck &quot;Leave it open until I close it&quot; before selecting a date."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'center';
var u239 = document.getElementById('u239');

u239.style.cursor = 'pointer';
if (bIE) u239.attachEvent("onclick", Clicku239);
else u239.addEventListener("click", Clicku239, true);
function Clicku239(e)
{

if (true) {

	SetPanelStateu236("pd2u236");

}

}

var u290 = document.getElementById('u290');

var u291 = document.getElementById('u291');

if (bIE) u291.attachEvent("onblur", LostFocusu291);
else u291.addEventListener("blur", LostFocusu291, true);
function LostFocusu291(e)
{

if (true) {

SetGlobalVariableValue('$dlvyInfo', GetWidgetFormText('u291'));

}

}

var u292 = document.getElementById('u292');
gv_vAlignTable['u292'] = 'top';
var u60 = document.getElementById('u60');

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'center';
var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u63 = document.getElementById('u63');

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u67 = document.getElementById('u67');

u67.style.cursor = 'pointer';
if (bIE) u67.attachEvent("onclick", Clicku67);
else u67.addEventListener("click", Clicku67, true);
function Clicku67(e)
{

if (true) {

	BringToFront("u216");

	SetPanelStateu0("pd0u0");

SetWidgetFormText('u235', PopulateVariables('01/27/2011'));

SetWidgetRichText('u243', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will be available until 11:59 pm Eastern Time Thursday, January 27.&nbsp; After the close date participants will see your sheet but will not be able to sign up online. <br><br>For FREE delivery by Saturday, Feburary 12 to [[ZIP]], place your order by 11:59 pm Eastern Time on Saturday, January 29.&nbsp; </span>'));

SetGlobalVariableValue('$closeDate', PopulateVariables('01/27/2011'));

}

}

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'center';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'top';
var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'top';
var u248 = document.getElementById('u248');

var u249 = document.getElementById('u249');

if (window.OnLoad) OnLoad();
