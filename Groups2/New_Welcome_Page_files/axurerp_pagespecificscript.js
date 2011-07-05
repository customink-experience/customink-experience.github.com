
var PageName = 'New Welcome Page';
var PageId = 'p53658223686d4f49a81335dbbe9e0870'
var PageUrl = 'New_Welcome_Page.html'
document.title = 'New Welcome Page';

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
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&price1=' + encodeURIComponent($price1) + '&price2=' + encodeURIComponent($price2) + '&GroupName=' + encodeURIComponent($GroupName) + '&YourName=' + encodeURIComponent($YourName) + '&groupPrice=' + encodeURIComponent($groupPrice) + '&contanctName=' + encodeURIComponent($contanctName) + '&yourEmail=' + encodeURIComponent($yourEmail) + '&closeDate=' + encodeURIComponent($closeDate) + '&personalize=' + encodeURIComponent($personalize) + '&quotevar=' + encodeURIComponent($quotevar) + '&ZIP=' + encodeURIComponent($ZIP) + '&NameNum=' + encodeURIComponent($NameNum) + '&CSUM=1';
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
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  return value;
}

function OnLoad(e) {

if (true) {

SetGlobalVariableValue('$NameNum', PopulateVariables('no'));

}

}

eval(GetDynamicPanelScript('u685', 3));

eval(GetDynamicPanelScript('u933', 1));

eval(GetDynamicPanelScript('u295', 2));

eval(GetDynamicPanelScript('u545', 4));

eval(GetDynamicPanelScript('u473', 1));

eval(GetDynamicPanelScript('u478', 1));

eval(GetDynamicPanelScript('u555', 1));

eval(GetDynamicPanelScript('u715', 6));

eval(GetDynamicPanelScript('u655', 1));

eval(GetDynamicPanelScript('u656', 1));

eval(GetDynamicPanelScript('u977', 2));

eval(GetDynamicPanelScript('u1298', 2));

eval(GetDynamicPanelScript('u443', 1));

eval(GetDynamicPanelScript('u589', 5));

eval(GetDynamicPanelScript('u129', 2));

eval(GetDynamicPanelScript('u448', 1));

eval(GetDynamicPanelScript('u622', 3));

eval(GetDynamicPanelScript('u942', 1));

eval(GetDynamicPanelScript('u554', 1));

eval(GetDynamicPanelScript('u629', 3));

eval(GetDynamicPanelScript('u948', 1));

eval(GetDynamicPanelScript('u483', 1));

eval(GetDynamicPanelScript('u692', 3));

eval(GetDynamicPanelScript('u488', 1));

eval(GetDynamicPanelScript('u855', 2));

eval(GetDynamicPanelScript('u530', 2));

eval(GetDynamicPanelScript('u453', 1));

eval(GetDynamicPanelScript('u1081', 1));

eval(GetDynamicPanelScript('u1094', 2));

eval(GetDynamicPanelScript('u1095', 2));

eval(GetDynamicPanelScript('u458', 1));

eval(GetDynamicPanelScript('u537', 2));

eval(GetDynamicPanelScript('u829', 2));

eval(GetDynamicPanelScript('u636', 3));

eval(GetDynamicPanelScript('u956', 2));

eval(GetDynamicPanelScript('u671', 3));

eval(GetDynamicPanelScript('u990', 1));

eval(GetDynamicPanelScript('u0', 1));

eval(GetDynamicPanelScript('u1025', 2));

eval(GetDynamicPanelScript('u3', 7));

eval(GetDynamicPanelScript('u463', 1));

eval(GetDynamicPanelScript('u711', 2));

eval(GetDynamicPanelScript('u700', 2));

eval(GetDynamicPanelScript('u42', 2));

eval(GetDynamicPanelScript('u468', 1));

eval(GetDynamicPanelScript('u678', 3));

eval(GetDynamicPanelScript('u643', 3));

eval(GetDynamicPanelScript('u47', 3));

eval(GetDynamicPanelScript('u571', 1));

eval(GetDynamicPanelScript('u504', 2));

eval(GetDynamicPanelScript('u825', 2));

eval(GetDynamicPanelScript('u1003', 5));

eval(GetDynamicPanelScript('u16', 2));

var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'top';
var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'top';
var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'top';
var u203 = document.getElementById('u203');

var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'center';
var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'top';
var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'top';
var u207 = document.getElementById('u207');

var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'center';
var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'top';
var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'top';
var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'top';
var u212 = document.getElementById('u212');

var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'center';
var u214 = document.getElementById('u214');

var u215 = document.getElementById('u215');

var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'top';
var u217 = document.getElementById('u217');

var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'top';
var u219 = document.getElementById('u219');

var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'top';
var u221 = document.getElementById('u221');

var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'top';
var u223 = document.getElementById('u223');

var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'top';
var u225 = document.getElementById('u225');

var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'top';
var u227 = document.getElementById('u227');

var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'top';
var u229 = document.getElementById('u229');

var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'top';
var u231 = document.getElementById('u231');

var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'top';
var u233 = document.getElementById('u233');

var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'top';
var u235 = document.getElementById('u235');

var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'top';
var u237 = document.getElementById('u237');

var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'top';
var u239 = document.getElementById('u239');

var u500 = document.getElementById('u500');

var u501 = document.getElementById('u501');
gv_vAlignTable['u501'] = 'center';
var u502 = document.getElementById('u502');
gv_vAlignTable['u502'] = 'top';
var u503 = document.getElementById('u503');
gv_vAlignTable['u503'] = 'top';
var u504 = document.getElementById('u504');

var u505 = document.getElementById('u505');

var u506 = document.getElementById('u506');
gv_vAlignTable['u506'] = 'center';
var u507 = document.getElementById('u507');

var u508 = document.getElementById('u508');
gv_vAlignTable['u508'] = 'center';
var u509 = document.getElementById('u509');
gv_vAlignTable['u509'] = 'top';
var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'top';
var u241 = document.getElementById('u241');

var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'top';
var u243 = document.getElementById('u243');

var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'top';
var u245 = document.getElementById('u245');

var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'top';
var u247 = document.getElementById('u247');

var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'top';
var u249 = document.getElementById('u249');

var u10 = document.getElementById('u10');

u10.style.cursor = 'pointer';
if (bIE) u10.attachEvent("onclick", Clicku10);
else u10.addEventListener("click", Clicku10, true);
function Clicku10(e)
{

if ((GetGlobalVariableValue('$NameNum')) == (PopulateVariables('yes'))) {

	SetPanelStateu3("pd1u3");

	SetPanelStateu129("pd1u129");

	SetPanelStateu530("pd1u530");

	MoveWidgetTo('u530',5,350);

}
else
if ((GetGlobalVariableValue('$NameNum')) == (PopulateVariables('no'))) {

	SetPanelStateu3("pd1u3");

	SetPanelStateu530("pd0u530");

	SetPanelStateu129("pd0u129");

	MoveWidgetTo('u530',5,350);

}

}

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'bottom';
var u510 = document.getElementById('u510');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u14 = document.getElementById('u14');

u14.style.cursor = 'pointer';
if (bIE) u14.attachEvent("onclick", Clicku14);
else u14.addEventListener("click", Clicku14, true);
function Clicku14(e)
{

if (true) {

SetGlobalVariableValue('$NameNum', PopulateVariables('yes'));

	SetPanelStateu16("pd1u16");

}

}
gv_vAlignTable['u14'] = 'top';
var u15 = document.getElementById('u15');

u15.style.cursor = 'pointer';
if (bIE) u15.attachEvent("onclick", Clicku15);
else u15.addEventListener("click", Clicku15, true);
function Clicku15(e)
{

if (true) {

SetGlobalVariableValue('$NameNum', PopulateVariables('no'));

	SetPanelStateu16("pd0u16");

}

}
gv_vAlignTable['u15'] = 'top';
var u16 = document.getElementById('u16');

var u17 = document.getElementById('u17');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u518 = document.getElementById('u518');

u518.style.cursor = 'pointer';
if (bIE) u518.attachEvent("onclick", Clicku518);
else u518.addEventListener("click", Clicku518, true);
function Clicku518(e)
{

if (true) {

	SetPanelStateu47("pd0u47");

	SetPanelStateu530("pd1u530");

	SetPanelStateu129("pd1u129");

}

}
gv_vAlignTable['u518'] = 'top';
var u519 = document.getElementById('u519');

var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'top';
var u251 = document.getElementById('u251');

var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'top';
var u253 = document.getElementById('u253');

var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'top';
var u255 = document.getElementById('u255');

var u256 = document.getElementById('u256');
gv_vAlignTable['u256'] = 'top';
var u257 = document.getElementById('u257');

var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'top';
var u259 = document.getElementById('u259');

var u20 = document.getElementById('u20');

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u22 = document.getElementById('u22');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u25 = document.getElementById('u25');

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u28 = document.getElementById('u28');

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u528 = document.getElementById('u528');
gv_vAlignTable['u528'] = 'center';
var u529 = document.getElementById('u529');
gv_vAlignTable['u529'] = 'top';
var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'top';
var u261 = document.getElementById('u261');

var u262 = document.getElementById('u262');
gv_vAlignTable['u262'] = 'top';
var u263 = document.getElementById('u263');

var u264 = document.getElementById('u264');
gv_vAlignTable['u264'] = 'top';
var u265 = document.getElementById('u265');

var u266 = document.getElementById('u266');
gv_vAlignTable['u266'] = 'top';
var u267 = document.getElementById('u267');

var u268 = document.getElementById('u268');
gv_vAlignTable['u268'] = 'top';
var u269 = document.getElementById('u269');

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u31 = document.getElementById('u31');

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u33 = document.getElementById('u33');

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u36 = document.getElementById('u36');

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'center';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u39 = document.getElementById('u39');

var u538 = document.getElementById('u538');

var u539 = document.getElementById('u539');

u539.style.cursor = 'pointer';
if (bIE) u539.attachEvent("onclick", Clicku539);
else u539.addEventListener("click", Clicku539, true);
function Clicku539(e)
{

if (true) {

	SetPanelStateu3("pd1u3");

	SetPanelStateu530("pd0u530");

	SetPanelStateu47("pd2u47");

	MoveWidgetTo('u530',5,450);

}

}

var u800 = document.getElementById('u800');
gv_vAlignTable['u800'] = 'top';
var u801 = document.getElementById('u801');
gv_vAlignTable['u801'] = 'top';
var u802 = document.getElementById('u802');
gv_vAlignTable['u802'] = 'top';
var u803 = document.getElementById('u803');
gv_vAlignTable['u803'] = 'top';
var u804 = document.getElementById('u804');
gv_vAlignTable['u804'] = 'top';
var u270 = document.getElementById('u270');
gv_vAlignTable['u270'] = 'top';
var u271 = document.getElementById('u271');

var u272 = document.getElementById('u272');
gv_vAlignTable['u272'] = 'center';
var u273 = document.getElementById('u273');
gv_vAlignTable['u273'] = 'top';
var u274 = document.getElementById('u274');
gv_vAlignTable['u274'] = 'top';
var u275 = document.getElementById('u275');
gv_vAlignTable['u275'] = 'top';
var u276 = document.getElementById('u276');

var u277 = document.getElementById('u277');
gv_vAlignTable['u277'] = 'center';
var u278 = document.getElementById('u278');
gv_vAlignTable['u278'] = 'top';
var u279 = document.getElementById('u279');
gv_vAlignTable['u279'] = 'top';
var u1002 = document.getElementById('u1002');

u1002.style.cursor = 'pointer';
if (bIE) u1002.attachEvent("onclick", Clicku1002);
else u1002.addEventListener("click", Clicku1002, true);
function Clicku1002(e)
{

if (true) {

	SetPanelVisibilityu990("hidden");

	MoveWidgetTo('u956',8,223);

}

}
gv_vAlignTable['u1002'] = 'top';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u42 = document.getElementById('u42');

var u43 = document.getElementById('u43');

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'center';
var u45 = document.getElementById('u45');

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'center';
var u47 = document.getElementById('u47');

var u48 = document.getElementById('u48');

var u49 = document.getElementById('u49');

var u548 = document.getElementById('u548');

var u549 = document.getElementById('u549');
gv_vAlignTable['u549'] = 'center';
var u1005 = document.getElementById('u1005');
gv_vAlignTable['u1005'] = 'center';
var u810 = document.getElementById('u810');
gv_vAlignTable['u810'] = 'top';
var u811 = document.getElementById('u811');
gv_vAlignTable['u811'] = 'top';
var u812 = document.getElementById('u812');
gv_vAlignTable['u812'] = 'top';
var u813 = document.getElementById('u813');
gv_vAlignTable['u813'] = 'top';
var u814 = document.getElementById('u814');
gv_vAlignTable['u814'] = 'top';
var u280 = document.getElementById('u280');

var u281 = document.getElementById('u281');
gv_vAlignTable['u281'] = 'center';
var u282 = document.getElementById('u282');

var u283 = document.getElementById('u283');

var u284 = document.getElementById('u284');

var u285 = document.getElementById('u285');

var u286 = document.getElementById('u286');

var u287 = document.getElementById('u287');

var u288 = document.getElementById('u288');

var u289 = document.getElementById('u289');

var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u51 = document.getElementById('u51');

var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u53 = document.getElementById('u53');

var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u55 = document.getElementById('u55');

var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u57 = document.getElementById('u57');

var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u59 = document.getElementById('u59');

var u558 = document.getElementById('u558');
gv_vAlignTable['u558'] = 'center';
var u559 = document.getElementById('u559');

u559.style.cursor = 'pointer';
if (bIE) u559.attachEvent("onclick", Clicku559);
else u559.addEventListener("click", Clicku559, true);
function Clicku559(e)
{

if (true) {

	BringToFront("u942");

	SetPanelVisibilityu0("hidden");

	SetPanelVisibilityu942("");

	SetPanelStateu1003("pd1u1003");

	SetPanelStateu715("pd1u715");

	MoveWidgetTo('u1081',11,300);

}

}

var u1013 = document.getElementById('u1013');
gv_vAlignTable['u1013'] = 'top';
var u1014 = document.getElementById('u1014');
gv_vAlignTable['u1014'] = 'top';
var u1015 = document.getElementById('u1015');
gv_vAlignTable['u1015'] = 'top';
var u820 = document.getElementById('u820');

u820.style.cursor = 'pointer';
if (bIE) u820.attachEvent("onclick", Clicku820);
else u820.addEventListener("click", Clicku820, true);
function Clicku820(e)
{

if (true) {

	SetPanelStateu3("pd0u3");

}

}

var u821 = document.getElementById('u821');
gv_vAlignTable['u821'] = 'center';
var u822 = document.getElementById('u822');

var u823 = document.getElementById('u823');
gv_vAlignTable['u823'] = 'center';
var u824 = document.getElementById('u824');
gv_vAlignTable['u824'] = 'top';
var u290 = document.getElementById('u290');

var u291 = document.getElementById('u291');

var u292 = document.getElementById('u292');

var u293 = document.getElementById('u293');

var u294 = document.getElementById('u294');

u294.style.cursor = 'pointer';
if (bIE) u294.attachEvent("onclick", Clicku294);
else u294.addEventListener("click", Clicku294, true);
function Clicku294(e)
{

if (true) {

	SetPanelStateu47("pd0u47");

	MoveWidgetTo('u530',28,360);

}

}
gv_vAlignTable['u294'] = 'top';
var u295 = document.getElementById('u295');

var u296 = document.getElementById('u296');

var u297 = document.getElementById('u297');
gv_vAlignTable['u297'] = 'center';
var u298 = document.getElementById('u298');

u298.style.cursor = 'pointer';
if (bIE) u298.attachEvent("onclick", Clicku298);
else u298.addEventListener("click", Clicku298, true);
function Clicku298(e)
{

if (true) {

	SetPanelStateu3("pd0u3");

}

}
gv_vAlignTable['u298'] = 'top';
var u299 = document.getElementById('u299');

var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
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

var u568 = document.getElementById('u568');
gv_vAlignTable['u568'] = 'center';
var u569 = document.getElementById('u569');
gv_vAlignTable['u569'] = 'top';
var u1020 = document.getElementById('u1020');
gv_vAlignTable['u1020'] = 'center';
var u1021 = document.getElementById('u1021');
gv_vAlignTable['u1021'] = 'top';
var u1022 = document.getElementById('u1022');
gv_vAlignTable['u1022'] = 'top';
var u830 = document.getElementById('u830');

var u831 = document.getElementById('u831');
gv_vAlignTable['u831'] = 'center';
var u832 = document.getElementById('u832');

u832.style.cursor = 'pointer';
if (bIE) u832.attachEvent("onclick", Clicku832);
else u832.addEventListener("click", Clicku832, true);
function Clicku832(e)
{

if (true) {

	SetPanelStateu3("pd0u3");

}

}
gv_vAlignTable['u832'] = 'top';
var u833 = document.getElementById('u833');

var u834 = document.getElementById('u834');
gv_vAlignTable['u834'] = 'center';
var u835 = document.getElementById('u835');

var u836 = document.getElementById('u836');
gv_vAlignTable['u836'] = 'center';
var u837 = document.getElementById('u837');

var u838 = document.getElementById('u838');
gv_vAlignTable['u838'] = 'center';
var u839 = document.getElementById('u839');
gv_vAlignTable['u839'] = 'top';
var u1206 = document.getElementById('u1206');

var u1207 = document.getElementById('u1207');
gv_vAlignTable['u1207'] = 'top';
var u1208 = document.getElementById('u1208');
gv_vAlignTable['u1208'] = 'top';
var u1209 = document.getElementById('u1209');
gv_vAlignTable['u1209'] = 'top';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'center';
var u71 = document.getElementById('u71');

var u72 = document.getElementById('u72');

var u73 = document.getElementById('u73');

var u74 = document.getElementById('u74');

var u75 = document.getElementById('u75');

var u76 = document.getElementById('u76');

var u77 = document.getElementById('u77');

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u79 = document.getElementById('u79');

var u578 = document.getElementById('u578');
gv_vAlignTable['u578'] = 'top';
var u579 = document.getElementById('u579');

var u1030 = document.getElementById('u1030');
gv_vAlignTable['u1030'] = 'top';
var u1031 = document.getElementById('u1031');
gv_vAlignTable['u1031'] = 'top';
var u840 = document.getElementById('u840');

u840.style.cursor = 'pointer';
if (bIE) u840.attachEvent("onclick", Clicku840);
else u840.addEventListener("click", Clicku840, true);
function Clicku840(e)
{

if (true) {

	SetPanelStateu3("pd1u3");

	SetPanelStateu47("pd0u47");

	SetPanelStateu530("pd1u530");

}

}
gv_vAlignTable['u840'] = 'top';
var u841 = document.getElementById('u841');

var u842 = document.getElementById('u842');
gv_vAlignTable['u842'] = 'center';
var u843 = document.getElementById('u843');

var u844 = document.getElementById('u844');
gv_vAlignTable['u844'] = 'center';
var u845 = document.getElementById('u845');

u845.style.cursor = 'pointer';
if (bIE) u845.attachEvent("onclick", Clicku845);
else u845.addEventListener("click", Clicku845, true);
function Clicku845(e)
{

if (true) {

	SetPanelStateu47("pd2u47");

	SetPanelStateu530("pd0u530");

}

}
gv_vAlignTable['u845'] = 'top';
var u846 = document.getElementById('u846');

var u847 = document.getElementById('u847');
gv_vAlignTable['u847'] = 'center';
var u848 = document.getElementById('u848');
gv_vAlignTable['u848'] = 'top';
var u849 = document.getElementById('u849');

u849.style.cursor = 'pointer';
if (bIE) u849.attachEvent("onclick", Clicku849);
else u849.addEventListener("click", Clicku849, true);
function Clicku849(e)
{

if (true) {

	SetPanelStateu3("pd0u3");

}

}
gv_vAlignTable['u849'] = 'top';
var u1216 = document.getElementById('u1216');

var u1217 = document.getElementById('u1217');
gv_vAlignTable['u1217'] = 'top';
var u1218 = document.getElementById('u1218');
gv_vAlignTable['u1218'] = 'top';
var u1219 = document.getElementById('u1219');
gv_vAlignTable['u1219'] = 'top';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'top';
var u81 = document.getElementById('u81');

var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'top';
var u83 = document.getElementById('u83');

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'top';
var u85 = document.getElementById('u85');

var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'top';
var u87 = document.getElementById('u87');

var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'top';
var u89 = document.getElementById('u89');

var u588 = document.getElementById('u588');
gv_vAlignTable['u588'] = 'top';
var u589 = document.getElementById('u589');

var u1120 = document.getElementById('u1120');

var u850 = document.getElementById('u850');

var u851 = document.getElementById('u851');
gv_vAlignTable['u851'] = 'center';
var u852 = document.getElementById('u852');

var u853 = document.getElementById('u853');
gv_vAlignTable['u853'] = 'center';
var u854 = document.getElementById('u854');

u854.style.cursor = 'pointer';
if (bIE) u854.attachEvent("onclick", Clicku854);
else u854.addEventListener("click", Clicku854, true);
function Clicku854(e)
{

if (true) {

	SetPanelStateu3("pd1u3");

	SetPanelStateu47("pd0u47");

	SetPanelStateu530("pd1u530");

}

}
gv_vAlignTable['u854'] = 'top';
var u855 = document.getElementById('u855');

var u856 = document.getElementById('u856');

var u857 = document.getElementById('u857');

var u858 = document.getElementById('u858');
gv_vAlignTable['u858'] = 'top';
var u859 = document.getElementById('u859');

var u1226 = document.getElementById('u1226');

var u1227 = document.getElementById('u1227');
gv_vAlignTable['u1227'] = 'top';
var u1228 = document.getElementById('u1228');
gv_vAlignTable['u1228'] = 'top';
var u1229 = document.getElementById('u1229');
gv_vAlignTable['u1229'] = 'top';
var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u91 = document.getElementById('u91');

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u93 = document.getElementById('u93');

var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'center';
var u95 = document.getElementById('u95');

var u96 = document.getElementById('u96');

var u97 = document.getElementById('u97');

var u98 = document.getElementById('u98');

var u99 = document.getElementById('u99');

var u598 = document.getElementById('u598');

var u599 = document.getElementById('u599');
gv_vAlignTable['u599'] = 'center';
var u860 = document.getElementById('u860');
gv_vAlignTable['u860'] = 'top';
var u861 = document.getElementById('u861');

var u862 = document.getElementById('u862');
gv_vAlignTable['u862'] = 'top';
var u863 = document.getElementById('u863');

var u864 = document.getElementById('u864');
gv_vAlignTable['u864'] = 'top';
var u865 = document.getElementById('u865');

var u866 = document.getElementById('u866');
gv_vAlignTable['u866'] = 'top';
var u867 = document.getElementById('u867');

var u868 = document.getElementById('u868');
gv_vAlignTable['u868'] = 'top';
var u869 = document.getElementById('u869');

var u1236 = document.getElementById('u1236');

var u1237 = document.getElementById('u1237');
gv_vAlignTable['u1237'] = 'center';
var u1238 = document.getElementById('u1238');

var u1239 = document.getElementById('u1239');
gv_vAlignTable['u1239'] = 'top';
var u1111 = document.getElementById('u1111');
gv_vAlignTable['u1111'] = 'center';
var u1112 = document.getElementById('u1112');

var u1113 = document.getElementById('u1113');
gv_vAlignTable['u1113'] = 'top';
var u1114 = document.getElementById('u1114');
gv_vAlignTable['u1114'] = 'top';
var u1115 = document.getElementById('u1115');
gv_vAlignTable['u1115'] = 'top';
var u1116 = document.getElementById('u1116');

var u870 = document.getElementById('u870');
gv_vAlignTable['u870'] = 'top';
var u871 = document.getElementById('u871');

var u872 = document.getElementById('u872');
gv_vAlignTable['u872'] = 'top';
var u873 = document.getElementById('u873');

var u874 = document.getElementById('u874');
gv_vAlignTable['u874'] = 'top';
var u875 = document.getElementById('u875');

var u876 = document.getElementById('u876');
gv_vAlignTable['u876'] = 'top';
var u877 = document.getElementById('u877');

var u878 = document.getElementById('u878');
gv_vAlignTable['u878'] = 'top';
var u879 = document.getElementById('u879');

var u1149 = document.getElementById('u1149');
gv_vAlignTable['u1149'] = 'center';
var u1247 = document.getElementById('u1247');
gv_vAlignTable['u1247'] = 'top';
var u1248 = document.getElementById('u1248');

var u1249 = document.getElementById('u1249');
gv_vAlignTable['u1249'] = 'top';
var u1121 = document.getElementById('u1121');
gv_vAlignTable['u1121'] = 'center';
var u1122 = document.getElementById('u1122');

var u880 = document.getElementById('u880');
gv_vAlignTable['u880'] = 'top';
var u881 = document.getElementById('u881');

var u882 = document.getElementById('u882');
gv_vAlignTable['u882'] = 'top';
var u883 = document.getElementById('u883');

var u884 = document.getElementById('u884');
gv_vAlignTable['u884'] = 'top';
var u885 = document.getElementById('u885');

var u886 = document.getElementById('u886');
gv_vAlignTable['u886'] = 'top';
var u887 = document.getElementById('u887');

var u888 = document.getElementById('u888');
gv_vAlignTable['u888'] = 'top';
var u889 = document.getElementById('u889');

var u1256 = document.getElementById('u1256');
gv_vAlignTable['u1256'] = 'top';
var u1159 = document.getElementById('u1159');
gv_vAlignTable['u1159'] = 'center';
var u1258 = document.getElementById('u1258');

var u1259 = document.getElementById('u1259');
gv_vAlignTable['u1259'] = 'top';
var u1200 = document.getElementById('u1200');

var u1201 = document.getElementById('u1201');
gv_vAlignTable['u1201'] = 'center';
var u1202 = document.getElementById('u1202');

var u1203 = document.getElementById('u1203');
gv_vAlignTable['u1203'] = 'top';
var u1204 = document.getElementById('u1204');
gv_vAlignTable['u1204'] = 'top';
var u1205 = document.getElementById('u1205');
gv_vAlignTable['u1205'] = 'top';
var u890 = document.getElementById('u890');
gv_vAlignTable['u890'] = 'top';
var u891 = document.getElementById('u891');

var u892 = document.getElementById('u892');
gv_vAlignTable['u892'] = 'top';
var u893 = document.getElementById('u893');

var u894 = document.getElementById('u894');
gv_vAlignTable['u894'] = 'top';
var u895 = document.getElementById('u895');

var u896 = document.getElementById('u896');
gv_vAlignTable['u896'] = 'top';
var u897 = document.getElementById('u897');

var u898 = document.getElementById('u898');
gv_vAlignTable['u898'] = 'top';
var u899 = document.getElementById('u899');

var u1139 = document.getElementById('u1139');
gv_vAlignTable['u1139'] = 'center';
var u1168 = document.getElementById('u1168');
gv_vAlignTable['u1168'] = 'top';
var u1169 = document.getElementById('u1169');
gv_vAlignTable['u1169'] = 'top';
var u1269 = document.getElementById('u1269');
gv_vAlignTable['u1269'] = 'center';
var u1210 = document.getElementById('u1210');

var u1211 = document.getElementById('u1211');
gv_vAlignTable['u1211'] = 'center';
var u1212 = document.getElementById('u1212');

var u1213 = document.getElementById('u1213');
gv_vAlignTable['u1213'] = 'center';
var u1214 = document.getElementById('u1214');

var u1215 = document.getElementById('u1215');
gv_vAlignTable['u1215'] = 'center';
var u1303 = document.getElementById('u1303');

var u1304 = document.getElementById('u1304');
gv_vAlignTable['u1304'] = 'center';
var u1270 = document.getElementById('u1270');

var u1271 = document.getElementById('u1271');
gv_vAlignTable['u1271'] = 'top';
var u1272 = document.getElementById('u1272');
gv_vAlignTable['u1272'] = 'top';
var u1273 = document.getElementById('u1273');
gv_vAlignTable['u1273'] = 'top';
var u1174 = document.getElementById('u1174');
gv_vAlignTable['u1174'] = 'top';
var u1175 = document.getElementById('u1175');
gv_vAlignTable['u1175'] = 'top';
var u1176 = document.getElementById('u1176');

var u1177 = document.getElementById('u1177');
gv_vAlignTable['u1177'] = 'top';
var u927 = document.getElementById('u927');
gv_vAlignTable['u927'] = 'top';
var u928 = document.getElementById('u928');

var u929 = document.getElementById('u929');
gv_vAlignTable['u929'] = 'top';
var u1220 = document.getElementById('u1220');

var u1221 = document.getElementById('u1221');
gv_vAlignTable['u1221'] = 'top';
var u1222 = document.getElementById('u1222');
gv_vAlignTable['u1222'] = 'top';
var u1127 = document.getElementById('u1127');
gv_vAlignTable['u1127'] = 'top';
var u1224 = document.getElementById('u1224');

var u1225 = document.getElementById('u1225');
gv_vAlignTable['u1225'] = 'center';
var u1180 = document.getElementById('u1180');

var u1181 = document.getElementById('u1181');
gv_vAlignTable['u1181'] = 'center';
var u1182 = document.getElementById('u1182');

var u1183 = document.getElementById('u1183');
gv_vAlignTable['u1183'] = 'center';
var u1150 = document.getElementById('u1150');

var u1286 = document.getElementById('u1286');

var u1186 = document.getElementById('u1186');
gv_vAlignTable['u1186'] = 'top';
var u1187 = document.getElementById('u1187');
gv_vAlignTable['u1187'] = 'top';
var u1188 = document.getElementById('u1188');

var u1155 = document.getElementById('u1155');
gv_vAlignTable['u1155'] = 'top';
var u1230 = document.getElementById('u1230');

var u1231 = document.getElementById('u1231');
gv_vAlignTable['u1231'] = 'top';
var u1232 = document.getElementById('u1232');
gv_vAlignTable['u1232'] = 'top';
var u1233 = document.getElementById('u1233');
gv_vAlignTable['u1233'] = 'top';
var u1234 = document.getElementById('u1234');

var u1235 = document.getElementById('u1235');
gv_vAlignTable['u1235'] = 'center';
var u1192 = document.getElementById('u1192');

var u1193 = document.getElementById('u1193');
gv_vAlignTable['u1193'] = 'center';
var u1194 = document.getElementById('u1194');

var u1195 = document.getElementById('u1195');
gv_vAlignTable['u1195'] = 'top';
var u1196 = document.getElementById('u1196');

var u1299 = document.getElementById('u1299');

u1299.style.cursor = 'pointer';
if (bIE) u1299.attachEvent("onclick", Clicku1299);
else u1299.addEventListener("click", Clicku1299, true);
function Clicku1299(e)
{

if (true) {

	BringToFront("u0");

	SetPanelStateu3("pd3u3");

}

}

var u1240 = document.getElementById('u1240');
gv_vAlignTable['u1240'] = 'top';
var u1241 = document.getElementById('u1241');
gv_vAlignTable['u1241'] = 'top';
var u1242 = document.getElementById('u1242');

var u1243 = document.getElementById('u1243');
gv_vAlignTable['u1243'] = 'center';
var u1244 = document.getElementById('u1244');

var u1245 = document.getElementById('u1245');
gv_vAlignTable['u1245'] = 'top';
var u1246 = document.getElementById('u1246');
gv_vAlignTable['u1246'] = 'top';
var u370 = document.getElementById('u370');

var u371 = document.getElementById('u371');
gv_vAlignTable['u371'] = 'top';
var u372 = document.getElementById('u372');

var u373 = document.getElementById('u373');
gv_vAlignTable['u373'] = 'top';
var u374 = document.getElementById('u374');

var u1250 = document.getElementById('u1250');
gv_vAlignTable['u1250'] = 'top';
var u1251 = document.getElementById('u1251');
gv_vAlignTable['u1251'] = 'top';
var u1252 = document.getElementById('u1252');

var u1253 = document.getElementById('u1253');
gv_vAlignTable['u1253'] = 'center';
var u1254 = document.getElementById('u1254');

var u381 = document.getElementById('u381');
gv_vAlignTable['u381'] = 'top';
var u382 = document.getElementById('u382');

var u383 = document.getElementById('u383');
gv_vAlignTable['u383'] = 'top';
var u384 = document.getElementById('u384');

var u915 = document.getElementById('u915');

var u925 = document.getElementById('u925');
gv_vAlignTable['u925'] = 'top';
var u926 = document.getElementById('u926');

var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'center';
var u3 = document.getElementById('u3');

var u4 = document.getElementById('u4');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'top';
var u7 = document.getElementById('u7');

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'top';
var u9 = document.getElementById('u9');

var u12 = document.getElementById('u12');

u12.style.cursor = 'pointer';
if (bIE) u12.attachEvent("onclick", Clicku12);
else u12.addEventListener("click", Clicku12, true);
function Clicku12(e)
{

if (true) {

	SetPanelVisibilityu0("hidden");

	SetPanelVisibilityu942("");

	BringToFront("u942");

}

}
gv_vAlignTable['u12'] = 'top';
var u300 = document.getElementById('u300');
gv_vAlignTable['u300'] = 'center';
var u301 = document.getElementById('u301');

var u302 = document.getElementById('u302');
gv_vAlignTable['u302'] = 'center';
var u303 = document.getElementById('u303');
gv_vAlignTable['u303'] = 'top';
var u304 = document.getElementById('u304');

var u305 = document.getElementById('u305');
gv_vAlignTable['u305'] = 'center';
var u306 = document.getElementById('u306');
gv_vAlignTable['u306'] = 'top';
var u307 = document.getElementById('u307');

var u308 = document.getElementById('u308');
gv_vAlignTable['u308'] = 'center';
var u309 = document.getElementById('u309');

var u310 = document.getElementById('u310');
gv_vAlignTable['u310'] = 'center';
var u311 = document.getElementById('u311');
gv_vAlignTable['u311'] = 'top';
var u312 = document.getElementById('u312');

var u313 = document.getElementById('u313');
gv_vAlignTable['u313'] = 'center';
var u314 = document.getElementById('u314');
gv_vAlignTable['u314'] = 'top';
var u315 = document.getElementById('u315');

u315.style.cursor = 'pointer';
if (bIE) u315.attachEvent("onclick", Clicku315);
else u315.addEventListener("click", Clicku315, true);
function Clicku315(e)
{

if (true) {

	SetPanelStateu3("pd0u3");

}

}
gv_vAlignTable['u315'] = 'top';
var u316 = document.getElementById('u316');

var u317 = document.getElementById('u317');
gv_vAlignTable['u317'] = 'center';
var u318 = document.getElementById('u318');

var u319 = document.getElementById('u319');
gv_vAlignTable['u319'] = 'center';
var u0 = document.getElementById('u0');

var u1 = document.getElementById('u1');

var u320 = document.getElementById('u320');
gv_vAlignTable['u320'] = 'top';
var u321 = document.getElementById('u321');

var u322 = document.getElementById('u322');

var u323 = document.getElementById('u323');
gv_vAlignTable['u323'] = 'top';
var u324 = document.getElementById('u324');

var u325 = document.getElementById('u325');
gv_vAlignTable['u325'] = 'top';
var u326 = document.getElementById('u326');

var u327 = document.getElementById('u327');
gv_vAlignTable['u327'] = 'top';
var u328 = document.getElementById('u328');

var u329 = document.getElementById('u329');
gv_vAlignTable['u329'] = 'top';
var u330 = document.getElementById('u330');

var u331 = document.getElementById('u331');
gv_vAlignTable['u331'] = 'top';
var u332 = document.getElementById('u332');

var u333 = document.getElementById('u333');
gv_vAlignTable['u333'] = 'top';
var u334 = document.getElementById('u334');

var u335 = document.getElementById('u335');
gv_vAlignTable['u335'] = 'top';
var u336 = document.getElementById('u336');

var u337 = document.getElementById('u337');
gv_vAlignTable['u337'] = 'top';
var u338 = document.getElementById('u338');

var u339 = document.getElementById('u339');
gv_vAlignTable['u339'] = 'top';
var u600 = document.getElementById('u600');
gv_vAlignTable['u600'] = 'top';
var u601 = document.getElementById('u601');
gv_vAlignTable['u601'] = 'top';
var u602 = document.getElementById('u602');
gv_vAlignTable['u602'] = 'top';
var u603 = document.getElementById('u603');
gv_vAlignTable['u603'] = 'top';
var u604 = document.getElementById('u604');
gv_vAlignTable['u604'] = 'top';
var u605 = document.getElementById('u605');
gv_vAlignTable['u605'] = 'top';
var u606 = document.getElementById('u606');

var u607 = document.getElementById('u607');
gv_vAlignTable['u607'] = 'center';
var u608 = document.getElementById('u608');
gv_vAlignTable['u608'] = 'top';
var u609 = document.getElementById('u609');
gv_vAlignTable['u609'] = 'top';
var u340 = document.getElementById('u340');

var u341 = document.getElementById('u341');
gv_vAlignTable['u341'] = 'top';
var u342 = document.getElementById('u342');

var u343 = document.getElementById('u343');
gv_vAlignTable['u343'] = 'top';
var u344 = document.getElementById('u344');

var u345 = document.getElementById('u345');
gv_vAlignTable['u345'] = 'top';
var u346 = document.getElementById('u346');

var u347 = document.getElementById('u347');
gv_vAlignTable['u347'] = 'top';
var u348 = document.getElementById('u348');

var u349 = document.getElementById('u349');
gv_vAlignTable['u349'] = 'top';
var u610 = document.getElementById('u610');
gv_vAlignTable['u610'] = 'top';
var u611 = document.getElementById('u611');
gv_vAlignTable['u611'] = 'top';
var u612 = document.getElementById('u612');
gv_vAlignTable['u612'] = 'top';
var u613 = document.getElementById('u613');
gv_vAlignTable['u613'] = 'top';
var u614 = document.getElementById('u614');

var u615 = document.getElementById('u615');
gv_vAlignTable['u615'] = 'center';
var u616 = document.getElementById('u616');
gv_vAlignTable['u616'] = 'top';
var u617 = document.getElementById('u617');
gv_vAlignTable['u617'] = 'top';
var u618 = document.getElementById('u618');
gv_vAlignTable['u618'] = 'top';
var u619 = document.getElementById('u619');
gv_vAlignTable['u619'] = 'top';
var u350 = document.getElementById('u350');

var u351 = document.getElementById('u351');
gv_vAlignTable['u351'] = 'top';
var u352 = document.getElementById('u352');

var u353 = document.getElementById('u353');
gv_vAlignTable['u353'] = 'top';
var u354 = document.getElementById('u354');

var u355 = document.getElementById('u355');
gv_vAlignTable['u355'] = 'top';
var u356 = document.getElementById('u356');

var u357 = document.getElementById('u357');
gv_vAlignTable['u357'] = 'top';
var u358 = document.getElementById('u358');

var u359 = document.getElementById('u359');
gv_vAlignTable['u359'] = 'top';
var u620 = document.getElementById('u620');
gv_vAlignTable['u620'] = 'top';
var u621 = document.getElementById('u621');
gv_vAlignTable['u621'] = 'top';
var u622 = document.getElementById('u622');

var u623 = document.getElementById('u623');

if (bIE) u623.attachEvent("onmouseover", MouseOveru623);
else u623.addEventListener("mouseover", MouseOveru623, true);
function MouseOveru623(e)
{
if (!IsTrueMouseOver('u623',e)) return;
if (true) {

	SetPanelStateu622("pd2u622");

	SetPanelStateu589("pd4u589");

}

}

var u624 = document.getElementById('u624');
gv_vAlignTable['u624'] = 'center';
var u625 = document.getElementById('u625');

var u626 = document.getElementById('u626');
gv_vAlignTable['u626'] = 'center';
var u627 = document.getElementById('u627');

u627.style.cursor = 'pointer';
if (bIE) u627.attachEvent("onclick", Clicku627);
else u627.addEventListener("click", Clicku627, true);
function Clicku627(e)
{

if (true) {

	SetPanelStateu622("pd1u622");

	SetPanelStateu545("pd3u545");

	SetPanelStateu643("pd0u643");

	SetPanelStateu636("pd0u636");

	SetPanelStateu629("pd0u629");

	SetPanelStateu589("pd4u589");

	SetPanelVisibilityu571("");

	MoveWidgetTo('u555',2,162);

}

}

if (bIE) u627.attachEvent("onmouseout", MouseOutu627);
else u627.addEventListener("mouseout", MouseOutu627, true);
function MouseOutu627(e)
{
if (!IsTrueMouseOut('u627',e)) return;
if (true) {

	SetPanelStateu589("pd0u589");

	SetPanelStateu622("pd0u622");

}

}

var u628 = document.getElementById('u628');
gv_vAlignTable['u628'] = 'center';
var u629 = document.getElementById('u629');

var u360 = document.getElementById('u360');

var u361 = document.getElementById('u361');
gv_vAlignTable['u361'] = 'top';
var u362 = document.getElementById('u362');

var u363 = document.getElementById('u363');
gv_vAlignTable['u363'] = 'top';
var u364 = document.getElementById('u364');

var u365 = document.getElementById('u365');
gv_vAlignTable['u365'] = 'top';
var u366 = document.getElementById('u366');

var u367 = document.getElementById('u367');
gv_vAlignTable['u367'] = 'top';
var u368 = document.getElementById('u368');

var u369 = document.getElementById('u369');
gv_vAlignTable['u369'] = 'top';
var u1003 = document.getElementById('u1003');

var u1009 = document.getElementById('u1009');

var u630 = document.getElementById('u630');

if (bIE) u630.attachEvent("onmouseover", MouseOveru630);
else u630.addEventListener("mouseover", MouseOveru630, true);
function MouseOveru630(e)
{
if (!IsTrueMouseOver('u630',e)) return;
if (true) {

	SetPanelStateu629("pd2u629");

	SetPanelStateu589("pd3u589");

}

}

var u631 = document.getElementById('u631');
gv_vAlignTable['u631'] = 'center';
var u632 = document.getElementById('u632');

var u633 = document.getElementById('u633');
gv_vAlignTable['u633'] = 'center';
var u634 = document.getElementById('u634');

u634.style.cursor = 'pointer';
if (bIE) u634.attachEvent("onclick", Clicku634);
else u634.addEventListener("click", Clicku634, true);
function Clicku634(e)
{

if (true) {

	SetPanelStateu629("pd1u629");

	SetPanelStateu545("pd3u545");

	SetPanelStateu643("pd0u643");

	SetPanelStateu622("pd0u622");

	SetPanelStateu636("pd0u636");

	SetPanelStateu589("pd3u589");

	SetPanelVisibilityu571("");

	MoveWidgetTo('u555',2,162);

}

}

if (bIE) u634.attachEvent("onmouseout", MouseOutu634);
else u634.addEventListener("mouseout", MouseOutu634, true);
function MouseOutu634(e)
{
if (!IsTrueMouseOut('u634',e)) return;
if (true) {

	SetPanelStateu589("pd0u589");

	SetPanelStateu629("pd0u629");

}

}

var u635 = document.getElementById('u635');
gv_vAlignTable['u635'] = 'center';
var u636 = document.getElementById('u636');

var u637 = document.getElementById('u637');

if (bIE) u637.attachEvent("onmouseover", MouseOveru637);
else u637.addEventListener("mouseover", MouseOveru637, true);
function MouseOveru637(e)
{
if (!IsTrueMouseOver('u637',e)) return;
if (true) {

	SetPanelStateu636("pd2u636");

	SetPanelStateu589("pd2u589");

}

}

var u638 = document.getElementById('u638');
gv_vAlignTable['u638'] = 'center';
var u639 = document.getElementById('u639');

var u1006 = document.getElementById('u1006');
gv_vAlignTable['u1006'] = 'top';
var u1007 = document.getElementById('u1007');

u1007.style.cursor = 'pointer';
if (bIE) u1007.attachEvent("onclick", Clicku1007);
else u1007.addEventListener("click", Clicku1007, true);
function Clicku1007(e)
{

if (true) {

	BringToFront("u0");

	SetPanelStateu3("pd0u3");

	SetPanelVisibilityu0("");

}

}

var u1008 = document.getElementById('u1008');
gv_vAlignTable['u1008'] = 'center';
var u900 = document.getElementById('u900');
gv_vAlignTable['u900'] = 'top';
var u901 = document.getElementById('u901');

var u902 = document.getElementById('u902');
gv_vAlignTable['u902'] = 'top';
var u903 = document.getElementById('u903');

var u904 = document.getElementById('u904');
gv_vAlignTable['u904'] = 'top';
var u905 = document.getElementById('u905');

var u906 = document.getElementById('u906');
gv_vAlignTable['u906'] = 'top';
var u907 = document.getElementById('u907');

var u908 = document.getElementById('u908');
gv_vAlignTable['u908'] = 'top';
var u909 = document.getElementById('u909');

var u375 = document.getElementById('u375');
gv_vAlignTable['u375'] = 'top';
var u376 = document.getElementById('u376');

var u377 = document.getElementById('u377');
gv_vAlignTable['u377'] = 'top';
var u378 = document.getElementById('u378');

var u379 = document.getElementById('u379');
gv_vAlignTable['u379'] = 'top';
var u1019 = document.getElementById('u1019');

var u640 = document.getElementById('u640');
gv_vAlignTable['u640'] = 'center';
var u641 = document.getElementById('u641');

u641.style.cursor = 'pointer';
if (bIE) u641.attachEvent("onclick", Clicku641);
else u641.addEventListener("click", Clicku641, true);
function Clicku641(e)
{

if (true) {

	SetPanelStateu636("pd1u636");

	SetPanelStateu545("pd3u545");

	SetPanelStateu643("pd0u643");

	SetPanelStateu629("pd0u629");

	SetPanelStateu622("pd0u622");

	SetPanelStateu589("pd2u589");

	SetPanelVisibilityu571("");

	MoveWidgetTo('u555',2,162);

}

}

if (bIE) u641.attachEvent("onmouseout", MouseOutu641);
else u641.addEventListener("mouseout", MouseOutu641, true);
function MouseOutu641(e)
{
if (!IsTrueMouseOut('u641',e)) return;
if (true) {

	SetPanelStateu589("pd0u589");

	SetPanelStateu636("pd0u636");

}

}

var u642 = document.getElementById('u642');
gv_vAlignTable['u642'] = 'center';
var u643 = document.getElementById('u643');

var u644 = document.getElementById('u644');

if (bIE) u644.attachEvent("onmouseover", MouseOveru644);
else u644.addEventListener("mouseover", MouseOveru644, true);
function MouseOveru644(e)
{
if (!IsTrueMouseOver('u644',e)) return;
if (true) {

	SetPanelStateu643("pd2u643");

	SetPanelStateu589("pd1u589");

}

}

var u645 = document.getElementById('u645');
gv_vAlignTable['u645'] = 'center';
var u646 = document.getElementById('u646');

var u647 = document.getElementById('u647');
gv_vAlignTable['u647'] = 'center';
var u648 = document.getElementById('u648');

u648.style.cursor = 'pointer';
if (bIE) u648.attachEvent("onclick", Clicku648);
else u648.addEventListener("click", Clicku648, true);
function Clicku648(e)
{

if (true) {

	SetPanelStateu643("pd1u643");

	SetPanelStateu545("pd3u545");

	SetPanelStateu636("pd0u636");

	SetPanelStateu629("pd0u629");

	SetPanelStateu622("pd0u622");

	SetPanelStateu589("pd1u589");

	SetPanelVisibilityu571("");

	MoveWidgetTo('u555',2,162);

}

}

if (bIE) u648.attachEvent("onmouseout", MouseOutu648);
else u648.addEventListener("mouseout", MouseOutu648, true);
function MouseOutu648(e)
{
if (!IsTrueMouseOut('u648',e)) return;
if (true) {

	SetPanelStateu589("pd0u589");

	SetPanelStateu643("pd0u643");

}

}

var u649 = document.getElementById('u649');
gv_vAlignTable['u649'] = 'center';
var u1016 = document.getElementById('u1016');
gv_vAlignTable['u1016'] = 'top';
var u1017 = document.getElementById('u1017');
gv_vAlignTable['u1017'] = 'top';
var u1018 = document.getElementById('u1018');
gv_vAlignTable['u1018'] = 'top';
var u910 = document.getElementById('u910');
gv_vAlignTable['u910'] = 'top';
var u911 = document.getElementById('u911');

var u912 = document.getElementById('u912');
gv_vAlignTable['u912'] = 'top';
var u913 = document.getElementById('u913');

var u914 = document.getElementById('u914');
gv_vAlignTable['u914'] = 'top';
var u380 = document.getElementById('u380');

var u916 = document.getElementById('u916');
gv_vAlignTable['u916'] = 'top';
var u917 = document.getElementById('u917');

var u918 = document.getElementById('u918');
gv_vAlignTable['u918'] = 'top';
var u919 = document.getElementById('u919');

var u385 = document.getElementById('u385');
gv_vAlignTable['u385'] = 'top';
var u386 = document.getElementById('u386');

var u387 = document.getElementById('u387');
gv_vAlignTable['u387'] = 'top';
var u388 = document.getElementById('u388');

var u389 = document.getElementById('u389');
gv_vAlignTable['u389'] = 'top';
var u650 = document.getElementById('u650');
gv_vAlignTable['u650'] = 'top';
var u651 = document.getElementById('u651');

var u652 = document.getElementById('u652');
gv_vAlignTable['u652'] = 'center';
var u653 = document.getElementById('u653');
gv_vAlignTable['u653'] = 'top';
var u654 = document.getElementById('u654');

u654.style.cursor = 'pointer';
if (bIE) u654.attachEvent("onclick", Clicku654);
else u654.addEventListener("click", Clicku654, true);
function Clicku654(e)
{

if (true) {

	SetPanelVisibilityu0("hidden");

	SetPanelVisibilityu942("");

	BringToFront("u942");

}

}
gv_vAlignTable['u654'] = 'top';
var u655 = document.getElementById('u655');

var u656 = document.getElementById('u656');

var u657 = document.getElementById('u657');

var u658 = document.getElementById('u658');
gv_vAlignTable['u658'] = 'center';
var u659 = document.getElementById('u659');
gv_vAlignTable['u659'] = 'top';
var u1023 = document.getElementById('u1023');

var u1024 = document.getElementById('u1024');
gv_vAlignTable['u1024'] = 'center';
var u1025 = document.getElementById('u1025');

var u920 = document.getElementById('u920');
gv_vAlignTable['u920'] = 'top';
var u921 = document.getElementById('u921');

var u922 = document.getElementById('u922');
gv_vAlignTable['u922'] = 'top';
var u923 = document.getElementById('u923');

u923.style.cursor = 'pointer';
if (bIE) u923.attachEvent("onclick", Clicku923);
else u923.addEventListener("click", Clicku923, true);
function Clicku923(e)
{

if (true) {

	SetPanelStateu47("pd2u47");

	SetPanelStateu530("pd0u530");

	SetPanelStateu3("pd1u3");

	SetPanelStateu129("pd1u129");

}

}
gv_vAlignTable['u923'] = 'top';
var u924 = document.getElementById('u924');

var u390 = document.getElementById('u390');

var u391 = document.getElementById('u391');
gv_vAlignTable['u391'] = 'top';
var u392 = document.getElementById('u392');

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
var u660 = document.getElementById('u660');

var u661 = document.getElementById('u661');
gv_vAlignTable['u661'] = 'center';
var u662 = document.getElementById('u662');
gv_vAlignTable['u662'] = 'top';
var u663 = document.getElementById('u663');
gv_vAlignTable['u663'] = 'top';
var u664 = document.getElementById('u664');

var u665 = document.getElementById('u665');
gv_vAlignTable['u665'] = 'top';
var u666 = document.getElementById('u666');

var u667 = document.getElementById('u667');
gv_vAlignTable['u667'] = 'top';
var u668 = document.getElementById('u668');
gv_vAlignTable['u668'] = 'top';
var u669 = document.getElementById('u669');
gv_vAlignTable['u669'] = 'top';
var u1032 = document.getElementById('u1032');

u1032.style.cursor = 'pointer';
if (bIE) u1032.attachEvent("onclick", Clicku1032);
else u1032.addEventListener("click", Clicku1032, true);
function Clicku1032(e)
{

if (true) {

SetWidgetRichText('u1041', PopulateVariables('<span style=" font-family:\'Calibri\'; color:#5E5E5E; font-size:12px;">Sizes:&nbsp; 1 - L<br>Total:&nbsp; 1@ $12.00 each&nbsp;&nbsp; </span>'));

}

}
gv_vAlignTable['u1032'] = 'top';
var u1033 = document.getElementById('u1033');
gv_vAlignTable['u1033'] = 'top';
var u1034 = document.getElementById('u1034');

var u930 = document.getElementById('u930');

var u931 = document.getElementById('u931');
gv_vAlignTable['u931'] = 'top';
var u932 = document.getElementById('u932');

u932.style.cursor = 'pointer';
if (bIE) u932.attachEvent("onclick", Clicku932);
else u932.addEventListener("click", Clicku932, true);
function Clicku932(e)
{

if (true) {

	SetPanelStateu3("pd1u3");

	SetPanelStateu47("pd0u47");

	SetPanelStateu530("pd0u530");

	SetPanelStateu129("pd0u129");

}

}
gv_vAlignTable['u932'] = 'top';
var u933 = document.getElementById('u933');

var u934 = document.getElementById('u934');

var u935 = document.getElementById('u935');

u935.style.cursor = 'pointer';
if (bIE) u935.attachEvent("onclick", Clicku935);
else u935.addEventListener("click", Clicku935, true);
function Clicku935(e)
{

if (true) {

	SetPanelVisibilityu0("hidden");

	SetPanelVisibilityu942("");

	BringToFront("u942");

	SetPanelStateu1003("pd1u1003");

	SetPanelStateu1094("pd1u1094");

	MoveWidgetTo('u1081',11,246);

}

}

var u936 = document.getElementById('u936');
gv_vAlignTable['u936'] = 'center';
var u937 = document.getElementById('u937');

u937.style.cursor = 'pointer';
if (bIE) u937.attachEvent("onclick", Clicku937);
else u937.addEventListener("click", Clicku937, true);
function Clicku937(e)
{

if (true) {

	SetPanelVisibilityu3("hidden");

	SetPanelVisibilityu942("");

	BringToFront("u942");

	NewWindow("Resources/Other.html#other=" + encodeURI("If you close this window without sending your list, your data entries will not be saved.&nbsp; "), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u938 = document.getElementById('u938');
gv_vAlignTable['u938'] = 'bottom';
var u939 = document.getElementById('u939');

var u670 = document.getElementById('u670');
gv_vAlignTable['u670'] = 'top';
var u671 = document.getElementById('u671');

var u672 = document.getElementById('u672');

if (bIE) u672.attachEvent("onmouseover", MouseOveru672);
else u672.addEventListener("mouseover", MouseOveru672, true);
function MouseOveru672(e)
{
if (!IsTrueMouseOver('u672',e)) return;
if (true) {

	SetPanelStateu671("pd2u671");

	SetPanelStateu715("pd2u715");

}

}

var u673 = document.getElementById('u673');
gv_vAlignTable['u673'] = 'center';
var u674 = document.getElementById('u674');

var u675 = document.getElementById('u675');
gv_vAlignTable['u675'] = 'center';
var u676 = document.getElementById('u676');

u676.style.cursor = 'pointer';
if (bIE) u676.attachEvent("onclick", Clicku676);
else u676.addEventListener("click", Clicku676, true);
function Clicku676(e)
{

if (true) {

	SetPanelStateu671("pd1u671");

	SetPanelStateu545("pd1u545");

	SetPanelStateu678("pd0u678");

	SetPanelStateu685("pd0u685");

	SetPanelStateu692("pd0u692");

	SetPanelStateu715("pd2u715");

	SetPanelVisibilityu656("");

	MoveWidgetTo('u700',10,165);

}

}

if (bIE) u676.attachEvent("onmouseout", MouseOutu676);
else u676.addEventListener("mouseout", MouseOutu676, true);
function MouseOutu676(e)
{
if (!IsTrueMouseOut('u676',e)) return;
if (true) {

	SetPanelStateu715("pd0u715");

	SetPanelStateu671("pd0u671");

}

}

var u677 = document.getElementById('u677');
gv_vAlignTable['u677'] = 'center';
var u678 = document.getElementById('u678');

var u679 = document.getElementById('u679');

if (bIE) u679.attachEvent("onmouseover", MouseOveru679);
else u679.addEventListener("mouseover", MouseOveru679, true);
function MouseOveru679(e)
{
if (!IsTrueMouseOver('u679',e)) return;
if (true) {

	SetPanelStateu678("pd2u678");

	SetPanelStateu715("pd3u715");

}

}

var u1046 = document.getElementById('u1046');
gv_vAlignTable['u1046'] = 'center';
var u1040 = document.getElementById('u1040');
gv_vAlignTable['u1040'] = 'top';
var u1041 = document.getElementById('u1041');
gv_vAlignTable['u1041'] = 'top';
var u940 = document.getElementById('u940');
gv_vAlignTable['u940'] = 'top';
var u941 = document.getElementById('u941');

u941.style.cursor = 'pointer';
if (bIE) u941.attachEvent("onclick", Clicku941);
else u941.addEventListener("click", Clicku941, true);
function Clicku941(e)
{

if (true) {

	SetPanelVisibilityu0("hidden");

	SetPanelVisibilityu942("");

	BringToFront("u942");

}

}
gv_vAlignTable['u941'] = 'top';
var u942 = document.getElementById('u942');

var u943 = document.getElementById('u943');

var u944 = document.getElementById('u944');
gv_vAlignTable['u944'] = 'center';
var u945 = document.getElementById('u945');

var u946 = document.getElementById('u946');
gv_vAlignTable['u946'] = 'center';
var u947 = document.getElementById('u947');
gv_vAlignTable['u947'] = 'top';
var u948 = document.getElementById('u948');

var u949 = document.getElementById('u949');
gv_vAlignTable['u949'] = 'top';
var u680 = document.getElementById('u680');
gv_vAlignTable['u680'] = 'center';
var u681 = document.getElementById('u681');

var u682 = document.getElementById('u682');
gv_vAlignTable['u682'] = 'center';
var u683 = document.getElementById('u683');

u683.style.cursor = 'pointer';
if (bIE) u683.attachEvent("onclick", Clicku683);
else u683.addEventListener("click", Clicku683, true);
function Clicku683(e)
{

if (true) {

	SetPanelStateu678("pd1u678");

	SetPanelStateu545("pd1u545");

	SetPanelStateu671("pd0u671");

	SetPanelStateu685("pd0u685");

	SetPanelStateu692("pd0u692");

	SetPanelStateu715("pd3u715");

	SetPanelVisibilityu656("");

	MoveWidgetTo('u700',10,165);

}

}

if (bIE) u683.attachEvent("onmouseout", MouseOutu683);
else u683.addEventListener("mouseout", MouseOutu683, true);
function MouseOutu683(e)
{
if (!IsTrueMouseOut('u683',e)) return;
if (true) {

	SetPanelStateu715("pd0u715");

	SetPanelStateu678("pd0u678");

}

}

var u684 = document.getElementById('u684');
gv_vAlignTable['u684'] = 'center';
var u685 = document.getElementById('u685');

var u686 = document.getElementById('u686');

if (bIE) u686.attachEvent("onmouseover", MouseOveru686);
else u686.addEventListener("mouseover", MouseOveru686, true);
function MouseOveru686(e)
{
if (!IsTrueMouseOver('u686',e)) return;
if (true) {

	SetPanelStateu685("pd2u685");

	SetPanelStateu715("pd4u715");

}

}

var u687 = document.getElementById('u687');
gv_vAlignTable['u687'] = 'center';
var u688 = document.getElementById('u688');

var u689 = document.getElementById('u689');
gv_vAlignTable['u689'] = 'center';
var u1056 = document.getElementById('u1056');
gv_vAlignTable['u1056'] = 'top';
var u1057 = document.getElementById('u1057');
gv_vAlignTable['u1057'] = 'top';
var u1058 = document.getElementById('u1058');

var u950 = document.getElementById('u950');

var u951 = document.getElementById('u951');
gv_vAlignTable['u951'] = 'center';
var u952 = document.getElementById('u952');
gv_vAlignTable['u952'] = 'top';
var u953 = document.getElementById('u953');
gv_vAlignTable['u953'] = 'top';
var u954 = document.getElementById('u954');
gv_vAlignTable['u954'] = 'top';
var u955 = document.getElementById('u955');
gv_vAlignTable['u955'] = 'top';
var u956 = document.getElementById('u956');

var u957 = document.getElementById('u957');

var u958 = document.getElementById('u958');
gv_vAlignTable['u958'] = 'center';
var u959 = document.getElementById('u959');
gv_vAlignTable['u959'] = 'top';
var u1100 = document.getElementById('u1100');
gv_vAlignTable['u1100'] = 'top';
var u1104 = document.getElementById('u1104');
gv_vAlignTable['u1104'] = 'top';
var u690 = document.getElementById('u690');

u690.style.cursor = 'pointer';
if (bIE) u690.attachEvent("onclick", Clicku690);
else u690.addEventListener("click", Clicku690, true);
function Clicku690(e)
{

if (true) {

	SetPanelStateu685("pd1u685");

	SetPanelStateu545("pd1u545");

	SetPanelStateu671("pd0u671");

	SetPanelStateu692("pd0u692");

	SetPanelStateu678("pd0u678");

	SetPanelStateu715("pd4u715");

	SetPanelStateu700("pd0u700");

	SetPanelVisibilityu656("");

	MoveWidgetTo('u700',10,165);

}

}

if (bIE) u690.attachEvent("onmouseout", MouseOutu690);
else u690.addEventListener("mouseout", MouseOutu690, true);
function MouseOutu690(e)
{
if (!IsTrueMouseOut('u690',e)) return;
if (true) {

	SetPanelStateu715("pd0u715");

	SetPanelStateu685("pd0u685");

}

}

var u691 = document.getElementById('u691');
gv_vAlignTable['u691'] = 'center';
var u692 = document.getElementById('u692');

var u693 = document.getElementById('u693');

if (bIE) u693.attachEvent("onmouseover", MouseOveru693);
else u693.addEventListener("mouseover", MouseOveru693, true);
function MouseOveru693(e)
{
if (!IsTrueMouseOver('u693',e)) return;
if (true) {

	SetPanelStateu692("pd2u692");

	SetPanelStateu715("pd5u715");

}

}

var u694 = document.getElementById('u694');
gv_vAlignTable['u694'] = 'center';
var u695 = document.getElementById('u695');

var u696 = document.getElementById('u696');
gv_vAlignTable['u696'] = 'center';
var u697 = document.getElementById('u697');

u697.style.cursor = 'pointer';
if (bIE) u697.attachEvent("onclick", Clicku697);
else u697.addEventListener("click", Clicku697, true);
function Clicku697(e)
{

if (true) {

	SetPanelStateu692("pd1u692");

	SetPanelStateu545("pd1u545");

	SetPanelStateu671("pd0u671");

	SetPanelStateu678("pd0u678");

	SetPanelStateu685("pd0u685");

	SetPanelStateu715("pd5u715");

	SetPanelVisibilityu656("");

	MoveWidgetTo('u700',10,165);

}

}

if (bIE) u697.attachEvent("onmouseout", MouseOutu697);
else u697.addEventListener("mouseout", MouseOutu697, true);
function MouseOutu697(e)
{
if (!IsTrueMouseOut('u697',e)) return;
if (true) {

	SetPanelStateu715("pd0u715");

	SetPanelStateu692("pd0u692");

}

}

var u698 = document.getElementById('u698');
gv_vAlignTable['u698'] = 'center';
var u699 = document.getElementById('u699');
gv_vAlignTable['u699'] = 'top';
var u1066 = document.getElementById('u1066');

var u1067 = document.getElementById('u1067');
gv_vAlignTable['u1067'] = 'center';
var u1068 = document.getElementById('u1068');
gv_vAlignTable['u1068'] = 'top';
var u960 = document.getElementById('u960');
gv_vAlignTable['u960'] = 'top';
var u961 = document.getElementById('u961');

var u962 = document.getElementById('u962');
gv_vAlignTable['u962'] = 'center';
var u963 = document.getElementById('u963');

var u964 = document.getElementById('u964');
gv_vAlignTable['u964'] = 'top';
var u965 = document.getElementById('u965');

var u966 = document.getElementById('u966');
gv_vAlignTable['u966'] = 'center';
var u967 = document.getElementById('u967');
gv_vAlignTable['u967'] = 'top';
var u968 = document.getElementById('u968');

var u969 = document.getElementById('u969');
gv_vAlignTable['u969'] = 'top';
var u1070 = document.getElementById('u1070');

u1070.style.cursor = 'pointer';
if (bIE) u1070.attachEvent("onclick", Clicku1070);
else u1070.addEventListener("click", Clicku1070, true);
function Clicku1070(e)
{

if (true) {

	SetPanelStateu3("pd2u3");

	BringToFront("u0");

	SetPanelVisibilityu0("");

}

}

var u1071 = document.getElementById('u1071');
gv_vAlignTable['u1071'] = 'center';
var u1072 = document.getElementById('u1072');

var u1073 = document.getElementById('u1073');
gv_vAlignTable['u1073'] = 'center';
var u1074 = document.getElementById('u1074');

u1074.style.cursor = 'pointer';
if (bIE) u1074.attachEvent("onclick", Clicku1074);
else u1074.addEventListener("click", Clicku1074, true);
function Clicku1074(e)
{

if (true) {

	SetPanelStateu3("pd1u3");

	BringToFront("u0");

	SetPanelVisibilityu0("");

}

}

var u1075 = document.getElementById('u1075');
gv_vAlignTable['u1075'] = 'center';
var u1076 = document.getElementById('u1076');
gv_vAlignTable['u1076'] = 'top';
var u1077 = document.getElementById('u1077');

var u1078 = document.getElementById('u1078');
gv_vAlignTable['u1078'] = 'center';
var u970 = document.getElementById('u970');
gv_vAlignTable['u970'] = 'top';
var u971 = document.getElementById('u971');
gv_vAlignTable['u971'] = 'top';
var u972 = document.getElementById('u972');

var u973 = document.getElementById('u973');
gv_vAlignTable['u973'] = 'top';
var u974 = document.getElementById('u974');
gv_vAlignTable['u974'] = 'top';
var u975 = document.getElementById('u975');
gv_vAlignTable['u975'] = 'top';
var u976 = document.getElementById('u976');
gv_vAlignTable['u976'] = 'top';
var u977 = document.getElementById('u977');

var u978 = document.getElementById('u978');
gv_vAlignTable['u978'] = 'top';
var u979 = document.getElementById('u979');
gv_vAlignTable['u979'] = 'top';
var u1080 = document.getElementById('u1080');
gv_vAlignTable['u1080'] = 'top';
var u1081 = document.getElementById('u1081');

var u1082 = document.getElementById('u1082');

var u1083 = document.getElementById('u1083');
gv_vAlignTable['u1083'] = 'center';
var u1084 = document.getElementById('u1084');

var u1085 = document.getElementById('u1085');
gv_vAlignTable['u1085'] = 'center';
var u1086 = document.getElementById('u1086');

u1086.style.cursor = 'pointer';
if (bIE) u1086.attachEvent("onclick", Clicku1086);
else u1086.addEventListener("click", Clicku1086, true);
function Clicku1086(e)
{

if (true) {

	SetPanelVisibilityu942("hidden");

	SetPanelVisibilityu0("");

	BringToFront("u0");

	SetPanelStateu3("pd5u3");

}

}

var u1087 = document.getElementById('u1087');

var u1088 = document.getElementById('u1088');
gv_vAlignTable['u1088'] = 'center';
var u980 = document.getElementById('u980');

u980.style.cursor = 'pointer';
if (bIE) u980.attachEvent("onclick", Clicku980);
else u980.addEventListener("click", Clicku980, true);
function Clicku980(e)
{

if (true) {

	SetPanelStateu977("pd1u977");

}

}
gv_vAlignTable['u980'] = 'top';
var u981 = document.getElementById('u981');
gv_vAlignTable['u981'] = 'top';
var u982 = document.getElementById('u982');
gv_vAlignTable['u982'] = 'top';
var u983 = document.getElementById('u983');

var u984 = document.getElementById('u984');

var u985 = document.getElementById('u985');

u985.style.cursor = 'pointer';
if (bIE) u985.attachEvent("onclick", Clicku985);
else u985.addEventListener("click", Clicku985, true);
function Clicku985(e)
{

if (true) {

	SetPanelStateu977("pd0u977");

}

}

var u986 = document.getElementById('u986');
gv_vAlignTable['u986'] = 'center';
var u987 = document.getElementById('u987');
gv_vAlignTable['u987'] = 'top';
var u988 = document.getElementById('u988');

var u989 = document.getElementById('u989');
gv_vAlignTable['u989'] = 'center';
var u170 = document.getElementById('u170');

var u1091 = document.getElementById('u1091');
gv_vAlignTable['u1091'] = 'top';
var u1092 = document.getElementById('u1092');
gv_vAlignTable['u1092'] = 'top';
var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'top';
var u174 = document.getElementById('u174');

var u1095 = document.getElementById('u1095');

var u1096 = document.getElementById('u1096');

var u1097 = document.getElementById('u1097');
gv_vAlignTable['u1097'] = 'top';
var u1098 = document.getElementById('u1098');

var u990 = document.getElementById('u990');

var u991 = document.getElementById('u991');

var u992 = document.getElementById('u992');
gv_vAlignTable['u992'] = 'center';
var u993 = document.getElementById('u993');
gv_vAlignTable['u993'] = 'top';
var u994 = document.getElementById('u994');
gv_vAlignTable['u994'] = 'top';
var u995 = document.getElementById('u995');

var u996 = document.getElementById('u996');
gv_vAlignTable['u996'] = 'center';
var u997 = document.getElementById('u997');

var u998 = document.getElementById('u998');
gv_vAlignTable['u998'] = 'center';
var u999 = document.getElementById('u999');
gv_vAlignTable['u999'] = 'top';
var u182 = document.getElementById('u182');

var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'top';
var u1260 = document.getElementById('u1260');
gv_vAlignTable['u1260'] = 'top';
var u1261 = document.getElementById('u1261');
gv_vAlignTable['u1261'] = 'top';
var u1262 = document.getElementById('u1262');

var u1263 = document.getElementById('u1263');
gv_vAlignTable['u1263'] = 'center';
var u1264 = document.getElementById('u1264');

var u1265 = document.getElementById('u1265');
gv_vAlignTable['u1265'] = 'center';
var u1266 = document.getElementById('u1266');

var u1267 = document.getElementById('u1267');
gv_vAlignTable['u1267'] = 'center';
var u1268 = document.getElementById('u1268');

var u1178 = document.getElementById('u1178');
gv_vAlignTable['u1178'] = 'top';
var u1179 = document.getElementById('u1179');
gv_vAlignTable['u1179'] = 'top';
var u1274 = document.getElementById('u1274');

var u1275 = document.getElementById('u1275');
gv_vAlignTable['u1275'] = 'center';
var u1276 = document.getElementById('u1276');

var u1277 = document.getElementById('u1277');
gv_vAlignTable['u1277'] = 'top';
var u1278 = document.getElementById('u1278');
gv_vAlignTable['u1278'] = 'top';
var u1279 = document.getElementById('u1279');
gv_vAlignTable['u1279'] = 'top';
var u1189 = document.getElementById('u1189');
gv_vAlignTable['u1189'] = 'center';
var u1300 = document.getElementById('u1300');
gv_vAlignTable['u1300'] = 'center';
var u1301 = document.getElementById('u1301');

u1301.style.cursor = 'pointer';
if (bIE) u1301.attachEvent("onclick", Clicku1301);
else u1301.addEventListener("click", Clicku1301, true);
function Clicku1301(e)
{

if (true) {

	BringToFront("u0");

	SetPanelStateu3("pd3u3");

}

}

var u1302 = document.getElementById('u1302');
gv_vAlignTable['u1302'] = 'center';
var u1305 = document.getElementById('u1305');
gv_vAlignTable['u1305'] = 'top';
var u1223 = document.getElementById('u1223');
gv_vAlignTable['u1223'] = 'top';
var u1280 = document.getElementById('u1280');

var u1281 = document.getElementById('u1281');
gv_vAlignTable['u1281'] = 'top';
var u1282 = document.getElementById('u1282');
gv_vAlignTable['u1282'] = 'top';
var u1283 = document.getElementById('u1283');
gv_vAlignTable['u1283'] = 'top';
var u1284 = document.getElementById('u1284');

var u1285 = document.getElementById('u1285');
gv_vAlignTable['u1285'] = 'center';
var u1287 = document.getElementById('u1287');
gv_vAlignTable['u1287'] = 'center';
var u1288 = document.getElementById('u1288');

var u1289 = document.getElementById('u1289');
gv_vAlignTable['u1289'] = 'top';
var u1290 = document.getElementById('u1290');
gv_vAlignTable['u1290'] = 'top';
var u1291 = document.getElementById('u1291');
gv_vAlignTable['u1291'] = 'top';
var u1292 = document.getElementById('u1292');

var u1293 = document.getElementById('u1293');
gv_vAlignTable['u1293'] = 'center';
var u1294 = document.getElementById('u1294');

var u1295 = document.getElementById('u1295');
gv_vAlignTable['u1295'] = 'center';
var u1296 = document.getElementById('u1296');

var u1297 = document.getElementById('u1297');
gv_vAlignTable['u1297'] = 'center';
var u1298 = document.getElementById('u1298');

var u706 = document.getElementById('u706');

u706.style.cursor = 'pointer';
if (bIE) u706.attachEvent("onclick", Clicku706);
else u706.addEventListener("click", Clicku706, true);
function Clicku706(e)
{

if (true) {

	SetPanelVisibilityu3("hidden");

	SetPanelVisibilityu942("");

	BringToFront("u942");

}

}

var u707 = document.getElementById('u707');
gv_vAlignTable['u707'] = 'center';
var u715 = document.getElementById('u715');

var u716 = document.getElementById('u716');
gv_vAlignTable['u716'] = 'top';
var u719 = document.getElementById('u719');
gv_vAlignTable['u719'] = 'center';
var u725 = document.getElementById('u725');
gv_vAlignTable['u725'] = 'top';
var u726 = document.getElementById('u726');

var u727 = document.getElementById('u727');
gv_vAlignTable['u727'] = 'center';
var u728 = document.getElementById('u728');
gv_vAlignTable['u728'] = 'top';
var u729 = document.getElementById('u729');
gv_vAlignTable['u729'] = 'top';
var u100 = document.getElementById('u100');

var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'top';
var u102 = document.getElementById('u102');

var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'top';
var u104 = document.getElementById('u104');

var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'top';
var u106 = document.getElementById('u106');

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u108 = document.getElementById('u108');

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'top';
var u110 = document.getElementById('u110');

var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'top';
var u112 = document.getElementById('u112');

var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'center';
var u114 = document.getElementById('u114');

var u115 = document.getElementById('u115');

var u116 = document.getElementById('u116');

var u117 = document.getElementById('u117');

var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'center';
var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'top';
var u120 = document.getElementById('u120');

var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'center';
var u122 = document.getElementById('u122');

var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'center';
var u124 = document.getElementById('u124');

var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'center';
var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'top';
var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'top';
var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u129 = document.getElementById('u129');

var u130 = document.getElementById('u130');

var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'center';
var u132 = document.getElementById('u132');

u132.style.cursor = 'pointer';
if (bIE) u132.attachEvent("onclick", Clicku132);
else u132.addEventListener("click", Clicku132, true);
function Clicku132(e)
{

if (true) {

	SetPanelStateu3("pd0u3");

}

}
gv_vAlignTable['u132'] = 'top';
var u133 = document.getElementById('u133');

var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'center';
var u135 = document.getElementById('u135');

var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'center';
var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'top';
var u138 = document.getElementById('u138');

var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'center';
var u400 = document.getElementById('u400');

var u401 = document.getElementById('u401');
gv_vAlignTable['u401'] = 'top';
var u402 = document.getElementById('u402');

var u403 = document.getElementById('u403');
gv_vAlignTable['u403'] = 'top';
var u404 = document.getElementById('u404');

var u405 = document.getElementById('u405');
gv_vAlignTable['u405'] = 'top';
var u406 = document.getElementById('u406');

var u407 = document.getElementById('u407');
gv_vAlignTable['u407'] = 'top';
var u408 = document.getElementById('u408');

var u409 = document.getElementById('u409');
gv_vAlignTable['u409'] = 'top';
var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u141 = document.getElementById('u141');

var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'center';
var u143 = document.getElementById('u143');

var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'center';
var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'top';
var u146 = document.getElementById('u146');

var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'center';
var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'top';
var u149 = document.getElementById('u149');

u149.style.cursor = 'pointer';
if (bIE) u149.attachEvent("onclick", Clicku149);
else u149.addEventListener("click", Clicku149, true);
function Clicku149(e)
{

if (true) {

	SetPanelStateu3("pd0u3");

}

}
gv_vAlignTable['u149'] = 'top';
var u410 = document.getElementById('u410');

var u411 = document.getElementById('u411');

var u412 = document.getElementById('u412');

var u413 = document.getElementById('u413');

var u414 = document.getElementById('u414');

var u415 = document.getElementById('u415');

var u416 = document.getElementById('u416');

var u417 = document.getElementById('u417');

var u418 = document.getElementById('u418');

var u419 = document.getElementById('u419');

var u150 = document.getElementById('u150');

var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'center';
var u152 = document.getElementById('u152');

var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'center';
var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'top';
var u155 = document.getElementById('u155');

u155.style.cursor = 'pointer';
if (bIE) u155.attachEvent("onclick", Clicku155);
else u155.addEventListener("click", Clicku155, true);
function Clicku155(e)
{

if ((GetGlobalVariableValue('$NameNum')) == (PopulateVariables('yes'))) {

	SetPanelStateu47("pd1u47");

	SetPanelStateu295("pd1u295");

	MoveWidgetTo('u530',28,460);

}
else
if (true) {

	SetPanelStateu47("pd1u47");

	SetPanelStateu295("pd0u295");

	MoveWidgetTo('u530',28,460);

}

}
gv_vAlignTable['u155'] = 'top';
var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'top';
var u157 = document.getElementById('u157');

var u158 = document.getElementById('u158');

var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'top';
var u420 = document.getElementById('u420');

var u421 = document.getElementById('u421');

var u422 = document.getElementById('u422');

var u423 = document.getElementById('u423');

var u424 = document.getElementById('u424');

var u425 = document.getElementById('u425');

var u426 = document.getElementById('u426');

var u427 = document.getElementById('u427');

var u428 = document.getElementById('u428');

var u429 = document.getElementById('u429');

var u160 = document.getElementById('u160');

var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'top';
var u162 = document.getElementById('u162');

var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'top';
var u164 = document.getElementById('u164');

var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'top';
var u166 = document.getElementById('u166');

var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'top';
var u168 = document.getElementById('u168');

var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'top';
var u430 = document.getElementById('u430');

var u431 = document.getElementById('u431');

var u432 = document.getElementById('u432');

var u433 = document.getElementById('u433');

var u434 = document.getElementById('u434');

var u435 = document.getElementById('u435');

var u436 = document.getElementById('u436');

var u437 = document.getElementById('u437');

var u438 = document.getElementById('u438');

var u439 = document.getElementById('u439');

var u700 = document.getElementById('u700');

var u701 = document.getElementById('u701');
gv_vAlignTable['u701'] = 'top';
var u702 = document.getElementById('u702');

var u703 = document.getElementById('u703');
gv_vAlignTable['u703'] = 'center';
var u704 = document.getElementById('u704');

u704.style.cursor = 'pointer';
if (bIE) u704.attachEvent("onclick", Clicku704);
else u704.addEventListener("click", Clicku704, true);
function Clicku704(e)
{

if (true) {

	BringToFront("u942");

	SetPanelVisibilityu0("hidden");

	SetPanelVisibilityu942("");

	SetPanelStateu1003("pd1u1003");

	SetPanelStateu715("pd1u715");

	MoveWidgetTo('u1081',11,300);

}

}

var u705 = document.getElementById('u705');
gv_vAlignTable['u705'] = 'center';
var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'top';
var u172 = document.getElementById('u172');

var u708 = document.getElementById('u708');

var u709 = document.getElementById('u709');
gv_vAlignTable['u709'] = 'top';
var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'top';
var u176 = document.getElementById('u176');

var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'top';
var u178 = document.getElementById('u178');

var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'top';
var u440 = document.getElementById('u440');
gv_vAlignTable['u440'] = 'top';
var u441 = document.getElementById('u441');

if (bIE) u441.attachEvent("onmouseover", MouseOveru441);
else u441.addEventListener("mouseover", MouseOveru441, true);
function MouseOveru441(e)
{
if (!IsTrueMouseOver('u441',e)) return;
if (true) {

	SetPanelVisibilityu443("");

}

}

if (bIE) u441.attachEvent("onmouseout", MouseOutu441);
else u441.addEventListener("mouseout", MouseOutu441, true);
function MouseOutu441(e)
{
if (!IsTrueMouseOut('u441',e)) return;
if (true) {

	SetPanelVisibilityu443("hidden");

}

}

var u442 = document.getElementById('u442');
gv_vAlignTable['u442'] = 'center';
var u443 = document.getElementById('u443');

var u444 = document.getElementById('u444');

var u445 = document.getElementById('u445');
gv_vAlignTable['u445'] = 'top';
var u446 = document.getElementById('u446');

if (bIE) u446.attachEvent("onmouseover", MouseOveru446);
else u446.addEventListener("mouseover", MouseOveru446, true);
function MouseOveru446(e)
{
if (!IsTrueMouseOver('u446',e)) return;
if (true) {

	SetPanelVisibilityu448("");

}

}

if (bIE) u446.attachEvent("onmouseout", MouseOutu446);
else u446.addEventListener("mouseout", MouseOutu446, true);
function MouseOutu446(e)
{
if (!IsTrueMouseOut('u446',e)) return;
if (true) {

	SetPanelVisibilityu448("hidden");

}

}

var u447 = document.getElementById('u447');
gv_vAlignTable['u447'] = 'center';
var u448 = document.getElementById('u448');

var u449 = document.getElementById('u449');

var u710 = document.getElementById('u710');

u710.style.cursor = 'pointer';
if (bIE) u710.attachEvent("onclick", Clicku710);
else u710.addEventListener("click", Clicku710, true);
function Clicku710(e)
{

if (true) {

	SetPanelVisibilityu554("");

	SetPanelStateu545("pd2u545");

	SetPanelStateu715("pd1u715");

	SetPanelStateu700("pd1u700");

	MoveWidgetTo('u700',1,32);

	SetPanelVisibilityu656("hidden");

	SetPanelVisibilityu671("hidden");

	SetPanelVisibilityu678("hidden");

	SetPanelVisibilityu692("hidden");

SetWidgetRichText('u699', PopulateVariables('<span style=" font-family:\'Calibri\'; color:#363636; font-size:13px;">Selected size:</span>'));

	BringToFront("u554");

}

}

var u711 = document.getElementById('u711');

var u712 = document.getElementById('u712');

var u713 = document.getElementById('u713');
gv_vAlignTable['u713'] = 'top';
var u714 = document.getElementById('u714');
gv_vAlignTable['u714'] = 'top';
var u180 = document.getElementById('u180');

var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'top';
var u717 = document.getElementById('u717');

u717.style.cursor = 'pointer';
if (bIE) u717.attachEvent("onclick", Clicku717);
else u717.addEventListener("click", Clicku717, true);
function Clicku717(e)
{

if (true) {

	SetPanelVisibilityu554("hidden");

	BringToFront("u655");

	SetPanelStateu655("pd0u655");

	SetPanelStateu715("pd0u715");

	SetPanelStateu700("pd0u700");

	SetPanelStateu711("pd0u711");

	MoveWidgetTo('u700',10,165);

	SetPanelVisibilityu656("");

}

}
gv_vAlignTable['u717'] = 'top';
var u718 = document.getElementById('u718');

var u184 = document.getElementById('u184');

var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'top';
var u186 = document.getElementById('u186');

var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'top';
var u188 = document.getElementById('u188');

var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'top';
var u450 = document.getElementById('u450');
gv_vAlignTable['u450'] = 'top';
var u451 = document.getElementById('u451');

if (bIE) u451.attachEvent("onmouseover", MouseOveru451);
else u451.addEventListener("mouseover", MouseOveru451, true);
function MouseOveru451(e)
{
if (!IsTrueMouseOver('u451',e)) return;
if (true) {

	SetPanelVisibilityu453("");

}

}

if (bIE) u451.attachEvent("onmouseout", MouseOutu451);
else u451.addEventListener("mouseout", MouseOutu451, true);
function MouseOutu451(e)
{
if (!IsTrueMouseOut('u451',e)) return;
if (true) {

	SetPanelVisibilityu453("hidden");

}

}

var u452 = document.getElementById('u452');
gv_vAlignTable['u452'] = 'center';
var u453 = document.getElementById('u453');

var u454 = document.getElementById('u454');

var u455 = document.getElementById('u455');
gv_vAlignTable['u455'] = 'top';
var u456 = document.getElementById('u456');

if (bIE) u456.attachEvent("onmouseover", MouseOveru456);
else u456.addEventListener("mouseover", MouseOveru456, true);
function MouseOveru456(e)
{
if (!IsTrueMouseOver('u456',e)) return;
if (true) {

	SetPanelVisibilityu458("");

}

}

if (bIE) u456.attachEvent("onmouseout", MouseOutu456);
else u456.addEventListener("mouseout", MouseOutu456, true);
function MouseOutu456(e)
{
if (!IsTrueMouseOut('u456',e)) return;
if (true) {

	SetPanelVisibilityu458("hidden");

}

}

var u457 = document.getElementById('u457');
gv_vAlignTable['u457'] = 'center';
var u458 = document.getElementById('u458');

var u459 = document.getElementById('u459');

var u1004 = document.getElementById('u1004');

var u1000 = document.getElementById('u1000');
gv_vAlignTable['u1000'] = 'top';
var u1001 = document.getElementById('u1001');

u1001.style.cursor = 'pointer';
if (bIE) u1001.attachEvent("onclick", Clicku1001);
else u1001.addEventListener("click", Clicku1001, true);
function Clicku1001(e)
{

if (true) {

	SetPanelVisibilityu990("");

	MoveWidgetTo('u956',8,333);

}

}
gv_vAlignTable['u1001'] = 'top';
var u720 = document.getElementById('u720');
gv_vAlignTable['u720'] = 'top';
var u721 = document.getElementById('u721');
gv_vAlignTable['u721'] = 'top';
var u722 = document.getElementById('u722');
gv_vAlignTable['u722'] = 'top';
var u723 = document.getElementById('u723');
gv_vAlignTable['u723'] = 'top';
var u724 = document.getElementById('u724');
gv_vAlignTable['u724'] = 'top';
var u190 = document.getElementById('u190');

var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'top';
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
gv_vAlignTable['u199'] = 'center';
var u460 = document.getElementById('u460');
gv_vAlignTable['u460'] = 'top';
var u461 = document.getElementById('u461');

if (bIE) u461.attachEvent("onmouseover", MouseOveru461);
else u461.addEventListener("mouseover", MouseOveru461, true);
function MouseOveru461(e)
{
if (!IsTrueMouseOver('u461',e)) return;
if (true) {

	SetPanelVisibilityu463("");

}

}

if (bIE) u461.attachEvent("onmouseout", MouseOutu461);
else u461.addEventListener("mouseout", MouseOutu461, true);
function MouseOutu461(e)
{
if (!IsTrueMouseOut('u461',e)) return;
if (true) {

	SetPanelVisibilityu463("hidden");

}

}

var u462 = document.getElementById('u462');
gv_vAlignTable['u462'] = 'center';
var u463 = document.getElementById('u463');

var u464 = document.getElementById('u464');

var u465 = document.getElementById('u465');
gv_vAlignTable['u465'] = 'top';
var u466 = document.getElementById('u466');

if (bIE) u466.attachEvent("onmouseover", MouseOveru466);
else u466.addEventListener("mouseover", MouseOveru466, true);
function MouseOveru466(e)
{
if (!IsTrueMouseOver('u466',e)) return;
if (true) {

	SetPanelVisibilityu468("");

}

}

if (bIE) u466.attachEvent("onmouseout", MouseOutu466);
else u466.addEventListener("mouseout", MouseOutu466, true);
function MouseOutu466(e)
{
if (!IsTrueMouseOut('u466',e)) return;
if (true) {

	SetPanelVisibilityu468("hidden");

}

}

var u467 = document.getElementById('u467');
gv_vAlignTable['u467'] = 'center';
var u468 = document.getElementById('u468');

var u469 = document.getElementById('u469');

var u1012 = document.getElementById('u1012');
gv_vAlignTable['u1012'] = 'center';
var u1011 = document.getElementById('u1011');

var u1010 = document.getElementById('u1010');
gv_vAlignTable['u1010'] = 'top';
var u730 = document.getElementById('u730');
gv_vAlignTable['u730'] = 'top';
var u731 = document.getElementById('u731');
gv_vAlignTable['u731'] = 'top';
var u732 = document.getElementById('u732');
gv_vAlignTable['u732'] = 'top';
var u733 = document.getElementById('u733');
gv_vAlignTable['u733'] = 'top';
var u734 = document.getElementById('u734');

var u735 = document.getElementById('u735');
gv_vAlignTable['u735'] = 'center';
var u736 = document.getElementById('u736');
gv_vAlignTable['u736'] = 'top';
var u737 = document.getElementById('u737');
gv_vAlignTable['u737'] = 'top';
var u738 = document.getElementById('u738');
gv_vAlignTable['u738'] = 'top';
var u739 = document.getElementById('u739');
gv_vAlignTable['u739'] = 'top';
var u1106 = document.getElementById('u1106');

var u1107 = document.getElementById('u1107');
gv_vAlignTable['u1107'] = 'center';
var u1108 = document.getElementById('u1108');

var u1109 = document.getElementById('u1109');
gv_vAlignTable['u1109'] = 'center';
var u470 = document.getElementById('u470');
gv_vAlignTable['u470'] = 'top';
var u471 = document.getElementById('u471');

if (bIE) u471.attachEvent("onmouseover", MouseOveru471);
else u471.addEventListener("mouseover", MouseOveru471, true);
function MouseOveru471(e)
{
if (!IsTrueMouseOver('u471',e)) return;
if (true) {

	SetPanelVisibilityu473("");

}

}

if (bIE) u471.attachEvent("onmouseout", MouseOutu471);
else u471.addEventListener("mouseout", MouseOutu471, true);
function MouseOutu471(e)
{
if (!IsTrueMouseOut('u471',e)) return;
if (true) {

	SetPanelVisibilityu473("hidden");

}

}

var u472 = document.getElementById('u472');
gv_vAlignTable['u472'] = 'center';
var u473 = document.getElementById('u473');

var u474 = document.getElementById('u474');

var u475 = document.getElementById('u475');
gv_vAlignTable['u475'] = 'top';
var u476 = document.getElementById('u476');

if (bIE) u476.attachEvent("onmouseover", MouseOveru476);
else u476.addEventListener("mouseover", MouseOveru476, true);
function MouseOveru476(e)
{
if (!IsTrueMouseOver('u476',e)) return;
if (true) {

	SetPanelVisibilityu478("");

}

}

if (bIE) u476.attachEvent("onmouseout", MouseOutu476);
else u476.addEventListener("mouseout", MouseOutu476, true);
function MouseOutu476(e)
{
if (!IsTrueMouseOut('u476',e)) return;
if (true) {

	SetPanelVisibilityu478("hidden");

}

}

var u477 = document.getElementById('u477');
gv_vAlignTable['u477'] = 'center';
var u478 = document.getElementById('u478');

var u479 = document.getElementById('u479');

var u740 = document.getElementById('u740');
gv_vAlignTable['u740'] = 'top';
var u741 = document.getElementById('u741');
gv_vAlignTable['u741'] = 'top';
var u742 = document.getElementById('u742');

var u743 = document.getElementById('u743');
gv_vAlignTable['u743'] = 'center';
var u744 = document.getElementById('u744');
gv_vAlignTable['u744'] = 'top';
var u745 = document.getElementById('u745');
gv_vAlignTable['u745'] = 'top';
var u746 = document.getElementById('u746');
gv_vAlignTable['u746'] = 'top';
var u747 = document.getElementById('u747');
gv_vAlignTable['u747'] = 'top';
var u748 = document.getElementById('u748');
gv_vAlignTable['u748'] = 'top';
var u749 = document.getElementById('u749');
gv_vAlignTable['u749'] = 'top';
var u1026 = document.getElementById('u1026');

var u1027 = document.getElementById('u1027');
gv_vAlignTable['u1027'] = 'center';
var u1028 = document.getElementById('u1028');

var u1029 = document.getElementById('u1029');
gv_vAlignTable['u1029'] = 'center';
var u480 = document.getElementById('u480');
gv_vAlignTable['u480'] = 'top';
var u481 = document.getElementById('u481');

if (bIE) u481.attachEvent("onmouseover", MouseOveru481);
else u481.addEventListener("mouseover", MouseOveru481, true);
function MouseOveru481(e)
{
if (!IsTrueMouseOver('u481',e)) return;
if (true) {

	SetPanelVisibilityu483("");

}

}

if (bIE) u481.attachEvent("onmouseout", MouseOutu481);
else u481.addEventListener("mouseout", MouseOutu481, true);
function MouseOutu481(e)
{
if (!IsTrueMouseOut('u481',e)) return;
if (true) {

	SetPanelVisibilityu483("hidden");

}

}

var u482 = document.getElementById('u482');
gv_vAlignTable['u482'] = 'center';
var u483 = document.getElementById('u483');

var u484 = document.getElementById('u484');

var u485 = document.getElementById('u485');
gv_vAlignTable['u485'] = 'top';
var u486 = document.getElementById('u486');

if (bIE) u486.attachEvent("onmouseover", MouseOveru486);
else u486.addEventListener("mouseover", MouseOveru486, true);
function MouseOveru486(e)
{
if (!IsTrueMouseOver('u486',e)) return;
if (true) {

	SetPanelVisibilityu488("");

}

}

if (bIE) u486.attachEvent("onmouseout", MouseOutu486);
else u486.addEventListener("mouseout", MouseOutu486, true);
function MouseOutu486(e)
{
if (!IsTrueMouseOut('u486',e)) return;
if (true) {

	SetPanelVisibilityu488("hidden");

}

}

var u487 = document.getElementById('u487');
gv_vAlignTable['u487'] = 'center';
var u488 = document.getElementById('u488');

var u489 = document.getElementById('u489');

var u750 = document.getElementById('u750');

var u751 = document.getElementById('u751');
gv_vAlignTable['u751'] = 'center';
var u752 = document.getElementById('u752');

var u753 = document.getElementById('u753');
gv_vAlignTable['u753'] = 'center';
var u754 = document.getElementById('u754');

u754.style.cursor = 'pointer';
if (bIE) u754.attachEvent("onclick", Clicku754);
else u754.addEventListener("click", Clicku754, true);
function Clicku754(e)
{

if (true) {

	SetPanelVisibilityu0("hidden");

	SetPanelVisibilityu942("");

	BringToFront("u942");

}

}
gv_vAlignTable['u754'] = 'top';
var u755 = document.getElementById('u755');

var u756 = document.getElementById('u756');
gv_vAlignTable['u756'] = 'center';
var u757 = document.getElementById('u757');

var u758 = document.getElementById('u758');
gv_vAlignTable['u758'] = 'center';
var u759 = document.getElementById('u759');

var u1035 = document.getElementById('u1035');
gv_vAlignTable['u1035'] = 'center';
var u1036 = document.getElementById('u1036');
gv_vAlignTable['u1036'] = 'top';
var u1037 = document.getElementById('u1037');
gv_vAlignTable['u1037'] = 'top';
var u1038 = document.getElementById('u1038');

var u1039 = document.getElementById('u1039');
gv_vAlignTable['u1039'] = 'center';
var u490 = document.getElementById('u490');
gv_vAlignTable['u490'] = 'top';
var u491 = document.getElementById('u491');

var u492 = document.getElementById('u492');
gv_vAlignTable['u492'] = 'center';
var u493 = document.getElementById('u493');
gv_vAlignTable['u493'] = 'top';
var u494 = document.getElementById('u494');

var u495 = document.getElementById('u495');
gv_vAlignTable['u495'] = 'top';
var u496 = document.getElementById('u496');

var u497 = document.getElementById('u497');
gv_vAlignTable['u497'] = 'top';
var u498 = document.getElementById('u498');

var u499 = document.getElementById('u499');
gv_vAlignTable['u499'] = 'center';
var u1101 = document.getElementById('u1101');
gv_vAlignTable['u1101'] = 'top';
var u1102 = document.getElementById('u1102');

var u1103 = document.getElementById('u1103');
gv_vAlignTable['u1103'] = 'top';
var u760 = document.getElementById('u760');
gv_vAlignTable['u760'] = 'center';
var u761 = document.getElementById('u761');

u761.style.cursor = 'pointer';
if (bIE) u761.attachEvent("onclick", Clicku761);
else u761.addEventListener("click", Clicku761, true);
function Clicku761(e)
{

if (true) {

	SetPanelVisibilityu0("hidden");

	SetPanelVisibilityu942("");

	BringToFront("u942");

}

}
gv_vAlignTable['u761'] = 'top';
var u762 = document.getElementById('u762');
gv_vAlignTable['u762'] = 'top';
var u763 = document.getElementById('u763');

var u764 = document.getElementById('u764');
gv_vAlignTable['u764'] = 'center';
var u765 = document.getElementById('u765');
gv_vAlignTable['u765'] = 'top';
var u766 = document.getElementById('u766');

u766.style.cursor = 'pointer';
if (bIE) u766.attachEvent("onclick", Clicku766);
else u766.addEventListener("click", Clicku766, true);
function Clicku766(e)
{

if (true) {

	SetPanelStateu3("pd0u3");

}

}

var u767 = document.getElementById('u767');
gv_vAlignTable['u767'] = 'center';
var u768 = document.getElementById('u768');

var u769 = document.getElementById('u769');
gv_vAlignTable['u769'] = 'center';
var u1048 = document.getElementById('u1048');

var u1042 = document.getElementById('u1042');

u1042.style.cursor = 'pointer';
if (bIE) u1042.attachEvent("onclick", Clicku1042);
else u1042.addEventListener("click", Clicku1042, true);
function Clicku1042(e)
{

if (true) {

SetWidgetRichText('u1041', PopulateVariables('<span style=" font-family:\'Calibri\'; color:#5E5E5E; font-size:12px;">Sizes:&nbsp; 1-L<br>Total:&nbsp; 1 @ $12.00 each&nbsp;&nbsp; 1 Name, 1 Number</span>'));

}

}
gv_vAlignTable['u1042'] = 'top';
var u1043 = document.getElementById('u1043');

u1043.style.cursor = 'pointer';
if (bIE) u1043.attachEvent("onclick", Clicku1043);
else u1043.addEventListener("click", Clicku1043, true);
function Clicku1043(e)
{

if (true) {

SetWidgetRichText('u1041', PopulateVariables('<span style=" font-family:\'Calibri\'; color:#5E5E5E; font-size:12px;">Sizes:&nbsp; 1-YXS, 1-S, 3-M, 3-L, 1-XL, 1-2XL<br>Total:&nbsp; 10 @ $12.00 each&nbsp;&nbsp; </span>'));

}

}
gv_vAlignTable['u1043'] = 'top';
var u1044 = document.getElementById('u1044');

u1044.style.cursor = 'pointer';
if (bIE) u1044.attachEvent("onclick", Clicku1044);
else u1044.addEventListener("click", Clicku1044, true);
function Clicku1044(e)
{

if (true) {

SetWidgetRichText('u1041', PopulateVariables('<span style=" font-family:\'Calibri\'; color:#5E5E5E; font-size:12px;">Sizes:&nbsp; 1-YXS, 1-S, 3-M, 3-L, 1-XL, 1-2XL<br>Total:&nbsp; 10 @ $12.00 each&nbsp;&nbsp; 8 Names, 6 Numbers</span>'));

}

}
gv_vAlignTable['u1044'] = 'top';
var u1045 = document.getElementById('u1045');

u1045.style.cursor = 'pointer';
if (bIE) u1045.attachEvent("onclick", Clicku1045);
else u1045.addEventListener("click", Clicku1045, true);
function Clicku1045(e)
{

if (true) {

	BringToFront("u0");

	SetPanelStateu3("pd0u3");

	SetPanelVisibilityu0("");

}

}

var u1047 = document.getElementById('u1047');
gv_vAlignTable['u1047'] = 'top';
var u1049 = document.getElementById('u1049');
gv_vAlignTable['u1049'] = 'center';
var u1110 = document.getElementById('u1110');

var u770 = document.getElementById('u770');

u770.style.cursor = 'pointer';
if (bIE) u770.attachEvent("onclick", Clicku770);
else u770.addEventListener("click", Clicku770, true);
function Clicku770(e)
{

if (true) {

	SetPanelVisibilityu0("hidden");

	SetPanelVisibilityu942("");

	BringToFront("u942");

}

}
gv_vAlignTable['u770'] = 'top';
var u771 = document.getElementById('u771');

var u772 = document.getElementById('u772');
gv_vAlignTable['u772'] = 'center';
var u773 = document.getElementById('u773');
gv_vAlignTable['u773'] = 'top';
var u774 = document.getElementById('u774');

var u775 = document.getElementById('u775');
gv_vAlignTable['u775'] = 'center';
var u776 = document.getElementById('u776');

var u777 = document.getElementById('u777');
gv_vAlignTable['u777'] = 'center';
var u778 = document.getElementById('u778');

var u779 = document.getElementById('u779');
gv_vAlignTable['u779'] = 'center';
var u1146 = document.getElementById('u1146');
gv_vAlignTable['u1146'] = 'top';
var u1147 = document.getElementById('u1147');
gv_vAlignTable['u1147'] = 'top';
var u1059 = document.getElementById('u1059');
gv_vAlignTable['u1059'] = 'center';
var u1050 = document.getElementById('u1050');

var u1051 = document.getElementById('u1051');
gv_vAlignTable['u1051'] = 'top';
var u1052 = document.getElementById('u1052');

var u1053 = document.getElementById('u1053');
gv_vAlignTable['u1053'] = 'top';
var u1054 = document.getElementById('u1054');

u1054.style.cursor = 'pointer';
if (bIE) u1054.attachEvent("onclick", Clicku1054);
else u1054.addEventListener("click", Clicku1054, true);
function Clicku1054(e)
{

if (true) {

	SetPanelStateu3("pd1u3");

	BringToFront("u0");

	SetPanelVisibilityu0("");

}

}

var u1055 = document.getElementById('u1055');
gv_vAlignTable['u1055'] = 'center';
var u780 = document.getElementById('u780');

var u781 = document.getElementById('u781');
gv_vAlignTable['u781'] = 'center';
var u782 = document.getElementById('u782');

var u783 = document.getElementById('u783');
gv_vAlignTable['u783'] = 'center';
var u784 = document.getElementById('u784');

var u785 = document.getElementById('u785');
gv_vAlignTable['u785'] = 'center';
var u786 = document.getElementById('u786');

var u787 = document.getElementById('u787');
gv_vAlignTable['u787'] = 'center';
var u788 = document.getElementById('u788');

var u789 = document.getElementById('u789');
gv_vAlignTable['u789'] = 'center';
var u1128 = document.getElementById('u1128');
gv_vAlignTable['u1128'] = 'top';
var u1129 = document.getElementById('u1129');
gv_vAlignTable['u1129'] = 'top';
var u1158 = document.getElementById('u1158');

var u1069 = document.getElementById('u1069');
gv_vAlignTable['u1069'] = 'top';
var u1060 = document.getElementById('u1060');
gv_vAlignTable['u1060'] = 'top';
var u1061 = document.getElementById('u1061');
gv_vAlignTable['u1061'] = 'top';
var u1062 = document.getElementById('u1062');

var u1063 = document.getElementById('u1063');
gv_vAlignTable['u1063'] = 'center';
var u1064 = document.getElementById('u1064');
gv_vAlignTable['u1064'] = 'top';
var u1065 = document.getElementById('u1065');
gv_vAlignTable['u1065'] = 'top';
var u1105 = document.getElementById('u1105');
gv_vAlignTable['u1105'] = 'top';
var u790 = document.getElementById('u790');
gv_vAlignTable['u790'] = 'top';
var u791 = document.getElementById('u791');
gv_vAlignTable['u791'] = 'top';
var u792 = document.getElementById('u792');
gv_vAlignTable['u792'] = 'top';
var u793 = document.getElementById('u793');
gv_vAlignTable['u793'] = 'top';
var u794 = document.getElementById('u794');
gv_vAlignTable['u794'] = 'top';
var u795 = document.getElementById('u795');

var u796 = document.getElementById('u796');
gv_vAlignTable['u796'] = 'center';
var u797 = document.getElementById('u797');

var u798 = document.getElementById('u798');
gv_vAlignTable['u798'] = 'center';
var u799 = document.getElementById('u799');
gv_vAlignTable['u799'] = 'top';
var u1135 = document.getElementById('u1135');
gv_vAlignTable['u1135'] = 'top';
var u1136 = document.getElementById('u1136');
gv_vAlignTable['u1136'] = 'top';
var u1137 = document.getElementById('u1137');
gv_vAlignTable['u1137'] = 'top';
var u1138 = document.getElementById('u1138');

var u1079 = document.getElementById('u1079');
gv_vAlignTable['u1079'] = 'top';
var u1117 = document.getElementById('u1117');
gv_vAlignTable['u1117'] = 'top';
var u1118 = document.getElementById('u1118');
gv_vAlignTable['u1118'] = 'top';
var u1119 = document.getElementById('u1119');
gv_vAlignTable['u1119'] = 'top';
var u1170 = document.getElementById('u1170');

var u1171 = document.getElementById('u1171');
gv_vAlignTable['u1171'] = 'center';
var u1172 = document.getElementById('u1172');

var u1173 = document.getElementById('u1173');
gv_vAlignTable['u1173'] = 'top';
var u1140 = document.getElementById('u1140');

var u1141 = document.getElementById('u1141');
gv_vAlignTable['u1141'] = 'top';
var u1142 = document.getElementById('u1142');
gv_vAlignTable['u1142'] = 'top';
var u1143 = document.getElementById('u1143');
gv_vAlignTable['u1143'] = 'top';
var u1144 = document.getElementById('u1144');

var u1145 = document.getElementById('u1145');
gv_vAlignTable['u1145'] = 'top';
var u1089 = document.getElementById('u1089');
gv_vAlignTable['u1089'] = 'top';
var u1148 = document.getElementById('u1148');

var u1123 = document.getElementById('u1123');
gv_vAlignTable['u1123'] = 'top';
var u1124 = document.getElementById('u1124');
gv_vAlignTable['u1124'] = 'top';
var u1125 = document.getElementById('u1125');
gv_vAlignTable['u1125'] = 'top';
var u1126 = document.getElementById('u1126');

var u1090 = document.getElementById('u1090');
gv_vAlignTable['u1090'] = 'top';
var u1184 = document.getElementById('u1184');

var u1185 = document.getElementById('u1185');
gv_vAlignTable['u1185'] = 'top';
var u1093 = document.getElementById('u1093');

u1093.style.cursor = 'pointer';
if (bIE) u1093.attachEvent("onclick", Clicku1093);
else u1093.addEventListener("click", Clicku1093, true);
function Clicku1093(e)
{

if (true) {

	BringToFront("u0");

	SetPanelStateu3("pd4u3");

}

}
gv_vAlignTable['u1093'] = 'top';
var u1094 = document.getElementById('u1094');

var u1151 = document.getElementById('u1151');
gv_vAlignTable['u1151'] = 'top';
var u1152 = document.getElementById('u1152');
gv_vAlignTable['u1152'] = 'top';
var u1153 = document.getElementById('u1153');
gv_vAlignTable['u1153'] = 'top';
var u1154 = document.getElementById('u1154');

var u1099 = document.getElementById('u1099');
gv_vAlignTable['u1099'] = 'top';
var u1156 = document.getElementById('u1156');
gv_vAlignTable['u1156'] = 'top';
var u1157 = document.getElementById('u1157');
gv_vAlignTable['u1157'] = 'top';
var u1190 = document.getElementById('u1190');

var u1191 = document.getElementById('u1191');
gv_vAlignTable['u1191'] = 'center';
var u1130 = document.getElementById('u1130');

var u1131 = document.getElementById('u1131');
gv_vAlignTable['u1131'] = 'center';
var u1132 = document.getElementById('u1132');

var u1133 = document.getElementById('u1133');
gv_vAlignTable['u1133'] = 'center';
var u1134 = document.getElementById('u1134');

var u1197 = document.getElementById('u1197');
gv_vAlignTable['u1197'] = 'top';
var u1198 = document.getElementById('u1198');
gv_vAlignTable['u1198'] = 'top';
var u1199 = document.getElementById('u1199');
gv_vAlignTable['u1199'] = 'top';
var u1160 = document.getElementById('u1160');

var u1161 = document.getElementById('u1161');
gv_vAlignTable['u1161'] = 'center';
var u1162 = document.getElementById('u1162');

var u1163 = document.getElementById('u1163');
gv_vAlignTable['u1163'] = 'center';
var u1164 = document.getElementById('u1164');

var u1165 = document.getElementById('u1165');
gv_vAlignTable['u1165'] = 'center';
var u1166 = document.getElementById('u1166');

var u1167 = document.getElementById('u1167');
gv_vAlignTable['u1167'] = 'top';
var u511 = document.getElementById('u511');
gv_vAlignTable['u511'] = 'center';
var u512 = document.getElementById('u512');
gv_vAlignTable['u512'] = 'top';
var u513 = document.getElementById('u513');

u513.style.cursor = 'pointer';
if (bIE) u513.attachEvent("onclick", Clicku513);
else u513.addEventListener("click", Clicku513, true);
function Clicku513(e)
{

if (true) {

	SetPanelStateu3("pd0u3");

}

}
gv_vAlignTable['u513'] = 'top';
var u514 = document.getElementById('u514');

var u515 = document.getElementById('u515');
gv_vAlignTable['u515'] = 'center';
var u516 = document.getElementById('u516');

var u517 = document.getElementById('u517');
gv_vAlignTable['u517'] = 'center';
var u1255 = document.getElementById('u1255');
gv_vAlignTable['u1255'] = 'top';
var u1257 = document.getElementById('u1257');
gv_vAlignTable['u1257'] = 'top';
var u520 = document.getElementById('u520');
gv_vAlignTable['u520'] = 'center';
var u521 = document.getElementById('u521');

u521.style.cursor = 'pointer';
if (bIE) u521.attachEvent("onclick", Clicku521);
else u521.addEventListener("click", Clicku521, true);
function Clicku521(e)
{

if (true) {

	SetPanelStateu3("pd0u3");

}

}
gv_vAlignTable['u521'] = 'top';
var u522 = document.getElementById('u522');

var u523 = document.getElementById('u523');
gv_vAlignTable['u523'] = 'center';
var u524 = document.getElementById('u524');

var u525 = document.getElementById('u525');
gv_vAlignTable['u525'] = 'center';
var u526 = document.getElementById('u526');
gv_vAlignTable['u526'] = 'top';
var u527 = document.getElementById('u527');

var u530 = document.getElementById('u530');

var u531 = document.getElementById('u531');

u531.style.cursor = 'pointer';
if (bIE) u531.attachEvent("onclick", Clicku531);
else u531.addEventListener("click", Clicku531, true);
function Clicku531(e)
{

if ((GetGlobalVariableValue('$NameNum')) == (PopulateVariables('no'))) {

	SetPanelStateu829("pd0u829");

	SetPanelStateu3("pd6u3");

	SetPanelStateu855("pd1u855");

	MoveWidgetTo('u933',28,200);

}
else
if ((GetGlobalVariableValue('$NameNum')) == (PopulateVariables('yes'))) {

	SetPanelStateu3("pd6u3");

	SetPanelStateu855("pd0u855");

	SetPanelStateu829("pd1u829");

	MoveWidgetTo('u933',28,470);

}

}

var u532 = document.getElementById('u532');
gv_vAlignTable['u532'] = 'center';
var u533 = document.getElementById('u533');

u533.style.cursor = 'pointer';
if (bIE) u533.attachEvent("onclick", Clicku533);
else u533.addEventListener("click", Clicku533, true);
function Clicku533(e)
{

if (true) {

	SetPanelVisibilityu3("hidden");

	SetPanelVisibilityu942("");

	BringToFront("u942");

}

}

var u534 = document.getElementById('u534');
gv_vAlignTable['u534'] = 'bottom';
var u535 = document.getElementById('u535');

var u536 = document.getElementById('u536');
gv_vAlignTable['u536'] = 'top';
var u537 = document.getElementById('u537');

var u540 = document.getElementById('u540');
gv_vAlignTable['u540'] = 'bottom';
var u541 = document.getElementById('u541');

u541.style.cursor = 'pointer';
if (bIE) u541.attachEvent("onclick", Clicku541);
else u541.addEventListener("click", Clicku541, true);
function Clicku541(e)
{

if (true) {

	SetPanelVisibilityu3("hidden");

	SetPanelVisibilityu942("");

	BringToFront("u942");

}

}

var u542 = document.getElementById('u542');
gv_vAlignTable['u542'] = 'bottom';
var u543 = document.getElementById('u543');

var u544 = document.getElementById('u544');

u544.style.cursor = 'pointer';
if (bIE) u544.attachEvent("onclick", Clicku544);
else u544.addEventListener("click", Clicku544, true);
function Clicku544(e)
{

if (true) {

	SetPanelVisibilityu0("hidden");

	SetPanelVisibilityu942("");

	BringToFront("u942");

}

}
gv_vAlignTable['u544'] = 'top';
var u545 = document.getElementById('u545');

var u546 = document.getElementById('u546');

var u547 = document.getElementById('u547');
gv_vAlignTable['u547'] = 'center';
var u550 = document.getElementById('u550');

var u551 = document.getElementById('u551');
gv_vAlignTable['u551'] = 'center';
var u552 = document.getElementById('u552');

var u553 = document.getElementById('u553');
gv_vAlignTable['u553'] = 'center';
var u554 = document.getElementById('u554');

var u555 = document.getElementById('u555');

var u556 = document.getElementById('u556');
gv_vAlignTable['u556'] = 'top';
var u557 = document.getElementById('u557');

var u560 = document.getElementById('u560');
gv_vAlignTable['u560'] = 'center';
var u561 = document.getElementById('u561');

u561.style.cursor = 'pointer';
if (bIE) u561.attachEvent("onclick", Clicku561);
else u561.addEventListener("click", Clicku561, true);
function Clicku561(e)
{

if (true) {

	SetPanelVisibilityu3("hidden");

	SetPanelVisibilityu942("");

	BringToFront("u942");

}

}

var u562 = document.getElementById('u562');
gv_vAlignTable['u562'] = 'center';
var u563 = document.getElementById('u563');

var u564 = document.getElementById('u564');
gv_vAlignTable['u564'] = 'top';
var u565 = document.getElementById('u565');

u565.style.cursor = 'pointer';
if (bIE) u565.attachEvent("onclick", Clicku565);
else u565.addEventListener("click", Clicku565, true);
function Clicku565(e)
{

if (true) {

	SetPanelVisibilityu554("");

	SetPanelStateu545("pd2u545");

	SetPanelStateu715("pd1u715");

	SetPanelStateu700("pd1u700");

	MoveWidgetTo('u700',1,32);

	SetPanelVisibilityu656("hidden");

	SetPanelVisibilityu671("hidden");

	SetPanelVisibilityu678("hidden");

	SetPanelVisibilityu692("hidden");

SetWidgetRichText('u699', PopulateVariables('<span style=" font-family:\'Calibri\'; color:#363636; font-size:13px;">Selected size:</span>'));

	BringToFront("u554");

}

}

var u566 = document.getElementById('u566');

var u567 = document.getElementById('u567');

var u805 = document.getElementById('u805');

var u806 = document.getElementById('u806');
gv_vAlignTable['u806'] = 'center';
var u807 = document.getElementById('u807');
gv_vAlignTable['u807'] = 'top';
var u808 = document.getElementById('u808');
gv_vAlignTable['u808'] = 'top';
var u809 = document.getElementById('u809');
gv_vAlignTable['u809'] = 'top';
var u570 = document.getElementById('u570');

u570.style.cursor = 'pointer';
if (bIE) u570.attachEvent("onclick", Clicku570);
else u570.addEventListener("click", Clicku570, true);
function Clicku570(e)
{

if (true) {

	SetPanelVisibilityu655("");

	SetPanelVisibilityu554("hidden");

	SetPanelVisibilityu711("hidden");

	SetPanelStateu700("pd0u700");

	BringToFront("u655");

}

}

var u571 = document.getElementById('u571');

var u572 = document.getElementById('u572');

var u573 = document.getElementById('u573');
gv_vAlignTable['u573'] = 'center';
var u574 = document.getElementById('u574');
gv_vAlignTable['u574'] = 'top';
var u575 = document.getElementById('u575');

var u576 = document.getElementById('u576');
gv_vAlignTable['u576'] = 'center';
var u577 = document.getElementById('u577');
gv_vAlignTable['u577'] = 'top';
var u815 = document.getElementById('u815');
gv_vAlignTable['u815'] = 'top';
var u816 = document.getElementById('u816');

var u817 = document.getElementById('u817');
gv_vAlignTable['u817'] = 'center';
var u818 = document.getElementById('u818');

var u819 = document.getElementById('u819');
gv_vAlignTable['u819'] = 'center';
var u580 = document.getElementById('u580');
gv_vAlignTable['u580'] = 'top';
var u581 = document.getElementById('u581');

var u582 = document.getElementById('u582');
gv_vAlignTable['u582'] = 'top';
var u583 = document.getElementById('u583');
gv_vAlignTable['u583'] = 'top';
var u584 = document.getElementById('u584');
gv_vAlignTable['u584'] = 'top';
var u585 = document.getElementById('u585');
gv_vAlignTable['u585'] = 'top';
var u586 = document.getElementById('u586');

var u587 = document.getElementById('u587');
gv_vAlignTable['u587'] = 'top';
var u825 = document.getElementById('u825');

var u826 = document.getElementById('u826');

var u827 = document.getElementById('u827');
gv_vAlignTable['u827'] = 'top';
var u828 = document.getElementById('u828');

u828.style.cursor = 'pointer';
if (bIE) u828.attachEvent("onclick", Clicku828);
else u828.addEventListener("click", Clicku828, true);
function Clicku828(e)
{

if (true) {

	SetPanelStateu825("pd0u825");

}

}
gv_vAlignTable['u828'] = 'top';
var u829 = document.getElementById('u829');

var u590 = document.getElementById('u590');

var u591 = document.getElementById('u591');
gv_vAlignTable['u591'] = 'center';
var u592 = document.getElementById('u592');
gv_vAlignTable['u592'] = 'top';
var u593 = document.getElementById('u593');
gv_vAlignTable['u593'] = 'top';
var u594 = document.getElementById('u594');
gv_vAlignTable['u594'] = 'top';
var u595 = document.getElementById('u595');
gv_vAlignTable['u595'] = 'top';
var u596 = document.getElementById('u596');
gv_vAlignTable['u596'] = 'top';
var u597 = document.getElementById('u597');
gv_vAlignTable['u597'] = 'top';
if (window.OnLoad) OnLoad();
