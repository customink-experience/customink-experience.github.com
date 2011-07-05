
var PageName = 'Four';
var PageId = '15ad4fd4957746b68e0670f0baf44405'
var PageUrl = 'Four.html'
document.title = 'Four';
var PageNotes = 
{
"pageName":"Four",
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

var $SavingsAmt = '';

var $SavingsPct = '';

var $Difference = '';

var $WholePct = '';

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
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&BasePriceBulk=' + encodeURIComponent($BasePriceBulk) + '&InksBack=' + encodeURIComponent($InksBack) + '&InksFront=' + encodeURIComponent($InksFront) + '&InksTotal=' + encodeURIComponent($InksTotal) + '&ProdColor=' + encodeURIComponent($ProdColor) + '&ZIP=' + encodeURIComponent($ZIP) + '&Quantity=' + encodeURIComponent($Quantity) + '&SidesPrinted=' + encodeURIComponent($SidesPrinted) + '&TotalPrice=' + encodeURIComponent($TotalPrice) + '&DigitalStart=' + encodeURIComponent($DigitalStart) + '&DigitalBase=' + encodeURIComponent($DigitalBase) + '&DigitalTotal=' + encodeURIComponent($DigitalTotal) + '&SideCostDP=' + encodeURIComponent($SideCostDP) + '&ColorCostDP=' + encodeURIComponent($ColorCostDP) + '&BulkStart=' + encodeURIComponent($BulkStart) + '&ColorCostBulk=' + encodeURIComponent($ColorCostBulk) + '&SideCostBulk=' + encodeURIComponent($SideCostBulk) + '&InkCostBulk=' + encodeURIComponent($InkCostBulk) + '&SavingsAmt=' + encodeURIComponent($SavingsAmt) + '&SavingsPct=' + encodeURIComponent($SavingsPct) + '&Difference=' + encodeURIComponent($Difference) + '&WholePct=' + encodeURIComponent($WholePct) + '&CSUM=1';
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
  value = value.replace(/\[\[SavingsAmt\]\]/g, $SavingsAmt);
  value = value.replace(/\[\[SavingsPct\]\]/g, $SavingsPct);
  value = value.replace(/\[\[Difference\]\]/g, $Difference);
  value = value.replace(/\[\[WholePct\]\]/g, $WholePct);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  value = value.replace(/\[\[GenDay\]\]/g, '13');
  value = value.replace(/\[\[GenMonth\]\]/g, '5');
  value = value.replace(/\[\[GenMonthName\]\]/g, 'May');
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

if ((GetGlobalVariableValue('$ProdColor')) == ('White')) {

	SetPanelState('u13', 'pd1u13','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('$ProdColor')) == ('Blue')) {

	SetPanelState('u30', 'pd1u30','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('$ProdColor')) == ('Red')) {

	SetPanelState('u47', 'pd1u47','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('$ProdColor')) == ('Black')) {

	SetPanelState('u64', 'pd1u64','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('$ProdColor')) == ('Green')) {

	SetPanelState('u81', 'pd1u81','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('$ProdColor')) == ('Royal')) {

	SetPanelState('u98', 'pd1u98','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('$ProdColor')) == ('Pink')) {

	SetPanelState('u115', 'pd1u115','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('$ProdColor')) == ('Gray')) {

	SetPanelState('u132', 'pd1u132','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('$ProdColor')) == ('Yellow')) {

	SetPanelState('u149', 'pd1u149','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('$ProdColor')) == ('Purple')) {

	SetPanelState('u166', 'pd1u166','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('$ProdColor')) == ('Orange')) {

	SetPanelState('u183', 'pd1u183','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('$ProdColor')) == ('Sand')) {

	SetPanelState('u200', 'pd1u200','none','',500,'none','',500);

}

}

var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'center';
var u231 = document.getElementById('u231');

var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'center';
var u70 = document.getElementById('u70');

u70.style.cursor = 'pointer';
if (bIE) u70.attachEvent("onclick", Clicku70);
else u70.addEventListener("click", Clicku70, true);
function Clicku70(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u64', 'pd1u64','none','',500,'none','',500);

	SetPanelState('u13', 'pd0u13','none','',500,'none','',500);

	SetPanelState('u30', 'pd0u30','none','',500,'none','',500);

	SetPanelState('u47', 'pd0u47','none','',500,'none','',500);

	SetPanelState('u81', 'pd0u81','none','',500,'none','',500);

	SetPanelState('u98', 'pd0u98','none','',500,'none','',500);

	SetPanelState('u115', 'pd0u115','none','',500,'none','',500);

	SetPanelState('u132', 'pd0u132','none','',500,'none','',500);

	SetPanelState('u166', 'pd0u166','none','',500,'none','',500);

	SetPanelState('u183', 'pd0u183','none','',500,'none','',500);

	SetPanelState('u149', 'pd0u149','none','',500,'none','',500);

	SetPanelState('u200', 'pd0u200','none','',500,'none','',500);

SetGlobalVariableValue('$ProdColor', 'Black');

SetGlobalVariableValue('$ColorCostBulk', '1.03');

SetGlobalVariableValue('$ColorCostDP', '2.96');

	self.location.href="Two.html" + GetQuerystring();

}

}

if (bIE) u70.attachEvent("onmouseout", MouseOutu70);
else u70.addEventListener("mouseout", MouseOutu70, true);
function MouseOutu70(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u70',e)) return;
if (true) {

	SetPanelState('u64', 'pd0u64','none','',500,'none','',500);

}

}

var u71 = document.getElementById('u71');

var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'center';
var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'top';
var u102 = document.getElementById('u102');

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

	SetPanelState('u98', 'pd1u98','none','',500,'none','',500);

	SetPanelState('u81', 'pd0u81','none','',500,'none','',500);

	SetPanelState('u13', 'pd0u13','none','',500,'none','',500);

	SetPanelState('u30', 'pd0u30','none','',500,'none','',500);

	SetPanelState('u47', 'pd0u47','none','',500,'none','',500);

	SetPanelState('u64', 'pd0u64','none','',500,'none','',500);

	SetPanelState('u115', 'pd0u115','none','',500,'none','',500);

	SetPanelState('u132', 'pd0u132','none','',500,'none','',500);

	SetPanelState('u166', 'pd0u166','none','',500,'none','',500);

	SetPanelState('u183', 'pd0u183','none','',500,'none','',500);

	SetPanelState('u149', 'pd0u149','none','',500,'none','',500);

	SetPanelState('u200', 'pd0u200','none','',500,'none','',500);

SetGlobalVariableValue('$ProdColor', 'Royal');

SetGlobalVariableValue('$ColorCostBulk', '1.03');

SetGlobalVariableValue('$ColorCostDP', '2.96');

	self.location.href="Two.html" + GetQuerystring();

}

}

if (bIE) u104.attachEvent("onmouseout", MouseOutu104);
else u104.addEventListener("mouseout", MouseOutu104, true);
function MouseOutu104(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u104',e)) return;
if (true) {

	SetPanelState('u98', 'pd0u98','none','',500,'none','',500);

}

}

var u105 = document.getElementById('u105');

var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'center';
var u107 = document.getElementById('u107');

var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'center';
var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'top';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'center';
var u81 = document.getElementById('u81');

var u82 = document.getElementById('u82');

var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'center';
var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'top';
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


if (true) {

	SetPanelState('u81', 'pd1u81','none','',500,'none','',500);

	SetPanelState('u98', 'pd0u98','none','',500,'none','',500);

	SetPanelState('u13', 'pd0u13','none','',500,'none','',500);

	SetPanelState('u30', 'pd0u30','none','',500,'none','',500);

	SetPanelState('u47', 'pd0u47','none','',500,'none','',500);

	SetPanelState('u64', 'pd0u64','none','',500,'none','',500);

	SetPanelState('u115', 'pd0u115','none','',500,'none','',500);

	SetPanelState('u132', 'pd0u132','none','',500,'none','',500);

	SetPanelState('u166', 'pd0u166','none','',500,'none','',500);

	SetPanelState('u183', 'pd0u183','none','',500,'none','',500);

	SetPanelState('u149', 'pd0u149','none','',500,'none','',500);

	SetPanelState('u200', 'pd0u200','none','',500,'none','',500);

SetGlobalVariableValue('$ProdColor', 'Green');

SetGlobalVariableValue('$ColorCostBulk', '1.03');

SetGlobalVariableValue('$ColorCostDP', '2.96');

	self.location.href="Two.html" + GetQuerystring();

}

}

if (bIE) u87.attachEvent("onmouseout", MouseOutu87);
else u87.addEventListener("mouseout", MouseOutu87, true);
function MouseOutu87(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u87',e)) return;
if (true) {

	SetPanelState('u81', 'pd0u81','none','',500,'none','',500);

}

}

var u88 = document.getElementById('u88');

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'center';
var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'top';
var u119 = document.getElementById('u119');

var u90 = document.getElementById('u90');

var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'center';
var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u93 = document.getElementById('u93');

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

	SetPanelState('u81', 'pd2u81','none','',500,'none','',500);

}

}
gv_vAlignTable['u95'] = 'top';
var u96 = document.getElementById('u96');

if (bIE) u96.attachEvent("onmouseover", MouseOveru96);
else u96.addEventListener("mouseover", MouseOveru96, true);
function MouseOveru96(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u96',e)) return;
if (true) {

	SetPanelState('u81', 'pd2u81','none','',500,'none','',500);

}

}

var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'center';
var u98 = document.getElementById('u98');

var u127 = document.getElementById('u127');

var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'center';
var u129 = document.getElementById('u129');

if (bIE) u129.attachEvent("onmouseover", MouseOveru129);
else u129.addEventListener("mouseover", MouseOveru129, true);
function MouseOveru129(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u129',e)) return;
if (true) {

	SetPanelState('u115', 'pd2u115','none','',500,'none','',500);

}

}
gv_vAlignTable['u129'] = 'top';
var u130 = document.getElementById('u130');

if (bIE) u130.attachEvent("onmouseover", MouseOveru130);
else u130.addEventListener("mouseover", MouseOveru130, true);
function MouseOveru130(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u130',e)) return;
if (true) {

	SetPanelState('u115', 'pd2u115','none','',500,'none','',500);

}

}

var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'center';
var u132 = document.getElementById('u132');

var u133 = document.getElementById('u133');

var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'center';
var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'top';
var u136 = document.getElementById('u136');

var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'center';
var u138 = document.getElementById('u138');

u138.style.cursor = 'pointer';
if (bIE) u138.attachEvent("onclick", Clicku138);
else u138.addEventListener("click", Clicku138, true);
function Clicku138(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u132', 'pd1u132','none','',500,'none','',500);

	SetPanelState('u81', 'pd0u81','none','',500,'none','',500);

	SetPanelState('u98', 'pd0u98','none','',500,'none','',500);

	SetPanelState('u13', 'pd0u13','none','',500,'none','',500);

	SetPanelState('u30', 'pd0u30','none','',500,'none','',500);

	SetPanelState('u47', 'pd0u47','none','',500,'none','',500);

	SetPanelState('u64', 'pd0u64','none','',500,'none','',500);

	SetPanelState('u115', 'pd0u115','none','',500,'none','',500);

	SetPanelState('u166', 'pd0u166','none','',500,'none','',500);

	SetPanelState('u183', 'pd0u183','none','',500,'none','',500);

	SetPanelState('u149', 'pd0u149','none','',500,'none','',500);

	SetPanelState('u200', 'pd0u200','none','',500,'none','',500);

SetGlobalVariableValue('$ProdColor', 'Gray');

SetGlobalVariableValue('$ColorCostBulk', '1.03');

SetGlobalVariableValue('$ColorCostDP', '2.96');

	self.location.href="Two.html" + GetQuerystring();

}

}

if (bIE) u138.attachEvent("onmouseout", MouseOutu138);
else u138.addEventListener("mouseout", MouseOutu138, true);
function MouseOutu138(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u138',e)) return;
if (true) {

	SetPanelState('u132', 'pd0u132','none','',500,'none','',500);

}

}

var u139 = document.getElementById('u139');

var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'center';
var u141 = document.getElementById('u141');

var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'center';
var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'top';
var u144 = document.getElementById('u144');

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

	SetPanelState('u132', 'pd2u132','none','',500,'none','',500);

}

}
gv_vAlignTable['u146'] = 'top';
var u147 = document.getElementById('u147');

if (bIE) u147.attachEvent("onmouseover", MouseOveru147);
else u147.addEventListener("mouseover", MouseOveru147, true);
function MouseOveru147(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u147',e)) return;
if (true) {

	SetPanelState('u132', 'pd2u132','none','',500,'none','',500);

}

}

var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'center';
var u149 = document.getElementById('u149');

var u150 = document.getElementById('u150');

var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'center';
var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'top';
var u153 = document.getElementById('u153');

var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'center';
var u155 = document.getElementById('u155');

u155.style.cursor = 'pointer';
if (bIE) u155.attachEvent("onclick", Clicku155);
else u155.addEventListener("click", Clicku155, true);
function Clicku155(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u149', 'pd1u149','none','',500,'none','',500);

	SetPanelState('u166', 'pd0u166','none','',500,'none','',500);

	SetPanelState('u13', 'pd0u13','none','',500,'none','',500);

	SetPanelState('u30', 'pd0u30','none','',500,'none','',500);

	SetPanelState('u47', 'pd0u47','none','',500,'none','',500);

	SetPanelState('u64', 'pd0u64','none','',500,'none','',500);

	SetPanelState('u81', 'pd0u81','none','',500,'none','',500);

	SetPanelState('u98', 'pd0u98','none','',500,'none','',500);

	SetPanelState('u115', 'pd0u115','none','',500,'none','',500);

	SetPanelState('u132', 'pd0u132','none','',500,'none','',500);

	SetPanelState('u183', 'pd0u183','none','',500,'none','',500);

	SetPanelState('u200', 'pd0u200','none','',500,'none','',500);

SetGlobalVariableValue('$ProdColor', 'Yellow');

SetGlobalVariableValue('$ColorCostBulk', '1.03');

SetGlobalVariableValue('$ColorCostDP', '2.96');

	self.location.href="Two.html" + GetQuerystring();

}

}

if (bIE) u155.attachEvent("onmouseout", MouseOutu155);
else u155.addEventListener("mouseout", MouseOutu155, true);
function MouseOutu155(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u155',e)) return;
if (true) {

	SetPanelState('u149', 'pd0u149','none','',500,'none','',500);

}

}

var u156 = document.getElementById('u156');

var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'center';
var u158 = document.getElementById('u158');

var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'center';
var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'top';
var u161 = document.getElementById('u161');

var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'center';
var u163 = document.getElementById('u163');

if (bIE) u163.attachEvent("onmouseover", MouseOveru163);
else u163.addEventListener("mouseover", MouseOveru163, true);
function MouseOveru163(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u163',e)) return;
if (true) {

	SetPanelState('u149', 'pd2u149','none','',500,'none','',500);

}

}
gv_vAlignTable['u163'] = 'top';
var u164 = document.getElementById('u164');

if (bIE) u164.attachEvent("onmouseover", MouseOveru164);
else u164.addEventListener("mouseover", MouseOveru164, true);
function MouseOveru164(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u164',e)) return;
if (true) {

	SetPanelState('u149', 'pd2u149','none','',500,'none','',500);

}

}

var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'center';
var u166 = document.getElementById('u166');

var u167 = document.getElementById('u167');

var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'center';
var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'top';
var u170 = document.getElementById('u170');

var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'center';
var u172 = document.getElementById('u172');

u172.style.cursor = 'pointer';
if (bIE) u172.attachEvent("onclick", Clicku172);
else u172.addEventListener("click", Clicku172, true);
function Clicku172(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u166', 'pd1u166','none','',500,'none','',500);

	SetPanelState('u149', 'pd0u149','none','',500,'none','',500);

	SetPanelState('u13', 'pd0u13','none','',500,'none','',500);

	SetPanelState('u30', 'pd0u30','none','',500,'none','',500);

	SetPanelState('u47', 'pd0u47','none','',500,'none','',500);

	SetPanelState('u64', 'pd0u64','none','',500,'none','',500);

	SetPanelState('u81', 'pd0u81','none','',500,'none','',500);

	SetPanelState('u98', 'pd0u98','none','',500,'none','',500);

	SetPanelState('u115', 'pd0u115','none','',500,'none','',500);

	SetPanelState('u132', 'pd0u132','none','',500,'none','',500);

	SetPanelState('u183', 'pd0u183','none','',500,'none','',500);

	SetPanelState('u200', 'pd0u200','none','',500,'none','',500);

SetGlobalVariableValue('$ProdColor', 'Purple');

SetGlobalVariableValue('$ColorCostBulk', '1.03');

SetGlobalVariableValue('$ColorCostDP', '2.96');

	self.location.href="Two.html" + GetQuerystring();

}

}

if (bIE) u172.attachEvent("onmouseout", MouseOutu172);
else u172.addEventListener("mouseout", MouseOutu172, true);
function MouseOutu172(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u172',e)) return;
if (true) {

	SetPanelState('u166', 'pd0u166','none','',500,'none','',500);

}

}

var u173 = document.getElementById('u173');

var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'center';
var u175 = document.getElementById('u175');

var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'center';
var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'top';
var u178 = document.getElementById('u178');

var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'center';
var u200 = document.getElementById('u200');

var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
var u73 = document.getElementById('u73');

var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'center';
var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'top';
var u76 = document.getElementById('u76');

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
var u78 = document.getElementById('u78');

if (bIE) u78.attachEvent("onmouseover", MouseOveru78);
else u78.addEventListener("mouseover", MouseOveru78, true);
function MouseOveru78(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u78',e)) return;
if (true) {

	SetPanelState('u64', 'pd2u64','none','',500,'none','',500);

}

}
gv_vAlignTable['u78'] = 'top';
var u79 = document.getElementById('u79');

if (bIE) u79.attachEvent("onmouseover", MouseOveru79);
else u79.addEventListener("mouseover", MouseOveru79, true);
function MouseOveru79(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u79',e)) return;
if (true) {

	SetPanelState('u64', 'pd2u64','none','',500,'none','',500);

}

}

var u180 = document.getElementById('u180');

if (bIE) u180.attachEvent("onmouseover", MouseOveru180);
else u180.addEventListener("mouseover", MouseOveru180, true);
function MouseOveru180(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u180',e)) return;
if (true) {

	SetPanelState('u166', 'pd2u166','none','',500,'none','',500);

}

}
gv_vAlignTable['u180'] = 'top';
var u181 = document.getElementById('u181');

if (bIE) u181.attachEvent("onmouseover", MouseOveru181);
else u181.addEventListener("mouseover", MouseOveru181, true);
function MouseOveru181(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u181',e)) return;
if (true) {

	SetPanelState('u166', 'pd2u166','none','',500,'none','',500);

}

}

var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'center';
var u183 = document.getElementById('u183');

var u184 = document.getElementById('u184');

var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'center';
var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'top';
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

	SetPanelState('u183', 'pd1u183','none','',500,'none','',500);

	SetPanelState('u149', 'pd0u149','none','',500,'none','',500);

	SetPanelState('u166', 'pd0u166','none','',500,'none','',500);

	SetPanelState('u13', 'pd0u13','none','',500,'none','',500);

	SetPanelState('u30', 'pd0u30','none','',500,'none','',500);

	SetPanelState('u47', 'pd0u47','none','',500,'none','',500);

	SetPanelState('u64', 'pd0u64','none','',500,'none','',500);

	SetPanelState('u81', 'pd0u81','none','',500,'none','',500);

	SetPanelState('u98', 'pd0u98','none','',500,'none','',500);

	SetPanelState('u115', 'pd0u115','none','',500,'none','',500);

	SetPanelState('u132', 'pd0u132','none','',500,'none','',500);

	SetPanelState('u200', 'pd0u200','none','',500,'none','',500);

SetGlobalVariableValue('$ProdColor', 'Orange');

SetGlobalVariableValue('$ColorCostBulk', '1.03');

SetGlobalVariableValue('$ColorCostDP', '2.96');

	self.location.href="Two.html" + GetQuerystring();

}

}

if (bIE) u189.attachEvent("onmouseout", MouseOutu189);
else u189.addEventListener("mouseout", MouseOutu189, true);
function MouseOutu189(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u189',e)) return;
if (true) {

	SetPanelState('u183', 'pd0u183','none','',500,'none','',500);

}

}

var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'center';
var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'top';
var u212 = document.getElementById('u212');

var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'center';
var u214 = document.getElementById('u214');

if (bIE) u214.attachEvent("onmouseover", MouseOveru214);
else u214.addEventListener("mouseover", MouseOveru214, true);
function MouseOveru214(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u214',e)) return;
if (true) {

	SetPanelState('u200', 'pd2u200','none','',500,'none','',500);

}

}
gv_vAlignTable['u214'] = 'top';
var u215 = document.getElementById('u215');

if (bIE) u215.attachEvent("onmouseover", MouseOveru215);
else u215.addEventListener("mouseover", MouseOveru215, true);
function MouseOveru215(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u215',e)) return;
if (true) {

	SetPanelState('u200', 'pd2u200','none','',500,'none','',500);

}

}

var u190 = document.getElementById('u190');

var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'center';
var u192 = document.getElementById('u192');

var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'center';
var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'top';
var u195 = document.getElementById('u195');

var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'center';
var u197 = document.getElementById('u197');

if (bIE) u197.attachEvent("onmouseover", MouseOveru197);
else u197.addEventListener("mouseover", MouseOveru197, true);
function MouseOveru197(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u197',e)) return;
if (true) {

	SetPanelState('u183', 'pd2u183','none','',500,'none','',500);

}

}
gv_vAlignTable['u197'] = 'top';
var u198 = document.getElementById('u198');

if (bIE) u198.attachEvent("onmouseover", MouseOveru198);
else u198.addEventListener("mouseover", MouseOveru198, true);
function MouseOveru198(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u198',e)) return;
if (true) {

	SetPanelState('u183', 'pd2u183','none','',500,'none','',500);

}

}

var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'center';
var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'top';
var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'top';
var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'top';
var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'top';
var u224 = document.getElementById('u224');

u224.style.cursor = 'pointer';
if (bIE) u224.attachEvent("onclick", Clicku224);
else u224.addEventListener("click", Clicku224, true);
function Clicku224(e)
{
windowEvent = e;


if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Product Catalog for Short Sleeve T-shirts would be displayed.&nbsp; Not working in this prototype model."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}
gv_vAlignTable['u224'] = 'top';
var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'top';
var u99 = document.getElementById('u99');

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
gv_vAlignTable['u7'] = 'center';
var u8 = document.getElementById('u8');

var u9 = document.getElementById('u9');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u11 = document.getElementById('u11');

u11.style.cursor = 'pointer';
if (bIE) u11.attachEvent("onclick", Clicku11);
else u11.addEventListener("click", Clicku11, true);
function Clicku11(e)
{
windowEvent = e;


if (true) {

	self.location.href="One.html" + GetQuerystring();

}

}

var u12 = document.getElementById('u12');

var u13 = document.getElementById('u13');

var u14 = document.getElementById('u14');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u16 = document.getElementById('u16');

u16.style.cursor = 'pointer';
if (bIE) u16.attachEvent("onclick", Clicku16);
else u16.addEventListener("click", Clicku16, true);
function Clicku16(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u13', 'pd1u13','none','',500,'none','',500);

}

}

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u19 = document.getElementById('u19');

u19.style.cursor = 'pointer';
if (bIE) u19.attachEvent("onclick", Clicku19);
else u19.addEventListener("click", Clicku19, true);
function Clicku19(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u13', 'pd1u13','none','',500,'none','',500);

	SetPanelState('u30', 'pd0u30','none','',500,'none','',500);

	SetPanelState('u47', 'pd0u47','none','',500,'none','',500);

	SetPanelState('u64', 'pd0u64','none','',500,'none','',500);

	SetPanelState('u81', 'pd0u81','none','',500,'none','',500);

	SetPanelState('u98', 'pd0u98','none','',500,'none','',500);

	SetPanelState('u115', 'pd0u115','none','',500,'none','',500);

	SetPanelState('u132', 'pd0u132','none','',500,'none','',500);

	SetPanelState('u166', 'pd0u166','none','',500,'none','',500);

	SetPanelState('u183', 'pd0u183','none','',500,'none','',500);

	SetPanelState('u200', 'pd0u200','none','',500,'none','',500);

	SetPanelState('u149', 'pd0u149','none','',500,'none','',500);

SetGlobalVariableValue('$ProdColor', 'White');

SetGlobalVariableValue('$ColorCostBulk', '0');

SetGlobalVariableValue('$ColorCostDP', '0');

	self.location.href="Two.html" + GetQuerystring();

}

}

if (bIE) u19.attachEvent("onmouseout", MouseOutu19);
else u19.addEventListener("mouseout", MouseOutu19, true);
function MouseOutu19(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u19',e)) return;
if (true) {

	SetPanelState('u13', 'pd0u13','none','',500,'none','',500);

}

}

var u110 = document.getElementById('u110');

var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'center';
var u112 = document.getElementById('u112');

if (bIE) u112.attachEvent("onmouseover", MouseOveru112);
else u112.addEventListener("mouseover", MouseOveru112, true);
function MouseOveru112(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u112',e)) return;
if (true) {

	SetPanelState('u98', 'pd2u98','none','',500,'none','',500);

}

}
gv_vAlignTable['u112'] = 'top';
var u113 = document.getElementById('u113');

if (bIE) u113.attachEvent("onmouseover", MouseOveru113);
else u113.addEventListener("mouseover", MouseOveru113, true);
function MouseOveru113(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u113',e)) return;
if (true) {

	SetPanelState('u98', 'pd2u98','none','',500,'none','',500);

}

}

var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'center';
var u115 = document.getElementById('u115');

var u116 = document.getElementById('u116');

var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
var u20 = document.getElementById('u20');

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u22 = document.getElementById('u22');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u24 = document.getElementById('u24');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u27 = document.getElementById('u27');

if (bIE) u27.attachEvent("onmouseover", MouseOveru27);
else u27.addEventListener("mouseover", MouseOveru27, true);
function MouseOveru27(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u27',e)) return;
if (true) {

	SetPanelState('u13', 'pd2u13','none','',500,'none','',500);

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

	SetPanelState('u13', 'pd2u13','none','',500,'none','',500);

}

}
gv_vAlignTable['u29'] = 'top';
var u206 = document.getElementById('u206');

u206.style.cursor = 'pointer';
if (bIE) u206.attachEvent("onclick", Clicku206);
else u206.addEventListener("click", Clicku206, true);
function Clicku206(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u200', 'pd1u200','none','',500,'none','',500);

	SetPanelState('u149', 'pd0u149','none','',500,'none','',500);

	SetPanelState('u166', 'pd0u166','none','',500,'none','',500);

	SetPanelState('u13', 'pd0u13','none','',500,'none','',500);

	SetPanelState('u30', 'pd0u30','none','',500,'none','',500);

	SetPanelState('u47', 'pd0u47','none','',500,'none','',500);

	SetPanelState('u64', 'pd0u64','none','',500,'none','',500);

	SetPanelState('u81', 'pd0u81','none','',500,'none','',500);

	SetPanelState('u98', 'pd0u98','none','',500,'none','',500);

	SetPanelState('u115', 'pd0u115','none','',500,'none','',500);

	SetPanelState('u132', 'pd0u132','none','',500,'none','',500);

	SetPanelState('u183', 'pd0u183','none','',500,'none','',500);

SetGlobalVariableValue('$ProdColor', 'Sand');

SetGlobalVariableValue('$ColorCostBulk', '1.03');

SetGlobalVariableValue('$ColorCostDP', '2.96');

	self.location.href="Two.html" + GetQuerystring();

}

}

if (bIE) u206.attachEvent("onmouseout", MouseOutu206);
else u206.addEventListener("mouseout", MouseOutu206, true);
function MouseOutu206(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u206',e)) return;
if (true) {

	SetPanelState('u200', 'pd0u200','none','',500,'none','',500);

}

}

var u207 = document.getElementById('u207');

var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'center';
var u209 = document.getElementById('u209');

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

	SetPanelState('u115', 'pd1u115','none','',500,'none','',500);

	SetPanelState('u81', 'pd0u81','none','',500,'none','',500);

	SetPanelState('u98', 'pd0u98','none','',500,'none','',500);

	SetPanelState('u13', 'pd0u13','none','',500,'none','',500);

	SetPanelState('u30', 'pd0u30','none','',500,'none','',500);

	SetPanelState('u47', 'pd0u47','none','',500,'none','',500);

	SetPanelState('u64', 'pd0u64','none','',500,'none','',500);

	SetPanelState('u132', 'pd0u132','none','',500,'none','',500);

	SetPanelState('u166', 'pd0u166','none','',500,'none','',500);

	SetPanelState('u183', 'pd0u183','none','',500,'none','',500);

	SetPanelState('u149', 'pd0u149','none','',500,'none','',500);

	SetPanelState('u200', 'pd0u200','none','',500,'none','',500);

SetGlobalVariableValue('$ProdColor', 'Pink');

SetGlobalVariableValue('$ColorCostBulk', '1.03');

SetGlobalVariableValue('$ColorCostDP', '2.96');

	self.location.href="Two.html" + GetQuerystring();

}

}

if (bIE) u121.attachEvent("onmouseout", MouseOutu121);
else u121.addEventListener("mouseout", MouseOutu121, true);
function MouseOutu121(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u121',e)) return;
if (true) {

	SetPanelState('u115', 'pd0u115','none','',500,'none','',500);

}

}

var u122 = document.getElementById('u122');

var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'center';
var u124 = document.getElementById('u124');

var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'center';
var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'top';
var u30 = document.getElementById('u30');

var u31 = document.getElementById('u31');

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u34 = document.getElementById('u34');

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u36 = document.getElementById('u36');

u36.style.cursor = 'pointer';
if (bIE) u36.attachEvent("onclick", Clicku36);
else u36.addEventListener("click", Clicku36, true);
function Clicku36(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u30', 'pd1u30','none','',500,'none','',500);

	SetPanelState('u13', 'pd0u13','none','',500,'none','',500);

	SetPanelState('u47', 'pd0u47','none','',500,'none','',500);

	SetPanelState('u64', 'pd0u64','none','',500,'none','',500);

	SetPanelState('u81', 'pd0u81','none','',500,'none','',500);

	SetPanelState('u98', 'pd0u98','none','',500,'none','',500);

	SetPanelState('u115', 'pd0u115','none','',500,'none','',500);

	SetPanelState('u132', 'pd0u132','none','',500,'none','',500);

	SetPanelState('u166', 'pd0u166','none','',500,'none','',500);

	SetPanelState('u183', 'pd0u183','none','',500,'none','',500);

	SetPanelState('u200', 'pd0u200','none','',500,'none','',500);

	SetPanelState('u149', 'pd0u149','none','',500,'none','',500);

SetGlobalVariableValue('$ProdColor', 'Blue');

SetGlobalVariableValue('$ColorCostBulk', '1.03');

SetGlobalVariableValue('$ColorCostDP', '2.96');

	self.location.href="Two.html" + GetQuerystring();

}

}

if (bIE) u36.attachEvent("onmouseout", MouseOutu36);
else u36.addEventListener("mouseout", MouseOutu36, true);
function MouseOutu36(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u36',e)) return;
if (true) {

	SetPanelState('u30', 'pd0u30','none','',500,'none','',500);

}

}

var u37 = document.getElementById('u37');

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u39 = document.getElementById('u39');

var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'center';
var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'top';
var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'top';
var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'top';
var u201 = document.getElementById('u201');

var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'center';
var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'top';
var u204 = document.getElementById('u204');

var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'center';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u42 = document.getElementById('u42');

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u44 = document.getElementById('u44');

if (bIE) u44.attachEvent("onmouseover", MouseOveru44);
else u44.addEventListener("mouseover", MouseOveru44, true);
function MouseOveru44(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u44',e)) return;
if (true) {

	SetPanelState('u30', 'pd2u30','none','',500,'none','',500);

}

}
gv_vAlignTable['u44'] = 'top';
var u45 = document.getElementById('u45');

if (bIE) u45.attachEvent("onmouseover", MouseOveru45);
else u45.addEventListener("mouseover", MouseOveru45, true);
function MouseOveru45(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u45',e)) return;
if (true) {

	SetPanelState('u30', 'pd2u30','none','',500,'none','',500);

}

}

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'center';
var u47 = document.getElementById('u47');

var u48 = document.getElementById('u48');

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u226 = document.getElementById('u226');

u226.style.cursor = 'pointer';
if (bIE) u226.attachEvent("onclick", Clicku226);
else u226.addEventListener("click", Clicku226, true);
function Clicku226(e)
{
windowEvent = e;


if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("This link is not working in this ptototype model"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}
gv_vAlignTable['u226'] = 'top';
var u227 = document.getElementById('u227');

var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'center';
var u229 = document.getElementById('u229');

var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
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

	SetPanelState('u47', 'pd1u47','none','',500,'none','',500);

	SetPanelState('u13', 'pd0u13','none','',500,'none','',500);

	SetPanelState('u30', 'pd0u30','none','',500,'none','',500);

	SetPanelState('u64', 'pd0u64','none','',500,'none','',500);

	SetPanelState('u81', 'pd0u81','none','',500,'none','',500);

	SetPanelState('u98', 'pd0u98','none','',500,'none','',500);

	SetPanelState('u115', 'pd0u115','none','',500,'none','',500);

	SetPanelState('u132', 'pd0u132','none','',500,'none','',500);

	SetPanelState('u166', 'pd0u166','none','',500,'none','',500);

	SetPanelState('u183', 'pd0u183','none','',500,'none','',500);

	SetPanelState('u149', 'pd0u149','none','',500,'none','',500);

	SetPanelState('u200', 'pd0u200','none','',500,'none','',500);

SetGlobalVariableValue('$ProdColor', 'Red');

SetGlobalVariableValue('$ColorCostBulk', '1.03');

SetGlobalVariableValue('$ColorCostDP', '2.96');

	self.location.href="Two.html" + GetQuerystring();

}

}

if (bIE) u53.attachEvent("onmouseout", MouseOutu53);
else u53.addEventListener("mouseout", MouseOutu53, true);
function MouseOutu53(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u53',e)) return;
if (true) {

	SetPanelState('u47', 'pd0u47','none','',500,'none','',500);

}

}

var u54 = document.getElementById('u54');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u56 = document.getElementById('u56');

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u59 = document.getElementById('u59');

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

	SetPanelState('u47', 'pd2u47','none','',500,'none','',500);

}

}
gv_vAlignTable['u61'] = 'top';
var u62 = document.getElementById('u62');

if (bIE) u62.attachEvent("onmouseover", MouseOveru62);
else u62.addEventListener("mouseover", MouseOveru62, true);
function MouseOveru62(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u62',e)) return;
if (true) {

	SetPanelState('u47', 'pd2u47','none','',500,'none','',500);

}

}

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'center';
var u64 = document.getElementById('u64');

var u65 = document.getElementById('u65');

var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'center';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'top';
var u68 = document.getElementById('u68');

var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
if (window.OnLoad) OnLoad();
