
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

SetWidgetRichText('u451', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#003366; font-size:21px;">Customize [[GroupName]]\'s Sign-up Sheet&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span><span style=" font-family:\'Helvetica\'; color:#006699; font-size:13px;"><u>Change group name</u></span>'));

SetWidgetRichText('u457', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#CC6600; font-size:13px;">Your Sign up sheet for [[GroupName]] has been successfully created.&nbsp; Now customize it for your group.</span></b>'));

SetWidgetRichText('u447', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">[[YourName]]</span>'));

SetWidgetRichText('u448', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">[[yourEmail]]</span>'));

SetWidgetFormText('u441', GetGlobalVariableValue('$yourEmail'));

SetWidgetFormText('u442', GetGlobalVariableValue('$YourName'));

SetWidgetRichText('u487', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:11px;">Welcome [[YourName]]&nbsp; |&nbsp; Not [[YourName]]?&nbsp;&nbsp; </span><span style=" font-family:\'Helvetica\'; color:#0066CC; font-size:11px;"><u>Click Here</u></span>'));

SetGlobalVariableValue('$contactName', GetGlobalVariableValue('$YourName'));

SetGlobalVariableValue('$contactEmail', GetGlobalVariableValue('$yourEmail'));

}

}

eval(GetDynamicPanelScript('u368', 1));

eval(GetDynamicPanelScript('u474', 1));

eval(GetDynamicPanelScript('u404', 1));

eval(GetDynamicPanelScript('u57', 3));

eval(GetDynamicPanelScript('u334', 1));

eval(GetDynamicPanelScript('u440', 2));

eval(GetDynamicPanelScript('u26', 1));

eval(GetDynamicPanelScript('u374', 1));

eval(GetDynamicPanelScript('u375', 2));

eval(GetDynamicPanelScript('u237', 3));

eval(GetDynamicPanelScript('u164', 4));

eval(GetDynamicPanelScript('u340', 1));

eval(GetDynamicPanelScript('u65', 3));

eval(GetDynamicPanelScript('u345', 3));

eval(GetDynamicPanelScript('u302', 2));

eval(GetDynamicPanelScript('u450', 2));

eval(GetDynamicPanelScript('u32', 1));

eval(GetDynamicPanelScript('u36', 1));

eval(GetDynamicPanelScript('u385', 1));

eval(GetDynamicPanelScript('u389', 1));

eval(GetDynamicPanelScript('u175', 3));

eval(GetDynamicPanelScript('u280', 1));

eval(GetDynamicPanelScript('u0', 1));

eval(GetDynamicPanelScript('u358', 2));

eval(GetDynamicPanelScript('u3', 6));

eval(GetDynamicPanelScript('u40', 1));

eval(GetDynamicPanelScript('u390', 2));

eval(GetDynamicPanelScript('u9', 1));

eval(GetDynamicPanelScript('u399', 1));

eval(GetDynamicPanelScript('u433', 1));

eval(GetDynamicPanelScript('u357', 1));

var u270 = document.getElementById('u270');
gv_vAlignTable['u270'] = 'top';
var u271 = document.getElementById('u271');

var u272 = document.getElementById('u272');
gv_vAlignTable['u272'] = 'top';
var u273 = document.getElementById('u273');

var u274 = document.getElementById('u274');
gv_vAlignTable['u274'] = 'center';
var u275 = document.getElementById('u275');

u275.style.cursor = 'pointer';
if (bIE) u275.attachEvent("onclick", Clicku275);
else u275.addEventListener("click", Clicku275, true);
function Clicku275(e)
{

if (true) {

	BringToFront("u334");

	SetPanelStateu0("pd0u0");

SetWidgetFormText('u344', PopulateVariables('01/27/2011'));

SetWidgetRichText('u352', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will be available until 11:59 pm Eastern Time Thursday, January 27.&nbsp; After the close date participants will see your sheet but will not be able to sign up online. <br><br>For FREE delivery by Saturday, Feburary 12 to [[ZIP]], place your order by 11:59 pm Eastern Time on Saturday, January 29.&nbsp; </span>'));

SetGlobalVariableValue('$closeDate', PopulateVariables('01/27/2011'));

}

}

var u276 = document.getElementById('u276');
gv_vAlignTable['u276'] = 'center';
var u277 = document.getElementById('u277');
gv_vAlignTable['u277'] = 'top';
var u278 = document.getElementById('u278');

var u279 = document.getElementById('u279');
gv_vAlignTable['u279'] = 'top';
var u280 = document.getElementById('u280');

var u281 = document.getElementById('u281');

u281.style.cursor = 'pointer';
if (bIE) u281.attachEvent("onclick", Clicku281);
else u281.addEventListener("click", Clicku281, true);
function Clicku281(e)
{

if (true) {

	SetPanelStateu3("pd2u3");

}

}
gv_vAlignTable['u281'] = 'top';
var u282 = document.getElementById('u282');

var u283 = document.getElementById('u283');
gv_vAlignTable['u283'] = 'center';
var u284 = document.getElementById('u284');
gv_vAlignTable['u284'] = 'top';
var u285 = document.getElementById('u285');

u285.style.cursor = 'pointer';
if (bIE) u285.attachEvent("onclick", Clicku285);
else u285.addEventListener("click", Clicku285, true);
function Clicku285(e)
{

if (true) {

	BringToFront("u334");

}

}

var u286 = document.getElementById('u286');
gv_vAlignTable['u286'] = 'center';
var u287 = document.getElementById('u287');

var u288 = document.getElementById('u288');
gv_vAlignTable['u288'] = 'top';
var u289 = document.getElementById('u289');

var u490 = document.getElementById('u490');
gv_vAlignTable['u490'] = 'top';
var u491 = document.getElementById('u491');
gv_vAlignTable['u491'] = 'top';
var u492 = document.getElementById('u492');

u492.style.cursor = 'pointer';
if (bIE) u492.attachEvent("onclick", Clicku492);
else u492.addEventListener("click", Clicku492, true);
function Clicku492(e)
{

if (true) {

SetWidgetRichText('u492', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#FF6600; font-size:13px;">View</span></b>'));

SetWidgetRichText('u490', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006699; font-size:13px;">Customize </span>'));

SetWidgetRichText('u494', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006699; font-size:13px;">Share</span>'));

SetWidgetRichText('u496', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006699; font-size:13px;">Manage</span>'));

}

}

if (bIE) u492.attachEvent("onmouseover", MouseOveru492);
else u492.addEventListener("mouseover", MouseOveru492, true);
function MouseOveru492(e)
{
if (!IsTrueMouseOver('u492',e)) return;
if (true) {

SetWidgetRichText('u492', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#006699; font-size:13px;">View </span></b>'));

}

}

if (bIE) u492.attachEvent("onmouseout", MouseOutu492);
else u492.addEventListener("mouseout", MouseOutu492, true);
function MouseOutu492(e)
{
if (!IsTrueMouseOut('u492',e)) return;
if (true) {

SetWidgetRichText('u492', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006699; font-size:13px;">View</span>'));

}

}
gv_vAlignTable['u492'] = 'top';
var u493 = document.getElementById('u493');
gv_vAlignTable['u493'] = 'top';
var u494 = document.getElementById('u494');

u494.style.cursor = 'pointer';
if (bIE) u494.attachEvent("onclick", Clicku494);
else u494.addEventListener("click", Clicku494, true);
function Clicku494(e)
{

if (true) {

SetWidgetRichText('u494', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#FF6600; font-size:13px;">Share </span></b>'));

SetWidgetRichText('u490', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006699; font-size:13px;">Customize </span>'));

SetWidgetRichText('u492', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006699; font-size:13px;">View</span>'));

SetWidgetRichText('u496', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006699; font-size:13px;">Manage</span>'));

	self.location.href="3.html" + GetQuerystring();

}

}

if (bIE) u494.attachEvent("onmouseover", MouseOveru494);
else u494.addEventListener("mouseover", MouseOveru494, true);
function MouseOveru494(e)
{
if (!IsTrueMouseOver('u494',e)) return;
if (true) {

SetWidgetRichText('u494', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#006699; font-size:13px;">Share </span></b>'));

}

}

if (bIE) u494.attachEvent("onmouseout", MouseOutu494);
else u494.addEventListener("mouseout", MouseOutu494, true);
function MouseOutu494(e)
{
if (!IsTrueMouseOut('u494',e)) return;
if (true) {

SetWidgetRichText('u494', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006699; font-size:13px;">Share </span>'));

}

}
gv_vAlignTable['u494'] = 'top';
var u495 = document.getElementById('u495');
gv_vAlignTable['u495'] = 'top';
var u496 = document.getElementById('u496');

u496.style.cursor = 'pointer';
if (bIE) u496.attachEvent("onclick", Clicku496);
else u496.addEventListener("click", Clicku496, true);
function Clicku496(e)
{

if (true) {

SetWidgetRichText('u496', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#FF6600; font-size:13px;">Share </span></b>'));

SetWidgetRichText('u490', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006699; font-size:13px;">Customize </span>'));

SetWidgetRichText('u492', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006699; font-size:13px;">View</span>'));

SetWidgetRichText('u494', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006699; font-size:13px;">Share</span>'));

	self.location.href="Admin.html" + GetQuerystring();

}

}

if (bIE) u496.attachEvent("onmouseover", MouseOveru496);
else u496.addEventListener("mouseover", MouseOveru496, true);
function MouseOveru496(e)
{
if (!IsTrueMouseOver('u496',e)) return;
if (true) {

SetWidgetRichText('u496', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#006699; font-size:13px;">Manage</span></b>'));

}

}

if (bIE) u496.attachEvent("onmouseout", MouseOutu496);
else u496.addEventListener("mouseout", MouseOutu496, true);
function MouseOutu496(e)
{
if (!IsTrueMouseOut('u496',e)) return;
if (true) {

SetWidgetRichText('u496', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006699; font-size:13px;">Manage </span>'));

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

	SetPanelStateu57("pd0u57");

}

}
gv_vAlignTable['u100'] = 'top';
var u101 = document.getElementById('u101');

u101.style.cursor = 'pointer';
if (bIE) u101.attachEvent("onclick", Clicku101);
else u101.addEventListener("click", Clicku101, true);
function Clicku101(e)
{

if ((GetSelectedOption('u94')) == (PopulateVariables(' 2'))) {

	BringToFront("u334");

	SetPanelStateu0("pd0u0");

SetWidgetFormText('u344', PopulateVariables('01/27/2011'));

SetWidgetRichText('u352', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will be available until 11:59 pm Pacific Time January 27.&nbsp; After the close date participants will see your sheet but will not be able to sign up online. <br><br>For FREE delivery by Feburary 12 to [[ZIP]], place your order by 11:59 pm Eastern Time on January 29.&nbsp; </span>'));

SetGlobalVariableValue('$closeDate', PopulateVariables('01/27/2011'));

}
else
if (true) {

}

}

var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'center';
var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'top';
var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'top';
var u105 = document.getElementById('u105');

var u106 = document.getElementById('u106');

u106.style.cursor = 'pointer';
if (bIE) u106.attachEvent("onclick", Clicku106);
else u106.addEventListener("click", Clicku106, true);
function Clicku106(e)
{

if (true) {

	BringToFront("u334");

	SetPanelStateu0("pd0u0");

SetWidgetFormText('u73', PopulateVariables('01/16/2011'));

SetWidgetRichText('u352', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will be available until 11:59 PM PST January 16.&nbsp; After the close date participants will see your sheet but will not be able to sign up online. <br><br>For FREE delivery by January 31 to [[ZIP]], place your order by January 17.&nbsp; </span>'));

}

}

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'center';
var u108 = document.getElementById('u108');

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'center';
var u297 = document.getElementById('u297');
gv_vAlignTable['u297'] = 'top';
var u298 = document.getElementById('u298');
gv_vAlignTable['u298'] = 'top';
var u299 = document.getElementById('u299');
gv_vAlignTable['u299'] = 'top';
var u392 = document.getElementById('u392');
gv_vAlignTable['u392'] = 'center';
var u9 = document.getElementById('u9');

var u110 = document.getElementById('u110');

var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'center';
var u112 = document.getElementById('u112');

var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'center';
var u114 = document.getElementById('u114');

var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'center';
var u116 = document.getElementById('u116');

var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
var u118 = document.getElementById('u118');

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
var u32 = document.getElementById('u32');

var u33 = document.getElementById('u33');

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'top';
var u121 = document.getElementById('u121');

var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'center';
var u123 = document.getElementById('u123');

var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'center';
var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'top';
var u126 = document.getElementById('u126');
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

	SetPanelStateu164("pd0u164");

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

var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'top';
var u149 = document.getElementById('u149');

var u10 = document.getElementById('u10');

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u12 = document.getElementById('u12');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u14 = document.getElementById('u14');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'top';
var u17 = document.getElementById('u17');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'center';
var u151 = document.getElementById('u151');

u151.style.cursor = 'pointer';
if (bIE) u151.attachEvent("onclick", Clicku151);
else u151.addEventListener("click", Clicku151, true);
function Clicku151(e)
{

if (true) {

	BringToFront("u334");

	SetPanelStateu0("pd0u0");

SetWidgetFormText('u344', PopulateVariables('01/27/2011'));

SetWidgetRichText('u352', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will be available until 11:59 pm Eastern Time Thursday, January 27.&nbsp; After the close date participants will see your sheet but will not be able to sign up online. <br><br>For FREE delivery by Saturday, Feburary 12 to [[ZIP]], place your order by 11:59 pm Eastern Time on Saturday, January 29.&nbsp; </span>'));

SetGlobalVariableValue('$closeDate', PopulateVariables('01/27/2011'));

}

}

var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'center';
var u153 = document.getElementById('u153');

var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'top';
var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'top';
var u156 = document.getElementById('u156');

u156.style.cursor = 'pointer';
if (bIE) u156.attachEvent("onclick", Clicku156);
else u156.addEventListener("click", Clicku156, true);
function Clicku156(e)
{

if (true) {

	SetPanelStateu3("pd3u3");

}

}
gv_vAlignTable['u156'] = 'top';
var u157 = document.getElementById('u157');

var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'center';
var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'top';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u22 = document.getElementById('u22');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u26 = document.getElementById('u26');

var u27 = document.getElementById('u27');

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'top';
var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'top';
var u161 = document.getElementById('u161');

u161.style.cursor = 'pointer';
if (bIE) u161.attachEvent("onclick", Clicku161);
else u161.addEventListener("click", Clicku161, true);
function Clicku161(e)
{

if (true) {

	BringToFront("u334");

}

}

var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'center';
var u163 = document.getElementById('u163');

var u164 = document.getElementById('u164');

var u165 = document.getElementById('u165');

var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'center';
var u167 = document.getElementById('u167');

var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'center';
var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'top';
var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'top';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'top';
var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'top';
var u208 = document.getElementById('u208');

u208.style.cursor = 'pointer';
if (bIE) u208.attachEvent("onclick", Clicku208);
else u208.addEventListener("click", Clicku208, true);
function Clicku208(e)
{

if (true) {

	BringToFront("u334");

	SetPanelStateu0("pd0u0");

SetWidgetFormText('u344', PopulateVariables('01/27/2011'));

SetWidgetRichText('u352', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will be available until 11:59 pm Eastern Time Thursday, January 27.&nbsp; After the close date participants will see your sheet but will not be able to sign up online. <br><br>For FREE delivery by Saturday, Feburary 12 to [[ZIP]], place your order by 11:59 pm Eastern Time on Saturday, January 29.&nbsp; </span>'));

SetGlobalVariableValue('$closeDate', PopulateVariables('01/27/2011'));

}

}

var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'center';
var u36 = document.getElementById('u36');

var u37 = document.getElementById('u37');

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'top';
var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'top';
var u172 = document.getElementById('u172');

u172.style.cursor = 'pointer';
if (bIE) u172.attachEvent("onclick", Clicku172);
else u172.addEventListener("click", Clicku172, true);
function Clicku172(e)
{

if ((GetWidgetFormText('u172')) == (PopulateVariables('02/12/2011'))) {

SetWidgetFormText('u172', PopulateVariables(''));

	SetPanelStateu175("pd2u175");

	BringToFront("u164");

}
else
if (true) {

	SetPanelStateu175("pd1u175");

SetWidgetFormText('u172', PopulateVariables(''));

	BringToFront("u57");

}

}

var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'top';
var u174 = document.getElementById('u174');

var u175 = document.getElementById('u175');

var u176 = document.getElementById('u176');

if (bIE) u176.attachEvent("onblur", LostFocusu176);
else u176.addEventListener("blur", LostFocusu176, true);
function LostFocusu176(e)
{

if (true) {

SetGlobalVariableValue('$ZIP', GetWidgetFormText('u176'));

}

}

var u177 = document.getElementById('u177');

u177.style.cursor = 'pointer';
if (bIE) u177.attachEvent("onclick", Clicku177);
else u177.addEventListener("click", Clicku177, true);
function Clicku177(e)
{

if (true) {

	SetPanelStateu164("pd1u164");

SetWidgetRichText('u203', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#FF6600; font-size:16px;">Sign-Up closing dates for delivery to ZIP/Postal [[ZIP]] by Saturday, February 12</span></b>'));

}

}

var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'center';
var u179 = document.getElementById('u179');

u179.style.cursor = 'pointer';
if (bIE) u179.attachEvent("onclick", Clicku179);
else u179.addEventListener("click", Clicku179, true);
function Clicku179(e)
{

if (true) {

	BringToFront("u334");

SetWidgetRichText('u352', PopulateVariables('<br><span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will be available until 11:59 PM PST on the date you choose.&nbsp; <br>After the close date participants will see your sheet but will not be able to sign up online. For FREE shipping to most US and Canada locations, allow 2 weeks after you place your order.</span>'));

}

}

var u40 = document.getElementById('u40');

var u41 = document.getElementById('u41');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u45 = document.getElementById('u45');

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u48 = document.getElementById('u48');

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'center';
var u181 = document.getElementById('u181');

u181.style.cursor = 'pointer';
if (bIE) u181.attachEvent("onclick", Clicku181);
else u181.addEventListener("click", Clicku181, true);
function Clicku181(e)
{

if (true) {

	SetPanelStateu175("pd0u175");

SetWidgetFormText('u172', PopulateVariables('01/31/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Monday, January 31'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('01/31/2011'));

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

	SetPanelStateu175("pd2u175");

}

}

var u184 = document.getElementById('u184');

u184.style.cursor = 'pointer';
if (bIE) u184.attachEvent("onclick", Clicku184);
else u184.addEventListener("click", Clicku184, true);
function Clicku184(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Delivery should be Feb 12.&nbsp; Only Rush shipping is available on these dates."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u185 = document.getElementById('u185');

u185.style.cursor = 'pointer';
if (bIE) u185.attachEvent("onclick", Clicku185);
else u185.addEventListener("click", Clicku185, true);
function Clicku185(e)
{

if (true) {

	SetPanelStateu175("pd0u175");

SetWidgetFormText('u172', PopulateVariables('02/12/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Saturday, February 12'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('02/12/2011'));

}

}

var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'center';
var u187 = document.getElementById('u187');

u187.style.cursor = 'pointer';
if (bIE) u187.attachEvent("onclick", Clicku187);
else u187.addEventListener("click", Clicku187, true);
function Clicku187(e)
{

if (true) {

	SetPanelStateu175("pd1u175");

}

}

var u188 = document.getElementById('u188');

var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'center';
var u50 = document.getElementById('u50');

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u54 = document.getElementById('u54');

u54.style.cursor = 'pointer';
if (bIE) u54.attachEvent("onclick", Clicku54);
else u54.addEventListener("click", Clicku54, true);
function Clicku54(e)
{

if (true) {

	BringToFront("u334");

}

}

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u56 = document.getElementById('u56');

var u57 = document.getElementById('u57');

var u58 = document.getElementById('u58');

var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'center';
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
gv_vAlignTable['u196'] = 'top';
var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'top';
var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'top';
var u199 = document.getElementById('u199');

var u60 = document.getElementById('u60');

if (bIE) u60.attachEvent("onblur", LostFocusu60);
else u60.addEventListener("blur", LostFocusu60, true);
function LostFocusu60(e)
{

if (true) {

SetGlobalVariableValue('$ZIP', GetWidgetFormText('u60'));

}

}

var u61 = document.getElementById('u61');

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'center';
var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u65 = document.getElementById('u65');

var u66 = document.getElementById('u66');

u66.style.cursor = 'pointer';
if (bIE) u66.attachEvent("onclick", Clicku66);
else u66.addEventListener("click", Clicku66, true);
function Clicku66(e)
{

if (true) {

	SetPanelStateu65("pd0u65");

SetWidgetFormText('u73', PopulateVariables('01/31/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Monday, January 31'));

}

}

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u68 = document.getElementById('u68');

u68.style.cursor = 'pointer';
if (bIE) u68.attachEvent("onclick", Clicku68);
else u68.addEventListener("click", Clicku68, true);
function Clicku68(e)
{

if (true) {

	SetPanelStateu65("pd2u65");

}

}

var u69 = document.getElementById('u69');

u69.style.cursor = 'pointer';
if (bIE) u69.attachEvent("onclick", Clicku69);
else u69.addEventListener("click", Clicku69, true);
function Clicku69(e)
{

if (true) {

	SetPanelStateu65("pd0u65");

SetWidgetFormText('u73', PopulateVariables('02/12/2011'));

}

}

var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'center';
var u71 = document.getElementById('u71');

u71.style.cursor = 'pointer';
if (bIE) u71.attachEvent("onclick", Clicku71);
else u71.addEventListener("click", Clicku71, true);
function Clicku71(e)
{

if (true) {

	SetPanelStateu65("pd1u65");

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

	SetPanelStateu65("pd1u65");

	BringToFront("u57");

}

}

var u74 = document.getElementById('u74');

u74.style.cursor = 'pointer';
if (bIE) u74.attachEvent("onclick", Clicku74);
else u74.addEventListener("click", Clicku74, true);
function Clicku74(e)
{

if (true) {

	SetPanelStateu57("pd2u57");

SetWidgetRichText('u139', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#FF6600; font-size:16px;">Order dates for delivery to ZIP/Postal [[ZIP]] by Saturday, February 12</span></b>'));

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

	BringToFront("u334");

SetWidgetRichText('u352', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will be available until 11:59 pm Eastern Time on the date you choose.&nbsp; <br>After the close date participants can see your sheet but cannot sign up online. <br><br>Click &quot;Help me choose a date&quot; to check your last date to get FREE standard shipping.</span>'));

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
gv_vAlignTable['u83'] = 'top';
var u84 = document.getElementById('u84');

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'center';
var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'top';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'top';
var u88 = document.getElementById('u88');

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'center';
var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u92 = document.getElementById('u92');

var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'center';
var u94 = document.getElementById('u94');

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'top';
var u96 = document.getElementById('u96');

var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'center';
var u98 = document.getElementById('u98');

var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'top';
var u400 = document.getElementById('u400');

if (bIE) u400.attachEvent("onblur", LostFocusu400);
else u400.addEventListener("blur", LostFocusu400, true);
function LostFocusu400(e)
{

if (true) {

SetGlobalVariableValue('$dlvyInfo', GetWidgetFormText('u400'));

}

}

var u401 = document.getElementById('u401');
gv_vAlignTable['u401'] = 'top';
var u402 = document.getElementById('u402');
gv_vAlignTable['u402'] = 'top';
var u403 = document.getElementById('u403');
gv_vAlignTable['u403'] = 'top';
var u404 = document.getElementById('u404');

var u405 = document.getElementById('u405');

var u406 = document.getElementById('u406');
gv_vAlignTable['u406'] = 'center';
var u407 = document.getElementById('u407');

u407.style.cursor = 'pointer';
if (bIE) u407.attachEvent("onclick", Clicku407);
else u407.addEventListener("click", Clicku407, true);
function Clicku407(e)
{

if (true) {

	self.location.href="3.html" + GetQuerystring();

}

}

var u408 = document.getElementById('u408');
gv_vAlignTable['u408'] = 'center';
var u409 = document.getElementById('u409');

var u410 = document.getElementById('u410');

var u411 = document.getElementById('u411');
gv_vAlignTable['u411'] = 'center';
var u412 = document.getElementById('u412');

var u413 = document.getElementById('u413');
gv_vAlignTable['u413'] = 'center';
var u414 = document.getElementById('u414');

u414.style.cursor = 'pointer';
if (bIE) u414.attachEvent("onclick", Clicku414);
else u414.addEventListener("click", Clicku414, true);
function Clicku414(e)
{

if (true) {

SetWidgetRichText('u416', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:12px;">Your Welcome message will be displayed at the top of the sign-up sheet.</span>'));

SetWidgetFormText('u414', PopulateVariables(''));

}

}

if (bIE) u414.attachEvent("onblur", LostFocusu414);
else u414.addEventListener("blur", LostFocusu414, true);
function LostFocusu414(e)
{

if (true) {

SetGlobalVariableValue('$Welcome', GetWidgetFormText('u414'));

SetWidgetRichText('u416', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:12px;"> </span>'));

}

}

var u415 = document.getElementById('u415');
gv_vAlignTable['u415'] = 'top';
var u416 = document.getElementById('u416');
gv_vAlignTable['u416'] = 'top';
var u417 = document.getElementById('u417');

u417.style.cursor = 'pointer';
if (bIE) u417.attachEvent("onclick", Clicku417);
else u417.addEventListener("click", Clicku417, true);
function Clicku417(e)
{

if (true) {

	SetPanelStateu3("pd2u3");

	SetPanelStateu345("pd0u345");

;

	ScrollToWidget('u56', false,true);

	BringToFront("u0");

}

}
gv_vAlignTable['u417'] = 'top';
var u418 = document.getElementById('u418');
gv_vAlignTable['u418'] = 'top';
var u419 = document.getElementById('u419');

var u420 = document.getElementById('u420');
gv_vAlignTable['u420'] = 'center';
var u421 = document.getElementById('u421');

var u422 = document.getElementById('u422');
gv_vAlignTable['u422'] = 'center';
var u423 = document.getElementById('u423');

var u424 = document.getElementById('u424');

var u425 = document.getElementById('u425');
gv_vAlignTable['u425'] = 'center';
var u426 = document.getElementById('u426');

var u427 = document.getElementById('u427');

var u428 = document.getElementById('u428');
gv_vAlignTable['u428'] = 'center';
var u429 = document.getElementById('u429');

u429.style.cursor = 'pointer';
if (bIE) u429.attachEvent("onclick", Clicku429);
else u429.addEventListener("click", Clicku429, true);
function Clicku429(e)
{

if (true) {

	SetPanelVisibilityu433("hidden");

SetWidgetFormText('u435', PopulateVariables(' '));

SetWidgetFormText('u434', PopulateVariables(''));

SetWidgetFormText('u438', PopulateVariables(' '));

SetGlobalVariableValue('$contactName', GetGlobalVariableValue('$YourName'));

SetGlobalVariableValue('$contactEmail', GetGlobalVariableValue('$yourEmail'));

SetGlobalVariableValue('$contactPhone', GetGlobalVariableValue('$yourPhone'));

	MoveWidgetTo('u340',12,620);

}

}

var u290 = document.getElementById('u290');
gv_vAlignTable['u290'] = 'center';
var u291 = document.getElementById('u291');

var u292 = document.getElementById('u292');
gv_vAlignTable['u292'] = 'center';
var u293 = document.getElementById('u293');

var u294 = document.getElementById('u294');
gv_vAlignTable['u294'] = 'center';
var u295 = document.getElementById('u295');

var u296 = document.getElementById('u296');
gv_vAlignTable['u296'] = 'center';
var u430 = document.getElementById('u430');
gv_vAlignTable['u430'] = 'top';
var u431 = document.getElementById('u431');

u431.style.cursor = 'pointer';
if (bIE) u431.attachEvent("onclick", Clicku431);
else u431.addEventListener("click", Clicku431, true);
function Clicku431(e)
{

if (true) {

	SetPanelVisibilityu433("");

	MoveWidgetTo('u340',12,780);

}

}

var u432 = document.getElementById('u432');
gv_vAlignTable['u432'] = 'top';
var u433 = document.getElementById('u433');

var u434 = document.getElementById('u434');

if (bIE) u434.attachEvent("onblur", LostFocusu434);
else u434.addEventListener("blur", LostFocusu434, true);
function LostFocusu434(e)
{

if ((GetCheckState('u431')) == (true)) {

SetGlobalVariableValue('$contactName', GetWidgetFormText('u434'));

}

}

var u435 = document.getElementById('u435');

if (bIE) u435.attachEvent("onblur", LostFocusu435);
else u435.addEventListener("blur", LostFocusu435, true);
function LostFocusu435(e)
{

if ((GetCheckState('u431')) == (true)) {

SetGlobalVariableValue('$contactEmail', GetWidgetFormText('u435'));

}

}

var u436 = document.getElementById('u436');
gv_vAlignTable['u436'] = 'top';
var u437 = document.getElementById('u437');
gv_vAlignTable['u437'] = 'top';
var u438 = document.getElementById('u438');

if (bIE) u438.attachEvent("onblur", LostFocusu438);
else u438.addEventListener("blur", LostFocusu438, true);
function LostFocusu438(e)
{

if ((GetCheckState('u431')) == (true)) {

SetGlobalVariableValue('$contactPhone', GetWidgetFormText('u438'));

}

}

var u439 = document.getElementById('u439');
gv_vAlignTable['u439'] = 'top';
var u440 = document.getElementById('u440');

var u441 = document.getElementById('u441');

var u442 = document.getElementById('u442');

var u443 = document.getElementById('u443');

u443.style.cursor = 'pointer';
if (bIE) u443.attachEvent("onclick", Clicku443);
else u443.addEventListener("click", Clicku443, true);
function Clicku443(e)
{

if (true) {

	SetPanelStateu440("pd1u440");

SetGlobalVariableValue('$YourName', GetWidgetFormText('u442'));

SetGlobalVariableValue('$yourEmail', GetWidgetFormText('u441'));

SetWidgetRichText('u447', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">[[YourName]]</span>'));

SetWidgetRichText('u448', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">[[yourEmail]]</span>'));

}

}

var u444 = document.getElementById('u444');
gv_vAlignTable['u444'] = 'center';
var u445 = document.getElementById('u445');
gv_vAlignTable['u445'] = 'top';
var u446 = document.getElementById('u446');
gv_vAlignTable['u446'] = 'top';
var u447 = document.getElementById('u447');

u447.style.cursor = 'pointer';
if (bIE) u447.attachEvent("onclick", Clicku447);
else u447.addEventListener("click", Clicku447, true);
function Clicku447(e)
{

if (true) {

	SetPanelStateu440("pd0u440");

SetWidgetFormText('u441', GetGlobalVariableValue('$yourEmail'));

SetWidgetFormText('u442', GetGlobalVariableValue('$YourName'));

}

}
gv_vAlignTable['u447'] = 'top';
var u448 = document.getElementById('u448');

u448.style.cursor = 'pointer';
if (bIE) u448.attachEvent("onclick", Clicku448);
else u448.addEventListener("click", Clicku448, true);
function Clicku448(e)
{

if (true) {

	SetPanelStateu440("pd0u440");

SetWidgetFormText('u441', GetGlobalVariableValue('$yourEmail'));

SetWidgetFormText('u442', GetGlobalVariableValue('$YourName'));

}

}
gv_vAlignTable['u448'] = 'top';
var u449 = document.getElementById('u449');

u449.style.cursor = 'pointer';
if (bIE) u449.attachEvent("onclick", Clicku449);
else u449.addEventListener("click", Clicku449, true);
function Clicku449(e)
{

if (true) {

	SetPanelStateu440("pd0u440");

	MoveWidgetTo('u474',53,385);

}

}
gv_vAlignTable['u449'] = 'top';
var u450 = document.getElementById('u450');

var u451 = document.getElementById('u451');

u451.style.cursor = 'pointer';
if (bIE) u451.attachEvent("onclick", Clicku451);
else u451.addEventListener("click", Clicku451, true);
function Clicku451(e)
{

if (true) {

	SetPanelStateu450("pd1u450");

SetWidgetFormText('u453', GetGlobalVariableValue('$GroupName'));

}

}
gv_vAlignTable['u451'] = 'top';
var u452 = document.getElementById('u452');
gv_vAlignTable['u452'] = 'top';
var u453 = document.getElementById('u453');

var u454 = document.getElementById('u454');

u454.style.cursor = 'pointer';
if (bIE) u454.attachEvent("onclick", Clicku454);
else u454.addEventListener("click", Clicku454, true);
function Clicku454(e)
{

if (true) {

	SetPanelStateu450("pd0u450");

SetGlobalVariableValue('$GroupName', GetWidgetFormText('u453'));

SetWidgetRichText('u451', PopulateVariables('<span style=" font-family:\'Myriad Pro\'; color:#003366; font-size:21px;">Customize [[GroupName]]\'s Sign-up Sheet</span><span style=" font-family:\'Helvetica\'; color:#003366; font-size:21px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span><span style=" font-family:\'Helvetica\'; color:#006699; font-size:12px;">Change group name</span>'));

}

}

var u455 = document.getElementById('u455');
gv_vAlignTable['u455'] = 'center';
var u456 = document.getElementById('u456');
gv_vAlignTable['u456'] = 'top';
var u457 = document.getElementById('u457');
gv_vAlignTable['u457'] = 'top';
var u458 = document.getElementById('u458');
gv_vAlignTable['u458'] = 'top';
var u459 = document.getElementById('u459');

var u460 = document.getElementById('u460');
gv_vAlignTable['u460'] = 'top';
var u461 = document.getElementById('u461');
gv_vAlignTable['u461'] = 'top';
var u462 = document.getElementById('u462');
gv_vAlignTable['u462'] = 'top';
var u463 = document.getElementById('u463');

var u464 = document.getElementById('u464');
gv_vAlignTable['u464'] = 'center';
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

var u474 = document.getElementById('u474');

var u475 = document.getElementById('u475');

var u476 = document.getElementById('u476');

u476.style.cursor = 'pointer';
if (bIE) u476.attachEvent("onclick", Clicku476);
else u476.addEventListener("click", Clicku476, true);
function Clicku476(e)
{

if (true) {

	SetPanelStateu440("pd0u440");

SetWidgetFormText('u441', GetGlobalVariableValue('$yourEmail'));

SetWidgetFormText('u442', GetGlobalVariableValue('$YourName'));

}

}
gv_vAlignTable['u476'] = 'top';
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

u487.style.cursor = 'pointer';
if (bIE) u487.attachEvent("onclick", Clicku487);
else u487.addEventListener("click", Clicku487, true);
function Clicku487(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Display participant sheet"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}
gv_vAlignTable['u487'] = 'top';
var u488 = document.getElementById('u488');

var u489 = document.getElementById('u489');
gv_vAlignTable['u489'] = 'center';
var u204 = document.getElementById('u204');

var u300 = document.getElementById('u300');
gv_vAlignTable['u300'] = 'top';
var u301 = document.getElementById('u301');
gv_vAlignTable['u301'] = 'top';
var u302 = document.getElementById('u302');

var u303 = document.getElementById('u303');
gv_vAlignTable['u303'] = 'top';
var u304 = document.getElementById('u304');

var u305 = document.getElementById('u305');

var u306 = document.getElementById('u306');
gv_vAlignTable['u306'] = 'top';
var u307 = document.getElementById('u307');

var u308 = document.getElementById('u308');
gv_vAlignTable['u308'] = 'top';
var u309 = document.getElementById('u309');

var u310 = document.getElementById('u310');
gv_vAlignTable['u310'] = 'top';
var u311 = document.getElementById('u311');

var u312 = document.getElementById('u312');
gv_vAlignTable['u312'] = 'top';
var u313 = document.getElementById('u313');

var u314 = document.getElementById('u314');
gv_vAlignTable['u314'] = 'top';
var u315 = document.getElementById('u315');

var u316 = document.getElementById('u316');
gv_vAlignTable['u316'] = 'top';
var u317 = document.getElementById('u317');

var u318 = document.getElementById('u318');
gv_vAlignTable['u318'] = 'top';
var u319 = document.getElementById('u319');

var u320 = document.getElementById('u320');
gv_vAlignTable['u320'] = 'top';
var u321 = document.getElementById('u321');

u321.style.cursor = 'pointer';
if (bIE) u321.attachEvent("onclick", Clicku321);
else u321.addEventListener("click", Clicku321, true);
function Clicku321(e)
{

if (true) {

	BringToFront("u334");

    var reload = ParentWindowNeedsReload("http://www.customink.com/cink/create/pricing/quickquote.jsp?styleno=04600");
	top.opener.window.location.href = "http://www.customink.com/cink/create/pricing/quickquote.jsp?styleno=04600" + "";
    if (reload) {
        top.opener.window.location = "Resources/reload.html#" + encodeURI(top.opener.window.location.href);
    }

}

}
gv_vAlignTable['u321'] = 'top';
var u322 = document.getElementById('u322');
gv_vAlignTable['u322'] = 'top';
var u323 = document.getElementById('u323');
gv_vAlignTable['u323'] = 'top';
var u324 = document.getElementById('u324');
gv_vAlignTable['u324'] = 'top';
var u325 = document.getElementById('u325');

u325.style.cursor = 'pointer';
if (bIE) u325.attachEvent("onclick", Clicku325);
else u325.addEventListener("click", Clicku325, true);
function Clicku325(e)
{

if (true) {

	BringToFront("u334");

    var reload = ParentWindowNeedsReload("http://www.customink.com/cink/create/pricing/quickquote.jsp?styleno=04600");
	top.opener.window.location.href = "http://www.customink.com/cink/create/pricing/quickquote.jsp?styleno=04600" + "";
    if (reload) {
        top.opener.window.location = "Resources/reload.html#" + encodeURI(top.opener.window.location.href);
    }

}

}
gv_vAlignTable['u325'] = 'top';
var u326 = document.getElementById('u326');
gv_vAlignTable['u326'] = 'top';
var u327 = document.getElementById('u327');

u327.style.cursor = 'pointer';
if (bIE) u327.attachEvent("onclick", Clicku327);
else u327.addEventListener("click", Clicku327, true);
function Clicku327(e)
{

if (true) {

	SetPanelStateu302("pd1u302");

}

}
gv_vAlignTable['u327'] = 'top';
var u328 = document.getElementById('u328');

u328.style.cursor = 'pointer';
if (bIE) u328.attachEvent("onclick", Clicku328);
else u328.addEventListener("click", Clicku328, true);
function Clicku328(e)
{

if (true) {

	SetPanelStateu302("pd0u302");

}

}
gv_vAlignTable['u328'] = 'top';
var u329 = document.getElementById('u329');

u329.style.cursor = 'pointer';
if (bIE) u329.attachEvent("onclick", Clicku329);
else u329.addEventListener("click", Clicku329, true);
function Clicku329(e)
{

if (true) {

	BringToFront("u334");

}

}

var u330 = document.getElementById('u330');
gv_vAlignTable['u330'] = 'center';
var u331 = document.getElementById('u331');

var u332 = document.getElementById('u332');

var u333 = document.getElementById('u333');
gv_vAlignTable['u333'] = 'center';
var u334 = document.getElementById('u334');

var u335 = document.getElementById('u335');

var u336 = document.getElementById('u336');
gv_vAlignTable['u336'] = 'center';
var u337 = document.getElementById('u337');

var u338 = document.getElementById('u338');
gv_vAlignTable['u338'] = 'center';
var u339 = document.getElementById('u339');
gv_vAlignTable['u339'] = 'top';
var u340 = document.getElementById('u340');

var u341 = document.getElementById('u341');

var u342 = document.getElementById('u342');
gv_vAlignTable['u342'] = 'center';
var u343 = document.getElementById('u343');
gv_vAlignTable['u343'] = 'top';
var u344 = document.getElementById('u344');

u344.style.cursor = 'pointer';
if (bIE) u344.attachEvent("onclick", Clicku344);
else u344.addEventListener("click", Clicku344, true);
function Clicku344(e)
{

if ((GetCheckState('u354')) == (false)) {

SetWidgetFormText('u344', PopulateVariables(''));

SetWidgetRichText('u352', PopulateVariables('<span style=" font-family:\'Arial\'; font-size:13px;"> </span>'));

	BringToFront("u345");

	SetPanelStateu345("pd1u345");

}
else
if (true) {

SetWidgetFormText('u344', PopulateVariables('mm/dd/yyyy'));

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck &quot;Leave it open until I close it&quot; before selecting an event date."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

if (bIE) u344.attachEvent("onblur", LostFocusu344);
else u344.addEventListener("blur", LostFocusu344, true);
function LostFocusu344(e)
{

if (((GetCheckState('u354')) == (false)) && (((GetWidgetFormText('u344')) != (PopulateVariables('mm/dd/yyyy'))) && ((GetWidgetFormText('u344')) != (PopulateVariables(''))))) {

SetGlobalVariableValue('$eventDate', GetWidgetFormText('u344'));

}

}

var u345 = document.getElementById('u345');

var u346 = document.getElementById('u346');

u346.style.cursor = 'pointer';
if (bIE) u346.attachEvent("onclick", Clicku346);
else u346.addEventListener("click", Clicku346, true);
function Clicku346(e)
{

if ((GetCheckState('u354')) == (false)) {

	SetPanelStateu345("pd0u345");

SetWidgetFormText('u344', PopulateVariables('01/27/2011'));

SetWidgetRichText('u352', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on 1/27/2011 at 11:59pm PST.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

SetGlobalVariableValue('$closeDate', PopulateVariables('Thursday, January 27'));

}
else
if ((GetCheckState('u354')) == (true)) {

	SetPanelStateu345("pd0u345");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck &quot;Leave it open until I close it&quot; before selecting a date."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u347 = document.getElementById('u347');
gv_vAlignTable['u347'] = 'center';
var u348 = document.getElementById('u348');

u348.style.cursor = 'pointer';
if (bIE) u348.attachEvent("onclick", Clicku348);
else u348.addEventListener("click", Clicku348, true);
function Clicku348(e)
{

if (true) {

	SetPanelStateu345("pd2u345");

}

}

var u349 = document.getElementById('u349');

u349.style.cursor = 'pointer';
if (bIE) u349.attachEvent("onclick", Clicku349);
else u349.addEventListener("click", Clicku349, true);
function Clicku349(e)
{

if ((GetCheckState('u354')) == (false)) {

	SetPanelStateu345("pd0u345");

SetWidgetFormText('u344', PopulateVariables('02/12/2011'));

SetWidgetRichText('u352', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will end on 2/12/2011 at 11:59pm Eastern Time.&nbsp; After that date, participants will see the sheet but will not be able to sign up online.&nbsp; </span>'));

}
else
if (true) {

	SetPanelStateu345("pd0u345");

	NewWindow("Resources/Other.html#other=" + encodeURI("Please uncheck &quot;I don't know&quot; before selecting a date."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u350 = document.getElementById('u350');
gv_vAlignTable['u350'] = 'center';
var u351 = document.getElementById('u351');

u351.style.cursor = 'pointer';
if (bIE) u351.attachEvent("onclick", Clicku351);
else u351.addEventListener("click", Clicku351, true);
function Clicku351(e)
{

if (true) {

	SetPanelStateu345("pd1u345");

}

}

var u352 = document.getElementById('u352');
gv_vAlignTable['u352'] = 'top';
var u353 = document.getElementById('u353');
gv_vAlignTable['u353'] = 'top';
var u354 = document.getElementById('u354');

u354.style.cursor = 'pointer';
if (bIE) u354.attachEvent("onclick", Clicku354);
else u354.addEventListener("click", Clicku354, true);
function Clicku354(e)
{

if ((GetCheckState('u354')) == (true)) {

;

SetWidgetFormText('u344', PopulateVariables('mm/dd/yyyy'));

SetWidgetRichText('u352', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Place your order at least 2 weeks in advance of your delivery date to get FREE SHIPPING in the 48 US states and Canada.</span>'));

	SetPanelStateu345("pd0u345");

}
else
if ((GetWidgetFormText('u344')) != (PopulateVariables('mm/dd/yyyy'))) {

SetWidgetRichText('u352', PopulateVariables('<span style=" font-family:\'Arial\'; font-size:13px;">The last day to order for FREE SHIPPING guaranteed by [delivery date] is [order date].&nbsp; </span>'));

}
else
if (true) {

SetWidgetRichText('u352', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Place your order at least 2 weeks in advance of your delivery date to get FREE SHIPPING in the 48 US states and Canada.</span>'));

}

}

if (bIE) u354.attachEvent("onblur", LostFocusu354);
else u354.addEventListener("blur", LostFocusu354, true);
function LostFocusu354(e)
{

if (true) {

SetWidgetRichText('u352', PopulateVariables(''));

}

}

var u355 = document.getElementById('u355');
gv_vAlignTable['u355'] = 'top';
var u356 = document.getElementById('u356');
gv_vAlignTable['u356'] = 'top';
var u357 = document.getElementById('u357');

var u358 = document.getElementById('u358');

var u359 = document.getElementById('u359');

var u360 = document.getElementById('u360');
gv_vAlignTable['u360'] = 'center';
var u361 = document.getElementById('u361');

var u362 = document.getElementById('u362');
gv_vAlignTable['u362'] = 'center';
var u363 = document.getElementById('u363');
gv_vAlignTable['u363'] = 'top';
var u364 = document.getElementById('u364');

u364.style.cursor = 'pointer';
if (bIE) u364.attachEvent("onclick", Clicku364);
else u364.addEventListener("click", Clicku364, true);
function Clicku364(e)
{

if (true) {

	SetPanelVisibilityu368("hidden");

	SetPanelStateu358("pd0u358");

	MoveWidgetTo('u374',0,73);

}

}

var u365 = document.getElementById('u365');
gv_vAlignTable['u365'] = 'top';
var u366 = document.getElementById('u366');

u366.style.cursor = 'pointer';
if (bIE) u366.attachEvent("onclick", Clicku366);
else u366.addEventListener("click", Clicku366, true);
function Clicku366(e)
{

if (true) {

	SetPanelVisibilityu368("");

	SetPanelStateu358("pd1u358");

	MoveWidgetTo('u374',0,120);

}

}

var u367 = document.getElementById('u367');
gv_vAlignTable['u367'] = 'top';
var u368 = document.getElementById('u368');

var u369 = document.getElementById('u369');
gv_vAlignTable['u369'] = 'top';
var u370 = document.getElementById('u370');

if (bIE) u370.attachEvent("onfocus", Focusu370);
else u370.addEventListener("focus", Focusu370, true);
function Focusu370(e)
{

if (true) {

SetGlobalVariableValue('$groupPrice', PopulateVariables(''));

}

}

if (bIE) u370.attachEvent("onblur", LostFocusu370);
else u370.addEventListener("blur", LostFocusu370, true);
function LostFocusu370(e)
{

if (true) {

SetGlobalVariableValue('$groupPrice', GetWidgetFormText('u370'));

}

}

var u371 = document.getElementById('u371');
gv_vAlignTable['u371'] = 'top';
var u372 = document.getElementById('u372');

u372.style.cursor = 'pointer';
if (bIE) u372.attachEvent("onclick", Clicku372);
else u372.addEventListener("click", Clicku372, true);
function Clicku372(e)
{

if (true) {

	BringToFront("u0");

	SetPanelStateu3("pd4u3");

SetWidgetRichText('u303', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">Sample prices for your design with FREE 2 week delivery:</span></b>'));

	ScrollToWidget('u331', false,true);

}

}
gv_vAlignTable['u372'] = 'top';
var u373 = document.getElementById('u373');
gv_vAlignTable['u373'] = 'top';
var u374 = document.getElementById('u374');

var u375 = document.getElementById('u375');

var u376 = document.getElementById('u376');

var u377 = document.getElementById('u377');
gv_vAlignTable['u377'] = 'center';
var u378 = document.getElementById('u378');

var u379 = document.getElementById('u379');
gv_vAlignTable['u379'] = 'center';
var u380 = document.getElementById('u380');

u380.style.cursor = 'pointer';
if (bIE) u380.attachEvent("onclick", Clicku380);
else u380.addEventListener("click", Clicku380, true);
function Clicku380(e)
{

if (true) {

	SetPanelStateu375("pd0u375");

SetGlobalVariableValue('$paymtInfo', PopulateVariables(''));

SetWidgetFormText('u387', PopulateVariables(''));

	MoveWidgetTo('u389',0,98);

	SetPanelVisibilityu385("hidden");

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

if (true) {

	SetPanelStateu375("pd1u375");

	SetPanelVisibilityu385("");

	MoveWidgetTo('u389',0,170);

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

if (bIE) u387.attachEvent("onblur", LostFocusu387);
else u387.addEventListener("blur", LostFocusu387, true);
function LostFocusu387(e)
{

if (true) {

SetGlobalVariableValue('$paymtInfo', GetWidgetFormText('u387'));

}

}

var u388 = document.getElementById('u388');
gv_vAlignTable['u388'] = 'top';
var u389 = document.getElementById('u389');

var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'center';
var u201 = document.getElementById('u201');

var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'center';
var u390 = document.getElementById('u390');

var u391 = document.getElementById('u391');

var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'center';
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

	SetPanelVisibilityu399("hidden");

SetGlobalVariableValue('$dlvyInfo', PopulateVariables(''));

SetWidgetFormText('u400', PopulateVariables(' '));

	SetPanelStateu390("pd0u390");

	MoveWidgetTo('u404',0,85);

}

}

var u396 = document.getElementById('u396');
gv_vAlignTable['u396'] = 'top';
var u397 = document.getElementById('u397');

u397.style.cursor = 'pointer';
if (bIE) u397.attachEvent("onclick", Clicku397);
else u397.addEventListener("click", Clicku397, true);
function Clicku397(e)
{

if (true) {

	SetPanelVisibilityu399("");

	SetPanelStateu390("pd1u390");

	MoveWidgetTo('u404',0,180);

}

}

var u398 = document.getElementById('u398');
gv_vAlignTable['u398'] = 'top';
var u399 = document.getElementById('u399');

var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'top';
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

	BringToFront("u334");

SetWidgetRichText('u352', PopulateVariables('<br><span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will be available until 11:59 PM EasternTime on the date you choose.&nbsp; <br>After the close date participants will see your sheet but will not be able to sign up online. For FREE shipping to most US and Canada locations, allow 2 weeks after you place your order.</span>'));

}

}

var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'center';
var u216 = document.getElementById('u216');

u216.style.cursor = 'pointer';
if (bIE) u216.attachEvent("onclick", Clicku216);
else u216.addEventListener("click", Clicku216, true);
function Clicku216(e)
{

if (true) {

	SetPanelStateu164("pd0u164");

}

}
gv_vAlignTable['u216'] = 'top';
var u217 = document.getElementById('u217');

u217.style.cursor = 'pointer';
if (bIE) u217.attachEvent("onclick", Clicku217);
else u217.addEventListener("click", Clicku217, true);
function Clicku217(e)
{

if (true) {

	BringToFront("u334");

	SetPanelStateu0("pd0u0");

SetWidgetFormText('u344', PopulateVariables('02/05/2011'));

SetWidgetRichText('u352', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will be available until 11:59 pm Eastern Time February 5.&nbsp; After the close date participants will see your sheet but will not be able to sign up online. <br><br>For RUSH delivery by Feburary 12 to [[ZIP]], place your order by 11:59 pm Eastern Time on February 7.&nbsp; Add 25% to your cost.</span>'));

SetGlobalVariableValue('$closeDate', PopulateVariables('02/05/2011'));

}

}

var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'center';
var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'top';
var u220 = document.getElementById('u220');

var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'center';
var u222 = document.getElementById('u222');

var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'center';
var u224 = document.getElementById('u224');

var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'center';
var u226 = document.getElementById('u226');

var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'center';
var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'top';
var u229 = document.getElementById('u229');

var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'center';
var u231 = document.getElementById('u231');

var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'center';
var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'top';
var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'top';
var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'top';
var u236 = document.getElementById('u236');

u236.style.cursor = 'pointer';
if (bIE) u236.attachEvent("onclick", Clicku236);
else u236.addEventListener("click", Clicku236, true);
function Clicku236(e)
{

if ((GetWidgetFormText('u236')) == (PopulateVariables('02/12/2011'))) {

SetWidgetFormText('u236', PopulateVariables(''));

	SetPanelStateu237("pd2u237");

	BringToFront("u164");

}
else
if (true) {

	SetPanelStateu237("pd1u237");

SetWidgetFormText('u236', PopulateVariables(''));

	BringToFront("u57");

}

}

var u237 = document.getElementById('u237');

var u238 = document.getElementById('u238');

if (bIE) u238.attachEvent("onblur", LostFocusu238);
else u238.addEventListener("blur", LostFocusu238, true);
function LostFocusu238(e)
{

if (true) {

SetGlobalVariableValue('$ZIP', GetWidgetFormText('u238'));

}

}

var u239 = document.getElementById('u239');

u239.style.cursor = 'pointer';
if (bIE) u239.attachEvent("onclick", Clicku239);
else u239.addEventListener("click", Clicku239, true);
function Clicku239(e)
{

if (true) {

	SetPanelStateu164("pd1u164");

SetWidgetRichText('u203', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#FF6600; font-size:16px;">Sign-Up closing dates for delivery to ZIP/Postal [[ZIP]] by Saturday, February 12</span></b>'));

}

}

var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'center';
var u241 = document.getElementById('u241');

u241.style.cursor = 'pointer';
if (bIE) u241.attachEvent("onclick", Clicku241);
else u241.addEventListener("click", Clicku241, true);
function Clicku241(e)
{

if (true) {

	BringToFront("u334");

SetWidgetRichText('u352', PopulateVariables('<br><span style=" font-family:\'Helvetica\'; color:#006633; font-size:12px;">Online sign-up will be available until 11:59 PM PST on the date you choose.&nbsp; <br>After the close date participants will see your sheet but will not be able to sign up online. For FREE shipping to most US and Canada locations, allow 2 weeks after you place your order.</span>'));

}

}

var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'center';
var u243 = document.getElementById('u243');

u243.style.cursor = 'pointer';
if (bIE) u243.attachEvent("onclick", Clicku243);
else u243.addEventListener("click", Clicku243, true);
function Clicku243(e)
{

if (true) {

	SetPanelStateu237("pd0u237");

SetWidgetFormText('u236', PopulateVariables('01/31/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Monday, January 31'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('01/31/2011'));

}

}

var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'center';
var u245 = document.getElementById('u245');

u245.style.cursor = 'pointer';
if (bIE) u245.attachEvent("onclick", Clicku245);
else u245.addEventListener("click", Clicku245, true);
function Clicku245(e)
{

if (true) {

	SetPanelStateu237("pd2u237");

}

}

var u246 = document.getElementById('u246');

u246.style.cursor = 'pointer';
if (bIE) u246.attachEvent("onclick", Clicku246);
else u246.addEventListener("click", Clicku246, true);
function Clicku246(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Delivery should be Feb 12.&nbsp; Only Rush shipping is available on these dates."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u247 = document.getElementById('u247');

u247.style.cursor = 'pointer';
if (bIE) u247.attachEvent("onclick", Clicku247);
else u247.addEventListener("click", Clicku247, true);
function Clicku247(e)
{

if (true) {

	SetPanelStateu237("pd0u237");

SetWidgetFormText('u236', PopulateVariables('02/12/2011'));

SetGlobalVariableValue('$eventDate', PopulateVariables('Saturday, February 12'));

SetGlobalVariableValue('$dlvryDate', PopulateVariables('02/12/2011'));

}

}

var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'center';
var u249 = document.getElementById('u249');

u249.style.cursor = 'pointer';
if (bIE) u249.attachEvent("onclick", Clicku249);
else u249.addEventListener("click", Clicku249, true);
function Clicku249(e)
{

if (true) {

	SetPanelStateu237("pd1u237");

}

}

var u250 = document.getElementById('u250');

var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'center';
var u252 = document.getElementById('u252');

var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'center';
var u254 = document.getElementById('u254');

var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'center';
var u256 = document.getElementById('u256');
gv_vAlignTable['u256'] = 'top';
var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'top';
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

u7.style.cursor = 'pointer';
if (bIE) u7.attachEvent("onclick", Clicku7);
else u7.addEventListener("click", Clicku7, true);
function Clicku7(e)
{

if (true) {

	BringToFront("u334");

}

}

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'top';
var u261 = document.getElementById('u261');
gv_vAlignTable['u261'] = 'top';
var u262 = document.getElementById('u262');
gv_vAlignTable['u262'] = 'top';
var u263 = document.getElementById('u263');
gv_vAlignTable['u263'] = 'top';
var u264 = document.getElementById('u264');

u264.style.cursor = 'pointer';
if (bIE) u264.attachEvent("onclick", Clicku264);
else u264.addEventListener("click", Clicku264, true);
function Clicku264(e)
{

if (true) {

	SetPanelStateu164("pd0u164");

}

}
gv_vAlignTable['u264'] = 'top';
var u265 = document.getElementById('u265');
gv_vAlignTable['u265'] = 'top';
var u266 = document.getElementById('u266');
gv_vAlignTable['u266'] = 'top';
var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'top';
var u268 = document.getElementById('u268');

var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'center';
if (window.OnLoad) OnLoad();
