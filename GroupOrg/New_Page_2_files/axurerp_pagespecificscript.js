
var PageName = 'New Page 2';
var PageId = 'p6748a06179c64d9ba1a9e13e708ef92f'
var PageUrl = 'New_Page_2.html'
document.title = 'New Page 2';

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
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&price1=' + encodeURIComponent($price1) + '&price2=' + encodeURIComponent($price2) + '&GroupName=' + encodeURIComponent($GroupName) + '&YourName=' + encodeURIComponent($YourName) + '&groupPrice=' + encodeURIComponent($groupPrice) + '&contanctName=' + encodeURIComponent($contanctName) + '&yourEmail=' + encodeURIComponent($yourEmail) + '&closeDate=' + encodeURIComponent($closeDate) + '&personalize=' + encodeURIComponent($personalize) + '&quotevar=' + encodeURIComponent($quotevar) + '&ZIP=' + encodeURIComponent($ZIP) + '&NameNum=' + encodeURIComponent($NameNum) + '&Size1=' + encodeURIComponent($Size1) + '&Size2=' + encodeURIComponent($Size2) + '&Size3=' + encodeURIComponent($Size3) + '&CSUM=1';
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
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  return value;
}

function OnLoad(e) {

if (true) {

SetWidgetRichText('u195', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#003366; font-size:21px;">Customize [[GroupName]]\'s Sign-up Sheet&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span><span style=" font-family:\'Helvetica\'; color:#006699; font-size:12px;">Change group name</span>'));

SetWidgetRichText('u191', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">[[YourName]] at [[yourEmail]]&nbsp; &nbsp; </span><span style=" font-family:\'Helvetica\'; color:#006699; font-size:13px;">Change email address</span>'));

}

}

eval(GetDynamicPanelScript('u185', 1));

eval(GetDynamicPanelScript('u112', 1));

eval(GetDynamicPanelScript('u81', 1));

eval(GetDynamicPanelScript('u190', 2));

eval(GetDynamicPanelScript('u99', 4));

eval(GetDynamicPanelScript('u84', 2));

eval(GetDynamicPanelScript('u177', 1));

eval(GetDynamicPanelScript('u15', 2));

eval(GetDynamicPanelScript('u0', 1));

eval(GetDynamicPanelScript('u166', 2));

eval(GetDynamicPanelScript('u3', 1));

eval(GetDynamicPanelScript('u152', 1));

eval(GetDynamicPanelScript('u63', 4));

eval(GetDynamicPanelScript('u131', 2));

eval(GetDynamicPanelScript('u194', 2));

eval(GetDynamicPanelScript('u45', 1));

eval(GetDynamicPanelScript('u182', 1));

eval(GetDynamicPanelScript('u115', 4));

var u70 = document.getElementById('u70');

var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u100 = document.getElementById('u100');

var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'center';
var u102 = document.getElementById('u102');

u102.style.cursor = 'pointer';
if (bIE) u102.attachEvent("onclick", Clicku102);
else u102.addEventListener("click", Clicku102, true);
function Clicku102(e)
{

if (true) {

	SetPanelStateu99("pd2u99");

}

}

var u103 = document.getElementById('u103');

u103.style.cursor = 'pointer';
if (bIE) u103.attachEvent("onclick", Clicku103);
else u103.addEventListener("click", Clicku103, true);
function Clicku103(e)
{

if ((GetCheckState('u94')) == (false)) {

	SetPanelStateu99("pd0u99");

SetWidgetFormText('u97', PopulateVariables('01/14/2011'));

SetWidgetFormText('u98', PopulateVariables('12/24/2010'));

SetWidgetRichText('u110', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;">Our Recommended date to close your sign-up sheet. </span></b><span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;">&nbsp; For FREE DELIVERY by Jan 14, 2011 we recommend that you close the sign-up sheet on Dec 24, 2010 (3 weeks prior).</span>'));

}
else
if (true) {

	SetPanelStateu99("pd0u99");

SetWidgetFormText('u97', PopulateVariables('01/14/2011'));

}

}

var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'center';
var u105 = document.getElementById('u105');

u105.style.cursor = 'pointer';
if (bIE) u105.attachEvent("onclick", Clicku105);
else u105.addEventListener("click", Clicku105, true);
function Clicku105(e)
{

if (true) {

	SetPanelStateu99("pd3u99");

}

}

var u106 = document.getElementById('u106');

u106.style.cursor = 'pointer';
if (bIE) u106.attachEvent("onclick", Clicku106);
else u106.addEventListener("click", Clicku106, true);
function Clicku106(e)
{

if (true) {

	SetPanelStateu99("pd1u99");

}

}

var u107 = document.getElementById('u107');

u107.style.cursor = 'pointer';
if (bIE) u107.attachEvent("onclick", Clicku107);
else u107.addEventListener("click", Clicku107, true);
function Clicku107(e)
{

if (true) {

	SetPanelStateu99("pd0u99");

SetWidgetFormText('u97', PopulateVariables('02/12/2011'));

SetWidgetFormText('u98', PopulateVariables('01/22/2011'));

SetWidgetRichText('u110', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;"> <span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;"><b>Recommended. </span></b><span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;">&nbsp; For FREE DELIVERY by Feb 12, 2011 we recommend that you close the sign-up sheet on Jan 22, 2011 (3 weeks prior).</span></span>'));

}

}

var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'center';
var u109 = document.getElementById('u109');

u109.style.cursor = 'pointer';
if (bIE) u109.attachEvent("onclick", Clicku109);
else u109.addEventListener("click", Clicku109, true);
function Clicku109(e)
{

if (true) {

	SetPanelStateu99("pd2u99");

}

}

var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'top';
var u81 = document.getElementById('u81');

var u82 = document.getElementById('u82');

var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'center';
var u84 = document.getElementById('u84');

var u85 = document.getElementById('u85');

var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'center';
var u87 = document.getElementById('u87');

var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'center';
var u89 = document.getElementById('u89');

var u118 = document.getElementById('u118');

u118.style.cursor = 'pointer';
if (bIE) u118.attachEvent("onclick", Clicku118);
else u118.addEventListener("click", Clicku118, true);
function Clicku118(e)
{

if (true) {

	SetPanelStateu115("pd2u115");

}

}

var u119 = document.getElementById('u119');

u119.style.cursor = 'pointer';
if (bIE) u119.attachEvent("onclick", Clicku119);
else u119.addEventListener("click", Clicku119, true);
function Clicku119(e)
{

if (true) {

	SetPanelStateu115("pd0u115");

SetWidgetFormText('u97', PopulateVariables('01/14/2011'));

SetWidgetFormText('u98', PopulateVariables('12/24/2010'));

}

}

var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'center';
var u91 = document.getElementById('u91');

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'center';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'top';
var u94 = document.getElementById('u94');

u94.style.cursor = 'pointer';
if (bIE) u94.attachEvent("onclick", Clicku94);
else u94.addEventListener("click", Clicku94, true);
function Clicku94(e)
{

if ((GetCheckState('u94')) == (true)) {

SetWidgetFormText('u98', PopulateVariables('mm/dd/yyyy'));

SetWidgetRichText('u110', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;"> </span>'));

SetWidgetRichText('u172', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;"> Tip: You can close sign up later using your master sheet</span>'));

}
else
if (true) {

SetWidgetRichText('u110', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;"> </span>'));

}

}

if (bIE) u94.attachEvent("onblur", LostFocusu94);
else u94.addEventListener("blur", LostFocusu94, true);
function LostFocusu94(e)
{

if (true) {

SetWidgetRichText('u172', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;"> </span>'));

}

}

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'top';
var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u97 = document.getElementById('u97');

u97.style.cursor = 'pointer';
if (bIE) u97.attachEvent("onclick", Clicku97);
else u97.addEventListener("click", Clicku97, true);
function Clicku97(e)
{

if (true) {

SetWidgetFormText('u97', PopulateVariables(''));

	BringToFront("u99");

	SetPanelStateu99("pd1u99");

}

}

var u98 = document.getElementById('u98');

u98.style.cursor = 'pointer';
if (bIE) u98.attachEvent("onclick", Clicku98);
else u98.addEventListener("click", Clicku98, true);
function Clicku98(e)
{

if (true) {

SetWidgetFormText('u98', PopulateVariables(''));

	SetPanelStateu115("pd2u115");

	BringToFront("u115");

}

}

var u127 = document.getElementById('u127');

u127.style.cursor = 'pointer';
if (bIE) u127.attachEvent("onclick", Clicku127);
else u127.addEventListener("click", Clicku127, true);
function Clicku127(e)
{

if (true) {

	SetPanelStateu131("pd0u131");

	SetPanelStateu84("pd0u84");

	MoveWidgetTo('u152',0,650);

}

}

var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u129 = document.getElementById('u129');

u129.style.cursor = 'pointer';
if (bIE) u129.attachEvent("onclick", Clicku129);
else u129.addEventListener("click", Clicku129, true);
function Clicku129(e)
{

if (true) {

	SetPanelStateu131("pd1u131");

	SetPanelStateu84("pd1u84");

	MoveWidgetTo('u152',0,735);

}

}

var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'top';
var u131 = document.getElementById('u131');

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'top';
var u133 = document.getElementById('u133');

if (bIE) u133.attachEvent("onfocus", Focusu133);
else u133.addEventListener("focus", Focusu133, true);
function Focusu133(e)
{

if (true) {
function waitub327a28c2a2a4beaac3359cbb9e335501() {

SetWidgetRichText('u134', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;">Please describe how group members should pay for their order.&nbsp; Example:&nbsp; &quot;Please bring a check for the full amount to the December meeting.&nbsp; Make your check payable to &quot;Johnson School PTA&quot;. <br><br>Customink does not collect individual payments from group memebers&nbsp; at this time.</span>'));
}
setTimeout(waitub327a28c2a2a4beaac3359cbb9e335501, 300);

}

}

if (bIE) u133.attachEvent("onblur", LostFocusu133);
else u133.addEventListener("blur", LostFocusu133, true);
function LostFocusu133(e)
{

if (true) {
function waituc39563e15cdf4895a23595d2038cf2b61() {

SetWidgetRichText('u134', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;"> </span>'));
}
setTimeout(waituc39563e15cdf4895a23595d2038cf2b61, 200);

}

}

var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'top';
var u135 = document.getElementById('u135');

var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'top';
var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'top';
var u138 = document.getElementById('u138');

if (bIE) u138.attachEvent("onfocus", Focusu138);
else u138.addEventListener("focus", Focusu138, true);
function Focusu138(e)
{

if (true) {
function waitu2eb27f9f003b47adb5884592eb9e447c1() {

SetWidgetRichText('u139', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;">Examples:&nbsp; &quot;$18 each&quot;, &quot; $15 - $18 each&quot;, &quot;Approx. $18 each&quot;</span>'));
}
setTimeout(waitu2eb27f9f003b47adb5884592eb9e447c1, 300);

}

}

if (bIE) u138.attachEvent("onblur", LostFocusu138);
else u138.addEventListener("blur", LostFocusu138, true);
function LostFocusu138(e)
{

if (true) {
function waitube8958a1ad604d019d6d2dae3708ea931() {

SetWidgetRichText('u139', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;"> </span>'));
}
setTimeout(waitube8958a1ad604d019d6d2dae3708ea931, 300);

}

}

var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'top';
var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u141 = document.getElementById('u141');

var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'top';
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

u149.style.cursor = 'pointer';
if (bIE) u149.attachEvent("onclick", Clicku149);
else u149.addEventListener("click", Clicku149, true);
function Clicku149(e)
{

if (true) {

	BringToFront("u0");

	SetPanelStateu3("pd0u3");

SetWidgetRichText('u16', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">Sample prices for your design with FREE 2 week delivery:</span></b>'));

	ScrollToWidget('u44', false,true);

}

}
gv_vAlignTable['u149'] = 'top';
var u150 = document.getElementById('u150');

var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'center';
var u152 = document.getElementById('u152');

var u153 = document.getElementById('u153');

var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'center';
var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'top';
var u156 = document.getElementById('u156');

var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'center';
var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'top';
var u159 = document.getElementById('u159');

if (bIE) u159.attachEvent("onfocus", Focusu159);
else u159.addEventListener("focus", Focusu159, true);
function Focusu159(e)
{

if (true) {
function waitu2870db5daca24eb3b41c2ce1c92b94141() {

SetWidgetRichText('u160', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;">Example:&nbsp; &quot;Coach Jenny will hand out the shirts and collect payments at the end of our December team meeting.&quot;</span>'));
}
setTimeout(waitu2870db5daca24eb3b41c2ce1c92b94141, 300);

}

}

if (bIE) u159.attachEvent("onblur", LostFocusu159);
else u159.addEventListener("blur", LostFocusu159, true);
function LostFocusu159(e)
{

if (true) {
function waitu04c7ad00b61b48f5ad24e0933d4ca0051() {

SetWidgetRichText('u160', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;"> </span>'));
}
setTimeout(waitu04c7ad00b61b48f5ad24e0933d4ca0051, 300);

}

}

var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'top';
var u161 = document.getElementById('u161');

var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'center';
var u163 = document.getElementById('u163');

var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'center';
var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'top';
var u166 = document.getElementById('u166');

var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'top';
var u168 = document.getElementById('u168');

u168.style.cursor = 'pointer';
if (bIE) u168.attachEvent("onclick", Clicku168);
else u168.addEventListener("click", Clicku168, true);
function Clicku168(e)
{

if (true) {

	SetPanelStateu166("pd1u166");

}

}
gv_vAlignTable['u168'] = 'top';
var u169 = document.getElementById('u169');

if (bIE) u169.attachEvent("onfocus", Focusu169);
else u169.addEventListener("focus", Focusu169, true);
function Focusu169(e)
{

if (true) {
function waitu63dadba9478e482dac91e8770cbec8681() {

SetWidgetRichText('u165', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;">Members will see your thanks message after they sign-up.</span>'));
}
setTimeout(waitu63dadba9478e482dac91e8770cbec8681, 300);

}

}

if (bIE) u169.attachEvent("onblur", LostFocusu169);
else u169.addEventListener("blur", LostFocusu169, true);
function LostFocusu169(e)
{

if (true) {
function waitu27f53ebe9b7c40e0853b8bd992b707de1() {

SetWidgetRichText('u165', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;"> </span>'));
}
setTimeout(waitu27f53ebe9b7c40e0853b8bd992b707de1, 300);

}

}

var u170 = document.getElementById('u170');

if (bIE) u170.attachEvent("onmouseover", MouseOveru170);
else u170.addEventListener("mouseover", MouseOveru170, true);
function MouseOveru170(e)
{
if (!IsTrueMouseOver('u170',e)) return;
if (true) {
function waitu93609cbf21d64999a6e7a9aa47302ab01() {

SetWidgetRichText('u142', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;">Enter a personal message to your group.&nbsp; They\'ll see it at the top of the sign-up sheet.</span>'));
}
setTimeout(waitu93609cbf21d64999a6e7a9aa47302ab01, 300);

}

}

if (bIE) u170.attachEvent("onmouseout", MouseOutu170);
else u170.addEventListener("mouseout", MouseOutu170, true);
function MouseOutu170(e)
{
if (!IsTrueMouseOut('u170',e)) return;
if (true) {
function waitu132a966623bc46139834bcaaab8803f41() {

SetWidgetRichText('u142', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;"> </span>'));
}
setTimeout(waitu132a966623bc46139834bcaaab8803f41, 300);

}

}

var u171 = document.getElementById('u171');

var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'top';
var u173 = document.getElementById('u173');

u173.style.cursor = 'pointer';
if (bIE) u173.attachEvent("onclick", Clicku173);
else u173.addEventListener("click", Clicku173, true);
function Clicku173(e)
{

if ((GetCheckState('u183')) == (false)) {

	SetPanelVisibilityu177("hidden");

	MoveWidgetTo('u182',31,275);

	MoveWidgetTo('u81',20,334);

	SetPanelStateu63("pd0u63");

}
else
if (true) {

	SetPanelVisibilityu177("hidden");

	SetPanelStateu63("pd1u63");

	MoveWidgetTo('u182',31,275);

	MoveWidgetTo('u81',20,382);

}

}

var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'top';
var u175 = document.getElementById('u175');

u175.style.cursor = 'pointer';
if (bIE) u175.attachEvent("onclick", Clicku175);
else u175.addEventListener("click", Clicku175, true);
function Clicku175(e)
{

if ((GetCheckState('u183')) == (false)) {

	SetPanelVisibilityu177("");

	MoveWidgetTo('u81',20,430);

	MoveWidgetTo('u182',31,360);

	SetPanelStateu63("pd2u63");

}
else
if (true) {

	SetPanelVisibilityu177("");

	SetPanelStateu63("pd3u63");

	MoveWidgetTo('u81',20,470);

	MoveWidgetTo('u182',31,360);

}

}

var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'top';
var u177 = document.getElementById('u177');

var u178 = document.getElementById('u178');

var u179 = document.getElementById('u179');

var u72 = document.getElementById('u72');

var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'center';
var u74 = document.getElementById('u74');

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u76 = document.getElementById('u76');

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
var u78 = document.getElementById('u78');

var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'center';
var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'top';
var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'top';
var u182 = document.getElementById('u182');

var u183 = document.getElementById('u183');

u183.style.cursor = 'pointer';
if (bIE) u183.attachEvent("onclick", Clicku183);
else u183.addEventListener("click", Clicku183, true);
function Clicku183(e)
{

if (((GetCheckState('u183')) == (true)) && ((GetCheckState('u173')) == (true))) {

	SetPanelStateu63("pd1u63");

SetWidgetFormText('u187', PopulateVariables(''));

	MoveWidgetTo('u81',20,382);

	SetPanelVisibilityu185("");

}
else
if (((GetCheckState('u183')) == (true)) && ((GetCheckState('u175')) == (true))) {

	MoveWidgetTo('u81',20,470);

SetWidgetFormText('u187', PopulateVariables(''));

	SetPanelVisibilityu185("");

	SetPanelStateu63("pd3u63");

}
else
if (((GetCheckState('u183')) == (false)) && ((GetCheckState('u173')) == (true))) {

	SetPanelVisibilityu185("hidden");

	SetPanelStateu63("pd0u63");

	MoveWidgetTo('u81',20,334);

	MoveWidgetTo('u182',31,275);

}
else
if (((GetCheckState('u183')) == (false)) && ((GetCheckState('u175')) == (true))) {

	SetPanelStateu63("pd2u63");

	SetPanelVisibilityu185("hidden");

	MoveWidgetTo('u81',20,430);

	MoveWidgetTo('u182',31,360);

}

}

var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'top';
var u185 = document.getElementById('u185');

var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'top';
var u187 = document.getElementById('u187');

if (bIE) u187.attachEvent("onfocus", Focusu187);
else u187.addEventListener("focus", Focusu187, true);
function Focusu187(e)
{

if (true) {
function waitu3c712b1471c2406b9f6950f321d189511() {

SetWidgetRichText('u188', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;">The contact phone number will be displayed on the group sign-up sheet along with the contact name and email.</span>'));
}
setTimeout(waitu3c712b1471c2406b9f6950f321d189511, 300);

}

}

if (bIE) u187.attachEvent("onblur", LostFocusu187);
else u187.addEventListener("blur", LostFocusu187, true);
function LostFocusu187(e)
{

if (true) {
function waitu1b7475ccba19473e9f38bb774f9f26441() {

SetWidgetRichText('u188', PopulateVariables('<span style=" font-family:\'Arial\'; font-size:13px;"> </span>'));
}
setTimeout(waitu1b7475ccba19473e9f38bb774f9f26441, 300);

}

}

var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'top';
var u189 = document.getElementById('u189');

var u190 = document.getElementById('u190');

var u191 = document.getElementById('u191');

u191.style.cursor = 'pointer';
if (bIE) u191.attachEvent("onclick", Clicku191);
else u191.addEventListener("click", Clicku191, true);
function Clicku191(e)
{

if (true) {

	SetPanelStateu190("pd1u190");

SetWidgetFormText('u192', GetGlobalVariableValue('$yourEmail'));

}

}
gv_vAlignTable['u191'] = 'top';
var u192 = document.getElementById('u192');

var u193 = document.getElementById('u193');

u193.style.cursor = 'pointer';
if (bIE) u193.attachEvent("onclick", Clicku193);
else u193.addEventListener("click", Clicku193, true);
function Clicku193(e)
{

if (true) {

	SetPanelStateu190("pd0u190");

SetGlobalVariableValue('$yourEmail', GetWidgetFormText('u192'));

SetWidgetRichText('u191', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">[[YourName]] at [[yourEmail]]&nbsp; &nbsp;&nbsp; </span><span style=" font-family:\'Helvetica\'; color:#006699; font-size:13px;">Change email address</span>'));

}

}

var u194 = document.getElementById('u194');

var u195 = document.getElementById('u195');

u195.style.cursor = 'pointer';
if (bIE) u195.attachEvent("onclick", Clicku195);
else u195.addEventListener("click", Clicku195, true);
function Clicku195(e)
{

if (true) {

	SetPanelStateu194("pd1u194");

SetWidgetFormText('u197', GetGlobalVariableValue('$GroupName'));

}

}
gv_vAlignTable['u195'] = 'top';
var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'top';
var u197 = document.getElementById('u197');

var u198 = document.getElementById('u198');

u198.style.cursor = 'pointer';
if (bIE) u198.attachEvent("onclick", Clicku198);
else u198.addEventListener("click", Clicku198, true);
function Clicku198(e)
{

if (true) {

	SetPanelStateu194("pd0u194");

SetGlobalVariableValue('$GroupName', GetWidgetFormText('u197'));

SetWidgetRichText('u195', PopulateVariables('<span style=" font-family:\'Myriad Pro\'; color:#003366; font-size:21px;">Customize [[GroupName]]\'s Sign-up Sheet</span>'));

}

}

var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'center';
var u99 = document.getElementById('u99');

var u0 = document.getElementById('u0');

var u1 = document.getElementById('u1');

var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'center';
var u3 = document.getElementById('u3');

var u4 = document.getElementById('u4');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u6 = document.getElementById('u6');

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u8 = document.getElementById('u8');

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'top';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'top';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'top';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
var u15 = document.getElementById('u15');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'top';
var u17 = document.getElementById('u17');

var u18 = document.getElementById('u18');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'top';
var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'top';
var u112 = document.getElementById('u112');

var u113 = document.getElementById('u113');

if (bIE) u113.attachEvent("onmouseover", MouseOveru113);
else u113.addEventListener("mouseover", MouseOveru113, true);
function MouseOveru113(e)
{
if (!IsTrueMouseOver('u113',e)) return;
if ((GetPanelState('u99')) == ('pd0u99')) {
function waitudf9addfbddb7443aacec089e37dd2db31() {

SetWidgetRichText('u110', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;">Our Recommended date to close your sign-up sheet. </span></b><span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;">&nbsp; For FREE DELIVERY we recommend that you close the sign-up sheet 3 weeks prior to the date you need to recieve your items.</span>'));
}
setTimeout(waitudf9addfbddb7443aacec089e37dd2db31, 300);

}

}

if (bIE) u113.attachEvent("onmouseout", MouseOutu113);
else u113.addEventListener("mouseout", MouseOutu113, true);
function MouseOutu113(e)
{
if (!IsTrueMouseOut('u113',e)) return;
if (true) {
function waitud09007feb7494be29f0be0faee95a6261() {

SetWidgetRichText('u110', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;"> </span>'));
}
setTimeout(waitud09007feb7494be29f0be0faee95a6261, 300);

}

}

var u114 = document.getElementById('u114');

u114.style.cursor = 'pointer';
if (bIE) u114.attachEvent("onclick", Clicku114);
else u114.addEventListener("click", Clicku114, true);
function Clicku114(e)
{

if (true) {

	var obj1 = document.getElementById("u97");
    obj1.focus();

}

}

if (bIE) u114.attachEvent("onmouseover", MouseOveru114);
else u114.addEventListener("mouseover", MouseOveru114, true);
function MouseOveru114(e)
{
if (!IsTrueMouseOver('u114',e)) return;
if ((GetPanelState('u99')) == ('pd0u99')) {
function waitu9e9c5db00d2344188134f0406ba9c9961() {

SetWidgetRichText('u111', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;">Tip:&nbsp; We offer FREE SHIPPING for a Guaranteed 2-week delivery in the 48 US States.</span>'));
}
setTimeout(waitu9e9c5db00d2344188134f0406ba9c9961, 300);

}

}

if (bIE) u114.attachEvent("onmouseout", MouseOutu114);
else u114.addEventListener("mouseout", MouseOutu114, true);
function MouseOutu114(e)
{
if (!IsTrueMouseOut('u114',e)) return;
if (true) {
function waitu1139013b32fc4c7baf2f3a07da7157ed1() {

SetWidgetRichText('u111', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;"> </span>'));
}
setTimeout(waitu1139013b32fc4c7baf2f3a07da7157ed1, 300);

}

}

var u115 = document.getElementById('u115');

var u116 = document.getElementById('u116');

var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
var u20 = document.getElementById('u20');

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u22 = document.getElementById('u22');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u24 = document.getElementById('u24');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u26 = document.getElementById('u26');

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u28 = document.getElementById('u28');

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'top';
var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'center';
var u121 = document.getElementById('u121');

u121.style.cursor = 'pointer';
if (bIE) u121.attachEvent("onclick", Clicku121);
else u121.addEventListener("click", Clicku121, true);
function Clicku121(e)
{

if (true) {

	SetPanelStateu115("pd3u115");

}

}

var u122 = document.getElementById('u122');

u122.style.cursor = 'pointer';
if (bIE) u122.attachEvent("onclick", Clicku122);
else u122.addEventListener("click", Clicku122, true);
function Clicku122(e)
{

if (true) {

	SetPanelStateu115("pd1u115");

}

}

var u123 = document.getElementById('u123');

u123.style.cursor = 'pointer';
if (bIE) u123.attachEvent("onclick", Clicku123);
else u123.addEventListener("click", Clicku123, true);
function Clicku123(e)
{

if (true) {

	SetPanelStateu115("pd0u115");

SetWidgetFormText('u97', PopulateVariables('02/12/2011'));

SetWidgetFormText('u98', PopulateVariables('01/22/2011'));

}

}

var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'center';
var u125 = document.getElementById('u125');

u125.style.cursor = 'pointer';
if (bIE) u125.attachEvent("onclick", Clicku125);
else u125.addEventListener("click", Clicku125, true);
function Clicku125(e)
{

if (true) {

	SetPanelStateu115("pd2u115");

}

}

var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'top';
var u30 = document.getElementById('u30');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u32 = document.getElementById('u32');

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u34 = document.getElementById('u34');

u34.style.cursor = 'pointer';
if (bIE) u34.attachEvent("onclick", Clicku34);
else u34.addEventListener("click", Clicku34, true);
function Clicku34(e)
{

if (true) {

	BringToFront("u45");

    var reload = ParentWindowNeedsReload("http://www.customink.com/cink/create/pricing/quickquote.jsp?styleno=04600");
	top.opener.window.location.href = "http://www.customink.com/cink/create/pricing/quickquote.jsp?styleno=04600" + "";
    if (reload) {
        top.opener.window.location = "Resources/reload.html#" + encodeURI(top.opener.window.location.href);
    }

}

}
gv_vAlignTable['u34'] = 'top';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u38 = document.getElementById('u38');

u38.style.cursor = 'pointer';
if (bIE) u38.attachEvent("onclick", Clicku38);
else u38.addEventListener("click", Clicku38, true);
function Clicku38(e)
{

if (true) {

	BringToFront("u45");

    var reload = ParentWindowNeedsReload("http://www.customink.com/cink/create/pricing/quickquote.jsp?styleno=04600");
	top.opener.window.location.href = "http://www.customink.com/cink/create/pricing/quickquote.jsp?styleno=04600" + "";
    if (reload) {
        top.opener.window.location = "Resources/reload.html#" + encodeURI(top.opener.window.location.href);
    }

}

}
gv_vAlignTable['u38'] = 'top';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u40 = document.getElementById('u40');

u40.style.cursor = 'pointer';
if (bIE) u40.attachEvent("onclick", Clicku40);
else u40.addEventListener("click", Clicku40, true);
function Clicku40(e)
{

if (true) {

	SetPanelStateu15("pd1u15");

}

}
gv_vAlignTable['u40'] = 'top';
var u41 = document.getElementById('u41');

u41.style.cursor = 'pointer';
if (bIE) u41.attachEvent("onclick", Clicku41);
else u41.addEventListener("click", Clicku41, true);
function Clicku41(e)
{

if (true) {

	SetPanelStateu15("pd0u15");

}

}
gv_vAlignTable['u41'] = 'top';
var u42 = document.getElementById('u42');

u42.style.cursor = 'pointer';
if (bIE) u42.attachEvent("onclick", Clicku42);
else u42.addEventListener("click", Clicku42, true);
function Clicku42(e)
{

if (true) {

	BringToFront("u45");

}

}

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u44 = document.getElementById('u44');

var u45 = document.getElementById('u45');

var u46 = document.getElementById('u46');

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u48 = document.getElementById('u48');

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u50 = document.getElementById('u50');

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u52 = document.getElementById('u52');

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u55 = document.getElementById('u55');

var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u58 = document.getElementById('u58');

var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u61 = document.getElementById('u61');

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u63 = document.getElementById('u63');

var u64 = document.getElementById('u64');

var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'center';
var u66 = document.getElementById('u66');

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u68 = document.getElementById('u68');

var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
if (window.OnLoad) OnLoad();
