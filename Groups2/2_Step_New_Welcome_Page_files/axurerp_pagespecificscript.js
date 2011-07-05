
var PageName = '2 Step New Welcome Page';
var PageId = 'pbc71e09480704a149f32d3fab4255ba2'
var PageUrl = '2_Step_New_Welcome_Page.html'
document.title = '2 Step New Welcome Page';

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

eval(GetDynamicPanelScript('u1248', 2));

eval(GetDynamicPanelScript('u1031', 1));

eval(GetDynamicPanelScript('u793', 2));

eval(GetDynamicPanelScript('u1044', 2));

eval(GetDynamicPanelScript('u1045', 2));

eval(GetDynamicPanelScript('u797', 2));

eval(GetDynamicPanelScript('u653', 3));

eval(GetDynamicPanelScript('u975', 2));

eval(GetDynamicPanelScript('u513', 4));

eval(GetDynamicPanelScript('u906', 2));

eval(GetDynamicPanelScript('u892', 1));

eval(GetDynamicPanelScript('u443', 1));

eval(GetDynamicPanelScript('u448', 1));

eval(GetDynamicPanelScript('u940', 1));

eval(GetDynamicPanelScript('u623', 1));

eval(GetDynamicPanelScript('u624', 1));

eval(GetDynamicPanelScript('u557', 5));

eval(GetDynamicPanelScript('u660', 3));

eval(GetDynamicPanelScript('u275', 2));

eval(GetDynamicPanelScript('u590', 3));

eval(GetDynamicPanelScript('u522', 1));

eval(GetDynamicPanelScript('u523', 1));

eval(GetDynamicPanelScript('u438', 1));

eval(GetDynamicPanelScript('u597', 3));

eval(GetDynamicPanelScript('u453', 1));

eval(GetDynamicPanelScript('u458', 1));

eval(GetDynamicPanelScript('u953', 5));

eval(GetDynamicPanelScript('u639', 3));

eval(GetDynamicPanelScript('u668', 2));

eval(GetDynamicPanelScript('u423', 1));

eval(GetDynamicPanelScript('u496', 2));

eval(GetDynamicPanelScript('u428', 1));

eval(GetDynamicPanelScript('u604', 3));

eval(GetDynamicPanelScript('u3', 7));

eval(GetDynamicPanelScript('u679', 2));

eval(GetDynamicPanelScript('u927', 2));

eval(GetDynamicPanelScript('u41', 3));

eval(GetDynamicPanelScript('u463', 1));

eval(GetDynamicPanelScript('u0', 1));

eval(GetDynamicPanelScript('u539', 1));

eval(GetDynamicPanelScript('u468', 1));

eval(GetDynamicPanelScript('u646', 3));

eval(GetDynamicPanelScript('u503', 2));

eval(GetDynamicPanelScript('u433', 1));

eval(GetDynamicPanelScript('u898', 1));

eval(GetDynamicPanelScript('u16', 2));

eval(GetDynamicPanelScript('u611', 3));

eval(GetDynamicPanelScript('u683', 6));

eval(GetDynamicPanelScript('u875', 1));

var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'top';
var u201 = document.getElementById('u201');

var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'top';
var u203 = document.getElementById('u203');

var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'top';
var u205 = document.getElementById('u205');

var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'top';
var u207 = document.getElementById('u207');

var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'top';
var u209 = document.getElementById('u209');

var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'top';
var u211 = document.getElementById('u211');

var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'top';
var u213 = document.getElementById('u213');

var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'top';
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
gv_vAlignTable['u500'] = 'bottom';
var u501 = document.getElementById('u501');

var u502 = document.getElementById('u502');
gv_vAlignTable['u502'] = 'top';
var u503 = document.getElementById('u503');

var u504 = document.getElementById('u504');

var u505 = document.getElementById('u505');

u505.style.cursor = 'pointer';
if (bIE) u505.attachEvent("onclick", Clicku505);
else u505.addEventListener("click", Clicku505, true);
function Clicku505(e)
{

if (true) {

	SetPanelStateu3("pd1u3");

	SetPanelStateu496("pd0u496");

	SetPanelStateu41("pd2u41");

	MoveWidgetTo('u496',5,500);

}

}

var u506 = document.getElementById('u506');
gv_vAlignTable['u506'] = 'bottom';
var u507 = document.getElementById('u507');

u507.style.cursor = 'pointer';
if (bIE) u507.attachEvent("onclick", Clicku507);
else u507.addEventListener("click", Clicku507, true);
function Clicku507(e)
{

if (true) {

	SetPanelVisibilityu3("hidden");

	SetPanelVisibilityu892("");

	BringToFront("u892");

}

}

var u508 = document.getElementById('u508');
gv_vAlignTable['u508'] = 'bottom';
var u509 = document.getElementById('u509');

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

	SetPanelStateu496("pd1u496");

	MoveWidgetTo('u496',5,350);

}
else
if ((GetGlobalVariableValue('$NameNum')) == (PopulateVariables('no'))) {

	SetPanelStateu3("pd1u3");

	SetPanelStateu496("pd0u496");

	MoveWidgetTo('u496',5,350);

}

}

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'bottom';
var u510 = document.getElementById('u510');

u510.style.cursor = 'pointer';
if (bIE) u510.attachEvent("onclick", Clicku510);
else u510.addEventListener("click", Clicku510, true);
function Clicku510(e)
{

if (true) {

	SetPanelVisibilityu0("hidden");

	SetPanelVisibilityu892("");

	BringToFront("u892");

}

}
gv_vAlignTable['u510'] = 'top';
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

var u519 = document.getElementById('u519');
gv_vAlignTable['u519'] = 'center';
var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'top';
var u251 = document.getElementById('u251');

var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'center';
var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'top';
var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'top';
var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'top';
var u256 = document.getElementById('u256');

var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'center';
var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'top';
var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'top';
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

u529.style.cursor = 'pointer';
if (bIE) u529.attachEvent("onclick", Clicku529);
else u529.addEventListener("click", Clicku529, true);
function Clicku529(e)
{

if (true) {

	SetPanelVisibilityu3("hidden");

	SetPanelVisibilityu892("");

	BringToFront("u892");

}

}

var u260 = document.getElementById('u260');

var u261 = document.getElementById('u261');
gv_vAlignTable['u261'] = 'center';
var u262 = document.getElementById('u262');

var u263 = document.getElementById('u263');

var u264 = document.getElementById('u264');

var u265 = document.getElementById('u265');

var u266 = document.getElementById('u266');

var u267 = document.getElementById('u267');

var u268 = document.getElementById('u268');

var u269 = document.getElementById('u269');

var u30 = document.getElementById('u30');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
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

u538.style.cursor = 'pointer';
if (bIE) u538.attachEvent("onclick", Clicku538);
else u538.addEventListener("click", Clicku538, true);
function Clicku538(e)
{

if (true) {

	SetPanelVisibilityu623("");

	SetPanelVisibilityu522("hidden");

	SetPanelVisibilityu679("hidden");

	SetPanelStateu668("pd0u668");

	BringToFront("u623");

}

}

var u539 = document.getElementById('u539');

var u800 = document.getElementById('u800');
gv_vAlignTable['u800'] = 'top';
var u801 = document.getElementById('u801');

var u802 = document.getElementById('u802');
gv_vAlignTable['u802'] = 'top';
var u803 = document.getElementById('u803');

var u804 = document.getElementById('u804');
gv_vAlignTable['u804'] = 'top';
var u270 = document.getElementById('u270');

var u271 = document.getElementById('u271');

var u272 = document.getElementById('u272');

var u273 = document.getElementById('u273');

var u274 = document.getElementById('u274');

u274.style.cursor = 'pointer';
if (bIE) u274.attachEvent("onclick", Clicku274);
else u274.addEventListener("click", Clicku274, true);
function Clicku274(e)
{

if (true) {

	SetPanelStateu41("pd0u41");

	MoveWidgetTo('u496',28,360);

}

}
gv_vAlignTable['u274'] = 'top';
var u275 = document.getElementById('u275');

var u276 = document.getElementById('u276');

var u277 = document.getElementById('u277');
gv_vAlignTable['u277'] = 'center';
var u278 = document.getElementById('u278');

u278.style.cursor = 'pointer';
if (bIE) u278.attachEvent("onclick", Clicku278);
else u278.addEventListener("click", Clicku278, true);
function Clicku278(e)
{

if (true) {

	SetPanelStateu3("pd0u3");

}

}
gv_vAlignTable['u278'] = 'top';
var u279 = document.getElementById('u279');

var u1002 = document.getElementById('u1002');

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u41 = document.getElementById('u41');

var u42 = document.getElementById('u42');

var u43 = document.getElementById('u43');

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u45 = document.getElementById('u45');

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u47 = document.getElementById('u47');

var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u49 = document.getElementById('u49');

var u548 = document.getElementById('u548');
gv_vAlignTable['u548'] = 'top';
var u549 = document.getElementById('u549');

var u1005 = document.getElementById('u1005');
gv_vAlignTable['u1005'] = 'center';
var u810 = document.getElementById('u810');
gv_vAlignTable['u810'] = 'top';
var u811 = document.getElementById('u811');

var u812 = document.getElementById('u812');
gv_vAlignTable['u812'] = 'top';
var u813 = document.getElementById('u813');

var u814 = document.getElementById('u814');
gv_vAlignTable['u814'] = 'top';
var u280 = document.getElementById('u280');
gv_vAlignTable['u280'] = 'center';
var u281 = document.getElementById('u281');

var u282 = document.getElementById('u282');
gv_vAlignTable['u282'] = 'center';
var u283 = document.getElementById('u283');
gv_vAlignTable['u283'] = 'top';
var u284 = document.getElementById('u284');

var u285 = document.getElementById('u285');
gv_vAlignTable['u285'] = 'center';
var u286 = document.getElementById('u286');
gv_vAlignTable['u286'] = 'top';
var u287 = document.getElementById('u287');

var u288 = document.getElementById('u288');
gv_vAlignTable['u288'] = 'center';
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

var u559 = document.getElementById('u559');
gv_vAlignTable['u559'] = 'center';
var u1013 = document.getElementById('u1013');
gv_vAlignTable['u1013'] = 'center';
var u1014 = document.getElementById('u1014');
gv_vAlignTable['u1014'] = 'top';
var u1015 = document.getElementById('u1015');
gv_vAlignTable['u1015'] = 'top';
var u820 = document.getElementById('u820');
gv_vAlignTable['u820'] = 'top';
var u821 = document.getElementById('u821');

var u822 = document.getElementById('u822');
gv_vAlignTable['u822'] = 'top';
var u823 = document.getElementById('u823');

var u824 = document.getElementById('u824');
gv_vAlignTable['u824'] = 'top';
var u290 = document.getElementById('u290');
gv_vAlignTable['u290'] = 'center';
var u291 = document.getElementById('u291');
gv_vAlignTable['u291'] = 'top';
var u292 = document.getElementById('u292');

var u293 = document.getElementById('u293');
gv_vAlignTable['u293'] = 'center';
var u294 = document.getElementById('u294');
gv_vAlignTable['u294'] = 'top';
var u295 = document.getElementById('u295');

u295.style.cursor = 'pointer';
if (bIE) u295.attachEvent("onclick", Clicku295);
else u295.addEventListener("click", Clicku295, true);
function Clicku295(e)
{

if (true) {

	SetPanelStateu3("pd0u3");

}

}
gv_vAlignTable['u295'] = 'top';
var u296 = document.getElementById('u296');

var u297 = document.getElementById('u297');
gv_vAlignTable['u297'] = 'center';
var u298 = document.getElementById('u298');

var u299 = document.getElementById('u299');
gv_vAlignTable['u299'] = 'center';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u61 = document.getElementById('u61');

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u63 = document.getElementById('u63');

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u65 = document.getElementById('u65');

var u66 = document.getElementById('u66');

var u67 = document.getElementById('u67');

var u68 = document.getElementById('u68');

var u69 = document.getElementById('u69');

var u568 = document.getElementById('u568');
gv_vAlignTable['u568'] = 'top';
var u569 = document.getElementById('u569');
gv_vAlignTable['u569'] = 'top';
var u1020 = document.getElementById('u1020');

u1020.style.cursor = 'pointer';
if (bIE) u1020.attachEvent("onclick", Clicku1020);
else u1020.addEventListener("click", Clicku1020, true);
function Clicku1020(e)
{

if (true) {

	SetPanelStateu3("pd2u3");

	BringToFront("u0");

	SetPanelVisibilityu0("");

}

}

var u1021 = document.getElementById('u1021');
gv_vAlignTable['u1021'] = 'center';
var u1022 = document.getElementById('u1022');

var u830 = document.getElementById('u830');
gv_vAlignTable['u830'] = 'top';
var u831 = document.getElementById('u831');

var u832 = document.getElementById('u832');
gv_vAlignTable['u832'] = 'top';
var u833 = document.getElementById('u833');

var u834 = document.getElementById('u834');
gv_vAlignTable['u834'] = 'top';
var u835 = document.getElementById('u835');

var u836 = document.getElementById('u836');
gv_vAlignTable['u836'] = 'top';
var u837 = document.getElementById('u837');

var u838 = document.getElementById('u838');
gv_vAlignTable['u838'] = 'top';
var u839 = document.getElementById('u839');

var u1206 = document.getElementById('u1206');
gv_vAlignTable['u1206'] = 'top';
var u1207 = document.getElementById('u1207');
gv_vAlignTable['u1207'] = 'top';
var u1208 = document.getElementById('u1208');

var u1209 = document.getElementById('u1209');
gv_vAlignTable['u1209'] = 'top';
var u70 = document.getElementById('u70');

var u71 = document.getElementById('u71');

var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u73 = document.getElementById('u73');

var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'top';
var u75 = document.getElementById('u75');

var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'top';
var u77 = document.getElementById('u77');

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u79 = document.getElementById('u79');

var u578 = document.getElementById('u578');
gv_vAlignTable['u578'] = 'top';
var u579 = document.getElementById('u579');
gv_vAlignTable['u579'] = 'top';
var u1030 = document.getElementById('u1030');
gv_vAlignTable['u1030'] = 'top';
var u1031 = document.getElementById('u1031');

var u840 = document.getElementById('u840');
gv_vAlignTable['u840'] = 'top';
var u841 = document.getElementById('u841');

var u842 = document.getElementById('u842');
gv_vAlignTable['u842'] = 'top';
var u843 = document.getElementById('u843');

var u844 = document.getElementById('u844');
gv_vAlignTable['u844'] = 'top';
var u845 = document.getElementById('u845');

var u846 = document.getElementById('u846');
gv_vAlignTable['u846'] = 'top';
var u847 = document.getElementById('u847');

var u848 = document.getElementById('u848');
gv_vAlignTable['u848'] = 'top';
var u849 = document.getElementById('u849');

var u1216 = document.getElementById('u1216');

var u1217 = document.getElementById('u1217');
gv_vAlignTable['u1217'] = 'center';
var u1218 = document.getElementById('u1218');

var u1219 = document.getElementById('u1219');
gv_vAlignTable['u1219'] = 'center';
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
gv_vAlignTable['u88'] = 'center';
var u89 = document.getElementById('u89');

var u588 = document.getElementById('u588');
gv_vAlignTable['u588'] = 'top';
var u589 = document.getElementById('u589');
gv_vAlignTable['u589'] = 'top';
var u1120 = document.getElementById('u1120');

var u850 = document.getElementById('u850');
gv_vAlignTable['u850'] = 'top';
var u851 = document.getElementById('u851');

var u852 = document.getElementById('u852');
gv_vAlignTable['u852'] = 'top';
var u853 = document.getElementById('u853');

var u854 = document.getElementById('u854');
gv_vAlignTable['u854'] = 'top';
var u855 = document.getElementById('u855');

var u856 = document.getElementById('u856');
gv_vAlignTable['u856'] = 'top';
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

var u91 = document.getElementById('u91');

var u92 = document.getElementById('u92');

var u93 = document.getElementById('u93');

var u94 = document.getElementById('u94');

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'top';
var u96 = document.getElementById('u96');

var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'top';
var u98 = document.getElementById('u98');

var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'top';
var u598 = document.getElementById('u598');

if (bIE) u598.attachEvent("onmouseover", MouseOveru598);
else u598.addEventListener("mouseover", MouseOveru598, true);
function MouseOveru598(e)
{
if (!IsTrueMouseOver('u598',e)) return;
if (true) {

	SetPanelStateu597("pd2u597");

	SetPanelStateu557("pd3u557");

}

}

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

u865.style.cursor = 'pointer';
if (bIE) u865.attachEvent("onclick", Clicku865);
else u865.addEventListener("click", Clicku865, true);
function Clicku865(e)
{

if (true) {

	SetPanelStateu41("pd2u41");

	SetPanelStateu496("pd0u496");

	SetPanelStateu3("pd1u3");

}

}
gv_vAlignTable['u865'] = 'top';
var u866 = document.getElementById('u866');

var u867 = document.getElementById('u867');
gv_vAlignTable['u867'] = 'top';
var u868 = document.getElementById('u868');

var u869 = document.getElementById('u869');
gv_vAlignTable['u869'] = 'top';
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
gv_vAlignTable['u1113'] = 'center';
var u1114 = document.getElementById('u1114');

var u1115 = document.getElementById('u1115');
gv_vAlignTable['u1115'] = 'center';
var u1116 = document.getElementById('u1116');

var u870 = document.getElementById('u870');

var u871 = document.getElementById('u871');
gv_vAlignTable['u871'] = 'top';
var u872 = document.getElementById('u872');

var u873 = document.getElementById('u873');
gv_vAlignTable['u873'] = 'top';
var u874 = document.getElementById('u874');

u874.style.cursor = 'pointer';
if (bIE) u874.attachEvent("onclick", Clicku874);
else u874.addEventListener("click", Clicku874, true);
function Clicku874(e)
{

if (true) {

	SetPanelStateu3("pd1u3");

	SetPanelStateu41("pd0u41");

	SetPanelStateu496("pd0u496");

}

}
gv_vAlignTable['u874'] = 'top';
var u875 = document.getElementById('u875');

var u876 = document.getElementById('u876');

var u877 = document.getElementById('u877');

u877.style.cursor = 'pointer';
if (bIE) u877.attachEvent("onclick", Clicku877);
else u877.addEventListener("click", Clicku877, true);
function Clicku877(e)
{

if (true) {

	SetPanelVisibilityu0("hidden");

	SetPanelVisibilityu892("");

	BringToFront("u892");

	SetPanelStateu953("pd1u953");

	SetPanelStateu1044("pd1u1044");

	MoveWidgetTo('u1031',11,246);

}

}

var u878 = document.getElementById('u878');
gv_vAlignTable['u878'] = 'center';
var u879 = document.getElementById('u879');

u879.style.cursor = 'pointer';
if (bIE) u879.attachEvent("onclick", Clicku879);
else u879.addEventListener("click", Clicku879, true);
function Clicku879(e)
{

if (true) {

	SetPanelVisibilityu3("hidden");

	SetPanelVisibilityu892("");

	BringToFront("u892");

	NewWindow("Resources/Other.html#other=" + encodeURI("If you close this window without sending your list, your data entries will not be saved.&nbsp; "), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u1149 = document.getElementById('u1149');
gv_vAlignTable['u1149'] = 'top';
var u1247 = document.getElementById('u1247');
gv_vAlignTable['u1247'] = 'center';
var u1248 = document.getElementById('u1248');

var u1249 = document.getElementById('u1249');

u1249.style.cursor = 'pointer';
if (bIE) u1249.attachEvent("onclick", Clicku1249);
else u1249.addEventListener("click", Clicku1249, true);
function Clicku1249(e)
{

if (true) {

	BringToFront("u0");

	SetPanelStateu3("pd3u3");

}

}

var u1121 = document.getElementById('u1121');
gv_vAlignTable['u1121'] = 'center';
var u1122 = document.getElementById('u1122');

var u880 = document.getElementById('u880');
gv_vAlignTable['u880'] = 'bottom';
var u881 = document.getElementById('u881');

var u882 = document.getElementById('u882');
gv_vAlignTable['u882'] = 'top';
var u883 = document.getElementById('u883');

u883.style.cursor = 'pointer';
if (bIE) u883.attachEvent("onclick", Clicku883);
else u883.addEventListener("click", Clicku883, true);
function Clicku883(e)
{

if (true) {

	SetPanelVisibilityu0("hidden");

	SetPanelVisibilityu892("");

	BringToFront("u892");

}

}
gv_vAlignTable['u883'] = 'top';
var u884 = document.getElementById('u884');

var u885 = document.getElementById('u885');
gv_vAlignTable['u885'] = 'center';
var u886 = document.getElementById('u886');
gv_vAlignTable['u886'] = 'top';
var u887 = document.getElementById('u887');

var u888 = document.getElementById('u888');
gv_vAlignTable['u888'] = 'center';
var u889 = document.getElementById('u889');

var u1159 = document.getElementById('u1159');
gv_vAlignTable['u1159'] = 'top';
var u1200 = document.getElementById('u1200');
gv_vAlignTable['u1200'] = 'top';
var u1201 = document.getElementById('u1201');
gv_vAlignTable['u1201'] = 'top';
var u1202 = document.getElementById('u1202');

var u1203 = document.getElementById('u1203');
gv_vAlignTable['u1203'] = 'center';
var u1204 = document.getElementById('u1204');

var u1205 = document.getElementById('u1205');
gv_vAlignTable['u1205'] = 'top';
var u890 = document.getElementById('u890');
gv_vAlignTable['u890'] = 'center';
var u891 = document.getElementById('u891');
gv_vAlignTable['u891'] = 'top';
var u892 = document.getElementById('u892');

var u893 = document.getElementById('u893');

var u894 = document.getElementById('u894');
gv_vAlignTable['u894'] = 'center';
var u895 = document.getElementById('u895');

var u896 = document.getElementById('u896');
gv_vAlignTable['u896'] = 'center';
var u897 = document.getElementById('u897');
gv_vAlignTable['u897'] = 'top';
var u898 = document.getElementById('u898');

var u899 = document.getElementById('u899');
gv_vAlignTable['u899'] = 'top';
var u1139 = document.getElementById('u1139');
gv_vAlignTable['u1139'] = 'center';
var u1168 = document.getElementById('u1168');
gv_vAlignTable['u1168'] = 'top';
var u1169 = document.getElementById('u1169');
gv_vAlignTable['u1169'] = 'top';
var u1210 = document.getElementById('u1210');
gv_vAlignTable['u1210'] = 'top';
var u1211 = document.getElementById('u1211');
gv_vAlignTable['u1211'] = 'top';
var u1212 = document.getElementById('u1212');

var u1213 = document.getElementById('u1213');
gv_vAlignTable['u1213'] = 'center';
var u1214 = document.getElementById('u1214');

var u1215 = document.getElementById('u1215');
gv_vAlignTable['u1215'] = 'center';
var u1174 = document.getElementById('u1174');

var u1175 = document.getElementById('u1175');
gv_vAlignTable['u1175'] = 'center';
var u1176 = document.getElementById('u1176');

var u1177 = document.getElementById('u1177');
gv_vAlignTable['u1177'] = 'top';
var u927 = document.getElementById('u927');

var u928 = document.getElementById('u928');
gv_vAlignTable['u928'] = 'top';
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
gv_vAlignTable['u1181'] = 'top';
var u1182 = document.getElementById('u1182');
gv_vAlignTable['u1182'] = 'top';
var u1183 = document.getElementById('u1183');
gv_vAlignTable['u1183'] = 'top';
var u1150 = document.getElementById('u1150');

var u1186 = document.getElementById('u1186');

var u1187 = document.getElementById('u1187');
gv_vAlignTable['u1187'] = 'center';
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
gv_vAlignTable['u1196'] = 'top';
var u1240 = document.getElementById('u1240');
gv_vAlignTable['u1240'] = 'top';
var u1241 = document.getElementById('u1241');
gv_vAlignTable['u1241'] = 'top';
var u1242 = document.getElementById('u1242');

var u1243 = document.getElementById('u1243');
gv_vAlignTable['u1243'] = 'center';
var u1244 = document.getElementById('u1244');

var u1245 = document.getElementById('u1245');
gv_vAlignTable['u1245'] = 'center';
var u1246 = document.getElementById('u1246');

var u370 = document.getElementById('u370');

var u371 = document.getElementById('u371');
gv_vAlignTable['u371'] = 'top';
var u372 = document.getElementById('u372');

var u373 = document.getElementById('u373');
gv_vAlignTable['u373'] = 'top';
var u374 = document.getElementById('u374');

var u1250 = document.getElementById('u1250');
gv_vAlignTable['u1250'] = 'center';
var u1251 = document.getElementById('u1251');

u1251.style.cursor = 'pointer';
if (bIE) u1251.attachEvent("onclick", Clicku1251);
else u1251.addEventListener("click", Clicku1251, true);
function Clicku1251(e)
{

if (true) {

	BringToFront("u0");

	SetPanelStateu3("pd3u3");

}

}

var u1252 = document.getElementById('u1252');
gv_vAlignTable['u1252'] = 'center';
var u1253 = document.getElementById('u1253');

var u1254 = document.getElementById('u1254');
gv_vAlignTable['u1254'] = 'center';
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
gv_vAlignTable['u926'] = 'top';
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

	SetPanelVisibilityu892("");

	BringToFront("u892");

}

}
gv_vAlignTable['u12'] = 'top';
var u300 = document.getElementById('u300');
gv_vAlignTable['u300'] = 'top';
var u301 = document.getElementById('u301');

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
var u310 = document.getElementById('u310');

var u311 = document.getElementById('u311');
gv_vAlignTable['u311'] = 'top';
var u312 = document.getElementById('u312');

var u313 = document.getElementById('u313');
gv_vAlignTable['u313'] = 'top';
var u314 = document.getElementById('u314');

var u315 = document.getElementById('u315');
gv_vAlignTable['u315'] = 'top';
var u316 = document.getElementById('u316');

var u317 = document.getElementById('u317');
gv_vAlignTable['u317'] = 'top';
var u318 = document.getElementById('u318');

var u319 = document.getElementById('u319');
gv_vAlignTable['u319'] = 'top';
var u0 = document.getElementById('u0');

var u1 = document.getElementById('u1');

var u320 = document.getElementById('u320');

var u321 = document.getElementById('u321');
gv_vAlignTable['u321'] = 'top';
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

var u601 = document.getElementById('u601');
gv_vAlignTable['u601'] = 'center';
var u602 = document.getElementById('u602');

u602.style.cursor = 'pointer';
if (bIE) u602.attachEvent("onclick", Clicku602);
else u602.addEventListener("click", Clicku602, true);
function Clicku602(e)
{

if (true) {

	SetPanelStateu597("pd1u597");

	SetPanelStateu513("pd3u513");

	SetPanelStateu611("pd0u611");

	SetPanelStateu590("pd0u590");

	SetPanelStateu604("pd0u604");

	SetPanelStateu557("pd3u557");

	SetPanelVisibilityu539("");

	MoveWidgetTo('u523',2,162);

}

}

if (bIE) u602.attachEvent("onmouseout", MouseOutu602);
else u602.addEventListener("mouseout", MouseOutu602, true);
function MouseOutu602(e)
{
if (!IsTrueMouseOut('u602',e)) return;
if (true) {

	SetPanelStateu557("pd0u557");

	SetPanelStateu597("pd0u597");

}

}

var u603 = document.getElementById('u603');
gv_vAlignTable['u603'] = 'center';
var u604 = document.getElementById('u604');

var u605 = document.getElementById('u605');

if (bIE) u605.attachEvent("onmouseover", MouseOveru605);
else u605.addEventListener("mouseover", MouseOveru605, true);
function MouseOveru605(e)
{
if (!IsTrueMouseOver('u605',e)) return;
if (true) {

	SetPanelStateu604("pd2u604");

	SetPanelStateu557("pd2u557");

}

}

var u606 = document.getElementById('u606');
gv_vAlignTable['u606'] = 'center';
var u607 = document.getElementById('u607');

var u608 = document.getElementById('u608');
gv_vAlignTable['u608'] = 'center';
var u609 = document.getElementById('u609');

u609.style.cursor = 'pointer';
if (bIE) u609.attachEvent("onclick", Clicku609);
else u609.addEventListener("click", Clicku609, true);
function Clicku609(e)
{

if (true) {

	SetPanelStateu604("pd1u604");

	SetPanelStateu513("pd3u513");

	SetPanelStateu611("pd0u611");

	SetPanelStateu597("pd0u597");

	SetPanelStateu590("pd0u590");

	SetPanelStateu557("pd2u557");

	SetPanelVisibilityu539("");

	MoveWidgetTo('u523',2,162);

}

}

if (bIE) u609.attachEvent("onmouseout", MouseOutu609);
else u609.addEventListener("mouseout", MouseOutu609, true);
function MouseOutu609(e)
{
if (!IsTrueMouseOut('u609',e)) return;
if (true) {

	SetPanelStateu557("pd0u557");

	SetPanelStateu604("pd0u604");

}

}

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
gv_vAlignTable['u610'] = 'center';
var u611 = document.getElementById('u611');

var u612 = document.getElementById('u612');

if (bIE) u612.attachEvent("onmouseover", MouseOveru612);
else u612.addEventListener("mouseover", MouseOveru612, true);
function MouseOveru612(e)
{
if (!IsTrueMouseOver('u612',e)) return;
if (true) {

	SetPanelStateu611("pd2u611");

	SetPanelStateu557("pd1u557");

}

}

var u613 = document.getElementById('u613');
gv_vAlignTable['u613'] = 'center';
var u614 = document.getElementById('u614');

var u615 = document.getElementById('u615');
gv_vAlignTable['u615'] = 'center';
var u616 = document.getElementById('u616');

u616.style.cursor = 'pointer';
if (bIE) u616.attachEvent("onclick", Clicku616);
else u616.addEventListener("click", Clicku616, true);
function Clicku616(e)
{

if (true) {

	SetPanelStateu611("pd1u611");

	SetPanelStateu513("pd3u513");

	SetPanelStateu604("pd0u604");

	SetPanelStateu597("pd0u597");

	SetPanelStateu590("pd0u590");

	SetPanelStateu557("pd1u557");

	SetPanelVisibilityu539("");

	MoveWidgetTo('u523',2,162);

}

}

if (bIE) u616.attachEvent("onmouseout", MouseOutu616);
else u616.addEventListener("mouseout", MouseOutu616, true);
function MouseOutu616(e)
{
if (!IsTrueMouseOut('u616',e)) return;
if (true) {

	SetPanelStateu557("pd0u557");

	SetPanelStateu611("pd0u611");

}

}

var u617 = document.getElementById('u617');
gv_vAlignTable['u617'] = 'center';
var u618 = document.getElementById('u618');
gv_vAlignTable['u618'] = 'top';
var u619 = document.getElementById('u619');

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
gv_vAlignTable['u620'] = 'center';
var u621 = document.getElementById('u621');
gv_vAlignTable['u621'] = 'top';
var u622 = document.getElementById('u622');

u622.style.cursor = 'pointer';
if (bIE) u622.attachEvent("onclick", Clicku622);
else u622.addEventListener("click", Clicku622, true);
function Clicku622(e)
{

if (true) {

	SetPanelVisibilityu0("hidden");

	SetPanelVisibilityu892("");

	BringToFront("u892");

}

}
gv_vAlignTable['u622'] = 'top';
var u623 = document.getElementById('u623');

var u624 = document.getElementById('u624');

var u625 = document.getElementById('u625');

var u626 = document.getElementById('u626');
gv_vAlignTable['u626'] = 'center';
var u627 = document.getElementById('u627');
gv_vAlignTable['u627'] = 'top';
var u628 = document.getElementById('u628');

var u629 = document.getElementById('u629');
gv_vAlignTable['u629'] = 'center';
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
gv_vAlignTable['u1003'] = 'top';
var u1009 = document.getElementById('u1009');
gv_vAlignTable['u1009'] = 'center';
var u630 = document.getElementById('u630');
gv_vAlignTable['u630'] = 'top';
var u631 = document.getElementById('u631');
gv_vAlignTable['u631'] = 'top';
var u632 = document.getElementById('u632');

var u633 = document.getElementById('u633');
gv_vAlignTable['u633'] = 'top';
var u634 = document.getElementById('u634');

var u635 = document.getElementById('u635');
gv_vAlignTable['u635'] = 'top';
var u636 = document.getElementById('u636');
gv_vAlignTable['u636'] = 'top';
var u637 = document.getElementById('u637');
gv_vAlignTable['u637'] = 'top';
var u638 = document.getElementById('u638');
gv_vAlignTable['u638'] = 'top';
var u639 = document.getElementById('u639');

var u1006 = document.getElementById('u1006');
gv_vAlignTable['u1006'] = 'top';
var u1007 = document.getElementById('u1007');
gv_vAlignTable['u1007'] = 'top';
var u1008 = document.getElementById('u1008');

var u900 = document.getElementById('u900');

var u901 = document.getElementById('u901');
gv_vAlignTable['u901'] = 'center';
var u902 = document.getElementById('u902');
gv_vAlignTable['u902'] = 'top';
var u903 = document.getElementById('u903');
gv_vAlignTable['u903'] = 'top';
var u904 = document.getElementById('u904');
gv_vAlignTable['u904'] = 'top';
var u905 = document.getElementById('u905');
gv_vAlignTable['u905'] = 'top';
var u906 = document.getElementById('u906');

var u907 = document.getElementById('u907');

var u908 = document.getElementById('u908');
gv_vAlignTable['u908'] = 'center';
var u909 = document.getElementById('u909');
gv_vAlignTable['u909'] = 'top';
var u375 = document.getElementById('u375');
gv_vAlignTable['u375'] = 'top';
var u376 = document.getElementById('u376');

var u377 = document.getElementById('u377');
gv_vAlignTable['u377'] = 'top';
var u378 = document.getElementById('u378');

var u379 = document.getElementById('u379');
gv_vAlignTable['u379'] = 'top';
var u1019 = document.getElementById('u1019');
gv_vAlignTable['u1019'] = 'top';
var u640 = document.getElementById('u640');

if (bIE) u640.attachEvent("onmouseover", MouseOveru640);
else u640.addEventListener("mouseover", MouseOveru640, true);
function MouseOveru640(e)
{
if (!IsTrueMouseOver('u640',e)) return;
if (true) {

	SetPanelStateu639("pd2u639");

	SetPanelStateu683("pd2u683");

}

}

var u641 = document.getElementById('u641');
gv_vAlignTable['u641'] = 'center';
var u642 = document.getElementById('u642');

var u643 = document.getElementById('u643');
gv_vAlignTable['u643'] = 'center';
var u644 = document.getElementById('u644');

u644.style.cursor = 'pointer';
if (bIE) u644.attachEvent("onclick", Clicku644);
else u644.addEventListener("click", Clicku644, true);
function Clicku644(e)
{

if (true) {

	SetPanelStateu639("pd1u639");

	SetPanelStateu513("pd1u513");

	SetPanelStateu646("pd0u646");

	SetPanelStateu653("pd0u653");

	SetPanelStateu660("pd0u660");

	SetPanelStateu683("pd2u683");

	SetPanelVisibilityu624("");

	MoveWidgetTo('u668',10,165);

}

}

if (bIE) u644.attachEvent("onmouseout", MouseOutu644);
else u644.addEventListener("mouseout", MouseOutu644, true);
function MouseOutu644(e)
{
if (!IsTrueMouseOut('u644',e)) return;
if (true) {

	SetPanelStateu683("pd0u683");

	SetPanelStateu639("pd0u639");

}

}

var u645 = document.getElementById('u645');
gv_vAlignTable['u645'] = 'center';
var u646 = document.getElementById('u646');

var u647 = document.getElementById('u647');

if (bIE) u647.attachEvent("onmouseover", MouseOveru647);
else u647.addEventListener("mouseover", MouseOveru647, true);
function MouseOveru647(e)
{
if (!IsTrueMouseOver('u647',e)) return;
if (true) {

	SetPanelStateu646("pd2u646");

	SetPanelStateu683("pd3u683");

}

}

var u648 = document.getElementById('u648');
gv_vAlignTable['u648'] = 'center';
var u649 = document.getElementById('u649');

var u1016 = document.getElementById('u1016');

var u1017 = document.getElementById('u1017');
gv_vAlignTable['u1017'] = 'center';
var u1018 = document.getElementById('u1018');
gv_vAlignTable['u1018'] = 'top';
var u910 = document.getElementById('u910');
gv_vAlignTable['u910'] = 'top';
var u911 = document.getElementById('u911');

var u912 = document.getElementById('u912');
gv_vAlignTable['u912'] = 'center';
var u913 = document.getElementById('u913');

var u914 = document.getElementById('u914');
gv_vAlignTable['u914'] = 'top';
var u380 = document.getElementById('u380');

var u916 = document.getElementById('u916');
gv_vAlignTable['u916'] = 'center';
var u917 = document.getElementById('u917');
gv_vAlignTable['u917'] = 'top';
var u918 = document.getElementById('u918');

var u919 = document.getElementById('u919');
gv_vAlignTable['u919'] = 'top';
var u385 = document.getElementById('u385');
gv_vAlignTable['u385'] = 'top';
var u386 = document.getElementById('u386');

var u387 = document.getElementById('u387');
gv_vAlignTable['u387'] = 'top';
var u388 = document.getElementById('u388');

var u389 = document.getElementById('u389');
gv_vAlignTable['u389'] = 'top';
var u650 = document.getElementById('u650');
gv_vAlignTable['u650'] = 'center';
var u651 = document.getElementById('u651');

u651.style.cursor = 'pointer';
if (bIE) u651.attachEvent("onclick", Clicku651);
else u651.addEventListener("click", Clicku651, true);
function Clicku651(e)
{

if (true) {

	SetPanelStateu646("pd1u646");

	SetPanelStateu513("pd1u513");

	SetPanelStateu639("pd0u639");

	SetPanelStateu653("pd0u653");

	SetPanelStateu660("pd0u660");

	SetPanelStateu683("pd3u683");

	SetPanelVisibilityu624("");

	MoveWidgetTo('u668',10,165);

}

}

if (bIE) u651.attachEvent("onmouseout", MouseOutu651);
else u651.addEventListener("mouseout", MouseOutu651, true);
function MouseOutu651(e)
{
if (!IsTrueMouseOut('u651',e)) return;
if (true) {

	SetPanelStateu683("pd0u683");

	SetPanelStateu646("pd0u646");

}

}

var u652 = document.getElementById('u652');
gv_vAlignTable['u652'] = 'center';
var u653 = document.getElementById('u653');

var u654 = document.getElementById('u654');

if (bIE) u654.attachEvent("onmouseover", MouseOveru654);
else u654.addEventListener("mouseover", MouseOveru654, true);
function MouseOveru654(e)
{
if (!IsTrueMouseOver('u654',e)) return;
if (true) {

	SetPanelStateu653("pd2u653");

	SetPanelStateu683("pd4u683");

}

}

var u655 = document.getElementById('u655');
gv_vAlignTable['u655'] = 'center';
var u656 = document.getElementById('u656');

var u657 = document.getElementById('u657');
gv_vAlignTable['u657'] = 'center';
var u658 = document.getElementById('u658');

u658.style.cursor = 'pointer';
if (bIE) u658.attachEvent("onclick", Clicku658);
else u658.addEventListener("click", Clicku658, true);
function Clicku658(e)
{

if (true) {

	SetPanelStateu653("pd1u653");

	SetPanelStateu513("pd1u513");

	SetPanelStateu639("pd0u639");

	SetPanelStateu660("pd0u660");

	SetPanelStateu646("pd0u646");

	SetPanelStateu683("pd4u683");

	SetPanelStateu668("pd0u668");

	SetPanelVisibilityu624("");

	MoveWidgetTo('u668',10,165);

}

}

if (bIE) u658.attachEvent("onmouseout", MouseOutu658);
else u658.addEventListener("mouseout", MouseOutu658, true);
function MouseOutu658(e)
{
if (!IsTrueMouseOut('u658',e)) return;
if (true) {

	SetPanelStateu683("pd0u683");

	SetPanelStateu653("pd0u653");

}

}

var u659 = document.getElementById('u659');
gv_vAlignTable['u659'] = 'center';
var u1023 = document.getElementById('u1023');
gv_vAlignTable['u1023'] = 'center';
var u1024 = document.getElementById('u1024');

u1024.style.cursor = 'pointer';
if (bIE) u1024.attachEvent("onclick", Clicku1024);
else u1024.addEventListener("click", Clicku1024, true);
function Clicku1024(e)
{

if (true) {

	SetPanelStateu3("pd1u3");

	BringToFront("u0");

	SetPanelVisibilityu0("");

}

}

var u1025 = document.getElementById('u1025');
gv_vAlignTable['u1025'] = 'center';
var u920 = document.getElementById('u920');
gv_vAlignTable['u920'] = 'top';
var u921 = document.getElementById('u921');
gv_vAlignTable['u921'] = 'top';
var u922 = document.getElementById('u922');

var u923 = document.getElementById('u923');
gv_vAlignTable['u923'] = 'top';
var u924 = document.getElementById('u924');
gv_vAlignTable['u924'] = 'top';
var u390 = document.getElementById('u390');

var u391 = document.getElementById('u391');

var u392 = document.getElementById('u392');

var u393 = document.getElementById('u393');

var u394 = document.getElementById('u394');

var u395 = document.getElementById('u395');

var u396 = document.getElementById('u396');

var u397 = document.getElementById('u397');

var u398 = document.getElementById('u398');

var u399 = document.getElementById('u399');

var u660 = document.getElementById('u660');

var u661 = document.getElementById('u661');

if (bIE) u661.attachEvent("onmouseover", MouseOveru661);
else u661.addEventListener("mouseover", MouseOveru661, true);
function MouseOveru661(e)
{
if (!IsTrueMouseOver('u661',e)) return;
if (true) {

	SetPanelStateu660("pd2u660");

	SetPanelStateu683("pd5u683");

}

}

var u662 = document.getElementById('u662');
gv_vAlignTable['u662'] = 'center';
var u663 = document.getElementById('u663');

var u664 = document.getElementById('u664');
gv_vAlignTable['u664'] = 'center';
var u665 = document.getElementById('u665');

u665.style.cursor = 'pointer';
if (bIE) u665.attachEvent("onclick", Clicku665);
else u665.addEventListener("click", Clicku665, true);
function Clicku665(e)
{

if (true) {

	SetPanelStateu660("pd1u660");

	SetPanelStateu513("pd1u513");

	SetPanelStateu639("pd0u639");

	SetPanelStateu646("pd0u646");

	SetPanelStateu653("pd0u653");

	SetPanelStateu683("pd5u683");

	SetPanelVisibilityu624("");

	MoveWidgetTo('u668',10,165);

}

}

if (bIE) u665.attachEvent("onmouseout", MouseOutu665);
else u665.addEventListener("mouseout", MouseOutu665, true);
function MouseOutu665(e)
{
if (!IsTrueMouseOut('u665',e)) return;
if (true) {

	SetPanelStateu683("pd0u683");

	SetPanelStateu660("pd0u660");

}

}

var u666 = document.getElementById('u666');
gv_vAlignTable['u666'] = 'center';
var u667 = document.getElementById('u667');
gv_vAlignTable['u667'] = 'top';
var u668 = document.getElementById('u668');

var u669 = document.getElementById('u669');
gv_vAlignTable['u669'] = 'top';
var u1032 = document.getElementById('u1032');

var u1033 = document.getElementById('u1033');
gv_vAlignTable['u1033'] = 'center';
var u1034 = document.getElementById('u1034');

var u930 = document.getElementById('u930');

u930.style.cursor = 'pointer';
if (bIE) u930.attachEvent("onclick", Clicku930);
else u930.addEventListener("click", Clicku930, true);
function Clicku930(e)
{

if (true) {

	SetPanelStateu927("pd1u927");

}

}
gv_vAlignTable['u930'] = 'top';
var u931 = document.getElementById('u931');
gv_vAlignTable['u931'] = 'top';
var u932 = document.getElementById('u932');
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

	SetPanelStateu927("pd0u927");

}

}

var u936 = document.getElementById('u936');
gv_vAlignTable['u936'] = 'center';
var u937 = document.getElementById('u937');
gv_vAlignTable['u937'] = 'top';
var u938 = document.getElementById('u938');

var u939 = document.getElementById('u939');
gv_vAlignTable['u939'] = 'center';
var u670 = document.getElementById('u670');

var u671 = document.getElementById('u671');
gv_vAlignTable['u671'] = 'center';
var u672 = document.getElementById('u672');

u672.style.cursor = 'pointer';
if (bIE) u672.attachEvent("onclick", Clicku672);
else u672.addEventListener("click", Clicku672, true);
function Clicku672(e)
{

if (true) {

	BringToFront("u892");

	SetPanelVisibilityu0("hidden");

	SetPanelVisibilityu892("");

	SetPanelStateu953("pd1u953");

	SetPanelStateu683("pd1u683");

	MoveWidgetTo('u1031',11,300);

}

}

var u673 = document.getElementById('u673');
gv_vAlignTable['u673'] = 'center';
var u674 = document.getElementById('u674');

u674.style.cursor = 'pointer';
if (bIE) u674.attachEvent("onclick", Clicku674);
else u674.addEventListener("click", Clicku674, true);
function Clicku674(e)
{

if (true) {

	SetPanelVisibilityu3("hidden");

	SetPanelVisibilityu892("");

	BringToFront("u892");

}

}

var u675 = document.getElementById('u675');
gv_vAlignTable['u675'] = 'center';
var u676 = document.getElementById('u676');

var u677 = document.getElementById('u677');
gv_vAlignTable['u677'] = 'top';
var u678 = document.getElementById('u678');

u678.style.cursor = 'pointer';
if (bIE) u678.attachEvent("onclick", Clicku678);
else u678.addEventListener("click", Clicku678, true);
function Clicku678(e)
{

if (true) {

	SetPanelVisibilityu522("");

	SetPanelStateu513("pd2u513");

	SetPanelStateu683("pd1u683");

	SetPanelStateu668("pd1u668");

	MoveWidgetTo('u668',1,32);

	SetPanelVisibilityu624("hidden");

	SetPanelVisibilityu639("hidden");

	SetPanelVisibilityu646("hidden");

	SetPanelVisibilityu660("hidden");

SetWidgetRichText('u667', PopulateVariables('<span style=" font-family:\'Calibri\'; color:#363636; font-size:13px;">Selected size:</span>'));

	BringToFront("u522");

}

}

var u679 = document.getElementById('u679');

var u1046 = document.getElementById('u1046');

var u1040 = document.getElementById('u1040');
gv_vAlignTable['u1040'] = 'top';
var u1041 = document.getElementById('u1041');
gv_vAlignTable['u1041'] = 'top';
var u940 = document.getElementById('u940');

var u941 = document.getElementById('u941');

var u942 = document.getElementById('u942');
gv_vAlignTable['u942'] = 'center';
var u943 = document.getElementById('u943');
gv_vAlignTable['u943'] = 'top';
var u944 = document.getElementById('u944');
gv_vAlignTable['u944'] = 'top';
var u945 = document.getElementById('u945');

var u946 = document.getElementById('u946');
gv_vAlignTable['u946'] = 'center';
var u947 = document.getElementById('u947');

var u948 = document.getElementById('u948');
gv_vAlignTable['u948'] = 'center';
var u949 = document.getElementById('u949');
gv_vAlignTable['u949'] = 'top';
var u680 = document.getElementById('u680');

var u681 = document.getElementById('u681');
gv_vAlignTable['u681'] = 'top';
var u682 = document.getElementById('u682');
gv_vAlignTable['u682'] = 'top';
var u683 = document.getElementById('u683');

var u684 = document.getElementById('u684');
gv_vAlignTable['u684'] = 'top';
var u685 = document.getElementById('u685');

u685.style.cursor = 'pointer';
if (bIE) u685.attachEvent("onclick", Clicku685);
else u685.addEventListener("click", Clicku685, true);
function Clicku685(e)
{

if (true) {

	SetPanelVisibilityu522("hidden");

	BringToFront("u623");

	SetPanelStateu623("pd0u623");

	SetPanelStateu683("pd0u683");

	SetPanelStateu668("pd0u668");

	SetPanelStateu679("pd0u679");

	MoveWidgetTo('u668',10,165);

	SetPanelVisibilityu624("");

}

}
gv_vAlignTable['u685'] = 'top';
var u686 = document.getElementById('u686');

var u687 = document.getElementById('u687');
gv_vAlignTable['u687'] = 'center';
var u688 = document.getElementById('u688');
gv_vAlignTable['u688'] = 'top';
var u689 = document.getElementById('u689');
gv_vAlignTable['u689'] = 'top';
var u1056 = document.getElementById('u1056');

var u1057 = document.getElementById('u1057');
gv_vAlignTable['u1057'] = 'center';
var u1058 = document.getElementById('u1058');

var u950 = document.getElementById('u950');
gv_vAlignTable['u950'] = 'top';
var u951 = document.getElementById('u951');

u951.style.cursor = 'pointer';
if (bIE) u951.attachEvent("onclick", Clicku951);
else u951.addEventListener("click", Clicku951, true);
function Clicku951(e)
{

if (true) {

	SetPanelVisibilityu940("");

	MoveWidgetTo('u906',8,333);

}

}
gv_vAlignTable['u951'] = 'top';
var u952 = document.getElementById('u952');

u952.style.cursor = 'pointer';
if (bIE) u952.attachEvent("onclick", Clicku952);
else u952.addEventListener("click", Clicku952, true);
function Clicku952(e)
{

if (true) {

	SetPanelVisibilityu940("hidden");

	MoveWidgetTo('u906',8,223);

}

}
gv_vAlignTable['u952'] = 'top';
var u953 = document.getElementById('u953');

var u954 = document.getElementById('u954');

var u955 = document.getElementById('u955');
gv_vAlignTable['u955'] = 'center';
var u956 = document.getElementById('u956');
gv_vAlignTable['u956'] = 'top';
var u957 = document.getElementById('u957');

u957.style.cursor = 'pointer';
if (bIE) u957.attachEvent("onclick", Clicku957);
else u957.addEventListener("click", Clicku957, true);
function Clicku957(e)
{

if (true) {

	BringToFront("u0");

	SetPanelStateu3("pd1u3");

	SetPanelVisibilityu0("");

}

}

var u958 = document.getElementById('u958');
gv_vAlignTable['u958'] = 'center';
var u959 = document.getElementById('u959');

var u1100 = document.getElementById('u1100');

var u1104 = document.getElementById('u1104');

var u690 = document.getElementById('u690');
gv_vAlignTable['u690'] = 'top';
var u691 = document.getElementById('u691');
gv_vAlignTable['u691'] = 'top';
var u692 = document.getElementById('u692');
gv_vAlignTable['u692'] = 'top';
var u693 = document.getElementById('u693');
gv_vAlignTable['u693'] = 'top';
var u694 = document.getElementById('u694');

var u695 = document.getElementById('u695');
gv_vAlignTable['u695'] = 'center';
var u696 = document.getElementById('u696');
gv_vAlignTable['u696'] = 'top';
var u697 = document.getElementById('u697');
gv_vAlignTable['u697'] = 'top';
var u698 = document.getElementById('u698');
gv_vAlignTable['u698'] = 'top';
var u699 = document.getElementById('u699');
gv_vAlignTable['u699'] = 'top';
var u1066 = document.getElementById('u1066');

var u1067 = document.getElementById('u1067');
gv_vAlignTable['u1067'] = 'top';
var u1068 = document.getElementById('u1068');
gv_vAlignTable['u1068'] = 'top';
var u960 = document.getElementById('u960');
gv_vAlignTable['u960'] = 'top';
var u961 = document.getElementById('u961');

var u962 = document.getElementById('u962');
gv_vAlignTable['u962'] = 'center';
var u963 = document.getElementById('u963');
gv_vAlignTable['u963'] = 'top';
var u964 = document.getElementById('u964');
gv_vAlignTable['u964'] = 'top';
var u965 = document.getElementById('u965');
gv_vAlignTable['u965'] = 'top';
var u966 = document.getElementById('u966');
gv_vAlignTable['u966'] = 'top';
var u967 = document.getElementById('u967');
gv_vAlignTable['u967'] = 'top';
var u968 = document.getElementById('u968');
gv_vAlignTable['u968'] = 'top';
var u969 = document.getElementById('u969');

var u1070 = document.getElementById('u1070');

var u1071 = document.getElementById('u1071');
gv_vAlignTable['u1071'] = 'center';
var u1072 = document.getElementById('u1072');

var u1073 = document.getElementById('u1073');
gv_vAlignTable['u1073'] = 'top';
var u1074 = document.getElementById('u1074');
gv_vAlignTable['u1074'] = 'top';
var u1075 = document.getElementById('u1075');
gv_vAlignTable['u1075'] = 'top';
var u1076 = document.getElementById('u1076');

var u1077 = document.getElementById('u1077');
gv_vAlignTable['u1077'] = 'top';
var u1078 = document.getElementById('u1078');
gv_vAlignTable['u1078'] = 'top';
var u970 = document.getElementById('u970');
gv_vAlignTable['u970'] = 'center';
var u971 = document.getElementById('u971');
gv_vAlignTable['u971'] = 'top';
var u972 = document.getElementById('u972');
gv_vAlignTable['u972'] = 'top';
var u973 = document.getElementById('u973');

var u974 = document.getElementById('u974');
gv_vAlignTable['u974'] = 'center';
var u975 = document.getElementById('u975');

var u976 = document.getElementById('u976');

var u977 = document.getElementById('u977');
gv_vAlignTable['u977'] = 'center';
var u978 = document.getElementById('u978');

var u979 = document.getElementById('u979');
gv_vAlignTable['u979'] = 'center';
var u1080 = document.getElementById('u1080');

var u1081 = document.getElementById('u1081');
gv_vAlignTable['u1081'] = 'center';
var u1082 = document.getElementById('u1082');

var u1083 = document.getElementById('u1083');
gv_vAlignTable['u1083'] = 'center';
var u1084 = document.getElementById('u1084');

var u1085 = document.getElementById('u1085');
gv_vAlignTable['u1085'] = 'top';
var u1086 = document.getElementById('u1086');
gv_vAlignTable['u1086'] = 'top';
var u1087 = document.getElementById('u1087');
gv_vAlignTable['u1087'] = 'top';
var u1088 = document.getElementById('u1088');

var u980 = document.getElementById('u980');
gv_vAlignTable['u980'] = 'top';
var u981 = document.getElementById('u981');
gv_vAlignTable['u981'] = 'top';
var u982 = document.getElementById('u982');

u982.style.cursor = 'pointer';
if (bIE) u982.attachEvent("onclick", Clicku982);
else u982.addEventListener("click", Clicku982, true);
function Clicku982(e)
{

if (true) {

SetWidgetRichText('u991', PopulateVariables('<span style=" font-family:\'Calibri\'; color:#5E5E5E; font-size:12px;">Sizes:&nbsp; 1 - L<br>Total:&nbsp; 1@ $12.00 each&nbsp;&nbsp; </span>'));

}

}
gv_vAlignTable['u982'] = 'top';
var u983 = document.getElementById('u983');
gv_vAlignTable['u983'] = 'top';
var u984 = document.getElementById('u984');

var u985 = document.getElementById('u985');
gv_vAlignTable['u985'] = 'center';
var u986 = document.getElementById('u986');
gv_vAlignTable['u986'] = 'top';
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
gv_vAlignTable['u1095'] = 'top';
var u1096 = document.getElementById('u1096');
gv_vAlignTable['u1096'] = 'top';
var u1097 = document.getElementById('u1097');
gv_vAlignTable['u1097'] = 'top';
var u1098 = document.getElementById('u1098');

var u990 = document.getElementById('u990');
gv_vAlignTable['u990'] = 'top';
var u991 = document.getElementById('u991');
gv_vAlignTable['u991'] = 'top';
var u992 = document.getElementById('u992');

u992.style.cursor = 'pointer';
if (bIE) u992.attachEvent("onclick", Clicku992);
else u992.addEventListener("click", Clicku992, true);
function Clicku992(e)
{

if (true) {

SetWidgetRichText('u991', PopulateVariables('<span style=" font-family:\'Calibri\'; color:#5E5E5E; font-size:12px;">Sizes:&nbsp; 1-L<br>Total:&nbsp; 1 @ $12.00 each&nbsp;&nbsp; 1 Name, 1 Number</span>'));

}

}
gv_vAlignTable['u992'] = 'top';
var u993 = document.getElementById('u993');

u993.style.cursor = 'pointer';
if (bIE) u993.attachEvent("onclick", Clicku993);
else u993.addEventListener("click", Clicku993, true);
function Clicku993(e)
{

if (true) {

SetWidgetRichText('u991', PopulateVariables('<span style=" font-family:\'Calibri\'; color:#5E5E5E; font-size:12px;">Sizes:&nbsp; 1-YXS, 1-S, 3-M, 3-L, 1-XL, 1-2XL<br>Total:&nbsp; 10 @ $12.00 each&nbsp;&nbsp; </span>'));

}

}
gv_vAlignTable['u993'] = 'top';
var u994 = document.getElementById('u994');

u994.style.cursor = 'pointer';
if (bIE) u994.attachEvent("onclick", Clicku994);
else u994.addEventListener("click", Clicku994, true);
function Clicku994(e)
{

if (true) {

SetWidgetRichText('u991', PopulateVariables('<span style=" font-family:\'Calibri\'; color:#5E5E5E; font-size:12px;">Sizes:&nbsp; 1-YXS, 1-S, 3-M, 3-L, 1-XL, 1-2XL<br>Total:&nbsp; 10 @ $12.00 each&nbsp;&nbsp; 8 Names, 6 Numbers</span>'));

}

}
gv_vAlignTable['u994'] = 'top';
var u995 = document.getElementById('u995');

u995.style.cursor = 'pointer';
if (bIE) u995.attachEvent("onclick", Clicku995);
else u995.addEventListener("click", Clicku995, true);
function Clicku995(e)
{

if (true) {

	BringToFront("u0");

	SetPanelStateu3("pd0u3");

	SetPanelVisibilityu0("");

}

}

var u996 = document.getElementById('u996');
gv_vAlignTable['u996'] = 'center';
var u997 = document.getElementById('u997');
gv_vAlignTable['u997'] = 'top';
var u998 = document.getElementById('u998');

var u999 = document.getElementById('u999');
gv_vAlignTable['u999'] = 'center';
var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'top';
var u183 = document.getElementById('u183');

var u1178 = document.getElementById('u1178');
gv_vAlignTable['u1178'] = 'top';
var u1179 = document.getElementById('u1179');
gv_vAlignTable['u1179'] = 'top';
var u1189 = document.getElementById('u1189');
gv_vAlignTable['u1189'] = 'top';
var u1223 = document.getElementById('u1223');
gv_vAlignTable['u1223'] = 'top';
var u706 = document.getElementById('u706');
gv_vAlignTable['u706'] = 'top';
var u707 = document.getElementById('u707');
gv_vAlignTable['u707'] = 'top';
var u715 = document.getElementById('u715');
gv_vAlignTable['u715'] = 'top';
var u716 = document.getElementById('u716');
gv_vAlignTable['u716'] = 'top';
var u719 = document.getElementById('u719');
gv_vAlignTable['u719'] = 'center';
var u725 = document.getElementById('u725');

var u726 = document.getElementById('u726');
gv_vAlignTable['u726'] = 'center';
var u727 = document.getElementById('u727');

var u728 = document.getElementById('u728');
gv_vAlignTable['u728'] = 'center';
var u729 = document.getElementById('u729');

u729.style.cursor = 'pointer';
if (bIE) u729.attachEvent("onclick", Clicku729);
else u729.addEventListener("click", Clicku729, true);
function Clicku729(e)
{

if (true) {

	SetPanelVisibilityu0("hidden");

	SetPanelVisibilityu892("");

	BringToFront("u892");

}

}
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
gv_vAlignTable['u107'] = 'center';
var u108 = document.getElementById('u108');

var u109 = document.getElementById('u109');

var u110 = document.getElementById('u110');

var u111 = document.getElementById('u111');

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'center';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'top';
var u114 = document.getElementById('u114');

var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'center';
var u116 = document.getElementById('u116');

var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
var u118 = document.getElementById('u118');

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'top';
var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'top';
var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'top';
var u123 = document.getElementById('u123');

u123.style.cursor = 'pointer';
if (bIE) u123.attachEvent("onclick", Clicku123);
else u123.addEventListener("click", Clicku123, true);
function Clicku123(e)
{

if ((GetGlobalVariableValue('$NameNum')) == (PopulateVariables('yes'))) {

	SetPanelStateu41("pd1u41");

	SetPanelStateu275("pd1u275");

	MoveWidgetTo('u496',28,460);

}
else
if (true) {

	SetPanelStateu41("pd1u41");

	SetPanelStateu275("pd0u275");

	MoveWidgetTo('u496',28,460);

}

}
gv_vAlignTable['u123'] = 'top';
var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'top';
var u125 = document.getElementById('u125');

var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'top';
var u127 = document.getElementById('u127');

var u128 = document.getElementById('u128');

var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'center';
var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'top';
var u131 = document.getElementById('u131');

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'center';
var u133 = document.getElementById('u133');

var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'center';
var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'top';
var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'top';
var u137 = document.getElementById('u137');

var u138 = document.getElementById('u138');

var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'top';
var u400 = document.getElementById('u400');

var u401 = document.getElementById('u401');

var u402 = document.getElementById('u402');

var u403 = document.getElementById('u403');

var u404 = document.getElementById('u404');

var u405 = document.getElementById('u405');

var u406 = document.getElementById('u406');

var u407 = document.getElementById('u407');

var u408 = document.getElementById('u408');

var u409 = document.getElementById('u409');

var u140 = document.getElementById('u140');

var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'top';
var u142 = document.getElementById('u142');

var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'top';
var u144 = document.getElementById('u144');

var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'top';
var u146 = document.getElementById('u146');

var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'top';
var u148 = document.getElementById('u148');

var u149 = document.getElementById('u149');
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
gv_vAlignTable['u151'] = 'top';
var u152 = document.getElementById('u152');

var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'top';
var u154 = document.getElementById('u154');

var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'top';
var u156 = document.getElementById('u156');

var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'top';
var u158 = document.getElementById('u158');

var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'top';
var u420 = document.getElementById('u420');
gv_vAlignTable['u420'] = 'top';
var u421 = document.getElementById('u421');

if (bIE) u421.attachEvent("onmouseover", MouseOveru421);
else u421.addEventListener("mouseover", MouseOveru421, true);
function MouseOveru421(e)
{
if (!IsTrueMouseOver('u421',e)) return;
if (true) {

	SetPanelVisibilityu423("");

}

}

if (bIE) u421.attachEvent("onmouseout", MouseOutu421);
else u421.addEventListener("mouseout", MouseOutu421, true);
function MouseOutu421(e)
{
if (!IsTrueMouseOut('u421',e)) return;
if (true) {

	SetPanelVisibilityu423("hidden");

}

}

var u422 = document.getElementById('u422');
gv_vAlignTable['u422'] = 'center';
var u423 = document.getElementById('u423');

var u424 = document.getElementById('u424');

var u425 = document.getElementById('u425');
gv_vAlignTable['u425'] = 'top';
var u426 = document.getElementById('u426');

if (bIE) u426.attachEvent("onmouseover", MouseOveru426);
else u426.addEventListener("mouseover", MouseOveru426, true);
function MouseOveru426(e)
{
if (!IsTrueMouseOver('u426',e)) return;
if (true) {

	SetPanelVisibilityu428("");

}

}

if (bIE) u426.attachEvent("onmouseout", MouseOutu426);
else u426.addEventListener("mouseout", MouseOutu426, true);
function MouseOutu426(e)
{
if (!IsTrueMouseOut('u426',e)) return;
if (true) {

	SetPanelVisibilityu428("hidden");

}

}

var u427 = document.getElementById('u427');
gv_vAlignTable['u427'] = 'center';
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
gv_vAlignTable['u430'] = 'top';
var u431 = document.getElementById('u431');

if (bIE) u431.attachEvent("onmouseover", MouseOveru431);
else u431.addEventListener("mouseover", MouseOveru431, true);
function MouseOveru431(e)
{
if (!IsTrueMouseOver('u431',e)) return;
if (true) {

	SetPanelVisibilityu433("");

}

}

if (bIE) u431.attachEvent("onmouseout", MouseOutu431);
else u431.addEventListener("mouseout", MouseOutu431, true);
function MouseOutu431(e)
{
if (!IsTrueMouseOut('u431',e)) return;
if (true) {

	SetPanelVisibilityu433("hidden");

}

}

var u432 = document.getElementById('u432');
gv_vAlignTable['u432'] = 'center';
var u433 = document.getElementById('u433');

var u434 = document.getElementById('u434');

var u435 = document.getElementById('u435');
gv_vAlignTable['u435'] = 'top';
var u436 = document.getElementById('u436');

if (bIE) u436.attachEvent("onmouseover", MouseOveru436);
else u436.addEventListener("mouseover", MouseOveru436, true);
function MouseOveru436(e)
{
if (!IsTrueMouseOver('u436',e)) return;
if (true) {

	SetPanelVisibilityu438("");

}

}

if (bIE) u436.attachEvent("onmouseout", MouseOutu436);
else u436.addEventListener("mouseout", MouseOutu436, true);
function MouseOutu436(e)
{
if (!IsTrueMouseOut('u436',e)) return;
if (true) {

	SetPanelVisibilityu438("hidden");

}

}

var u437 = document.getElementById('u437');
gv_vAlignTable['u437'] = 'center';
var u438 = document.getElementById('u438');

var u439 = document.getElementById('u439');

var u700 = document.getElementById('u700');
gv_vAlignTable['u700'] = 'top';
var u701 = document.getElementById('u701');
gv_vAlignTable['u701'] = 'top';
var u702 = document.getElementById('u702');

var u703 = document.getElementById('u703');
gv_vAlignTable['u703'] = 'center';
var u704 = document.getElementById('u704');
gv_vAlignTable['u704'] = 'top';
var u705 = document.getElementById('u705');
gv_vAlignTable['u705'] = 'top';
var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'top';
var u172 = document.getElementById('u172');

var u708 = document.getElementById('u708');
gv_vAlignTable['u708'] = 'top';
var u709 = document.getElementById('u709');
gv_vAlignTable['u709'] = 'top';
var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'top';
var u176 = document.getElementById('u176');

var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'top';
var u178 = document.getElementById('u178');

var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'center';
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

var u711 = document.getElementById('u711');
gv_vAlignTable['u711'] = 'center';
var u712 = document.getElementById('u712');
gv_vAlignTable['u712'] = 'top';
var u713 = document.getElementById('u713');
gv_vAlignTable['u713'] = 'top';
var u714 = document.getElementById('u714');
gv_vAlignTable['u714'] = 'top';
var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'top';
var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'top';
var u717 = document.getElementById('u717');
gv_vAlignTable['u717'] = 'top';
var u718 = document.getElementById('u718');

var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'center';
var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'top';
var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'top';
var u187 = document.getElementById('u187');

var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'center';
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

u1004.style.cursor = 'pointer';
if (bIE) u1004.attachEvent("onclick", Clicku1004);
else u1004.addEventListener("click", Clicku1004, true);
function Clicku1004(e)
{

if (true) {

	SetPanelStateu3("pd1u3");

	BringToFront("u0");

	SetPanelVisibilityu0("");

}

}

var u1000 = document.getElementById('u1000');

var u1001 = document.getElementById('u1001');
gv_vAlignTable['u1001'] = 'top';
var u720 = document.getElementById('u720');

var u721 = document.getElementById('u721');
gv_vAlignTable['u721'] = 'center';
var u722 = document.getElementById('u722');

u722.style.cursor = 'pointer';
if (bIE) u722.attachEvent("onclick", Clicku722);
else u722.addEventListener("click", Clicku722, true);
function Clicku722(e)
{

if (true) {

	SetPanelVisibilityu0("hidden");

	SetPanelVisibilityu892("");

	BringToFront("u892");

}

}
gv_vAlignTable['u722'] = 'top';
var u723 = document.getElementById('u723');

var u724 = document.getElementById('u724');
gv_vAlignTable['u724'] = 'center';
var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'top';
var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'top';
var u192 = document.getElementById('u192');

var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'center';
var u194 = document.getElementById('u194');

var u195 = document.getElementById('u195');

var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'top';
var u197 = document.getElementById('u197');

var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'top';
var u199 = document.getElementById('u199');

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

var u1011 = document.getElementById('u1011');
gv_vAlignTable['u1011'] = 'top';
var u1010 = document.getElementById('u1010');
gv_vAlignTable['u1010'] = 'top';
var u730 = document.getElementById('u730');
gv_vAlignTable['u730'] = 'top';
var u731 = document.getElementById('u731');

var u732 = document.getElementById('u732');
gv_vAlignTable['u732'] = 'center';
var u733 = document.getElementById('u733');
gv_vAlignTable['u733'] = 'top';
var u734 = document.getElementById('u734');

u734.style.cursor = 'pointer';
if (bIE) u734.attachEvent("onclick", Clicku734);
else u734.addEventListener("click", Clicku734, true);
function Clicku734(e)
{

if (true) {

	SetPanelStateu3("pd0u3");

}

}

var u735 = document.getElementById('u735');
gv_vAlignTable['u735'] = 'center';
var u736 = document.getElementById('u736');

var u737 = document.getElementById('u737');
gv_vAlignTable['u737'] = 'center';
var u738 = document.getElementById('u738');

u738.style.cursor = 'pointer';
if (bIE) u738.attachEvent("onclick", Clicku738);
else u738.addEventListener("click", Clicku738, true);
function Clicku738(e)
{

if (true) {

	SetPanelVisibilityu0("hidden");

	SetPanelVisibilityu892("");

	BringToFront("u892");

}

}
gv_vAlignTable['u738'] = 'top';
var u739 = document.getElementById('u739');

var u1106 = document.getElementById('u1106');
gv_vAlignTable['u1106'] = 'top';
var u1107 = document.getElementById('u1107');
gv_vAlignTable['u1107'] = 'top';
var u1108 = document.getElementById('u1108');

var u1109 = document.getElementById('u1109');
gv_vAlignTable['u1109'] = 'center';
var u470 = document.getElementById('u470');
gv_vAlignTable['u470'] = 'top';
var u471 = document.getElementById('u471');

var u472 = document.getElementById('u472');
gv_vAlignTable['u472'] = 'center';
var u473 = document.getElementById('u473');
gv_vAlignTable['u473'] = 'top';
var u474 = document.getElementById('u474');

var u475 = document.getElementById('u475');
gv_vAlignTable['u475'] = 'top';
var u476 = document.getElementById('u476');

var u477 = document.getElementById('u477');
gv_vAlignTable['u477'] = 'top';
var u478 = document.getElementById('u478');

var u479 = document.getElementById('u479');
gv_vAlignTable['u479'] = 'center';
var u740 = document.getElementById('u740');
gv_vAlignTable['u740'] = 'center';
var u741 = document.getElementById('u741');
gv_vAlignTable['u741'] = 'top';
var u742 = document.getElementById('u742');

var u743 = document.getElementById('u743');
gv_vAlignTable['u743'] = 'center';
var u744 = document.getElementById('u744');

var u745 = document.getElementById('u745');
gv_vAlignTable['u745'] = 'center';
var u746 = document.getElementById('u746');

var u747 = document.getElementById('u747');
gv_vAlignTable['u747'] = 'center';
var u748 = document.getElementById('u748');

var u749 = document.getElementById('u749');
gv_vAlignTable['u749'] = 'center';
var u1026 = document.getElementById('u1026');
gv_vAlignTable['u1026'] = 'top';
var u1027 = document.getElementById('u1027');

var u1028 = document.getElementById('u1028');
gv_vAlignTable['u1028'] = 'center';
var u1029 = document.getElementById('u1029');
gv_vAlignTable['u1029'] = 'top';
var u480 = document.getElementById('u480');

var u481 = document.getElementById('u481');
gv_vAlignTable['u481'] = 'center';
var u482 = document.getElementById('u482');
gv_vAlignTable['u482'] = 'top';
var u483 = document.getElementById('u483');
gv_vAlignTable['u483'] = 'top';
var u484 = document.getElementById('u484');
gv_vAlignTable['u484'] = 'top';
var u485 = document.getElementById('u485');

var u486 = document.getElementById('u486');
gv_vAlignTable['u486'] = 'top';
var u487 = document.getElementById('u487');

var u488 = document.getElementById('u488');

var u489 = document.getElementById('u489');
gv_vAlignTable['u489'] = 'center';
var u750 = document.getElementById('u750');

var u751 = document.getElementById('u751');
gv_vAlignTable['u751'] = 'center';
var u752 = document.getElementById('u752');

var u753 = document.getElementById('u753');
gv_vAlignTable['u753'] = 'center';
var u754 = document.getElementById('u754');

var u755 = document.getElementById('u755');
gv_vAlignTable['u755'] = 'center';
var u756 = document.getElementById('u756');

var u757 = document.getElementById('u757');
gv_vAlignTable['u757'] = 'center';
var u758 = document.getElementById('u758');
gv_vAlignTable['u758'] = 'top';
var u759 = document.getElementById('u759');
gv_vAlignTable['u759'] = 'top';
var u1035 = document.getElementById('u1035');
gv_vAlignTable['u1035'] = 'center';
var u1036 = document.getElementById('u1036');

u1036.style.cursor = 'pointer';
if (bIE) u1036.attachEvent("onclick", Clicku1036);
else u1036.addEventListener("click", Clicku1036, true);
function Clicku1036(e)
{

if (true) {

	SetPanelVisibilityu892("hidden");

	SetPanelVisibilityu0("");

	BringToFront("u0");

	SetPanelStateu3("pd5u3");

}

}

var u1037 = document.getElementById('u1037');

var u1038 = document.getElementById('u1038');
gv_vAlignTable['u1038'] = 'center';
var u1039 = document.getElementById('u1039');
gv_vAlignTable['u1039'] = 'top';
var u490 = document.getElementById('u490');
gv_vAlignTable['u490'] = 'top';
var u491 = document.getElementById('u491');

var u492 = document.getElementById('u492');
gv_vAlignTable['u492'] = 'center';
var u493 = document.getElementById('u493');

var u494 = document.getElementById('u494');
gv_vAlignTable['u494'] = 'center';
var u495 = document.getElementById('u495');
gv_vAlignTable['u495'] = 'top';
var u496 = document.getElementById('u496');

var u497 = document.getElementById('u497');

u497.style.cursor = 'pointer';
if (bIE) u497.attachEvent("onclick", Clicku497);
else u497.addEventListener("click", Clicku497, true);
function Clicku497(e)
{

if ((GetGlobalVariableValue('$NameNum')) == (PopulateVariables('no'))) {

	SetPanelStateu3("pd6u3");

	SetPanelStateu797("pd1u797");

	MoveWidgetTo('u875',28,200);

}
else
if ((GetGlobalVariableValue('$NameNum')) == (PopulateVariables('yes'))) {

	SetPanelStateu3("pd6u3");

	SetPanelStateu797("pd0u797");

	MoveWidgetTo('u875',28,470);

}

}

var u498 = document.getElementById('u498');
gv_vAlignTable['u498'] = 'center';
var u499 = document.getElementById('u499');

u499.style.cursor = 'pointer';
if (bIE) u499.attachEvent("onclick", Clicku499);
else u499.addEventListener("click", Clicku499, true);
function Clicku499(e)
{

if (true) {

	SetPanelVisibilityu3("hidden");

	SetPanelVisibilityu892("");

	BringToFront("u892");

}

}

var u1101 = document.getElementById('u1101');
gv_vAlignTable['u1101'] = 'top';
var u1102 = document.getElementById('u1102');
gv_vAlignTable['u1102'] = 'top';
var u1103 = document.getElementById('u1103');
gv_vAlignTable['u1103'] = 'top';
var u760 = document.getElementById('u760');
gv_vAlignTable['u760'] = 'top';
var u761 = document.getElementById('u761');
gv_vAlignTable['u761'] = 'top';
var u762 = document.getElementById('u762');
gv_vAlignTable['u762'] = 'top';
var u763 = document.getElementById('u763');

var u764 = document.getElementById('u764');
gv_vAlignTable['u764'] = 'center';
var u765 = document.getElementById('u765');

var u766 = document.getElementById('u766');
gv_vAlignTable['u766'] = 'center';
var u767 = document.getElementById('u767');
gv_vAlignTable['u767'] = 'top';
var u768 = document.getElementById('u768');
gv_vAlignTable['u768'] = 'top';
var u769 = document.getElementById('u769');
gv_vAlignTable['u769'] = 'top';
var u1048 = document.getElementById('u1048');

var u1042 = document.getElementById('u1042');
gv_vAlignTable['u1042'] = 'top';
var u1043 = document.getElementById('u1043');

u1043.style.cursor = 'pointer';
if (bIE) u1043.attachEvent("onclick", Clicku1043);
else u1043.addEventListener("click", Clicku1043, true);
function Clicku1043(e)
{

if (true) {

	BringToFront("u0");

	SetPanelStateu3("pd4u3");

}

}
gv_vAlignTable['u1043'] = 'top';
var u1044 = document.getElementById('u1044');

var u1045 = document.getElementById('u1045');

var u1047 = document.getElementById('u1047');
gv_vAlignTable['u1047'] = 'top';
var u1049 = document.getElementById('u1049');
gv_vAlignTable['u1049'] = 'top';
var u1110 = document.getElementById('u1110');

var u770 = document.getElementById('u770');
gv_vAlignTable['u770'] = 'top';
var u771 = document.getElementById('u771');
gv_vAlignTable['u771'] = 'top';
var u772 = document.getElementById('u772');
gv_vAlignTable['u772'] = 'top';
var u773 = document.getElementById('u773');

var u774 = document.getElementById('u774');
gv_vAlignTable['u774'] = 'center';
var u775 = document.getElementById('u775');
gv_vAlignTable['u775'] = 'top';
var u776 = document.getElementById('u776');
gv_vAlignTable['u776'] = 'top';
var u777 = document.getElementById('u777');
gv_vAlignTable['u777'] = 'top';
var u778 = document.getElementById('u778');
gv_vAlignTable['u778'] = 'top';
var u779 = document.getElementById('u779');
gv_vAlignTable['u779'] = 'top';
var u1146 = document.getElementById('u1146');

var u1147 = document.getElementById('u1147');
gv_vAlignTable['u1147'] = 'top';
var u1059 = document.getElementById('u1059');
gv_vAlignTable['u1059'] = 'center';
var u1050 = document.getElementById('u1050');
gv_vAlignTable['u1050'] = 'top';
var u1051 = document.getElementById('u1051');
gv_vAlignTable['u1051'] = 'top';
var u1052 = document.getElementById('u1052');

var u1053 = document.getElementById('u1053');
gv_vAlignTable['u1053'] = 'top';
var u1054 = document.getElementById('u1054');
gv_vAlignTable['u1054'] = 'top';
var u1055 = document.getElementById('u1055');
gv_vAlignTable['u1055'] = 'top';
var u780 = document.getElementById('u780');
gv_vAlignTable['u780'] = 'top';
var u781 = document.getElementById('u781');
gv_vAlignTable['u781'] = 'top';
var u782 = document.getElementById('u782');
gv_vAlignTable['u782'] = 'top';
var u783 = document.getElementById('u783');
gv_vAlignTable['u783'] = 'top';
var u784 = document.getElementById('u784');

var u785 = document.getElementById('u785');
gv_vAlignTable['u785'] = 'center';
var u786 = document.getElementById('u786');

var u787 = document.getElementById('u787');
gv_vAlignTable['u787'] = 'center';
var u788 = document.getElementById('u788');

u788.style.cursor = 'pointer';
if (bIE) u788.attachEvent("onclick", Clicku788);
else u788.addEventListener("click", Clicku788, true);
function Clicku788(e)
{

if (true) {

	SetPanelStateu3("pd0u3");

}

}

var u789 = document.getElementById('u789');
gv_vAlignTable['u789'] = 'center';
var u1128 = document.getElementById('u1128');
gv_vAlignTable['u1128'] = 'top';
var u1129 = document.getElementById('u1129');
gv_vAlignTable['u1129'] = 'top';
var u1158 = document.getElementById('u1158');
gv_vAlignTable['u1158'] = 'top';
var u1069 = document.getElementById('u1069');
gv_vAlignTable['u1069'] = 'top';
var u1060 = document.getElementById('u1060');

var u1061 = document.getElementById('u1061');
gv_vAlignTable['u1061'] = 'center';
var u1062 = document.getElementById('u1062');

var u1063 = document.getElementById('u1063');
gv_vAlignTable['u1063'] = 'top';
var u1064 = document.getElementById('u1064');
gv_vAlignTable['u1064'] = 'top';
var u1065 = document.getElementById('u1065');
gv_vAlignTable['u1065'] = 'top';
var u1105 = document.getElementById('u1105');
gv_vAlignTable['u1105'] = 'top';
var u790 = document.getElementById('u790');

var u791 = document.getElementById('u791');
gv_vAlignTable['u791'] = 'center';
var u792 = document.getElementById('u792');
gv_vAlignTable['u792'] = 'top';
var u793 = document.getElementById('u793');

var u794 = document.getElementById('u794');

var u795 = document.getElementById('u795');
gv_vAlignTable['u795'] = 'top';
var u796 = document.getElementById('u796');

u796.style.cursor = 'pointer';
if (bIE) u796.attachEvent("onclick", Clicku796);
else u796.addEventListener("click", Clicku796, true);
function Clicku796(e)
{

if (true) {

	SetPanelStateu793("pd0u793");

}

}
gv_vAlignTable['u796'] = 'top';
var u797 = document.getElementById('u797');

var u798 = document.getElementById('u798');

var u799 = document.getElementById('u799');

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
gv_vAlignTable['u1171'] = 'top';
var u1172 = document.getElementById('u1172');
gv_vAlignTable['u1172'] = 'top';
var u1173 = document.getElementById('u1173');
gv_vAlignTable['u1173'] = 'top';
var u1140 = document.getElementById('u1140');

var u1141 = document.getElementById('u1141');
gv_vAlignTable['u1141'] = 'center';
var u1142 = document.getElementById('u1142');

var u1143 = document.getElementById('u1143');
gv_vAlignTable['u1143'] = 'center';
var u1144 = document.getElementById('u1144');

var u1145 = document.getElementById('u1145');
gv_vAlignTable['u1145'] = 'top';
var u1089 = document.getElementById('u1089');
gv_vAlignTable['u1089'] = 'center';
var u1148 = document.getElementById('u1148');
gv_vAlignTable['u1148'] = 'top';
var u1123 = document.getElementById('u1123');
gv_vAlignTable['u1123'] = 'top';
var u1124 = document.getElementById('u1124');
gv_vAlignTable['u1124'] = 'top';
var u1125 = document.getElementById('u1125');
gv_vAlignTable['u1125'] = 'top';
var u1126 = document.getElementById('u1126');

var u1090 = document.getElementById('u1090');

var u1184 = document.getElementById('u1184');

var u1185 = document.getElementById('u1185');
gv_vAlignTable['u1185'] = 'center';
var u1093 = document.getElementById('u1093');
gv_vAlignTable['u1093'] = 'top';
var u1094 = document.getElementById('u1094');

var u1151 = document.getElementById('u1151');
gv_vAlignTable['u1151'] = 'center';
var u1152 = document.getElementById('u1152');

var u1153 = document.getElementById('u1153');
gv_vAlignTable['u1153'] = 'top';
var u1154 = document.getElementById('u1154');
gv_vAlignTable['u1154'] = 'top';
var u1099 = document.getElementById('u1099');
gv_vAlignTable['u1099'] = 'center';
var u1156 = document.getElementById('u1156');

var u1157 = document.getElementById('u1157');
gv_vAlignTable['u1157'] = 'top';
var u1190 = document.getElementById('u1190');
gv_vAlignTable['u1190'] = 'top';
var u1191 = document.getElementById('u1191');
gv_vAlignTable['u1191'] = 'top';
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

u511.style.cursor = 'pointer';
if (bIE) u511.attachEvent("onclick", Clicku511);
else u511.addEventListener("click", Clicku511, true);
function Clicku511(e)
{

if (true) {

SetGlobalVariableValue('$NameNum', PopulateVariables('yes'));

	SetPanelStateu496("pd1u496");

}

}
gv_vAlignTable['u511'] = 'top';
var u512 = document.getElementById('u512');

u512.style.cursor = 'pointer';
if (bIE) u512.attachEvent("onclick", Clicku512);
else u512.addEventListener("click", Clicku512, true);
function Clicku512(e)
{

if (true) {

SetGlobalVariableValue('$NameNum', PopulateVariables('no'));

	SetPanelStateu496("pd0u496");

}

}
gv_vAlignTable['u512'] = 'top';
var u513 = document.getElementById('u513');

var u514 = document.getElementById('u514');

var u515 = document.getElementById('u515');
gv_vAlignTable['u515'] = 'center';
var u516 = document.getElementById('u516');

var u517 = document.getElementById('u517');
gv_vAlignTable['u517'] = 'center';
var u1255 = document.getElementById('u1255');
gv_vAlignTable['u1255'] = 'top';
var u520 = document.getElementById('u520');

var u521 = document.getElementById('u521');
gv_vAlignTable['u521'] = 'center';
var u522 = document.getElementById('u522');

var u523 = document.getElementById('u523');

var u524 = document.getElementById('u524');
gv_vAlignTable['u524'] = 'top';
var u525 = document.getElementById('u525');

var u526 = document.getElementById('u526');
gv_vAlignTable['u526'] = 'center';
var u527 = document.getElementById('u527');

u527.style.cursor = 'pointer';
if (bIE) u527.attachEvent("onclick", Clicku527);
else u527.addEventListener("click", Clicku527, true);
function Clicku527(e)
{

if (true) {

	BringToFront("u892");

	SetPanelVisibilityu0("hidden");

	SetPanelVisibilityu892("");

	SetPanelStateu953("pd1u953");

	SetPanelStateu683("pd1u683");

	MoveWidgetTo('u1031',11,300);

}

}

var u530 = document.getElementById('u530');
gv_vAlignTable['u530'] = 'center';
var u531 = document.getElementById('u531');

var u532 = document.getElementById('u532');
gv_vAlignTable['u532'] = 'top';
var u533 = document.getElementById('u533');

u533.style.cursor = 'pointer';
if (bIE) u533.attachEvent("onclick", Clicku533);
else u533.addEventListener("click", Clicku533, true);
function Clicku533(e)
{

if (true) {

	SetPanelVisibilityu522("");

	SetPanelStateu513("pd2u513");

	SetPanelStateu683("pd1u683");

	SetPanelStateu668("pd1u668");

	MoveWidgetTo('u668',1,32);

	SetPanelVisibilityu624("hidden");

	SetPanelVisibilityu639("hidden");

	SetPanelVisibilityu646("hidden");

	SetPanelVisibilityu660("hidden");

SetWidgetRichText('u667', PopulateVariables('<span style=" font-family:\'Calibri\'; color:#363636; font-size:13px;">Selected size:</span>'));

	BringToFront("u522");

}

}

var u534 = document.getElementById('u534');

var u535 = document.getElementById('u535');

var u536 = document.getElementById('u536');
gv_vAlignTable['u536'] = 'center';
var u537 = document.getElementById('u537');
gv_vAlignTable['u537'] = 'top';
var u540 = document.getElementById('u540');

var u541 = document.getElementById('u541');
gv_vAlignTable['u541'] = 'center';
var u542 = document.getElementById('u542');
gv_vAlignTable['u542'] = 'top';
var u543 = document.getElementById('u543');

var u544 = document.getElementById('u544');
gv_vAlignTable['u544'] = 'center';
var u545 = document.getElementById('u545');
gv_vAlignTable['u545'] = 'top';
var u546 = document.getElementById('u546');
gv_vAlignTable['u546'] = 'top';
var u547 = document.getElementById('u547');

var u550 = document.getElementById('u550');
gv_vAlignTable['u550'] = 'top';
var u551 = document.getElementById('u551');
gv_vAlignTable['u551'] = 'top';
var u552 = document.getElementById('u552');
gv_vAlignTable['u552'] = 'top';
var u553 = document.getElementById('u553');
gv_vAlignTable['u553'] = 'top';
var u554 = document.getElementById('u554');

var u555 = document.getElementById('u555');
gv_vAlignTable['u555'] = 'top';
var u556 = document.getElementById('u556');
gv_vAlignTable['u556'] = 'top';
var u557 = document.getElementById('u557');

var u560 = document.getElementById('u560');
gv_vAlignTable['u560'] = 'top';
var u561 = document.getElementById('u561');
gv_vAlignTable['u561'] = 'top';
var u562 = document.getElementById('u562');
gv_vAlignTable['u562'] = 'top';
var u563 = document.getElementById('u563');
gv_vAlignTable['u563'] = 'top';
var u564 = document.getElementById('u564');
gv_vAlignTable['u564'] = 'top';
var u565 = document.getElementById('u565');
gv_vAlignTable['u565'] = 'top';
var u566 = document.getElementById('u566');

var u567 = document.getElementById('u567');
gv_vAlignTable['u567'] = 'center';
var u805 = document.getElementById('u805');

var u806 = document.getElementById('u806');
gv_vAlignTable['u806'] = 'top';
var u807 = document.getElementById('u807');

var u808 = document.getElementById('u808');
gv_vAlignTable['u808'] = 'top';
var u809 = document.getElementById('u809');

var u570 = document.getElementById('u570');
gv_vAlignTable['u570'] = 'top';
var u571 = document.getElementById('u571');
gv_vAlignTable['u571'] = 'top';
var u572 = document.getElementById('u572');
gv_vAlignTable['u572'] = 'top';
var u573 = document.getElementById('u573');
gv_vAlignTable['u573'] = 'top';
var u574 = document.getElementById('u574');

var u575 = document.getElementById('u575');
gv_vAlignTable['u575'] = 'center';
var u576 = document.getElementById('u576');
gv_vAlignTable['u576'] = 'top';
var u577 = document.getElementById('u577');
gv_vAlignTable['u577'] = 'top';
var u815 = document.getElementById('u815');

var u816 = document.getElementById('u816');
gv_vAlignTable['u816'] = 'top';
var u817 = document.getElementById('u817');

var u818 = document.getElementById('u818');
gv_vAlignTable['u818'] = 'top';
var u819 = document.getElementById('u819');

var u580 = document.getElementById('u580');
gv_vAlignTable['u580'] = 'top';
var u581 = document.getElementById('u581');
gv_vAlignTable['u581'] = 'top';
var u582 = document.getElementById('u582');

var u583 = document.getElementById('u583');
gv_vAlignTable['u583'] = 'center';
var u584 = document.getElementById('u584');
gv_vAlignTable['u584'] = 'top';
var u585 = document.getElementById('u585');
gv_vAlignTable['u585'] = 'top';
var u586 = document.getElementById('u586');
gv_vAlignTable['u586'] = 'top';
var u587 = document.getElementById('u587');
gv_vAlignTable['u587'] = 'top';
var u825 = document.getElementById('u825');

var u826 = document.getElementById('u826');
gv_vAlignTable['u826'] = 'top';
var u827 = document.getElementById('u827');

var u828 = document.getElementById('u828');
gv_vAlignTable['u828'] = 'top';
var u829 = document.getElementById('u829');

var u590 = document.getElementById('u590');

var u591 = document.getElementById('u591');

if (bIE) u591.attachEvent("onmouseover", MouseOveru591);
else u591.addEventListener("mouseover", MouseOveru591, true);
function MouseOveru591(e)
{
if (!IsTrueMouseOver('u591',e)) return;
if (true) {

	SetPanelStateu590("pd2u590");

	SetPanelStateu557("pd4u557");

}

}

var u592 = document.getElementById('u592');
gv_vAlignTable['u592'] = 'center';
var u593 = document.getElementById('u593');

var u594 = document.getElementById('u594');
gv_vAlignTable['u594'] = 'center';
var u595 = document.getElementById('u595');

u595.style.cursor = 'pointer';
if (bIE) u595.attachEvent("onclick", Clicku595);
else u595.addEventListener("click", Clicku595, true);
function Clicku595(e)
{

if (true) {

	SetPanelStateu590("pd1u590");

	SetPanelStateu513("pd3u513");

	SetPanelStateu611("pd0u611");

	SetPanelStateu604("pd0u604");

	SetPanelStateu597("pd0u597");

	SetPanelStateu557("pd4u557");

	SetPanelVisibilityu539("");

	MoveWidgetTo('u523',2,162);

}

}

if (bIE) u595.attachEvent("onmouseout", MouseOutu595);
else u595.addEventListener("mouseout", MouseOutu595, true);
function MouseOutu595(e)
{
if (!IsTrueMouseOut('u595',e)) return;
if (true) {

	SetPanelStateu557("pd0u557");

	SetPanelStateu590("pd0u590");

}

}

var u596 = document.getElementById('u596');
gv_vAlignTable['u596'] = 'center';
var u597 = document.getElementById('u597');

if (window.OnLoad) OnLoad();
