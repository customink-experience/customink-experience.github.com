
var PageName = 'Copy of Page 2';
var PageId = 'f0ffe613674348049e14b2e5e38823db'
var PageUrl = 'Copy_of_Page_2.html'
document.title = 'Copy of Page 2';
var PageNotes = 
{
"pageName":"Copy of Page 2",
"showNotesNames":"False"}
var $OnLoadVariable = '';

var $colorCount = '';

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
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&colorCount=' + encodeURIComponent($colorCount) + '&CSUM=1';
}

function PopulateVariables(value) {
    var d = new Date();
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[colorCount\]\]/g, $colorCount);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  value = value.replace(/\[\[GenDay\]\]/g, '24');
  value = value.replace(/\[\[GenMonth\]\]/g, '6');
  value = value.replace(/\[\[GenMonthName\]\]/g, 'June');
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

                                DisableImageWidget('u20');
}

}

var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'center';
var u201 = document.getElementById('u201');

var u202 = document.getElementById('u202');

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

	SetPanelState('u201', 'pd1u201','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u204.attachEvent("onmouseout", MouseOutu204);
else u204.addEventListener("mouseout", MouseOutu204, true);
function MouseOutu204(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u204',e)) return;
if (true) {

	SetPanelState('u201', 'pd2u201','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'center';
var u206 = document.getElementById('u206');

if (bIE) u206.attachEvent("onmouseover", MouseOveru206);
else u206.addEventListener("mouseover", MouseOveru206, true);
function MouseOveru206(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u206',e)) return;
if (true) {

	SetPanelState('u201', 'pd3u201','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Light Orange</span></p>');

}

}

var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'center';
var u208 = document.getElementById('u208');

var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'center';
var u210 = document.getElementById('u210');

u210.style.cursor = 'pointer';
if (bIE) u210.attachEvent("onclick", Clicku210);
else u210.addEventListener("click", Clicku210, true);
function Clicku210(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u201', 'pd3u201','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
}

}

if (bIE) u210.attachEvent("onmouseout", MouseOutu210);
else u210.addEventListener("mouseout", MouseOutu210, true);
function MouseOutu210(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u210',e)) return;
if (true) {

	SetPanelState('u201', 'pd0u201','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'center';
var u212 = document.getElementById('u212');

if (bIE) u212.attachEvent("onmouseover", MouseOveru212);
else u212.addEventListener("mouseover", MouseOveru212, true);
function MouseOveru212(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u212',e)) return;
if (true) {

	SetPanelState('u201', 'pd1u201','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Light Orange</span></p>');

}

}

var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'center';
var u214 = document.getElementById('u214');

var u215 = document.getElementById('u215');

var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'center';
var u217 = document.getElementById('u217');

u217.style.cursor = 'pointer';
if (bIE) u217.attachEvent("onclick", Clicku217);
else u217.addEventListener("click", Clicku217, true);
function Clicku217(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u214', 'pd1u214','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                DisableImageWidget('u20');
}
else
if (true) {

	SetPanelState('u214', 'pd1u214','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u217.attachEvent("onmouseout", MouseOutu217);
else u217.addEventListener("mouseout", MouseOutu217, true);
function MouseOutu217(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u217',e)) return;
if (true) {

	SetPanelState('u214', 'pd2u214','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'center';
var u219 = document.getElementById('u219');

if (bIE) u219.attachEvent("onmouseover", MouseOveru219);
else u219.addEventListener("mouseover", MouseOveru219, true);
function MouseOveru219(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u219',e)) return;
if (true) {

	SetPanelState('u214', 'pd3u214','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Athletic Gold</span></p>');

}

}

var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'center';
var u221 = document.getElementById('u221');

var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'center';
var u223 = document.getElementById('u223');

u223.style.cursor = 'pointer';
if (bIE) u223.attachEvent("onclick", Clicku223);
else u223.addEventListener("click", Clicku223, true);
function Clicku223(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u214', 'pd3u214','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
}

}

if (bIE) u223.attachEvent("onmouseout", MouseOutu223);
else u223.addEventListener("mouseout", MouseOutu223, true);
function MouseOutu223(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u223',e)) return;
if (true) {

	SetPanelState('u214', 'pd0u214','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'center';
var u225 = document.getElementById('u225');

if (bIE) u225.attachEvent("onmouseover", MouseOveru225);
else u225.addEventListener("mouseover", MouseOveru225, true);
function MouseOveru225(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u225',e)) return;
if (true) {

	SetPanelState('u214', 'pd1u214','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Athletic Gold</span></p>');

}

}

var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'center';
var u227 = document.getElementById('u227');

var u228 = document.getElementById('u228');

var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'center';
var u230 = document.getElementById('u230');

u230.style.cursor = 'pointer';
if (bIE) u230.attachEvent("onclick", Clicku230);
else u230.addEventListener("click", Clicku230, true);
function Clicku230(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u227', 'pd1u227','none','',500,'none','',500);

                                DisableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}
else
if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u227', 'pd1u227','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u230.attachEvent("onmouseout", MouseOutu230);
else u230.addEventListener("mouseout", MouseOutu230, true);
function MouseOutu230(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u230',e)) return;
if (true) {

	SetPanelState('u227', 'pd2u227','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'center';
var u232 = document.getElementById('u232');

if (bIE) u232.attachEvent("onmouseover", MouseOveru232);
else u232.addEventListener("mouseover", MouseOveru232, true);
function MouseOveru232(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u232',e)) return;
if (true) {

	SetPanelState('u227', 'pd3u227','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Tan</span></p>');

}

}

var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'center';
var u234 = document.getElementById('u234');

var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'center';
var u236 = document.getElementById('u236');

u236.style.cursor = 'pointer';
if (bIE) u236.attachEvent("onclick", Clicku236);
else u236.addEventListener("click", Clicku236, true);
function Clicku236(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u227', 'pd3u227','none','',500,'none','',500);

                                EnableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u236.attachEvent("onmouseout", MouseOutu236);
else u236.addEventListener("mouseout", MouseOutu236, true);
function MouseOutu236(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u236',e)) return;
if (true) {

	SetPanelState('u227', 'pd0u227','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'center';
var u238 = document.getElementById('u238');

if (bIE) u238.attachEvent("onmouseover", MouseOveru238);
else u238.addEventListener("mouseover", MouseOveru238, true);
function MouseOveru238(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u238',e)) return;
if (true) {

	SetPanelState('u227', 'pd1u227','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Tan</span></p>');

}

}

var u239 = document.getElementById('u239');
gv_vAlignTable['u239'] = 'center';
var u500 = document.getElementById('u500');
gv_vAlignTable['u500'] = 'center';
var u501 = document.getElementById('u501');

u501.style.cursor = 'pointer';
if (bIE) u501.attachEvent("onclick", Clicku501);
else u501.addEventListener("click", Clicku501, true);
function Clicku501(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u492', 'pd3u492','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
}

}

if (bIE) u501.attachEvent("onmouseout", MouseOutu501);
else u501.addEventListener("mouseout", MouseOutu501, true);
function MouseOutu501(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u501',e)) return;
if (true) {

	SetPanelState('u492', 'pd0u492','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u502 = document.getElementById('u502');
gv_vAlignTable['u502'] = 'center';
var u503 = document.getElementById('u503');

if (bIE) u503.attachEvent("onmouseover", MouseOveru503);
else u503.addEventListener("mouseover", MouseOveru503, true);
function MouseOveru503(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u503',e)) return;
if (true) {

	SetPanelState('u492', 'pd1u492','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Maroon</span></p>');

}

}

var u504 = document.getElementById('u504');
gv_vAlignTable['u504'] = 'center';
var u505 = document.getElementById('u505');
gv_vAlignTable['u505'] = 'top';
var u506 = document.getElementById('u506');

var u507 = document.getElementById('u507');

var u508 = document.getElementById('u508');
gv_vAlignTable['u508'] = 'center';
var u509 = document.getElementById('u509');

var u240 = document.getElementById('u240');

var u241 = document.getElementById('u241');

var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'center';
var u243 = document.getElementById('u243');

u243.style.cursor = 'pointer';
if (bIE) u243.attachEvent("onclick", Clicku243);
else u243.addEventListener("click", Clicku243, true);
function Clicku243(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u240', 'pd1u240','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                DisableImageWidget('u20');
}
else
if (true) {

	SetPanelState('u240', 'pd1u240','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u243.attachEvent("onmouseout", MouseOutu243);
else u243.addEventListener("mouseout", MouseOutu243, true);
function MouseOutu243(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u243',e)) return;
if (true) {

	SetPanelState('u240', 'pd2u240','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'center';
var u245 = document.getElementById('u245');

if (bIE) u245.attachEvent("onmouseover", MouseOveru245);
else u245.addEventListener("mouseover", MouseOveru245, true);
function MouseOveru245(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u245',e)) return;
if (true) {

	SetPanelState('u240', 'pd3u240','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Brown</span></p>');

}

}

var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'center';
var u247 = document.getElementById('u247');

var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'center';
var u249 = document.getElementById('u249');

u249.style.cursor = 'pointer';
if (bIE) u249.attachEvent("onclick", Clicku249);
else u249.addEventListener("click", Clicku249, true);
function Clicku249(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u240', 'pd3u240','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
}

}

if (bIE) u249.attachEvent("onmouseout", MouseOutu249);
else u249.addEventListener("mouseout", MouseOutu249, true);
function MouseOutu249(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u249',e)) return;
if (true) {

	SetPanelState('u240', 'pd0u240','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u11 = document.getElementById('u11');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u13 = document.getElementById('u13');

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u15 = document.getElementById('u15');

var u514 = document.getElementById('u514');

u514.style.cursor = 'pointer';
if (bIE) u514.attachEvent("onclick", Clicku514);
else u514.addEventListener("click", Clicku514, true);
function Clicku514(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u514');
}

}

if (bIE) u514.attachEvent("onmouseover", MouseOveru514);
else u514.addEventListener("mouseover", MouseOveru514, true);
function MouseOveru514(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u514',e)) return;
if (true) {

	SetPanelState('u506', 'pd1u506','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Black</span></p>');

}

}

if (bIE) u514.attachEvent("onmouseout", MouseOutu514);
else u514.addEventListener("mouseout", MouseOutu514, true);
function MouseOutu514(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u514',e)) return;
if (true) {

	SetPanelState('u506', 'pd1u506','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u515 = document.getElementById('u515');
gv_vAlignTable['u515'] = 'center';
var u516 = document.getElementById('u516');

var u517 = document.getElementById('u517');

var u518 = document.getElementById('u518');
gv_vAlignTable['u518'] = 'center';
var u519 = document.getElementById('u519');

u519.style.cursor = 'pointer';
if (bIE) u519.attachEvent("onclick", Clicku519);
else u519.addEventListener("click", Clicku519, true);
function Clicku519(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u519');
}

}

if (bIE) u519.attachEvent("onmouseover", MouseOveru519);
else u519.addEventListener("mouseover", MouseOveru519, true);
function MouseOveru519(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u519',e)) return;
if (true) {

	SetPanelState('u516', 'pd1u516','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Grey</span></p>');

}

}

if (bIE) u519.attachEvent("onmouseout", MouseOutu519);
else u519.addEventListener("mouseout", MouseOutu519, true);
function MouseOutu519(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u519',e)) return;
if (true) {

	SetPanelState('u516', 'pd0u516','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'center';
var u251 = document.getElementById('u251');

if (bIE) u251.attachEvent("onmouseover", MouseOveru251);
else u251.addEventListener("mouseover", MouseOveru251, true);
function MouseOveru251(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u251',e)) return;
if (true) {

	SetPanelState('u240', 'pd1u240','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Brown</span></p>');

}

}

var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'center';
var u253 = document.getElementById('u253');

var u254 = document.getElementById('u254');

var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'center';
var u256 = document.getElementById('u256');

u256.style.cursor = 'pointer';
if (bIE) u256.attachEvent("onclick", Clicku256);
else u256.addEventListener("click", Clicku256, true);
function Clicku256(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u253', 'pd1u253','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                DisableImageWidget('u20');
}
else
if (true) {

	SetPanelState('u253', 'pd1u253','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u256.attachEvent("onmouseout", MouseOutu256);
else u256.addEventListener("mouseout", MouseOutu256, true);
function MouseOutu256(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u256',e)) return;
if (true) {

	SetPanelState('u253', 'pd2u253','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'center';
var u258 = document.getElementById('u258');

if (bIE) u258.attachEvent("onmouseover", MouseOveru258);
else u258.addEventListener("mouseover", MouseOveru258, true);
function MouseOveru258(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u258',e)) return;
if (true) {

	SetPanelState('u253', 'pd3u253','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Old Gold</span></p>');

}

}

var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'center';
var u20 = document.getElementById('u20');

u20.style.cursor = 'pointer';
if (bIE) u20.attachEvent("onclick", Clicku20);
else u20.addEventListener("click", Clicku20, true);
function Clicku20(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) < Number('1')) {

	NewWindow("resources/Other.html#other=" + encodeURI("Please select at least one color to print"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

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
windowEvent = e;


if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}
gv_vAlignTable['u22'] = 'top';
var u23 = document.getElementById('u23');

u23.style.cursor = 'pointer';
if (bIE) u23.attachEvent("onclick", Clicku23);
else u23.addEventListener("click", Clicku23, true);
function Clicku23(e)
{
windowEvent = e;


if (true) {

	self.location.href="Page_1.html" + GetQuerystring();

}

}
gv_vAlignTable['u23'] = 'top';
var u24 = document.getElementById('u24');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u524 = document.getElementById('u524');

u524.style.cursor = 'pointer';
if (bIE) u524.attachEvent("onclick", Clicku524);
else u524.addEventListener("click", Clicku524, true);
function Clicku524(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u524');
}

}

if (bIE) u524.attachEvent("onmouseover", MouseOveru524);
else u524.addEventListener("mouseover", MouseOveru524, true);
function MouseOveru524(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u524',e)) return;
if (true) {

	SetPanelState('u521', 'pd1u521','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Light Grey</span></p>');

}

}

if (bIE) u524.attachEvent("onmouseout", MouseOutu524);
else u524.addEventListener("mouseout", MouseOutu524, true);
function MouseOutu524(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u524',e)) return;
if (true) {

	SetPanelState('u521', 'pd0u521','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

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

SetWidgetSelected('u529');
}

}

if (bIE) u529.attachEvent("onmouseover", MouseOveru529);
else u529.addEventListener("mouseover", MouseOveru529, true);
function MouseOveru529(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u529',e)) return;
if (true) {

	SetPanelState('u526', 'pd1u526','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> White</span></p>');

}

}

if (bIE) u529.attachEvent("onmouseout", MouseOutu529);
else u529.addEventListener("mouseout", MouseOutu529, true);
function MouseOutu529(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u529',e)) return;
if (true) {

	SetPanelState('u526', 'pd0u526','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u260 = document.getElementById('u260');

var u261 = document.getElementById('u261');
gv_vAlignTable['u261'] = 'center';
var u262 = document.getElementById('u262');

u262.style.cursor = 'pointer';
if (bIE) u262.attachEvent("onclick", Clicku262);
else u262.addEventListener("click", Clicku262, true);
function Clicku262(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u253', 'pd3u253','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
}

}

if (bIE) u262.attachEvent("onmouseout", MouseOutu262);
else u262.addEventListener("mouseout", MouseOutu262, true);
function MouseOutu262(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u262',e)) return;
if (true) {

	SetPanelState('u253', 'pd0u253','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u263 = document.getElementById('u263');
gv_vAlignTable['u263'] = 'center';
var u264 = document.getElementById('u264');

if (bIE) u264.attachEvent("onmouseover", MouseOveru264);
else u264.addEventListener("mouseover", MouseOveru264, true);
function MouseOveru264(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u264',e)) return;
if (true) {

	SetPanelState('u253', 'pd1u253','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Old Gold</span></p>');

}

}

var u265 = document.getElementById('u265');
gv_vAlignTable['u265'] = 'center';
var u266 = document.getElementById('u266');

var u267 = document.getElementById('u267');

var u268 = document.getElementById('u268');
gv_vAlignTable['u268'] = 'center';
var u269 = document.getElementById('u269');

u269.style.cursor = 'pointer';
if (bIE) u269.attachEvent("onclick", Clicku269);
else u269.addEventListener("click", Clicku269, true);
function Clicku269(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u266', 'pd1u266','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                DisableImageWidget('u20');
}
else
if (true) {

	SetPanelState('u266', 'pd1u266','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u269.attachEvent("onmouseout", MouseOutu269);
else u269.addEventListener("mouseout", MouseOutu269, true);
function MouseOutu269(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u269',e)) return;
if (true) {

	SetPanelState('u266', 'pd2u266','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u31 = document.getElementById('u31');

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u33 = document.getElementById('u33');

u33.style.cursor = 'pointer';
if (bIE) u33.attachEvent("onclick", Clicku33);
else u33.addEventListener("click", Clicku33, true);
function Clicku33(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u35','','none',500);

	SetPanelState('u43', 'pd1u43','none','',500,'none','',500);

	SetPanelState('u8', 'pd2u8','none','',500,'none','',500);

SetWidgetSelected('u514');
SetGlobalVariableValue('$colorCount', '1');

SetWidgetRichText('u7', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#BCBCBC;"> Show the white in this image</span></p>');

	var obj1 = document.getElementById("u6");
    obj1.disabled = true;

                                EnableImageWidget('u20');
	MoveWidgetTo('u31', 2,50,'none',500);

	MoveWidgetTo('u37', 2,100,'none',500);

	SetPanelVisibility('u29','hidden','none',500);

	SetPanelVisibility('u40','hidden','none',500);

}

}

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u35 = document.getElementById('u35');

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u37 = document.getElementById('u37');

var u38 = document.getElementById('u38');

u38.style.cursor = 'pointer';
if (bIE) u38.attachEvent("onclick", Clicku38);
else u38.addEventListener("click", Clicku38, true);
function Clicku38(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u40','','none',500);

	var obj1 = document.getElementById("u6");
    obj1.disabled = false;

                                EnableImageWidget('u20');
SetWidgetRichText('u7', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Show the white in this image</span></p>');

	SetPanelState('u43', 'pd2u43','none','',500,'none','',500);

	SetPanelVisibility('u29','hidden','none',500);

	SetPanelVisibility('u35','hidden','none',500);

	MoveWidgetTo('u31', 2,50,'none',500);

	MoveWidgetTo('u37', 2,80,'none',500);

}

}

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u538 = document.getElementById('u538');
gv_vAlignTable['u538'] = 'center';
var u539 = document.getElementById('u539');

u539.style.cursor = 'pointer';
if (bIE) u539.attachEvent("onclick", Clicku539);
else u539.addEventListener("click", Clicku539, true);
function Clicku539(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u539');
}

}

if (bIE) u539.attachEvent("onmouseover", MouseOveru539);
else u539.addEventListener("mouseover", MouseOveru539, true);
function MouseOveru539(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u539',e)) return;
if (true) {

	SetPanelState('u536', 'pd1u536','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Red</span></p>');

}

}

if (bIE) u539.attachEvent("onmouseout", MouseOutu539);
else u539.addEventListener("mouseout", MouseOutu539, true);
function MouseOutu539(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u539',e)) return;
if (true) {

	SetPanelState('u536', 'pd0u536','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u800 = document.getElementById('u800');

u800.style.cursor = 'pointer';
if (bIE) u800.attachEvent("onclick", Clicku800);
else u800.addEventListener("click", Clicku800, true);
function Clicku800(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u791', 'pd3u791','none','',500,'none','',500);

                                EnableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u800.attachEvent("onmouseout", MouseOutu800);
else u800.addEventListener("mouseout", MouseOutu800, true);
function MouseOutu800(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u800',e)) return;
if (true) {

	SetPanelState('u791', 'pd0u791','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u801 = document.getElementById('u801');
gv_vAlignTable['u801'] = 'center';
var u802 = document.getElementById('u802');

if (bIE) u802.attachEvent("onmouseover", MouseOveru802);
else u802.addEventListener("mouseover", MouseOveru802, true);
function MouseOveru802(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u802',e)) return;
if (true) {

	SetPanelState('u791', 'pd1u791','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Charity Pink</span></p>');

}

}

var u803 = document.getElementById('u803');
gv_vAlignTable['u803'] = 'center';
var u804 = document.getElementById('u804');

var u270 = document.getElementById('u270');
gv_vAlignTable['u270'] = 'center';
var u271 = document.getElementById('u271');

if (bIE) u271.attachEvent("onmouseover", MouseOveru271);
else u271.addEventListener("mouseover", MouseOveru271, true);
function MouseOveru271(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u271',e)) return;
if (true) {

	SetPanelState('u266', 'pd3u266','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Olive</span></p>');

}

}

var u807 = document.getElementById('u807');

u807.style.cursor = 'pointer';
if (bIE) u807.attachEvent("onclick", Clicku807);
else u807.addEventListener("click", Clicku807, true);
function Clicku807(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u804', 'pd1u804','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                DisableImageWidget('u20');
}
else
if (true) {

	SetPanelState('u804', 'pd1u804','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u807.attachEvent("onmouseout", MouseOutu807);
else u807.addEventListener("mouseout", MouseOutu807, true);
function MouseOutu807(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u807',e)) return;
if (true) {

	SetPanelState('u804', 'pd2u804','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u808 = document.getElementById('u808');
gv_vAlignTable['u808'] = 'center';
var u809 = document.getElementById('u809');

if (bIE) u809.attachEvent("onmouseover", MouseOveru809);
else u809.addEventListener("mouseover", MouseOveru809, true);
function MouseOveru809(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u809',e)) return;
if (true) {

	SetPanelState('u804', 'pd3u804','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Hot Pink</span></p>');

}

}

var u275 = document.getElementById('u275');

u275.style.cursor = 'pointer';
if (bIE) u275.attachEvent("onclick", Clicku275);
else u275.addEventListener("click", Clicku275, true);
function Clicku275(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u266', 'pd3u266','none','',500,'none','',500);

                                EnableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u275.attachEvent("onmouseout", MouseOutu275);
else u275.addEventListener("mouseout", MouseOutu275, true);
function MouseOutu275(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u275',e)) return;
if (true) {

	SetPanelState('u266', 'pd0u266','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u276 = document.getElementById('u276');
gv_vAlignTable['u276'] = 'center';
var u277 = document.getElementById('u277');

if (bIE) u277.attachEvent("onmouseover", MouseOveru277);
else u277.addEventListener("mouseover", MouseOveru277, true);
function MouseOveru277(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u277',e)) return;
if (true) {

	SetPanelState('u266', 'pd1u266','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Olive</span></p>');

}

}

var u278 = document.getElementById('u278');
gv_vAlignTable['u278'] = 'center';
var u279 = document.getElementById('u279');

var u40 = document.getElementById('u40');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u43 = document.getElementById('u43');

var u542 = document.getElementById('u542');

var u543 = document.getElementById('u543');
gv_vAlignTable['u543'] = 'center';
var u46 = document.getElementById('u46');

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u48 = document.getElementById('u48');

u48.style.cursor = 'pointer';
if (bIE) u48.attachEvent("onclick", Clicku48);
else u48.addEventListener("click", Clicku48, true);
function Clicku48(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u45', 'pd1u45','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                DisableImageWidget('u20');
}
else
if (true) {

	SetPanelState('u45', 'pd1u45','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u48.attachEvent("onmouseout", MouseOutu48);
else u48.addEventListener("mouseout", MouseOutu48, true);
function MouseOutu48(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u48',e)) return;
if (true) {

	SetPanelState('u45', 'pd2u45','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
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

SetWidgetSelected('u549');
}

}

if (bIE) u549.attachEvent("onmouseover", MouseOveru549);
else u549.addEventListener("mouseover", MouseOveru549, true);
function MouseOveru549(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u549',e)) return;
if (true) {

	SetPanelState('u546', 'pd1u546','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Pink</span></p>');

}

}

if (bIE) u549.attachEvent("onmouseout", MouseOutu549);
else u549.addEventListener("mouseout", MouseOutu549, true);
function MouseOutu549(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u549',e)) return;
if (true) {

	SetPanelState('u546', 'pd0u546','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u810 = document.getElementById('u810');
gv_vAlignTable['u810'] = 'center';
var u811 = document.getElementById('u811');

var u812 = document.getElementById('u812');
gv_vAlignTable['u812'] = 'center';
var u813 = document.getElementById('u813');

u813.style.cursor = 'pointer';
if (bIE) u813.attachEvent("onclick", Clicku813);
else u813.addEventListener("click", Clicku813, true);
function Clicku813(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u804', 'pd3u804','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u813.attachEvent("onmouseout", MouseOutu813);
else u813.addEventListener("mouseout", MouseOutu813, true);
function MouseOutu813(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u813',e)) return;
if (true) {

	SetPanelState('u804', 'pd0u804','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u814 = document.getElementById('u814');
gv_vAlignTable['u814'] = 'center';
var u280 = document.getElementById('u280');
gv_vAlignTable['u280'] = 'center';
var u281 = document.getElementById('u281');
gv_vAlignTable['u281'] = 'top';
var u817 = document.getElementById('u817');

var u283 = document.getElementById('u283');
gv_vAlignTable['u283'] = 'top';
var u819 = document.getElementById('u819');
gv_vAlignTable['u819'] = 'center';
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


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u284', 'pd1u284','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                DisableImageWidget('u20');
}
else
if (true) {

	SetPanelState('u284', 'pd1u284','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Gold</span></p>');

}

}

var u50 = document.getElementById('u50');

if (bIE) u50.attachEvent("onmouseover", MouseOveru50);
else u50.addEventListener("mouseover", MouseOveru50, true);
function MouseOveru50(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u50',e)) return;
if (true) {

	SetPanelState('u45', 'pd3u45','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Black</span></p>');

}

}

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u550 = document.getElementById('u550');
gv_vAlignTable['u550'] = 'center';
var u551 = document.getElementById('u551');

var u552 = document.getElementById('u552');

var u553 = document.getElementById('u553');
gv_vAlignTable['u553'] = 'center';
var u56 = document.getElementById('u56');

if (bIE) u56.attachEvent("onmouseover", MouseOveru56);
else u56.addEventListener("mouseover", MouseOveru56, true);
function MouseOveru56(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u56',e)) return;
if (true) {

	SetPanelState('u45', 'pd1u45','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Black</span></p>');

}

}

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u58 = document.getElementById('u58');

var u59 = document.getElementById('u59');

var u558 = document.getElementById('u558');
gv_vAlignTable['u558'] = 'center';
var u559 = document.getElementById('u559');

u559.style.cursor = 'pointer';
if (bIE) u559.attachEvent("onclick", Clicku559);
else u559.addEventListener("click", Clicku559, true);
function Clicku559(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u559');
}

}

if (bIE) u559.attachEvent("onmouseover", MouseOveru559);
else u559.addEventListener("mouseover", MouseOveru559, true);
function MouseOveru559(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u559',e)) return;
if (true) {

	SetPanelState('u556', 'pd1u556','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Hot Pink</span></p>');

}

}

if (bIE) u559.attachEvent("onmouseout", MouseOutu559);
else u559.addEventListener("mouseout", MouseOutu559, true);
function MouseOutu559(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u559',e)) return;
if (true) {

	SetPanelState('u556', 'pd0u556','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u1019 = document.getElementById('u1019');
gv_vAlignTable['u1019'] = 'center';
var u1015 = document.getElementById('u1015');

if (bIE) u1015.attachEvent("onmouseover", MouseOveru1015);
else u1015.addEventListener("mouseover", MouseOveru1015, true);
function MouseOveru1015(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u1015',e)) return;
if (true) {

	SetPanelState('u1004', 'pd1u1004','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Green</span></p>');

}

}

var u820 = document.getElementById('u820');

u820.style.cursor = 'pointer';
if (bIE) u820.attachEvent("onclick", Clicku820);
else u820.addEventListener("click", Clicku820, true);
function Clicku820(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

                                DisableImageWidget('u20');
	SetPanelState('u817', 'pd1u817','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}
else
if (true) {

	SetPanelState('u817', 'pd1u817','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u820.attachEvent("onmouseout", MouseOutu820);
else u820.addEventListener("mouseout", MouseOutu820, true);
function MouseOutu820(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u820',e)) return;
if (true) {

	SetPanelState('u817', 'pd2u817','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u821 = document.getElementById('u821');
gv_vAlignTable['u821'] = 'center';
var u822 = document.getElementById('u822');

if (bIE) u822.attachEvent("onmouseover", MouseOveru822);
else u822.addEventListener("mouseover", MouseOveru822, true);
function MouseOveru822(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u822',e)) return;
if (true) {

	SetPanelState('u817', 'pd3u817','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Magenta</span></p>');

}

}

var u823 = document.getElementById('u823');
gv_vAlignTable['u823'] = 'center';
var u824 = document.getElementById('u824');

var u825 = document.getElementById('u825');
gv_vAlignTable['u825'] = 'center';
var u826 = document.getElementById('u826');

u826.style.cursor = 'pointer';
if (bIE) u826.attachEvent("onclick", Clicku826);
else u826.addEventListener("click", Clicku826, true);
function Clicku826(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u817', 'pd3u817','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
}

}

if (bIE) u826.attachEvent("onmouseout", MouseOutu826);
else u826.addEventListener("mouseout", MouseOutu826, true);
function MouseOutu826(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u826',e)) return;
if (true) {

	SetPanelState('u817', 'pd0u817','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u827 = document.getElementById('u827');
gv_vAlignTable['u827'] = 'center';
var u828 = document.getElementById('u828');

if (bIE) u828.attachEvent("onmouseover", MouseOveru828);
else u828.addEventListener("mouseover", MouseOveru828, true);
function MouseOveru828(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u828',e)) return;
if (true) {

	SetPanelState('u817', 'pd1u817','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Magenta</span></p>');

}

}

var u829 = document.getElementById('u829');
gv_vAlignTable['u829'] = 'center';
var u295 = document.getElementById('u295');

if (bIE) u295.attachEvent("onmouseover", MouseOveru295);
else u295.addEventListener("mouseover", MouseOveru295, true);
function MouseOveru295(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u295',e)) return;
if (true) {

	SetPanelState('u284', 'pd1u284','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Gold</span></p>');

}

}

var u296 = document.getElementById('u296');
gv_vAlignTable['u296'] = 'center';
var u297 = document.getElementById('u297');

var u298 = document.getElementById('u298');

var u299 = document.getElementById('u299');
gv_vAlignTable['u299'] = 'center';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
var u61 = document.getElementById('u61');

u61.style.cursor = 'pointer';
if (bIE) u61.attachEvent("onclick", Clicku61);
else u61.addEventListener("click", Clicku61, true);
function Clicku61(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u58', 'pd1u58','none','',500,'none','',500);

                                DisableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}
else
if (true) {

	SetPanelState('u58', 'pd1u58','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u61.attachEvent("onmouseout", MouseOutu61);
else u61.addEventListener("mouseout", MouseOutu61, true);
function MouseOutu61(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u61',e)) return;
if (true) {

	SetPanelState('u58', 'pd2u58','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u560 = document.getElementById('u560');
gv_vAlignTable['u560'] = 'center';
var u561 = document.getElementById('u561');

var u562 = document.getElementById('u562');

var u563 = document.getElementById('u563');
gv_vAlignTable['u563'] = 'center';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'center';
var u565 = document.getElementById('u565');
gv_vAlignTable['u565'] = 'center';
var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'center';
var u69 = document.getElementById('u69');

if (bIE) u69.attachEvent("onmouseover", MouseOveru69);
else u69.addEventListener("mouseover", MouseOveru69, true);
function MouseOveru69(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u69',e)) return;
if (true) {

	SetPanelState('u58', 'pd1u58','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Light Grey</span></p>');

}

}

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

SetWidgetSelected('u569');
}

}

if (bIE) u569.attachEvent("onmouseover", MouseOveru569);
else u569.addEventListener("mouseover", MouseOveru569, true);
function MouseOveru569(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u569',e)) return;
if (true) {

	SetPanelState('u566', 'pd1u566','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Orange</span></p>');

}

}

if (bIE) u569.attachEvent("onmouseout", MouseOutu569);
else u569.addEventListener("mouseout", MouseOutu569, true);
function MouseOutu569(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u569',e)) return;
if (true) {

	SetPanelState('u566', 'pd0u566','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u830 = document.getElementById('u830');

var u831 = document.getElementById('u831');

var u832 = document.getElementById('u832');
gv_vAlignTable['u832'] = 'center';
var u833 = document.getElementById('u833');

u833.style.cursor = 'pointer';
if (bIE) u833.attachEvent("onclick", Clicku833);
else u833.addEventListener("click", Clicku833, true);
function Clicku833(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

                                DisableImageWidget('u20');
	SetPanelState('u830', 'pd1u830','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}
else
if (true) {

	SetPanelState('u830', 'pd1u830','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u833.attachEvent("onmouseout", MouseOutu833);
else u833.addEventListener("mouseout", MouseOutu833, true);
function MouseOutu833(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u833',e)) return;
if (true) {

	SetPanelState('u830', 'pd2u830','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u834 = document.getElementById('u834');
gv_vAlignTable['u834'] = 'center';
var u835 = document.getElementById('u835');

if (bIE) u835.attachEvent("onmouseover", MouseOveru835);
else u835.addEventListener("mouseover", MouseOveru835, true);
function MouseOveru835(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u835',e)) return;
if (true) {

	SetPanelState('u830', 'pd3u830','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Orange</span></p>');

}

}

var u836 = document.getElementById('u836');
gv_vAlignTable['u836'] = 'center';
var u837 = document.getElementById('u837');

var u838 = document.getElementById('u838');
gv_vAlignTable['u838'] = 'center';
var u839 = document.getElementById('u839');

u839.style.cursor = 'pointer';
if (bIE) u839.attachEvent("onclick", Clicku839);
else u839.addEventListener("click", Clicku839, true);
function Clicku839(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u830', 'pd3u830','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
}

}

if (bIE) u839.attachEvent("onmouseout", MouseOutu839);
else u839.addEventListener("mouseout", MouseOutu839, true);
function MouseOutu839(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u839',e)) return;
if (true) {

	SetPanelState('u830', 'pd0u830','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u1028 = document.getElementById('u1028');

if (bIE) u1028.attachEvent("onmouseover", MouseOveru1028);
else u1028.addEventListener("mouseover", MouseOveru1028, true);
function MouseOveru1028(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u1028',e)) return;
if (true) {

	SetPanelState('u1017', 'pd1u1017','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Lime</span></p>');

}

}

var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'center';
var u71 = document.getElementById('u71');

var u72 = document.getElementById('u72');

var u571 = document.getElementById('u571');

var u572 = document.getElementById('u572');

var u573 = document.getElementById('u573');
gv_vAlignTable['u573'] = 'center';
var u76 = document.getElementById('u76');

if (bIE) u76.attachEvent("onmouseover", MouseOveru76);
else u76.addEventListener("mouseover", MouseOveru76, true);
function MouseOveru76(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u76',e)) return;
if (true) {

	SetPanelState('u71', 'pd3u71','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
var u78 = document.getElementById('u78');

var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'center';
var u578 = document.getElementById('u578');
gv_vAlignTable['u578'] = 'center';
var u579 = document.getElementById('u579');

u579.style.cursor = 'pointer';
if (bIE) u579.attachEvent("onclick", Clicku579);
else u579.addEventListener("click", Clicku579, true);
function Clicku579(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u579');
}

}

if (bIE) u579.attachEvent("onmouseover", MouseOveru579);
else u579.addEventListener("mouseover", MouseOveru579, true);
function MouseOveru579(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u579',e)) return;
if (true) {

	SetPanelState('u576', 'pd1u576','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Athletic Gold</span></p>');

}

}

if (bIE) u579.attachEvent("onmouseout", MouseOutu579);
else u579.addEventListener("mouseout", MouseOutu579, true);
function MouseOutu579(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u579',e)) return;
if (true) {

	SetPanelState('u576', 'pd0u576','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u840 = document.getElementById('u840');
gv_vAlignTable['u840'] = 'center';
var u841 = document.getElementById('u841');

if (bIE) u841.attachEvent("onmouseover", MouseOveru841);
else u841.addEventListener("mouseover", MouseOveru841, true);
function MouseOveru841(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u841',e)) return;
if (true) {

	SetPanelState('u830', 'pd1u830','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Orange</span></p>');

}

}

var u842 = document.getElementById('u842');
gv_vAlignTable['u842'] = 'center';
var u843 = document.getElementById('u843');

var u844 = document.getElementById('u844');

var u845 = document.getElementById('u845');
gv_vAlignTable['u845'] = 'center';
var u846 = document.getElementById('u846');

u846.style.cursor = 'pointer';
if (bIE) u846.attachEvent("onclick", Clicku846);
else u846.addEventListener("click", Clicku846, true);
function Clicku846(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u843', 'pd1u843','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u846.attachEvent("onmouseout", MouseOutu846);
else u846.addEventListener("mouseout", MouseOutu846, true);
function MouseOutu846(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u846',e)) return;
if (true) {

	SetPanelState('u843', 'pd2u843','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u847 = document.getElementById('u847');
gv_vAlignTable['u847'] = 'center';
var u848 = document.getElementById('u848');

if (bIE) u848.attachEvent("onmouseover", MouseOveru848);
else u848.addEventListener("mouseover", MouseOveru848, true);
function MouseOveru848(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u848',e)) return;
if (true) {

	SetPanelState('u843', 'pd3u843','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Light Orange</span></p>');

}

}

var u849 = document.getElementById('u849');
gv_vAlignTable['u849'] = 'center';
var u1038 = document.getElementById('u1038');
gv_vAlignTable['u1038'] = 'center';
var u1039 = document.getElementById('u1039');

u1039.style.cursor = 'pointer';
if (bIE) u1039.attachEvent("onclick", Clicku1039);
else u1039.addEventListener("click", Clicku1039, true);
function Clicku1039(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u1030', 'pd3u1030','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
}

}

if (bIE) u1039.attachEvent("onmouseout", MouseOutu1039);
else u1039.addEventListener("mouseout", MouseOutu1039, true);
function MouseOutu1039(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u1039',e)) return;
if (true) {

	SetPanelState('u1030', 'pd0u1030','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u80 = document.getElementById('u80');

u80.style.cursor = 'pointer';
if (bIE) u80.attachEvent("onclick", Clicku80);
else u80.addEventListener("click", Clicku80, true);
function Clicku80(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u71', 'pd3u71','none','',500,'none','',500);

                                EnableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u80.attachEvent("onmouseout", MouseOutu80);
else u80.addEventListener("mouseout", MouseOutu80, true);
function MouseOutu80(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u80',e)) return;
if (true) {

	SetPanelState('u71', 'pd0u71','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u82 = document.getElementById('u82');

if (bIE) u82.attachEvent("onmouseover", MouseOveru82);
else u82.addEventListener("mouseover", MouseOveru82, true);
function MouseOveru82(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u82',e)) return;
if (true) {

	SetPanelState('u71', 'pd1u71','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Grey</span></p>');

}

}

var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'center';
var u84 = document.getElementById('u84');

var u85 = document.getElementById('u85');

var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'center';
var u87 = document.getElementById('u87');

u87.style.cursor = 'pointer';
if (bIE) u87.attachEvent("onclick", Clicku87);
else u87.addEventListener("click", Clicku87, true);
function Clicku87(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u84', 'pd1u84','none','',500,'none','',500);

                                DisableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}
else
if (true) {

	SetPanelState('u84', 'pd1u84','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u87.attachEvent("onmouseout", MouseOutu87);
else u87.addEventListener("mouseout", MouseOutu87, true);
function MouseOutu87(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u87',e)) return;
if (true) {

	SetPanelState('u84', 'pd2u84','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'center';
var u89 = document.getElementById('u89');

if (bIE) u89.attachEvent("onmouseover", MouseOveru89);
else u89.addEventListener("mouseover", MouseOveru89, true);
function MouseOveru89(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u89',e)) return;
if (true) {

	SetPanelState('u84', 'pd3u84','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">White</span></p>');

}

}

var u588 = document.getElementById('u588');
gv_vAlignTable['u588'] = 'center';
var u589 = document.getElementById('u589');

u589.style.cursor = 'pointer';
if (bIE) u589.attachEvent("onclick", Clicku589);
else u589.addEventListener("click", Clicku589, true);
function Clicku589(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u589');
}

}

if (bIE) u589.attachEvent("onmouseover", MouseOveru589);
else u589.addEventListener("mouseover", MouseOveru589, true);
function MouseOveru589(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u589',e)) return;
if (true) {

	SetPanelState('u586', 'pd1u586','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Brown</span></p>');

}

}

if (bIE) u589.attachEvent("onmouseout", MouseOutu589);
else u589.addEventListener("mouseout", MouseOutu589, true);
function MouseOutu589(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u589',e)) return;
if (true) {

	SetPanelState('u586', 'pd0u586','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u850 = document.getElementById('u850');

var u851 = document.getElementById('u851');
gv_vAlignTable['u851'] = 'center';
var u852 = document.getElementById('u852');

u852.style.cursor = 'pointer';
if (bIE) u852.attachEvent("onclick", Clicku852);
else u852.addEventListener("click", Clicku852, true);
function Clicku852(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u843', 'pd3u843','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
}

}

if (bIE) u852.attachEvent("onmouseout", MouseOutu852);
else u852.addEventListener("mouseout", MouseOutu852, true);
function MouseOutu852(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u852',e)) return;
if (true) {

	SetPanelState('u843', 'pd0u843','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u853 = document.getElementById('u853');
gv_vAlignTable['u853'] = 'center';
var u854 = document.getElementById('u854');

if (bIE) u854.attachEvent("onmouseover", MouseOveru854);
else u854.addEventListener("mouseover", MouseOveru854, true);
function MouseOveru854(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u854',e)) return;
if (true) {

	SetPanelState('u843', 'pd1u843','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Light Orange</span></p>');

}

}

var u855 = document.getElementById('u855');
gv_vAlignTable['u855'] = 'center';
var u856 = document.getElementById('u856');

var u857 = document.getElementById('u857');

var u858 = document.getElementById('u858');
gv_vAlignTable['u858'] = 'center';
var u859 = document.getElementById('u859');

u859.style.cursor = 'pointer';
if (bIE) u859.attachEvent("onclick", Clicku859);
else u859.addEventListener("click", Clicku859, true);
function Clicku859(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u856', 'pd1u856','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                DisableImageWidget('u20');
}
else
if (true) {

	SetPanelState('u856', 'pd1u856','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u859.attachEvent("onmouseout", MouseOutu859);
else u859.addEventListener("mouseout", MouseOutu859, true);
function MouseOutu859(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u859',e)) return;
if (true) {

	SetPanelState('u856', 'pd2u856','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u1043 = document.getElementById('u1043');

var u1044 = document.getElementById('u1044');

var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'center';
var u91 = document.getElementById('u91');

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'center';
var u93 = document.getElementById('u93');

u93.style.cursor = 'pointer';
if (bIE) u93.attachEvent("onclick", Clicku93);
else u93.addEventListener("click", Clicku93, true);
function Clicku93(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u84', 'pd3u84','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
}

}

if (bIE) u93.attachEvent("onmouseout", MouseOutu93);
else u93.addEventListener("mouseout", MouseOutu93, true);
function MouseOutu93(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u93',e)) return;
if (true) {

	SetPanelState('u84', 'pd0u84','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'center';
var u95 = document.getElementById('u95');

if (bIE) u95.attachEvent("onmouseover", MouseOveru95);
else u95.addEventListener("mouseover", MouseOveru95, true);
function MouseOveru95(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u95',e)) return;
if (true) {

	SetPanelState('u84', 'pd1u84','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">White</span></p>');

}

}

var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'center';
var u97 = document.getElementById('u97');

var u98 = document.getElementById('u98');

var u597 = document.getElementById('u597');

var u598 = document.getElementById('u598');
gv_vAlignTable['u598'] = 'center';
var u599 = document.getElementById('u599');

u599.style.cursor = 'pointer';
if (bIE) u599.attachEvent("onclick", Clicku599);
else u599.addEventListener("click", Clicku599, true);
function Clicku599(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u599');
}

}

if (bIE) u599.attachEvent("onmouseover", MouseOveru599);
else u599.addEventListener("mouseover", MouseOveru599, true);
function MouseOveru599(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u599',e)) return;
if (true) {

	SetPanelState('u596', 'pd1u596','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Olive</span></p>');

}

}

if (bIE) u599.attachEvent("onmouseout", MouseOutu599);
else u599.addEventListener("mouseout", MouseOutu599, true);
function MouseOutu599(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u599',e)) return;
if (true) {

	SetPanelState('u596', 'pd0u596','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u860 = document.getElementById('u860');
gv_vAlignTable['u860'] = 'center';
var u861 = document.getElementById('u861');

if (bIE) u861.attachEvent("onmouseover", MouseOveru861);
else u861.addEventListener("mouseover", MouseOveru861, true);
function MouseOveru861(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u861',e)) return;
if (true) {

	SetPanelState('u856', 'pd3u856','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Athletic Gold</span></p>');

}

}

var u862 = document.getElementById('u862');
gv_vAlignTable['u862'] = 'center';
var u863 = document.getElementById('u863');

var u864 = document.getElementById('u864');
gv_vAlignTable['u864'] = 'center';
var u865 = document.getElementById('u865');

u865.style.cursor = 'pointer';
if (bIE) u865.attachEvent("onclick", Clicku865);
else u865.addEventListener("click", Clicku865, true);
function Clicku865(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u856', 'pd3u856','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
}

}

if (bIE) u865.attachEvent("onmouseout", MouseOutu865);
else u865.addEventListener("mouseout", MouseOutu865, true);
function MouseOutu865(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u865',e)) return;
if (true) {

	SetPanelState('u856', 'pd0u856','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u866 = document.getElementById('u866');
gv_vAlignTable['u866'] = 'center';
var u867 = document.getElementById('u867');

if (bIE) u867.attachEvent("onmouseover", MouseOveru867);
else u867.addEventListener("mouseover", MouseOveru867, true);
function MouseOveru867(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u867',e)) return;
if (true) {

	SetPanelState('u856', 'pd1u856','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Athletic Gold</span></p>');

}

}

var u868 = document.getElementById('u868');
gv_vAlignTable['u868'] = 'center';
var u869 = document.getElementById('u869');

var u300 = document.getElementById('u300');

u300.style.cursor = 'pointer';
if (bIE) u300.attachEvent("onclick", Clicku300);
else u300.addEventListener("click", Clicku300, true);
function Clicku300(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u297', 'pd1u297','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                DisableImageWidget('u20');
}
else
if (true) {

	SetPanelState('u297', 'pd1u297','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Yellow</span></p>');

}

}

var u303 = document.getElementById('u303');
gv_vAlignTable['u303'] = 'center';
var u870 = document.getElementById('u870');

var u871 = document.getElementById('u871');
gv_vAlignTable['u871'] = 'center';
var u872 = document.getElementById('u872');

u872.style.cursor = 'pointer';
if (bIE) u872.attachEvent("onclick", Clicku872);
else u872.addEventListener("click", Clicku872, true);
function Clicku872(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u869', 'pd1u869','none','',500,'none','',500);

                                DisableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}
else
if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u869', 'pd1u869','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u872.attachEvent("onmouseout", MouseOutu872);
else u872.addEventListener("mouseout", MouseOutu872, true);
function MouseOutu872(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u872',e)) return;
if (true) {

	SetPanelState('u869', 'pd2u869','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u873 = document.getElementById('u873');
gv_vAlignTable['u873'] = 'center';
var u874 = document.getElementById('u874');

if (bIE) u874.attachEvent("onmouseover", MouseOveru874);
else u874.addEventListener("mouseover", MouseOveru874, true);
function MouseOveru874(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u874',e)) return;
if (true) {

	SetPanelState('u869', 'pd3u869','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Tan</span></p>');

}

}

var u875 = document.getElementById('u875');
gv_vAlignTable['u875'] = 'center';
var u876 = document.getElementById('u876');

var u877 = document.getElementById('u877');
gv_vAlignTable['u877'] = 'center';
var u878 = document.getElementById('u878');

u878.style.cursor = 'pointer';
if (bIE) u878.attachEvent("onclick", Clicku878);
else u878.addEventListener("click", Clicku878, true);
function Clicku878(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u869', 'pd3u869','none','',500,'none','',500);

                                EnableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u878.attachEvent("onmouseout", MouseOutu878);
else u878.addEventListener("mouseout", MouseOutu878, true);
function MouseOutu878(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u878',e)) return;
if (true) {

	SetPanelState('u869', 'pd0u869','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u879 = document.getElementById('u879');
gv_vAlignTable['u879'] = 'center';
var u880 = document.getElementById('u880');

if (bIE) u880.attachEvent("onmouseover", MouseOveru880);
else u880.addEventListener("mouseover", MouseOveru880, true);
function MouseOveru880(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u880',e)) return;
if (true) {

	SetPanelState('u869', 'pd1u869','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Tan</span></p>');

}

}

var u881 = document.getElementById('u881');
gv_vAlignTable['u881'] = 'center';
var u882 = document.getElementById('u882');

var u883 = document.getElementById('u883');

var u884 = document.getElementById('u884');
gv_vAlignTable['u884'] = 'center';
var u885 = document.getElementById('u885');

u885.style.cursor = 'pointer';
if (bIE) u885.attachEvent("onclick", Clicku885);
else u885.addEventListener("click", Clicku885, true);
function Clicku885(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u882', 'pd1u882','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                DisableImageWidget('u20');
}
else
if (true) {

	SetPanelState('u882', 'pd1u882','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u885.attachEvent("onmouseout", MouseOutu885);
else u885.addEventListener("mouseout", MouseOutu885, true);
function MouseOutu885(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u885',e)) return;
if (true) {

	SetPanelState('u882', 'pd2u882','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u886 = document.getElementById('u886');
gv_vAlignTable['u886'] = 'center';
var u887 = document.getElementById('u887');

if (bIE) u887.attachEvent("onmouseover", MouseOveru887);
else u887.addEventListener("mouseover", MouseOveru887, true);
function MouseOveru887(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u887',e)) return;
if (true) {

	SetPanelState('u882', 'pd3u882','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Brown</span></p>');

}

}

var u888 = document.getElementById('u888');
gv_vAlignTable['u888'] = 'center';
var u889 = document.getElementById('u889');

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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Lemon</span></p>');

}

}

var u890 = document.getElementById('u890');
gv_vAlignTable['u890'] = 'center';
var u891 = document.getElementById('u891');

u891.style.cursor = 'pointer';
if (bIE) u891.attachEvent("onclick", Clicku891);
else u891.addEventListener("click", Clicku891, true);
function Clicku891(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u882', 'pd3u882','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
}

}

if (bIE) u891.attachEvent("onmouseout", MouseOutu891);
else u891.addEventListener("mouseout", MouseOutu891, true);
function MouseOutu891(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u891',e)) return;
if (true) {

	SetPanelState('u882', 'pd0u882','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u892 = document.getElementById('u892');
gv_vAlignTable['u892'] = 'center';
var u893 = document.getElementById('u893');

if (bIE) u893.attachEvent("onmouseover", MouseOveru893);
else u893.addEventListener("mouseover", MouseOveru893, true);
function MouseOveru893(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u893',e)) return;
if (true) {

	SetPanelState('u882', 'pd1u882','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Brown</span></p>');

}

}

var u894 = document.getElementById('u894');
gv_vAlignTable['u894'] = 'center';
var u895 = document.getElementById('u895');

var u896 = document.getElementById('u896');

var u897 = document.getElementById('u897');
gv_vAlignTable['u897'] = 'center';
var u898 = document.getElementById('u898');

u898.style.cursor = 'pointer';
if (bIE) u898.attachEvent("onclick", Clicku898);
else u898.addEventListener("click", Clicku898, true);
function Clicku898(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u895', 'pd1u895','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                DisableImageWidget('u20');
}
else
if (true) {

	SetPanelState('u895', 'pd1u895','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u898.attachEvent("onmouseout", MouseOutu898);
else u898.addEventListener("mouseout", MouseOutu898, true);
function MouseOutu898(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u898',e)) return;
if (true) {

	SetPanelState('u895', 'pd2u895','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u899 = document.getElementById('u899');
gv_vAlignTable['u899'] = 'center';
var u330 = document.getElementById('u330');

var u331 = document.getElementById('u331');
gv_vAlignTable['u331'] = 'center';
var u332 = document.getElementById('u332');

u332.style.cursor = 'pointer';
if (bIE) u332.attachEvent("onclick", Clicku332);
else u332.addEventListener("click", Clicku332, true);
function Clicku332(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u323', 'pd3u323','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
}

}

if (bIE) u332.attachEvent("onmouseout", MouseOutu332);
else u332.addEventListener("mouseout", MouseOutu332, true);
function MouseOutu332(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u332',e)) return;
if (true) {

	SetPanelState('u323', 'pd0u323','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u340 = document.getElementById('u340');
gv_vAlignTable['u340'] = 'center';
var u341 = document.getElementById('u341');

if (bIE) u341.attachEvent("onmouseover", MouseOveru341);
else u341.addEventListener("mouseover", MouseOveru341, true);
function MouseOveru341(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u341',e)) return;
if (true) {

	SetPanelState('u336', 'pd3u336','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Kelly Green</span></p>');

}

}

var u342 = document.getElementById('u342');
gv_vAlignTable['u342'] = 'center';
var u343 = document.getElementById('u343');

var u345 = document.getElementById('u345');

u345.style.cursor = 'pointer';
if (bIE) u345.attachEvent("onclick", Clicku345);
else u345.addEventListener("click", Clicku345, true);
function Clicku345(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u336', 'pd3u336','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
}

}

if (bIE) u345.attachEvent("onmouseout", MouseOutu345);
else u345.addEventListener("mouseout", MouseOutu345, true);
function MouseOutu345(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u345',e)) return;
if (true) {

	SetPanelState('u336', 'pd0u336','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u352 = document.getElementById('u352');

u352.style.cursor = 'pointer';
if (bIE) u352.attachEvent("onclick", Clicku352);
else u352.addEventListener("click", Clicku352, true);
function Clicku352(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u349', 'pd1u349','none','',500,'none','',500);

                                DisableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}
else
if (true) {

	SetPanelState('u349', 'pd1u349','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Teal</span></p>');

}

}

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

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Green</span></p>');

}

}

var u374 = document.getElementById('u374');
gv_vAlignTable['u374'] = 'center';
var u380 = document.getElementById('u380');

if (bIE) u380.attachEvent("onmouseover", MouseOveru380);
else u380.addEventListener("mouseover", MouseOveru380, true);
function MouseOveru380(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u380',e)) return;
if (true) {

	SetPanelState('u375', 'pd3u375','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Lime</span></p>');

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

                                EnableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

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


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u388', 'pd1u388','none','',500,'none','',500);

                                DisableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}
else
if (true) {

	SetPanelState('u388', 'pd1u388','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Navy</span></p>');

}

}

var u394 = document.getElementById('u394');
gv_vAlignTable['u394'] = 'center';
var u639 = document.getElementById('u639');

u639.style.cursor = 'pointer';
if (bIE) u639.attachEvent("onclick", Clicku639);
else u639.addEventListener("click", Clicku639, true);
function Clicku639(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u639');
}

}

if (bIE) u639.attachEvent("onmouseover", MouseOveru639);
else u639.addEventListener("mouseover", MouseOveru639, true);
function MouseOveru639(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u639',e)) return;
if (true) {

	SetPanelState('u636', 'pd1u636','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Lime</span></p>');

}

}

if (bIE) u639.attachEvent("onmouseout", MouseOutu639);
else u639.addEventListener("mouseout", MouseOutu639, true);
function MouseOutu639(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u639',e)) return;
if (true) {

	SetPanelState('u636', 'pd0u636','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u274 = document.getElementById('u274');
gv_vAlignTable['u274'] = 'center';
var u284 = document.getElementById('u284');

var u294 = document.getElementById('u294');
gv_vAlignTable['u294'] = 'center';
var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'center';
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

u6.style.cursor = 'pointer';
if (bIE) u6.attachEvent("onclick", Clicku6);
else u6.addEventListener("click", Clicku6, true);
function Clicku6(e)
{
windowEvent = e;


if (((GetCheckState('u6')) == (true)) && (false)) {

	SetPanelState('u8', 'pd3u8','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

;

}
else
if (((GetCheckState('u6')) == (true)) && (false)) {

	SetPanelState('u8', 'pd3u8','none','',500,'none','',500);

}
else
if ((GetCheckState('u6')) == (false)) {

	SetPanelState('u8', 'pd0u8','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

;

}

}

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u8 = document.getElementById('u8');

var u9 = document.getElementById('u9');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u17 = document.getElementById('u17');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u19 = document.getElementById('u19');

var u26 = document.getElementById('u26');

var u27 = document.getElementById('u27');

u27.style.cursor = 'pointer';
if (bIE) u27.attachEvent("onclick", Clicku27);
else u27.addEventListener("click", Clicku27, true);
function Clicku27(e)
{
windowEvent = e;


if (true) {

	MoveWidgetTo('u31', 2,128,'none',500);

	MoveWidgetTo('u37', 2,158,'none',500);

	var obj1 = document.getElementById("u6");
    obj1.disabled = false;

SetWidgetRichText('u7', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Show the white in this image</span></p>');

	SetPanelVisibility('u29','','none',500);

	SetPanelState('u8', 'pd0u8','none','',500,'none','',500);

	SetPanelState('u43', 'pd0u43','none','',500,'none','',500);

	SetPanelVisibility('u35','hidden','none',500);

	SetPanelVisibility('u40','hidden','none',500);

}

}

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
var u29 = document.getElementById('u29');

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

                                EnableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Yellow</span></p>');

}

}

var u309 = document.getElementById('u309');
gv_vAlignTable['u309'] = 'center';
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


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u310', 'pd1u310','none','',500,'none','',500);

                                DisableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}
else
if (true) {

	SetPanelState('u310', 'pd1u310','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Lemon</span></p>');

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

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u45 = document.getElementById('u45');

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


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u323', 'pd1u323','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                DisableImageWidget('u20');
}
else
if (true) {

	SetPanelState('u323', 'pd1u323','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u326.attachEvent("onmouseout", MouseOutu326);
else u326.addEventListener("mouseout", MouseOutu326, true);
function MouseOutu326(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u326',e)) return;
if (true) {

	SetPanelState('u323', 'pd2u323','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u327 = document.getElementById('u327');
gv_vAlignTable['u327'] = 'center';
var u328 = document.getElementById('u328');

if (bIE) u328.attachEvent("onmouseover", MouseOveru328);
else u328.addEventListener("mouseover", MouseOveru328, true);
function MouseOveru328(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u328',e)) return;
if (true) {

	SetPanelState('u323', 'pd3u323','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Forest</span></p>');

}

}

var u329 = document.getElementById('u329');
gv_vAlignTable['u329'] = 'center';
var u52 = document.getElementById('u52');

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u54 = document.getElementById('u54');

u54.style.cursor = 'pointer';
if (bIE) u54.attachEvent("onclick", Clicku54);
else u54.addEventListener("click", Clicku54, true);
function Clicku54(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u45', 'pd3u45','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
}

}

if (bIE) u54.attachEvent("onmouseout", MouseOutu54);
else u54.addEventListener("mouseout", MouseOutu54, true);
function MouseOutu54(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u54',e)) return;
if (true) {

	SetPanelState('u45', 'pd0u45','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
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

	SetPanelState('u323', 'pd1u323','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Forest</span></p>');

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


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u336', 'pd1u336','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                DisableImageWidget('u20');
}
else
if (true) {

	SetPanelState('u336', 'pd1u336','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u339.attachEvent("onmouseout", MouseOutu339);
else u339.addEventListener("mouseout", MouseOutu339, true);
function MouseOutu339(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u339',e)) return;
if (true) {

	SetPanelState('u336', 'pd2u336','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u600 = document.getElementById('u600');
gv_vAlignTable['u600'] = 'center';
var u601 = document.getElementById('u601');

var u602 = document.getElementById('u602');

var u603 = document.getElementById('u603');
gv_vAlignTable['u603'] = 'center';
var u604 = document.getElementById('u604');

u604.style.cursor = 'pointer';
if (bIE) u604.attachEvent("onclick", Clicku604);
else u604.addEventListener("click", Clicku604, true);
function Clicku604(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u604');
}

}

if (bIE) u604.attachEvent("onmouseover", MouseOveru604);
else u604.addEventListener("mouseover", MouseOveru604, true);
function MouseOveru604(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u604',e)) return;
if (true) {

	SetPanelState('u601', 'pd1u601','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Gold</span></p>');

}

}

if (bIE) u604.attachEvent("onmouseout", MouseOutu604);
else u604.addEventListener("mouseout", MouseOutu604, true);
function MouseOutu604(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u604',e)) return;
if (true) {

	SetPanelState('u601', 'pd0u601','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u605 = document.getElementById('u605');
gv_vAlignTable['u605'] = 'center';
var u606 = document.getElementById('u606');

var u607 = document.getElementById('u607');

var u608 = document.getElementById('u608');
gv_vAlignTable['u608'] = 'center';
var u609 = document.getElementById('u609');

u609.style.cursor = 'pointer';
if (bIE) u609.attachEvent("onclick", Clicku609);
else u609.addEventListener("click", Clicku609, true);
function Clicku609(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u609');
}

}

if (bIE) u609.attachEvent("onmouseover", MouseOveru609);
else u609.addEventListener("mouseover", MouseOveru609, true);
function MouseOveru609(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u609',e)) return;
if (true) {

	SetPanelState('u606', 'pd1u606','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Yellow</span></p>');

}

}

if (bIE) u609.attachEvent("onmouseout", MouseOutu609);
else u609.addEventListener("mouseout", MouseOutu609, true);
function MouseOutu609(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u609',e)) return;
if (true) {

	SetPanelState('u606', 'pd0u606','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'center';
var u63 = document.getElementById('u63');

if (bIE) u63.attachEvent("onmouseover", MouseOveru63);
else u63.addEventListener("mouseover", MouseOveru63, true);
function MouseOveru63(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u63',e)) return;
if (true) {

	SetPanelState('u58', 'pd3u58','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Light Grey</span></p>');

}

}

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u65 = document.getElementById('u65');

var u344 = document.getElementById('u344');
gv_vAlignTable['u344'] = 'center';
var u67 = document.getElementById('u67');

u67.style.cursor = 'pointer';
if (bIE) u67.attachEvent("onclick", Clicku67);
else u67.addEventListener("click", Clicku67, true);
function Clicku67(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u58', 'pd3u58','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
}

}

if (bIE) u67.attachEvent("onmouseout", MouseOutu67);
else u67.addEventListener("mouseout", MouseOutu67, true);
function MouseOutu67(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u67',e)) return;
if (true) {

	SetPanelState('u58', 'pd0u58','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

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

	SetPanelState('u336', 'pd1u336','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Kelly Green</span></p>');

}

}

var u348 = document.getElementById('u348');
gv_vAlignTable['u348'] = 'center';
var u349 = document.getElementById('u349');

var u610 = document.getElementById('u610');
gv_vAlignTable['u610'] = 'center';
var u611 = document.getElementById('u611');

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

SetWidgetSelected('u614');
}

}

if (bIE) u614.attachEvent("onmouseover", MouseOveru614);
else u614.addEventListener("mouseover", MouseOveru614, true);
function MouseOveru614(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u614',e)) return;
if (true) {

	SetPanelState('u611', 'pd1u611','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Lemon</span></p>');

}

}

if (bIE) u614.attachEvent("onmouseout", MouseOutu614);
else u614.addEventListener("mouseout", MouseOutu614, true);
function MouseOutu614(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u614',e)) return;
if (true) {

	SetPanelState('u611', 'pd1u611','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u615 = document.getElementById('u615');
gv_vAlignTable['u615'] = 'center';
var u616 = document.getElementById('u616');

var u617 = document.getElementById('u617');

var u618 = document.getElementById('u618');
gv_vAlignTable['u618'] = 'center';
var u619 = document.getElementById('u619');

u619.style.cursor = 'pointer';
if (bIE) u619.attachEvent("onclick", Clicku619);
else u619.addEventListener("click", Clicku619, true);
function Clicku619(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u619');
}

}

if (bIE) u619.attachEvent("onmouseover", MouseOveru619);
else u619.addEventListener("mouseover", MouseOveru619, true);
function MouseOveru619(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u619',e)) return;
if (true) {

	SetPanelState('u616', 'pd1u616','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Forest</span></p>');

}

}

if (bIE) u619.attachEvent("onmouseout", MouseOutu619);
else u619.addEventListener("mouseout", MouseOutu619, true);
function MouseOutu619(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u619',e)) return;
if (true) {

	SetPanelState('u616', 'pd0u616','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u350 = document.getElementById('u350');

var u351 = document.getElementById('u351');
gv_vAlignTable['u351'] = 'center';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'center';
var u74 = document.getElementById('u74');

u74.style.cursor = 'pointer';
if (bIE) u74.attachEvent("onclick", Clicku74);
else u74.addEventListener("click", Clicku74, true);
function Clicku74(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u71', 'pd1u71','none','',500,'none','',500);

                                DisableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}
else
if (true) {

	SetPanelState('u71', 'pd1u71','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u74.attachEvent("onmouseout", MouseOutu74);
else u74.addEventListener("mouseout", MouseOutu74, true);
function MouseOutu74(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u74',e)) return;
if (true) {

	SetPanelState('u71', 'pd2u71','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
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

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u359 = document.getElementById('u359');
gv_vAlignTable['u359'] = 'center';
var u620 = document.getElementById('u620');
gv_vAlignTable['u620'] = 'center';
var u621 = document.getElementById('u621');

var u622 = document.getElementById('u622');

var u623 = document.getElementById('u623');
gv_vAlignTable['u623'] = 'center';
var u624 = document.getElementById('u624');

u624.style.cursor = 'pointer';
if (bIE) u624.attachEvent("onclick", Clicku624);
else u624.addEventListener("click", Clicku624, true);
function Clicku624(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u624');
}

}

if (bIE) u624.attachEvent("onmouseover", MouseOveru624);
else u624.addEventListener("mouseover", MouseOveru624, true);
function MouseOveru624(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u624',e)) return;
if (true) {

	SetPanelState('u621', 'pd1u621','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Kelly</span></p>');

}

}

if (bIE) u624.attachEvent("onmouseout", MouseOutu624);
else u624.addEventListener("mouseout", MouseOutu624, true);
function MouseOutu624(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u624',e)) return;
if (true) {

	SetPanelState('u621', 'pd0u621','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u625 = document.getElementById('u625');
gv_vAlignTable['u625'] = 'center';
var u626 = document.getElementById('u626');

var u627 = document.getElementById('u627');

var u628 = document.getElementById('u628');
gv_vAlignTable['u628'] = 'center';
var u629 = document.getElementById('u629');

u629.style.cursor = 'pointer';
if (bIE) u629.attachEvent("onclick", Clicku629);
else u629.addEventListener("click", Clicku629, true);
function Clicku629(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u629');
}

}

if (bIE) u629.attachEvent("onmouseover", MouseOveru629);
else u629.addEventListener("mouseover", MouseOveru629, true);
function MouseOveru629(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u629',e)) return;
if (true) {

	SetPanelState('u626', 'pd1u626','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Teal</span></p>');

}

}

if (bIE) u629.attachEvent("onmouseout", MouseOutu629);
else u629.addEventListener("mouseout", MouseOutu629, true);
function MouseOutu629(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u629',e)) return;
if (true) {

	SetPanelState('u626', 'pd0u626','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u360 = document.getElementById('u360');

if (bIE) u360.attachEvent("onmouseover", MouseOveru360);
else u360.addEventListener("mouseover", MouseOveru360, true);
function MouseOveru360(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u360',e)) return;
if (true) {

	SetPanelState('u349', 'pd1u349','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Teal</span></p>');

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


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u362', 'pd1u362','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                DisableImageWidget('u20');
}
else
if (true) {

	SetPanelState('u362', 'pd1u362','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Green</span></p>');

}

}

var u368 = document.getElementById('u368');
gv_vAlignTable['u368'] = 'center';
var u369 = document.getElementById('u369');

var u630 = document.getElementById('u630');
gv_vAlignTable['u630'] = 'center';
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

SetWidgetSelected('u634');
}

}

if (bIE) u634.attachEvent("onmouseover", MouseOveru634);
else u634.addEventListener("mouseover", MouseOveru634, true);
function MouseOveru634(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u634',e)) return;
if (true) {

	SetPanelState('u631', 'pd1u631','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Green</span></p>');

}

}

if (bIE) u634.attachEvent("onmouseout", MouseOutu634);
else u634.addEventListener("mouseout", MouseOutu634, true);
function MouseOutu634(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u634',e)) return;
if (true) {

	SetPanelState('u631', 'pd0u631','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u635 = document.getElementById('u635');
gv_vAlignTable['u635'] = 'center';
var u636 = document.getElementById('u636');

var u637 = document.getElementById('u637');

var u638 = document.getElementById('u638');
gv_vAlignTable['u638'] = 'center';
var u1005 = document.getElementById('u1005');

var u1006 = document.getElementById('u1006');
gv_vAlignTable['u1006'] = 'center';
var u1007 = document.getElementById('u1007');

u1007.style.cursor = 'pointer';
if (bIE) u1007.attachEvent("onclick", Clicku1007);
else u1007.addEventListener("click", Clicku1007, true);
function Clicku1007(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u1004', 'pd1u1004','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                DisableImageWidget('u20');
}
else
if (true) {

	SetPanelState('u1004', 'pd1u1004','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u1007.attachEvent("onmouseout", MouseOutu1007);
else u1007.addEventListener("mouseout", MouseOutu1007, true);
function MouseOutu1007(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u1007',e)) return;
if (true) {

	SetPanelState('u1004', 'pd2u1004','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u1008 = document.getElementById('u1008');
gv_vAlignTable['u1008'] = 'center';
var u900 = document.getElementById('u900');

if (bIE) u900.attachEvent("onmouseover", MouseOveru900);
else u900.addEventListener("mouseover", MouseOveru900, true);
function MouseOveru900(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u900',e)) return;
if (true) {

	SetPanelState('u895', 'pd3u895','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Old Gold</span></p>');

}

}

var u901 = document.getElementById('u901');
gv_vAlignTable['u901'] = 'center';
var u902 = document.getElementById('u902');

var u903 = document.getElementById('u903');
gv_vAlignTable['u903'] = 'center';
var u904 = document.getElementById('u904');

u904.style.cursor = 'pointer';
if (bIE) u904.attachEvent("onclick", Clicku904);
else u904.addEventListener("click", Clicku904, true);
function Clicku904(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u895', 'pd3u895','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
}

}

if (bIE) u904.attachEvent("onmouseout", MouseOutu904);
else u904.addEventListener("mouseout", MouseOutu904, true);
function MouseOutu904(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u904',e)) return;
if (true) {

	SetPanelState('u895', 'pd0u895','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u905 = document.getElementById('u905');
gv_vAlignTable['u905'] = 'center';
var u906 = document.getElementById('u906');

if (bIE) u906.attachEvent("onmouseover", MouseOveru906);
else u906.addEventListener("mouseover", MouseOveru906, true);
function MouseOveru906(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u906',e)) return;
if (true) {

	SetPanelState('u895', 'pd1u895','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Old Gold</span></p>');

}

}

var u907 = document.getElementById('u907');
gv_vAlignTable['u907'] = 'center';
var u908 = document.getElementById('u908');

var u909 = document.getElementById('u909');

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

                                DisableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}
else
if (true) {

	SetPanelState('u375', 'pd1u375','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u379 = document.getElementById('u379');
gv_vAlignTable['u379'] = 'center';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'center';
var u640 = document.getElementById('u640');
gv_vAlignTable['u640'] = 'center';
var u641 = document.getElementById('u641');

var u642 = document.getElementById('u642');

var u643 = document.getElementById('u643');
gv_vAlignTable['u643'] = 'center';
var u644 = document.getElementById('u644');

u644.style.cursor = 'pointer';
if (bIE) u644.attachEvent("onclick", Clicku644);
else u644.addEventListener("click", Clicku644, true);
function Clicku644(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u644');
}

}

if (bIE) u644.attachEvent("onmouseover", MouseOveru644);
else u644.addEventListener("mouseover", MouseOveru644, true);
function MouseOveru644(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u644',e)) return;
if (true) {

	SetPanelState('u641', 'pd1u641','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Navy</span></p>');

}

}

if (bIE) u644.attachEvent("onmouseout", MouseOutu644);
else u644.addEventListener("mouseout", MouseOutu644, true);
function MouseOutu644(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u644',e)) return;
if (true) {

	SetPanelState('u641', 'pd0u641','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u645 = document.getElementById('u645');
gv_vAlignTable['u645'] = 'center';
var u646 = document.getElementById('u646');

var u647 = document.getElementById('u647');

var u648 = document.getElementById('u648');
gv_vAlignTable['u648'] = 'center';
var u649 = document.getElementById('u649');

u649.style.cursor = 'pointer';
if (bIE) u649.attachEvent("onclick", Clicku649);
else u649.addEventListener("click", Clicku649, true);
function Clicku649(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u649');
}

}

if (bIE) u649.attachEvent("onmouseover", MouseOveru649);
else u649.addEventListener("mouseover", MouseOveru649, true);
function MouseOveru649(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u649',e)) return;
if (true) {

	SetPanelState('u646', 'pd1u646','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Royal</span></p>');

}

}

if (bIE) u649.attachEvent("onmouseout", MouseOutu649);
else u649.addEventListener("mouseout", MouseOutu649, true);
function MouseOutu649(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u649',e)) return;
if (true) {

	SetPanelState('u646', 'pd0u646','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u1016 = document.getElementById('u1016');
gv_vAlignTable['u1016'] = 'center';
var u1017 = document.getElementById('u1017');

var u1018 = document.getElementById('u1018');

var u910 = document.getElementById('u910');
gv_vAlignTable['u910'] = 'center';
var u911 = document.getElementById('u911');

u911.style.cursor = 'pointer';
if (bIE) u911.attachEvent("onclick", Clicku911);
else u911.addEventListener("click", Clicku911, true);
function Clicku911(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u908', 'pd1u908','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                DisableImageWidget('u20');
}
else
if (true) {

	SetPanelState('u908', 'pd1u908','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u911.attachEvent("onmouseout", MouseOutu911);
else u911.addEventListener("mouseout", MouseOutu911, true);
function MouseOutu911(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u911',e)) return;
if (true) {

	SetPanelState('u908', 'pd2u908','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u912 = document.getElementById('u912');
gv_vAlignTable['u912'] = 'center';
var u913 = document.getElementById('u913');

if (bIE) u913.attachEvent("onmouseover", MouseOveru913);
else u913.addEventListener("mouseover", MouseOveru913, true);
function MouseOveru913(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u913',e)) return;
if (true) {

	SetPanelState('u908', 'pd3u908','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Olive</span></p>');

}

}

var u914 = document.getElementById('u914');
gv_vAlignTable['u914'] = 'center';
var u915 = document.getElementById('u915');

var u916 = document.getElementById('u916');
gv_vAlignTable['u916'] = 'center';
var u917 = document.getElementById('u917');

u917.style.cursor = 'pointer';
if (bIE) u917.attachEvent("onclick", Clicku917);
else u917.addEventListener("click", Clicku917, true);
function Clicku917(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u908', 'pd3u908','none','',500,'none','',500);

                                EnableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u917.attachEvent("onmouseout", MouseOutu917);
else u917.addEventListener("mouseout", MouseOutu917, true);
function MouseOutu917(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u917',e)) return;
if (true) {

	SetPanelState('u908', 'pd0u908','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u918 = document.getElementById('u918');
gv_vAlignTable['u918'] = 'center';
var u919 = document.getElementById('u919');

if (bIE) u919.attachEvent("onmouseover", MouseOveru919);
else u919.addEventListener("mouseover", MouseOveru919, true);
function MouseOveru919(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u919',e)) return;
if (true) {

	SetPanelState('u908', 'pd1u908','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Olive</span></p>');

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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Lime</span></p>');

}

}

var u387 = document.getElementById('u387');
gv_vAlignTable['u387'] = 'center';
var u388 = document.getElementById('u388');

var u389 = document.getElementById('u389');

var u650 = document.getElementById('u650');
gv_vAlignTable['u650'] = 'center';
var u651 = document.getElementById('u651');

var u652 = document.getElementById('u652');

var u653 = document.getElementById('u653');
gv_vAlignTable['u653'] = 'center';
var u654 = document.getElementById('u654');

u654.style.cursor = 'pointer';
if (bIE) u654.attachEvent("onclick", Clicku654);
else u654.addEventListener("click", Clicku654, true);
function Clicku654(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u654');
}

}

if (bIE) u654.attachEvent("onmouseover", MouseOveru654);
else u654.addEventListener("mouseover", MouseOveru654, true);
function MouseOveru654(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u654',e)) return;
if (true) {

	SetPanelState('u651', 'pd1u651','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Blue</span></p>');

}

}

if (bIE) u654.attachEvent("onmouseout", MouseOutu654);
else u654.addEventListener("mouseout", MouseOutu654, true);
function MouseOutu654(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u654',e)) return;
if (true) {

	SetPanelState('u651', 'pd0u651','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

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

SetWidgetSelected('u659');
}

}

if (bIE) u659.attachEvent("onmouseover", MouseOveru659);
else u659.addEventListener("mouseover", MouseOveru659, true);
function MouseOveru659(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u659',e)) return;
if (true) {

	SetPanelState('u656', 'pd1u656','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Light Blue</span></p>');

}

}

if (bIE) u659.attachEvent("onmouseout", MouseOutu659);
else u659.addEventListener("mouseout", MouseOutu659, true);
function MouseOutu659(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u659',e)) return;
if (true) {

	SetPanelState('u656', 'pd0u656','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u1024 = document.getElementById('u1024');

var u1025 = document.getElementById('u1025');
gv_vAlignTable['u1025'] = 'center';
var u1026 = document.getElementById('u1026');

u1026.style.cursor = 'pointer';
if (bIE) u1026.attachEvent("onclick", Clicku1026);
else u1026.addEventListener("click", Clicku1026, true);
function Clicku1026(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u1017', 'pd3u1017','none','',500,'none','',500);

                                EnableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u1026.attachEvent("onmouseout", MouseOutu1026);
else u1026.addEventListener("mouseout", MouseOutu1026, true);
function MouseOutu1026(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u1026',e)) return;
if (true) {

	SetPanelState('u1017', 'pd0u1017','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u920 = document.getElementById('u920');
gv_vAlignTable['u920'] = 'center';
var u921 = document.getElementById('u921');

var u922 = document.getElementById('u922');
gv_vAlignTable['u922'] = 'center';
var u923 = document.getElementById('u923');
gv_vAlignTable['u923'] = 'top';
var u924 = document.getElementById('u924');
gv_vAlignTable['u924'] = 'top';
var u925 = document.getElementById('u925');
gv_vAlignTable['u925'] = 'top';
var u926 = document.getElementById('u926');

var u927 = document.getElementById('u927');

var u928 = document.getElementById('u928');
gv_vAlignTable['u928'] = 'center';
var u929 = document.getElementById('u929');

u929.style.cursor = 'pointer';
if (bIE) u929.attachEvent("onclick", Clicku929);
else u929.addEventListener("click", Clicku929, true);
function Clicku929(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u926', 'pd1u926','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                DisableImageWidget('u20');
}
else
if (true) {

	SetPanelState('u926', 'pd1u926','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u929.attachEvent("onmouseout", MouseOutu929);
else u929.addEventListener("mouseout", MouseOutu929, true);
function MouseOutu929(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u929',e)) return;
if (true) {

	SetPanelState('u926', 'pd2u926','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

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

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Navy</span></p>');

}

}

var u660 = document.getElementById('u660');
gv_vAlignTable['u660'] = 'center';
var u661 = document.getElementById('u661');

var u662 = document.getElementById('u662');

var u663 = document.getElementById('u663');
gv_vAlignTable['u663'] = 'center';
var u664 = document.getElementById('u664');

u664.style.cursor = 'pointer';
if (bIE) u664.attachEvent("onclick", Clicku664);
else u664.addEventListener("click", Clicku664, true);
function Clicku664(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u664');
}

}

if (bIE) u664.attachEvent("onmouseover", MouseOveru664);
else u664.addEventListener("mouseover", MouseOveru664, true);
function MouseOveru664(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u664',e)) return;
if (true) {

	SetPanelState('u661', 'pd1u661','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Turquoise</span></p>');

}

}

if (bIE) u664.attachEvent("onmouseout", MouseOutu664);
else u664.addEventListener("mouseout", MouseOutu664, true);
function MouseOutu664(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u664',e)) return;
if (true) {

	SetPanelState('u661', 'pd1u661','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u665 = document.getElementById('u665');
gv_vAlignTable['u665'] = 'center';
var u666 = document.getElementById('u666');

var u667 = document.getElementById('u667');

var u668 = document.getElementById('u668');
gv_vAlignTable['u668'] = 'center';
var u669 = document.getElementById('u669');

u669.style.cursor = 'pointer';
if (bIE) u669.attachEvent("onclick", Clicku669);
else u669.addEventListener("click", Clicku669, true);
function Clicku669(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u669');
}

}

if (bIE) u669.attachEvent("onmouseover", MouseOveru669);
else u669.addEventListener("mouseover", MouseOveru669, true);
function MouseOveru669(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u669',e)) return;
if (true) {

	SetPanelState('u666', 'pd1u666','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Dark Purple</span></p>');

}

}

if (bIE) u669.attachEvent("onmouseout", MouseOutu669);
else u669.addEventListener("mouseout", MouseOutu669, true);
function MouseOutu669(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u669',e)) return;
if (true) {

	SetPanelState('u666', 'pd0u666','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u1036 = document.getElementById('u1036');
gv_vAlignTable['u1036'] = 'center';
var u1033 = document.getElementById('u1033');

u1033.style.cursor = 'pointer';
if (bIE) u1033.attachEvent("onclick", Clicku1033);
else u1033.addEventListener("click", Clicku1033, true);
function Clicku1033(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u1030', 'pd1u1030','none','',500,'none','',500);

                                DisableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}
else
if (true) {

	SetPanelState('u1030', 'pd1u1030','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u1033.attachEvent("onmouseout", MouseOutu1033);
else u1033.addEventListener("mouseout", MouseOutu1033, true);
function MouseOutu1033(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u1033',e)) return;
if (true) {

	SetPanelState('u1030', 'pd2u1030','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u1034 = document.getElementById('u1034');
gv_vAlignTable['u1034'] = 'center';
var u930 = document.getElementById('u930');
gv_vAlignTable['u930'] = 'center';
var u931 = document.getElementById('u931');

if (bIE) u931.attachEvent("onmouseover", MouseOveru931);
else u931.addEventListener("mouseover", MouseOveru931, true);
function MouseOveru931(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u931',e)) return;
if (true) {

	SetPanelState('u926', 'pd3u926','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Gold</span></p>');

}

}

var u932 = document.getElementById('u932');
gv_vAlignTable['u932'] = 'center';
var u933 = document.getElementById('u933');

var u934 = document.getElementById('u934');
gv_vAlignTable['u934'] = 'center';
var u935 = document.getElementById('u935');

u935.style.cursor = 'pointer';
if (bIE) u935.attachEvent("onclick", Clicku935);
else u935.addEventListener("click", Clicku935, true);
function Clicku935(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u926', 'pd3u926','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
}

}

if (bIE) u935.attachEvent("onmouseout", MouseOutu935);
else u935.addEventListener("mouseout", MouseOutu935, true);
function MouseOutu935(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u935',e)) return;
if (true) {

	SetPanelState('u926', 'pd0u926','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u936 = document.getElementById('u936');
gv_vAlignTable['u936'] = 'center';
var u937 = document.getElementById('u937');

if (bIE) u937.attachEvent("onmouseover", MouseOveru937);
else u937.addEventListener("mouseover", MouseOveru937, true);
function MouseOveru937(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u937',e)) return;
if (true) {

	SetPanelState('u926', 'pd1u926','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Gold</span></p>');

}

}

var u938 = document.getElementById('u938');
gv_vAlignTable['u938'] = 'center';
var u939 = document.getElementById('u939');

var u670 = document.getElementById('u670');
gv_vAlignTable['u670'] = 'center';
var u671 = document.getElementById('u671');

var u672 = document.getElementById('u672');

var u673 = document.getElementById('u673');
gv_vAlignTable['u673'] = 'center';
var u674 = document.getElementById('u674');

u674.style.cursor = 'pointer';
if (bIE) u674.attachEvent("onclick", Clicku674);
else u674.addEventListener("click", Clicku674, true);
function Clicku674(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u674');
}

}

if (bIE) u674.attachEvent("onmouseover", MouseOveru674);
else u674.addEventListener("mouseover", MouseOveru674, true);
function MouseOveru674(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u674',e)) return;
if (true) {

	SetPanelState('u671', 'pd1u671','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Bright Purple</span></p>');

}

}

if (bIE) u674.attachEvent("onmouseout", MouseOutu674);
else u674.addEventListener("mouseout", MouseOutu674, true);
function MouseOutu674(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u674',e)) return;
if (true) {

	SetPanelState('u671', 'pd0u671','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u675 = document.getElementById('u675');
gv_vAlignTable['u675'] = 'center';
var u676 = document.getElementById('u676');

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

SetWidgetSelected('u679');
}

}

if (bIE) u679.attachEvent("onmouseover", MouseOveru679);
else u679.addEventListener("mouseover", MouseOveru679, true);
function MouseOveru679(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u679',e)) return;
if (true) {

	SetPanelState('u676', 'pd1u676','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Light Purple</span></p>');

}

}

if (bIE) u679.attachEvent("onmouseout", MouseOutu679);
else u679.addEventListener("mouseout", MouseOutu679, true);
function MouseOutu679(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u679',e)) return;
if (true) {

	SetPanelState('u676', 'pd0u676','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u1046 = document.getElementById('u1046');

u1046.style.cursor = 'pointer';
if (bIE) u1046.attachEvent("onclick", Clicku1046);
else u1046.addEventListener("click", Clicku1046, true);
function Clicku1046(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u1043', 'pd1u1043','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                DisableImageWidget('u20');
}
else
if (true) {

	SetPanelState('u1043', 'pd1u1043','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u1046.attachEvent("onmouseout", MouseOutu1046);
else u1046.addEventListener("mouseout", MouseOutu1046, true);
function MouseOutu1046(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u1046',e)) return;
if (true) {

	SetPanelState('u1043', 'pd2u1043','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u1047 = document.getElementById('u1047');
gv_vAlignTable['u1047'] = 'center';
var u1048 = document.getElementById('u1048');

if (bIE) u1048.attachEvent("onmouseover", MouseOveru1048);
else u1048.addEventListener("mouseover", MouseOveru1048, true);
function MouseOveru1048(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u1048',e)) return;
if (true) {

	SetPanelState('u1043', 'pd3u1043','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Royal</span></p>');

}

}

var u940 = document.getElementById('u940');

var u941 = document.getElementById('u941');
gv_vAlignTable['u941'] = 'center';
var u942 = document.getElementById('u942');

u942.style.cursor = 'pointer';
if (bIE) u942.attachEvent("onclick", Clicku942);
else u942.addEventListener("click", Clicku942, true);
function Clicku942(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u939', 'pd1u939','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                DisableImageWidget('u20');
}
else
if (true) {

	SetPanelState('u939', 'pd1u939','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u942.attachEvent("onmouseout", MouseOutu942);
else u942.addEventListener("mouseout", MouseOutu942, true);
function MouseOutu942(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u942',e)) return;
if (true) {

	SetPanelState('u939', 'pd2u939','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u943 = document.getElementById('u943');
gv_vAlignTable['u943'] = 'center';
var u944 = document.getElementById('u944');

if (bIE) u944.attachEvent("onmouseover", MouseOveru944);
else u944.addEventListener("mouseover", MouseOveru944, true);
function MouseOveru944(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u944',e)) return;
if (true) {

	SetPanelState('u939', 'pd3u939','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Yellow</span></p>');

}

}

var u945 = document.getElementById('u945');
gv_vAlignTable['u945'] = 'center';
var u946 = document.getElementById('u946');

var u947 = document.getElementById('u947');
gv_vAlignTable['u947'] = 'center';
var u948 = document.getElementById('u948');

u948.style.cursor = 'pointer';
if (bIE) u948.attachEvent("onclick", Clicku948);
else u948.addEventListener("click", Clicku948, true);
function Clicku948(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u939', 'pd3u939','none','',500,'none','',500);

                                EnableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u948.attachEvent("onmouseout", MouseOutu948);
else u948.addEventListener("mouseout", MouseOutu948, true);
function MouseOutu948(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u948',e)) return;
if (true) {

	SetPanelState('u939', 'pd0u939','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u949 = document.getElementById('u949');
gv_vAlignTable['u949'] = 'center';
var u1042 = document.getElementById('u1042');
gv_vAlignTable['u1042'] = 'center';
var u680 = document.getElementById('u680');
gv_vAlignTable['u680'] = 'center';
var u681 = document.getElementById('u681');

var u682 = document.getElementById('u682');

var u683 = document.getElementById('u683');
gv_vAlignTable['u683'] = 'center';
var u684 = document.getElementById('u684');

u684.style.cursor = 'pointer';
if (bIE) u684.attachEvent("onclick", Clicku684);
else u684.addEventListener("click", Clicku684, true);
function Clicku684(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u684');
}

}

if (bIE) u684.attachEvent("onmouseover", MouseOveru684);
else u684.addEventListener("mouseover", MouseOveru684, true);
function MouseOveru684(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u684',e)) return;
if (true) {

	SetPanelState('u681', 'pd1u681','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Maroon</span></p>');

}

}

if (bIE) u684.attachEvent("onmouseout", MouseOutu684);
else u684.addEventListener("mouseout", MouseOutu684, true);
function MouseOutu684(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u684',e)) return;
if (true) {

	SetPanelState('u681', 'pd0u681','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u685 = document.getElementById('u685');
gv_vAlignTable['u685'] = 'center';
var u686 = document.getElementById('u686');
gv_vAlignTable['u686'] = 'top';
var u687 = document.getElementById('u687');

var u688 = document.getElementById('u688');

var u689 = document.getElementById('u689');
gv_vAlignTable['u689'] = 'center';
var u1056 = document.getElementById('u1056');

var u1057 = document.getElementById('u1057');

var u1058 = document.getElementById('u1058');
gv_vAlignTable['u1058'] = 'center';
var u950 = document.getElementById('u950');

if (bIE) u950.attachEvent("onmouseover", MouseOveru950);
else u950.addEventListener("mouseover", MouseOveru950, true);
function MouseOveru950(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u950',e)) return;
if (true) {

	SetPanelState('u939', 'pd1u939','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Yellow</span></p>');

}

}

var u951 = document.getElementById('u951');
gv_vAlignTable['u951'] = 'center';
var u952 = document.getElementById('u952');

var u953 = document.getElementById('u953');

var u954 = document.getElementById('u954');
gv_vAlignTable['u954'] = 'center';
var u955 = document.getElementById('u955');

u955.style.cursor = 'pointer';
if (bIE) u955.attachEvent("onclick", Clicku955);
else u955.addEventListener("click", Clicku955, true);
function Clicku955(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u952', 'pd1u952','none','',500,'none','',500);

                                DisableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}
else
if (true) {

	SetPanelState('u952', 'pd1u952','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u955.attachEvent("onmouseout", MouseOutu955);
else u955.addEventListener("mouseout", MouseOutu955, true);
function MouseOutu955(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u955',e)) return;
if (true) {

	SetPanelState('u952', 'pd2u952','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u956 = document.getElementById('u956');
gv_vAlignTable['u956'] = 'center';
var u957 = document.getElementById('u957');

if (bIE) u957.attachEvent("onmouseover", MouseOveru957);
else u957.addEventListener("mouseover", MouseOveru957, true);
function MouseOveru957(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u957',e)) return;
if (true) {

	SetPanelState('u952', 'pd3u952','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Lemon</span></p>');

}

}

var u958 = document.getElementById('u958');
gv_vAlignTable['u958'] = 'center';
var u959 = document.getElementById('u959');

var u690 = document.getElementById('u690');

u690.style.cursor = 'pointer';
if (bIE) u690.attachEvent("onclick", Clicku690);
else u690.addEventListener("click", Clicku690, true);
function Clicku690(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u687', 'pd1u687','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                DisableImageWidget('u20');
}
else
if (true) {

	SetPanelState('u687', 'pd1u687','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u690.attachEvent("onmouseout", MouseOutu690);
else u690.addEventListener("mouseout", MouseOutu690, true);
function MouseOutu690(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u690',e)) return;
if (true) {

	SetPanelState('u687', 'pd2u687','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u691 = document.getElementById('u691');
gv_vAlignTable['u691'] = 'center';
var u692 = document.getElementById('u692');

if (bIE) u692.attachEvent("onmouseover", MouseOveru692);
else u692.addEventListener("mouseover", MouseOveru692, true);
function MouseOveru692(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u692',e)) return;
if (true) {

	SetPanelState('u687', 'pd3u687','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Black</span></p>');

}

}

var u693 = document.getElementById('u693');
gv_vAlignTable['u693'] = 'center';
var u694 = document.getElementById('u694');

var u695 = document.getElementById('u695');
gv_vAlignTable['u695'] = 'center';
var u696 = document.getElementById('u696');

u696.style.cursor = 'pointer';
if (bIE) u696.attachEvent("onclick", Clicku696);
else u696.addEventListener("click", Clicku696, true);
function Clicku696(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u687', 'pd3u687','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
}

}

if (bIE) u696.attachEvent("onmouseout", MouseOutu696);
else u696.addEventListener("mouseout", MouseOutu696, true);
function MouseOutu696(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u696',e)) return;
if (true) {

	SetPanelState('u687', 'pd0u687','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u697 = document.getElementById('u697');
gv_vAlignTable['u697'] = 'center';
var u698 = document.getElementById('u698');

if (bIE) u698.attachEvent("onmouseover", MouseOveru698);
else u698.addEventListener("mouseover", MouseOveru698, true);
function MouseOveru698(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u698',e)) return;
if (true) {

	SetPanelState('u687', 'pd1u687','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Black</span></p>');

}

}

var u699 = document.getElementById('u699');
gv_vAlignTable['u699'] = 'center';
var u1066 = document.getElementById('u1066');
gv_vAlignTable['u1066'] = 'center';
var u1067 = document.getElementById('u1067');

if (bIE) u1067.attachEvent("onmouseover", MouseOveru1067);
else u1067.addEventListener("mouseover", MouseOveru1067, true);
function MouseOveru1067(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u1067',e)) return;
if (true) {

	SetPanelState('u1056', 'pd1u1056','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Blue</span></p>');

}

}

var u1068 = document.getElementById('u1068');
gv_vAlignTable['u1068'] = 'center';
var u960 = document.getElementById('u960');
gv_vAlignTable['u960'] = 'center';
var u961 = document.getElementById('u961');

u961.style.cursor = 'pointer';
if (bIE) u961.attachEvent("onclick", Clicku961);
else u961.addEventListener("click", Clicku961, true);
function Clicku961(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u952', 'pd3u952','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
}

}

if (bIE) u961.attachEvent("onmouseout", MouseOutu961);
else u961.addEventListener("mouseout", MouseOutu961, true);
function MouseOutu961(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u961',e)) return;
if (true) {

	SetPanelState('u952', 'pd0u952','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u962 = document.getElementById('u962');
gv_vAlignTable['u962'] = 'center';
var u963 = document.getElementById('u963');

if (bIE) u963.attachEvent("onmouseover", MouseOveru963);
else u963.addEventListener("mouseover", MouseOveru963, true);
function MouseOveru963(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u963',e)) return;
if (true) {

	SetPanelState('u952', 'pd1u952','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Lemon</span></p>');

}

}

var u964 = document.getElementById('u964');
gv_vAlignTable['u964'] = 'center';
var u965 = document.getElementById('u965');

var u966 = document.getElementById('u966');

var u967 = document.getElementById('u967');
gv_vAlignTable['u967'] = 'center';
var u968 = document.getElementById('u968');

u968.style.cursor = 'pointer';
if (bIE) u968.attachEvent("onclick", Clicku968);
else u968.addEventListener("click", Clicku968, true);
function Clicku968(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u965', 'pd1u965','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                DisableImageWidget('u20');
}
else
if (true) {

	SetPanelState('u965', 'pd1u965','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u968.attachEvent("onmouseout", MouseOutu968);
else u968.addEventListener("mouseout", MouseOutu968, true);
function MouseOutu968(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u968',e)) return;
if (true) {

	SetPanelState('u965', 'pd2u965','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u969 = document.getElementById('u969');
gv_vAlignTable['u969'] = 'center';
var u1070 = document.getElementById('u1070');

var u1071 = document.getElementById('u1071');
gv_vAlignTable['u1071'] = 'center';
var u1072 = document.getElementById('u1072');

u1072.style.cursor = 'pointer';
if (bIE) u1072.attachEvent("onclick", Clicku1072);
else u1072.addEventListener("click", Clicku1072, true);
function Clicku1072(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u1069', 'pd1u1069','none','',500,'none','',500);

                                DisableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}
else
if (true) {

	SetPanelState('u1069', 'pd1u1069','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u1072.attachEvent("onmouseout", MouseOutu1072);
else u1072.addEventListener("mouseout", MouseOutu1072, true);
function MouseOutu1072(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u1072',e)) return;
if (true) {

	SetPanelState('u1069', 'pd2u1069','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u1073 = document.getElementById('u1073');
gv_vAlignTable['u1073'] = 'center';
var u1074 = document.getElementById('u1074');

if (bIE) u1074.attachEvent("onmouseover", MouseOveru1074);
else u1074.addEventListener("mouseover", MouseOveru1074, true);
function MouseOveru1074(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u1074',e)) return;
if (true) {

	SetPanelState('u1069', 'pd3u1069','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Light Blue</span></p>');

}

}

var u1075 = document.getElementById('u1075');
gv_vAlignTable['u1075'] = 'center';
var u1076 = document.getElementById('u1076');

var u1077 = document.getElementById('u1077');
gv_vAlignTable['u1077'] = 'center';
var u1078 = document.getElementById('u1078');

u1078.style.cursor = 'pointer';
if (bIE) u1078.attachEvent("onclick", Clicku1078);
else u1078.addEventListener("click", Clicku1078, true);
function Clicku1078(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u1069', 'pd3u1069','none','',500,'none','',500);

                                EnableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u1078.attachEvent("onmouseout", MouseOutu1078);
else u1078.addEventListener("mouseout", MouseOutu1078, true);
function MouseOutu1078(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u1078',e)) return;
if (true) {

	SetPanelState('u1069', 'pd0u1069','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u970 = document.getElementById('u970');

if (bIE) u970.attachEvent("onmouseover", MouseOveru970);
else u970.addEventListener("mouseover", MouseOveru970, true);
function MouseOveru970(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u970',e)) return;
if (true) {

	SetPanelState('u965', 'pd3u965','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Forest</span></p>');

}

}

var u971 = document.getElementById('u971');
gv_vAlignTable['u971'] = 'center';
var u972 = document.getElementById('u972');

var u973 = document.getElementById('u973');
gv_vAlignTable['u973'] = 'center';
var u974 = document.getElementById('u974');

u974.style.cursor = 'pointer';
if (bIE) u974.attachEvent("onclick", Clicku974);
else u974.addEventListener("click", Clicku974, true);
function Clicku974(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u965', 'pd3u965','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
}

}

if (bIE) u974.attachEvent("onmouseout", MouseOutu974);
else u974.addEventListener("mouseout", MouseOutu974, true);
function MouseOutu974(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u974',e)) return;
if (true) {

	SetPanelState('u965', 'pd0u965','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u975 = document.getElementById('u975');
gv_vAlignTable['u975'] = 'center';
var u976 = document.getElementById('u976');

if (bIE) u976.attachEvent("onmouseover", MouseOveru976);
else u976.addEventListener("mouseover", MouseOveru976, true);
function MouseOveru976(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u976',e)) return;
if (true) {

	SetPanelState('u965', 'pd1u965','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Forest</span></p>');

}

}

var u977 = document.getElementById('u977');
gv_vAlignTable['u977'] = 'center';
var u978 = document.getElementById('u978');

var u979 = document.getElementById('u979');

var u1080 = document.getElementById('u1080');

if (bIE) u1080.attachEvent("onmouseover", MouseOveru1080);
else u1080.addEventListener("mouseover", MouseOveru1080, true);
function MouseOveru1080(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u1080',e)) return;
if (true) {

	SetPanelState('u1069', 'pd1u1069','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Light Blue</span></p>');

}

}

var u1081 = document.getElementById('u1081');
gv_vAlignTable['u1081'] = 'center';
var u1082 = document.getElementById('u1082');

var u1083 = document.getElementById('u1083');

var u1084 = document.getElementById('u1084');
gv_vAlignTable['u1084'] = 'center';
var u1085 = document.getElementById('u1085');

u1085.style.cursor = 'pointer';
if (bIE) u1085.attachEvent("onclick", Clicku1085);
else u1085.addEventListener("click", Clicku1085, true);
function Clicku1085(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u1082', 'pd1u1082','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                DisableImageWidget('u20');
}
else
if (true) {

	SetPanelState('u1082', 'pd1u1082','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u1085.attachEvent("onmouseout", MouseOutu1085);
else u1085.addEventListener("mouseout", MouseOutu1085, true);
function MouseOutu1085(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u1085',e)) return;
if (true) {

	SetPanelState('u1082', 'pd2u1082','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u1086 = document.getElementById('u1086');
gv_vAlignTable['u1086'] = 'center';
var u1087 = document.getElementById('u1087');

if (bIE) u1087.attachEvent("onmouseover", MouseOveru1087);
else u1087.addEventListener("mouseover", MouseOveru1087, true);
function MouseOveru1087(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u1087',e)) return;
if (true) {

	SetPanelState('u1082', 'pd3u1082','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Lucida Grande;font-size:11px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">Turquoise</span></p>');

}

}

var u1088 = document.getElementById('u1088');
gv_vAlignTable['u1088'] = 'center';
var u980 = document.getElementById('u980');
gv_vAlignTable['u980'] = 'center';
var u981 = document.getElementById('u981');

u981.style.cursor = 'pointer';
if (bIE) u981.attachEvent("onclick", Clicku981);
else u981.addEventListener("click", Clicku981, true);
function Clicku981(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u978', 'pd1u978','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                DisableImageWidget('u20');
}
else
if (true) {

	SetPanelState('u978', 'pd1u978','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u981.attachEvent("onmouseout", MouseOutu981);
else u981.addEventListener("mouseout", MouseOutu981, true);
function MouseOutu981(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u981',e)) return;
if (true) {

	SetPanelState('u978', 'pd2u978','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u982 = document.getElementById('u982');
gv_vAlignTable['u982'] = 'center';
var u983 = document.getElementById('u983');

if (bIE) u983.attachEvent("onmouseover", MouseOveru983);
else u983.addEventListener("mouseover", MouseOveru983, true);
function MouseOveru983(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u983',e)) return;
if (true) {

	SetPanelState('u978', 'pd3u978','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Kelly Green</span></p>');

}

}

var u984 = document.getElementById('u984');
gv_vAlignTable['u984'] = 'center';
var u985 = document.getElementById('u985');

var u986 = document.getElementById('u986');
gv_vAlignTable['u986'] = 'center';
var u987 = document.getElementById('u987');

u987.style.cursor = 'pointer';
if (bIE) u987.attachEvent("onclick", Clicku987);
else u987.addEventListener("click", Clicku987, true);
function Clicku987(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u978', 'pd3u978','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
}

}

if (bIE) u987.attachEvent("onmouseout", MouseOutu987);
else u987.addEventListener("mouseout", MouseOutu987, true);
function MouseOutu987(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u987',e)) return;
if (true) {

	SetPanelState('u978', 'pd0u978','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u988 = document.getElementById('u988');
gv_vAlignTable['u988'] = 'center';
var u989 = document.getElementById('u989');

if (bIE) u989.attachEvent("onmouseover", MouseOveru989);
else u989.addEventListener("mouseover", MouseOveru989, true);
function MouseOveru989(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u989',e)) return;
if (true) {

	SetPanelState('u978', 'pd1u978','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Kelly Green</span></p>');

}

}

var u1090 = document.getElementById('u1090');
gv_vAlignTable['u1090'] = 'center';
var u1091 = document.getElementById('u1091');

u1091.style.cursor = 'pointer';
if (bIE) u1091.attachEvent("onclick", Clicku1091);
else u1091.addEventListener("click", Clicku1091, true);
function Clicku1091(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u1082', 'pd3u1082','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
}

}

if (bIE) u1091.attachEvent("onmouseout", MouseOutu1091);
else u1091.addEventListener("mouseout", MouseOutu1091, true);
function MouseOutu1091(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u1091',e)) return;
if (true) {

	SetPanelState('u1082', 'pd0u1082','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u1092 = document.getElementById('u1092');
gv_vAlignTable['u1092'] = 'center';
var u1093 = document.getElementById('u1093');

if (bIE) u1093.attachEvent("onmouseover", MouseOveru1093);
else u1093.addEventListener("mouseover", MouseOveru1093, true);
function MouseOveru1093(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u1093',e)) return;
if (true) {

	SetPanelState('u1082', 'pd1u1082','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Lucida Grande;font-size:11px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">Turquoise</span></p>');

}

}

var u1094 = document.getElementById('u1094');
gv_vAlignTable['u1094'] = 'center';
var u1095 = document.getElementById('u1095');

var u1096 = document.getElementById('u1096');

var u1097 = document.getElementById('u1097');
gv_vAlignTable['u1097'] = 'center';
var u1098 = document.getElementById('u1098');

u1098.style.cursor = 'pointer';
if (bIE) u1098.attachEvent("onclick", Clicku1098);
else u1098.addEventListener("click", Clicku1098, true);
function Clicku1098(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u1095', 'pd1u1095','none','',500,'none','',500);

                                DisableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}
else
if (true) {

	SetPanelState('u1095', 'pd1u1095','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u1098.attachEvent("onmouseout", MouseOutu1098);
else u1098.addEventListener("mouseout", MouseOutu1098, true);
function MouseOutu1098(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u1098',e)) return;
if (true) {

	SetPanelState('u1095', 'pd2u1095','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u990 = document.getElementById('u990');
gv_vAlignTable['u990'] = 'center';
var u991 = document.getElementById('u991');

var u992 = document.getElementById('u992');

var u993 = document.getElementById('u993');
gv_vAlignTable['u993'] = 'center';
var u994 = document.getElementById('u994');

u994.style.cursor = 'pointer';
if (bIE) u994.attachEvent("onclick", Clicku994);
else u994.addEventListener("click", Clicku994, true);
function Clicku994(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u991', 'pd1u991','none','',500,'none','',500);

                                DisableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}
else
if (true) {

	SetPanelState('u991', 'pd1u991','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u994.attachEvent("onmouseout", MouseOutu994);
else u994.addEventListener("mouseout", MouseOutu994, true);
function MouseOutu994(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u994',e)) return;
if (true) {

	SetPanelState('u991', 'pd2u991','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u995 = document.getElementById('u995');
gv_vAlignTable['u995'] = 'center';
var u996 = document.getElementById('u996');

if (bIE) u996.attachEvent("onmouseover", MouseOveru996);
else u996.addEventListener("mouseover", MouseOveru996, true);
function MouseOveru996(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u996',e)) return;
if (true) {

	SetPanelState('u991', 'pd3u991','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Teal</span></p>');

}

}

var u997 = document.getElementById('u997');
gv_vAlignTable['u997'] = 'center';
var u998 = document.getElementById('u998');

var u999 = document.getElementById('u999');
gv_vAlignTable['u999'] = 'center';
var u705 = document.getElementById('u705');

if (bIE) u705.attachEvent("onmouseover", MouseOveru705);
else u705.addEventListener("mouseover", MouseOveru705, true);
function MouseOveru705(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u705',e)) return;
if (true) {

	SetPanelState('u700', 'pd3u700','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Light Grey</span></p>');

}

}

var u706 = document.getElementById('u706');
gv_vAlignTable['u706'] = 'center';
var u707 = document.getElementById('u707');

var u708 = document.getElementById('u708');
gv_vAlignTable['u708'] = 'center';
var u715 = document.getElementById('u715');
gv_vAlignTable['u715'] = 'center';
var u716 = document.getElementById('u716');

u716.style.cursor = 'pointer';
if (bIE) u716.attachEvent("onclick", Clicku716);
else u716.addEventListener("click", Clicku716, true);
function Clicku716(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u713', 'pd1u713','none','',500,'none','',500);

                                DisableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}
else
if (true) {

	SetPanelState('u713', 'pd1u713','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u716.attachEvent("onmouseout", MouseOutu716);
else u716.addEventListener("mouseout", MouseOutu716, true);
function MouseOutu716(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u716',e)) return;
if (true) {

	SetPanelState('u713', 'pd2u713','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u717 = document.getElementById('u717');
gv_vAlignTable['u717'] = 'center';
var u718 = document.getElementById('u718');

if (bIE) u718.attachEvent("onmouseover", MouseOveru718);
else u718.addEventListener("mouseover", MouseOveru718, true);
function MouseOveru718(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u718',e)) return;
if (true) {

	SetPanelState('u713', 'pd3u713','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u719 = document.getElementById('u719');
gv_vAlignTable['u719'] = 'center';
var u720 = document.getElementById('u720');

var u721 = document.getElementById('u721');
gv_vAlignTable['u721'] = 'center';
var u722 = document.getElementById('u722');

u722.style.cursor = 'pointer';
if (bIE) u722.attachEvent("onclick", Clicku722);
else u722.addEventListener("click", Clicku722, true);
function Clicku722(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u713', 'pd3u713','none','',500,'none','',500);

                                EnableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u722.attachEvent("onmouseout", MouseOutu722);
else u722.addEventListener("mouseout", MouseOutu722, true);
function MouseOutu722(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u722',e)) return;
if (true) {

	SetPanelState('u713', 'pd0u713','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u725 = document.getElementById('u725');
gv_vAlignTable['u725'] = 'center';
var u726 = document.getElementById('u726');

var u727 = document.getElementById('u727');

var u728 = document.getElementById('u728');
gv_vAlignTable['u728'] = 'center';
var u729 = document.getElementById('u729');

u729.style.cursor = 'pointer';
if (bIE) u729.attachEvent("onclick", Clicku729);
else u729.addEventListener("click", Clicku729, true);
function Clicku729(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u726', 'pd1u726','none','',500,'none','',500);

                                DisableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}
else
if (true) {

	SetPanelState('u726', 'pd1u726','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u729.attachEvent("onmouseout", MouseOutu729);
else u729.addEventListener("mouseout", MouseOutu729, true);
function MouseOutu729(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u729',e)) return;
if (true) {

	SetPanelState('u726', 'pd2u726','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u730 = document.getElementById('u730');
gv_vAlignTable['u730'] = 'center';
var u731 = document.getElementById('u731');

if (bIE) u731.attachEvent("onmouseover", MouseOveru731);
else u731.addEventListener("mouseover", MouseOveru731, true);
function MouseOveru731(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u731',e)) return;
if (true) {

	SetPanelState('u726', 'pd3u726','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">White</span></p>');

}

}

var u732 = document.getElementById('u732');
gv_vAlignTable['u732'] = 'center';
var u733 = document.getElementById('u733');

var u734 = document.getElementById('u734');
gv_vAlignTable['u734'] = 'center';
var u735 = document.getElementById('u735');

u735.style.cursor = 'pointer';
if (bIE) u735.attachEvent("onclick", Clicku735);
else u735.addEventListener("click", Clicku735, true);
function Clicku735(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u726', 'pd3u726','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
}

}

if (bIE) u735.attachEvent("onmouseout", MouseOutu735);
else u735.addEventListener("mouseout", MouseOutu735, true);
function MouseOutu735(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u735',e)) return;
if (true) {

	SetPanelState('u726', 'pd0u726','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u736 = document.getElementById('u736');
gv_vAlignTable['u736'] = 'center';
var u737 = document.getElementById('u737');

if (bIE) u737.attachEvent("onmouseover", MouseOveru737);
else u737.addEventListener("mouseover", MouseOveru737, true);
function MouseOveru737(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u737',e)) return;
if (true) {

	SetPanelState('u726', 'pd1u726','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">White</span></p>');

}

}

var u738 = document.getElementById('u738');
gv_vAlignTable['u738'] = 'center';
var u739 = document.getElementById('u739');

var u740 = document.getElementById('u740');

var u741 = document.getElementById('u741');
gv_vAlignTable['u741'] = 'center';
var u742 = document.getElementById('u742');

u742.style.cursor = 'pointer';
if (bIE) u742.attachEvent("onclick", Clicku742);
else u742.addEventListener("click", Clicku742, true);
function Clicku742(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u739', 'pd1u739','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                DisableImageWidget('u20');
}
else
if (true) {

	SetPanelState('u739', 'pd1u739','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u742.attachEvent("onmouseout", MouseOutu742);
else u742.addEventListener("mouseout", MouseOutu742, true);
function MouseOutu742(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u742',e)) return;
if (true) {

	SetPanelState('u739', 'pd2u739','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u743 = document.getElementById('u743');
gv_vAlignTable['u743'] = 'center';
var u744 = document.getElementById('u744');

if (bIE) u744.attachEvent("onmouseover", MouseOveru744);
else u744.addEventListener("mouseover", MouseOveru744, true);
function MouseOveru744(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u744',e)) return;
if (true) {

	SetPanelState('u739', 'pd3u739','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Cardinal</span></p>');

}

}

var u745 = document.getElementById('u745');
gv_vAlignTable['u745'] = 'center';
var u746 = document.getElementById('u746');

var u747 = document.getElementById('u747');
gv_vAlignTable['u747'] = 'center';
var u748 = document.getElementById('u748');

u748.style.cursor = 'pointer';
if (bIE) u748.attachEvent("onclick", Clicku748);
else u748.addEventListener("click", Clicku748, true);
function Clicku748(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u739', 'pd3u739','none','',500,'none','',500);

                                EnableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u748.attachEvent("onmouseout", MouseOutu748);
else u748.addEventListener("mouseout", MouseOutu748, true);
function MouseOutu748(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u748',e)) return;
if (true) {

	SetPanelState('u739', 'pd0u739','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u749 = document.getElementById('u749');
gv_vAlignTable['u749'] = 'center';
var u751 = document.getElementById('u751');
gv_vAlignTable['u751'] = 'center';
var u752 = document.getElementById('u752');

var u753 = document.getElementById('u753');

var u754 = document.getElementById('u754');
gv_vAlignTable['u754'] = 'center';
var u755 = document.getElementById('u755');

u755.style.cursor = 'pointer';
if (bIE) u755.attachEvent("onclick", Clicku755);
else u755.addEventListener("click", Clicku755, true);
function Clicku755(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u752', 'pd1u752','none','',500,'none','',500);

                                DisableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}
else
if (true) {

	SetPanelState('u752', 'pd1u752','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u755.attachEvent("onmouseout", MouseOutu755);
else u755.addEventListener("mouseout", MouseOutu755, true);
function MouseOutu755(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u755',e)) return;
if (true) {

	SetPanelState('u752', 'pd2u752','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u756 = document.getElementById('u756');
gv_vAlignTable['u756'] = 'center';
var u757 = document.getElementById('u757');

if (bIE) u757.attachEvent("onmouseover", MouseOveru757);
else u757.addEventListener("mouseover", MouseOveru757, true);
function MouseOveru757(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u757',e)) return;
if (true) {

	SetPanelState('u752', 'pd3u752','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Red</span></p>');

}

}

var u758 = document.getElementById('u758');
gv_vAlignTable['u758'] = 'center';
var u759 = document.getElementById('u759');

var u762 = document.getElementById('u762');
gv_vAlignTable['u762'] = 'center';
var u763 = document.getElementById('u763');

if (bIE) u763.attachEvent("onmouseover", MouseOveru763);
else u763.addEventListener("mouseover", MouseOveru763, true);
function MouseOveru763(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u763',e)) return;
if (true) {

	SetPanelState('u752', 'pd1u752','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Red</span></p>');

}

}

var u764 = document.getElementById('u764');
gv_vAlignTable['u764'] = 'center';
var u765 = document.getElementById('u765');

var u766 = document.getElementById('u766');

var u767 = document.getElementById('u767');
gv_vAlignTable['u767'] = 'center';
var u768 = document.getElementById('u768');

u768.style.cursor = 'pointer';
if (bIE) u768.attachEvent("onclick", Clicku768);
else u768.addEventListener("click", Clicku768, true);
function Clicku768(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

                                DisableImageWidget('u20');
	SetPanelState('u765', 'pd1u765','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}
else
if (true) {

	SetPanelState('u765', 'pd1u765','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u768.attachEvent("onmouseout", MouseOutu768);
else u768.addEventListener("mouseout", MouseOutu768, true);
function MouseOutu768(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u768',e)) return;
if (true) {

	SetPanelState('u765', 'pd2u765','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u769 = document.getElementById('u769');
gv_vAlignTable['u769'] = 'center';
var u100 = document.getElementById('u100');

u100.style.cursor = 'pointer';
if (bIE) u100.attachEvent("onclick", Clicku100);
else u100.addEventListener("click", Clicku100, true);
function Clicku100(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u97', 'pd1u97','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                DisableImageWidget('u20');
}
else
if (true) {

	SetPanelState('u97', 'pd1u97','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u100.attachEvent("onmouseout", MouseOutu100);
else u100.addEventListener("mouseout", MouseOutu100, true);
function MouseOutu100(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u100',e)) return;
if (true) {

	SetPanelState('u97', 'pd2u97','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'center';
var u102 = document.getElementById('u102');

if (bIE) u102.attachEvent("onmouseover", MouseOveru102);
else u102.addEventListener("mouseover", MouseOveru102, true);
function MouseOveru102(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u102',e)) return;
if (true) {

	SetPanelState('u97', 'pd3u97','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Cardinal</span></p>');

}

}

var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'center';
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

	SetPanelState('u97', 'pd3u97','none','',500,'none','',500);

                                EnableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u106.attachEvent("onmouseout", MouseOutu106);
else u106.addEventListener("mouseout", MouseOutu106, true);
function MouseOutu106(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u106',e)) return;
if (true) {

	SetPanelState('u97', 'pd0u97','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'center';
var u108 = document.getElementById('u108');

if (bIE) u108.attachEvent("onmouseover", MouseOveru108);
else u108.addEventListener("mouseover", MouseOveru108, true);
function MouseOveru108(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u108',e)) return;
if (true) {

	SetPanelState('u97', 'pd1u97','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Cardinal</span></p>');

}

}

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'center';
var u773 = document.getElementById('u773');
gv_vAlignTable['u773'] = 'center';
var u774 = document.getElementById('u774');

u774.style.cursor = 'pointer';
if (bIE) u774.attachEvent("onclick", Clicku774);
else u774.addEventListener("click", Clicku774, true);
function Clicku774(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u765', 'pd3u765','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
}

}

if (bIE) u774.attachEvent("onmouseout", MouseOutu774);
else u774.addEventListener("mouseout", MouseOutu774, true);
function MouseOutu774(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u774',e)) return;
if (true) {

	SetPanelState('u765', 'pd0u765','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u775 = document.getElementById('u775');
gv_vAlignTable['u775'] = 'center';
var u776 = document.getElementById('u776');

if (bIE) u776.attachEvent("onmouseover", MouseOveru776);
else u776.addEventListener("mouseover", MouseOveru776, true);
function MouseOveru776(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u776',e)) return;
if (true) {

	SetPanelState('u765', 'pd1u765','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Orange Red</span></p>');

}

}

var u777 = document.getElementById('u777');
gv_vAlignTable['u777'] = 'center';
var u778 = document.getElementById('u778');

var u779 = document.getElementById('u779');

var u110 = document.getElementById('u110');

var u111 = document.getElementById('u111');

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'center';
var u113 = document.getElementById('u113');

u113.style.cursor = 'pointer';
if (bIE) u113.attachEvent("onclick", Clicku113);
else u113.addEventListener("click", Clicku113, true);
function Clicku113(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u110', 'pd1u110','none','',500,'none','',500);

                                DisableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}
else
if (true) {

	SetPanelState('u110', 'pd1u110','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u113.attachEvent("onmouseout", MouseOutu113);
else u113.addEventListener("mouseout", MouseOutu113, true);
function MouseOutu113(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u113',e)) return;
if (true) {

	SetPanelState('u110', 'pd2u110','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'center';
var u115 = document.getElementById('u115');

if (bIE) u115.attachEvent("onmouseover", MouseOveru115);
else u115.addEventListener("mouseover", MouseOveru115, true);
function MouseOveru115(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u115',e)) return;
if (true) {

	SetPanelState('u110', 'pd3u110','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Red</span></p>');

}

}

var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'center';
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

	SetPanelState('u110', 'pd3u110','none','',500,'none','',500);

                                EnableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u119.attachEvent("onmouseout", MouseOutu119);
else u119.addEventListener("mouseout", MouseOutu119, true);
function MouseOutu119(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u119',e)) return;
if (true) {

	SetPanelState('u110', 'pd0u110','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u784 = document.getElementById('u784');
gv_vAlignTable['u784'] = 'center';
var u785 = document.getElementById('u785');

var u786 = document.getElementById('u786');
gv_vAlignTable['u786'] = 'center';
var u787 = document.getElementById('u787');

u787.style.cursor = 'pointer';
if (bIE) u787.attachEvent("onclick", Clicku787);
else u787.addEventListener("click", Clicku787, true);
function Clicku787(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u778', 'pd3u778','none','',500,'none','',500);

                                EnableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u787.attachEvent("onmouseout", MouseOutu787);
else u787.addEventListener("mouseout", MouseOutu787, true);
function MouseOutu787(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u787',e)) return;
if (true) {

	SetPanelState('u778', 'pd0u778','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u788 = document.getElementById('u788');
gv_vAlignTable['u788'] = 'center';
var u789 = document.getElementById('u789');

if (bIE) u789.attachEvent("onmouseover", MouseOveru789);
else u789.addEventListener("mouseover", MouseOveru789, true);
function MouseOveru789(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u789',e)) return;
if (true) {

	SetPanelState('u778', 'pd1u778','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Pink</span></p>');

}

}

var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'center';
var u121 = document.getElementById('u121');

if (bIE) u121.attachEvent("onmouseover", MouseOveru121);
else u121.addEventListener("mouseover", MouseOveru121, true);
function MouseOveru121(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u121',e)) return;
if (true) {

	SetPanelState('u110', 'pd1u110','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Red</span></p>');

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


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

                                DisableImageWidget('u20');
	SetPanelState('u123', 'pd1u123','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}
else
if (true) {

	SetPanelState('u123', 'pd1u123','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u126.attachEvent("onmouseout", MouseOutu126);
else u126.addEventListener("mouseout", MouseOutu126, true);
function MouseOutu126(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u126',e)) return;
if (true) {

	SetPanelState('u123', 'pd2u123','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u128 = document.getElementById('u128');

if (bIE) u128.attachEvent("onmouseover", MouseOveru128);
else u128.addEventListener("mouseover", MouseOveru128, true);
function MouseOveru128(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u128',e)) return;
if (true) {

	SetPanelState('u123', 'pd3u123','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Orange Red</span></p>');

}

}

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
windowEvent = e;


if (true) {

	SetPanelState('u123', 'pd3u123','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
}

}

if (bIE) u132.attachEvent("onmouseout", MouseOutu132);
else u132.addEventListener("mouseout", MouseOutu132, true);
function MouseOutu132(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u132',e)) return;
if (true) {

	SetPanelState('u123', 'pd0u123','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'center';
var u134 = document.getElementById('u134');

if (bIE) u134.attachEvent("onmouseover", MouseOveru134);
else u134.addEventListener("mouseover", MouseOveru134, true);
function MouseOveru134(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u134',e)) return;
if (true) {

	SetPanelState('u123', 'pd1u123','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Orange Red</span></p>');

}

}

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


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u136', 'pd1u136','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                DisableImageWidget('u20');
}
else
if (true) {

	SetPanelState('u136', 'pd1u136','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u139.attachEvent("onmouseout", MouseOutu139);
else u139.addEventListener("mouseout", MouseOutu139, true);
function MouseOutu139(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u139',e)) return;
if (true) {

	SetPanelState('u136', 'pd2u136','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

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


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u401', 'pd1u401','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                DisableImageWidget('u20');
}
else
if (true) {

	SetPanelState('u401', 'pd1u401','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Royal</span></p>');

}

}

var u407 = document.getElementById('u407');
gv_vAlignTable['u407'] = 'center';
var u408 = document.getElementById('u408');

var u409 = document.getElementById('u409');
gv_vAlignTable['u409'] = 'center';
var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'center';
var u141 = document.getElementById('u141');

if (bIE) u141.attachEvent("onmouseover", MouseOveru141);
else u141.addEventListener("mouseover", MouseOveru141, true);
function MouseOveru141(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u141',e)) return;
if (true) {

	SetPanelState('u136', 'pd3u136','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Pink</span></p>');

}

}

var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'center';
var u143 = document.getElementById('u143');

var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'center';
var u145 = document.getElementById('u145');

u145.style.cursor = 'pointer';
if (bIE) u145.attachEvent("onclick", Clicku145);
else u145.addEventListener("click", Clicku145, true);
function Clicku145(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u136', 'pd3u136','none','',500,'none','',500);

                                EnableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u145.attachEvent("onmouseout", MouseOutu145);
else u145.addEventListener("mouseout", MouseOutu145, true);
function MouseOutu145(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u145',e)) return;
if (true) {

	SetPanelState('u136', 'pd0u136','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'center';
var u147 = document.getElementById('u147');

if (bIE) u147.attachEvent("onmouseover", MouseOveru147);
else u147.addEventListener("mouseover", MouseOveru147, true);
function MouseOveru147(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u147',e)) return;
if (true) {

	SetPanelState('u136', 'pd1u136','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Pink</span></p>');

}

}

var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'center';
var u149 = document.getElementById('u149');

var u410 = document.getElementById('u410');

u410.style.cursor = 'pointer';
if (bIE) u410.attachEvent("onclick", Clicku410);
else u410.addEventListener("click", Clicku410, true);
function Clicku410(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u401', 'pd3u401','none','',500,'none','',500);

                                EnableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Royal</span></p>');

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


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u414', 'pd1u414','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                DisableImageWidget('u20');
}
else
if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u414', 'pd1u414','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Blue</span></p>');

}

}

var u150 = document.getElementById('u150');

var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'center';
var u152 = document.getElementById('u152');

u152.style.cursor = 'pointer';
if (bIE) u152.attachEvent("onclick", Clicku152);
else u152.addEventListener("click", Clicku152, true);
function Clicku152(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

                                DisableImageWidget('u20');
	SetPanelState('u149', 'pd1u149','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}
else
if (true) {

	SetPanelState('u149', 'pd1u149','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u152.attachEvent("onmouseout", MouseOutu152);
else u152.addEventListener("mouseout", MouseOutu152, true);
function MouseOutu152(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u152',e)) return;
if (true) {

	SetPanelState('u149', 'pd2u149','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'center';
var u154 = document.getElementById('u154');

if (bIE) u154.attachEvent("onmouseover", MouseOveru154);
else u154.addEventListener("mouseover", MouseOveru154, true);
function MouseOveru154(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u154',e)) return;
if (true) {

	SetPanelState('u149', 'pd3u149','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Charity Pink</span></p>');

}

}

var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'center';
var u156 = document.getElementById('u156');

var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'center';
var u158 = document.getElementById('u158');

u158.style.cursor = 'pointer';
if (bIE) u158.attachEvent("onclick", Clicku158);
else u158.addEventListener("click", Clicku158, true);
function Clicku158(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u149', 'pd3u149','none','',500,'none','',500);

                                EnableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u158.attachEvent("onmouseout", MouseOutu158);
else u158.addEventListener("mouseout", MouseOutu158, true);
function MouseOutu158(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u158',e)) return;
if (true) {

	SetPanelState('u149', 'pd0u149','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'center';
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

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Blue</span></p>');

}

}

var u426 = document.getElementById('u426');
gv_vAlignTable['u426'] = 'center';
var u427 = document.getElementById('u427');

var u428 = document.getElementById('u428');

var u429 = document.getElementById('u429');
gv_vAlignTable['u429'] = 'center';
var u160 = document.getElementById('u160');

if (bIE) u160.attachEvent("onmouseover", MouseOveru160);
else u160.addEventListener("mouseover", MouseOveru160, true);
function MouseOveru160(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u160',e)) return;
if (true) {

	SetPanelState('u149', 'pd1u149','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Charity Pink</span></p>');

}

}

var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'center';
var u162 = document.getElementById('u162');

var u163 = document.getElementById('u163');

var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'center';
var u165 = document.getElementById('u165');

u165.style.cursor = 'pointer';
if (bIE) u165.attachEvent("onclick", Clicku165);
else u165.addEventListener("click", Clicku165, true);
function Clicku165(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u162', 'pd1u162','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                DisableImageWidget('u20');
}
else
if (true) {

	SetPanelState('u162', 'pd1u162','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u165.attachEvent("onmouseout", MouseOutu165);
else u165.addEventListener("mouseout", MouseOutu165, true);
function MouseOutu165(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u165',e)) return;
if (true) {

	SetPanelState('u162', 'pd2u162','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'center';
var u167 = document.getElementById('u167');

if (bIE) u167.attachEvent("onmouseover", MouseOveru167);
else u167.addEventListener("mouseover", MouseOveru167, true);
function MouseOveru167(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u167',e)) return;
if (true) {

	SetPanelState('u162', 'pd3u162','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Hot Pink</span></p>');

}

}

var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'center';
var u169 = document.getElementById('u169');

var u430 = document.getElementById('u430');

u430.style.cursor = 'pointer';
if (bIE) u430.attachEvent("onclick", Clicku430);
else u430.addEventListener("click", Clicku430, true);
function Clicku430(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u427', 'pd1u427','none','',500,'none','',500);

                                DisableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}
else
if (true) {

	SetPanelState('u427', 'pd1u427','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Light Blue</span></p>');

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

                                EnableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Light Blue</span></p>');

}

}

var u439 = document.getElementById('u439');
gv_vAlignTable['u439'] = 'center';
var u700 = document.getElementById('u700');

var u701 = document.getElementById('u701');

var u702 = document.getElementById('u702');
gv_vAlignTable['u702'] = 'center';
var u703 = document.getElementById('u703');

u703.style.cursor = 'pointer';
if (bIE) u703.attachEvent("onclick", Clicku703);
else u703.addEventListener("click", Clicku703, true);
function Clicku703(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u700', 'pd1u700','none','',500,'none','',500);

                                DisableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}
else
if (true) {

	SetPanelState('u700', 'pd1u700','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u703.attachEvent("onmouseout", MouseOutu703);
else u703.addEventListener("mouseout", MouseOutu703, true);
function MouseOutu703(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u703',e)) return;
if (true) {

	SetPanelState('u700', 'pd2u700','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u704 = document.getElementById('u704');
gv_vAlignTable['u704'] = 'center';
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

	SetPanelState('u162', 'pd3u162','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u171.attachEvent("onmouseout", MouseOutu171);
else u171.addEventListener("mouseout", MouseOutu171, true);
function MouseOutu171(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u171',e)) return;
if (true) {

	SetPanelState('u162', 'pd0u162','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'center';
var u173 = document.getElementById('u173');

if (bIE) u173.attachEvent("onmouseover", MouseOveru173);
else u173.addEventListener("mouseover", MouseOveru173, true);
function MouseOveru173(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u173',e)) return;
if (true) {

	SetPanelState('u162', 'pd1u162','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Hot Pink</span></p>');

}

}

var u709 = document.getElementById('u709');

u709.style.cursor = 'pointer';
if (bIE) u709.attachEvent("onclick", Clicku709);
else u709.addEventListener("click", Clicku709, true);
function Clicku709(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u700', 'pd3u700','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
}

}

if (bIE) u709.attachEvent("onmouseout", MouseOutu709);
else u709.addEventListener("mouseout", MouseOutu709, true);
function MouseOutu709(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u709',e)) return;
if (true) {

	SetPanelState('u700', 'pd0u700','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u175 = document.getElementById('u175');

var u176 = document.getElementById('u176');

var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'center';
var u178 = document.getElementById('u178');

u178.style.cursor = 'pointer';
if (bIE) u178.attachEvent("onclick", Clicku178);
else u178.addEventListener("click", Clicku178, true);
function Clicku178(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

                                DisableImageWidget('u20');
	SetPanelState('u175', 'pd1u175','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}
else
if (true) {

	SetPanelState('u175', 'pd1u175','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u178.attachEvent("onmouseout", MouseOutu178);
else u178.addEventListener("mouseout", MouseOutu178, true);
function MouseOutu178(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u178',e)) return;
if (true) {

	SetPanelState('u175', 'pd2u175','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'center';
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


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u440', 'pd1u440','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                DisableImageWidget('u20');
}
else
if (true) {

	SetPanelState('u440', 'pd1u440','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Lucida Grande;font-size:11px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">Turquoise</span></p>');

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

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u710 = document.getElementById('u710');
gv_vAlignTable['u710'] = 'center';
var u711 = document.getElementById('u711');

if (bIE) u711.attachEvent("onmouseover", MouseOveru711);
else u711.addEventListener("mouseover", MouseOveru711, true);
function MouseOveru711(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u711',e)) return;
if (true) {

	SetPanelState('u700', 'pd1u700','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Light Grey</span></p>');

}

}

var u712 = document.getElementById('u712');
gv_vAlignTable['u712'] = 'center';
var u713 = document.getElementById('u713');

var u714 = document.getElementById('u714');

var u180 = document.getElementById('u180');

if (bIE) u180.attachEvent("onmouseover", MouseOveru180);
else u180.addEventListener("mouseover", MouseOveru180, true);
function MouseOveru180(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u180',e)) return;
if (true) {

	SetPanelState('u175', 'pd3u175','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Magenta</span></p>');

}

}

var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'center';
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

	SetPanelState('u175', 'pd3u175','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
}

}

if (bIE) u184.attachEvent("onmouseout", MouseOutu184);
else u184.addEventListener("mouseout", MouseOutu184, true);
function MouseOutu184(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u184',e)) return;
if (true) {

	SetPanelState('u175', 'pd0u175','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'center';
var u186 = document.getElementById('u186');

if (bIE) u186.attachEvent("onmouseover", MouseOveru186);
else u186.addEventListener("mouseover", MouseOveru186, true);
function MouseOveru186(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u186',e)) return;
if (true) {

	SetPanelState('u175', 'pd1u175','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Magenta</span></p>');

}

}

var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'center';
var u188 = document.getElementById('u188');

var u189 = document.getElementById('u189');

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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Lucida Grande;font-size:11px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">Turquoise</span></p>');

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


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u453', 'pd1u453','none','',500,'none','',500);

                                DisableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}
else
if (true) {

	SetPanelState('u453', 'pd1u453','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Dark Purple</span></p>');

}

}

var u459 = document.getElementById('u459');
gv_vAlignTable['u459'] = 'center';
var u1009 = document.getElementById('u1009');

if (bIE) u1009.attachEvent("onmouseover", MouseOveru1009);
else u1009.addEventListener("mouseover", MouseOveru1009, true);
function MouseOveru1009(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u1009',e)) return;
if (true) {

	SetPanelState('u1004', 'pd3u1004','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Green</span></p>');

}

}

var u1000 = document.getElementById('u1000');

u1000.style.cursor = 'pointer';
if (bIE) u1000.attachEvent("onclick", Clicku1000);
else u1000.addEventListener("click", Clicku1000, true);
function Clicku1000(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u991', 'pd3u991','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
}

}

if (bIE) u1000.attachEvent("onmouseout", MouseOutu1000);
else u1000.addEventListener("mouseout", MouseOutu1000, true);
function MouseOutu1000(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u1000',e)) return;
if (true) {

	SetPanelState('u991', 'pd0u991','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u1001 = document.getElementById('u1001');
gv_vAlignTable['u1001'] = 'center';
var u1002 = document.getElementById('u1002');

if (bIE) u1002.attachEvent("onmouseover", MouseOveru1002);
else u1002.addEventListener("mouseover", MouseOveru1002, true);
function MouseOveru1002(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u1002',e)) return;
if (true) {

	SetPanelState('u991', 'pd1u991','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Teal</span></p>');

}

}

var u1003 = document.getElementById('u1003');
gv_vAlignTable['u1003'] = 'center';
var u1004 = document.getElementById('u1004');

var u723 = document.getElementById('u723');
gv_vAlignTable['u723'] = 'center';
var u724 = document.getElementById('u724');

if (bIE) u724.attachEvent("onmouseover", MouseOveru724);
else u724.addEventListener("mouseover", MouseOveru724, true);
function MouseOveru724(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u724',e)) return;
if (true) {

	SetPanelState('u713', 'pd1u713','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Grey</span></p>');

}

}

var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'center';
var u191 = document.getElementById('u191');

u191.style.cursor = 'pointer';
if (bIE) u191.attachEvent("onclick", Clicku191);
else u191.addEventListener("click", Clicku191, true);
function Clicku191(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

                                DisableImageWidget('u20');
	SetPanelState('u188', 'pd1u188','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}
else
if (true) {

	SetPanelState('u188', 'pd1u188','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u191.attachEvent("onmouseout", MouseOutu191);
else u191.addEventListener("mouseout", MouseOutu191, true);
function MouseOutu191(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u191',e)) return;
if (true) {

	SetPanelState('u188', 'pd2u188','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'center';
var u193 = document.getElementById('u193');

if (bIE) u193.attachEvent("onmouseover", MouseOveru193);
else u193.addEventListener("mouseover", MouseOveru193, true);
function MouseOveru193(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u193',e)) return;
if (true) {

	SetPanelState('u188', 'pd3u188','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Orange</span></p>');

}

}

var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'center';
var u195 = document.getElementById('u195');

var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'center';
var u197 = document.getElementById('u197');

u197.style.cursor = 'pointer';
if (bIE) u197.attachEvent("onclick", Clicku197);
else u197.addEventListener("click", Clicku197, true);
function Clicku197(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u188', 'pd3u188','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
}

}

if (bIE) u197.attachEvent("onmouseout", MouseOutu197);
else u197.addEventListener("mouseout", MouseOutu197, true);
function MouseOutu197(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u197',e)) return;
if (true) {

	SetPanelState('u188', 'pd0u188','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'center';
var u199 = document.getElementById('u199');

if (bIE) u199.attachEvent("onmouseover", MouseOveru199);
else u199.addEventListener("mouseover", MouseOveru199, true);
function MouseOveru199(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u199',e)) return;
if (true) {

	SetPanelState('u188', 'pd1u188','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Orange</span></p>');

}

}

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

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Dark Purple</span></p>');

}

}

var u465 = document.getElementById('u465');
gv_vAlignTable['u465'] = 'center';
var u466 = document.getElementById('u466');

var u467 = document.getElementById('u467');

var u468 = document.getElementById('u468');
gv_vAlignTable['u468'] = 'center';
var u469 = document.getElementById('u469');

u469.style.cursor = 'pointer';
if (bIE) u469.attachEvent("onclick", Clicku469);
else u469.addEventListener("click", Clicku469, true);
function Clicku469(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u466', 'pd1u466','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                DisableImageWidget('u20');
}
else
if (true) {

	SetPanelState('u466', 'pd1u466','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u469.attachEvent("onmouseout", MouseOutu469);
else u469.addEventListener("mouseout", MouseOutu469, true);
function MouseOutu469(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u469',e)) return;
if (true) {

	SetPanelState('u466', 'pd2u466','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u1010 = document.getElementById('u1010');
gv_vAlignTable['u1010'] = 'center';
var u1011 = document.getElementById('u1011');

var u1012 = document.getElementById('u1012');
gv_vAlignTable['u1012'] = 'center';
var u1013 = document.getElementById('u1013');

u1013.style.cursor = 'pointer';
if (bIE) u1013.attachEvent("onclick", Clicku1013);
else u1013.addEventListener("click", Clicku1013, true);
function Clicku1013(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u1004', 'pd3u1004','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
}

}

if (bIE) u1013.attachEvent("onmouseout", MouseOutu1013);
else u1013.addEventListener("mouseout", MouseOutu1013, true);
function MouseOutu1013(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u1013',e)) return;
if (true) {

	SetPanelState('u1004', 'pd0u1004','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u1014 = document.getElementById('u1014');
gv_vAlignTable['u1014'] = 'center';
var u1100 = document.getElementById('u1100');

if (bIE) u1100.attachEvent("onmouseover", MouseOveru1100);
else u1100.addEventListener("mouseover", MouseOveru1100, true);
function MouseOveru1100(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u1100',e)) return;
if (true) {

	SetPanelState('u1095', 'pd3u1095','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Dark Purple</span></p>');

}

}

var u1101 = document.getElementById('u1101');
gv_vAlignTable['u1101'] = 'center';
var u1102 = document.getElementById('u1102');

var u1103 = document.getElementById('u1103');
gv_vAlignTable['u1103'] = 'center';
var u1104 = document.getElementById('u1104');

u1104.style.cursor = 'pointer';
if (bIE) u1104.attachEvent("onclick", Clicku1104);
else u1104.addEventListener("click", Clicku1104, true);
function Clicku1104(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u1095', 'pd3u1095','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
}

}

if (bIE) u1104.attachEvent("onmouseout", MouseOutu1104);
else u1104.addEventListener("mouseout", MouseOutu1104, true);
function MouseOutu1104(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u1104',e)) return;
if (true) {

	SetPanelState('u1095', 'pd0u1095','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u1105 = document.getElementById('u1105');
gv_vAlignTable['u1105'] = 'center';
var u1106 = document.getElementById('u1106');

if (bIE) u1106.attachEvent("onmouseover", MouseOveru1106);
else u1106.addEventListener("mouseover", MouseOveru1106, true);
function MouseOveru1106(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u1106',e)) return;
if (true) {

	SetPanelState('u1095', 'pd1u1095','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Dark Purple</span></p>');

}

}

var u1107 = document.getElementById('u1107');
gv_vAlignTable['u1107'] = 'center';
var u1108 = document.getElementById('u1108');

var u1109 = document.getElementById('u1109');

var u470 = document.getElementById('u470');
gv_vAlignTable['u470'] = 'center';
var u471 = document.getElementById('u471');

if (bIE) u471.attachEvent("onmouseover", MouseOveru471);
else u471.addEventListener("mouseover", MouseOveru471, true);
function MouseOveru471(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u471',e)) return;
if (true) {

	SetPanelState('u466', 'pd3u466','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Bright Purple</span></p>');

}

}

var u472 = document.getElementById('u472');
gv_vAlignTable['u472'] = 'center';
var u473 = document.getElementById('u473');

var u474 = document.getElementById('u474');
gv_vAlignTable['u474'] = 'center';
var u475 = document.getElementById('u475');

u475.style.cursor = 'pointer';
if (bIE) u475.attachEvent("onclick", Clicku475);
else u475.addEventListener("click", Clicku475, true);
function Clicku475(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u466', 'pd3u466','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
}

}

if (bIE) u475.attachEvent("onmouseout", MouseOutu475);
else u475.addEventListener("mouseout", MouseOutu475, true);
function MouseOutu475(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u475',e)) return;
if (true) {

	SetPanelState('u466', 'pd0u466','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u476 = document.getElementById('u476');
gv_vAlignTable['u476'] = 'center';
var u477 = document.getElementById('u477');

if (bIE) u477.attachEvent("onmouseover", MouseOveru477);
else u477.addEventListener("mouseover", MouseOveru477, true);
function MouseOveru477(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u477',e)) return;
if (true) {

	SetPanelState('u466', 'pd1u466','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Bright Purple</span></p>');

}

}

var u478 = document.getElementById('u478');
gv_vAlignTable['u478'] = 'center';
var u479 = document.getElementById('u479');

var u1020 = document.getElementById('u1020');

u1020.style.cursor = 'pointer';
if (bIE) u1020.attachEvent("onclick", Clicku1020);
else u1020.addEventListener("click", Clicku1020, true);
function Clicku1020(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u1017', 'pd1u1017','none','',500,'none','',500);

                                DisableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}
else
if (true) {

	SetPanelState('u1017', 'pd1u1017','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u1020.attachEvent("onmouseout", MouseOutu1020);
else u1020.addEventListener("mouseout", MouseOutu1020, true);
function MouseOutu1020(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u1020',e)) return;
if (true) {

	SetPanelState('u1017', 'pd2u1017','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u1021 = document.getElementById('u1021');
gv_vAlignTable['u1021'] = 'center';
var u1022 = document.getElementById('u1022');

if (bIE) u1022.attachEvent("onmouseover", MouseOveru1022);
else u1022.addEventListener("mouseover", MouseOveru1022, true);
function MouseOveru1022(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u1022',e)) return;
if (true) {

	SetPanelState('u1017', 'pd3u1017','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Lime</span></p>');

}

}

var u1023 = document.getElementById('u1023');
gv_vAlignTable['u1023'] = 'center';
var u1110 = document.getElementById('u1110');
gv_vAlignTable['u1110'] = 'center';
var u1111 = document.getElementById('u1111');

u1111.style.cursor = 'pointer';
if (bIE) u1111.attachEvent("onclick", Clicku1111);
else u1111.addEventListener("click", Clicku1111, true);
function Clicku1111(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u1108', 'pd1u1108','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                DisableImageWidget('u20');
}
else
if (true) {

	SetPanelState('u1108', 'pd1u1108','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u1111.attachEvent("onmouseout", MouseOutu1111);
else u1111.addEventListener("mouseout", MouseOutu1111, true);
function MouseOutu1111(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u1111',e)) return;
if (true) {

	SetPanelState('u1108', 'pd2u1108','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u1112 = document.getElementById('u1112');
gv_vAlignTable['u1112'] = 'center';
var u1113 = document.getElementById('u1113');

if (bIE) u1113.attachEvent("onmouseover", MouseOveru1113);
else u1113.addEventListener("mouseover", MouseOveru1113, true);
function MouseOveru1113(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u1113',e)) return;
if (true) {

	SetPanelState('u1108', 'pd3u1108','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Bright Purple</span></p>');

}

}

var u1114 = document.getElementById('u1114');
gv_vAlignTable['u1114'] = 'center';
var u1115 = document.getElementById('u1115');

var u1116 = document.getElementById('u1116');
gv_vAlignTable['u1116'] = 'center';
var u1117 = document.getElementById('u1117');

u1117.style.cursor = 'pointer';
if (bIE) u1117.attachEvent("onclick", Clicku1117);
else u1117.addEventListener("click", Clicku1117, true);
function Clicku1117(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u1108', 'pd3u1108','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
}

}

if (bIE) u1117.attachEvent("onmouseout", MouseOutu1117);
else u1117.addEventListener("mouseout", MouseOutu1117, true);
function MouseOutu1117(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u1117',e)) return;
if (true) {

	SetPanelState('u1108', 'pd0u1108','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u1118 = document.getElementById('u1118');
gv_vAlignTable['u1118'] = 'center';
var u1119 = document.getElementById('u1119');

if (bIE) u1119.attachEvent("onmouseover", MouseOveru1119);
else u1119.addEventListener("mouseover", MouseOveru1119, true);
function MouseOveru1119(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u1119',e)) return;
if (true) {

	SetPanelState('u1108', 'pd1u1108','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Bright Purple</span></p>');

}

}

var u1027 = document.getElementById('u1027');
gv_vAlignTable['u1027'] = 'center';
var u1029 = document.getElementById('u1029');
gv_vAlignTable['u1029'] = 'center';
var u480 = document.getElementById('u480');

var u481 = document.getElementById('u481');
gv_vAlignTable['u481'] = 'center';
var u482 = document.getElementById('u482');

u482.style.cursor = 'pointer';
if (bIE) u482.attachEvent("onclick", Clicku482);
else u482.addEventListener("click", Clicku482, true);
function Clicku482(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u479', 'pd1u479','none','',500,'none','',500);

                                DisableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}
else
if (true) {

	SetPanelState('u479', 'pd1u479','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u482.attachEvent("onmouseout", MouseOutu482);
else u482.addEventListener("mouseout", MouseOutu482, true);
function MouseOutu482(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u482',e)) return;
if (true) {

	SetPanelState('u479', 'pd2u479','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u483 = document.getElementById('u483');
gv_vAlignTable['u483'] = 'center';
var u484 = document.getElementById('u484');

if (bIE) u484.attachEvent("onmouseover", MouseOveru484);
else u484.addEventListener("mouseover", MouseOveru484, true);
function MouseOveru484(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u484',e)) return;
if (true) {

	SetPanelState('u479', 'pd3u479','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Bright Purple</span></p>');

}

}

var u485 = document.getElementById('u485');
gv_vAlignTable['u485'] = 'center';
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

	SetPanelState('u479', 'pd3u479','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
}

}

if (bIE) u488.attachEvent("onmouseout", MouseOutu488);
else u488.addEventListener("mouseout", MouseOutu488, true);
function MouseOutu488(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u488',e)) return;
if (true) {

	SetPanelState('u479', 'pd0u479','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u489 = document.getElementById('u489');
gv_vAlignTable['u489'] = 'center';
var u750 = document.getElementById('u750');

if (bIE) u750.attachEvent("onmouseover", MouseOveru750);
else u750.addEventListener("mouseover", MouseOveru750, true);
function MouseOveru750(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u750',e)) return;
if (true) {

	SetPanelState('u739', 'pd1u739','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Cardinal</span></p>');

}

}

var u1030 = document.getElementById('u1030');

var u1031 = document.getElementById('u1031');

var u1032 = document.getElementById('u1032');
gv_vAlignTable['u1032'] = 'center';
var u1120 = document.getElementById('u1120');
gv_vAlignTable['u1120'] = 'center';
var u1121 = document.getElementById('u1121');

var u1122 = document.getElementById('u1122');

var u1123 = document.getElementById('u1123');
gv_vAlignTable['u1123'] = 'center';
var u1124 = document.getElementById('u1124');

u1124.style.cursor = 'pointer';
if (bIE) u1124.attachEvent("onclick", Clicku1124);
else u1124.addEventListener("click", Clicku1124, true);
function Clicku1124(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u1121', 'pd1u1121','none','',500,'none','',500);

                                DisableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}
else
if (true) {

	SetPanelState('u1121', 'pd1u1121','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u1124.attachEvent("onmouseout", MouseOutu1124);
else u1124.addEventListener("mouseout", MouseOutu1124, true);
function MouseOutu1124(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u1124',e)) return;
if (true) {

	SetPanelState('u1121', 'pd2u1121','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u1125 = document.getElementById('u1125');
gv_vAlignTable['u1125'] = 'center';
var u1126 = document.getElementById('u1126');

if (bIE) u1126.attachEvent("onmouseover", MouseOveru1126);
else u1126.addEventListener("mouseover", MouseOveru1126, true);
function MouseOveru1126(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u1126',e)) return;
if (true) {

	SetPanelState('u1121', 'pd3u1121','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Bright Purple</span></p>');

}

}

var u1127 = document.getElementById('u1127');
gv_vAlignTable['u1127'] = 'center';
var u1128 = document.getElementById('u1128');

var u1129 = document.getElementById('u1129');
gv_vAlignTable['u1129'] = 'center';
var u1035 = document.getElementById('u1035');

if (bIE) u1035.attachEvent("onmouseover", MouseOveru1035);
else u1035.addEventListener("mouseover", MouseOveru1035, true);
function MouseOveru1035(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u1035',e)) return;
if (true) {

	SetPanelState('u1030', 'pd3u1030','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Navy</span></p>');

}

}

var u1037 = document.getElementById('u1037');

var u490 = document.getElementById('u490');

if (bIE) u490.attachEvent("onmouseover", MouseOveru490);
else u490.addEventListener("mouseover", MouseOveru490, true);
function MouseOveru490(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u490',e)) return;
if (true) {

	SetPanelState('u479', 'pd1u479','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Bright Purple</span></p>');

}

}

var u491 = document.getElementById('u491');
gv_vAlignTable['u491'] = 'center';
var u492 = document.getElementById('u492');

var u493 = document.getElementById('u493');

var u494 = document.getElementById('u494');
gv_vAlignTable['u494'] = 'center';
var u495 = document.getElementById('u495');

u495.style.cursor = 'pointer';
if (bIE) u495.attachEvent("onclick", Clicku495);
else u495.addEventListener("click", Clicku495, true);
function Clicku495(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u492', 'pd1u492','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                DisableImageWidget('u20');
}
else
if (true) {

	SetPanelState('u492', 'pd1u492','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u495.attachEvent("onmouseout", MouseOutu495);
else u495.addEventListener("mouseout", MouseOutu495, true);
function MouseOutu495(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u495',e)) return;
if (true) {

	SetPanelState('u492', 'pd2u492','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u496 = document.getElementById('u496');
gv_vAlignTable['u496'] = 'center';
var u497 = document.getElementById('u497');

if (bIE) u497.attachEvent("onmouseover", MouseOveru497);
else u497.addEventListener("mouseover", MouseOveru497, true);
function MouseOveru497(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u497',e)) return;
if (true) {

	SetPanelState('u492', 'pd3u492','none','',500,'none','',500);

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Maroon</span></p>');

}

}

var u498 = document.getElementById('u498');
gv_vAlignTable['u498'] = 'center';
var u499 = document.getElementById('u499');

var u760 = document.getElementById('u760');
gv_vAlignTable['u760'] = 'center';
var u761 = document.getElementById('u761');

u761.style.cursor = 'pointer';
if (bIE) u761.attachEvent("onclick", Clicku761);
else u761.addEventListener("click", Clicku761, true);
function Clicku761(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u752', 'pd3u752','none','',500,'none','',500);

                                EnableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u761.attachEvent("onmouseout", MouseOutu761);
else u761.addEventListener("mouseout", MouseOutu761, true);
function MouseOutu761(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u761',e)) return;
if (true) {

	SetPanelState('u752', 'pd0u752','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u1040 = document.getElementById('u1040');
gv_vAlignTable['u1040'] = 'center';
var u1041 = document.getElementById('u1041');

if (bIE) u1041.attachEvent("onmouseover", MouseOveru1041);
else u1041.addEventListener("mouseover", MouseOveru1041, true);
function MouseOveru1041(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u1041',e)) return;
if (true) {

	SetPanelState('u1030', 'pd1u1030','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Navy</span></p>');

}

}

var u1130 = document.getElementById('u1130');

u1130.style.cursor = 'pointer';
if (bIE) u1130.attachEvent("onclick", Clicku1130);
else u1130.addEventListener("click", Clicku1130, true);
function Clicku1130(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u1121', 'pd3u1121','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
}

}

if (bIE) u1130.attachEvent("onmouseout", MouseOutu1130);
else u1130.addEventListener("mouseout", MouseOutu1130, true);
function MouseOutu1130(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u1130',e)) return;
if (true) {

	SetPanelState('u1121', 'pd0u1121','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u1131 = document.getElementById('u1131');
gv_vAlignTable['u1131'] = 'center';
var u1132 = document.getElementById('u1132');

if (bIE) u1132.attachEvent("onmouseover", MouseOveru1132);
else u1132.addEventListener("mouseover", MouseOveru1132, true);
function MouseOveru1132(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u1132',e)) return;
if (true) {

	SetPanelState('u1121', 'pd1u1121','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Bright Purple</span></p>');

}

}

var u1133 = document.getElementById('u1133');
gv_vAlignTable['u1133'] = 'center';
var u1134 = document.getElementById('u1134');

var u1135 = document.getElementById('u1135');

var u1136 = document.getElementById('u1136');
gv_vAlignTable['u1136'] = 'center';
var u1137 = document.getElementById('u1137');

u1137.style.cursor = 'pointer';
if (bIE) u1137.attachEvent("onclick", Clicku1137);
else u1137.addEventListener("click", Clicku1137, true);
function Clicku1137(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u1134', 'pd1u1134','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                DisableImageWidget('u20');
}
else
if (true) {

	SetPanelState('u1134', 'pd1u1134','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u1137.attachEvent("onmouseout", MouseOutu1137);
else u1137.addEventListener("mouseout", MouseOutu1137, true);
function MouseOutu1137(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u1137',e)) return;
if (true) {

	SetPanelState('u1134', 'pd2u1134','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u1138 = document.getElementById('u1138');
gv_vAlignTable['u1138'] = 'center';
var u1139 = document.getElementById('u1139');

if (bIE) u1139.attachEvent("onmouseover", MouseOveru1139);
else u1139.addEventListener("mouseover", MouseOveru1139, true);
function MouseOveru1139(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u1139',e)) return;
if (true) {

	SetPanelState('u1134', 'pd3u1134','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Maroon</span></p>');

}

}

var u1045 = document.getElementById('u1045');
gv_vAlignTable['u1045'] = 'center';
var u1049 = document.getElementById('u1049');
gv_vAlignTable['u1049'] = 'center';
var u770 = document.getElementById('u770');

if (bIE) u770.attachEvent("onmouseover", MouseOveru770);
else u770.addEventListener("mouseover", MouseOveru770, true);
function MouseOveru770(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u770',e)) return;
if (true) {

	SetPanelState('u765', 'pd3u765','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Orange Red</span></p>');

}

}

var u771 = document.getElementById('u771');
gv_vAlignTable['u771'] = 'center';
var u772 = document.getElementById('u772');

var u1050 = document.getElementById('u1050');

var u1140 = document.getElementById('u1140');
gv_vAlignTable['u1140'] = 'center';
var u1141 = document.getElementById('u1141');

var u1142 = document.getElementById('u1142');
gv_vAlignTable['u1142'] = 'center';
var u1143 = document.getElementById('u1143');

u1143.style.cursor = 'pointer';
if (bIE) u1143.attachEvent("onclick", Clicku1143);
else u1143.addEventListener("click", Clicku1143, true);
function Clicku1143(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u1134', 'pd3u1134','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
}

}

if (bIE) u1143.attachEvent("onmouseout", MouseOutu1143);
else u1143.addEventListener("mouseout", MouseOutu1143, true);
function MouseOutu1143(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u1143',e)) return;
if (true) {

	SetPanelState('u1134', 'pd0u1134','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u1144 = document.getElementById('u1144');
gv_vAlignTable['u1144'] = 'center';
var u1145 = document.getElementById('u1145');

if (bIE) u1145.attachEvent("onmouseover", MouseOveru1145);
else u1145.addEventListener("mouseover", MouseOveru1145, true);
function MouseOveru1145(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u1145',e)) return;
if (true) {

	SetPanelState('u1134', 'pd1u1134','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Maroon</span></p>');

}

}

var u1146 = document.getElementById('u1146');
gv_vAlignTable['u1146'] = 'center';
var u1147 = document.getElementById('u1147');
gv_vAlignTable['u1147'] = 'top';
var u1059 = document.getElementById('u1059');

u1059.style.cursor = 'pointer';
if (bIE) u1059.attachEvent("onclick", Clicku1059);
else u1059.addEventListener("click", Clicku1059, true);
function Clicku1059(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u1056', 'pd1u1056','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                DisableImageWidget('u20');
}
else
if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u1056', 'pd1u1056','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u1059.attachEvent("onmouseout", MouseOutu1059);
else u1059.addEventListener("mouseout", MouseOutu1059, true);
function MouseOutu1059(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u1059',e)) return;
if (true) {

	SetPanelState('u1056', 'pd2u1056','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u1051 = document.getElementById('u1051');
gv_vAlignTable['u1051'] = 'center';
var u1052 = document.getElementById('u1052');

u1052.style.cursor = 'pointer';
if (bIE) u1052.attachEvent("onclick", Clicku1052);
else u1052.addEventListener("click", Clicku1052, true);
function Clicku1052(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u1043', 'pd3u1043','none','',500,'none','',500);

                                EnableImageWidget('u20');
SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u1052.attachEvent("onmouseout", MouseOutu1052);
else u1052.addEventListener("mouseout", MouseOutu1052, true);
function MouseOutu1052(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u1052',e)) return;
if (true) {

	SetPanelState('u1043', 'pd0u1043','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u1053 = document.getElementById('u1053');
gv_vAlignTable['u1053'] = 'center';
var u1054 = document.getElementById('u1054');

if (bIE) u1054.attachEvent("onmouseover", MouseOveru1054);
else u1054.addEventListener("mouseover", MouseOveru1054, true);
function MouseOveru1054(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u1054',e)) return;
if (true) {

	SetPanelState('u1043', 'pd1u1043','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Royal</span></p>');

}

}

var u1055 = document.getElementById('u1055');
gv_vAlignTable['u1055'] = 'center';
var u780 = document.getElementById('u780');
gv_vAlignTable['u780'] = 'center';
var u781 = document.getElementById('u781');

u781.style.cursor = 'pointer';
if (bIE) u781.attachEvent("onclick", Clicku781);
else u781.addEventListener("click", Clicku781, true);
function Clicku781(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

	SetPanelState('u778', 'pd1u778','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                DisableImageWidget('u20');
}
else
if (true) {

	SetPanelState('u778', 'pd1u778','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u781.attachEvent("onmouseout", MouseOutu781);
else u781.addEventListener("mouseout", MouseOutu781, true);
function MouseOutu781(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u781',e)) return;
if (true) {

	SetPanelState('u778', 'pd2u778','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u782 = document.getElementById('u782');
gv_vAlignTable['u782'] = 'center';
var u783 = document.getElementById('u783');

if (bIE) u783.attachEvent("onmouseover", MouseOveru783);
else u783.addEventListener("mouseover", MouseOveru783, true);
function MouseOveru783(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u783',e)) return;
if (true) {

	SetPanelState('u778', 'pd3u778','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Pink</span></p>');

}

}

var u1060 = document.getElementById('u1060');
gv_vAlignTable['u1060'] = 'center';
var u1061 = document.getElementById('u1061');

if (bIE) u1061.attachEvent("onmouseover", MouseOveru1061);
else u1061.addEventListener("mouseover", MouseOveru1061, true);
function MouseOveru1061(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u1061',e)) return;
if (true) {

	SetPanelState('u1056', 'pd3u1056','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Blue</span></p>');

}

}

var u1062 = document.getElementById('u1062');
gv_vAlignTable['u1062'] = 'center';
var u1063 = document.getElementById('u1063');

var u1064 = document.getElementById('u1064');
gv_vAlignTable['u1064'] = 'center';
var u1065 = document.getElementById('u1065');

u1065.style.cursor = 'pointer';
if (bIE) u1065.attachEvent("onclick", Clicku1065);
else u1065.addEventListener("click", Clicku1065, true);
function Clicku1065(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u1056', 'pd3u1056','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetNum(GetGlobalVariableValue('$colorCount')) + GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
}

}

if (bIE) u1065.attachEvent("onmouseout", MouseOutu1065);
else u1065.addEventListener("mouseout", MouseOutu1065, true);
function MouseOutu1065(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u1065',e)) return;
if (true) {

	SetPanelState('u1056', 'pd0u1056','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u1069 = document.getElementById('u1069');

var u790 = document.getElementById('u790');
gv_vAlignTable['u790'] = 'center';
var u791 = document.getElementById('u791');

var u792 = document.getElementById('u792');

var u793 = document.getElementById('u793');
gv_vAlignTable['u793'] = 'center';
var u794 = document.getElementById('u794');

u794.style.cursor = 'pointer';
if (bIE) u794.attachEvent("onclick", Clicku794);
else u794.addEventListener("click", Clicku794, true);
function Clicku794(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$colorCount')) == ('1')) {

                                DisableImageWidget('u20');
	SetPanelState('u791', 'pd1u791','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}
else
if (true) {

	SetPanelState('u791', 'pd1u791','none','',500,'none','',500);

SetGlobalVariableValue('$colorCount', '' + (GetGlobalVariableValue('$colorCount') - GetNum(1)) + '');

SetWidgetRichText('u924', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

}

}

if (bIE) u794.attachEvent("onmouseout", MouseOutu794);
else u794.addEventListener("mouseout", MouseOutu794, true);
function MouseOutu794(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u794',e)) return;
if (true) {

	SetPanelState('u791', 'pd2u791','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u795 = document.getElementById('u795');
gv_vAlignTable['u795'] = 'center';
var u796 = document.getElementById('u796');

if (bIE) u796.attachEvent("onmouseover", MouseOveru796);
else u796.addEventListener("mouseover", MouseOveru796, true);
function MouseOveru796(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u796',e)) return;
if (true) {

	SetPanelState('u791', 'pd3u791','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Charity Pink</span></p>');

}

}

var u797 = document.getElementById('u797');
gv_vAlignTable['u797'] = 'center';
var u798 = document.getElementById('u798');

var u799 = document.getElementById('u799');
gv_vAlignTable['u799'] = 'center';
var u1079 = document.getElementById('u1079');
gv_vAlignTable['u1079'] = 'center';
var u1089 = document.getElementById('u1089');

var u1148 = document.getElementById('u1148');
gv_vAlignTable['u1148'] = 'top';
var u1099 = document.getElementById('u1099');
gv_vAlignTable['u1099'] = 'center';
var u272 = document.getElementById('u272');
gv_vAlignTable['u272'] = 'center';
var u273 = document.getElementById('u273');

var u510 = document.getElementById('u510');
gv_vAlignTable['u510'] = 'center';
var u511 = document.getElementById('u511');
gv_vAlignTable['u511'] = 'top';
var u512 = document.getElementById('u512');
gv_vAlignTable['u512'] = 'top';
var u513 = document.getElementById('u513');
gv_vAlignTable['u513'] = 'top';
var u282 = document.getElementById('u282');
gv_vAlignTable['u282'] = 'top';
var u520 = document.getElementById('u520');
gv_vAlignTable['u520'] = 'center';
var u521 = document.getElementById('u521');

var u522 = document.getElementById('u522');

var u523 = document.getElementById('u523');
gv_vAlignTable['u523'] = 'center';
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

SetWidgetRichText('u282', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('$colorCount')) + ' colors selected</span></p>');

                                EnableImageWidget('u20');
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

SetWidgetRichText('u283', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u530 = document.getElementById('u530');
gv_vAlignTable['u530'] = 'center';
var u531 = document.getElementById('u531');

var u532 = document.getElementById('u532');

var u533 = document.getElementById('u533');
gv_vAlignTable['u533'] = 'center';
var u534 = document.getElementById('u534');

u534.style.cursor = 'pointer';
if (bIE) u534.attachEvent("onclick", Clicku534);
else u534.addEventListener("click", Clicku534, true);
function Clicku534(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u534');
}

}

if (bIE) u534.attachEvent("onmouseover", MouseOveru534);
else u534.addEventListener("mouseover", MouseOveru534, true);
function MouseOveru534(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u534',e)) return;
if (true) {

	SetPanelState('u531', 'pd1u531','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Cardinal</span></p>');

}

}

if (bIE) u534.attachEvent("onmouseout", MouseOutu534);
else u534.addEventListener("mouseout", MouseOutu534, true);
function MouseOutu534(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u534',e)) return;
if (true) {

	SetPanelState('u531', 'pd0u531','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u535 = document.getElementById('u535');
gv_vAlignTable['u535'] = 'center';
var u536 = document.getElementById('u536');

var u537 = document.getElementById('u537');

var u540 = document.getElementById('u540');
gv_vAlignTable['u540'] = 'center';
var u541 = document.getElementById('u541');

var u544 = document.getElementById('u544');

u544.style.cursor = 'pointer';
if (bIE) u544.attachEvent("onclick", Clicku544);
else u544.addEventListener("click", Clicku544, true);
function Clicku544(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u544');
}

}

if (bIE) u544.attachEvent("onmouseover", MouseOveru544);
else u544.addEventListener("mouseover", MouseOveru544, true);
function MouseOveru544(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u544',e)) return;
if (true) {

	SetPanelState('u541', 'pd1u541','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Orange Red</span></p>');

}

}

if (bIE) u544.attachEvent("onmouseout", MouseOutu544);
else u544.addEventListener("mouseout", MouseOutu544, true);
function MouseOutu544(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u544',e)) return;
if (true) {

	SetPanelState('u541', 'pd0u541','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u545 = document.getElementById('u545');
gv_vAlignTable['u545'] = 'center';
var u546 = document.getElementById('u546');

var u547 = document.getElementById('u547');

var u554 = document.getElementById('u554');

u554.style.cursor = 'pointer';
if (bIE) u554.attachEvent("onclick", Clicku554);
else u554.addEventListener("click", Clicku554, true);
function Clicku554(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u554');
}

}

if (bIE) u554.attachEvent("onmouseover", MouseOveru554);
else u554.addEventListener("mouseover", MouseOveru554, true);
function MouseOveru554(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u554',e)) return;
if (true) {

	SetPanelState('u551', 'pd1u551','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Charity Pink</span></p>');

}

}

if (bIE) u554.attachEvent("onmouseout", MouseOutu554);
else u554.addEventListener("mouseout", MouseOutu554, true);
function MouseOutu554(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u554',e)) return;
if (true) {

	SetPanelState('u551', 'pd0u551','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u555 = document.getElementById('u555');
gv_vAlignTable['u555'] = 'center';
var u556 = document.getElementById('u556');

var u557 = document.getElementById('u557');

var u564 = document.getElementById('u564');

u564.style.cursor = 'pointer';
if (bIE) u564.attachEvent("onclick", Clicku564);
else u564.addEventListener("click", Clicku564, true);
function Clicku564(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u564');
}

}

if (bIE) u564.attachEvent("onmouseover", MouseOveru564);
else u564.addEventListener("mouseover", MouseOveru564, true);
function MouseOveru564(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u564',e)) return;
if (true) {

	SetPanelState('u561', 'pd1u561','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Magenta</span></p>');

}

}

if (bIE) u564.attachEvent("onmouseout", MouseOutu564);
else u564.addEventListener("mouseout", MouseOutu564, true);
function MouseOutu564(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u564',e)) return;
if (true) {

	SetPanelState('u561', 'pd1u561','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u566 = document.getElementById('u566');

var u567 = document.getElementById('u567');

var u805 = document.getElementById('u805');

var u806 = document.getElementById('u806');
gv_vAlignTable['u806'] = 'center';
var u570 = document.getElementById('u570');
gv_vAlignTable['u570'] = 'center';
var u574 = document.getElementById('u574');

u574.style.cursor = 'pointer';
if (bIE) u574.attachEvent("onclick", Clicku574);
else u574.addEventListener("click", Clicku574, true);
function Clicku574(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u574');
}

}

if (bIE) u574.attachEvent("onmouseover", MouseOveru574);
else u574.addEventListener("mouseover", MouseOveru574, true);
function MouseOveru574(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u574',e)) return;
if (true) {

	SetPanelState('u571', 'pd1u571','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Light Orange</span></p>');

}

}

if (bIE) u574.attachEvent("onmouseout", MouseOutu574);
else u574.addEventListener("mouseout", MouseOutu574, true);
function MouseOutu574(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u574',e)) return;
if (true) {

	SetPanelState('u571', 'pd0u571','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u575 = document.getElementById('u575');
gv_vAlignTable['u575'] = 'center';
var u576 = document.getElementById('u576');

var u577 = document.getElementById('u577');

var u815 = document.getElementById('u815');

if (bIE) u815.attachEvent("onmouseover", MouseOveru815);
else u815.addEventListener("mouseover", MouseOveru815, true);
function MouseOveru815(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u815',e)) return;
if (true) {

	SetPanelState('u804', 'pd1u804','none','',500,'none','',500);

SetWidgetRichText('u925', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Hot Pink</span></p>');

}

}

var u816 = document.getElementById('u816');
gv_vAlignTable['u816'] = 'center';
var u818 = document.getElementById('u818');

var u580 = document.getElementById('u580');
gv_vAlignTable['u580'] = 'center';
var u581 = document.getElementById('u581');

var u582 = document.getElementById('u582');

var u583 = document.getElementById('u583');
gv_vAlignTable['u583'] = 'center';
var u584 = document.getElementById('u584');

u584.style.cursor = 'pointer';
if (bIE) u584.attachEvent("onclick", Clicku584);
else u584.addEventListener("click", Clicku584, true);
function Clicku584(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u584');
}

}

if (bIE) u584.attachEvent("onmouseover", MouseOveru584);
else u584.addEventListener("mouseover", MouseOveru584, true);
function MouseOveru584(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u584',e)) return;
if (true) {

	SetPanelState('u581', 'pd1u581','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Tan</span></p>');

}

}

if (bIE) u584.attachEvent("onmouseout", MouseOutu584);
else u584.addEventListener("mouseout", MouseOutu584, true);
function MouseOutu584(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u584',e)) return;
if (true) {

	SetPanelState('u581', 'pd0u581','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u585 = document.getElementById('u585');
gv_vAlignTable['u585'] = 'center';
var u586 = document.getElementById('u586');

var u587 = document.getElementById('u587');

var u590 = document.getElementById('u590');
gv_vAlignTable['u590'] = 'center';
var u591 = document.getElementById('u591');

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

SetWidgetSelected('u594');
}

}

if (bIE) u594.attachEvent("onmouseover", MouseOveru594);
else u594.addEventListener("mouseover", MouseOveru594, true);
function MouseOveru594(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u594',e)) return;
if (true) {

	SetPanelState('u591', 'pd1u591','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"> Old Gold</span></p>');

}

}

if (bIE) u594.attachEvent("onmouseout", MouseOutu594);
else u594.addEventListener("mouseout", MouseOutu594, true);
function MouseOutu594(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u594',e)) return;
if (true) {

	SetPanelState('u591', 'pd0u591','none','',500,'none','',500);

SetWidgetRichText('u512', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&nbsp;</span></p>');

}

}

var u595 = document.getElementById('u595');
gv_vAlignTable['u595'] = 'center';
var u596 = document.getElementById('u596');

if (window.OnLoad) OnLoad();
