
var PageName = 'Preview';
var PageId = 'pdbea007dcbc94afea8fd05ac2424e05c'
var PageUrl = 'Preview.html'
document.title = 'Preview';

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

if ((GetGlobalVariableValue('$PageView')) == (PopulateVariables('2'))) {

SetWidgetRichText('u14', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#003366; font-size:19px;">[[GroupName]]</span></b>'));

SetWidgetRichText('u15', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">[[Welcome]]</span>'));

SetWidgetRichText('u20', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#003366; font-size:13px;">[[groupPrice]]</span>'));

SetWidgetRichText('u43', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:12px;">[[contactName]]</span>'));

SetWidgetRichText('u44', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006699; font-size:12px;">[[contactEmail]]</span>'));

SetWidgetRichText('u45', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:12px;">Phone: [[contactPhone]]</span>'));

SetWidgetRichText('u49', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:12px;">[[paymtInfo]]</span>'));

SetWidgetRichText('u26', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:12px;">[[dlvyInfo]]</span>'));

SetWidgetRichText('u55', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#339933; font-size:12px;">[[CloseExDate]]</span>'));

SetWidgetRichText('u66', PopulateVariables('<span style=" font-family:\'Helvetica\'; font-size:11px;">Welcome [[YourName]]&nbsp; |&nbsp; Not [[YourName]]? <span style=" font-family:\'Helvetica\'; font-size:11px;"> <span style=" font-family:\'Helvetica\'; font-size:11px;">Click Here</span></span></span>'));

SetWidgetRichText('u52', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#339933; font-size:27px;">[[DaysLeftNum]]</span></b>'));

SetWidgetRichText('u53', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#000033; font-size:27px;">[[DaysLeftText]]</span></b>'));

SetWidgetRichText('u54', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#003366; font-size:12px;">[[SignUpEndsText]]</span>'));

	SetPanelStateu67("pd1u67");

}
else
if (true) {

SetWidgetRichText('u14', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#003366; font-size:19px;">[[GroupName]]</span></b>'));

SetWidgetRichText('u15', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">[[Welcome]]</span>'));

SetWidgetRichText('u20', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#003366; font-size:13px;">[[groupPrice]]</span>'));

SetWidgetRichText('u43', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:12px;">[[contactName]]</span>'));

SetWidgetRichText('u44', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006699; font-size:12px;">[[contactEmail]]</span>'));

SetWidgetRichText('u45', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:12px;">Phone: [[contactPhone]]</span>'));

SetWidgetRichText('u49', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:12px;">[[paymtInfo]]</span>'));

SetWidgetRichText('u26', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:12px;">[[dlvyInfo]]</span>'));

SetWidgetRichText('u55', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#339933; font-size:12px;">[[CloseExDate]]</span>'));

SetWidgetRichText('u66', PopulateVariables('<span style=" font-family:\'Helvetica\'; font-size:11px;">Welcome [[YourName]]&nbsp; |&nbsp; Not [[YourName]]? <span style=" font-family:\'Helvetica\'; font-size:11px;"> <span style=" font-family:\'Helvetica\'; font-size:11px;">Click Here</span></span></span>'));

SetWidgetRichText('u52', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#339933; font-size:27px;">[[DaysLeftNum]]</span></b>'));

SetWidgetRichText('u53', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#000033; font-size:27px;">[[DaysLeftText]]</span></b>'));

SetWidgetRichText('u54', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#003366; font-size:12px;">[[SignUpEndsText]]</span>'));

}

}

eval(GetDynamicPanelScript('u46', 1));

eval(GetDynamicPanelScript('u23', 1));

eval(GetDynamicPanelScript('u27', 1));

eval(GetDynamicPanelScript('u67', 2));

eval(GetDynamicPanelScript('u6', 1));

eval(GetDynamicPanelScript('u40', 1));

var u80 = document.getElementById('u80');

var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'top';
var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'top';
var u84 = document.getElementById('u84');

u84.style.cursor = 'pointer';
if (bIE) u84.attachEvent("onclick", Clicku84);
else u84.addEventListener("click", Clicku84, true);
function Clicku84(e)
{

if (true) {

	self.location.href="Create.html" + GetQuerystring();

}

}

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'center';
var u86 = document.getElementById('u86');

var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'center';
var u88 = document.getElementById('u88');

u88.style.cursor = 'pointer';
if (bIE) u88.attachEvent("onclick", Clicku88);
else u88.addEventListener("click", Clicku88, true);
function Clicku88(e)
{

if (true) {

	self.location.href="Share.html" + GetQuerystring();

}

}

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'center';
var u90 = document.getElementById('u90');

u90.style.cursor = 'pointer';
if (bIE) u90.attachEvent("onclick", Clicku90);
else u90.addEventListener("click", Clicku90, true);
function Clicku90(e)
{

if (true) {

	self.location.href="Manage.html" + GetQuerystring();

}

}

var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'center';
var u92 = document.getElementById('u92');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u11 = document.getElementById('u11');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u13 = document.getElementById('u13');

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'top';
var u16 = document.getElementById('u16');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u23 = document.getElementById('u23');

var u24 = document.getElementById('u24');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u27 = document.getElementById('u27');

var u28 = document.getElementById('u28');

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u31 = document.getElementById('u31');

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u34 = document.getElementById('u34');

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u36 = document.getElementById('u36');

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'center';
var u38 = document.getElementById('u38');

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u93 = document.getElementById('u93');

var u94 = document.getElementById('u94');

u94.style.cursor = 'pointer';
if (bIE) u94.attachEvent("onclick", Clicku94);
else u94.addEventListener("click", Clicku94, true);
function Clicku94(e)
{

if (true) {

SetGlobalVariableValue('$round', PopulateVariables('0'));

	self.location.href="Create.html" + GetQuerystring();

}

}

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u96 = document.getElementById('u96');

u96.style.cursor = 'pointer';
if (bIE) u96.attachEvent("onclick", Clicku96);
else u96.addEventListener("click", Clicku96, true);
function Clicku96(e)
{

if (true) {

SetGlobalVariableValue('$round', PopulateVariables('0'));

	self.location.href="Create.html" + GetQuerystring();

}

}

var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'center';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u40 = document.getElementById('u40');

var u41 = document.getElementById('u41');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u46 = document.getElementById('u46');

var u47 = document.getElementById('u47');

var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'center';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
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
var u9 = document.getElementById('u9');

var u50 = document.getElementById('u50');

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u61 = document.getElementById('u61');

u61.style.cursor = 'pointer';
if (bIE) u61.attachEvent("onclick", Clicku61);
else u61.addEventListener("click", Clicku61, true);
function Clicku61(e)
{

if ((GetGlobalVariableValue('$customButton')) == (PopulateVariables('Save Your Changes and Continue to Share'))) {

	self.location.href="Share.html" + GetQuerystring();

}
else
if ((GetGlobalVariableValue('$customButton')) == (PopulateVariables('Save Your Changes and Continue to Manage'))) {

	self.location.href="Manage.html" + GetQuerystring();

}
else
if ((GetGlobalVariableValue('$customButton')) == (PopulateVariables('Save Your Changes and Continue to Customize'))) {

	self.location.href="Create.html" + GetQuerystring();

}
else
if (true) {

	self.location.href="Share.html" + GetQuerystring();

}

}

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'center';
var u63 = document.getElementById('u63');

u63.style.cursor = 'pointer';
if (bIE) u63.attachEvent("onclick", Clicku63);
else u63.addEventListener("click", Clicku63, true);
function Clicku63(e)
{

if ((GetGlobalVariableValue('$customButton')) == (PopulateVariables('Save Your Changes and Continue to Sharing'))) {

	self.location.href="Share.html" + GetQuerystring();

}
else
if ((GetGlobalVariableValue('$customButton')) == (PopulateVariables('Save Your Changes and Continue to Manage'))) {

	self.location.href="Manage.html" + GetQuerystring();

}
else
if ((GetGlobalVariableValue('$customButton')) == (PopulateVariables('Save Your Changes and Continue to Customize'))) {

	self.location.href="Create.html" + GetQuerystring();

}
else
if (true) {

	self.location.href="Share.html" + GetQuerystring();

}

}

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u66 = document.getElementById('u66');

u66.style.cursor = 'pointer';
if (bIE) u66.attachEvent("onclick", Clicku66);
else u66.addEventListener("click", Clicku66, true);
function Clicku66(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Display participant sheet"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}
gv_vAlignTable['u66'] = 'top';
var u67 = document.getElementById('u67');

var u68 = document.getElementById('u68');

u68.style.cursor = 'pointer';
if (bIE) u68.attachEvent("onclick", Clicku68);
else u68.addEventListener("click", Clicku68, true);
function Clicku68(e)
{

if (true) {

	self.location.href="Create.html" + GetQuerystring();

}

}

var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'top';
var u72 = document.getElementById('u72');

var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'center';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'top';
var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'top';
var u76 = document.getElementById('u76');

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
if (window.OnLoad) OnLoad();
