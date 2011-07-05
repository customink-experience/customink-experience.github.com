
var PageName = 'Page 3';
var PageId = 'd757889ce9fb4e35bb6d1de15e7004fe'
var PageUrl = 'Page_3.html'
document.title = 'Page 3';
var PageNotes = 
{
"pageName":"Page 3",
"showNotesNames":"False"}
var $OnLoadVariable = '';

var $colorCount = '';

var $printOption = '';

var $showWhite = '';

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
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&colorCount=' + encodeURIComponent($colorCount) + '&printOption=' + encodeURIComponent($printOption) + '&showWhite=' + encodeURIComponent($showWhite) + '&CSUM=1';
}

function PopulateVariables(value) {
    var d = new Date();
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[colorCount\]\]/g, $colorCount);
  value = value.replace(/\[\[printOption\]\]/g, $printOption);
  value = value.replace(/\[\[showWhite\]\]/g, $showWhite);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  value = value.replace(/\[\[GenDay\]\]/g, '30');
  value = value.replace(/\[\[GenMonth\]\]/g, '6');
  value = value.replace(/\[\[GenMonthName\]\]/g, 'June');
  value = value.replace(/\[\[GenDayOfWeek\]\]/g, 'Thursday');
  value = value.replace(/\[\[GenYear\]\]/g, '2011');
  value = value.replace(/\[\[Day\]\]/g, d.getDate());
  value = value.replace(/\[\[Month\]\]/g, d.getMonth() + 1);
  value = value.replace(/\[\[MonthName\]\]/g, GetMonthString(d.getMonth()));
  value = value.replace(/\[\[DayOfWeek\]\]/g, GetDayString(d.getDay()));
  value = value.replace(/\[\[Year\]\]/g, d.getFullYear());
  return value;
}

function OnLoad(e) {

if (((GetGlobalVariableValue('$printOption')) == ('multi')) && ((GetGlobalVariableValue('$showWhite')) == ('no'))) {

	SetPanelVisibility('u489','','none',500);

SetWidgetRichText('u481', '<p style="text-align:center;"><span style="font-family:Arial;font-size:11px;font-weight:bold;font-style:normal;text-decoration:none;color:#000066;">' + (GetGlobalVariableValue('$colorCount')) + '</span></p>');

SetWidgetRichText('u497', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#000066;">' + (GetGlobalVariableValue('$colorCount')) + ' print colors selected for this image.</span></p>');

SetCheckState('u490', false);

SetWidgetRichText('u483', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#000066;">Use multiple colors to print.</span></p>');

	SetPanelState('u469', 'pd3u469','none','',500,'none','',500);

	SetPanelState('u492', 'pd0u492','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('$printOption')) == ('multi')) && ((GetGlobalVariableValue('$showWhite')) == ('yes'))) {

	SetPanelVisibility('u489','','none',500);

SetWidgetRichText('u481', '<p style="text-align:center;"><span style="font-family:Arial;font-size:11px;font-weight:bold;font-style:normal;text-decoration:none;color:#000066;">' + (GetGlobalVariableValue('$colorCount')) + '</span></p>');

SetWidgetRichText('u497', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#000066;">' + (GetGlobalVariableValue('$colorCount')) + ' print colors selected for this image.</span></p>');

SetCheckState('u490', true);

SetWidgetRichText('u483', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#000066;">Use multiple colors to print.</span></p>');

	SetPanelState('u469', 'pd0u469','none','',500,'none','',500);

	SetPanelState('u492', 'pd0u492','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('$printOption')) == ('single')) {

SetWidgetRichText('u481', '<p style="text-align:center;"><span style="font-family:Arial;font-size:11px;font-weight:bold;font-style:normal;text-decoration:none;color:#000066;">' + (GetGlobalVariableValue('$colorCount')) + '</span></p>');

SetWidgetRichText('u483', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#000066;">Printing as a single color.</span></p>');

	SetPanelVisibility('u489','hidden','none',500);

	SetPanelState('u469', 'pd2u469','none','',500,'none','',500);

	SetPanelState('u492', 'pd1u492','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('$printOption')) == ('full')) && ((GetGlobalVariableValue('$showWhite')) == ('no'))) {

SetWidgetRichText('u481', '<p style="text-align:center;"><span style="font-family:Arial;font-size:11px;font-weight:bold;font-style:normal;text-decoration:none;color:#000066;">' + (GetGlobalVariableValue('$colorCount')) + '</span></p>');

SetWidgetRichText('u483', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#000066;">Use 8 colors to estimate price.</span></p>');

SetCheckState('u490', false);

	SetPanelState('u469', 'pd3u469','none','',500,'none','',500);

	SetPanelState('u492', 'pd2u492','none','',500,'none','',500);

	SetPanelVisibility('u489','','none',500);

}
else
if (((GetGlobalVariableValue('$printOption')) == ('full')) && ((GetGlobalVariableValue('$showWhite')) == ('yes'))) {

SetWidgetRichText('u481', '<p style="text-align:center;"><span style="font-family:Arial;font-size:11px;font-weight:bold;font-style:normal;text-decoration:none;color:#000066;">' + (GetGlobalVariableValue('$colorCount')) + '</span></p>');

SetWidgetRichText('u483', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#000066;">Use 8 colors to estimate price.</span></p>');

SetCheckState('u490', true);

	SetPanelState('u469', 'pd0u469','none','',500,'none','',500);

	SetPanelState('u492', 'pd2u492','none','',500,'none','',500);

	SetPanelVisibility('u489','','none',500);

}

}

var u270 = document.getElementById('u270');
gv_vAlignTable['u270'] = 'center';
var u271 = document.getElementById('u271');

var u272 = document.getElementById('u272');

var u273 = document.getElementById('u273');
gv_vAlignTable['u273'] = 'center';
var u274 = document.getElementById('u274');

u274.style.cursor = 'pointer';
if (bIE) u274.attachEvent("onclick", Clicku274);
else u274.addEventListener("click", Clicku274, true);
function Clicku274(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u271', 'pd1u271','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

;

}

}

if (bIE) u274.attachEvent("onmouseout", MouseOutu274);
else u274.addEventListener("mouseout", MouseOutu274, true);
function MouseOutu274(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u274',e)) return;
if (true) {

	SetPanelState('u271', 'pd2u271','none','',500,'none','',500);

;

}

}

var u275 = document.getElementById('u275');
gv_vAlignTable['u275'] = 'center';
var u276 = document.getElementById('u276');

if (bIE) u276.attachEvent("onmouseover", MouseOveru276);
else u276.addEventListener("mouseover", MouseOveru276, true);
function MouseOveru276(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u276',e)) return;
if (true) {

	SetPanelState('u271', 'pd3u271','none','',500,'none','',500);

;

}

}

var u277 = document.getElementById('u277');
gv_vAlignTable['u277'] = 'center';
var u278 = document.getElementById('u278');

var u279 = document.getElementById('u279');
gv_vAlignTable['u279'] = 'center';
var u280 = document.getElementById('u280');

u280.style.cursor = 'pointer';
if (bIE) u280.attachEvent("onclick", Clicku280);
else u280.addEventListener("click", Clicku280, true);
function Clicku280(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u271', 'pd3u271','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

;

}

}

if (bIE) u280.attachEvent("onmouseout", MouseOutu280);
else u280.addEventListener("mouseout", MouseOutu280, true);
function MouseOutu280(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u280',e)) return;
if (true) {

	SetPanelState('u271', 'pd0u271','none','',500,'none','',500);

;

}

}

var u281 = document.getElementById('u281');
gv_vAlignTable['u281'] = 'center';
var u282 = document.getElementById('u282');

if (bIE) u282.attachEvent("onmouseover", MouseOveru282);
else u282.addEventListener("mouseover", MouseOveru282, true);
function MouseOveru282(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u282',e)) return;
if (true) {

	SetPanelState('u271', 'pd1u271','none','',500,'none','',500);

;

}

}

var u283 = document.getElementById('u283');
gv_vAlignTable['u283'] = 'center';
var u284 = document.getElementById('u284');

var u285 = document.getElementById('u285');

var u286 = document.getElementById('u286');
gv_vAlignTable['u286'] = 'center';
var u287 = document.getElementById('u287');

u287.style.cursor = 'pointer';
if (bIE) u287.attachEvent("onclick", Clicku287);
else u287.addEventListener("click", Clicku287, true);
function Clicku287(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u284', 'pd1u284','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

;

}

}

if (bIE) u287.attachEvent("onmouseout", MouseOutu287);
else u287.addEventListener("mouseout", MouseOutu287, true);
function MouseOutu287(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u287',e)) return;
if (true) {

	SetPanelState('u284', 'pd2u284','none','',500,'none','',500);

;

}

}

var u288 = document.getElementById('u288');
gv_vAlignTable['u288'] = 'center';
var u289 = document.getElementById('u289');

if (bIE) u289.attachEvent("onmouseover", MouseOveru289);
else u289.addEventListener("mouseover", MouseOveru289, true);
function MouseOveru289(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u289',e)) return;
if (true) {

	SetPanelState('u284', 'pd3u284','none','',500,'none','',500);

;

}

}

var u490 = document.getElementById('u490');

u490.style.cursor = 'pointer';
if (bIE) u490.attachEvent("onclick", Clicku490);
else u490.addEventListener("click", Clicku490, true);
function Clicku490(e)
{
windowEvent = e;


if (((GetGlobalVariableValue('$printOption')) == ('multi')) && ((GetCheckState('u490')) == (true))) {

	SetPanelState('u469', 'pd0u469','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u481', '<p style="text-align:center;"><span style="font-family:Arial;font-size:11px;font-weight:bold;font-style:normal;text-decoration:none;color:#000066;">' + (GetGlobalVariableValue('$colorCount')) + '</span></p>');

SetWidgetRichText('u497', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#000066;">' + (GetGlobalVariableValue('$colorCount')) + ' print colors selected for this image.</span></p>');

}
else
if (((GetGlobalVariableValue('$printOption')) == ('multi')) && ((GetCheckState('u490')) == (false))) {

	SetPanelState('u469', 'pd3u469','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u481', '<p style="text-align:center;"><span style="font-family:Arial;font-size:11px;font-weight:bold;font-style:normal;text-decoration:none;color:#000066;">' + (GetGlobalVariableValue('$colorCount')) + '</span></p>');

SetWidgetRichText('u497', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#000066;">' + (GetGlobalVariableValue('$colorCount')) + ' print colors selected for this image.</span></p>');

}
else
if (((GetGlobalVariableValue('$printOption')) == ('full')) && ((GetCheckState('u490')) == (true))) {

	SetPanelState('u469', 'pd0u469','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('$printOption')) == ('full')) && ((GetCheckState('u490')) == (false))) {

	SetPanelState('u469', 'pd3u469','none','',500,'none','',500);

}
else
if (((GetCheckState('u490')) == (true)) && ((GetGlobalVariableValue('$printOption')) == ('single'))) {

SetGlobalVariableValue('$printOption', 'multi');

SetGlobalVariableValue('$colorCount', '2');

SetWidgetRichText('u481', '<p style="text-align:center;"><span style="font-family:Arial;font-size:11px;font-weight:bold;font-style:normal;text-decoration:none;color:#000066;">' + (GetGlobalVariableValue('$colorCount')) + '</span></p>');

SetWidgetRichText('u497', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#000066;">' + (GetGlobalVariableValue('$colorCount')) + ' print colors selected for this image.</span></p>');

SetWidgetRichText('u483', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#000066;">Use multiple colors to print.</span></p>');

}
else
if (true) {

	SetPanelState('u469', 'pd2u469','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '1');

SetGlobalVariableValue('$printOption', 'single');

SetWidgetRichText('u481', '<p style="text-align:center;"><span style="font-family:Arial;font-size:11px;font-weight:bold;font-style:normal;text-decoration:none;color:#000066;">5</span></p>');

;

SetWidgetRichText('u483', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#000066;">Use one single color to print.</span></p>');

}

}

var u491 = document.getElementById('u491');
gv_vAlignTable['u491'] = 'top';
var u492 = document.getElementById('u492');

var u493 = document.getElementById('u493');

u493.style.cursor = 'pointer';
if (bIE) u493.attachEvent("onclick", Clicku493);
else u493.addEventListener("click", Clicku493, true);
function Clicku493(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u4', 'pd2u4','none','',500,'none','',500);

	SetPanelVisibility('u482','hidden','none',500);

}

}

var u494 = document.getElementById('u494');
gv_vAlignTable['u494'] = 'center';
var u495 = document.getElementById('u495');
gv_vAlignTable['u495'] = 'top';
var u496 = document.getElementById('u496');

u496.style.cursor = 'pointer';
if (bIE) u496.attachEvent("onclick", Clicku496);
else u496.addEventListener("click", Clicku496, true);
function Clicku496(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u4', 'pd1u4','none','',500,'none','',500);

	SetPanelVisibility('u482','hidden','none',500);

}

}
gv_vAlignTable['u496'] = 'top';
var u100 = document.getElementById('u100');

if (bIE) u100.attachEvent("onmouseover", MouseOveru100);
else u100.addEventListener("mouseover", MouseOveru100, true);
function MouseOveru100(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u100',e)) return;
if (true) {

	SetPanelState('u89', 'pd3u89','none','',500,'none','',500);

;

}

}

var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'center';
var u102 = document.getElementById('u102');

var u103 = document.getElementById('u103');

var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'center';
var u105 = document.getElementById('u105');

u105.style.cursor = 'pointer';
if (bIE) u105.attachEvent("onclick", Clicku105);
else u105.addEventListener("click", Clicku105, true);
function Clicku105(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u102', 'pd1u102','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

;

}

}

if (bIE) u105.attachEvent("onmouseout", MouseOutu105);
else u105.addEventListener("mouseout", MouseOutu105, true);
function MouseOutu105(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u105',e)) return;
if (true) {

	SetPanelState('u102', 'pd2u102','none','',500,'none','',500);

;

}

}

var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'center';
var u107 = document.getElementById('u107');

if (bIE) u107.attachEvent("onmouseover", MouseOveru107);
else u107.addEventListener("mouseover", MouseOveru107, true);
function MouseOveru107(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u107',e)) return;
if (true) {

	SetPanelState('u102', 'pd3u102','none','',500,'none','',500);

;

}

}

var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'center';
var u109 = document.getElementById('u109');

var u297 = document.getElementById('u297');

var u298 = document.getElementById('u298');

var u299 = document.getElementById('u299');
gv_vAlignTable['u299'] = 'center';
var u9 = document.getElementById('u9');

u9.style.cursor = 'pointer';
if (bIE) u9.attachEvent("onclick", Clicku9);
else u9.addEventListener("click", Clicku9, true);
function Clicku9(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) < Number('1')) {

	NewWindow("resources/Other.html#other=" + encodeURI("Please select at least one color for printing"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
else
if (true) {

	SetPanelState('u4', 'pd0u4','none','',500,'none','',500);

	SetPanelState('u482', 'pd0u482','none','',500,'none','',500);

}

}

var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'center';
var u111 = document.getElementById('u111');

u111.style.cursor = 'pointer';
if (bIE) u111.attachEvent("onclick", Clicku111);
else u111.addEventListener("click", Clicku111, true);
function Clicku111(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u102', 'pd3u102','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

;

}

}

if (bIE) u111.attachEvent("onmouseout", MouseOutu111);
else u111.addEventListener("mouseout", MouseOutu111, true);
function MouseOutu111(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u111',e)) return;
if (true) {

	SetPanelState('u102', 'pd0u102','none','',500,'none','',500);

;

}

}

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'center';
var u113 = document.getElementById('u113');

if (bIE) u113.attachEvent("onmouseover", MouseOveru113);
else u113.addEventListener("mouseover", MouseOveru113, true);
function MouseOveru113(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u113',e)) return;
if (true) {

	SetPanelState('u102', 'pd1u102','none','',500,'none','',500);

;

}

}

var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'center';
var u115 = document.getElementById('u115');

var u116 = document.getElementById('u116');

var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
var u118 = document.getElementById('u118');

u118.style.cursor = 'pointer';
if (bIE) u118.attachEvent("onclick", Clicku118);
else u118.addEventListener("click", Clicku118, true);
function Clicku118(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u115', 'pd1u115','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

;

}

}

if (bIE) u118.attachEvent("onmouseout", MouseOutu118);
else u118.addEventListener("mouseout", MouseOutu118, true);
function MouseOutu118(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u118',e)) return;
if (true) {

	SetPanelState('u115', 'pd2u115','none','',500,'none','',500);

;

}

}

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u33 = document.getElementById('u33');

u33.style.cursor = 'pointer';
if (bIE) u33.attachEvent("onclick", Clicku33);
else u33.addEventListener("click", Clicku33, true);
function Clicku33(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u24', 'pd3u24','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

;

}

}

if (bIE) u33.attachEvent("onmouseout", MouseOutu33);
else u33.addEventListener("mouseout", MouseOutu33, true);
function MouseOutu33(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u33',e)) return;
if (true) {

	SetPanelState('u24', 'pd0u24','none','',500,'none','',500);

;

}

}

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u35 = document.getElementById('u35');

if (bIE) u35.attachEvent("onmouseover", MouseOveru35);
else u35.addEventListener("mouseover", MouseOveru35, true);
function MouseOveru35(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u35',e)) return;
if (true) {

	SetPanelState('u24', 'pd1u24','none','',500,'none','',500);

;

}

}

var u120 = document.getElementById('u120');

if (bIE) u120.attachEvent("onmouseover", MouseOveru120);
else u120.addEventListener("mouseover", MouseOveru120, true);
function MouseOveru120(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u120',e)) return;
if (true) {

	SetPanelState('u115', 'pd3u115','none','',500,'none','',500);

;

}

}

var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'center';
var u122 = document.getElementById('u122');

var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'center';
var u124 = document.getElementById('u124');

u124.style.cursor = 'pointer';
if (bIE) u124.attachEvent("onclick", Clicku124);
else u124.addEventListener("click", Clicku124, true);
function Clicku124(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u115', 'pd3u115','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

;

}

}

if (bIE) u124.attachEvent("onmouseout", MouseOutu124);
else u124.addEventListener("mouseout", MouseOutu124, true);
function MouseOutu124(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u124',e)) return;
if (true) {

	SetPanelState('u115', 'pd0u115','none','',500,'none','',500);

;

}

}

var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'center';
var u126 = document.getElementById('u126');

if (bIE) u126.attachEvent("onmouseover", MouseOveru126);
else u126.addEventListener("mouseover", MouseOveru126, true);
function MouseOveru126(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u126',e)) return;
if (true) {

	SetPanelState('u115', 'pd1u115','none','',500,'none','',500);

;

}

}

var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u128 = document.getElementById('u128');

var u129 = document.getElementById('u129');

var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'center';
var u131 = document.getElementById('u131');

u131.style.cursor = 'pointer';
if (bIE) u131.attachEvent("onclick", Clicku131);
else u131.addEventListener("click", Clicku131, true);
function Clicku131(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u128', 'pd1u128','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

;

}

}

if (bIE) u131.attachEvent("onmouseout", MouseOutu131);
else u131.addEventListener("mouseout", MouseOutu131, true);
function MouseOutu131(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u131',e)) return;
if (true) {

	SetPanelState('u128', 'pd2u128','none','',500,'none','',500);

;

}

}

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'center';
var u133 = document.getElementById('u133');

if (bIE) u133.attachEvent("onmouseover", MouseOveru133);
else u133.addEventListener("mouseover", MouseOveru133, true);
function MouseOveru133(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u133',e)) return;
if (true) {

	SetPanelState('u128', 'pd3u128','none','',500,'none','',500);

;

}

}

var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'center';
var u135 = document.getElementById('u135');

var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'center';
var u137 = document.getElementById('u137');

u137.style.cursor = 'pointer';
if (bIE) u137.attachEvent("onclick", Clicku137);
else u137.addEventListener("click", Clicku137, true);
function Clicku137(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u128', 'pd3u128','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

;

}

}

if (bIE) u137.attachEvent("onmouseout", MouseOutu137);
else u137.addEventListener("mouseout", MouseOutu137, true);
function MouseOutu137(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u137',e)) return;
if (true) {

	SetPanelState('u128', 'pd0u128','none','',500,'none','',500);

;

}

}

var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'center';
var u139 = document.getElementById('u139');

if (bIE) u139.attachEvent("onmouseover", MouseOveru139);
else u139.addEventListener("mouseover", MouseOveru139, true);
function MouseOveru139(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u139',e)) return;
if (true) {

	SetPanelState('u128', 'pd1u128','none','',500,'none','',500);

;

}

}

var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'center';
var u141 = document.getElementById('u141');

var u142 = document.getElementById('u142');

var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'center';
var u144 = document.getElementById('u144');

u144.style.cursor = 'pointer';
if (bIE) u144.attachEvent("onclick", Clicku144);
else u144.addEventListener("click", Clicku144, true);
function Clicku144(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u141', 'pd1u141','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

;

}

}

if (bIE) u144.attachEvent("onmouseout", MouseOutu144);
else u144.addEventListener("mouseout", MouseOutu144, true);
function MouseOutu144(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u144',e)) return;
if (true) {

	SetPanelState('u141', 'pd2u141','none','',500,'none','',500);

;

}

}

var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'center';
var u146 = document.getElementById('u146');

if (bIE) u146.attachEvent("onmouseover", MouseOveru146);
else u146.addEventListener("mouseover", MouseOveru146, true);
function MouseOveru146(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u146',e)) return;
if (true) {

	SetPanelState('u141', 'pd3u141','none','',500,'none','',500);

;

}

}

var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'center';
var u148 = document.getElementById('u148');

var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'center';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u11 = document.getElementById('u11');

var u12 = document.getElementById('u12');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u14 = document.getElementById('u14');

u14.style.cursor = 'pointer';
if (bIE) u14.attachEvent("onclick", Clicku14);
else u14.addEventListener("click", Clicku14, true);
function Clicku14(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u11', 'pd1u11','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

;

}

}

if (bIE) u14.attachEvent("onmouseout", MouseOutu14);
else u14.addEventListener("mouseout", MouseOutu14, true);
function MouseOutu14(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u14',e)) return;
if (true) {

	SetPanelState('u11', 'pd2u11','none','',500,'none','',500);

;

}

}

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u16 = document.getElementById('u16');

if (bIE) u16.attachEvent("onmouseover", MouseOveru16);
else u16.addEventListener("mouseover", MouseOveru16, true);
function MouseOveru16(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u16',e)) return;
if (true) {

	SetPanelState('u11', 'pd3u11','none','',500,'none','',500);

;

}

}

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u18 = document.getElementById('u18');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u150 = document.getElementById('u150');

u150.style.cursor = 'pointer';
if (bIE) u150.attachEvent("onclick", Clicku150);
else u150.addEventListener("click", Clicku150, true);
function Clicku150(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u141', 'pd3u141','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

;

}

}

if (bIE) u150.attachEvent("onmouseout", MouseOutu150);
else u150.addEventListener("mouseout", MouseOutu150, true);
function MouseOutu150(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u150',e)) return;
if (true) {

	SetPanelState('u141', 'pd0u141','none','',500,'none','',500);

;

}

}

var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'center';
var u152 = document.getElementById('u152');

if (bIE) u152.attachEvent("onmouseover", MouseOveru152);
else u152.addEventListener("mouseover", MouseOveru152, true);
function MouseOveru152(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u152',e)) return;
if (true) {

	SetPanelState('u141', 'pd1u141','none','',500,'none','',500);

;

}

}

var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'center';
var u154 = document.getElementById('u154');

var u155 = document.getElementById('u155');

var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'center';
var u157 = document.getElementById('u157');

u157.style.cursor = 'pointer';
if (bIE) u157.attachEvent("onclick", Clicku157);
else u157.addEventListener("click", Clicku157, true);
function Clicku157(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u154', 'pd1u154','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

;

}

}

if (bIE) u157.attachEvent("onmouseout", MouseOutu157);
else u157.addEventListener("mouseout", MouseOutu157, true);
function MouseOutu157(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u157',e)) return;
if (true) {

	SetPanelState('u154', 'pd2u154','none','',500,'none','',500);

;

}

}

var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'center';
var u159 = document.getElementById('u159');

if (bIE) u159.attachEvent("onmouseover", MouseOveru159);
else u159.addEventListener("mouseover", MouseOveru159, true);
function MouseOveru159(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u159',e)) return;
if (true) {

	SetPanelState('u154', 'pd3u154','none','',500,'none','',500);

;

}

}

var u20 = document.getElementById('u20');

u20.style.cursor = 'pointer';
if (bIE) u20.attachEvent("onclick", Clicku20);
else u20.addEventListener("click", Clicku20, true);
function Clicku20(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u11', 'pd3u11','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

;

}

}

if (bIE) u20.attachEvent("onmouseout", MouseOutu20);
else u20.addEventListener("mouseout", MouseOutu20, true);
function MouseOutu20(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u20',e)) return;
if (true) {

	SetPanelState('u11', 'pd0u11','none','',500,'none','',500);

;

}

}

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u22 = document.getElementById('u22');

if (bIE) u22.attachEvent("onmouseover", MouseOveru22);
else u22.addEventListener("mouseover", MouseOveru22, true);
function MouseOveru22(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u22',e)) return;
if (true) {

	SetPanelState('u11', 'pd1u11','none','',500,'none','',500);

;

}

}

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u24 = document.getElementById('u24');

var u25 = document.getElementById('u25');

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u27 = document.getElementById('u27');

u27.style.cursor = 'pointer';
if (bIE) u27.attachEvent("onclick", Clicku27);
else u27.addEventListener("click", Clicku27, true);
function Clicku27(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u24', 'pd1u24','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

;

}

}

if (bIE) u27.attachEvent("onmouseout", MouseOutu27);
else u27.addEventListener("mouseout", MouseOutu27, true);
function MouseOutu27(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u27',e)) return;
if (true) {

	SetPanelState('u24', 'pd2u24','none','',500,'none','',500);

;

}

}

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
var u29 = document.getElementById('u29');

if (bIE) u29.attachEvent("onmouseover", MouseOveru29);
else u29.addEventListener("mouseover", MouseOveru29, true);
function MouseOveru29(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u29',e)) return;
if (true) {

	SetPanelState('u24', 'pd3u24','none','',500,'none','',500);

;

}

}

var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'center';
var u161 = document.getElementById('u161');

var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'center';
var u163 = document.getElementById('u163');

u163.style.cursor = 'pointer';
if (bIE) u163.attachEvent("onclick", Clicku163);
else u163.addEventListener("click", Clicku163, true);
function Clicku163(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u154', 'pd3u154','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

;

}

}

if (bIE) u163.attachEvent("onmouseout", MouseOutu163);
else u163.addEventListener("mouseout", MouseOutu163, true);
function MouseOutu163(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u163',e)) return;
if (true) {

	SetPanelState('u154', 'pd0u154','none','',500,'none','',500);

;

}

}

var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'center';
var u165 = document.getElementById('u165');

if (bIE) u165.attachEvent("onmouseover", MouseOveru165);
else u165.addEventListener("mouseover", MouseOveru165, true);
function MouseOveru165(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u165',e)) return;
if (true) {

	SetPanelState('u154', 'pd1u154','none','',500,'none','',500);

;

}

}

var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'center';
var u167 = document.getElementById('u167');

var u168 = document.getElementById('u168');

var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'center';
var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'center';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u31 = document.getElementById('u31');

var u206 = document.getElementById('u206');

var u207 = document.getElementById('u207');

var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'center';
var u209 = document.getElementById('u209');

u209.style.cursor = 'pointer';
if (bIE) u209.attachEvent("onclick", Clicku209);
else u209.addEventListener("click", Clicku209, true);
function Clicku209(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u206', 'pd1u206','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

;

}

}

if (bIE) u209.attachEvent("onmouseout", MouseOutu209);
else u209.addEventListener("mouseout", MouseOutu209, true);
function MouseOutu209(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u209',e)) return;
if (true) {

	SetPanelState('u206', 'pd2u206','none','',500,'none','',500);

;

}

}

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u37 = document.getElementById('u37');

var u38 = document.getElementById('u38');

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u170 = document.getElementById('u170');

u170.style.cursor = 'pointer';
if (bIE) u170.attachEvent("onclick", Clicku170);
else u170.addEventListener("click", Clicku170, true);
function Clicku170(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u167', 'pd1u167','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

;

}

}

if (bIE) u170.attachEvent("onmouseout", MouseOutu170);
else u170.addEventListener("mouseout", MouseOutu170, true);
function MouseOutu170(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u170',e)) return;
if (true) {

	SetPanelState('u167', 'pd2u167','none','',500,'none','',500);

;

}

}

var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'center';
var u172 = document.getElementById('u172');

if (bIE) u172.attachEvent("onmouseover", MouseOveru172);
else u172.addEventListener("mouseover", MouseOveru172, true);
function MouseOveru172(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u172',e)) return;
if (true) {

	SetPanelState('u167', 'pd3u167','none','',500,'none','',500);

;

}

}

var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'center';
var u174 = document.getElementById('u174');

var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'center';
var u176 = document.getElementById('u176');

u176.style.cursor = 'pointer';
if (bIE) u176.attachEvent("onclick", Clicku176);
else u176.addEventListener("click", Clicku176, true);
function Clicku176(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u167', 'pd3u167','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

;

}

}

if (bIE) u176.attachEvent("onmouseout", MouseOutu176);
else u176.addEventListener("mouseout", MouseOutu176, true);
function MouseOutu176(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u176',e)) return;
if (true) {

	SetPanelState('u167', 'pd0u167','none','',500,'none','',500);

;

}

}

var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'center';
var u178 = document.getElementById('u178');

if (bIE) u178.attachEvent("onmouseover", MouseOveru178);
else u178.addEventListener("mouseover", MouseOveru178, true);
function MouseOveru178(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u178',e)) return;
if (true) {

	SetPanelState('u167', 'pd1u167','none','',500,'none','',500);

;

}

}

var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'center';
var u40 = document.getElementById('u40');

u40.style.cursor = 'pointer';
if (bIE) u40.attachEvent("onclick", Clicku40);
else u40.addEventListener("click", Clicku40, true);
function Clicku40(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u37', 'pd1u37','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

;

}

}

if (bIE) u40.attachEvent("onmouseout", MouseOutu40);
else u40.addEventListener("mouseout", MouseOutu40, true);
function MouseOutu40(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u40',e)) return;
if (true) {

	SetPanelState('u37', 'pd2u37','none','',500,'none','',500);

;

}

}

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u42 = document.getElementById('u42');

if (bIE) u42.attachEvent("onmouseover", MouseOveru42);
else u42.addEventListener("mouseover", MouseOveru42, true);
function MouseOveru42(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u42',e)) return;
if (true) {

	SetPanelState('u37', 'pd3u37','none','',500,'none','',500);

;

}

}

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u44 = document.getElementById('u44');

var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'center';
var u46 = document.getElementById('u46');

u46.style.cursor = 'pointer';
if (bIE) u46.attachEvent("onclick", Clicku46);
else u46.addEventListener("click", Clicku46, true);
function Clicku46(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u37', 'pd3u37','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

;

}

}

if (bIE) u46.attachEvent("onmouseout", MouseOutu46);
else u46.addEventListener("mouseout", MouseOutu46, true);
function MouseOutu46(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u46',e)) return;
if (true) {

	SetPanelState('u37', 'pd0u37','none','',500,'none','',500);

;

}

}

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u48 = document.getElementById('u48');

if (bIE) u48.attachEvent("onmouseover", MouseOveru48);
else u48.addEventListener("mouseover", MouseOveru48, true);
function MouseOveru48(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u48',e)) return;
if (true) {

	SetPanelState('u37', 'pd1u37','none','',500,'none','',500);

;

}

}

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u180 = document.getElementById('u180');

var u181 = document.getElementById('u181');

var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'center';
var u183 = document.getElementById('u183');

u183.style.cursor = 'pointer';
if (bIE) u183.attachEvent("onclick", Clicku183);
else u183.addEventListener("click", Clicku183, true);
function Clicku183(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u180', 'pd1u180','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

;

}

}

if (bIE) u183.attachEvent("onmouseout", MouseOutu183);
else u183.addEventListener("mouseout", MouseOutu183, true);
function MouseOutu183(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u183',e)) return;
if (true) {

	SetPanelState('u180', 'pd2u180','none','',500,'none','',500);

;

}

}

var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'center';
var u185 = document.getElementById('u185');

if (bIE) u185.attachEvent("onmouseover", MouseOveru185);
else u185.addEventListener("mouseover", MouseOveru185, true);
function MouseOveru185(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u185',e)) return;
if (true) {

	SetPanelState('u180', 'pd3u180','none','',500,'none','',500);

;

}

}

var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'center';
var u187 = document.getElementById('u187');

var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'center';
var u189 = document.getElementById('u189');

u189.style.cursor = 'pointer';
if (bIE) u189.attachEvent("onclick", Clicku189);
else u189.addEventListener("click", Clicku189, true);
function Clicku189(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u180', 'pd3u180','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

;

}

}

if (bIE) u189.attachEvent("onmouseout", MouseOutu189);
else u189.addEventListener("mouseout", MouseOutu189, true);
function MouseOutu189(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u189',e)) return;
if (true) {

	SetPanelState('u180', 'pd0u180','none','',500,'none','',500);

;

}

}

var u50 = document.getElementById('u50');

var u51 = document.getElementById('u51');

var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'center';
var u53 = document.getElementById('u53');

u53.style.cursor = 'pointer';
if (bIE) u53.attachEvent("onclick", Clicku53);
else u53.addEventListener("click", Clicku53, true);
function Clicku53(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u50', 'pd1u50','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

;

}

}

if (bIE) u53.attachEvent("onmouseout", MouseOutu53);
else u53.addEventListener("mouseout", MouseOutu53, true);
function MouseOutu53(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u53',e)) return;
if (true) {

	SetPanelState('u50', 'pd2u50','none','',500,'none','',500);

;

}

}

var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'center';
var u55 = document.getElementById('u55');

if (bIE) u55.attachEvent("onmouseover", MouseOveru55);
else u55.addEventListener("mouseover", MouseOveru55, true);
function MouseOveru55(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u55',e)) return;
if (true) {

	SetPanelState('u50', 'pd3u50','none','',500,'none','',500);

;

}

}

var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'center';
var u57 = document.getElementById('u57');

var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'center';
var u59 = document.getElementById('u59');

u59.style.cursor = 'pointer';
if (bIE) u59.attachEvent("onclick", Clicku59);
else u59.addEventListener("click", Clicku59, true);
function Clicku59(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u50', 'pd3u50','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

;

}

}

if (bIE) u59.attachEvent("onmouseout", MouseOutu59);
else u59.addEventListener("mouseout", MouseOutu59, true);
function MouseOutu59(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u59',e)) return;
if (true) {

	SetPanelState('u50', 'pd0u50','none','',500,'none','',500);

;

}

}

var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'center';
var u191 = document.getElementById('u191');

if (bIE) u191.attachEvent("onmouseover", MouseOveru191);
else u191.addEventListener("mouseover", MouseOveru191, true);
function MouseOveru191(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u191',e)) return;
if (true) {

	SetPanelState('u180', 'pd1u180','none','',500,'none','',500);

;

}

}

var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'center';
var u193 = document.getElementById('u193');

var u194 = document.getElementById('u194');

var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'center';
var u196 = document.getElementById('u196');

u196.style.cursor = 'pointer';
if (bIE) u196.attachEvent("onclick", Clicku196);
else u196.addEventListener("click", Clicku196, true);
function Clicku196(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u193', 'pd1u193','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

;

}

}

if (bIE) u196.attachEvent("onmouseout", MouseOutu196);
else u196.addEventListener("mouseout", MouseOutu196, true);
function MouseOutu196(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u196',e)) return;
if (true) {

	SetPanelState('u193', 'pd2u193','none','',500,'none','',500);

;

}

}

var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'center';
var u198 = document.getElementById('u198');

if (bIE) u198.attachEvent("onmouseover", MouseOveru198);
else u198.addEventListener("mouseover", MouseOveru198, true);
function MouseOveru198(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u198',e)) return;
if (true) {

	SetPanelState('u193', 'pd3u193','none','',500,'none','',500);

;

}

}

var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'center';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
var u61 = document.getElementById('u61');

if (bIE) u61.attachEvent("onmouseover", MouseOveru61);
else u61.addEventListener("mouseover", MouseOveru61, true);
function MouseOveru61(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u61',e)) return;
if (true) {

	SetPanelState('u50', 'pd1u50','none','',500,'none','',500);

;

}

}

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'center';
var u63 = document.getElementById('u63');

var u64 = document.getElementById('u64');

var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'center';
var u66 = document.getElementById('u66');

u66.style.cursor = 'pointer';
if (bIE) u66.attachEvent("onclick", Clicku66);
else u66.addEventListener("click", Clicku66, true);
function Clicku66(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u63', 'pd1u63','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

;

}

}

if (bIE) u66.attachEvent("onmouseout", MouseOutu66);
else u66.addEventListener("mouseout", MouseOutu66, true);
function MouseOutu66(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u66',e)) return;
if (true) {

	SetPanelState('u63', 'pd2u63','none','',500,'none','',500);

;

}

}

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u68 = document.getElementById('u68');

if (bIE) u68.attachEvent("onmouseover", MouseOveru68);
else u68.addEventListener("mouseover", MouseOveru68, true);
function MouseOveru68(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u68',e)) return;
if (true) {

	SetPanelState('u63', 'pd3u63','none','',500,'none','',500);

;

}

}

var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u70 = document.getElementById('u70');

var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u72 = document.getElementById('u72');

u72.style.cursor = 'pointer';
if (bIE) u72.attachEvent("onclick", Clicku72);
else u72.addEventListener("click", Clicku72, true);
function Clicku72(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u63', 'pd3u63','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

;

}

}

if (bIE) u72.attachEvent("onmouseout", MouseOutu72);
else u72.addEventListener("mouseout", MouseOutu72, true);
function MouseOutu72(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u72',e)) return;
if (true) {

	SetPanelState('u63', 'pd0u63','none','',500,'none','',500);

;

}

}

var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'center';
var u74 = document.getElementById('u74');

if (bIE) u74.attachEvent("onmouseover", MouseOveru74);
else u74.addEventListener("mouseover", MouseOveru74, true);
function MouseOveru74(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u74',e)) return;
if (true) {

	SetPanelState('u63', 'pd1u63','none','',500,'none','',500);

;

}

}

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u76 = document.getElementById('u76');

var u77 = document.getElementById('u77');

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'center';
var u79 = document.getElementById('u79');

u79.style.cursor = 'pointer';
if (bIE) u79.attachEvent("onclick", Clicku79);
else u79.addEventListener("click", Clicku79, true);
function Clicku79(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u76', 'pd2u76','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

;

}

}

if (bIE) u79.attachEvent("onmouseout", MouseOutu79);
else u79.addEventListener("mouseout", MouseOutu79, true);
function MouseOutu79(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u79',e)) return;
if (true) {

	SetPanelState('u76', 'pd0u76','none','',500,'none','',500);

;

}

}

var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'center';
var u81 = document.getElementById('u81');

var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'center';
var u83 = document.getElementById('u83');

u83.style.cursor = 'pointer';
if (bIE) u83.attachEvent("onclick", Clicku83);
else u83.addEventListener("click", Clicku83, true);
function Clicku83(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u76', 'pd3u76','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

;

}

}

if (bIE) u83.attachEvent("onmouseout", MouseOutu83);
else u83.addEventListener("mouseout", MouseOutu83, true);
function MouseOutu83(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u83',e)) return;
if (true) {

	SetPanelState('u76', 'pd1u76','none','',500,'none','',500);

;

}

}

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'center';
var u85 = document.getElementById('u85');

if (bIE) u85.attachEvent("onmouseover", MouseOveru85);
else u85.addEventListener("mouseover", MouseOveru85, true);
function MouseOveru85(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u85',e)) return;
if (true) {

	SetPanelState('u76', 'pd2u76','none','',500,'none','',500);

;

}

}

var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'center';
var u87 = document.getElementById('u87');

if (bIE) u87.attachEvent("onmouseover", MouseOveru87);
else u87.addEventListener("mouseover", MouseOveru87, true);
function MouseOveru87(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u87',e)) return;
if (true) {

	SetPanelState('u76', 'pd3u76','none','',500,'none','',500);

;

}

}

var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'center';
var u89 = document.getElementById('u89');

var u90 = document.getElementById('u90');

var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'center';
var u92 = document.getElementById('u92');

u92.style.cursor = 'pointer';
if (bIE) u92.attachEvent("onclick", Clicku92);
else u92.addEventListener("click", Clicku92, true);
function Clicku92(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u89', 'pd2u89','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

;

}

}

if (bIE) u92.attachEvent("onmouseout", MouseOutu92);
else u92.addEventListener("mouseout", MouseOutu92, true);
function MouseOutu92(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u92',e)) return;
if (true) {

	SetPanelState('u89', 'pd0u89','none','',500,'none','',500);

;

}

}

var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'center';
var u94 = document.getElementById('u94');

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u96 = document.getElementById('u96');

u96.style.cursor = 'pointer';
if (bIE) u96.attachEvent("onclick", Clicku96);
else u96.addEventListener("click", Clicku96, true);
function Clicku96(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u89', 'pd3u89','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

;

}

}

if (bIE) u96.attachEvent("onmouseout", MouseOutu96);
else u96.addEventListener("mouseout", MouseOutu96, true);
function MouseOutu96(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u96',e)) return;
if (true) {

	SetPanelState('u89', 'pd1u89','none','',500,'none','',500);

;

}

}

var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'center';
var u98 = document.getElementById('u98');

if (bIE) u98.attachEvent("onmouseover", MouseOveru98);
else u98.addEventListener("mouseover", MouseOveru98, true);
function MouseOveru98(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u98',e)) return;
if (true) {

	SetPanelState('u89', 'pd2u89','none','',500,'none','',500);

;

}

}

var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'center';
var u400 = document.getElementById('u400');
gv_vAlignTable['u400'] = 'center';
var u401 = document.getElementById('u401');

var u402 = document.getElementById('u402');

var u403 = document.getElementById('u403');
gv_vAlignTable['u403'] = 'center';
var u404 = document.getElementById('u404');

u404.style.cursor = 'pointer';
if (bIE) u404.attachEvent("onclick", Clicku404);
else u404.addEventListener("click", Clicku404, true);
function Clicku404(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u401', 'pd1u401','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

;

}

}

if (bIE) u404.attachEvent("onmouseout", MouseOutu404);
else u404.addEventListener("mouseout", MouseOutu404, true);
function MouseOutu404(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u404',e)) return;
if (true) {

	SetPanelState('u401', 'pd2u401','none','',500,'none','',500);

;

}

}

var u405 = document.getElementById('u405');
gv_vAlignTable['u405'] = 'center';
var u406 = document.getElementById('u406');

if (bIE) u406.attachEvent("onmouseover", MouseOveru406);
else u406.addEventListener("mouseover", MouseOveru406, true);
function MouseOveru406(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u406',e)) return;
if (true) {

	SetPanelState('u401', 'pd3u401','none','',500,'none','',500);

;

}

}

var u407 = document.getElementById('u407');
gv_vAlignTable['u407'] = 'center';
var u408 = document.getElementById('u408');

var u409 = document.getElementById('u409');
gv_vAlignTable['u409'] = 'center';
var u410 = document.getElementById('u410');

u410.style.cursor = 'pointer';
if (bIE) u410.attachEvent("onclick", Clicku410);
else u410.addEventListener("click", Clicku410, true);
function Clicku410(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u401', 'pd3u401','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

;

}

}

if (bIE) u410.attachEvent("onmouseout", MouseOutu410);
else u410.addEventListener("mouseout", MouseOutu410, true);
function MouseOutu410(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u410',e)) return;
if (true) {

	SetPanelState('u401', 'pd0u401','none','',500,'none','',500);

;

}

}

var u411 = document.getElementById('u411');
gv_vAlignTable['u411'] = 'center';
var u412 = document.getElementById('u412');

if (bIE) u412.attachEvent("onmouseover", MouseOveru412);
else u412.addEventListener("mouseover", MouseOveru412, true);
function MouseOveru412(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u412',e)) return;
if (true) {

	SetPanelState('u401', 'pd1u401','none','',500,'none','',500);

;

}

}

var u413 = document.getElementById('u413');
gv_vAlignTable['u413'] = 'center';
var u414 = document.getElementById('u414');

var u415 = document.getElementById('u415');

var u416 = document.getElementById('u416');
gv_vAlignTable['u416'] = 'center';
var u417 = document.getElementById('u417');

u417.style.cursor = 'pointer';
if (bIE) u417.attachEvent("onclick", Clicku417);
else u417.addEventListener("click", Clicku417, true);
function Clicku417(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u414', 'pd1u414','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

;

}

}

if (bIE) u417.attachEvent("onmouseout", MouseOutu417);
else u417.addEventListener("mouseout", MouseOutu417, true);
function MouseOutu417(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u417',e)) return;
if (true) {

	SetPanelState('u414', 'pd2u414','none','',500,'none','',500);

;

}

}

var u418 = document.getElementById('u418');
gv_vAlignTable['u418'] = 'center';
var u419 = document.getElementById('u419');

if (bIE) u419.attachEvent("onmouseover", MouseOveru419);
else u419.addEventListener("mouseover", MouseOveru419, true);
function MouseOveru419(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u419',e)) return;
if (true) {

	SetPanelState('u414', 'pd3u414','none','',500,'none','',500);

;

}

}

var u420 = document.getElementById('u420');
gv_vAlignTable['u420'] = 'center';
var u421 = document.getElementById('u421');

var u422 = document.getElementById('u422');
gv_vAlignTable['u422'] = 'center';
var u423 = document.getElementById('u423');

u423.style.cursor = 'pointer';
if (bIE) u423.attachEvent("onclick", Clicku423);
else u423.addEventListener("click", Clicku423, true);
function Clicku423(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u414', 'pd3u414','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

;

}

}

if (bIE) u423.attachEvent("onmouseout", MouseOutu423);
else u423.addEventListener("mouseout", MouseOutu423, true);
function MouseOutu423(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u423',e)) return;
if (true) {

	SetPanelState('u414', 'pd0u414','none','',500,'none','',500);

;

}

}

var u424 = document.getElementById('u424');
gv_vAlignTable['u424'] = 'center';
var u425 = document.getElementById('u425');

if (bIE) u425.attachEvent("onmouseover", MouseOveru425);
else u425.addEventListener("mouseover", MouseOveru425, true);
function MouseOveru425(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u425',e)) return;
if (true) {

	SetPanelState('u414', 'pd1u414','none','',500,'none','',500);

;

}

}

var u426 = document.getElementById('u426');
gv_vAlignTable['u426'] = 'center';
var u427 = document.getElementById('u427');

var u428 = document.getElementById('u428');

var u429 = document.getElementById('u429');
gv_vAlignTable['u429'] = 'center';
var u290 = document.getElementById('u290');
gv_vAlignTable['u290'] = 'center';
var u291 = document.getElementById('u291');

var u292 = document.getElementById('u292');
gv_vAlignTable['u292'] = 'center';
var u293 = document.getElementById('u293');

u293.style.cursor = 'pointer';
if (bIE) u293.attachEvent("onclick", Clicku293);
else u293.addEventListener("click", Clicku293, true);
function Clicku293(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u284', 'pd3u284','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

;

}

}

if (bIE) u293.attachEvent("onmouseout", MouseOutu293);
else u293.addEventListener("mouseout", MouseOutu293, true);
function MouseOutu293(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u293',e)) return;
if (true) {

	SetPanelState('u284', 'pd0u284','none','',500,'none','',500);

;

}

}

var u294 = document.getElementById('u294');
gv_vAlignTable['u294'] = 'center';
var u295 = document.getElementById('u295');

if (bIE) u295.attachEvent("onmouseover", MouseOveru295);
else u295.addEventListener("mouseover", MouseOveru295, true);
function MouseOveru295(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u295',e)) return;
if (true) {

	SetPanelState('u284', 'pd1u284','none','',500,'none','',500);

;

}

}

var u296 = document.getElementById('u296');
gv_vAlignTable['u296'] = 'center';
var u430 = document.getElementById('u430');

u430.style.cursor = 'pointer';
if (bIE) u430.attachEvent("onclick", Clicku430);
else u430.addEventListener("click", Clicku430, true);
function Clicku430(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u427', 'pd1u427','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

;

}

}

if (bIE) u430.attachEvent("onmouseout", MouseOutu430);
else u430.addEventListener("mouseout", MouseOutu430, true);
function MouseOutu430(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u430',e)) return;
if (true) {

	SetPanelState('u427', 'pd2u427','none','',500,'none','',500);

;

}

}

var u431 = document.getElementById('u431');
gv_vAlignTable['u431'] = 'center';
var u432 = document.getElementById('u432');

if (bIE) u432.attachEvent("onmouseover", MouseOveru432);
else u432.addEventListener("mouseover", MouseOveru432, true);
function MouseOveru432(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u432',e)) return;
if (true) {

	SetPanelState('u427', 'pd3u427','none','',500,'none','',500);

;

}

}

var u433 = document.getElementById('u433');
gv_vAlignTable['u433'] = 'center';
var u434 = document.getElementById('u434');

var u435 = document.getElementById('u435');
gv_vAlignTable['u435'] = 'center';
var u436 = document.getElementById('u436');

u436.style.cursor = 'pointer';
if (bIE) u436.attachEvent("onclick", Clicku436);
else u436.addEventListener("click", Clicku436, true);
function Clicku436(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u427', 'pd3u427','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

;

}

}

if (bIE) u436.attachEvent("onmouseout", MouseOutu436);
else u436.addEventListener("mouseout", MouseOutu436, true);
function MouseOutu436(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u436',e)) return;
if (true) {

	SetPanelState('u427', 'pd0u427','none','',500,'none','',500);

;

}

}

var u437 = document.getElementById('u437');
gv_vAlignTable['u437'] = 'center';
var u438 = document.getElementById('u438');

if (bIE) u438.attachEvent("onmouseover", MouseOveru438);
else u438.addEventListener("mouseover", MouseOveru438, true);
function MouseOveru438(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u438',e)) return;
if (true) {

	SetPanelState('u427', 'pd1u427','none','',500,'none','',500);

;

}

}

var u439 = document.getElementById('u439');
gv_vAlignTable['u439'] = 'center';
var u440 = document.getElementById('u440');

var u441 = document.getElementById('u441');

var u442 = document.getElementById('u442');
gv_vAlignTable['u442'] = 'center';
var u443 = document.getElementById('u443');

u443.style.cursor = 'pointer';
if (bIE) u443.attachEvent("onclick", Clicku443);
else u443.addEventListener("click", Clicku443, true);
function Clicku443(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u440', 'pd1u440','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

;

}

}

if (bIE) u443.attachEvent("onmouseout", MouseOutu443);
else u443.addEventListener("mouseout", MouseOutu443, true);
function MouseOutu443(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u443',e)) return;
if (true) {

	SetPanelState('u440', 'pd2u440','none','',500,'none','',500);

;

}

}

var u444 = document.getElementById('u444');
gv_vAlignTable['u444'] = 'center';
var u445 = document.getElementById('u445');

if (bIE) u445.attachEvent("onmouseover", MouseOveru445);
else u445.addEventListener("mouseover", MouseOveru445, true);
function MouseOveru445(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u445',e)) return;
if (true) {

	SetPanelState('u440', 'pd3u440','none','',500,'none','',500);

;

}

}

var u446 = document.getElementById('u446');
gv_vAlignTable['u446'] = 'center';
var u447 = document.getElementById('u447');

var u448 = document.getElementById('u448');
gv_vAlignTable['u448'] = 'center';
var u449 = document.getElementById('u449');

u449.style.cursor = 'pointer';
if (bIE) u449.attachEvent("onclick", Clicku449);
else u449.addEventListener("click", Clicku449, true);
function Clicku449(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u440', 'pd3u440','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

;

}

}

if (bIE) u449.attachEvent("onmouseout", MouseOutu449);
else u449.addEventListener("mouseout", MouseOutu449, true);
function MouseOutu449(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u449',e)) return;
if (true) {

	SetPanelState('u440', 'pd0u440','none','',500,'none','',500);

;

}

}

var u450 = document.getElementById('u450');
gv_vAlignTable['u450'] = 'center';
var u451 = document.getElementById('u451');

if (bIE) u451.attachEvent("onmouseover", MouseOveru451);
else u451.addEventListener("mouseover", MouseOveru451, true);
function MouseOveru451(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u451',e)) return;
if (true) {

	SetPanelState('u440', 'pd1u440','none','',500,'none','',500);

;

}

}

var u452 = document.getElementById('u452');
gv_vAlignTable['u452'] = 'center';
var u453 = document.getElementById('u453');

var u454 = document.getElementById('u454');

var u455 = document.getElementById('u455');
gv_vAlignTable['u455'] = 'center';
var u456 = document.getElementById('u456');

u456.style.cursor = 'pointer';
if (bIE) u456.attachEvent("onclick", Clicku456);
else u456.addEventListener("click", Clicku456, true);
function Clicku456(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u453', 'pd1u453','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

;

}

}

if (bIE) u456.attachEvent("onmouseout", MouseOutu456);
else u456.addEventListener("mouseout", MouseOutu456, true);
function MouseOutu456(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u456',e)) return;
if (true) {

	SetPanelState('u453', 'pd2u453','none','',500,'none','',500);

;

}

}

var u457 = document.getElementById('u457');
gv_vAlignTable['u457'] = 'center';
var u458 = document.getElementById('u458');

if (bIE) u458.attachEvent("onmouseover", MouseOveru458);
else u458.addEventListener("mouseover", MouseOveru458, true);
function MouseOveru458(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u458',e)) return;
if (true) {

	SetPanelState('u453', 'pd3u453','none','',500,'none','',500);

;

}

}

var u459 = document.getElementById('u459');
gv_vAlignTable['u459'] = 'center';
var u460 = document.getElementById('u460');

var u461 = document.getElementById('u461');
gv_vAlignTable['u461'] = 'center';
var u462 = document.getElementById('u462');

u462.style.cursor = 'pointer';
if (bIE) u462.attachEvent("onclick", Clicku462);
else u462.addEventListener("click", Clicku462, true);
function Clicku462(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u453', 'pd3u453','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

;

}

}

if (bIE) u462.attachEvent("onmouseout", MouseOutu462);
else u462.addEventListener("mouseout", MouseOutu462, true);
function MouseOutu462(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u462',e)) return;
if (true) {

	SetPanelState('u453', 'pd0u453','none','',500,'none','',500);

;

}

}

var u463 = document.getElementById('u463');
gv_vAlignTable['u463'] = 'center';
var u464 = document.getElementById('u464');

if (bIE) u464.attachEvent("onmouseover", MouseOveru464);
else u464.addEventListener("mouseover", MouseOveru464, true);
function MouseOveru464(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u464',e)) return;
if (true) {

	SetPanelState('u453', 'pd1u453','none','',500,'none','',500);

;

}

}

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
windowEvent = e;


if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("This function is not available in this prototype."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u469 = document.getElementById('u469');

var u470 = document.getElementById('u470');

var u471 = document.getElementById('u471');
gv_vAlignTable['u471'] = 'center';
var u472 = document.getElementById('u472');

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

var u481 = document.getElementById('u481');
gv_vAlignTable['u481'] = 'center';
var u482 = document.getElementById('u482');

var u483 = document.getElementById('u483');
gv_vAlignTable['u483'] = 'top';
var u484 = document.getElementById('u484');

u484.style.cursor = 'pointer';
if (bIE) u484.attachEvent("onclick", Clicku484);
else u484.addEventListener("click", Clicku484, true);
function Clicku484(e)
{
windowEvent = e;


if (true) {

	self.location.href="Page_2.html" + GetQuerystring();

}

}
gv_vAlignTable['u484'] = 'top';
var u485 = document.getElementById('u485');
gv_vAlignTable['u485'] = 'top';
var u486 = document.getElementById('u486');

var u487 = document.getElementById('u487');
gv_vAlignTable['u487'] = 'center';
var u488 = document.getElementById('u488');

u488.style.cursor = 'pointer';
if (bIE) u488.attachEvent("onclick", Clicku488);
else u488.addEventListener("click", Clicku488, true);
function Clicku488(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u469', 'pd4u469','none','',500,'none','',500);

	self.location.href="Home.html" + GetQuerystring();

}

}
gv_vAlignTable['u488'] = 'top';
var u489 = document.getElementById('u489');

var u204 = document.getElementById('u204');

if (bIE) u204.attachEvent("onmouseover", MouseOveru204);
else u204.addEventListener("mouseover", MouseOveru204, true);
function MouseOveru204(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u204',e)) return;
if (true) {

	SetPanelState('u193', 'pd1u193','none','',500,'none','',500);

;

}

}

var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'center';
var u300 = document.getElementById('u300');

u300.style.cursor = 'pointer';
if (bIE) u300.attachEvent("onclick", Clicku300);
else u300.addEventListener("click", Clicku300, true);
function Clicku300(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u297', 'pd1u297','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

;

}

}

if (bIE) u300.attachEvent("onmouseout", MouseOutu300);
else u300.addEventListener("mouseout", MouseOutu300, true);
function MouseOutu300(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u300',e)) return;
if (true) {

	SetPanelState('u297', 'pd2u297','none','',500,'none','',500);

;

}

}

var u301 = document.getElementById('u301');
gv_vAlignTable['u301'] = 'center';
var u302 = document.getElementById('u302');

if (bIE) u302.attachEvent("onmouseover", MouseOveru302);
else u302.addEventListener("mouseover", MouseOveru302, true);
function MouseOveru302(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u302',e)) return;
if (true) {

	SetPanelState('u297', 'pd3u297','none','',500,'none','',500);

;

}

}

var u303 = document.getElementById('u303');
gv_vAlignTable['u303'] = 'center';
var u304 = document.getElementById('u304');

var u305 = document.getElementById('u305');
gv_vAlignTable['u305'] = 'center';
var u306 = document.getElementById('u306');

u306.style.cursor = 'pointer';
if (bIE) u306.attachEvent("onclick", Clicku306);
else u306.addEventListener("click", Clicku306, true);
function Clicku306(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u297', 'pd3u297','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

;

}

}

if (bIE) u306.attachEvent("onmouseout", MouseOutu306);
else u306.addEventListener("mouseout", MouseOutu306, true);
function MouseOutu306(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u306',e)) return;
if (true) {

	SetPanelState('u297', 'pd0u297','none','',500,'none','',500);

;

}

}

var u307 = document.getElementById('u307');
gv_vAlignTable['u307'] = 'center';
var u308 = document.getElementById('u308');

if (bIE) u308.attachEvent("onmouseover", MouseOveru308);
else u308.addEventListener("mouseover", MouseOveru308, true);
function MouseOveru308(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u308',e)) return;
if (true) {

	SetPanelState('u297', 'pd1u297','none','',500,'none','',500);

;

}

}

var u309 = document.getElementById('u309');
gv_vAlignTable['u309'] = 'center';
var u497 = document.getElementById('u497');
gv_vAlignTable['u497'] = 'top';
var u310 = document.getElementById('u310');

var u311 = document.getElementById('u311');

var u312 = document.getElementById('u312');
gv_vAlignTable['u312'] = 'center';
var u313 = document.getElementById('u313');

u313.style.cursor = 'pointer';
if (bIE) u313.attachEvent("onclick", Clicku313);
else u313.addEventListener("click", Clicku313, true);
function Clicku313(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u310', 'pd1u310','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

;

}

}

if (bIE) u313.attachEvent("onmouseout", MouseOutu313);
else u313.addEventListener("mouseout", MouseOutu313, true);
function MouseOutu313(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u313',e)) return;
if (true) {

	SetPanelState('u310', 'pd2u310','none','',500,'none','',500);

;

}

}

var u314 = document.getElementById('u314');
gv_vAlignTable['u314'] = 'center';
var u315 = document.getElementById('u315');

if (bIE) u315.attachEvent("onmouseover", MouseOveru315);
else u315.addEventListener("mouseover", MouseOveru315, true);
function MouseOveru315(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u315',e)) return;
if (true) {

	SetPanelState('u310', 'pd3u310','none','',500,'none','',500);

;

}

}

var u316 = document.getElementById('u316');
gv_vAlignTable['u316'] = 'center';
var u317 = document.getElementById('u317');

var u318 = document.getElementById('u318');
gv_vAlignTable['u318'] = 'center';
var u319 = document.getElementById('u319');

u319.style.cursor = 'pointer';
if (bIE) u319.attachEvent("onclick", Clicku319);
else u319.addEventListener("click", Clicku319, true);
function Clicku319(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u310', 'pd3u310','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

;

}

}

if (bIE) u319.attachEvent("onmouseout", MouseOutu319);
else u319.addEventListener("mouseout", MouseOutu319, true);
function MouseOutu319(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u319',e)) return;
if (true) {

	SetPanelState('u310', 'pd0u310','none','',500,'none','',500);

;

}

}

var u320 = document.getElementById('u320');
gv_vAlignTable['u320'] = 'center';
var u321 = document.getElementById('u321');

if (bIE) u321.attachEvent("onmouseover", MouseOveru321);
else u321.addEventListener("mouseover", MouseOveru321, true);
function MouseOveru321(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u321',e)) return;
if (true) {

	SetPanelState('u310', 'pd1u310','none','',500,'none','',500);

;

}

}

var u322 = document.getElementById('u322');
gv_vAlignTable['u322'] = 'center';
var u323 = document.getElementById('u323');

var u324 = document.getElementById('u324');

var u325 = document.getElementById('u325');
gv_vAlignTable['u325'] = 'center';
var u326 = document.getElementById('u326');

u326.style.cursor = 'pointer';
if (bIE) u326.attachEvent("onclick", Clicku326);
else u326.addEventListener("click", Clicku326, true);
function Clicku326(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u323', 'pd2u323','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

;

}

}

if (bIE) u326.attachEvent("onmouseout", MouseOutu326);
else u326.addEventListener("mouseout", MouseOutu326, true);
function MouseOutu326(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u326',e)) return;
if (true) {

	SetPanelState('u323', 'pd0u323','none','',500,'none','',500);

;

}

}

var u327 = document.getElementById('u327');
gv_vAlignTable['u327'] = 'center';
var u328 = document.getElementById('u328');

var u329 = document.getElementById('u329');
gv_vAlignTable['u329'] = 'center';
var u330 = document.getElementById('u330');

u330.style.cursor = 'pointer';
if (bIE) u330.attachEvent("onclick", Clicku330);
else u330.addEventListener("click", Clicku330, true);
function Clicku330(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u323', 'pd3u323','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

;

}

}

if (bIE) u330.attachEvent("onmouseout", MouseOutu330);
else u330.addEventListener("mouseout", MouseOutu330, true);
function MouseOutu330(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u330',e)) return;
if (true) {

	SetPanelState('u323', 'pd1u323','none','',500,'none','',500);

;

}

}

var u331 = document.getElementById('u331');
gv_vAlignTable['u331'] = 'center';
var u332 = document.getElementById('u332');

if (bIE) u332.attachEvent("onmouseover", MouseOveru332);
else u332.addEventListener("mouseover", MouseOveru332, true);
function MouseOveru332(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u332',e)) return;
if (true) {

	SetPanelState('u323', 'pd2u323','none','',500,'none','',500);

;

}

}

var u333 = document.getElementById('u333');
gv_vAlignTable['u333'] = 'center';
var u334 = document.getElementById('u334');

if (bIE) u334.attachEvent("onmouseover", MouseOveru334);
else u334.addEventListener("mouseover", MouseOveru334, true);
function MouseOveru334(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u334',e)) return;
if (true) {

	SetPanelState('u323', 'pd3u323','none','',500,'none','',500);

;

}

}

var u335 = document.getElementById('u335');
gv_vAlignTable['u335'] = 'center';
var u336 = document.getElementById('u336');

var u337 = document.getElementById('u337');

var u338 = document.getElementById('u338');
gv_vAlignTable['u338'] = 'center';
var u339 = document.getElementById('u339');

u339.style.cursor = 'pointer';
if (bIE) u339.attachEvent("onclick", Clicku339);
else u339.addEventListener("click", Clicku339, true);
function Clicku339(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u336', 'pd2u336','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

;

}

}

if (bIE) u339.attachEvent("onmouseout", MouseOutu339);
else u339.addEventListener("mouseout", MouseOutu339, true);
function MouseOutu339(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u339',e)) return;
if (true) {

	SetPanelState('u336', 'pd0u336','none','',500,'none','',500);

;

}

}

var u340 = document.getElementById('u340');
gv_vAlignTable['u340'] = 'center';
var u341 = document.getElementById('u341');

var u342 = document.getElementById('u342');
gv_vAlignTable['u342'] = 'center';
var u343 = document.getElementById('u343');

u343.style.cursor = 'pointer';
if (bIE) u343.attachEvent("onclick", Clicku343);
else u343.addEventListener("click", Clicku343, true);
function Clicku343(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u336', 'pd3u336','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

;

}

}

if (bIE) u343.attachEvent("onmouseout", MouseOutu343);
else u343.addEventListener("mouseout", MouseOutu343, true);
function MouseOutu343(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u343',e)) return;
if (true) {

	SetPanelState('u336', 'pd1u336','none','',500,'none','',500);

;

}

}

var u344 = document.getElementById('u344');
gv_vAlignTable['u344'] = 'center';
var u345 = document.getElementById('u345');

if (bIE) u345.attachEvent("onmouseover", MouseOveru345);
else u345.addEventListener("mouseover", MouseOveru345, true);
function MouseOveru345(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u345',e)) return;
if (true) {

	SetPanelState('u336', 'pd2u336','none','',500,'none','',500);

;

}

}

var u346 = document.getElementById('u346');
gv_vAlignTable['u346'] = 'center';
var u347 = document.getElementById('u347');

if (bIE) u347.attachEvent("onmouseover", MouseOveru347);
else u347.addEventListener("mouseover", MouseOveru347, true);
function MouseOveru347(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u347',e)) return;
if (true) {

	SetPanelState('u336', 'pd3u336','none','',500,'none','',500);

;

}

}

var u348 = document.getElementById('u348');
gv_vAlignTable['u348'] = 'center';
var u349 = document.getElementById('u349');

var u350 = document.getElementById('u350');

var u351 = document.getElementById('u351');
gv_vAlignTable['u351'] = 'center';
var u352 = document.getElementById('u352');

u352.style.cursor = 'pointer';
if (bIE) u352.attachEvent("onclick", Clicku352);
else u352.addEventListener("click", Clicku352, true);
function Clicku352(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u349', 'pd1u349','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

;

}

}

if (bIE) u352.attachEvent("onmouseout", MouseOutu352);
else u352.addEventListener("mouseout", MouseOutu352, true);
function MouseOutu352(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u352',e)) return;
if (true) {

	SetPanelState('u349', 'pd2u349','none','',500,'none','',500);

;

}

}

var u353 = document.getElementById('u353');
gv_vAlignTable['u353'] = 'center';
var u354 = document.getElementById('u354');

if (bIE) u354.attachEvent("onmouseover", MouseOveru354);
else u354.addEventListener("mouseover", MouseOveru354, true);
function MouseOveru354(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u354',e)) return;
if (true) {

	SetPanelState('u349', 'pd3u349','none','',500,'none','',500);

;

}

}

var u355 = document.getElementById('u355');
gv_vAlignTable['u355'] = 'center';
var u356 = document.getElementById('u356');

var u357 = document.getElementById('u357');
gv_vAlignTable['u357'] = 'center';
var u358 = document.getElementById('u358');

u358.style.cursor = 'pointer';
if (bIE) u358.attachEvent("onclick", Clicku358);
else u358.addEventListener("click", Clicku358, true);
function Clicku358(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u349', 'pd3u349','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

;

}

}

if (bIE) u358.attachEvent("onmouseout", MouseOutu358);
else u358.addEventListener("mouseout", MouseOutu358, true);
function MouseOutu358(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u358',e)) return;
if (true) {

	SetPanelState('u349', 'pd0u349','none','',500,'none','',500);

;

}

}

var u359 = document.getElementById('u359');
gv_vAlignTable['u359'] = 'center';
var u360 = document.getElementById('u360');

if (bIE) u360.attachEvent("onmouseover", MouseOveru360);
else u360.addEventListener("mouseover", MouseOveru360, true);
function MouseOveru360(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u360',e)) return;
if (true) {

	SetPanelState('u349', 'pd1u349','none','',500,'none','',500);

;

}

}

var u361 = document.getElementById('u361');
gv_vAlignTable['u361'] = 'center';
var u362 = document.getElementById('u362');

var u363 = document.getElementById('u363');

var u364 = document.getElementById('u364');
gv_vAlignTable['u364'] = 'center';
var u365 = document.getElementById('u365');

u365.style.cursor = 'pointer';
if (bIE) u365.attachEvent("onclick", Clicku365);
else u365.addEventListener("click", Clicku365, true);
function Clicku365(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u362', 'pd1u362','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

;

}

}

if (bIE) u365.attachEvent("onmouseout", MouseOutu365);
else u365.addEventListener("mouseout", MouseOutu365, true);
function MouseOutu365(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u365',e)) return;
if (true) {

	SetPanelState('u362', 'pd2u362','none','',500,'none','',500);

;

}

}

var u366 = document.getElementById('u366');
gv_vAlignTable['u366'] = 'center';
var u367 = document.getElementById('u367');

if (bIE) u367.attachEvent("onmouseover", MouseOveru367);
else u367.addEventListener("mouseover", MouseOveru367, true);
function MouseOveru367(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u367',e)) return;
if (true) {

	SetPanelState('u362', 'pd3u362','none','',500,'none','',500);

;

}

}

var u368 = document.getElementById('u368');
gv_vAlignTable['u368'] = 'center';
var u369 = document.getElementById('u369');

var u370 = document.getElementById('u370');
gv_vAlignTable['u370'] = 'center';
var u371 = document.getElementById('u371');

u371.style.cursor = 'pointer';
if (bIE) u371.attachEvent("onclick", Clicku371);
else u371.addEventListener("click", Clicku371, true);
function Clicku371(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u362', 'pd3u362','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

;

}

}

if (bIE) u371.attachEvent("onmouseout", MouseOutu371);
else u371.addEventListener("mouseout", MouseOutu371, true);
function MouseOutu371(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u371',e)) return;
if (true) {

	SetPanelState('u362', 'pd0u362','none','',500,'none','',500);

;

}

}

var u372 = document.getElementById('u372');
gv_vAlignTable['u372'] = 'center';
var u373 = document.getElementById('u373');

if (bIE) u373.attachEvent("onmouseover", MouseOveru373);
else u373.addEventListener("mouseover", MouseOveru373, true);
function MouseOveru373(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u373',e)) return;
if (true) {

	SetPanelState('u362', 'pd1u362','none','',500,'none','',500);

;

}

}

var u374 = document.getElementById('u374');
gv_vAlignTable['u374'] = 'center';
var u375 = document.getElementById('u375');

var u376 = document.getElementById('u376');

var u377 = document.getElementById('u377');
gv_vAlignTable['u377'] = 'center';
var u378 = document.getElementById('u378');

u378.style.cursor = 'pointer';
if (bIE) u378.attachEvent("onclick", Clicku378);
else u378.addEventListener("click", Clicku378, true);
function Clicku378(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u375', 'pd1u375','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

;

}

}

if (bIE) u378.attachEvent("onmouseout", MouseOutu378);
else u378.addEventListener("mouseout", MouseOutu378, true);
function MouseOutu378(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u378',e)) return;
if (true) {

	SetPanelState('u375', 'pd2u375','none','',500,'none','',500);

;

}

}

var u379 = document.getElementById('u379');
gv_vAlignTable['u379'] = 'center';
var u380 = document.getElementById('u380');

if (bIE) u380.attachEvent("onmouseover", MouseOveru380);
else u380.addEventListener("mouseover", MouseOveru380, true);
function MouseOveru380(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u380',e)) return;
if (true) {

	SetPanelState('u375', 'pd3u375','none','',500,'none','',500);

;

}

}

var u381 = document.getElementById('u381');
gv_vAlignTable['u381'] = 'center';
var u382 = document.getElementById('u382');

var u383 = document.getElementById('u383');
gv_vAlignTable['u383'] = 'center';
var u384 = document.getElementById('u384');

u384.style.cursor = 'pointer';
if (bIE) u384.attachEvent("onclick", Clicku384);
else u384.addEventListener("click", Clicku384, true);
function Clicku384(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u375', 'pd3u375','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

;

}

}

if (bIE) u384.attachEvent("onmouseout", MouseOutu384);
else u384.addEventListener("mouseout", MouseOutu384, true);
function MouseOutu384(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u384',e)) return;
if (true) {

	SetPanelState('u375', 'pd0u375','none','',500,'none','',500);

;

}

}

var u385 = document.getElementById('u385');
gv_vAlignTable['u385'] = 'center';
var u386 = document.getElementById('u386');

if (bIE) u386.attachEvent("onmouseover", MouseOveru386);
else u386.addEventListener("mouseover", MouseOveru386, true);
function MouseOveru386(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u386',e)) return;
if (true) {

	SetPanelState('u375', 'pd1u375','none','',500,'none','',500);

;

}

}

var u387 = document.getElementById('u387');
gv_vAlignTable['u387'] = 'center';
var u388 = document.getElementById('u388');

var u389 = document.getElementById('u389');

var u200 = document.getElementById('u200');

var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'center';
var u202 = document.getElementById('u202');

u202.style.cursor = 'pointer';
if (bIE) u202.attachEvent("onclick", Clicku202);
else u202.addEventListener("click", Clicku202, true);
function Clicku202(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u193', 'pd3u193','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

;

}

}

if (bIE) u202.attachEvent("onmouseout", MouseOutu202);
else u202.addEventListener("mouseout", MouseOutu202, true);
function MouseOutu202(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u202',e)) return;
if (true) {

	SetPanelState('u193', 'pd0u193','none','',500,'none','',500);

;

}

}

var u390 = document.getElementById('u390');
gv_vAlignTable['u390'] = 'center';
var u391 = document.getElementById('u391');

u391.style.cursor = 'pointer';
if (bIE) u391.attachEvent("onclick", Clicku391);
else u391.addEventListener("click", Clicku391, true);
function Clicku391(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u388', 'pd1u388','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

;

}

}

if (bIE) u391.attachEvent("onmouseout", MouseOutu391);
else u391.addEventListener("mouseout", MouseOutu391, true);
function MouseOutu391(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u391',e)) return;
if (true) {

	SetPanelState('u388', 'pd2u388','none','',500,'none','',500);

;

}

}

var u392 = document.getElementById('u392');
gv_vAlignTable['u392'] = 'center';
var u393 = document.getElementById('u393');

if (bIE) u393.attachEvent("onmouseover", MouseOveru393);
else u393.addEventListener("mouseover", MouseOveru393, true);
function MouseOveru393(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u393',e)) return;
if (true) {

	SetPanelState('u388', 'pd3u388','none','',500,'none','',500);

;

}

}

var u394 = document.getElementById('u394');
gv_vAlignTable['u394'] = 'center';
var u395 = document.getElementById('u395');

var u396 = document.getElementById('u396');
gv_vAlignTable['u396'] = 'center';
var u397 = document.getElementById('u397');

u397.style.cursor = 'pointer';
if (bIE) u397.attachEvent("onclick", Clicku397);
else u397.addEventListener("click", Clicku397, true);
function Clicku397(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u388', 'pd3u388','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

;

}

}

if (bIE) u397.attachEvent("onmouseout", MouseOutu397);
else u397.addEventListener("mouseout", MouseOutu397, true);
function MouseOutu397(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u397',e)) return;
if (true) {

	SetPanelState('u388', 'pd0u388','none','',500,'none','',500);

;

}

}

var u398 = document.getElementById('u398');
gv_vAlignTable['u398'] = 'center';
var u399 = document.getElementById('u399');

if (bIE) u399.attachEvent("onmouseover", MouseOveru399);
else u399.addEventListener("mouseover", MouseOveru399, true);
function MouseOveru399(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u399',e)) return;
if (true) {

	SetPanelState('u388', 'pd1u388','none','',500,'none','',500);

;

}

}

var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'center';
var u211 = document.getElementById('u211');

if (bIE) u211.attachEvent("onmouseover", MouseOveru211);
else u211.addEventListener("mouseover", MouseOveru211, true);
function MouseOveru211(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u211',e)) return;
if (true) {

	SetPanelState('u206', 'pd3u206','none','',500,'none','',500);

;

}

}

var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'center';
var u213 = document.getElementById('u213');

var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'center';
var u215 = document.getElementById('u215');

u215.style.cursor = 'pointer';
if (bIE) u215.attachEvent("onclick", Clicku215);
else u215.addEventListener("click", Clicku215, true);
function Clicku215(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u206', 'pd3u206','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

;

}

}

if (bIE) u215.attachEvent("onmouseout", MouseOutu215);
else u215.addEventListener("mouseout", MouseOutu215, true);
function MouseOutu215(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u215',e)) return;
if (true) {

	SetPanelState('u206', 'pd0u206','none','',500,'none','',500);

;

}

}

var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'center';
var u217 = document.getElementById('u217');

if (bIE) u217.attachEvent("onmouseover", MouseOveru217);
else u217.addEventListener("mouseover", MouseOveru217, true);
function MouseOveru217(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u217',e)) return;
if (true) {

	SetPanelState('u206', 'pd1u206','none','',500,'none','',500);

;

}

}

var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'center';
var u219 = document.getElementById('u219');

var u220 = document.getElementById('u220');

var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'center';
var u222 = document.getElementById('u222');

u222.style.cursor = 'pointer';
if (bIE) u222.attachEvent("onclick", Clicku222);
else u222.addEventListener("click", Clicku222, true);
function Clicku222(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u219', 'pd1u219','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

;

}

}

if (bIE) u222.attachEvent("onmouseout", MouseOutu222);
else u222.addEventListener("mouseout", MouseOutu222, true);
function MouseOutu222(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u222',e)) return;
if (true) {

	SetPanelState('u219', 'pd2u219','none','',500,'none','',500);

;

}

}

var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'center';
var u224 = document.getElementById('u224');

if (bIE) u224.attachEvent("onmouseover", MouseOveru224);
else u224.addEventListener("mouseover", MouseOveru224, true);
function MouseOveru224(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u224',e)) return;
if (true) {

	SetPanelState('u219', 'pd3u219','none','',500,'none','',500);

;

}

}

var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'center';
var u226 = document.getElementById('u226');

var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'center';
var u228 = document.getElementById('u228');

u228.style.cursor = 'pointer';
if (bIE) u228.attachEvent("onclick", Clicku228);
else u228.addEventListener("click", Clicku228, true);
function Clicku228(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u219', 'pd3u219','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

;

}

}

if (bIE) u228.attachEvent("onmouseout", MouseOutu228);
else u228.addEventListener("mouseout", MouseOutu228, true);
function MouseOutu228(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u228',e)) return;
if (true) {

	SetPanelState('u219', 'pd0u219','none','',500,'none','',500);

;

}

}

var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'center';
var u230 = document.getElementById('u230');

if (bIE) u230.attachEvent("onmouseover", MouseOveru230);
else u230.addEventListener("mouseover", MouseOveru230, true);
function MouseOveru230(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u230',e)) return;
if (true) {

	SetPanelState('u219', 'pd1u219','none','',500,'none','',500);

;

}

}

var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'center';
var u232 = document.getElementById('u232');

var u233 = document.getElementById('u233');

var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'center';
var u235 = document.getElementById('u235');

u235.style.cursor = 'pointer';
if (bIE) u235.attachEvent("onclick", Clicku235);
else u235.addEventListener("click", Clicku235, true);
function Clicku235(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u232', 'pd1u232','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

;

}

}

if (bIE) u235.attachEvent("onmouseout", MouseOutu235);
else u235.addEventListener("mouseout", MouseOutu235, true);
function MouseOutu235(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u235',e)) return;
if (true) {

	SetPanelState('u232', 'pd2u232','none','',500,'none','',500);

;

}

}

var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'center';
var u237 = document.getElementById('u237');

if (bIE) u237.attachEvent("onmouseover", MouseOveru237);
else u237.addEventListener("mouseover", MouseOveru237, true);
function MouseOveru237(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u237',e)) return;
if (true) {

	SetPanelState('u232', 'pd3u232','none','',500,'none','',500);

;

}

}

var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'center';
var u239 = document.getElementById('u239');

var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'center';
var u241 = document.getElementById('u241');

u241.style.cursor = 'pointer';
if (bIE) u241.attachEvent("onclick", Clicku241);
else u241.addEventListener("click", Clicku241, true);
function Clicku241(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u232', 'pd3u232','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

;

}

}

if (bIE) u241.attachEvent("onmouseout", MouseOutu241);
else u241.addEventListener("mouseout", MouseOutu241, true);
function MouseOutu241(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u241',e)) return;
if (true) {

	SetPanelState('u232', 'pd0u232','none','',500,'none','',500);

;

}

}

var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'center';
var u243 = document.getElementById('u243');

if (bIE) u243.attachEvent("onmouseover", MouseOveru243);
else u243.addEventListener("mouseover", MouseOveru243, true);
function MouseOveru243(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u243',e)) return;
if (true) {

	SetPanelState('u232', 'pd1u232','none','',500,'none','',500);

;

}

}

var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'center';
var u245 = document.getElementById('u245');

var u246 = document.getElementById('u246');

var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'center';
var u248 = document.getElementById('u248');

u248.style.cursor = 'pointer';
if (bIE) u248.attachEvent("onclick", Clicku248);
else u248.addEventListener("click", Clicku248, true);
function Clicku248(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u245', 'pd2u245','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

;

}

}

if (bIE) u248.attachEvent("onmouseout", MouseOutu248);
else u248.addEventListener("mouseout", MouseOutu248, true);
function MouseOutu248(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u248',e)) return;
if (true) {

	SetPanelState('u245', 'pd0u245','none','',500,'none','',500);

;

}

}

var u249 = document.getElementById('u249');
gv_vAlignTable['u249'] = 'center';
var u250 = document.getElementById('u250');

var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'center';
var u252 = document.getElementById('u252');

u252.style.cursor = 'pointer';
if (bIE) u252.attachEvent("onclick", Clicku252);
else u252.addEventListener("click", Clicku252, true);
function Clicku252(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u245', 'pd3u245','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

;

}

}

if (bIE) u252.attachEvent("onmouseout", MouseOutu252);
else u252.addEventListener("mouseout", MouseOutu252, true);
function MouseOutu252(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u252',e)) return;
if (true) {

	SetPanelState('u245', 'pd1u245','none','',500,'none','',500);

;

}

}

var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'center';
var u254 = document.getElementById('u254');

if (bIE) u254.attachEvent("onmouseover", MouseOveru254);
else u254.addEventListener("mouseover", MouseOveru254, true);
function MouseOveru254(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u254',e)) return;
if (true) {

	SetPanelState('u245', 'pd2u245','none','',500,'none','',500);

;

}

}

var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'center';
var u256 = document.getElementById('u256');

if (bIE) u256.attachEvent("onmouseover", MouseOveru256);
else u256.addEventListener("mouseover", MouseOveru256, true);
function MouseOveru256(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u256',e)) return;
if (true) {

	SetPanelState('u245', 'pd3u245','none','',500,'none','',500);

;

}

}

var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'center';
var u258 = document.getElementById('u258');

var u259 = document.getElementById('u259');

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
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) < Number('1')) {

	NewWindow("resources/Other.html#other=" + encodeURI("Please select at least one color for printing"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
else
if (true) {

	self.location.href="resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'center';
var u261 = document.getElementById('u261');

u261.style.cursor = 'pointer';
if (bIE) u261.attachEvent("onclick", Clicku261);
else u261.addEventListener("click", Clicku261, true);
function Clicku261(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u258', 'pd1u258','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

;

}

}

if (bIE) u261.attachEvent("onmouseout", MouseOutu261);
else u261.addEventListener("mouseout", MouseOutu261, true);
function MouseOutu261(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u261',e)) return;
if (true) {

	SetPanelState('u258', 'pd2u258','none','',500,'none','',500);

;

}

}

var u262 = document.getElementById('u262');
gv_vAlignTable['u262'] = 'center';
var u263 = document.getElementById('u263');

if (bIE) u263.attachEvent("onmouseover", MouseOveru263);
else u263.addEventListener("mouseover", MouseOveru263, true);
function MouseOveru263(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u263',e)) return;
if (true) {

	SetPanelState('u258', 'pd3u258','none','',500,'none','',500);

;

}

}

var u264 = document.getElementById('u264');
gv_vAlignTable['u264'] = 'center';
var u265 = document.getElementById('u265');

var u266 = document.getElementById('u266');
gv_vAlignTable['u266'] = 'center';
var u267 = document.getElementById('u267');

u267.style.cursor = 'pointer';
if (bIE) u267.attachEvent("onclick", Clicku267);
else u267.addEventListener("click", Clicku267, true);
function Clicku267(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u258', 'pd3u258','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

;

}

}

if (bIE) u267.attachEvent("onmouseout", MouseOutu267);
else u267.addEventListener("mouseout", MouseOutu267, true);
function MouseOutu267(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u267',e)) return;
if (true) {

	SetPanelState('u258', 'pd0u258','none','',500,'none','',500);

;

}

}

var u268 = document.getElementById('u268');
gv_vAlignTable['u268'] = 'center';
var u269 = document.getElementById('u269');

if (bIE) u269.attachEvent("onmouseover", MouseOveru269);
else u269.addEventListener("mouseover", MouseOveru269, true);
function MouseOveru269(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u269',e)) return;
if (true) {

	SetPanelState('u258', 'pd1u258','none','',500,'none','',500);

;

}

}

if (window.OnLoad) OnLoad();
