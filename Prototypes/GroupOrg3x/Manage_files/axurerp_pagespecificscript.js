
var PageName = 'Manage';
var PageId = 'p73451ca5b8114a8d8d014fc7fa2e9fd7'
var PageUrl = 'Manage.html'
document.title = 'Manage';

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

SetWidgetRichText('u249', PopulateVariables('<span style=" font-family:\'Helvetica\'; font-size:11px;">Not the organizer for [[GroupName]]? <span style=" font-family:\'Helvetica\'; font-size:11px;"> <span style=" font-family:\'Helvetica\'; font-size:11px;"><u>Click Here</u></span></span></span>'));

SetWidgetRichText('u107', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#003366; font-size:19px;">Manage Sign-Up Sheet For:&nbsp; [[GroupName]]</span>'));

SetWidgetRichText('u81', PopulateVariables('<span style=" font-family:\'Helvetica\'; font-size:16px;">Sign-up closing date:</span><span style=" font-family:\'Helvetica\'; font-size:13px;">&nbsp; </span><span style=" font-family:\'Helvetica\'; color:#006600; font-size:13px;"><b>[[CloseExDate]]</span></b>'));

SetGlobalVariableValue('$Extras', PopulateVariables(' '));

SetGlobalVariableValue('$PageView', PopulateVariables('2'));

SetWidgetRichText('u438', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#949494; font-size:12px;">[[groupPrice]]</span>'));

SetWidgetRichText('u440', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:12px;">[[paymtInfo]]</span>'));

SetWidgetRichText('u442', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#949494; font-size:12px;">[[dlvyInfo]]</span>'));

SetWidgetRichText('u445', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#949494; font-size:12px;">[[Welcome]]</span>'));

SetWidgetRichText('u458', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#003366; font-size:12px;">[[emaiNew]]</span>'));

}

}

eval(GetDynamicPanelScript('u312', 3));

eval(GetDynamicPanelScript('u80', 4));

eval(GetDynamicPanelScript('u431', 1));

eval(GetDynamicPanelScript('u601', 1));

eval(GetDynamicPanelScript('u478', 1));

eval(GetDynamicPanelScript('u330', 3));

eval(GetDynamicPanelScript('u72', 2));

eval(GetDynamicPanelScript('u0', 1));

eval(GetDynamicPanelScript('u109', 2));

eval(GetDynamicPanelScript('u343', 3));

eval(GetDynamicPanelScript('u481', 1));

eval(GetDynamicPanelScript('u3', 2));

eval(GetDynamicPanelScript('u535', 2));

eval(GetDynamicPanelScript('u321', 3));

eval(GetDynamicPanelScript('u620', 2));

eval(GetDynamicPanelScript('u547', 1));

var u270 = document.getElementById('u270');

var u271 = document.getElementById('u271');
gv_vAlignTable['u271'] = 'top';
var u272 = document.getElementById('u272');

var u273 = document.getElementById('u273');
gv_vAlignTable['u273'] = 'top';
var u274 = document.getElementById('u274');

var u275 = document.getElementById('u275');
gv_vAlignTable['u275'] = 'top';
var u276 = document.getElementById('u276');

var u277 = document.getElementById('u277');
gv_vAlignTable['u277'] = 'top';
var u278 = document.getElementById('u278');

var u279 = document.getElementById('u279');
gv_vAlignTable['u279'] = 'top';
var u280 = document.getElementById('u280');

var u281 = document.getElementById('u281');
gv_vAlignTable['u281'] = 'top';
var u282 = document.getElementById('u282');

var u283 = document.getElementById('u283');
gv_vAlignTable['u283'] = 'top';
var u284 = document.getElementById('u284');

var u285 = document.getElementById('u285');
gv_vAlignTable['u285'] = 'top';
var u286 = document.getElementById('u286');

var u287 = document.getElementById('u287');
gv_vAlignTable['u287'] = 'top';
var u288 = document.getElementById('u288');

var u289 = document.getElementById('u289');
gv_vAlignTable['u289'] = 'top';
var u490 = document.getElementById('u490');
gv_vAlignTable['u490'] = 'center';
var u491 = document.getElementById('u491');

var u492 = document.getElementById('u492');
gv_vAlignTable['u492'] = 'center';
var u493 = document.getElementById('u493');

u493.style.cursor = 'pointer';
if (bIE) u493.attachEvent("onclick", Clicku493);
else u493.addEventListener("click", Clicku493, true);
function Clicku493(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('Youth Small'))) {

ApplyImageAndTextStyles('s', 'u493', 'u494', sJsonu494, false);
ApplyImageAndTextStyles('o', 'u489', 'u490', '', false);
ApplyImageAndTextStyles('o', 'u497', 'u498', '', false);
ApplyImageAndTextStyles('o', 'u505', 'u506', '', false);
ApplyImageAndTextStyles('o', 'u501', 'u502', '', false);
ApplyImageAndTextStyles('o', 'u509', 'u510', '', false);
ApplyImageAndTextStyles('o', 'u513', 'u514', '', false);
ApplyImageAndTextStyles('o', 'u517', 'u518', '', false);
ApplyImageAndTextStyles('o', 'u521', 'u522', '', false);
ApplyImageAndTextStyles('o', 'u525', 'u526', '', false);
ApplyImageAndTextStyles('o', 'u529', 'u530', '', false);
ApplyImageAndTextStyles('o', 'u533', 'u534', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('Youth Small'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty1', PopulateVariables('2'));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

ApplyImageAndTextStyles('o', 'u489', 'u490', '', false);
ApplyImageAndTextStyles('s', 'u493', 'u494', sJsonu494, false);
ApplyImageAndTextStyles('o', 'u501', 'u502', '', false);
ApplyImageAndTextStyles('o', 'u505', 'u506', '', false);
ApplyImageAndTextStyles('o', 'u497', 'u498', '', false);
ApplyImageAndTextStyles('o', 'u509', 'u510', '', false);
ApplyImageAndTextStyles('o', 'u517', 'u518', '', false);
ApplyImageAndTextStyles('o', 'u513', 'u514', '', false);
ApplyImageAndTextStyles('o', 'u521', 'u522', '', false);
ApplyImageAndTextStyles('o', 'u525', 'u526', '', false);
ApplyImageAndTextStyles('o', 'u533', 'u534', '', false);
ApplyImageAndTextStyles('o', 'u529', 'u530', '', false);
}

}

var u494 = document.getElementById('u494');
gv_vAlignTable['u494'] = 'center';
var u495 = document.getElementById('u495');

var u496 = document.getElementById('u496');
gv_vAlignTable['u496'] = 'center';
var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'center';
var u101 = document.getElementById('u101');

var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'center';
var u103 = document.getElementById('u103');

var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'center';
var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'top';
var u106 = document.getElementById('u106');

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'center';
var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'top';
var u109 = document.getElementById('u109');

var u297 = document.getElementById('u297');
gv_vAlignTable['u297'] = 'top';
var u298 = document.getElementById('u298');

var u299 = document.getElementById('u299');
gv_vAlignTable['u299'] = 'top';
var u500 = document.getElementById('u500');
gv_vAlignTable['u500'] = 'center';
var u392 = document.getElementById('u392');

var u9 = document.getElementById('u9');

u9.style.cursor = 'pointer';
if (bIE) u9.attachEvent("onclick", Clicku9);
else u9.addEventListener("click", Clicku9, true);
function Clicku9(e)
{

if (true) {

	BringToFront("u72");

	SetPanelStateu0("pd0u0");

}

}

var u110 = document.getElementById('u110');

u110.style.cursor = 'pointer';
if (bIE) u110.attachEvent("onclick", Clicku110);
else u110.addEventListener("click", Clicku110, true);
function Clicku110(e)
{

if (true) {

	BringToFront("u0");

	SetPanelStateu3("pd0u3");

SetWidgetFormText('u17', GetGlobalVariableValue('$yourEmail'));

}

}

var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'center';
var u112 = document.getElementById('u112');

u112.style.cursor = 'pointer';
if (bIE) u112.attachEvent("onclick", Clicku112);
else u112.addEventListener("click", Clicku112, true);
function Clicku112(e)
{

if (true) {

	SetPanelStateu109("pd1u109");

}

}
gv_vAlignTable['u112'] = 'top';
var u113 = document.getElementById('u113');

u113.style.cursor = 'pointer';
if (bIE) u113.attachEvent("onclick", Clicku113);
else u113.addEventListener("click", Clicku113, true);
function Clicku113(e)
{

if (true) {

	SetPanelStateu109("pd1u109");

}

}

var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'center';
var u115 = document.getElementById('u115');

var u116 = document.getElementById('u116');

var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'top';
var u118 = document.getElementById('u118');

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'top';
var u510 = document.getElementById('u510');
gv_vAlignTable['u510'] = 'center';
var u32 = document.getElementById('u32');

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'center';
var u34 = document.getElementById('u34');

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u120 = document.getElementById('u120');

var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'top';
var u122 = document.getElementById('u122');

var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'top';
var u124 = document.getElementById('u124');

var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'top';
var u126 = document.getElementById('u126');

var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'top';
var u128 = document.getElementById('u128');

var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'top';
var u130 = document.getElementById('u130');

var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'top';
var u132 = document.getElementById('u132');

var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'top';
var u134 = document.getElementById('u134');

var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'top';
var u136 = document.getElementById('u136');

var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'top';
var u138 = document.getElementById('u138');

var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'top';
var u140 = document.getElementById('u140');

var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'top';
var u142 = document.getElementById('u142');

var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'center';
var u144 = document.getElementById('u144');

var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'center';
var u146 = document.getElementById('u146');

var u147 = document.getElementById('u147');

var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'top';
var u149 = document.getElementById('u149');

var u501 = document.getElementById('u501');

u501.style.cursor = 'pointer';
if (bIE) u501.attachEvent("onclick", Clicku501);
else u501.addEventListener("click", Clicku501, true);
function Clicku501(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('Youth Large'))) {

ApplyImageAndTextStyles('s', 'u501', 'u502', sJsonu502, false);
ApplyImageAndTextStyles('o', 'u489', 'u490', '', false);
ApplyImageAndTextStyles('o', 'u493', 'u494', '', false);
ApplyImageAndTextStyles('o', 'u505', 'u506', '', false);
ApplyImageAndTextStyles('o', 'u513', 'u514', '', false);
ApplyImageAndTextStyles('o', 'u497', 'u498', '', false);
ApplyImageAndTextStyles('o', 'u509', 'u510', '', false);
ApplyImageAndTextStyles('o', 'u517', 'u518', '', false);
ApplyImageAndTextStyles('o', 'u521', 'u522', '', false);
ApplyImageAndTextStyles('o', 'u525', 'u526', '', false);
ApplyImageAndTextStyles('o', 'u529', 'u530', '', false);
ApplyImageAndTextStyles('o', 'u533', 'u534', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('Youth Large'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty1', PopulateVariables('2'));

ApplyImageAndTextStyles('o', 'u489', 'u490', '', false);
ApplyImageAndTextStyles('o', 'u493', 'u494', '', false);
ApplyImageAndTextStyles('o', 'u497', 'u498', '', false);
ApplyImageAndTextStyles('s', 'u501', 'u502', sJsonu502, false);
ApplyImageAndTextStyles('o', 'u505', 'u506', '', false);
ApplyImageAndTextStyles('o', 'u509', 'u510', '', false);
ApplyImageAndTextStyles('o', 'u517', 'u518', '', false);
ApplyImageAndTextStyles('o', 'u513', 'u514', '', false);
ApplyImageAndTextStyles('o', 'u525', 'u526', '', false);
ApplyImageAndTextStyles('o', 'u529', 'u530', '', false);
ApplyImageAndTextStyles('o', 'u521', 'u522', '', false);
ApplyImageAndTextStyles('o', 'u533', 'u534', '', false);
}

}

var u502 = document.getElementById('u502');
gv_vAlignTable['u502'] = 'center';
var u503 = document.getElementById('u503');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'bottom';
var u11 = document.getElementById('u11');

u11.style.cursor = 'pointer';
if (bIE) u11.attachEvent("onclick", Clicku11);
else u11.addEventListener("click", Clicku11, true);
function Clicku11(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Next screen will be checkout for CustomInk order"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'bottom';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
var u15 = document.getElementById('u15');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'top';
var u17 = document.getElementById('u17');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u19 = document.getElementById('u19');

var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'top';
var u151 = document.getElementById('u151');

var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'top';
var u153 = document.getElementById('u153');

var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'top';
var u155 = document.getElementById('u155');

var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'top';
var u157 = document.getElementById('u157');

var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'top';
var u159 = document.getElementById('u159');

var u511 = document.getElementById('u511');

var u512 = document.getElementById('u512');
gv_vAlignTable['u512'] = 'center';
var u513 = document.getElementById('u513');

u513.style.cursor = 'pointer';
if (bIE) u513.attachEvent("onclick", Clicku513);
else u513.addEventListener("click", Clicku513, true);
function Clicku513(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('Medium'))) {

ApplyImageAndTextStyles('s', 'u513', 'u514', sJsonu514, false);
ApplyImageAndTextStyles('o', 'u489', 'u490', '', false);
ApplyImageAndTextStyles('o', 'u493', 'u494', '', false);
ApplyImageAndTextStyles('o', 'u501', 'u502', '', false);
ApplyImageAndTextStyles('o', 'u509', 'u510', '', false);
ApplyImageAndTextStyles('o', 'u497', 'u498', '', false);
ApplyImageAndTextStyles('o', 'u505', 'u506', '', false);
ApplyImageAndTextStyles('o', 'u517', 'u518', '', false);
ApplyImageAndTextStyles('o', 'u529', 'u530', '', false);
ApplyImageAndTextStyles('o', 'u525', 'u526', '', false);
ApplyImageAndTextStyles('o', 'u521', 'u522', '', false);
ApplyImageAndTextStyles('o', 'u533', 'u534', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('Medium'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$Qty1', PopulateVariables('2'));

ApplyImageAndTextStyles('o', 'u489', 'u490', '', false);
ApplyImageAndTextStyles('o', 'u493', 'u494', '', false);
ApplyImageAndTextStyles('o', 'u497', 'u498', '', false);
ApplyImageAndTextStyles('o', 'u505', 'u506', '', false);
ApplyImageAndTextStyles('o', 'u501', 'u502', '', false);
ApplyImageAndTextStyles('o', 'u517', 'u518', '', false);
ApplyImageAndTextStyles('s', 'u513', 'u514', sJsonu514, false);
ApplyImageAndTextStyles('o', 'u509', 'u510', '', false);
ApplyImageAndTextStyles('o', 'u521', 'u522', '', false);
ApplyImageAndTextStyles('o', 'u525', 'u526', '', false);
ApplyImageAndTextStyles('o', 'u529', 'u530', '', false);
ApplyImageAndTextStyles('o', 'u533', 'u534', '', false);
}

}

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'center';
var u21 = document.getElementById('u21');

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u24 = document.getElementById('u24');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u26 = document.getElementById('u26');

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u28 = document.getElementById('u28');

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'top';
var u161 = document.getElementById('u161');

var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'top';
var u163 = document.getElementById('u163');

var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'top';
var u165 = document.getElementById('u165');

var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'top';
var u167 = document.getElementById('u167');

var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'top';
var u169 = document.getElementById('u169');

var u521 = document.getElementById('u521');

u521.style.cursor = 'pointer';
if (bIE) u521.attachEvent("onclick", Clicku521);
else u521.addEventListener("click", Clicku521, true);
function Clicku521(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('Extra Large'))) {

ApplyImageAndTextStyles('s', 'u521', 'u522', sJsonu522, false);
ApplyImageAndTextStyles('o', 'u489', 'u490', '', false);
ApplyImageAndTextStyles('o', 'u493', 'u494', '', false);
ApplyImageAndTextStyles('o', 'u501', 'u502', '', false);
ApplyImageAndTextStyles('o', 'u509', 'u510', '', false);
ApplyImageAndTextStyles('o', 'u497', 'u498', '', false);
ApplyImageAndTextStyles('o', 'u505', 'u506', '', false);
ApplyImageAndTextStyles('o', 'u513', 'u514', '', false);
ApplyImageAndTextStyles('o', 'u517', 'u518', '', false);
ApplyImageAndTextStyles('o', 'u525', 'u526', '', false);
ApplyImageAndTextStyles('o', 'u533', 'u534', '', false);
ApplyImageAndTextStyles('o', 'u529', 'u530', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('Extra Large'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$Qty1', PopulateVariables('2'));

ApplyImageAndTextStyles('o', 'u489', 'u490', '', false);
ApplyImageAndTextStyles('o', 'u497', 'u498', '', false);
ApplyImageAndTextStyles('o', 'u493', 'u494', '', false);
ApplyImageAndTextStyles('o', 'u505', 'u506', '', false);
ApplyImageAndTextStyles('o', 'u509', 'u510', '', false);
ApplyImageAndTextStyles('o', 'u513', 'u514', '', false);
ApplyImageAndTextStyles('o', 'u501', 'u502', '', false);
ApplyImageAndTextStyles('o', 'u517', 'u518', '', false);
ApplyImageAndTextStyles('s', 'u521', 'u522', sJsonu522, false);
ApplyImageAndTextStyles('o', 'u529', 'u530', '', false);
ApplyImageAndTextStyles('o', 'u525', 'u526', '', false);
ApplyImageAndTextStyles('o', 'u533', 'u534', '', false);
}

}

var u522 = document.getElementById('u522');
gv_vAlignTable['u522'] = 'center';
var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'top';
var u30 = document.getElementById('u30');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u206 = document.getElementById('u206');

var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'top';
var u208 = document.getElementById('u208');

var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'top';
var u36 = document.getElementById('u36');

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'center';
var u38 = document.getElementById('u38');

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'top';
var u171 = document.getElementById('u171');

var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'top';
var u173 = document.getElementById('u173');

var u174 = document.getElementById('u174');

var u175 = document.getElementById('u175');

var u176 = document.getElementById('u176');

var u177 = document.getElementById('u177');

var u178 = document.getElementById('u178');

var u179 = document.getElementById('u179');

var u531 = document.getElementById('u531');

var u532 = document.getElementById('u532');
gv_vAlignTable['u532'] = 'center';
var u533 = document.getElementById('u533');

u533.style.cursor = 'pointer';
if (bIE) u533.attachEvent("onclick", Clicku533);
else u533.addEventListener("click", Clicku533, true);
function Clicku533(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('4XL'))) {

ApplyImageAndTextStyles('s', 'u533', 'u534', sJsonu534, false);
ApplyImageAndTextStyles('o', 'u489', 'u490', '', false);
ApplyImageAndTextStyles('o', 'u529', 'u530', '', false);
ApplyImageAndTextStyles('o', 'u521', 'u522', '', false);
ApplyImageAndTextStyles('o', 'u525', 'u526', '', false);
ApplyImageAndTextStyles('o', 'u517', 'u518', '', false);
ApplyImageAndTextStyles('o', 'u513', 'u514', '', false);
ApplyImageAndTextStyles('o', 'u509', 'u510', '', false);
ApplyImageAndTextStyles('o', 'u505', 'u506', '', false);
ApplyImageAndTextStyles('o', 'u501', 'u502', '', false);
ApplyImageAndTextStyles('o', 'u497', 'u498', '', false);
ApplyImageAndTextStyles('o', 'u493', 'u494', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('4XL'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

ApplyImageAndTextStyles('o', 'u489', 'u490', '', false);
ApplyImageAndTextStyles('o', 'u497', 'u498', '', false);
ApplyImageAndTextStyles('o', 'u493', 'u494', '', false);
ApplyImageAndTextStyles('o', 'u501', 'u502', '', false);
ApplyImageAndTextStyles('o', 'u509', 'u510', '', false);
ApplyImageAndTextStyles('o', 'u513', 'u514', '', false);
ApplyImageAndTextStyles('o', 'u517', 'u518', '', false);
ApplyImageAndTextStyles('o', 'u521', 'u522', '', false);
ApplyImageAndTextStyles('o', 'u505', 'u506', '', false);
ApplyImageAndTextStyles('o', 'u525', 'u526', '', false);
ApplyImageAndTextStyles('o', 'u529', 'u530', '', false);
ApplyImageAndTextStyles('s', 'u533', 'u534', sJsonu534, false);
SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$Qty1', PopulateVariables('2'));

}

}

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u45 = document.getElementById('u45');

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'center';
var u47 = document.getElementById('u47');

var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'center';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u180 = document.getElementById('u180');

var u181 = document.getElementById('u181');

var u182 = document.getElementById('u182');

var u183 = document.getElementById('u183');

var u184 = document.getElementById('u184');

var u185 = document.getElementById('u185');

var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'center';
var u187 = document.getElementById('u187');

var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'center';
var u189 = document.getElementById('u189');

u189.style.cursor = 'pointer';
if (bIE) u189.attachEvent("onclick", Clicku189);
else u189.addEventListener("click", Clicku189, true);
function Clicku189(e)
{

if (true) {

	SetPanelStateu109("pd0u109");

SetWidgetRichText('u145', PopulateVariables('<div style="text-align:right"><span style=" font-family:\'Helvetica\'; color:#003366; font-size:13px;">&nbsp; Total Quantity:&nbsp; 8</span></div>'));

SetWidgetRichText('u133', PopulateVariables('<div style="text-align:right"><span style=" font-family:\'Helvetica\'; font-size:12px;"> 2</span></div>'));

SetWidgetRichText('u141', PopulateVariables('<div style="text-align:right"><span style=" font-family:\'Helvetica\'; color:#006600; font-size:12px;">2</span></div>'));

SetWidgetRichText('u430', PopulateVariables('<span style=" font-family:\'Helvetica\'; font-size:13px;"> 2 shirts were added as extras</span>'));

}

}

var u541 = document.getElementById('u541');
gv_vAlignTable['u541'] = 'top';
var u542 = document.getElementById('u542');

var u543 = document.getElementById('u543');
gv_vAlignTable['u543'] = 'top';
var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u55 = document.getElementById('u55');

u55.style.cursor = 'pointer';
if (bIE) u55.attachEvent("onclick", Clicku55);
else u55.addEventListener("click", Clicku55, true);
function Clicku55(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("This is not enabled in the prototype."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'center';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'center';
var u191 = document.getElementById('u191');

var u192 = document.getElementById('u192');

var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'top';
var u194 = document.getElementById('u194');

var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'top';
var u196 = document.getElementById('u196');

var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'top';
var u198 = document.getElementById('u198');

var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'top';
var u551 = document.getElementById('u551');

u551.style.cursor = 'pointer';
if (bIE) u551.attachEvent("onclick", Clicku551);
else u551.addEventListener("click", Clicku551, true);
function Clicku551(e)
{

if (true) {

	SetPanelStateu478("pd0u478");

	SetPanelStateu620("pd1u620");

	SetPanelVisibilityu547("hidden");

	SetPanelVisibilityu478("");

	MoveWidgetTo('u601',16,580);

}

}

var u552 = document.getElementById('u552');

var u553 = document.getElementById('u553');
gv_vAlignTable['u553'] = 'center';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u66 = document.getElementById('u66');

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u68 = document.getElementById('u68');

var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u560 = document.getElementById('u560');

var u561 = document.getElementById('u561');
gv_vAlignTable['u561'] = 'center';
var u562 = document.getElementById('u562');

u562.style.cursor = 'pointer';
if (bIE) u562.attachEvent("onclick", Clicku562);
else u562.addEventListener("click", Clicku562, true);
function Clicku562(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u562', 'u563', sJsonu563, false);
ApplyImageAndTextStyles('o', 'u554', 'u555', '', false);
ApplyImageAndTextStyles('o', 'u558', 'u559', '', false);
ApplyImageAndTextStyles('o', 'u566', 'u567', '', false);
ApplyImageAndTextStyles('o', 'u570', 'u571', '', false);
ApplyImageAndTextStyles('o', 'u574', 'u575', '', false);
ApplyImageAndTextStyles('o', 'u578', 'u579', '', false);
ApplyImageAndTextStyles('o', 'u598', 'u599', '', false);
ApplyImageAndTextStyles('o', 'u594', 'u595', '', false);
ApplyImageAndTextStyles('o', 'u590', 'u591', '', false);
ApplyImageAndTextStyles('o', 'u586', 'u587', '', false);
ApplyImageAndTextStyles('o', 'u582', 'u583', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Youth Medium'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u563 = document.getElementById('u563');
gv_vAlignTable['u563'] = 'center';
var u70 = document.getElementById('u70');

u70.style.cursor = 'pointer';
if (bIE) u70.attachEvent("onclick", Clicku70);
else u70.addEventListener("click", Clicku70, true);
function Clicku70(e)
{

if (true) {

	BringToFront("u72");

}

}

var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u72 = document.getElementById('u72');

var u73 = document.getElementById('u73');

var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'center';
var u75 = document.getElementById('u75');

var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'center';
var u77 = document.getElementById('u77');

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'center';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
var u570 = document.getElementById('u570');

u570.style.cursor = 'pointer';
if (bIE) u570.attachEvent("onclick", Clicku570);
else u570.addEventListener("click", Clicku570, true);
function Clicku570(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u570', 'u571', sJsonu571, false);
ApplyImageAndTextStyles('o', 'u554', 'u555', '', false);
ApplyImageAndTextStyles('o', 'u558', 'u559', '', false);
ApplyImageAndTextStyles('o', 'u562', 'u563', '', false);
ApplyImageAndTextStyles('o', 'u566', 'u567', '', false);
ApplyImageAndTextStyles('o', 'u574', 'u575', '', false);
ApplyImageAndTextStyles('o', 'u578', 'u579', '', false);
ApplyImageAndTextStyles('o', 'u582', 'u583', '', false);
ApplyImageAndTextStyles('o', 'u586', 'u587', '', false);
ApplyImageAndTextStyles('o', 'u590', 'u591', '', false);
ApplyImageAndTextStyles('o', 'u594', 'u595', '', false);
ApplyImageAndTextStyles('o', 'u598', 'u599', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Youth Extra Large'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u571 = document.getElementById('u571');
gv_vAlignTable['u571'] = 'center';
var u572 = document.getElementById('u572');

var u573 = document.getElementById('u573');
gv_vAlignTable['u573'] = 'center';
var u80 = document.getElementById('u80');

var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'top';
var u82 = document.getElementById('u82');

u82.style.cursor = 'pointer';
if (bIE) u82.attachEvent("onclick", Clicku82);
else u82.addEventListener("click", Clicku82, true);
function Clicku82(e)
{

if (true) {

	self.location.href="Create.html" + GetQuerystring();

}

}
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

	SetPanelStateu80("pd2u80");

SetWidgetRichText('u90', PopulateVariables('<span style=" font-family:\'Helvetica\'; font-size:16px;">Sign-up closing date:</span><span style=" font-family:\'Helvetica\'; font-size:13px;">&nbsp; </span><span style=" font-family:\'Helvetica\'; color:#FF0000; font-size:13px;"><b>Wednesday, February 2&nbsp; at 6:15 pm Eastern Time.</span></b>'));

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

	self.location.href="Create.html" + GetQuerystring();

}

}
gv_vAlignTable['u85'] = 'top';
var u86 = document.getElementById('u86');
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

	SetPanelStateu80("pd2u80");

}

}
gv_vAlignTable['u88'] = 'top';
var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u580 = document.getElementById('u580');

var u581 = document.getElementById('u581');
gv_vAlignTable['u581'] = 'center';
var u582 = document.getElementById('u582');

u582.style.cursor = 'pointer';
if (bIE) u582.attachEvent("onclick", Clicku582);
else u582.addEventListener("click", Clicku582, true);
function Clicku582(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u582', 'u583', sJsonu583, false);
ApplyImageAndTextStyles('o', 'u554', 'u555', '', false);
ApplyImageAndTextStyles('o', 'u558', 'u559', '', false);
ApplyImageAndTextStyles('o', 'u570', 'u571', '', false);
ApplyImageAndTextStyles('o', 'u574', 'u575', '', false);
ApplyImageAndTextStyles('o', 'u578', 'u579', '', false);
ApplyImageAndTextStyles('o', 'u562', 'u563', '', false);
ApplyImageAndTextStyles('o', 'u566', 'u567', '', false);
ApplyImageAndTextStyles('o', 'u590', 'u591', '', false);
ApplyImageAndTextStyles('o', 'u598', 'u599', '', false);
ApplyImageAndTextStyles('o', 'u594', 'u595', '', false);
ApplyImageAndTextStyles('o', 'u586', 'u587', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Large'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u583 = document.getElementById('u583');
gv_vAlignTable['u583'] = 'center';
var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u91 = document.getElementById('u91');

u91.style.cursor = 'pointer';
if (bIE) u91.attachEvent("onclick", Clicku91);
else u91.addEventListener("click", Clicku91, true);
function Clicku91(e)
{

if (true) {

	SetPanelStateu80("pd1u80");

}

}
gv_vAlignTable['u91'] = 'top';
var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u93 = document.getElementById('u93');

u93.style.cursor = 'pointer';
if (bIE) u93.attachEvent("onclick", Clicku93);
else u93.addEventListener("click", Clicku93, true);
function Clicku93(e)
{

if (true) {

	self.location.href="Create.html" + GetQuerystring();

}

}
gv_vAlignTable['u93'] = 'top';
var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'top';
var u95 = document.getElementById('u95');

u95.style.cursor = 'pointer';
if (bIE) u95.attachEvent("onclick", Clicku95);
else u95.addEventListener("click", Clicku95, true);
function Clicku95(e)
{

if (true) {

	self.location.href="Create.html" + GetQuerystring();

}

}
gv_vAlignTable['u95'] = 'top';
var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u97 = document.getElementById('u97');

var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u99 = document.getElementById('u99');

var u400 = document.getElementById('u400');

var u401 = document.getElementById('u401');
gv_vAlignTable['u401'] = 'top';
var u402 = document.getElementById('u402');
gv_vAlignTable['u402'] = 'top';
var u403 = document.getElementById('u403');
gv_vAlignTable['u403'] = 'top';
var u404 = document.getElementById('u404');
gv_vAlignTable['u404'] = 'top';
var u405 = document.getElementById('u405');
gv_vAlignTable['u405'] = 'top';
var u406 = document.getElementById('u406');

u406.style.cursor = 'pointer';
if (bIE) u406.attachEvent("onclick", Clicku406);
else u406.addEventListener("click", Clicku406, true);
function Clicku406(e)
{

if (true) {

SetGlobalVariableValue('$Extras', PopulateVariables('2'));

	SetPanelStateu72("pd1u72");

}

}
gv_vAlignTable['u406'] = 'top';
var u407 = document.getElementById('u407');

u407.style.cursor = 'pointer';
if (bIE) u407.attachEvent("onclick", Clicku407);
else u407.addEventListener("click", Clicku407, true);
function Clicku407(e)
{

if (true) {

SetGlobalVariableValue('$Extras', PopulateVariables('2'));

	SetPanelStateu72("pd1u72");

}

}

var u408 = document.getElementById('u408');
gv_vAlignTable['u408'] = 'center';
var u409 = document.getElementById('u409');

var u597 = document.getElementById('u597');
gv_vAlignTable['u597'] = 'center';
var u598 = document.getElementById('u598');

u598.style.cursor = 'pointer';
if (bIE) u598.attachEvent("onclick", Clicku598);
else u598.addEventListener("click", Clicku598, true);
function Clicku598(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u598', 'u599', sJsonu599, false);
ApplyImageAndTextStyles('o', 'u554', 'u555', '', false);
ApplyImageAndTextStyles('o', 'u594', 'u595', '', false);
ApplyImageAndTextStyles('o', 'u586', 'u587', '', false);
ApplyImageAndTextStyles('o', 'u590', 'u591', '', false);
ApplyImageAndTextStyles('o', 'u582', 'u583', '', false);
ApplyImageAndTextStyles('o', 'u578', 'u579', '', false);
ApplyImageAndTextStyles('o', 'u574', 'u575', '', false);
ApplyImageAndTextStyles('o', 'u570', 'u571', '', false);
ApplyImageAndTextStyles('o', 'u566', 'u567', '', false);
ApplyImageAndTextStyles('o', 'u562', 'u563', '', false);
ApplyImageAndTextStyles('o', 'u558', 'u559', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('4XL'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u599 = document.getElementById('u599');
gv_vAlignTable['u599'] = 'center';
var u410 = document.getElementById('u410');
gv_vAlignTable['u410'] = 'center';
var u411 = document.getElementById('u411');

var u412 = document.getElementById('u412');
gv_vAlignTable['u412'] = 'center';
var u413 = document.getElementById('u413');

var u414 = document.getElementById('u414');
gv_vAlignTable['u414'] = 'top';
var u415 = document.getElementById('u415');

var u416 = document.getElementById('u416');
gv_vAlignTable['u416'] = 'center';
var u417 = document.getElementById('u417');

u417.style.cursor = 'pointer';
if (bIE) u417.attachEvent("onclick", Clicku417);
else u417.addEventListener("click", Clicku417, true);
function Clicku417(e)
{

if (true) {

	BringToFront("u0");

	SetPanelStateu3("pd1u3");

}

}

var u418 = document.getElementById('u418');
gv_vAlignTable['u418'] = 'center';
var u419 = document.getElementById('u419');

u419.style.cursor = 'pointer';
if (bIE) u419.attachEvent("onclick", Clicku419);
else u419.addEventListener("click", Clicku419, true);
function Clicku419(e)
{

if (true) {

	self.location.href="Create.html" + GetQuerystring();

}

}
gv_vAlignTable['u419'] = 'top';
var u620 = document.getElementById('u620');

var u420 = document.getElementById('u420');

var u421 = document.getElementById('u421');
gv_vAlignTable['u421'] = 'center';
var u422 = document.getElementById('u422');
gv_vAlignTable['u422'] = 'top';
var u423 = document.getElementById('u423');

var u424 = document.getElementById('u424');
gv_vAlignTable['u424'] = 'center';
var u425 = document.getElementById('u425');

var u426 = document.getElementById('u426');
gv_vAlignTable['u426'] = 'center';
var u427 = document.getElementById('u427');

var u428 = document.getElementById('u428');
gv_vAlignTable['u428'] = 'center';
var u429 = document.getElementById('u429');
gv_vAlignTable['u429'] = 'top';
var u290 = document.getElementById('u290');

var u291 = document.getElementById('u291');
gv_vAlignTable['u291'] = 'top';
var u292 = document.getElementById('u292');

var u293 = document.getElementById('u293');
gv_vAlignTable['u293'] = 'top';
var u294 = document.getElementById('u294');

var u295 = document.getElementById('u295');
gv_vAlignTable['u295'] = 'top';
var u296 = document.getElementById('u296');

var u430 = document.getElementById('u430');
gv_vAlignTable['u430'] = 'top';
var u431 = document.getElementById('u431');

var u432 = document.getElementById('u432');

var u433 = document.getElementById('u433');
gv_vAlignTable['u433'] = 'center';
var u434 = document.getElementById('u434');

var u435 = document.getElementById('u435');
gv_vAlignTable['u435'] = 'center';
var u436 = document.getElementById('u436');
gv_vAlignTable['u436'] = 'top';
var u437 = document.getElementById('u437');
gv_vAlignTable['u437'] = 'top';
var u438 = document.getElementById('u438');
gv_vAlignTable['u438'] = 'top';
var u439 = document.getElementById('u439');
gv_vAlignTable['u439'] = 'top';
var u440 = document.getElementById('u440');
gv_vAlignTable['u440'] = 'top';
var u441 = document.getElementById('u441');
gv_vAlignTable['u441'] = 'top';
var u442 = document.getElementById('u442');
gv_vAlignTable['u442'] = 'top';
var u443 = document.getElementById('u443');
gv_vAlignTable['u443'] = 'top';
var u444 = document.getElementById('u444');
gv_vAlignTable['u444'] = 'top';
var u445 = document.getElementById('u445');
gv_vAlignTable['u445'] = 'top';
var u446 = document.getElementById('u446');
gv_vAlignTable['u446'] = 'top';
var u447 = document.getElementById('u447');

var u448 = document.getElementById('u448');
gv_vAlignTable['u448'] = 'center';
var u449 = document.getElementById('u449');

var u450 = document.getElementById('u450');

var u451 = document.getElementById('u451');
gv_vAlignTable['u451'] = 'center';
var u452 = document.getElementById('u452');
gv_vAlignTable['u452'] = 'top';
var u453 = document.getElementById('u453');

var u454 = document.getElementById('u454');
gv_vAlignTable['u454'] = 'center';
var u455 = document.getElementById('u455');

var u456 = document.getElementById('u456');

var u457 = document.getElementById('u457');
gv_vAlignTable['u457'] = 'center';
var u458 = document.getElementById('u458');
gv_vAlignTable['u458'] = 'top';
var u459 = document.getElementById('u459');

var u460 = document.getElementById('u460');

var u461 = document.getElementById('u461');
gv_vAlignTable['u461'] = 'center';
var u462 = document.getElementById('u462');

var u463 = document.getElementById('u463');
gv_vAlignTable['u463'] = 'center';
var u464 = document.getElementById('u464');

var u465 = document.getElementById('u465');
gv_vAlignTable['u465'] = 'center';
var u466 = document.getElementById('u466');

var u467 = document.getElementById('u467');
gv_vAlignTable['u467'] = 'center';
var u468 = document.getElementById('u468');

var u469 = document.getElementById('u469');
gv_vAlignTable['u469'] = 'center';
var u470 = document.getElementById('u470');

var u471 = document.getElementById('u471');
gv_vAlignTable['u471'] = 'center';
var u472 = document.getElementById('u472');

var u473 = document.getElementById('u473');
gv_vAlignTable['u473'] = 'center';
var u474 = document.getElementById('u474');

var u475 = document.getElementById('u475');

var u476 = document.getElementById('u476');
gv_vAlignTable['u476'] = 'center';
var u477 = document.getElementById('u477');
gv_vAlignTable['u477'] = 'top';
var u478 = document.getElementById('u478');

var u479 = document.getElementById('u479');

var u480 = document.getElementById('u480');
gv_vAlignTable['u480'] = 'center';
var u481 = document.getElementById('u481');

var u482 = document.getElementById('u482');
gv_vAlignTable['u482'] = 'top';
var u483 = document.getElementById('u483');

var u484 = document.getElementById('u484');
gv_vAlignTable['u484'] = 'center';
var u485 = document.getElementById('u485');

u485.style.cursor = 'pointer';
if (bIE) u485.attachEvent("onclick", Clicku485);
else u485.addEventListener("click", Clicku485, true);
function Clicku485(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Not enabled for this test."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u486 = document.getElementById('u486');
gv_vAlignTable['u486'] = 'top';
var u487 = document.getElementById('u487');

var u488 = document.getElementById('u488');
gv_vAlignTable['u488'] = 'center';
var u489 = document.getElementById('u489');

u489.style.cursor = 'pointer';
if (bIE) u489.attachEvent("onclick", Clicku489);
else u489.addEventListener("click", Clicku489, true);
function Clicku489(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('Youth Extra Small'))) {

ApplyImageAndTextStyles('o', 'u493', 'u494', '', false);
ApplyImageAndTextStyles('s', 'u489', 'u490', sJsonu490, false);
ApplyImageAndTextStyles('o', 'u497', 'u498', '', false);
ApplyImageAndTextStyles('o', 'u501', 'u502', '', false);
ApplyImageAndTextStyles('o', 'u505', 'u506', '', false);
ApplyImageAndTextStyles('o', 'u509', 'u510', '', false);
ApplyImageAndTextStyles('o', 'u513', 'u514', '', false);
ApplyImageAndTextStyles('o', 'u517', 'u518', '', false);
ApplyImageAndTextStyles('o', 'u521', 'u522', '', false);
ApplyImageAndTextStyles('o', 'u525', 'u526', '', false);
ApplyImageAndTextStyles('o', 'u533', 'u534', '', false);
ApplyImageAndTextStyles('o', 'u529', 'u530', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('Youth Extra Small'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

ApplyImageAndTextStyles('s', 'u489', 'u490', sJsonu490, false);
ApplyImageAndTextStyles('o', 'u493', 'u494', '', false);
ApplyImageAndTextStyles('o', 'u497', 'u498', '', false);
ApplyImageAndTextStyles('o', 'u501', 'u502', '', false);
ApplyImageAndTextStyles('o', 'u505', 'u506', '', false);
ApplyImageAndTextStyles('o', 'u513', 'u514', '', false);
ApplyImageAndTextStyles('o', 'u517', 'u518', '', false);
ApplyImageAndTextStyles('o', 'u509', 'u510', '', false);
ApplyImageAndTextStyles('o', 'u529', 'u530', '', false);
ApplyImageAndTextStyles('o', 'u533', 'u534', '', false);
ApplyImageAndTextStyles('o', 'u521', 'u522', '', false);
ApplyImageAndTextStyles('o', 'u525', 'u526', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$Qty1', PopulateVariables('2'));

}

}

var u204 = document.getElementById('u204');

var u300 = document.getElementById('u300');

var u301 = document.getElementById('u301');
gv_vAlignTable['u301'] = 'top';
var u302 = document.getElementById('u302');

var u303 = document.getElementById('u303');
gv_vAlignTable['u303'] = 'top';
var u304 = document.getElementById('u304');

var u305 = document.getElementById('u305');
gv_vAlignTable['u305'] = 'top';
var u306 = document.getElementById('u306');

var u307 = document.getElementById('u307');
gv_vAlignTable['u307'] = 'top';
var u308 = document.getElementById('u308');

var u309 = document.getElementById('u309');
gv_vAlignTable['u309'] = 'top';
var u497 = document.getElementById('u497');

u497.style.cursor = 'pointer';
if (bIE) u497.attachEvent("onclick", Clicku497);
else u497.addEventListener("click", Clicku497, true);
function Clicku497(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('Youth Medium'))) {

ApplyImageAndTextStyles('s', 'u497', 'u498', sJsonu498, false);
ApplyImageAndTextStyles('o', 'u489', 'u490', '', false);
ApplyImageAndTextStyles('o', 'u493', 'u494', '', false);
ApplyImageAndTextStyles('o', 'u501', 'u502', '', false);
ApplyImageAndTextStyles('o', 'u505', 'u506', '', false);
ApplyImageAndTextStyles('o', 'u509', 'u510', '', false);
ApplyImageAndTextStyles('o', 'u513', 'u514', '', false);
ApplyImageAndTextStyles('o', 'u533', 'u534', '', false);
ApplyImageAndTextStyles('o', 'u529', 'u530', '', false);
ApplyImageAndTextStyles('o', 'u525', 'u526', '', false);
ApplyImageAndTextStyles('o', 'u521', 'u522', '', false);
ApplyImageAndTextStyles('o', 'u517', 'u518', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('Youth Medium'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty1', PopulateVariables('2'));

ApplyImageAndTextStyles('o', 'u489', 'u490', '', false);
ApplyImageAndTextStyles('o', 'u493', 'u494', '', false);
ApplyImageAndTextStyles('o', 'u501', 'u502', '', false);
ApplyImageAndTextStyles('s', 'u497', 'u498', sJsonu498, false);
ApplyImageAndTextStyles('o', 'u505', 'u506', '', false);
ApplyImageAndTextStyles('o', 'u513', 'u514', '', false);
ApplyImageAndTextStyles('o', 'u517', 'u518', '', false);
ApplyImageAndTextStyles('o', 'u509', 'u510', '', false);
ApplyImageAndTextStyles('o', 'u521', 'u522', '', false);
ApplyImageAndTextStyles('o', 'u525', 'u526', '', false);
ApplyImageAndTextStyles('o', 'u529', 'u530', '', false);
ApplyImageAndTextStyles('o', 'u533', 'u534', '', false);
}

}

var u498 = document.getElementById('u498');
gv_vAlignTable['u498'] = 'center';
var u499 = document.getElementById('u499');

var u504 = document.getElementById('u504');
gv_vAlignTable['u504'] = 'center';
var u505 = document.getElementById('u505');

u505.style.cursor = 'pointer';
if (bIE) u505.attachEvent("onclick", Clicku505);
else u505.addEventListener("click", Clicku505, true);
function Clicku505(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('Youth Extra Large'))) {

ApplyImageAndTextStyles('s', 'u505', 'u506', sJsonu506, false);
ApplyImageAndTextStyles('o', 'u489', 'u490', '', false);
ApplyImageAndTextStyles('o', 'u493', 'u494', '', false);
ApplyImageAndTextStyles('o', 'u497', 'u498', '', false);
ApplyImageAndTextStyles('o', 'u501', 'u502', '', false);
ApplyImageAndTextStyles('o', 'u509', 'u510', '', false);
ApplyImageAndTextStyles('o', 'u513', 'u514', '', false);
ApplyImageAndTextStyles('o', 'u517', 'u518', '', false);
ApplyImageAndTextStyles('o', 'u521', 'u522', '', false);
ApplyImageAndTextStyles('o', 'u525', 'u526', '', false);
ApplyImageAndTextStyles('o', 'u529', 'u530', '', false);
ApplyImageAndTextStyles('o', 'u533', 'u534', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('Youth Extra Large'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$Qty1', PopulateVariables('2'));

ApplyImageAndTextStyles('o', 'u489', 'u490', '', false);
ApplyImageAndTextStyles('o', 'u497', 'u498', '', false);
ApplyImageAndTextStyles('o', 'u493', 'u494', '', false);
ApplyImageAndTextStyles('o', 'u501', 'u502', '', false);
ApplyImageAndTextStyles('s', 'u505', 'u506', sJsonu506, false);
ApplyImageAndTextStyles('o', 'u509', 'u510', '', false);
ApplyImageAndTextStyles('o', 'u517', 'u518', '', false);
ApplyImageAndTextStyles('o', 'u513', 'u514', '', false);
ApplyImageAndTextStyles('o', 'u533', 'u534', '', false);
ApplyImageAndTextStyles('o', 'u529', 'u530', '', false);
ApplyImageAndTextStyles('o', 'u525', 'u526', '', false);
ApplyImageAndTextStyles('o', 'u521', 'u522', '', false);
}

}

var u506 = document.getElementById('u506');
gv_vAlignTable['u506'] = 'center';
var u507 = document.getElementById('u507');

var u508 = document.getElementById('u508');
gv_vAlignTable['u508'] = 'center';
var u509 = document.getElementById('u509');

u509.style.cursor = 'pointer';
if (bIE) u509.attachEvent("onclick", Clicku509);
else u509.addEventListener("click", Clicku509, true);
function Clicku509(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('Small'))) {

ApplyImageAndTextStyles('s', 'u509', 'u510', sJsonu510, false);
ApplyImageAndTextStyles('o', 'u489', 'u490', '', false);
ApplyImageAndTextStyles('o', 'u493', 'u494', '', false);
ApplyImageAndTextStyles('o', 'u497', 'u498', '', false);
ApplyImageAndTextStyles('o', 'u501', 'u502', '', false);
ApplyImageAndTextStyles('o', 'u505', 'u506', '', false);
ApplyImageAndTextStyles('o', 'u513', 'u514', '', false);
ApplyImageAndTextStyles('o', 'u517', 'u518', '', false);
ApplyImageAndTextStyles('o', 'u525', 'u526', '', false);
ApplyImageAndTextStyles('o', 'u529', 'u530', '', false);
ApplyImageAndTextStyles('o', 'u521', 'u522', '', false);
ApplyImageAndTextStyles('o', 'u533', 'u534', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('Small'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$Qty1', PopulateVariables('2'));

ApplyImageAndTextStyles('o', 'u489', 'u490', '', false);
ApplyImageAndTextStyles('o', 'u493', 'u494', '', false);
ApplyImageAndTextStyles('o', 'u501', 'u502', '', false);
ApplyImageAndTextStyles('o', 'u497', 'u498', '', false);
ApplyImageAndTextStyles('o', 'u505', 'u506', '', false);
ApplyImageAndTextStyles('s', 'u509', 'u510', sJsonu510, false);
ApplyImageAndTextStyles('o', 'u517', 'u518', '', false);
ApplyImageAndTextStyles('o', 'u513', 'u514', '', false);
ApplyImageAndTextStyles('o', 'u521', 'u522', '', false);
ApplyImageAndTextStyles('o', 'u525', 'u526', '', false);
ApplyImageAndTextStyles('o', 'u533', 'u534', '', false);
ApplyImageAndTextStyles('o', 'u529', 'u530', '', false);
}

}

var u310 = document.getElementById('u310');

var u311 = document.getElementById('u311');
gv_vAlignTable['u311'] = 'top';
var u312 = document.getElementById('u312');

var u313 = document.getElementById('u313');

var u314 = document.getElementById('u314');
gv_vAlignTable['u314'] = 'center';
var u315 = document.getElementById('u315');

var u316 = document.getElementById('u316');
gv_vAlignTable['u316'] = 'center';
var u317 = document.getElementById('u317');

var u318 = document.getElementById('u318');
gv_vAlignTable['u318'] = 'center';
var u319 = document.getElementById('u319');

var u514 = document.getElementById('u514');
gv_vAlignTable['u514'] = 'center';
var u515 = document.getElementById('u515');

var u516 = document.getElementById('u516');
gv_vAlignTable['u516'] = 'center';
var u517 = document.getElementById('u517');

u517.style.cursor = 'pointer';
if (bIE) u517.attachEvent("onclick", Clicku517);
else u517.addEventListener("click", Clicku517, true);
function Clicku517(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('Large'))) {

ApplyImageAndTextStyles('s', 'u517', 'u518', sJsonu518, false);
ApplyImageAndTextStyles('o', 'u489', 'u490', '', false);
ApplyImageAndTextStyles('o', 'u493', 'u494', '', false);
ApplyImageAndTextStyles('o', 'u505', 'u506', '', false);
ApplyImageAndTextStyles('o', 'u509', 'u510', '', false);
ApplyImageAndTextStyles('o', 'u513', 'u514', '', false);
ApplyImageAndTextStyles('o', 'u497', 'u498', '', false);
ApplyImageAndTextStyles('o', 'u501', 'u502', '', false);
ApplyImageAndTextStyles('o', 'u525', 'u526', '', false);
ApplyImageAndTextStyles('o', 'u533', 'u534', '', false);
ApplyImageAndTextStyles('o', 'u529', 'u530', '', false);
ApplyImageAndTextStyles('o', 'u521', 'u522', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('Large'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$Qty1', PopulateVariables('2'));

ApplyImageAndTextStyles('o', 'u489', 'u490', '', false);
ApplyImageAndTextStyles('o', 'u493', 'u494', '', false);
ApplyImageAndTextStyles('o', 'u501', 'u502', '', false);
ApplyImageAndTextStyles('o', 'u505', 'u506', '', false);
ApplyImageAndTextStyles('o', 'u497', 'u498', '', false);
ApplyImageAndTextStyles('o', 'u509', 'u510', '', false);
ApplyImageAndTextStyles('o', 'u513', 'u514', '', false);
ApplyImageAndTextStyles('o', 'u521', 'u522', '', false);
ApplyImageAndTextStyles('o', 'u525', 'u526', '', false);
ApplyImageAndTextStyles('s', 'u517', 'u518', sJsonu518, false);
ApplyImageAndTextStyles('o', 'u533', 'u534', '', false);
ApplyImageAndTextStyles('o', 'u529', 'u530', '', false);
}

}

var u518 = document.getElementById('u518');
gv_vAlignTable['u518'] = 'center';
var u519 = document.getElementById('u519');

var u320 = document.getElementById('u320');
gv_vAlignTable['u320'] = 'center';
var u321 = document.getElementById('u321');

var u322 = document.getElementById('u322');

var u323 = document.getElementById('u323');
gv_vAlignTable['u323'] = 'center';
var u324 = document.getElementById('u324');

var u325 = document.getElementById('u325');
gv_vAlignTable['u325'] = 'center';
var u326 = document.getElementById('u326');

var u327 = document.getElementById('u327');
gv_vAlignTable['u327'] = 'center';
var u328 = document.getElementById('u328');

var u329 = document.getElementById('u329');
gv_vAlignTable['u329'] = 'center';
var u520 = document.getElementById('u520');
gv_vAlignTable['u520'] = 'center';
var u523 = document.getElementById('u523');

var u524 = document.getElementById('u524');
gv_vAlignTable['u524'] = 'center';
var u525 = document.getElementById('u525');

u525.style.cursor = 'pointer';
if (bIE) u525.attachEvent("onclick", Clicku525);
else u525.addEventListener("click", Clicku525, true);
function Clicku525(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('2XL'))) {

ApplyImageAndTextStyles('s', 'u525', 'u526', sJsonu526, false);
ApplyImageAndTextStyles('o', 'u489', 'u490', '', false);
ApplyImageAndTextStyles('o', 'u493', 'u494', '', false);
ApplyImageAndTextStyles('o', 'u497', 'u498', '', false);
ApplyImageAndTextStyles('o', 'u501', 'u502', '', false);
ApplyImageAndTextStyles('o', 'u509', 'u510', '', false);
ApplyImageAndTextStyles('o', 'u505', 'u506', '', false);
ApplyImageAndTextStyles('o', 'u529', 'u530', '', false);
ApplyImageAndTextStyles('o', 'u521', 'u522', '', false);
ApplyImageAndTextStyles('o', 'u533', 'u534', '', false);
ApplyImageAndTextStyles('o', 'u517', 'u518', '', false);
ApplyImageAndTextStyles('o', 'u513', 'u514', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('2XL'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

ApplyImageAndTextStyles('o', 'u489', 'u490', '', false);
ApplyImageAndTextStyles('o', 'u493', 'u494', '', false);
ApplyImageAndTextStyles('o', 'u497', 'u498', '', false);
ApplyImageAndTextStyles('o', 'u501', 'u502', '', false);
ApplyImageAndTextStyles('o', 'u509', 'u510', '', false);
ApplyImageAndTextStyles('o', 'u505', 'u506', '', false);
ApplyImageAndTextStyles('o', 'u513', 'u514', '', false);
ApplyImageAndTextStyles('o', 'u517', 'u518', '', false);
ApplyImageAndTextStyles('o', 'u521', 'u522', '', false);
ApplyImageAndTextStyles('s', 'u525', 'u526', sJsonu526, false);
ApplyImageAndTextStyles('o', 'u529', 'u530', '', false);
ApplyImageAndTextStyles('o', 'u533', 'u534', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$Qty1', PopulateVariables('2'));

}

}

var u526 = document.getElementById('u526');
gv_vAlignTable['u526'] = 'center';
var u527 = document.getElementById('u527');

var u528 = document.getElementById('u528');
gv_vAlignTable['u528'] = 'center';
var u529 = document.getElementById('u529');

u529.style.cursor = 'pointer';
if (bIE) u529.attachEvent("onclick", Clicku529);
else u529.addEventListener("click", Clicku529, true);
function Clicku529(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('3XL'))) {

ApplyImageAndTextStyles('s', 'u529', 'u530', sJsonu530, false);
ApplyImageAndTextStyles('o', 'u489', 'u490', '', false);
ApplyImageAndTextStyles('o', 'u493', 'u494', '', false);
ApplyImageAndTextStyles('o', 'u501', 'u502', '', false);
ApplyImageAndTextStyles('o', 'u497', 'u498', '', false);
ApplyImageAndTextStyles('o', 'u505', 'u506', '', false);
ApplyImageAndTextStyles('o', 'u509', 'u510', '', false);
ApplyImageAndTextStyles('o', 'u525', 'u526', '', false);
ApplyImageAndTextStyles('o', 'u521', 'u522', '', false);
ApplyImageAndTextStyles('o', 'u517', 'u518', '', false);
ApplyImageAndTextStyles('o', 'u513', 'u514', '', false);
ApplyImageAndTextStyles('o', 'u533', 'u534', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('3XL'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

ApplyImageAndTextStyles('o', 'u489', 'u490', '', false);
ApplyImageAndTextStyles('o', 'u497', 'u498', '', false);
ApplyImageAndTextStyles('o', 'u493', 'u494', '', false);
ApplyImageAndTextStyles('o', 'u501', 'u502', '', false);
ApplyImageAndTextStyles('o', 'u505', 'u506', '', false);
ApplyImageAndTextStyles('o', 'u509', 'u510', '', false);
ApplyImageAndTextStyles('o', 'u517', 'u518', '', false);
ApplyImageAndTextStyles('o', 'u513', 'u514', '', false);
ApplyImageAndTextStyles('o', 'u521', 'u522', '', false);
ApplyImageAndTextStyles('o', 'u525', 'u526', '', false);
ApplyImageAndTextStyles('o', 'u533', 'u534', '', false);
ApplyImageAndTextStyles('s', 'u529', 'u530', sJsonu530, false);
SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$Qty1', PopulateVariables('2'));

}

}

var u330 = document.getElementById('u330');

var u331 = document.getElementById('u331');

var u332 = document.getElementById('u332');
gv_vAlignTable['u332'] = 'center';
var u333 = document.getElementById('u333');

var u334 = document.getElementById('u334');
gv_vAlignTable['u334'] = 'center';
var u335 = document.getElementById('u335');

var u336 = document.getElementById('u336');
gv_vAlignTable['u336'] = 'center';
var u337 = document.getElementById('u337');

var u338 = document.getElementById('u338');
gv_vAlignTable['u338'] = 'center';
var u339 = document.getElementById('u339');
gv_vAlignTable['u339'] = 'top';
var u530 = document.getElementById('u530');
gv_vAlignTable['u530'] = 'center';
var u534 = document.getElementById('u534');
gv_vAlignTable['u534'] = 'center';
var u535 = document.getElementById('u535');

var u536 = document.getElementById('u536');

var u537 = document.getElementById('u537');
gv_vAlignTable['u537'] = 'center';
var u538 = document.getElementById('u538');

var u539 = document.getElementById('u539');
gv_vAlignTable['u539'] = 'center';
var u340 = document.getElementById('u340');
gv_vAlignTable['u340'] = 'top';
var u341 = document.getElementById('u341');
gv_vAlignTable['u341'] = 'top';
var u342 = document.getElementById('u342');
gv_vAlignTable['u342'] = 'top';
var u343 = document.getElementById('u343');

var u344 = document.getElementById('u344');

var u345 = document.getElementById('u345');
gv_vAlignTable['u345'] = 'center';
var u346 = document.getElementById('u346');

u346.style.cursor = 'pointer';
if (bIE) u346.attachEvent("onclick", Clicku346);
else u346.addEventListener("click", Clicku346, true);
function Clicku346(e)
{

if (true) {

SetGlobalVariableValue('$Extras', PopulateVariables('1'));

	SetPanelStateu72("pd1u72");

}

}
gv_vAlignTable['u346'] = 'top';
var u347 = document.getElementById('u347');

u347.style.cursor = 'pointer';
if (bIE) u347.attachEvent("onclick", Clicku347);
else u347.addEventListener("click", Clicku347, true);
function Clicku347(e)
{

if (true) {

SetGlobalVariableValue('$Extras', PopulateVariables('1'));

	SetPanelStateu72("pd1u72");

}

}

var u348 = document.getElementById('u348');
gv_vAlignTable['u348'] = 'center';
var u349 = document.getElementById('u349');
gv_vAlignTable['u349'] = 'top';
var u540 = document.getElementById('u540');

u540.style.cursor = 'pointer';
if (bIE) u540.attachEvent("onclick", Clicku540);
else u540.addEventListener("click", Clicku540, true);
function Clicku540(e)
{

if (true) {

	SetPanelStateu620("pd0u620");

	SetPanelStateu547("pd0u547");

	SetPanelVisibilityu547("");

SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

	SetPanelVisibilityu478("hidden");

	MoveWidgetTo('u601',16,550);

}

}

var u544 = document.getElementById('u544');

var u545 = document.getElementById('u545');
gv_vAlignTable['u545'] = 'top';
var u546 = document.getElementById('u546');

var u547 = document.getElementById('u547');

var u548 = document.getElementById('u548');
gv_vAlignTable['u548'] = 'top';
var u549 = document.getElementById('u549');

var u350 = document.getElementById('u350');
gv_vAlignTable['u350'] = 'top';
var u351 = document.getElementById('u351');

var u352 = document.getElementById('u352');
gv_vAlignTable['u352'] = 'center';
var u353 = document.getElementById('u353');

u353.style.cursor = 'pointer';
if (bIE) u353.attachEvent("onclick", Clicku353);
else u353.addEventListener("click", Clicku353, true);
function Clicku353(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Not enabled for this test"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}
gv_vAlignTable['u353'] = 'top';
var u354 = document.getElementById('u354');

u354.style.cursor = 'pointer';
if (bIE) u354.attachEvent("onclick", Clicku354);
else u354.addEventListener("click", Clicku354, true);
function Clicku354(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Not enabled for this test."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u355 = document.getElementById('u355');
gv_vAlignTable['u355'] = 'center';
var u356 = document.getElementById('u356');

var u357 = document.getElementById('u357');

var u358 = document.getElementById('u358');
gv_vAlignTable['u358'] = 'top';
var u359 = document.getElementById('u359');

var u550 = document.getElementById('u550');
gv_vAlignTable['u550'] = 'center';
var u554 = document.getElementById('u554');

u554.style.cursor = 'pointer';
if (bIE) u554.attachEvent("onclick", Clicku554);
else u554.addEventListener("click", Clicku554, true);
function Clicku554(e)
{

if (true) {

ApplyImageAndTextStyles('o', 'u558', 'u559', '', false);
ApplyImageAndTextStyles('s', 'u554', 'u555', sJsonu555, false);
ApplyImageAndTextStyles('o', 'u562', 'u563', '', false);
ApplyImageAndTextStyles('o', 'u566', 'u567', '', false);
ApplyImageAndTextStyles('o', 'u570', 'u571', '', false);
ApplyImageAndTextStyles('o', 'u574', 'u575', '', false);
ApplyImageAndTextStyles('o', 'u578', 'u579', '', false);
ApplyImageAndTextStyles('o', 'u582', 'u583', '', false);
ApplyImageAndTextStyles('o', 'u586', 'u587', '', false);
ApplyImageAndTextStyles('o', 'u590', 'u591', '', false);
ApplyImageAndTextStyles('o', 'u598', 'u599', '', false);
ApplyImageAndTextStyles('o', 'u594', 'u595', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Youth Extra Small'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u555 = document.getElementById('u555');
gv_vAlignTable['u555'] = 'center';
var u556 = document.getElementById('u556');

var u557 = document.getElementById('u557');
gv_vAlignTable['u557'] = 'center';
var u558 = document.getElementById('u558');

u558.style.cursor = 'pointer';
if (bIE) u558.attachEvent("onclick", Clicku558);
else u558.addEventListener("click", Clicku558, true);
function Clicku558(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u558', 'u559', sJsonu559, false);
ApplyImageAndTextStyles('o', 'u554', 'u555', '', false);
ApplyImageAndTextStyles('o', 'u562', 'u563', '', false);
ApplyImageAndTextStyles('o', 'u570', 'u571', '', false);
ApplyImageAndTextStyles('o', 'u566', 'u567', '', false);
ApplyImageAndTextStyles('o', 'u574', 'u575', '', false);
ApplyImageAndTextStyles('o', 'u578', 'u579', '', false);
ApplyImageAndTextStyles('o', 'u582', 'u583', '', false);
ApplyImageAndTextStyles('o', 'u586', 'u587', '', false);
ApplyImageAndTextStyles('o', 'u590', 'u591', '', false);
ApplyImageAndTextStyles('o', 'u594', 'u595', '', false);
ApplyImageAndTextStyles('o', 'u598', 'u599', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Youth Small'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u559 = document.getElementById('u559');
gv_vAlignTable['u559'] = 'center';
var u360 = document.getElementById('u360');
gv_vAlignTable['u360'] = 'top';
var u361 = document.getElementById('u361');

var u362 = document.getElementById('u362');
gv_vAlignTable['u362'] = 'top';
var u363 = document.getElementById('u363');

var u364 = document.getElementById('u364');
gv_vAlignTable['u364'] = 'top';
var u365 = document.getElementById('u365');

var u366 = document.getElementById('u366');
gv_vAlignTable['u366'] = 'top';
var u367 = document.getElementById('u367');

var u368 = document.getElementById('u368');
gv_vAlignTable['u368'] = 'top';
var u369 = document.getElementById('u369');

var u564 = document.getElementById('u564');

var u565 = document.getElementById('u565');
gv_vAlignTable['u565'] = 'center';
var u566 = document.getElementById('u566');

u566.style.cursor = 'pointer';
if (bIE) u566.attachEvent("onclick", Clicku566);
else u566.addEventListener("click", Clicku566, true);
function Clicku566(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u566', 'u567', sJsonu567, false);
ApplyImageAndTextStyles('o', 'u554', 'u555', '', false);
ApplyImageAndTextStyles('o', 'u558', 'u559', '', false);
ApplyImageAndTextStyles('o', 'u570', 'u571', '', false);
ApplyImageAndTextStyles('o', 'u578', 'u579', '', false);
ApplyImageAndTextStyles('o', 'u562', 'u563', '', false);
ApplyImageAndTextStyles('o', 'u574', 'u575', '', false);
ApplyImageAndTextStyles('o', 'u582', 'u583', '', false);
ApplyImageAndTextStyles('o', 'u586', 'u587', '', false);
ApplyImageAndTextStyles('o', 'u590', 'u591', '', false);
ApplyImageAndTextStyles('o', 'u594', 'u595', '', false);
ApplyImageAndTextStyles('o', 'u598', 'u599', '', false);
SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

SetGlobalVariableValue('$Size1', PopulateVariables('Youth Large'));

}

}

var u567 = document.getElementById('u567');
gv_vAlignTable['u567'] = 'center';
var u568 = document.getElementById('u568');

var u569 = document.getElementById('u569');
gv_vAlignTable['u569'] = 'center';
var u370 = document.getElementById('u370');
gv_vAlignTable['u370'] = 'top';
var u371 = document.getElementById('u371');

var u372 = document.getElementById('u372');
gv_vAlignTable['u372'] = 'top';
var u373 = document.getElementById('u373');

var u374 = document.getElementById('u374');
gv_vAlignTable['u374'] = 'top';
var u375 = document.getElementById('u375');

var u376 = document.getElementById('u376');
gv_vAlignTable['u376'] = 'top';
var u377 = document.getElementById('u377');

var u378 = document.getElementById('u378');
gv_vAlignTable['u378'] = 'top';
var u379 = document.getElementById('u379');

var u574 = document.getElementById('u574');

u574.style.cursor = 'pointer';
if (bIE) u574.attachEvent("onclick", Clicku574);
else u574.addEventListener("click", Clicku574, true);
function Clicku574(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u574', 'u575', sJsonu575, false);
ApplyImageAndTextStyles('o', 'u554', 'u555', '', false);
ApplyImageAndTextStyles('o', 'u558', 'u559', '', false);
ApplyImageAndTextStyles('o', 'u562', 'u563', '', false);
ApplyImageAndTextStyles('o', 'u566', 'u567', '', false);
ApplyImageAndTextStyles('o', 'u570', 'u571', '', false);
ApplyImageAndTextStyles('o', 'u578', 'u579', '', false);
ApplyImageAndTextStyles('o', 'u582', 'u583', '', false);
ApplyImageAndTextStyles('o', 'u590', 'u591', '', false);
ApplyImageAndTextStyles('o', 'u594', 'u595', '', false);
ApplyImageAndTextStyles('o', 'u586', 'u587', '', false);
ApplyImageAndTextStyles('o', 'u598', 'u599', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Small'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u575 = document.getElementById('u575');
gv_vAlignTable['u575'] = 'center';
var u576 = document.getElementById('u576');

var u577 = document.getElementById('u577');
gv_vAlignTable['u577'] = 'center';
var u578 = document.getElementById('u578');

u578.style.cursor = 'pointer';
if (bIE) u578.attachEvent("onclick", Clicku578);
else u578.addEventListener("click", Clicku578, true);
function Clicku578(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u578', 'u579', sJsonu579, false);
ApplyImageAndTextStyles('o', 'u554', 'u555', '', false);
ApplyImageAndTextStyles('o', 'u558', 'u559', '', false);
ApplyImageAndTextStyles('o', 'u566', 'u567', '', false);
ApplyImageAndTextStyles('o', 'u574', 'u575', '', false);
ApplyImageAndTextStyles('o', 'u562', 'u563', '', false);
ApplyImageAndTextStyles('o', 'u570', 'u571', '', false);
ApplyImageAndTextStyles('o', 'u582', 'u583', '', false);
ApplyImageAndTextStyles('o', 'u594', 'u595', '', false);
ApplyImageAndTextStyles('o', 'u590', 'u591', '', false);
ApplyImageAndTextStyles('o', 'u586', 'u587', '', false);
ApplyImageAndTextStyles('o', 'u598', 'u599', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Medium'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u579 = document.getElementById('u579');
gv_vAlignTable['u579'] = 'center';
var u380 = document.getElementById('u380');
gv_vAlignTable['u380'] = 'top';
var u381 = document.getElementById('u381');
gv_vAlignTable['u381'] = 'top';
var u382 = document.getElementById('u382');
gv_vAlignTable['u382'] = 'top';
var u383 = document.getElementById('u383');
gv_vAlignTable['u383'] = 'top';
var u384 = document.getElementById('u384');
gv_vAlignTable['u384'] = 'top';
var u385 = document.getElementById('u385');
gv_vAlignTable['u385'] = 'top';
var u386 = document.getElementById('u386');
gv_vAlignTable['u386'] = 'top';
var u387 = document.getElementById('u387');

var u388 = document.getElementById('u388');
gv_vAlignTable['u388'] = 'center';
var u389 = document.getElementById('u389');

var u584 = document.getElementById('u584');

var u585 = document.getElementById('u585');
gv_vAlignTable['u585'] = 'center';
var u586 = document.getElementById('u586');

u586.style.cursor = 'pointer';
if (bIE) u586.attachEvent("onclick", Clicku586);
else u586.addEventListener("click", Clicku586, true);
function Clicku586(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u586', 'u587', sJsonu587, false);
ApplyImageAndTextStyles('o', 'u554', 'u555', '', false);
ApplyImageAndTextStyles('o', 'u558', 'u559', '', false);
ApplyImageAndTextStyles('o', 'u566', 'u567', '', false);
ApplyImageAndTextStyles('o', 'u574', 'u575', '', false);
ApplyImageAndTextStyles('o', 'u562', 'u563', '', false);
ApplyImageAndTextStyles('o', 'u570', 'u571', '', false);
ApplyImageAndTextStyles('o', 'u578', 'u579', '', false);
ApplyImageAndTextStyles('o', 'u582', 'u583', '', false);
ApplyImageAndTextStyles('o', 'u590', 'u591', '', false);
ApplyImageAndTextStyles('o', 'u598', 'u599', '', false);
ApplyImageAndTextStyles('o', 'u594', 'u595', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Extra Large'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u587 = document.getElementById('u587');
gv_vAlignTable['u587'] = 'center';
var u588 = document.getElementById('u588');

var u589 = document.getElementById('u589');
gv_vAlignTable['u589'] = 'center';
var u200 = document.getElementById('u200');

var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'top';
var u202 = document.getElementById('u202');

var u390 = document.getElementById('u390');

var u391 = document.getElementById('u391');
gv_vAlignTable['u391'] = 'top';
var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'top';
var u393 = document.getElementById('u393');
gv_vAlignTable['u393'] = 'top';
var u394 = document.getElementById('u394');

var u395 = document.getElementById('u395');
gv_vAlignTable['u395'] = 'top';
var u396 = document.getElementById('u396');

var u397 = document.getElementById('u397');
gv_vAlignTable['u397'] = 'top';
var u398 = document.getElementById('u398');

var u399 = document.getElementById('u399');
gv_vAlignTable['u399'] = 'top';
var u590 = document.getElementById('u590');

u590.style.cursor = 'pointer';
if (bIE) u590.attachEvent("onclick", Clicku590);
else u590.addEventListener("click", Clicku590, true);
function Clicku590(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u590', 'u591', sJsonu591, false);
ApplyImageAndTextStyles('o', 'u554', 'u555', '', false);
ApplyImageAndTextStyles('o', 'u558', 'u559', '', false);
ApplyImageAndTextStyles('o', 'u562', 'u563', '', false);
ApplyImageAndTextStyles('o', 'u566', 'u567', '', false);
ApplyImageAndTextStyles('o', 'u574', 'u575', '', false);
ApplyImageAndTextStyles('o', 'u570', 'u571', '', false);
ApplyImageAndTextStyles('o', 'u594', 'u595', '', false);
ApplyImageAndTextStyles('o', 'u586', 'u587', '', false);
ApplyImageAndTextStyles('o', 'u598', 'u599', '', false);
ApplyImageAndTextStyles('o', 'u582', 'u583', '', false);
ApplyImageAndTextStyles('o', 'u578', 'u579', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('2XL'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u591 = document.getElementById('u591');
gv_vAlignTable['u591'] = 'center';
var u592 = document.getElementById('u592');

var u593 = document.getElementById('u593');
gv_vAlignTable['u593'] = 'center';
var u594 = document.getElementById('u594');

u594.style.cursor = 'pointer';
if (bIE) u594.attachEvent("onclick", Clicku594);
else u594.addEventListener("click", Clicku594, true);
function Clicku594(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u594', 'u595', sJsonu595, false);
ApplyImageAndTextStyles('o', 'u554', 'u555', '', false);
ApplyImageAndTextStyles('o', 'u558', 'u559', '', false);
ApplyImageAndTextStyles('o', 'u566', 'u567', '', false);
ApplyImageAndTextStyles('o', 'u562', 'u563', '', false);
ApplyImageAndTextStyles('o', 'u570', 'u571', '', false);
ApplyImageAndTextStyles('o', 'u574', 'u575', '', false);
ApplyImageAndTextStyles('o', 'u590', 'u591', '', false);
ApplyImageAndTextStyles('o', 'u586', 'u587', '', false);
ApplyImageAndTextStyles('o', 'u582', 'u583', '', false);
ApplyImageAndTextStyles('o', 'u578', 'u579', '', false);
ApplyImageAndTextStyles('o', 'u598', 'u599', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('3XL'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u595 = document.getElementById('u595');
gv_vAlignTable['u595'] = 'center';
var u596 = document.getElementById('u596');

var u210 = document.getElementById('u210');

var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'top';
var u212 = document.getElementById('u212');

var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'top';
var u214 = document.getElementById('u214');

var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'top';
var u216 = document.getElementById('u216');

var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'top';
var u218 = document.getElementById('u218');

var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'top';
var u220 = document.getElementById('u220');

var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'top';
var u222 = document.getElementById('u222');

var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'top';
var u224 = document.getElementById('u224');

var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'top';
var u226 = document.getElementById('u226');

var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'top';
var u228 = document.getElementById('u228');

var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'top';
var u600 = document.getElementById('u600');
gv_vAlignTable['u600'] = 'top';
var u230 = document.getElementById('u230');

var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'top';
var u232 = document.getElementById('u232');

var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'top';
var u234 = document.getElementById('u234');

var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'top';
var u236 = document.getElementById('u236');

var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'top';
var u238 = document.getElementById('u238');

var u239 = document.getElementById('u239');
gv_vAlignTable['u239'] = 'top';
var u610 = document.getElementById('u610');
gv_vAlignTable['u610'] = 'center';
var u240 = document.getElementById('u240');

var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'top';
var u242 = document.getElementById('u242');

var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'top';
var u244 = document.getElementById('u244');

var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'top';
var u246 = document.getElementById('u246');

var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'top';
var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'top';
var u249 = document.getElementById('u249');

u249.style.cursor = 'pointer';
if (bIE) u249.attachEvent("onclick", Clicku249);
else u249.addEventListener("click", Clicku249, true);
function Clicku249(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Display participant sheet"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}
gv_vAlignTable['u249'] = 'top';
var u601 = document.getElementById('u601');

var u602 = document.getElementById('u602');
gv_vAlignTable['u602'] = 'top';
var u603 = document.getElementById('u603');

u603.style.cursor = 'pointer';
if (bIE) u603.attachEvent("onclick", Clicku603);
else u603.addEventListener("click", Clicku603, true);
function Clicku603(e)
{

if (true) {

	SetPanelStateu343("pd0u343");

	SetPanelStateu72("pd0u72");

}

}

var u604 = document.getElementById('u604');
gv_vAlignTable['u604'] = 'bottom';
var u605 = document.getElementById('u605');

u605.style.cursor = 'pointer';
if (bIE) u605.attachEvent("onclick", Clicku605);
else u605.addEventListener("click", Clicku605, true);
function Clicku605(e)
{

if ((GetGlobalVariableValue('$Extras')) == (PopulateVariables('1'))) {

	SetPanelStateu72("pd0u72");

	SetPanelStateu343("pd2u343");

SetWidgetRichText('u393', PopulateVariables('<span style=" font-family:\'Helvetica\'; font-size:12px;">[[XName]]</span>'));

SetWidgetRichText('u391', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:12px;">[[XEmail]]</span>'));

SetWidgetRichText('u397', PopulateVariables('<span style=" font-family:\'Helvetica\'; font-size:12px;">[[XComments]] [[quotevar]]</span>'));

SetWidgetRichText('u395', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:12px;">[[Qty1]] [[Size1]]&nbsp; [[Qty2]] [[Size2]]</span>'));

SetWidgetRichText('u358', PopulateVariables('<span style=" font-family:\'Helvetica\'; font-size:12px;">[[XEmail]]</span>'));

SetWidgetRichText('u360', PopulateVariables('<span style=" font-family:\'Helvetica\'; font-size:12px;">[[XName]]</span>'));

SetWidgetRichText('u362', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:12px;">2 Medium</span>'));

SetWidgetRichText('u364', PopulateVariables('<span style=" font-family:\'Helvetica\'; font-size:12px;">[[XComments]] [[quotevar]]</span>'));

SetWidgetRichText('u79', PopulateVariables('<span style=" font-family:\'Arial\'; font-size:13px;">4 people signed up for 8 shirts</span>'));

SetWidgetRichText('u98', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#003366; font-size:16px;">4 people have signed up</span></b>'));

SetWidgetRichText('u145', PopulateVariables('<div style="text-align:right"><span style=" font-family:\'Helvetica\'; color:#003366; font-size:13px;">&nbsp; Total Quantity:&nbsp; 10</span></div>'));

SetWidgetRichText('u247', PopulateVariables('<div style="text-align:right"><span style=" font-family:\'Helvetica\'; font-size:12px;">8</span></div>'));

SetWidgetFormText('u613', PopulateVariables(''));

SetWidgetFormText('u615', PopulateVariables(''));

SetWidgetFormText('u617', PopulateVariables(''));

ApplyImageAndTextStyles('o', 'u489', 'u490', '', false);
ApplyImageAndTextStyles('o', 'u493', 'u494', '', false);
ApplyImageAndTextStyles('o', 'u497', 'u498', '', false);
ApplyImageAndTextStyles('o', 'u501', 'u502', '', false);
ApplyImageAndTextStyles('o', 'u505', 'u506', '', false);
ApplyImageAndTextStyles('o', 'u509', 'u510', '', false);
ApplyImageAndTextStyles('o', 'u513', 'u514', '', false);
ApplyImageAndTextStyles('o', 'u521', 'u522', '', false);
ApplyImageAndTextStyles('o', 'u525', 'u526', '', false);
ApplyImageAndTextStyles('o', 'u517', 'u518', '', false);
ApplyImageAndTextStyles('o', 'u529', 'u530', '', false);
ApplyImageAndTextStyles('o', 'u554', 'u555', '', false);
ApplyImageAndTextStyles('o', 'u558', 'u559', '', false);
ApplyImageAndTextStyles('o', 'u533', 'u534', '', false);
ApplyImageAndTextStyles('o', 'u562', 'u563', '', false);
ApplyImageAndTextStyles('o', 'u566', 'u567', '', false);
ApplyImageAndTextStyles('o', 'u570', 'u571', '', false);
ApplyImageAndTextStyles('o', 'u578', 'u579', '', false);
ApplyImageAndTextStyles('o', 'u574', 'u575', '', false);
ApplyImageAndTextStyles('o', 'u582', 'u583', '', false);
ApplyImageAndTextStyles('o', 'u590', 'u591', '', false);
ApplyImageAndTextStyles('o', 'u586', 'u587', '', false);
ApplyImageAndTextStyles('o', 'u598', 'u599', '', false);
ApplyImageAndTextStyles('o', 'u594', 'u595', '', false);
}
else
if ((GetGlobalVariableValue('$Extras')) == (PopulateVariables('2'))) {

	BringToFront("u72");

	SetPanelStateu343("pd1u343");

SetWidgetRichText('u372', PopulateVariables('<span style=" font-family:\'Helvetica\'; font-size:12px;">[[XName]]</span>'));

SetWidgetRichText('u370', PopulateVariables('<span style=" font-family:\'Helvetica\'; font-size:12px;">[[XEmail]]</span>'));

SetWidgetRichText('u376', PopulateVariables('<span style=" font-family:\'Helvetica\'; font-size:12px;">[[XComments]] [[quotevar]]</span>'));

SetWidgetRichText('u374', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:12px;">[[Qty1]] [[Size1]]&nbsp; [[Qty2]] [[Size2]]</span>'));

;

;

;

;

SetWidgetRichText('u79', PopulateVariables('<span style=" font-family:\'Arial\'; font-size:13px;">5 people signed up for 10 shirts</span>'));

SetWidgetRichText('u98', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#003366; font-size:16px;">5 people have signed up</span></b>'));

SetWidgetRichText('u247', PopulateVariables('<div style="text-align:right"><span style=" font-family:\'Helvetica\'; font-size:12px;">10</span></div>'));

}

}

var u606 = document.getElementById('u606');
gv_vAlignTable['u606'] = 'bottom';
var u607 = document.getElementById('u607');

var u608 = document.getElementById('u608');
gv_vAlignTable['u608'] = 'center';
var u609 = document.getElementById('u609');

var u250 = document.getElementById('u250');

var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'center';
var u252 = document.getElementById('u252');

var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'center';
var u254 = document.getElementById('u254');

var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'center';
var u256 = document.getElementById('u256');

var u257 = document.getElementById('u257');

var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'center';
var u259 = document.getElementById('u259');

u259.style.cursor = 'pointer';
if (bIE) u259.attachEvent("onclick", Clicku259);
else u259.addEventListener("click", Clicku259, true);
function Clicku259(e)
{

if (true) {

	SetPanelStateu80("pd0u80");

}

}
gv_vAlignTable['u259'] = 'top';
var u611 = document.getElementById('u611');
gv_vAlignTable['u611'] = 'top';
var u612 = document.getElementById('u612');
gv_vAlignTable['u612'] = 'top';
var u613 = document.getElementById('u613');

if (bIE) u613.attachEvent("onblur", LostFocusu613);
else u613.addEventListener("blur", LostFocusu613, true);
function LostFocusu613(e)
{

if (true) {

SetGlobalVariableValue('$XName', GetWidgetFormText('u613'));

}

}

var u614 = document.getElementById('u614');
gv_vAlignTable['u614'] = 'top';
var u615 = document.getElementById('u615');

if (bIE) u615.attachEvent("onblur", LostFocusu615);
else u615.addEventListener("blur", LostFocusu615, true);
function LostFocusu615(e)
{

if (true) {

SetGlobalVariableValue('$XEmail', GetWidgetFormText('u615'));

}

}

var u616 = document.getElementById('u616');
gv_vAlignTable['u616'] = 'top';
var u617 = document.getElementById('u617');

if (bIE) u617.attachEvent("onblur", LostFocusu617);
else u617.addEventListener("blur", LostFocusu617, true);
function LostFocusu617(e)
{

if (true) {

SetGlobalVariableValue('$XComments', GetWidgetFormText('u617'));

}

}

var u618 = document.getElementById('u618');

u618.style.cursor = 'pointer';
if (bIE) u618.attachEvent("onclick", Clicku618);
else u618.addEventListener("click", Clicku618, true);
function Clicku618(e)
{

if ((GetCheckState('u618')) == (true)) {

SetGlobalVariableValue('$quotevar', PopulateVariables('(Private)'));

}

}

var u619 = document.getElementById('u619');
gv_vAlignTable['u619'] = 'top';
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

	BringToFront("u72");

}

}

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u260 = document.getElementById('u260');

u260.style.cursor = 'pointer';
if (bIE) u260.attachEvent("onclick", Clicku260);
else u260.addEventListener("click", Clicku260, true);
function Clicku260(e)
{

if (true) {

	SetPanelStateu80("pd1u80");

}

}
gv_vAlignTable['u260'] = 'top';
var u261 = document.getElementById('u261');

u261.style.cursor = 'pointer';
if (bIE) u261.attachEvent("onclick", Clicku261);
else u261.addEventListener("click", Clicku261, true);
function Clicku261(e)
{

if (true) {

	SetPanelStateu80("pd2u80");

}

}
gv_vAlignTable['u261'] = 'top';
var u262 = document.getElementById('u262');

u262.style.cursor = 'pointer';
if (bIE) u262.attachEvent("onclick", Clicku262);
else u262.addEventListener("click", Clicku262, true);
function Clicku262(e)
{

if (true) {

	SetPanelStateu80("pd3u80");

}

}
gv_vAlignTable['u262'] = 'top';
var u263 = document.getElementById('u263');

var u264 = document.getElementById('u264');

var u265 = document.getElementById('u265');
gv_vAlignTable['u265'] = 'top';
var u266 = document.getElementById('u266');

var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'top';
var u268 = document.getElementById('u268');

var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'top';
var u621 = document.getElementById('u621');

var u622 = document.getElementById('u622');
gv_vAlignTable['u622'] = 'center';
var u623 = document.getElementById('u623');

var u624 = document.getElementById('u624');
gv_vAlignTable['u624'] = 'center';
var u625 = document.getElementById('u625');

var u626 = document.getElementById('u626');

var u627 = document.getElementById('u627');
gv_vAlignTable['u627'] = 'center';
var u628 = document.getElementById('u628');
gv_vAlignTable['u628'] = 'top';
if (window.OnLoad) OnLoad();
