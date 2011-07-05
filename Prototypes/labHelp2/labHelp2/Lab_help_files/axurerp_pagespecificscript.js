
var PageName = 'Lab help';
var PageId = 'p6a238be9ce214d28935aeed7554dca5b'
var PageUrl = 'Lab_help.html'
document.title = 'Lab help';

if (top.location != self.location)
{
	if (parent.HandleMainFrameChanged) {
		parent.HandleMainFrameChanged();
	}
}

var $OnLoadVariable = '';

var $tabSelected = '';

var $pathName = '';

var $IIPrice = '';

var $VAtax = '';

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
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&tabSelected=' + encodeURIComponent($tabSelected) + '&pathName=' + encodeURIComponent($pathName) + '&IIPrice=' + encodeURIComponent($IIPrice) + '&VAtax=' + encodeURIComponent($VAtax) + '&CSUM=1';
}

function PopulateVariables(value) {
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[tabSelected\]\]/g, $tabSelected);
  value = value.replace(/\[\[pathName\]\]/g, $pathName);
  value = value.replace(/\[\[IIPrice\]\]/g, $IIPrice);
  value = value.replace(/\[\[VAtax\]\]/g, $VAtax);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  return value;
}

function OnLoad(e) {

}

eval(GetDynamicPanelScript('u112', 10));

eval(GetDynamicPanelScript('u289', 2));

eval(GetDynamicPanelScript('u278', 2));

eval(GetDynamicPanelScript('u217', 2));

eval(GetDynamicPanelScript('u300', 2));

eval(GetDynamicPanelScript('u70', 4));

eval(GetDynamicPanelScript('u163', 2));

eval(GetDynamicPanelScript('u0', 1));

eval(GetDynamicPanelScript('u267', 2));

eval(GetDynamicPanelScript('u3', 9));

eval(GetDynamicPanelScript('u153', 2));

eval(GetDynamicPanelScript('u246', 6));

eval(GetDynamicPanelScript('u256', 2));

eval(GetDynamicPanelScript('u207', 2));

eval(GetDynamicPanelScript('u141', 2));

eval(GetDynamicPanelScript('u237', 1));

eval(GetDynamicPanelScript('u336', 1));

eval(GetDynamicPanelScript('u354', 9));

eval(GetDynamicPanelScript('u43', 1));

eval(GetDynamicPanelScript('u195', 2));

eval(GetDynamicPanelScript('u238', 1));

eval(GetDynamicPanelScript('u311', 2));

var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'top';
var u231 = document.getElementById('u231');

var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'top';
var u233 = document.getElementById('u233');

var u70 = document.getElementById('u70');

var u71 = document.getElementById('u71');

var u100 = document.getElementById('u100');

var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'center';
var u102 = document.getElementById('u102');

var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'center';
var u104 = document.getElementById('u104');

var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'center';
var u106 = document.getElementById('u106');

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'center';
var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'top';
var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'top';
var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'center';
var u259 = document.getElementById('u259');

if (bIE) u259.attachEvent("onmouseover", MouseOveru259);
else u259.addEventListener("mouseover", MouseOveru259, true);
function MouseOveru259(e)
{
if (!IsTrueMouseOver('u259',e)) return;
if (true) {

	SetPanelStateu256("pd1u256");

}

}
gv_vAlignTable['u259'] = 'top';
var u351 = document.getElementById('u351');

if (bIE) u351.attachEvent("onmouseover", MouseOveru351);
else u351.addEventListener("mouseover", MouseOveru351, true);
function MouseOveru351(e)
{
if (!IsTrueMouseOver('u351',e)) return;
if (true) {

	SetPanelVisibilityu336("");

SetWidgetRichText('u338', PopulateVariables('<span style=" font-family:\'Helvetica\'; font-size:12px;">&nbsp;&nbsp; White</span>'));

}

}

if (bIE) u351.attachEvent("onmouseout", MouseOutu351);
else u351.addEventListener("mouseout", MouseOutu351, true);
function MouseOutu351(e)
{
if (!IsTrueMouseOut('u351',e)) return;
if (true) {

	SetPanelVisibilityu336("hidden");

}

}

var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'center';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'top';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'top';
var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'top';
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

	SetPanelStateu354("pd0u354");

	SetPanelVisibilityu246("hidden");

}

}

if (bIE) u88.attachEvent("onmouseover", MouseOveru88);
else u88.addEventListener("mouseover", MouseOveru88, true);
function MouseOveru88(e)
{
if (!IsTrueMouseOver('u88',e)) return;
if (true) {
function waitu96325aabe21e4d81a909b6966d2e28681() {

	SetPanelStateu246("pd1u246");
function waitu539e26462bb04f8294c337b233db21bf1() {

	SetPanelVisibilityu246("hidden");
}
setTimeout(waitu539e26462bb04f8294c337b233db21bf1, 3000);
}
setTimeout(waitu96325aabe21e4d81a909b6966d2e28681, 1000);

}

}

if (bIE) u88.attachEvent("onmouseout", MouseOutu88);
else u88.addEventListener("mouseout", MouseOutu88, true);
function MouseOutu88(e)
{
if (!IsTrueMouseOut('u88',e)) return;
if (true) {

	SetPanelVisibilityu246("hidden");

}

}

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'center';
var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'center';
var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'top';
var u268 = document.getElementById('u268');

if (bIE) u268.attachEvent("onmouseover", MouseOveru268);
else u268.addEventListener("mouseover", MouseOveru268, true);
function MouseOveru268(e)
{
if (!IsTrueMouseOver('u268',e)) return;
if (true) {

	SetPanelStateu267("pd1u267");

}

}

var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'center';
var u363 = document.getElementById('u363');
gv_vAlignTable['u363'] = 'top';
var u90 = document.getElementById('u90');

u90.style.cursor = 'pointer';
if (bIE) u90.attachEvent("onclick", Clicku90);
else u90.addEventListener("click", Clicku90, true);
function Clicku90(e)
{

if (true) {

	SetPanelStateu354("pd2u354");

	SetPanelStateu112("pd1u112");

	SetPanelVisibilityu246("hidden");

}

}

if (bIE) u90.attachEvent("onmouseover", MouseOveru90);
else u90.addEventListener("mouseover", MouseOveru90, true);
function MouseOveru90(e)
{
if (!IsTrueMouseOver('u90',e)) return;
if (true) {
function waitu12f5a6999fce4e238af519025f1912461() {

	SetPanelStateu246("pd2u246");
}
setTimeout(waitu12f5a6999fce4e238af519025f1912461, 1000);

}

}

if (bIE) u90.attachEvent("onmouseout", MouseOutu90);
else u90.addEventListener("mouseout", MouseOutu90, true);
function MouseOutu90(e)
{
if (!IsTrueMouseOut('u90',e)) return;
if (true) {

	SetPanelVisibilityu246("hidden");

}

}

var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'center';
var u92 = document.getElementById('u92');

u92.style.cursor = 'pointer';
if (bIE) u92.attachEvent("onclick", Clicku92);
else u92.addEventListener("click", Clicku92, true);
function Clicku92(e)
{

if (true) {

	SetPanelStateu354("pd1u354");

	SetPanelStateu112("pd4u112");

	SetPanelVisibilityu246("hidden");

}

}

if (bIE) u92.attachEvent("onmouseover", MouseOveru92);
else u92.addEventListener("mouseover", MouseOveru92, true);
function MouseOveru92(e)
{
if (!IsTrueMouseOver('u92',e)) return;
if (true) {
function waitu91da22e52986476b857faa645c42d81c1() {

	SetPanelStateu246("pd3u246");
}
setTimeout(waitu91da22e52986476b857faa645c42d81c1, 1000);

}

}

if (bIE) u92.attachEvent("onmouseout", MouseOutu92);
else u92.addEventListener("mouseout", MouseOutu92, true);
function MouseOutu92(e)
{
if (!IsTrueMouseOut('u92',e)) return;
if (true) {

	SetPanelVisibilityu246("hidden");

}

}

var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'center';
var u94 = document.getElementById('u94');

u94.style.cursor = 'pointer';
if (bIE) u94.attachEvent("onclick", Clicku94);
else u94.addEventListener("click", Clicku94, true);
function Clicku94(e)
{

if (true) {

	SetPanelStateu354("pd3u354");

	SetPanelVisibilityu246("hidden");

}

}

if (bIE) u94.attachEvent("onmouseover", MouseOveru94);
else u94.addEventListener("mouseover", MouseOveru94, true);
function MouseOveru94(e)
{
if (!IsTrueMouseOver('u94',e)) return;
if (true) {
function waitu9ca2f281f1d44336b0a1cb8f33131e3b1() {

	SetPanelStateu246("pd4u246");
}
setTimeout(waitu9ca2f281f1d44336b0a1cb8f33131e3b1, 1000);

}

}

if (bIE) u94.attachEvent("onmouseout", MouseOutu94);
else u94.addEventListener("mouseout", MouseOutu94, true);
function MouseOutu94(e)
{
if (!IsTrueMouseOut('u94',e)) return;
if (true) {

	SetPanelVisibilityu246("hidden");

}

}

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'top';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'top';
var u278 = document.getElementById('u278');

var u279 = document.getElementById('u279');

if (bIE) u279.attachEvent("onmouseover", MouseOveru279);
else u279.addEventListener("mouseover", MouseOveru279, true);
function MouseOveru279(e)
{
if (!IsTrueMouseOver('u279',e)) return;
if (true) {

	SetPanelStateu278("pd1u278");

}

}

var u130 = document.getElementById('u130');

var u131 = document.getElementById('u131');

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'center';
var u133 = document.getElementById('u133');

var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'center';
var u135 = document.getElementById('u135');

var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'top';
var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'top';
var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'top';
var u139 = document.getElementById('u139');

var u288 = document.getElementById('u288');
gv_vAlignTable['u288'] = 'center';
var u289 = document.getElementById('u289');

var u385 = document.getElementById('u385');

var u386 = document.getElementById('u386');
gv_vAlignTable['u386'] = 'center';
var u387 = document.getElementById('u387');

var u300 = document.getElementById('u300');

var u301 = document.getElementById('u301');

if (bIE) u301.attachEvent("onmouseover", MouseOveru301);
else u301.addEventListener("mouseover", MouseOveru301, true);
function MouseOveru301(e)
{
if (!IsTrueMouseOver('u301',e)) return;
if (true) {

	SetPanelStateu300("pd1u300");

}

}

var u349 = document.getElementById('u349');

var u302 = document.getElementById('u302');
gv_vAlignTable['u302'] = 'center';
var u303 = document.getElementById('u303');

if (bIE) u303.attachEvent("onmouseover", MouseOveru303);
else u303.addEventListener("mouseover", MouseOveru303, true);
function MouseOveru303(e)
{
if (!IsTrueMouseOver('u303',e)) return;
if (true) {

	SetPanelStateu300("pd1u300");

}

}
gv_vAlignTable['u303'] = 'top';
var u304 = document.getElementById('u304');

if (bIE) u304.attachEvent("onmouseover", MouseOveru304);
else u304.addEventListener("mouseover", MouseOveru304, true);
function MouseOveru304(e)
{
if (!IsTrueMouseOver('u304',e)) return;
if (true) {

	SetPanelStateu300("pd1u300");

}

}

var u305 = document.getElementById('u305');
gv_vAlignTable['u305'] = 'center';
var u306 = document.getElementById('u306');

u306.style.cursor = 'pointer';
if (bIE) u306.attachEvent("onclick", Clicku306);
else u306.addEventListener("click", Clicku306, true);
function Clicku306(e)
{

if (true) {

	SetPanelStateu300("pd1u300");

SetGlobalVariableValue('$tabSelected', PopulateVariables('product'));

}

}

if (bIE) u306.attachEvent("onmouseout", MouseOutu306);
else u306.addEventListener("mouseout", MouseOutu306, true);
function MouseOutu306(e)
{
if (!IsTrueMouseOut('u306',e)) return;
if ((GetGlobalVariableValue('$tabSelected')) != (PopulateVariables('product'))) {

	SetPanelStateu300("pd0u300");

}

}

var u309 = document.getElementById('u309');

u309.style.cursor = 'pointer';
if (bIE) u309.attachEvent("onclick", Clicku309);
else u309.addEventListener("click", Clicku309, true);
function Clicku309(e)
{

if (true) {

	SetPanelStateu300("pd1u300");

SetGlobalVariableValue('$tabSelected', PopulateVariables('product'));

}

}

if (bIE) u309.attachEvent("onmouseout", MouseOutu309);
else u309.addEventListener("mouseout", MouseOutu309, true);
function MouseOutu309(e)
{
if (!IsTrueMouseOut('u309',e)) return;
if ((GetGlobalVariableValue('$tabSelected')) != (PopulateVariables('product'))) {

	SetPanelStateu300("pd0u300");

}

}

var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u141 = document.getElementById('u141');

var u142 = document.getElementById('u142');

var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'center';
var u144 = document.getElementById('u144');

var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'center';
var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'top';
var u147 = document.getElementById('u147');

var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'top';
var u149 = document.getElementById('u149');

var u275 = document.getElementById('u275');

u275.style.cursor = 'pointer';
if (bIE) u275.attachEvent("onclick", Clicku275);
else u275.addEventListener("click", Clicku275, true);
function Clicku275(e)
{

if (true) {

	SetPanelStateu267("pd1u267");

SetGlobalVariableValue('$tabSelected', PopulateVariables('product'));

}

}

if (bIE) u275.attachEvent("onmouseout", MouseOutu275);
else u275.addEventListener("mouseout", MouseOutu275, true);
function MouseOutu275(e)
{
if (!IsTrueMouseOut('u275',e)) return;
if ((GetGlobalVariableValue('$tabSelected')) != (PopulateVariables('product'))) {

	SetPanelStateu267("pd0u267");

}

}
gv_vAlignTable['u275'] = 'top';
var u276 = document.getElementById('u276');

u276.style.cursor = 'pointer';
if (bIE) u276.attachEvent("onclick", Clicku276);
else u276.addEventListener("click", Clicku276, true);
function Clicku276(e)
{

if (true) {

	SetPanelStateu267("pd1u267");

SetGlobalVariableValue('$tabSelected', PopulateVariables('product'));

}

}

if (bIE) u276.attachEvent("onmouseout", MouseOutu276);
else u276.addEventListener("mouseout", MouseOutu276, true);
function MouseOutu276(e)
{
if (!IsTrueMouseOut('u276',e)) return;
if ((GetGlobalVariableValue('$tabSelected')) != (PopulateVariables('product'))) {

	SetPanelStateu267("pd0u267");

}

}

var u277 = document.getElementById('u277');
gv_vAlignTable['u277'] = 'center';
var u394 = document.getElementById('u394');
gv_vAlignTable['u394'] = 'top';
var u395 = document.getElementById('u395');
gv_vAlignTable['u395'] = 'top';
var u396 = document.getElementById('u396');
gv_vAlignTable['u396'] = 'top';
var u397 = document.getElementById('u397');
gv_vAlignTable['u397'] = 'top';
var u310 = document.getElementById('u310');
gv_vAlignTable['u310'] = 'center';
var u311 = document.getElementById('u311');

var u312 = document.getElementById('u312');

if (bIE) u312.attachEvent("onmouseover", MouseOveru312);
else u312.addEventListener("mouseover", MouseOveru312, true);
function MouseOveru312(e)
{
if (!IsTrueMouseOver('u312',e)) return;
if (true) {

	SetPanelStateu311("pd1u311");

}

}

var u313 = document.getElementById('u313');
gv_vAlignTable['u313'] = 'center';
var u314 = document.getElementById('u314');

if (bIE) u314.attachEvent("onmouseover", MouseOveru314);
else u314.addEventListener("mouseover", MouseOveru314, true);
function MouseOveru314(e)
{
if (!IsTrueMouseOver('u314',e)) return;
if (true) {

	SetPanelStateu311("pd1u311");

}

}
gv_vAlignTable['u314'] = 'top';
var u315 = document.getElementById('u315');

if (bIE) u315.attachEvent("onmouseover", MouseOveru315);
else u315.addEventListener("mouseover", MouseOveru315, true);
function MouseOveru315(e)
{
if (!IsTrueMouseOver('u315',e)) return;
if (true) {

	SetPanelStateu311("pd1u311");

}

}

var u316 = document.getElementById('u316');
gv_vAlignTable['u316'] = 'center';
var u384 = document.getElementById('u384');
gv_vAlignTable['u384'] = 'center';
var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'center';
var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'top';
var u152 = document.getElementById('u152');

if (bIE) u152.attachEvent("onchange", Changeu152);
else u152.addEventListener("change", Changeu152, true);
function Changeu152(e)
{

if ((GetSelectedOption('u152')) == (PopulateVariables('Normal Shape'))) {

	SetPanelStateu153("pd0u153");

}
else
if (true) {

	SetPanelStateu153("pd1u153");

}

}

var u153 = document.getElementById('u153');

var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'top';
var u155 = document.getElementById('u155');

var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'top';
var u157 = document.getElementById('u157');

var u158 = document.getElementById('u158');

var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'center';
var u234 = document.getElementById('u234');

var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'center';
var u284 = document.getElementById('u284');

u284.style.cursor = 'pointer';
if (bIE) u284.attachEvent("onclick", Clicku284);
else u284.addEventListener("click", Clicku284, true);
function Clicku284(e)
{

if (true) {

	SetPanelStateu278("pd1u278");

SetGlobalVariableValue('$tabSelected', PopulateVariables('product'));

}

}

if (bIE) u284.attachEvent("onmouseout", MouseOutu284);
else u284.addEventListener("mouseout", MouseOutu284, true);
function MouseOutu284(e)
{
if (!IsTrueMouseOut('u284',e)) return;
if ((GetGlobalVariableValue('$tabSelected')) != (PopulateVariables('product'))) {

	SetPanelStateu278("pd0u278");

}

}

var u285 = document.getElementById('u285');
gv_vAlignTable['u285'] = 'center';
var u286 = document.getElementById('u286');

u286.style.cursor = 'pointer';
if (bIE) u286.attachEvent("onclick", Clicku286);
else u286.addEventListener("click", Clicku286, true);
function Clicku286(e)
{

if (true) {

	SetPanelStateu278("pd1u278");

SetGlobalVariableValue('$tabSelected', PopulateVariables('product'));

}

}

if (bIE) u286.attachEvent("onmouseout", MouseOutu286);
else u286.addEventListener("mouseout", MouseOutu286, true);
function MouseOutu286(e)
{
if (!IsTrueMouseOut('u286',e)) return;
if ((GetGlobalVariableValue('$tabSelected')) != (PopulateVariables('product'))) {

	SetPanelStateu278("pd0u278");

}

}
gv_vAlignTable['u286'] = 'top';
var u287 = document.getElementById('u287');

u287.style.cursor = 'pointer';
if (bIE) u287.attachEvent("onclick", Clicku287);
else u287.addEventListener("click", Clicku287, true);
function Clicku287(e)
{

if (true) {

	SetPanelStateu278("pd1u278");

SetGlobalVariableValue('$tabSelected', PopulateVariables('product'));

}

}

if (bIE) u287.attachEvent("onmouseout", MouseOutu287);
else u287.addEventListener("mouseout", MouseOutu287, true);
function MouseOutu287(e)
{
if (!IsTrueMouseOut('u287',e)) return;
if ((GetGlobalVariableValue('$tabSelected')) != (PopulateVariables('product'))) {

	SetPanelStateu278("pd0u278");

}

}

var u361 = document.getElementById('u361');
gv_vAlignTable['u361'] = 'top';
var u160 = document.getElementById('u160');

u160.style.cursor = 'pointer';
if (bIE) u160.attachEvent("onclick", Clicku160);
else u160.addEventListener("click", Clicku160, true);
function Clicku160(e)
{

if (true) {

	SetPanelStateu112("pd2u112");

}

}
gv_vAlignTable['u160'] = 'top';
var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'top';
var u162 = document.getElementById('u162');

if (bIE) u162.attachEvent("onchange", Changeu162);
else u162.addEventListener("change", Changeu162, true);
function Changeu162(e)
{

if ((GetSelectedOption('u162')) == (PopulateVariables(' No Outline'))) {

	SetPanelStateu163("pd0u163");

}
else
if (true) {

	SetPanelStateu163("pd1u163");

}

}

var u163 = document.getElementById('u163');

var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'top';
var u165 = document.getElementById('u165');

var u166 = document.getElementById('u166');

var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'center';
var u168 = document.getElementById('u168');

var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'top';
var u293 = document.getElementById('u293');

if (bIE) u293.attachEvent("onmouseover", MouseOveru293);
else u293.addEventListener("mouseover", MouseOveru293, true);
function MouseOveru293(e)
{
if (!IsTrueMouseOver('u293',e)) return;
if (true) {

	SetPanelStateu289("pd1u289");

}

}

var u294 = document.getElementById('u294');
gv_vAlignTable['u294'] = 'center';
var u295 = document.getElementById('u295');

u295.style.cursor = 'pointer';
if (bIE) u295.attachEvent("onclick", Clicku295);
else u295.addEventListener("click", Clicku295, true);
function Clicku295(e)
{

if (true) {

	SetPanelStateu289("pd1u289");

SetGlobalVariableValue('$tabSelected', PopulateVariables('product'));

}

}

if (bIE) u295.attachEvent("onmouseout", MouseOutu295);
else u295.addEventListener("mouseout", MouseOutu295, true);
function MouseOutu295(e)
{
if (!IsTrueMouseOut('u295',e)) return;
if ((GetGlobalVariableValue('$tabSelected')) != (PopulateVariables('product'))) {

	SetPanelStateu289("pd0u289");

}

}

var u296 = document.getElementById('u296');
gv_vAlignTable['u296'] = 'center';
var u297 = document.getElementById('u297');

u297.style.cursor = 'pointer';
if (bIE) u297.attachEvent("onclick", Clicku297);
else u297.addEventListener("click", Clicku297, true);
function Clicku297(e)
{

if (true) {

	SetPanelStateu289("pd1u289");

SetGlobalVariableValue('$tabSelected', PopulateVariables('product'));

}

}

if (bIE) u297.attachEvent("onmouseout", MouseOutu297);
else u297.addEventListener("mouseout", MouseOutu297, true);
function MouseOutu297(e)
{
if (!IsTrueMouseOut('u297',e)) return;
if ((GetGlobalVariableValue('$tabSelected')) != (PopulateVariables('product'))) {

	SetPanelStateu289("pd0u289");

}

}
gv_vAlignTable['u297'] = 'top';
var u170 = document.getElementById('u170');

var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'center';
var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'top';
var u173 = document.getElementById('u173');

var u174 = document.getElementById('u174');

var u175 = document.getElementById('u175');

var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'top';
var u177 = document.getElementById('u177');

var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'top';
var u179 = document.getElementById('u179');

var u251 = document.getElementById('u251');

var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'center';
var u253 = document.getElementById('u253');

var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'top';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
var u73 = document.getElementById('u73');

var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'center';
var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'top';
var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'top';
var u77 = document.getElementById('u77');

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'center';
var u79 = document.getElementById('u79');

var u180 = document.getElementById('u180');

var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'center';
var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'top';
var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'top';
var u184 = document.getElementById('u184');

var u185 = document.getElementById('u185');

var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'center';
var u187 = document.getElementById('u187');

var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'center';
var u189 = document.getElementById('u189');

var u307 = document.getElementById('u307');
gv_vAlignTable['u307'] = 'center';
var u308 = document.getElementById('u308');

u308.style.cursor = 'pointer';
if (bIE) u308.attachEvent("onclick", Clicku308);
else u308.addEventListener("click", Clicku308, true);
function Clicku308(e)
{

if (true) {

	SetPanelStateu300("pd1u300");

SetGlobalVariableValue('$tabSelected', PopulateVariables('product'));

}

}

if (bIE) u308.attachEvent("onmouseout", MouseOutu308);
else u308.addEventListener("mouseout", MouseOutu308, true);
function MouseOutu308(e)
{
if (!IsTrueMouseOut('u308',e)) return;
if ((GetGlobalVariableValue('$tabSelected')) != (PopulateVariables('product'))) {

	SetPanelStateu300("pd0u300");

}

}
gv_vAlignTable['u308'] = 'top';
var u260 = document.getElementById('u260');

if (bIE) u260.attachEvent("onmouseover", MouseOveru260);
else u260.addEventListener("mouseover", MouseOveru260, true);
function MouseOveru260(e)
{
if (!IsTrueMouseOver('u260',e)) return;
if (true) {

	SetPanelStateu256("pd1u256");

}

}

var u383 = document.getElementById('u383');

var u262 = document.getElementById('u262');

u262.style.cursor = 'pointer';
if (bIE) u262.attachEvent("onclick", Clicku262);
else u262.addEventListener("click", Clicku262, true);
function Clicku262(e)
{

if (true) {

	SetPanelStateu256("pd1u256");

SetGlobalVariableValue('$tabSelected', PopulateVariables('product'));

}

}

if (bIE) u262.attachEvent("onmouseout", MouseOutu262);
else u262.addEventListener("mouseout", MouseOutu262, true);
function MouseOutu262(e)
{
if (!IsTrueMouseOut('u262',e)) return;
if ((GetGlobalVariableValue('$tabSelected')) != (PopulateVariables('product'))) {

	SetPanelStateu256("pd0u256");

}

}

var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'top';
var u211 = document.getElementById('u211');

var u212 = document.getElementById('u212');

var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'center';
var u393 = document.getElementById('u393');
gv_vAlignTable['u393'] = 'center';
var u214 = document.getElementById('u214');

u214.style.cursor = 'pointer';
if (bIE) u214.attachEvent("onclick", Clicku214);
else u214.addEventListener("click", Clicku214, true);
function Clicku214(e)
{

if (true) {

	SetPanelStateu112("pd1u112");

}

}
gv_vAlignTable['u214'] = 'top';
var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'top';
var u352 = document.getElementById('u352');
gv_vAlignTable['u352'] = 'center';
var u353 = document.getElementById('u353');
gv_vAlignTable['u353'] = 'top';
var u354 = document.getElementById('u354');

var u355 = document.getElementById('u355');
gv_vAlignTable['u355'] = 'top';
var u356 = document.getElementById('u356');
gv_vAlignTable['u356'] = 'top';
var u357 = document.getElementById('u357');
gv_vAlignTable['u357'] = 'top';
var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'top';
var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'top';
var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'top';
var u193 = document.getElementById('u193');

var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'top';
var u195 = document.getElementById('u195');

var u196 = document.getElementById('u196');

var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'center';
var u198 = document.getElementById('u198');

var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'center';
var u317 = document.getElementById('u317');

u317.style.cursor = 'pointer';
if (bIE) u317.attachEvent("onclick", Clicku317);
else u317.addEventListener("click", Clicku317, true);
function Clicku317(e)
{

if (true) {

	SetPanelStateu311("pd1u311");

SetGlobalVariableValue('$tabSelected', PopulateVariables('product'));

}

}

if (bIE) u317.attachEvent("onmouseout", MouseOutu317);
else u317.addEventListener("mouseout", MouseOutu317, true);
function MouseOutu317(e)
{
if (!IsTrueMouseOut('u317',e)) return;
if ((GetGlobalVariableValue('$tabSelected')) != (PopulateVariables('product'))) {

	SetPanelStateu311("pd0u311");

}

}

var u318 = document.getElementById('u318');
gv_vAlignTable['u318'] = 'center';
var u319 = document.getElementById('u319');

u319.style.cursor = 'pointer';
if (bIE) u319.attachEvent("onclick", Clicku319);
else u319.addEventListener("click", Clicku319, true);
function Clicku319(e)
{

if (true) {

	SetPanelStateu311("pd1u311");

SetGlobalVariableValue('$tabSelected', PopulateVariables('product'));

}

}

if (bIE) u319.attachEvent("onmouseout", MouseOutu319);
else u319.addEventListener("mouseout", MouseOutu319, true);
function MouseOutu319(e)
{
if (!IsTrueMouseOut('u319',e)) return;
if ((GetGlobalVariableValue('$tabSelected')) != (PopulateVariables('product'))) {

	SetPanelStateu311("pd0u311");

}

}
gv_vAlignTable['u319'] = 'top';
var u272 = document.getElementById('u272');
gv_vAlignTable['u272'] = 'center';
var u391 = document.getElementById('u391');
gv_vAlignTable['u391'] = 'top';
var u220 = document.getElementById('u220');

var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'center';
var u222 = document.getElementById('u222');

var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'top';
var u224 = document.getElementById('u224');

var u360 = document.getElementById('u360');
gv_vAlignTable['u360'] = 'top';
var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'center';
var u362 = document.getElementById('u362');
gv_vAlignTable['u362'] = 'top';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'top';
var u364 = document.getElementById('u364');
gv_vAlignTable['u364'] = 'top';
var u365 = document.getElementById('u365');
gv_vAlignTable['u365'] = 'top';
var u366 = document.getElementById('u366');
gv_vAlignTable['u366'] = 'top';
var u367 = document.getElementById('u367');
gv_vAlignTable['u367'] = 'top';
var u320 = document.getElementById('u320');

u320.style.cursor = 'pointer';
if (bIE) u320.attachEvent("onclick", Clicku320);
else u320.addEventListener("click", Clicku320, true);
function Clicku320(e)
{

if (true) {

	SetPanelStateu311("pd1u311");

SetGlobalVariableValue('$tabSelected', PopulateVariables('product'));

}

}

if (bIE) u320.attachEvent("onmouseout", MouseOutu320);
else u320.addEventListener("mouseout", MouseOutu320, true);
function MouseOutu320(e)
{
if (!IsTrueMouseOut('u320',e)) return;
if ((GetGlobalVariableValue('$tabSelected')) != (PopulateVariables('product'))) {

	SetPanelStateu311("pd0u311");

}

}

var u321 = document.getElementById('u321');
gv_vAlignTable['u321'] = 'center';
var u322 = document.getElementById('u322');

var u323 = document.getElementById('u323');
gv_vAlignTable['u323'] = 'center';
var u324 = document.getElementById('u324');

var u325 = document.getElementById('u325');

var u326 = document.getElementById('u326');
gv_vAlignTable['u326'] = 'center';
var u327 = document.getElementById('u327');

var u328 = document.getElementById('u328');
gv_vAlignTable['u328'] = 'center';
var u329 = document.getElementById('u329');

var u390 = document.getElementById('u390');
gv_vAlignTable['u390'] = 'center';
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
gv_vAlignTable['u8'] = 'top';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'top';
var u372 = document.getElementById('u372');

u372.style.cursor = 'pointer';
if (bIE) u372.attachEvent("onclick", Clicku372);
else u372.addEventListener("click", Clicku372, true);
function Clicku372(e)
{

if (true) {

	SetPanelStateu3("pd1u3");

	BringToFront("u0");

}

}
gv_vAlignTable['u372'] = 'top';
var u373 = document.getElementById('u373');
gv_vAlignTable['u373'] = 'top';
var u374 = document.getElementById('u374');
gv_vAlignTable['u374'] = 'top';
var u375 = document.getElementById('u375');
gv_vAlignTable['u375'] = 'top';
var u376 = document.getElementById('u376');
gv_vAlignTable['u376'] = 'top';
var u377 = document.getElementById('u377');
gv_vAlignTable['u377'] = 'top';
var u330 = document.getElementById('u330');
gv_vAlignTable['u330'] = 'center';
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

var u337 = document.getElementById('u337');

var u338 = document.getElementById('u338');
gv_vAlignTable['u338'] = 'center';
var u339 = document.getElementById('u339');

if (bIE) u339.attachEvent("onmouseover", MouseOveru339);
else u339.addEventListener("mouseover", MouseOveru339, true);
function MouseOveru339(e)
{
if (!IsTrueMouseOver('u339',e)) return;
if (true) {

	SetPanelVisibilityu336("");

SetWidgetRichText('u338', PopulateVariables('<span style=" font-family:\'Helvetica\'; font-size:12px;">&nbsp;&nbsp; Navy Blue</span>'));

}

}

if (bIE) u339.attachEvent("onmouseout", MouseOutu339);
else u339.addEventListener("mouseout", MouseOutu339, true);
function MouseOutu339(e)
{
if (!IsTrueMouseOut('u339',e)) return;
if (true) {

	SetPanelVisibilityu336("hidden");

}

}

var u370 = document.getElementById('u370');
gv_vAlignTable['u370'] = 'top';
var u371 = document.getElementById('u371');
gv_vAlignTable['u371'] = 'top';
var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'top';
var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'top';
var u242 = document.getElementById('u242');

var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'center';
var u244 = document.getElementById('u244');

var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'center';
var u298 = document.getElementById('u298');

u298.style.cursor = 'pointer';
if (bIE) u298.attachEvent("onclick", Clicku298);
else u298.addEventListener("click", Clicku298, true);
function Clicku298(e)
{

if (true) {

	SetPanelStateu289("pd1u289");

SetGlobalVariableValue('$tabSelected', PopulateVariables('product'));

}

}

if (bIE) u298.attachEvent("onmouseout", MouseOutu298);
else u298.addEventListener("mouseout", MouseOutu298, true);
function MouseOutu298(e)
{
if (!IsTrueMouseOut('u298',e)) return;
if ((GetGlobalVariableValue('$tabSelected')) != (PopulateVariables('product'))) {

	SetPanelStateu289("pd0u289");

}

}

var u299 = document.getElementById('u299');
gv_vAlignTable['u299'] = 'center';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'top';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'top';
var u12 = document.getElementById('u12');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u14 = document.getElementById('u14');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u16 = document.getElementById('u16');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u18 = document.getElementById('u18');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u344 = document.getElementById('u344');
gv_vAlignTable['u344'] = 'center';
var u345 = document.getElementById('u345');

if (bIE) u345.attachEvent("onmouseover", MouseOveru345);
else u345.addEventListener("mouseover", MouseOveru345, true);
function MouseOveru345(e)
{
if (!IsTrueMouseOver('u345',e)) return;
if (true) {

	SetPanelVisibilityu336("");

SetWidgetRichText('u338', PopulateVariables('<span style=" font-family:\'Helvetica\'; font-size:12px;">&nbsp; Black</span>'));

}

}

if (bIE) u345.attachEvent("onmouseout", MouseOutu345);
else u345.addEventListener("mouseout", MouseOutu345, true);
function MouseOutu345(e)
{
if (!IsTrueMouseOut('u345',e)) return;
if (true) {

	SetPanelVisibilityu336("hidden");

}

}

var u346 = document.getElementById('u346');
gv_vAlignTable['u346'] = 'center';
var u347 = document.getElementById('u347');

var u348 = document.getElementById('u348');

var u340 = document.getElementById('u340');
gv_vAlignTable['u340'] = 'center';
var u341 = document.getElementById('u341');

if (bIE) u341.attachEvent("onmouseover", MouseOveru341);
else u341.addEventListener("mouseover", MouseOveru341, true);
function MouseOveru341(e)
{
if (!IsTrueMouseOver('u341',e)) return;
if (true) {

	SetPanelVisibilityu336("");

SetWidgetRichText('u338', PopulateVariables('<span style=" font-family:\'Helvetica\'; font-size:12px;">&nbsp; Red</span>'));

}

}

if (bIE) u341.attachEvent("onmouseout", MouseOutu341);
else u341.addEventListener("mouseout", MouseOutu341, true);
function MouseOutu341(e)
{
if (!IsTrueMouseOut('u341',e)) return;
if (true) {

	SetPanelVisibilityu336("hidden");

}

}

var u342 = document.getElementById('u342');
gv_vAlignTable['u342'] = 'center';
var u343 = document.getElementById('u343');

if (bIE) u343.attachEvent("onmouseover", MouseOveru343);
else u343.addEventListener("mouseover", MouseOveru343, true);
function MouseOveru343(e)
{
if (!IsTrueMouseOver('u343',e)) return;
if (true) {

	SetPanelVisibilityu336("");

SetWidgetRichText('u338', PopulateVariables('<span style=" font-family:\'Helvetica\'; font-size:12px;">&nbsp; Leaf Green</span>'));

}

}

if (bIE) u343.attachEvent("onmouseout", MouseOutu343);
else u343.addEventListener("mouseout", MouseOutu343, true);
function MouseOutu343(e)
{
if (!IsTrueMouseOut('u343',e)) return;
if (true) {

	SetPanelVisibilityu336("hidden");

}

}

var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'top';
var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'top';
var u112 = document.getElementById('u112');

var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'top';
var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'top';
var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'center';
var u115 = document.getElementById('u115');

var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'center';
var u117 = document.getElementById('u117');

var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'center';
var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'top';
var u256 = document.getElementById('u256');

var u20 = document.getElementById('u20');

u20.style.cursor = 'pointer';
if (bIE) u20.attachEvent("onclick", Clicku20);
else u20.addEventListener("click", Clicku20, true);
function Clicku20(e)
{

if (true) {

	SetPanelStateu3("pd0u3");

	BringToFront("u43");

}

}

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u22 = document.getElementById('u22');

u22.style.cursor = 'pointer';
if (bIE) u22.attachEvent("onclick", Clicku22);
else u22.addEventListener("click", Clicku22, true);
function Clicku22(e)
{

if (true) {

	SetPanelStateu3("pd0u3");

	BringToFront("u43");

}

}
gv_vAlignTable['u22'] = 'top';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u26 = document.getElementById('u26');

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u28 = document.getElementById('u28');

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u206 = document.getElementById('u206');

if (bIE) u206.attachEvent("onchange", Changeu206);
else u206.addEventListener("change", Changeu206, true);
function Changeu206(e)
{

if ((GetSelectedOption('u206')) == (PopulateVariables('Normal Shape'))) {

	SetPanelStateu207("pd0u207");

}
else
if (true) {

	SetPanelStateu207("pd1u207");

}

}

var u207 = document.getElementById('u207');

var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'top';
var u209 = document.getElementById('u209');

var u358 = document.getElementById('u358');
gv_vAlignTable['u358'] = 'top';
var u359 = document.getElementById('u359');
gv_vAlignTable['u359'] = 'top';
var u381 = document.getElementById('u381');
gv_vAlignTable['u381'] = 'top';
var u382 = document.getElementById('u382');
gv_vAlignTable['u382'] = 'top';
var u350 = document.getElementById('u350');

var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'top';
var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'top';
var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'top';
var u123 = document.getElementById('u123');

var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'center';
var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'top';
var u261 = document.getElementById('u261');
gv_vAlignTable['u261'] = 'center';
var u126 = document.getElementById('u126');

var u263 = document.getElementById('u263');
gv_vAlignTable['u263'] = 'center';
var u264 = document.getElementById('u264');

u264.style.cursor = 'pointer';
if (bIE) u264.attachEvent("onclick", Clicku264);
else u264.addEventListener("click", Clicku264, true);
function Clicku264(e)
{

if (true) {

	SetPanelStateu256("pd1u256");

SetGlobalVariableValue('$tabSelected', PopulateVariables('product'));

}

}

if (bIE) u264.attachEvent("onmouseout", MouseOutu264);
else u264.addEventListener("mouseout", MouseOutu264, true);
function MouseOutu264(e)
{
if (!IsTrueMouseOut('u264',e)) return;
if ((GetGlobalVariableValue('$tabSelected')) != (PopulateVariables('product'))) {

	SetPanelStateu256("pd0u256");

}

}
gv_vAlignTable['u264'] = 'top';
var u265 = document.getElementById('u265');

u265.style.cursor = 'pointer';
if (bIE) u265.attachEvent("onclick", Clicku265);
else u265.addEventListener("click", Clicku265, true);
function Clicku265(e)
{

if (true) {

	SetPanelStateu256("pd1u256");

SetGlobalVariableValue('$tabSelected', PopulateVariables('product'));

}

}

if (bIE) u265.attachEvent("onmouseout", MouseOutu265);
else u265.addEventListener("mouseout", MouseOutu265, true);
function MouseOutu265(e)
{
if (!IsTrueMouseOut('u265',e)) return;
if ((GetGlobalVariableValue('$tabSelected')) != (PopulateVariables('product'))) {

	SetPanelStateu256("pd0u256");

}

}

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u31 = document.getElementById('u31');

u31.style.cursor = 'pointer';
if (bIE) u31.attachEvent("onclick", Clicku31);
else u31.addEventListener("click", Clicku31, true);
function Clicku31(e)
{

if (true) {

	SetPanelStateu3("pd0u3");

	BringToFront("u43");

}

}

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u33 = document.getElementById('u33');

u33.style.cursor = 'pointer';
if (bIE) u33.attachEvent("onclick", Clicku33);
else u33.addEventListener("click", Clicku33, true);
function Clicku33(e)
{

if (true) {

	SetPanelStateu3("pd0u3");

	BringToFront("u43");

}

}
gv_vAlignTable['u33'] = 'top';
var u34 = document.getElementById('u34');

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
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

	SetPanelStateu3("pd0u3");

	BringToFront("u43");

}

}

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u216 = document.getElementById('u216');

if (bIE) u216.attachEvent("onchange", Changeu216);
else u216.addEventListener("change", Changeu216, true);
function Changeu216(e)
{

if ((GetSelectedOption('u216')) == (PopulateVariables(' No Outline'))) {

	SetPanelStateu217("pd0u217");

}
else
if (true) {

	SetPanelStateu217("pd1u217");

}

}

var u217 = document.getElementById('u217');

var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'top';
var u219 = document.getElementById('u219');

var u368 = document.getElementById('u368');
gv_vAlignTable['u368'] = 'top';
var u369 = document.getElementById('u369');
gv_vAlignTable['u369'] = 'top';
var u201 = document.getElementById('u201');

var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'top';
var u266 = document.getElementById('u266');
gv_vAlignTable['u266'] = 'center';
var u267 = document.getElementById('u267');

var u203 = document.getElementById('u203');

var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'center';
var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'top';
var u270 = document.getElementById('u270');

if (bIE) u270.attachEvent("onmouseover", MouseOveru270);
else u270.addEventListener("mouseover", MouseOveru270, true);
function MouseOveru270(e)
{
if (!IsTrueMouseOver('u270',e)) return;
if (true) {

	SetPanelStateu267("pd1u267");

}

}
gv_vAlignTable['u270'] = 'top';
var u271 = document.getElementById('u271');

if (bIE) u271.attachEvent("onmouseover", MouseOveru271);
else u271.addEventListener("mouseover", MouseOveru271, true);
function MouseOveru271(e)
{
if (!IsTrueMouseOver('u271',e)) return;
if (true) {

	SetPanelStateu267("pd1u267");

}

}

var u257 = document.getElementById('u257');

if (bIE) u257.attachEvent("onmouseover", MouseOveru257);
else u257.addEventListener("mouseover", MouseOveru257, true);
function MouseOveru257(e)
{
if (!IsTrueMouseOver('u257',e)) return;
if (true) {

	SetPanelStateu256("pd1u256");

}

}

var u273 = document.getElementById('u273');

u273.style.cursor = 'pointer';
if (bIE) u273.attachEvent("onclick", Clicku273);
else u273.addEventListener("click", Clicku273, true);
function Clicku273(e)
{

if (true) {

	SetPanelStateu267("pd1u267");

SetGlobalVariableValue('$tabSelected', PopulateVariables('product'));

}

}

if (bIE) u273.attachEvent("onmouseout", MouseOutu273);
else u273.addEventListener("mouseout", MouseOutu273, true);
function MouseOutu273(e)
{
if (!IsTrueMouseOut('u273',e)) return;
if ((GetGlobalVariableValue('$tabSelected')) != (PopulateVariables('product'))) {

	SetPanelStateu267("pd0u267");

}

}

var u274 = document.getElementById('u274');
gv_vAlignTable['u274'] = 'center';
var u40 = document.getElementById('u40');

u40.style.cursor = 'pointer';
if (bIE) u40.attachEvent("onclick", Clicku40);
else u40.addEventListener("click", Clicku40, true);
function Clicku40(e)
{

if (true) {

	SetPanelStateu3("pd0u3");

	BringToFront("u43");

}

}
gv_vAlignTable['u40'] = 'top';
var u41 = document.getElementById('u41');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u43 = document.getElementById('u43');

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
gv_vAlignTable['u226'] = 'top';
var u227 = document.getElementById('u227');

var u228 = document.getElementById('u228');

var u229 = document.getElementById('u229');

var u378 = document.getElementById('u378');
gv_vAlignTable['u378'] = 'top';
var u379 = document.getElementById('u379');
gv_vAlignTable['u379'] = 'top';
var u392 = document.getElementById('u392');

var u280 = document.getElementById('u280');
gv_vAlignTable['u280'] = 'center';
var u281 = document.getElementById('u281');

if (bIE) u281.attachEvent("onmouseover", MouseOveru281);
else u281.addEventListener("mouseover", MouseOveru281, true);
function MouseOveru281(e)
{
if (!IsTrueMouseOver('u281',e)) return;
if (true) {

	SetPanelStateu278("pd1u278");

}

}
gv_vAlignTable['u281'] = 'top';
var u282 = document.getElementById('u282');

if (bIE) u282.attachEvent("onmouseover", MouseOveru282);
else u282.addEventListener("mouseover", MouseOveru282, true);
function MouseOveru282(e)
{
if (!IsTrueMouseOver('u282',e)) return;
if (true) {

	SetPanelStateu278("pd1u278");

}

}

var u283 = document.getElementById('u283');
gv_vAlignTable['u283'] = 'center';
var u50 = document.getElementById('u50');

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u52 = document.getElementById('u52');

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u54 = document.getElementById('u54');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u56 = document.getElementById('u56');

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u58 = document.getElementById('u58');

var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'center';
var u236 = document.getElementById('u236');

var u237 = document.getElementById('u237');

var u238 = document.getElementById('u238');

var u239 = document.getElementById('u239');

var u388 = document.getElementById('u388');
gv_vAlignTable['u388'] = 'center';
var u389 = document.getElementById('u389');

var u290 = document.getElementById('u290');

if (bIE) u290.attachEvent("onmouseover", MouseOveru290);
else u290.addEventListener("mouseover", MouseOveru290, true);
function MouseOveru290(e)
{
if (!IsTrueMouseOver('u290',e)) return;
if (true) {

	SetPanelStateu289("pd1u289");

}

}

var u291 = document.getElementById('u291');
gv_vAlignTable['u291'] = 'center';
var u292 = document.getElementById('u292');

if (bIE) u292.attachEvent("onmouseover", MouseOveru292);
else u292.addEventListener("mouseover", MouseOveru292, true);
function MouseOveru292(e)
{
if (!IsTrueMouseOver('u292',e)) return;
if (true) {

	SetPanelStateu289("pd1u289");

}

}
gv_vAlignTable['u292'] = 'top';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u62 = document.getElementById('u62');

var u63 = document.getElementById('u63');

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u65 = document.getElementById('u65');

var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'top';
var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u246 = document.getElementById('u246');

var u247 = document.getElementById('u247');

var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'center';
var u249 = document.getElementById('u249');

var u398 = document.getElementById('u398');
gv_vAlignTable['u398'] = 'top';
var u380 = document.getElementById('u380');
gv_vAlignTable['u380'] = 'top';
if (window.OnLoad) OnLoad();
