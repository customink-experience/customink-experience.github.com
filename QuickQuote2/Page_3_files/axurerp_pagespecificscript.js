
var PageName = 'Page 3';
var PageId = '78bca4dc437d4cdca6ad389ce4e63824'
var PageUrl = 'Page_3.html'
document.title = 'Page 3';
var PageNotes = 
{
"pageName":"Page 3",
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

}

if (window.OnLoad) OnLoad();
