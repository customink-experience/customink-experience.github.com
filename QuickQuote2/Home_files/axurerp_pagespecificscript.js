
var PageName = 'Home';
var PageId = '15ad4fd4957746b68e0670f0baf44405'
var PageUrl = 'Home.html'
document.title = 'Home';
var PageNotes = 
{
"pageName":"Home",
"showNotesNames":"False"}
var $OnLoadVariable = '';

var $BasePriceBulk = '';

var $InksBack = '';

var $InksFront = '';

var $InksTotal = '';

var $ProdColor = '';

var $ZIP = '';

var $Quantity = '';

var $SidesPrinted = '';

var $TotalPrice = '';

var $DigitalStart = '';

var $DigitalBase = '';

var $DigitalTotal = '';

var $SideCostDP = '';

var $ColorCostDP = '';

var $BulkStart = '';

var $ColorCostBulk = '';

var $SideCostBulk = '';

var $InkCostBulk = '';

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
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&BasePriceBulk=' + encodeURIComponent($BasePriceBulk) + '&InksBack=' + encodeURIComponent($InksBack) + '&InksFront=' + encodeURIComponent($InksFront) + '&InksTotal=' + encodeURIComponent($InksTotal) + '&ProdColor=' + encodeURIComponent($ProdColor) + '&ZIP=' + encodeURIComponent($ZIP) + '&Quantity=' + encodeURIComponent($Quantity) + '&SidesPrinted=' + encodeURIComponent($SidesPrinted) + '&TotalPrice=' + encodeURIComponent($TotalPrice) + '&DigitalStart=' + encodeURIComponent($DigitalStart) + '&DigitalBase=' + encodeURIComponent($DigitalBase) + '&DigitalTotal=' + encodeURIComponent($DigitalTotal) + '&SideCostDP=' + encodeURIComponent($SideCostDP) + '&ColorCostDP=' + encodeURIComponent($ColorCostDP) + '&BulkStart=' + encodeURIComponent($BulkStart) + '&ColorCostBulk=' + encodeURIComponent($ColorCostBulk) + '&SideCostBulk=' + encodeURIComponent($SideCostBulk) + '&InkCostBulk=' + encodeURIComponent($InkCostBulk) + '&CSUM=1';
}

function PopulateVariables(value) {
    var d = new Date();
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[BasePriceBulk\]\]/g, $BasePriceBulk);
  value = value.replace(/\[\[InksBack\]\]/g, $InksBack);
  value = value.replace(/\[\[InksFront\]\]/g, $InksFront);
  value = value.replace(/\[\[InksTotal\]\]/g, $InksTotal);
  value = value.replace(/\[\[ProdColor\]\]/g, $ProdColor);
  value = value.replace(/\[\[ZIP\]\]/g, $ZIP);
  value = value.replace(/\[\[Quantity\]\]/g, $Quantity);
  value = value.replace(/\[\[SidesPrinted\]\]/g, $SidesPrinted);
  value = value.replace(/\[\[TotalPrice\]\]/g, $TotalPrice);
  value = value.replace(/\[\[DigitalStart\]\]/g, $DigitalStart);
  value = value.replace(/\[\[DigitalBase\]\]/g, $DigitalBase);
  value = value.replace(/\[\[DigitalTotal\]\]/g, $DigitalTotal);
  value = value.replace(/\[\[SideCostDP\]\]/g, $SideCostDP);
  value = value.replace(/\[\[ColorCostDP\]\]/g, $ColorCostDP);
  value = value.replace(/\[\[BulkStart\]\]/g, $BulkStart);
  value = value.replace(/\[\[ColorCostBulk\]\]/g, $ColorCostBulk);
  value = value.replace(/\[\[SideCostBulk\]\]/g, $SideCostBulk);
  value = value.replace(/\[\[InkCostBulk\]\]/g, $InkCostBulk);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  value = value.replace(/\[\[GenDay\]\]/g, '27');
  value = value.replace(/\[\[GenMonth\]\]/g, '4');
  value = value.replace(/\[\[GenMonthName\]\]/g, 'April');
  value = value.replace(/\[\[GenDayOfWeek\]\]/g, 'Wednesday');
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

SetGlobalVariableValue('$InksFront', '1');

SetGlobalVariableValue('$InksBack', '0');

SetGlobalVariableValue('$InksTotal', '1');

SetGlobalVariableValue('$BulkStart', '6.85');

SetGlobalVariableValue('$DigitalStart', '19.75');

SetGlobalVariableValue('$SidesPrinted', '1');

SetGlobalVariableValue('$ColorCostBulk', '0');

SetGlobalVariableValue('$ColorCostDP', '0');

}

}

var u70 = document.getElementById('u70');

var u71 = document.getElementById('u71');

var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'center';
var u101 = document.getElementById('u101');

if (bIE) u101.attachEvent("onmouseover", MouseOveru101);
else u101.addEventListener("mouseover", MouseOveru101, true);
function MouseOveru101(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u101',e)) return;
if (true) {

	SetPanelState('u87', 'pd2u87','none','','500','none','','500');

}

}
gv_vAlignTable['u101'] = 'top';
var u102 = document.getElementById('u102');

if (bIE) u102.attachEvent("onmouseover", MouseOveru102);
else u102.addEventListener("mouseover", MouseOveru102, true);
function MouseOveru102(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u102',e)) return;
if (true) {

	SetPanelState('u87', 'pd2u87','none','','500','none','','500');

}

}

var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'center';
var u104 = document.getElementById('u104');

var u105 = document.getElementById('u105');

var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'center';
var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u108 = document.getElementById('u108');

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'center';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'center';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'top';
var u82 = document.getElementById('u82');

var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'center';
var u84 = document.getElementById('u84');

if (bIE) u84.attachEvent("onmouseover", MouseOveru84);
else u84.addEventListener("mouseover", MouseOveru84, true);
function MouseOveru84(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u84',e)) return;
if (true) {

	SetPanelState('u70', 'pd2u70','none','','500','none','','500');

}

}
gv_vAlignTable['u84'] = 'top';
var u85 = document.getElementById('u85');

if (bIE) u85.attachEvent("onmouseover", MouseOveru85);
else u85.addEventListener("mouseover", MouseOveru85, true);
function MouseOveru85(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u85',e)) return;
if (true) {

	SetPanelState('u70', 'pd2u70','none','','500','none','','500');

}

}

var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'center';
var u87 = document.getElementById('u87');

var u88 = document.getElementById('u88');

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'center';
var u118 = document.getElementById('u118');

if (bIE) u118.attachEvent("onmouseover", MouseOveru118);
else u118.addEventListener("mouseover", MouseOveru118, true);
function MouseOveru118(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u118',e)) return;
if (true) {

	SetPanelState('u104', 'pd2u104','none','','500','none','','500');

}

}
gv_vAlignTable['u118'] = 'top';
var u119 = document.getElementById('u119');

if (bIE) u119.attachEvent("onmouseover", MouseOveru119);
else u119.addEventListener("mouseover", MouseOveru119, true);
function MouseOveru119(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u119',e)) return;
if (true) {

	SetPanelState('u104', 'pd2u104','none','','500','none','','500');

}

}

var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
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

	SetPanelState('u87', 'pd1u87','none','','500','none','','500');

	SetPanelState('u70', 'pd0u70','none','','500','none','','500');

	SetPanelState('u2', 'pd1u2','none','','500','none','','500');

	SetPanelState('u19', 'pd0u19','none','','500','none','','500');

	SetPanelState('u36', 'pd0u36','none','','500','none','','500');

	SetPanelState('u53', 'pd0u53','none','','500','none','','500');

	SetPanelState('u104', 'pd0u104','none','','500','none','','500');

	SetPanelState('u121', 'pd0u121','none','','500','none','','500');

	SetPanelState('u155', 'pd0u155','none','','500','none','','500');

	SetPanelState('u172', 'pd0u172','none','','500','none','','500');

	SetPanelState('u138', 'pd0u138','none','','500','none','','500');

	SetPanelState('u189', 'pd0u189','none','','500','none','','500');

SetGlobalVariableValue('$ProdColor', 'Royal');

SetGlobalVariableValue('$ColorCostBulk', '1.03');

SetGlobalVariableValue('$ColorCostDP', '2.96');

SetWidgetRichText('u1', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">' + (GetGlobalVariableValue('$ProdColor')) + '</span></p>');

}

}

if (bIE) u93.attachEvent("onmouseout", MouseOutu93);
else u93.addEventListener("mouseout", MouseOutu93, true);
function MouseOutu93(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u93',e)) return;
if (true) {

	SetPanelState('u87', 'pd0u87','none','','500','none','','500');

}

}

var u94 = document.getElementById('u94');

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u96 = document.getElementById('u96');

var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'center';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u127 = document.getElementById('u127');

u127.style.cursor = 'pointer';
if (bIE) u127.attachEvent("onclick", Clicku127);
else u127.addEventListener("click", Clicku127, true);
function Clicku127(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u121', 'pd1u121','none','','500','none','','500');

	SetPanelState('u70', 'pd0u70','none','','500','none','','500');

	SetPanelState('u87', 'pd0u87','none','','500','none','','500');

	SetPanelState('u2', 'pd1u2','none','','500','none','','500');

	SetPanelState('u19', 'pd0u19','none','','500','none','','500');

	SetPanelState('u36', 'pd0u36','none','','500','none','','500');

	SetPanelState('u53', 'pd0u53','none','','500','none','','500');

	SetPanelState('u104', 'pd0u104','none','','500','none','','500');

	SetPanelState('u155', 'pd0u155','none','','500','none','','500');

	SetPanelState('u172', 'pd0u172','none','','500','none','','500');

	SetPanelState('u138', 'pd0u138','none','','500','none','','500');

	SetPanelState('u189', 'pd0u189','none','','500','none','','500');

SetGlobalVariableValue('$ProdColor', 'Gray');

SetGlobalVariableValue('$ColorCostBulk', '1.03');

SetGlobalVariableValue('$ColorCostDP', '2.96');

SetWidgetRichText('u1', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">' + (GetGlobalVariableValue('$ProdColor')) + '</span></p>');

}

}

if (bIE) u127.attachEvent("onmouseout", MouseOutu127);
else u127.addEventListener("mouseout", MouseOutu127, true);
function MouseOutu127(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u127',e)) return;
if (true) {

	SetPanelState('u121', 'pd0u121','none','','500','none','','500');

}

}

var u128 = document.getElementById('u128');

var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'center';
var u130 = document.getElementById('u130');

var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'center';
var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'top';
var u133 = document.getElementById('u133');

var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'center';
var u135 = document.getElementById('u135');

if (bIE) u135.attachEvent("onmouseover", MouseOveru135);
else u135.addEventListener("mouseover", MouseOveru135, true);
function MouseOveru135(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u135',e)) return;
if (true) {

	SetPanelState('u121', 'pd2u121','none','','500','none','','500');

}

}
gv_vAlignTable['u135'] = 'top';
var u136 = document.getElementById('u136');

if (bIE) u136.attachEvent("onmouseover", MouseOveru136);
else u136.addEventListener("mouseover", MouseOveru136, true);
function MouseOveru136(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u136',e)) return;
if (true) {

	SetPanelState('u121', 'pd2u121','none','','500','none','','500');

}

}

var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'center';
var u138 = document.getElementById('u138');

var u139 = document.getElementById('u139');

var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'center';
var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'top';
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

	SetPanelState('u138', 'pd1u138','none','','500','none','','500');

	SetPanelState('u155', 'pd0u155','none','','500','none','','500');

	SetPanelState('u2', 'pd1u2','none','','500','none','','500');

	SetPanelState('u19', 'pd0u19','none','','500','none','','500');

	SetPanelState('u36', 'pd0u36','none','','500','none','','500');

	SetPanelState('u53', 'pd0u53','none','','500','none','','500');

	SetPanelState('u70', 'pd0u70','none','','500','none','','500');

	SetPanelState('u87', 'pd0u87','none','','500','none','','500');

	SetPanelState('u104', 'pd0u104','none','','500','none','','500');

	SetPanelState('u121', 'pd0u121','none','','500','none','','500');

	SetPanelState('u172', 'pd0u172','none','','500','none','','500');

	SetPanelState('u189', 'pd0u189','none','','500','none','','500');

SetGlobalVariableValue('$ProdColor', 'Yellow');

SetGlobalVariableValue('$ColorCostBulk', '1.03');

SetGlobalVariableValue('$ColorCostDP', '2.96');

SetWidgetRichText('u1', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">' + (GetGlobalVariableValue('$ProdColor')) + '</span></p>');

}

}

if (bIE) u144.attachEvent("onmouseout", MouseOutu144);
else u144.addEventListener("mouseout", MouseOutu144, true);
function MouseOutu144(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u144',e)) return;
if (true) {

	SetPanelState('u138', 'pd0u138','none','','500','none','','500');

}

}

var u145 = document.getElementById('u145');

var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'center';
var u147 = document.getElementById('u147');

var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'center';
var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'top';
var u150 = document.getElementById('u150');

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

	SetPanelState('u138', 'pd2u138','none','','500','none','','500');

}

}
gv_vAlignTable['u152'] = 'top';
var u153 = document.getElementById('u153');

if (bIE) u153.attachEvent("onmouseover", MouseOveru153);
else u153.addEventListener("mouseover", MouseOveru153, true);
function MouseOveru153(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u153',e)) return;
if (true) {

	SetPanelState('u138', 'pd2u138','none','','500','none','','500');

}

}

var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'center';
var u155 = document.getElementById('u155');

var u156 = document.getElementById('u156');

var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'center';
var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'top';
var u159 = document.getElementById('u159');

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

	SetPanelState('u155', 'pd1u155','none','','500','none','','500');

	SetPanelState('u138', 'pd0u138','none','','500','none','','500');

	SetPanelState('u2', 'pd1u2','none','','500','none','','500');

	SetPanelState('u19', 'pd0u19','none','','500','none','','500');

	SetPanelState('u36', 'pd0u36','none','','500','none','','500');

	SetPanelState('u53', 'pd0u53','none','','500','none','','500');

	SetPanelState('u70', 'pd0u70','none','','500','none','','500');

	SetPanelState('u87', 'pd0u87','none','','500','none','','500');

	SetPanelState('u104', 'pd0u104','none','','500','none','','500');

	SetPanelState('u121', 'pd0u121','none','','500','none','','500');

	SetPanelState('u172', 'pd0u172','none','','500','none','','500');

	SetPanelState('u189', 'pd0u189','none','','500','none','','500');

SetGlobalVariableValue('$ProdColor', 'Purple');

SetGlobalVariableValue('$ColorCostBulk', '1.03');

SetGlobalVariableValue('$ColorCostDP', '2.96');

SetWidgetRichText('u1', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">' + (GetGlobalVariableValue('$ProdColor')) + '</span></p>');

}

}

if (bIE) u161.attachEvent("onmouseout", MouseOutu161);
else u161.addEventListener("mouseout", MouseOutu161, true);
function MouseOutu161(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u161',e)) return;
if (true) {

	SetPanelState('u155', 'pd0u155','none','','500','none','','500');

}

}

var u162 = document.getElementById('u162');

var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'center';
var u164 = document.getElementById('u164');

var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'center';
var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'top';
var u167 = document.getElementById('u167');

var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'center';
var u169 = document.getElementById('u169');

if (bIE) u169.attachEvent("onmouseover", MouseOveru169);
else u169.addEventListener("mouseover", MouseOveru169, true);
function MouseOveru169(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u169',e)) return;
if (true) {

	SetPanelState('u155', 'pd2u155','none','','500','none','','500');

}

}
gv_vAlignTable['u169'] = 'top';
var u170 = document.getElementById('u170');

if (bIE) u170.attachEvent("onmouseover", MouseOveru170);
else u170.addEventListener("mouseover", MouseOveru170, true);
function MouseOveru170(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u170',e)) return;
if (true) {

	SetPanelState('u155', 'pd2u155','none','','500','none','','500');

}

}

var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'center';
var u172 = document.getElementById('u172');

var u173 = document.getElementById('u173');

var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'center';
var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'top';
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


if (true) {

	SetPanelState('u172', 'pd1u172','none','','500','none','','500');

	SetPanelState('u138', 'pd0u138','none','','500','none','','500');

	SetPanelState('u155', 'pd0u155','none','','500','none','','500');

	SetPanelState('u2', 'pd1u2','none','','500','none','','500');

	SetPanelState('u19', 'pd0u19','none','','500','none','','500');

	SetPanelState('u36', 'pd0u36','none','','500','none','','500');

	SetPanelState('u53', 'pd0u53','none','','500','none','','500');

	SetPanelState('u70', 'pd0u70','none','','500','none','','500');

	SetPanelState('u87', 'pd0u87','none','','500','none','','500');

	SetPanelState('u104', 'pd0u104','none','','500','none','','500');

	SetPanelState('u121', 'pd0u121','none','','500','none','','500');

	SetPanelState('u189', 'pd0u189','none','','500','none','','500');

SetGlobalVariableValue('$ProdColor', 'Orange');

SetGlobalVariableValue('$ColorCostBulk', '1.03');

SetGlobalVariableValue('$ColorCostDP', '2.96');

SetWidgetRichText('u1', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">' + (GetGlobalVariableValue('$ProdColor')) + '</span></p>');

}

}

if (bIE) u178.attachEvent("onmouseout", MouseOutu178);
else u178.addEventListener("mouseout", MouseOutu178, true);
function MouseOutu178(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u178',e)) return;
if (true) {

	SetPanelState('u172', 'pd0u172','none','','500','none','','500');

}

}

var u179 = document.getElementById('u179');

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

u76.style.cursor = 'pointer';
if (bIE) u76.attachEvent("onclick", Clicku76);
else u76.addEventListener("click", Clicku76, true);
function Clicku76(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u70', 'pd1u70','none','','500','none','','500');

	SetPanelState('u87', 'pd0u87','none','','500','none','','500');

	SetPanelState('u2', 'pd1u2','none','','500','none','','500');

	SetPanelState('u19', 'pd0u19','none','','500','none','','500');

	SetPanelState('u36', 'pd0u36','none','','500','none','','500');

	SetPanelState('u53', 'pd0u53','none','','500','none','','500');

	SetPanelState('u104', 'pd0u104','none','','500','none','','500');

	SetPanelState('u121', 'pd0u121','none','','500','none','','500');

	SetPanelState('u155', 'pd0u155','none','','500','none','','500');

	SetPanelState('u172', 'pd0u172','none','','500','none','','500');

	SetPanelState('u138', 'pd0u138','none','','500','none','','500');

	SetPanelState('u189', 'pd0u189','none','','500','none','','500');

SetGlobalVariableValue('$ProdColor', 'Green');

SetGlobalVariableValue('$ColorCostBulk', '1.03');

SetGlobalVariableValue('$ColorCostDP', '2.96');

SetWidgetRichText('u1', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">' + (GetGlobalVariableValue('$ProdColor')) + '</span></p>');

}

}

if (bIE) u76.attachEvent("onmouseout", MouseOutu76);
else u76.addEventListener("mouseout", MouseOutu76, true);
function MouseOutu76(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u76',e)) return;
if (true) {

	SetPanelState('u70', 'pd0u70','none','','500','none','','500');

}

}

var u77 = document.getElementById('u77');

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'center';
var u79 = document.getElementById('u79');

var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'center';
var u181 = document.getElementById('u181');

var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'center';
var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'top';
var u184 = document.getElementById('u184');

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

	SetPanelState('u172', 'pd2u172','none','','500','none','','500');

}

}
gv_vAlignTable['u186'] = 'top';
var u187 = document.getElementById('u187');

if (bIE) u187.attachEvent("onmouseover", MouseOveru187);
else u187.addEventListener("mouseover", MouseOveru187, true);
function MouseOveru187(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u187',e)) return;
if (true) {

	SetPanelState('u172', 'pd2u172','none','','500','none','','500');

}

}

var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'center';
var u189 = document.getElementById('u189');

var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'top';
var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'top';
var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'top';
var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'top';
var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'top';
var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'top';
var u190 = document.getElementById('u190');

var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'center';
var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'top';
var u193 = document.getElementById('u193');

var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'center';
var u195 = document.getElementById('u195');

u195.style.cursor = 'pointer';
if (bIE) u195.attachEvent("onclick", Clicku195);
else u195.addEventListener("click", Clicku195, true);
function Clicku195(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u189', 'pd1u189','none','','500','none','','500');

	SetPanelState('u138', 'pd0u138','none','','500','none','','500');

	SetPanelState('u155', 'pd0u155','none','','500','none','','500');

	SetPanelState('u2', 'pd1u2','none','','500','none','','500');

	SetPanelState('u19', 'pd0u19','none','','500','none','','500');

	SetPanelState('u36', 'pd0u36','none','','500','none','','500');

	SetPanelState('u53', 'pd0u53','none','','500','none','','500');

	SetPanelState('u70', 'pd0u70','none','','500','none','','500');

	SetPanelState('u87', 'pd0u87','none','','500','none','','500');

	SetPanelState('u104', 'pd0u104','none','','500','none','','500');

	SetPanelState('u121', 'pd0u121','none','','500','none','','500');

	SetPanelState('u172', 'pd0u172','none','','500','none','','500');

SetGlobalVariableValue('$ProdColor', 'Sand');

SetGlobalVariableValue('$ColorCostBulk', '1.03');

SetGlobalVariableValue('$ColorCostDP', '2.96');

SetWidgetRichText('u1', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">' + (GetGlobalVariableValue('$ProdColor')) + '</span></p>');

}

}

if (bIE) u195.attachEvent("onmouseout", MouseOutu195);
else u195.addEventListener("mouseout", MouseOutu195, true);
function MouseOutu195(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u195',e)) return;
if (true) {

	SetPanelState('u189', 'pd0u189','none','','500','none','','500');

}

}

var u196 = document.getElementById('u196');

var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'center';
var u198 = document.getElementById('u198');

var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'center';
var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'top';
var u221 = document.getElementById('u221');

u221.style.cursor = 'pointer';
if (bIE) u221.attachEvent("onclick", Clicku221);
else u221.addEventListener("click", Clicku221, true);
function Clicku221(e)
{
windowEvent = e;


if (((GetGlobalVariableValue('$InksFront')) > Number('0')) && ((GetGlobalVariableValue('$InksBack')) > Number('0'))) {

SetGlobalVariableValue('$SidesPrinted', '2');

SetGlobalVariableValue('$BulkStart', '8.22');

SetGlobalVariableValue('$DigitalStart', '23.70');

SetGlobalVariableValue('$InkCostBulk', '' + (((GetGlobalVariableValue('$InksTotal') - GetNum(1)) * GetNum(0.72)).toFixed(GetNum(2))) + '');

SetGlobalVariableValue('$SideCostDP', '3.95');

SetGlobalVariableValue('$SideCostBulk', '1.37');

SetGlobalVariableValue('$BasePriceBulk', '' + ((GetNum(GetGlobalVariableValue('$BulkStart')) + GetNum(GetGlobalVariableValue('$ColorCostBulk')) + GetNum(GetGlobalVariableValue('$InkCostBulk'))).toFixed(GetNum(2))) + '');

SetGlobalVariableValue('$DigitalBase', '' + ((GetNum(GetGlobalVariableValue('$DigitalStart')) + GetNum(GetGlobalVariableValue('$ColorCostDP'))).toFixed(GetNum(2))) + '');

SetWidgetRichText('u223', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">Delivering ' + (GetGlobalVariableValue('$Quantity')) + ' ' + (GetGlobalVariableValue('$ProdColor')) + ' shirts to ' + (GetGlobalVariableValue('$ZIP')) + ' and printing on ' + (GetGlobalVariableValue('$SidesPrinted')) + ' sides.&nbsp; Bulk will cost &#36;' + (GetGlobalVariableValue('$BasePriceBulk')) + ' and Singles will cost &#36;' + (GetGlobalVariableValue('$DigitalBase')) + '</span></p>');

}
else
if (true) {

SetGlobalVariableValue('$SidesPrinted', '1');

SetWidgetRichText('u223', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">Delivering ' + (GetGlobalVariableValue('$Quantity')) + ' ' + (GetGlobalVariableValue('$ProdColor')) + ' shirts to ' + (GetGlobalVariableValue('$ZIP')) + ' and printing on ' + (GetGlobalVariableValue('$SidesPrinted')) + ' sides.</span></p>');

}

}

var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'center';
var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'top';
var u99 = document.getElementById('u99');

var u0 = document.getElementById('u0');
gv_vAlignTable['u0'] = 'top';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'top';
var u2 = document.getElementById('u2');

var u3 = document.getElementById('u3');

var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
var u5 = document.getElementById('u5');

u5.style.cursor = 'pointer';
if (bIE) u5.attachEvent("onclick", Clicku5);
else u5.addEventListener("click", Clicku5, true);
function Clicku5(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2', 'pd0u2','none','','500','none','','500');

}

}

var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u8 = document.getElementById('u8');

u8.style.cursor = 'pointer';
if (bIE) u8.attachEvent("onclick", Clicku8);
else u8.addEventListener("click", Clicku8, true);
function Clicku8(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2', 'pd0u2','none','','500','none','','500');

	SetPanelState('u19', 'pd0u19','none','','500','none','','500');

	SetPanelState('u36', 'pd0u36','none','','500','none','','500');

	SetPanelState('u53', 'pd0u53','none','','500','none','','500');

	SetPanelState('u70', 'pd0u70','none','','500','none','','500');

	SetPanelState('u87', 'pd0u87','none','','500','none','','500');

	SetPanelState('u104', 'pd0u104','none','','500','none','','500');

	SetPanelState('u121', 'pd0u121','none','','500','none','','500');

	SetPanelState('u155', 'pd0u155','none','','500','none','','500');

	SetPanelState('u172', 'pd0u172','none','','500','none','','500');

	SetPanelState('u189', 'pd0u189','none','','500','none','','500');

	SetPanelState('u138', 'pd0u138','none','','500','none','','500');

SetGlobalVariableValue('$ProdColor', 'White');

SetGlobalVariableValue('$ColorCostBulk', '0');

SetGlobalVariableValue('$ColorCostDP', '0');

SetWidgetRichText('u1', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">' + (GetGlobalVariableValue('$ProdColor')) + '</span></p>');

}

}

if (bIE) u8.attachEvent("onmouseout", MouseOutu8);
else u8.addEventListener("mouseout", MouseOutu8, true);
function MouseOutu8(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u8',e)) return;
if (true) {

	SetPanelState('u2', 'pd1u2','none','','500','none','','500');

}

}

var u9 = document.getElementById('u9');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u11 = document.getElementById('u11');

if (bIE) u11.attachEvent("onmouseover", MouseOveru11);
else u11.addEventListener("mouseover", MouseOveru11, true);
function MouseOveru11(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u11',e)) return;
if (true) {

	SetPanelState('u2', 'pd2u2','none','','500','none','','500');

}

}

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u13 = document.getElementById('u13');

if (bIE) u13.attachEvent("onmouseover", MouseOveru13);
else u13.addEventListener("mouseover", MouseOveru13, true);
function MouseOveru13(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u13',e)) return;
if (true) {

	SetPanelState('u2', 'pd2u2','none','','500','none','','500');

}

}
gv_vAlignTable['u13'] = 'top';
var u14 = document.getElementById('u14');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u16 = document.getElementById('u16');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u19 = document.getElementById('u19');

var u110 = document.getElementById('u110');

u110.style.cursor = 'pointer';
if (bIE) u110.attachEvent("onclick", Clicku110);
else u110.addEventListener("click", Clicku110, true);
function Clicku110(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u104', 'pd1u104','none','','500','none','','500');

	SetPanelState('u70', 'pd0u70','none','','500','none','','500');

	SetPanelState('u87', 'pd0u87','none','','500','none','','500');

	SetPanelState('u2', 'pd1u2','none','','500','none','','500');

	SetPanelState('u19', 'pd0u19','none','','500','none','','500');

	SetPanelState('u36', 'pd0u36','none','','500','none','','500');

	SetPanelState('u53', 'pd0u53','none','','500','none','','500');

	SetPanelState('u121', 'pd0u121','none','','500','none','','500');

	SetPanelState('u155', 'pd0u155','none','','500','none','','500');

	SetPanelState('u172', 'pd0u172','none','','500','none','','500');

	SetPanelState('u138', 'pd0u138','none','','500','none','','500');

	SetPanelState('u189', 'pd0u189','none','','500','none','','500');

SetGlobalVariableValue('$ProdColor', 'Pink');

SetGlobalVariableValue('$ColorCostBulk', '1.03');

SetGlobalVariableValue('$ColorCostDP', '2.96');

SetWidgetRichText('u1', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">' + (GetGlobalVariableValue('$ProdColor')) + '</span></p>');

}

}

if (bIE) u110.attachEvent("onmouseout", MouseOutu110);
else u110.addEventListener("mouseout", MouseOutu110, true);
function MouseOutu110(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u110',e)) return;
if (true) {

	SetPanelState('u104', 'pd0u104','none','','500','none','','500');

}

}

var u111 = document.getElementById('u111');

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'center';
var u113 = document.getElementById('u113');

var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'center';
var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'top';
var u116 = document.getElementById('u116');

var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
var u20 = document.getElementById('u20');

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u23 = document.getElementById('u23');

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u25 = document.getElementById('u25');

u25.style.cursor = 'pointer';
if (bIE) u25.attachEvent("onclick", Clicku25);
else u25.addEventListener("click", Clicku25, true);
function Clicku25(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u19', 'pd1u19','none','','500','none','','500');

	SetPanelState('u2', 'pd1u2','none','','500','none','','500');

	SetPanelState('u36', 'pd0u36','none','','500','none','','500');

	SetPanelState('u53', 'pd0u53','none','','500','none','','500');

	SetPanelState('u70', 'pd0u70','none','','500','none','','500');

	SetPanelState('u87', 'pd0u87','none','','500','none','','500');

	SetPanelState('u104', 'pd0u104','none','','500','none','','500');

	SetPanelState('u121', 'pd0u121','none','','500','none','','500');

	SetPanelState('u155', 'pd0u155','none','','500','none','','500');

	SetPanelState('u172', 'pd0u172','none','','500','none','','500');

	SetPanelState('u189', 'pd0u189','none','','500','none','','500');

	SetPanelState('u138', 'pd0u138','none','','500','none','','500');

SetGlobalVariableValue('$ProdColor', 'Blue');

SetGlobalVariableValue('$ColorCostBulk', '1.03');

SetGlobalVariableValue('$ColorCostDP', '2.96');

SetWidgetRichText('u1', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">' + (GetGlobalVariableValue('$ProdColor')) + '</span></p>');

}

}

if (bIE) u25.attachEvent("onmouseout", MouseOutu25);
else u25.addEventListener("mouseout", MouseOutu25, true);
function MouseOutu25(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u25',e)) return;
if (true) {

	SetPanelState('u19', 'pd0u19','none','','500','none','','500');

}

}

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
windowEvent = e;


if (true) {

SetGlobalVariableValue('$InksFront', GetSelectedOption('u206'));

SetGlobalVariableValue('$InksBack', GetSelectedOption('u208'));

SetGlobalVariableValue('$InksTotal', '' + (GetNum(GetGlobalVariableValue('$InksFront')) + GetNum(GetGlobalVariableValue('$InksBack'))) + '');

SetWidgetRichText('u212', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">' + (GetGlobalVariableValue('$InksFront')) + '</span></p>');

SetWidgetRichText('u213', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">' + (GetGlobalVariableValue('$InksBack')) + '</span></p>');

SetWidgetRichText('u217', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">' + (GetGlobalVariableValue('$InksTotal')) + '</span></p>');

}

}

if (bIE) u206.attachEvent("onblur", LostFocusu206);
else u206.addEventListener("blur", LostFocusu206, true);
function LostFocusu206(e)
{
windowEvent = e;


if (((GetSelectedOption('u206')) == ('0')) && ((GetSelectedOption('u208')) != ('0'))) {

SetGlobalVariableValue('$SidesPrinted', '1');

}
else
if (((GetSelectedOption('u206')) != ('0')) && ((GetSelectedOption('u208')) == ('0'))) {

SetGlobalVariableValue('$SidesPrinted', '1');

}
else
if (true) {

SetGlobalVariableValue('$SidesPrinted', '2');

}

}

var u207 = document.getElementById('u207');

if (bIE) u207.attachEvent("onblur", LostFocusu207);
else u207.addEventListener("blur", LostFocusu207, true);
function LostFocusu207(e)
{
windowEvent = e;


if (true) {

SetGlobalVariableValue('$Quantity', GetWidgetFormText('u207'));

}

}

var u208 = document.getElementById('u208');

if (bIE) u208.attachEvent("onchange", Changeu208);
else u208.addEventListener("change", Changeu208, true);
function Changeu208(e)
{
windowEvent = e;


if (true) {

SetGlobalVariableValue('$InksFront', GetSelectedOption('u206'));

SetGlobalVariableValue('$InksBack', GetSelectedOption('u208'));

SetGlobalVariableValue('$InksTotal', '' + (GetNum(GetGlobalVariableValue('$InksFront')) + GetNum(GetGlobalVariableValue('$InksBack'))) + '');

SetWidgetRichText('u212', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">' + (GetGlobalVariableValue('$InksFront')) + '</span></p>');

SetWidgetRichText('u213', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">' + (GetGlobalVariableValue('$InksBack')) + '</span></p>');

SetWidgetRichText('u217', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">' + (GetGlobalVariableValue('$InksTotal')) + '</span></p>');

}

}

var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'top';
var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'center';
var u121 = document.getElementById('u121');

var u122 = document.getElementById('u122');

var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'center';
var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'top';
var u125 = document.getElementById('u125');

var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'center';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u31 = document.getElementById('u31');

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u33 = document.getElementById('u33');

if (bIE) u33.attachEvent("onmouseover", MouseOveru33);
else u33.addEventListener("mouseover", MouseOveru33, true);
function MouseOveru33(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u33',e)) return;
if (true) {

	SetPanelState('u19', 'pd2u19','none','','500','none','','500');

}

}
gv_vAlignTable['u33'] = 'top';
var u34 = document.getElementById('u34');

if (bIE) u34.attachEvent("onmouseover", MouseOveru34);
else u34.addEventListener("mouseover", MouseOveru34, true);
function MouseOveru34(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u34',e)) return;
if (true) {

	SetPanelState('u19', 'pd2u19','none','','500','none','','500');

}

}

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u36 = document.getElementById('u36');

var u37 = document.getElementById('u37');

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'top';
var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'top';
var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'top';
var u219 = document.getElementById('u219');

if (bIE) u219.attachEvent("onblur", LostFocusu219);
else u219.addEventListener("blur", LostFocusu219, true);
function LostFocusu219(e)
{
windowEvent = e;


if (true) {

SetGlobalVariableValue('$ZIP', GetWidgetFormText('u219'));

}

}

var u201 = document.getElementById('u201');

var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'center';
var u203 = document.getElementById('u203');

if (bIE) u203.attachEvent("onmouseover", MouseOveru203);
else u203.addEventListener("mouseover", MouseOveru203, true);
function MouseOveru203(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u203',e)) return;
if (true) {

	SetPanelState('u189', 'pd2u189','none','','500','none','','500');

}

}
gv_vAlignTable['u203'] = 'top';
var u204 = document.getElementById('u204');

if (bIE) u204.attachEvent("onmouseover", MouseOveru204);
else u204.addEventListener("mouseover", MouseOveru204, true);
function MouseOveru204(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u204',e)) return;
if (true) {

	SetPanelState('u189', 'pd2u189','none','','500','none','','500');

}

}

var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'center';
var u40 = document.getElementById('u40');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u42 = document.getElementById('u42');

u42.style.cursor = 'pointer';
if (bIE) u42.attachEvent("onclick", Clicku42);
else u42.addEventListener("click", Clicku42, true);
function Clicku42(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u36', 'pd1u36','none','','500','none','','500');

	SetPanelState('u2', 'pd1u2','none','','500','none','','500');

	SetPanelState('u19', 'pd0u19','none','','500','none','','500');

	SetPanelState('u53', 'pd0u53','none','','500','none','','500');

	SetPanelState('u70', 'pd0u70','none','','500','none','','500');

	SetPanelState('u87', 'pd0u87','none','','500','none','','500');

	SetPanelState('u104', 'pd0u104','none','','500','none','','500');

	SetPanelState('u121', 'pd0u121','none','','500','none','','500');

	SetPanelState('u155', 'pd0u155','none','','500','none','','500');

	SetPanelState('u172', 'pd0u172','none','','500','none','','500');

	SetPanelState('u138', 'pd0u138','none','','500','none','','500');

	SetPanelState('u189', 'pd0u189','none','','500','none','','500');

SetGlobalVariableValue('$ProdColor', 'Red');

SetGlobalVariableValue('$ColorCostBulk', '1.03');

SetGlobalVariableValue('$ColorCostDP', '2.96');

SetWidgetRichText('u1', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">' + (GetGlobalVariableValue('$ProdColor')) + '</span></p>');

}

}

if (bIE) u42.attachEvent("onmouseout", MouseOutu42);
else u42.addEventListener("mouseout", MouseOutu42, true);
function MouseOutu42(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u42',e)) return;
if (true) {

	SetPanelState('u36', 'pd0u36','none','','500','none','','500');

}

}

var u43 = document.getElementById('u43');

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'center';
var u45 = document.getElementById('u45');

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'center';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u48 = document.getElementById('u48');

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u50 = document.getElementById('u50');

if (bIE) u50.attachEvent("onmouseover", MouseOveru50);
else u50.addEventListener("mouseover", MouseOveru50, true);
function MouseOveru50(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u50',e)) return;
if (true) {

	SetPanelState('u36', 'pd2u36','none','','500','none','','500');

}

}
gv_vAlignTable['u50'] = 'top';
var u51 = document.getElementById('u51');

if (bIE) u51.attachEvent("onmouseover", MouseOveru51);
else u51.addEventListener("mouseover", MouseOveru51, true);
function MouseOveru51(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u51',e)) return;
if (true) {

	SetPanelState('u36', 'pd2u36','none','','500','none','','500');

}

}

var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'center';
var u53 = document.getElementById('u53');

var u54 = document.getElementById('u54');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
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

	SetPanelState('u53', 'pd1u53','none','','500','none','','500');

	SetPanelState('u2', 'pd1u2','none','','500','none','','500');

	SetPanelState('u19', 'pd0u19','none','','500','none','','500');

	SetPanelState('u36', 'pd0u36','none','','500','none','','500');

	SetPanelState('u70', 'pd0u70','none','','500','none','','500');

	SetPanelState('u87', 'pd0u87','none','','500','none','','500');

	SetPanelState('u104', 'pd0u104','none','','500','none','','500');

	SetPanelState('u121', 'pd0u121','none','','500','none','','500');

	SetPanelState('u155', 'pd0u155','none','','500','none','','500');

	SetPanelState('u172', 'pd0u172','none','','500','none','','500');

	SetPanelState('u138', 'pd0u138','none','','500','none','','500');

	SetPanelState('u189', 'pd0u189','none','','500','none','','500');

SetGlobalVariableValue('$ProdColor', 'Black');

SetGlobalVariableValue('$ColorCostBulk', '1.03');

SetGlobalVariableValue('$ColorCostDP', '2.96');

SetWidgetRichText('u1', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">' + (GetGlobalVariableValue('$ProdColor')) + '</span></p>');

}

}

if (bIE) u59.attachEvent("onmouseout", MouseOutu59);
else u59.addEventListener("mouseout", MouseOutu59, true);
function MouseOutu59(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u59',e)) return;
if (true) {

	SetPanelState('u53', 'pd0u53','none','','500','none','','500');

}

}

var u60 = document.getElementById('u60');

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'center';
var u62 = document.getElementById('u62');

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'center';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u65 = document.getElementById('u65');

var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'center';
var u67 = document.getElementById('u67');

if (bIE) u67.attachEvent("onmouseover", MouseOveru67);
else u67.addEventListener("mouseover", MouseOveru67, true);
function MouseOveru67(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u67',e)) return;
if (true) {

	SetPanelState('u53', 'pd2u53','none','','500','none','','500');

}

}
gv_vAlignTable['u67'] = 'top';
var u68 = document.getElementById('u68');

if (bIE) u68.attachEvent("onmouseover", MouseOveru68);
else u68.addEventListener("mouseover", MouseOveru68, true);
function MouseOveru68(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u68',e)) return;
if (true) {

	SetPanelState('u53', 'pd2u53','none','','500','none','','500');

}

}

var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
if (window.OnLoad) OnLoad();
