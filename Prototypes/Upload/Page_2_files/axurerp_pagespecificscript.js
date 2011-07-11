
var PageName = 'Page 2';
var PageId = 'f0ffe613674348049e14b2e5e38823db'
var PageUrl = 'Page_2.html'
document.title = 'Page 2';
var PageNotes = 
{
"pageName":"Page 2",
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
  value = value.replace(/\[\[GenDay\]\]/g, '8');
  value = value.replace(/\[\[GenMonth\]\]/g, '7');
  value = value.replace(/\[\[GenMonthName\]\]/g, 'July');
  value = value.replace(/\[\[GenDayOfWeek\]\]/g, 'Friday');
  value = value.replace(/\[\[GenYear\]\]/g, '2011');
  value = value.replace(/\[\[Day\]\]/g, d.getDate());
  value = value.replace(/\[\[Month\]\]/g, d.getMonth() + 1);
  value = value.replace(/\[\[MonthName\]\]/g, GetMonthString(d.getMonth()));
  value = value.replace(/\[\[DayOfWeek\]\]/g, GetDayString(d.getDay()));
  value = value.replace(/\[\[Year\]\]/g, d.getFullYear());
  return value;
}

function OnLoad(e) {

if (true) {

SetGlobalVariableValue('$colorCount', '0');

}

}

var u270 = document.getElementById('u270');
gv_vAlignTable['u270'] = 'center';
var u271 = document.getElementById('u271');

u271.style.cursor = 'pointer';
if (bIE) u271.attachEvent("onclick", Clicku271);
else u271.addEventListener("click", Clicku271, true);
function Clicku271(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u262', 'pd3u262','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u271.attachEvent("onmouseout", MouseOutu271);
else u271.addEventListener("mouseout", MouseOutu271, true);
function MouseOutu271(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u271',e)) return;
if (true) {

	SetPanelState('u262', 'pd0u262','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u272 = document.getElementById('u272');
gv_vAlignTable['u272'] = 'center';
var u273 = document.getElementById('u273');

if (bIE) u273.attachEvent("onmouseover", MouseOveru273);
else u273.addEventListener("mouseover", MouseOveru273, true);
function MouseOveru273(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u273',e)) return;
if (true) {

	SetPanelState('u262', 'pd1u262','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Light Grey</span></p>');

}

}

var u274 = document.getElementById('u274');
gv_vAlignTable['u274'] = 'center';
var u275 = document.getElementById('u275');

var u276 = document.getElementById('u276');

var u277 = document.getElementById('u277');
gv_vAlignTable['u277'] = 'center';
var u278 = document.getElementById('u278');

u278.style.cursor = 'pointer';
if (bIE) u278.attachEvent("onclick", Clicku278);
else u278.addEventListener("click", Clicku278, true);
function Clicku278(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u275', 'pd1u275','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u278.attachEvent("onmouseout", MouseOutu278);
else u278.addEventListener("mouseout", MouseOutu278, true);
function MouseOutu278(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u278',e)) return;
if (true) {

	SetPanelState('u275', 'pd2u275','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u279 = document.getElementById('u279');
gv_vAlignTable['u279'] = 'center';
var u631 = document.getElementById('u631');

var u632 = document.getElementById('u632');

var u633 = document.getElementById('u633');
gv_vAlignTable['u633'] = 'center';
var u634 = document.getElementById('u634');

u634.style.cursor = 'pointer';
if (bIE) u634.attachEvent("onclick", Clicku634);
else u634.addEventListener("click", Clicku634, true);
function Clicku634(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u631', 'pd1u631','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u634.attachEvent("onmouseout", MouseOutu634);
else u634.addEventListener("mouseout", MouseOutu634, true);
function MouseOutu634(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u634',e)) return;
if (true) {

	SetPanelState('u631', 'pd2u631','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u635 = document.getElementById('u635');
gv_vAlignTable['u635'] = 'center';
var u636 = document.getElementById('u636');

if (bIE) u636.attachEvent("onmouseover", MouseOveru636);
else u636.addEventListener("mouseover", MouseOveru636, true);
function MouseOveru636(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u636',e)) return;
if (true) {

	SetPanelState('u631', 'pd3u631','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Light Blue</span></p>');

}

}

var u637 = document.getElementById('u637');
gv_vAlignTable['u637'] = 'center';
var u638 = document.getElementById('u638');

var u639 = document.getElementById('u639');
gv_vAlignTable['u639'] = 'center';
var u280 = document.getElementById('u280');

if (bIE) u280.attachEvent("onmouseover", MouseOveru280);
else u280.addEventListener("mouseover", MouseOveru280, true);
function MouseOveru280(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u280',e)) return;
if (true) {

	SetPanelState('u275', 'pd3u275','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

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
windowEvent = e;


if (true) {

	SetPanelState('u275', 'pd3u275','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u284.attachEvent("onmouseout", MouseOutu284);
else u284.addEventListener("mouseout", MouseOutu284, true);
function MouseOutu284(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u284',e)) return;
if (true) {

	SetPanelState('u275', 'pd0u275','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u285 = document.getElementById('u285');
gv_vAlignTable['u285'] = 'center';
var u286 = document.getElementById('u286');

if (bIE) u286.attachEvent("onmouseover", MouseOveru286);
else u286.addEventListener("mouseover", MouseOveru286, true);
function MouseOveru286(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u286',e)) return;
if (true) {

	SetPanelState('u275', 'pd1u275','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Grey</span></p>');

}

}

var u287 = document.getElementById('u287');
gv_vAlignTable['u287'] = 'center';
var u288 = document.getElementById('u288');

var u289 = document.getElementById('u289');

var u641 = document.getElementById('u641');
gv_vAlignTable['u641'] = 'center';
var u642 = document.getElementById('u642');

if (bIE) u642.attachEvent("onmouseover", MouseOveru642);
else u642.addEventListener("mouseover", MouseOveru642, true);
function MouseOveru642(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u642',e)) return;
if (true) {

	SetPanelState('u631', 'pd1u631','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Light Blue</span></p>');

}

}

var u643 = document.getElementById('u643');
gv_vAlignTable['u643'] = 'center';
var u644 = document.getElementById('u644');

var u645 = document.getElementById('u645');

var u646 = document.getElementById('u646');
gv_vAlignTable['u646'] = 'center';
var u647 = document.getElementById('u647');

u647.style.cursor = 'pointer';
if (bIE) u647.attachEvent("onclick", Clicku647);
else u647.addEventListener("click", Clicku647, true);
function Clicku647(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u644', 'pd1u644','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u647.attachEvent("onmouseout", MouseOutu647);
else u647.addEventListener("mouseout", MouseOutu647, true);
function MouseOutu647(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u647',e)) return;
if (true) {

	SetPanelState('u644', 'pd2u644','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u648 = document.getElementById('u648');
gv_vAlignTable['u648'] = 'center';
var u490 = document.getElementById('u490');
gv_vAlignTable['u490'] = 'center';
var u491 = document.getElementById('u491');

u491.style.cursor = 'pointer';
if (bIE) u491.attachEvent("onclick", Clicku491);
else u491.addEventListener("click", Clicku491, true);
function Clicku491(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u488', 'pd1u488','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u491.attachEvent("onmouseout", MouseOutu491);
else u491.addEventListener("mouseout", MouseOutu491, true);
function MouseOutu491(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u491',e)) return;
if (true) {

	SetPanelState('u488', 'pd2u488','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u492 = document.getElementById('u492');
gv_vAlignTable['u492'] = 'center';
var u493 = document.getElementById('u493');

if (bIE) u493.attachEvent("onmouseover", MouseOveru493);
else u493.addEventListener("mouseover", MouseOveru493, true);
function MouseOveru493(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u493',e)) return;
if (true) {

	SetPanelState('u488', 'pd3u488','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Gold</span></p>');

}

}

var u494 = document.getElementById('u494');
gv_vAlignTable['u494'] = 'center';
var u495 = document.getElementById('u495');

var u496 = document.getElementById('u496');
gv_vAlignTable['u496'] = 'center';
var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'center';
var u101 = document.getElementById('u101');

var u102 = document.getElementById('u102');

var u290 = document.getElementById('u290');
gv_vAlignTable['u290'] = 'center';
var u291 = document.getElementById('u291');

u291.style.cursor = 'pointer';
if (bIE) u291.attachEvent("onclick", Clicku291);
else u291.addEventListener("click", Clicku291, true);
function Clicku291(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u288', 'pd1u288','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u291.attachEvent("onmouseout", MouseOutu291);
else u291.addEventListener("mouseout", MouseOutu291, true);
function MouseOutu291(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u291',e)) return;
if (true) {

	SetPanelState('u288', 'pd2u288','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u292 = document.getElementById('u292');
gv_vAlignTable['u292'] = 'center';
var u293 = document.getElementById('u293');

if (bIE) u293.attachEvent("onmouseover", MouseOveru293);
else u293.addEventListener("mouseover", MouseOveru293, true);
function MouseOveru293(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u293',e)) return;
if (true) {

	SetPanelState('u288', 'pd3u288','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">White</span></p>');

}

}

var u294 = document.getElementById('u294');
gv_vAlignTable['u294'] = 'center';
var u295 = document.getElementById('u295');

var u296 = document.getElementById('u296');
gv_vAlignTable['u296'] = 'center';
var u297 = document.getElementById('u297');

u297.style.cursor = 'pointer';
if (bIE) u297.attachEvent("onclick", Clicku297);
else u297.addEventListener("click", Clicku297, true);
function Clicku297(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u288', 'pd3u288','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u297.attachEvent("onmouseout", MouseOutu297);
else u297.addEventListener("mouseout", MouseOutu297, true);
function MouseOutu297(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u297',e)) return;
if (true) {

	SetPanelState('u288', 'pd0u288','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u298 = document.getElementById('u298');
gv_vAlignTable['u298'] = 'center';
var u299 = document.getElementById('u299');

if (bIE) u299.attachEvent("onmouseover", MouseOveru299);
else u299.addEventListener("mouseover", MouseOveru299, true);
function MouseOveru299(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u299',e)) return;
if (true) {

	SetPanelState('u288', 'pd1u288','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">White</span></p>');

}

}

var u651 = document.getElementById('u651');

var u652 = document.getElementById('u652');
gv_vAlignTable['u652'] = 'center';
var u653 = document.getElementById('u653');

u653.style.cursor = 'pointer';
if (bIE) u653.attachEvent("onclick", Clicku653);
else u653.addEventListener("click", Clicku653, true);
function Clicku653(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u644', 'pd3u644','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u653.attachEvent("onmouseout", MouseOutu653);
else u653.addEventListener("mouseout", MouseOutu653, true);
function MouseOutu653(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u653',e)) return;
if (true) {

	SetPanelState('u644', 'pd0u644','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u654 = document.getElementById('u654');
gv_vAlignTable['u654'] = 'center';
var u655 = document.getElementById('u655');

if (bIE) u655.attachEvent("onmouseover", MouseOveru655);
else u655.addEventListener("mouseover", MouseOveru655, true);
function MouseOveru655(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u655',e)) return;
if (true) {

	SetPanelState('u644', 'pd1u644','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Lucida Grande;font-size:11px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">Turquoise</span></p>');

}

}

var u656 = document.getElementById('u656');
gv_vAlignTable['u656'] = 'center';
var u657 = document.getElementById('u657');

var u658 = document.getElementById('u658');

var u659 = document.getElementById('u659');
gv_vAlignTable['u659'] = 'center';
var u9 = document.getElementById('u9');

var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'center';
var u111 = document.getElementById('u111');

var u112 = document.getElementById('u112');

var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'center';
var u114 = document.getElementById('u114');

u114.style.cursor = 'pointer';
if (bIE) u114.attachEvent("onclick", Clicku114);
else u114.addEventListener("click", Clicku114, true);
function Clicku114(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u114');
}

}

if (bIE) u114.attachEvent("onmouseover", MouseOveru114);
else u114.addEventListener("mouseover", MouseOveru114, true);
function MouseOveru114(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u114',e)) return;
if (true) {

	SetPanelState('u111', 'pd1u111','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Magenta</span></p>');

}

}

if (bIE) u114.attachEvent("onmouseout", MouseOutu114);
else u114.addEventListener("mouseout", MouseOutu114, true);
function MouseOutu114(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u114',e)) return;
if (true) {

	SetPanelState('u111', 'pd1u111','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'center';
var u116 = document.getElementById('u116');

var u117 = document.getElementById('u117');

var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'center';
var u119 = document.getElementById('u119');

u119.style.cursor = 'pointer';
if (bIE) u119.attachEvent("onclick", Clicku119);
else u119.addEventListener("click", Clicku119, true);
function Clicku119(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u119');
}

}

if (bIE) u119.attachEvent("onmouseover", MouseOveru119);
else u119.addEventListener("mouseover", MouseOveru119, true);
function MouseOveru119(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u119',e)) return;
if (true) {

	SetPanelState('u116', 'pd1u116','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Orange</span></p>');

}

}

if (bIE) u119.attachEvent("onmouseout", MouseOutu119);
else u119.addEventListener("mouseout", MouseOutu119, true);
function MouseOutu119(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u119',e)) return;
if (true) {

	SetPanelState('u116', 'pd0u116','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u660 = document.getElementById('u660');

u660.style.cursor = 'pointer';
if (bIE) u660.attachEvent("onclick", Clicku660);
else u660.addEventListener("click", Clicku660, true);
function Clicku660(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u657', 'pd1u657','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u660.attachEvent("onmouseout", MouseOutu660);
else u660.addEventListener("mouseout", MouseOutu660, true);
function MouseOutu660(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u660',e)) return;
if (true) {

	SetPanelState('u657', 'pd2u657','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u661 = document.getElementById('u661');
gv_vAlignTable['u661'] = 'center';
var u662 = document.getElementById('u662');

if (bIE) u662.attachEvent("onmouseover", MouseOveru662);
else u662.addEventListener("mouseover", MouseOveru662, true);
function MouseOveru662(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u662',e)) return;
if (true) {

	SetPanelState('u657', 'pd3u657','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Dark Purple</span></p>');

}

}

var u663 = document.getElementById('u663');
gv_vAlignTable['u663'] = 'center';
var u664 = document.getElementById('u664');

var u665 = document.getElementById('u665');
gv_vAlignTable['u665'] = 'center';
var u666 = document.getElementById('u666');

u666.style.cursor = 'pointer';
if (bIE) u666.attachEvent("onclick", Clicku666);
else u666.addEventListener("click", Clicku666, true);
function Clicku666(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u657', 'pd3u657','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u666.attachEvent("onmouseout", MouseOutu666);
else u666.addEventListener("mouseout", MouseOutu666, true);
function MouseOutu666(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u666',e)) return;
if (true) {

	SetPanelState('u657', 'pd0u657','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u667 = document.getElementById('u667');
gv_vAlignTable['u667'] = 'center';
var u668 = document.getElementById('u668');

if (bIE) u668.attachEvent("onmouseover", MouseOveru668);
else u668.addEventListener("mouseover", MouseOveru668, true);
function MouseOveru668(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u668',e)) return;
if (true) {

	SetPanelState('u657', 'pd1u657','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Dark Purple</span></p>');

}

}

var u669 = document.getElementById('u669');
gv_vAlignTable['u669'] = 'center';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u32 = document.getElementById('u32');

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u34 = document.getElementById('u34');

u34.style.cursor = 'pointer';
if (bIE) u34.attachEvent("onclick", Clicku34);
else u34.addEventListener("click", Clicku34, true);
function Clicku34(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u36','','none',500);

	SetPanelState('u43', 'pd2u43','none','',500,'none','',500);

	SetPanelState('u13', 'pd3u13','none','',500,'none','',500);

SetWidgetSelected('u64');
SetWidgetNotSelected('u79');
SetGlobalVariableValue('$colorCount', '1');

SetCheckState('u716', false);

SetGlobalVariableValue('$printOption', 'single');

SetGlobalVariableValue('$showWhite', 'no');

	MoveWidgetTo('u32', 2,50,'none',500);

	MoveWidgetTo('u38', 2,110,'none',500);

	MoveWidgetTo('u43', 160,245,'none',500);

	SetPanelVisibility('u28','hidden','none',500);

	SetPanelVisibility('u41','hidden','none',500);

}

}

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
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
windowEvent = e;


if (true) {

SetWidgetSelected('u124');
}

}

if (bIE) u124.attachEvent("onmouseover", MouseOveru124);
else u124.addEventListener("mouseover", MouseOveru124, true);
function MouseOveru124(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u124',e)) return;
if (true) {

	SetPanelState('u121', 'pd1u121','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Light Orange</span></p>');

}

}

if (bIE) u124.attachEvent("onmouseout", MouseOutu124);
else u124.addEventListener("mouseout", MouseOutu124, true);
function MouseOutu124(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u124',e)) return;
if (true) {

	SetPanelState('u121', 'pd0u121','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'center';
var u126 = document.getElementById('u126');

var u127 = document.getElementById('u127');

var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'center';
var u129 = document.getElementById('u129');

u129.style.cursor = 'pointer';
if (bIE) u129.attachEvent("onclick", Clicku129);
else u129.addEventListener("click", Clicku129, true);
function Clicku129(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u129');
}

}

if (bIE) u129.attachEvent("onmouseover", MouseOveru129);
else u129.addEventListener("mouseover", MouseOveru129, true);
function MouseOveru129(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u129',e)) return;
if (true) {

	SetPanelState('u126', 'pd1u126','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Athletic Gold</span></p>');

}

}

if (bIE) u129.attachEvent("onmouseout", MouseOutu129);
else u129.addEventListener("mouseout", MouseOutu129, true);
function MouseOutu129(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u129',e)) return;
if (true) {

	SetPanelState('u126', 'pd0u126','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u670 = document.getElementById('u670');

var u671 = document.getElementById('u671');

var u672 = document.getElementById('u672');
gv_vAlignTable['u672'] = 'center';
var u673 = document.getElementById('u673');

u673.style.cursor = 'pointer';
if (bIE) u673.attachEvent("onclick", Clicku673);
else u673.addEventListener("click", Clicku673, true);
function Clicku673(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u670', 'pd1u670','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u673.attachEvent("onmouseout", MouseOutu673);
else u673.addEventListener("mouseout", MouseOutu673, true);
function MouseOutu673(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u673',e)) return;
if (true) {

	SetPanelState('u670', 'pd2u670','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u674 = document.getElementById('u674');
gv_vAlignTable['u674'] = 'center';
var u675 = document.getElementById('u675');

if (bIE) u675.attachEvent("onmouseover", MouseOveru675);
else u675.addEventListener("mouseover", MouseOveru675, true);
function MouseOveru675(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u675',e)) return;
if (true) {

	SetPanelState('u670', 'pd3u670','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Bright Purple</span></p>');

}

}

var u676 = document.getElementById('u676');
gv_vAlignTable['u676'] = 'center';
var u677 = document.getElementById('u677');

var u678 = document.getElementById('u678');
gv_vAlignTable['u678'] = 'center';
var u679 = document.getElementById('u679');

u679.style.cursor = 'pointer';
if (bIE) u679.attachEvent("onclick", Clicku679);
else u679.addEventListener("click", Clicku679, true);
function Clicku679(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u670', 'pd3u670','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u679.attachEvent("onmouseout", MouseOutu679);
else u679.addEventListener("mouseout", MouseOutu679, true);
function MouseOutu679(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u679',e)) return;
if (true) {

	SetPanelState('u670', 'pd0u670','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u41 = document.getElementById('u41');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u43 = document.getElementById('u43');

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'center';
var u131 = document.getElementById('u131');

var u132 = document.getElementById('u132');

var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'center';
var u690 = document.getElementById('u690');

var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'center';
var u136 = document.getElementById('u136');

var u137 = document.getElementById('u137');

var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'center';
var u139 = document.getElementById('u139');

u139.style.cursor = 'pointer';
if (bIE) u139.attachEvent("onclick", Clicku139);
else u139.addEventListener("click", Clicku139, true);
function Clicku139(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u139');
}

}

if (bIE) u139.attachEvent("onmouseover", MouseOveru139);
else u139.addEventListener("mouseover", MouseOveru139, true);
function MouseOveru139(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u139',e)) return;
if (true) {

	SetPanelState('u136', 'pd1u136','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Brown</span></p>');

}

}

if (bIE) u139.attachEvent("onmouseout", MouseOutu139);
else u139.addEventListener("mouseout", MouseOutu139, true);
function MouseOutu139(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u139',e)) return;
if (true) {

	SetPanelState('u136', 'pd0u136','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u680 = document.getElementById('u680');
gv_vAlignTable['u680'] = 'center';
var u681 = document.getElementById('u681');

if (bIE) u681.attachEvent("onmouseover", MouseOveru681);
else u681.addEventListener("mouseover", MouseOveru681, true);
function MouseOveru681(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u681',e)) return;
if (true) {

	SetPanelState('u670', 'pd1u670','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Bright Purple</span></p>');

}

}

var u682 = document.getElementById('u682');
gv_vAlignTable['u682'] = 'center';
var u683 = document.getElementById('u683');

var u684 = document.getElementById('u684');

var u685 = document.getElementById('u685');
gv_vAlignTable['u685'] = 'center';
var u686 = document.getElementById('u686');

u686.style.cursor = 'pointer';
if (bIE) u686.attachEvent("onclick", Clicku686);
else u686.addEventListener("click", Clicku686, true);
function Clicku686(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u683', 'pd1u683','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u686.attachEvent("onmouseout", MouseOutu686);
else u686.addEventListener("mouseout", MouseOutu686, true);
function MouseOutu686(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u686',e)) return;
if (true) {

	SetPanelState('u683', 'pd2u683','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u687 = document.getElementById('u687');
gv_vAlignTable['u687'] = 'center';
var u688 = document.getElementById('u688');

if (bIE) u688.attachEvent("onmouseover", MouseOveru688);
else u688.addEventListener("mouseover", MouseOveru688, true);
function MouseOveru688(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u688',e)) return;
if (true) {

	SetPanelState('u683', 'pd3u683','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Bright Purple</span></p>');

}

}

var u689 = document.getElementById('u689');
gv_vAlignTable['u689'] = 'center';
var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u52 = document.getElementById('u52');

var u53 = document.getElementById('u53');

u53.style.cursor = 'pointer';
if (bIE) u53.attachEvent("onclick", Clicku53);
else u53.addEventListener("click", Clicku53, true);
function Clicku53(e)
{
windowEvent = e;


if ((GetCheckState('u26')) == (true)) {

	SetPanelState('u43', 'pd0u43','none','',500,'none','',500);

}
else
if ((GetCheckState('u39')) == (true)) {

	SetPanelState('u43', 'pd1u43','none','',500,'none','',500);

}
else
if (true) {

	SetPanelVisibility('u43','hidden','none',500);

}

}
gv_vAlignTable['u53'] = 'top';
var u54 = document.getElementById('u54');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
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

SetWidgetSelected('u144');
}

}

if (bIE) u144.attachEvent("onmouseover", MouseOveru144);
else u144.addEventListener("mouseover", MouseOveru144, true);
function MouseOveru144(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u144',e)) return;
if (true) {

	SetPanelState('u141', 'pd1u141','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Old Gold</span></p>');

}

}

if (bIE) u144.attachEvent("onmouseout", MouseOutu144);
else u144.addEventListener("mouseout", MouseOutu144, true);
function MouseOutu144(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u144',e)) return;
if (true) {

	SetPanelState('u141', 'pd0u141','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'center';
var u146 = document.getElementById('u146');

var u147 = document.getElementById('u147');

var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'center';
var u500 = document.getElementById('u500');
gv_vAlignTable['u500'] = 'center';
var u501 = document.getElementById('u501');

var u502 = document.getElementById('u502');

var u503 = document.getElementById('u503');
gv_vAlignTable['u503'] = 'center';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u11 = document.getElementById('u11');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u13 = document.getElementById('u13');

var u14 = document.getElementById('u14');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u16 = document.getElementById('u16');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u18 = document.getElementById('u18');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u64 = document.getElementById('u64');

u64.style.cursor = 'pointer';
if (bIE) u64.attachEvent("onclick", Clicku64);
else u64.addEventListener("click", Clicku64, true);
function Clicku64(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u64');
}

}

if (bIE) u64.attachEvent("onmouseover", MouseOveru64);
else u64.addEventListener("mouseover", MouseOveru64, true);
function MouseOveru64(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u64',e)) return;
if (true) {

	SetPanelState('u56', 'pd1u56','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Black</span></p>');

}

}

if (bIE) u64.attachEvent("onmouseout", MouseOutu64);
else u64.addEventListener("mouseout", MouseOutu64, true);
function MouseOutu64(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u64',e)) return;
if (true) {

	SetPanelState('u56', 'pd1u56','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'center';
var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'center';
var u154 = document.getElementById('u154');

u154.style.cursor = 'pointer';
if (bIE) u154.attachEvent("onclick", Clicku154);
else u154.addEventListener("click", Clicku154, true);
function Clicku154(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u154');
}

}

if (bIE) u154.attachEvent("onmouseover", MouseOveru154);
else u154.addEventListener("mouseover", MouseOveru154, true);
function MouseOveru154(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u154',e)) return;
if (true) {

	SetPanelState('u151', 'pd1u151','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Gold</span></p>');

}

}

if (bIE) u154.attachEvent("onmouseout", MouseOutu154);
else u154.addEventListener("mouseout", MouseOutu154, true);
function MouseOutu154(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u154',e)) return;
if (true) {

	SetPanelState('u151', 'pd0u151','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'center';
var u156 = document.getElementById('u156');

var u157 = document.getElementById('u157');

var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'center';
var u510 = document.getElementById('u510');

u510.style.cursor = 'pointer';
if (bIE) u510.attachEvent("onclick", Clicku510);
else u510.addEventListener("click", Clicku510, true);
function Clicku510(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u501', 'pd3u501','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u510.attachEvent("onmouseout", MouseOutu510);
else u510.addEventListener("mouseout", MouseOutu510, true);
function MouseOutu510(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u510',e)) return;
if (true) {

	SetPanelState('u501', 'pd0u501','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u511 = document.getElementById('u511');
gv_vAlignTable['u511'] = 'center';
var u512 = document.getElementById('u512');

if (bIE) u512.attachEvent("onmouseover", MouseOveru512);
else u512.addEventListener("mouseover", MouseOveru512, true);
function MouseOveru512(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u512',e)) return;
if (true) {

	SetPanelState('u501', 'pd1u501','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Yellow</span></p>');

}

}

var u513 = document.getElementById('u513');
gv_vAlignTable['u513'] = 'center';
var u20 = document.getElementById('u20');

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u22 = document.getElementById('u22');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u24 = document.getElementById('u24');

var u25 = document.getElementById('u25');

var u26 = document.getElementById('u26');

u26.style.cursor = 'pointer';
if (bIE) u26.attachEvent("onclick", Clicku26);
else u26.addEventListener("click", Clicku26, true);
function Clicku26(e)
{
windowEvent = e;


if (((GetCheckState('u26')) == (true)) && ((GetCheckState('u716')) == (true))) {

	MoveWidgetTo('u32', 2,128,'none',500);

	MoveWidgetTo('u38', 2,165,'none',500);

	MoveWidgetTo('u43', 160,300,'none',500);

SetGlobalVariableValue('$colorCount', '1');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

SetGlobalVariableValue('$printOption', 'multi');

SetCheckState('u716', true);

SetGlobalVariableValue('$showWhite', 'yes');

	SetPanelVisibility('u28','','none',500);

	SetPanelState('u13', 'pd1u13','none','',500,'none','',500);

	SetPanelState('u43', 'pd0u43','none','',500,'none','',500);

	SetPanelState('u249', 'pd0u249','none','',500,'none','',500);

	SetPanelState('u262', 'pd0u262','none','',500,'none','',500);

	SetPanelState('u275', 'pd0u275','none','',500,'none','',500);

	SetPanelState('u288', 'pd2u288','none','',500,'none','',500);

	SetPanelState('u301', 'pd0u301','none','',500,'none','',500);

	SetPanelState('u314', 'pd0u314','none','',500,'none','',500);

	SetPanelState('u327', 'pd0u327','none','',500,'none','',500);

	SetPanelState('u340', 'pd0u340','none','',500,'none','',500);

	SetPanelState('u353', 'pd0u353','none','',500,'none','',500);

	SetPanelState('u418', 'pd0u418','none','',500,'none','',500);

	SetPanelState('u405', 'pd0u405','none','',500,'none','',500);

	SetPanelState('u392', 'pd0u392','none','',500,'none','',500);

	SetPanelState('u431', 'pd0u431','none','',500,'none','',500);

	SetPanelState('u444', 'pd0u444','none','',500,'none','',500);

	SetPanelState('u457', 'pd0u457','none','',500,'none','',500);

	SetPanelState('u470', 'pd0u470','none','',500,'none','',500);

	SetPanelState('u488', 'pd0u488','none','',500,'none','',500);

	SetPanelState('u501', 'pd0u501','none','',500,'none','',500);

	SetPanelState('u514', 'pd0u514','none','',500,'none','',500);

	SetPanelState('u527', 'pd0u527','none','',500,'none','',500);

	SetPanelState('u540', 'pd0u540','none','',500,'none','',500);

	SetPanelState('u566', 'pd0u566','none','',500,'none','',500);

	SetPanelState('u579', 'pd0u579','none','',500,'none','',500);

	SetPanelVisibility('u36','hidden','none',500);

	SetPanelVisibility('u41','hidden','none',500);

}
else
if (((GetCheckState('u716')) == (false)) && ((GetCheckState('u26')) == (true))) {

	MoveWidgetTo('u32', 2,128,'none',500);

	MoveWidgetTo('u38', 2,165,'none',500);

	MoveWidgetTo('u43', 160,300,'none',500);

SetGlobalVariableValue('$colorCount', '0');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">0 colors selected</span></p>');

SetGlobalVariableValue('$printOption', 'multi');

SetGlobalVariableValue('$showWhite', 'no');

	SetPanelVisibility('u28','','none',500);

	SetPanelVisibility('u715','','none',500);

	SetPanelState('u13', 'pd0u13','none','',500,'none','',500);

	SetPanelState('u43', 'pd0u43','none','',500,'none','',500);

	SetPanelState('u249', 'pd0u249','none','',500,'none','',500);

	SetPanelState('u262', 'pd0u262','none','',500,'none','',500);

	SetPanelState('u275', 'pd0u275','none','',500,'none','',500);

	SetPanelState('u288', 'pd0u288','none','',500,'none','',500);

	SetPanelState('u301', 'pd0u301','none','',500,'none','',500);

	SetPanelState('u314', 'pd0u314','none','',500,'none','',500);

	SetPanelState('u327', 'pd0u327','none','',500,'none','',500);

	SetPanelState('u340', 'pd0u340','none','',500,'none','',500);

	SetPanelState('u353', 'pd0u353','none','',500,'none','',500);

	SetPanelState('u418', 'pd0u418','none','',500,'none','',500);

	SetPanelState('u405', 'pd0u405','none','',500,'none','',500);

	SetPanelState('u392', 'pd0u392','none','',500,'none','',500);

	SetPanelState('u431', 'pd0u431','none','',500,'none','',500);

	SetPanelState('u444', 'pd0u444','none','',500,'none','',500);

	SetPanelState('u457', 'pd0u457','none','',500,'none','',500);

	SetPanelState('u470', 'pd0u470','none','',500,'none','',500);

	SetPanelState('u488', 'pd0u488','none','',500,'none','',500);

	SetPanelState('u501', 'pd0u501','none','',500,'none','',500);

	SetPanelState('u514', 'pd0u514','none','',500,'none','',500);

	SetPanelState('u527', 'pd0u527','none','',500,'none','',500);

	SetPanelState('u540', 'pd0u540','none','',500,'none','',500);

	SetPanelState('u566', 'pd0u566','none','',500,'none','',500);

	SetPanelState('u579', 'pd0u579','none','',500,'none','',500);

	SetPanelVisibility('u36','hidden','none',500);

	SetPanelVisibility('u41','hidden','none',500);

}

}

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u28 = document.getElementById('u28');

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'top';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'center';
var u71 = document.getElementById('u71');

var u72 = document.getElementById('u72');

var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'center';
var u74 = document.getElementById('u74');

u74.style.cursor = 'pointer';
if (bIE) u74.attachEvent("onclick", Clicku74);
else u74.addEventListener("click", Clicku74, true);
function Clicku74(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u74');
}

}

if (bIE) u74.attachEvent("onmouseover", MouseOveru74);
else u74.addEventListener("mouseover", MouseOveru74, true);
function MouseOveru74(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u74',e)) return;
if (true) {

	SetPanelState('u71', 'pd1u71','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Light Grey</span></p>');

}

}

if (bIE) u74.attachEvent("onmouseout", MouseOutu74);
else u74.addEventListener("mouseout", MouseOutu74, true);
function MouseOutu74(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u74',e)) return;
if (true) {

	SetPanelState('u71', 'pd0u71','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u164 = document.getElementById('u164');

u164.style.cursor = 'pointer';
if (bIE) u164.attachEvent("onclick", Clicku164);
else u164.addEventListener("click", Clicku164, true);
function Clicku164(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u164');
}

}

if (bIE) u164.attachEvent("onmouseover", MouseOveru164);
else u164.addEventListener("mouseover", MouseOveru164, true);
function MouseOveru164(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u164',e)) return;
if (true) {

	SetPanelState('u161', 'pd1u161','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Lemon</span></p>');

}

}

if (bIE) u164.attachEvent("onmouseout", MouseOutu164);
else u164.addEventListener("mouseout", MouseOutu164, true);
function MouseOutu164(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u164',e)) return;
if (true) {

	SetPanelState('u161', 'pd1u161','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'center';
var u166 = document.getElementById('u166');

var u79 = document.getElementById('u79');

u79.style.cursor = 'pointer';
if (bIE) u79.attachEvent("onclick", Clicku79);
else u79.addEventListener("click", Clicku79, true);
function Clicku79(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u79');
}

}

if (bIE) u79.attachEvent("onmouseover", MouseOveru79);
else u79.addEventListener("mouseover", MouseOveru79, true);
function MouseOveru79(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u79',e)) return;
if (true) {

	SetPanelState('u76', 'pd1u76','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> White</span></p>');

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

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'center';
var u520 = document.getElementById('u520');
gv_vAlignTable['u520'] = 'center';
var u521 = document.getElementById('u521');

var u522 = document.getElementById('u522');
gv_vAlignTable['u522'] = 'center';
var u523 = document.getElementById('u523');

u523.style.cursor = 'pointer';
if (bIE) u523.attachEvent("onclick", Clicku523);
else u523.addEventListener("click", Clicku523, true);
function Clicku523(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u514', 'pd3u514','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u523.attachEvent("onmouseout", MouseOutu523);
else u523.addEventListener("mouseout", MouseOutu523, true);
function MouseOutu523(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u523',e)) return;
if (true) {

	SetPanelState('u514', 'pd0u514','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u30 = document.getElementById('u30');

u30.style.cursor = 'pointer';
if (bIE) u30.attachEvent("onclick", Clicku30);
else u30.addEventListener("click", Clicku30, true);
function Clicku30(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u43', 'pd3u43','none','',500,'none','',500);

}

}

var u525 = document.getElementById('u525');

if (bIE) u525.attachEvent("onmouseover", MouseOveru525);
else u525.addEventListener("mouseover", MouseOveru525, true);
function MouseOveru525(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u525',e)) return;
if (true) {

	SetPanelState('u514', 'pd1u514','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Lemon</span></p>');

}

}

var u526 = document.getElementById('u526');
gv_vAlignTable['u526'] = 'center';
var u527 = document.getElementById('u527');

var u528 = document.getElementById('u528');

var u529 = document.getElementById('u529');
gv_vAlignTable['u529'] = 'center';
var u36 = document.getElementById('u36');

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u38 = document.getElementById('u38');

var u39 = document.getElementById('u39');

u39.style.cursor = 'pointer';
if (bIE) u39.attachEvent("onclick", Clicku39);
else u39.addEventListener("click", Clicku39, true);
function Clicku39(e)
{
windowEvent = e;


if ((GetCheckState('u716')) == (true)) {

SetGlobalVariableValue('$colorCount', '8');

SetGlobalVariableValue('$printOption', 'full');

	SetPanelVisibility('u41','','none',500);

	SetPanelState('u43', 'pd1u43','none','',500,'none','',500);

	SetPanelState('u13', 'pd1u13','none','',500,'none','',500);

	SetPanelVisibility('u28','hidden','none',500);

	SetPanelVisibility('u36','hidden','none',500);

	MoveWidgetTo('u32', 2,50,'none',500);

	MoveWidgetTo('u38', 2,80,'none',500);

	MoveWidgetTo('u43', 160,235,'none',500);

}
else
if (true) {

SetGlobalVariableValue('$colorCount', '8');

SetGlobalVariableValue('$printOption', 'full');

SetGlobalVariableValue('$showWhite', 'no');

	SetPanelState('u43', 'pd1u43','none','',500,'none','',500);

	SetPanelState('u13', 'pd0u13','none','',500,'none','',500);

	SetPanelVisibility('u28','hidden','none',500);

	SetPanelVisibility('u36','hidden','none',500);

	SetPanelVisibility('u41','','none',500);

	MoveWidgetTo('u32', 2,50,'none',500);

	MoveWidgetTo('u38', 2,80,'none',500);

	MoveWidgetTo('u43', 160,235,'none',500);

}

}

var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'center';
var u81 = document.getElementById('u81');

var u82 = document.getElementById('u82');

var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'center';
var u84 = document.getElementById('u84');

u84.style.cursor = 'pointer';
if (bIE) u84.attachEvent("onclick", Clicku84);
else u84.addEventListener("click", Clicku84, true);
function Clicku84(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u84');
}

}

if (bIE) u84.attachEvent("onmouseover", MouseOveru84);
else u84.addEventListener("mouseover", MouseOveru84, true);
function MouseOveru84(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u84',e)) return;
if (true) {

	SetPanelState('u81', 'pd1u81','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Cardinal</span></p>');

}

}

if (bIE) u84.attachEvent("onmouseout", MouseOutu84);
else u84.addEventListener("mouseout", MouseOutu84, true);
function MouseOutu84(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u84',e)) return;
if (true) {

	SetPanelState('u81', 'pd0u81','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'center';
var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'center';
var u176 = document.getElementById('u176');

var u177 = document.getElementById('u177');

var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'center';
var u530 = document.getElementById('u530');

u530.style.cursor = 'pointer';
if (bIE) u530.attachEvent("onclick", Clicku530);
else u530.addEventListener("click", Clicku530, true);
function Clicku530(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u527', 'pd1u527','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u530.attachEvent("onmouseout", MouseOutu530);
else u530.addEventListener("mouseout", MouseOutu530, true);
function MouseOutu530(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u530',e)) return;
if (true) {

	SetPanelState('u527', 'pd2u527','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u531 = document.getElementById('u531');
gv_vAlignTable['u531'] = 'center';
var u532 = document.getElementById('u532');

if (bIE) u532.attachEvent("onmouseover", MouseOveru532);
else u532.addEventListener("mouseover", MouseOveru532, true);
function MouseOveru532(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u532',e)) return;
if (true) {

	SetPanelState('u527', 'pd3u527','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Forest</span></p>');

}

}

var u533 = document.getElementById('u533');
gv_vAlignTable['u533'] = 'center';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u535 = document.getElementById('u535');
gv_vAlignTable['u535'] = 'center';
var u536 = document.getElementById('u536');

u536.style.cursor = 'pointer';
if (bIE) u536.attachEvent("onclick", Clicku536);
else u536.addEventListener("click", Clicku536, true);
function Clicku536(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u527', 'pd3u527','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u536.attachEvent("onmouseout", MouseOutu536);
else u536.addEventListener("mouseout", MouseOutu536, true);
function MouseOutu536(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u536',e)) return;
if (true) {

	SetPanelState('u527', 'pd0u527','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u537 = document.getElementById('u537');
gv_vAlignTable['u537'] = 'center';
var u538 = document.getElementById('u538');

if (bIE) u538.attachEvent("onmouseover", MouseOveru538);
else u538.addEventListener("mouseover", MouseOveru538, true);
function MouseOveru538(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u538',e)) return;
if (true) {

	SetPanelState('u527', 'pd1u527','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Forest</span></p>');

}

}

var u539 = document.getElementById('u539');
gv_vAlignTable['u539'] = 'center';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'center';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u48 = document.getElementById('u48');

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u717 = document.getElementById('u717');
gv_vAlignTable['u717'] = 'top';
var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'center';
var u91 = document.getElementById('u91');

var u92 = document.getElementById('u92');

var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'center';
var u94 = document.getElementById('u94');

u94.style.cursor = 'pointer';
if (bIE) u94.attachEvent("onclick", Clicku94);
else u94.addEventListener("click", Clicku94, true);
function Clicku94(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u94');
}

}

if (bIE) u94.attachEvent("onmouseover", MouseOveru94);
else u94.addEventListener("mouseover", MouseOveru94, true);
function MouseOveru94(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u94',e)) return;
if (true) {

	SetPanelState('u91', 'pd1u91','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Orange Red</span></p>');

}

}

if (bIE) u94.attachEvent("onmouseout", MouseOutu94);
else u94.addEventListener("mouseout", MouseOutu94, true);
function MouseOutu94(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u94',e)) return;
if (true) {

	SetPanelState('u91', 'pd0u91','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u186 = document.getElementById('u186');

var u187 = document.getElementById('u187');

var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'center';
var u540 = document.getElementById('u540');

var u541 = document.getElementById('u541');

var u542 = document.getElementById('u542');
gv_vAlignTable['u542'] = 'center';
var u543 = document.getElementById('u543');

u543.style.cursor = 'pointer';
if (bIE) u543.attachEvent("onclick", Clicku543);
else u543.addEventListener("click", Clicku543, true);
function Clicku543(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u540', 'pd1u540','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u543.attachEvent("onmouseout", MouseOutu543);
else u543.addEventListener("mouseout", MouseOutu543, true);
function MouseOutu543(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u543',e)) return;
if (true) {

	SetPanelState('u540', 'pd2u540','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u544 = document.getElementById('u544');
gv_vAlignTable['u544'] = 'center';
var u545 = document.getElementById('u545');

if (bIE) u545.attachEvent("onmouseover", MouseOveru545);
else u545.addEventListener("mouseover", MouseOveru545, true);
function MouseOveru545(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u545',e)) return;
if (true) {

	SetPanelState('u540', 'pd3u540','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Kelly Green</span></p>');

}

}

var u546 = document.getElementById('u546');
gv_vAlignTable['u546'] = 'center';
var u547 = document.getElementById('u547');

var u548 = document.getElementById('u548');
gv_vAlignTable['u548'] = 'center';
var u549 = document.getElementById('u549');

u549.style.cursor = 'pointer';
if (bIE) u549.attachEvent("onclick", Clicku549);
else u549.addEventListener("click", Clicku549, true);
function Clicku549(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u540', 'pd3u540','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u549.attachEvent("onmouseout", MouseOutu549);
else u549.addEventListener("mouseout", MouseOutu549, true);
function MouseOutu549(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u549',e)) return;
if (true) {

	SetPanelState('u540', 'pd0u540','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u56 = document.getElementById('u56');

var u57 = document.getElementById('u57');

var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'center';
var u59 = document.getElementById('u59');

var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'center';
var u191 = document.getElementById('u191');

var u192 = document.getElementById('u192');

var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'center';
var u194 = document.getElementById('u194');

u194.style.cursor = 'pointer';
if (bIE) u194.attachEvent("onclick", Clicku194);
else u194.addEventListener("click", Clicku194, true);
function Clicku194(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u194');
}

}

if (bIE) u194.attachEvent("onmouseover", MouseOveru194);
else u194.addEventListener("mouseover", MouseOveru194, true);
function MouseOveru194(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u194',e)) return;
if (true) {

	SetPanelState('u191', 'pd1u191','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Navy</span></p>');

}

}

if (bIE) u194.attachEvent("onmouseout", MouseOutu194);
else u194.addEventListener("mouseout", MouseOutu194, true);
function MouseOutu194(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u194',e)) return;
if (true) {

	SetPanelState('u191', 'pd0u191','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'center';
var u196 = document.getElementById('u196');

var u197 = document.getElementById('u197');

var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'center';
var u550 = document.getElementById('u550');
gv_vAlignTable['u550'] = 'center';
var u551 = document.getElementById('u551');

if (bIE) u551.attachEvent("onmouseover", MouseOveru551);
else u551.addEventListener("mouseover", MouseOveru551, true);
function MouseOveru551(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u551',e)) return;
if (true) {

	SetPanelState('u540', 'pd1u540','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Kelly Green</span></p>');

}

}

var u552 = document.getElementById('u552');
gv_vAlignTable['u552'] = 'center';
var u553 = document.getElementById('u553');

var u554 = document.getElementById('u554');

var u555 = document.getElementById('u555');
gv_vAlignTable['u555'] = 'center';
var u556 = document.getElementById('u556');

u556.style.cursor = 'pointer';
if (bIE) u556.attachEvent("onclick", Clicku556);
else u556.addEventListener("click", Clicku556, true);
function Clicku556(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u553', 'pd1u553','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u556.attachEvent("onmouseout", MouseOutu556);
else u556.addEventListener("mouseout", MouseOutu556, true);
function MouseOutu556(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u556',e)) return;
if (true) {

	SetPanelState('u553', 'pd2u553','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u557 = document.getElementById('u557');
gv_vAlignTable['u557'] = 'center';
var u558 = document.getElementById('u558');

if (bIE) u558.attachEvent("onmouseover", MouseOveru558);
else u558.addEventListener("mouseover", MouseOveru558, true);
function MouseOveru558(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u558',e)) return;
if (true) {

	SetPanelState('u553', 'pd3u553','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Teal</span></p>');

}

}

var u559 = document.getElementById('u559');
gv_vAlignTable['u559'] = 'center';
var u66 = document.getElementById('u66');

var u67 = document.getElementById('u67');

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'center';
var u69 = document.getElementById('u69');

u69.style.cursor = 'pointer';
if (bIE) u69.attachEvent("onclick", Clicku69);
else u69.addEventListener("click", Clicku69, true);
function Clicku69(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u69');
}

}

if (bIE) u69.attachEvent("onmouseover", MouseOveru69);
else u69.addEventListener("mouseover", MouseOveru69, true);
function MouseOveru69(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u69',e)) return;
if (true) {

	SetPanelState('u66', 'pd1u66','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Grey</span></p>');

}

}

if (bIE) u69.attachEvent("onmouseout", MouseOutu69);
else u69.addEventListener("mouseout", MouseOutu69, true);
function MouseOutu69(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u69',e)) return;
if (true) {

	SetPanelState('u66', 'pd0u66','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u560 = document.getElementById('u560');

var u561 = document.getElementById('u561');
gv_vAlignTable['u561'] = 'center';
var u562 = document.getElementById('u562');

u562.style.cursor = 'pointer';
if (bIE) u562.attachEvent("onclick", Clicku562);
else u562.addEventListener("click", Clicku562, true);
function Clicku562(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u553', 'pd3u553','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u562.attachEvent("onmouseout", MouseOutu562);
else u562.addEventListener("mouseout", MouseOutu562, true);
function MouseOutu562(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u562',e)) return;
if (true) {

	SetPanelState('u553', 'pd0u553','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u563 = document.getElementById('u563');
gv_vAlignTable['u563'] = 'center';
var u564 = document.getElementById('u564');

if (bIE) u564.attachEvent("onmouseover", MouseOveru564);
else u564.addEventListener("mouseover", MouseOveru564, true);
function MouseOveru564(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u564',e)) return;
if (true) {

	SetPanelState('u553', 'pd1u553','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Teal</span></p>');

}

}

var u565 = document.getElementById('u565');
gv_vAlignTable['u565'] = 'center';
var u566 = document.getElementById('u566');

var u567 = document.getElementById('u567');

var u568 = document.getElementById('u568');
gv_vAlignTable['u568'] = 'center';
var u569 = document.getElementById('u569');

u569.style.cursor = 'pointer';
if (bIE) u569.attachEvent("onclick", Clicku569);
else u569.addEventListener("click", Clicku569, true);
function Clicku569(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u566', 'pd1u566','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u569.attachEvent("onmouseout", MouseOutu569);
else u569.addEventListener("mouseout", MouseOutu569, true);
function MouseOutu569(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u569',e)) return;
if (true) {

	SetPanelState('u566', 'pd2u566','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u76 = document.getElementById('u76');

var u77 = document.getElementById('u77');

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'center';
var u249 = document.getElementById('u249');

var u570 = document.getElementById('u570');
gv_vAlignTable['u570'] = 'center';
var u571 = document.getElementById('u571');

if (bIE) u571.attachEvent("onmouseover", MouseOveru571);
else u571.addEventListener("mouseover", MouseOveru571, true);
function MouseOveru571(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u571',e)) return;
if (true) {

	SetPanelState('u566', 'pd3u566','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Green</span></p>');

}

}

var u572 = document.getElementById('u572');
gv_vAlignTable['u572'] = 'center';
var u573 = document.getElementById('u573');

var u574 = document.getElementById('u574');
gv_vAlignTable['u574'] = 'center';
var u575 = document.getElementById('u575');

u575.style.cursor = 'pointer';
if (bIE) u575.attachEvent("onclick", Clicku575);
else u575.addEventListener("click", Clicku575, true);
function Clicku575(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u566', 'pd3u566','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u575.attachEvent("onmouseout", MouseOutu575);
else u575.addEventListener("mouseout", MouseOutu575, true);
function MouseOutu575(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u575',e)) return;
if (true) {

	SetPanelState('u566', 'pd0u566','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u576 = document.getElementById('u576');
gv_vAlignTable['u576'] = 'center';
var u577 = document.getElementById('u577');

if (bIE) u577.attachEvent("onmouseover", MouseOveru577);
else u577.addEventListener("mouseover", MouseOveru577, true);
function MouseOveru577(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u577',e)) return;
if (true) {

	SetPanelState('u566', 'pd1u566','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Green</span></p>');

}

}

var u578 = document.getElementById('u578');
gv_vAlignTable['u578'] = 'center';
var u579 = document.getElementById('u579');

var u86 = document.getElementById('u86');

var u87 = document.getElementById('u87');

var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'center';
var u89 = document.getElementById('u89');

u89.style.cursor = 'pointer';
if (bIE) u89.attachEvent("onclick", Clicku89);
else u89.addEventListener("click", Clicku89, true);
function Clicku89(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u89');
}

}

if (bIE) u89.attachEvent("onmouseover", MouseOveru89);
else u89.addEventListener("mouseover", MouseOveru89, true);
function MouseOveru89(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u89',e)) return;
if (true) {

	SetPanelState('u86', 'pd1u86','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Red</span></p>');

}

}

if (bIE) u89.attachEvent("onmouseout", MouseOutu89);
else u89.addEventListener("mouseout", MouseOutu89, true);
function MouseOutu89(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u89',e)) return;
if (true) {

	SetPanelState('u86', 'pd0u86','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u207 = document.getElementById('u207');

var u580 = document.getElementById('u580');

var u581 = document.getElementById('u581');
gv_vAlignTable['u581'] = 'center';
var u582 = document.getElementById('u582');

u582.style.cursor = 'pointer';
if (bIE) u582.attachEvent("onclick", Clicku582);
else u582.addEventListener("click", Clicku582, true);
function Clicku582(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u579', 'pd1u579','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u582.attachEvent("onmouseout", MouseOutu582);
else u582.addEventListener("mouseout", MouseOutu582, true);
function MouseOutu582(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u582',e)) return;
if (true) {

	SetPanelState('u579', 'pd2u579','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u583 = document.getElementById('u583');
gv_vAlignTable['u583'] = 'center';
var u584 = document.getElementById('u584');

if (bIE) u584.attachEvent("onmouseover", MouseOveru584);
else u584.addEventListener("mouseover", MouseOveru584, true);
function MouseOveru584(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u584',e)) return;
if (true) {

	SetPanelState('u579', 'pd3u579','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Lime</span></p>');

}

}

var u585 = document.getElementById('u585');
gv_vAlignTable['u585'] = 'center';
var u586 = document.getElementById('u586');

var u587 = document.getElementById('u587');
gv_vAlignTable['u587'] = 'center';
var u588 = document.getElementById('u588');

u588.style.cursor = 'pointer';
if (bIE) u588.attachEvent("onclick", Clicku588);
else u588.addEventListener("click", Clicku588, true);
function Clicku588(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u579', 'pd3u579','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u588.attachEvent("onmouseout", MouseOutu588);
else u588.addEventListener("mouseout", MouseOutu588, true);
function MouseOutu588(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u588',e)) return;
if (true) {

	SetPanelState('u579', 'pd0u579','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u589 = document.getElementById('u589');
gv_vAlignTable['u589'] = 'center';
var u96 = document.getElementById('u96');

var u97 = document.getElementById('u97');

var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'center';
var u99 = document.getElementById('u99');

u99.style.cursor = 'pointer';
if (bIE) u99.attachEvent("onclick", Clicku99);
else u99.addEventListener("click", Clicku99, true);
function Clicku99(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u99');
}

}

if (bIE) u99.attachEvent("onmouseover", MouseOveru99);
else u99.addEventListener("mouseover", MouseOveru99, true);
function MouseOveru99(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u99',e)) return;
if (true) {

	SetPanelState('u96', 'pd1u96','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Pink</span></p>');

}

}

if (bIE) u99.attachEvent("onmouseout", MouseOutu99);
else u99.addEventListener("mouseout", MouseOutu99, true);
function MouseOutu99(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u99',e)) return;
if (true) {

	SetPanelState('u96', 'pd0u96','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u199 = document.getElementById('u199');

u199.style.cursor = 'pointer';
if (bIE) u199.attachEvent("onclick", Clicku199);
else u199.addEventListener("click", Clicku199, true);
function Clicku199(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u199');
}

}

if (bIE) u199.attachEvent("onmouseover", MouseOveru199);
else u199.addEventListener("mouseover", MouseOveru199, true);
function MouseOveru199(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u199',e)) return;
if (true) {

	SetPanelState('u196', 'pd1u196','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Royal</span></p>');

}

}

if (bIE) u199.attachEvent("onmouseout", MouseOutu199);
else u199.addEventListener("mouseout", MouseOutu199, true);
function MouseOutu199(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u199',e)) return;
if (true) {

	SetPanelState('u196', 'pd0u196','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u400 = document.getElementById('u400');
gv_vAlignTable['u400'] = 'center';
var u401 = document.getElementById('u401');

u401.style.cursor = 'pointer';
if (bIE) u401.attachEvent("onclick", Clicku401);
else u401.addEventListener("click", Clicku401, true);
function Clicku401(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u392', 'pd3u392','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u401.attachEvent("onmouseout", MouseOutu401);
else u401.addEventListener("mouseout", MouseOutu401, true);
function MouseOutu401(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u401',e)) return;
if (true) {

	SetPanelState('u392', 'pd0u392','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u402 = document.getElementById('u402');
gv_vAlignTable['u402'] = 'center';
var u590 = document.getElementById('u590');

if (bIE) u590.attachEvent("onmouseover", MouseOveru590);
else u590.addEventListener("mouseover", MouseOveru590, true);
function MouseOveru590(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u590',e)) return;
if (true) {

	SetPanelState('u579', 'pd1u579','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Lime</span></p>');

}

}

var u591 = document.getElementById('u591');
gv_vAlignTable['u591'] = 'center';
var u405 = document.getElementById('u405');

var u406 = document.getElementById('u406');

var u407 = document.getElementById('u407');
gv_vAlignTable['u407'] = 'center';
var u408 = document.getElementById('u408');

u408.style.cursor = 'pointer';
if (bIE) u408.attachEvent("onclick", Clicku408);
else u408.addEventListener("click", Clicku408, true);
function Clicku408(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u405', 'pd1u405','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u408.attachEvent("onmouseout", MouseOutu408);
else u408.addEventListener("mouseout", MouseOutu408, true);
function MouseOutu408(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u408',e)) return;
if (true) {

	SetPanelState('u405', 'pd2u405','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u409 = document.getElementById('u409');
gv_vAlignTable['u409'] = 'center';
var u597 = document.getElementById('u597');

if (bIE) u597.attachEvent("onmouseover", MouseOveru597);
else u597.addEventListener("mouseover", MouseOveru597, true);
function MouseOveru597(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u597',e)) return;
if (true) {

	SetPanelState('u592', 'pd3u592','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Navy</span></p>');

}

}

var u598 = document.getElementById('u598');
gv_vAlignTable['u598'] = 'center';
var u599 = document.getElementById('u599');

var u410 = document.getElementById('u410');

if (bIE) u410.attachEvent("onmouseover", MouseOveru410);
else u410.addEventListener("mouseover", MouseOveru410, true);
function MouseOveru410(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u410',e)) return;
if (true) {

	SetPanelState('u405', 'pd3u405','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Light Orange</span></p>');

}

}

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
windowEvent = e;


if (true) {

	SetPanelState('u405', 'pd3u405','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u414.attachEvent("onmouseout", MouseOutu414);
else u414.addEventListener("mouseout", MouseOutu414, true);
function MouseOutu414(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u414',e)) return;
if (true) {

	SetPanelState('u405', 'pd0u405','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u415 = document.getElementById('u415');
gv_vAlignTable['u415'] = 'center';
var u416 = document.getElementById('u416');

if (bIE) u416.attachEvent("onmouseover", MouseOveru416);
else u416.addEventListener("mouseover", MouseOveru416, true);
function MouseOveru416(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u416',e)) return;
if (true) {

	SetPanelState('u405', 'pd1u405','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Light Orange</span></p>');

}

}

var u417 = document.getElementById('u417');
gv_vAlignTable['u417'] = 'center';
var u418 = document.getElementById('u418');

var u419 = document.getElementById('u419');

var u109 = document.getElementById('u109');

u109.style.cursor = 'pointer';
if (bIE) u109.attachEvent("onclick", Clicku109);
else u109.addEventListener("click", Clicku109, true);
function Clicku109(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u109');
}

}

if (bIE) u109.attachEvent("onmouseover", MouseOveru109);
else u109.addEventListener("mouseover", MouseOveru109, true);
function MouseOveru109(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u109',e)) return;
if (true) {

	SetPanelState('u106', 'pd1u106','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Hot Pink</span></p>');

}

}

if (bIE) u109.attachEvent("onmouseout", MouseOutu109);
else u109.addEventListener("mouseout", MouseOutu109, true);
function MouseOutu109(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u109',e)) return;
if (true) {

	SetPanelState('u106', 'pd0u106','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u620 = document.getElementById('u620');
gv_vAlignTable['u620'] = 'center';
var u420 = document.getElementById('u420');
gv_vAlignTable['u420'] = 'center';
var u421 = document.getElementById('u421');

u421.style.cursor = 'pointer';
if (bIE) u421.attachEvent("onclick", Clicku421);
else u421.addEventListener("click", Clicku421, true);
function Clicku421(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u418', 'pd1u418','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u421.attachEvent("onmouseout", MouseOutu421);
else u421.addEventListener("mouseout", MouseOutu421, true);
function MouseOutu421(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u421',e)) return;
if (true) {

	SetPanelState('u418', 'pd2u418','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u422 = document.getElementById('u422');
gv_vAlignTable['u422'] = 'center';
var u423 = document.getElementById('u423');

if (bIE) u423.attachEvent("onmouseover", MouseOveru423);
else u423.addEventListener("mouseover", MouseOveru423, true);
function MouseOveru423(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u423',e)) return;
if (true) {

	SetPanelState('u418', 'pd3u418','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Athletic Gold</span></p>');

}

}

var u424 = document.getElementById('u424');
gv_vAlignTable['u424'] = 'center';
var u425 = document.getElementById('u425');

var u426 = document.getElementById('u426');
gv_vAlignTable['u426'] = 'center';
var u427 = document.getElementById('u427');

u427.style.cursor = 'pointer';
if (bIE) u427.attachEvent("onclick", Clicku427);
else u427.addEventListener("click", Clicku427, true);
function Clicku427(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u418', 'pd3u418','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u427.attachEvent("onmouseout", MouseOutu427);
else u427.addEventListener("mouseout", MouseOutu427, true);
function MouseOutu427(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u427',e)) return;
if (true) {

	SetPanelState('u418', 'pd0u418','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u428 = document.getElementById('u428');
gv_vAlignTable['u428'] = 'center';
var u610 = document.getElementById('u610');

if (bIE) u610.attachEvent("onmouseover", MouseOveru610);
else u610.addEventListener("mouseover", MouseOveru610, true);
function MouseOveru610(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u610',e)) return;
if (true) {

	SetPanelState('u605', 'pd3u605','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Royal</span></p>');

}

}

var u430 = document.getElementById('u430');
gv_vAlignTable['u430'] = 'center';
var u431 = document.getElementById('u431');

var u432 = document.getElementById('u432');

var u433 = document.getElementById('u433');
gv_vAlignTable['u433'] = 'center';
var u434 = document.getElementById('u434');

u434.style.cursor = 'pointer';
if (bIE) u434.attachEvent("onclick", Clicku434);
else u434.addEventListener("click", Clicku434, true);
function Clicku434(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u431', 'pd1u431','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u434.attachEvent("onmouseout", MouseOutu434);
else u434.addEventListener("mouseout", MouseOutu434, true);
function MouseOutu434(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u434',e)) return;
if (true) {

	SetPanelState('u431', 'pd2u431','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u435 = document.getElementById('u435');
gv_vAlignTable['u435'] = 'center';
var u436 = document.getElementById('u436');

if (bIE) u436.attachEvent("onmouseover", MouseOveru436);
else u436.addEventListener("mouseover", MouseOveru436, true);
function MouseOveru436(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u436',e)) return;
if (true) {

	SetPanelState('u431', 'pd3u431','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Tan</span></p>');

}

}

var u437 = document.getElementById('u437');
gv_vAlignTable['u437'] = 'center';
var u438 = document.getElementById('u438');

var u439 = document.getElementById('u439');
gv_vAlignTable['u439'] = 'center';
var u440 = document.getElementById('u440');

u440.style.cursor = 'pointer';
if (bIE) u440.attachEvent("onclick", Clicku440);
else u440.addEventListener("click", Clicku440, true);
function Clicku440(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u431', 'pd3u431','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u440.attachEvent("onmouseout", MouseOutu440);
else u440.addEventListener("mouseout", MouseOutu440, true);
function MouseOutu440(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u440',e)) return;
if (true) {

	SetPanelState('u431', 'pd0u431','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u441 = document.getElementById('u441');
gv_vAlignTable['u441'] = 'center';
var u442 = document.getElementById('u442');

if (bIE) u442.attachEvent("onmouseover", MouseOveru442);
else u442.addEventListener("mouseover", MouseOveru442, true);
function MouseOveru442(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u442',e)) return;
if (true) {

	SetPanelState('u431', 'pd1u431','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Tan</span></p>');

}

}

var u443 = document.getElementById('u443');
gv_vAlignTable['u443'] = 'center';
var u444 = document.getElementById('u444');

var u445 = document.getElementById('u445');

var u446 = document.getElementById('u446');
gv_vAlignTable['u446'] = 'center';
var u447 = document.getElementById('u447');

u447.style.cursor = 'pointer';
if (bIE) u447.attachEvent("onclick", Clicku447);
else u447.addEventListener("click", Clicku447, true);
function Clicku447(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u444', 'pd1u444','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u447.attachEvent("onmouseout", MouseOutu447);
else u447.addEventListener("mouseout", MouseOutu447, true);
function MouseOutu447(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u447',e)) return;
if (true) {

	SetPanelState('u444', 'pd2u444','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u448 = document.getElementById('u448');
gv_vAlignTable['u448'] = 'center';
var u449 = document.getElementById('u449');

if (bIE) u449.attachEvent("onmouseover", MouseOveru449);
else u449.addEventListener("mouseover", MouseOveru449, true);
function MouseOveru449(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u449',e)) return;
if (true) {

	SetPanelState('u444', 'pd3u444','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Brown</span></p>');

}

}

var u630 = document.getElementById('u630');
gv_vAlignTable['u630'] = 'center';
var u450 = document.getElementById('u450');
gv_vAlignTable['u450'] = 'center';
var u451 = document.getElementById('u451');

var u452 = document.getElementById('u452');
gv_vAlignTable['u452'] = 'center';
var u453 = document.getElementById('u453');

u453.style.cursor = 'pointer';
if (bIE) u453.attachEvent("onclick", Clicku453);
else u453.addEventListener("click", Clicku453, true);
function Clicku453(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u444', 'pd3u444','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u453.attachEvent("onmouseout", MouseOutu453);
else u453.addEventListener("mouseout", MouseOutu453, true);
function MouseOutu453(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u453',e)) return;
if (true) {

	SetPanelState('u444', 'pd0u444','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u454 = document.getElementById('u454');
gv_vAlignTable['u454'] = 'center';
var u455 = document.getElementById('u455');

if (bIE) u455.attachEvent("onmouseover", MouseOveru455);
else u455.addEventListener("mouseover", MouseOveru455, true);
function MouseOveru455(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u455',e)) return;
if (true) {

	SetPanelState('u444', 'pd1u444','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Brown</span></p>');

}

}

var u456 = document.getElementById('u456');
gv_vAlignTable['u456'] = 'center';
var u457 = document.getElementById('u457');

var u458 = document.getElementById('u458');

var u459 = document.getElementById('u459');
gv_vAlignTable['u459'] = 'center';
var u640 = document.getElementById('u640');

u640.style.cursor = 'pointer';
if (bIE) u640.attachEvent("onclick", Clicku640);
else u640.addEventListener("click", Clicku640, true);
function Clicku640(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u631', 'pd3u631','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u640.attachEvent("onmouseout", MouseOutu640);
else u640.addEventListener("mouseout", MouseOutu640, true);
function MouseOutu640(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u640',e)) return;
if (true) {

	SetPanelState('u631', 'pd0u631','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u149 = document.getElementById('u149');

u149.style.cursor = 'pointer';
if (bIE) u149.attachEvent("onclick", Clicku149);
else u149.addEventListener("click", Clicku149, true);
function Clicku149(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u149');
}

}

if (bIE) u149.attachEvent("onmouseover", MouseOveru149);
else u149.addEventListener("mouseover", MouseOveru149, true);
function MouseOveru149(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u149',e)) return;
if (true) {

	SetPanelState('u146', 'pd1u146','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Olive</span></p>');

}

}

if (bIE) u149.attachEvent("onmouseout", MouseOutu149);
else u149.addEventListener("mouseout", MouseOutu149, true);
function MouseOutu149(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u149',e)) return;
if (true) {

	SetPanelState('u146', 'pd0u146','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u649 = document.getElementById('u649');

if (bIE) u649.attachEvent("onmouseover", MouseOveru649);
else u649.addEventListener("mouseover", MouseOveru649, true);
function MouseOveru649(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u649',e)) return;
if (true) {

	SetPanelState('u644', 'pd3u644','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Lucida Grande;font-size:11px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">Turquoise</span></p>');

}

}

var u460 = document.getElementById('u460');

u460.style.cursor = 'pointer';
if (bIE) u460.attachEvent("onclick", Clicku460);
else u460.addEventListener("click", Clicku460, true);
function Clicku460(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u457', 'pd1u457','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u460.attachEvent("onmouseout", MouseOutu460);
else u460.addEventListener("mouseout", MouseOutu460, true);
function MouseOutu460(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u460',e)) return;
if (true) {

	SetPanelState('u457', 'pd2u457','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u461 = document.getElementById('u461');
gv_vAlignTable['u461'] = 'center';
var u462 = document.getElementById('u462');

if (bIE) u462.attachEvent("onmouseover", MouseOveru462);
else u462.addEventListener("mouseover", MouseOveru462, true);
function MouseOveru462(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u462',e)) return;
if (true) {

	SetPanelState('u457', 'pd3u457','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Old Gold</span></p>');

}

}

var u463 = document.getElementById('u463');
gv_vAlignTable['u463'] = 'center';
var u464 = document.getElementById('u464');

var u465 = document.getElementById('u465');
gv_vAlignTable['u465'] = 'center';
var u466 = document.getElementById('u466');

u466.style.cursor = 'pointer';
if (bIE) u466.attachEvent("onclick", Clicku466);
else u466.addEventListener("click", Clicku466, true);
function Clicku466(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u457', 'pd3u457','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u466.attachEvent("onmouseout", MouseOutu466);
else u466.addEventListener("mouseout", MouseOutu466, true);
function MouseOutu466(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u466',e)) return;
if (true) {

	SetPanelState('u457', 'pd0u457','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u467 = document.getElementById('u467');
gv_vAlignTable['u467'] = 'center';
var u468 = document.getElementById('u468');

if (bIE) u468.attachEvent("onmouseover", MouseOveru468);
else u468.addEventListener("mouseover", MouseOveru468, true);
function MouseOveru468(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u468',e)) return;
if (true) {

	SetPanelState('u457', 'pd1u457','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Old Gold</span></p>');

}

}

var u469 = document.getElementById('u469');
gv_vAlignTable['u469'] = 'center';
var u650 = document.getElementById('u650');
gv_vAlignTable['u650'] = 'center';
var u159 = document.getElementById('u159');

u159.style.cursor = 'pointer';
if (bIE) u159.attachEvent("onclick", Clicku159);
else u159.addEventListener("click", Clicku159, true);
function Clicku159(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u159');
}

}

if (bIE) u159.attachEvent("onmouseover", MouseOveru159);
else u159.addEventListener("mouseover", MouseOveru159, true);
function MouseOveru159(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u159',e)) return;
if (true) {

	SetPanelState('u156', 'pd1u156','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Yellow</span></p>');

}

}

if (bIE) u159.attachEvent("onmouseout", MouseOutu159);
else u159.addEventListener("mouseout", MouseOutu159, true);
function MouseOutu159(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u159',e)) return;
if (true) {

	SetPanelState('u156', 'pd0u156','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u45 = document.getElementById('u45');

var u470 = document.getElementById('u470');

var u471 = document.getElementById('u471');

var u472 = document.getElementById('u472');
gv_vAlignTable['u472'] = 'center';
var u473 = document.getElementById('u473');

u473.style.cursor = 'pointer';
if (bIE) u473.attachEvent("onclick", Clicku473);
else u473.addEventListener("click", Clicku473, true);
function Clicku473(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u470', 'pd1u470','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u473.attachEvent("onmouseout", MouseOutu473);
else u473.addEventListener("mouseout", MouseOutu473, true);
function MouseOutu473(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u473',e)) return;
if (true) {

	SetPanelState('u470', 'pd2u470','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u474 = document.getElementById('u474');
gv_vAlignTable['u474'] = 'center';
var u475 = document.getElementById('u475');

if (bIE) u475.attachEvent("onmouseover", MouseOveru475);
else u475.addEventListener("mouseover", MouseOveru475, true);
function MouseOveru475(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u475',e)) return;
if (true) {

	SetPanelState('u470', 'pd3u470','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Olive</span></p>');

}

}

var u476 = document.getElementById('u476');
gv_vAlignTable['u476'] = 'center';
var u477 = document.getElementById('u477');

var u478 = document.getElementById('u478');
gv_vAlignTable['u478'] = 'center';
var u479 = document.getElementById('u479');

u479.style.cursor = 'pointer';
if (bIE) u479.attachEvent("onclick", Clicku479);
else u479.addEventListener("click", Clicku479, true);
function Clicku479(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u470', 'pd3u470','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u479.attachEvent("onmouseout", MouseOutu479);
else u479.addEventListener("mouseout", MouseOutu479, true);
function MouseOutu479(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u479',e)) return;
if (true) {

	SetPanelState('u470', 'pd0u470','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u167 = document.getElementById('u167');

var u169 = document.getElementById('u169');

u169.style.cursor = 'pointer';
if (bIE) u169.attachEvent("onclick", Clicku169);
else u169.addEventListener("click", Clicku169, true);
function Clicku169(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u169');
}

}

if (bIE) u169.attachEvent("onmouseover", MouseOveru169);
else u169.addEventListener("mouseover", MouseOveru169, true);
function MouseOveru169(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u169',e)) return;
if (true) {

	SetPanelState('u166', 'pd1u166','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Forest</span></p>');

}

}

if (bIE) u169.attachEvent("onmouseout", MouseOutu169);
else u169.addEventListener("mouseout", MouseOutu169, true);
function MouseOutu169(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u169',e)) return;
if (true) {

	SetPanelState('u166', 'pd0u166','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u480 = document.getElementById('u480');
gv_vAlignTable['u480'] = 'center';
var u481 = document.getElementById('u481');

if (bIE) u481.attachEvent("onmouseover", MouseOveru481);
else u481.addEventListener("mouseover", MouseOveru481, true);
function MouseOveru481(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u481',e)) return;
if (true) {

	SetPanelState('u470', 'pd1u470','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Olive</span></p>');

}

}

var u482 = document.getElementById('u482');
gv_vAlignTable['u482'] = 'center';
var u483 = document.getElementById('u483');

var u484 = document.getElementById('u484');
gv_vAlignTable['u484'] = 'center';
var u485 = document.getElementById('u485');
gv_vAlignTable['u485'] = 'top';
var u486 = document.getElementById('u486');
gv_vAlignTable['u486'] = 'top';
var u487 = document.getElementById('u487');
gv_vAlignTable['u487'] = 'top';
var u488 = document.getElementById('u488');

var u489 = document.getElementById('u489');

var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'center';
var u174 = document.getElementById('u174');

u174.style.cursor = 'pointer';
if (bIE) u174.attachEvent("onclick", Clicku174);
else u174.addEventListener("click", Clicku174, true);
function Clicku174(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u174');
}

}

if (bIE) u174.attachEvent("onmouseover", MouseOveru174);
else u174.addEventListener("mouseover", MouseOveru174, true);
function MouseOveru174(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u174',e)) return;
if (true) {

	SetPanelState('u171', 'pd1u171','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Kelly</span></p>');

}

}

if (bIE) u174.attachEvent("onmouseout", MouseOutu174);
else u174.addEventListener("mouseout", MouseOutu174, true);
function MouseOutu174(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u174',e)) return;
if (true) {

	SetPanelState('u171', 'pd0u171','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'center';
var u204 = document.getElementById('u204');

u204.style.cursor = 'pointer';
if (bIE) u204.attachEvent("onclick", Clicku204);
else u204.addEventListener("click", Clicku204, true);
function Clicku204(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u204');
}

}

if (bIE) u204.attachEvent("onmouseover", MouseOveru204);
else u204.addEventListener("mouseover", MouseOveru204, true);
function MouseOveru204(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u204',e)) return;
if (true) {

	SetPanelState('u201', 'pd1u201','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Blue</span></p>');

}

}

if (bIE) u204.attachEvent("onmouseout", MouseOutu204);
else u204.addEventListener("mouseout", MouseOutu204, true);
function MouseOutu204(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u204',e)) return;
if (true) {

	SetPanelState('u201', 'pd0u201','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'center';
var u206 = document.getElementById('u206');

var u179 = document.getElementById('u179');

u179.style.cursor = 'pointer';
if (bIE) u179.attachEvent("onclick", Clicku179);
else u179.addEventListener("click", Clicku179, true);
function Clicku179(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u179');
}

}

if (bIE) u179.attachEvent("onmouseover", MouseOveru179);
else u179.addEventListener("mouseover", MouseOveru179, true);
function MouseOveru179(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u179',e)) return;
if (true) {

	SetPanelState('u176', 'pd1u176','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Teal</span></p>');

}

}

if (bIE) u179.attachEvent("onmouseout", MouseOutu179);
else u179.addEventListener("mouseout", MouseOutu179, true);
function MouseOutu179(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u179',e)) return;
if (true) {

	SetPanelState('u176', 'pd0u176','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

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
windowEvent = e;


if (true) {

SetWidgetSelected('u209');
}

}

if (bIE) u209.attachEvent("onmouseover", MouseOveru209);
else u209.addEventListener("mouseover", MouseOveru209, true);
function MouseOveru209(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u209',e)) return;
if (true) {

	SetPanelState('u206', 'pd1u206','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Light Blue</span></p>');

}

}

if (bIE) u209.attachEvent("onmouseout", MouseOutu209);
else u209.addEventListener("mouseout", MouseOutu209, true);
function MouseOutu209(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u209',e)) return;
if (true) {

	SetPanelState('u206', 'pd0u206','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u300 = document.getElementById('u300');
gv_vAlignTable['u300'] = 'center';
var u301 = document.getElementById('u301');

var u302 = document.getElementById('u302');

var u303 = document.getElementById('u303');
gv_vAlignTable['u303'] = 'center';
var u304 = document.getElementById('u304');

u304.style.cursor = 'pointer';
if (bIE) u304.attachEvent("onclick", Clicku304);
else u304.addEventListener("click", Clicku304, true);
function Clicku304(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u301', 'pd1u301','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u304.attachEvent("onmouseout", MouseOutu304);
else u304.addEventListener("mouseout", MouseOutu304, true);
function MouseOutu304(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u304',e)) return;
if (true) {

	SetPanelState('u301', 'pd2u301','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u305 = document.getElementById('u305');
gv_vAlignTable['u305'] = 'center';
var u306 = document.getElementById('u306');

if (bIE) u306.attachEvent("onmouseover", MouseOveru306);
else u306.addEventListener("mouseover", MouseOveru306, true);
function MouseOveru306(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u306',e)) return;
if (true) {

	SetPanelState('u301', 'pd3u301','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Cardinal</span></p>');

}

}

var u307 = document.getElementById('u307');
gv_vAlignTable['u307'] = 'center';
var u308 = document.getElementById('u308');

var u309 = document.getElementById('u309');
gv_vAlignTable['u309'] = 'center';
var u497 = document.getElementById('u497');

u497.style.cursor = 'pointer';
if (bIE) u497.attachEvent("onclick", Clicku497);
else u497.addEventListener("click", Clicku497, true);
function Clicku497(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u488', 'pd3u488','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u497.attachEvent("onmouseout", MouseOutu497);
else u497.addEventListener("mouseout", MouseOutu497, true);
function MouseOutu497(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u497',e)) return;
if (true) {

	SetPanelState('u488', 'pd0u488','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u498 = document.getElementById('u498');
gv_vAlignTable['u498'] = 'center';
var u499 = document.getElementById('u499');

if (bIE) u499.attachEvent("onmouseover", MouseOveru499);
else u499.addEventListener("mouseover", MouseOveru499, true);
function MouseOveru499(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u499',e)) return;
if (true) {

	SetPanelState('u488', 'pd1u488','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Gold</span></p>');

}

}

var u504 = document.getElementById('u504');

u504.style.cursor = 'pointer';
if (bIE) u504.attachEvent("onclick", Clicku504);
else u504.addEventListener("click", Clicku504, true);
function Clicku504(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u501', 'pd1u501','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u504.attachEvent("onmouseout", MouseOutu504);
else u504.addEventListener("mouseout", MouseOutu504, true);
function MouseOutu504(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u504',e)) return;
if (true) {

	SetPanelState('u501', 'pd2u501','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u505 = document.getElementById('u505');
gv_vAlignTable['u505'] = 'center';
var u506 = document.getElementById('u506');

if (bIE) u506.attachEvent("onmouseover", MouseOveru506);
else u506.addEventListener("mouseover", MouseOveru506, true);
function MouseOveru506(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u506',e)) return;
if (true) {

	SetPanelState('u501', 'pd3u501','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Yellow</span></p>');

}

}

var u507 = document.getElementById('u507');
gv_vAlignTable['u507'] = 'center';
var u508 = document.getElementById('u508');

var u509 = document.getElementById('u509');
gv_vAlignTable['u509'] = 'center';
var u189 = document.getElementById('u189');

u189.style.cursor = 'pointer';
if (bIE) u189.attachEvent("onclick", Clicku189);
else u189.addEventListener("click", Clicku189, true);
function Clicku189(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u189');
}

}

if (bIE) u189.attachEvent("onmouseover", MouseOveru189);
else u189.addEventListener("mouseover", MouseOveru189, true);
function MouseOveru189(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u189',e)) return;
if (true) {

	SetPanelState('u186', 'pd1u186','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Lime</span></p>');

}

}

if (bIE) u189.attachEvent("onmouseout", MouseOutu189);
else u189.addEventListener("mouseout", MouseOutu189, true);
function MouseOutu189(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u189',e)) return;
if (true) {

	SetPanelState('u186', 'pd0u186','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u310 = document.getElementById('u310');

u310.style.cursor = 'pointer';
if (bIE) u310.attachEvent("onclick", Clicku310);
else u310.addEventListener("click", Clicku310, true);
function Clicku310(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u301', 'pd3u301','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u310.attachEvent("onmouseout", MouseOutu310);
else u310.addEventListener("mouseout", MouseOutu310, true);
function MouseOutu310(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u310',e)) return;
if (true) {

	SetPanelState('u301', 'pd0u301','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u311 = document.getElementById('u311');
gv_vAlignTable['u311'] = 'center';
var u312 = document.getElementById('u312');

if (bIE) u312.attachEvent("onmouseover", MouseOveru312);
else u312.addEventListener("mouseover", MouseOveru312, true);
function MouseOveru312(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u312',e)) return;
if (true) {

	SetPanelState('u301', 'pd1u301','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Cardinal</span></p>');

}

}

var u313 = document.getElementById('u313');
gv_vAlignTable['u313'] = 'center';
var u314 = document.getElementById('u314');

var u315 = document.getElementById('u315');

var u316 = document.getElementById('u316');
gv_vAlignTable['u316'] = 'center';
var u317 = document.getElementById('u317');

u317.style.cursor = 'pointer';
if (bIE) u317.attachEvent("onclick", Clicku317);
else u317.addEventListener("click", Clicku317, true);
function Clicku317(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u314', 'pd1u314','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u317.attachEvent("onmouseout", MouseOutu317);
else u317.addEventListener("mouseout", MouseOutu317, true);
function MouseOutu317(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u317',e)) return;
if (true) {

	SetPanelState('u314', 'pd2u314','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u318 = document.getElementById('u318');
gv_vAlignTable['u318'] = 'center';
var u319 = document.getElementById('u319');

if (bIE) u319.attachEvent("onmouseover", MouseOveru319);
else u319.addEventListener("mouseover", MouseOveru319, true);
function MouseOveru319(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u319',e)) return;
if (true) {

	SetPanelState('u314', 'pd3u314','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Red</span></p>');

}

}

var u514 = document.getElementById('u514');

var u515 = document.getElementById('u515');

var u516 = document.getElementById('u516');
gv_vAlignTable['u516'] = 'center';
var u517 = document.getElementById('u517');

u517.style.cursor = 'pointer';
if (bIE) u517.attachEvent("onclick", Clicku517);
else u517.addEventListener("click", Clicku517, true);
function Clicku517(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u514', 'pd1u514','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u517.attachEvent("onmouseout", MouseOutu517);
else u517.addEventListener("mouseout", MouseOutu517, true);
function MouseOutu517(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u517',e)) return;
if (true) {

	SetPanelState('u514', 'pd2u514','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u518 = document.getElementById('u518');
gv_vAlignTable['u518'] = 'center';
var u519 = document.getElementById('u519');

if (bIE) u519.attachEvent("onmouseover", MouseOveru519);
else u519.addEventListener("mouseover", MouseOveru519, true);
function MouseOveru519(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u519',e)) return;
if (true) {

	SetPanelState('u514', 'pd3u514','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Lemon</span></p>');

}

}

var u691 = document.getElementById('u691');
gv_vAlignTable['u691'] = 'center';
var u692 = document.getElementById('u692');

u692.style.cursor = 'pointer';
if (bIE) u692.attachEvent("onclick", Clicku692);
else u692.addEventListener("click", Clicku692, true);
function Clicku692(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u683', 'pd3u683','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u692.attachEvent("onmouseout", MouseOutu692);
else u692.addEventListener("mouseout", MouseOutu692, true);
function MouseOutu692(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u692',e)) return;
if (true) {

	SetPanelState('u683', 'pd0u683','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u693 = document.getElementById('u693');
gv_vAlignTable['u693'] = 'center';
var u694 = document.getElementById('u694');

if (bIE) u694.attachEvent("onmouseover", MouseOveru694);
else u694.addEventListener("mouseover", MouseOveru694, true);
function MouseOveru694(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u694',e)) return;
if (true) {

	SetPanelState('u683', 'pd1u683','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Bright Purple</span></p>');

}

}

var u695 = document.getElementById('u695');
gv_vAlignTable['u695'] = 'center';
var u696 = document.getElementById('u696');

var u697 = document.getElementById('u697');

var u698 = document.getElementById('u698');
gv_vAlignTable['u698'] = 'center';
var u699 = document.getElementById('u699');

u699.style.cursor = 'pointer';
if (bIE) u699.attachEvent("onclick", Clicku699);
else u699.addEventListener("click", Clicku699, true);
function Clicku699(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u696', 'pd1u696','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u699.attachEvent("onmouseout", MouseOutu699);
else u699.addEventListener("mouseout", MouseOutu699, true);
function MouseOutu699(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u699',e)) return;
if (true) {

	SetPanelState('u696', 'pd2u696','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u320 = document.getElementById('u320');
gv_vAlignTable['u320'] = 'center';
var u321 = document.getElementById('u321');

var u322 = document.getElementById('u322');
gv_vAlignTable['u322'] = 'center';
var u323 = document.getElementById('u323');

u323.style.cursor = 'pointer';
if (bIE) u323.attachEvent("onclick", Clicku323);
else u323.addEventListener("click", Clicku323, true);
function Clicku323(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u314', 'pd3u314','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u323.attachEvent("onmouseout", MouseOutu323);
else u323.addEventListener("mouseout", MouseOutu323, true);
function MouseOutu323(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u323',e)) return;
if (true) {

	SetPanelState('u314', 'pd0u314','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u324 = document.getElementById('u324');
gv_vAlignTable['u324'] = 'center';
var u325 = document.getElementById('u325');

if (bIE) u325.attachEvent("onmouseover", MouseOveru325);
else u325.addEventListener("mouseover", MouseOveru325, true);
function MouseOveru325(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u325',e)) return;
if (true) {

	SetPanelState('u314', 'pd1u314','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Red</span></p>');

}

}

var u326 = document.getElementById('u326');
gv_vAlignTable['u326'] = 'center';
var u327 = document.getElementById('u327');

var u328 = document.getElementById('u328');

var u329 = document.getElementById('u329');
gv_vAlignTable['u329'] = 'center';
var u524 = document.getElementById('u524');
gv_vAlignTable['u524'] = 'center';
var u330 = document.getElementById('u330');

u330.style.cursor = 'pointer';
if (bIE) u330.attachEvent("onclick", Clicku330);
else u330.addEventListener("click", Clicku330, true);
function Clicku330(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u327', 'pd1u327','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u330.attachEvent("onmouseout", MouseOutu330);
else u330.addEventListener("mouseout", MouseOutu330, true);
function MouseOutu330(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u330',e)) return;
if (true) {

	SetPanelState('u327', 'pd2u327','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

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

	SetPanelState('u327', 'pd3u327','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Orange Red</span></p>');

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
windowEvent = e;


if (true) {

	SetPanelState('u327', 'pd3u327','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u336.attachEvent("onmouseout", MouseOutu336);
else u336.addEventListener("mouseout", MouseOutu336, true);
function MouseOutu336(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u336',e)) return;
if (true) {

	SetPanelState('u327', 'pd0u327','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u337 = document.getElementById('u337');
gv_vAlignTable['u337'] = 'center';
var u338 = document.getElementById('u338');

if (bIE) u338.attachEvent("onmouseover", MouseOveru338);
else u338.addEventListener("mouseover", MouseOveru338, true);
function MouseOveru338(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u338',e)) return;
if (true) {

	SetPanelState('u327', 'pd1u327','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Orange Red</span></p>');

}

}

var u339 = document.getElementById('u339');
gv_vAlignTable['u339'] = 'center';
var u534 = document.getElementById('u534');

var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'center';
var u181 = document.getElementById('u181');

var u182 = document.getElementById('u182');

var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'center';
var u184 = document.getElementById('u184');

u184.style.cursor = 'pointer';
if (bIE) u184.attachEvent("onclick", Clicku184);
else u184.addEventListener("click", Clicku184, true);
function Clicku184(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u184');
}

}

if (bIE) u184.attachEvent("onmouseover", MouseOveru184);
else u184.addEventListener("mouseover", MouseOveru184, true);
function MouseOveru184(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u184',e)) return;
if (true) {

	SetPanelState('u181', 'pd1u181','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Green</span></p>');

}

}

if (bIE) u184.attachEvent("onmouseout", MouseOutu184);
else u184.addEventListener("mouseout", MouseOutu184, true);
function MouseOutu184(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u184',e)) return;
if (true) {

	SetPanelState('u181', 'pd0u181','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'center';
var u340 = document.getElementById('u340');

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

	SetPanelState('u340', 'pd1u340','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u343.attachEvent("onmouseout", MouseOutu343);
else u343.addEventListener("mouseout", MouseOutu343, true);
function MouseOutu343(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u343',e)) return;
if (true) {

	SetPanelState('u340', 'pd2u340','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

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

	SetPanelState('u340', 'pd3u340','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Pink</span></p>');

}

}

var u346 = document.getElementById('u346');
gv_vAlignTable['u346'] = 'center';
var u347 = document.getElementById('u347');

var u348 = document.getElementById('u348');
gv_vAlignTable['u348'] = 'center';
var u349 = document.getElementById('u349');

u349.style.cursor = 'pointer';
if (bIE) u349.attachEvent("onclick", Clicku349);
else u349.addEventListener("click", Clicku349, true);
function Clicku349(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u340', 'pd3u340','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u349.attachEvent("onmouseout", MouseOutu349);
else u349.addEventListener("mouseout", MouseOutu349, true);
function MouseOutu349(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u349',e)) return;
if (true) {

	SetPanelState('u340', 'pd0u340','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u701 = document.getElementById('u701');

if (bIE) u701.attachEvent("onmouseover", MouseOveru701);
else u701.addEventListener("mouseover", MouseOveru701, true);
function MouseOveru701(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u701',e)) return;
if (true) {

	SetPanelState('u696', 'pd3u696','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Maroon</span></p>');

}

}

var u702 = document.getElementById('u702');
gv_vAlignTable['u702'] = 'center';
var u703 = document.getElementById('u703');

var u704 = document.getElementById('u704');
gv_vAlignTable['u704'] = 'center';
var u705 = document.getElementById('u705');

u705.style.cursor = 'pointer';
if (bIE) u705.attachEvent("onclick", Clicku705);
else u705.addEventListener("click", Clicku705, true);
function Clicku705(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u696', 'pd3u696','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u705.attachEvent("onmouseout", MouseOutu705);
else u705.addEventListener("mouseout", MouseOutu705, true);
function MouseOutu705(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u705',e)) return;
if (true) {

	SetPanelState('u696', 'pd0u696','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u706 = document.getElementById('u706');
gv_vAlignTable['u706'] = 'center';
var u707 = document.getElementById('u707');

if (bIE) u707.attachEvent("onmouseover", MouseOveru707);
else u707.addEventListener("mouseover", MouseOveru707, true);
function MouseOveru707(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u707',e)) return;
if (true) {

	SetPanelState('u696', 'pd1u696','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Maroon</span></p>');

}

}

var u708 = document.getElementById('u708');
gv_vAlignTable['u708'] = 'center';
var u709 = document.getElementById('u709');
gv_vAlignTable['u709'] = 'top';
var u700 = document.getElementById('u700');
gv_vAlignTable['u700'] = 'center';
var u350 = document.getElementById('u350');
gv_vAlignTable['u350'] = 'center';
var u351 = document.getElementById('u351');

if (bIE) u351.attachEvent("onmouseover", MouseOveru351);
else u351.addEventListener("mouseover", MouseOveru351, true);
function MouseOveru351(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u351',e)) return;
if (true) {

	SetPanelState('u340', 'pd1u340','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Pink</span></p>');

}

}

var u352 = document.getElementById('u352');
gv_vAlignTable['u352'] = 'center';
var u353 = document.getElementById('u353');

var u354 = document.getElementById('u354');

var u355 = document.getElementById('u355');
gv_vAlignTable['u355'] = 'center';
var u356 = document.getElementById('u356');

u356.style.cursor = 'pointer';
if (bIE) u356.attachEvent("onclick", Clicku356);
else u356.addEventListener("click", Clicku356, true);
function Clicku356(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u353', 'pd1u353','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u356.attachEvent("onmouseout", MouseOutu356);
else u356.addEventListener("mouseout", MouseOutu356, true);
function MouseOutu356(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u356',e)) return;
if (true) {

	SetPanelState('u353', 'pd2u353','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u357 = document.getElementById('u357');
gv_vAlignTable['u357'] = 'center';
var u358 = document.getElementById('u358');

if (bIE) u358.attachEvent("onmouseover", MouseOveru358);
else u358.addEventListener("mouseover", MouseOveru358, true);
function MouseOveru358(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u358',e)) return;
if (true) {

	SetPanelState('u353', 'pd3u353','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Charity Pink</span></p>');

}

}

var u359 = document.getElementById('u359');
gv_vAlignTable['u359'] = 'center';
var u711 = document.getElementById('u711');

u711.style.cursor = 'pointer';
if (bIE) u711.attachEvent("onclick", Clicku711);
else u711.addEventListener("click", Clicku711, true);
function Clicku711(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$printOption')) == ('')) {

	SetPanelState('u43', 'pd4u43','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('$colorCount')) < Number('1')) {

	SetPanelState('u43', 'pd0u43','none','',500,'none','',500);

	SetPanelState('u240', 'pd1u240','none','',500,'none','',500);

}
else
if (true) {

	self.location.href="Page_3.html" + GetQuerystring();

}

}

var u712 = document.getElementById('u712');
gv_vAlignTable['u712'] = 'center';
var u713 = document.getElementById('u713');

u713.style.cursor = 'pointer';
if (bIE) u713.attachEvent("onclick", Clicku713);
else u713.addEventListener("click", Clicku713, true);
function Clicku713(e)
{
windowEvent = e;


if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}
gv_vAlignTable['u713'] = 'top';
var u714 = document.getElementById('u714');

u714.style.cursor = 'pointer';
if (bIE) u714.attachEvent("onclick", Clicku714);
else u714.addEventListener("click", Clicku714, true);
function Clicku714(e)
{
windowEvent = e;


if (true) {

	self.location.href="Page_1.html" + GetQuerystring();

}

}
gv_vAlignTable['u714'] = 'top';
var u715 = document.getElementById('u715');

var u716 = document.getElementById('u716');

u716.style.cursor = 'pointer';
if (bIE) u716.attachEvent("onclick", Clicku716);
else u716.addEventListener("click", Clicku716, true);
function Clicku716(e)
{
windowEvent = e;


if (((GetCheckState('u26')) == (true)) && ((GetCheckState('u716')) == (true))) {

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

SetGlobalVariableValue('$showWhite', 'yes');

SetCheckState('u716', true);

	SetPanelState('u13', 'pd1u13','none','',500,'none','',500);

	SetPanelState('u288', 'pd2u288','none','',500,'none','',500);

}
else
if (((GetCheckState('u716')) == (false)) && ((GetCheckState('u26')) == (true))) {

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

SetGlobalVariableValue('$showWhite', 'no');

SetCheckState('u716', false);

	SetPanelState('u13', 'pd0u13','none','',500,'none','',500);

	SetPanelState('u288', 'pd0u288','none','',500,'none','',500);

}
else
if ((GetCheckState('u34')) == (true)) {

	SetPanelState('u13', 'pd1u13','none','',500,'none','',500);

	SetPanelState('u43', 'pd0u43','none','',500,'none','',500);

	SetPanelState('u288', 'pd2u288','none','',500,'none','',500);

	SetPanelState('u249', 'pd2u249','none','',500,'none','',500);

SetGlobalVariableValue('$showWhite', 'yes');

SetGlobalVariableValue('$colorCount', '2');

SetCheckState('u26', true);

}
else
if (((GetCheckState('u39')) == (true)) && ((GetCheckState('u716')) == (false))) {

	SetPanelState('u13', 'pd0u13','none','',500,'none','',500);

	SetPanelState('u43', 'pd1u43','none','',500,'none','',500);

	SetPanelState('u288', 'pd0u288','none','',500,'none','',500);

}
else
if (((GetCheckState('u39')) == (true)) && ((GetCheckState('u716')) == (true))) {

	SetPanelState('u13', 'pd1u13','none','',500,'none','',500);

	SetPanelState('u43', 'pd1u43','none','',500,'none','',500);

	SetPanelState('u288', 'pd2u288','none','',500,'none','',500);

}

}

var u710 = document.getElementById('u710');
gv_vAlignTable['u710'] = 'top';
var u360 = document.getElementById('u360');

var u361 = document.getElementById('u361');
gv_vAlignTable['u361'] = 'center';
var u362 = document.getElementById('u362');

u362.style.cursor = 'pointer';
if (bIE) u362.attachEvent("onclick", Clicku362);
else u362.addEventListener("click", Clicku362, true);
function Clicku362(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u353', 'pd3u353','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u362.attachEvent("onmouseout", MouseOutu362);
else u362.addEventListener("mouseout", MouseOutu362, true);
function MouseOutu362(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u362',e)) return;
if (true) {

	SetPanelState('u353', 'pd0u353','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u363 = document.getElementById('u363');
gv_vAlignTable['u363'] = 'center';
var u364 = document.getElementById('u364');

if (bIE) u364.attachEvent("onmouseover", MouseOveru364);
else u364.addEventListener("mouseover", MouseOveru364, true);
function MouseOveru364(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u364',e)) return;
if (true) {

	SetPanelState('u353', 'pd1u353','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Charity Pink</span></p>');

}

}

var u365 = document.getElementById('u365');
gv_vAlignTable['u365'] = 'center';
var u366 = document.getElementById('u366');

var u367 = document.getElementById('u367');

var u368 = document.getElementById('u368');
gv_vAlignTable['u368'] = 'center';
var u369 = document.getElementById('u369');

u369.style.cursor = 'pointer';
if (bIE) u369.attachEvent("onclick", Clicku369);
else u369.addEventListener("click", Clicku369, true);
function Clicku369(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u366', 'pd1u366','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u369.attachEvent("onmouseout", MouseOutu369);
else u369.addEventListener("mouseout", MouseOutu369, true);
function MouseOutu369(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u369',e)) return;
if (true) {

	SetPanelState('u366', 'pd2u366','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'center';
var u104 = document.getElementById('u104');

u104.style.cursor = 'pointer';
if (bIE) u104.attachEvent("onclick", Clicku104);
else u104.addEventListener("click", Clicku104, true);
function Clicku104(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u104');
}

}

if (bIE) u104.attachEvent("onmouseover", MouseOveru104);
else u104.addEventListener("mouseover", MouseOveru104, true);
function MouseOveru104(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u104',e)) return;
if (true) {

	SetPanelState('u101', 'pd1u101','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Charity Pink</span></p>');

}

}

if (bIE) u104.attachEvent("onmouseout", MouseOutu104);
else u104.addEventListener("mouseout", MouseOutu104, true);
function MouseOutu104(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u104',e)) return;
if (true) {

	SetPanelState('u101', 'pd0u101','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'center';
var u106 = document.getElementById('u106');

var u107 = document.getElementById('u107');

var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'center';
var u370 = document.getElementById('u370');
gv_vAlignTable['u370'] = 'center';
var u371 = document.getElementById('u371');

if (bIE) u371.attachEvent("onmouseover", MouseOveru371);
else u371.addEventListener("mouseover", MouseOveru371, true);
function MouseOveru371(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u371',e)) return;
if (true) {

	SetPanelState('u366', 'pd3u366','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Hot Pink</span></p>');

}

}

var u372 = document.getElementById('u372');
gv_vAlignTable['u372'] = 'center';
var u373 = document.getElementById('u373');

var u374 = document.getElementById('u374');
gv_vAlignTable['u374'] = 'center';
var u375 = document.getElementById('u375');

u375.style.cursor = 'pointer';
if (bIE) u375.attachEvent("onclick", Clicku375);
else u375.addEventListener("click", Clicku375, true);
function Clicku375(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u366', 'pd3u366','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u375.attachEvent("onmouseout", MouseOutu375);
else u375.addEventListener("mouseout", MouseOutu375, true);
function MouseOutu375(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u375',e)) return;
if (true) {

	SetPanelState('u366', 'pd0u366','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u376 = document.getElementById('u376');
gv_vAlignTable['u376'] = 'center';
var u377 = document.getElementById('u377');

if (bIE) u377.attachEvent("onmouseover", MouseOveru377);
else u377.addEventListener("mouseover", MouseOveru377, true);
function MouseOveru377(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u377',e)) return;
if (true) {

	SetPanelState('u366', 'pd1u366','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Hot Pink</span></p>');

}

}

var u378 = document.getElementById('u378');
gv_vAlignTable['u378'] = 'center';
var u379 = document.getElementById('u379');

var u380 = document.getElementById('u380');

var u381 = document.getElementById('u381');
gv_vAlignTable['u381'] = 'center';
var u382 = document.getElementById('u382');

u382.style.cursor = 'pointer';
if (bIE) u382.attachEvent("onclick", Clicku382);
else u382.addEventListener("click", Clicku382, true);
function Clicku382(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u379', 'pd1u379','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u382.attachEvent("onmouseout", MouseOutu382);
else u382.addEventListener("mouseout", MouseOutu382, true);
function MouseOutu382(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u382',e)) return;
if (true) {

	SetPanelState('u379', 'pd2u379','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u383 = document.getElementById('u383');
gv_vAlignTable['u383'] = 'center';
var u384 = document.getElementById('u384');

if (bIE) u384.attachEvent("onmouseover", MouseOveru384);
else u384.addEventListener("mouseover", MouseOveru384, true);
function MouseOveru384(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u384',e)) return;
if (true) {

	SetPanelState('u379', 'pd3u379','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Magenta</span></p>');

}

}

var u385 = document.getElementById('u385');
gv_vAlignTable['u385'] = 'center';
var u386 = document.getElementById('u386');

var u387 = document.getElementById('u387');
gv_vAlignTable['u387'] = 'center';
var u388 = document.getElementById('u388');

u388.style.cursor = 'pointer';
if (bIE) u388.attachEvent("onclick", Clicku388);
else u388.addEventListener("click", Clicku388, true);
function Clicku388(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u379', 'pd3u379','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u388.attachEvent("onmouseout", MouseOutu388);
else u388.addEventListener("mouseout", MouseOutu388, true);
function MouseOutu388(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u388',e)) return;
if (true) {

	SetPanelState('u379', 'pd0u379','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u389 = document.getElementById('u389');
gv_vAlignTable['u389'] = 'center';
var u403 = document.getElementById('u403');

if (bIE) u403.attachEvent("onmouseover", MouseOveru403);
else u403.addEventListener("mouseover", MouseOveru403, true);
function MouseOveru403(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u403',e)) return;
if (true) {

	SetPanelState('u392', 'pd1u392','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Orange</span></p>');

}

}

var u404 = document.getElementById('u404');
gv_vAlignTable['u404'] = 'center';
var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'center';
var u201 = document.getElementById('u201');

var u202 = document.getElementById('u202');

var u390 = document.getElementById('u390');

if (bIE) u390.attachEvent("onmouseover", MouseOveru390);
else u390.addEventListener("mouseover", MouseOveru390, true);
function MouseOveru390(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u390',e)) return;
if (true) {

	SetPanelState('u379', 'pd1u379','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Magenta</span></p>');

}

}

var u391 = document.getElementById('u391');
gv_vAlignTable['u391'] = 'center';
var u392 = document.getElementById('u392');

var u393 = document.getElementById('u393');

var u394 = document.getElementById('u394');
gv_vAlignTable['u394'] = 'center';
var u395 = document.getElementById('u395');

u395.style.cursor = 'pointer';
if (bIE) u395.attachEvent("onclick", Clicku395);
else u395.addEventListener("click", Clicku395, true);
function Clicku395(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u392', 'pd1u392','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u395.attachEvent("onmouseout", MouseOutu395);
else u395.addEventListener("mouseout", MouseOutu395, true);
function MouseOutu395(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u395',e)) return;
if (true) {

	SetPanelState('u392', 'pd2u392','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u396 = document.getElementById('u396');
gv_vAlignTable['u396'] = 'center';
var u397 = document.getElementById('u397');

if (bIE) u397.attachEvent("onmouseover", MouseOveru397);
else u397.addEventListener("mouseover", MouseOveru397, true);
function MouseOveru397(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u397',e)) return;
if (true) {

	SetPanelState('u392', 'pd3u392','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Orange</span></p>');

}

}

var u398 = document.getElementById('u398');
gv_vAlignTable['u398'] = 'center';
var u399 = document.getElementById('u399');

var u592 = document.getElementById('u592');

var u593 = document.getElementById('u593');

var u594 = document.getElementById('u594');
gv_vAlignTable['u594'] = 'center';
var u595 = document.getElementById('u595');

u595.style.cursor = 'pointer';
if (bIE) u595.attachEvent("onclick", Clicku595);
else u595.addEventListener("click", Clicku595, true);
function Clicku595(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u592', 'pd1u592','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u595.attachEvent("onmouseout", MouseOutu595);
else u595.addEventListener("mouseout", MouseOutu595, true);
function MouseOutu595(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u595',e)) return;
if (true) {

	SetPanelState('u592', 'pd2u592','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u596 = document.getElementById('u596');
gv_vAlignTable['u596'] = 'center';
var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'center';
var u211 = document.getElementById('u211');

var u212 = document.getElementById('u212');

var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'center';
var u214 = document.getElementById('u214');

u214.style.cursor = 'pointer';
if (bIE) u214.attachEvent("onclick", Clicku214);
else u214.addEventListener("click", Clicku214, true);
function Clicku214(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u214');
}

}

if (bIE) u214.attachEvent("onmouseover", MouseOveru214);
else u214.addEventListener("mouseover", MouseOveru214, true);
function MouseOveru214(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u214',e)) return;
if (true) {

	SetPanelState('u211', 'pd1u211','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Turquoise</span></p>');

}

}

if (bIE) u214.attachEvent("onmouseout", MouseOutu214);
else u214.addEventListener("mouseout", MouseOutu214, true);
function MouseOutu214(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u214',e)) return;
if (true) {

	SetPanelState('u211', 'pd1u211','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'center';
var u216 = document.getElementById('u216');

var u217 = document.getElementById('u217');

var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'center';
var u219 = document.getElementById('u219');

u219.style.cursor = 'pointer';
if (bIE) u219.attachEvent("onclick", Clicku219);
else u219.addEventListener("click", Clicku219, true);
function Clicku219(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u219');
}

}

if (bIE) u219.attachEvent("onmouseover", MouseOveru219);
else u219.addEventListener("mouseover", MouseOveru219, true);
function MouseOveru219(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u219',e)) return;
if (true) {

	SetPanelState('u216', 'pd1u216','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Dark Purple</span></p>');

}

}

if (bIE) u219.attachEvent("onmouseout", MouseOutu219);
else u219.addEventListener("mouseout", MouseOutu219, true);
function MouseOutu219(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u219',e)) return;
if (true) {

	SetPanelState('u216', 'pd0u216','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'center';
var u429 = document.getElementById('u429');

if (bIE) u429.attachEvent("onmouseover", MouseOveru429);
else u429.addEventListener("mouseover", MouseOveru429, true);
function MouseOveru429(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u429',e)) return;
if (true) {

	SetPanelState('u418', 'pd1u418','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Athletic Gold</span></p>');

}

}

var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'center';
var u221 = document.getElementById('u221');

var u222 = document.getElementById('u222');

var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'center';
var u224 = document.getElementById('u224');

u224.style.cursor = 'pointer';
if (bIE) u224.attachEvent("onclick", Clicku224);
else u224.addEventListener("click", Clicku224, true);
function Clicku224(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u224');
}

}

if (bIE) u224.attachEvent("onmouseover", MouseOveru224);
else u224.addEventListener("mouseover", MouseOveru224, true);
function MouseOveru224(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u224',e)) return;
if (true) {

	SetPanelState('u221', 'pd1u221','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Bright Purple</span></p>');

}

}

if (bIE) u224.attachEvent("onmouseout", MouseOutu224);
else u224.addEventListener("mouseout", MouseOutu224, true);
function MouseOutu224(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u224',e)) return;
if (true) {

	SetPanelState('u221', 'pd0u221','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'center';
var u226 = document.getElementById('u226');

var u227 = document.getElementById('u227');

var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'center';
var u229 = document.getElementById('u229');

u229.style.cursor = 'pointer';
if (bIE) u229.attachEvent("onclick", Clicku229);
else u229.addEventListener("click", Clicku229, true);
function Clicku229(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u229');
}

}

if (bIE) u229.attachEvent("onmouseover", MouseOveru229);
else u229.addEventListener("mouseover", MouseOveru229, true);
function MouseOveru229(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u229',e)) return;
if (true) {

	SetPanelState('u226', 'pd1u226','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Light Purple</span></p>');

}

}

if (bIE) u229.attachEvent("onmouseout", MouseOutu229);
else u229.addEventListener("mouseout", MouseOutu229, true);
function MouseOutu229(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u229',e)) return;
if (true) {

	SetPanelState('u226', 'pd0u226','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'center';
var u151 = document.getElementById('u151');

var u152 = document.getElementById('u152');

var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'center';
var u231 = document.getElementById('u231');

var u232 = document.getElementById('u232');

var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'center';
var u234 = document.getElementById('u234');

u234.style.cursor = 'pointer';
if (bIE) u234.attachEvent("onclick", Clicku234);
else u234.addEventListener("click", Clicku234, true);
function Clicku234(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u234');
}

}

if (bIE) u234.attachEvent("onmouseover", MouseOveru234);
else u234.addEventListener("mouseover", MouseOveru234, true);
function MouseOveru234(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u234',e)) return;
if (true) {

	SetPanelState('u231', 'pd1u231','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Maroon</span></p>');

}

}

if (bIE) u234.attachEvent("onmouseout", MouseOutu234);
else u234.addEventListener("mouseout", MouseOutu234, true);
function MouseOutu234(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u234',e)) return;
if (true) {

	SetPanelState('u231', 'pd0u231','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'center';
var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'top';
var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'top';
var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'top';
var u239 = document.getElementById('u239');

u239.style.cursor = 'pointer';
if (bIE) u239.attachEvent("onclick", Clicku239);
else u239.addEventListener("click", Clicku239, true);
function Clicku239(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u43', 'pd3u43','none','',500,'none','',500);

}

}

var u134 = document.getElementById('u134');

u134.style.cursor = 'pointer';
if (bIE) u134.attachEvent("onclick", Clicku134);
else u134.addEventListener("click", Clicku134, true);
function Clicku134(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u134');
}

}

if (bIE) u134.attachEvent("onmouseover", MouseOveru134);
else u134.addEventListener("mouseover", MouseOveru134, true);
function MouseOveru134(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u134',e)) return;
if (true) {

	SetPanelState('u131', 'pd1u131','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Tan</span></p>');

}

}

if (bIE) u134.attachEvent("onmouseout", MouseOutu134);
else u134.addEventListener("mouseout", MouseOutu134, true);
function MouseOutu134(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u134',e)) return;
if (true) {

	SetPanelState('u131', 'pd0u131','none','',500,'none','',500);

SetWidgetRichText('u62', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'center';
var u161 = document.getElementById('u161');

var u162 = document.getElementById('u162');

var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'center';
var u240 = document.getElementById('u240');

var u241 = document.getElementById('u241');

var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'center';
var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'top';
var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'top';
var u245 = document.getElementById('u245');

var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'center';
var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'top';
var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'top';
var u600 = document.getElementById('u600');
gv_vAlignTable['u600'] = 'center';
var u601 = document.getElementById('u601');

u601.style.cursor = 'pointer';
if (bIE) u601.attachEvent("onclick", Clicku601);
else u601.addEventListener("click", Clicku601, true);
function Clicku601(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u592', 'pd3u592','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u601.attachEvent("onmouseout", MouseOutu601);
else u601.addEventListener("mouseout", MouseOutu601, true);
function MouseOutu601(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u601',e)) return;
if (true) {

	SetPanelState('u592', 'pd0u592','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u602 = document.getElementById('u602');
gv_vAlignTable['u602'] = 'center';
var u603 = document.getElementById('u603');

if (bIE) u603.attachEvent("onmouseover", MouseOveru603);
else u603.addEventListener("mouseover", MouseOveru603, true);
function MouseOveru603(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u603',e)) return;
if (true) {

	SetPanelState('u592', 'pd1u592','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Navy</span></p>');

}

}

var u604 = document.getElementById('u604');
gv_vAlignTable['u604'] = 'center';
var u605 = document.getElementById('u605');

var u606 = document.getElementById('u606');

var u607 = document.getElementById('u607');
gv_vAlignTable['u607'] = 'center';
var u608 = document.getElementById('u608');

u608.style.cursor = 'pointer';
if (bIE) u608.attachEvent("onclick", Clicku608);
else u608.addEventListener("click", Clicku608, true);
function Clicku608(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u605', 'pd1u605','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u608.attachEvent("onmouseout", MouseOutu608);
else u608.addEventListener("mouseout", MouseOutu608, true);
function MouseOutu608(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u608',e)) return;
if (true) {

	SetPanelState('u605', 'pd2u605','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u609 = document.getElementById('u609');
gv_vAlignTable['u609'] = 'center';
var u141 = document.getElementById('u141');

var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'center';
var u171 = document.getElementById('u171');

var u172 = document.getElementById('u172');

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

	SetPanelState('u249', 'pd1u249','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u252.attachEvent("onmouseout", MouseOutu252);
else u252.addEventListener("mouseout", MouseOutu252, true);
function MouseOutu252(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u252',e)) return;
if (true) {

	SetPanelState('u249', 'pd2u249','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

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

	SetPanelState('u249', 'pd3u249','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Black</span></p>');

}

}

var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'center';
var u256 = document.getElementById('u256');

var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'center';
var u258 = document.getElementById('u258');

u258.style.cursor = 'pointer';
if (bIE) u258.attachEvent("onclick", Clicku258);
else u258.addEventListener("click", Clicku258, true);
function Clicku258(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u249', 'pd3u249','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u258.attachEvent("onmouseout", MouseOutu258);
else u258.addEventListener("mouseout", MouseOutu258, true);
function MouseOutu258(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u258',e)) return;
if (true) {

	SetPanelState('u249', 'pd0u249','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'center';
var u611 = document.getElementById('u611');
gv_vAlignTable['u611'] = 'center';
var u612 = document.getElementById('u612');

var u613 = document.getElementById('u613');
gv_vAlignTable['u613'] = 'center';
var u614 = document.getElementById('u614');

u614.style.cursor = 'pointer';
if (bIE) u614.attachEvent("onclick", Clicku614);
else u614.addEventListener("click", Clicku614, true);
function Clicku614(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u605', 'pd3u605','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u614.attachEvent("onmouseout", MouseOutu614);
else u614.addEventListener("mouseout", MouseOutu614, true);
function MouseOutu614(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u614',e)) return;
if (true) {

	SetPanelState('u605', 'pd0u605','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u615 = document.getElementById('u615');
gv_vAlignTable['u615'] = 'center';
var u616 = document.getElementById('u616');

if (bIE) u616.attachEvent("onmouseover", MouseOveru616);
else u616.addEventListener("mouseover", MouseOveru616, true);
function MouseOveru616(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u616',e)) return;
if (true) {

	SetPanelState('u605', 'pd1u605','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Royal</span></p>');

}

}

var u617 = document.getElementById('u617');
gv_vAlignTable['u617'] = 'center';
var u618 = document.getElementById('u618');

var u619 = document.getElementById('u619');

var u0 = document.getElementById('u0');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u2 = document.getElementById('u2');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u4 = document.getElementById('u4');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u6 = document.getElementById('u6');

var u7 = document.getElementById('u7');

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u260 = document.getElementById('u260');

if (bIE) u260.attachEvent("onmouseover", MouseOveru260);
else u260.addEventListener("mouseover", MouseOveru260, true);
function MouseOveru260(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u260',e)) return;
if (true) {

	SetPanelState('u249', 'pd1u249','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Black</span></p>');

}

}

var u261 = document.getElementById('u261');
gv_vAlignTable['u261'] = 'center';
var u262 = document.getElementById('u262');

var u263 = document.getElementById('u263');

var u264 = document.getElementById('u264');
gv_vAlignTable['u264'] = 'center';
var u265 = document.getElementById('u265');

u265.style.cursor = 'pointer';
if (bIE) u265.attachEvent("onclick", Clicku265);
else u265.addEventListener("click", Clicku265, true);
function Clicku265(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u262', 'pd1u262','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u265.attachEvent("onmouseout", MouseOutu265);
else u265.addEventListener("mouseout", MouseOutu265, true);
function MouseOutu265(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u265',e)) return;
if (true) {

	SetPanelState('u262', 'pd2u262','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u266 = document.getElementById('u266');
gv_vAlignTable['u266'] = 'center';
var u267 = document.getElementById('u267');

if (bIE) u267.attachEvent("onmouseover", MouseOveru267);
else u267.addEventListener("mouseover", MouseOveru267, true);
function MouseOveru267(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u267',e)) return;
if (true) {

	SetPanelState('u262', 'pd3u262','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Light Grey</span></p>');

}

}

var u268 = document.getElementById('u268');
gv_vAlignTable['u268'] = 'center';
var u269 = document.getElementById('u269');

var u621 = document.getElementById('u621');

u621.style.cursor = 'pointer';
if (bIE) u621.attachEvent("onclick", Clicku621);
else u621.addEventListener("click", Clicku621, true);
function Clicku621(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u618', 'pd1u618','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u621.attachEvent("onmouseout", MouseOutu621);
else u621.addEventListener("mouseout", MouseOutu621, true);
function MouseOutu621(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u621',e)) return;
if (true) {

	SetPanelState('u618', 'pd2u618','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u622 = document.getElementById('u622');
gv_vAlignTable['u622'] = 'center';
var u623 = document.getElementById('u623');

if (bIE) u623.attachEvent("onmouseover", MouseOveru623);
else u623.addEventListener("mouseover", MouseOveru623, true);
function MouseOveru623(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u623',e)) return;
if (true) {

	SetPanelState('u618', 'pd3u618','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Blue</span></p>');

}

}

var u624 = document.getElementById('u624');
gv_vAlignTable['u624'] = 'center';
var u625 = document.getElementById('u625');

var u626 = document.getElementById('u626');
gv_vAlignTable['u626'] = 'center';
var u627 = document.getElementById('u627');

u627.style.cursor = 'pointer';
if (bIE) u627.attachEvent("onclick", Clicku627);
else u627.addEventListener("click", Clicku627, true);
function Clicku627(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u618', 'pd3u618','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u627.attachEvent("onmouseout", MouseOutu627);
else u627.addEventListener("mouseout", MouseOutu627, true);
function MouseOutu627(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u627',e)) return;
if (true) {

	SetPanelState('u618', 'pd0u618','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u628 = document.getElementById('u628');
gv_vAlignTable['u628'] = 'center';
var u629 = document.getElementById('u629');

if (bIE) u629.attachEvent("onmouseover", MouseOveru629);
else u629.addEventListener("mouseover", MouseOveru629, true);
function MouseOveru629(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u629',e)) return;
if (true) {

	SetPanelState('u618', 'pd1u618','none','',500,'none','',500);

SetWidgetRichText('u487', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Blue</span></p>');

}

}

if (window.OnLoad) OnLoad();
