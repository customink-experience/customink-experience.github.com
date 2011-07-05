
var PageName = 'One';
var PageId = '938df6b9965e4bafaab1d98421ac124c'
var PageUrl = 'One.html'
document.title = 'One';
var PageNotes = 
{
"pageName":"One",
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

if (true) {

SetGlobalVariableValue('$ProdColor', 'White');

SetGlobalVariableValue('$InksFront', '1');

SetGlobalVariableValue('$InksBack', '0');

SetGlobalVariableValue('$InksTotal', '1');

SetGlobalVariableValue('$SidesPrinted', '1');

SetGlobalVariableValue('$DigitalStart', '19.75');

SetGlobalVariableValue('$BulkStart', '6.85');

SetGlobalVariableValue('$ColorCostBulk', '0');

SetGlobalVariableValue('$ColorCostDP', '0');

}

}

var u154 = document.getElementById('u154');

u154.style.cursor = 'pointer';
if (bIE) u154.attachEvent("onclick", Clicku154);
else u154.addEventListener("click", Clicku154, true);
function Clicku154(e)
{
windowEvent = e;


if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("This link is not working in the prototype model"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u155 = document.getElementById('u155');

u155.style.cursor = 'pointer';
if (bIE) u155.attachEvent("onclick", Clicku155);
else u155.addEventListener("click", Clicku155, true);
function Clicku155(e)
{
windowEvent = e;


if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("This link is not working in the prototype model"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u156 = document.getElementById('u156');

u156.style.cursor = 'pointer';
if (bIE) u156.attachEvent("onclick", Clicku156);
else u156.addEventListener("click", Clicku156, true);
function Clicku156(e)
{
windowEvent = e;


if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("This link is not working in the prototype model"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u157 = document.getElementById('u157');

u157.style.cursor = 'pointer';
if (bIE) u157.attachEvent("onclick", Clicku157);
else u157.addEventListener("click", Clicku157, true);
function Clicku157(e)
{
windowEvent = e;


if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("This link is not working in the prototype model"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u158 = document.getElementById('u158');

u158.style.cursor = 'pointer';
if (bIE) u158.attachEvent("onclick", Clicku158);
else u158.addEventListener("click", Clicku158, true);
function Clicku158(e)
{
windowEvent = e;


if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("This link is not working in the prototype model"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u159 = document.getElementById('u159');

u159.style.cursor = 'pointer';
if (bIE) u159.attachEvent("onclick", Clicku159);
else u159.addEventListener("click", Clicku159, true);
function Clicku159(e)
{
windowEvent = e;


if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("This link is not working in the prototype model"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u80 = document.getElementById('u80');

var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'top';
var u83 = document.getElementById('u83');

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'center';
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

	NewWindow("resources/Other.html#other=" + encodeURI("This link is not working in this prototype model."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

if (bIE) u87.attachEvent("onmouseout", MouseOutu87);
else u87.addEventListener("mouseout", MouseOutu87, true);
function MouseOutu87(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u87',e)) return;
if (true) {

	SetPanelState('u79', 'pd0u79','none','',500,'none','',500);

}

}

var u88 = document.getElementById('u88');

if (bIE) u88.attachEvent("onmouseover", MouseOveru88);
else u88.addEventListener("mouseover", MouseOveru88, true);
function MouseOveru88(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u88',e)) return;
if (true) {

	SetPanelState('u79', 'pd1u79','none','',500,'none','',500);

}

}
gv_vAlignTable['u88'] = 'top';
var u89 = document.getElementById('u89');

if (bIE) u89.attachEvent("onmouseover", MouseOveru89);
else u89.addEventListener("mouseover", MouseOveru89, true);
function MouseOveru89(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u89',e)) return;
if (true) {

	SetPanelState('u79', 'pd1u79','none','',500,'none','',500);

}

}

var u160 = document.getElementById('u160');

u160.style.cursor = 'pointer';
if (bIE) u160.attachEvent("onclick", Clicku160);
else u160.addEventListener("click", Clicku160, true);
function Clicku160(e)
{
windowEvent = e;


if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("This link is not working in the prototype model"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u161 = document.getElementById('u161');

var u162 = document.getElementById('u162');

u162.style.cursor = 'pointer';
if (bIE) u162.attachEvent("onclick", Clicku162);
else u162.addEventListener("click", Clicku162, true);
function Clicku162(e)
{
windowEvent = e;


if (true) {

	self.location.href="Two.html" + GetQuerystring();

}

}

var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'center';
var u91 = document.getElementById('u91');

var u92 = document.getElementById('u92');

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

	SetPanelState('u2', 'pd1u2','none','',500,'none','',500);

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

	SetPanelState('u2', 'pd1u2','none','',500,'none','',500);

}

}
gv_vAlignTable['u13'] = 'top';
var u14 = document.getElementById('u14');

var u15 = document.getElementById('u15');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'top';
var u18 = document.getElementById('u18');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
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

	NewWindow("resources/Other.html#other=" + encodeURI("This link is not working in this prototype model."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

if (bIE) u111.attachEvent("onmouseout", MouseOutu111);
else u111.addEventListener("mouseout", MouseOutu111, true);
function MouseOutu111(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u111',e)) return;
if (true) {

	SetPanelState('u103', 'pd0u103','none','',500,'none','',500);

}

}

var u112 = document.getElementById('u112');

if (bIE) u112.attachEvent("onmouseover", MouseOveru112);
else u112.addEventListener("mouseover", MouseOveru112, true);
function MouseOveru112(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u112',e)) return;
if (true) {

	SetPanelState('u103', 'pd1u103','none','',500,'none','',500);

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

	SetPanelState('u103', 'pd1u103','none','',500,'none','',500);

}

}

var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'center';
var u115 = document.getElementById('u115');

var u20 = document.getElementById('u20');

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

	NewWindow("resources/Other.html#other=" + encodeURI("This link is not working in this prototype model."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

if (bIE) u22.attachEvent("onmouseout", MouseOutu22);
else u22.addEventListener("mouseout", MouseOutu22, true);
function MouseOutu22(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u22',e)) return;
if (true) {

	SetPanelState('u14', 'pd0u14','none','',500,'none','',500);

}

}

var u23 = document.getElementById('u23');

if (bIE) u23.attachEvent("onmouseover", MouseOveru23);
else u23.addEventListener("mouseover", MouseOveru23, true);
function MouseOveru23(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u23',e)) return;
if (true) {

	SetPanelState('u14', 'pd1u14','none','',500,'none','',500);

}

}
gv_vAlignTable['u23'] = 'top';
var u24 = document.getElementById('u24');

if (bIE) u24.attachEvent("onmouseover", MouseOveru24);
else u24.addEventListener("mouseover", MouseOveru24, true);
function MouseOveru24(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u24',e)) return;
if (true) {

	SetPanelState('u14', 'pd1u14','none','',500,'none','',500);

}

}

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u26 = document.getElementById('u26');

var u27 = document.getElementById('u27');

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'top';
var u100 = document.getElementById('u100');

if (bIE) u100.attachEvent("onmouseover", MouseOveru100);
else u100.addEventListener("mouseover", MouseOveru100, true);
function MouseOveru100(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u100',e)) return;
if (true) {

	SetPanelState('u91', 'pd1u91','none','',500,'none','',500);

}

}
gv_vAlignTable['u100'] = 'top';
var u101 = document.getElementById('u101');

if (bIE) u101.attachEvent("onmouseover", MouseOveru101);
else u101.addEventListener("mouseover", MouseOveru101, true);
function MouseOveru101(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u101',e)) return;
if (true) {

	SetPanelState('u91', 'pd1u91','none','',500,'none','',500);

}

}

var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'center';
var u103 = document.getElementById('u103');

var u104 = document.getElementById('u104');

var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'center';
var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u107 = document.getElementById('u107');

var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'center';
var u109 = document.getElementById('u109');

var u127 = document.getElementById('u127');

var u128 = document.getElementById('u128');

var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'center';
var u30 = document.getElementById('u30');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u32 = document.getElementById('u32');

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'center';
var u34 = document.getElementById('u34');

u34.style.cursor = 'pointer';
if (bIE) u34.attachEvent("onclick", Clicku34);
else u34.addEventListener("click", Clicku34, true);
function Clicku34(e)
{
windowEvent = e;


if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("This link is not working in this prototype model."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

if (bIE) u34.attachEvent("onmouseout", MouseOutu34);
else u34.addEventListener("mouseout", MouseOutu34, true);
function MouseOutu34(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u34',e)) return;
if (true) {

	SetPanelState('u26', 'pd0u26','none','',500,'none','',500);

}

}

var u35 = document.getElementById('u35');

if (bIE) u35.attachEvent("onmouseover", MouseOveru35);
else u35.addEventListener("mouseover", MouseOveru35, true);
function MouseOveru35(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u35',e)) return;
if (true) {

	SetPanelState('u26', 'pd1u26','none','',500,'none','',500);

}

}
gv_vAlignTable['u35'] = 'top';
var u36 = document.getElementById('u36');

if (bIE) u36.attachEvent("onmouseover", MouseOveru36);
else u36.addEventListener("mouseover", MouseOveru36, true);
function MouseOveru36(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u36',e)) return;
if (true) {

	SetPanelState('u26', 'pd1u26','none','',500,'none','',500);

}

}

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'center';
var u38 = document.getElementById('u38');

var u39 = document.getElementById('u39');

var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'center';
var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'top';
var u95 = document.getElementById('u95');

var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'center';
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

	NewWindow("resources/Other.html#other=" + encodeURI("This link is not working in this prototype model."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

if (bIE) u99.attachEvent("onmouseout", MouseOutu99);
else u99.addEventListener("mouseout", MouseOutu99, true);
function MouseOutu99(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u99',e)) return;
if (true) {

	SetPanelState('u91', 'pd0u91','none','',500,'none','',500);

}

}

var u116 = document.getElementById('u116');

var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'top';
var u119 = document.getElementById('u119');

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u42 = document.getElementById('u42');

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

	NewWindow("resources/Other.html#other=" + encodeURI("This link is not working in this prototype model."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

if (bIE) u46.attachEvent("onmouseout", MouseOutu46);
else u46.addEventListener("mouseout", MouseOutu46, true);
function MouseOutu46(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u46',e)) return;
if (true) {

	SetPanelState('u38', 'pd0u38','none','',500,'none','',500);

}

}

var u47 = document.getElementById('u47');

if (bIE) u47.attachEvent("onmouseover", MouseOveru47);
else u47.addEventListener("mouseover", MouseOveru47, true);
function MouseOveru47(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u47',e)) return;
if (true) {

	SetPanelState('u38', 'pd1u38','none','',500,'none','',500);

}

}
gv_vAlignTable['u47'] = 'top';
var u48 = document.getElementById('u48');

if (bIE) u48.attachEvent("onmouseover", MouseOveru48);
else u48.addEventListener("mouseover", MouseOveru48, true);
function MouseOveru48(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u48',e)) return;
if (true) {

	SetPanelState('u38', 'pd1u38','none','',500,'none','',500);

}

}

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'center';
var u121 = document.getElementById('u121');

var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'center';
var u123 = document.getElementById('u123');

u123.style.cursor = 'pointer';
if (bIE) u123.attachEvent("onclick", Clicku123);
else u123.addEventListener("click", Clicku123, true);
function Clicku123(e)
{
windowEvent = e;


if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("This link is not working in this prototype model."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

if (bIE) u123.attachEvent("onmouseout", MouseOutu123);
else u123.addEventListener("mouseout", MouseOutu123, true);
function MouseOutu123(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u123',e)) return;
if (true) {

	SetPanelState('u115', 'pd0u115','none','',500,'none','',500);

}

}

var u124 = document.getElementById('u124');

if (bIE) u124.attachEvent("onmouseover", MouseOveru124);
else u124.addEventListener("mouseover", MouseOveru124, true);
function MouseOveru124(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u124',e)) return;
if (true) {

	SetPanelState('u115', 'pd1u115','none','',500,'none','',500);

}

}
gv_vAlignTable['u124'] = 'top';
var u125 = document.getElementById('u125');

if (bIE) u125.attachEvent("onmouseover", MouseOveru125);
else u125.addEventListener("mouseover", MouseOveru125, true);
function MouseOveru125(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u125',e)) return;
if (true) {

	SetPanelState('u115', 'pd1u115','none','',500,'none','',500);

}

}

var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'center';
var u0 = document.getElementById('u0');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
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

	NewWindow("resources/Other.html#other=" + encodeURI("This link is not working in this prototype model."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

if (bIE) u8.attachEvent("onmouseout", MouseOutu8);
else u8.addEventListener("mouseout", MouseOutu8, true);
function MouseOutu8(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u8',e)) return;
if (true) {

	SetPanelState('u2', 'pd0u2','none','',500,'none','',500);

}

}

var u9 = document.getElementById('u9');

var u50 = document.getElementById('u50');

var u51 = document.getElementById('u51');

var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'center';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u54 = document.getElementById('u54');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u56 = document.getElementById('u56');

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u58 = document.getElementById('u58');

u58.style.cursor = 'pointer';
if (bIE) u58.attachEvent("onclick", Clicku58);
else u58.addEventListener("click", Clicku58, true);
function Clicku58(e)
{
windowEvent = e;


if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("This link is not working in this prototype model."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

if (bIE) u58.attachEvent("onmouseout", MouseOutu58);
else u58.addEventListener("mouseout", MouseOutu58, true);
function MouseOutu58(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u58',e)) return;
if (true) {

	SetPanelState('u50', 'pd0u50','none','',500,'none','',500);

}

}

var u59 = document.getElementById('u59');

var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'top';
var u131 = document.getElementById('u131');

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'center';
var u133 = document.getElementById('u133');

var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'center';
var u135 = document.getElementById('u135');

u135.style.cursor = 'pointer';
if (bIE) u135.attachEvent("onclick", Clicku135);
else u135.addEventListener("click", Clicku135, true);
function Clicku135(e)
{
windowEvent = e;


if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("This link is not working in this prototype model."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

if (bIE) u135.attachEvent("onmouseout", MouseOutu135);
else u135.addEventListener("mouseout", MouseOutu135, true);
function MouseOutu135(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u135',e)) return;
if (true) {

	SetPanelState('u127', 'pd0u127','none','',500,'none','',500);

}

}

var u136 = document.getElementById('u136');

if (bIE) u136.attachEvent("onmouseover", MouseOveru136);
else u136.addEventListener("mouseover", MouseOveru136, true);
function MouseOveru136(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u136',e)) return;
if (true) {

	SetPanelState('u127', 'pd1u127','none','',500,'none','',500);

}

}
gv_vAlignTable['u136'] = 'top';
var u137 = document.getElementById('u137');

if (bIE) u137.attachEvent("onmouseover", MouseOveru137);
else u137.addEventListener("mouseover", MouseOveru137, true);
function MouseOveru137(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u137',e)) return;
if (true) {

	SetPanelState('u127', 'pd1u127','none','',500,'none','',500);

}

}

var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'center';
var u139 = document.getElementById('u139');

var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u62 = document.getElementById('u62');

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'center';
var u64 = document.getElementById('u64');

if (bIE) u64.attachEvent("onmouseover", MouseOveru64);
else u64.addEventListener("mouseover", MouseOveru64, true);
function MouseOveru64(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u64',e)) return;
if (true) {

	SetPanelState('u50', 'pd2u50','none','',500,'none','',500);

}

}
gv_vAlignTable['u64'] = 'top';
var u65 = document.getElementById('u65');

if (bIE) u65.attachEvent("onmouseover", MouseOveru65);
else u65.addEventListener("mouseover", MouseOveru65, true);
function MouseOveru65(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u65',e)) return;
if (true) {

	SetPanelState('u50', 'pd2u50','none','',500,'none','',500);

}

}

var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'center';
var u67 = document.getElementById('u67');

var u68 = document.getElementById('u68');

var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u140 = document.getElementById('u140');

var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'center';
var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'top';
var u143 = document.getElementById('u143');

var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'center';
var u145 = document.getElementById('u145');

var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'center';
var u147 = document.getElementById('u147');

u147.style.cursor = 'pointer';
if (bIE) u147.attachEvent("onclick", Clicku147);
else u147.addEventListener("click", Clicku147, true);
function Clicku147(e)
{
windowEvent = e;


if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("This link is not working in this prototype model."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

if (bIE) u147.attachEvent("onmouseout", MouseOutu147);
else u147.addEventListener("mouseout", MouseOutu147, true);
function MouseOutu147(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u147',e)) return;
if (true) {

	SetPanelState('u139', 'pd0u139','none','',500,'none','',500);

}

}

var u148 = document.getElementById('u148');

if (bIE) u148.attachEvent("onmouseover", MouseOveru148);
else u148.addEventListener("mouseover", MouseOveru148, true);
function MouseOveru148(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u148',e)) return;
if (true) {

	SetPanelState('u139', 'pd1u139','none','',500,'none','',500);

}

}
gv_vAlignTable['u148'] = 'top';
var u149 = document.getElementById('u149');

if (bIE) u149.attachEvent("onmouseover", MouseOveru149);
else u149.addEventListener("mouseover", MouseOveru149, true);
function MouseOveru149(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u149',e)) return;
if (true) {

	SetPanelState('u139', 'pd1u139','none','',500,'none','',500);

}

}

var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u71 = document.getElementById('u71');

var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
var u73 = document.getElementById('u73');

var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'center';
var u75 = document.getElementById('u75');

u75.style.cursor = 'pointer';
if (bIE) u75.attachEvent("onclick", Clicku75);
else u75.addEventListener("click", Clicku75, true);
function Clicku75(e)
{
windowEvent = e;


if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("This link is not working in this prototype model."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

if (bIE) u75.attachEvent("onmouseout", MouseOutu75);
else u75.addEventListener("mouseout", MouseOutu75, true);
function MouseOutu75(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u75',e)) return;
if (true) {

	SetPanelState('u67', 'pd0u67','none','',500,'none','',500);

}

}

var u76 = document.getElementById('u76');

if (bIE) u76.attachEvent("onmouseover", MouseOveru76);
else u76.addEventListener("mouseover", MouseOveru76, true);
function MouseOveru76(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u76',e)) return;
if (true) {

	SetPanelState('u67', 'pd1u67','none','',500,'none','',500);

}

}
gv_vAlignTable['u76'] = 'top';
var u77 = document.getElementById('u77');

if (bIE) u77.attachEvent("onmouseover", MouseOveru77);
else u77.addEventListener("mouseover", MouseOveru77, true);
function MouseOveru77(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u77',e)) return;
if (true) {

	SetPanelState('u67', 'pd1u67','none','',500,'none','',500);

}

}

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'center';
var u79 = document.getElementById('u79');

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

	self.location.href="Two.html" + GetQuerystring();

}

}

var u152 = document.getElementById('u152');

u152.style.cursor = 'pointer';
if (bIE) u152.attachEvent("onclick", Clicku152);
else u152.addEventListener("click", Clicku152, true);
function Clicku152(e)
{
windowEvent = e;


if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("This link is not working in the prototype model"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u153 = document.getElementById('u153');

u153.style.cursor = 'pointer';
if (bIE) u153.attachEvent("onclick", Clicku153);
else u153.addEventListener("click", Clicku153, true);
function Clicku153(e)
{
windowEvent = e;


if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("These links are not working in the prototype model"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

if (window.OnLoad) OnLoad();
