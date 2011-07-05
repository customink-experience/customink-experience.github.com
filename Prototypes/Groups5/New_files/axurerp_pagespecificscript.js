
var PageName = 'New';
var PageId = 'pb523ba1f4ae3484caa0d0e837974aa84'
var PageUrl = 'New.html'
document.title = 'New';

if (top.location != self.location)
{
	if (parent.HandleMainFrameChanged) {
		parent.HandleMainFrameChanged();
	}
}

var $OnLoadVariable = '';

var $closeDate = '';

var $CloseExDate = '';

var $Comments = '';

var $contactEmail = '';

var $contactName = '';

var $customButton = '';

var $contactPhone = '';

var $DaysLeftNum = '';

var $DaysLeftText = '';

var $dlvryDate = '';

var $DlvryExDate = '';

var $dlvyInfo = '';

var $eventDate = '';

var $Extras = '';

var $GroupName = '';

var $groupPrice = '';

var $NameNum = '';

var $OrderExDate = '';

var $paymtInfo = '';

var $personalize = '';

var $price2 = '';

var $price1 = '';

var $priceNote = '';

var $PageView = '';

var $Qty1 = '';

var $Qty2 = '';

var $quotevar = '';

var $round = '';

var $SignUpEndsText = '';

var $Size1 = '';

var $Size2 = '';

var $Welcome = '';

var $WelcomeOnly = '';

var $XName = '';

var $XEmail = '';

var $XComments = '';

var $yourEmail = '';

var $YourName = '';

var $yourPhone = '';

var $ZIP = '';

var $emaiNew = '';

var $emailClose = '';

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
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&closeDate=' + encodeURIComponent($closeDate) + '&CloseExDate=' + encodeURIComponent($CloseExDate) + '&Comments=' + encodeURIComponent($Comments) + '&contactEmail=' + encodeURIComponent($contactEmail) + '&contactName=' + encodeURIComponent($contactName) + '&customButton=' + encodeURIComponent($customButton) + '&contactPhone=' + encodeURIComponent($contactPhone) + '&DaysLeftNum=' + encodeURIComponent($DaysLeftNum) + '&DaysLeftText=' + encodeURIComponent($DaysLeftText) + '&dlvryDate=' + encodeURIComponent($dlvryDate) + '&DlvryExDate=' + encodeURIComponent($DlvryExDate) + '&dlvyInfo=' + encodeURIComponent($dlvyInfo) + '&eventDate=' + encodeURIComponent($eventDate) + '&Extras=' + encodeURIComponent($Extras) + '&GroupName=' + encodeURIComponent($GroupName) + '&groupPrice=' + encodeURIComponent($groupPrice) + '&NameNum=' + encodeURIComponent($NameNum) + '&OrderExDate=' + encodeURIComponent($OrderExDate) + '&paymtInfo=' + encodeURIComponent($paymtInfo) + '&personalize=' + encodeURIComponent($personalize) + '&price2=' + encodeURIComponent($price2) + '&price1=' + encodeURIComponent($price1) + '&priceNote=' + encodeURIComponent($priceNote) + '&PageView=' + encodeURIComponent($PageView) + '&Qty1=' + encodeURIComponent($Qty1) + '&Qty2=' + encodeURIComponent($Qty2) + '&quotevar=' + encodeURIComponent($quotevar) + '&round=' + encodeURIComponent($round) + '&SignUpEndsText=' + encodeURIComponent($SignUpEndsText) + '&Size1=' + encodeURIComponent($Size1) + '&Size2=' + encodeURIComponent($Size2) + '&Welcome=' + encodeURIComponent($Welcome) + '&WelcomeOnly=' + encodeURIComponent($WelcomeOnly) + '&XName=' + encodeURIComponent($XName) + '&XEmail=' + encodeURIComponent($XEmail) + '&XComments=' + encodeURIComponent($XComments) + '&yourEmail=' + encodeURIComponent($yourEmail) + '&YourName=' + encodeURIComponent($YourName) + '&yourPhone=' + encodeURIComponent($yourPhone) + '&ZIP=' + encodeURIComponent($ZIP) + '&emaiNew=' + encodeURIComponent($emaiNew) + '&emailClose=' + encodeURIComponent($emailClose) + '&CSUM=1';
}

function PopulateVariables(value) {
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[closeDate\]\]/g, $closeDate);
  value = value.replace(/\[\[CloseExDate\]\]/g, $CloseExDate);
  value = value.replace(/\[\[Comments\]\]/g, $Comments);
  value = value.replace(/\[\[contactEmail\]\]/g, $contactEmail);
  value = value.replace(/\[\[contactName\]\]/g, $contactName);
  value = value.replace(/\[\[customButton\]\]/g, $customButton);
  value = value.replace(/\[\[contactPhone\]\]/g, $contactPhone);
  value = value.replace(/\[\[DaysLeftNum\]\]/g, $DaysLeftNum);
  value = value.replace(/\[\[DaysLeftText\]\]/g, $DaysLeftText);
  value = value.replace(/\[\[dlvryDate\]\]/g, $dlvryDate);
  value = value.replace(/\[\[DlvryExDate\]\]/g, $DlvryExDate);
  value = value.replace(/\[\[dlvyInfo\]\]/g, $dlvyInfo);
  value = value.replace(/\[\[eventDate\]\]/g, $eventDate);
  value = value.replace(/\[\[Extras\]\]/g, $Extras);
  value = value.replace(/\[\[GroupName\]\]/g, $GroupName);
  value = value.replace(/\[\[groupPrice\]\]/g, $groupPrice);
  value = value.replace(/\[\[NameNum\]\]/g, $NameNum);
  value = value.replace(/\[\[OrderExDate\]\]/g, $OrderExDate);
  value = value.replace(/\[\[paymtInfo\]\]/g, $paymtInfo);
  value = value.replace(/\[\[personalize\]\]/g, $personalize);
  value = value.replace(/\[\[price2\]\]/g, $price2);
  value = value.replace(/\[\[price1\]\]/g, $price1);
  value = value.replace(/\[\[priceNote\]\]/g, $priceNote);
  value = value.replace(/\[\[PageView\]\]/g, $PageView);
  value = value.replace(/\[\[Qty1\]\]/g, $Qty1);
  value = value.replace(/\[\[Qty2\]\]/g, $Qty2);
  value = value.replace(/\[\[quotevar\]\]/g, $quotevar);
  value = value.replace(/\[\[round\]\]/g, $round);
  value = value.replace(/\[\[SignUpEndsText\]\]/g, $SignUpEndsText);
  value = value.replace(/\[\[Size1\]\]/g, $Size1);
  value = value.replace(/\[\[Size2\]\]/g, $Size2);
  value = value.replace(/\[\[Welcome\]\]/g, $Welcome);
  value = value.replace(/\[\[WelcomeOnly\]\]/g, $WelcomeOnly);
  value = value.replace(/\[\[XName\]\]/g, $XName);
  value = value.replace(/\[\[XEmail\]\]/g, $XEmail);
  value = value.replace(/\[\[XComments\]\]/g, $XComments);
  value = value.replace(/\[\[yourEmail\]\]/g, $yourEmail);
  value = value.replace(/\[\[YourName\]\]/g, $YourName);
  value = value.replace(/\[\[yourPhone\]\]/g, $yourPhone);
  value = value.replace(/\[\[ZIP\]\]/g, $ZIP);
  value = value.replace(/\[\[emaiNew\]\]/g, $emaiNew);
  value = value.replace(/\[\[emailClose\]\]/g, $emailClose);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  return value;
}

function OnLoad(e) {

if (true) {

SetWidgetFormText('u212', GetGlobalVariableValue('$GroupName'));

SetWidgetFormText('u211', GetGlobalVariableValue('$YourName'));

SetWidgetFormText('u210', PopulateVariables(''));

SetGlobalVariableValue('$groupPrice', PopulateVariables(''));

SetGlobalVariableValue('$closeDate', PopulateVariables('mm/dd/yyyy'));

SetGlobalVariableValue('$paymtInfo', PopulateVariables(''));

SetGlobalVariableValue('$dlvyInfo', PopulateVariables(''));

SetGlobalVariableValue('$Welcome', PopulateVariables('I\'m organizing the order for our group.  Just enter the quantity and sizes you want before the closing date for the sign-up sheet.  Send me an email if you have any questions.'));

SetGlobalVariableValue('$yourPhone', PopulateVariables(''));

SetGlobalVariableValue('$yourEmail', PopulateVariables(''));

SetGlobalVariableValue('$contactEmail', PopulateVariables(''));

SetGlobalVariableValue('$round', PopulateVariables('0'));

SetGlobalVariableValue('$DaysLeftNum', PopulateVariables(''));

SetGlobalVariableValue('$DaysLeftText', PopulateVariables(''));

SetGlobalVariableValue('$SignUpEndsText', PopulateVariables(''));

SetGlobalVariableValue('$customButton', PopulateVariables('Save Changes and Continue'));

SetGlobalVariableValue('$emaiNew', PopulateVariables('Every time someone signs up and when my sign-up sheet closes.'));

}

}

eval(GetDynamicPanelScript('u22', 1));

eval(GetDynamicPanelScript('u118', 3));

eval(GetDynamicPanelScript('u102', 1));

eval(GetDynamicPanelScript('u28', 1));

eval(GetDynamicPanelScript('u15', 1));

eval(GetDynamicPanelScript('u0', 1));

eval(GetDynamicPanelScript('u17', 2));

eval(GetDynamicPanelScript('u3', 2));

eval(GetDynamicPanelScript('u91', 1));

var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'center';
var u231 = document.getElementById('u231');

var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'center';
var u233 = document.getElementById('u233');

var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'top';
var u100 = document.getElementById('u100');

u100.style.cursor = 'pointer';
if (bIE) u100.attachEvent("onclick", Clicku100);
else u100.addEventListener("click", Clicku100, true);
function Clicku100(e)
{

if (true) {

	SetPanelVisibilityu3("hidden");

	SetPanelVisibilityu102("");

	BringToFront("u102");

}

}

var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'center';
var u102 = document.getElementById('u102');

var u103 = document.getElementById('u103');

var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'center';
var u105 = document.getElementById('u105');

var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'center';
var u107 = document.getElementById('u107');

var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'center';
var u109 = document.getElementById('u109');

var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'top';
var u81 = document.getElementById('u81');

u81.style.cursor = 'pointer';
if (bIE) u81.attachEvent("onclick", Clicku81);
else u81.addEventListener("click", Clicku81, true);
function Clicku81(e)
{

if (true) {

	BringToFront("u102");

	SetPanelVisibilityu0("hidden");

SetWidgetRichText('u208', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">My design 2</span>'));

SetWidgetFormText('u210', GetGlobalVariableValue('$yourEmail'));

}

}

if (bIE) u81.attachEvent("onmouseover", MouseOveru81);
else u81.addEventListener("mouseover", MouseOveru81, true);
function MouseOveru81(e)
{
if (!IsTrueMouseOver('u81',e)) return;
if (true) {

	SetPanelVisibilityu91("");

	MoveWidgetTo('u91',110,140);

}

}

if (bIE) u81.attachEvent("onmouseout", MouseOutu81);
else u81.addEventListener("mouseout", MouseOutu81, true);
function MouseOutu81(e)
{
if (!IsTrueMouseOut('u81',e)) return;
if (true) {

	SetPanelVisibilityu91("hidden");

}

}
gv_vAlignTable['u81'] = 'top';
var u82 = document.getElementById('u82');

u82.style.cursor = 'pointer';
if (bIE) u82.attachEvent("onclick", Clicku82);
else u82.addEventListener("click", Clicku82, true);
function Clicku82(e)
{

if (true) {

	BringToFront("u102");

	SetPanelVisibilityu0("hidden");

SetWidgetRichText('u208', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">My design 7</span>'));

SetWidgetFormText('u210', GetGlobalVariableValue('$yourEmail'));

}

}

if (bIE) u82.attachEvent("onmouseover", MouseOveru82);
else u82.addEventListener("mouseover", MouseOveru82, true);
function MouseOveru82(e)
{
if (!IsTrueMouseOver('u82',e)) return;
if (true) {

	SetPanelVisibilityu91("");

	MoveWidgetTo('u91',110,170);

}

}

if (bIE) u82.attachEvent("onmouseout", MouseOutu82);
else u82.addEventListener("mouseout", MouseOutu82, true);
function MouseOutu82(e)
{
if (!IsTrueMouseOut('u82',e)) return;
if (true) {

	SetPanelVisibilityu91("hidden");

}

}
gv_vAlignTable['u82'] = 'top';
var u83 = document.getElementById('u83');

u83.style.cursor = 'pointer';
if (bIE) u83.attachEvent("onclick", Clicku83);
else u83.addEventListener("click", Clicku83, true);
function Clicku83(e)
{

if (true) {

	BringToFront("u102");

	SetPanelVisibilityu0("hidden");

SetWidgetRichText('u208', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">My design 5</span>'));

SetWidgetFormText('u210', GetGlobalVariableValue('$yourEmail'));

}

}

if (bIE) u83.attachEvent("onmouseover", MouseOveru83);
else u83.addEventListener("mouseover", MouseOveru83, true);
function MouseOveru83(e)
{
if (!IsTrueMouseOver('u83',e)) return;
if (true) {

	SetPanelVisibilityu91("");

	MoveWidgetTo('u91',110,200);

}

}

if (bIE) u83.attachEvent("onmouseout", MouseOutu83);
else u83.addEventListener("mouseout", MouseOutu83, true);
function MouseOutu83(e)
{
if (!IsTrueMouseOut('u83',e)) return;
if (true) {

	SetPanelVisibilityu91("hidden");

}

}
gv_vAlignTable['u83'] = 'top';
var u84 = document.getElementById('u84');

u84.style.cursor = 'pointer';
if (bIE) u84.attachEvent("onclick", Clicku84);
else u84.addEventListener("click", Clicku84, true);
function Clicku84(e)
{

if (true) {

	BringToFront("u102");

	SetPanelVisibilityu0("hidden");

SetWidgetRichText('u208', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">My design 8</span>'));

SetWidgetFormText('u210', GetGlobalVariableValue('$yourEmail'));

}

}

if (bIE) u84.attachEvent("onmouseover", MouseOveru84);
else u84.addEventListener("mouseover", MouseOveru84, true);
function MouseOveru84(e)
{
if (!IsTrueMouseOver('u84',e)) return;
if (true) {

	SetPanelVisibilityu91("");

	MoveWidgetTo('u91',110,230);

}

}

if (bIE) u84.attachEvent("onmouseout", MouseOutu84);
else u84.addEventListener("mouseout", MouseOutu84, true);
function MouseOutu84(e)
{
if (!IsTrueMouseOut('u84',e)) return;
if (true) {

	SetPanelVisibilityu91("hidden");

}

}
gv_vAlignTable['u84'] = 'top';
var u85 = document.getElementById('u85');

u85.style.cursor = 'pointer';
if (bIE) u85.attachEvent("onclick", Clicku85);
else u85.addEventListener("click", Clicku85, true);
function Clicku85(e)
{

if (true) {

	BringToFront("u102");

	SetPanelVisibilityu0("hidden");

SetWidgetRichText('u208', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">My design 4</span>'));

SetWidgetFormText('u210', GetGlobalVariableValue('$yourEmail'));

}

}

if (bIE) u85.attachEvent("onmouseover", MouseOveru85);
else u85.addEventListener("mouseover", MouseOveru85, true);
function MouseOveru85(e)
{
if (!IsTrueMouseOver('u85',e)) return;
if (true) {

	SetPanelVisibilityu91("");

	MoveWidgetTo('u91',110,260);

}

}

if (bIE) u85.attachEvent("onmouseout", MouseOutu85);
else u85.addEventListener("mouseout", MouseOutu85, true);
function MouseOutu85(e)
{
if (!IsTrueMouseOut('u85',e)) return;
if (true) {

	SetPanelVisibilityu91("hidden");

}

}
gv_vAlignTable['u85'] = 'top';
var u86 = document.getElementById('u86');

u86.style.cursor = 'pointer';
if (bIE) u86.attachEvent("onclick", Clicku86);
else u86.addEventListener("click", Clicku86, true);
function Clicku86(e)
{

if (true) {

	BringToFront("u102");

	SetPanelVisibilityu0("hidden");

SetWidgetRichText('u208', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">My design 6</span>'));

SetWidgetFormText('u210', GetGlobalVariableValue('$yourEmail'));

}

}

if (bIE) u86.attachEvent("onmouseover", MouseOveru86);
else u86.addEventListener("mouseover", MouseOveru86, true);
function MouseOveru86(e)
{
if (!IsTrueMouseOver('u86',e)) return;
if (true) {

	SetPanelVisibilityu91("");

	MoveWidgetTo('u91',110,290);

}

}

if (bIE) u86.attachEvent("onmouseout", MouseOutu86);
else u86.addEventListener("mouseout", MouseOutu86, true);
function MouseOutu86(e)
{
if (!IsTrueMouseOut('u86',e)) return;
if (true) {

	SetPanelVisibilityu91("hidden");

}

}
gv_vAlignTable['u86'] = 'top';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'top';
var u88 = document.getElementById('u88');

u88.style.cursor = 'pointer';
if (bIE) u88.attachEvent("onclick", Clicku88);
else u88.addEventListener("click", Clicku88, true);
function Clicku88(e)
{

if (true) {

	BringToFront("u102");

	SetPanelVisibilityu0("hidden");

SetWidgetRichText('u208', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">My design 3</span>'));

SetWidgetFormText('u210', GetGlobalVariableValue('$yourEmail'));

}

}

if (bIE) u88.attachEvent("onmouseover", MouseOveru88);
else u88.addEventListener("mouseover", MouseOveru88, true);
function MouseOveru88(e)
{
if (!IsTrueMouseOver('u88',e)) return;
if (true) {

	SetPanelVisibilityu91("");

	MoveWidgetTo('u91',110,320);

}

}

if (bIE) u88.attachEvent("onmouseout", MouseOutu88);
else u88.addEventListener("mouseout", MouseOutu88, true);
function MouseOutu88(e)
{
if (!IsTrueMouseOut('u88',e)) return;
if (true) {

	SetPanelVisibilityu91("hidden");

}

}
gv_vAlignTable['u88'] = 'top';
var u89 = document.getElementById('u89');

u89.style.cursor = 'pointer';
if (bIE) u89.attachEvent("onclick", Clicku89);
else u89.addEventListener("click", Clicku89, true);
function Clicku89(e)
{

if (true) {

	BringToFront("u102");

	SetPanelVisibilityu0("hidden");

SetWidgetRichText('u208', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">My design 1</span>'));

SetWidgetFormText('u210', GetGlobalVariableValue('$yourEmail'));

}

}

if (bIE) u89.attachEvent("onmouseover", MouseOveru89);
else u89.addEventListener("mouseover", MouseOveru89, true);
function MouseOveru89(e)
{
if (!IsTrueMouseOver('u89',e)) return;
if (true) {

	SetPanelVisibilityu91("");

	MoveWidgetTo('u91',110,350);

}

}

if (bIE) u89.attachEvent("onmouseout", MouseOutu89);
else u89.addEventListener("mouseout", MouseOutu89, true);
function MouseOutu89(e)
{
if (!IsTrueMouseOut('u89',e)) return;
if (true) {

	SetPanelVisibilityu91("hidden");

}

}
gv_vAlignTable['u89'] = 'top';
var u118 = document.getElementById('u118');

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'top';
var u90 = document.getElementById('u90');

u90.style.cursor = 'pointer';
if (bIE) u90.attachEvent("onclick", Clicku90);
else u90.addEventListener("click", Clicku90, true);
function Clicku90(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Closes the modal and goes to the lab"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u91 = document.getElementById('u91');

var u92 = document.getElementById('u92');

var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'center';
var u94 = document.getElementById('u94');

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u96 = document.getElementById('u96');

var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'center';
var u98 = document.getElementById('u98');

u98.style.cursor = 'pointer';
if (bIE) u98.attachEvent("onclick", Clicku98);
else u98.addEventListener("click", Clicku98, true);
function Clicku98(e)
{

if (true) {

	SetPanelVisibilityu0("hidden");

	BringToFront("u102");

	SetPanelVisibilityu102("");

	SetPanelStateu102("pd0u102");

}

}

var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u128 = document.getElementById('u128');

var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'center';
var u130 = document.getElementById('u130');

var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'center';
var u132 = document.getElementById('u132');

var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'center';
var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'top';
var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'top';
var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'top';
var u137 = document.getElementById('u137');

var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'center';
var u139 = document.getElementById('u139');

var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'center';
var u141 = document.getElementById('u141');

var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'center';
var u143 = document.getElementById('u143');

var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'center';
var u145 = document.getElementById('u145');

var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'center';
var u147 = document.getElementById('u147');

var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'center';
var u149 = document.getElementById('u149');

var u150 = document.getElementById('u150');

var u151 = document.getElementById('u151');

var u152 = document.getElementById('u152');

var u153 = document.getElementById('u153');

var u154 = document.getElementById('u154');

var u155 = document.getElementById('u155');

var u156 = document.getElementById('u156');

var u157 = document.getElementById('u157');

var u158 = document.getElementById('u158');

var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'center';
var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'center';
var u235 = document.getElementById('u235');

var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'top';
var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'top';
var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'top';
var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'top';
var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'top';
var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'top';
var u166 = document.getElementById('u166');

var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'center';
var u168 = document.getElementById('u168');

var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'center';
var u170 = document.getElementById('u170');

var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'center';
var u172 = document.getElementById('u172');

var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'center';
var u174 = document.getElementById('u174');

var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'center';
var u176 = document.getElementById('u176');

var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'center';
var u178 = document.getElementById('u178');

var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'center';
var u200 = document.getElementById('u200');

var u72 = document.getElementById('u72');

u72.style.cursor = 'pointer';
if (bIE) u72.attachEvent("onclick", Clicku72);
else u72.addEventListener("click", Clicku72, true);
function Clicku72(e)
{

if (true) {

	BringToFront("u102");

	SetPanelVisibilityu0("hidden");

SetWidgetRichText('u208', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">My design 10</span>'));

SetWidgetFormText('u210', GetGlobalVariableValue('$yourEmail'));

}

}

if (bIE) u72.attachEvent("onmouseover", MouseOveru72);
else u72.addEventListener("mouseover", MouseOveru72, true);
function MouseOveru72(e)
{
if (!IsTrueMouseOver('u72',e)) return;
if (true) {

	SetPanelVisibilityu91("");

	MoveWidgetTo('u91',110,110);

}

}

if (bIE) u72.attachEvent("onmouseout", MouseOutu72);
else u72.addEventListener("mouseout", MouseOutu72, true);
function MouseOutu72(e)
{
if (!IsTrueMouseOut('u72',e)) return;
if (true) {

	SetPanelVisibilityu91("hidden");

}

}
gv_vAlignTable['u72'] = 'top';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'top';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'top';
var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'top';
var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'top';
var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'top';
var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
var u180 = document.getElementById('u180');

var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'center';
var u182 = document.getElementById('u182');

var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'center';
var u184 = document.getElementById('u184');

var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'center';
var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'top';
var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'top';
var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'top';
var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'top';
var u210 = document.getElementById('u210');

var u211 = document.getElementById('u211');

var u212 = document.getElementById('u212');

if (bIE) u212.attachEvent("onfocus", Focusu212);
else u212.addEventListener("focus", Focusu212, true);
function Focusu212(e)
{

if (true) {
function waitu24ef0c76c52348498b1ba5059cd015681() {

SetWidgetRichText('u117', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;">Tip:&nbsp; A descriptive name helps members recognize your group.&nbsp; Example:&nbsp; </span><span style=" font-family:\'Myriad Pro\'; color:#336633; font-size:11px;"> &quot;Jones H.S. Drum Line 2011&quot;</span>'));
}
setTimeout(waitu24ef0c76c52348498b1ba5059cd015681, 300);

}

}

if (bIE) u212.attachEvent("onblur", LostFocusu212);
else u212.addEventListener("blur", LostFocusu212, true);
function LostFocusu212(e)
{

if (true) {

SetGlobalVariableValue('$GroupName', GetWidgetFormText('u212'));
function waituced93a469c354893bbc74e0ea2341b481() {

SetWidgetRichText('u117', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;"> </span>'));
}
setTimeout(waituced93a469c354893bbc74e0ea2341b481, 300);

}

}

var u213 = document.getElementById('u213');

u213.style.cursor = 'pointer';
if (bIE) u213.attachEvent("onclick", Clicku213);
else u213.addEventListener("click", Clicku213, true);
function Clicku213(e)
{

if (((GetWidgetFormText('u210')) == (PopulateVariables(''))) || (((GetWidgetFormText('u210')) == (PopulateVariables(''))) || ((GetWidgetFormText('u212')) == (PopulateVariables(''))))) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Your name, email address and group name are required fields.&nbsp; Please close this message and add this information now."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}
else
if (true) {

SetGlobalVariableValue('$YourName', GetWidgetFormText('u211'));

SetGlobalVariableValue('$yourEmail', GetWidgetFormText('u210'));

SetGlobalVariableValue('$GroupName', GetWidgetFormText('u212'));

	self.location.href="Create.html" + GetQuerystring();

}

}

var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'center';
var u215 = document.getElementById('u215');

var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'top';
var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'top';
var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'top';
var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'top';
var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'top';
var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'top';
var u196 = document.getElementById('u196');

var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'center';
var u198 = document.getElementById('u198');

var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'center';
var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'top';
var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'top';
var u222 = document.getElementById('u222');

var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'center';
var u224 = document.getElementById('u224');

var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'center';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'center';
var u0 = document.getElementById('u0');

var u1 = document.getElementById('u1');

var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'center';
var u3 = document.getElementById('u3');

var u4 = document.getElementById('u4');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'top';
var u7 = document.getElementById('u7');

u7.style.cursor = 'pointer';
if (bIE) u7.attachEvent("onclick", Clicku7);
else u7.addEventListener("click", Clicku7, true);
function Clicku7(e)
{

if (true) {

	SetPanelVisibilityu3("hidden");

	SetPanelVisibilityu102("");

	BringToFront("u102");

}

}

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u9 = document.getElementById('u9');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u11 = document.getElementById('u11');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u14 = document.getElementById('u14');

var u15 = document.getElementById('u15');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'top';
var u17 = document.getElementById('u17');

var u18 = document.getElementById('u18');

if (bIE) u18.attachEvent("onblur", LostFocusu18);
else u18.addEventListener("blur", LostFocusu18, true);
function LostFocusu18(e)
{

if (true) {

SetGlobalVariableValue('$yourEmail', GetWidgetFormText('u18'));

}

}

var u19 = document.getElementById('u19');

u19.style.cursor = 'pointer';
if (bIE) u19.attachEvent("onclick", Clicku19);
else u19.addEventListener("click", Clicku19, true);
function Clicku19(e)
{

if (true) {

	SetPanelStateu17("pd1u17");

	SetPanelVisibilityu28("");

	SetPanelVisibilityu22("hidden");

SetGlobalVariableValue('$yourEmail', GetWidgetFormText('u18'));

SetWidgetRichText('u26', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">[[yourEmail]]</span>'));

}

}

var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'center';
var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'top';
var u112 = document.getElementById('u112');

var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'center';
var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'top';
var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'top';
var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'top';
var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'top';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'center';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u22 = document.getElementById('u22');

var u23 = document.getElementById('u23');

u23.style.cursor = 'pointer';
if (bIE) u23.attachEvent("onclick", Clicku23);
else u23.addEventListener("click", Clicku23, true);
function Clicku23(e)
{

if (true) {

	SetPanelVisibilityu0("hidden");

	BringToFront("u102");

	SetPanelVisibilityu102("");

	SetPanelStateu102("pd0u102");

}

}

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u25 = document.getElementById('u25');

u25.style.cursor = 'pointer';
if (bIE) u25.attachEvent("onclick", Clicku25);
else u25.addEventListener("click", Clicku25, true);
function Clicku25(e)
{

if (true) {

	SetPanelStateu17("pd0u17");

	SetPanelVisibilityu28("hidden");

SetWidgetFormText('u18', GetGlobalVariableValue('$yourEmail'));

}

}
gv_vAlignTable['u25'] = 'top';
var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u28 = document.getElementById('u28');

var u29 = document.getElementById('u29');

var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'top';
var u207 = document.getElementById('u207');

u207.style.cursor = 'pointer';
if (bIE) u207.attachEvent("onclick", Clicku207);
else u207.addEventListener("click", Clicku207, true);
function Clicku207(e)
{

if (true) {

	BringToFront("u0");

	SetPanelVisibilityu0("");

	SetPanelStateu3("pd1u3");

SetWidgetFormText('u18', GetGlobalVariableValue('$yourEmail'));

}

}
gv_vAlignTable['u207'] = 'top';
var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'top';
var u209 = document.getElementById('u209');

u209.style.cursor = 'pointer';
if (bIE) u209.attachEvent("onclick", Clicku209);
else u209.addEventListener("click", Clicku209, true);
function Clicku209(e)
{

if (true) {

	SetPanelVisibilityu0("");

	BringToFront("u0");

	SetPanelStateu3("pd0u3");

}

}
gv_vAlignTable['u209'] = 'top';
var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'top';
var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'top';
var u122 = document.getElementById('u122');

var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'center';
var u124 = document.getElementById('u124');

var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'center';
var u126 = document.getElementById('u126');

var u30 = document.getElementById('u30');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u32 = document.getElementById('u32');

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u34 = document.getElementById('u34');

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u36 = document.getElementById('u36');

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u38 = document.getElementById('u38');

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'center';
var u217 = document.getElementById('u217');

var u218 = document.getElementById('u218');

var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'top';
var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'center';
var u202 = document.getElementById('u202');

var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'center';
var u204 = document.getElementById('u204');

var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'center';
var u40 = document.getElementById('u40');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u42 = document.getElementById('u42');

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u44 = document.getElementById('u44');

var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u46 = document.getElementById('u46');

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u48 = document.getElementById('u48');

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u226 = document.getElementById('u226');

var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'center';
var u228 = document.getElementById('u228');

var u229 = document.getElementById('u229');

var u50 = document.getElementById('u50');

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u52 = document.getElementById('u52');

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u54 = document.getElementById('u54');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u56 = document.getElementById('u56');

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u58 = document.getElementById('u58');

var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'center';
var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'top';
var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'top';
var u60 = document.getElementById('u60');

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u62 = document.getElementById('u62');

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u64 = document.getElementById('u64');

var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u66 = document.getElementById('u66');

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'top';
var u68 = document.getElementById('u68');

var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
if (window.OnLoad) OnLoad();
