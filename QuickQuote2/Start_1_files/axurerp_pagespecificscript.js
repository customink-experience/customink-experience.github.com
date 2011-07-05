
var PageName = 'Start';
var PageId = 'd1acfeca40b74c58ab9620c885de7e98'
var PageUrl = 'Start_1.html'
document.title = 'Start';
var PageNotes = 
{
"pageName":"Start",
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

}

var u0 = document.getElementById('u0');
gv_vAlignTable['u0'] = 'top';
var u1 = document.getElementById('u1');

u1.style.cursor = 'pointer';
if (bIE) u1.attachEvent("onclick", Clicku1);
else u1.addEventListener("click", Clicku1, true);
function Clicku1(e)
{
windowEvent = e;


if (true) {

	self.location.href="One.html" + GetQuerystring();

}

}

var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'center';
var u3 = document.getElementById('u3');

u3.style.cursor = 'pointer';
if (bIE) u3.attachEvent("onclick", Clicku3);
else u3.addEventListener("click", Clicku3, true);
function Clicku3(e)
{
windowEvent = e;


if (true) {

	self.location.href="http://www.bluecotton.com/t-shirts/short-sleeve/" + "";

}

}

var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
if (window.OnLoad) OnLoad();
