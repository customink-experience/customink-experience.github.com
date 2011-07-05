
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

if (true) {

SetGlobalVariableValue('$colorCount', '0');

}

}

var u270 = document.getElementById('u270');

u270.style.cursor = 'pointer';
if (bIE) u270.attachEvent("onclick", Clicku270);
else u270.addEventListener("click", Clicku270, true);
function Clicku270(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u261', 'pd3u261','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u270.attachEvent("onmouseout", MouseOutu270);
else u270.addEventListener("mouseout", MouseOutu270, true);
function MouseOutu270(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u270',e)) return;
if (true) {

	SetPanelState('u261', 'pd0u261','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u271 = document.getElementById('u271');
gv_vAlignTable['u271'] = 'center';
var u272 = document.getElementById('u272');

if (bIE) u272.attachEvent("onmouseover", MouseOveru272);
else u272.addEventListener("mouseover", MouseOveru272, true);
function MouseOveru272(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u272',e)) return;
if (true) {

	SetPanelState('u261', 'pd1u261','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Light Grey</span></p>');

}

}

var u273 = document.getElementById('u273');
gv_vAlignTable['u273'] = 'center';
var u274 = document.getElementById('u274');

var u275 = document.getElementById('u275');

var u276 = document.getElementById('u276');
gv_vAlignTable['u276'] = 'center';
var u277 = document.getElementById('u277');

u277.style.cursor = 'pointer';
if (bIE) u277.attachEvent("onclick", Clicku277);
else u277.addEventListener("click", Clicku277, true);
function Clicku277(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u274', 'pd1u274','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u277.attachEvent("onmouseout", MouseOutu277);
else u277.addEventListener("mouseout", MouseOutu277, true);
function MouseOutu277(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u277',e)) return;
if (true) {

	SetPanelState('u274', 'pd2u274','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u278 = document.getElementById('u278');
gv_vAlignTable['u278'] = 'center';
var u279 = document.getElementById('u279');

if (bIE) u279.attachEvent("onmouseover", MouseOveru279);
else u279.addEventListener("mouseover", MouseOveru279, true);
function MouseOveru279(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u279',e)) return;
if (true) {

	SetPanelState('u274', 'pd3u274','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u631 = document.getElementById('u631');

var u632 = document.getElementById('u632');
gv_vAlignTable['u632'] = 'center';
var u633 = document.getElementById('u633');

u633.style.cursor = 'pointer';
if (bIE) u633.attachEvent("onclick", Clicku633);
else u633.addEventListener("click", Clicku633, true);
function Clicku633(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u630', 'pd1u630','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u633.attachEvent("onmouseout", MouseOutu633);
else u633.addEventListener("mouseout", MouseOutu633, true);
function MouseOutu633(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u633',e)) return;
if (true) {

	SetPanelState('u630', 'pd2u630','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u634 = document.getElementById('u634');
gv_vAlignTable['u634'] = 'center';
var u635 = document.getElementById('u635');

if (bIE) u635.attachEvent("onmouseover", MouseOveru635);
else u635.addEventListener("mouseover", MouseOveru635, true);
function MouseOveru635(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u635',e)) return;
if (true) {

	SetPanelState('u630', 'pd3u630','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Light Blue</span></p>');

}

}

var u636 = document.getElementById('u636');
gv_vAlignTable['u636'] = 'center';
var u637 = document.getElementById('u637');

var u638 = document.getElementById('u638');
gv_vAlignTable['u638'] = 'center';
var u639 = document.getElementById('u639');

u639.style.cursor = 'pointer';
if (bIE) u639.attachEvent("onclick", Clicku639);
else u639.addEventListener("click", Clicku639, true);
function Clicku639(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u630', 'pd3u630','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u639.attachEvent("onmouseout", MouseOutu639);
else u639.addEventListener("mouseout", MouseOutu639, true);
function MouseOutu639(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u639',e)) return;
if (true) {

	SetPanelState('u630', 'pd0u630','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u280 = document.getElementById('u280');
gv_vAlignTable['u280'] = 'center';
var u281 = document.getElementById('u281');

var u282 = document.getElementById('u282');
gv_vAlignTable['u282'] = 'center';
var u283 = document.getElementById('u283');

u283.style.cursor = 'pointer';
if (bIE) u283.attachEvent("onclick", Clicku283);
else u283.addEventListener("click", Clicku283, true);
function Clicku283(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u274', 'pd3u274','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u283.attachEvent("onmouseout", MouseOutu283);
else u283.addEventListener("mouseout", MouseOutu283, true);
function MouseOutu283(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u283',e)) return;
if (true) {

	SetPanelState('u274', 'pd0u274','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u284 = document.getElementById('u284');
gv_vAlignTable['u284'] = 'center';
var u285 = document.getElementById('u285');

if (bIE) u285.attachEvent("onmouseover", MouseOveru285);
else u285.addEventListener("mouseover", MouseOveru285, true);
function MouseOveru285(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u285',e)) return;
if (true) {

	SetPanelState('u274', 'pd1u274','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Grey</span></p>');

}

}

var u286 = document.getElementById('u286');
gv_vAlignTable['u286'] = 'center';
var u287 = document.getElementById('u287');

var u288 = document.getElementById('u288');

var u289 = document.getElementById('u289');
gv_vAlignTable['u289'] = 'center';
var u641 = document.getElementById('u641');

if (bIE) u641.attachEvent("onmouseover", MouseOveru641);
else u641.addEventListener("mouseover", MouseOveru641, true);
function MouseOveru641(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u641',e)) return;
if (true) {

	SetPanelState('u630', 'pd1u630','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Light Blue</span></p>');

}

}

var u642 = document.getElementById('u642');
gv_vAlignTable['u642'] = 'center';
var u643 = document.getElementById('u643');

var u644 = document.getElementById('u644');

var u645 = document.getElementById('u645');
gv_vAlignTable['u645'] = 'center';
var u646 = document.getElementById('u646');

u646.style.cursor = 'pointer';
if (bIE) u646.attachEvent("onclick", Clicku646);
else u646.addEventListener("click", Clicku646, true);
function Clicku646(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u643', 'pd1u643','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u646.attachEvent("onmouseout", MouseOutu646);
else u646.addEventListener("mouseout", MouseOutu646, true);
function MouseOutu646(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u646',e)) return;
if (true) {

	SetPanelState('u643', 'pd2u643','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u647 = document.getElementById('u647');
gv_vAlignTable['u647'] = 'center';
var u648 = document.getElementById('u648');

if (bIE) u648.attachEvent("onmouseover", MouseOveru648);
else u648.addEventListener("mouseover", MouseOveru648, true);
function MouseOveru648(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u648',e)) return;
if (true) {

	SetPanelState('u643', 'pd3u643','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Lucida Grande;font-size:11px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">Turquoise</span></p>');

}

}

var u490 = document.getElementById('u490');

u490.style.cursor = 'pointer';
if (bIE) u490.attachEvent("onclick", Clicku490);
else u490.addEventListener("click", Clicku490, true);
function Clicku490(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u487', 'pd1u487','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u490.attachEvent("onmouseout", MouseOutu490);
else u490.addEventListener("mouseout", MouseOutu490, true);
function MouseOutu490(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u490',e)) return;
if (true) {

	SetPanelState('u487', 'pd2u487','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u491 = document.getElementById('u491');
gv_vAlignTable['u491'] = 'center';
var u492 = document.getElementById('u492');

if (bIE) u492.attachEvent("onmouseover", MouseOveru492);
else u492.addEventListener("mouseover", MouseOveru492, true);
function MouseOveru492(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u492',e)) return;
if (true) {

	SetPanelState('u487', 'pd3u487','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Gold</span></p>');

}

}

var u493 = document.getElementById('u493');
gv_vAlignTable['u493'] = 'center';
var u494 = document.getElementById('u494');

var u495 = document.getElementById('u495');
gv_vAlignTable['u495'] = 'center';
var u496 = document.getElementById('u496');

u496.style.cursor = 'pointer';
if (bIE) u496.attachEvent("onclick", Clicku496);
else u496.addEventListener("click", Clicku496, true);
function Clicku496(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u487', 'pd3u487','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u496.attachEvent("onmouseout", MouseOutu496);
else u496.addEventListener("mouseout", MouseOutu496, true);
function MouseOutu496(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u496',e)) return;
if (true) {

	SetPanelState('u487', 'pd0u487','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'center';
var u101 = document.getElementById('u101');

u101.style.cursor = 'pointer';
if (bIE) u101.attachEvent("onclick", Clicku101);
else u101.addEventListener("click", Clicku101, true);
function Clicku101(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u101');
}

}

if (bIE) u101.attachEvent("onmouseover", MouseOveru101);
else u101.addEventListener("mouseover", MouseOveru101, true);
function MouseOveru101(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u101',e)) return;
if (true) {

	SetPanelState('u98', 'pd1u98','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Charity Pink</span></p>');

}

}

if (bIE) u101.attachEvent("onmouseout", MouseOutu101);
else u101.addEventListener("mouseout", MouseOutu101, true);
function MouseOutu101(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u101',e)) return;
if (true) {

	SetPanelState('u98', 'pd0u98','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'center';
var u290 = document.getElementById('u290');

u290.style.cursor = 'pointer';
if (bIE) u290.attachEvent("onclick", Clicku290);
else u290.addEventListener("click", Clicku290, true);
function Clicku290(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u287', 'pd1u287','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u290.attachEvent("onmouseout", MouseOutu290);
else u290.addEventListener("mouseout", MouseOutu290, true);
function MouseOutu290(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u290',e)) return;
if (true) {

	SetPanelState('u287', 'pd2u287','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u291 = document.getElementById('u291');
gv_vAlignTable['u291'] = 'center';
var u292 = document.getElementById('u292');

if (bIE) u292.attachEvent("onmouseover", MouseOveru292);
else u292.addEventListener("mouseover", MouseOveru292, true);
function MouseOveru292(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u292',e)) return;
if (true) {

	SetPanelState('u287', 'pd3u287','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">White</span></p>');

}

}

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
windowEvent = e;


if (true) {

	SetPanelState('u287', 'pd3u287','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u296.attachEvent("onmouseout", MouseOutu296);
else u296.addEventListener("mouseout", MouseOutu296, true);
function MouseOutu296(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u296',e)) return;
if (true) {

	SetPanelState('u287', 'pd0u287','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u297 = document.getElementById('u297');
gv_vAlignTable['u297'] = 'center';
var u298 = document.getElementById('u298');

if (bIE) u298.attachEvent("onmouseover", MouseOveru298);
else u298.addEventListener("mouseover", MouseOveru298, true);
function MouseOveru298(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u298',e)) return;
if (true) {

	SetPanelState('u287', 'pd1u287','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">White</span></p>');

}

}

var u299 = document.getElementById('u299');
gv_vAlignTable['u299'] = 'center';
var u651 = document.getElementById('u651');
gv_vAlignTable['u651'] = 'center';
var u652 = document.getElementById('u652');

u652.style.cursor = 'pointer';
if (bIE) u652.attachEvent("onclick", Clicku652);
else u652.addEventListener("click", Clicku652, true);
function Clicku652(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u643', 'pd3u643','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u652.attachEvent("onmouseout", MouseOutu652);
else u652.addEventListener("mouseout", MouseOutu652, true);
function MouseOutu652(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u652',e)) return;
if (true) {

	SetPanelState('u643', 'pd0u643','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u653 = document.getElementById('u653');
gv_vAlignTable['u653'] = 'center';
var u654 = document.getElementById('u654');

if (bIE) u654.attachEvent("onmouseover", MouseOveru654);
else u654.addEventListener("mouseover", MouseOveru654, true);
function MouseOveru654(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u654',e)) return;
if (true) {

	SetPanelState('u643', 'pd1u643','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Lucida Grande;font-size:11px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">Turquoise</span></p>');

}

}

var u655 = document.getElementById('u655');
gv_vAlignTable['u655'] = 'center';
var u656 = document.getElementById('u656');

var u657 = document.getElementById('u657');

var u658 = document.getElementById('u658');
gv_vAlignTable['u658'] = 'center';
var u659 = document.getElementById('u659');

u659.style.cursor = 'pointer';
if (bIE) u659.attachEvent("onclick", Clicku659);
else u659.addEventListener("click", Clicku659, true);
function Clicku659(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u656', 'pd1u656','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u659.attachEvent("onmouseout", MouseOutu659);
else u659.addEventListener("mouseout", MouseOutu659, true);
function MouseOutu659(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u659',e)) return;
if (true) {

	SetPanelState('u656', 'pd2u656','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u9 = document.getElementById('u9');

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

SetWidgetSelected('u111');
}

}

if (bIE) u111.attachEvent("onmouseover", MouseOveru111);
else u111.addEventListener("mouseover", MouseOveru111, true);
function MouseOveru111(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u111',e)) return;
if (true) {

	SetPanelState('u108', 'pd1u108','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Magenta</span></p>');

}

}

if (bIE) u111.attachEvent("onmouseout", MouseOutu111);
else u111.addEventListener("mouseout", MouseOutu111, true);
function MouseOutu111(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u111',e)) return;
if (true) {

	SetPanelState('u108', 'pd1u108','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'center';
var u113 = document.getElementById('u113');

var u114 = document.getElementById('u114');

var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'center';
var u116 = document.getElementById('u116');

u116.style.cursor = 'pointer';
if (bIE) u116.attachEvent("onclick", Clicku116);
else u116.addEventListener("click", Clicku116, true);
function Clicku116(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u116');
}

}

if (bIE) u116.attachEvent("onmouseover", MouseOveru116);
else u116.addEventListener("mouseover", MouseOveru116, true);
function MouseOveru116(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u116',e)) return;
if (true) {

	SetPanelState('u113', 'pd1u113','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Orange</span></p>');

}

}

if (bIE) u116.attachEvent("onmouseout", MouseOutu116);
else u116.addEventListener("mouseout", MouseOutu116, true);
function MouseOutu116(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u116',e)) return;
if (true) {

	SetPanelState('u113', 'pd0u113','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
var u118 = document.getElementById('u118');

var u119 = document.getElementById('u119');

var u660 = document.getElementById('u660');
gv_vAlignTable['u660'] = 'center';
var u661 = document.getElementById('u661');

if (bIE) u661.attachEvent("onmouseover", MouseOveru661);
else u661.addEventListener("mouseover", MouseOveru661, true);
function MouseOveru661(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u661',e)) return;
if (true) {

	SetPanelState('u656', 'pd3u656','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Dark Purple</span></p>');

}

}

var u662 = document.getElementById('u662');
gv_vAlignTable['u662'] = 'center';
var u663 = document.getElementById('u663');

var u664 = document.getElementById('u664');
gv_vAlignTable['u664'] = 'center';
var u665 = document.getElementById('u665');

u665.style.cursor = 'pointer';
if (bIE) u665.attachEvent("onclick", Clicku665);
else u665.addEventListener("click", Clicku665, true);
function Clicku665(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u656', 'pd3u656','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u665.attachEvent("onmouseout", MouseOutu665);
else u665.addEventListener("mouseout", MouseOutu665, true);
function MouseOutu665(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u665',e)) return;
if (true) {

	SetPanelState('u656', 'pd0u656','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u666 = document.getElementById('u666');
gv_vAlignTable['u666'] = 'center';
var u667 = document.getElementById('u667');

if (bIE) u667.attachEvent("onmouseover", MouseOveru667);
else u667.addEventListener("mouseover", MouseOveru667, true);
function MouseOveru667(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u667',e)) return;
if (true) {

	SetPanelState('u656', 'pd1u656','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Dark Purple</span></p>');

}

}

var u668 = document.getElementById('u668');
gv_vAlignTable['u668'] = 'center';
var u669 = document.getElementById('u669');

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

	SetPanelVisibility('u714','','none',500);

	SetPanelState('u41', 'pd2u41','none','',500,'none','',500);

	SetPanelState('u13', 'pd3u13','none','',500,'none','',500);

SetWidgetSelected('u61');
SetWidgetNotSelected('u76');
SetGlobalVariableValue('$colorCount', '1');

SetCheckState('u715', false);

SetGlobalVariableValue('$printOption', 'single');

SetGlobalVariableValue('$showWhite', 'no');

	MoveWidgetTo('u32', 2,50,'none',500);

	MoveWidgetTo('u38', 2,110,'none',500);

	MoveWidgetTo('u41', 160,245,'none',500);

	SetPanelVisibility('u28','hidden','none',500);

}

}

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'center';
var u121 = document.getElementById('u121');

u121.style.cursor = 'pointer';
if (bIE) u121.attachEvent("onclick", Clicku121);
else u121.addEventListener("click", Clicku121, true);
function Clicku121(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u121');
}

}

if (bIE) u121.attachEvent("onmouseover", MouseOveru121);
else u121.addEventListener("mouseover", MouseOveru121, true);
function MouseOveru121(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u121',e)) return;
if (true) {

	SetPanelState('u118', 'pd1u118','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Light Orange</span></p>');

}

}

if (bIE) u121.attachEvent("onmouseout", MouseOutu121);
else u121.addEventListener("mouseout", MouseOutu121, true);
function MouseOutu121(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u121',e)) return;
if (true) {

	SetPanelState('u118', 'pd0u118','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'center';
var u123 = document.getElementById('u123');

var u124 = document.getElementById('u124');

var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'center';
var u126 = document.getElementById('u126');

u126.style.cursor = 'pointer';
if (bIE) u126.attachEvent("onclick", Clicku126);
else u126.addEventListener("click", Clicku126, true);
function Clicku126(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u126');
}

}

if (bIE) u126.attachEvent("onmouseover", MouseOveru126);
else u126.addEventListener("mouseover", MouseOveru126, true);
function MouseOveru126(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u126',e)) return;
if (true) {

	SetPanelState('u123', 'pd1u123','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Athletic Gold</span></p>');

}

}

if (bIE) u126.attachEvent("onmouseout", MouseOutu126);
else u126.addEventListener("mouseout", MouseOutu126, true);
function MouseOutu126(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u126',e)) return;
if (true) {

	SetPanelState('u123', 'pd0u123','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u128 = document.getElementById('u128');

var u129 = document.getElementById('u129');

var u670 = document.getElementById('u670');

var u671 = document.getElementById('u671');
gv_vAlignTable['u671'] = 'center';
var u672 = document.getElementById('u672');

u672.style.cursor = 'pointer';
if (bIE) u672.attachEvent("onclick", Clicku672);
else u672.addEventListener("click", Clicku672, true);
function Clicku672(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u669', 'pd1u669','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u672.attachEvent("onmouseout", MouseOutu672);
else u672.addEventListener("mouseout", MouseOutu672, true);
function MouseOutu672(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u672',e)) return;
if (true) {

	SetPanelState('u669', 'pd2u669','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u673 = document.getElementById('u673');
gv_vAlignTable['u673'] = 'center';
var u674 = document.getElementById('u674');

if (bIE) u674.attachEvent("onmouseover", MouseOveru674);
else u674.addEventListener("mouseover", MouseOveru674, true);
function MouseOveru674(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u674',e)) return;
if (true) {

	SetPanelState('u669', 'pd3u669','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Bright Purple</span></p>');

}

}

var u675 = document.getElementById('u675');
gv_vAlignTable['u675'] = 'center';
var u676 = document.getElementById('u676');

var u677 = document.getElementById('u677');
gv_vAlignTable['u677'] = 'center';
var u678 = document.getElementById('u678');

u678.style.cursor = 'pointer';
if (bIE) u678.attachEvent("onclick", Clicku678);
else u678.addEventListener("click", Clicku678, true);
function Clicku678(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u669', 'pd3u669','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u678.attachEvent("onmouseout", MouseOutu678);
else u678.addEventListener("mouseout", MouseOutu678, true);
function MouseOutu678(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u678',e)) return;
if (true) {

	SetPanelState('u669', 'pd0u669','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u679 = document.getElementById('u679');
gv_vAlignTable['u679'] = 'center';
var u41 = document.getElementById('u41');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u43 = document.getElementById('u43');

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'center';
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

SetWidgetSelected('u131');
}

}

if (bIE) u131.attachEvent("onmouseover", MouseOveru131);
else u131.addEventListener("mouseover", MouseOveru131, true);
function MouseOveru131(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u131',e)) return;
if (true) {

	SetPanelState('u128', 'pd1u128','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Tan</span></p>');

}

}

if (bIE) u131.attachEvent("onmouseout", MouseOutu131);
else u131.addEventListener("mouseout", MouseOutu131, true);
function MouseOutu131(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u131',e)) return;
if (true) {

	SetPanelState('u128', 'pd0u128','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'center';
var u133 = document.getElementById('u133');

var u690 = document.getElementById('u690');
gv_vAlignTable['u690'] = 'center';
var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'center';
var u136 = document.getElementById('u136');

u136.style.cursor = 'pointer';
if (bIE) u136.attachEvent("onclick", Clicku136);
else u136.addEventListener("click", Clicku136, true);
function Clicku136(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u136');
}

}

if (bIE) u136.attachEvent("onmouseover", MouseOveru136);
else u136.addEventListener("mouseover", MouseOveru136, true);
function MouseOveru136(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u136',e)) return;
if (true) {

	SetPanelState('u133', 'pd1u133','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Brown</span></p>');

}

}

if (bIE) u136.attachEvent("onmouseout", MouseOutu136);
else u136.addEventListener("mouseout", MouseOutu136, true);
function MouseOutu136(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u136',e)) return;
if (true) {

	SetPanelState('u133', 'pd0u133','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'center';
var u138 = document.getElementById('u138');

var u139 = document.getElementById('u139');

var u680 = document.getElementById('u680');

if (bIE) u680.attachEvent("onmouseover", MouseOveru680);
else u680.addEventListener("mouseover", MouseOveru680, true);
function MouseOveru680(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u680',e)) return;
if (true) {

	SetPanelState('u669', 'pd1u669','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Bright Purple</span></p>');

}

}

var u681 = document.getElementById('u681');
gv_vAlignTable['u681'] = 'center';
var u682 = document.getElementById('u682');

var u683 = document.getElementById('u683');

var u684 = document.getElementById('u684');
gv_vAlignTable['u684'] = 'center';
var u685 = document.getElementById('u685');

u685.style.cursor = 'pointer';
if (bIE) u685.attachEvent("onclick", Clicku685);
else u685.addEventListener("click", Clicku685, true);
function Clicku685(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u682', 'pd1u682','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u685.attachEvent("onmouseout", MouseOutu685);
else u685.addEventListener("mouseout", MouseOutu685, true);
function MouseOutu685(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u685',e)) return;
if (true) {

	SetPanelState('u682', 'pd2u682','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u686 = document.getElementById('u686');
gv_vAlignTable['u686'] = 'center';
var u687 = document.getElementById('u687');

if (bIE) u687.attachEvent("onmouseover", MouseOveru687);
else u687.addEventListener("mouseover", MouseOveru687, true);
function MouseOveru687(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u687',e)) return;
if (true) {

	SetPanelState('u682', 'pd3u682','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Bright Purple</span></p>');

}

}

var u688 = document.getElementById('u688');
gv_vAlignTable['u688'] = 'center';
var u689 = document.getElementById('u689');

var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u51 = document.getElementById('u51');

var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'center';
var u53 = document.getElementById('u53');

var u54 = document.getElementById('u54');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'center';
var u143 = document.getElementById('u143');

var u144 = document.getElementById('u144');

var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'center';
var u146 = document.getElementById('u146');

u146.style.cursor = 'pointer';
if (bIE) u146.attachEvent("onclick", Clicku146);
else u146.addEventListener("click", Clicku146, true);
function Clicku146(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u146');
}

}

if (bIE) u146.attachEvent("onmouseover", MouseOveru146);
else u146.addEventListener("mouseover", MouseOveru146, true);
function MouseOveru146(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u146',e)) return;
if (true) {

	SetPanelState('u143', 'pd1u143','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Olive</span></p>');

}

}

if (bIE) u146.attachEvent("onmouseout", MouseOutu146);
else u146.addEventListener("mouseout", MouseOutu146, true);
function MouseOutu146(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u146',e)) return;
if (true) {

	SetPanelState('u143', 'pd0u143','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'center';
var u148 = document.getElementById('u148');

var u500 = document.getElementById('u500');

var u501 = document.getElementById('u501');

var u502 = document.getElementById('u502');
gv_vAlignTable['u502'] = 'center';
var u503 = document.getElementById('u503');

u503.style.cursor = 'pointer';
if (bIE) u503.attachEvent("onclick", Clicku503);
else u503.addEventListener("click", Clicku503, true);
function Clicku503(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u500', 'pd1u500','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u503.attachEvent("onmouseout", MouseOutu503);
else u503.addEventListener("mouseout", MouseOutu503, true);
function MouseOutu503(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u503',e)) return;
if (true) {

	SetPanelState('u500', 'pd2u500','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

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
gv_vAlignTable['u60'] = 'top';
var u61 = document.getElementById('u61');

u61.style.cursor = 'pointer';
if (bIE) u61.attachEvent("onclick", Clicku61);
else u61.addEventListener("click", Clicku61, true);
function Clicku61(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u61');
}

}

if (bIE) u61.attachEvent("onmouseover", MouseOveru61);
else u61.addEventListener("mouseover", MouseOveru61, true);
function MouseOveru61(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u61',e)) return;
if (true) {

	SetPanelState('u53', 'pd1u53','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Black</span></p>');

}

}

if (bIE) u61.attachEvent("onmouseout", MouseOutu61);
else u61.addEventListener("mouseout", MouseOutu61, true);
function MouseOutu61(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u61',e)) return;
if (true) {

	SetPanelState('u53', 'pd1u53','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'center';
var u63 = document.getElementById('u63');

var u64 = document.getElementById('u64');

var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'center';
var u153 = document.getElementById('u153');

var u154 = document.getElementById('u154');

var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'center';
var u156 = document.getElementById('u156');

u156.style.cursor = 'pointer';
if (bIE) u156.attachEvent("onclick", Clicku156);
else u156.addEventListener("click", Clicku156, true);
function Clicku156(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u156');
}

}

if (bIE) u156.attachEvent("onmouseover", MouseOveru156);
else u156.addEventListener("mouseover", MouseOveru156, true);
function MouseOveru156(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u156',e)) return;
if (true) {

	SetPanelState('u153', 'pd1u153','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Yellow</span></p>');

}

}

if (bIE) u156.attachEvent("onmouseout", MouseOutu156);
else u156.addEventListener("mouseout", MouseOutu156, true);
function MouseOutu156(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u156',e)) return;
if (true) {

	SetPanelState('u153', 'pd0u153','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'center';
var u158 = document.getElementById('u158');

var u510 = document.getElementById('u510');
gv_vAlignTable['u510'] = 'center';
var u511 = document.getElementById('u511');

if (bIE) u511.attachEvent("onmouseover", MouseOveru511);
else u511.addEventListener("mouseover", MouseOveru511, true);
function MouseOveru511(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u511',e)) return;
if (true) {

	SetPanelState('u500', 'pd1u500','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Yellow</span></p>');

}

}

var u512 = document.getElementById('u512');
gv_vAlignTable['u512'] = 'center';
var u513 = document.getElementById('u513');

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


if (((GetCheckState('u26')) == (true)) && ((GetCheckState('u715')) == (true))) {

	MoveWidgetTo('u32', 2,128,'none',500);

	MoveWidgetTo('u38', 2,165,'none',500);

	MoveWidgetTo('u41', 160,300,'none',500);

SetGlobalVariableValue('$colorCount', '1');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

SetGlobalVariableValue('$printOption', 'multi');

SetCheckState('u715', true);

SetGlobalVariableValue('$showWhite', 'yes');

	SetPanelVisibility('u28','','none',500);

	SetPanelVisibility('u714','','none',500);

	SetPanelState('u13', 'pd1u13','none','',500,'none','',500);

	SetPanelState('u41', 'pd0u41','none','',500,'none','',500);

	SetPanelState('u248', 'pd0u248','none','',500,'none','',500);

	SetPanelState('u261', 'pd0u261','none','',500,'none','',500);

	SetPanelState('u274', 'pd0u274','none','',500,'none','',500);

	SetPanelState('u287', 'pd2u287','none','',500,'none','',500);

	SetPanelState('u300', 'pd0u300','none','',500,'none','',500);

	SetPanelState('u313', 'pd0u313','none','',500,'none','',500);

	SetPanelState('u326', 'pd0u326','none','',500,'none','',500);

	SetPanelState('u339', 'pd0u339','none','',500,'none','',500);

	SetPanelState('u352', 'pd0u352','none','',500,'none','',500);

	SetPanelState('u417', 'pd0u417','none','',500,'none','',500);

	SetPanelState('u404', 'pd0u404','none','',500,'none','',500);

	SetPanelState('u391', 'pd0u391','none','',500,'none','',500);

	SetPanelState('u430', 'pd0u430','none','',500,'none','',500);

	SetPanelState('u443', 'pd0u443','none','',500,'none','',500);

	SetPanelState('u456', 'pd0u456','none','',500,'none','',500);

	SetPanelState('u469', 'pd0u469','none','',500,'none','',500);

	SetPanelState('u487', 'pd0u487','none','',500,'none','',500);

	SetPanelState('u500', 'pd0u500','none','',500,'none','',500);

	SetPanelState('u513', 'pd0u513','none','',500,'none','',500);

	SetPanelState('u526', 'pd0u526','none','',500,'none','',500);

	SetPanelState('u539', 'pd0u539','none','',500,'none','',500);

	SetPanelState('u565', 'pd0u565','none','',500,'none','',500);

	SetPanelState('u578', 'pd0u578','none','',500,'none','',500);

	SetPanelVisibility('u36','hidden','none',500);

}
else
if (((GetCheckState('u715')) == (false)) && ((GetCheckState('u26')) == (true))) {

	MoveWidgetTo('u32', 2,128,'none',500);

	MoveWidgetTo('u38', 2,165,'none',500);

	MoveWidgetTo('u41', 160,300,'none',500);

SetGlobalVariableValue('$colorCount', '0');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">0 colors selected</span></p>');

SetGlobalVariableValue('$printOption', 'multi');

SetGlobalVariableValue('$showWhite', 'no');

	SetPanelVisibility('u28','','none',500);

	SetPanelVisibility('u714','','none',500);

	SetPanelState('u13', 'pd0u13','none','',500,'none','',500);

	SetPanelState('u41', 'pd0u41','none','',500,'none','',500);

	SetPanelState('u248', 'pd0u248','none','',500,'none','',500);

	SetPanelState('u261', 'pd0u261','none','',500,'none','',500);

	SetPanelState('u274', 'pd0u274','none','',500,'none','',500);

	SetPanelState('u287', 'pd0u287','none','',500,'none','',500);

	SetPanelState('u300', 'pd0u300','none','',500,'none','',500);

	SetPanelState('u313', 'pd0u313','none','',500,'none','',500);

	SetPanelState('u326', 'pd0u326','none','',500,'none','',500);

	SetPanelState('u339', 'pd0u339','none','',500,'none','',500);

	SetPanelState('u352', 'pd0u352','none','',500,'none','',500);

	SetPanelState('u417', 'pd0u417','none','',500,'none','',500);

	SetPanelState('u404', 'pd0u404','none','',500,'none','',500);

	SetPanelState('u391', 'pd0u391','none','',500,'none','',500);

	SetPanelState('u430', 'pd0u430','none','',500,'none','',500);

	SetPanelState('u443', 'pd0u443','none','',500,'none','',500);

	SetPanelState('u456', 'pd0u456','none','',500,'none','',500);

	SetPanelState('u469', 'pd0u469','none','',500,'none','',500);

	SetPanelState('u487', 'pd0u487','none','',500,'none','',500);

	SetPanelState('u500', 'pd0u500','none','',500,'none','',500);

	SetPanelState('u513', 'pd0u513','none','',500,'none','',500);

	SetPanelState('u526', 'pd0u526','none','',500,'none','',500);

	SetPanelState('u539', 'pd0u539','none','',500,'none','',500);

	SetPanelState('u565', 'pd0u565','none','',500,'none','',500);

	SetPanelState('u578', 'pd0u578','none','',500,'none','',500);

	SetPanelVisibility('u36','hidden','none',500);

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

u71.style.cursor = 'pointer';
if (bIE) u71.attachEvent("onclick", Clicku71);
else u71.addEventListener("click", Clicku71, true);
function Clicku71(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u71');
}

}

if (bIE) u71.attachEvent("onmouseover", MouseOveru71);
else u71.addEventListener("mouseover", MouseOveru71, true);
function MouseOveru71(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u71',e)) return;
if (true) {

	SetPanelState('u68', 'pd1u68','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Light Grey</span></p>');

}

}

if (bIE) u71.attachEvent("onmouseout", MouseOutu71);
else u71.addEventListener("mouseout", MouseOutu71, true);
function MouseOutu71(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u71',e)) return;
if (true) {

	SetPanelState('u68', 'pd0u68','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
var u73 = document.getElementById('u73');

var u74 = document.getElementById('u74');

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u164 = document.getElementById('u164');

var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'center';
var u166 = document.getElementById('u166');

u166.style.cursor = 'pointer';
if (bIE) u166.attachEvent("onclick", Clicku166);
else u166.addEventListener("click", Clicku166, true);
function Clicku166(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u166');
}

}

if (bIE) u166.attachEvent("onmouseover", MouseOveru166);
else u166.addEventListener("mouseover", MouseOveru166, true);
function MouseOveru166(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u166',e)) return;
if (true) {

	SetPanelState('u163', 'pd1u163','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Forest</span></p>');

}

}

if (bIE) u166.attachEvent("onmouseout", MouseOutu166);
else u166.addEventListener("mouseout", MouseOutu166, true);
function MouseOutu166(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u166',e)) return;
if (true) {

	SetPanelState('u163', 'pd0u163','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u79 = document.getElementById('u79');

var u168 = document.getElementById('u168');

var u520 = document.getElementById('u520');

var u521 = document.getElementById('u521');
gv_vAlignTable['u521'] = 'center';
var u522 = document.getElementById('u522');

u522.style.cursor = 'pointer';
if (bIE) u522.attachEvent("onclick", Clicku522);
else u522.addEventListener("click", Clicku522, true);
function Clicku522(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u513', 'pd3u513','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u522.attachEvent("onmouseout", MouseOutu522);
else u522.addEventListener("mouseout", MouseOutu522, true);
function MouseOutu522(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u522',e)) return;
if (true) {

	SetPanelState('u513', 'pd0u513','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u523 = document.getElementById('u523');
gv_vAlignTable['u523'] = 'center';
var u30 = document.getElementById('u30');

u30.style.cursor = 'pointer';
if (bIE) u30.attachEvent("onclick", Clicku30);
else u30.addEventListener("click", Clicku30, true);
function Clicku30(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u41', 'pd3u41','none','',500,'none','',500);

}

}

var u525 = document.getElementById('u525');
gv_vAlignTable['u525'] = 'center';
var u526 = document.getElementById('u526');

var u527 = document.getElementById('u527');

var u528 = document.getElementById('u528');
gv_vAlignTable['u528'] = 'center';
var u529 = document.getElementById('u529');

u529.style.cursor = 'pointer';
if (bIE) u529.attachEvent("onclick", Clicku529);
else u529.addEventListener("click", Clicku529, true);
function Clicku529(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u526', 'pd1u526','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u529.attachEvent("onmouseout", MouseOutu529);
else u529.addEventListener("mouseout", MouseOutu529, true);
function MouseOutu529(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u529',e)) return;
if (true) {

	SetPanelState('u526', 'pd2u526','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

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


if ((GetCheckState('u715')) == (true)) {

SetGlobalVariableValue('$colorCount', '8');

SetGlobalVariableValue('$printOption', 'full');

	SetPanelVisibility('u714','','none',500);

	SetPanelState('u41', 'pd1u41','none','',500,'none','',500);

	SetPanelState('u13', 'pd1u13','none','',500,'none','',500);

	SetPanelVisibility('u28','hidden','none',500);

	SetPanelVisibility('u36','hidden','none',500);

	MoveWidgetTo('u32', 2,50,'none',500);

	MoveWidgetTo('u38', 2,80,'none',500);

	MoveWidgetTo('u41', 160,205,'none',500);

}
else
if (true) {

SetGlobalVariableValue('$colorCount', '8');

SetGlobalVariableValue('$printOption', 'full');

SetGlobalVariableValue('$showWhite', 'no');

	SetPanelState('u41', 'pd1u41','none','',500,'none','',500);

	SetPanelState('u13', 'pd0u13','none','',500,'none','',500);

	SetPanelVisibility('u28','hidden','none',500);

	SetPanelVisibility('u36','hidden','none',500);

	SetPanelVisibility('u714','','none',500);

	MoveWidgetTo('u32', 2,50,'none',500);

	MoveWidgetTo('u38', 2,80,'none',500);

	MoveWidgetTo('u41', 160,205,'none',500);

}

}

var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'center';
var u81 = document.getElementById('u81');

u81.style.cursor = 'pointer';
if (bIE) u81.attachEvent("onclick", Clicku81);
else u81.addEventListener("click", Clicku81, true);
function Clicku81(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u81');
}

}

if (bIE) u81.attachEvent("onmouseover", MouseOveru81);
else u81.addEventListener("mouseover", MouseOveru81, true);
function MouseOveru81(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u81',e)) return;
if (true) {

	SetPanelState('u78', 'pd1u78','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Cardinal</span></p>');

}

}

if (bIE) u81.attachEvent("onmouseout", MouseOutu81);
else u81.addEventListener("mouseout", MouseOutu81, true);
function MouseOutu81(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u81',e)) return;
if (true) {

	SetPanelState('u78', 'pd0u78','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'center';
var u83 = document.getElementById('u83');

var u84 = document.getElementById('u84');

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'center';
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

SetWidgetSelected('u176');
}

}

if (bIE) u176.attachEvent("onmouseover", MouseOveru176);
else u176.addEventListener("mouseover", MouseOveru176, true);
function MouseOveru176(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u176',e)) return;
if (true) {

	SetPanelState('u173', 'pd1u173','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Teal</span></p>');

}

}

if (bIE) u176.attachEvent("onmouseout", MouseOutu176);
else u176.addEventListener("mouseout", MouseOutu176, true);
function MouseOutu176(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u176',e)) return;
if (true) {

	SetPanelState('u173', 'pd0u173','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'center';
var u178 = document.getElementById('u178');

var u530 = document.getElementById('u530');
gv_vAlignTable['u530'] = 'center';
var u531 = document.getElementById('u531');

if (bIE) u531.attachEvent("onmouseover", MouseOveru531);
else u531.addEventListener("mouseover", MouseOveru531, true);
function MouseOveru531(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u531',e)) return;
if (true) {

	SetPanelState('u526', 'pd3u526','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Forest</span></p>');

}

}

var u532 = document.getElementById('u532');
gv_vAlignTable['u532'] = 'center';
var u533 = document.getElementById('u533');

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u535 = document.getElementById('u535');

u535.style.cursor = 'pointer';
if (bIE) u535.attachEvent("onclick", Clicku535);
else u535.addEventListener("click", Clicku535, true);
function Clicku535(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u526', 'pd3u526','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u535.attachEvent("onmouseout", MouseOutu535);
else u535.addEventListener("mouseout", MouseOutu535, true);
function MouseOutu535(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u535',e)) return;
if (true) {

	SetPanelState('u526', 'pd0u526','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u536 = document.getElementById('u536');
gv_vAlignTable['u536'] = 'center';
var u537 = document.getElementById('u537');

if (bIE) u537.attachEvent("onmouseover", MouseOveru537);
else u537.addEventListener("mouseover", MouseOveru537, true);
function MouseOveru537(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u537',e)) return;
if (true) {

	SetPanelState('u526', 'pd1u526','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Forest</span></p>');

}

}

var u538 = document.getElementById('u538');
gv_vAlignTable['u538'] = 'center';
var u539 = document.getElementById('u539');

var u46 = document.getElementById('u46');

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u49 = document.getElementById('u49');

u49.style.cursor = 'pointer';
if (bIE) u49.attachEvent("onclick", Clicku49);
else u49.addEventListener("click", Clicku49, true);
function Clicku49(e)
{
windowEvent = e;


if ((GetCheckState('u26')) == (true)) {

	SetPanelState('u41', 'pd0u41','none','',500,'none','',500);

}
else
if ((GetCheckState('u39')) == (true)) {

	SetPanelState('u41', 'pd1u41','none','',500,'none','',500);

}
else
if (true) {

	SetPanelVisibility('u41','hidden','none',500);

}

}
gv_vAlignTable['u49'] = 'top';
var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'center';
var u91 = document.getElementById('u91');

u91.style.cursor = 'pointer';
if (bIE) u91.attachEvent("onclick", Clicku91);
else u91.addEventListener("click", Clicku91, true);
function Clicku91(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u91');
}

}

if (bIE) u91.attachEvent("onmouseover", MouseOveru91);
else u91.addEventListener("mouseover", MouseOveru91, true);
function MouseOveru91(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u91',e)) return;
if (true) {

	SetPanelState('u88', 'pd1u88','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Orange Red</span></p>');

}

}

if (bIE) u91.attachEvent("onmouseout", MouseOutu91);
else u91.addEventListener("mouseout", MouseOutu91, true);
function MouseOutu91(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u91',e)) return;
if (true) {

	SetPanelState('u88', 'pd0u88','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'center';
var u93 = document.getElementById('u93');

var u94 = document.getElementById('u94');

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u186 = document.getElementById('u186');

u186.style.cursor = 'pointer';
if (bIE) u186.attachEvent("onclick", Clicku186);
else u186.addEventListener("click", Clicku186, true);
function Clicku186(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u186');
}

}

if (bIE) u186.attachEvent("onmouseover", MouseOveru186);
else u186.addEventListener("mouseover", MouseOveru186, true);
function MouseOveru186(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u186',e)) return;
if (true) {

	SetPanelState('u183', 'pd1u183','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Lime</span></p>');

}

}

if (bIE) u186.attachEvent("onmouseout", MouseOutu186);
else u186.addEventListener("mouseout", MouseOutu186, true);
function MouseOutu186(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u186',e)) return;
if (true) {

	SetPanelState('u183', 'pd0u183','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'center';
var u188 = document.getElementById('u188');

var u540 = document.getElementById('u540');

var u541 = document.getElementById('u541');
gv_vAlignTable['u541'] = 'center';
var u542 = document.getElementById('u542');

u542.style.cursor = 'pointer';
if (bIE) u542.attachEvent("onclick", Clicku542);
else u542.addEventListener("click", Clicku542, true);
function Clicku542(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u539', 'pd1u539','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u542.attachEvent("onmouseout", MouseOutu542);
else u542.addEventListener("mouseout", MouseOutu542, true);
function MouseOutu542(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u542',e)) return;
if (true) {

	SetPanelState('u539', 'pd2u539','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u543 = document.getElementById('u543');
gv_vAlignTable['u543'] = 'center';
var u544 = document.getElementById('u544');

if (bIE) u544.attachEvent("onmouseover", MouseOveru544);
else u544.addEventListener("mouseover", MouseOveru544, true);
function MouseOveru544(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u544',e)) return;
if (true) {

	SetPanelState('u539', 'pd3u539','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Kelly Green</span></p>');

}

}

var u545 = document.getElementById('u545');
gv_vAlignTable['u545'] = 'center';
var u546 = document.getElementById('u546');

var u547 = document.getElementById('u547');
gv_vAlignTable['u547'] = 'center';
var u548 = document.getElementById('u548');

u548.style.cursor = 'pointer';
if (bIE) u548.attachEvent("onclick", Clicku548);
else u548.addEventListener("click", Clicku548, true);
function Clicku548(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u539', 'pd3u539','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u548.attachEvent("onmouseout", MouseOutu548);
else u548.addEventListener("mouseout", MouseOutu548, true);
function MouseOutu548(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u548',e)) return;
if (true) {

	SetPanelState('u539', 'pd0u539','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u549 = document.getElementById('u549');
gv_vAlignTable['u549'] = 'center';
var u56 = document.getElementById('u56');

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'center';
var u191 = document.getElementById('u191');

u191.style.cursor = 'pointer';
if (bIE) u191.attachEvent("onclick", Clicku191);
else u191.addEventListener("click", Clicku191, true);
function Clicku191(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u191');
}

}

if (bIE) u191.attachEvent("onmouseover", MouseOveru191);
else u191.addEventListener("mouseover", MouseOveru191, true);
function MouseOveru191(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u191',e)) return;
if (true) {

	SetPanelState('u188', 'pd1u188','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Navy</span></p>');

}

}

if (bIE) u191.attachEvent("onmouseout", MouseOutu191);
else u191.addEventListener("mouseout", MouseOutu191, true);
function MouseOutu191(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u191',e)) return;
if (true) {

	SetPanelState('u188', 'pd0u188','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

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


if (true) {

SetWidgetSelected('u196');
}

}

if (bIE) u196.attachEvent("onmouseover", MouseOveru196);
else u196.addEventListener("mouseover", MouseOveru196, true);
function MouseOveru196(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u196',e)) return;
if (true) {

	SetPanelState('u193', 'pd1u193','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Royal</span></p>');

}

}

if (bIE) u196.attachEvent("onmouseout", MouseOutu196);
else u196.addEventListener("mouseout", MouseOutu196, true);
function MouseOutu196(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u196',e)) return;
if (true) {

	SetPanelState('u193', 'pd0u193','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'center';
var u198 = document.getElementById('u198');

var u550 = document.getElementById('u550');

if (bIE) u550.attachEvent("onmouseover", MouseOveru550);
else u550.addEventListener("mouseover", MouseOveru550, true);
function MouseOveru550(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u550',e)) return;
if (true) {

	SetPanelState('u539', 'pd1u539','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Kelly Green</span></p>');

}

}

var u551 = document.getElementById('u551');
gv_vAlignTable['u551'] = 'center';
var u552 = document.getElementById('u552');

var u553 = document.getElementById('u553');

var u554 = document.getElementById('u554');
gv_vAlignTable['u554'] = 'center';
var u555 = document.getElementById('u555');

u555.style.cursor = 'pointer';
if (bIE) u555.attachEvent("onclick", Clicku555);
else u555.addEventListener("click", Clicku555, true);
function Clicku555(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u552', 'pd1u552','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u555.attachEvent("onmouseout", MouseOutu555);
else u555.addEventListener("mouseout", MouseOutu555, true);
function MouseOutu555(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u555',e)) return;
if (true) {

	SetPanelState('u552', 'pd2u552','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u556 = document.getElementById('u556');
gv_vAlignTable['u556'] = 'center';
var u557 = document.getElementById('u557');

if (bIE) u557.attachEvent("onmouseover", MouseOveru557);
else u557.addEventListener("mouseover", MouseOveru557, true);
function MouseOveru557(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u557',e)) return;
if (true) {

	SetPanelState('u552', 'pd3u552','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Teal</span></p>');

}

}

var u558 = document.getElementById('u558');
gv_vAlignTable['u558'] = 'center';
var u559 = document.getElementById('u559');

var u66 = document.getElementById('u66');

u66.style.cursor = 'pointer';
if (bIE) u66.attachEvent("onclick", Clicku66);
else u66.addEventListener("click", Clicku66, true);
function Clicku66(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u66');
}

}

if (bIE) u66.attachEvent("onmouseover", MouseOveru66);
else u66.addEventListener("mouseover", MouseOveru66, true);
function MouseOveru66(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u66',e)) return;
if (true) {

	SetPanelState('u63', 'pd1u63','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Grey</span></p>');

}

}

if (bIE) u66.attachEvent("onmouseout", MouseOutu66);
else u66.addEventListener("mouseout", MouseOutu66, true);
function MouseOutu66(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u66',e)) return;
if (true) {

	SetPanelState('u63', 'pd0u63','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u68 = document.getElementById('u68');

var u69 = document.getElementById('u69');

var u560 = document.getElementById('u560');
gv_vAlignTable['u560'] = 'center';
var u561 = document.getElementById('u561');

u561.style.cursor = 'pointer';
if (bIE) u561.attachEvent("onclick", Clicku561);
else u561.addEventListener("click", Clicku561, true);
function Clicku561(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u552', 'pd3u552','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u561.attachEvent("onmouseout", MouseOutu561);
else u561.addEventListener("mouseout", MouseOutu561, true);
function MouseOutu561(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u561',e)) return;
if (true) {

	SetPanelState('u552', 'pd0u552','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u562 = document.getElementById('u562');
gv_vAlignTable['u562'] = 'center';
var u563 = document.getElementById('u563');

if (bIE) u563.attachEvent("onmouseover", MouseOveru563);
else u563.addEventListener("mouseover", MouseOveru563, true);
function MouseOveru563(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u563',e)) return;
if (true) {

	SetPanelState('u552', 'pd1u552','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Teal</span></p>');

}

}

var u564 = document.getElementById('u564');
gv_vAlignTable['u564'] = 'center';
var u565 = document.getElementById('u565');

var u566 = document.getElementById('u566');

var u567 = document.getElementById('u567');
gv_vAlignTable['u567'] = 'center';
var u568 = document.getElementById('u568');

u568.style.cursor = 'pointer';
if (bIE) u568.attachEvent("onclick", Clicku568);
else u568.addEventListener("click", Clicku568, true);
function Clicku568(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u565', 'pd1u565','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u568.attachEvent("onmouseout", MouseOutu568);
else u568.addEventListener("mouseout", MouseOutu568, true);
function MouseOutu568(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u568',e)) return;
if (true) {

	SetPanelState('u565', 'pd2u565','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u569 = document.getElementById('u569');
gv_vAlignTable['u569'] = 'center';
var u76 = document.getElementById('u76');

u76.style.cursor = 'pointer';
if (bIE) u76.attachEvent("onclick", Clicku76);
else u76.addEventListener("click", Clicku76, true);
function Clicku76(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u76');
}

}

if (bIE) u76.attachEvent("onmouseover", MouseOveru76);
else u76.addEventListener("mouseover", MouseOveru76, true);
function MouseOveru76(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u76',e)) return;
if (true) {

	SetPanelState('u73', 'pd1u73','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> White</span></p>');

}

}

if (bIE) u76.attachEvent("onmouseout", MouseOutu76);
else u76.addEventListener("mouseout", MouseOutu76, true);
function MouseOutu76(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u76',e)) return;
if (true) {

	SetPanelState('u73', 'pd0u73','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
var u78 = document.getElementById('u78');

var u249 = document.getElementById('u249');

var u570 = document.getElementById('u570');

if (bIE) u570.attachEvent("onmouseover", MouseOveru570);
else u570.addEventListener("mouseover", MouseOveru570, true);
function MouseOveru570(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u570',e)) return;
if (true) {

	SetPanelState('u565', 'pd3u565','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Green</span></p>');

}

}

var u571 = document.getElementById('u571');
gv_vAlignTable['u571'] = 'center';
var u572 = document.getElementById('u572');

var u573 = document.getElementById('u573');
gv_vAlignTable['u573'] = 'center';
var u574 = document.getElementById('u574');

u574.style.cursor = 'pointer';
if (bIE) u574.attachEvent("onclick", Clicku574);
else u574.addEventListener("click", Clicku574, true);
function Clicku574(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u565', 'pd3u565','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u574.attachEvent("onmouseout", MouseOutu574);
else u574.addEventListener("mouseout", MouseOutu574, true);
function MouseOutu574(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u574',e)) return;
if (true) {

	SetPanelState('u565', 'pd0u565','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u575 = document.getElementById('u575');
gv_vAlignTable['u575'] = 'center';
var u576 = document.getElementById('u576');

if (bIE) u576.attachEvent("onmouseover", MouseOveru576);
else u576.addEventListener("mouseover", MouseOveru576, true);
function MouseOveru576(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u576',e)) return;
if (true) {

	SetPanelState('u565', 'pd1u565','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Green</span></p>');

}

}

var u577 = document.getElementById('u577');
gv_vAlignTable['u577'] = 'center';
var u578 = document.getElementById('u578');

var u579 = document.getElementById('u579');

var u86 = document.getElementById('u86');

u86.style.cursor = 'pointer';
if (bIE) u86.attachEvent("onclick", Clicku86);
else u86.addEventListener("click", Clicku86, true);
function Clicku86(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u86');
}

}

if (bIE) u86.attachEvent("onmouseover", MouseOveru86);
else u86.addEventListener("mouseover", MouseOveru86, true);
function MouseOveru86(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u86',e)) return;
if (true) {

	SetPanelState('u83', 'pd1u83','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Red</span></p>');

}

}

if (bIE) u86.attachEvent("onmouseout", MouseOutu86);
else u86.addEventListener("mouseout", MouseOutu86, true);
function MouseOutu86(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u86',e)) return;
if (true) {

	SetPanelState('u83', 'pd0u83','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'center';
var u88 = document.getElementById('u88');

var u89 = document.getElementById('u89');

var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'center';
var u580 = document.getElementById('u580');
gv_vAlignTable['u580'] = 'center';
var u581 = document.getElementById('u581');

u581.style.cursor = 'pointer';
if (bIE) u581.attachEvent("onclick", Clicku581);
else u581.addEventListener("click", Clicku581, true);
function Clicku581(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u578', 'pd1u578','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u581.attachEvent("onmouseout", MouseOutu581);
else u581.addEventListener("mouseout", MouseOutu581, true);
function MouseOutu581(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u581',e)) return;
if (true) {

	SetPanelState('u578', 'pd2u578','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u582 = document.getElementById('u582');
gv_vAlignTable['u582'] = 'center';
var u583 = document.getElementById('u583');

if (bIE) u583.attachEvent("onmouseover", MouseOveru583);
else u583.addEventListener("mouseover", MouseOveru583, true);
function MouseOveru583(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u583',e)) return;
if (true) {

	SetPanelState('u578', 'pd3u578','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Lime</span></p>');

}

}

var u584 = document.getElementById('u584');
gv_vAlignTable['u584'] = 'center';
var u585 = document.getElementById('u585');

var u586 = document.getElementById('u586');
gv_vAlignTable['u586'] = 'center';
var u587 = document.getElementById('u587');

u587.style.cursor = 'pointer';
if (bIE) u587.attachEvent("onclick", Clicku587);
else u587.addEventListener("click", Clicku587, true);
function Clicku587(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u578', 'pd3u578','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u587.attachEvent("onmouseout", MouseOutu587);
else u587.addEventListener("mouseout", MouseOutu587, true);
function MouseOutu587(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u587',e)) return;
if (true) {

	SetPanelState('u578', 'pd0u578','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u588 = document.getElementById('u588');
gv_vAlignTable['u588'] = 'center';
var u589 = document.getElementById('u589');

if (bIE) u589.attachEvent("onmouseover", MouseOveru589);
else u589.addEventListener("mouseover", MouseOveru589, true);
function MouseOveru589(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u589',e)) return;
if (true) {

	SetPanelState('u578', 'pd1u578','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Lime</span></p>');

}

}

var u96 = document.getElementById('u96');

u96.style.cursor = 'pointer';
if (bIE) u96.attachEvent("onclick", Clicku96);
else u96.addEventListener("click", Clicku96, true);
function Clicku96(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u96');
}

}

if (bIE) u96.attachEvent("onmouseover", MouseOveru96);
else u96.addEventListener("mouseover", MouseOveru96, true);
function MouseOveru96(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u96',e)) return;
if (true) {

	SetPanelState('u93', 'pd1u93','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Pink</span></p>');

}

}

if (bIE) u96.attachEvent("onmouseout", MouseOutu96);
else u96.addEventListener("mouseout", MouseOutu96, true);
function MouseOutu96(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u96',e)) return;
if (true) {

	SetPanelState('u93', 'pd0u93','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'center';
var u98 = document.getElementById('u98');

var u99 = document.getElementById('u99');

var u199 = document.getElementById('u199');

var u400 = document.getElementById('u400');

u400.style.cursor = 'pointer';
if (bIE) u400.attachEvent("onclick", Clicku400);
else u400.addEventListener("click", Clicku400, true);
function Clicku400(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u391', 'pd3u391','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u400.attachEvent("onmouseout", MouseOutu400);
else u400.addEventListener("mouseout", MouseOutu400, true);
function MouseOutu400(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u400',e)) return;
if (true) {

	SetPanelState('u391', 'pd0u391','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u401 = document.getElementById('u401');
gv_vAlignTable['u401'] = 'center';
var u402 = document.getElementById('u402');

if (bIE) u402.attachEvent("onmouseover", MouseOveru402);
else u402.addEventListener("mouseover", MouseOveru402, true);
function MouseOveru402(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u402',e)) return;
if (true) {

	SetPanelState('u391', 'pd1u391','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Orange</span></p>');

}

}

var u590 = document.getElementById('u590');
gv_vAlignTable['u590'] = 'center';
var u591 = document.getElementById('u591');

var u405 = document.getElementById('u405');

var u406 = document.getElementById('u406');
gv_vAlignTable['u406'] = 'center';
var u407 = document.getElementById('u407');

u407.style.cursor = 'pointer';
if (bIE) u407.attachEvent("onclick", Clicku407);
else u407.addEventListener("click", Clicku407, true);
function Clicku407(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u404', 'pd1u404','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u407.attachEvent("onmouseout", MouseOutu407);
else u407.addEventListener("mouseout", MouseOutu407, true);
function MouseOutu407(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u407',e)) return;
if (true) {

	SetPanelState('u404', 'pd2u404','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u408 = document.getElementById('u408');
gv_vAlignTable['u408'] = 'center';
var u409 = document.getElementById('u409');

if (bIE) u409.attachEvent("onmouseover", MouseOveru409);
else u409.addEventListener("mouseover", MouseOveru409, true);
function MouseOveru409(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u409',e)) return;
if (true) {

	SetPanelState('u404', 'pd3u404','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Light Orange</span></p>');

}

}

var u597 = document.getElementById('u597');
gv_vAlignTable['u597'] = 'center';
var u598 = document.getElementById('u598');

var u599 = document.getElementById('u599');
gv_vAlignTable['u599'] = 'center';
var u410 = document.getElementById('u410');
gv_vAlignTable['u410'] = 'center';
var u411 = document.getElementById('u411');

var u412 = document.getElementById('u412');
gv_vAlignTable['u412'] = 'center';
var u413 = document.getElementById('u413');

u413.style.cursor = 'pointer';
if (bIE) u413.attachEvent("onclick", Clicku413);
else u413.addEventListener("click", Clicku413, true);
function Clicku413(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u404', 'pd3u404','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u413.attachEvent("onmouseout", MouseOutu413);
else u413.addEventListener("mouseout", MouseOutu413, true);
function MouseOutu413(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u413',e)) return;
if (true) {

	SetPanelState('u404', 'pd0u404','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u414 = document.getElementById('u414');
gv_vAlignTable['u414'] = 'center';
var u415 = document.getElementById('u415');

if (bIE) u415.attachEvent("onmouseover", MouseOveru415);
else u415.addEventListener("mouseover", MouseOveru415, true);
function MouseOveru415(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u415',e)) return;
if (true) {

	SetPanelState('u404', 'pd1u404','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Light Orange</span></p>');

}

}

var u416 = document.getElementById('u416');
gv_vAlignTable['u416'] = 'center';
var u417 = document.getElementById('u417');

var u418 = document.getElementById('u418');

var u419 = document.getElementById('u419');
gv_vAlignTable['u419'] = 'center';
var u109 = document.getElementById('u109');

var u620 = document.getElementById('u620');

u620.style.cursor = 'pointer';
if (bIE) u620.attachEvent("onclick", Clicku620);
else u620.addEventListener("click", Clicku620, true);
function Clicku620(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u617', 'pd1u617','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u620.attachEvent("onmouseout", MouseOutu620);
else u620.addEventListener("mouseout", MouseOutu620, true);
function MouseOutu620(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u620',e)) return;
if (true) {

	SetPanelState('u617', 'pd2u617','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u420 = document.getElementById('u420');

u420.style.cursor = 'pointer';
if (bIE) u420.attachEvent("onclick", Clicku420);
else u420.addEventListener("click", Clicku420, true);
function Clicku420(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u417', 'pd1u417','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u420.attachEvent("onmouseout", MouseOutu420);
else u420.addEventListener("mouseout", MouseOutu420, true);
function MouseOutu420(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u420',e)) return;
if (true) {

	SetPanelState('u417', 'pd2u417','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u421 = document.getElementById('u421');
gv_vAlignTable['u421'] = 'center';
var u422 = document.getElementById('u422');

if (bIE) u422.attachEvent("onmouseover", MouseOveru422);
else u422.addEventListener("mouseover", MouseOveru422, true);
function MouseOveru422(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u422',e)) return;
if (true) {

	SetPanelState('u417', 'pd3u417','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Athletic Gold</span></p>');

}

}

var u423 = document.getElementById('u423');
gv_vAlignTable['u423'] = 'center';
var u424 = document.getElementById('u424');

var u425 = document.getElementById('u425');
gv_vAlignTable['u425'] = 'center';
var u426 = document.getElementById('u426');

u426.style.cursor = 'pointer';
if (bIE) u426.attachEvent("onclick", Clicku426);
else u426.addEventListener("click", Clicku426, true);
function Clicku426(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u417', 'pd3u417','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u426.attachEvent("onmouseout", MouseOutu426);
else u426.addEventListener("mouseout", MouseOutu426, true);
function MouseOutu426(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u426',e)) return;
if (true) {

	SetPanelState('u417', 'pd0u417','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u427 = document.getElementById('u427');
gv_vAlignTable['u427'] = 'center';
var u428 = document.getElementById('u428');

if (bIE) u428.attachEvent("onmouseover", MouseOveru428);
else u428.addEventListener("mouseover", MouseOveru428, true);
function MouseOveru428(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u428',e)) return;
if (true) {

	SetPanelState('u417', 'pd1u417','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Athletic Gold</span></p>');

}

}

var u610 = document.getElementById('u610');
gv_vAlignTable['u610'] = 'center';
var u430 = document.getElementById('u430');

var u431 = document.getElementById('u431');

var u432 = document.getElementById('u432');
gv_vAlignTable['u432'] = 'center';
var u433 = document.getElementById('u433');

u433.style.cursor = 'pointer';
if (bIE) u433.attachEvent("onclick", Clicku433);
else u433.addEventListener("click", Clicku433, true);
function Clicku433(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u430', 'pd1u430','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u433.attachEvent("onmouseout", MouseOutu433);
else u433.addEventListener("mouseout", MouseOutu433, true);
function MouseOutu433(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u433',e)) return;
if (true) {

	SetPanelState('u430', 'pd2u430','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u434 = document.getElementById('u434');
gv_vAlignTable['u434'] = 'center';
var u435 = document.getElementById('u435');

if (bIE) u435.attachEvent("onmouseover", MouseOveru435);
else u435.addEventListener("mouseover", MouseOveru435, true);
function MouseOveru435(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u435',e)) return;
if (true) {

	SetPanelState('u430', 'pd3u430','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Tan</span></p>');

}

}

var u436 = document.getElementById('u436');
gv_vAlignTable['u436'] = 'center';
var u437 = document.getElementById('u437');

var u438 = document.getElementById('u438');
gv_vAlignTable['u438'] = 'center';
var u439 = document.getElementById('u439');

u439.style.cursor = 'pointer';
if (bIE) u439.attachEvent("onclick", Clicku439);
else u439.addEventListener("click", Clicku439, true);
function Clicku439(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u430', 'pd3u430','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u439.attachEvent("onmouseout", MouseOutu439);
else u439.addEventListener("mouseout", MouseOutu439, true);
function MouseOutu439(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u439',e)) return;
if (true) {

	SetPanelState('u430', 'pd0u430','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u440 = document.getElementById('u440');
gv_vAlignTable['u440'] = 'center';
var u441 = document.getElementById('u441');

if (bIE) u441.attachEvent("onmouseover", MouseOveru441);
else u441.addEventListener("mouseover", MouseOveru441, true);
function MouseOveru441(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u441',e)) return;
if (true) {

	SetPanelState('u430', 'pd1u430','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Tan</span></p>');

}

}

var u442 = document.getElementById('u442');
gv_vAlignTable['u442'] = 'center';
var u443 = document.getElementById('u443');

var u444 = document.getElementById('u444');

var u445 = document.getElementById('u445');
gv_vAlignTable['u445'] = 'center';
var u446 = document.getElementById('u446');

u446.style.cursor = 'pointer';
if (bIE) u446.attachEvent("onclick", Clicku446);
else u446.addEventListener("click", Clicku446, true);
function Clicku446(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u443', 'pd1u443','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u446.attachEvent("onmouseout", MouseOutu446);
else u446.addEventListener("mouseout", MouseOutu446, true);
function MouseOutu446(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u446',e)) return;
if (true) {

	SetPanelState('u443', 'pd2u443','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u447 = document.getElementById('u447');
gv_vAlignTable['u447'] = 'center';
var u448 = document.getElementById('u448');

if (bIE) u448.attachEvent("onmouseover", MouseOveru448);
else u448.addEventListener("mouseover", MouseOveru448, true);
function MouseOveru448(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u448',e)) return;
if (true) {

	SetPanelState('u443', 'pd3u443','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Brown</span></p>');

}

}

var u449 = document.getElementById('u449');
gv_vAlignTable['u449'] = 'center';
var u630 = document.getElementById('u630');

var u450 = document.getElementById('u450');

var u451 = document.getElementById('u451');
gv_vAlignTable['u451'] = 'center';
var u452 = document.getElementById('u452');

u452.style.cursor = 'pointer';
if (bIE) u452.attachEvent("onclick", Clicku452);
else u452.addEventListener("click", Clicku452, true);
function Clicku452(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u443', 'pd3u443','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u452.attachEvent("onmouseout", MouseOutu452);
else u452.addEventListener("mouseout", MouseOutu452, true);
function MouseOutu452(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u452',e)) return;
if (true) {

	SetPanelState('u443', 'pd0u443','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u453 = document.getElementById('u453');
gv_vAlignTable['u453'] = 'center';
var u454 = document.getElementById('u454');

if (bIE) u454.attachEvent("onmouseover", MouseOveru454);
else u454.addEventListener("mouseover", MouseOveru454, true);
function MouseOveru454(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u454',e)) return;
if (true) {

	SetPanelState('u443', 'pd1u443','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Brown</span></p>');

}

}

var u455 = document.getElementById('u455');
gv_vAlignTable['u455'] = 'center';
var u456 = document.getElementById('u456');

var u457 = document.getElementById('u457');

var u458 = document.getElementById('u458');
gv_vAlignTable['u458'] = 'center';
var u459 = document.getElementById('u459');

u459.style.cursor = 'pointer';
if (bIE) u459.attachEvent("onclick", Clicku459);
else u459.addEventListener("click", Clicku459, true);
function Clicku459(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u456', 'pd1u456','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u459.attachEvent("onmouseout", MouseOutu459);
else u459.addEventListener("mouseout", MouseOutu459, true);
function MouseOutu459(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u459',e)) return;
if (true) {

	SetPanelState('u456', 'pd2u456','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u640 = document.getElementById('u640');
gv_vAlignTable['u640'] = 'center';
var u149 = document.getElementById('u149');

var u649 = document.getElementById('u649');
gv_vAlignTable['u649'] = 'center';
var u460 = document.getElementById('u460');
gv_vAlignTable['u460'] = 'center';
var u461 = document.getElementById('u461');

if (bIE) u461.attachEvent("onmouseover", MouseOveru461);
else u461.addEventListener("mouseover", MouseOveru461, true);
function MouseOveru461(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u461',e)) return;
if (true) {

	SetPanelState('u456', 'pd3u456','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Old Gold</span></p>');

}

}

var u462 = document.getElementById('u462');
gv_vAlignTable['u462'] = 'center';
var u463 = document.getElementById('u463');

var u464 = document.getElementById('u464');
gv_vAlignTable['u464'] = 'center';
var u465 = document.getElementById('u465');

u465.style.cursor = 'pointer';
if (bIE) u465.attachEvent("onclick", Clicku465);
else u465.addEventListener("click", Clicku465, true);
function Clicku465(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u456', 'pd3u456','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u465.attachEvent("onmouseout", MouseOutu465);
else u465.addEventListener("mouseout", MouseOutu465, true);
function MouseOutu465(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u465',e)) return;
if (true) {

	SetPanelState('u456', 'pd0u456','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u466 = document.getElementById('u466');
gv_vAlignTable['u466'] = 'center';
var u467 = document.getElementById('u467');

if (bIE) u467.attachEvent("onmouseover", MouseOveru467);
else u467.addEventListener("mouseover", MouseOveru467, true);
function MouseOveru467(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u467',e)) return;
if (true) {

	SetPanelState('u456', 'pd1u456','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Old Gold</span></p>');

}

}

var u468 = document.getElementById('u468');
gv_vAlignTable['u468'] = 'center';
var u469 = document.getElementById('u469');

var u650 = document.getElementById('u650');

var u159 = document.getElementById('u159');

var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u470 = document.getElementById('u470');

var u471 = document.getElementById('u471');
gv_vAlignTable['u471'] = 'center';
var u472 = document.getElementById('u472');

u472.style.cursor = 'pointer';
if (bIE) u472.attachEvent("onclick", Clicku472);
else u472.addEventListener("click", Clicku472, true);
function Clicku472(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u469', 'pd1u469','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u472.attachEvent("onmouseout", MouseOutu472);
else u472.addEventListener("mouseout", MouseOutu472, true);
function MouseOutu472(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u472',e)) return;
if (true) {

	SetPanelState('u469', 'pd2u469','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u473 = document.getElementById('u473');
gv_vAlignTable['u473'] = 'center';
var u474 = document.getElementById('u474');

if (bIE) u474.attachEvent("onmouseover", MouseOveru474);
else u474.addEventListener("mouseover", MouseOveru474, true);
function MouseOveru474(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u474',e)) return;
if (true) {

	SetPanelState('u469', 'pd3u469','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Olive</span></p>');

}

}

var u475 = document.getElementById('u475');
gv_vAlignTable['u475'] = 'center';
var u476 = document.getElementById('u476');

var u477 = document.getElementById('u477');
gv_vAlignTable['u477'] = 'center';
var u478 = document.getElementById('u478');

u478.style.cursor = 'pointer';
if (bIE) u478.attachEvent("onclick", Clicku478);
else u478.addEventListener("click", Clicku478, true);
function Clicku478(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u469', 'pd3u469','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u478.attachEvent("onmouseout", MouseOutu478);
else u478.addEventListener("mouseout", MouseOutu478, true);
function MouseOutu478(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u478',e)) return;
if (true) {

	SetPanelState('u469', 'pd0u469','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u479 = document.getElementById('u479');
gv_vAlignTable['u479'] = 'center';
var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'center';
var u169 = document.getElementById('u169');

var u480 = document.getElementById('u480');

if (bIE) u480.attachEvent("onmouseover", MouseOveru480);
else u480.addEventListener("mouseover", MouseOveru480, true);
function MouseOveru480(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u480',e)) return;
if (true) {

	SetPanelState('u469', 'pd1u469','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Olive</span></p>');

}

}

var u481 = document.getElementById('u481');
gv_vAlignTable['u481'] = 'center';
var u482 = document.getElementById('u482');

var u483 = document.getElementById('u483');
gv_vAlignTable['u483'] = 'center';
var u484 = document.getElementById('u484');
gv_vAlignTable['u484'] = 'top';
var u485 = document.getElementById('u485');
gv_vAlignTable['u485'] = 'top';
var u486 = document.getElementById('u486');
gv_vAlignTable['u486'] = 'top';
var u487 = document.getElementById('u487');

var u488 = document.getElementById('u488');

var u489 = document.getElementById('u489');
gv_vAlignTable['u489'] = 'center';
var u173 = document.getElementById('u173');

var u174 = document.getElementById('u174');

var u203 = document.getElementById('u203');

var u204 = document.getElementById('u204');

var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'center';
var u206 = document.getElementById('u206');

u206.style.cursor = 'pointer';
if (bIE) u206.attachEvent("onclick", Clicku206);
else u206.addEventListener("click", Clicku206, true);
function Clicku206(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u206');
}

}

if (bIE) u206.attachEvent("onmouseover", MouseOveru206);
else u206.addEventListener("mouseover", MouseOveru206, true);
function MouseOveru206(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u206',e)) return;
if (true) {

	SetPanelState('u203', 'pd1u203','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Light Blue</span></p>');

}

}

if (bIE) u206.attachEvent("onmouseout", MouseOutu206);
else u206.addEventListener("mouseout", MouseOutu206, true);
function MouseOutu206(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u206',e)) return;
if (true) {

	SetPanelState('u203', 'pd0u203','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u179 = document.getElementById('u179');

var u208 = document.getElementById('u208');

var u209 = document.getElementById('u209');

var u300 = document.getElementById('u300');

var u301 = document.getElementById('u301');

var u302 = document.getElementById('u302');
gv_vAlignTable['u302'] = 'center';
var u303 = document.getElementById('u303');

u303.style.cursor = 'pointer';
if (bIE) u303.attachEvent("onclick", Clicku303);
else u303.addEventListener("click", Clicku303, true);
function Clicku303(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u300', 'pd1u300','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u303.attachEvent("onmouseout", MouseOutu303);
else u303.addEventListener("mouseout", MouseOutu303, true);
function MouseOutu303(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u303',e)) return;
if (true) {

	SetPanelState('u300', 'pd2u300','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u304 = document.getElementById('u304');
gv_vAlignTable['u304'] = 'center';
var u305 = document.getElementById('u305');

if (bIE) u305.attachEvent("onmouseover", MouseOveru305);
else u305.addEventListener("mouseover", MouseOveru305, true);
function MouseOveru305(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u305',e)) return;
if (true) {

	SetPanelState('u300', 'pd3u300','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Cardinal</span></p>');

}

}

var u306 = document.getElementById('u306');
gv_vAlignTable['u306'] = 'center';
var u307 = document.getElementById('u307');

var u308 = document.getElementById('u308');
gv_vAlignTable['u308'] = 'center';
var u309 = document.getElementById('u309');

u309.style.cursor = 'pointer';
if (bIE) u309.attachEvent("onclick", Clicku309);
else u309.addEventListener("click", Clicku309, true);
function Clicku309(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u300', 'pd3u300','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u309.attachEvent("onmouseout", MouseOutu309);
else u309.addEventListener("mouseout", MouseOutu309, true);
function MouseOutu309(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u309',e)) return;
if (true) {

	SetPanelState('u300', 'pd0u300','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u497 = document.getElementById('u497');
gv_vAlignTable['u497'] = 'center';
var u498 = document.getElementById('u498');

if (bIE) u498.attachEvent("onmouseover", MouseOveru498);
else u498.addEventListener("mouseover", MouseOveru498, true);
function MouseOveru498(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u498',e)) return;
if (true) {

	SetPanelState('u487', 'pd1u487','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Gold</span></p>');

}

}

var u499 = document.getElementById('u499');
gv_vAlignTable['u499'] = 'center';
var u504 = document.getElementById('u504');
gv_vAlignTable['u504'] = 'center';
var u505 = document.getElementById('u505');

if (bIE) u505.attachEvent("onmouseover", MouseOveru505);
else u505.addEventListener("mouseover", MouseOveru505, true);
function MouseOveru505(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u505',e)) return;
if (true) {

	SetPanelState('u500', 'pd3u500','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Yellow</span></p>');

}

}

var u506 = document.getElementById('u506');
gv_vAlignTable['u506'] = 'center';
var u507 = document.getElementById('u507');

var u508 = document.getElementById('u508');
gv_vAlignTable['u508'] = 'center';
var u509 = document.getElementById('u509');

u509.style.cursor = 'pointer';
if (bIE) u509.attachEvent("onclick", Clicku509);
else u509.addEventListener("click", Clicku509, true);
function Clicku509(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u500', 'pd3u500','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u509.attachEvent("onmouseout", MouseOutu509);
else u509.addEventListener("mouseout", MouseOutu509, true);
function MouseOutu509(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u509',e)) return;
if (true) {

	SetPanelState('u500', 'pd0u500','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u189 = document.getElementById('u189');

var u310 = document.getElementById('u310');
gv_vAlignTable['u310'] = 'center';
var u311 = document.getElementById('u311');

if (bIE) u311.attachEvent("onmouseover", MouseOveru311);
else u311.addEventListener("mouseover", MouseOveru311, true);
function MouseOveru311(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u311',e)) return;
if (true) {

	SetPanelState('u300', 'pd1u300','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Cardinal</span></p>');

}

}

var u312 = document.getElementById('u312');
gv_vAlignTable['u312'] = 'center';
var u313 = document.getElementById('u313');

var u314 = document.getElementById('u314');

var u315 = document.getElementById('u315');
gv_vAlignTable['u315'] = 'center';
var u316 = document.getElementById('u316');

u316.style.cursor = 'pointer';
if (bIE) u316.attachEvent("onclick", Clicku316);
else u316.addEventListener("click", Clicku316, true);
function Clicku316(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u313', 'pd1u313','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u316.attachEvent("onmouseout", MouseOutu316);
else u316.addEventListener("mouseout", MouseOutu316, true);
function MouseOutu316(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u316',e)) return;
if (true) {

	SetPanelState('u313', 'pd2u313','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u317 = document.getElementById('u317');
gv_vAlignTable['u317'] = 'center';
var u318 = document.getElementById('u318');

if (bIE) u318.attachEvent("onmouseover", MouseOveru318);
else u318.addEventListener("mouseover", MouseOveru318, true);
function MouseOveru318(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u318',e)) return;
if (true) {

	SetPanelState('u313', 'pd3u313','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Red</span></p>');

}

}

var u319 = document.getElementById('u319');
gv_vAlignTable['u319'] = 'center';
var u514 = document.getElementById('u514');

var u515 = document.getElementById('u515');
gv_vAlignTable['u515'] = 'center';
var u516 = document.getElementById('u516');

u516.style.cursor = 'pointer';
if (bIE) u516.attachEvent("onclick", Clicku516);
else u516.addEventListener("click", Clicku516, true);
function Clicku516(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u513', 'pd1u513','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u516.attachEvent("onmouseout", MouseOutu516);
else u516.addEventListener("mouseout", MouseOutu516, true);
function MouseOutu516(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u516',e)) return;
if (true) {

	SetPanelState('u513', 'pd2u513','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u517 = document.getElementById('u517');
gv_vAlignTable['u517'] = 'center';
var u518 = document.getElementById('u518');

if (bIE) u518.attachEvent("onmouseover", MouseOveru518);
else u518.addEventListener("mouseover", MouseOveru518, true);
function MouseOveru518(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u518',e)) return;
if (true) {

	SetPanelState('u513', 'pd3u513','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Lemon</span></p>');

}

}

var u519 = document.getElementById('u519');
gv_vAlignTable['u519'] = 'center';
var u691 = document.getElementById('u691');

u691.style.cursor = 'pointer';
if (bIE) u691.attachEvent("onclick", Clicku691);
else u691.addEventListener("click", Clicku691, true);
function Clicku691(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u682', 'pd3u682','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u691.attachEvent("onmouseout", MouseOutu691);
else u691.addEventListener("mouseout", MouseOutu691, true);
function MouseOutu691(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u691',e)) return;
if (true) {

	SetPanelState('u682', 'pd0u682','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u692 = document.getElementById('u692');
gv_vAlignTable['u692'] = 'center';
var u693 = document.getElementById('u693');

if (bIE) u693.attachEvent("onmouseover", MouseOveru693);
else u693.addEventListener("mouseover", MouseOveru693, true);
function MouseOveru693(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u693',e)) return;
if (true) {

	SetPanelState('u682', 'pd1u682','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Bright Purple</span></p>');

}

}

var u694 = document.getElementById('u694');
gv_vAlignTable['u694'] = 'center';
var u695 = document.getElementById('u695');

var u696 = document.getElementById('u696');

var u697 = document.getElementById('u697');
gv_vAlignTable['u697'] = 'center';
var u698 = document.getElementById('u698');

u698.style.cursor = 'pointer';
if (bIE) u698.attachEvent("onclick", Clicku698);
else u698.addEventListener("click", Clicku698, true);
function Clicku698(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u695', 'pd1u695','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u698.attachEvent("onmouseout", MouseOutu698);
else u698.addEventListener("mouseout", MouseOutu698, true);
function MouseOutu698(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u698',e)) return;
if (true) {

	SetPanelState('u695', 'pd2u695','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u699 = document.getElementById('u699');
gv_vAlignTable['u699'] = 'center';
var u320 = document.getElementById('u320');

var u321 = document.getElementById('u321');
gv_vAlignTable['u321'] = 'center';
var u322 = document.getElementById('u322');

u322.style.cursor = 'pointer';
if (bIE) u322.attachEvent("onclick", Clicku322);
else u322.addEventListener("click", Clicku322, true);
function Clicku322(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u313', 'pd3u313','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u322.attachEvent("onmouseout", MouseOutu322);
else u322.addEventListener("mouseout", MouseOutu322, true);
function MouseOutu322(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u322',e)) return;
if (true) {

	SetPanelState('u313', 'pd0u313','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u323 = document.getElementById('u323');
gv_vAlignTable['u323'] = 'center';
var u324 = document.getElementById('u324');

if (bIE) u324.attachEvent("onmouseover", MouseOveru324);
else u324.addEventListener("mouseover", MouseOveru324, true);
function MouseOveru324(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u324',e)) return;
if (true) {

	SetPanelState('u313', 'pd1u313','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Red</span></p>');

}

}

var u325 = document.getElementById('u325');
gv_vAlignTable['u325'] = 'center';
var u326 = document.getElementById('u326');

var u327 = document.getElementById('u327');

var u328 = document.getElementById('u328');
gv_vAlignTable['u328'] = 'center';
var u329 = document.getElementById('u329');

u329.style.cursor = 'pointer';
if (bIE) u329.attachEvent("onclick", Clicku329);
else u329.addEventListener("click", Clicku329, true);
function Clicku329(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u326', 'pd1u326','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u329.attachEvent("onmouseout", MouseOutu329);
else u329.addEventListener("mouseout", MouseOutu329, true);
function MouseOutu329(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u329',e)) return;
if (true) {

	SetPanelState('u326', 'pd2u326','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u524 = document.getElementById('u524');

if (bIE) u524.attachEvent("onmouseover", MouseOveru524);
else u524.addEventListener("mouseover", MouseOveru524, true);
function MouseOveru524(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u524',e)) return;
if (true) {

	SetPanelState('u513', 'pd1u513','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Lemon</span></p>');

}

}

var u330 = document.getElementById('u330');
gv_vAlignTable['u330'] = 'center';
var u331 = document.getElementById('u331');

if (bIE) u331.attachEvent("onmouseover", MouseOveru331);
else u331.addEventListener("mouseover", MouseOveru331, true);
function MouseOveru331(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u331',e)) return;
if (true) {

	SetPanelState('u326', 'pd3u326','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Orange Red</span></p>');

}

}

var u332 = document.getElementById('u332');
gv_vAlignTable['u332'] = 'center';
var u333 = document.getElementById('u333');

var u334 = document.getElementById('u334');
gv_vAlignTable['u334'] = 'center';
var u335 = document.getElementById('u335');

u335.style.cursor = 'pointer';
if (bIE) u335.attachEvent("onclick", Clicku335);
else u335.addEventListener("click", Clicku335, true);
function Clicku335(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u326', 'pd3u326','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u335.attachEvent("onmouseout", MouseOutu335);
else u335.addEventListener("mouseout", MouseOutu335, true);
function MouseOutu335(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u335',e)) return;
if (true) {

	SetPanelState('u326', 'pd0u326','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u336 = document.getElementById('u336');
gv_vAlignTable['u336'] = 'center';
var u337 = document.getElementById('u337');

if (bIE) u337.attachEvent("onmouseover", MouseOveru337);
else u337.addEventListener("mouseover", MouseOveru337, true);
function MouseOveru337(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u337',e)) return;
if (true) {

	SetPanelState('u326', 'pd1u326','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Orange Red</span></p>');

}

}

var u338 = document.getElementById('u338');
gv_vAlignTable['u338'] = 'center';
var u339 = document.getElementById('u339');

var u534 = document.getElementById('u534');
gv_vAlignTable['u534'] = 'center';
var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'center';
var u181 = document.getElementById('u181');

u181.style.cursor = 'pointer';
if (bIE) u181.attachEvent("onclick", Clicku181);
else u181.addEventListener("click", Clicku181, true);
function Clicku181(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u181');
}

}

if (bIE) u181.attachEvent("onmouseover", MouseOveru181);
else u181.addEventListener("mouseover", MouseOveru181, true);
function MouseOveru181(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u181',e)) return;
if (true) {

	SetPanelState('u178', 'pd1u178','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Green</span></p>');

}

}

if (bIE) u181.attachEvent("onmouseout", MouseOutu181);
else u181.addEventListener("mouseout", MouseOutu181, true);
function MouseOutu181(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u181',e)) return;
if (true) {

	SetPanelState('u178', 'pd0u178','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'center';
var u183 = document.getElementById('u183');

var u184 = document.getElementById('u184');

var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'center';
var u340 = document.getElementById('u340');

var u341 = document.getElementById('u341');
gv_vAlignTable['u341'] = 'center';
var u342 = document.getElementById('u342');

u342.style.cursor = 'pointer';
if (bIE) u342.attachEvent("onclick", Clicku342);
else u342.addEventListener("click", Clicku342, true);
function Clicku342(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u339', 'pd1u339','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u342.attachEvent("onmouseout", MouseOutu342);
else u342.addEventListener("mouseout", MouseOutu342, true);
function MouseOutu342(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u342',e)) return;
if (true) {

	SetPanelState('u339', 'pd2u339','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u343 = document.getElementById('u343');
gv_vAlignTable['u343'] = 'center';
var u344 = document.getElementById('u344');

if (bIE) u344.attachEvent("onmouseover", MouseOveru344);
else u344.addEventListener("mouseover", MouseOveru344, true);
function MouseOveru344(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u344',e)) return;
if (true) {

	SetPanelState('u339', 'pd3u339','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Pink</span></p>');

}

}

var u345 = document.getElementById('u345');
gv_vAlignTable['u345'] = 'center';
var u346 = document.getElementById('u346');

var u347 = document.getElementById('u347');
gv_vAlignTable['u347'] = 'center';
var u348 = document.getElementById('u348');

u348.style.cursor = 'pointer';
if (bIE) u348.attachEvent("onclick", Clicku348);
else u348.addEventListener("click", Clicku348, true);
function Clicku348(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u339', 'pd3u339','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u348.attachEvent("onmouseout", MouseOutu348);
else u348.addEventListener("mouseout", MouseOutu348, true);
function MouseOutu348(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u348',e)) return;
if (true) {

	SetPanelState('u339', 'pd0u339','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u349 = document.getElementById('u349');
gv_vAlignTable['u349'] = 'center';
var u701 = document.getElementById('u701');
gv_vAlignTable['u701'] = 'center';
var u702 = document.getElementById('u702');

var u703 = document.getElementById('u703');
gv_vAlignTable['u703'] = 'center';
var u704 = document.getElementById('u704');

u704.style.cursor = 'pointer';
if (bIE) u704.attachEvent("onclick", Clicku704);
else u704.addEventListener("click", Clicku704, true);
function Clicku704(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u695', 'pd3u695','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u704.attachEvent("onmouseout", MouseOutu704);
else u704.addEventListener("mouseout", MouseOutu704, true);
function MouseOutu704(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u704',e)) return;
if (true) {

	SetPanelState('u695', 'pd0u695','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u705 = document.getElementById('u705');
gv_vAlignTable['u705'] = 'center';
var u706 = document.getElementById('u706');

if (bIE) u706.attachEvent("onmouseover", MouseOveru706);
else u706.addEventListener("mouseover", MouseOveru706, true);
function MouseOveru706(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u706',e)) return;
if (true) {

	SetPanelState('u695', 'pd1u695','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Maroon</span></p>');

}

}

var u707 = document.getElementById('u707');
gv_vAlignTable['u707'] = 'center';
var u708 = document.getElementById('u708');
gv_vAlignTable['u708'] = 'top';
var u709 = document.getElementById('u709');
gv_vAlignTable['u709'] = 'top';
var u700 = document.getElementById('u700');

if (bIE) u700.attachEvent("onmouseover", MouseOveru700);
else u700.addEventListener("mouseover", MouseOveru700, true);
function MouseOveru700(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u700',e)) return;
if (true) {

	SetPanelState('u695', 'pd3u695','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Maroon</span></p>');

}

}

var u350 = document.getElementById('u350');

if (bIE) u350.attachEvent("onmouseover", MouseOveru350);
else u350.addEventListener("mouseover", MouseOveru350, true);
function MouseOveru350(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u350',e)) return;
if (true) {

	SetPanelState('u339', 'pd1u339','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Pink</span></p>');

}

}

var u351 = document.getElementById('u351');
gv_vAlignTable['u351'] = 'center';
var u352 = document.getElementById('u352');

var u353 = document.getElementById('u353');

var u354 = document.getElementById('u354');
gv_vAlignTable['u354'] = 'center';
var u355 = document.getElementById('u355');

u355.style.cursor = 'pointer';
if (bIE) u355.attachEvent("onclick", Clicku355);
else u355.addEventListener("click", Clicku355, true);
function Clicku355(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u352', 'pd1u352','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u355.attachEvent("onmouseout", MouseOutu355);
else u355.addEventListener("mouseout", MouseOutu355, true);
function MouseOutu355(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u355',e)) return;
if (true) {

	SetPanelState('u352', 'pd2u352','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u356 = document.getElementById('u356');
gv_vAlignTable['u356'] = 'center';
var u357 = document.getElementById('u357');

if (bIE) u357.attachEvent("onmouseover", MouseOveru357);
else u357.addEventListener("mouseover", MouseOveru357, true);
function MouseOveru357(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u357',e)) return;
if (true) {

	SetPanelState('u352', 'pd3u352','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Charity Pink</span></p>');

}

}

var u358 = document.getElementById('u358');
gv_vAlignTable['u358'] = 'center';
var u359 = document.getElementById('u359');

var u711 = document.getElementById('u711');
gv_vAlignTable['u711'] = 'center';
var u712 = document.getElementById('u712');

u712.style.cursor = 'pointer';
if (bIE) u712.attachEvent("onclick", Clicku712);
else u712.addEventListener("click", Clicku712, true);
function Clicku712(e)
{
windowEvent = e;


if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}
gv_vAlignTable['u712'] = 'top';
var u713 = document.getElementById('u713');

u713.style.cursor = 'pointer';
if (bIE) u713.attachEvent("onclick", Clicku713);
else u713.addEventListener("click", Clicku713, true);
function Clicku713(e)
{
windowEvent = e;


if (true) {

	self.location.href="Page_1.html" + GetQuerystring();

}

}
gv_vAlignTable['u713'] = 'top';
var u714 = document.getElementById('u714');

var u715 = document.getElementById('u715');

u715.style.cursor = 'pointer';
if (bIE) u715.attachEvent("onclick", Clicku715);
else u715.addEventListener("click", Clicku715, true);
function Clicku715(e)
{
windowEvent = e;


if (((GetCheckState('u26')) == (true)) && ((GetCheckState('u715')) == (true))) {

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

SetGlobalVariableValue('$showWhite', 'yes');

SetCheckState('u715', true);

	SetPanelState('u13', 'pd1u13','none','',500,'none','',500);

	SetPanelState('u287', 'pd2u287','none','',500,'none','',500);

}
else
if (((GetCheckState('u715')) == (false)) && ((GetCheckState('u26')) == (true))) {

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

SetGlobalVariableValue('$showWhite', 'no');

SetCheckState('u715', false);

	SetPanelState('u13', 'pd0u13','none','',500,'none','',500);

	SetPanelState('u287', 'pd0u287','none','',500,'none','',500);

}
else
if ((GetCheckState('u34')) == (true)) {

	SetPanelState('u13', 'pd1u13','none','',500,'none','',500);

	SetPanelState('u41', 'pd0u41','none','',500,'none','',500);

	SetPanelState('u287', 'pd2u287','none','',500,'none','',500);

	SetPanelState('u248', 'pd2u248','none','',500,'none','',500);

SetGlobalVariableValue('$showWhite', 'yes');

SetGlobalVariableValue('$colorCount', '2');

SetCheckState('u26', true);

}
else
if (((GetCheckState('u39')) == (true)) && ((GetCheckState('u715')) == (false))) {

	SetPanelState('u13', 'pd0u13','none','',500,'none','',500);

	SetPanelState('u41', 'pd1u41','none','',500,'none','',500);

	SetPanelState('u287', 'pd0u287','none','',500,'none','',500);

}
else
if (((GetCheckState('u39')) == (true)) && ((GetCheckState('u715')) == (true))) {

	SetPanelState('u13', 'pd1u13','none','',500,'none','',500);

	SetPanelState('u41', 'pd1u41','none','',500,'none','',500);

	SetPanelState('u287', 'pd2u287','none','',500,'none','',500);

}

}

var u716 = document.getElementById('u716');
gv_vAlignTable['u716'] = 'top';
var u710 = document.getElementById('u710');

u710.style.cursor = 'pointer';
if (bIE) u710.attachEvent("onclick", Clicku710);
else u710.addEventListener("click", Clicku710, true);
function Clicku710(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$printOption')) == ('')) {

	SetPanelState('u41', 'pd4u41','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('$colorCount')) < Number('1')) {

	SetPanelState('u41', 'pd0u41','none','',500,'none','',500);

	SetPanelState('u239', 'pd1u239','none','',500,'none','',500);

}
else
if (true) {

	self.location.href="Page_3.html" + GetQuerystring();

}

}

var u360 = document.getElementById('u360');
gv_vAlignTable['u360'] = 'center';
var u361 = document.getElementById('u361');

u361.style.cursor = 'pointer';
if (bIE) u361.attachEvent("onclick", Clicku361);
else u361.addEventListener("click", Clicku361, true);
function Clicku361(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u352', 'pd3u352','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u361.attachEvent("onmouseout", MouseOutu361);
else u361.addEventListener("mouseout", MouseOutu361, true);
function MouseOutu361(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u361',e)) return;
if (true) {

	SetPanelState('u352', 'pd0u352','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u362 = document.getElementById('u362');
gv_vAlignTable['u362'] = 'center';
var u363 = document.getElementById('u363');

if (bIE) u363.attachEvent("onmouseover", MouseOveru363);
else u363.addEventListener("mouseover", MouseOveru363, true);
function MouseOveru363(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u363',e)) return;
if (true) {

	SetPanelState('u352', 'pd1u352','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Charity Pink</span></p>');

}

}

var u364 = document.getElementById('u364');
gv_vAlignTable['u364'] = 'center';
var u365 = document.getElementById('u365');

var u366 = document.getElementById('u366');

var u367 = document.getElementById('u367');
gv_vAlignTable['u367'] = 'center';
var u368 = document.getElementById('u368');

u368.style.cursor = 'pointer';
if (bIE) u368.attachEvent("onclick", Clicku368);
else u368.addEventListener("click", Clicku368, true);
function Clicku368(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u365', 'pd1u365','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u368.attachEvent("onmouseout", MouseOutu368);
else u368.addEventListener("mouseout", MouseOutu368, true);
function MouseOutu368(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u368',e)) return;
if (true) {

	SetPanelState('u365', 'pd2u365','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u369 = document.getElementById('u369');
gv_vAlignTable['u369'] = 'center';
var u103 = document.getElementById('u103');

var u104 = document.getElementById('u104');

var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'center';
var u106 = document.getElementById('u106');

u106.style.cursor = 'pointer';
if (bIE) u106.attachEvent("onclick", Clicku106);
else u106.addEventListener("click", Clicku106, true);
function Clicku106(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u106');
}

}

if (bIE) u106.attachEvent("onmouseover", MouseOveru106);
else u106.addEventListener("mouseover", MouseOveru106, true);
function MouseOveru106(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u106',e)) return;
if (true) {

	SetPanelState('u103', 'pd1u103','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Hot Pink</span></p>');

}

}

if (bIE) u106.attachEvent("onmouseout", MouseOutu106);
else u106.addEventListener("mouseout", MouseOutu106, true);
function MouseOutu106(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u106',e)) return;
if (true) {

	SetPanelState('u103', 'pd0u103','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'center';
var u108 = document.getElementById('u108');

var u370 = document.getElementById('u370');

if (bIE) u370.attachEvent("onmouseover", MouseOveru370);
else u370.addEventListener("mouseover", MouseOveru370, true);
function MouseOveru370(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u370',e)) return;
if (true) {

	SetPanelState('u365', 'pd3u365','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Hot Pink</span></p>');

}

}

var u371 = document.getElementById('u371');
gv_vAlignTable['u371'] = 'center';
var u372 = document.getElementById('u372');

var u373 = document.getElementById('u373');
gv_vAlignTable['u373'] = 'center';
var u374 = document.getElementById('u374');

u374.style.cursor = 'pointer';
if (bIE) u374.attachEvent("onclick", Clicku374);
else u374.addEventListener("click", Clicku374, true);
function Clicku374(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u365', 'pd3u365','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u374.attachEvent("onmouseout", MouseOutu374);
else u374.addEventListener("mouseout", MouseOutu374, true);
function MouseOutu374(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u374',e)) return;
if (true) {

	SetPanelState('u365', 'pd0u365','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u375 = document.getElementById('u375');
gv_vAlignTable['u375'] = 'center';
var u376 = document.getElementById('u376');

if (bIE) u376.attachEvent("onmouseover", MouseOveru376);
else u376.addEventListener("mouseover", MouseOveru376, true);
function MouseOveru376(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u376',e)) return;
if (true) {

	SetPanelState('u365', 'pd1u365','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Hot Pink</span></p>');

}

}

var u377 = document.getElementById('u377');
gv_vAlignTable['u377'] = 'center';
var u378 = document.getElementById('u378');

var u379 = document.getElementById('u379');

var u380 = document.getElementById('u380');
gv_vAlignTable['u380'] = 'center';
var u381 = document.getElementById('u381');

u381.style.cursor = 'pointer';
if (bIE) u381.attachEvent("onclick", Clicku381);
else u381.addEventListener("click", Clicku381, true);
function Clicku381(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u378', 'pd1u378','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u381.attachEvent("onmouseout", MouseOutu381);
else u381.addEventListener("mouseout", MouseOutu381, true);
function MouseOutu381(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u381',e)) return;
if (true) {

	SetPanelState('u378', 'pd2u378','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u382 = document.getElementById('u382');
gv_vAlignTable['u382'] = 'center';
var u383 = document.getElementById('u383');

if (bIE) u383.attachEvent("onmouseover", MouseOveru383);
else u383.addEventListener("mouseover", MouseOveru383, true);
function MouseOveru383(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u383',e)) return;
if (true) {

	SetPanelState('u378', 'pd3u378','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Magenta</span></p>');

}

}

var u384 = document.getElementById('u384');
gv_vAlignTable['u384'] = 'center';
var u385 = document.getElementById('u385');

var u386 = document.getElementById('u386');
gv_vAlignTable['u386'] = 'center';
var u387 = document.getElementById('u387');

u387.style.cursor = 'pointer';
if (bIE) u387.attachEvent("onclick", Clicku387);
else u387.addEventListener("click", Clicku387, true);
function Clicku387(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u378', 'pd3u378','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u387.attachEvent("onmouseout", MouseOutu387);
else u387.addEventListener("mouseout", MouseOutu387, true);
function MouseOutu387(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u387',e)) return;
if (true) {

	SetPanelState('u378', 'pd0u378','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u388 = document.getElementById('u388');
gv_vAlignTable['u388'] = 'center';
var u389 = document.getElementById('u389');

if (bIE) u389.attachEvent("onmouseover", MouseOveru389);
else u389.addEventListener("mouseover", MouseOveru389, true);
function MouseOveru389(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u389',e)) return;
if (true) {

	SetPanelState('u378', 'pd1u378','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Magenta</span></p>');

}

}

var u403 = document.getElementById('u403');
gv_vAlignTable['u403'] = 'center';
var u404 = document.getElementById('u404');

var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'center';
var u201 = document.getElementById('u201');

u201.style.cursor = 'pointer';
if (bIE) u201.attachEvent("onclick", Clicku201);
else u201.addEventListener("click", Clicku201, true);
function Clicku201(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u201');
}

}

if (bIE) u201.attachEvent("onmouseover", MouseOveru201);
else u201.addEventListener("mouseover", MouseOveru201, true);
function MouseOveru201(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u201',e)) return;
if (true) {

	SetPanelState('u198', 'pd1u198','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Blue</span></p>');

}

}

if (bIE) u201.attachEvent("onmouseout", MouseOutu201);
else u201.addEventListener("mouseout", MouseOutu201, true);
function MouseOutu201(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u201',e)) return;
if (true) {

	SetPanelState('u198', 'pd0u198','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'center';
var u390 = document.getElementById('u390');
gv_vAlignTable['u390'] = 'center';
var u391 = document.getElementById('u391');

var u392 = document.getElementById('u392');

var u393 = document.getElementById('u393');
gv_vAlignTable['u393'] = 'center';
var u394 = document.getElementById('u394');

u394.style.cursor = 'pointer';
if (bIE) u394.attachEvent("onclick", Clicku394);
else u394.addEventListener("click", Clicku394, true);
function Clicku394(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u391', 'pd1u391','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u394.attachEvent("onmouseout", MouseOutu394);
else u394.addEventListener("mouseout", MouseOutu394, true);
function MouseOutu394(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u394',e)) return;
if (true) {

	SetPanelState('u391', 'pd2u391','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u395 = document.getElementById('u395');
gv_vAlignTable['u395'] = 'center';
var u396 = document.getElementById('u396');

if (bIE) u396.attachEvent("onmouseover", MouseOveru396);
else u396.addEventListener("mouseover", MouseOveru396, true);
function MouseOveru396(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u396',e)) return;
if (true) {

	SetPanelState('u391', 'pd3u391','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Orange</span></p>');

}

}

var u397 = document.getElementById('u397');
gv_vAlignTable['u397'] = 'center';
var u398 = document.getElementById('u398');

var u399 = document.getElementById('u399');
gv_vAlignTable['u399'] = 'center';
var u592 = document.getElementById('u592');

var u593 = document.getElementById('u593');
gv_vAlignTable['u593'] = 'center';
var u594 = document.getElementById('u594');

u594.style.cursor = 'pointer';
if (bIE) u594.attachEvent("onclick", Clicku594);
else u594.addEventListener("click", Clicku594, true);
function Clicku594(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u591', 'pd1u591','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u594.attachEvent("onmouseout", MouseOutu594);
else u594.addEventListener("mouseout", MouseOutu594, true);
function MouseOutu594(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u594',e)) return;
if (true) {

	SetPanelState('u591', 'pd2u591','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u595 = document.getElementById('u595');
gv_vAlignTable['u595'] = 'center';
var u596 = document.getElementById('u596');

if (bIE) u596.attachEvent("onmouseover", MouseOveru596);
else u596.addEventListener("mouseover", MouseOveru596, true);
function MouseOveru596(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u596',e)) return;
if (true) {

	SetPanelState('u591', 'pd3u591','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Navy</span></p>');

}

}

var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'center';
var u211 = document.getElementById('u211');

u211.style.cursor = 'pointer';
if (bIE) u211.attachEvent("onclick", Clicku211);
else u211.addEventListener("click", Clicku211, true);
function Clicku211(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u211');
}

}

if (bIE) u211.attachEvent("onmouseover", MouseOveru211);
else u211.addEventListener("mouseover", MouseOveru211, true);
function MouseOveru211(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u211',e)) return;
if (true) {

	SetPanelState('u208', 'pd1u208','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Turquoise</span></p>');

}

}

if (bIE) u211.attachEvent("onmouseout", MouseOutu211);
else u211.addEventListener("mouseout", MouseOutu211, true);
function MouseOutu211(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u211',e)) return;
if (true) {

	SetPanelState('u208', 'pd1u208','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'center';
var u213 = document.getElementById('u213');

var u214 = document.getElementById('u214');

var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'center';
var u216 = document.getElementById('u216');

u216.style.cursor = 'pointer';
if (bIE) u216.attachEvent("onclick", Clicku216);
else u216.addEventListener("click", Clicku216, true);
function Clicku216(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u216');
}

}

if (bIE) u216.attachEvent("onmouseover", MouseOveru216);
else u216.addEventListener("mouseover", MouseOveru216, true);
function MouseOveru216(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u216',e)) return;
if (true) {

	SetPanelState('u213', 'pd1u213','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Dark Purple</span></p>');

}

}

if (bIE) u216.attachEvent("onmouseout", MouseOutu216);
else u216.addEventListener("mouseout", MouseOutu216, true);
function MouseOutu216(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u216',e)) return;
if (true) {

	SetPanelState('u213', 'pd0u213','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'center';
var u218 = document.getElementById('u218');

var u219 = document.getElementById('u219');

var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'center';
var u429 = document.getElementById('u429');
gv_vAlignTable['u429'] = 'center';
var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'center';
var u221 = document.getElementById('u221');

u221.style.cursor = 'pointer';
if (bIE) u221.attachEvent("onclick", Clicku221);
else u221.addEventListener("click", Clicku221, true);
function Clicku221(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u221');
}

}

if (bIE) u221.attachEvent("onmouseover", MouseOveru221);
else u221.addEventListener("mouseover", MouseOveru221, true);
function MouseOveru221(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u221',e)) return;
if (true) {

	SetPanelState('u218', 'pd1u218','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Bright Purple</span></p>');

}

}

if (bIE) u221.attachEvent("onmouseout", MouseOutu221);
else u221.addEventListener("mouseout", MouseOutu221, true);
function MouseOutu221(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u221',e)) return;
if (true) {

	SetPanelState('u218', 'pd0u218','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'center';
var u223 = document.getElementById('u223');

var u224 = document.getElementById('u224');

var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'center';
var u226 = document.getElementById('u226');

u226.style.cursor = 'pointer';
if (bIE) u226.attachEvent("onclick", Clicku226);
else u226.addEventListener("click", Clicku226, true);
function Clicku226(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u226');
}

}

if (bIE) u226.attachEvent("onmouseover", MouseOveru226);
else u226.addEventListener("mouseover", MouseOveru226, true);
function MouseOveru226(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u226',e)) return;
if (true) {

	SetPanelState('u223', 'pd1u223','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Light Purple</span></p>');

}

}

if (bIE) u226.attachEvent("onmouseout", MouseOutu226);
else u226.addEventListener("mouseout", MouseOutu226, true);
function MouseOutu226(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u226',e)) return;
if (true) {

	SetPanelState('u223', 'pd0u223','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'center';
var u228 = document.getElementById('u228');

var u229 = document.getElementById('u229');

var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'center';
var u151 = document.getElementById('u151');

u151.style.cursor = 'pointer';
if (bIE) u151.attachEvent("onclick", Clicku151);
else u151.addEventListener("click", Clicku151, true);
function Clicku151(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u151');
}

}

if (bIE) u151.attachEvent("onmouseover", MouseOveru151);
else u151.addEventListener("mouseover", MouseOveru151, true);
function MouseOveru151(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u151',e)) return;
if (true) {

	SetPanelState('u148', 'pd1u148','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Gold</span></p>');

}

}

if (bIE) u151.attachEvent("onmouseout", MouseOutu151);
else u151.addEventListener("mouseout", MouseOutu151, true);
function MouseOutu151(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u151',e)) return;
if (true) {

	SetPanelState('u148', 'pd0u148','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'center';
var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'center';
var u231 = document.getElementById('u231');

u231.style.cursor = 'pointer';
if (bIE) u231.attachEvent("onclick", Clicku231);
else u231.addEventListener("click", Clicku231, true);
function Clicku231(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u231');
}

}

if (bIE) u231.attachEvent("onmouseover", MouseOveru231);
else u231.addEventListener("mouseover", MouseOveru231, true);
function MouseOveru231(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u231',e)) return;
if (true) {

	SetPanelState('u228', 'pd1u228','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Maroon</span></p>');

}

}

if (bIE) u231.attachEvent("onmouseout", MouseOutu231);
else u231.addEventListener("mouseout", MouseOutu231, true);
function MouseOutu231(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u231',e)) return;
if (true) {

	SetPanelState('u228', 'pd0u228','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'center';
var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'top';
var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'top';
var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'top';
var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'top';
var u237 = document.getElementById('u237');

u237.style.cursor = 'pointer';
if (bIE) u237.attachEvent("onclick", Clicku237);
else u237.addEventListener("click", Clicku237, true);
function Clicku237(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u41', 'pd3u41','none','',500,'none','',500);

}

}

var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'top';
var u239 = document.getElementById('u239');

var u134 = document.getElementById('u134');

var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'center';
var u161 = document.getElementById('u161');

u161.style.cursor = 'pointer';
if (bIE) u161.attachEvent("onclick", Clicku161);
else u161.addEventListener("click", Clicku161, true);
function Clicku161(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u161');
}

}

if (bIE) u161.attachEvent("onmouseover", MouseOveru161);
else u161.addEventListener("mouseover", MouseOveru161, true);
function MouseOveru161(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u161',e)) return;
if (true) {

	SetPanelState('u158', 'pd1u158','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Lemon</span></p>');

}

}

if (bIE) u161.attachEvent("onmouseout", MouseOutu161);
else u161.addEventListener("mouseout", MouseOutu161, true);
function MouseOutu161(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u161',e)) return;
if (true) {

	SetPanelState('u158', 'pd1u158','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'center';
var u163 = document.getElementById('u163');

var u240 = document.getElementById('u240');

var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'center';
var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'top';
var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'top';
var u244 = document.getElementById('u244');

var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'center';
var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'top';
var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'top';
var u248 = document.getElementById('u248');

var u600 = document.getElementById('u600');

u600.style.cursor = 'pointer';
if (bIE) u600.attachEvent("onclick", Clicku600);
else u600.addEventListener("click", Clicku600, true);
function Clicku600(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u591', 'pd3u591','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u600.attachEvent("onmouseout", MouseOutu600);
else u600.addEventListener("mouseout", MouseOutu600, true);
function MouseOutu600(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u600',e)) return;
if (true) {

	SetPanelState('u591', 'pd0u591','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u601 = document.getElementById('u601');
gv_vAlignTable['u601'] = 'center';
var u602 = document.getElementById('u602');

if (bIE) u602.attachEvent("onmouseover", MouseOveru602);
else u602.addEventListener("mouseover", MouseOveru602, true);
function MouseOveru602(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u602',e)) return;
if (true) {

	SetPanelState('u591', 'pd1u591','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Navy</span></p>');

}

}

var u603 = document.getElementById('u603');
gv_vAlignTable['u603'] = 'center';
var u604 = document.getElementById('u604');

var u605 = document.getElementById('u605');

var u606 = document.getElementById('u606');
gv_vAlignTable['u606'] = 'center';
var u607 = document.getElementById('u607');

u607.style.cursor = 'pointer';
if (bIE) u607.attachEvent("onclick", Clicku607);
else u607.addEventListener("click", Clicku607, true);
function Clicku607(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u604', 'pd1u604','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u607.attachEvent("onmouseout", MouseOutu607);
else u607.addEventListener("mouseout", MouseOutu607, true);
function MouseOutu607(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u607',e)) return;
if (true) {

	SetPanelState('u604', 'pd2u604','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u608 = document.getElementById('u608');
gv_vAlignTable['u608'] = 'center';
var u609 = document.getElementById('u609');

if (bIE) u609.attachEvent("onmouseover", MouseOveru609);
else u609.addEventListener("mouseover", MouseOveru609, true);
function MouseOveru609(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u609',e)) return;
if (true) {

	SetPanelState('u604', 'pd3u604','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Royal</span></p>');

}

}

var u141 = document.getElementById('u141');

u141.style.cursor = 'pointer';
if (bIE) u141.attachEvent("onclick", Clicku141);
else u141.addEventListener("click", Clicku141, true);
function Clicku141(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u141');
}

}

if (bIE) u141.attachEvent("onmouseover", MouseOveru141);
else u141.addEventListener("mouseover", MouseOveru141, true);
function MouseOveru141(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u141',e)) return;
if (true) {

	SetPanelState('u138', 'pd1u138','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Old Gold</span></p>');

}

}

if (bIE) u141.attachEvent("onmouseout", MouseOutu141);
else u141.addEventListener("mouseout", MouseOutu141, true);
function MouseOutu141(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u141',e)) return;
if (true) {

	SetPanelState('u138', 'pd0u138','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'center';
var u171 = document.getElementById('u171');

u171.style.cursor = 'pointer';
if (bIE) u171.attachEvent("onclick", Clicku171);
else u171.addEventListener("click", Clicku171, true);
function Clicku171(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u171');
}

}

if (bIE) u171.attachEvent("onmouseover", MouseOveru171);
else u171.addEventListener("mouseover", MouseOveru171, true);
function MouseOveru171(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u171',e)) return;
if (true) {

	SetPanelState('u168', 'pd1u168','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Kelly</span></p>');

}

}

if (bIE) u171.attachEvent("onmouseout", MouseOutu171);
else u171.addEventListener("mouseout", MouseOutu171, true);
function MouseOutu171(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u171',e)) return;
if (true) {

	SetPanelState('u168', 'pd0u168','none','',500,'none','',500);

SetWidgetRichText('u59', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'center';
var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'center';
var u251 = document.getElementById('u251');

u251.style.cursor = 'pointer';
if (bIE) u251.attachEvent("onclick", Clicku251);
else u251.addEventListener("click", Clicku251, true);
function Clicku251(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u248', 'pd1u248','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u251.attachEvent("onmouseout", MouseOutu251);
else u251.addEventListener("mouseout", MouseOutu251, true);
function MouseOutu251(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u251',e)) return;
if (true) {

	SetPanelState('u248', 'pd2u248','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'center';
var u253 = document.getElementById('u253');

if (bIE) u253.attachEvent("onmouseover", MouseOveru253);
else u253.addEventListener("mouseover", MouseOveru253, true);
function MouseOveru253(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u253',e)) return;
if (true) {

	SetPanelState('u248', 'pd3u248','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Black</span></p>');

}

}

var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'center';
var u255 = document.getElementById('u255');

var u256 = document.getElementById('u256');
gv_vAlignTable['u256'] = 'center';
var u257 = document.getElementById('u257');

u257.style.cursor = 'pointer';
if (bIE) u257.attachEvent("onclick", Clicku257);
else u257.addEventListener("click", Clicku257, true);
function Clicku257(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u248', 'pd3u248','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u257.attachEvent("onmouseout", MouseOutu257);
else u257.addEventListener("mouseout", MouseOutu257, true);
function MouseOutu257(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u257',e)) return;
if (true) {

	SetPanelState('u248', 'pd0u248','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'center';
var u259 = document.getElementById('u259');

if (bIE) u259.attachEvent("onmouseover", MouseOveru259);
else u259.addEventListener("mouseover", MouseOveru259, true);
function MouseOveru259(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u259',e)) return;
if (true) {

	SetPanelState('u248', 'pd1u248','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Black</span></p>');

}

}

var u611 = document.getElementById('u611');

var u612 = document.getElementById('u612');
gv_vAlignTable['u612'] = 'center';
var u613 = document.getElementById('u613');

u613.style.cursor = 'pointer';
if (bIE) u613.attachEvent("onclick", Clicku613);
else u613.addEventListener("click", Clicku613, true);
function Clicku613(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u604', 'pd3u604','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u613.attachEvent("onmouseout", MouseOutu613);
else u613.addEventListener("mouseout", MouseOutu613, true);
function MouseOutu613(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u613',e)) return;
if (true) {

	SetPanelState('u604', 'pd0u604','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u614 = document.getElementById('u614');
gv_vAlignTable['u614'] = 'center';
var u615 = document.getElementById('u615');

if (bIE) u615.attachEvent("onmouseover", MouseOveru615);
else u615.addEventListener("mouseover", MouseOveru615, true);
function MouseOveru615(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u615',e)) return;
if (true) {

	SetPanelState('u604', 'pd1u604','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Royal</span></p>');

}

}

var u616 = document.getElementById('u616');
gv_vAlignTable['u616'] = 'center';
var u617 = document.getElementById('u617');

var u618 = document.getElementById('u618');

var u619 = document.getElementById('u619');
gv_vAlignTable['u619'] = 'center';
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
gv_vAlignTable['u260'] = 'center';
var u261 = document.getElementById('u261');

var u262 = document.getElementById('u262');

var u263 = document.getElementById('u263');
gv_vAlignTable['u263'] = 'center';
var u264 = document.getElementById('u264');

u264.style.cursor = 'pointer';
if (bIE) u264.attachEvent("onclick", Clicku264);
else u264.addEventListener("click", Clicku264, true);
function Clicku264(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u261', 'pd1u261','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u264.attachEvent("onmouseout", MouseOutu264);
else u264.addEventListener("mouseout", MouseOutu264, true);
function MouseOutu264(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u264',e)) return;
if (true) {

	SetPanelState('u261', 'pd2u261','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u265 = document.getElementById('u265');
gv_vAlignTable['u265'] = 'center';
var u266 = document.getElementById('u266');

if (bIE) u266.attachEvent("onmouseover", MouseOveru266);
else u266.addEventListener("mouseover", MouseOveru266, true);
function MouseOveru266(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u266',e)) return;
if (true) {

	SetPanelState('u261', 'pd3u261','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Light Grey</span></p>');

}

}

var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'center';
var u268 = document.getElementById('u268');

var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'center';
var u621 = document.getElementById('u621');
gv_vAlignTable['u621'] = 'center';
var u622 = document.getElementById('u622');

if (bIE) u622.attachEvent("onmouseover", MouseOveru622);
else u622.addEventListener("mouseover", MouseOveru622, true);
function MouseOveru622(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u622',e)) return;
if (true) {

	SetPanelState('u617', 'pd3u617','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Blue</span></p>');

}

}

var u623 = document.getElementById('u623');
gv_vAlignTable['u623'] = 'center';
var u624 = document.getElementById('u624');

var u625 = document.getElementById('u625');
gv_vAlignTable['u625'] = 'center';
var u626 = document.getElementById('u626');

u626.style.cursor = 'pointer';
if (bIE) u626.attachEvent("onclick", Clicku626);
else u626.addEventListener("click", Clicku626, true);
function Clicku626(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u617', 'pd3u617','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u485', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u626.attachEvent("onmouseout", MouseOutu626);
else u626.addEventListener("mouseout", MouseOutu626, true);
function MouseOutu626(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u626',e)) return;
if (true) {

	SetPanelState('u617', 'pd0u617','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u627 = document.getElementById('u627');
gv_vAlignTable['u627'] = 'center';
var u628 = document.getElementById('u628');

if (bIE) u628.attachEvent("onmouseover", MouseOveru628);
else u628.addEventListener("mouseover", MouseOveru628, true);
function MouseOveru628(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u628',e)) return;
if (true) {

	SetPanelState('u617', 'pd1u617','none','',500,'none','',500);

SetWidgetRichText('u486', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Blue</span></p>');

}

}

var u629 = document.getElementById('u629');
gv_vAlignTable['u629'] = 'center';
if (window.OnLoad) OnLoad();
