
var PageName = 'Two';
var PageId = '306df9eb4bd54471a648e3f4954923f3'
var PageUrl = 'Two.html'
document.title = 'Two';
var PageNotes = 
{
"pageName":"Two",
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

SetWidgetRichText('u14', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#003366;">' + (GetGlobalVariableValue('$ProdColor')) + '</span></p>');

SetWidgetFormText('u16', GetGlobalVariableValue('$Quantity'));

SetSelectedOption('u15', GetGlobalVariableValue('$InksFront'));

SetSelectedOption('u17', GetGlobalVariableValue('$InksBack'));

SetWidgetFormText('u22', GetGlobalVariableValue('$ZIP'));

}

}

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u22 = document.getElementById('u22');

if (bIE) u22.attachEvent("onblur", LostFocusu22);
else u22.addEventListener("blur", LostFocusu22, true);
function LostFocusu22(e)
{
windowEvent = e;


if (true) {

SetGlobalVariableValue('$ZIP', GetWidgetFormText('u22'));

}

}

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u24 = document.getElementById('u24');

u24.style.cursor = 'pointer';
if (bIE) u24.attachEvent("onclick", Clicku24);
else u24.addEventListener("click", Clicku24, true);
function Clicku24(e)
{
windowEvent = e;


if (((GetSelectedOption('u15')) > Number('0')) && ((GetSelectedOption('u17')) > Number('0'))) {

SetGlobalVariableValue('$SidesPrinted', '2');

SetGlobalVariableValue('$BulkStart', '8.22');

SetGlobalVariableValue('$DigitalStart', '23.70');

SetGlobalVariableValue('$InkCostBulk', '' + (((GetGlobalVariableValue('$InksTotal') - GetNum(1)) * GetNum(0.72)).toFixed(GetNum(2))) + '');

SetGlobalVariableValue('$BasePriceBulk', '' + ((GetNum(GetGlobalVariableValue('$BulkStart')) + GetNum(GetGlobalVariableValue('$ColorCostBulk')) + GetNum(GetGlobalVariableValue('$InkCostBulk'))).toFixed(GetNum(2))) + '');

SetGlobalVariableValue('$DigitalBase', '' + ((GetNum(GetGlobalVariableValue('$DigitalStart')) + GetNum(GetGlobalVariableValue('$ColorCostDP'))).toFixed(GetNum(2))) + '');

SetGlobalVariableValue('$TotalPrice', '' + ((GetGlobalVariableValue('$Quantity') * GetGlobalVariableValue('$BasePriceBulk')).toFixed(GetNum(2))) + '');

SetGlobalVariableValue('$DigitalTotal', '' + ((GetGlobalVariableValue('$DigitalBase') * GetGlobalVariableValue('$Quantity')).toFixed(GetNum(2))) + '');

SetGlobalVariableValue('$SavingsAmt', '' + ((GetGlobalVariableValue('$DigitalTotal') - GetGlobalVariableValue('$TotalPrice')).toFixed(GetNum(2))) + '');

SetGlobalVariableValue('$Difference', '' + ((GetGlobalVariableValue('$DigitalTotal') - GetGlobalVariableValue('$TotalPrice')).toFixed(GetNum(2))) + '');

SetGlobalVariableValue('$SavingsPct', '' + (GetGlobalVariableValue('$Difference') / GetGlobalVariableValue('$DigitalTotal')) + '');

SetGlobalVariableValue('$WholePct', '' + ((GetGlobalVariableValue('$SavingsPct') * GetNum(100)).toFixed(GetNum(0))) + '');

	self.location.href="Three.html" + GetQuerystring();

}
else
if (((GetSelectedOption('u15')) > Number('0')) && ((GetSelectedOption('u17')) == ('0'))) {

SetGlobalVariableValue('$SidesPrinted', '1');

SetGlobalVariableValue('$BulkStart', '6.85');

SetGlobalVariableValue('$DigitalStart', '19.75');

SetGlobalVariableValue('$InkCostBulk', '' + (((GetGlobalVariableValue('$InksTotal') - GetNum(1)) * GetNum(0.72)).toFixed(GetNum(2))) + '');

SetGlobalVariableValue('$BasePriceBulk', '' + ((GetNum(GetGlobalVariableValue('$BulkStart')) + GetNum(GetGlobalVariableValue('$ColorCostBulk')) + GetNum(GetGlobalVariableValue('$InkCostBulk'))).toFixed(GetNum(2))) + '');

SetGlobalVariableValue('$DigitalBase', '' + ((GetNum(GetGlobalVariableValue('$DigitalStart')) + GetNum(GetGlobalVariableValue('$ColorCostDP'))).toFixed(GetNum(2))) + '');

SetGlobalVariableValue('$TotalPrice', '' + ((GetGlobalVariableValue('$Quantity') * GetGlobalVariableValue('$BasePriceBulk')).toFixed(GetNum(2))) + '');

SetGlobalVariableValue('$DigitalTotal', '' + ((GetGlobalVariableValue('$DigitalBase') * GetGlobalVariableValue('$Quantity')).toFixed(GetNum(2))) + '');

SetGlobalVariableValue('$SavingsAmt', '' + ((GetGlobalVariableValue('$DigitalTotal') - GetGlobalVariableValue('$TotalPrice')).toFixed(GetNum(2))) + '');

SetGlobalVariableValue('$Difference', '' + ((GetGlobalVariableValue('$DigitalTotal') - GetGlobalVariableValue('$TotalPrice')).toFixed(GetNum(2))) + '');

SetGlobalVariableValue('$SavingsPct', '' + (GetGlobalVariableValue('$Difference') / GetGlobalVariableValue('$DigitalTotal')) + '');

SetGlobalVariableValue('$WholePct', '' + ((GetGlobalVariableValue('$SavingsPct') * GetNum(100)).toFixed(GetNum(0))) + '');

	self.location.href="Three.html" + GetQuerystring();

}
else
if (((GetSelectedOption('u17')) > Number('0')) && ((GetSelectedOption('u15')) == ('0'))) {

SetGlobalVariableValue('$SidesPrinted', '1');

SetGlobalVariableValue('$BulkStart', '6.85');

SetGlobalVariableValue('$DigitalStart', '19.75');

SetGlobalVariableValue('$InkCostBulk', '' + (((GetGlobalVariableValue('$InksTotal') - GetNum(1)) * GetNum(0.72)).toFixed(GetNum(2))) + '');

SetGlobalVariableValue('$BasePriceBulk', '' + ((GetNum(GetGlobalVariableValue('$BulkStart')) + GetNum(GetGlobalVariableValue('$ColorCostBulk')) + GetNum(GetGlobalVariableValue('$InkCostBulk'))).toFixed(GetNum(2))) + '');

SetGlobalVariableValue('$DigitalBase', '' + ((GetNum(GetGlobalVariableValue('$DigitalStart')) + GetNum(GetGlobalVariableValue('$ColorCostDP'))).toFixed(GetNum(2))) + '');

SetGlobalVariableValue('$TotalPrice', '' + ((GetGlobalVariableValue('$Quantity') * GetGlobalVariableValue('$BasePriceBulk')).toFixed(GetNum(2))) + '');

SetGlobalVariableValue('$DigitalTotal', '' + ((GetGlobalVariableValue('$DigitalBase') * GetGlobalVariableValue('$Quantity')).toFixed(GetNum(2))) + '');

SetGlobalVariableValue('$SavingsAmt', '' + ((GetGlobalVariableValue('$DigitalTotal') - GetGlobalVariableValue('$TotalPrice')).toFixed(GetNum(2))) + '');

SetGlobalVariableValue('$Difference', '' + ((GetGlobalVariableValue('$DigitalTotal') - GetGlobalVariableValue('$TotalPrice')).toFixed(GetNum(2))) + '');

SetGlobalVariableValue('$SavingsPct', '' + (GetGlobalVariableValue('$Difference') / GetGlobalVariableValue('$DigitalTotal')) + '');

SetGlobalVariableValue('$WholePct', '' + ((GetGlobalVariableValue('$SavingsPct') * GetNum(100)).toFixed(GetNum(0))) + '');

	self.location.href="Three.html" + GetQuerystring();

}
else
if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("You have selected no colors for a front or back design.&nbsp; Please select at least 1 color for front and/or back."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u26 = document.getElementById('u26');

u26.style.cursor = 'pointer';
if (bIE) u26.attachEvent("onclick", Clicku26);
else u26.addEventListener("click", Clicku26, true);
function Clicku26(e)
{
windowEvent = e;


if (true) {

	self.location.href="Four.html" + GetQuerystring();

}

}
gv_vAlignTable['u26'] = 'top';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u28 = document.getElementById('u28');

u28.style.cursor = 'pointer';
if (bIE) u28.attachEvent("onclick", Clicku28);
else u28.addEventListener("click", Clicku28, true);
function Clicku28(e)
{
windowEvent = e;


if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Display help content regarding deliveries outside of the US."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}
gv_vAlignTable['u28'] = 'top';
var u29 = document.getElementById('u29');

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
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
gv_vAlignTable['u13'] = 'top';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
var u15 = document.getElementById('u15');

if (bIE) u15.attachEvent("onchange", Changeu15);
else u15.addEventListener("change", Changeu15, true);
function Changeu15(e)
{
windowEvent = e;


if (true) {

SetGlobalVariableValue('$InksFront', GetSelectedOption('u15'));

SetGlobalVariableValue('$InksBack', GetSelectedOption('u17'));

SetGlobalVariableValue('$InksTotal', '' + (GetNum(GetGlobalVariableValue('$InksFront')) + GetNum(GetGlobalVariableValue('$InksBack'))) + '');

}

}

var u16 = document.getElementById('u16');

if (bIE) u16.attachEvent("onblur", LostFocusu16);
else u16.addEventListener("blur", LostFocusu16, true);
function LostFocusu16(e)
{
windowEvent = e;


if (true) {

SetGlobalVariableValue('$Quantity', GetWidgetFormText('u16'));

}

}

var u17 = document.getElementById('u17');

if (bIE) u17.attachEvent("onchange", Changeu17);
else u17.addEventListener("change", Changeu17, true);
function Changeu17(e)
{
windowEvent = e;


if (true) {

SetGlobalVariableValue('$InksFront', GetSelectedOption('u15'));

SetGlobalVariableValue('$InksBack', GetSelectedOption('u17'));

SetGlobalVariableValue('$InksTotal', '' + (GetNum(GetGlobalVariableValue('$InksFront')) + GetNum(GetGlobalVariableValue('$InksBack'))) + '');

}

}

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
if (window.OnLoad) OnLoad();
