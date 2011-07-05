
var PageName = 'Copy of Customize';
var PageId = 'p079f326da6964390ae424c15de4ff9d3'
var PageUrl = 'Copy_of_Customize.html'
document.title = 'Copy of Customize';

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

SetWidgetRichText('u159', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#003366; font-size:21px;">Customize [[GroupName]]\'s Sign-up Sheet&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span><span style=" font-family:\'Helvetica\'; color:#006699; font-size:12px;">Change group name</span>'));

;

}

}

eval(GetDynamicPanelScript('u228', 2));

eval(GetDynamicPanelScript('u96', 1));

eval(GetDynamicPanelScript('u189', 2));

eval(GetDynamicPanelScript('u83', 4));

eval(GetDynamicPanelScript('u195', 1));

eval(GetDynamicPanelScript('u179', 1));

eval(GetDynamicPanelScript('u15', 2));

eval(GetDynamicPanelScript('u0', 1));

eval(GetDynamicPanelScript('u99', 4));

eval(GetDynamicPanelScript('u150', 2));

eval(GetDynamicPanelScript('u3', 1));

eval(GetDynamicPanelScript('u165', 4));

eval(GetDynamicPanelScript('u164', 2));

eval(GetDynamicPanelScript('u65', 1));

eval(GetDynamicPanelScript('u158', 2));

eval(GetDynamicPanelScript('u68', 2));

eval(GetDynamicPanelScript('u136', 1));

eval(GetDynamicPanelScript('u47', 1));

eval(GetDynamicPanelScript('u182', 1));

eval(GetDynamicPanelScript('u115', 2));

var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'center';
var u231 = document.getElementById('u231');

var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'center';
var u233 = document.getElementById('u233');

var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'center';
var u71 = document.getElementById('u71');

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

if (true) {

	SetPanelStateu99("pd0u99");

SetWidgetFormText('u81', PopulateVariables('01/14/2011'));

SetWidgetFormText('u82', PopulateVariables('12/24/2010'));

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

SetWidgetFormText('u81', PopulateVariables('02/12/2011'));

SetWidgetFormText('u82', PopulateVariables('01/22/2011'));

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

u81.style.cursor = 'pointer';
if (bIE) u81.attachEvent("onclick", Clicku81);
else u81.addEventListener("click", Clicku81, true);
function Clicku81(e)
{

if (true) {

SetWidgetFormText('u81', PopulateVariables(''));

	BringToFront("u83");

	SetPanelStateu83("pd1u83");

}

}

var u82 = document.getElementById('u82');

u82.style.cursor = 'pointer';
if (bIE) u82.attachEvent("onclick", Clicku82);
else u82.addEventListener("click", Clicku82, true);
function Clicku82(e)
{

if (true) {

SetWidgetFormText('u82', PopulateVariables(''));

	SetPanelStateu99("pd2u99");

	BringToFront("u99");

}

}

var u83 = document.getElementById('u83');

var u84 = document.getElementById('u84');

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'center';
var u86 = document.getElementById('u86');

u86.style.cursor = 'pointer';
if (bIE) u86.attachEvent("onclick", Clicku86);
else u86.addEventListener("click", Clicku86, true);
function Clicku86(e)
{

if (true) {

	SetPanelStateu83("pd2u83");

}

}

var u87 = document.getElementById('u87');

u87.style.cursor = 'pointer';
if (bIE) u87.attachEvent("onclick", Clicku87);
else u87.addEventListener("click", Clicku87, true);
function Clicku87(e)
{

if ((GetCheckState('u78')) == (false)) {

	SetPanelStateu83("pd0u83");

SetWidgetFormText('u81', PopulateVariables('01/14/2011'));

SetWidgetFormText('u82', PopulateVariables('12/24/2010'));

SetWidgetRichText('u94', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;">Our Recommended date to close your sign-up sheet. </span></b><span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;">&nbsp; For FREE DELIVERY by Jan 14, 2011 we recommend that you close the sign-up sheet on Dec 24, 2010 (3 weeks prior).</span>'));

}
else
if (true) {

	SetPanelStateu83("pd0u83");

SetWidgetFormText('u81', PopulateVariables('01/14/2011'));

}

}

var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'center';
var u89 = document.getElementById('u89');

u89.style.cursor = 'pointer';
if (bIE) u89.attachEvent("onclick", Clicku89);
else u89.addEventListener("click", Clicku89, true);
function Clicku89(e)
{

if (true) {

	SetPanelStateu83("pd3u83");

}

}

var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'top';
var u119 = document.getElementById('u119');

var u90 = document.getElementById('u90');

u90.style.cursor = 'pointer';
if (bIE) u90.attachEvent("onclick", Clicku90);
else u90.addEventListener("click", Clicku90, true);
function Clicku90(e)
{

if (true) {

	SetPanelStateu83("pd1u83");

}

}

var u91 = document.getElementById('u91');

u91.style.cursor = 'pointer';
if (bIE) u91.attachEvent("onclick", Clicku91);
else u91.addEventListener("click", Clicku91, true);
function Clicku91(e)
{

if (true) {

	SetPanelStateu83("pd0u83");

SetWidgetFormText('u81', PopulateVariables('02/12/2011'));

SetWidgetFormText('u82', PopulateVariables('01/22/2011'));

SetWidgetRichText('u94', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;"> <b>Recommended. </b>&nbsp; For FREE DELIVERY by Feb 12, 2011 we recommend that you close the sign-up sheet on Jan 22, 2011 (3 weeks prior).</span>'));

}

}

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'center';
var u93 = document.getElementById('u93');

u93.style.cursor = 'pointer';
if (bIE) u93.attachEvent("onclick", Clicku93);
else u93.addEventListener("click", Clicku93, true);
function Clicku93(e)
{

if (true) {

	SetPanelStateu83("pd2u83");

}

}

var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'top';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'top';
var u96 = document.getElementById('u96');

var u97 = document.getElementById('u97');

if (bIE) u97.attachEvent("onmouseover", MouseOveru97);
else u97.addEventListener("mouseover", MouseOveru97, true);
function MouseOveru97(e)
{
if (!IsTrueMouseOver('u97',e)) return;
if ((GetPanelState('u83')) == ('pd0u83')) {
function waitudf9addfbddb7443aacec089e37dd2db31() {

SetWidgetRichText('u94', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;">Our Recommended date to close your sign-up sheet. </span></b><span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;">&nbsp; For FREE DELIVERY we recommend that you close the sign-up sheet 3 weeks prior to the date you need to recieve your items.</span>'));
}
setTimeout(waitudf9addfbddb7443aacec089e37dd2db31, 300);

}

}

if (bIE) u97.attachEvent("onmouseout", MouseOutu97);
else u97.addEventListener("mouseout", MouseOutu97, true);
function MouseOutu97(e)
{
if (!IsTrueMouseOut('u97',e)) return;
if (true) {
function waitud09007feb7494be29f0be0faee95a6261() {

SetWidgetRichText('u94', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;"> </span>'));
}
setTimeout(waitud09007feb7494be29f0be0faee95a6261, 300);

}

}

var u98 = document.getElementById('u98');

u98.style.cursor = 'pointer';
if (bIE) u98.attachEvent("onclick", Clicku98);
else u98.addEventListener("click", Clicku98, true);
function Clicku98(e)
{

if (true) {

	var obj1 = document.getElementById("u81");
    obj1.focus();

}

}

if (bIE) u98.attachEvent("onmouseover", MouseOveru98);
else u98.addEventListener("mouseover", MouseOveru98, true);
function MouseOveru98(e)
{
if (!IsTrueMouseOver('u98',e)) return;
if ((GetPanelState('u83')) == ('pd0u83')) {
function waitu9e9c5db00d2344188134f0406ba9c9961() {

SetWidgetRichText('u95', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;">Tip:&nbsp; We offer FREE SHIPPING for a Guaranteed 2-week delivery in the 48 US States.</span>'));
}
setTimeout(waitu9e9c5db00d2344188134f0406ba9c9961, 300);

}

}

if (bIE) u98.attachEvent("onmouseout", MouseOutu98);
else u98.addEventListener("mouseout", MouseOutu98, true);
function MouseOutu98(e)
{
if (!IsTrueMouseOut('u98',e)) return;
if (true) {
function waitu1139013b32fc4c7baf2f3a07da7157ed1() {

SetWidgetRichText('u95', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;"> </span>'));
}
setTimeout(waitu1139013b32fc4c7baf2f3a07da7157ed1, 300);

}

}

var u127 = document.getElementById('u127');

var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'center';
var u129 = document.getElementById('u129');

var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'center';
var u131 = document.getElementById('u131');

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'center';
var u133 = document.getElementById('u133');

u133.style.cursor = 'pointer';
if (bIE) u133.attachEvent("onclick", Clicku133);
else u133.addEventListener("click", Clicku133, true);
function Clicku133(e)
{

if (true) {

	BringToFront("u0");

	SetPanelStateu3("pd0u3");

SetWidgetRichText('u16', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">Sample prices for your design with FREE 2 week delivery:</span></b>'));

	ScrollToWidget('u44', false,true);

}

}
gv_vAlignTable['u133'] = 'top';
var u134 = document.getElementById('u134');

var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'center';
var u136 = document.getElementById('u136');

var u137 = document.getElementById('u137');

var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'center';
var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'top';
var u140 = document.getElementById('u140');

var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'center';
var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'top';
var u143 = document.getElementById('u143');

if (bIE) u143.attachEvent("onfocus", Focusu143);
else u143.addEventListener("focus", Focusu143, true);
function Focusu143(e)
{

if (true) {
function waitu2870db5daca24eb3b41c2ce1c92b94141() {

SetWidgetRichText('u144', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;">Example:&nbsp; &quot;Coach Jenny will hand out the shirts and collect payments at the end of our December team meeting.&quot;</span>'));
}
setTimeout(waitu2870db5daca24eb3b41c2ce1c92b94141, 300);

}

}

if (bIE) u143.attachEvent("onblur", LostFocusu143);
else u143.addEventListener("blur", LostFocusu143, true);
function LostFocusu143(e)
{

if (true) {
function waitu04c7ad00b61b48f5ad24e0933d4ca0051() {

SetWidgetRichText('u144', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;"> </span>'));
}
setTimeout(waitu04c7ad00b61b48f5ad24e0933d4ca0051, 300);

}

}

var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'top';
var u145 = document.getElementById('u145');

var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'center';
var u147 = document.getElementById('u147');

var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'center';
var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'top';
var u150 = document.getElementById('u150');

var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'top';
var u152 = document.getElementById('u152');

u152.style.cursor = 'pointer';
if (bIE) u152.attachEvent("onclick", Clicku152);
else u152.addEventListener("click", Clicku152, true);
function Clicku152(e)
{

if (true) {

	SetPanelStateu150("pd1u150");

}

}
gv_vAlignTable['u152'] = 'top';
var u153 = document.getElementById('u153');

if (bIE) u153.attachEvent("onfocus", Focusu153);
else u153.addEventListener("focus", Focusu153, true);
function Focusu153(e)
{

if (true) {
function waitu63dadba9478e482dac91e8770cbec8681() {

SetWidgetRichText('u149', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;">Members will see your thanks message after they sign-up.</span>'));
}
setTimeout(waitu63dadba9478e482dac91e8770cbec8681, 300);

}

}

if (bIE) u153.attachEvent("onblur", LostFocusu153);
else u153.addEventListener("blur", LostFocusu153, true);
function LostFocusu153(e)
{

if (true) {
function waitu27f53ebe9b7c40e0853b8bd992b707de1() {

SetWidgetRichText('u149', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;"> </span>'));
}
setTimeout(waitu27f53ebe9b7c40e0853b8bd992b707de1, 300);

}

}

var u154 = document.getElementById('u154');

if (bIE) u154.attachEvent("onmouseover", MouseOveru154);
else u154.addEventListener("mouseover", MouseOveru154, true);
function MouseOveru154(e)
{
if (!IsTrueMouseOver('u154',e)) return;
if (true) {
function waitu93609cbf21d64999a6e7a9aa47302ab01() {

SetWidgetRichText('u126', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;">Enter a personal message to your group.&nbsp; They\'ll see it at the top of the sign-up sheet.</span>'));
}
setTimeout(waitu93609cbf21d64999a6e7a9aa47302ab01, 300);

}

}

if (bIE) u154.attachEvent("onmouseout", MouseOutu154);
else u154.addEventListener("mouseout", MouseOutu154, true);
function MouseOutu154(e)
{
if (!IsTrueMouseOut('u154',e)) return;
if (true) {
function waitu132a966623bc46139834bcaaab8803f41() {

SetWidgetRichText('u126', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;"> </span>'));
}
setTimeout(waitu132a966623bc46139834bcaaab8803f41, 300);

}

}

var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'top';
var u156 = document.getElementById('u156');

u156.style.cursor = 'pointer';
if (bIE) u156.attachEvent("onclick", Clicku156);
else u156.addEventListener("click", Clicku156, true);
function Clicku156(e)
{

if (true) {

	self.location.href="Review.html" + GetQuerystring();

}

}

var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'center';
var u158 = document.getElementById('u158');

var u159 = document.getElementById('u159');

u159.style.cursor = 'pointer';
if (bIE) u159.attachEvent("onclick", Clicku159);
else u159.addEventListener("click", Clicku159, true);
function Clicku159(e)
{

if (true) {

	SetPanelStateu158("pd1u158");

SetWidgetFormText('u161', GetGlobalVariableValue('$GroupName'));

}

}
gv_vAlignTable['u159'] = 'top';
var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'center';
var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'top';
var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'top';
var u161 = document.getElementById('u161');

var u162 = document.getElementById('u162');

u162.style.cursor = 'pointer';
if (bIE) u162.attachEvent("onclick", Clicku162);
else u162.addEventListener("click", Clicku162, true);
function Clicku162(e)
{

if (true) {

	SetPanelStateu158("pd0u158");

SetGlobalVariableValue('$GroupName', GetWidgetFormText('u161'));

SetWidgetRichText('u159', PopulateVariables('<span style=" font-family:\'Myriad Pro\'; color:#003366; font-size:21px;">Customize [[GroupName]]\'s Sign-up Sheet</span>'));

}

}

var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'center';
var u164 = document.getElementById('u164');

var u165 = document.getElementById('u165');

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
gv_vAlignTable['u174'] = 'top';
var u175 = document.getElementById('u175');

u175.style.cursor = 'pointer';
if (bIE) u175.attachEvent("onclick", Clicku175);
else u175.addEventListener("click", Clicku175, true);
function Clicku175(e)
{

if ((GetCheckState('u180')) == (false)) {

	SetPanelVisibilityu195("hidden");

	MoveWidgetTo('u179',11,100);

	SetPanelStateu165("pd0u165");

}
else
if (true) {

	SetPanelVisibilityu195("hidden");

	SetPanelStateu165("pd1u165");

	MoveWidgetTo('u179',11,100);

}

}

var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'top';
var u177 = document.getElementById('u177');

u177.style.cursor = 'pointer';
if (bIE) u177.attachEvent("onclick", Clicku177);
else u177.addEventListener("click", Clicku177, true);
function Clicku177(e)
{

if ((GetCheckState('u180')) == (false)) {

	SetPanelVisibilityu195("");

	MoveWidgetTo('u179',11,188);

	SetPanelStateu165("pd2u165");

}
else
if (true) {

	SetPanelVisibilityu195("");

	SetPanelStateu165("pd3u165");

	MoveWidgetTo('u179',11,188);

}

}

var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'top';
var u179 = document.getElementById('u179');

var u200 = document.getElementById('u200');

var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
var u73 = document.getElementById('u73');

var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'center';
var u75 = document.getElementById('u75');

var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'center';
var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'top';
var u78 = document.getElementById('u78');

u78.style.cursor = 'pointer';
if (bIE) u78.attachEvent("onclick", Clicku78);
else u78.addEventListener("click", Clicku78, true);
function Clicku78(e)
{

if ((GetCheckState('u78')) == (true)) {

SetWidgetFormText('u82', PopulateVariables('mm/dd/yyyy'));

SetWidgetRichText('u94', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;"> </span>'));

SetWidgetRichText('u155', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;"> Tip: You can close sign up later using your master sheet</span>'));

}
else
if (true) {

SetWidgetRichText('u94', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;"> </span>'));

}

}

if (bIE) u78.attachEvent("onblur", LostFocusu78);
else u78.addEventListener("blur", LostFocusu78, true);
function LostFocusu78(e)
{

if (true) {

SetWidgetRichText('u155', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;"> </span>'));

}

}

var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
var u180 = document.getElementById('u180');

u180.style.cursor = 'pointer';
if (bIE) u180.attachEvent("onclick", Clicku180);
else u180.addEventListener("click", Clicku180, true);
function Clicku180(e)
{

if (((GetCheckState('u180')) == (true)) && ((GetCheckState('u175')) == (true))) {

	SetPanelStateu165("pd1u165");

	SetPanelVisibilityu182("");

}
else
if (((GetCheckState('u180')) == (true)) && ((GetCheckState('u177')) == (true))) {

	SetPanelVisibilityu182("");

	SetPanelStateu165("pd3u165");

}
else
if (((GetCheckState('u180')) == (false)) && ((GetCheckState('u175')) == (true))) {

	SetPanelVisibilityu182("hidden");

	SetPanelStateu165("pd0u165");

}
else
if (((GetCheckState('u180')) == (false)) && ((GetCheckState('u177')) == (true))) {

	SetPanelStateu165("pd2u165");

	SetPanelVisibilityu182("hidden");

}

}

var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'top';
var u182 = document.getElementById('u182');

var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'top';
var u184 = document.getElementById('u184');

if (bIE) u184.attachEvent("onfocus", Focusu184);
else u184.addEventListener("focus", Focusu184, true);
function Focusu184(e)
{

if (true) {
function waitu77600404490c4db881def10f14c655071() {

SetWidgetRichText('u185', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;">The contact phone number will be displayed on the group sign-up sheet along with the contact name and email.</span>'));
}
setTimeout(waitu77600404490c4db881def10f14c655071, 300);

}

}

if (bIE) u184.attachEvent("onblur", LostFocusu184);
else u184.addEventListener("blur", LostFocusu184, true);
function LostFocusu184(e)
{

if (true) {
function waitu9162bd49805441e8850020cfe9fa4c7b1() {

SetWidgetRichText('u185', PopulateVariables('<span style=" font-family:\'Arial\'; font-size:13px;"> </span>'));
}
setTimeout(waitu9162bd49805441e8850020cfe9fa4c7b1, 300);

}

}

var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'top';
var u186 = document.getElementById('u186');

var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'center';
var u188 = document.getElementById('u188');

var u189 = document.getElementById('u189');

var u210 = document.getElementById('u210');

var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'center';
var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'top';
var u213 = document.getElementById('u213');

if (bIE) u213.attachEvent("onmouseover", MouseOveru213);
else u213.addEventListener("mouseover", MouseOveru213, true);
function MouseOveru213(e)
{
if (!IsTrueMouseOver('u213',e)) return;
if (true) {

}

}

if (bIE) u213.attachEvent("onmouseout", MouseOutu213);
else u213.addEventListener("mouseout", MouseOutu213, true);
function MouseOutu213(e)
{
if (!IsTrueMouseOut('u213',e)) return;
if (true) {

}

}
gv_vAlignTable['u213'] = 'top';
var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'top';
var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'top';
var u190 = document.getElementById('u190');

u190.style.cursor = 'pointer';
if (bIE) u190.attachEvent("onclick", Clicku190);
else u190.addEventListener("click", Clicku190, true);
function Clicku190(e)
{

if (true) {

	SetPanelStateu189("pd1u189");

SetWidgetFormText('u191', GetGlobalVariableValue('$yourEmail'));

}

}
gv_vAlignTable['u190'] = 'top';
var u191 = document.getElementById('u191');

var u192 = document.getElementById('u192');

u192.style.cursor = 'pointer';
if (bIE) u192.attachEvent("onclick", Clicku192);
else u192.addEventListener("click", Clicku192, true);
function Clicku192(e)
{

if (true) {

	SetPanelStateu189("pd0u189");

SetGlobalVariableValue('$yourEmail', GetWidgetFormText('u191'));

SetWidgetRichText('u190', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:13px;">[[YourName]] at [[yourEmail]]&nbsp; &nbsp;&nbsp; </span><span style=" font-family:\'Helvetica\'; color:#006699; font-size:13px;">Change email address</span>'));

}

}

var u193 = document.getElementById('u193');

var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'center';
var u195 = document.getElementById('u195');

var u196 = document.getElementById('u196');

var u197 = document.getElementById('u197');

var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'top';
var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'top';
var u220 = document.getElementById('u220');

var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'top';
var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'top';
var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'top';
var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'top';
var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'top';
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
var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'top';
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

u111.style.cursor = 'pointer';
if (bIE) u111.attachEvent("onclick", Clicku111);
else u111.addEventListener("click", Clicku111, true);
function Clicku111(e)
{

if (true) {

	SetPanelStateu115("pd0u115");

	SetPanelStateu68("pd0u68");

	MoveWidgetTo('u136',0,650);

}

}

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u113 = document.getElementById('u113');

u113.style.cursor = 'pointer';
if (bIE) u113.attachEvent("onclick", Clicku113);
else u113.addEventListener("click", Clicku113, true);
function Clicku113(e)
{

if (true) {

	SetPanelStateu115("pd1u115");

	SetPanelStateu68("pd1u68");

	MoveWidgetTo('u136',0,735);

}

}

var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'top';
var u115 = document.getElementById('u115');

var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'top';
var u117 = document.getElementById('u117');

if (bIE) u117.attachEvent("onfocus", Focusu117);
else u117.addEventListener("focus", Focusu117, true);
function Focusu117(e)
{

if (true) {
function waitub327a28c2a2a4beaac3359cbb9e335501() {

SetWidgetRichText('u118', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;">Please describe how group members should pay for their order.&nbsp; Example:&nbsp; &quot;Please bring a check for the full amount to the December meeting.&nbsp; Make your check payable to &quot;Johnson School PTA&quot;. <br><br>Customink does not collect individual payments from group memebers&nbsp; at this time.</span>'));
}
setTimeout(waitub327a28c2a2a4beaac3359cbb9e335501, 300);

}

}

if (bIE) u117.attachEvent("onblur", LostFocusu117);
else u117.addEventListener("blur", LostFocusu117, true);
function LostFocusu117(e)
{

if (true) {
function waituc39563e15cdf4895a23595d2038cf2b61() {

SetWidgetRichText('u118', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;"> </span>'));
}
setTimeout(waituc39563e15cdf4895a23595d2038cf2b61, 200);

}

}

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
var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'top';
var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'top';
var u208 = document.getElementById('u208');

var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'center';
var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'top';
var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'top';
var u122 = document.getElementById('u122');

if (bIE) u122.attachEvent("onfocus", Focusu122);
else u122.addEventListener("focus", Focusu122, true);
function Focusu122(e)
{

if (true) {
function waitu2eb27f9f003b47adb5884592eb9e447c1() {

SetWidgetRichText('u123', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;">Examples:&nbsp; &quot;$18 each&quot;, &quot; $15 - $18 each&quot;, &quot;Approx. $18 each&quot;</span>'));
}
setTimeout(waitu2eb27f9f003b47adb5884592eb9e447c1, 300);

}

}

if (bIE) u122.attachEvent("onblur", LostFocusu122);
else u122.addEventListener("blur", LostFocusu122, true);
function LostFocusu122(e)
{

if (true) {
function waitube8958a1ad604d019d6d2dae3708ea931() {

SetWidgetRichText('u123', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#336633; font-size:11px;"> </span>'));
}
setTimeout(waitube8958a1ad604d019d6d2dae3708ea931, 300);

}

}

var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'top';
var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'top';
var u125 = document.getElementById('u125');

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

	BringToFront("u47");

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

	BringToFront("u47");

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
var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'top';
var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'top';
var u218 = document.getElementById('u218');

var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'center';
var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'center';
var u202 = document.getElementById('u202');

var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'center';
var u204 = document.getElementById('u204');

var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'center';
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

	BringToFront("u47");

}

}

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u44 = document.getElementById('u44');

var u45 = document.getElementById('u45');

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'center';
var u47 = document.getElementById('u47');

var u48 = document.getElementById('u48');

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'top';
var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'top';
var u228 = document.getElementById('u228');

var u229 = document.getElementById('u229');

var u50 = document.getElementById('u50');

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u52 = document.getElementById('u52');

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u54 = document.getElementById('u54');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u57 = document.getElementById('u57');

var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u236 = document.getElementById('u236');

u236.style.cursor = 'pointer';
if (bIE) u236.attachEvent("onclick", Clicku236);
else u236.addEventListener("click", Clicku236, true);
function Clicku236(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Displays a blank email form so you can send a message to Aunt Alice."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}
gv_vAlignTable['u236'] = 'top';
var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'top';
var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'top';
var u239 = document.getElementById('u239');
gv_vAlignTable['u239'] = 'top';
var u60 = document.getElementById('u60');

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u63 = document.getElementById('u63');

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u65 = document.getElementById('u65');

var u66 = document.getElementById('u66');

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u68 = document.getElementById('u68');

var u69 = document.getElementById('u69');

if (window.OnLoad) OnLoad();
