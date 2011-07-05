
var PageName = 'Start Page';
var PageId = 'pb523ba1f4ae3484caa0d0e837974aa84'
var PageUrl = 'Start_Page.html'
document.title = 'Start Page';

if (top.location != self.location)
{
	if (parent.HandleMainFrameChanged) {
		parent.HandleMainFrameChanged();
	}
}

var $OnLoadVariable = '';

var $price1 = '';

var $price2 = '';

var $GroupName = '';

var $YourName = '';

var $groupPrice = '';

var $contanctName = '';

var $yourEmail = '';

var $closeDate = '';

var $personalize = '';

var $quotevar = '';

var $ZIP = '';

var $NameNum = '';

var $Size1 = '';

var $Size2 = '';

var $Size3 = '';

var $Qty1 = '';

var $Qty2 = '';

var $FormType = '';

var $fruit = '';

var $sizetext = '';

var $Name1 = '';

var $Name2 = '';

var $Num1 = '';

var $Num2 = '';

var $NumCount = '';

var $NameCount = '';

var $YourNote = '';

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
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&price1=' + encodeURIComponent($price1) + '&price2=' + encodeURIComponent($price2) + '&GroupName=' + encodeURIComponent($GroupName) + '&YourName=' + encodeURIComponent($YourName) + '&groupPrice=' + encodeURIComponent($groupPrice) + '&contanctName=' + encodeURIComponent($contanctName) + '&yourEmail=' + encodeURIComponent($yourEmail) + '&closeDate=' + encodeURIComponent($closeDate) + '&personalize=' + encodeURIComponent($personalize) + '&quotevar=' + encodeURIComponent($quotevar) + '&ZIP=' + encodeURIComponent($ZIP) + '&NameNum=' + encodeURIComponent($NameNum) + '&Size1=' + encodeURIComponent($Size1) + '&Size2=' + encodeURIComponent($Size2) + '&Size3=' + encodeURIComponent($Size3) + '&Qty1=' + encodeURIComponent($Qty1) + '&Qty2=' + encodeURIComponent($Qty2) + '&FormType=' + encodeURIComponent($FormType) + '&fruit=' + encodeURIComponent($fruit) + '&sizetext=' + encodeURIComponent($sizetext) + '&Name1=' + encodeURIComponent($Name1) + '&Name2=' + encodeURIComponent($Name2) + '&Num1=' + encodeURIComponent($Num1) + '&Num2=' + encodeURIComponent($Num2) + '&NumCount=' + encodeURIComponent($NumCount) + '&NameCount=' + encodeURIComponent($NameCount) + '&YourNote=' + encodeURIComponent($YourNote) + '&CSUM=1';
}

function PopulateVariables(value) {
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[price1\]\]/g, $price1);
  value = value.replace(/\[\[price2\]\]/g, $price2);
  value = value.replace(/\[\[GroupName\]\]/g, $GroupName);
  value = value.replace(/\[\[YourName\]\]/g, $YourName);
  value = value.replace(/\[\[groupPrice\]\]/g, $groupPrice);
  value = value.replace(/\[\[contanctName\]\]/g, $contanctName);
  value = value.replace(/\[\[yourEmail\]\]/g, $yourEmail);
  value = value.replace(/\[\[closeDate\]\]/g, $closeDate);
  value = value.replace(/\[\[personalize\]\]/g, $personalize);
  value = value.replace(/\[\[quotevar\]\]/g, $quotevar);
  value = value.replace(/\[\[ZIP\]\]/g, $ZIP);
  value = value.replace(/\[\[NameNum\]\]/g, $NameNum);
  value = value.replace(/\[\[Size1\]\]/g, $Size1);
  value = value.replace(/\[\[Size2\]\]/g, $Size2);
  value = value.replace(/\[\[Size3\]\]/g, $Size3);
  value = value.replace(/\[\[Qty1\]\]/g, $Qty1);
  value = value.replace(/\[\[Qty2\]\]/g, $Qty2);
  value = value.replace(/\[\[FormType\]\]/g, $FormType);
  value = value.replace(/\[\[fruit\]\]/g, $fruit);
  value = value.replace(/\[\[sizetext\]\]/g, $sizetext);
  value = value.replace(/\[\[Name1\]\]/g, $Name1);
  value = value.replace(/\[\[Name2\]\]/g, $Name2);
  value = value.replace(/\[\[Num1\]\]/g, $Num1);
  value = value.replace(/\[\[Num2\]\]/g, $Num2);
  value = value.replace(/\[\[NumCount\]\]/g, $NumCount);
  value = value.replace(/\[\[NameCount\]\]/g, $NameCount);
  value = value.replace(/\[\[YourNote\]\]/g, $YourNote);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  return value;
}

function OnLoad(e) {

if (true) {

SetGlobalVariableValue('$fruit', PopulateVariables('none'));

}

}

var u0 = document.getElementById('u0');
gv_vAlignTable['u0'] = 'top';
var u1 = document.getElementById('u1');

u1.style.cursor = 'pointer';
if (bIE) u1.attachEvent("onclick", Clicku1);
else u1.addEventListener("click", Clicku1, true);
function Clicku1(e)
{

if (true) {

SetGlobalVariableValue('$fruit', PopulateVariables('banana'));

	self.location.href="Test_Page.html" + GetQuerystring();

}

}
gv_vAlignTable['u1'] = 'top';
if (window.OnLoad) OnLoad();
