
var PageName = 'New Welcome Page';
var PageId = 'p53658223686d4f49a81335dbbe9e0870'
var PageUrl = 'New_Welcome_Page.html'
document.title = 'New Welcome Page';

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

eval(GetDynamicPanelScript('u618', 5));

eval(GetDynamicPanelScript('u155', 1));

eval(GetDynamicPanelScript('u737', 1));

eval(GetDynamicPanelScript('u405', 3));

eval(GetDynamicPanelScript('u650', 2));

eval(GetDynamicPanelScript('u190', 1));

eval(GetDynamicPanelScript('u265', 4));

eval(GetDynamicPanelScript('u21', 2));

eval(GetDynamicPanelScript('u591', 2));

eval(GetDynamicPanelScript('u375', 1));

eval(GetDynamicPanelScript('u376', 1));

eval(GetDynamicPanelScript('u160', 1));

eval(GetDynamicPanelScript('u309', 5));

eval(GetDynamicPanelScript('u555', 1));

eval(GetDynamicPanelScript('u165', 1));

eval(GetDynamicPanelScript('u731', 1));

eval(GetDynamicPanelScript('u275', 1));

eval(GetDynamicPanelScript('u342', 3));

eval(GetDynamicPanelScript('u431', 2));

eval(GetDynamicPanelScript('u662', 4));

eval(GetDynamicPanelScript('u200', 1));

eval(GetDynamicPanelScript('u435', 6));

eval(GetDynamicPanelScript('u274', 1));

eval(GetDynamicPanelScript('u349', 3));

eval(GetDynamicPanelScript('u561', 1));

eval(GetDynamicPanelScript('u170', 1));

eval(GetDynamicPanelScript('u420', 2));

eval(GetDynamicPanelScript('u175', 1));

eval(GetDynamicPanelScript('u356', 3));

eval(GetDynamicPanelScript('u0', 1));

eval(GetDynamicPanelScript('u736', 1));

eval(GetDynamicPanelScript('u3', 6));

eval(GetDynamicPanelScript('u4', 2));

eval(GetDynamicPanelScript('u217', 1));

eval(GetDynamicPanelScript('u604', 1));

eval(GetDynamicPanelScript('u391', 3));

eval(GetDynamicPanelScript('u412', 3));

eval(GetDynamicPanelScript('u716', 1));

eval(GetDynamicPanelScript('u717', 1));

eval(GetDynamicPanelScript('u570', 2));

eval(GetDynamicPanelScript('u398', 3));

eval(GetDynamicPanelScript('u180', 1));

eval(GetDynamicPanelScript('u195', 1));

eval(GetDynamicPanelScript('u185', 1));

eval(GetDynamicPanelScript('u13', 1));

eval(GetDynamicPanelScript('u14', 3));

eval(GetDynamicPanelScript('u363', 3));

eval(GetDynamicPanelScript('u291', 1));

var u270 = document.getElementById('u270');

var u271 = document.getElementById('u271');
gv_vAlignTable['u271'] = 'center';
var u272 = document.getElementById('u272');

var u273 = document.getElementById('u273');
gv_vAlignTable['u273'] = 'center';
var u274 = document.getElementById('u274');

var u275 = document.getElementById('u275');

var u276 = document.getElementById('u276');
gv_vAlignTable['u276'] = 'top';
var u277 = document.getElementById('u277');

var u278 = document.getElementById('u278');
gv_vAlignTable['u278'] = 'center';
var u279 = document.getElementById('u279');

u279.style.cursor = 'pointer';
if (bIE) u279.attachEvent("onclick", Clicku279);
else u279.addEventListener("click", Clicku279, true);
function Clicku279(e)
{

if (true) {

	BringToFront("u555");

	SetPanelVisibilityu0("hidden");

	SetPanelVisibilityu555("");

	SetPanelStateu618("pd3u618");

	SetPanelStateu435("pd1u435");

	MoveWidgetTo('u731',11,300);

}

}

var u631 = document.getElementById('u631');

var u632 = document.getElementById('u632');
gv_vAlignTable['u632'] = 'center';
var u633 = document.getElementById('u633');
gv_vAlignTable['u633'] = 'top';
var u634 = document.getElementById('u634');

var u635 = document.getElementById('u635');
gv_vAlignTable['u635'] = 'top';
var u636 = document.getElementById('u636');

var u637 = document.getElementById('u637');
gv_vAlignTable['u637'] = 'top';
var u638 = document.getElementById('u638');

u638.style.cursor = 'pointer';
if (bIE) u638.attachEvent("onclick", Clicku638);
else u638.addEventListener("click", Clicku638, true);
function Clicku638(e)
{

if (true) {

	SetPanelStateu3("pd0u3");

	BringToFront("u0");

	SetPanelVisibilityu0("");

}

}

var u639 = document.getElementById('u639');
gv_vAlignTable['u639'] = 'center';
var u280 = document.getElementById('u280');
gv_vAlignTable['u280'] = 'center';
var u281 = document.getElementById('u281');

u281.style.cursor = 'pointer';
if (bIE) u281.attachEvent("onclick", Clicku281);
else u281.addEventListener("click", Clicku281, true);
function Clicku281(e)
{

if (true) {

	SetPanelVisibilityu3("hidden");

	SetPanelVisibilityu555("");

	BringToFront("u555");

}

}

var u282 = document.getElementById('u282');
gv_vAlignTable['u282'] = 'center';
var u283 = document.getElementById('u283');

var u284 = document.getElementById('u284');
gv_vAlignTable['u284'] = 'top';
var u285 = document.getElementById('u285');

u285.style.cursor = 'pointer';
if (bIE) u285.attachEvent("onclick", Clicku285);
else u285.addEventListener("click", Clicku285, true);
function Clicku285(e)
{

if (true) {

	SetPanelVisibilityu274("");

	SetPanelStateu265("pd2u265");

	SetPanelStateu435("pd1u435");

	SetPanelStateu420("pd1u420");

	MoveWidgetTo('u420',1,32);

	SetPanelVisibilityu376("hidden");

	SetPanelVisibilityu391("hidden");

	SetPanelVisibilityu398("hidden");

	SetPanelVisibilityu412("hidden");

SetWidgetRichText('u419', PopulateVariables('<span style=" font-family:\'Calibri\'; color:#363636; font-size:13px;">Selected size:</span>'));

	BringToFront("u274");

}

}

var u286 = document.getElementById('u286');

var u287 = document.getElementById('u287');

var u288 = document.getElementById('u288');
gv_vAlignTable['u288'] = 'center';
var u289 = document.getElementById('u289');
gv_vAlignTable['u289'] = 'top';
var u641 = document.getElementById('u641');
gv_vAlignTable['u641'] = 'center';
var u642 = document.getElementById('u642');
gv_vAlignTable['u642'] = 'top';
var u643 = document.getElementById('u643');

var u644 = document.getElementById('u644');
gv_vAlignTable['u644'] = 'center';
var u645 = document.getElementById('u645');
gv_vAlignTable['u645'] = 'top';
var u646 = document.getElementById('u646');
gv_vAlignTable['u646'] = 'top';
var u647 = document.getElementById('u647');
gv_vAlignTable['u647'] = 'top';
var u648 = document.getElementById('u648');

u648.style.cursor = 'pointer';
if (bIE) u648.attachEvent("onclick", Clicku648);
else u648.addEventListener("click", Clicku648, true);
function Clicku648(e)
{

if (true) {

	SetPanelStateu3("pd1u3");

	BringToFront("u0");

	SetPanelVisibilityu0("");

}

}

var u490 = document.getElementById('u490');
gv_vAlignTable['u490'] = 'center';
var u491 = document.getElementById('u491');

u491.style.cursor = 'pointer';
if (bIE) u491.attachEvent("onclick", Clicku491);
else u491.addEventListener("click", Clicku491, true);
function Clicku491(e)
{

if (true) {

	SetPanelVisibilityu0("hidden");

	SetPanelVisibilityu555("");

	BringToFront("u555");

}

}
gv_vAlignTable['u491'] = 'top';
var u492 = document.getElementById('u492');

var u493 = document.getElementById('u493');
gv_vAlignTable['u493'] = 'center';
var u494 = document.getElementById('u494');

u494.style.cursor = 'pointer';
if (bIE) u494.attachEvent("onclick", Clicku494);
else u494.addEventListener("click", Clicku494, true);
function Clicku494(e)
{

if (true) {

	SetPanelVisibilityu0("hidden");

	SetPanelVisibilityu555("");

	BringToFront("u555");

}

}
gv_vAlignTable['u494'] = 'top';
var u495 = document.getElementById('u495');
gv_vAlignTable['u495'] = 'top';
var u496 = document.getElementById('u496');

var u100 = document.getElementById('u100');

var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'top';
var u102 = document.getElementById('u102');

var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'top';
var u104 = document.getElementById('u104');

var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'top';
var u106 = document.getElementById('u106');

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u108 = document.getElementById('u108');

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'top';
var u297 = document.getElementById('u297');
gv_vAlignTable['u297'] = 'top';
var u298 = document.getElementById('u298');
gv_vAlignTable['u298'] = 'top';
var u299 = document.getElementById('u299');

var u651 = document.getElementById('u651');

var u652 = document.getElementById('u652');
gv_vAlignTable['u652'] = 'center';
var u653 = document.getElementById('u653');

var u654 = document.getElementById('u654');
gv_vAlignTable['u654'] = 'center';
var u655 = document.getElementById('u655');
gv_vAlignTable['u655'] = 'top';
var u500 = document.getElementById('u500');
gv_vAlignTable['u500'] = 'center';
var u392 = document.getElementById('u392');

if (bIE) u392.attachEvent("onmouseover", MouseOveru392);
else u392.addEventListener("mouseover", MouseOveru392, true);
function MouseOveru392(e)
{
if (!IsTrueMouseOver('u392',e)) return;
if (true) {

	SetPanelStateu391("pd2u391");

	SetPanelStateu435("pd2u435");

}

}

var u658 = document.getElementById('u658');
gv_vAlignTable['u658'] = 'top';
var u659 = document.getElementById('u659');
gv_vAlignTable['u659'] = 'top';
var u823 = document.getElementById('u823');
gv_vAlignTable['u823'] = 'top';
var u9 = document.getElementById('u9');

var u110 = document.getElementById('u110');

var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'top';
var u112 = document.getElementById('u112');

var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'top';
var u114 = document.getElementById('u114');

var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'top';
var u116 = document.getElementById('u116');

var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'top';
var u118 = document.getElementById('u118');

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'top';
var u660 = document.getElementById('u660');
gv_vAlignTable['u660'] = 'top';
var u661 = document.getElementById('u661');
gv_vAlignTable['u661'] = 'top';
var u662 = document.getElementById('u662');

var u663 = document.getElementById('u663');

var u664 = document.getElementById('u664');
gv_vAlignTable['u664'] = 'center';
var u665 = document.getElementById('u665');
gv_vAlignTable['u665'] = 'top';
var u510 = document.getElementById('u510');
gv_vAlignTable['u510'] = 'center';
var u667 = document.getElementById('u667');
gv_vAlignTable['u667'] = 'top';
var u668 = document.getElementById('u668');

var u669 = document.getElementById('u669');
gv_vAlignTable['u669'] = 'center';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u33 = document.getElementById('u33');

var u34 = document.getElementById('u34');

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u120 = document.getElementById('u120');

var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'top';
var u122 = document.getElementById('u122');

var u123 = document.getElementById('u123');

var u124 = document.getElementById('u124');

var u125 = document.getElementById('u125');

var u126 = document.getElementById('u126');

var u127 = document.getElementById('u127');

var u128 = document.getElementById('u128');

var u129 = document.getElementById('u129');

var u670 = document.getElementById('u670');
gv_vAlignTable['u670'] = 'top';
var u671 = document.getElementById('u671');
gv_vAlignTable['u671'] = 'top';
var u672 = document.getElementById('u672');
gv_vAlignTable['u672'] = 'top';
var u673 = document.getElementById('u673');

var u674 = document.getElementById('u674');
gv_vAlignTable['u674'] = 'center';
var u675 = document.getElementById('u675');

var u676 = document.getElementById('u676');
gv_vAlignTable['u676'] = 'center';
var u677 = document.getElementById('u677');

var u678 = document.getElementById('u678');
gv_vAlignTable['u678'] = 'center';
var u679 = document.getElementById('u679');

var u130 = document.getElementById('u130');

var u131 = document.getElementById('u131');

var u132 = document.getElementById('u132');

var u133 = document.getElementById('u133');

var u134 = document.getElementById('u134');

var u135 = document.getElementById('u135');

var u136 = document.getElementById('u136');

var u137 = document.getElementById('u137');

var u138 = document.getElementById('u138');

var u139 = document.getElementById('u139');

var u680 = document.getElementById('u680');
gv_vAlignTable['u680'] = 'center';
var u681 = document.getElementById('u681');

var u682 = document.getElementById('u682');
gv_vAlignTable['u682'] = 'center';
var u683 = document.getElementById('u683');

var u684 = document.getElementById('u684');
gv_vAlignTable['u684'] = 'center';
var u685 = document.getElementById('u685');

var u686 = document.getElementById('u686');
gv_vAlignTable['u686'] = 'center';
var u687 = document.getElementById('u687');

var u688 = document.getElementById('u688');
gv_vAlignTable['u688'] = 'center';
var u689 = document.getElementById('u689');

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

var u501 = document.getElementById('u501');

var u502 = document.getElementById('u502');
gv_vAlignTable['u502'] = 'center';
var u503 = document.getElementById('u503');

u503.style.cursor = 'pointer';
if (bIE) u503.attachEvent("onclick", Clicku503);
else u503.addEventListener("click", Clicku503, true);
function Clicku503(e)
{

if (true) {

	SetPanelVisibilityu0("hidden");

	SetPanelVisibilityu555("");

	BringToFront("u555");

}

}
gv_vAlignTable['u503'] = 'top';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'top';
var u12 = document.getElementById('u12');

u12.style.cursor = 'pointer';
if (bIE) u12.attachEvent("onclick", Clicku12);
else u12.addEventListener("click", Clicku12, true);
function Clicku12(e)
{

if (true) {

	SetPanelVisibilityu0("hidden");

	SetPanelVisibilityu555("");

	BringToFront("u555");

}

}
gv_vAlignTable['u12'] = 'top';
var u13 = document.getElementById('u13');

var u14 = document.getElementById('u14');

var u15 = document.getElementById('u15');

u15.style.cursor = 'pointer';
if (bIE) u15.attachEvent("onclick", Clicku15);
else u15.addEventListener("click", Clicku15, true);
function Clicku15(e)
{

if (true) {

	BringToFront("u555");

	SetPanelVisibilityu0("hidden");

	SetPanelVisibilityu555("");

	SetPanelStateu618("pd3u618");

	MoveWidgetTo('u731',11,300);

}

}

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u17 = document.getElementById('u17');

u17.style.cursor = 'pointer';
if (bIE) u17.attachEvent("onclick", Clicku17);
else u17.addEventListener("click", Clicku17, true);
function Clicku17(e)
{

if (true) {

	SetPanelVisibilityu3("hidden");

	SetPanelVisibilityu555("");

	BringToFront("u555");

}

}

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u19 = document.getElementById('u19');

var u150 = document.getElementById('u150');

var u151 = document.getElementById('u151');

var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'top';
var u153 = document.getElementById('u153');

if (bIE) u153.attachEvent("onmouseover", MouseOveru153);
else u153.addEventListener("mouseover", MouseOveru153, true);
function MouseOveru153(e)
{
if (!IsTrueMouseOver('u153',e)) return;
if (true) {
function waitu9c9d833e655e4fc49ee013f866f6b15e1() {

	SetPanelVisibilityu155("");
}
setTimeout(waitu9c9d833e655e4fc49ee013f866f6b15e1, 1000);

}

}

if (bIE) u153.attachEvent("onmouseout", MouseOutu153);
else u153.addEventListener("mouseout", MouseOutu153, true);
function MouseOutu153(e)
{
if (!IsTrueMouseOut('u153',e)) return;
if (true) {

	SetPanelVisibilityu155("hidden");

}

}

var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'center';
var u155 = document.getElementById('u155');

var u156 = document.getElementById('u156');

var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'top';
var u158 = document.getElementById('u158');

if (bIE) u158.attachEvent("onmouseover", MouseOveru158);
else u158.addEventListener("mouseover", MouseOveru158, true);
function MouseOveru158(e)
{
if (!IsTrueMouseOver('u158',e)) return;
if (true) {
function waitu9c9d833e655e4fc49ee013f866f6b15e1() {

	SetPanelVisibilityu160("");
}
setTimeout(waitu9c9d833e655e4fc49ee013f866f6b15e1, 1000);

}

}

if (bIE) u158.attachEvent("onmouseout", MouseOutu158);
else u158.addEventListener("mouseout", MouseOutu158, true);
function MouseOutu158(e)
{
if (!IsTrueMouseOut('u158',e)) return;
if (true) {

	SetPanelVisibilityu160("hidden");

}

}

var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'center';
var u511 = document.getElementById('u511');

var u512 = document.getElementById('u512');
gv_vAlignTable['u512'] = 'center';
var u513 = document.getElementById('u513');

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u21 = document.getElementById('u21');

var u22 = document.getElementById('u22');

var u23 = document.getElementById('u23');

u23.style.cursor = 'pointer';
if (bIE) u23.attachEvent("onclick", Clicku23);
else u23.addEventListener("click", Clicku23, true);
function Clicku23(e)
{

if (true) {

	SetPanelStateu14("pd2u14");

	SetPanelStateu4("pd1u4");

	MoveWidgetTo('u14',5,15);

	SetPanelVisibilityu217("hidden");

}

}

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u25 = document.getElementById('u25');

u25.style.cursor = 'pointer';
if (bIE) u25.attachEvent("onclick", Clicku25);
else u25.addEventListener("click", Clicku25, true);
function Clicku25(e)
{

if (true) {

	SetPanelVisibilityu3("hidden");

	SetPanelVisibilityu555("");

	BringToFront("u555");

}

}

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u27 = document.getElementById('u27');

var u28 = document.getElementById('u28');

u28.style.cursor = 'pointer';
if (bIE) u28.attachEvent("onclick", Clicku28);
else u28.addEventListener("click", Clicku28, true);
function Clicku28(e)
{

if (true) {

	BringToFront("u555");

	SetPanelVisibilityu0("hidden");

	SetPanelVisibilityu555("");

	SetPanelStateu618("pd3u618");

	MoveWidgetTo('u731',11,300);

}

}

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u160 = document.getElementById('u160');

var u161 = document.getElementById('u161');

var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'top';
var u163 = document.getElementById('u163');

if (bIE) u163.attachEvent("onmouseover", MouseOveru163);
else u163.addEventListener("mouseover", MouseOveru163, true);
function MouseOveru163(e)
{
if (!IsTrueMouseOver('u163',e)) return;
if (true) {
function waitu9c9d833e655e4fc49ee013f866f6b15e1() {

	SetPanelVisibilityu165("");
}
setTimeout(waitu9c9d833e655e4fc49ee013f866f6b15e1, 1000);

}

}

if (bIE) u163.attachEvent("onmouseout", MouseOutu163);
else u163.addEventListener("mouseout", MouseOutu163, true);
function MouseOutu163(e)
{
if (!IsTrueMouseOut('u163',e)) return;
if (true) {

	SetPanelVisibilityu165("hidden");

}

}

var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'center';
var u165 = document.getElementById('u165');

var u166 = document.getElementById('u166');

var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'top';
var u168 = document.getElementById('u168');

if (bIE) u168.attachEvent("onmouseover", MouseOveru168);
else u168.addEventListener("mouseover", MouseOveru168, true);
function MouseOveru168(e)
{
if (!IsTrueMouseOver('u168',e)) return;
if (true) {
function waitu9c9d833e655e4fc49ee013f866f6b15e1() {

	SetPanelVisibilityu170("");
}
setTimeout(waitu9c9d833e655e4fc49ee013f866f6b15e1, 1000);

}

}

if (bIE) u168.attachEvent("onmouseout", MouseOutu168);
else u168.addEventListener("mouseout", MouseOutu168, true);
function MouseOutu168(e)
{
if (!IsTrueMouseOut('u168',e)) return;
if (true) {

	SetPanelVisibilityu170("hidden");

}

}

var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'center';
var u521 = document.getElementById('u521');

var u522 = document.getElementById('u522');
gv_vAlignTable['u522'] = 'center';
var u203 = document.getElementById('u203');

var u30 = document.getElementById('u30');

u30.style.cursor = 'pointer';
if (bIE) u30.attachEvent("onclick", Clicku30);
else u30.addEventListener("click", Clicku30, true);
function Clicku30(e)
{

if (true) {

	SetPanelVisibilityu3("hidden");

	SetPanelVisibilityu555("");

	BringToFront("u555");

}

}

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u206 = document.getElementById('u206');

var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'top';
var u208 = document.getElementById('u208');

var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'top';
var u36 = document.getElementById('u36');

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u38 = document.getElementById('u38');

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u703 = document.getElementById('u703');

var u709 = document.getElementById('u709');
gv_vAlignTable['u709'] = 'center';
var u705 = document.getElementById('u705');
gv_vAlignTable['u705'] = 'top';
var u708 = document.getElementById('u708');

var u170 = document.getElementById('u170');

var u171 = document.getElementById('u171');

var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'top';
var u173 = document.getElementById('u173');

if (bIE) u173.attachEvent("onmouseover", MouseOveru173);
else u173.addEventListener("mouseover", MouseOveru173, true);
function MouseOveru173(e)
{
if (!IsTrueMouseOver('u173',e)) return;
if (true) {
function waitu9c9d833e655e4fc49ee013f866f6b15e1() {

	SetPanelVisibilityu175("");
}
setTimeout(waitu9c9d833e655e4fc49ee013f866f6b15e1, 1000);

}

}

if (bIE) u173.attachEvent("onmouseout", MouseOutu173);
else u173.addEventListener("mouseout", MouseOutu173, true);
function MouseOutu173(e)
{
if (!IsTrueMouseOut('u173',e)) return;
if (true) {

	SetPanelVisibilityu175("hidden");

}

}

var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'center';
var u175 = document.getElementById('u175');

var u176 = document.getElementById('u176');

var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'top';
var u178 = document.getElementById('u178');

if (bIE) u178.attachEvent("onmouseover", MouseOveru178);
else u178.addEventListener("mouseover", MouseOveru178, true);
function MouseOveru178(e)
{
if (!IsTrueMouseOver('u178',e)) return;
if (true) {
function waitu9c9d833e655e4fc49ee013f866f6b15e1() {

	SetPanelVisibilityu180("");
}
setTimeout(waitu9c9d833e655e4fc49ee013f866f6b15e1, 1000);

}

}

if (bIE) u178.attachEvent("onmouseout", MouseOutu178);
else u178.addEventListener("mouseout", MouseOutu178, true);
function MouseOutu178(e)
{
if (!IsTrueMouseOut('u178',e)) return;
if (true) {

	SetPanelVisibilityu180("hidden");

}

}

var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'center';
var u531 = document.getElementById('u531');
gv_vAlignTable['u531'] = 'center';
var u532 = document.getElementById('u532');
gv_vAlignTable['u532'] = 'top';
var u533 = document.getElementById('u533');
gv_vAlignTable['u533'] = 'top';
var u40 = document.getElementById('u40');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u42 = document.getElementById('u42');

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u44 = document.getElementById('u44');

var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u46 = document.getElementById('u46');

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u48 = document.getElementById('u48');

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u717 = document.getElementById('u717');

var u718 = document.getElementById('u718');

u718.style.cursor = 'pointer';
if (bIE) u718.attachEvent("onclick", Clicku718);
else u718.addEventListener("click", Clicku718, true);
function Clicku718(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Show thanks message"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u714 = document.getElementById('u714');
gv_vAlignTable['u714'] = 'top';
var u180 = document.getElementById('u180');

var u181 = document.getElementById('u181');

var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'top';
var u183 = document.getElementById('u183');

if (bIE) u183.attachEvent("onmouseover", MouseOveru183);
else u183.addEventListener("mouseover", MouseOveru183, true);
function MouseOveru183(e)
{
if (!IsTrueMouseOver('u183',e)) return;
if (true) {
function waitu9c9d833e655e4fc49ee013f866f6b15e1() {

	SetPanelVisibilityu185("");
}
setTimeout(waitu9c9d833e655e4fc49ee013f866f6b15e1, 1000);

}

}

if (bIE) u183.attachEvent("onmouseout", MouseOutu183);
else u183.addEventListener("mouseout", MouseOutu183, true);
function MouseOutu183(e)
{
if (!IsTrueMouseOut('u183',e)) return;
if (true) {

	SetPanelVisibilityu185("hidden");

}

}

var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'center';
var u185 = document.getElementById('u185');

var u186 = document.getElementById('u186');

var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'top';
var u188 = document.getElementById('u188');

if (bIE) u188.attachEvent("onmouseover", MouseOveru188);
else u188.addEventListener("mouseover", MouseOveru188, true);
function MouseOveru188(e)
{
if (!IsTrueMouseOver('u188',e)) return;
if (true) {
function waitu9c9d833e655e4fc49ee013f866f6b15e1() {

	SetPanelVisibilityu190("");
}
setTimeout(waitu9c9d833e655e4fc49ee013f866f6b15e1, 1000);

}

}

if (bIE) u188.attachEvent("onmouseout", MouseOutu188);
else u188.addEventListener("mouseout", MouseOutu188, true);
function MouseOutu188(e)
{
if (!IsTrueMouseOut('u188',e)) return;
if (true) {

	SetPanelVisibilityu190("hidden");

}

}

var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'center';
var u541 = document.getElementById('u541');
gv_vAlignTable['u541'] = 'top';
var u542 = document.getElementById('u542');
gv_vAlignTable['u542'] = 'top';
var u543 = document.getElementById('u543');
gv_vAlignTable['u543'] = 'top';
var u50 = document.getElementById('u50');

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u52 = document.getElementById('u52');

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u54 = document.getElementById('u54');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u56 = document.getElementById('u56');

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u58 = document.getElementById('u58');

var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u720 = document.getElementById('u720');

u720.style.cursor = 'pointer';
if (bIE) u720.attachEvent("onclick", Clicku720);
else u720.addEventListener("click", Clicku720, true);
function Clicku720(e)
{

if (true) {

	SetPanelVisibilityu0("");

	BringToFront("u0");

	SetPanelStateu3("pd1u3");

	SetPanelStateu420("pd0u420");

	SetPanelStateu435("pd1u435");

	SetPanelStateu431("pd1u431");

	SetPanelStateu405("pd1u405");

	SetPanelVisibilityu391("hidden");

	SetPanelVisibilityu398("hidden");

	SetPanelVisibilityu412("hidden");

}

}

var u190 = document.getElementById('u190');

var u191 = document.getElementById('u191');

var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'top';
var u193 = document.getElementById('u193');

if (bIE) u193.attachEvent("onmouseover", MouseOveru193);
else u193.addEventListener("mouseover", MouseOveru193, true);
function MouseOveru193(e)
{
if (!IsTrueMouseOver('u193',e)) return;
if (true) {
function waitu9c9d833e655e4fc49ee013f866f6b15e1() {

	SetPanelVisibilityu195("");
}
setTimeout(waitu9c9d833e655e4fc49ee013f866f6b15e1, 1000);

}

}

if (bIE) u193.attachEvent("onmouseout", MouseOutu193);
else u193.addEventListener("mouseout", MouseOutu193, true);
function MouseOutu193(e)
{
if (!IsTrueMouseOut('u193',e)) return;
if (true) {

	SetPanelVisibilityu195("hidden");

}

}

var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'center';
var u195 = document.getElementById('u195');

var u196 = document.getElementById('u196');

var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'top';
var u198 = document.getElementById('u198');

if (bIE) u198.attachEvent("onmouseover", MouseOveru198);
else u198.addEventListener("mouseover", MouseOveru198, true);
function MouseOveru198(e)
{
if (!IsTrueMouseOver('u198',e)) return;
if (true) {
function waitu9c9d833e655e4fc49ee013f866f6b15e1() {

	SetPanelVisibilityu200("");
}
setTimeout(waitu9c9d833e655e4fc49ee013f866f6b15e1, 1000);

}

}

if (bIE) u198.attachEvent("onmouseout", MouseOutu198);
else u198.addEventListener("mouseout", MouseOutu198, true);
function MouseOutu198(e)
{
if (!IsTrueMouseOut('u198',e)) return;
if (true) {

	SetPanelVisibilityu200("hidden");

}

}

var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'center';
var u551 = document.getElementById('u551');

var u552 = document.getElementById('u552');
gv_vAlignTable['u552'] = 'center';
var u553 = document.getElementById('u553');

u553.style.cursor = 'pointer';
if (bIE) u553.attachEvent("onclick", Clicku553);
else u553.addEventListener("click", Clicku553, true);
function Clicku553(e)
{

if (true) {

	SetPanelStateu3("pd2u3");

}

}

var u60 = document.getElementById('u60');

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u62 = document.getElementById('u62');

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u64 = document.getElementById('u64');

var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u66 = document.getElementById('u66');

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'top';
var u68 = document.getElementById('u68');

var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u739 = document.getElementById('u739');

var u560 = document.getElementById('u560');
gv_vAlignTable['u560'] = 'top';
var u561 = document.getElementById('u561');

var u562 = document.getElementById('u562');
gv_vAlignTable['u562'] = 'top';
var u563 = document.getElementById('u563');
gv_vAlignTable['u563'] = 'top';
var u70 = document.getElementById('u70');

var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'top';
var u72 = document.getElementById('u72');

var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'top';
var u74 = document.getElementById('u74');

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'top';
var u76 = document.getElementById('u76');

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'top';
var u78 = document.getElementById('u78');

var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
var u740 = document.getElementById('u740');
gv_vAlignTable['u740'] = 'top';
var u570 = document.getElementById('u570');

var u571 = document.getElementById('u571');

var u572 = document.getElementById('u572');
gv_vAlignTable['u572'] = 'center';
var u573 = document.getElementById('u573');
gv_vAlignTable['u573'] = 'top';
var u80 = document.getElementById('u80');

var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'top';
var u82 = document.getElementById('u82');

var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'top';
var u84 = document.getElementById('u84');

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'top';
var u86 = document.getElementById('u86');

var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'top';
var u88 = document.getElementById('u88');

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u758 = document.getElementById('u758');

var u759 = document.getElementById('u759');
gv_vAlignTable['u759'] = 'top';
var u750 = document.getElementById('u750');

var u580 = document.getElementById('u580');
gv_vAlignTable['u580'] = 'center';
var u581 = document.getElementById('u581');
gv_vAlignTable['u581'] = 'top';
var u582 = document.getElementById('u582');

var u583 = document.getElementById('u583');
gv_vAlignTable['u583'] = 'top';
var u90 = document.getElementById('u90');

var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u92 = document.getElementById('u92');

var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'top';
var u94 = document.getElementById('u94');

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'top';
var u96 = document.getElementById('u96');

var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'top';
var u98 = document.getElementById('u98');

var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'top';
var u400 = document.getElementById('u400');
gv_vAlignTable['u400'] = 'center';
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

	SetPanelStateu398("pd1u398");

	SetPanelStateu265("pd1u265");

	SetPanelStateu391("pd0u391");

	SetPanelStateu405("pd0u405");

	SetPanelStateu412("pd0u412");

	SetPanelStateu435("pd3u435");

	SetPanelVisibilityu376("");

	MoveWidgetTo('u420',10,165);

}

}

if (bIE) u403.attachEvent("onmouseout", MouseOutu403);
else u403.addEventListener("mouseout", MouseOutu403, true);
function MouseOutu403(e)
{
if (!IsTrueMouseOut('u403',e)) return;
if (true) {

	SetPanelStateu435("pd0u435");

	SetPanelStateu398("pd0u398");

}

}

var u404 = document.getElementById('u404');
gv_vAlignTable['u404'] = 'center';
var u405 = document.getElementById('u405');

var u406 = document.getElementById('u406');

if (bIE) u406.attachEvent("onmouseover", MouseOveru406);
else u406.addEventListener("mouseover", MouseOveru406, true);
function MouseOveru406(e)
{
if (!IsTrueMouseOver('u406',e)) return;
if (true) {

	SetPanelStateu405("pd2u405");

	SetPanelStateu435("pd4u435");

}

}

var u407 = document.getElementById('u407');
gv_vAlignTable['u407'] = 'center';
var u408 = document.getElementById('u408');

var u409 = document.getElementById('u409');
gv_vAlignTable['u409'] = 'center';
var u597 = document.getElementById('u597');

var u598 = document.getElementById('u598');

var u599 = document.getElementById('u599');

u599.style.cursor = 'pointer';
if (bIE) u599.attachEvent("onclick", Clicku599);
else u599.addEventListener("click", Clicku599, true);
function Clicku599(e)
{

if (true) {

	SetPanelStateu591("pd0u591");

}

}

var u774 = document.getElementById('u774');
gv_vAlignTable['u774'] = 'top';
var u410 = document.getElementById('u410');

u410.style.cursor = 'pointer';
if (bIE) u410.attachEvent("onclick", Clicku410);
else u410.addEventListener("click", Clicku410, true);
function Clicku410(e)
{

if (true) {

	SetPanelStateu405("pd1u405");

	SetPanelStateu265("pd1u265");

	SetPanelStateu391("pd0u391");

	SetPanelStateu412("pd0u412");

	SetPanelStateu398("pd0u398");

	SetPanelStateu435("pd4u435");

	SetPanelStateu420("pd0u420");

	SetPanelVisibilityu376("");

	MoveWidgetTo('u420',10,165);

}

}

if (bIE) u410.attachEvent("onmouseout", MouseOutu410);
else u410.addEventListener("mouseout", MouseOutu410, true);
function MouseOutu410(e)
{
if (!IsTrueMouseOut('u410',e)) return;
if (true) {

	SetPanelStateu435("pd0u435");

	SetPanelStateu405("pd0u405");

}

}

var u411 = document.getElementById('u411');
gv_vAlignTable['u411'] = 'center';
var u412 = document.getElementById('u412');

var u413 = document.getElementById('u413');

if (bIE) u413.attachEvent("onmouseover", MouseOveru413);
else u413.addEventListener("mouseover", MouseOveru413, true);
function MouseOveru413(e)
{
if (!IsTrueMouseOver('u413',e)) return;
if (true) {

	SetPanelStateu412("pd2u412");

	SetPanelStateu435("pd5u435");

}

}

var u414 = document.getElementById('u414');
gv_vAlignTable['u414'] = 'center';
var u415 = document.getElementById('u415');

var u416 = document.getElementById('u416');
gv_vAlignTable['u416'] = 'center';
var u417 = document.getElementById('u417');

u417.style.cursor = 'pointer';
if (bIE) u417.attachEvent("onclick", Clicku417);
else u417.addEventListener("click", Clicku417, true);
function Clicku417(e)
{

if (true) {

	SetPanelStateu412("pd1u412");

	SetPanelStateu265("pd1u265");

	SetPanelStateu391("pd0u391");

	SetPanelStateu398("pd0u398");

	SetPanelStateu405("pd0u405");

	SetPanelStateu435("pd5u435");

	SetPanelVisibilityu376("");

	MoveWidgetTo('u420',10,165);

}

}

if (bIE) u417.attachEvent("onmouseout", MouseOutu417);
else u417.addEventListener("mouseout", MouseOutu417, true);
function MouseOutu417(e)
{
if (!IsTrueMouseOut('u417',e)) return;
if (true) {

	SetPanelStateu435("pd0u435");

	SetPanelStateu412("pd0u412");

}

}

var u418 = document.getElementById('u418');
gv_vAlignTable['u418'] = 'center';
var u419 = document.getElementById('u419');
gv_vAlignTable['u419'] = 'top';
var u620 = document.getElementById('u620');
gv_vAlignTable['u620'] = 'center';
var u786 = document.getElementById('u786');
gv_vAlignTable['u786'] = 'top';
var u420 = document.getElementById('u420');

var u421 = document.getElementById('u421');
gv_vAlignTable['u421'] = 'top';
var u422 = document.getElementById('u422');

var u423 = document.getElementById('u423');
gv_vAlignTable['u423'] = 'center';
var u424 = document.getElementById('u424');

u424.style.cursor = 'pointer';
if (bIE) u424.attachEvent("onclick", Clicku424);
else u424.addEventListener("click", Clicku424, true);
function Clicku424(e)
{

if (true) {

	BringToFront("u555");

	SetPanelVisibilityu0("hidden");

	SetPanelVisibilityu555("");

	SetPanelStateu618("pd3u618");

	SetPanelStateu435("pd1u435");

	MoveWidgetTo('u731',11,300);

}

}

var u425 = document.getElementById('u425');
gv_vAlignTable['u425'] = 'center';
var u426 = document.getElementById('u426');

u426.style.cursor = 'pointer';
if (bIE) u426.attachEvent("onclick", Clicku426);
else u426.addEventListener("click", Clicku426, true);
function Clicku426(e)
{

if (true) {

	SetPanelVisibilityu3("hidden");

	SetPanelVisibilityu555("");

	BringToFront("u555");

}

}

var u427 = document.getElementById('u427');
gv_vAlignTable['u427'] = 'center';
var u428 = document.getElementById('u428');

var u429 = document.getElementById('u429');
gv_vAlignTable['u429'] = 'top';
var u290 = document.getElementById('u290');

u290.style.cursor = 'pointer';
if (bIE) u290.attachEvent("onclick", Clicku290);
else u290.addEventListener("click", Clicku290, true);
function Clicku290(e)
{

if (true) {

	SetPanelVisibilityu375("");

	SetPanelVisibilityu274("hidden");

	SetPanelVisibilityu431("hidden");

	SetPanelStateu420("pd0u420");

	BringToFront("u375");

}

}

var u291 = document.getElementById('u291');

var u292 = document.getElementById('u292');

var u293 = document.getElementById('u293');
gv_vAlignTable['u293'] = 'center';
var u294 = document.getElementById('u294');
gv_vAlignTable['u294'] = 'top';
var u295 = document.getElementById('u295');

var u296 = document.getElementById('u296');
gv_vAlignTable['u296'] = 'center';
var u790 = document.getElementById('u790');
gv_vAlignTable['u790'] = 'top';
var u791 = document.getElementById('u791');

var u792 = document.getElementById('u792');
gv_vAlignTable['u792'] = 'top';
var u793 = document.getElementById('u793');
gv_vAlignTable['u793'] = 'top';
var u794 = document.getElementById('u794');
gv_vAlignTable['u794'] = 'top';
var u795 = document.getElementById('u795');
gv_vAlignTable['u795'] = 'top';
var u796 = document.getElementById('u796');
gv_vAlignTable['u796'] = 'top';
var u430 = document.getElementById('u430');

u430.style.cursor = 'pointer';
if (bIE) u430.attachEvent("onclick", Clicku430);
else u430.addEventListener("click", Clicku430, true);
function Clicku430(e)
{

if (true) {

	SetPanelVisibilityu274("");

	SetPanelStateu265("pd2u265");

	SetPanelStateu435("pd1u435");

	SetPanelStateu420("pd1u420");

	MoveWidgetTo('u420',1,32);

	SetPanelVisibilityu376("hidden");

	SetPanelVisibilityu391("hidden");

	SetPanelVisibilityu398("hidden");

	SetPanelVisibilityu412("hidden");

SetWidgetRichText('u419', PopulateVariables('<span style=" font-family:\'Calibri\'; color:#363636; font-size:13px;">Selected size:</span>'));

	BringToFront("u274");

}

}

var u431 = document.getElementById('u431');

var u432 = document.getElementById('u432');

var u433 = document.getElementById('u433');
gv_vAlignTable['u433'] = 'top';
var u434 = document.getElementById('u434');
gv_vAlignTable['u434'] = 'top';
var u435 = document.getElementById('u435');

var u436 = document.getElementById('u436');
gv_vAlignTable['u436'] = 'top';
var u437 = document.getElementById('u437');

u437.style.cursor = 'pointer';
if (bIE) u437.attachEvent("onclick", Clicku437);
else u437.addEventListener("click", Clicku437, true);
function Clicku437(e)
{

if (true) {

	SetPanelVisibilityu274("hidden");

	BringToFront("u375");

	SetPanelStateu375("pd0u375");

	SetPanelStateu435("pd0u435");

	SetPanelStateu420("pd0u420");

	SetPanelStateu431("pd0u431");

	MoveWidgetTo('u420',10,165);

	SetPanelVisibilityu376("");

}

}
gv_vAlignTable['u437'] = 'top';
var u438 = document.getElementById('u438');

var u439 = document.getElementById('u439');
gv_vAlignTable['u439'] = 'center';
var u440 = document.getElementById('u440');
gv_vAlignTable['u440'] = 'top';
var u441 = document.getElementById('u441');
gv_vAlignTable['u441'] = 'top';
var u442 = document.getElementById('u442');
gv_vAlignTable['u442'] = 'top';
var u443 = document.getElementById('u443');
gv_vAlignTable['u443'] = 'top';
var u444 = document.getElementById('u444');
gv_vAlignTable['u444'] = 'top';
var u445 = document.getElementById('u445');
gv_vAlignTable['u445'] = 'top';
var u446 = document.getElementById('u446');

var u447 = document.getElementById('u447');
gv_vAlignTable['u447'] = 'center';
var u448 = document.getElementById('u448');
gv_vAlignTable['u448'] = 'top';
var u449 = document.getElementById('u449');
gv_vAlignTable['u449'] = 'top';
var u630 = document.getElementById('u630');
gv_vAlignTable['u630'] = 'top';
var u802 = document.getElementById('u802');
gv_vAlignTable['u802'] = 'center';
var u803 = document.getElementById('u803');

var u804 = document.getElementById('u804');
gv_vAlignTable['u804'] = 'center';
var u805 = document.getElementById('u805');

var u806 = document.getElementById('u806');
gv_vAlignTable['u806'] = 'center';
var u807 = document.getElementById('u807');

var u808 = document.getElementById('u808');
gv_vAlignTable['u808'] = 'center';
var u809 = document.getElementById('u809');

var u450 = document.getElementById('u450');
gv_vAlignTable['u450'] = 'top';
var u451 = document.getElementById('u451');
gv_vAlignTable['u451'] = 'top';
var u452 = document.getElementById('u452');
gv_vAlignTable['u452'] = 'top';
var u453 = document.getElementById('u453');
gv_vAlignTable['u453'] = 'top';
var u454 = document.getElementById('u454');

var u455 = document.getElementById('u455');
gv_vAlignTable['u455'] = 'center';
var u456 = document.getElementById('u456');
gv_vAlignTable['u456'] = 'top';
var u457 = document.getElementById('u457');
gv_vAlignTable['u457'] = 'top';
var u458 = document.getElementById('u458');
gv_vAlignTable['u458'] = 'top';
var u459 = document.getElementById('u459');
gv_vAlignTable['u459'] = 'top';
var u811 = document.getElementById('u811');

var u640 = document.getElementById('u640');

var u813 = document.getElementById('u813');

u813.style.cursor = 'pointer';
if (bIE) u813.attachEvent("onclick", Clicku813);
else u813.addEventListener("click", Clicku813, true);
function Clicku813(e)
{

if (true) {

	SetPanelVisibilityu555("hidden");

	SetPanelVisibilityu0("");

	BringToFront("u0");

	SetPanelStateu3("pd5u3");

}

}

var u814 = document.getElementById('u814');

var u815 = document.getElementById('u815');
gv_vAlignTable['u815'] = 'center';
var u816 = document.getElementById('u816');
gv_vAlignTable['u816'] = 'top';
var u817 = document.getElementById('u817');
gv_vAlignTable['u817'] = 'top';
var u818 = document.getElementById('u818');
gv_vAlignTable['u818'] = 'top';
var u819 = document.getElementById('u819');
gv_vAlignTable['u819'] = 'top';
var u649 = document.getElementById('u649');
gv_vAlignTable['u649'] = 'center';
var u460 = document.getElementById('u460');
gv_vAlignTable['u460'] = 'top';
var u461 = document.getElementById('u461');
gv_vAlignTable['u461'] = 'top';
var u462 = document.getElementById('u462');

var u463 = document.getElementById('u463');
gv_vAlignTable['u463'] = 'center';
var u464 = document.getElementById('u464');
gv_vAlignTable['u464'] = 'top';
var u465 = document.getElementById('u465');
gv_vAlignTable['u465'] = 'top';
var u466 = document.getElementById('u466');
gv_vAlignTable['u466'] = 'top';
var u467 = document.getElementById('u467');
gv_vAlignTable['u467'] = 'top';
var u468 = document.getElementById('u468');
gv_vAlignTable['u468'] = 'top';
var u469 = document.getElementById('u469');
gv_vAlignTable['u469'] = 'top';
var u821 = document.getElementById('u821');
gv_vAlignTable['u821'] = 'center';
var u822 = document.getElementById('u822');
gv_vAlignTable['u822'] = 'top';
var u650 = document.getElementById('u650');

var u801 = document.getElementById('u801');

var u656 = document.getElementById('u656');

var u657 = document.getElementById('u657');
gv_vAlignTable['u657'] = 'center';
var u690 = document.getElementById('u690');
gv_vAlignTable['u690'] = 'center';
var u470 = document.getElementById('u470');

var u471 = document.getElementById('u471');
gv_vAlignTable['u471'] = 'center';
var u472 = document.getElementById('u472');
gv_vAlignTable['u472'] = 'top';
var u473 = document.getElementById('u473');
gv_vAlignTable['u473'] = 'top';
var u474 = document.getElementById('u474');

var u475 = document.getElementById('u475');
gv_vAlignTable['u475'] = 'top';
var u476 = document.getElementById('u476');

var u477 = document.getElementById('u477');

u477.style.cursor = 'pointer';
if (bIE) u477.attachEvent("onclick", Clicku477);
else u477.addEventListener("click", Clicku477, true);
function Clicku477(e)
{

if (true) {

	SetPanelStateu3("pd1u3");

}

}

var u478 = document.getElementById('u478');
gv_vAlignTable['u478'] = 'center';
var u479 = document.getElementById('u479');

var u810 = document.getElementById('u810');
gv_vAlignTable['u810'] = 'center';
var u812 = document.getElementById('u812');
gv_vAlignTable['u812'] = 'center';
var u666 = document.getElementById('u666');
gv_vAlignTable['u666'] = 'top';
var u480 = document.getElementById('u480');
gv_vAlignTable['u480'] = 'center';
var u481 = document.getElementById('u481');
gv_vAlignTable['u481'] = 'top';
var u482 = document.getElementById('u482');

u482.style.cursor = 'pointer';
if (bIE) u482.attachEvent("onclick", Clicku482);
else u482.addEventListener("click", Clicku482, true);
function Clicku482(e)
{

if (true) {

	SetPanelVisibilityu0("hidden");

	SetPanelVisibilityu555("");

	BringToFront("u555");

}

}
gv_vAlignTable['u482'] = 'top';
var u483 = document.getElementById('u483');

var u484 = document.getElementById('u484');
gv_vAlignTable['u484'] = 'center';
var u485 = document.getElementById('u485');

var u486 = document.getElementById('u486');
gv_vAlignTable['u486'] = 'center';
var u487 = document.getElementById('u487');

var u488 = document.getElementById('u488');
gv_vAlignTable['u488'] = 'center';
var u489 = document.getElementById('u489');

var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'center';
var u800 = document.getElementById('u800');
gv_vAlignTable['u800'] = 'center';
var u820 = document.getElementById('u820');

u820.style.cursor = 'pointer';
if (bIE) u820.attachEvent("onclick", Clicku820);
else u820.addEventListener("click", Clicku820, true);
function Clicku820(e)
{

if (true) {

	SetPanelVisibilityu0("");

	BringToFront("u0");

	SetPanelStateu3("pd3u3");

}

}

var u300 = document.getElementById('u300');
gv_vAlignTable['u300'] = 'top';
var u301 = document.getElementById('u301');

var u302 = document.getElementById('u302');
gv_vAlignTable['u302'] = 'top';
var u303 = document.getElementById('u303');
gv_vAlignTable['u303'] = 'top';
var u304 = document.getElementById('u304');
gv_vAlignTable['u304'] = 'top';
var u305 = document.getElementById('u305');
gv_vAlignTable['u305'] = 'top';
var u306 = document.getElementById('u306');

var u307 = document.getElementById('u307');
gv_vAlignTable['u307'] = 'top';
var u308 = document.getElementById('u308');
gv_vAlignTable['u308'] = 'top';
var u309 = document.getElementById('u309');

var u497 = document.getElementById('u497');
gv_vAlignTable['u497'] = 'center';
var u498 = document.getElementById('u498');
gv_vAlignTable['u498'] = 'top';
var u499 = document.getElementById('u499');

u499.style.cursor = 'pointer';
if (bIE) u499.attachEvent("onclick", Clicku499);
else u499.addEventListener("click", Clicku499, true);
function Clicku499(e)
{

if (true) {

	SetPanelStateu3("pd2u3");

}

}

var u504 = document.getElementById('u504');

var u505 = document.getElementById('u505');
gv_vAlignTable['u505'] = 'center';
var u506 = document.getElementById('u506');
gv_vAlignTable['u506'] = 'top';
var u507 = document.getElementById('u507');

var u508 = document.getElementById('u508');
gv_vAlignTable['u508'] = 'center';
var u509 = document.getElementById('u509');

var u310 = document.getElementById('u310');

var u311 = document.getElementById('u311');
gv_vAlignTable['u311'] = 'center';
var u312 = document.getElementById('u312');
gv_vAlignTable['u312'] = 'top';
var u313 = document.getElementById('u313');
gv_vAlignTable['u313'] = 'top';
var u314 = document.getElementById('u314');
gv_vAlignTable['u314'] = 'top';
var u315 = document.getElementById('u315');
gv_vAlignTable['u315'] = 'top';
var u316 = document.getElementById('u316');
gv_vAlignTable['u316'] = 'top';
var u317 = document.getElementById('u317');
gv_vAlignTable['u317'] = 'top';
var u318 = document.getElementById('u318');

var u319 = document.getElementById('u319');
gv_vAlignTable['u319'] = 'center';
var u514 = document.getElementById('u514');
gv_vAlignTable['u514'] = 'center';
var u515 = document.getElementById('u515');

var u516 = document.getElementById('u516');
gv_vAlignTable['u516'] = 'center';
var u517 = document.getElementById('u517');

var u518 = document.getElementById('u518');
gv_vAlignTable['u518'] = 'center';
var u519 = document.getElementById('u519');

var u691 = document.getElementById('u691');

var u692 = document.getElementById('u692');
gv_vAlignTable['u692'] = 'center';
var u693 = document.getElementById('u693');

var u694 = document.getElementById('u694');
gv_vAlignTable['u694'] = 'center';
var u695 = document.getElementById('u695');

var u696 = document.getElementById('u696');
gv_vAlignTable['u696'] = 'center';
var u697 = document.getElementById('u697');

var u698 = document.getElementById('u698');
gv_vAlignTable['u698'] = 'center';
var u699 = document.getElementById('u699');

var u320 = document.getElementById('u320');
gv_vAlignTable['u320'] = 'top';
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
gv_vAlignTable['u328'] = 'top';
var u329 = document.getElementById('u329');
gv_vAlignTable['u329'] = 'top';
var u520 = document.getElementById('u520');
gv_vAlignTable['u520'] = 'center';
var u523 = document.getElementById('u523');
gv_vAlignTable['u523'] = 'top';
var u524 = document.getElementById('u524');
gv_vAlignTable['u524'] = 'top';
var u525 = document.getElementById('u525');
gv_vAlignTable['u525'] = 'top';
var u526 = document.getElementById('u526');
gv_vAlignTable['u526'] = 'top';
var u527 = document.getElementById('u527');
gv_vAlignTable['u527'] = 'top';
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

var u335 = document.getElementById('u335');
gv_vAlignTable['u335'] = 'center';
var u336 = document.getElementById('u336');
gv_vAlignTable['u336'] = 'top';
var u337 = document.getElementById('u337');
gv_vAlignTable['u337'] = 'top';
var u338 = document.getElementById('u338');
gv_vAlignTable['u338'] = 'top';
var u339 = document.getElementById('u339');
gv_vAlignTable['u339'] = 'top';
var u530 = document.getElementById('u530');

var u534 = document.getElementById('u534');
gv_vAlignTable['u534'] = 'top';
var u535 = document.getElementById('u535');
gv_vAlignTable['u535'] = 'top';
var u536 = document.getElementById('u536');
gv_vAlignTable['u536'] = 'top';
var u537 = document.getElementById('u537');
gv_vAlignTable['u537'] = 'top';
var u538 = document.getElementById('u538');

var u539 = document.getElementById('u539');
gv_vAlignTable['u539'] = 'center';
var u340 = document.getElementById('u340');
gv_vAlignTable['u340'] = 'top';
var u341 = document.getElementById('u341');
gv_vAlignTable['u341'] = 'top';
var u342 = document.getElementById('u342');

var u343 = document.getElementById('u343');

if (bIE) u343.attachEvent("onmouseover", MouseOveru343);
else u343.addEventListener("mouseover", MouseOveru343, true);
function MouseOveru343(e)
{
if (!IsTrueMouseOver('u343',e)) return;
if (true) {

	SetPanelStateu342("pd2u342");

	SetPanelStateu309("pd4u309");

}

}

var u344 = document.getElementById('u344');
gv_vAlignTable['u344'] = 'center';
var u345 = document.getElementById('u345');

var u346 = document.getElementById('u346');
gv_vAlignTable['u346'] = 'center';
var u347 = document.getElementById('u347');

u347.style.cursor = 'pointer';
if (bIE) u347.attachEvent("onclick", Clicku347);
else u347.addEventListener("click", Clicku347, true);
function Clicku347(e)
{

if (true) {

	SetPanelStateu342("pd1u342");

	SetPanelStateu265("pd3u265");

	SetPanelStateu363("pd0u363");

	SetPanelStateu356("pd0u356");

	SetPanelStateu349("pd0u349");

	SetPanelStateu309("pd4u309");

	SetPanelVisibilityu291("");

	MoveWidgetTo('u275',2,162);

}

}

if (bIE) u347.attachEvent("onmouseout", MouseOutu347);
else u347.addEventListener("mouseout", MouseOutu347, true);
function MouseOutu347(e)
{
if (!IsTrueMouseOut('u347',e)) return;
if (true) {

	SetPanelStateu309("pd0u309");

	SetPanelStateu342("pd0u342");

}

}

var u348 = document.getElementById('u348');
gv_vAlignTable['u348'] = 'center';
var u349 = document.getElementById('u349');

var u701 = document.getElementById('u701');

var u702 = document.getElementById('u702');

u702.style.cursor = 'pointer';
if (bIE) u702.attachEvent("onclick", Clicku702);
else u702.addEventListener("click", Clicku702, true);
function Clicku702(e)
{

if (true) {

	SetPanelStateu650("pd0u650");

	SetPanelStateu662("pd2u662");

	MoveWidgetTo('u716',287,100);

	MoveWidgetTo('u731',11,311);

}

}

var u540 = document.getElementById('u540');
gv_vAlignTable['u540'] = 'top';
var u704 = document.getElementById('u704');
gv_vAlignTable['u704'] = 'center';
var u700 = document.getElementById('u700');

var u706 = document.getElementById('u706');
gv_vAlignTable['u706'] = 'top';
var u707 = document.getElementById('u707');
gv_vAlignTable['u707'] = 'top';
var u544 = document.getElementById('u544');
gv_vAlignTable['u544'] = 'top';
var u545 = document.getElementById('u545');
gv_vAlignTable['u545'] = 'top';
var u546 = document.getElementById('u546');
gv_vAlignTable['u546'] = 'top';
var u547 = document.getElementById('u547');
gv_vAlignTable['u547'] = 'top';
var u548 = document.getElementById('u548');
gv_vAlignTable['u548'] = 'top';
var u549 = document.getElementById('u549');

var u350 = document.getElementById('u350');

if (bIE) u350.attachEvent("onmouseover", MouseOveru350);
else u350.addEventListener("mouseover", MouseOveru350, true);
function MouseOveru350(e)
{
if (!IsTrueMouseOver('u350',e)) return;
if (true) {

	SetPanelStateu349("pd2u349");

	SetPanelStateu309("pd3u309");

}

}

var u351 = document.getElementById('u351');
gv_vAlignTable['u351'] = 'center';
var u352 = document.getElementById('u352');

var u353 = document.getElementById('u353');
gv_vAlignTable['u353'] = 'center';
var u354 = document.getElementById('u354');

u354.style.cursor = 'pointer';
if (bIE) u354.attachEvent("onclick", Clicku354);
else u354.addEventListener("click", Clicku354, true);
function Clicku354(e)
{

if (true) {

	SetPanelStateu349("pd1u349");

	SetPanelStateu265("pd3u265");

	SetPanelStateu363("pd0u363");

	SetPanelStateu342("pd0u342");

	SetPanelStateu356("pd0u356");

	SetPanelStateu309("pd3u309");

	SetPanelVisibilityu291("");

	MoveWidgetTo('u275',2,162);

}

}

if (bIE) u354.attachEvent("onmouseout", MouseOutu354);
else u354.addEventListener("mouseout", MouseOutu354, true);
function MouseOutu354(e)
{
if (!IsTrueMouseOut('u354',e)) return;
if (true) {

	SetPanelStateu309("pd0u309");

	SetPanelStateu349("pd0u349");

}

}

var u355 = document.getElementById('u355');
gv_vAlignTable['u355'] = 'center';
var u356 = document.getElementById('u356');

var u357 = document.getElementById('u357');

if (bIE) u357.attachEvent("onmouseover", MouseOveru357);
else u357.addEventListener("mouseover", MouseOveru357, true);
function MouseOveru357(e)
{
if (!IsTrueMouseOver('u357',e)) return;
if (true) {

	SetPanelStateu356("pd2u356");

	SetPanelStateu309("pd2u309");

}

}

var u358 = document.getElementById('u358');
gv_vAlignTable['u358'] = 'center';
var u359 = document.getElementById('u359');

var u711 = document.getElementById('u711');

var u712 = document.getElementById('u712');
gv_vAlignTable['u712'] = 'center';
var u713 = document.getElementById('u713');
gv_vAlignTable['u713'] = 'top';
var u550 = document.getElementById('u550');
gv_vAlignTable['u550'] = 'center';
var u715 = document.getElementById('u715');
gv_vAlignTable['u715'] = 'top';
var u716 = document.getElementById('u716');

var u710 = document.getElementById('u710');

u710.style.cursor = 'pointer';
if (bIE) u710.attachEvent("onclick", Clicku710);
else u710.addEventListener("click", Clicku710, true);
function Clicku710(e)
{

if (true) {

	SetPanelStateu650("pd1u650");

	SetPanelStateu662("pd1u662");

	MoveWidgetTo('u716',287,305);

	MoveWidgetTo('u731',11,520);

}

}

var u554 = document.getElementById('u554');
gv_vAlignTable['u554'] = 'center';
var u719 = document.getElementById('u719');
gv_vAlignTable['u719'] = 'center';
var u555 = document.getElementById('u555');

var u556 = document.getElementById('u556');

var u557 = document.getElementById('u557');
gv_vAlignTable['u557'] = 'center';
var u558 = document.getElementById('u558');

var u559 = document.getElementById('u559');
gv_vAlignTable['u559'] = 'center';
var u360 = document.getElementById('u360');
gv_vAlignTable['u360'] = 'center';
var u361 = document.getElementById('u361');

u361.style.cursor = 'pointer';
if (bIE) u361.attachEvent("onclick", Clicku361);
else u361.addEventListener("click", Clicku361, true);
function Clicku361(e)
{

if (true) {

	SetPanelStateu356("pd1u356");

	SetPanelStateu265("pd3u265");

	SetPanelStateu363("pd0u363");

	SetPanelStateu349("pd0u349");

	SetPanelStateu342("pd0u342");

	SetPanelStateu309("pd2u309");

	SetPanelVisibilityu291("");

	MoveWidgetTo('u275',2,162);

}

}

if (bIE) u361.attachEvent("onmouseout", MouseOutu361);
else u361.addEventListener("mouseout", MouseOutu361, true);
function MouseOutu361(e)
{
if (!IsTrueMouseOut('u361',e)) return;
if (true) {

	SetPanelStateu309("pd0u309");

	SetPanelStateu356("pd0u356");

}

}

var u362 = document.getElementById('u362');
gv_vAlignTable['u362'] = 'center';
var u363 = document.getElementById('u363');

var u364 = document.getElementById('u364');

if (bIE) u364.attachEvent("onmouseover", MouseOveru364);
else u364.addEventListener("mouseover", MouseOveru364, true);
function MouseOveru364(e)
{
if (!IsTrueMouseOver('u364',e)) return;
if (true) {

	SetPanelStateu363("pd2u363");

	SetPanelStateu309("pd1u309");

}

}

var u365 = document.getElementById('u365');
gv_vAlignTable['u365'] = 'center';
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

	SetPanelStateu363("pd1u363");

	SetPanelStateu265("pd3u265");

	SetPanelStateu356("pd0u356");

	SetPanelStateu349("pd0u349");

	SetPanelStateu342("pd0u342");

	SetPanelStateu309("pd1u309");

	SetPanelVisibilityu291("");

	MoveWidgetTo('u275',2,162);

}

}

if (bIE) u368.attachEvent("onmouseout", MouseOutu368);
else u368.addEventListener("mouseout", MouseOutu368, true);
function MouseOutu368(e)
{
if (!IsTrueMouseOut('u368',e)) return;
if (true) {

	SetPanelStateu309("pd0u309");

	SetPanelStateu363("pd0u363");

}

}

var u369 = document.getElementById('u369');
gv_vAlignTable['u369'] = 'center';
var u721 = document.getElementById('u721');
gv_vAlignTable['u721'] = 'center';
var u722 = document.getElementById('u722');

var u723 = document.getElementById('u723');
gv_vAlignTable['u723'] = 'top';
var u724 = document.getElementById('u724');

u724.style.cursor = 'pointer';
if (bIE) u724.attachEvent("onclick", Clicku724);
else u724.addEventListener("click", Clicku724, true);
function Clicku724(e)
{

if (true) {

	SetPanelStateu618("pd3u618");

	SetPanelStateu662("pd0u662");

SetWidgetRichText('u723', PopulateVariables('<b><span style=" font-family:\'Calibri\'; color:#006699; font-size:13px;">Total:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $12.00</span></b>'));

}

}
gv_vAlignTable['u724'] = 'top';
var u725 = document.getElementById('u725');

u725.style.cursor = 'pointer';
if (bIE) u725.attachEvent("onclick", Clicku725);
else u725.addEventListener("click", Clicku725, true);
function Clicku725(e)
{

if (true) {

	SetPanelStateu618("pd3u618");

	SetPanelStateu662("pd2u662");

SetWidgetRichText('u723', PopulateVariables('<b><span style=" font-family:\'Calibri\'; color:#006699; font-size:13px;">Total:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $120.00</span></b>'));

}

}
gv_vAlignTable['u725'] = 'top';
var u726 = document.getElementById('u726');

u726.style.cursor = 'pointer';
if (bIE) u726.attachEvent("onclick", Clicku726);
else u726.addEventListener("click", Clicku726, true);
function Clicku726(e)
{

if (true) {

	SetPanelStateu618("pd3u618");

	SetPanelStateu662("pd3u662");

SetWidgetRichText('u723', PopulateVariables('<b><span style=" font-family:\'Calibri\'; color:#006699; font-size:13px;">Total:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $120.00</span></b>'));

}

}
gv_vAlignTable['u726'] = 'top';
var u727 = document.getElementById('u727');

var u728 = document.getElementById('u728');
gv_vAlignTable['u728'] = 'center';
var u564 = document.getElementById('u564');

var u565 = document.getElementById('u565');
gv_vAlignTable['u565'] = 'center';
var u566 = document.getElementById('u566');
gv_vAlignTable['u566'] = 'top';
var u567 = document.getElementById('u567');
gv_vAlignTable['u567'] = 'top';
var u568 = document.getElementById('u568');
gv_vAlignTable['u568'] = 'top';
var u569 = document.getElementById('u569');
gv_vAlignTable['u569'] = 'top';
var u729 = document.getElementById('u729');
gv_vAlignTable['u729'] = 'top';
var u370 = document.getElementById('u370');
gv_vAlignTable['u370'] = 'top';
var u371 = document.getElementById('u371');

var u372 = document.getElementById('u372');
gv_vAlignTable['u372'] = 'center';
var u373 = document.getElementById('u373');
gv_vAlignTable['u373'] = 'top';
var u374 = document.getElementById('u374');

u374.style.cursor = 'pointer';
if (bIE) u374.attachEvent("onclick", Clicku374);
else u374.addEventListener("click", Clicku374, true);
function Clicku374(e)
{

if (true) {

	SetPanelVisibilityu0("hidden");

	SetPanelVisibilityu555("");

	BringToFront("u555");

}

}
gv_vAlignTable['u374'] = 'top';
var u375 = document.getElementById('u375');

var u376 = document.getElementById('u376');

var u377 = document.getElementById('u377');

var u378 = document.getElementById('u378');
gv_vAlignTable['u378'] = 'center';
var u379 = document.getElementById('u379');
gv_vAlignTable['u379'] = 'top';
var u731 = document.getElementById('u731');

var u732 = document.getElementById('u732');

var u733 = document.getElementById('u733');
gv_vAlignTable['u733'] = 'center';
var u734 = document.getElementById('u734');

u734.style.cursor = 'pointer';
if (bIE) u734.attachEvent("onclick", Clicku734);
else u734.addEventListener("click", Clicku734, true);
function Clicku734(e)
{

if (true) {

	SetPanelVisibilityu0("");

	BringToFront("u0");

	SetPanelStateu3("pd3u3");

}

}

var u735 = document.getElementById('u735');
gv_vAlignTable['u735'] = 'center';
var u736 = document.getElementById('u736');

var u737 = document.getElementById('u737');

var u738 = document.getElementById('u738');
gv_vAlignTable['u738'] = 'top';
var u730 = document.getElementById('u730');
gv_vAlignTable['u730'] = 'top';
var u574 = document.getElementById('u574');
gv_vAlignTable['u574'] = 'top';
var u575 = document.getElementById('u575');

var u576 = document.getElementById('u576');
gv_vAlignTable['u576'] = 'center';
var u577 = document.getElementById('u577');

var u578 = document.getElementById('u578');
gv_vAlignTable['u578'] = 'top';
var u579 = document.getElementById('u579');

var u380 = document.getElementById('u380');

var u381 = document.getElementById('u381');
gv_vAlignTable['u381'] = 'center';
var u382 = document.getElementById('u382');
gv_vAlignTable['u382'] = 'top';
var u383 = document.getElementById('u383');
gv_vAlignTable['u383'] = 'top';
var u384 = document.getElementById('u384');

var u385 = document.getElementById('u385');
gv_vAlignTable['u385'] = 'top';
var u386 = document.getElementById('u386');

var u387 = document.getElementById('u387');
gv_vAlignTable['u387'] = 'top';
var u388 = document.getElementById('u388');
gv_vAlignTable['u388'] = 'top';
var u389 = document.getElementById('u389');
gv_vAlignTable['u389'] = 'top';
var u741 = document.getElementById('u741');

var u742 = document.getElementById('u742');
gv_vAlignTable['u742'] = 'top';
var u743 = document.getElementById('u743');
gv_vAlignTable['u743'] = 'top';
var u744 = document.getElementById('u744');
gv_vAlignTable['u744'] = 'top';
var u745 = document.getElementById('u745');
gv_vAlignTable['u745'] = 'top';
var u746 = document.getElementById('u746');

var u747 = document.getElementById('u747');
gv_vAlignTable['u747'] = 'top';
var u748 = document.getElementById('u748');

var u749 = document.getElementById('u749');
gv_vAlignTable['u749'] = 'top';
var u584 = document.getElementById('u584');
gv_vAlignTable['u584'] = 'top';
var u585 = document.getElementById('u585');
gv_vAlignTable['u585'] = 'top';
var u586 = document.getElementById('u586');

var u587 = document.getElementById('u587');
gv_vAlignTable['u587'] = 'top';
var u588 = document.getElementById('u588');
gv_vAlignTable['u588'] = 'top';
var u589 = document.getElementById('u589');
gv_vAlignTable['u589'] = 'top';
var u200 = document.getElementById('u200');

var u201 = document.getElementById('u201');

var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'top';
var u390 = document.getElementById('u390');
gv_vAlignTable['u390'] = 'top';
var u391 = document.getElementById('u391');

var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'top';
var u393 = document.getElementById('u393');
gv_vAlignTable['u393'] = 'center';
var u394 = document.getElementById('u394');

var u395 = document.getElementById('u395');
gv_vAlignTable['u395'] = 'center';
var u396 = document.getElementById('u396');

u396.style.cursor = 'pointer';
if (bIE) u396.attachEvent("onclick", Clicku396);
else u396.addEventListener("click", Clicku396, true);
function Clicku396(e)
{

if (true) {

	SetPanelStateu391("pd1u391");

	SetPanelStateu265("pd1u265");

	SetPanelStateu398("pd0u398");

	SetPanelStateu405("pd0u405");

	SetPanelStateu412("pd0u412");

	SetPanelStateu435("pd2u435");

	SetPanelVisibilityu376("");

	MoveWidgetTo('u420',10,165);

}

}

if (bIE) u396.attachEvent("onmouseout", MouseOutu396);
else u396.addEventListener("mouseout", MouseOutu396, true);
function MouseOutu396(e)
{
if (!IsTrueMouseOut('u396',e)) return;
if (true) {

	SetPanelStateu435("pd0u435");

	SetPanelStateu391("pd0u391");

}

}

var u397 = document.getElementById('u397');
gv_vAlignTable['u397'] = 'center';
var u398 = document.getElementById('u398');

var u399 = document.getElementById('u399');

if (bIE) u399.attachEvent("onmouseover", MouseOveru399);
else u399.addEventListener("mouseover", MouseOveru399, true);
function MouseOveru399(e)
{
if (!IsTrueMouseOver('u399',e)) return;
if (true) {

	SetPanelStateu398("pd2u398");

	SetPanelStateu435("pd3u435");

}

}

var u751 = document.getElementById('u751');
gv_vAlignTable['u751'] = 'top';
var u752 = document.getElementById('u752');

var u753 = document.getElementById('u753');
gv_vAlignTable['u753'] = 'top';
var u754 = document.getElementById('u754');

var u755 = document.getElementById('u755');
gv_vAlignTable['u755'] = 'top';
var u756 = document.getElementById('u756');

var u757 = document.getElementById('u757');
gv_vAlignTable['u757'] = 'top';
var u590 = document.getElementById('u590');
gv_vAlignTable['u590'] = 'top';
var u591 = document.getElementById('u591');

var u592 = document.getElementById('u592');
gv_vAlignTable['u592'] = 'top';
var u593 = document.getElementById('u593');
gv_vAlignTable['u593'] = 'top';
var u594 = document.getElementById('u594');

u594.style.cursor = 'pointer';
if (bIE) u594.attachEvent("onclick", Clicku594);
else u594.addEventListener("click", Clicku594, true);
function Clicku594(e)
{

if (true) {

	SetPanelStateu591("pd1u591");

}

}
gv_vAlignTable['u594'] = 'top';
var u595 = document.getElementById('u595');
gv_vAlignTable['u595'] = 'top';
var u596 = document.getElementById('u596');
gv_vAlignTable['u596'] = 'top';
var u210 = document.getElementById('u210');

var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'center';
var u212 = document.getElementById('u212');

var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'center';
var u214 = document.getElementById('u214');

var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'top';
var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'top';
var u217 = document.getElementById('u217');

var u218 = document.getElementById('u218');

var u219 = document.getElementById('u219');

var u760 = document.getElementById('u760');

var u761 = document.getElementById('u761');
gv_vAlignTable['u761'] = 'top';
var u762 = document.getElementById('u762');

var u763 = document.getElementById('u763');
gv_vAlignTable['u763'] = 'top';
var u764 = document.getElementById('u764');

var u765 = document.getElementById('u765');
gv_vAlignTable['u765'] = 'top';
var u766 = document.getElementById('u766');
gv_vAlignTable['u766'] = 'top';
var u767 = document.getElementById('u767');
gv_vAlignTable['u767'] = 'top';
var u768 = document.getElementById('u768');
gv_vAlignTable['u768'] = 'top';
var u769 = document.getElementById('u769');

var u220 = document.getElementById('u220');

var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'top';
var u222 = document.getElementById('u222');

var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'top';
var u224 = document.getElementById('u224');

var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'top';
var u226 = document.getElementById('u226');

var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'top';
var u228 = document.getElementById('u228');

var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'top';
var u770 = document.getElementById('u770');
gv_vAlignTable['u770'] = 'top';
var u771 = document.getElementById('u771');
gv_vAlignTable['u771'] = 'top';
var u772 = document.getElementById('u772');
gv_vAlignTable['u772'] = 'top';
var u773 = document.getElementById('u773');
gv_vAlignTable['u773'] = 'top';
var u600 = document.getElementById('u600');
gv_vAlignTable['u600'] = 'center';
var u775 = document.getElementById('u775');
gv_vAlignTable['u775'] = 'top';
var u776 = document.getElementById('u776');
gv_vAlignTable['u776'] = 'top';
var u777 = document.getElementById('u777');

var u778 = document.getElementById('u778');
gv_vAlignTable['u778'] = 'top';
var u779 = document.getElementById('u779');
gv_vAlignTable['u779'] = 'top';
var u230 = document.getElementById('u230');

var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'top';
var u232 = document.getElementById('u232');

var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'top';
var u234 = document.getElementById('u234');

var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'top';
var u236 = document.getElementById('u236');

var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'top';
var u238 = document.getElementById('u238');

var u239 = document.getElementById('u239');
gv_vAlignTable['u239'] = 'top';
var u780 = document.getElementById('u780');
gv_vAlignTable['u780'] = 'top';
var u781 = document.getElementById('u781');
gv_vAlignTable['u781'] = 'top';
var u782 = document.getElementById('u782');
gv_vAlignTable['u782'] = 'top';
var u783 = document.getElementById('u783');
gv_vAlignTable['u783'] = 'top';
var u784 = document.getElementById('u784');

var u785 = document.getElementById('u785');
gv_vAlignTable['u785'] = 'top';
var u610 = document.getElementById('u610');
gv_vAlignTable['u610'] = 'center';
var u787 = document.getElementById('u787');
gv_vAlignTable['u787'] = 'top';
var u788 = document.getElementById('u788');
gv_vAlignTable['u788'] = 'top';
var u789 = document.getElementById('u789');
gv_vAlignTable['u789'] = 'top';
var u240 = document.getElementById('u240');

var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'top';
var u242 = document.getElementById('u242');

var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'top';
var u244 = document.getElementById('u244');

var u245 = document.getElementById('u245');

var u246 = document.getElementById('u246');

var u247 = document.getElementById('u247');

var u248 = document.getElementById('u248');

var u249 = document.getElementById('u249');

var u601 = document.getElementById('u601');
gv_vAlignTable['u601'] = 'top';
var u602 = document.getElementById('u602');

var u603 = document.getElementById('u603');
gv_vAlignTable['u603'] = 'center';
var u604 = document.getElementById('u604');

var u605 = document.getElementById('u605');

var u606 = document.getElementById('u606');
gv_vAlignTable['u606'] = 'center';
var u607 = document.getElementById('u607');
gv_vAlignTable['u607'] = 'top';
var u608 = document.getElementById('u608');
gv_vAlignTable['u608'] = 'top';
var u609 = document.getElementById('u609');

var u797 = document.getElementById('u797');

var u798 = document.getElementById('u798');
gv_vAlignTable['u798'] = 'center';
var u799 = document.getElementById('u799');

var u250 = document.getElementById('u250');

var u251 = document.getElementById('u251');

var u252 = document.getElementById('u252');

var u253 = document.getElementById('u253');

var u254 = document.getElementById('u254');

var u255 = document.getElementById('u255');

var u256 = document.getElementById('u256');
gv_vAlignTable['u256'] = 'center';
var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'top';
var u258 = document.getElementById('u258');

var u259 = document.getElementById('u259');

var u611 = document.getElementById('u611');

var u612 = document.getElementById('u612');
gv_vAlignTable['u612'] = 'center';
var u613 = document.getElementById('u613');
gv_vAlignTable['u613'] = 'top';
var u614 = document.getElementById('u614');
gv_vAlignTable['u614'] = 'top';
var u615 = document.getElementById('u615');

u615.style.cursor = 'pointer';
if (bIE) u615.attachEvent("onclick", Clicku615);
else u615.addEventListener("click", Clicku615, true);
function Clicku615(e)
{

if (true) {

	SetPanelVisibilityu604("");

	MoveWidgetTo('u570',8,333);

}

}
gv_vAlignTable['u615'] = 'top';
var u616 = document.getElementById('u616');

u616.style.cursor = 'pointer';
if (bIE) u616.attachEvent("onclick", Clicku616);
else u616.addEventListener("click", Clicku616, true);
function Clicku616(e)
{

if (true) {

	SetPanelVisibilityu604("hidden");

	MoveWidgetTo('u570',8,223);

}

}
gv_vAlignTable['u616'] = 'top';
var u617 = document.getElementById('u617');
gv_vAlignTable['u617'] = 'top';
var u618 = document.getElementById('u618');

var u619 = document.getElementById('u619');

var u0 = document.getElementById('u0');

var u1 = document.getElementById('u1');

var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'center';
var u3 = document.getElementById('u3');

var u4 = document.getElementById('u4');

var u5 = document.getElementById('u5');

var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u7 = document.getElementById('u7');

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'top';
var u261 = document.getElementById('u261');
gv_vAlignTable['u261'] = 'top';
var u262 = document.getElementById('u262');

var u263 = document.getElementById('u263');

u263.style.cursor = 'pointer';
if (bIE) u263.attachEvent("onclick", Clicku263);
else u263.addEventListener("click", Clicku263, true);
function Clicku263(e)
{

if (true) {

	SetPanelStateu14("pd1u14");

	SetPanelStateu4("pd0u4");

SetWidgetRichText('u260', PopulateVariables('<span style=" font-family:\'Calibri\'; color:#434343; font-size:13px;">Please select your sizes for the Gildan Ultra Cotton T-Shirt. Enter the total quantity for each size that you want.&nbsp; When you are done, click &quot;Continue.&quot;</span>'));

}

}
gv_vAlignTable['u263'] = 'top';
var u264 = document.getElementById('u264');

u264.style.cursor = 'pointer';
if (bIE) u264.attachEvent("onclick", Clicku264);
else u264.addEventListener("click", Clicku264, true);
function Clicku264(e)
{

if (true) {

	SetPanelStateu14("pd0u14");

	SetPanelStateu4("pd0u4");

SetWidgetRichText('u260', PopulateVariables('<span style=" font-family:\'Calibri\'; color:#434343; font-size:13px;">Please select your sizes for the Gildan Ultra Cotton T-Shirt. Enter the total quantity for each size that you want.&nbsp; When you are done, click &quot;Add Items to My List.&quot;&nbsp; You\'ll can review your list before you submit it to John Doe.</span>'));

	MoveWidgetTo('u376',5,112);

}

}
gv_vAlignTable['u264'] = 'top';
var u265 = document.getElementById('u265');

var u266 = document.getElementById('u266');

var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'center';
var u268 = document.getElementById('u268');

var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'center';
var u621 = document.getElementById('u621');
gv_vAlignTable['u621'] = 'top';
var u622 = document.getElementById('u622');

u622.style.cursor = 'pointer';
if (bIE) u622.attachEvent("onclick", Clicku622);
else u622.addEventListener("click", Clicku622, true);
function Clicku622(e)
{

if (true) {

	SetPanelStateu618("pd1u618");

}

}

var u623 = document.getElementById('u623');
gv_vAlignTable['u623'] = 'center';
var u624 = document.getElementById('u624');
gv_vAlignTable['u624'] = 'top';
var u625 = document.getElementById('u625');

var u626 = document.getElementById('u626');
gv_vAlignTable['u626'] = 'center';
var u627 = document.getElementById('u627');
gv_vAlignTable['u627'] = 'top';
var u628 = document.getElementById('u628');

var u629 = document.getElementById('u629');
gv_vAlignTable['u629'] = 'center';
if (window.OnLoad) OnLoad();
