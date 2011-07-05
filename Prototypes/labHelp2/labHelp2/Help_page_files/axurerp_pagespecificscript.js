
var PageName = 'Help page';
var PageId = 'p08ebf5acc78b401b8f3ddfa81b58f4f1'
var PageUrl = 'Help_page.html'
document.title = 'Help page';

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

eval(GetDynamicPanelScript('u150', 3));

eval(GetDynamicPanelScript('u400', 3));

eval(GetDynamicPanelScript('u51', 3));

eval(GetDynamicPanelScript('u157', 3));

eval(GetDynamicPanelScript('u407', 3));

eval(GetDynamicPanelScript('u58', 3));

eval(GetDynamicPanelScript('u263', 3));

eval(GetDynamicPanelScript('u338', 3));

eval(GetDynamicPanelScript('u512', 3));

eval(GetDynamicPanelScript('u121', 3));

eval(GetDynamicPanelScript('u93', 3));

eval(GetDynamicPanelScript('u100', 3));

eval(GetDynamicPanelScript('u519', 3));

eval(GetDynamicPanelScript('u199', 3));

eval(GetDynamicPanelScript('u375', 3));

eval(GetDynamicPanelScript('u164', 3));

eval(GetDynamicPanelScript('u414', 3));

eval(GetDynamicPanelScript('u65', 3));

eval(GetDynamicPanelScript('u345', 3));

eval(GetDynamicPanelScript('u206', 3));

eval(GetDynamicPanelScript('u526', 3));

eval(GetDynamicPanelScript('u561', 6));

eval(GetDynamicPanelScript('u37', 3));

eval(GetDynamicPanelScript('u242', 3));

eval(GetDynamicPanelScript('u249', 3));

eval(GetDynamicPanelScript('u171', 3));

eval(GetDynamicPanelScript('u421', 3));

eval(GetDynamicPanelScript('u72', 3));

eval(GetDynamicPanelScript('u178', 3));

eval(GetDynamicPanelScript('u352', 3));

eval(GetDynamicPanelScript('u428', 3));

eval(GetDynamicPanelScript('u79', 3));

eval(GetDynamicPanelScript('u359', 3));

eval(GetDynamicPanelScript('u533', 3));

eval(GetDynamicPanelScript('u4', 6));

eval(GetDynamicPanelScript('u217', 3));

eval(GetDynamicPanelScript('u44', 3));

eval(GetDynamicPanelScript('u192', 3));

eval(GetDynamicPanelScript('u256', 3));

eval(GetDynamicPanelScript('u185', 3));

eval(GetDynamicPanelScript('u435', 3));

eval(GetDynamicPanelScript('u86', 3));

eval(GetDynamicPanelScript('u366', 3));

var u270 = document.getElementById('u270');

u270.style.cursor = 'pointer';
if (bIE) u270.attachEvent("onclick", Clicku270);
else u270.addEventListener("click", Clicku270, true);
function Clicku270(e)
{

if (true) {

	SetPanelStateu4("pd2u4");

	SetPanelStateu561("pd1u561");

SetWidgetRichText('u3', PopulateVariables('<b><span style=" font-family:\'Calibri\'; color:#FFFFFF; font-size:16px;">&nbsp; Products &amp; Sizing</span></b>'));

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Sizing Guides</span></b>'));

}

}

var u271 = document.getElementById('u271');
gv_vAlignTable['u271'] = 'center';
var u272 = document.getElementById('u272');

var u273 = document.getElementById('u273');
gv_vAlignTable['u273'] = 'center';
var u274 = document.getElementById('u274');

var u275 = document.getElementById('u275');
gv_vAlignTable['u275'] = 'center';
var u276 = document.getElementById('u276');

u276.style.cursor = 'pointer';
if (bIE) u276.attachEvent("onclick", Clicku276);
else u276.addEventListener("click", Clicku276, true);
function Clicku276(e)
{

if (true) {

	SetPanelStateu561("pd4u561");

	SetPanelStateu4("pd4u4");

}

}
gv_vAlignTable['u276'] = 'top';
var u277 = document.getElementById('u277');

u277.style.cursor = 'pointer';
if (bIE) u277.attachEvent("onclick", Clicku277);
else u277.addEventListener("click", Clicku277, true);
function Clicku277(e)
{

if (true) {

	SetPanelStateu4("pd4u4");

	SetPanelStateu561("pd2u561");

}

}
gv_vAlignTable['u277'] = 'top';
var u278 = document.getElementById('u278');

u278.style.cursor = 'pointer';
if (bIE) u278.attachEvent("onclick", Clicku278);
else u278.addEventListener("click", Clicku278, true);
function Clicku278(e)
{

if (true) {

	SetPanelStateu561("pd3u561");

	SetPanelStateu4("pd4u4");

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

	SetPanelStateu4("pd4u4");

	SetPanelStateu561("pd5u561");

}

}
gv_vAlignTable['u279'] = 'top';
var u280 = document.getElementById('u280');

var u281 = document.getElementById('u281');
gv_vAlignTable['u281'] = 'center';
var u282 = document.getElementById('u282');

var u283 = document.getElementById('u283');
gv_vAlignTable['u283'] = 'center';
var u284 = document.getElementById('u284');

u284.style.cursor = 'pointer';
if (bIE) u284.attachEvent("onclick", Clicku284);
else u284.addEventListener("click", Clicku284, true);
function Clicku284(e)
{

if (true) {

	SetPanelStateu561("pd4u561");

	SetPanelStateu4("pd4u4");

}

}
gv_vAlignTable['u284'] = 'top';
var u285 = document.getElementById('u285');

u285.style.cursor = 'pointer';
if (bIE) u285.attachEvent("onclick", Clicku285);
else u285.addEventListener("click", Clicku285, true);
function Clicku285(e)
{

if (true) {

	SetPanelStateu4("pd4u4");

	SetPanelStateu561("pd2u561");

}

}
gv_vAlignTable['u285'] = 'top';
var u286 = document.getElementById('u286');

u286.style.cursor = 'pointer';
if (bIE) u286.attachEvent("onclick", Clicku286);
else u286.addEventListener("click", Clicku286, true);
function Clicku286(e)
{

if (true) {

	SetPanelStateu561("pd3u561");

	SetPanelStateu4("pd4u4");

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

	SetPanelStateu4("pd4u4");

	SetPanelStateu561("pd5u561");

}

}
gv_vAlignTable['u287'] = 'top';
var u288 = document.getElementById('u288');

u288.style.cursor = 'pointer';
if (bIE) u288.attachEvent("onclick", Clicku288);
else u288.addEventListener("click", Clicku288, true);
function Clicku288(e)
{

if (true) {

	SetPanelStateu4("pd4u4");

	SetPanelStateu561("pd5u561");

}

}
gv_vAlignTable['u288'] = 'top';
var u289 = document.getElementById('u289');

u289.style.cursor = 'pointer';
if (bIE) u289.attachEvent("onclick", Clicku289);
else u289.addEventListener("click", Clicku289, true);
function Clicku289(e)
{

if (true) {

	SetPanelStateu4("pd4u4");

	SetPanelStateu561("pd5u561");

}

}
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

if (true) {

	SetPanelStateu561("pd4u561");

	SetPanelStateu4("pd4u4");

}

}
gv_vAlignTable['u492'] = 'top';
var u493 = document.getElementById('u493');

u493.style.cursor = 'pointer';
if (bIE) u493.attachEvent("onclick", Clicku493);
else u493.addEventListener("click", Clicku493, true);
function Clicku493(e)
{

if (true) {

	SetPanelStateu4("pd4u4");

	SetPanelStateu561("pd2u561");

}

}
gv_vAlignTable['u493'] = 'top';
var u494 = document.getElementById('u494');

u494.style.cursor = 'pointer';
if (bIE) u494.attachEvent("onclick", Clicku494);
else u494.addEventListener("click", Clicku494, true);
function Clicku494(e)
{

if (true) {

	SetPanelStateu561("pd3u561");

	SetPanelStateu4("pd4u4");

}

}
gv_vAlignTable['u494'] = 'top';
var u495 = document.getElementById('u495');

u495.style.cursor = 'pointer';
if (bIE) u495.attachEvent("onclick", Clicku495);
else u495.addEventListener("click", Clicku495, true);
function Clicku495(e)
{

if (true) {

	SetPanelStateu4("pd4u4");

	SetPanelStateu561("pd5u561");

}

}
gv_vAlignTable['u495'] = 'top';
var u496 = document.getElementById('u496');

var u100 = document.getElementById('u100');

var u101 = document.getElementById('u101');

u101.style.cursor = 'pointer';
if (bIE) u101.attachEvent("onclick", Clicku101);
else u101.addEventListener("click", Clicku101, true);
function Clicku101(e)
{

if (true) {

	SetPanelStateu100("pd2u100");

}

}

if (bIE) u101.attachEvent("onmouseover", MouseOveru101);
else u101.addEventListener("mouseover", MouseOveru101, true);
function MouseOveru101(e)
{
if (!IsTrueMouseOver('u101',e)) return;
if (true) {

	SetPanelStateu100("pd1u100");

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

if (true) {

	SetPanelStateu100("pd2u100");

	SetPanelStateu37("pd1u37");

	SetPanelStateu44("pd0u44");

	SetPanelStateu51("pd0u51");

	SetPanelStateu58("pd0u58");

	SetPanelStateu65("pd0u65");

	SetPanelStateu72("pd0u72");

	SetPanelStateu79("pd0u79");

	SetPanelStateu86("pd0u86");

	SetPanelStateu93("pd0u93");

	SetPanelStateu561("pd1u561");

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">FAQ question 10</span></b>'));

}

}

if (bIE) u103.attachEvent("onmouseout", MouseOutu103);
else u103.addEventListener("mouseout", MouseOutu103, true);
function MouseOutu103(e)
{
if (!IsTrueMouseOut('u103',e)) return;
if ((GetPanelState('u100')) == ('pd2u100')) {

	SetPanelStateu100("pd2u100");

}
else
if (true) {

	SetPanelStateu100("pd0u100");

}

}

var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'center';
var u105 = document.getElementById('u105');

var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'center';
var u107 = document.getElementById('u107');

var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'center';
var u109 = document.getElementById('u109');

var u297 = document.getElementById('u297');
gv_vAlignTable['u297'] = 'center';
var u298 = document.getElementById('u298');

u298.style.cursor = 'pointer';
if (bIE) u298.attachEvent("onclick", Clicku298);
else u298.addEventListener("click", Clicku298, true);
function Clicku298(e)
{

if (true) {

	SetPanelStateu4("pd5u4");

	SetPanelStateu561("pd1u561");

SetWidgetRichText('u3', PopulateVariables('<b><span style=" font-family:\'Calibri\'; color:#FFFFFF; font-size:16px;">&nbsp; Shipping, Delivery &amp; Returns</span></b>'));

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Delivery times</span></b>'));

}

}

var u299 = document.getElementById('u299');
gv_vAlignTable['u299'] = 'center';
var u500 = document.getElementById('u500');

u500.style.cursor = 'pointer';
if (bIE) u500.attachEvent("onclick", Clicku500);
else u500.addEventListener("click", Clicku500, true);
function Clicku500(e)
{

if (true) {

	SetPanelStateu561("pd4u561");

	SetPanelStateu4("pd4u4");

}

}
gv_vAlignTable['u500'] = 'top';
var u392 = document.getElementById('u392');

var u9 = document.getElementById('u9');

u9.style.cursor = 'pointer';
if (bIE) u9.attachEvent("onclick", Clicku9);
else u9.addEventListener("click", Clicku9, true);
function Clicku9(e)
{

if (true) {

	SetPanelStateu4("pd5u4");

	SetPanelStateu561("pd1u561");

SetWidgetRichText('u3', PopulateVariables('<b><span style=" font-family:\'Calibri\'; color:#FFFFFF; font-size:16px;">&nbsp; Shipping, Delivery &amp; Returns</span></b>'));

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Delivery times</span></b>'));

}

}

var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'center';
var u111 = document.getElementById('u111');

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'center';
var u113 = document.getElementById('u113');

var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'center';
var u115 = document.getElementById('u115');

u115.style.cursor = 'pointer';
if (bIE) u115.attachEvent("onclick", Clicku115);
else u115.addEventListener("click", Clicku115, true);
function Clicku115(e)
{

if (true) {

	SetPanelStateu4("pd1u4");

	SetPanelStateu561("pd1u561");

	SetPanelStateu121("pd0u121");

	SetPanelStateu150("pd0u150");

	SetPanelStateu157("pd0u157");

	SetPanelStateu164("pd0u164");

	SetPanelStateu171("pd0u171");

	SetPanelStateu178("pd0u178");

	SetPanelStateu185("pd0u185");

	SetPanelStateu192("pd0u192");

	SetPanelStateu199("pd0u199");

	SetPanelStateu206("pd0u206");

SetWidgetRichText('u3', PopulateVariables('<b><span style=" font-family:\'Calibri\'; color:#FFFFFF; font-size:16px;">&nbsp; Designing Online</span></b>'));

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Uploading images and photos</span></b>'));

}

}

var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'center';
var u117 = document.getElementById('u117');

var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'center';
var u119 = document.getElementById('u119');

var u510 = document.getElementById('u510');

var u32 = document.getElementById('u32');

u32.style.cursor = 'pointer';
if (bIE) u32.attachEvent("onclick", Clicku32);
else u32.addEventListener("click", Clicku32, true);
function Clicku32(e)
{

if (true) {

	SetPanelStateu4("pd4u4");

	SetPanelStateu561("pd5u561");

}

}
gv_vAlignTable['u32'] = 'top';
var u33 = document.getElementById('u33');

u33.style.cursor = 'pointer';
if (bIE) u33.attachEvent("onclick", Clicku33);
else u33.addEventListener("click", Clicku33, true);
function Clicku33(e)
{

if (true) {

SetWidgetRichText('u3', PopulateVariables('<b><span style=" font-family:\'Calibri\'; color:#FFFFFF; font-size:16px;">&nbsp; Top FAQs</span></b>'));

	SetPanelStateu4("pd0u4");

	SetPanelStateu37("pd0u37");

	SetPanelStateu561("pd0u561");

}

}

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u35 = document.getElementById('u35');

var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'center';
var u121 = document.getElementById('u121');

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

	SetPanelStateu121("pd0u121");

	SetPanelStateu561("pd1u561");

	SetPanelStateu206("pd0u206");

	SetPanelStateu199("pd0u199");

	SetPanelStateu192("pd0u192");

	SetPanelStateu185("pd0u185");

	SetPanelStateu178("pd0u178");

	SetPanelStateu171("pd0u171");

	SetPanelStateu164("pd0u164");

	SetPanelStateu157("pd0u157");

	SetPanelStateu150("pd0u150");

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Uploading images and photos</span></b>'));

}

}

if (bIE) u124.attachEvent("onmouseout", MouseOutu124);
else u124.addEventListener("mouseout", MouseOutu124, true);
function MouseOutu124(e)
{
if (!IsTrueMouseOut('u124',e)) return;
if ((GetPanelState('u121')) == ('pd0u121')) {

	SetPanelStateu121("pd0u121");

}
else
if (true) {

	SetPanelStateu121("pd2u121");

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

	SetPanelStateu121("pd0u121");

}

}

if (bIE) u126.attachEvent("onmouseover", MouseOveru126);
else u126.addEventListener("mouseover", MouseOveru126, true);
function MouseOveru126(e)
{
if (!IsTrueMouseOver('u126',e)) return;
if (true) {

	SetPanelStateu121("pd1u121");

}

}

var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u128 = document.getElementById('u128');

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

	SetPanelStateu561("pd4u561");

	SetPanelStateu4("pd4u4");

}

}
gv_vAlignTable['u132'] = 'top';
var u133 = document.getElementById('u133');

u133.style.cursor = 'pointer';
if (bIE) u133.attachEvent("onclick", Clicku133);
else u133.addEventListener("click", Clicku133, true);
function Clicku133(e)
{

if (true) {

	SetPanelStateu4("pd4u4");

	SetPanelStateu561("pd2u561");

}

}
gv_vAlignTable['u133'] = 'top';
var u134 = document.getElementById('u134');

u134.style.cursor = 'pointer';
if (bIE) u134.attachEvent("onclick", Clicku134);
else u134.addEventListener("click", Clicku134, true);
function Clicku134(e)
{

if (true) {

	SetPanelStateu561("pd3u561");

	SetPanelStateu4("pd4u4");

}

}
gv_vAlignTable['u134'] = 'top';
var u135 = document.getElementById('u135');

u135.style.cursor = 'pointer';
if (bIE) u135.attachEvent("onclick", Clicku135);
else u135.addEventListener("click", Clicku135, true);
function Clicku135(e)
{

if (true) {

	SetPanelStateu4("pd4u4");

	SetPanelStateu561("pd5u561");

}

}
gv_vAlignTable['u135'] = 'top';
var u136 = document.getElementById('u136');

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

	SetPanelStateu561("pd4u561");

	SetPanelStateu4("pd4u4");

}

}
gv_vAlignTable['u140'] = 'top';
var u141 = document.getElementById('u141');

u141.style.cursor = 'pointer';
if (bIE) u141.attachEvent("onclick", Clicku141);
else u141.addEventListener("click", Clicku141, true);
function Clicku141(e)
{

if (true) {

	SetPanelStateu4("pd4u4");

	SetPanelStateu561("pd2u561");

}

}
gv_vAlignTable['u141'] = 'top';
var u142 = document.getElementById('u142');

u142.style.cursor = 'pointer';
if (bIE) u142.attachEvent("onclick", Clicku142);
else u142.addEventListener("click", Clicku142, true);
function Clicku142(e)
{

if (true) {

	SetPanelStateu561("pd3u561");

	SetPanelStateu4("pd4u4");

}

}
gv_vAlignTable['u142'] = 'top';
var u143 = document.getElementById('u143');

u143.style.cursor = 'pointer';
if (bIE) u143.attachEvent("onclick", Clicku143);
else u143.addEventListener("click", Clicku143, true);
function Clicku143(e)
{

if (true) {

	SetPanelStateu4("pd4u4");

	SetPanelStateu561("pd5u561");

}

}
gv_vAlignTable['u143'] = 'top';
var u144 = document.getElementById('u144');

u144.style.cursor = 'pointer';
if (bIE) u144.attachEvent("onclick", Clicku144);
else u144.addEventListener("click", Clicku144, true);
function Clicku144(e)
{

if (true) {

	SetPanelStateu4("pd4u4");

	SetPanelStateu561("pd5u561");

}

}
gv_vAlignTable['u144'] = 'top';
var u145 = document.getElementById('u145');

u145.style.cursor = 'pointer';
if (bIE) u145.attachEvent("onclick", Clicku145);
else u145.addEventListener("click", Clicku145, true);
function Clicku145(e)
{

if (true) {

	SetPanelStateu4("pd4u4");

	SetPanelStateu561("pd5u561");

}

}
gv_vAlignTable['u145'] = 'top';
var u146 = document.getElementById('u146');

u146.style.cursor = 'pointer';
if (bIE) u146.attachEvent("onclick", Clicku146);
else u146.addEventListener("click", Clicku146, true);
function Clicku146(e)
{

if (true) {

SetWidgetRichText('u3', PopulateVariables('<b><span style=" font-family:\'Calibri\'; color:#FFFFFF; font-size:16px;">&nbsp; Top FAQs</span></b>'));

	SetPanelStateu4("pd0u4");

	SetPanelStateu561("pd0u561");

}

}

var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'center';
var u148 = document.getElementById('u148');

u148.style.cursor = 'pointer';
if (bIE) u148.attachEvent("onclick", Clicku148);
else u148.addEventListener("click", Clicku148, true);
function Clicku148(e)
{

if (true) {

	SetPanelStateu4("pd1u4");

	SetPanelStateu561("pd1u561");

SetWidgetRichText('u3', PopulateVariables('<b><span style=" font-family:\'Calibri\'; color:#FFFFFF; font-size:16px;">&nbsp; Designing Online</span></b>'));

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Uploading an image</span></b>'));

}

}

var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'center';
var u501 = document.getElementById('u501');

u501.style.cursor = 'pointer';
if (bIE) u501.attachEvent("onclick", Clicku501);
else u501.addEventListener("click", Clicku501, true);
function Clicku501(e)
{

if (true) {

	SetPanelStateu4("pd4u4");

	SetPanelStateu561("pd2u561");

}

}
gv_vAlignTable['u501'] = 'top';
var u502 = document.getElementById('u502');

u502.style.cursor = 'pointer';
if (bIE) u502.attachEvent("onclick", Clicku502);
else u502.addEventListener("click", Clicku502, true);
function Clicku502(e)
{

if (true) {

	SetPanelStateu561("pd3u561");

	SetPanelStateu4("pd4u4");

}

}
gv_vAlignTable['u502'] = 'top';
var u503 = document.getElementById('u503');

u503.style.cursor = 'pointer';
if (bIE) u503.attachEvent("onclick", Clicku503);
else u503.addEventListener("click", Clicku503, true);
function Clicku503(e)
{

if (true) {

	SetPanelStateu4("pd4u4");

	SetPanelStateu561("pd5u561");

}

}
gv_vAlignTable['u503'] = 'top';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u11 = document.getElementById('u11');

u11.style.cursor = 'pointer';
if (bIE) u11.attachEvent("onclick", Clicku11);
else u11.addEventListener("click", Clicku11, true);
function Clicku11(e)
{

if (true) {

	SetPanelStateu4("pd4u4");

	SetPanelStateu561("pd1u561");

	SetPanelStateu400("pd0u400");

	SetPanelStateu414("pd0u414");

	SetPanelStateu407("pd0u407");

	SetPanelStateu421("pd0u421");

	SetPanelStateu428("pd0u428");

	SetPanelStateu435("pd0u435");

SetWidgetRichText('u3', PopulateVariables('<b><span style=" font-family:\'Calibri\'; color:#FFFFFF; font-size:16px;">&nbsp; Creative Services &amp; Printing</span></b>'));

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">What is a &quot;redraw&quot;?</span></b>'));

}

}

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u13 = document.getElementById('u13');

u13.style.cursor = 'pointer';
if (bIE) u13.attachEvent("onclick", Clicku13);
else u13.addEventListener("click", Clicku13, true);
function Clicku13(e)
{

if (true) {

	SetPanelStateu4("pd2u4");

	SetPanelStateu561("pd1u561");

	SetPanelStateu242("pd0u242");

	SetPanelStateu249("pd0u249");

	SetPanelStateu256("pd0u256");

	SetPanelStateu263("pd0u263");

SetWidgetRichText('u3', PopulateVariables('<b><span style=" font-family:\'Calibri\'; color:#FFFFFF; font-size:16px;">&nbsp; Products &amp; Sizing</span></b>'));

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Sizing Guides</span></b>'));

}

}

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u15 = document.getElementById('u15');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u17 = document.getElementById('u17');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u19 = document.getElementById('u19');

u19.style.cursor = 'pointer';
if (bIE) u19.attachEvent("onclick", Clicku19);
else u19.addEventListener("click", Clicku19, true);
function Clicku19(e)
{

if (true) {

	SetPanelStateu561("pd4u561");

	SetPanelStateu4("pd4u4");

}

}
gv_vAlignTable['u19'] = 'top';
var u150 = document.getElementById('u150');

var u151 = document.getElementById('u151');

u151.style.cursor = 'pointer';
if (bIE) u151.attachEvent("onclick", Clicku151);
else u151.addEventListener("click", Clicku151, true);
function Clicku151(e)
{

if (true) {

	SetPanelStateu150("pd2u150");

}

}

if (bIE) u151.attachEvent("onmouseover", MouseOveru151);
else u151.addEventListener("mouseover", MouseOveru151, true);
function MouseOveru151(e)
{
if (!IsTrueMouseOver('u151',e)) return;
if (true) {

	SetPanelStateu150("pd1u150");

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

if (true) {

	SetPanelStateu150("pd2u150");

	SetPanelStateu561("pd1u561");

	SetPanelStateu206("pd0u206");

	SetPanelStateu199("pd0u199");

	SetPanelStateu192("pd0u192");

	SetPanelStateu185("pd0u185");

	SetPanelStateu178("pd0u178");

	SetPanelStateu171("pd0u171");

	SetPanelStateu164("pd0u164");

	SetPanelStateu121("pd2u121");

	SetPanelStateu157("pd0u157");

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Design size constraints</span></b>'));

}

}

if (bIE) u153.attachEvent("onmouseout", MouseOutu153);
else u153.addEventListener("mouseout", MouseOutu153, true);
function MouseOutu153(e)
{
if (!IsTrueMouseOut('u153',e)) return;
if ((GetPanelState('u150')) == ('pd2u150')) {

	SetPanelStateu150("pd2u150");

}
else
if (true) {

	SetPanelStateu150("pd0u150");

}

}

var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'center';
var u155 = document.getElementById('u155');

var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'center';
var u157 = document.getElementById('u157');

var u158 = document.getElementById('u158');

u158.style.cursor = 'pointer';
if (bIE) u158.attachEvent("onclick", Clicku158);
else u158.addEventListener("click", Clicku158, true);
function Clicku158(e)
{

if (true) {

	SetPanelStateu157("pd2u157");

}

}

if (bIE) u158.attachEvent("onmouseover", MouseOveru158);
else u158.addEventListener("mouseover", MouseOveru158, true);
function MouseOveru158(e)
{
if (!IsTrueMouseOver('u158',e)) return;
if (true) {

	SetPanelStateu157("pd1u157");

}

}

var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'center';
var u511 = document.getElementById('u511');
gv_vAlignTable['u511'] = 'center';
var u512 = document.getElementById('u512');

var u513 = document.getElementById('u513');

var u20 = document.getElementById('u20');

u20.style.cursor = 'pointer';
if (bIE) u20.attachEvent("onclick", Clicku20);
else u20.addEventListener("click", Clicku20, true);
function Clicku20(e)
{

if (true) {

	SetPanelStateu4("pd4u4");

	SetPanelStateu561("pd2u561");

}

}
gv_vAlignTable['u20'] = 'top';
var u21 = document.getElementById('u21');

u21.style.cursor = 'pointer';
if (bIE) u21.attachEvent("onclick", Clicku21);
else u21.addEventListener("click", Clicku21, true);
function Clicku21(e)
{

if (true) {

	SetPanelStateu561("pd3u561");

	SetPanelStateu4("pd4u4");

}

}
gv_vAlignTable['u21'] = 'top';
var u22 = document.getElementById('u22');

u22.style.cursor = 'pointer';
if (bIE) u22.attachEvent("onclick", Clicku22);
else u22.addEventListener("click", Clicku22, true);
function Clicku22(e)
{

if (true) {

	SetPanelStateu4("pd4u4");

	SetPanelStateu561("pd5u561");

}

}
gv_vAlignTable['u22'] = 'top';
var u23 = document.getElementById('u23');

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
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

	SetPanelStateu561("pd4u561");

	SetPanelStateu4("pd4u4");

}

}
gv_vAlignTable['u27'] = 'top';
var u28 = document.getElementById('u28');

u28.style.cursor = 'pointer';
if (bIE) u28.attachEvent("onclick", Clicku28);
else u28.addEventListener("click", Clicku28, true);
function Clicku28(e)
{

if (true) {

	SetPanelStateu4("pd4u4");

	SetPanelStateu561("pd2u561");

}

}
gv_vAlignTable['u28'] = 'top';
var u29 = document.getElementById('u29');

u29.style.cursor = 'pointer';
if (bIE) u29.attachEvent("onclick", Clicku29);
else u29.addEventListener("click", Clicku29, true);
function Clicku29(e)
{

if (true) {

	SetPanelStateu561("pd3u561");

	SetPanelStateu4("pd4u4");

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

	SetPanelStateu157("pd2u157");

	SetPanelStateu561("pd1u561");

	SetPanelStateu206("pd0u206");

	SetPanelStateu199("pd0u199");

	SetPanelStateu192("pd0u192");

	SetPanelStateu185("pd0u185");

	SetPanelStateu178("pd0u178");

	SetPanelStateu171("pd0u171");

	SetPanelStateu164("pd0u164");

	SetPanelStateu150("pd0u150");

	SetPanelStateu121("pd2u121");

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Sleeve, leg, and hood prints</span></b>'));

}

}

if (bIE) u160.attachEvent("onmouseout", MouseOutu160);
else u160.addEventListener("mouseout", MouseOutu160, true);
function MouseOutu160(e)
{
if (!IsTrueMouseOut('u160',e)) return;
if ((GetPanelState('u157')) == ('pd2u157')) {

	SetPanelStateu157("pd2u157");

}
else
if (true) {

	SetPanelStateu157("pd0u157");

}

}

var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'center';
var u162 = document.getElementById('u162');

var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'center';
var u164 = document.getElementById('u164');

var u165 = document.getElementById('u165');

u165.style.cursor = 'pointer';
if (bIE) u165.attachEvent("onclick", Clicku165);
else u165.addEventListener("click", Clicku165, true);
function Clicku165(e)
{

if (true) {

	SetPanelStateu164("pd2u164");

}

}

if (bIE) u165.attachEvent("onmouseover", MouseOveru165);
else u165.addEventListener("mouseover", MouseOveru165, true);
function MouseOveru165(e)
{
if (!IsTrueMouseOver('u165',e)) return;
if (true) {

	SetPanelStateu164("pd1u164");

}

}

var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'center';
var u167 = document.getElementById('u167');

u167.style.cursor = 'pointer';
if (bIE) u167.attachEvent("onclick", Clicku167);
else u167.addEventListener("click", Clicku167, true);
function Clicku167(e)
{

if (true) {

	SetPanelStateu164("pd2u164");

	SetPanelStateu561("pd1u561");

	SetPanelStateu206("pd0u206");

	SetPanelStateu199("pd0u199");

	SetPanelStateu192("pd0u192");

	SetPanelStateu185("pd0u185");

	SetPanelStateu178("pd0u178");

	SetPanelStateu171("pd0u171");

	SetPanelStateu157("pd0u157");

	SetPanelStateu150("pd0u150");

	SetPanelStateu121("pd2u121");

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Names and Numbers</span></b>'));

}

}

if (bIE) u167.attachEvent("onmouseout", MouseOutu167);
else u167.addEventListener("mouseout", MouseOutu167, true);
function MouseOutu167(e)
{
if (!IsTrueMouseOut('u167',e)) return;
if ((GetPanelState('u164')) == ('pd2u164')) {

	SetPanelStateu164("pd2u164");

}
else
if (true) {

	SetPanelStateu164("pd0u164");

}

}

var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'center';
var u169 = document.getElementById('u169');

var u521 = document.getElementById('u521');
gv_vAlignTable['u521'] = 'center';
var u522 = document.getElementById('u522');

u522.style.cursor = 'pointer';
if (bIE) u522.attachEvent("onclick", Clicku522);
else u522.addEventListener("click", Clicku522, true);
function Clicku522(e)
{

if (true) {

	SetPanelStateu519("pd2u519");

	SetPanelStateu512("pd1u512");

	SetPanelStateu526("pd0u526");

	SetPanelStateu561("pd1u561");

	SetPanelStateu533("pd0u533");

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Return Policy</span></b>'));

}

}

if (bIE) u522.attachEvent("onmouseout", MouseOutu522);
else u522.addEventListener("mouseout", MouseOutu522, true);
function MouseOutu522(e)
{
if (!IsTrueMouseOut('u522',e)) return;
if ((GetPanelState('u519')) == ('pd2u519')) {

	SetPanelStateu519("pd2u519");

}
else
if (true) {

	SetPanelStateu519("pd0u519");

}

}

var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'center';
var u30 = document.getElementById('u30');

u30.style.cursor = 'pointer';
if (bIE) u30.attachEvent("onclick", Clicku30);
else u30.addEventListener("click", Clicku30, true);
function Clicku30(e)
{

if (true) {

	SetPanelStateu4("pd4u4");

	SetPanelStateu561("pd5u561");

}

}
gv_vAlignTable['u30'] = 'top';
var u31 = document.getElementById('u31');

u31.style.cursor = 'pointer';
if (bIE) u31.attachEvent("onclick", Clicku31);
else u31.addEventListener("click", Clicku31, true);
function Clicku31(e)
{

if (true) {

	SetPanelStateu4("pd4u4");

	SetPanelStateu561("pd5u561");

}

}
gv_vAlignTable['u31'] = 'top';
var u206 = document.getElementById('u206');

var u207 = document.getElementById('u207');

u207.style.cursor = 'pointer';
if (bIE) u207.attachEvent("onclick", Clicku207);
else u207.addEventListener("click", Clicku207, true);
function Clicku207(e)
{

if (true) {

	SetPanelStateu206("pd2u206");

}

}

if (bIE) u207.attachEvent("onmouseover", MouseOveru207);
else u207.addEventListener("mouseover", MouseOveru207, true);
function MouseOveru207(e)
{
if (!IsTrueMouseOver('u207',e)) return;
if (true) {

	SetPanelStateu206("pd1u206");

}

}

var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'center';
var u209 = document.getElementById('u209');

u209.style.cursor = 'pointer';
if (bIE) u209.attachEvent("onclick", Clicku209);
else u209.addEventListener("click", Clicku209, true);
function Clicku209(e)
{

if (true) {

	SetPanelStateu206("pd2u206");

	SetPanelStateu561("pd1u561");

	SetPanelStateu199("pd0u199");

	SetPanelStateu192("pd0u192");

	SetPanelStateu185("pd0u185");

	SetPanelStateu178("pd0u178");

	SetPanelStateu171("pd0u171");

	SetPanelStateu164("pd0u164");

	SetPanelStateu157("pd0u157");

	SetPanelStateu150("pd0u150");

	SetPanelStateu121("pd2u121");

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Advanced design techniques</span></b>'));

}

}

if (bIE) u209.attachEvent("onmouseout", MouseOutu209);
else u209.addEventListener("mouseout", MouseOutu209, true);
function MouseOutu209(e)
{
if (!IsTrueMouseOut('u209',e)) return;
if ((GetPanelState('u206')) == ('pd2u206')) {

	SetPanelStateu206("pd2u206");

}
else
if (true) {

	SetPanelStateu206("pd0u206");

}

}

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u37 = document.getElementById('u37');

var u38 = document.getElementById('u38');

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'center';
var u171 = document.getElementById('u171');

var u172 = document.getElementById('u172');

u172.style.cursor = 'pointer';
if (bIE) u172.attachEvent("onclick", Clicku172);
else u172.addEventListener("click", Clicku172, true);
function Clicku172(e)
{

if (true) {

	SetPanelStateu171("pd2u171");

}

}

if (bIE) u172.attachEvent("onmouseover", MouseOveru172);
else u172.addEventListener("mouseover", MouseOveru172, true);
function MouseOveru172(e)
{
if (!IsTrueMouseOver('u172',e)) return;
if (true) {

	SetPanelStateu171("pd1u171");

}

}

var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'center';
var u174 = document.getElementById('u174');

u174.style.cursor = 'pointer';
if (bIE) u174.attachEvent("onclick", Clicku174);
else u174.addEventListener("click", Clicku174, true);
function Clicku174(e)
{

if (true) {

	SetPanelStateu171("pd2u171");

	SetPanelStateu561("pd1u561");

	SetPanelStateu206("pd0u206");

	SetPanelStateu199("pd0u199");

	SetPanelStateu192("pd0u192");

	SetPanelStateu185("pd0u185");

	SetPanelStateu178("pd0u178");

	SetPanelStateu164("pd0u164");

	SetPanelStateu157("pd0u157");

	SetPanelStateu150("pd0u150");

	SetPanelStateu121("pd2u121");

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Using design templates</span></b>'));

}

}

if (bIE) u174.attachEvent("onmouseout", MouseOutu174);
else u174.addEventListener("mouseout", MouseOutu174, true);
function MouseOutu174(e)
{
if (!IsTrueMouseOut('u174',e)) return;
if ((GetPanelState('u171')) == ('pd2u171')) {

	SetPanelStateu171("pd2u171");

}
else
if (true) {

	SetPanelStateu171("pd0u171");

}

}

var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'center';
var u176 = document.getElementById('u176');

var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'center';
var u178 = document.getElementById('u178');

var u179 = document.getElementById('u179');

u179.style.cursor = 'pointer';
if (bIE) u179.attachEvent("onclick", Clicku179);
else u179.addEventListener("click", Clicku179, true);
function Clicku179(e)
{

if (true) {

	SetPanelStateu178("pd2u178");

}

}

if (bIE) u179.attachEvent("onmouseover", MouseOveru179);
else u179.addEventListener("mouseover", MouseOveru179, true);
function MouseOveru179(e)
{
if (!IsTrueMouseOver('u179',e)) return;
if (true) {

	SetPanelStateu178("pd1u178");

}

}

var u531 = document.getElementById('u531');

var u532 = document.getElementById('u532');
gv_vAlignTable['u532'] = 'center';
var u533 = document.getElementById('u533');

var u40 = document.getElementById('u40');

u40.style.cursor = 'pointer';
if (bIE) u40.attachEvent("onclick", Clicku40);
else u40.addEventListener("click", Clicku40, true);
function Clicku40(e)
{

if (true) {

	SetPanelStateu37("pd0u37");

}

}

if (bIE) u40.attachEvent("onmouseover", MouseOveru40);
else u40.addEventListener("mouseover", MouseOveru40, true);
function MouseOveru40(e)
{
if (!IsTrueMouseOver('u40',e)) return;
if (true) {

	SetPanelStateu37("pd2u37");

}

}

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u42 = document.getElementById('u42');

u42.style.cursor = 'pointer';
if (bIE) u42.attachEvent("onclick", Clicku42);
else u42.addEventListener("click", Clicku42, true);
function Clicku42(e)
{

if (true) {

	SetPanelStateu37("pd0u37");

	SetPanelStateu44("pd0u44");

	SetPanelStateu51("pd0u51");

	SetPanelStateu58("pd0u58");

	SetPanelStateu65("pd0u65");

	SetPanelStateu72("pd0u72");

	SetPanelStateu79("pd0u79");

	SetPanelStateu86("pd0u86");

	SetPanelStateu93("pd0u93");

	SetPanelStateu100("pd0u100");

	SetPanelStateu561("pd0u561");

}

}

if (bIE) u42.attachEvent("onmouseout", MouseOutu42);
else u42.addEventListener("mouseout", MouseOutu42, true);
function MouseOutu42(e)
{
if (!IsTrueMouseOut('u42',e)) return;
if ((GetPanelState('u37')) == ('pd0u37')) {

	SetPanelStateu37("pd0u37");

}
else
if (true) {

	SetPanelStateu37("pd1u37");

}

}

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u44 = document.getElementById('u44');

var u45 = document.getElementById('u45');

u45.style.cursor = 'pointer';
if (bIE) u45.attachEvent("onclick", Clicku45);
else u45.addEventListener("click", Clicku45, true);
function Clicku45(e)
{

if (true) {

	SetPanelStateu44("pd2u44");

}

}

if (bIE) u45.attachEvent("onmouseover", MouseOveru45);
else u45.addEventListener("mouseover", MouseOveru45, true);
function MouseOveru45(e)
{
if (!IsTrueMouseOver('u45',e)) return;
if (true) {

	SetPanelStateu44("pd1u44");

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

	SetPanelStateu44("pd2u44");

	SetPanelStateu37("pd1u37");

	SetPanelStateu51("pd0u51");

	SetPanelStateu58("pd0u58");

	SetPanelStateu65("pd0u65");

	SetPanelStateu72("pd0u72");

	SetPanelStateu79("pd0u79");

	SetPanelStateu86("pd0u86");

	SetPanelStateu93("pd0u93");

	SetPanelStateu100("pd0u100");

	SetPanelStateu561("pd1u561");

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">FAQ question 2</span></b>'));

}

}

if (bIE) u47.attachEvent("onmouseout", MouseOutu47);
else u47.addEventListener("mouseout", MouseOutu47, true);
function MouseOutu47(e)
{
if (!IsTrueMouseOut('u47',e)) return;
if ((GetPanelState('u44')) == ('pd2u44')) {

	SetPanelStateu44("pd2u44");

}
else
if (true) {

	SetPanelStateu44("pd0u44");

}

}

var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'center';
var u49 = document.getElementById('u49');

var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'center';
var u181 = document.getElementById('u181');

u181.style.cursor = 'pointer';
if (bIE) u181.attachEvent("onclick", Clicku181);
else u181.addEventListener("click", Clicku181, true);
function Clicku181(e)
{

if (true) {

	SetPanelStateu178("pd2u178");

	SetPanelStateu561("pd1u561");

	SetPanelStateu206("pd0u206");

	SetPanelStateu199("pd0u199");

	SetPanelStateu192("pd0u192");

	SetPanelStateu185("pd0u185");

	SetPanelStateu171("pd0u171");

	SetPanelStateu164("pd0u164");

	SetPanelStateu157("pd0u157");

	SetPanelStateu150("pd0u150");

	SetPanelStateu121("pd2u121");

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Saving and sharing your design</span></b>'));

}

}

if (bIE) u181.attachEvent("onmouseout", MouseOutu181);
else u181.addEventListener("mouseout", MouseOutu181, true);
function MouseOutu181(e)
{
if (!IsTrueMouseOut('u181',e)) return;
if ((GetPanelState('u178')) == ('pd2u178')) {

	SetPanelStateu178("pd2u178");

}
else
if (true) {

	SetPanelStateu178("pd0u178");

}

}

var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'center';
var u183 = document.getElementById('u183');

var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'center';
var u185 = document.getElementById('u185');

var u186 = document.getElementById('u186');

u186.style.cursor = 'pointer';
if (bIE) u186.attachEvent("onclick", Clicku186);
else u186.addEventListener("click", Clicku186, true);
function Clicku186(e)
{

if (true) {

	SetPanelStateu185("pd2u185");

}

}

if (bIE) u186.attachEvent("onmouseover", MouseOveru186);
else u186.addEventListener("mouseover", MouseOveru186, true);
function MouseOveru186(e)
{
if (!IsTrueMouseOver('u186',e)) return;
if (true) {

	SetPanelStateu185("pd1u185");

}

}

var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'center';
var u188 = document.getElementById('u188');

u188.style.cursor = 'pointer';
if (bIE) u188.attachEvent("onclick", Clicku188);
else u188.addEventListener("click", Clicku188, true);
function Clicku188(e)
{

if (true) {

	SetPanelStateu185("pd2u185");

	SetPanelStateu561("pd1u561");

	SetPanelStateu206("pd0u206");

	SetPanelStateu199("pd0u199");

	SetPanelStateu192("pd0u192");

	SetPanelStateu178("pd0u178");

	SetPanelStateu171("pd0u171");

	SetPanelStateu164("pd0u164");

	SetPanelStateu157("pd0u157");

	SetPanelStateu150("pd0u150");

	SetPanelStateu121("pd2u121");

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Retrieving your design</span></b>'));

}

}

if (bIE) u188.attachEvent("onmouseout", MouseOutu188);
else u188.addEventListener("mouseout", MouseOutu188, true);
function MouseOutu188(e)
{
if (!IsTrueMouseOut('u188',e)) return;
if ((GetPanelState('u185')) == ('pd2u185')) {

	SetPanelStateu185("pd2u185");

}
else
if (true) {

	SetPanelStateu185("pd0u185");

}

}

var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'center';
var u541 = document.getElementById('u541');
gv_vAlignTable['u541'] = 'center';
var u542 = document.getElementById('u542');

u542.style.cursor = 'pointer';
if (bIE) u542.attachEvent("onclick", Clicku542);
else u542.addEventListener("click", Clicku542, true);
function Clicku542(e)
{

if (true) {

	SetPanelStateu4("pd4u4");

	SetPanelStateu561("pd1u561");

	SetPanelStateu400("pd0u400");

	SetPanelStateu414("pd0u414");

	SetPanelStateu407("pd0u407");

	SetPanelStateu421("pd0u421");

	SetPanelStateu428("pd0u428");

	SetPanelStateu435("pd0u435");

SetWidgetRichText('u3', PopulateVariables('<b><span style=" font-family:\'Calibri\'; color:#FFFFFF; font-size:16px;">&nbsp; Creative Services &amp; Printing</span></b>'));

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">What is a &quot;redraw&quot;?</span></b>'));

}

}

var u543 = document.getElementById('u543');
gv_vAlignTable['u543'] = 'center';
var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'center';
var u51 = document.getElementById('u51');

var u52 = document.getElementById('u52');

u52.style.cursor = 'pointer';
if (bIE) u52.attachEvent("onclick", Clicku52);
else u52.addEventListener("click", Clicku52, true);
function Clicku52(e)
{

if (true) {

	SetPanelStateu51("pd2u51");

}

}

if (bIE) u52.attachEvent("onmouseover", MouseOveru52);
else u52.addEventListener("mouseover", MouseOveru52, true);
function MouseOveru52(e)
{
if (!IsTrueMouseOver('u52',e)) return;
if (true) {

	SetPanelStateu51("pd1u51");

}

}

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u54 = document.getElementById('u54');

u54.style.cursor = 'pointer';
if (bIE) u54.attachEvent("onclick", Clicku54);
else u54.addEventListener("click", Clicku54, true);
function Clicku54(e)
{

if (true) {

	SetPanelStateu51("pd2u51");

	SetPanelStateu561("pd1u561");

	SetPanelStateu37("pd1u37");

	SetPanelStateu44("pd0u44");

	SetPanelStateu58("pd0u58");

	SetPanelStateu65("pd0u65");

	SetPanelStateu72("pd0u72");

	SetPanelStateu79("pd0u79");

	SetPanelStateu86("pd0u86");

	SetPanelStateu93("pd0u93");

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">FAQ question 3</span></b>'));

}

}

if (bIE) u54.attachEvent("onmouseout", MouseOutu54);
else u54.addEventListener("mouseout", MouseOutu54, true);
function MouseOutu54(e)
{
if (!IsTrueMouseOut('u54',e)) return;
if ((GetPanelState('u51')) == ('pd2u51')) {

	SetPanelStateu51("pd2u51");

}
else
if (true) {

	SetPanelStateu51("pd0u51");

}

}

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u56 = document.getElementById('u56');

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u58 = document.getElementById('u58');

var u59 = document.getElementById('u59');

u59.style.cursor = 'pointer';
if (bIE) u59.attachEvent("onclick", Clicku59);
else u59.addEventListener("click", Clicku59, true);
function Clicku59(e)
{

if (true) {

	SetPanelStateu58("pd2u58");

}

}

if (bIE) u59.attachEvent("onmouseover", MouseOveru59);
else u59.addEventListener("mouseover", MouseOveru59, true);
function MouseOveru59(e)
{
if (!IsTrueMouseOver('u59',e)) return;
if (true) {

	SetPanelStateu58("pd1u58");

}

}

var u190 = document.getElementById('u190');

var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'center';
var u192 = document.getElementById('u192');

var u193 = document.getElementById('u193');

u193.style.cursor = 'pointer';
if (bIE) u193.attachEvent("onclick", Clicku193);
else u193.addEventListener("click", Clicku193, true);
function Clicku193(e)
{

if (true) {

	SetPanelStateu192("pd2u192");

}

}

if (bIE) u193.attachEvent("onmouseover", MouseOveru193);
else u193.addEventListener("mouseover", MouseOveru193, true);
function MouseOveru193(e)
{
if (!IsTrueMouseOver('u193',e)) return;
if (true) {

	SetPanelStateu192("pd1u192");

}

}

var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'center';
var u195 = document.getElementById('u195');

u195.style.cursor = 'pointer';
if (bIE) u195.attachEvent("onclick", Clicku195);
else u195.addEventListener("click", Clicku195, true);
function Clicku195(e)
{

if (true) {

	SetPanelStateu192("pd2u192");

	SetPanelStateu561("pd1u561");

	SetPanelStateu206("pd0u206");

	SetPanelStateu199("pd0u199");

	SetPanelStateu185("pd0u185");

	SetPanelStateu178("pd0u178");

	SetPanelStateu171("pd0u171");

	SetPanelStateu164("pd0u164");

	SetPanelStateu157("pd0u157");

	SetPanelStateu150("pd0u150");

	SetPanelStateu121("pd2u121");

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Text effects and fonts</span></b>'));

}

}

if (bIE) u195.attachEvent("onmouseout", MouseOutu195);
else u195.addEventListener("mouseout", MouseOutu195, true);
function MouseOutu195(e)
{
if (!IsTrueMouseOut('u195',e)) return;
if ((GetPanelState('u192')) == ('pd2u192')) {

	SetPanelStateu192("pd2u192");

}
else
if (true) {

	SetPanelStateu192("pd0u192");

}

}

var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'center';
var u197 = document.getElementById('u197');

var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'center';
var u199 = document.getElementById('u199');

var u551 = document.getElementById('u551');
gv_vAlignTable['u551'] = 'center';
var u552 = document.getElementById('u552');

u552.style.cursor = 'pointer';
if (bIE) u552.attachEvent("onclick", Clicku552);
else u552.addEventListener("click", Clicku552, true);
function Clicku552(e)
{

if (true) {

	SetPanelStateu4("pd1u4");

	SetPanelStateu561("pd1u561");

	SetPanelStateu121("pd0u121");

	SetPanelStateu150("pd0u150");

	SetPanelStateu157("pd0u157");

	SetPanelStateu164("pd0u164");

	SetPanelStateu171("pd0u171");

	SetPanelStateu178("pd0u178");

	SetPanelStateu185("pd0u185");

	SetPanelStateu192("pd0u192");

	SetPanelStateu199("pd0u199");

	SetPanelStateu206("pd0u206");

SetWidgetRichText('u3', PopulateVariables('<b><span style=" font-family:\'Calibri\'; color:#FFFFFF; font-size:16px;">&nbsp; Designing Online</span></b>'));

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Uploading images and photos</span></b>'));

}

}

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

	SetPanelStateu58("pd2u58");

	SetPanelStateu37("pd1u37");

	SetPanelStateu44("pd0u44");

	SetPanelStateu51("pd0u51");

	SetPanelStateu65("pd0u65");

	SetPanelStateu72("pd0u72");

	SetPanelStateu79("pd0u79");

	SetPanelStateu86("pd0u86");

	SetPanelStateu93("pd0u93");

	SetPanelStateu100("pd0u100");

	SetPanelStateu561("pd1u561");

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">FAQ question 4</span></b>'));

}

}

if (bIE) u61.attachEvent("onmouseout", MouseOutu61);
else u61.addEventListener("mouseout", MouseOutu61, true);
function MouseOutu61(e)
{
if (!IsTrueMouseOut('u61',e)) return;
if ((GetPanelState('u58')) == ('pd2u58')) {

	SetPanelStateu58("pd2u58");

}
else
if (true) {

	SetPanelStateu58("pd0u58");

}

}

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'center';
var u63 = document.getElementById('u63');

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u65 = document.getElementById('u65');

var u66 = document.getElementById('u66');

u66.style.cursor = 'pointer';
if (bIE) u66.attachEvent("onclick", Clicku66);
else u66.addEventListener("click", Clicku66, true);
function Clicku66(e)
{

if (true) {

	SetPanelStateu65("pd2u65");

}

}

if (bIE) u66.attachEvent("onmouseover", MouseOveru66);
else u66.addEventListener("mouseover", MouseOveru66, true);
function MouseOveru66(e)
{
if (!IsTrueMouseOver('u66',e)) return;
if (true) {

	SetPanelStateu65("pd1u65");

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

	SetPanelStateu37("pd1u37");

	SetPanelStateu44("pd0u44");

	SetPanelStateu51("pd0u51");

	SetPanelStateu58("pd0u58");

	SetPanelStateu72("pd0u72");

	SetPanelStateu79("pd0u79");

	SetPanelStateu86("pd0u86");

	SetPanelStateu93("pd0u93");

	SetPanelStateu561("pd1u561");

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">FAQ question 5</span></b>'));

}

}

if (bIE) u68.attachEvent("onmouseout", MouseOutu68);
else u68.addEventListener("mouseout", MouseOutu68, true);
function MouseOutu68(e)
{
if (!IsTrueMouseOut('u68',e)) return;
if ((GetPanelState('u65')) == ('pd2u65')) {

	SetPanelStateu65("pd2u65");

}
else
if (true) {

	SetPanelStateu65("pd0u65");

}

}

var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u560 = document.getElementById('u560');
gv_vAlignTable['u560'] = 'top';
var u561 = document.getElementById('u561');

var u562 = document.getElementById('u562');
gv_vAlignTable['u562'] = 'top';
var u563 = document.getElementById('u563');
gv_vAlignTable['u563'] = 'top';
var u70 = document.getElementById('u70');

var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u72 = document.getElementById('u72');

var u73 = document.getElementById('u73');

u73.style.cursor = 'pointer';
if (bIE) u73.attachEvent("onclick", Clicku73);
else u73.addEventListener("click", Clicku73, true);
function Clicku73(e)
{

if (true) {

	SetPanelStateu72("pd2u72");

}

}

if (bIE) u73.attachEvent("onmouseover", MouseOveru73);
else u73.addEventListener("mouseover", MouseOveru73, true);
function MouseOveru73(e)
{
if (!IsTrueMouseOver('u73',e)) return;
if (true) {

	SetPanelStateu72("pd1u72");

}

}

var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'center';
var u75 = document.getElementById('u75');

u75.style.cursor = 'pointer';
if (bIE) u75.attachEvent("onclick", Clicku75);
else u75.addEventListener("click", Clicku75, true);
function Clicku75(e)
{

if (true) {

	SetPanelStateu72("pd2u72");

	SetPanelStateu37("pd1u37");

	SetPanelStateu44("pd0u44");

	SetPanelStateu51("pd0u51");

	SetPanelStateu58("pd0u58");

	SetPanelStateu65("pd0u65");

	SetPanelStateu79("pd0u79");

	SetPanelStateu86("pd0u86");

	SetPanelStateu93("pd0u93");

	SetPanelStateu100("pd0u100");

	SetPanelStateu561("pd1u561");

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">FAQ question 6</span></b>'));

}

}

if (bIE) u75.attachEvent("onmouseout", MouseOutu75);
else u75.addEventListener("mouseout", MouseOutu75, true);
function MouseOutu75(e)
{
if (!IsTrueMouseOut('u75',e)) return;
if ((GetPanelState('u72')) == ('pd2u72')) {

	SetPanelStateu72("pd2u72");

}
else
if (true) {

	SetPanelStateu72("pd0u72");

}

}

var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'center';
var u77 = document.getElementById('u77');

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'center';
var u79 = document.getElementById('u79');

var u570 = document.getElementById('u570');

var u571 = document.getElementById('u571');

var u572 = document.getElementById('u572');

var u573 = document.getElementById('u573');

var u80 = document.getElementById('u80');

u80.style.cursor = 'pointer';
if (bIE) u80.attachEvent("onclick", Clicku80);
else u80.addEventListener("click", Clicku80, true);
function Clicku80(e)
{

if (true) {

	SetPanelStateu79("pd2u79");

}

}

if (bIE) u80.attachEvent("onmouseover", MouseOveru80);
else u80.addEventListener("mouseover", MouseOveru80, true);
function MouseOveru80(e)
{
if (!IsTrueMouseOver('u80',e)) return;
if (true) {

	SetPanelStateu79("pd1u79");

}

}

var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u82 = document.getElementById('u82');

u82.style.cursor = 'pointer';
if (bIE) u82.attachEvent("onclick", Clicku82);
else u82.addEventListener("click", Clicku82, true);
function Clicku82(e)
{

if (true) {

	SetPanelStateu79("pd2u79");

	SetPanelStateu37("pd1u37");

	SetPanelStateu44("pd0u44");

	SetPanelStateu51("pd0u51");

	SetPanelStateu58("pd0u58");

	SetPanelStateu72("pd0u72");

	SetPanelStateu65("pd0u65");

	SetPanelStateu86("pd0u86");

	SetPanelStateu93("pd0u93");

	SetPanelStateu100("pd0u100");

	SetPanelStateu561("pd1u561");

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">FAQ question 7</span></b>'));

}

}

if (bIE) u82.attachEvent("onmouseout", MouseOutu82);
else u82.addEventListener("mouseout", MouseOutu82, true);
function MouseOutu82(e)
{
if (!IsTrueMouseOut('u82',e)) return;
if ((GetPanelState('u79')) == ('pd2u79')) {

	SetPanelStateu79("pd2u79");

}
else
if (true) {

	SetPanelStateu79("pd0u79");

}

}

var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'center';
var u84 = document.getElementById('u84');

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'center';
var u86 = document.getElementById('u86');

var u87 = document.getElementById('u87');

u87.style.cursor = 'pointer';
if (bIE) u87.attachEvent("onclick", Clicku87);
else u87.addEventListener("click", Clicku87, true);
function Clicku87(e)
{

if (true) {

	SetPanelStateu86("pd2u86");

}

}

if (bIE) u87.attachEvent("onmouseover", MouseOveru87);
else u87.addEventListener("mouseover", MouseOveru87, true);
function MouseOveru87(e)
{
if (!IsTrueMouseOver('u87',e)) return;
if (true) {

	SetPanelStateu86("pd1u86");

}

}

var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'center';
var u89 = document.getElementById('u89');

u89.style.cursor = 'pointer';
if (bIE) u89.attachEvent("onclick", Clicku89);
else u89.addEventListener("click", Clicku89, true);
function Clicku89(e)
{

if (true) {

	SetPanelStateu86("pd2u86");

	SetPanelStateu37("pd1u37");

	SetPanelStateu44("pd0u44");

	SetPanelStateu51("pd0u51");

	SetPanelStateu58("pd0u58");

	SetPanelStateu65("pd0u65");

	SetPanelStateu72("pd0u72");

	SetPanelStateu79("pd0u79");

	SetPanelStateu93("pd0u93");

	SetPanelStateu100("pd0u100");

	SetPanelStateu561("pd1u561");

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">FAQ question 8</span></b>'));

}

}

if (bIE) u89.attachEvent("onmouseout", MouseOutu89);
else u89.addEventListener("mouseout", MouseOutu89, true);
function MouseOutu89(e)
{
if (!IsTrueMouseOut('u89',e)) return;
if ((GetPanelState('u86')) == ('pd2u86')) {

	SetPanelStateu86("pd2u86");

}
else
if (true) {

	SetPanelStateu86("pd0u86");

}

}

var u580 = document.getElementById('u580');
gv_vAlignTable['u580'] = 'top';
var u581 = document.getElementById('u581');
gv_vAlignTable['u581'] = 'top';
var u582 = document.getElementById('u582');

var u583 = document.getElementById('u583');
gv_vAlignTable['u583'] = 'center';
var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'center';
var u91 = document.getElementById('u91');

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'center';
var u93 = document.getElementById('u93');

var u94 = document.getElementById('u94');

u94.style.cursor = 'pointer';
if (bIE) u94.attachEvent("onclick", Clicku94);
else u94.addEventListener("click", Clicku94, true);
function Clicku94(e)
{

if (true) {

	SetPanelStateu93("pd2u93");

}

}

if (bIE) u94.attachEvent("onmouseover", MouseOveru94);
else u94.addEventListener("mouseover", MouseOveru94, true);
function MouseOveru94(e)
{
if (!IsTrueMouseOver('u94',e)) return;
if (true) {

	SetPanelStateu93("pd1u93");

}

}

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u96 = document.getElementById('u96');

u96.style.cursor = 'pointer';
if (bIE) u96.attachEvent("onclick", Clicku96);
else u96.addEventListener("click", Clicku96, true);
function Clicku96(e)
{

if (true) {

	SetPanelStateu93("pd2u93");

	SetPanelStateu37("pd1u37");

	SetPanelStateu44("pd0u44");

	SetPanelStateu51("pd0u51");

	SetPanelStateu58("pd0u58");

	SetPanelStateu65("pd0u65");

	SetPanelStateu72("pd0u72");

	SetPanelStateu79("pd0u79");

	SetPanelStateu86("pd0u86");

	SetPanelStateu100("pd0u100");

	SetPanelStateu561("pd1u561");

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">FAQ question 9</span></b>'));

}

}

if (bIE) u96.attachEvent("onmouseout", MouseOutu96);
else u96.addEventListener("mouseout", MouseOutu96, true);
function MouseOutu96(e)
{
if (!IsTrueMouseOut('u96',e)) return;
if ((GetPanelState('u93')) == ('pd2u93')) {

	SetPanelStateu93("pd2u93");

}
else
if (true) {

	SetPanelStateu93("pd0u93");

}

}

var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'center';
var u98 = document.getElementById('u98');

var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'center';
var u400 = document.getElementById('u400');

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

	SetPanelStateu400("pd0u400");

}

}

if (bIE) u403.attachEvent("onmouseover", MouseOveru403);
else u403.addEventListener("mouseover", MouseOveru403, true);
function MouseOveru403(e)
{
if (!IsTrueMouseOver('u403',e)) return;
if (true) {

	SetPanelStateu400("pd2u400");

}

}

var u404 = document.getElementById('u404');
gv_vAlignTable['u404'] = 'center';
var u405 = document.getElementById('u405');

u405.style.cursor = 'pointer';
if (bIE) u405.attachEvent("onclick", Clicku405);
else u405.addEventListener("click", Clicku405, true);
function Clicku405(e)
{

if (true) {

	SetPanelStateu400("pd0u400");

	SetPanelStateu407("pd0u407");

	SetPanelStateu414("pd0u414");

	SetPanelStateu421("pd0u421");

	SetPanelStateu561("pd1u561");

	SetPanelStateu428("pd0u428");

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Budget Tips </span></b>'));

}

}

if (bIE) u405.attachEvent("onmouseout", MouseOutu405);
else u405.addEventListener("mouseout", MouseOutu405, true);
function MouseOutu405(e)
{
if (!IsTrueMouseOut('u405',e)) return;
if ((GetPanelState('u400')) == ('pd0u400')) {

	SetPanelStateu400("pd0u400");

}
else
if (true) {

	SetPanelStateu400("pd1u400");

}

}

var u406 = document.getElementById('u406');
gv_vAlignTable['u406'] = 'center';
var u407 = document.getElementById('u407');

var u408 = document.getElementById('u408');

u408.style.cursor = 'pointer';
if (bIE) u408.attachEvent("onclick", Clicku408);
else u408.addEventListener("click", Clicku408, true);
function Clicku408(e)
{

if (true) {

	SetPanelStateu407("pd2u407");

}

}

if (bIE) u408.attachEvent("onmouseover", MouseOveru408);
else u408.addEventListener("mouseover", MouseOveru408, true);
function MouseOveru408(e)
{
if (!IsTrueMouseOver('u408',e)) return;
if (true) {

	SetPanelStateu407("pd1u407");

}

}

var u409 = document.getElementById('u409');
gv_vAlignTable['u409'] = 'center';
var u597 = document.getElementById('u597');

var u598 = document.getElementById('u598');
gv_vAlignTable['u598'] = 'center';
var u599 = document.getElementById('u599');

var u410 = document.getElementById('u410');

u410.style.cursor = 'pointer';
if (bIE) u410.attachEvent("onclick", Clicku410);
else u410.addEventListener("click", Clicku410, true);
function Clicku410(e)
{

if (true) {

	SetPanelStateu407("pd2u407");

	SetPanelStateu400("pd1u400");

	SetPanelStateu414("pd0u414");

	SetPanelStateu421("pd0u421");

	SetPanelStateu561("pd1u561");

	SetPanelStateu428("pd0u428");

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Process vs. digital printing</span></b>'));

}

}

if (bIE) u410.attachEvent("onmouseout", MouseOutu410);
else u410.addEventListener("mouseout", MouseOutu410, true);
function MouseOutu410(e)
{
if (!IsTrueMouseOut('u410',e)) return;
if ((GetPanelState('u407')) == ('pd2u407')) {

	SetPanelStateu407("pd2u407");

}
else
if (true) {

	SetPanelStateu407("pd0u407");

}

}

var u411 = document.getElementById('u411');
gv_vAlignTable['u411'] = 'center';
var u412 = document.getElementById('u412');

var u413 = document.getElementById('u413');
gv_vAlignTable['u413'] = 'center';
var u414 = document.getElementById('u414');

var u415 = document.getElementById('u415');

u415.style.cursor = 'pointer';
if (bIE) u415.attachEvent("onclick", Clicku415);
else u415.addEventListener("click", Clicku415, true);
function Clicku415(e)
{

if (true) {

	SetPanelStateu414("pd2u414");

}

}

if (bIE) u415.attachEvent("onmouseover", MouseOveru415);
else u415.addEventListener("mouseover", MouseOveru415, true);
function MouseOveru415(e)
{
if (!IsTrueMouseOver('u415',e)) return;
if (true) {

	SetPanelStateu414("pd1u414");

}

}

var u416 = document.getElementById('u416');
gv_vAlignTable['u416'] = 'center';
var u417 = document.getElementById('u417');

u417.style.cursor = 'pointer';
if (bIE) u417.attachEvent("onclick", Clicku417);
else u417.addEventListener("click", Clicku417, true);
function Clicku417(e)
{

if (true) {

	SetPanelStateu414("pd2u414");

	SetPanelStateu561("pd1u561");

	SetPanelStateu400("pd1u400");

	SetPanelStateu407("pd0u407");

	SetPanelStateu421("pd0u421");

	SetPanelStateu428("pd0u428");

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Halftone printing</span></b>'));

}

}

if (bIE) u417.attachEvent("onmouseout", MouseOutu417);
else u417.addEventListener("mouseout", MouseOutu417, true);
function MouseOutu417(e)
{
if (!IsTrueMouseOut('u417',e)) return;
if ((GetPanelState('u414')) == ('pd2u414')) {

	SetPanelStateu414("pd2u414");

}
else
if (true) {

	SetPanelStateu414("pd0u414");

}

}

var u418 = document.getElementById('u418');
gv_vAlignTable['u418'] = 'center';
var u419 = document.getElementById('u419');

var u420 = document.getElementById('u420');
gv_vAlignTable['u420'] = 'center';
var u421 = document.getElementById('u421');

var u422 = document.getElementById('u422');

u422.style.cursor = 'pointer';
if (bIE) u422.attachEvent("onclick", Clicku422);
else u422.addEventListener("click", Clicku422, true);
function Clicku422(e)
{

if (true) {

	SetPanelStateu421("pd2u421");

}

}

if (bIE) u422.attachEvent("onmouseover", MouseOveru422);
else u422.addEventListener("mouseover", MouseOveru422, true);
function MouseOveru422(e)
{
if (!IsTrueMouseOver('u422',e)) return;
if (true) {

	SetPanelStateu421("pd1u421");

}

}

var u423 = document.getElementById('u423');
gv_vAlignTable['u423'] = 'center';
var u424 = document.getElementById('u424');

u424.style.cursor = 'pointer';
if (bIE) u424.attachEvent("onclick", Clicku424);
else u424.addEventListener("click", Clicku424, true);
function Clicku424(e)
{

if (true) {

	SetPanelStateu421("pd2u421");

	SetPanelStateu400("pd1u400");

	SetPanelStateu407("pd0u407");

	SetPanelStateu414("pd0u414");

	SetPanelStateu561("pd1u561");

	SetPanelStateu428("pd0u428");

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Adjusting designs for different sizes</span></b>'));

}

}

if (bIE) u424.attachEvent("onmouseout", MouseOutu424);
else u424.addEventListener("mouseout", MouseOutu424, true);
function MouseOutu424(e)
{
if (!IsTrueMouseOut('u424',e)) return;
if ((GetPanelState('u421')) == ('pd2u421')) {

	SetPanelStateu421("pd2u421");

}
else
if (true) {

	SetPanelStateu421("pd0u421");

}

}

var u425 = document.getElementById('u425');
gv_vAlignTable['u425'] = 'center';
var u426 = document.getElementById('u426');

var u427 = document.getElementById('u427');
gv_vAlignTable['u427'] = 'center';
var u428 = document.getElementById('u428');

var u429 = document.getElementById('u429');

u429.style.cursor = 'pointer';
if (bIE) u429.attachEvent("onclick", Clicku429);
else u429.addEventListener("click", Clicku429, true);
function Clicku429(e)
{

if (true) {

	SetPanelStateu428("pd2u428");

}

}

if (bIE) u429.attachEvent("onmouseover", MouseOveru429);
else u429.addEventListener("mouseover", MouseOveru429, true);
function MouseOveru429(e)
{
if (!IsTrueMouseOver('u429',e)) return;
if (true) {

	SetPanelStateu428("pd1u428");

}

}

var u290 = document.getElementById('u290');

u290.style.cursor = 'pointer';
if (bIE) u290.attachEvent("onclick", Clicku290);
else u290.addEventListener("click", Clicku290, true);
function Clicku290(e)
{

if (true) {

SetWidgetRichText('u3', PopulateVariables('<b><span style=" font-family:\'Calibri\'; color:#FFFFFF; font-size:16px;">&nbsp; Top FAQs</span></b>'));

	SetPanelStateu4("pd0u4");

	SetPanelStateu561("pd0u561");

}

}

var u291 = document.getElementById('u291');
gv_vAlignTable['u291'] = 'center';
var u292 = document.getElementById('u292');

var u293 = document.getElementById('u293');
gv_vAlignTable['u293'] = 'center';
var u294 = document.getElementById('u294');

var u295 = document.getElementById('u295');
gv_vAlignTable['u295'] = 'center';
var u296 = document.getElementById('u296');

u296.style.cursor = 'pointer';
if (bIE) u296.attachEvent("onclick", Clicku296);
else u296.addEventListener("click", Clicku296, true);
function Clicku296(e)
{

if (true) {

	SetPanelStateu4("pd3u4");

	SetPanelStateu561("pd1u561");

	SetPanelStateu338("pd0u338");

	SetPanelStateu345("pd0u345");

	SetPanelStateu352("pd0u352");

	SetPanelStateu359("pd0u359");

	SetPanelStateu366("pd0u366");

	SetPanelStateu375("pd0u375");

SetWidgetRichText('u3', PopulateVariables('<b><span style=" font-family:\'Calibri\'; color:#FFFFFF; font-size:16px;">&nbsp; Ordering</span></b>'));

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Budget Tips</span></b>'));

}

}

var u430 = document.getElementById('u430');
gv_vAlignTable['u430'] = 'center';
var u431 = document.getElementById('u431');

u431.style.cursor = 'pointer';
if (bIE) u431.attachEvent("onclick", Clicku431);
else u431.addEventListener("click", Clicku431, true);
function Clicku431(e)
{

if (true) {

	SetPanelStateu428("pd2u428");

	SetPanelStateu400("pd1u400");

	SetPanelStateu407("pd0u407");

	SetPanelStateu414("pd0u414");

	SetPanelStateu561("pd1u561");

	SetPanelStateu421("pd0u421");

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Troubleshooting your design</span></b>'));

}

}

if (bIE) u431.attachEvent("onmouseout", MouseOutu431);
else u431.addEventListener("mouseout", MouseOutu431, true);
function MouseOutu431(e)
{
if (!IsTrueMouseOut('u431',e)) return;
if ((GetPanelState('u428')) == ('pd2u428')) {

	SetPanelStateu428("pd2u428");

}
else
if (true) {

	SetPanelStateu428("pd0u428");

}

}

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

	SetPanelStateu435("pd2u435");

}

}

if (bIE) u436.attachEvent("onmouseover", MouseOveru436);
else u436.addEventListener("mouseover", MouseOveru436, true);
function MouseOveru436(e)
{
if (!IsTrueMouseOver('u436',e)) return;
if (true) {

	SetPanelStateu435("pd1u435");

}

}

var u437 = document.getElementById('u437');
gv_vAlignTable['u437'] = 'center';
var u438 = document.getElementById('u438');

u438.style.cursor = 'pointer';
if (bIE) u438.attachEvent("onclick", Clicku438);
else u438.addEventListener("click", Clicku438, true);
function Clicku438(e)
{

if (true) {

	SetPanelStateu435("pd2u435");

	SetPanelStateu400("pd1u400");

	SetPanelStateu407("pd0u407");

	SetPanelStateu414("pd0u414");

	SetPanelStateu421("pd0u421");

	SetPanelStateu561("pd1u561");

	SetPanelStateu428("pd0u428");

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Special inks and colors</span></b>'));

}

}

if (bIE) u438.attachEvent("onmouseout", MouseOutu438);
else u438.addEventListener("mouseout", MouseOutu438, true);
function MouseOutu438(e)
{
if (!IsTrueMouseOut('u438',e)) return;
if ((GetPanelState('u435')) == ('pd2u435')) {

	SetPanelStateu435("pd2u435");

}
else
if (true) {

	SetPanelStateu435("pd0u435");

}

}

var u439 = document.getElementById('u439');
gv_vAlignTable['u439'] = 'center';
var u440 = document.getElementById('u440');

var u441 = document.getElementById('u441');
gv_vAlignTable['u441'] = 'center';
var u442 = document.getElementById('u442');

u442.style.cursor = 'pointer';
if (bIE) u442.attachEvent("onclick", Clicku442);
else u442.addEventListener("click", Clicku442, true);
function Clicku442(e)
{

if (true) {

	SetPanelStateu4("pd1u4");

	SetPanelStateu561("pd1u561");

SetWidgetRichText('u3', PopulateVariables('<b><span style=" font-family:\'Calibri\'; color:#FFFFFF; font-size:16px;">&nbsp; Creative Services &amp; Printing</span></b>'));

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">What is a &quot;redraw&quot;?</span></b>'));

}

}

var u443 = document.getElementById('u443');
gv_vAlignTable['u443'] = 'center';
var u444 = document.getElementById('u444');

var u445 = document.getElementById('u445');
gv_vAlignTable['u445'] = 'center';
var u446 = document.getElementById('u446');

var u447 = document.getElementById('u447');
gv_vAlignTable['u447'] = 'center';
var u448 = document.getElementById('u448');

u448.style.cursor = 'pointer';
if (bIE) u448.attachEvent("onclick", Clicku448);
else u448.addEventListener("click", Clicku448, true);
function Clicku448(e)
{

if (true) {

	SetPanelStateu561("pd4u561");

	SetPanelStateu4("pd4u4");

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

	SetPanelStateu4("pd4u4");

	SetPanelStateu561("pd2u561");

}

}
gv_vAlignTable['u449'] = 'top';
var u450 = document.getElementById('u450');

u450.style.cursor = 'pointer';
if (bIE) u450.attachEvent("onclick", Clicku450);
else u450.addEventListener("click", Clicku450, true);
function Clicku450(e)
{

if (true) {

	SetPanelStateu561("pd3u561");

	SetPanelStateu4("pd4u4");

}

}
gv_vAlignTable['u450'] = 'top';
var u451 = document.getElementById('u451');

u451.style.cursor = 'pointer';
if (bIE) u451.attachEvent("onclick", Clicku451);
else u451.addEventListener("click", Clicku451, true);
function Clicku451(e)
{

if (true) {

	SetPanelStateu4("pd4u4");

	SetPanelStateu561("pd5u561");

}

}
gv_vAlignTable['u451'] = 'top';
var u452 = document.getElementById('u452');

var u453 = document.getElementById('u453');
gv_vAlignTable['u453'] = 'center';
var u454 = document.getElementById('u454');

var u455 = document.getElementById('u455');
gv_vAlignTable['u455'] = 'center';
var u456 = document.getElementById('u456');

u456.style.cursor = 'pointer';
if (bIE) u456.attachEvent("onclick", Clicku456);
else u456.addEventListener("click", Clicku456, true);
function Clicku456(e)
{

if (true) {

	SetPanelStateu561("pd4u561");

	SetPanelStateu4("pd4u4");

}

}
gv_vAlignTable['u456'] = 'top';
var u457 = document.getElementById('u457');

u457.style.cursor = 'pointer';
if (bIE) u457.attachEvent("onclick", Clicku457);
else u457.addEventListener("click", Clicku457, true);
function Clicku457(e)
{

if (true) {

	SetPanelStateu4("pd4u4");

	SetPanelStateu561("pd2u561");

}

}
gv_vAlignTable['u457'] = 'top';
var u458 = document.getElementById('u458');

u458.style.cursor = 'pointer';
if (bIE) u458.attachEvent("onclick", Clicku458);
else u458.addEventListener("click", Clicku458, true);
function Clicku458(e)
{

if (true) {

	SetPanelStateu561("pd3u561");

	SetPanelStateu4("pd4u4");

}

}
gv_vAlignTable['u458'] = 'top';
var u459 = document.getElementById('u459');

u459.style.cursor = 'pointer';
if (bIE) u459.attachEvent("onclick", Clicku459);
else u459.addEventListener("click", Clicku459, true);
function Clicku459(e)
{

if (true) {

	SetPanelStateu4("pd4u4");

	SetPanelStateu561("pd5u561");

}

}
gv_vAlignTable['u459'] = 'top';
var u460 = document.getElementById('u460');

u460.style.cursor = 'pointer';
if (bIE) u460.attachEvent("onclick", Clicku460);
else u460.addEventListener("click", Clicku460, true);
function Clicku460(e)
{

if (true) {

	SetPanelStateu4("pd4u4");

	SetPanelStateu561("pd5u561");

}

}
gv_vAlignTable['u460'] = 'top';
var u461 = document.getElementById('u461');

u461.style.cursor = 'pointer';
if (bIE) u461.attachEvent("onclick", Clicku461);
else u461.addEventListener("click", Clicku461, true);
function Clicku461(e)
{

if (true) {

	SetPanelStateu4("pd4u4");

	SetPanelStateu561("pd5u561");

}

}
gv_vAlignTable['u461'] = 'top';
var u462 = document.getElementById('u462');

u462.style.cursor = 'pointer';
if (bIE) u462.attachEvent("onclick", Clicku462);
else u462.addEventListener("click", Clicku462, true);
function Clicku462(e)
{

if (true) {

SetWidgetRichText('u3', PopulateVariables('<b><span style=" font-family:\'Calibri\'; color:#FFFFFF; font-size:16px;">&nbsp; Top FAQs</span></b>'));

	SetPanelStateu4("pd0u4");

	SetPanelStateu561("pd0u561");

}

}

var u463 = document.getElementById('u463');
gv_vAlignTable['u463'] = 'center';
var u464 = document.getElementById('u464');

var u465 = document.getElementById('u465');
gv_vAlignTable['u465'] = 'center';
var u466 = document.getElementById('u466');

var u467 = document.getElementById('u467');
gv_vAlignTable['u467'] = 'center';
var u468 = document.getElementById('u468');

u468.style.cursor = 'pointer';
if (bIE) u468.attachEvent("onclick", Clicku468);
else u468.addEventListener("click", Clicku468, true);
function Clicku468(e)
{

if (true) {

	SetPanelStateu4("pd3u4");

	SetPanelStateu561("pd1u561");

	SetPanelStateu338("pd0u338");

	SetPanelStateu345("pd0u345");

	SetPanelStateu352("pd0u352");

	SetPanelStateu359("pd0u359");

	SetPanelStateu366("pd0u366");

	SetPanelStateu375("pd0u375");

SetWidgetRichText('u3', PopulateVariables('<b><span style=" font-family:\'Calibri\'; color:#FFFFFF; font-size:16px;">&nbsp; Ordering</span></b>'));

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Budget Tips</span></b>'));

}

}

var u469 = document.getElementById('u469');
gv_vAlignTable['u469'] = 'center';
var u470 = document.getElementById('u470');

u470.style.cursor = 'pointer';
if (bIE) u470.attachEvent("onclick", Clicku470);
else u470.addEventListener("click", Clicku470, true);
function Clicku470(e)
{

if (true) {

	SetPanelStateu4("pd5u4");

	SetPanelStateu561("pd1u561");

SetWidgetRichText('u3', PopulateVariables('<b><span style=" font-family:\'Calibri\'; color:#FFFFFF; font-size:16px;">&nbsp; Shipping, Delivery &amp; Returns</span></b>'));

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Delivery times</span></b>'));

}

}

var u471 = document.getElementById('u471');
gv_vAlignTable['u471'] = 'center';
var u472 = document.getElementById('u472');

u472.style.cursor = 'pointer';
if (bIE) u472.attachEvent("onclick", Clicku472);
else u472.addEventListener("click", Clicku472, true);
function Clicku472(e)
{

if (true) {

	SetPanelStateu4("pd2u4");

	SetPanelStateu561("pd1u561");

	SetPanelStateu242("pd0u242");

	SetPanelStateu249("pd0u249");

	SetPanelStateu256("pd0u256");

	SetPanelStateu263("pd0u263");

SetWidgetRichText('u3', PopulateVariables('<b><span style=" font-family:\'Calibri\'; color:#FFFFFF; font-size:16px;">&nbsp; Products &amp; Sizing</span></b>'));

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Sizing Guides</span></b>'));

}

}

var u473 = document.getElementById('u473');
gv_vAlignTable['u473'] = 'center';
var u474 = document.getElementById('u474');

var u475 = document.getElementById('u475');
gv_vAlignTable['u475'] = 'center';
var u476 = document.getElementById('u476');

var u477 = document.getElementById('u477');
gv_vAlignTable['u477'] = 'center';
var u478 = document.getElementById('u478');

var u479 = document.getElementById('u479');
gv_vAlignTable['u479'] = 'center';
var u480 = document.getElementById('u480');

u480.style.cursor = 'pointer';
if (bIE) u480.attachEvent("onclick", Clicku480);
else u480.addEventListener("click", Clicku480, true);
function Clicku480(e)
{

if (true) {

	SetPanelStateu4("pd1u4");

	SetPanelStateu561("pd1u561");

	SetPanelStateu121("pd0u121");

	SetPanelStateu150("pd0u150");

	SetPanelStateu157("pd0u157");

	SetPanelStateu164("pd0u164");

	SetPanelStateu171("pd0u171");

	SetPanelStateu178("pd0u178");

	SetPanelStateu185("pd0u185");

	SetPanelStateu192("pd0u192");

	SetPanelStateu199("pd0u199");

	SetPanelStateu206("pd0u206");

SetWidgetRichText('u3', PopulateVariables('<b><span style=" font-family:\'Calibri\'; color:#FFFFFF; font-size:16px;">&nbsp; Designing Online</span></b>'));

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Uploading images and photos</span></b>'));

}

}

var u481 = document.getElementById('u481');
gv_vAlignTable['u481'] = 'center';
var u482 = document.getElementById('u482');

var u483 = document.getElementById('u483');
gv_vAlignTable['u483'] = 'center';
var u484 = document.getElementById('u484');

var u485 = document.getElementById('u485');
gv_vAlignTable['u485'] = 'center';
var u486 = document.getElementById('u486');

u486.style.cursor = 'pointer';
if (bIE) u486.attachEvent("onclick", Clicku486);
else u486.addEventListener("click", Clicku486, true);
function Clicku486(e)
{

if (true) {

	SetPanelStateu4("pd5u4");

	SetPanelStateu561("pd1u561");

SetWidgetRichText('u3', PopulateVariables('<b><span style=" font-family:\'Calibri\'; color:#FFFFFF; font-size:16px;">&nbsp; Shipping, Delivery &amp; Returns</span></b>'));

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Delivery times</span></b>'));

}

}

var u487 = document.getElementById('u487');
gv_vAlignTable['u487'] = 'center';
var u488 = document.getElementById('u488');

var u489 = document.getElementById('u489');
gv_vAlignTable['u489'] = 'center';
var u204 = document.getElementById('u204');

var u300 = document.getElementById('u300');

u300.style.cursor = 'pointer';
if (bIE) u300.attachEvent("onclick", Clicku300);
else u300.addEventListener("click", Clicku300, true);
function Clicku300(e)
{

if (true) {

	SetPanelStateu4("pd4u4");

	SetPanelStateu561("pd1u561");

	SetPanelStateu400("pd0u400");

	SetPanelStateu414("pd0u414");

	SetPanelStateu407("pd0u407");

	SetPanelStateu421("pd0u421");

	SetPanelStateu428("pd0u428");

	SetPanelStateu435("pd0u435");

SetWidgetRichText('u3', PopulateVariables('<b><span style=" font-family:\'Calibri\'; color:#FFFFFF; font-size:16px;">&nbsp; Creative Services &amp; Printing</span></b>'));

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">What is a &quot;redraw&quot;?</span></b>'));

}

}

var u301 = document.getElementById('u301');
gv_vAlignTable['u301'] = 'center';
var u302 = document.getElementById('u302');

var u303 = document.getElementById('u303');
gv_vAlignTable['u303'] = 'center';
var u304 = document.getElementById('u304');

var u305 = document.getElementById('u305');
gv_vAlignTable['u305'] = 'center';
var u306 = document.getElementById('u306');

var u307 = document.getElementById('u307');
gv_vAlignTable['u307'] = 'center';
var u308 = document.getElementById('u308');

u308.style.cursor = 'pointer';
if (bIE) u308.attachEvent("onclick", Clicku308);
else u308.addEventListener("click", Clicku308, true);
function Clicku308(e)
{

if (true) {

	SetPanelStateu4("pd1u4");

	SetPanelStateu561("pd1u561");

	SetPanelStateu121("pd0u121");

	SetPanelStateu150("pd0u150");

	SetPanelStateu157("pd0u157");

	SetPanelStateu164("pd0u164");

	SetPanelStateu171("pd0u171");

	SetPanelStateu178("pd0u178");

	SetPanelStateu185("pd0u185");

	SetPanelStateu192("pd0u192");

	SetPanelStateu199("pd0u199");

	SetPanelStateu206("pd0u206");

SetWidgetRichText('u3', PopulateVariables('<b><span style=" font-family:\'Calibri\'; color:#FFFFFF; font-size:16px;">&nbsp; Designing Online</span></b>'));

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Uploading images and photos</span></b>'));

}

}

var u309 = document.getElementById('u309');
gv_vAlignTable['u309'] = 'center';
var u497 = document.getElementById('u497');
gv_vAlignTable['u497'] = 'center';
var u498 = document.getElementById('u498');

var u499 = document.getElementById('u499');
gv_vAlignTable['u499'] = 'center';
var u504 = document.getElementById('u504');

u504.style.cursor = 'pointer';
if (bIE) u504.attachEvent("onclick", Clicku504);
else u504.addEventListener("click", Clicku504, true);
function Clicku504(e)
{

if (true) {

	SetPanelStateu4("pd4u4");

	SetPanelStateu561("pd5u561");

}

}
gv_vAlignTable['u504'] = 'top';
var u505 = document.getElementById('u505');

u505.style.cursor = 'pointer';
if (bIE) u505.attachEvent("onclick", Clicku505);
else u505.addEventListener("click", Clicku505, true);
function Clicku505(e)
{

if (true) {

	SetPanelStateu4("pd4u4");

	SetPanelStateu561("pd5u561");

}

}
gv_vAlignTable['u505'] = 'top';
var u506 = document.getElementById('u506');

u506.style.cursor = 'pointer';
if (bIE) u506.attachEvent("onclick", Clicku506);
else u506.addEventListener("click", Clicku506, true);
function Clicku506(e)
{

if (true) {

SetWidgetRichText('u3', PopulateVariables('<b><span style=" font-family:\'Calibri\'; color:#FFFFFF; font-size:16px;">&nbsp; Top FAQs</span></b>'));

	SetPanelStateu4("pd0u4");

	SetPanelStateu561("pd0u561");

}

}

var u507 = document.getElementById('u507');
gv_vAlignTable['u507'] = 'center';
var u508 = document.getElementById('u508');

var u509 = document.getElementById('u509');
gv_vAlignTable['u509'] = 'center';
var u310 = document.getElementById('u310');

var u311 = document.getElementById('u311');
gv_vAlignTable['u311'] = 'center';
var u312 = document.getElementById('u312');

var u313 = document.getElementById('u313');
gv_vAlignTable['u313'] = 'center';
var u314 = document.getElementById('u314');

var u315 = document.getElementById('u315');
gv_vAlignTable['u315'] = 'center';
var u316 = document.getElementById('u316');

var u317 = document.getElementById('u317');
gv_vAlignTable['u317'] = 'center';
var u318 = document.getElementById('u318');

u318.style.cursor = 'pointer';
if (bIE) u318.attachEvent("onclick", Clicku318);
else u318.addEventListener("click", Clicku318, true);
function Clicku318(e)
{

if (true) {

	SetPanelStateu561("pd4u561");

	SetPanelStateu4("pd4u4");

}

}
gv_vAlignTable['u318'] = 'top';
var u319 = document.getElementById('u319');

u319.style.cursor = 'pointer';
if (bIE) u319.attachEvent("onclick", Clicku319);
else u319.addEventListener("click", Clicku319, true);
function Clicku319(e)
{

if (true) {

	SetPanelStateu4("pd4u4");

	SetPanelStateu561("pd2u561");

}

}
gv_vAlignTable['u319'] = 'top';
var u514 = document.getElementById('u514');
gv_vAlignTable['u514'] = 'center';
var u515 = document.getElementById('u515');

u515.style.cursor = 'pointer';
if (bIE) u515.attachEvent("onclick", Clicku515);
else u515.addEventListener("click", Clicku515, true);
function Clicku515(e)
{

if (true) {

	SetPanelStateu512("pd0u512");

}

}

if (bIE) u515.attachEvent("onmouseover", MouseOveru515);
else u515.addEventListener("mouseover", MouseOveru515, true);
function MouseOveru515(e)
{
if (!IsTrueMouseOver('u515',e)) return;
if (true) {

	SetPanelStateu512("pd2u512");

}

}

var u516 = document.getElementById('u516');
gv_vAlignTable['u516'] = 'center';
var u517 = document.getElementById('u517');

u517.style.cursor = 'pointer';
if (bIE) u517.attachEvent("onclick", Clicku517);
else u517.addEventListener("click", Clicku517, true);
function Clicku517(e)
{

if (true) {

	SetPanelStateu512("pd0u512");

	SetPanelStateu519("pd0u519");

	SetPanelStateu526("pd0u526");

	SetPanelStateu561("pd1u561");

	SetPanelStateu533("pd0u533");

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Delivery Times</span></b>'));

}

}

if (bIE) u517.attachEvent("onmouseout", MouseOutu517);
else u517.addEventListener("mouseout", MouseOutu517, true);
function MouseOutu517(e)
{
if (!IsTrueMouseOut('u517',e)) return;
if ((GetPanelState('u512')) == ('pd0u512')) {

	SetPanelStateu512("pd0u512");

}
else
if (true) {

	SetPanelStateu512("pd1u512");

}

}

var u518 = document.getElementById('u518');
gv_vAlignTable['u518'] = 'center';
var u519 = document.getElementById('u519');

var u320 = document.getElementById('u320');

u320.style.cursor = 'pointer';
if (bIE) u320.attachEvent("onclick", Clicku320);
else u320.addEventListener("click", Clicku320, true);
function Clicku320(e)
{

if (true) {

	SetPanelStateu561("pd3u561");

	SetPanelStateu4("pd4u4");

}

}
gv_vAlignTable['u320'] = 'top';
var u321 = document.getElementById('u321');

u321.style.cursor = 'pointer';
if (bIE) u321.attachEvent("onclick", Clicku321);
else u321.addEventListener("click", Clicku321, true);
function Clicku321(e)
{

if (true) {

	SetPanelStateu4("pd4u4");

	SetPanelStateu561("pd5u561");

}

}
gv_vAlignTable['u321'] = 'top';
var u322 = document.getElementById('u322');

var u323 = document.getElementById('u323');
gv_vAlignTable['u323'] = 'center';
var u324 = document.getElementById('u324');

var u325 = document.getElementById('u325');
gv_vAlignTable['u325'] = 'center';
var u326 = document.getElementById('u326');

u326.style.cursor = 'pointer';
if (bIE) u326.attachEvent("onclick", Clicku326);
else u326.addEventListener("click", Clicku326, true);
function Clicku326(e)
{

if (true) {

	SetPanelStateu561("pd4u561");

	SetPanelStateu4("pd4u4");

}

}
gv_vAlignTable['u326'] = 'top';
var u327 = document.getElementById('u327');

u327.style.cursor = 'pointer';
if (bIE) u327.attachEvent("onclick", Clicku327);
else u327.addEventListener("click", Clicku327, true);
function Clicku327(e)
{

if (true) {

	SetPanelStateu4("pd4u4");

	SetPanelStateu561("pd2u561");

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

	SetPanelStateu561("pd3u561");

	SetPanelStateu4("pd4u4");

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

	SetPanelStateu4("pd4u4");

	SetPanelStateu561("pd5u561");

}

}
gv_vAlignTable['u329'] = 'top';
var u520 = document.getElementById('u520');

u520.style.cursor = 'pointer';
if (bIE) u520.attachEvent("onclick", Clicku520);
else u520.addEventListener("click", Clicku520, true);
function Clicku520(e)
{

if (true) {

	SetPanelStateu519("pd2u519");

}

}

if (bIE) u520.attachEvent("onmouseover", MouseOveru520);
else u520.addEventListener("mouseover", MouseOveru520, true);
function MouseOveru520(e)
{
if (!IsTrueMouseOver('u520',e)) return;
if (true) {

	SetPanelStateu519("pd1u519");

}

}

var u523 = document.getElementById('u523');
gv_vAlignTable['u523'] = 'center';
var u524 = document.getElementById('u524');

var u525 = document.getElementById('u525');
gv_vAlignTable['u525'] = 'center';
var u526 = document.getElementById('u526');

var u527 = document.getElementById('u527');

u527.style.cursor = 'pointer';
if (bIE) u527.attachEvent("onclick", Clicku527);
else u527.addEventListener("click", Clicku527, true);
function Clicku527(e)
{

if (true) {

	SetPanelStateu526("pd2u526");

}

}

if (bIE) u527.attachEvent("onmouseover", MouseOveru527);
else u527.addEventListener("mouseover", MouseOveru527, true);
function MouseOveru527(e)
{
if (!IsTrueMouseOver('u527',e)) return;
if (true) {

	SetPanelStateu526("pd1u526");

}

}

var u528 = document.getElementById('u528');
gv_vAlignTable['u528'] = 'center';
var u529 = document.getElementById('u529');

u529.style.cursor = 'pointer';
if (bIE) u529.attachEvent("onclick", Clicku529);
else u529.addEventListener("click", Clicku529, true);
function Clicku529(e)
{

if (true) {

	SetPanelStateu526("pd2u526");

	SetPanelStateu561("pd1u561");

	SetPanelStateu512("pd1u512");

	SetPanelStateu519("pd0u519");

	SetPanelStateu533("pd0u533");

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Shipping Options</span></b>'));

}

}

if (bIE) u529.attachEvent("onmouseout", MouseOutu529);
else u529.addEventListener("mouseout", MouseOutu529, true);
function MouseOutu529(e)
{
if (!IsTrueMouseOut('u529',e)) return;
if ((GetPanelState('u526')) == ('pd2u526')) {

	SetPanelStateu526("pd2u526");

}
else
if (true) {

	SetPanelStateu526("pd0u526");

}

}

var u330 = document.getElementById('u330');

u330.style.cursor = 'pointer';
if (bIE) u330.attachEvent("onclick", Clicku330);
else u330.addEventListener("click", Clicku330, true);
function Clicku330(e)
{

if (true) {

	SetPanelStateu4("pd4u4");

	SetPanelStateu561("pd5u561");

}

}
gv_vAlignTable['u330'] = 'top';
var u331 = document.getElementById('u331');

u331.style.cursor = 'pointer';
if (bIE) u331.attachEvent("onclick", Clicku331);
else u331.addEventListener("click", Clicku331, true);
function Clicku331(e)
{

if (true) {

	SetPanelStateu4("pd4u4");

	SetPanelStateu561("pd5u561");

}

}
gv_vAlignTable['u331'] = 'top';
var u332 = document.getElementById('u332');

u332.style.cursor = 'pointer';
if (bIE) u332.attachEvent("onclick", Clicku332);
else u332.addEventListener("click", Clicku332, true);
function Clicku332(e)
{

if (true) {

SetWidgetRichText('u3', PopulateVariables('<b><span style=" font-family:\'Calibri\'; color:#FFFFFF; font-size:16px;">&nbsp; Top FAQs</span></b>'));

	SetPanelStateu4("pd0u4");

	SetPanelStateu561("pd0u561");

}

}

var u333 = document.getElementById('u333');
gv_vAlignTable['u333'] = 'center';
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

	SetPanelStateu4("pd3u4");

}

}

var u337 = document.getElementById('u337');
gv_vAlignTable['u337'] = 'center';
var u338 = document.getElementById('u338');

var u339 = document.getElementById('u339');

var u530 = document.getElementById('u530');
gv_vAlignTable['u530'] = 'center';
var u534 = document.getElementById('u534');

u534.style.cursor = 'pointer';
if (bIE) u534.attachEvent("onclick", Clicku534);
else u534.addEventListener("click", Clicku534, true);
function Clicku534(e)
{

if (true) {

	SetPanelStateu533("pd2u533");

}

}

if (bIE) u534.attachEvent("onmouseover", MouseOveru534);
else u534.addEventListener("mouseover", MouseOveru534, true);
function MouseOveru534(e)
{
if (!IsTrueMouseOver('u534',e)) return;
if (true) {

	SetPanelStateu533("pd1u533");

}

}

var u535 = document.getElementById('u535');
gv_vAlignTable['u535'] = 'center';
var u536 = document.getElementById('u536');

u536.style.cursor = 'pointer';
if (bIE) u536.attachEvent("onclick", Clicku536);
else u536.addEventListener("click", Clicku536, true);
function Clicku536(e)
{

if (true) {

	SetPanelStateu533("pd2u533");

	SetPanelStateu512("pd1u512");

	SetPanelStateu519("pd0u519");

	SetPanelStateu526("pd0u526");

	SetPanelStateu561("pd1u561");

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Tracking Your Order</span></b>'));

}

}

if (bIE) u536.attachEvent("onmouseout", MouseOutu536);
else u536.addEventListener("mouseout", MouseOutu536, true);
function MouseOutu536(e)
{
if (!IsTrueMouseOut('u536',e)) return;
if ((GetPanelState('u533')) == ('pd2u533')) {

	SetPanelStateu533("pd2u533");

}
else
if (true) {

	SetPanelStateu533("pd0u533");

}

}

var u537 = document.getElementById('u537');
gv_vAlignTable['u537'] = 'center';
var u538 = document.getElementById('u538');

var u539 = document.getElementById('u539');
gv_vAlignTable['u539'] = 'center';
var u340 = document.getElementById('u340');
gv_vAlignTable['u340'] = 'center';
var u341 = document.getElementById('u341');

u341.style.cursor = 'pointer';
if (bIE) u341.attachEvent("onclick", Clicku341);
else u341.addEventListener("click", Clicku341, true);
function Clicku341(e)
{

if (true) {

	SetPanelStateu338("pd0u338");

}

}

if (bIE) u341.attachEvent("onmouseover", MouseOveru341);
else u341.addEventListener("mouseover", MouseOveru341, true);
function MouseOveru341(e)
{
if (!IsTrueMouseOver('u341',e)) return;
if (true) {

	SetPanelStateu338("pd2u338");

}

}

var u342 = document.getElementById('u342');
gv_vAlignTable['u342'] = 'center';
var u343 = document.getElementById('u343');

u343.style.cursor = 'pointer';
if (bIE) u343.attachEvent("onclick", Clicku343);
else u343.addEventListener("click", Clicku343, true);
function Clicku343(e)
{

if (true) {

	SetPanelStateu338("pd0u338");

	SetPanelStateu345("pd0u345");

	SetPanelStateu352("pd0u352");

	SetPanelStateu359("pd0u359");

	SetPanelStateu366("pd0u366");

	SetPanelStateu561("pd1u561");

	SetPanelStateu375("pd0u375");

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Budget Tips </span></b>'));

}

}

if (bIE) u343.attachEvent("onmouseout", MouseOutu343);
else u343.addEventListener("mouseout", MouseOutu343, true);
function MouseOutu343(e)
{
if (!IsTrueMouseOut('u343',e)) return;
if ((GetPanelState('u338')) == ('pd0u338')) {

	SetPanelStateu338("pd0u338");

}
else
if (true) {

	SetPanelStateu338("pd1u338");

}

}

var u344 = document.getElementById('u344');
gv_vAlignTable['u344'] = 'center';
var u345 = document.getElementById('u345');

var u346 = document.getElementById('u346');

u346.style.cursor = 'pointer';
if (bIE) u346.attachEvent("onclick", Clicku346);
else u346.addEventListener("click", Clicku346, true);
function Clicku346(e)
{

if (true) {

	SetPanelStateu345("pd2u345");

}

}

if (bIE) u346.attachEvent("onmouseover", MouseOveru346);
else u346.addEventListener("mouseover", MouseOveru346, true);
function MouseOveru346(e)
{
if (!IsTrueMouseOver('u346',e)) return;
if (true) {

	SetPanelStateu345("pd1u345");

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

	SetPanelStateu338("pd1u338");

	SetPanelStateu352("pd0u352");

	SetPanelStateu359("pd0u359");

	SetPanelStateu366("pd0u366");

	SetPanelStateu561("pd1u561");

	SetPanelStateu375("pd0u375");

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Combining orders</span></b>'));

}

}

if (bIE) u348.attachEvent("onmouseout", MouseOutu348);
else u348.addEventListener("mouseout", MouseOutu348, true);
function MouseOutu348(e)
{
if (!IsTrueMouseOut('u348',e)) return;
if ((GetPanelState('u345')) == ('pd2u345')) {

	SetPanelStateu345("pd2u345");

}
else
if (true) {

	SetPanelStateu345("pd0u345");

}

}

var u349 = document.getElementById('u349');
gv_vAlignTable['u349'] = 'center';
var u540 = document.getElementById('u540');

u540.style.cursor = 'pointer';
if (bIE) u540.attachEvent("onclick", Clicku540);
else u540.addEventListener("click", Clicku540, true);
function Clicku540(e)
{

if (true) {

	SetPanelStateu4("pd3u4");

	SetPanelStateu561("pd1u561");

	SetPanelStateu338("pd0u338");

	SetPanelStateu345("pd0u345");

	SetPanelStateu352("pd0u352");

	SetPanelStateu359("pd0u359");

	SetPanelStateu366("pd0u366");

	SetPanelStateu375("pd0u375");

SetWidgetRichText('u3', PopulateVariables('<b><span style=" font-family:\'Calibri\'; color:#FFFFFF; font-size:16px;">&nbsp; Ordering</span></b>'));

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Budget Tips</span></b>'));

}

}

var u544 = document.getElementById('u544');

u544.style.cursor = 'pointer';
if (bIE) u544.attachEvent("onclick", Clicku544);
else u544.addEventListener("click", Clicku544, true);
function Clicku544(e)
{

if (true) {

	SetPanelStateu4("pd2u4");

	SetPanelStateu561("pd1u561");

	SetPanelStateu242("pd0u242");

	SetPanelStateu249("pd0u249");

	SetPanelStateu256("pd0u256");

	SetPanelStateu263("pd0u263");

SetWidgetRichText('u3', PopulateVariables('<b><span style=" font-family:\'Calibri\'; color:#FFFFFF; font-size:16px;">&nbsp; Products &amp; Sizing</span></b>'));

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Sizing Guides</span></b>'));

}

}

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

var u353 = document.getElementById('u353');

u353.style.cursor = 'pointer';
if (bIE) u353.attachEvent("onclick", Clicku353);
else u353.addEventListener("click", Clicku353, true);
function Clicku353(e)
{

if (true) {

	SetPanelStateu352("pd2u352");

}

}

if (bIE) u353.attachEvent("onmouseover", MouseOveru353);
else u353.addEventListener("mouseover", MouseOveru353, true);
function MouseOveru353(e)
{
if (!IsTrueMouseOver('u353',e)) return;
if (true) {

	SetPanelStateu352("pd1u352");

}

}

var u354 = document.getElementById('u354');
gv_vAlignTable['u354'] = 'center';
var u355 = document.getElementById('u355');

u355.style.cursor = 'pointer';
if (bIE) u355.attachEvent("onclick", Clicku355);
else u355.addEventListener("click", Clicku355, true);
function Clicku355(e)
{

if (true) {

	SetPanelStateu352("pd2u352");

	SetPanelStateu561("pd1u561");

	SetPanelStateu338("pd1u338");

	SetPanelStateu345("pd0u345");

	SetPanelStateu359("pd0u359");

	SetPanelStateu366("pd0u366");

	SetPanelStateu375("pd0u375");

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Minimum Quantities</span></b>'));

}

}

if (bIE) u355.attachEvent("onmouseout", MouseOutu355);
else u355.addEventListener("mouseout", MouseOutu355, true);
function MouseOutu355(e)
{
if (!IsTrueMouseOut('u355',e)) return;
if ((GetPanelState('u352')) == ('pd2u352')) {

	SetPanelStateu352("pd2u352");

}
else
if (true) {

	SetPanelStateu352("pd0u352");

}

}

var u356 = document.getElementById('u356');
gv_vAlignTable['u356'] = 'center';
var u357 = document.getElementById('u357');

var u358 = document.getElementById('u358');
gv_vAlignTable['u358'] = 'center';
var u359 = document.getElementById('u359');

var u550 = document.getElementById('u550');

var u554 = document.getElementById('u554');

var u555 = document.getElementById('u555');
gv_vAlignTable['u555'] = 'center';
var u556 = document.getElementById('u556');

var u557 = document.getElementById('u557');
gv_vAlignTable['u557'] = 'center';
var u558 = document.getElementById('u558');

var u559 = document.getElementById('u559');
gv_vAlignTable['u559'] = 'center';
var u360 = document.getElementById('u360');

u360.style.cursor = 'pointer';
if (bIE) u360.attachEvent("onclick", Clicku360);
else u360.addEventListener("click", Clicku360, true);
function Clicku360(e)
{

if (true) {

	SetPanelStateu359("pd2u359");

}

}

if (bIE) u360.attachEvent("onmouseover", MouseOveru360);
else u360.addEventListener("mouseover", MouseOveru360, true);
function MouseOveru360(e)
{
if (!IsTrueMouseOver('u360',e)) return;
if (true) {

	SetPanelStateu359("pd1u359");

}

}

var u361 = document.getElementById('u361');
gv_vAlignTable['u361'] = 'center';
var u362 = document.getElementById('u362');

u362.style.cursor = 'pointer';
if (bIE) u362.attachEvent("onclick", Clicku362);
else u362.addEventListener("click", Clicku362, true);
function Clicku362(e)
{

if (true) {

	SetPanelStateu359("pd2u359");

	SetPanelStateu338("pd1u338");

	SetPanelStateu345("pd0u345");

	SetPanelStateu352("pd0u352");

	SetPanelStateu366("pd0u366");

	SetPanelStateu561("pd1u561");

	SetPanelStateu375("pd0u375");

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Sizing Guides</span></b>'));

}

}

if (bIE) u362.attachEvent("onmouseout", MouseOutu362);
else u362.addEventListener("mouseout", MouseOutu362, true);
function MouseOutu362(e)
{
if (!IsTrueMouseOut('u362',e)) return;
if ((GetPanelState('u359')) == ('pd2u359')) {

	SetPanelStateu359("pd2u359");

}
else
if (true) {

	SetPanelStateu359("pd0u359");

}

}

var u363 = document.getElementById('u363');
gv_vAlignTable['u363'] = 'center';
var u364 = document.getElementById('u364');

var u365 = document.getElementById('u365');
gv_vAlignTable['u365'] = 'center';
var u366 = document.getElementById('u366');

var u367 = document.getElementById('u367');

u367.style.cursor = 'pointer';
if (bIE) u367.attachEvent("onclick", Clicku367);
else u367.addEventListener("click", Clicku367, true);
function Clicku367(e)
{

if (true) {

	SetPanelStateu366("pd2u366");

}

}

if (bIE) u367.attachEvent("onmouseover", MouseOveru367);
else u367.addEventListener("mouseover", MouseOveru367, true);
function MouseOveru367(e)
{
if (!IsTrueMouseOver('u367',e)) return;
if (true) {

	SetPanelStateu366("pd1u366");

}

}

var u368 = document.getElementById('u368');
gv_vAlignTable['u368'] = 'center';
var u369 = document.getElementById('u369');

u369.style.cursor = 'pointer';
if (bIE) u369.attachEvent("onclick", Clicku369);
else u369.addEventListener("click", Clicku369, true);
function Clicku369(e)
{

if (true) {

	SetPanelStateu366("pd2u366");

	SetPanelStateu338("pd1u338");

	SetPanelStateu345("pd0u345");

	SetPanelStateu352("pd0u352");

	SetPanelStateu359("pd0u359");

	SetPanelStateu561("pd1u561");

	SetPanelStateu375("pd0u375");

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Samples</span></b>'));

}

}

if (bIE) u369.attachEvent("onmouseout", MouseOutu369);
else u369.addEventListener("mouseout", MouseOutu369, true);
function MouseOutu369(e)
{
if (!IsTrueMouseOut('u369',e)) return;
if ((GetPanelState('u366')) == ('pd2u366')) {

	SetPanelStateu366("pd2u366");

}
else
if (true) {

	SetPanelStateu366("pd0u366");

}

}

var u564 = document.getElementById('u564');
gv_vAlignTable['u564'] = 'top';
var u565 = document.getElementById('u565');

var u566 = document.getElementById('u566');
gv_vAlignTable['u566'] = 'center';
var u567 = document.getElementById('u567');

var u568 = document.getElementById('u568');
gv_vAlignTable['u568'] = 'center';
var u569 = document.getElementById('u569');

var u370 = document.getElementById('u370');
gv_vAlignTable['u370'] = 'center';
var u371 = document.getElementById('u371');

var u372 = document.getElementById('u372');
gv_vAlignTable['u372'] = 'center';
var u373 = document.getElementById('u373');

var u374 = document.getElementById('u374');
gv_vAlignTable['u374'] = 'center';
var u375 = document.getElementById('u375');

var u376 = document.getElementById('u376');

u376.style.cursor = 'pointer';
if (bIE) u376.attachEvent("onclick", Clicku376);
else u376.addEventListener("click", Clicku376, true);
function Clicku376(e)
{

if (true) {

	SetPanelStateu375("pd2u375");

}

}

if (bIE) u376.attachEvent("onmouseover", MouseOveru376);
else u376.addEventListener("mouseover", MouseOveru376, true);
function MouseOveru376(e)
{
if (!IsTrueMouseOver('u376',e)) return;
if (true) {

	SetPanelStateu375("pd1u375");

}

}

var u377 = document.getElementById('u377');
gv_vAlignTable['u377'] = 'center';
var u378 = document.getElementById('u378');

u378.style.cursor = 'pointer';
if (bIE) u378.attachEvent("onclick", Clicku378);
else u378.addEventListener("click", Clicku378, true);
function Clicku378(e)
{

if (true) {

	SetPanelStateu375("pd2u375");

	SetPanelStateu338("pd1u338");

	SetPanelStateu345("pd0u345");

	SetPanelStateu352("pd0u352");

	SetPanelStateu366("pd0u366");

	SetPanelStateu561("pd1u561");

	SetPanelStateu359("pd0u359");

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Price Quotes</span></b>'));

}

}

if (bIE) u378.attachEvent("onmouseout", MouseOutu378);
else u378.addEventListener("mouseout", MouseOutu378, true);
function MouseOutu378(e)
{
if (!IsTrueMouseOut('u378',e)) return;
if ((GetPanelState('u375')) == ('pd2u375')) {

	SetPanelStateu375("pd2u375");

}
else
if (true) {

	SetPanelStateu375("pd0u375");

}

}

var u379 = document.getElementById('u379');
gv_vAlignTable['u379'] = 'center';
var u574 = document.getElementById('u574');
gv_vAlignTable['u574'] = 'center';
var u575 = document.getElementById('u575');

var u576 = document.getElementById('u576');
gv_vAlignTable['u576'] = 'center';
var u577 = document.getElementById('u577');

var u578 = document.getElementById('u578');
gv_vAlignTable['u578'] = 'center';
var u579 = document.getElementById('u579');
gv_vAlignTable['u579'] = 'top';
var u380 = document.getElementById('u380');

var u381 = document.getElementById('u381');
gv_vAlignTable['u381'] = 'center';
var u382 = document.getElementById('u382');

u382.style.cursor = 'pointer';
if (bIE) u382.attachEvent("onclick", Clicku382);
else u382.addEventListener("click", Clicku382, true);
function Clicku382(e)
{

if (true) {

	SetPanelStateu4("pd5u4");

	SetPanelStateu561("pd1u561");

SetWidgetRichText('u3', PopulateVariables('<b><span style=" font-family:\'Calibri\'; color:#FFFFFF; font-size:16px;">&nbsp; Shipping, Delivery &amp; Returns</span></b>'));

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Delivery times</span></b>'));

}

}

var u383 = document.getElementById('u383');
gv_vAlignTable['u383'] = 'center';
var u384 = document.getElementById('u384');

u384.style.cursor = 'pointer';
if (bIE) u384.attachEvent("onclick", Clicku384);
else u384.addEventListener("click", Clicku384, true);
function Clicku384(e)
{

if (true) {

	SetPanelStateu4("pd4u4");

	SetPanelStateu561("pd1u561");

	SetPanelStateu400("pd0u400");

	SetPanelStateu414("pd0u414");

	SetPanelStateu407("pd0u407");

	SetPanelStateu421("pd0u421");

	SetPanelStateu428("pd0u428");

	SetPanelStateu435("pd0u435");

SetWidgetRichText('u3', PopulateVariables('<b><span style=" font-family:\'Calibri\'; color:#FFFFFF; font-size:16px;">&nbsp; Creative Services &amp; Printing</span></b>'));

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">What is a &quot;redraw&quot;?</span></b>'));

}

}

var u385 = document.getElementById('u385');
gv_vAlignTable['u385'] = 'center';
var u386 = document.getElementById('u386');

u386.style.cursor = 'pointer';
if (bIE) u386.attachEvent("onclick", Clicku386);
else u386.addEventListener("click", Clicku386, true);
function Clicku386(e)
{

if (true) {

	SetPanelStateu4("pd2u4");

	SetPanelStateu561("pd1u561");

	SetPanelStateu242("pd0u242");

	SetPanelStateu249("pd0u249");

	SetPanelStateu256("pd0u256");

	SetPanelStateu263("pd0u263");

SetWidgetRichText('u3', PopulateVariables('<b><span style=" font-family:\'Calibri\'; color:#FFFFFF; font-size:16px;">&nbsp; Products &amp; Sizing</span></b>'));

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Sizing Guides</span></b>'));

}

}

var u387 = document.getElementById('u387');
gv_vAlignTable['u387'] = 'center';
var u388 = document.getElementById('u388');

var u389 = document.getElementById('u389');
gv_vAlignTable['u389'] = 'center';
var u584 = document.getElementById('u584');

var u585 = document.getElementById('u585');
gv_vAlignTable['u585'] = 'center';
var u586 = document.getElementById('u586');
gv_vAlignTable['u586'] = 'top';
var u587 = document.getElementById('u587');
gv_vAlignTable['u587'] = 'top';
var u588 = document.getElementById('u588');
gv_vAlignTable['u588'] = 'top';
var u589 = document.getElementById('u589');

var u200 = document.getElementById('u200');

u200.style.cursor = 'pointer';
if (bIE) u200.attachEvent("onclick", Clicku200);
else u200.addEventListener("click", Clicku200, true);
function Clicku200(e)
{

if (true) {

	SetPanelStateu199("pd2u199");

}

}

if (bIE) u200.attachEvent("onmouseover", MouseOveru200);
else u200.addEventListener("mouseover", MouseOveru200, true);
function MouseOveru200(e)
{
if (!IsTrueMouseOver('u200',e)) return;
if (true) {

	SetPanelStateu199("pd1u199");

}

}

var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'center';
var u202 = document.getElementById('u202');

u202.style.cursor = 'pointer';
if (bIE) u202.attachEvent("onclick", Clicku202);
else u202.addEventListener("click", Clicku202, true);
function Clicku202(e)
{

if (true) {

	SetPanelStateu199("pd2u199");

	SetPanelStateu561("pd1u561");

	SetPanelStateu206("pd0u206");

	SetPanelStateu192("pd0u192");

	SetPanelStateu185("pd0u185");

	SetPanelStateu178("pd0u178");

	SetPanelStateu171("pd0u171");

	SetPanelStateu164("pd0u164");

	SetPanelStateu157("pd0u157");

	SetPanelStateu150("pd0u150");

	SetPanelStateu121("pd2u121");

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Adding accents and symbols</span></b>'));

}

}

if (bIE) u202.attachEvent("onmouseout", MouseOutu202);
else u202.addEventListener("mouseout", MouseOutu202, true);
function MouseOutu202(e)
{
if (!IsTrueMouseOut('u202',e)) return;
if ((GetPanelState('u199')) == ('pd2u199')) {

	SetPanelStateu199("pd2u199");

}
else
if (true) {

	SetPanelStateu199("pd0u199");

}

}

var u390 = document.getElementById('u390');

var u391 = document.getElementById('u391');
gv_vAlignTable['u391'] = 'center';
var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'center';
var u393 = document.getElementById('u393');
gv_vAlignTable['u393'] = 'center';
var u394 = document.getElementById('u394');

u394.style.cursor = 'pointer';
if (bIE) u394.attachEvent("onclick", Clicku394);
else u394.addEventListener("click", Clicku394, true);
function Clicku394(e)
{

if (true) {

	SetPanelStateu4("pd1u4");

	SetPanelStateu561("pd1u561");

	SetPanelStateu121("pd0u121");

	SetPanelStateu150("pd0u150");

	SetPanelStateu157("pd0u157");

	SetPanelStateu164("pd0u164");

	SetPanelStateu171("pd0u171");

	SetPanelStateu178("pd0u178");

	SetPanelStateu185("pd0u185");

	SetPanelStateu192("pd0u192");

	SetPanelStateu199("pd0u199");

	SetPanelStateu206("pd0u206");

SetWidgetRichText('u3', PopulateVariables('<b><span style=" font-family:\'Calibri\'; color:#FFFFFF; font-size:16px;">&nbsp; Designing Online</span></b>'));

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Uploading images and photos</span></b>'));

}

}

var u395 = document.getElementById('u395');
gv_vAlignTable['u395'] = 'center';
var u396 = document.getElementById('u396');

var u397 = document.getElementById('u397');
gv_vAlignTable['u397'] = 'center';
var u398 = document.getElementById('u398');

var u399 = document.getElementById('u399');
gv_vAlignTable['u399'] = 'center';
var u590 = document.getElementById('u590');
gv_vAlignTable['u590'] = 'center';
var u591 = document.getElementById('u591');

var u592 = document.getElementById('u592');
gv_vAlignTable['u592'] = 'center';
var u593 = document.getElementById('u593');

var u594 = document.getElementById('u594');
gv_vAlignTable['u594'] = 'center';
var u595 = document.getElementById('u595');

var u596 = document.getElementById('u596');
gv_vAlignTable['u596'] = 'center';
var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'center';
var u211 = document.getElementById('u211');

var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'center';
var u213 = document.getElementById('u213');

var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'center';
var u215 = document.getElementById('u215');

var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'center';
var u217 = document.getElementById('u217');

var u218 = document.getElementById('u218');

var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'center';
var u220 = document.getElementById('u220');

u220.style.cursor = 'pointer';
if (bIE) u220.attachEvent("onclick", Clicku220);
else u220.addEventListener("click", Clicku220, true);
function Clicku220(e)
{

if (true) {

	SetPanelStateu217("pd0u217");

}

}

if (bIE) u220.attachEvent("onmouseover", MouseOveru220);
else u220.addEventListener("mouseover", MouseOveru220, true);
function MouseOveru220(e)
{
if (!IsTrueMouseOver('u220',e)) return;
if (true) {

	SetPanelStateu217("pd2u217");

}

}

var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'center';
var u222 = document.getElementById('u222');

u222.style.cursor = 'pointer';
if (bIE) u222.attachEvent("onclick", Clicku222);
else u222.addEventListener("click", Clicku222, true);
function Clicku222(e)
{

if (true) {

	SetPanelStateu217("pd0u217");

	SetPanelStateu561("pd1u561");

	SetPanelStateu206("pd0u206");

	SetPanelStateu199("pd0u199");

	SetPanelStateu192("pd0u192");

	SetPanelStateu185("pd0u185");

	SetPanelStateu178("pd0u178");

	SetPanelStateu171("pd0u171");

	SetPanelStateu164("pd0u164");

	SetPanelStateu121("pd2u121");

	SetPanelStateu157("pd0u157");

	SetPanelStateu150("pd0u150");

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Uploading images and photos</span></b>'));

}

}

if (bIE) u222.attachEvent("onmouseout", MouseOutu222);
else u222.addEventListener("mouseout", MouseOutu222, true);
function MouseOutu222(e)
{
if (!IsTrueMouseOut('u222',e)) return;
if ((GetPanelState('u217')) == ('pd0u217')) {

	SetPanelStateu217("pd0u217");

}
else
if (true) {

	SetPanelStateu217("pd1u217");

}

}

var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'center';
var u224 = document.getElementById('u224');

u224.style.cursor = 'pointer';
if (bIE) u224.attachEvent("onclick", Clicku224);
else u224.addEventListener("click", Clicku224, true);
function Clicku224(e)
{

if (true) {

	SetPanelStateu4("pd3u4");

	SetPanelStateu561("pd1u561");

	SetPanelStateu338("pd0u338");

	SetPanelStateu345("pd0u345");

	SetPanelStateu352("pd0u352");

	SetPanelStateu359("pd0u359");

	SetPanelStateu366("pd0u366");

	SetPanelStateu375("pd0u375");

SetWidgetRichText('u3', PopulateVariables('<b><span style=" font-family:\'Calibri\'; color:#FFFFFF; font-size:16px;">&nbsp; Ordering</span></b>'));

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Budget Tips</span></b>'));

}

}

var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'center';
var u226 = document.getElementById('u226');

u226.style.cursor = 'pointer';
if (bIE) u226.attachEvent("onclick", Clicku226);
else u226.addEventListener("click", Clicku226, true);
function Clicku226(e)
{

if (true) {

	SetPanelStateu4("pd5u4");

	SetPanelStateu561("pd1u561");

SetWidgetRichText('u3', PopulateVariables('<b><span style=" font-family:\'Calibri\'; color:#FFFFFF; font-size:16px;">&nbsp; Shipping, Delivery &amp; Returns</span></b>'));

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Delivery times</span></b>'));

}

}

var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'center';
var u228 = document.getElementById('u228');

u228.style.cursor = 'pointer';
if (bIE) u228.attachEvent("onclick", Clicku228);
else u228.addEventListener("click", Clicku228, true);
function Clicku228(e)
{

if (true) {

	SetPanelStateu4("pd4u4");

	SetPanelStateu561("pd1u561");

	SetPanelStateu400("pd0u400");

	SetPanelStateu414("pd0u414");

	SetPanelStateu407("pd0u407");

	SetPanelStateu421("pd0u421");

	SetPanelStateu428("pd0u428");

	SetPanelStateu435("pd0u435");

SetWidgetRichText('u3', PopulateVariables('<b><span style=" font-family:\'Calibri\'; color:#FFFFFF; font-size:16px;">&nbsp; Creative Services &amp; Printing</span></b>'));

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">What is a &quot;redraw&quot;?</span></b>'));

}

}

var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'center';
var u600 = document.getElementById('u600');
gv_vAlignTable['u600'] = 'center';
var u230 = document.getElementById('u230');

u230.style.cursor = 'pointer';
if (bIE) u230.attachEvent("onclick", Clicku230);
else u230.addEventListener("click", Clicku230, true);
function Clicku230(e)
{

if (true) {

	SetPanelStateu4("pd2u4");

	SetPanelStateu561("pd1u561");

	SetPanelStateu242("pd0u242");

	SetPanelStateu249("pd0u249");

	SetPanelStateu256("pd0u256");

	SetPanelStateu263("pd0u263");

SetWidgetRichText('u3', PopulateVariables('<b><span style=" font-family:\'Calibri\'; color:#FFFFFF; font-size:16px;">&nbsp; Products &amp; Sizing</span></b>'));

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Sizing Guides</span></b>'));

}

}

var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'center';
var u232 = document.getElementById('u232');

var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'center';
var u234 = document.getElementById('u234');

var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'center';
var u236 = document.getElementById('u236');

var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'center';
var u238 = document.getElementById('u238');

var u239 = document.getElementById('u239');
gv_vAlignTable['u239'] = 'center';
var u240 = document.getElementById('u240');

var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'center';
var u242 = document.getElementById('u242');

var u243 = document.getElementById('u243');

var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'center';
var u245 = document.getElementById('u245');

u245.style.cursor = 'pointer';
if (bIE) u245.attachEvent("onclick", Clicku245);
else u245.addEventListener("click", Clicku245, true);
function Clicku245(e)
{

if (true) {

	SetPanelStateu242("pd0u242");

	SetPanelStateu561("pd1u561");

	SetPanelStateu249("pd0u249");

	SetPanelStateu256("pd0u256");

	SetPanelStateu263("pd0u263");

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Sizing guides</span></b>'));

}

}

if (bIE) u245.attachEvent("onmouseout", MouseOutu245);
else u245.addEventListener("mouseout", MouseOutu245, true);
function MouseOutu245(e)
{
if (!IsTrueMouseOut('u245',e)) return;
if ((GetPanelState('u242')) == ('pd0u242')) {

	SetPanelStateu242("pd0u242");

}
else
if (true) {

	SetPanelStateu242("pd2u242");

}

}

var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'center';
var u247 = document.getElementById('u247');

u247.style.cursor = 'pointer';
if (bIE) u247.attachEvent("onclick", Clicku247);
else u247.addEventListener("click", Clicku247, true);
function Clicku247(e)
{

if (true) {

	SetPanelStateu242("pd0u242");

}

}

if (bIE) u247.attachEvent("onmouseover", MouseOveru247);
else u247.addEventListener("mouseover", MouseOveru247, true);
function MouseOveru247(e)
{
if (!IsTrueMouseOver('u247',e)) return;
if (true) {

	SetPanelStateu242("pd1u242");

}

}

var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'center';
var u249 = document.getElementById('u249');

var u601 = document.getElementById('u601');

var u602 = document.getElementById('u602');
gv_vAlignTable['u602'] = 'center';
var u603 = document.getElementById('u603');

var u604 = document.getElementById('u604');
gv_vAlignTable['u604'] = 'center';
var u250 = document.getElementById('u250');

u250.style.cursor = 'pointer';
if (bIE) u250.attachEvent("onclick", Clicku250);
else u250.addEventListener("click", Clicku250, true);
function Clicku250(e)
{

if (true) {

	SetPanelStateu249("pd2u249");

}

}

if (bIE) u250.attachEvent("onmouseover", MouseOveru250);
else u250.addEventListener("mouseover", MouseOveru250, true);
function MouseOveru250(e)
{
if (!IsTrueMouseOver('u250',e)) return;
if (true) {

	SetPanelStateu249("pd1u249");

}

}

var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'center';
var u252 = document.getElementById('u252');

u252.style.cursor = 'pointer';
if (bIE) u252.attachEvent("onclick", Clicku252);
else u252.addEventListener("click", Clicku252, true);
function Clicku252(e)
{

if (true) {

	SetPanelStateu249("pd2u249");

	SetPanelStateu561("pd1u561");

	SetPanelStateu256("pd0u256");

	SetPanelStateu263("pd0u263");

	SetPanelStateu242("pd2u242");

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Brand comparison</span></b>'));

}

}

if (bIE) u252.attachEvent("onmouseout", MouseOutu252);
else u252.addEventListener("mouseout", MouseOutu252, true);
function MouseOutu252(e)
{
if (!IsTrueMouseOut('u252',e)) return;
if ((GetPanelState('u249')) == ('pd2u249')) {

	SetPanelStateu249("pd2u249");

}
else
if (true) {

	SetPanelStateu249("pd0u249");

}

}

var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'center';
var u254 = document.getElementById('u254');

var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'center';
var u256 = document.getElementById('u256');

var u257 = document.getElementById('u257');

u257.style.cursor = 'pointer';
if (bIE) u257.attachEvent("onclick", Clicku257);
else u257.addEventListener("click", Clicku257, true);
function Clicku257(e)
{

if (true) {

	SetPanelStateu256("pd2u256");

}

}

if (bIE) u257.attachEvent("onmouseover", MouseOveru257);
else u257.addEventListener("mouseover", MouseOveru257, true);
function MouseOveru257(e)
{
if (!IsTrueMouseOver('u257',e)) return;
if (true) {

	SetPanelStateu256("pd1u256");

}

}

var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'center';
var u259 = document.getElementById('u259');

u259.style.cursor = 'pointer';
if (bIE) u259.attachEvent("onclick", Clicku259);
else u259.addEventListener("click", Clicku259, true);
function Clicku259(e)
{

if (true) {

	SetPanelStateu256("pd2u256");

	SetPanelStateu561("pd1u561");

	SetPanelStateu242("pd2u242");

	SetPanelStateu249("pd0u249");

	SetPanelStateu263("pd0u263");

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Product requests</span></b>'));

}

}

if (bIE) u259.attachEvent("onmouseout", MouseOutu259);
else u259.addEventListener("mouseout", MouseOutu259, true);
function MouseOutu259(e)
{
if (!IsTrueMouseOut('u259',e)) return;
if ((GetPanelState('u256')) == ('pd2u256')) {

	SetPanelStateu256("pd2u256");

}
else
if (true) {

	SetPanelStateu256("pd0u256");

}

}

var u0 = document.getElementById('u0');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u2 = document.getElementById('u2');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u4 = document.getElementById('u4');

var u5 = document.getElementById('u5');

var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u7 = document.getElementById('u7');

u7.style.cursor = 'pointer';
if (bIE) u7.attachEvent("onclick", Clicku7);
else u7.addEventListener("click", Clicku7, true);
function Clicku7(e)
{

if (true) {

	SetPanelStateu4("pd3u4");

	SetPanelStateu561("pd1u561");

	SetPanelStateu338("pd0u338");

	SetPanelStateu345("pd0u345");

	SetPanelStateu352("pd0u352");

	SetPanelStateu359("pd0u359");

	SetPanelStateu366("pd0u366");

	SetPanelStateu375("pd0u375");

SetWidgetRichText('u3', PopulateVariables('<b><span style=" font-family:\'Calibri\'; color:#FFFFFF; font-size:16px;">&nbsp; Ordering</span></b>'));

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Budget Tips</span></b>'));

}

}

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'center';
var u261 = document.getElementById('u261');

var u262 = document.getElementById('u262');
gv_vAlignTable['u262'] = 'center';
var u263 = document.getElementById('u263');

var u264 = document.getElementById('u264');

u264.style.cursor = 'pointer';
if (bIE) u264.attachEvent("onclick", Clicku264);
else u264.addEventListener("click", Clicku264, true);
function Clicku264(e)
{

if (true) {

	SetPanelStateu263("pd2u263");

}

}

if (bIE) u264.attachEvent("onmouseover", MouseOveru264);
else u264.addEventListener("mouseover", MouseOveru264, true);
function MouseOveru264(e)
{
if (!IsTrueMouseOver('u264',e)) return;
if (true) {

	SetPanelStateu263("pd1u263");

}

}

var u265 = document.getElementById('u265');
gv_vAlignTable['u265'] = 'center';
var u266 = document.getElementById('u266');

u266.style.cursor = 'pointer';
if (bIE) u266.attachEvent("onclick", Clicku266);
else u266.addEventListener("click", Clicku266, true);
function Clicku266(e)
{

if (true) {

	SetPanelStateu263("pd2u263");

	SetPanelStateu561("pd1u561");

	SetPanelStateu242("pd2u242");

	SetPanelStateu249("pd0u249");

	SetPanelStateu256("pd0u256");

SetWidgetRichText('u563', PopulateVariables('<b><span style=" font-family:\'Verdana\'; color:#006699; font-size:13px;">Samples</span></b>'));

}

}

if (bIE) u266.attachEvent("onmouseout", MouseOutu266);
else u266.addEventListener("mouseout", MouseOutu266, true);
function MouseOutu266(e)
{
if (!IsTrueMouseOut('u266',e)) return;
if ((GetPanelState('u263')) == ('pd2u263')) {

	SetPanelStateu263("pd2u263");

}
else
if (true) {

	SetPanelStateu263("pd0u263");

}

}

var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'center';
var u268 = document.getElementById('u268');

var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'center';
if (window.OnLoad) OnLoad();
