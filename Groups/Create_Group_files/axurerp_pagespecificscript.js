
var PageName = 'Create Group';
var PageId = 'pb523ba1f4ae3484caa0d0e837974aa84'
var PageUrl = 'Create_Group.html'
document.title = 'Create Group';

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

var $contanctName = '';

var $yourEmail = '';

var $closeDate = '';

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
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&price1=' + encodeURIComponent($price1) + '&price2=' + encodeURIComponent($price2) + '&GroupName=' + encodeURIComponent($GroupName) + '&YourName=' + encodeURIComponent($YourName) + '&groupPrice=' + encodeURIComponent($groupPrice) + '&contanctName=' + encodeURIComponent($contanctName) + '&yourEmail=' + encodeURIComponent($yourEmail) + '&closeDate=' + encodeURIComponent($closeDate) + '&CSUM=1';
}

function PopulateVariables(value) {
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[price1\]\]/g, $price1);
  value = value.replace(/\[\[price2\]\]/g, $price2);
  value = value.replace(/\[\[GroupName\]\]/g, $GroupName);
  value = value.replace(/\[\[YourName\]\]/g, $YourName);
  value = value.replace(/\[\[groupPrice\]\]/g, $groupPrice);
  value = value.replace(/\[\[contanctName\]\]/g, $contanctName);
  value = value.replace(/\[\[yourEmail\]\]/g, $yourEmail);
  value = value.replace(/\[\[closeDate\]\]/g, $closeDate);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  return value;
}

function OnLoad(e) {

}

eval(GetDynamicPanelScript('u229', 1));

eval(GetDynamicPanelScript('u97', 2));

eval(GetDynamicPanelScript('u278', 1));

eval(GetDynamicPanelScript('u118', 2));

eval(GetDynamicPanelScript('u203', 2));

eval(GetDynamicPanelScript('u268', 1));

eval(GetDynamicPanelScript('u3', 7));

eval(GetDynamicPanelScript('u155', 1));

eval(GetDynamicPanelScript('u233', 2));

eval(GetDynamicPanelScript('u67', 2));

eval(GetDynamicPanelScript('u57', 1));

eval(GetDynamicPanelScript('u122', 2));

eval(GetDynamicPanelScript('u210', 1));

var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'top';
var u231 = document.getElementById('u231');

u231.style.cursor = 'pointer';
if (bIE) u231.attachEvent("onclick", Clicku231);
else u231.addEventListener("click", Clicku231, true);
function Clicku231(e)
{

if (true) {

SetWidgetFormText('u231', PopulateVariables(''));

}

}

if (bIE) u231.attachEvent("onblur", LostFocusu231);
else u231.addEventListener("blur", LostFocusu231, true);
function LostFocusu231(e)
{

if (true) {

SetGlobalVariableValue('$closeDate', GetWidgetFormText('u231'));

}

}

var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'top';
var u233 = document.getElementById('u233');

var u70 = document.getElementById('u70');

var u71 = document.getElementById('u71');

u71.style.cursor = 'pointer';
if (bIE) u71.attachEvent("onclick", Clicku71);
else u71.addEventListener("click", Clicku71, true);
function Clicku71(e)
{

if (true) {

	SetPanelStateu3("pd1u3");

SetGlobalVariableValue('$yourEmail', GetWidgetFormText('u70'));

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

if ((GetCheckState('u102')) == (true)) {

	SetPanelStateu97("pd1u97");

SetWidgetRichText('u112', PopulateVariables('<span style=" font-family:\'Calibri\'; font-size:13px;">Please call us for an accurate quote for your design. Designs with multiple prints, plus sizes, personalization and printing on sleeve, leg or hood must be custom quoted to be accurate.</span>'));

}

}

var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'top';
var u104 = document.getElementById('u104');

var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'top';
var u106 = document.getElementById('u106');

u106.style.cursor = 'pointer';
if (bIE) u106.attachEvent("onclick", Clicku106);
else u106.addEventListener("click", Clicku106, true);
function Clicku106(e)
{

if (((GetCheckState('u102')) == (true)) && ((GetWidgetFormText('u99')) == (PopulateVariables('99000')))) {

	SetPanelStateu97("pd1u97");

SetWidgetRichText('u112', PopulateVariables('<span style=" font-family:\'Calibri\'; font-size:13px;">Extra charges apply for these requests and for delivery to Alaska.&nbsp; Please call us for an accurate quote at 800-293-4232.&nbsp; </span>'));

}
else
if (((GetCheckState('u102')) == (true)) && ((GetWidgetFormText('u99')) == (PopulateVariables('1A2B3C')))) {

	SetPanelStateu97("pd1u97");

SetWidgetRichText('u112', PopulateVariables('<span style=" font-family:\'Calibri\'; font-size:13px;">Extra charges apply for these requests and for delivery to Canada.&nbsp; Please call us for an accurate quote at 800-293-4232.&nbsp; </span>'));

}
else
if ((GetCheckState('u102')) == (true)) {

	SetPanelStateu97("pd1u97");

SetWidgetRichText('u112', PopulateVariables('<span style=" font-family:\'Calibri\'; font-size:13px;">Designs with multiple prints, plus sizes, personalization and printing on sleeve, leg or hood must be custom quoted to be accurate.&nbsp; <br>Please call us for an accurate quote at 800-293-4232.&nbsp; </span>'));

}
else
if (((GetCheckState('u104')) == (true)) && ((GetWidgetFormText('u99')) == (PopulateVariables('90001')))) {

	SetPanelStateu97("pd1u97");

SetWidgetRichText('u112', PopulateVariables('<span style=" font-family:\'Calibri\'; font-size:13px;">Extra charges apply delivery to Alaska.&nbsp;&nbsp; Please call us for an accurate quote at 800-293-4232.</span>'));

}
else
if ((GetCheckState('u104')) == (true)) {

	SetPanelStateu3("pd4u3");

}

}

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'center';
var u108 = document.getElementById('u108');

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'center';
var u258 = document.getElementById('u258');

u258.style.cursor = 'pointer';
if (bIE) u258.attachEvent("onclick", Clicku258);
else u258.addEventListener("click", Clicku258, true);
function Clicku258(e)
{

if (true) {

	SetPanelStateu3("pd6u3");

SetWidgetRichText('u287', PopulateVariables('<span style=" font-family:\'Calibri\'; font-size:13px;">Close Date: [[closeDate]]</span>'));

}

}

var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'center';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'center';
var u81 = document.getElementById('u81');

u81.style.cursor = 'pointer';
if (bIE) u81.attachEvent("onclick", Clicku81);
else u81.addEventListener("click", Clicku81, true);
function Clicku81(e)
{

if (true) {

	SetPanelStateu3("pd1u3");

}

}
gv_vAlignTable['u81'] = 'top';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'top';
var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'top';
var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'top';
var u85 = document.getElementById('u85');

if (bIE) u85.attachEvent("onblur", LostFocusu85);
else u85.addEventListener("blur", LostFocusu85, true);
function LostFocusu85(e)
{

if (true) {

SetGlobalVariableValue('$GroupName', GetWidgetFormText('u85'));

}

}

var u86 = document.getElementById('u86');

if (bIE) u86.attachEvent("onblur", LostFocusu86);
else u86.addEventListener("blur", LostFocusu86, true);
function LostFocusu86(e)
{

if (true) {

SetGlobalVariableValue('$YourName', GetWidgetFormText('u86'));

}

}

var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'top';
var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'top';
var u89 = document.getElementById('u89');

var u118 = document.getElementById('u118');

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'top';
var u268 = document.getElementById('u268');

var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'top';
var u90 = document.getElementById('u90');

var u91 = document.getElementById('u91');

u91.style.cursor = 'pointer';
if (bIE) u91.attachEvent("onclick", Clicku91);
else u91.addEventListener("click", Clicku91, true);
function Clicku91(e)
{

if (true) {

	SetPanelStateu3("pd3u3");

	SetPanelStateu278("pd0u278");

SetWidgetRichText('u284', PopulateVariables('<span style=" font-family:\'Calibri\'; font-size:13px;">Group Name: [[GroupName]]</span>'));

SetWidgetRichText('u285', PopulateVariables('<span style=" font-family:\'Calibri\'; font-size:13px;">Your Name: [[YourName]]</span>'));

SetWidgetRichText('u289', PopulateVariables('<span style=" font-family:\'Calibri\'; font-size:13px;">Your Email: [[yourEmail]]</span>'));

}

}

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

var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u127 = document.getElementById('u127');

var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u129 = document.getElementById('u129');

var u278 = document.getElementById('u278');

var u279 = document.getElementById('u279');

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

var u288 = document.getElementById('u288');
gv_vAlignTable['u288'] = 'top';
var u289 = document.getElementById('u289');
gv_vAlignTable['u289'] = 'top';
var u140 = document.getElementById('u140');

var u141 = document.getElementById('u141');

var u142 = document.getElementById('u142');

var u143 = document.getElementById('u143');

var u144 = document.getElementById('u144');

var u145 = document.getElementById('u145');

var u146 = document.getElementById('u146');

var u147 = document.getElementById('u147');

var u148 = document.getElementById('u148');

var u149 = document.getElementById('u149');

var u275 = document.getElementById('u275');

var u276 = document.getElementById('u276');

var u277 = document.getElementById('u277');

var u150 = document.getElementById('u150');

u150.style.cursor = 'pointer';
if (bIE) u150.attachEvent("onclick", Clicku150);
else u150.addEventListener("click", Clicku150, true);
function Clicku150(e)
{

if (true) {

	SetPanelStateu122("pd0u122");

	SetPanelVisibilityu97("");

}

}

var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'center';
var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'top';
var u153 = document.getElementById('u153');

u153.style.cursor = 'pointer';
if (bIE) u153.attachEvent("onclick", Clicku153);
else u153.addEventListener("click", Clicku153, true);
function Clicku153(e)
{

if (true) {

	SetPanelVisibilityu155("hidden");

	SetPanelVisibilityu97("");

}

}

var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'top';
var u155 = document.getElementById('u155');

var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'top';
var u157 = document.getElementById('u157');

var u158 = document.getElementById('u158');

var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'top';
var u234 = document.getElementById('u234');

u234.style.cursor = 'pointer';
if (bIE) u234.attachEvent("onclick", Clicku234);
else u234.addEventListener("click", Clicku234, true);
function Clicku234(e)
{

if (true) {

	SetPanelVisibilityu229("");

SetWidgetFormText('u257', PopulateVariables('12/01/2010'));

	SetPanelStateu233("pd1u233");

}

}

var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'center';
var u284 = document.getElementById('u284');
gv_vAlignTable['u284'] = 'top';
var u285 = document.getElementById('u285');
gv_vAlignTable['u285'] = 'top';
var u286 = document.getElementById('u286');
gv_vAlignTable['u286'] = 'top';
var u287 = document.getElementById('u287');
gv_vAlignTable['u287'] = 'top';
var u160 = document.getElementById('u160');

var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'top';
var u162 = document.getElementById('u162');

var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'top';
var u164 = document.getElementById('u164');

var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'top';
var u166 = document.getElementById('u166');

var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'top';
var u168 = document.getElementById('u168');

var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'top';
var u170 = document.getElementById('u170');

var u171 = document.getElementById('u171');

var u172 = document.getElementById('u172');

var u173 = document.getElementById('u173');

var u174 = document.getElementById('u174');

var u175 = document.getElementById('u175');

var u176 = document.getElementById('u176');

var u177 = document.getElementById('u177');

var u178 = document.getElementById('u178');

var u179 = document.getElementById('u179');

var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'center';
var u252 = document.getElementById('u252');

var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'center';
var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'top';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'top';
var u74 = document.getElementById('u74');

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'top';
var u77 = document.getElementById('u77');

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'center';
var u79 = document.getElementById('u79');

var u180 = document.getElementById('u180');

var u181 = document.getElementById('u181');

u181.style.cursor = 'pointer';
if (bIE) u181.attachEvent("onclick", Clicku181);
else u181.addEventListener("click", Clicku181, true);
function Clicku181(e)
{

if (true) {

	SetPanelStateu118("pd0u118");

	SetPanelVisibilityu97("");

	MoveWidgetTo('u97',24,160);

}

}

var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'center';
var u183 = document.getElementById('u183');

u183.style.cursor = 'pointer';
if (bIE) u183.attachEvent("onclick", Clicku183);
else u183.addEventListener("click", Clicku183, true);
function Clicku183(e)
{

if (true) {

	SetPanelVisibilityu97("hidden");

	SetPanelVisibilityu155("");

}

}

var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'top';
var u185 = document.getElementById('u185');

var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'center';
var u187 = document.getElementById('u187');

var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'center';
var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'top';
var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'top';
var u262 = document.getElementById('u262');
gv_vAlignTable['u262'] = 'top';
var u210 = document.getElementById('u210');

var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'top';
var u212 = document.getElementById('u212');

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

	NewWindow("Resources/Other.html#other=" + encodeURI("Display acknowledgment of save with selected price option"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u190 = document.getElementById('u190');

var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'top';
var u192 = document.getElementById('u192');

var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'top';
var u194 = document.getElementById('u194');

var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'center';
var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'top';
var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'top';
var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'top';
var u199 = document.getElementById('u199');

u199.style.cursor = 'pointer';
if (bIE) u199.attachEvent("onclick", Clicku199);
else u199.addEventListener("click", Clicku199, true);
function Clicku199(e)
{

if (true) {

	SetPanelStateu203("pd0u203");

}

}

var u272 = document.getElementById('u272');

var u220 = document.getElementById('u220');

var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'top';
var u222 = document.getElementById('u222');

var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'top';
var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'top';
var u225 = document.getElementById('u225');

var u99 = document.getElementById('u99');

var u0 = document.getElementById('u0');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'top';
var u3 = document.getElementById('u3');

var u4 = document.getElementById('u4');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u6 = document.getElementById('u6');

u6.style.cursor = 'pointer';
if (bIE) u6.attachEvent("onclick", Clicku6);
else u6.addEventListener("click", Clicku6, true);
function Clicku6(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("go to the lab"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}
gv_vAlignTable['u6'] = 'top';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'top';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'top';
var u240 = document.getElementById('u240');

var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'center';
var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'top';
var u243 = document.getElementById('u243');

var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'center';
var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'top';
var u10 = document.getElementById('u10');

var u11 = document.getElementById('u11');

u11.style.cursor = 'pointer';
if (bIE) u11.attachEvent("onclick", Clicku11);
else u11.addEventListener("click", Clicku11, true);
function Clicku11(e)
{

if (true) {

	SetPanelStateu3("pd1u3");

SetGlobalVariableValue('$yourEmail', GetWidgetFormText('u10'));

}

}

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u13 = document.getElementById('u13');

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u15 = document.getElementById('u15');

var u16 = document.getElementById('u16');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'top';
var u18 = document.getElementById('u18');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u110 = document.getElementById('u110');

var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'center';
var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u113 = document.getElementById('u113');

u113.style.cursor = 'pointer';
if (bIE) u113.attachEvent("onclick", Clicku113);
else u113.addEventListener("click", Clicku113, true);
function Clicku113(e)
{

if (true) {

	SetPanelStateu3("pd4u3");

}

}

var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'center';
var u250 = document.getElementById('u250');

var u115 = document.getElementById('u115');

u115.style.cursor = 'pointer';
if (bIE) u115.attachEvent("onclick", Clicku115);
else u115.addEventListener("click", Clicku115, true);
function Clicku115(e)
{

if (true) {

	SetPanelStateu118("pd1u118");

	MoveWidgetTo('u97',24,94);

	SetPanelVisibilityu97("hidden");

}

}
gv_vAlignTable['u115'] = 'top';
var u116 = document.getElementById('u116');

u116.style.cursor = 'pointer';
if (bIE) u116.attachEvent("onclick", Clicku116);
else u116.addEventListener("click", Clicku116, true);
function Clicku116(e)
{

if (true) {

	SetPanelStateu118("pd0u118");

	MoveWidgetTo('u97',24,160);

	SetPanelVisibilityu97("");

}

}
gv_vAlignTable['u116'] = 'top';
var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'top';
var u254 = document.getElementById('u254');

var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'center';
var u256 = document.getElementById('u256');
gv_vAlignTable['u256'] = 'top';
var u20 = document.getElementById('u20');

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u22 = document.getElementById('u22');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u24 = document.getElementById('u24');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u26 = document.getElementById('u26');

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u28 = document.getElementById('u28');

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'top';
var u206 = document.getElementById('u206');

u206.style.cursor = 'pointer';
if (bIE) u206.attachEvent("onclick", Clicku206);
else u206.addEventListener("click", Clicku206, true);
function Clicku206(e)
{

if (true) {

SetWidgetRichText('u204', PopulateVariables('<div style="text-align:right"><span style=" font-family:\'Arial\'; font-size:13px;">Price for each item:&nbsp; </span></div>'));

SetWidgetFormText('u212', PopulateVariables(''));

	SetPanelVisibilityu210("hidden");

}

}

var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'top';
var u208 = document.getElementById('u208');

u208.style.cursor = 'pointer';
if (bIE) u208.attachEvent("onclick", Clicku208);
else u208.addEventListener("click", Clicku208, true);
function Clicku208(e)
{

if (true) {

	SetPanelVisibilityu210("");

SetWidgetFormText('u212', PopulateVariables(''));

SetWidgetRichText('u204', PopulateVariables('<div style="text-align:right"><span style=" font-family:\'Arial\'; font-size:13px;">Price range per item:&nbsp; </span></div>'));

}

}

var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'top';
var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'top';
var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'top';
var u122 = document.getElementById('u122');

var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'top';
var u124 = document.getElementById('u124');

u124.style.cursor = 'pointer';
if (bIE) u124.attachEvent("onclick", Clicku124);
else u124.addEventListener("click", Clicku124, true);
function Clicku124(e)
{

if (true) {

	SetPanelStateu122("pd1u122");

	SetPanelVisibilityu97("hidden");

}

}
gv_vAlignTable['u124'] = 'top';
var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'top';
var u261 = document.getElementById('u261');
gv_vAlignTable['u261'] = 'top';
var u126 = document.getElementById('u126');

var u263 = document.getElementById('u263');
gv_vAlignTable['u263'] = 'top';
var u264 = document.getElementById('u264');

u264.style.cursor = 'pointer';
if (bIE) u264.attachEvent("onclick", Clicku264);
else u264.addEventListener("click", Clicku264, true);
function Clicku264(e)
{

if (true) {

	SetPanelVisibilityu268("hidden");

}

}

var u265 = document.getElementById('u265');
gv_vAlignTable['u265'] = 'top';
var u30 = document.getElementById('u30');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u32 = document.getElementById('u32');

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u34 = document.getElementById('u34');

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u36 = document.getElementById('u36');

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u38 = document.getElementById('u38');

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'center';
var u217 = document.getElementById('u217');

u217.style.cursor = 'pointer';
if (bIE) u217.attachEvent("onclick", Clicku217);
else u217.addEventListener("click", Clicku217, true);
function Clicku217(e)
{

if ((GetCheckState('u206')) == (true)) {

SetGlobalVariableValue('$price1', GetWidgetFormText('u205'));

SetGlobalVariableValue('$price2', PopulateVariables('0'));

SetWidgetRichText('u286', PopulateVariables('<span style=" font-family:\'Calibri\'; font-size:13px;">Displayed Price:&nbsp; $[[price1]]</span>'));

	SetPanelStateu3("pd5u3");

}
else
if ((GetCheckState('u208')) == (true)) {

SetGlobalVariableValue('$price1', GetWidgetFormText('u205'));

SetGlobalVariableValue('$price2', GetWidgetFormText('u212'));

SetWidgetRichText('u286', PopulateVariables('<span style=" font-family:\'Calibri\'; font-size:13px;">Displayed Price: $[[price1]] - $[[price2]]</span>'));

	SetPanelStateu3("pd5u3");

}

}

var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'center';
var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'top';
var u201 = document.getElementById('u201');

u201.style.cursor = 'pointer';
if (bIE) u201.attachEvent("onclick", Clicku201);
else u201.addEventListener("click", Clicku201, true);
function Clicku201(e)
{

if (true) {

	SetPanelStateu203("pd1u203");

}

}

var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'top';
var u266 = document.getElementById('u266');

u266.style.cursor = 'pointer';
if (bIE) u266.attachEvent("onclick", Clicku266);
else u266.addEventListener("click", Clicku266, true);
function Clicku266(e)
{

if (true) {

	SetPanelVisibilityu268("");

}

}

var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'top';
var u203 = document.getElementById('u203');

var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'top';
var u205 = document.getElementById('u205');

var u270 = document.getElementById('u270');
gv_vAlignTable['u270'] = 'top';
var u271 = document.getElementById('u271');
gv_vAlignTable['u271'] = 'top';
var u257 = document.getElementById('u257');

u257.style.cursor = 'pointer';
if (bIE) u257.attachEvent("onclick", Clicku257);
else u257.addEventListener("click", Clicku257, true);
function Clicku257(e)
{

if (true) {

SetWidgetFormText('u257', PopulateVariables(' '));

	SetPanelStateu233("pd0u233");

}

}

var u273 = document.getElementById('u273');

var u274 = document.getElementById('u274');

var u40 = document.getElementById('u40');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u42 = document.getElementById('u42');

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u46 = document.getElementById('u46');

u46.style.cursor = 'pointer';
if (bIE) u46.attachEvent("onclick", Clicku46);
else u46.addEventListener("click", Clicku46, true);
function Clicku46(e)
{

if (true) {

	SetPanelStateu3("pd2u3");

}

}

if (bIE) u46.attachEvent("onmouseover", MouseOveru46);
else u46.addEventListener("mouseover", MouseOveru46, true);
function MouseOveru46(e)
{
if (!IsTrueMouseOver('u46',e)) return;
if (true) {

	SetPanelVisibilityu57("");

	MoveWidgetTo('u57',100,170);

}

}

if (bIE) u46.attachEvent("onmouseout", MouseOutu46);
else u46.addEventListener("mouseout", MouseOutu46, true);
function MouseOutu46(e)
{
if (!IsTrueMouseOut('u46',e)) return;
if (true) {

	SetPanelVisibilityu57("hidden");

}

}
gv_vAlignTable['u46'] = 'top';
var u47 = document.getElementById('u47');
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

	NewWindow("Resources/Other.html#other=" + encodeURI("Open design lab"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

if (bIE) u49.attachEvent("onmouseover", MouseOveru49);
else u49.addEventListener("mouseover", MouseOveru49, true);
function MouseOveru49(e)
{
if (!IsTrueMouseOver('u49',e)) return;
if (true) {

	SetPanelVisibilityu57("");

	MoveWidgetTo('u57',100,190);

}

}

if (bIE) u49.attachEvent("onmouseout", MouseOutu49);
else u49.addEventListener("mouseout", MouseOutu49, true);
function MouseOutu49(e)
{
if (!IsTrueMouseOut('u49',e)) return;
if (true) {

	SetPanelVisibilityu57("hidden");

}

}
gv_vAlignTable['u49'] = 'top';
var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'center';
var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'top';
var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'top';
var u229 = document.getElementById('u229');

var u280 = document.getElementById('u280');
gv_vAlignTable['u280'] = 'center';
var u281 = document.getElementById('u281');

var u282 = document.getElementById('u282');
gv_vAlignTable['u282'] = 'center';
var u283 = document.getElementById('u283');
gv_vAlignTable['u283'] = 'top';
var u50 = document.getElementById('u50');

u50.style.cursor = 'pointer';
if (bIE) u50.attachEvent("onclick", Clicku50);
else u50.addEventListener("click", Clicku50, true);
function Clicku50(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Open design lab"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

if (bIE) u50.attachEvent("onmouseover", MouseOveru50);
else u50.addEventListener("mouseover", MouseOveru50, true);
function MouseOveru50(e)
{
if (!IsTrueMouseOver('u50',e)) return;
if (true) {

	SetPanelVisibilityu57("");

	MoveWidgetTo('u57',100,210);

}

}

if (bIE) u50.attachEvent("onmouseout", MouseOutu50);
else u50.addEventListener("mouseout", MouseOutu50, true);
function MouseOutu50(e)
{
if (!IsTrueMouseOut('u50',e)) return;
if (true) {

	SetPanelVisibilityu57("hidden");

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

	NewWindow("Resources/Other.html#other=" + encodeURI("Open design lab"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

if (bIE) u51.attachEvent("onmouseover", MouseOveru51);
else u51.addEventListener("mouseover", MouseOveru51, true);
function MouseOveru51(e)
{
if (!IsTrueMouseOver('u51',e)) return;
if (true) {

	SetPanelVisibilityu57("");

	MoveWidgetTo('u57',100,230);

}

}

if (bIE) u51.attachEvent("onmouseout", MouseOutu51);
else u51.addEventListener("mouseout", MouseOutu51, true);
function MouseOutu51(e)
{
if (!IsTrueMouseOut('u51',e)) return;
if (true) {

	SetPanelVisibilityu57("hidden");

}

}
gv_vAlignTable['u51'] = 'top';
var u52 = document.getElementById('u52');

u52.style.cursor = 'pointer';
if (bIE) u52.attachEvent("onclick", Clicku52);
else u52.addEventListener("click", Clicku52, true);
function Clicku52(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Open design lab"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

if (bIE) u52.attachEvent("onmouseover", MouseOveru52);
else u52.addEventListener("mouseover", MouseOveru52, true);
function MouseOveru52(e)
{
if (!IsTrueMouseOver('u52',e)) return;
if (true) {

	SetPanelVisibilityu57("");

	MoveWidgetTo('u57',100,250);

}

}

if (bIE) u52.attachEvent("onmouseout", MouseOutu52);
else u52.addEventListener("mouseout", MouseOutu52, true);
function MouseOutu52(e)
{
if (!IsTrueMouseOut('u52',e)) return;
if (true) {

	SetPanelVisibilityu57("hidden");

}

}
gv_vAlignTable['u52'] = 'top';
var u53 = document.getElementById('u53');

u53.style.cursor = 'pointer';
if (bIE) u53.attachEvent("onclick", Clicku53);
else u53.addEventListener("click", Clicku53, true);
function Clicku53(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Open design lab"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

if (bIE) u53.attachEvent("onmouseover", MouseOveru53);
else u53.addEventListener("mouseover", MouseOveru53, true);
function MouseOveru53(e)
{
if (!IsTrueMouseOver('u53',e)) return;
if (true) {

	SetPanelVisibilityu57("");

	MoveWidgetTo('u57',100,270);

}

}

if (bIE) u53.attachEvent("onmouseout", MouseOutu53);
else u53.addEventListener("mouseout", MouseOutu53, true);
function MouseOutu53(e)
{
if (!IsTrueMouseOut('u53',e)) return;
if (true) {

	SetPanelVisibilityu57("hidden");

}

}
gv_vAlignTable['u53'] = 'top';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u57 = document.getElementById('u57');

var u58 = document.getElementById('u58');

var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'center';
var u236 = document.getElementById('u236');

var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'center';
var u238 = document.getElementById('u238');

var u239 = document.getElementById('u239');
gv_vAlignTable['u239'] = 'center';
var u60 = document.getElementById('u60');

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'center';
var u62 = document.getElementById('u62');

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'center';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u65 = document.getElementById('u65');

u65.style.cursor = 'pointer';
if (bIE) u65.attachEvent("onclick", Clicku65);
else u65.addEventListener("click", Clicku65, true);
function Clicku65(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Go to the lab"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u67 = document.getElementById('u67');

var u68 = document.getElementById('u68');

u68.style.cursor = 'pointer';
if (bIE) u68.attachEvent("onclick", Clicku68);
else u68.addEventListener("click", Clicku68, true);
function Clicku68(e)
{

if (true) {

	SetPanelStateu67("pd1u67");

}

}
gv_vAlignTable['u68'] = 'top';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'top';
var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'top';
var u248 = document.getElementById('u248');

var u249 = document.getElementById('u249');
gv_vAlignTable['u249'] = 'center';
if (window.OnLoad) OnLoad();
