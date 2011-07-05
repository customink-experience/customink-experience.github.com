
var PageName = '1';
var PageId = 'pb523ba1f4ae3484caa0d0e837974aa84'
var PageUrl = '1.html'
document.title = '1';

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

SetWidgetFormText('u160', GetGlobalVariableValue('$GroupName'));

SetWidgetFormText('u159', GetGlobalVariableValue('$YourName'));

SetWidgetFormText('u158', PopulateVariables('myemail@email.com'));

SetGlobalVariableValue('$groupPrice', PopulateVariables(''));

SetGlobalVariableValue('$closeDate', PopulateVariables(''));

SetGlobalVariableValue('$paymtInfo', PopulateVariables(''));

SetGlobalVariableValue('$dlvyInfo', PopulateVariables(''));

SetGlobalVariableValue('$Welcome', PopulateVariables('I\'m organizing the order for our group.  Just enter the quantity and sizes you want before the closing date for the sign-up sheet.  Send me an email if you have any questions.'));

SetGlobalVariableValue('$yourPhone', PopulateVariables(''));

SetGlobalVariableValue('$yourEmail', GetWidgetFormText('u158'));

SetGlobalVariableValue('$contactEmail', GetWidgetFormText('u158'));

}

}

eval(GetDynamicPanelScript('u21', 1));

eval(GetDynamicPanelScript('u84', 1));

eval(GetDynamicPanelScript('u10', 2));

eval(GetDynamicPanelScript('u102', 1));

eval(GetDynamicPanelScript('u15', 1));

eval(GetDynamicPanelScript('u0', 1));

eval(GetDynamicPanelScript('u3', 2));

eval(GetDynamicPanelScript('u8', 1));

eval(GetDynamicPanelScript('u121', 2));

var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'top';
var u155 = document.getElementById('u155');

u155.style.cursor = 'pointer';
if (bIE) u155.attachEvent("onclick", Clicku155);
else u155.addEventListener("click", Clicku155, true);
function Clicku155(e)
{

if (true) {

	BringToFront("u0");

	SetPanelVisibilityu0("");

	SetPanelStateu3("pd0u3");

}

}
gv_vAlignTable['u155'] = 'top';
var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'top';
var u157 = document.getElementById('u157');

u157.style.cursor = 'pointer';
if (bIE) u157.attachEvent("onclick", Clicku157);
else u157.addEventListener("click", Clicku157, true);
function Clicku157(e)
{

if (true) {

	SetPanelVisibilityu0("");

	BringToFront("u0");

	SetPanelStateu3("pd1u3");

}

}
gv_vAlignTable['u157'] = 'top';
var u158 = document.getElementById('u158');

if (bIE) u158.attachEvent("onblur", LostFocusu158);
else u158.addEventListener("blur", LostFocusu158, true);
function LostFocusu158(e)
{

if (true) {

SetGlobalVariableValue('$yourEmail', GetWidgetFormText('u158'));

SetGlobalVariableValue('$contactEmail', GetWidgetFormText('u158'));

}

}

var u159 = document.getElementById('u159');

if (bIE) u159.attachEvent("onblur", LostFocusu159);
else u159.addEventListener("blur", LostFocusu159, true);
function LostFocusu159(e)
{

if (true) {

SetGlobalVariableValue('$YourName', GetWidgetFormText('u159'));

SetGlobalVariableValue('$contactName', GetWidgetFormText('u159'));

}

}

var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'top';
var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'top';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'top';
var u81 = document.getElementById('u81');

u81.style.cursor = 'pointer';
if (bIE) u81.attachEvent("onclick", Clicku81);
else u81.addEventListener("click", Clicku81, true);
function Clicku81(e)
{

if (true) {

	BringToFront("u102");

	SetPanelVisibilityu0("hidden");

SetWidgetRichText('u156', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">My design 3</span>'));

SetWidgetFormText('u158', GetGlobalVariableValue('$yourEmail'));

}

}

if (bIE) u81.attachEvent("onmouseover", MouseOveru81);
else u81.addEventListener("mouseover", MouseOveru81, true);
function MouseOveru81(e)
{
if (!IsTrueMouseOver('u81',e)) return;
if (true) {

	SetPanelVisibilityu84("");

	MoveWidgetTo('u84',110,320);

}

}

if (bIE) u81.attachEvent("onmouseout", MouseOutu81);
else u81.addEventListener("mouseout", MouseOutu81, true);
function MouseOutu81(e)
{
if (!IsTrueMouseOut('u81',e)) return;
if (true) {

	SetPanelVisibilityu84("hidden");

}

}
gv_vAlignTable['u81'] = 'top';
var u82 = document.getElementById('u82');

u82.style.cursor = 'pointer';
if (bIE) u82.attachEvent("onclick", Clicku82);
else u82.addEventListener("click", Clicku82, true);
function Clicku82(e)
{

if (true) {

	BringToFront("u102");

	SetPanelVisibilityu0("hidden");

SetWidgetRichText('u156', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">My design 1</span>'));

SetWidgetFormText('u158', GetGlobalVariableValue('$yourEmail'));

}

}

if (bIE) u82.attachEvent("onmouseover", MouseOveru82);
else u82.addEventListener("mouseover", MouseOveru82, true);
function MouseOveru82(e)
{
if (!IsTrueMouseOver('u82',e)) return;
if (true) {

	SetPanelVisibilityu84("");

	MoveWidgetTo('u84',110,350);

}

}

if (bIE) u82.attachEvent("onmouseout", MouseOutu82);
else u82.addEventListener("mouseout", MouseOutu82, true);
function MouseOutu82(e)
{
if (!IsTrueMouseOut('u82',e)) return;
if (true) {

	SetPanelVisibilityu84("hidden");

}

}
gv_vAlignTable['u82'] = 'top';
var u83 = document.getElementById('u83');

u83.style.cursor = 'pointer';
if (bIE) u83.attachEvent("onclick", Clicku83);
else u83.addEventListener("click", Clicku83, true);
function Clicku83(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Closes the modal and goes to the lab"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u84 = document.getElementById('u84');

var u85 = document.getElementById('u85');

var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'center';
var u87 = document.getElementById('u87');

var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'center';
var u89 = document.getElementById('u89');

var u160 = document.getElementById('u160');

if (bIE) u160.attachEvent("onfocus", Focusu160);
else u160.addEventListener("focus", Focusu160, true);
function Focusu160(e)
{

if (true) {
function waitu98d23d9632c14115b390364a44420b341() {

SetWidgetRichText('u120', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;">Tip:&nbsp; A descriptive name helps members recognize your group.&nbsp; Example:&nbsp; </span><span style=" font-family:\'Myriad Pro\'; color:#336633; font-size:11px;"> &quot;Jones H.S. Drum Line 2011&quot;</span>'));
}
setTimeout(waitu98d23d9632c14115b390364a44420b341, 300);

}

}

if (bIE) u160.attachEvent("onblur", LostFocusu160);
else u160.addEventListener("blur", LostFocusu160, true);
function LostFocusu160(e)
{

if (true) {

SetGlobalVariableValue('$GroupName', GetWidgetFormText('u160'));
function waitud440781b6fcd4a3c9e700631f2f66b0c1() {

SetWidgetRichText('u120', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;"> </span>'));
}
setTimeout(waitud440781b6fcd4a3c9e700631f2f66b0c1, 300);

}

}

var u161 = document.getElementById('u161');

u161.style.cursor = 'pointer';
if (bIE) u161.attachEvent("onclick", Clicku161);
else u161.addEventListener("click", Clicku161, true);
function Clicku161(e)
{

if (true) {

	self.location.href="2.html" + GetQuerystring();

}

}

var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'center';
var u163 = document.getElementById('u163');

var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'center';
var u165 = document.getElementById('u165');

var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'center';
var u167 = document.getElementById('u167');

var u168 = document.getElementById('u168');

var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'top';
var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'center';
var u181 = document.getElementById('u181');

var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'center';
var u91 = document.getElementById('u91');

u91.style.cursor = 'pointer';
if (bIE) u91.attachEvent("onclick", Clicku91);
else u91.addEventListener("click", Clicku91, true);
function Clicku91(e)
{

if (true) {

	SetPanelVisibilityu0("hidden");

	BringToFront("u102");

	SetPanelVisibilityu102("");

	SetPanelStateu102("pd0u102");

}

}

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'center';
var u10 = document.getElementById('u10');

var u11 = document.getElementById('u11');

if (bIE) u11.attachEvent("onblur", LostFocusu11);
else u11.addEventListener("blur", LostFocusu11, true);
function LostFocusu11(e)
{

if (true) {

SetGlobalVariableValue('$yourEmail', GetWidgetFormText('u11'));

}

}

var u12 = document.getElementById('u12');

u12.style.cursor = 'pointer';
if (bIE) u12.attachEvent("onclick", Clicku12);
else u12.addEventListener("click", Clicku12, true);
function Clicku12(e)
{

if (true) {

	SetPanelStateu10("pd1u10");

	SetPanelVisibilityu21("");

	SetPanelVisibilityu15("hidden");

SetGlobalVariableValue('$yourEmail', GetWidgetFormText('u11'));

SetWidgetRichText('u19', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">[[yourEmail]]</span>'));

}

}

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
var u15 = document.getElementById('u15');

var u16 = document.getElementById('u16');

u16.style.cursor = 'pointer';
if (bIE) u16.attachEvent("onclick", Clicku16);
else u16.addEventListener("click", Clicku16, true);
function Clicku16(e)
{

if (true) {

	SetPanelVisibilityu0("hidden");

	BringToFront("u102");

	SetPanelVisibilityu102("");

	SetPanelStateu102("pd0u102");

}

}

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u18 = document.getElementById('u18');

u18.style.cursor = 'pointer';
if (bIE) u18.attachEvent("onclick", Clicku18);
else u18.addEventListener("click", Clicku18, true);
function Clicku18(e)
{

if (true) {

	SetPanelStateu10("pd0u10");

	SetPanelVisibilityu21("hidden");

SetWidgetFormText('u11', GetGlobalVariableValue('$yourEmail'));

}

}
gv_vAlignTable['u18'] = 'top';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u172 = document.getElementById('u172');

var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'center';
var u174 = document.getElementById('u174');

var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'center';
var u176 = document.getElementById('u176');

var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'center';
var u178 = document.getElementById('u178');

var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'center';
var u111 = document.getElementById('u111');

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'center';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'top';
var u114 = document.getElementById('u114');

var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'center';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u21 = document.getElementById('u21');

var u22 = document.getElementById('u22');

var u23 = document.getElementById('u23');

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u25 = document.getElementById('u25');

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u27 = document.getElementById('u27');

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
var u29 = document.getElementById('u29');

var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'center';
var u100 = document.getElementById('u100');

var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'center';
var u102 = document.getElementById('u102');

var u103 = document.getElementById('u103');

var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'center';
var u105 = document.getElementById('u105');

var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'center';
var u107 = document.getElementById('u107');

var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'center';
var u109 = document.getElementById('u109');

var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'top';
var u128 = document.getElementById('u128');

var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'center';
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

var u93 = document.getElementById('u93');

u93.style.cursor = 'pointer';
if (bIE) u93.attachEvent("onclick", Clicku93);
else u93.addEventListener("click", Clicku93, true);
function Clicku93(e)
{

if (true) {

	SetPanelVisibilityu3("hidden");

	SetPanelVisibilityu102("");

	BringToFront("u102");

}

}

var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'center';
var u95 = document.getElementById('u95');

var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'center';
var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'top';
var u98 = document.getElementById('u98');

u98.style.cursor = 'pointer';
if (bIE) u98.attachEvent("onclick", Clicku98);
else u98.addEventListener("click", Clicku98, true);
function Clicku98(e)
{

if (true) {

	SetPanelVisibilityu3("hidden");

	SetPanelVisibilityu102("");

	BringToFront("u102");

}

}

var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'center';
var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'top';
var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'top';
var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'top';
var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'top';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u41 = document.getElementById('u41');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u43 = document.getElementById('u43');

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u45 = document.getElementById('u45');

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u47 = document.getElementById('u47');

var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u49 = document.getElementById('u49');

var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'top';
var u121 = document.getElementById('u121');

var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'top';
var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'top';
var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'top';
var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'top';
var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'top';
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

var u8 = document.getElementById('u8');

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'top';
var u179 = document.getElementById('u179');

var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u51 = document.getElementById('u51');

var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u53 = document.getElementById('u53');

var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u55 = document.getElementById('u55');

var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u57 = document.getElementById('u57');

var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u59 = document.getElementById('u59');

var u130 = document.getElementById('u130');

var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'center';
var u132 = document.getElementById('u132');

var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'center';
var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'top';
var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'top';
var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'top';
var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'top';
var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'top';
var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'top';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u61 = document.getElementById('u61');

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u65 = document.getElementById('u65');

u65.style.cursor = 'pointer';
if (bIE) u65.attachEvent("onclick", Clicku65);
else u65.addEventListener("click", Clicku65, true);
function Clicku65(e)
{

if (true) {

	BringToFront("u102");

	SetPanelVisibilityu0("hidden");

SetWidgetRichText('u156', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">My design 10</span>'));

SetWidgetFormText('u158', GetGlobalVariableValue('$yourEmail'));

}

}

if (bIE) u65.attachEvent("onmouseover", MouseOveru65);
else u65.addEventListener("mouseover", MouseOveru65, true);
function MouseOveru65(e)
{
if (!IsTrueMouseOver('u65',e)) return;
if (true) {

	SetPanelVisibilityu84("");

	MoveWidgetTo('u84',110,110);

}

}

if (bIE) u65.attachEvent("onmouseout", MouseOutu65);
else u65.addEventListener("mouseout", MouseOutu65, true);
function MouseOutu65(e)
{
if (!IsTrueMouseOut('u65',e)) return;
if (true) {

	SetPanelVisibilityu84("hidden");

}

}
gv_vAlignTable['u65'] = 'top';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'top';
var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'top';
var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'top';
var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'top';
var u144 = document.getElementById('u144');

var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'center';
var u146 = document.getElementById('u146');

var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'center';
var u148 = document.getElementById('u148');

var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'center';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'top';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'top';
var u74 = document.getElementById('u74');

u74.style.cursor = 'pointer';
if (bIE) u74.attachEvent("onclick", Clicku74);
else u74.addEventListener("click", Clicku74, true);
function Clicku74(e)
{

if (true) {

	BringToFront("u102");

	SetPanelVisibilityu0("hidden");

SetWidgetRichText('u156', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">My design 2</span>'));

SetWidgetFormText('u158', GetGlobalVariableValue('$yourEmail'));

}

}

if (bIE) u74.attachEvent("onmouseover", MouseOveru74);
else u74.addEventListener("mouseover", MouseOveru74, true);
function MouseOveru74(e)
{
if (!IsTrueMouseOver('u74',e)) return;
if (true) {

	SetPanelVisibilityu84("");

	MoveWidgetTo('u84',110,140);

}

}

if (bIE) u74.attachEvent("onmouseout", MouseOutu74);
else u74.addEventListener("mouseout", MouseOutu74, true);
function MouseOutu74(e)
{
if (!IsTrueMouseOut('u74',e)) return;
if (true) {

	SetPanelVisibilityu84("hidden");

}

}
gv_vAlignTable['u74'] = 'top';
var u75 = document.getElementById('u75');

u75.style.cursor = 'pointer';
if (bIE) u75.attachEvent("onclick", Clicku75);
else u75.addEventListener("click", Clicku75, true);
function Clicku75(e)
{

if (true) {

	BringToFront("u102");

	SetPanelVisibilityu0("hidden");

SetWidgetRichText('u156', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">My design 7</span>'));

SetWidgetFormText('u158', GetGlobalVariableValue('$yourEmail'));

}

}

if (bIE) u75.attachEvent("onmouseover", MouseOveru75);
else u75.addEventListener("mouseover", MouseOveru75, true);
function MouseOveru75(e)
{
if (!IsTrueMouseOver('u75',e)) return;
if (true) {

	SetPanelVisibilityu84("");

	MoveWidgetTo('u84',110,170);

}

}

if (bIE) u75.attachEvent("onmouseout", MouseOutu75);
else u75.addEventListener("mouseout", MouseOutu75, true);
function MouseOutu75(e)
{
if (!IsTrueMouseOut('u75',e)) return;
if (true) {

	SetPanelVisibilityu84("hidden");

}

}
gv_vAlignTable['u75'] = 'top';
var u76 = document.getElementById('u76');

u76.style.cursor = 'pointer';
if (bIE) u76.attachEvent("onclick", Clicku76);
else u76.addEventListener("click", Clicku76, true);
function Clicku76(e)
{

if (true) {

	BringToFront("u102");

	SetPanelVisibilityu0("hidden");

SetWidgetRichText('u156', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">My design 5</span>'));

SetWidgetFormText('u158', GetGlobalVariableValue('$yourEmail'));

}

}

if (bIE) u76.attachEvent("onmouseover", MouseOveru76);
else u76.addEventListener("mouseover", MouseOveru76, true);
function MouseOveru76(e)
{
if (!IsTrueMouseOver('u76',e)) return;
if (true) {

	SetPanelVisibilityu84("");

	MoveWidgetTo('u84',110,200);

}

}

if (bIE) u76.attachEvent("onmouseout", MouseOutu76);
else u76.addEventListener("mouseout", MouseOutu76, true);
function MouseOutu76(e)
{
if (!IsTrueMouseOut('u76',e)) return;
if (true) {

	SetPanelVisibilityu84("hidden");

}

}
gv_vAlignTable['u76'] = 'top';
var u77 = document.getElementById('u77');

u77.style.cursor = 'pointer';
if (bIE) u77.attachEvent("onclick", Clicku77);
else u77.addEventListener("click", Clicku77, true);
function Clicku77(e)
{

if (true) {

	BringToFront("u102");

	SetPanelVisibilityu0("hidden");

SetWidgetRichText('u156', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">My design 8</span>'));

SetWidgetFormText('u158', GetGlobalVariableValue('$yourEmail'));

}

}

if (bIE) u77.attachEvent("onmouseover", MouseOveru77);
else u77.addEventListener("mouseover", MouseOveru77, true);
function MouseOveru77(e)
{
if (!IsTrueMouseOver('u77',e)) return;
if (true) {

	SetPanelVisibilityu84("");

	MoveWidgetTo('u84',110,230);

}

}

if (bIE) u77.attachEvent("onmouseout", MouseOutu77);
else u77.addEventListener("mouseout", MouseOutu77, true);
function MouseOutu77(e)
{
if (!IsTrueMouseOut('u77',e)) return;
if (true) {

	SetPanelVisibilityu84("hidden");

}

}
gv_vAlignTable['u77'] = 'top';
var u78 = document.getElementById('u78');

u78.style.cursor = 'pointer';
if (bIE) u78.attachEvent("onclick", Clicku78);
else u78.addEventListener("click", Clicku78, true);
function Clicku78(e)
{

if (true) {

	BringToFront("u102");

	SetPanelVisibilityu0("hidden");

SetWidgetRichText('u156', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">My design 4</span>'));

SetWidgetFormText('u158', GetGlobalVariableValue('$yourEmail'));

}

}

if (bIE) u78.attachEvent("onmouseover", MouseOveru78);
else u78.addEventListener("mouseover", MouseOveru78, true);
function MouseOveru78(e)
{
if (!IsTrueMouseOver('u78',e)) return;
if (true) {

	SetPanelVisibilityu84("");

	MoveWidgetTo('u84',110,260);

}

}

if (bIE) u78.attachEvent("onmouseout", MouseOutu78);
else u78.addEventListener("mouseout", MouseOutu78, true);
function MouseOutu78(e)
{
if (!IsTrueMouseOut('u78',e)) return;
if (true) {

	SetPanelVisibilityu84("hidden");

}

}
gv_vAlignTable['u78'] = 'top';
var u79 = document.getElementById('u79');

u79.style.cursor = 'pointer';
if (bIE) u79.attachEvent("onclick", Clicku79);
else u79.addEventListener("click", Clicku79, true);
function Clicku79(e)
{

if (true) {

	BringToFront("u102");

	SetPanelVisibilityu0("hidden");

SetWidgetRichText('u156', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">My design 6</span>'));

SetWidgetFormText('u158', GetGlobalVariableValue('$yourEmail'));

}

}

if (bIE) u79.attachEvent("onmouseover", MouseOveru79);
else u79.addEventListener("mouseover", MouseOveru79, true);
function MouseOveru79(e)
{
if (!IsTrueMouseOver('u79',e)) return;
if (true) {

	SetPanelVisibilityu84("");

	MoveWidgetTo('u84',110,290);

}

}

if (bIE) u79.attachEvent("onmouseout", MouseOutu79);
else u79.addEventListener("mouseout", MouseOutu79, true);
function MouseOutu79(e)
{
if (!IsTrueMouseOut('u79',e)) return;
if (true) {

	SetPanelVisibilityu84("hidden");

}

}
gv_vAlignTable['u79'] = 'top';
var u150 = document.getElementById('u150');

var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'center';
var u152 = document.getElementById('u152');

var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'center';
if (window.OnLoad) OnLoad();
