
var PageName = 'Create Group';
var PageId = 'pb523ba1f4ae3484caa0d0e837974aa84'
var PageUrl = 'Create_Group.html'
document.title = 'Create Group';

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
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&price1=' + encodeURIComponent($price1) + '&price2=' + encodeURIComponent($price2) + '&GroupName=' + encodeURIComponent($GroupName) + '&YourName=' + encodeURIComponent($YourName) + '&groupPrice=' + encodeURIComponent($groupPrice) + '&contanctName=' + encodeURIComponent($contanctName) + '&yourEmail=' + encodeURIComponent($yourEmail) + '&closeDate=' + encodeURIComponent($closeDate) + '&personalize=' + encodeURIComponent($personalize) + '&quotevar=' + encodeURIComponent($quotevar) + '&CSUM=1';
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
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  return value;
}

function OnLoad(e) {

}

eval(GetDynamicPanelScript('u95', 1));

eval(GetDynamicPanelScript('u288', 1));

eval(GetDynamicPanelScript('u337', 1));

eval(GetDynamicPanelScript('u200', 1));

eval(GetDynamicPanelScript('u84', 2));

eval(GetDynamicPanelScript('u219', 1));

eval(GetDynamicPanelScript('u279', 1));

eval(GetDynamicPanelScript('u105', 1));

eval(GetDynamicPanelScript('u1', 7));

eval(GetDynamicPanelScript('u167', 2));

eval(GetDynamicPanelScript('u323', 2));

eval(GetDynamicPanelScript('u258', 1));

eval(GetDynamicPanelScript('u158', 1));

eval(GetDynamicPanelScript('u40', 1));

eval(GetDynamicPanelScript('u41', 2));

eval(GetDynamicPanelScript('u58', 1));

eval(GetDynamicPanelScript('u193', 2));

eval(GetDynamicPanelScript('u111', 1));

eval(GetDynamicPanelScript('u280', 2));

eval(GetDynamicPanelScript('u297', 1));

eval(GetDynamicPanelScript('u223', 2));

eval(GetDynamicPanelScript('u48', 1));

eval(GetDynamicPanelScript('u334', 1));

var u230 = document.getElementById('u230');

var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'center';
var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'top';
var u233 = document.getElementById('u233');

var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u71 = document.getElementById('u71');

var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'bottom';
var u101 = document.getElementById('u101');

u101.style.cursor = 'pointer';
if (bIE) u101.attachEvent("onclick", Clicku101);
else u101.addEventListener("click", Clicku101, true);
function Clicku101(e)
{

if ((GetCheckState('u101')) == (true)) {

SetGlobalVariableValue('$personalize', PopulateVariables('yes'));

	SetPanelVisibilityu105("");

SetWidgetRichText('u110', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#003399; font-size:13px;">Printing individual names and numbers is available at an additional cost.&nbsp; <br><br>Please call us to get an accurate quote for your order. </span>'));

}
else
if (((GetCheckState('u101')) == (false)) && (((GetCheckState('u97')) == (false)) && (((GetCheckState('u99')) == (false)) && ((GetCheckState('u103')) == (false))))) {

SetGlobalVariableValue('$personalize', PopulateVariables('no'));

	SetPanelVisibilityu105("hidden");

}
else
if (true) {

SetGlobalVariableValue('$personalize', PopulateVariables('np'));

SetWidgetRichText('u110', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#003399; font-size:13px;">Please call us for an accurate quote for your order. </span>'));

}

}

var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'bottom';
var u103 = document.getElementById('u103');

u103.style.cursor = 'pointer';
if (bIE) u103.attachEvent("onclick", Clicku103);
else u103.addEventListener("click", Clicku103, true);
function Clicku103(e)
{

if ((GetCheckState('u103')) == (true)) {

	SetPanelVisibilityu105("");

SetWidgetRichText('u110', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#003399; font-size:13px;">Printing on a sleeve, hood, or leg requires a custom quote from our Sales Service agents.&nbsp; <br><br>Please call us to get an accurate quote for your order. </span>'));

}
else
if (((GetCheckState('u103')) == (false)) && (((GetCheckState('u97')) == (false)) && (((GetCheckState('u101')) == (false)) && ((GetCheckState('u103')) == (false))))) {

	SetPanelVisibilityu105("hidden");

}
else
if (true) {

SetWidgetRichText('u110', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#003399; font-size:13px;">Please call us for an accurate quote for your order. </span>'));

}

}

var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'bottom';
var u105 = document.getElementById('u105');

var u106 = document.getElementById('u106');

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'center';
var u108 = document.getElementById('u108');

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'center';
var u258 = document.getElementById('u258');

var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'top';
var u80 = document.getElementById('u80');

var u81 = document.getElementById('u81');

var u82 = document.getElementById('u82');

var u83 = document.getElementById('u83');

var u84 = document.getElementById('u84');

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'top';
var u86 = document.getElementById('u86');

u86.style.cursor = 'pointer';
if (bIE) u86.attachEvent("onclick", Clicku86);
else u86.addEventListener("click", Clicku86, true);
function Clicku86(e)
{

if (true) {

	SetPanelVisibilityu58("hidden");

	MoveWidgetTo('u95',30,250);

	MoveWidgetTo('u111',30,380);

}

}

var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'top';
var u88 = document.getElementById('u88');

u88.style.cursor = 'pointer';
if (bIE) u88.attachEvent("onclick", Clicku88);
else u88.addEventListener("click", Clicku88, true);
function Clicku88(e)
{

if (true) {

	SetPanelVisibilityu58("");

	MoveWidgetTo('u95',30,350);

	MoveWidgetTo('u111',30,480);

	MoveWidgetTo('u58',30,250);

SetWidgetFormText('u79', PopulateVariables(' '));

}

}

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'top';
var u119 = document.getElementById('u119');

var u268 = document.getElementById('u268');

var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'center';
var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'top';
var u94 = document.getElementById('u94');

u94.style.cursor = 'pointer';
if (bIE) u94.attachEvent("onclick", Clicku94);
else u94.addEventListener("click", Clicku94, true);
function Clicku94(e)
{

if (true) {

	SetPanelStateu58("pd0u58");

SetWidgetRichText('u94', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006699; font-size:13px;"><u> </u></span>'));

SetWidgetRichText('u93', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0D0D0D; font-size:13px;"> </span>'));

SetGlobalVariableValue('$quotevar', PopulateVariables('yes'));

	MoveWidgetTo('u95',30,400);

	MoveWidgetTo('u111',30,530);

}

}
gv_vAlignTable['u94'] = 'top';
var u95 = document.getElementById('u95');

var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u97 = document.getElementById('u97');

u97.style.cursor = 'pointer';
if (bIE) u97.attachEvent("onclick", Clicku97);
else u97.addEventListener("click", Clicku97, true);
function Clicku97(e)
{

if ((GetCheckState('u97')) == (true)) {

	SetPanelVisibilityu105("");

SetWidgetRichText('u110', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#003399; font-size:13px;">Printing two sizes of a design is available at an additional charge.&nbsp; <br><br>Please call us to get an accurate quote for your order. </span>'));

}
else
if (((GetCheckState('u97')) == (false)) && (((GetCheckState('u99')) == (false)) && (((GetCheckState('u101')) == (false)) && ((GetCheckState('u103')) == (false))))) {

	SetPanelVisibilityu105("hidden");

}
else
if (true) {

SetWidgetRichText('u110', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#003399; font-size:13px;">Please call us for an accurate quote for your order. </span>'));

}

}

var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'bottom';
var u127 = document.getElementById('u127');

var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u129 = document.getElementById('u129');

var u278 = document.getElementById('u278');
gv_vAlignTable['u278'] = 'center';
var u279 = document.getElementById('u279');

var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'top';
var u131 = document.getElementById('u131');

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'top';
var u133 = document.getElementById('u133');

var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'top';
var u135 = document.getElementById('u135');

var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'top';
var u137 = document.getElementById('u137');

var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'top';
var u139 = document.getElementById('u139');

var u288 = document.getElementById('u288');

var u289 = document.getElementById('u289');
gv_vAlignTable['u289'] = 'top';
var u300 = document.getElementById('u300');

var u301 = document.getElementById('u301');
gv_vAlignTable['u301'] = 'top';
var u349 = document.getElementById('u349');
gv_vAlignTable['u349'] = 'top';
var u302 = document.getElementById('u302');

var u303 = document.getElementById('u303');
gv_vAlignTable['u303'] = 'top';
var u304 = document.getElementById('u304');

var u305 = document.getElementById('u305');
gv_vAlignTable['u305'] = 'top';
var u306 = document.getElementById('u306');

var u309 = document.getElementById('u309');
gv_vAlignTable['u309'] = 'top';
var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u141 = document.getElementById('u141');

var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'top';
var u143 = document.getElementById('u143');

var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'top';
var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'top';
var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'top';
var u147 = document.getElementById('u147');

u147.style.cursor = 'pointer';
if (bIE) u147.attachEvent("onclick", Clicku147);
else u147.addEventListener("click", Clicku147, true);
function Clicku147(e)
{

if (true) {

	SetPanelStateu1("pd1u1");

}

}

if (bIE) u147.attachEvent("onmouseover", MouseOveru147);
else u147.addEventListener("mouseover", MouseOveru147, true);
function MouseOveru147(e)
{
if (!IsTrueMouseOver('u147',e)) return;
if (true) {

	SetPanelVisibilityu158("");

	MoveWidgetTo('u158',100,170);

}

}

if (bIE) u147.attachEvent("onmouseout", MouseOutu147);
else u147.addEventListener("mouseout", MouseOutu147, true);
function MouseOutu147(e)
{
if (!IsTrueMouseOut('u147',e)) return;
if (true) {

	SetPanelVisibilityu158("hidden");

}

}
gv_vAlignTable['u147'] = 'top';
var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'top';
var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'top';
var u275 = document.getElementById('u275');

var u276 = document.getElementById('u276');
gv_vAlignTable['u276'] = 'center';
var u277 = document.getElementById('u277');

var u310 = document.getElementById('u310');

var u311 = document.getElementById('u311');
gv_vAlignTable['u311'] = 'top';
var u312 = document.getElementById('u312');

var u313 = document.getElementById('u313');

var u314 = document.getElementById('u314');

var u315 = document.getElementById('u315');

var u316 = document.getElementById('u316');

var u150 = document.getElementById('u150');

u150.style.cursor = 'pointer';
if (bIE) u150.attachEvent("onclick", Clicku150);
else u150.addEventListener("click", Clicku150, true);
function Clicku150(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Open design lab"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

if (bIE) u150.attachEvent("onmouseover", MouseOveru150);
else u150.addEventListener("mouseover", MouseOveru150, true);
function MouseOveru150(e)
{
if (!IsTrueMouseOver('u150',e)) return;
if (true) {

	SetPanelVisibilityu158("");

	MoveWidgetTo('u158',100,190);

}

}

if (bIE) u150.attachEvent("onmouseout", MouseOutu150);
else u150.addEventListener("mouseout", MouseOutu150, true);
function MouseOutu150(e)
{
if (!IsTrueMouseOut('u150',e)) return;
if (true) {

	SetPanelVisibilityu158("hidden");

}

}
gv_vAlignTable['u150'] = 'top';
var u151 = document.getElementById('u151');

u151.style.cursor = 'pointer';
if (bIE) u151.attachEvent("onclick", Clicku151);
else u151.addEventListener("click", Clicku151, true);
function Clicku151(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Open design lab"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

if (bIE) u151.attachEvent("onmouseover", MouseOveru151);
else u151.addEventListener("mouseover", MouseOveru151, true);
function MouseOveru151(e)
{
if (!IsTrueMouseOver('u151',e)) return;
if (true) {

	SetPanelVisibilityu158("");

	MoveWidgetTo('u158',100,210);

}

}

if (bIE) u151.attachEvent("onmouseout", MouseOutu151);
else u151.addEventListener("mouseout", MouseOutu151, true);
function MouseOutu151(e)
{
if (!IsTrueMouseOut('u151',e)) return;
if (true) {

	SetPanelVisibilityu158("hidden");

}

}
gv_vAlignTable['u151'] = 'top';
var u152 = document.getElementById('u152');

u152.style.cursor = 'pointer';
if (bIE) u152.attachEvent("onclick", Clicku152);
else u152.addEventListener("click", Clicku152, true);
function Clicku152(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Open design lab"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

if (bIE) u152.attachEvent("onmouseover", MouseOveru152);
else u152.addEventListener("mouseover", MouseOveru152, true);
function MouseOveru152(e)
{
if (!IsTrueMouseOver('u152',e)) return;
if (true) {

	SetPanelVisibilityu158("");

	MoveWidgetTo('u158',100,230);

}

}

if (bIE) u152.attachEvent("onmouseout", MouseOutu152);
else u152.addEventListener("mouseout", MouseOutu152, true);
function MouseOutu152(e)
{
if (!IsTrueMouseOut('u152',e)) return;
if (true) {

	SetPanelVisibilityu158("hidden");

}

}
gv_vAlignTable['u152'] = 'top';
var u153 = document.getElementById('u153');

u153.style.cursor = 'pointer';
if (bIE) u153.attachEvent("onclick", Clicku153);
else u153.addEventListener("click", Clicku153, true);
function Clicku153(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Open design lab"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

if (bIE) u153.attachEvent("onmouseover", MouseOveru153);
else u153.addEventListener("mouseover", MouseOveru153, true);
function MouseOveru153(e)
{
if (!IsTrueMouseOver('u153',e)) return;
if (true) {

	SetPanelVisibilityu158("");

	MoveWidgetTo('u158',100,250);

}

}

if (bIE) u153.attachEvent("onmouseout", MouseOutu153);
else u153.addEventListener("mouseout", MouseOutu153, true);
function MouseOutu153(e)
{
if (!IsTrueMouseOut('u153',e)) return;
if (true) {

	SetPanelVisibilityu158("hidden");

}

}
gv_vAlignTable['u153'] = 'top';
var u154 = document.getElementById('u154');

u154.style.cursor = 'pointer';
if (bIE) u154.attachEvent("onclick", Clicku154);
else u154.addEventListener("click", Clicku154, true);
function Clicku154(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Open design lab"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

if (bIE) u154.attachEvent("onmouseover", MouseOveru154);
else u154.addEventListener("mouseover", MouseOveru154, true);
function MouseOveru154(e)
{
if (!IsTrueMouseOver('u154',e)) return;
if (true) {

	SetPanelVisibilityu158("");

	MoveWidgetTo('u158',100,270);

}

}

if (bIE) u154.attachEvent("onmouseout", MouseOutu154);
else u154.addEventListener("mouseout", MouseOutu154, true);
function MouseOutu154(e)
{
if (!IsTrueMouseOut('u154',e)) return;
if (true) {

	SetPanelVisibilityu158("hidden");

}

}
gv_vAlignTable['u154'] = 'top';
var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'top';
var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'top';
var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'top';
var u158 = document.getElementById('u158');

var u159 = document.getElementById('u159');

var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'center';
var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'top';
var u284 = document.getElementById('u284');

u284.style.cursor = 'pointer';
if (bIE) u284.attachEvent("onclick", Clicku284);
else u284.addEventListener("click", Clicku284, true);
function Clicku284(e)
{

if (true) {

SetWidgetRichText('u282', PopulateVariables('<div style="text-align:right"><span style=" font-family:\'Arial\'; font-size:13px;">Price for each item:&nbsp; </span></div>'));

SetWidgetFormText('u290', PopulateVariables(''));

	SetPanelVisibilityu288("hidden");

}

}

var u285 = document.getElementById('u285');
gv_vAlignTable['u285'] = 'top';
var u286 = document.getElementById('u286');

u286.style.cursor = 'pointer';
if (bIE) u286.attachEvent("onclick", Clicku286);
else u286.addEventListener("click", Clicku286, true);
function Clicku286(e)
{

if (true) {

	SetPanelVisibilityu288("");

SetWidgetFormText('u290', PopulateVariables(''));

SetWidgetRichText('u282', PopulateVariables('<div style="text-align:right"><span style=" font-family:\'Arial\'; font-size:13px;">Price range per item:&nbsp; </span></div>'));

}

}

var u287 = document.getElementById('u287');
gv_vAlignTable['u287'] = 'top';
var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'center';
var u161 = document.getElementById('u161');

var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'center';
var u163 = document.getElementById('u163');

var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'center';
var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'top';
var u166 = document.getElementById('u166');

u166.style.cursor = 'pointer';
if (bIE) u166.attachEvent("onclick", Clicku166);
else u166.addEventListener("click", Clicku166, true);
function Clicku166(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Go to the lab"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u167 = document.getElementById('u167');

var u168 = document.getElementById('u168');

u168.style.cursor = 'pointer';
if (bIE) u168.attachEvent("onclick", Clicku168);
else u168.addEventListener("click", Clicku168, true);
function Clicku168(e)
{

if (true) {

	SetPanelStateu167("pd1u167");

}

}
gv_vAlignTable['u168'] = 'top';
var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'top';
var u293 = document.getElementById('u293');

u293.style.cursor = 'pointer';
if (bIE) u293.attachEvent("onclick", Clicku293);
else u293.addEventListener("click", Clicku293, true);
function Clicku293(e)
{

if (true) {

}

}

var u294 = document.getElementById('u294');
gv_vAlignTable['u294'] = 'top';
var u295 = document.getElementById('u295');

u295.style.cursor = 'pointer';
if (bIE) u295.attachEvent("onclick", Clicku295);
else u295.addEventListener("click", Clicku295, true);
function Clicku295(e)
{

if (true) {

}

}

var u296 = document.getElementById('u296');
gv_vAlignTable['u296'] = 'top';
var u297 = document.getElementById('u297');

var u170 = document.getElementById('u170');

var u171 = document.getElementById('u171');

u171.style.cursor = 'pointer';
if (bIE) u171.attachEvent("onclick", Clicku171);
else u171.addEventListener("click", Clicku171, true);
function Clicku171(e)
{

if (true) {

	SetPanelStateu1("pd2u1");

SetGlobalVariableValue('$yourEmail', GetWidgetFormText('u170'));

}

}

var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'center';
var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'top';
var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'top';
var u175 = document.getElementById('u175');

var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'center';
var u177 = document.getElementById('u177');

var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'center';
var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'top';
var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'top';
var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'top';
var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'top';
var u200 = document.getElementById('u200');

var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u73 = document.getElementById('u73');

var u74 = document.getElementById('u74');

var u75 = document.getElementById('u75');

var u76 = document.getElementById('u76');

var u77 = document.getElementById('u77');

var u78 = document.getElementById('u78');

var u79 = document.getElementById('u79');

var u180 = document.getElementById('u180');

var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'top';
var u182 = document.getElementById('u182');

var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'top';
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

u189.style.cursor = 'pointer';
if (bIE) u189.attachEvent("onclick", Clicku189);
else u189.addEventListener("click", Clicku189, true);
function Clicku189(e)
{

if (true) {

	SetPanelStateu193("pd0u193");

}

}

var u307 = document.getElementById('u307');
gv_vAlignTable['u307'] = 'top';
var u308 = document.getElementById('u308');

var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'top';
var u262 = document.getElementById('u262');

var u210 = document.getElementById('u210');

var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'top';
var u212 = document.getElementById('u212');

var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'top';
var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'top';
var u215 = document.getElementById('u215');

var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'top';
var u191 = document.getElementById('u191');

u191.style.cursor = 'pointer';
if (bIE) u191.attachEvent("onclick", Clicku191);
else u191.addEventListener("click", Clicku191, true);
function Clicku191(e)
{

if (true) {

	SetPanelStateu193("pd1u193");

}

}

var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'top';
var u193 = document.getElementById('u193');

var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'top';
var u195 = document.getElementById('u195');

var u196 = document.getElementById('u196');

u196.style.cursor = 'pointer';
if (bIE) u196.attachEvent("onclick", Clicku196);
else u196.addEventListener("click", Clicku196, true);
function Clicku196(e)
{

if (true) {

SetWidgetRichText('u194', PopulateVariables('<div style="text-align:right"><span style=" font-family:\'Arial\'; font-size:13px;">Price for each item:&nbsp; </span></div>'));

SetWidgetFormText('u202', PopulateVariables(''));

	SetPanelVisibilityu200("hidden");

}

}

var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'top';
var u198 = document.getElementById('u198');

u198.style.cursor = 'pointer';
if (bIE) u198.attachEvent("onclick", Clicku198);
else u198.addEventListener("click", Clicku198, true);
function Clicku198(e)
{

if (true) {

	SetPanelVisibilityu200("");

SetWidgetFormText('u202', PopulateVariables(''));

SetWidgetRichText('u194', PopulateVariables('<div style="text-align:right"><span style=" font-family:\'Arial\'; font-size:13px;">Price range per item:&nbsp; </span></div>'));

}

}

var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'top';
var u317 = document.getElementById('u317');

var u318 = document.getElementById('u318');

var u319 = document.getElementById('u319');

var u272 = document.getElementById('u272');
gv_vAlignTable['u272'] = 'top';
var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'top';
var u221 = document.getElementById('u221');

u221.style.cursor = 'pointer';
if (bIE) u221.attachEvent("onclick", Clicku221);
else u221.addEventListener("click", Clicku221, true);
function Clicku221(e)
{

if (true) {

SetWidgetFormText('u221', PopulateVariables(''));

}

}

if (bIE) u221.attachEvent("onblur", LostFocusu221);
else u221.addEventListener("blur", LostFocusu221, true);
function LostFocusu221(e)
{

if (true) {

SetGlobalVariableValue('$closeDate', GetWidgetFormText('u221'));

}

}

var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'top';
var u223 = document.getElementById('u223');

var u224 = document.getElementById('u224');

u224.style.cursor = 'pointer';
if (bIE) u224.attachEvent("onclick", Clicku224);
else u224.addEventListener("click", Clicku224, true);
function Clicku224(e)
{

if (true) {

	SetPanelVisibilityu219("");

SetWidgetFormText('u247', PopulateVariables('12/01/2010'));

	SetPanelStateu223("pd1u223");

}

}

var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'center';
var u99 = document.getElementById('u99');

u99.style.cursor = 'pointer';
if (bIE) u99.attachEvent("onclick", Clicku99);
else u99.addEventListener("click", Clicku99, true);
function Clicku99(e)
{

if ((GetCheckState('u99')) == (true)) {

	SetPanelVisibilityu105("");

SetWidgetRichText('u110', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#003399; font-size:13px;">Items with sizes above XL require an additional charge.&nbsp; <br><br>Please call us for an accurate quote for your order. </span>'));

}
else
if (((GetCheckState('u99')) == (false)) && (((GetCheckState('u97')) == (false)) && (((GetCheckState('u101')) == (false)) && ((GetCheckState('u103')) == (false))))) {

}
else
if (true) {

SetWidgetRichText('u110', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#003399; font-size:13px;">Please call us for an accurate quote for your order. </span>'));

}

}

var u320 = document.getElementById('u320');

var u321 = document.getElementById('u321');

var u322 = document.getElementById('u322');

var u323 = document.getElementById('u323');

var u324 = document.getElementById('u324');
gv_vAlignTable['u324'] = 'top';
var u325 = document.getElementById('u325');
gv_vAlignTable['u325'] = 'top';
var u326 = document.getElementById('u326');
gv_vAlignTable['u326'] = 'top';
var u327 = document.getElementById('u327');
gv_vAlignTable['u327'] = 'top';
var u328 = document.getElementById('u328');

u328.style.cursor = 'pointer';
if (bIE) u328.attachEvent("onclick", Clicku328);
else u328.addEventListener("click", Clicku328, true);
function Clicku328(e)
{

if (true) {

	SetPanelStateu297("pd0u297");

SetWidgetRichText('u328', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006699; font-size:13px;"><u> </u></span>'));

SetWidgetRichText('u327', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0D0D0D; font-size:13px;"> </span>'));

SetGlobalVariableValue('$quotevar', PopulateVariables('yes'));

	MoveWidgetTo('u334',30,530);

}

}
gv_vAlignTable['u328'] = 'top';
var u329 = document.getElementById('u329');
gv_vAlignTable['u329'] = 'top';
var u0 = document.getElementById('u0');
gv_vAlignTable['u0'] = 'top';
var u1 = document.getElementById('u1');

var u2 = document.getElementById('u2');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u4 = document.getElementById('u4');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'top';
var u7 = document.getElementById('u7');

if (bIE) u7.attachEvent("onblur", LostFocusu7);
else u7.addEventListener("blur", LostFocusu7, true);
function LostFocusu7(e)
{

if (true) {

SetGlobalVariableValue('$GroupName', GetWidgetFormText('u7'));

}

}

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'top';
var u9 = document.getElementById('u9');

u9.style.cursor = 'pointer';
if (bIE) u9.attachEvent("onclick", Clicku9);
else u9.addEventListener("click", Clicku9, true);
function Clicku9(e)
{

if ((GetCheckState('u24')) == (true)) {

	SetPanelStateu1("pd2u1");

	SetPanelStateu337("pd0u337");

SetWidgetRichText('u343', PopulateVariables('<span style=" font-family:\'Calibri\'; font-size:13px;">Group Name: [[GroupName]]</span>'));

SetWidgetRichText('u344', PopulateVariables('<span style=" font-family:\'Calibri\'; font-size:13px;">Your Name: [[YourName]]</span>'));

SetWidgetRichText('u348', PopulateVariables('<span style=" font-family:\'Calibri\'; font-size:13px;">Your Email: [[yourEmail]]</span>'));

}
else
if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Go to product page to pick one"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u330 = document.getElementById('u330');

u330.style.cursor = 'pointer';
if (bIE) u330.attachEvent("onclick", Clicku330);
else u330.addEventListener("click", Clicku330, true);
function Clicku330(e)
{

if (true) {

	SetPanelVisibilityu297("hidden");

	MoveWidgetTo('u334',30,380);

}

}

var u331 = document.getElementById('u331');
gv_vAlignTable['u331'] = 'top';
var u332 = document.getElementById('u332');

u332.style.cursor = 'pointer';
if (bIE) u332.attachEvent("onclick", Clicku332);
else u332.addEventListener("click", Clicku332, true);
function Clicku332(e)
{

if (true) {

	SetPanelVisibilityu297("");

	MoveWidgetTo('u334',30,480);

	MoveWidgetTo('u297',30,250);

SetWidgetFormText('u318', PopulateVariables(' '));

}

}

var u333 = document.getElementById('u333');
gv_vAlignTable['u333'] = 'top';
var u334 = document.getElementById('u334');

var u335 = document.getElementById('u335');

var u336 = document.getElementById('u336');
gv_vAlignTable['u336'] = 'bottom';
var u337 = document.getElementById('u337');

var u338 = document.getElementById('u338');

var u339 = document.getElementById('u339');
gv_vAlignTable['u339'] = 'center';
var u240 = document.getElementById('u240');

var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'center';
var u242 = document.getElementById('u242');

var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'center';
var u244 = document.getElementById('u244');

var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'center';
var u298 = document.getElementById('u298');
gv_vAlignTable['u298'] = 'top';
var u299 = document.getElementById('u299');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u11 = document.getElementById('u11');

u11.style.cursor = 'pointer';
if (bIE) u11.attachEvent("onclick", Clicku11);
else u11.addEventListener("click", Clicku11, true);
function Clicku11(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("go to the lab"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}
gv_vAlignTable['u11'] = 'top';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'top';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'top';
var u16 = document.getElementById('u16');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u18 = document.getElementById('u18');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u344 = document.getElementById('u344');
gv_vAlignTable['u344'] = 'top';
var u345 = document.getElementById('u345');
gv_vAlignTable['u345'] = 'top';
var u346 = document.getElementById('u346');
gv_vAlignTable['u346'] = 'top';
var u347 = document.getElementById('u347');
gv_vAlignTable['u347'] = 'top';
var u348 = document.getElementById('u348');
gv_vAlignTable['u348'] = 'top';
var u340 = document.getElementById('u340');

var u341 = document.getElementById('u341');
gv_vAlignTable['u341'] = 'center';
var u342 = document.getElementById('u342');
gv_vAlignTable['u342'] = 'top';
var u343 = document.getElementById('u343');
gv_vAlignTable['u343'] = 'top';
var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'top';
var u111 = document.getElementById('u111');

var u112 = document.getElementById('u112');

var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'bottom';
var u114 = document.getElementById('u114');

var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'top';
var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'center';
var u116 = document.getElementById('u116');

var u117 = document.getElementById('u117');

var u254 = document.getElementById('u254');

u254.style.cursor = 'pointer';
if (bIE) u254.attachEvent("onclick", Clicku254);
else u254.addEventListener("click", Clicku254, true);
function Clicku254(e)
{

if (true) {

	SetPanelVisibilityu258("hidden");

}

}

var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'top';
var u256 = document.getElementById('u256');

u256.style.cursor = 'pointer';
if (bIE) u256.attachEvent("onclick", Clicku256);
else u256.addEventListener("click", Clicku256, true);
function Clicku256(e)
{

if (true) {

	SetPanelVisibilityu258("");

}

}

var u20 = document.getElementById('u20');

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u22 = document.getElementById('u22');

if (bIE) u22.attachEvent("onblur", LostFocusu22);
else u22.addEventListener("blur", LostFocusu22, true);
function LostFocusu22(e)
{

if (true) {

SetGlobalVariableValue('$YourName', GetWidgetFormText('u22'));

}

}

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u24 = document.getElementById('u24');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u26 = document.getElementById('u26');

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'bottom';
var u28 = document.getElementById('u28');

if (bIE) u28.attachEvent("onblur", LostFocusu28);
else u28.addEventListener("blur", LostFocusu28, true);
function LostFocusu28(e)
{

if (true) {

SetGlobalVariableValue('$yourEmail', GetWidgetFormText('u28'));

}

}

var u29 = document.getElementById('u29');

var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'center';
var u207 = document.getElementById('u207');

u207.style.cursor = 'pointer';
if (bIE) u207.attachEvent("onclick", Clicku207);
else u207.addEventListener("click", Clicku207, true);
function Clicku207(e)
{

if ((GetCheckState('u196')) == (true)) {

SetGlobalVariableValue('$price1', GetWidgetFormText('u195'));

SetGlobalVariableValue('$price2', PopulateVariables('0'));

SetWidgetRichText('u345', PopulateVariables('<span style=" font-family:\'Calibri\'; font-size:13px;">Displayed Price:&nbsp; $[[price1]]</span>'));

	SetPanelStateu1("pd4u1");

}
else
if ((GetCheckState('u198')) == (true)) {

SetGlobalVariableValue('$price1', GetWidgetFormText('u195'));

SetGlobalVariableValue('$price2', GetWidgetFormText('u202'));

SetWidgetRichText('u345', PopulateVariables('<span style=" font-family:\'Calibri\'; font-size:13px;">Displayed Price: $[[price1]] - $[[price2]]</span>'));

	SetPanelStateu1("pd4u1");

}

}

var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'center';
var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'top';
var u350 = document.getElementById('u350');
gv_vAlignTable['u350'] = 'top';
var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'top';
var u121 = document.getElementById('u121');

var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'top';
var u123 = document.getElementById('u123');

var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'top';
var u125 = document.getElementById('u125');

var u261 = document.getElementById('u261');
gv_vAlignTable['u261'] = 'top';
var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'top';
var u263 = document.getElementById('u263');

var u264 = document.getElementById('u264');

var u265 = document.getElementById('u265');

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u31 = document.getElementById('u31');

u31.style.cursor = 'pointer';
if (bIE) u31.attachEvent("onclick", Clicku31);
else u31.addEventListener("click", Clicku31, true);
function Clicku31(e)
{

if (true) {

	SetPanelStateu84("pd0u84");

SetCheckState('u86', false);

SetCheckState('u88', false);

	MoveWidgetTo('u95',30,250);

	MoveWidgetTo('u111',30,380);

	MoveWidgetTo('u58',29,250);

	SetPanelVisibilityu105("hidden");

	SetPanelVisibilityu58("hidden");

}

}
gv_vAlignTable['u31'] = 'top';
var u32 = document.getElementById('u32');

u32.style.cursor = 'pointer';
if (bIE) u32.attachEvent("onclick", Clicku32);
else u32.addEventListener("click", Clicku32, true);
function Clicku32(e)
{

if (true) {

	SetPanelStateu84("pd1u84");

SetWidgetFormText('u79', PopulateVariables('50'));

SetWidgetRichText('u93', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0D0D0D; font-size:13px;">Quantity:&nbsp; 50&nbsp; (50 - L)&nbsp; &nbsp; </span>'));

SetWidgetRichText('u94', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006699; font-size:13px;"><u>Change quantities or sizes</u></span>'));

	SetPanelVisibilityu58("hidden");

	SetPanelVisibilityu105("hidden");

	MoveWidgetTo('u95',30,320);

	MoveWidgetTo('u111',30,450);

	MoveWidgetTo('u58',29,290);

}

}
gv_vAlignTable['u32'] = 'top';
var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u35 = document.getElementById('u35');

u35.style.cursor = 'pointer';
if (bIE) u35.attachEvent("onclick", Clicku35);
else u35.addEventListener("click", Clicku35, true);
function Clicku35(e)
{

if (true) {

	SetPanelStateu1("pd2u1");

}

}
gv_vAlignTable['u35'] = 'top';
var u36 = document.getElementById('u36');

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'center';
var u38 = document.getElementById('u38');

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'center';
var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'top';
var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'top';
var u219 = document.getElementById('u219');

var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'top';
var u202 = document.getElementById('u202');

var u266 = document.getElementById('u266');

var u267 = document.getElementById('u267');

var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'top';
var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'top';
var u205 = document.getElementById('u205');

u205.style.cursor = 'pointer';
if (bIE) u205.attachEvent("onclick", Clicku205);
else u205.addEventListener("click", Clicku205, true);
function Clicku205(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Display acknowledgment of save with selected price option"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u270 = document.getElementById('u270');

u270.style.cursor = 'pointer';
if (bIE) u270.attachEvent("onclick", Clicku270);
else u270.addEventListener("click", Clicku270, true);
function Clicku270(e)
{

if (true) {

	SetPanelStateu323("pd1u323");

SetCheckState('u330', false);

SetCheckState('u332', false);

	MoveWidgetTo('u334',30,380);

	MoveWidgetTo('u297',29,250);

	SetPanelVisibilityu297("hidden");

}

}
gv_vAlignTable['u270'] = 'top';
var u271 = document.getElementById('u271');

u271.style.cursor = 'pointer';
if (bIE) u271.attachEvent("onclick", Clicku271);
else u271.addEventListener("click", Clicku271, true);
function Clicku271(e)
{

if (true) {

	SetPanelStateu323("pd0u323");

SetWidgetFormText('u318', PopulateVariables('50'));

SetWidgetRichText('u327', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0D0D0D; font-size:13px;">Quantity:&nbsp; 50&nbsp; (50 - L)&nbsp; &nbsp; </span>'));

SetWidgetRichText('u328', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#006699; font-size:13px;"><u>Change quantities or sizes</u></span>'));

	SetPanelVisibilityu297("hidden");

	MoveWidgetTo('u334',30,450);

	MoveWidgetTo('u297',29,290);

}

}
gv_vAlignTable['u271'] = 'top';
var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'top';
var u273 = document.getElementById('u273');
gv_vAlignTable['u273'] = 'top';
var u274 = document.getElementById('u274');

u274.style.cursor = 'pointer';
if (bIE) u274.attachEvent("onclick", Clicku274);
else u274.addEventListener("click", Clicku274, true);
function Clicku274(e)
{

if (true) {

	SetPanelStateu1("pd2u1");

}

}
gv_vAlignTable['u274'] = 'top';
var u40 = document.getElementById('u40');

var u41 = document.getElementById('u41');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u43 = document.getElementById('u43');

var u44 = document.getElementById('u44');

u44.style.cursor = 'pointer';
if (bIE) u44.attachEvent("onclick", Clicku44);
else u44.addEventListener("click", Clicku44, true);
function Clicku44(e)
{

if (true) {

SetWidgetRichText('u42', PopulateVariables('<div style="text-align:right"><span style=" font-family:\'Arial\'; font-size:13px;">Price for each item:&nbsp; </span></div>'));

SetWidgetFormText('u50', PopulateVariables(''));

	SetPanelVisibilityu48("hidden");

}

}

var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u46 = document.getElementById('u46');

u46.style.cursor = 'pointer';
if (bIE) u46.attachEvent("onclick", Clicku46);
else u46.addEventListener("click", Clicku46, true);
function Clicku46(e)
{

if (true) {

	SetPanelVisibilityu48("");

SetWidgetFormText('u50', PopulateVariables(''));

SetWidgetRichText('u42', PopulateVariables('<div style="text-align:right"><span style=" font-family:\'Arial\'; font-size:13px;">Price range per item:&nbsp; </span></div>'));

}

}

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
gv_vAlignTable['u229'] = 'center';
var u280 = document.getElementById('u280');

var u281 = document.getElementById('u281');
gv_vAlignTable['u281'] = 'top';
var u282 = document.getElementById('u282');
gv_vAlignTable['u282'] = 'top';
var u283 = document.getElementById('u283');

var u50 = document.getElementById('u50');

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u54 = document.getElementById('u54');

u54.style.cursor = 'pointer';
if (bIE) u54.attachEvent("onclick", Clicku54);
else u54.addEventListener("click", Clicku54, true);
function Clicku54(e)
{

if (true) {

}

}

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u56 = document.getElementById('u56');

u56.style.cursor = 'pointer';
if (bIE) u56.attachEvent("onclick", Clicku56);
else u56.addEventListener("click", Clicku56, true);
function Clicku56(e)
{

if (true) {

}

}

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u58 = document.getElementById('u58');

var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'top';
var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'top';
var u238 = document.getElementById('u238');

var u239 = document.getElementById('u239');
gv_vAlignTable['u239'] = 'center';
var u290 = document.getElementById('u290');

var u291 = document.getElementById('u291');
gv_vAlignTable['u291'] = 'top';
var u292 = document.getElementById('u292');
gv_vAlignTable['u292'] = 'top';
var u60 = document.getElementById('u60');

var u61 = document.getElementById('u61');

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u63 = document.getElementById('u63');

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u65 = document.getElementById('u65');

var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u67 = document.getElementById('u67');

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u69 = document.getElementById('u69');

var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'top';
var u247 = document.getElementById('u247');

u247.style.cursor = 'pointer';
if (bIE) u247.attachEvent("onclick", Clicku247);
else u247.addEventListener("click", Clicku247, true);
function Clicku247(e)
{

if (true) {

SetWidgetFormText('u247', PopulateVariables(' '));

	SetPanelStateu223("pd0u223");

}

}

var u248 = document.getElementById('u248');

u248.style.cursor = 'pointer';
if (bIE) u248.attachEvent("onclick", Clicku248);
else u248.addEventListener("click", Clicku248, true);
function Clicku248(e)
{

if (true) {

	SetPanelStateu1("pd5u1");

SetWidgetRichText('u346', PopulateVariables('<span style=" font-family:\'Calibri\'; font-size:13px;">Close Date: [[closeDate]]</span>'));

}

}

var u249 = document.getElementById('u249');
gv_vAlignTable['u249'] = 'center';
if (window.OnLoad) OnLoad();
