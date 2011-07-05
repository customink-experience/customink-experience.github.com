
var PageName = 'Test Page';
var PageId = 'p7415d333e89c49558e2b1e225895b2b7'
var PageUrl = 'Test_Page.html'
document.title = 'Test Page';

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

SetGlobalVariableValue('$NameNum', PopulateVariables('no'));

SetGlobalVariableValue('$Size1', PopulateVariables(''));

SetGlobalVariableValue('$Qty1', PopulateVariables('0'));

SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$NumCount', PopulateVariables('0'));

SetGlobalVariableValue('$NameCount', PopulateVariables('0'));

SetGlobalVariableValue('$Name1', PopulateVariables(''));

SetGlobalVariableValue('$Name2', PopulateVariables(''));

SetGlobalVariableValue('$Num1', PopulateVariables(''));

SetGlobalVariableValue('$Num2', PopulateVariables(''));

SetGlobalVariableValue('$fruit', PopulateVariables('banana'));

}

}

eval(GetDynamicPanelScript('u1231', 3));

eval(GetDynamicPanelScript('u793', 2));

eval(GetDynamicPanelScript('u261', 4));

eval(GetDynamicPanelScript('u262', 4));

eval(GetDynamicPanelScript('u1293', 2));

eval(GetDynamicPanelScript('u1224', 1));

eval(GetDynamicPanelScript('u90', 2));

eval(GetDynamicPanelScript('u908', 2));

eval(GetDynamicPanelScript('u126', 1));

eval(GetDynamicPanelScript('u765', 3));

eval(GetDynamicPanelScript('u1087', 2));

eval(GetDynamicPanelScript('u1018', 2));

eval(GetDynamicPanelScript('u801', 2));

eval(GetDynamicPanelScript('u809', 2));

eval(GetDynamicPanelScript('u143', 1));

eval(GetDynamicPanelScript('u1090', 2));

eval(GetDynamicPanelScript('u209', 1));

eval(GetDynamicPanelScript('u1021', 2));

eval(GetDynamicPanelScript('u1027', 2));

eval(GetDynamicPanelScript('u1099', 2));

eval(GetDynamicPanelScript('u1274', 2));

eval(GetDynamicPanelScript('u814', 2));

eval(GetDynamicPanelScript('u0', 1));

eval(GetDynamicPanelScript('u3', 5));

eval(GetDynamicPanelScript('u217', 4));

eval(GetDynamicPanelScript('u9', 3));

eval(GetDynamicPanelScript('u148', 4));

eval(GetDynamicPanelScript('u789', 1));

eval(GetDynamicPanelScript('u822', 2));

eval(GetDynamicPanelScript('u1146', 2));

eval(GetDynamicPanelScript('u86', 2));

eval(GetDynamicPanelScript('u829', 2));

eval(GetDynamicPanelScript('u901', 2));

var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'top';
var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'top';
var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'top';
var u203 = document.getElementById('u203');

u203.style.cursor = 'pointer';
if (bIE) u203.attachEvent("onclick", Clicku203);
else u203.addEventListener("click", Clicku203, true);
function Clicku203(e)
{

if (true) {

	SetPanelStateu148("pd0u148");

}

}

var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'center';
var u205 = document.getElementById('u205');

u205.style.cursor = 'pointer';
if (bIE) u205.attachEvent("onclick", Clicku205);
else u205.addEventListener("click", Clicku205, true);
function Clicku205(e)
{

if (true) {

	BringToFront("u209");

}

}

var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'center';
var u207 = document.getElementById('u207');

u207.style.cursor = 'pointer';
if (bIE) u207.attachEvent("onclick", Clicku207);
else u207.addEventListener("click", Clicku207, true);
function Clicku207(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("open popup of privacy policy"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'top';
var u209 = document.getElementById('u209');

var u210 = document.getElementById('u210');

var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'center';
var u212 = document.getElementById('u212');

var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'center';
var u214 = document.getElementById('u214');

var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'center';
var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'top';
var u217 = document.getElementById('u217');

var u218 = document.getElementById('u218');

var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'center';
var u220 = document.getElementById('u220');

u220.style.cursor = 'pointer';
if (bIE) u220.attachEvent("onclick", Clicku220);
else u220.addEventListener("click", Clicku220, true);
function Clicku220(e)
{

if (true) {

	SetPanelVisibilityu217("hidden");

	SetPanelVisibilityu1224("hidden");

	SetPanelStateu261("pd1u261");

	SetPanelStateu789("pd0u789");

	MoveWidgetTo('u261',20,130);

}

}

var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'center';
var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'top';
var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'top';
var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'top';
var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'top';
var u226 = document.getElementById('u226');

var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'top';
var u228 = document.getElementById('u228');

var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'center';
var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'top';
var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'top';
var u232 = document.getElementById('u232');

var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'center';
var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'top';
var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'top';
var u236 = document.getElementById('u236');

var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'top';
var u238 = document.getElementById('u238');

var u239 = document.getElementById('u239');
gv_vAlignTable['u239'] = 'center';
var u500 = document.getElementById('u500');
gv_vAlignTable['u500'] = 'top';
var u501 = document.getElementById('u501');

var u502 = document.getElementById('u502');
gv_vAlignTable['u502'] = 'top';
var u503 = document.getElementById('u503');

var u504 = document.getElementById('u504');
gv_vAlignTable['u504'] = 'top';
var u505 = document.getElementById('u505');

var u506 = document.getElementById('u506');
gv_vAlignTable['u506'] = 'top';
var u507 = document.getElementById('u507');

var u508 = document.getElementById('u508');
gv_vAlignTable['u508'] = 'top';
var u509 = document.getElementById('u509');

var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'top';
var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'top';
var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'top';
var u243 = document.getElementById('u243');

u243.style.cursor = 'pointer';
if (bIE) u243.attachEvent("onclick", Clicku243);
else u243.addEventListener("click", Clicku243, true);
function Clicku243(e)
{

if (true) {

	self.location.href="Start_Page.html" + GetQuerystring();

}

}

var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'center';
var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'top';
var u246 = document.getElementById('u246');

var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'center';
var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'top';
var u249 = document.getElementById('u249');

var u10 = document.getElementById('u10');

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u510 = document.getElementById('u510');
gv_vAlignTable['u510'] = 'top';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u14 = document.getElementById('u14');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u16 = document.getElementById('u16');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u18 = document.getElementById('u18');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u518 = document.getElementById('u518');
gv_vAlignTable['u518'] = 'top';
var u519 = document.getElementById('u519');

var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'center';
var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'top';
var u252 = document.getElementById('u252');

var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'center';
var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'top';
var u255 = document.getElementById('u255');

var u256 = document.getElementById('u256');
gv_vAlignTable['u256'] = 'center';
var u257 = document.getElementById('u257');

var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'center';
var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'top';
var u20 = document.getElementById('u20');

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u22 = document.getElementById('u22');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u24 = document.getElementById('u24');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u26 = document.getElementById('u26');

u26.style.cursor = 'pointer';
if (bIE) u26.attachEvent("onclick", Clicku26);
else u26.addEventListener("click", Clicku26, true);
function Clicku26(e)
{

if (true) {

	SetPanelVisibilityu0("hidden");

	SetPanelVisibilityu209("");

	BringToFront("u209");

}

}
gv_vAlignTable['u26'] = 'top';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u28 = document.getElementById('u28');

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u528 = document.getElementById('u528');
gv_vAlignTable['u528'] = 'top';
var u529 = document.getElementById('u529');

var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'top';
var u261 = document.getElementById('u261');

var u262 = document.getElementById('u262');

var u263 = document.getElementById('u263');

var u264 = document.getElementById('u264');
gv_vAlignTable['u264'] = 'top';
var u265 = document.getElementById('u265');

var u266 = document.getElementById('u266');

var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'top';
var u268 = document.getElementById('u268');

var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'top';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u31 = document.getElementById('u31');

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u33 = document.getElementById('u33');

u33.style.cursor = 'pointer';
if (bIE) u33.attachEvent("onclick", Clicku33);
else u33.addEventListener("click", Clicku33, true);
function Clicku33(e)
{

if (true) {

	SetPanelVisibilityu0("hidden");

	SetPanelVisibilityu209("");

	BringToFront("u209");

}

}
gv_vAlignTable['u33'] = 'top';
var u34 = document.getElementById('u34');

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u37 = document.getElementById('u37');

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u39 = document.getElementById('u39');

var u538 = document.getElementById('u538');
gv_vAlignTable['u538'] = 'top';
var u539 = document.getElementById('u539');
gv_vAlignTable['u539'] = 'top';
var u800 = document.getElementById('u800');

u800.style.cursor = 'pointer';
if (bIE) u800.attachEvent("onclick", Clicku800);
else u800.addEventListener("click", Clicku800, true);
function Clicku800(e)
{

if (true) {

	SetPanelStateu793("pd1u793");

	SetPanelStateu814("pd0u814");

	SetPanelStateu1018("pd1u1018");

}

}
gv_vAlignTable['u800'] = 'top';
var u801 = document.getElementById('u801');

var u802 = document.getElementById('u802');

var u803 = document.getElementById('u803');
gv_vAlignTable['u803'] = 'center';
var u804 = document.getElementById('u804');

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
var u1002 = document.getElementById('u1002');

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u41 = document.getElementById('u41');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u43 = document.getElementById('u43');

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'center';
var u45 = document.getElementById('u45');

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'center';
var u47 = document.getElementById('u47');

var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'center';
var u49 = document.getElementById('u49');

var u548 = document.getElementById('u548');
gv_vAlignTable['u548'] = 'top';
var u549 = document.getElementById('u549');

var u1005 = document.getElementById('u1005');
gv_vAlignTable['u1005'] = 'center';
var u810 = document.getElementById('u810');

var u811 = document.getElementById('u811');
gv_vAlignTable['u811'] = 'center';
var u812 = document.getElementById('u812');

var u813 = document.getElementById('u813');
gv_vAlignTable['u813'] = 'center';
var u814 = document.getElementById('u814');

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
var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'center';
var u51 = document.getElementById('u51');

var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'center';
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

var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'center';
var u558 = document.getElementById('u558');

var u559 = document.getElementById('u559');
gv_vAlignTable['u559'] = 'top';
var u1013 = document.getElementById('u1013');
gv_vAlignTable['u1013'] = 'center';
var u1014 = document.getElementById('u1014');

var u1015 = document.getElementById('u1015');
gv_vAlignTable['u1015'] = 'center';
var u820 = document.getElementById('u820');
gv_vAlignTable['u820'] = 'top';
var u821 = document.getElementById('u821');

u821.style.cursor = 'pointer';
if (bIE) u821.attachEvent("onclick", Clicku821);
else u821.addEventListener("click", Clicku821, true);
function Clicku821(e)
{

if (true) {

	SetPanelStateu814("pd1u814");

	SetPanelStateu1018("pd1u1018");

	SetPanelStateu809("pd0u809");

	SetPanelStateu901("pd0u901");

}

}
gv_vAlignTable['u821'] = 'top';
var u822 = document.getElementById('u822');

var u823 = document.getElementById('u823');

var u824 = document.getElementById('u824');
gv_vAlignTable['u824'] = 'center';
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

var u297 = document.getElementById('u297');
gv_vAlignTable['u297'] = 'top';
var u298 = document.getElementById('u298');

var u299 = document.getElementById('u299');
gv_vAlignTable['u299'] = 'top';
var u60 = document.getElementById('u60');

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'center';
var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'top';
var u68 = document.getElementById('u68');

u68.style.cursor = 'pointer';
if (bIE) u68.attachEvent("onclick", Clicku68);
else u68.addEventListener("click", Clicku68, true);
function Clicku68(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("This is not enabled in the prototype."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u568 = document.getElementById('u568');
gv_vAlignTable['u568'] = 'top';
var u569 = document.getElementById('u569');
gv_vAlignTable['u569'] = 'top';
var u1020 = document.getElementById('u1020');
gv_vAlignTable['u1020'] = 'center';
var u1021 = document.getElementById('u1021');

var u1022 = document.getElementById('u1022');

var u830 = document.getElementById('u830');

u830.style.cursor = 'pointer';
if (bIE) u830.attachEvent("onclick", Clicku830);
else u830.addEventListener("click", Clicku830, true);
function Clicku830(e)
{

if (true) {

	SetPanelStateu261("pd2u261");

	SetPanelStateu1146("pd1u1146");

}

}

var u831 = document.getElementById('u831');
gv_vAlignTable['u831'] = 'bottom';
var u832 = document.getElementById('u832');

u832.style.cursor = 'pointer';
if (bIE) u832.attachEvent("onclick", Clicku832);
else u832.addEventListener("click", Clicku832, true);
function Clicku832(e)
{

if (true) {

	SetPanelVisibilityu209("");

	BringToFront("u209");

}

}

var u833 = document.getElementById('u833');
gv_vAlignTable['u833'] = 'bottom';
var u834 = document.getElementById('u834');

var u835 = document.getElementById('u835');
gv_vAlignTable['u835'] = 'top';
var u836 = document.getElementById('u836');

var u837 = document.getElementById('u837');
gv_vAlignTable['u837'] = 'top';
var u838 = document.getElementById('u838');

var u839 = document.getElementById('u839');
gv_vAlignTable['u839'] = 'top';
var u1206 = document.getElementById('u1206');
gv_vAlignTable['u1206'] = 'center';
var u1207 = document.getElementById('u1207');

var u1208 = document.getElementById('u1208');
gv_vAlignTable['u1208'] = 'center';
var u1209 = document.getElementById('u1209');
gv_vAlignTable['u1209'] = 'top';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'top';
var u72 = document.getElementById('u72');
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

var u578 = document.getElementById('u578');
gv_vAlignTable['u578'] = 'top';
var u579 = document.getElementById('u579');

var u1030 = document.getElementById('u1030');

var u1031 = document.getElementById('u1031');
gv_vAlignTable['u1031'] = 'center';
var u840 = document.getElementById('u840');
gv_vAlignTable['u840'] = 'top';
var u841 = document.getElementById('u841');

u841.style.cursor = 'pointer';
if (bIE) u841.attachEvent("onclick", Clicku841);
else u841.addEventListener("click", Clicku841, true);
function Clicku841(e)
{

if (true) {

	SetPanelStateu261("pd2u261");

	SetPanelStateu1146("pd1u1146");

}

}

var u842 = document.getElementById('u842');
gv_vAlignTable['u842'] = 'bottom';
var u843 = document.getElementById('u843');

u843.style.cursor = 'pointer';
if (bIE) u843.attachEvent("onclick", Clicku843);
else u843.addEventListener("click", Clicku843, true);
function Clicku843(e)
{

if (true) {

	SetPanelVisibilityu209("");

	BringToFront("u209");

}

}

var u844 = document.getElementById('u844');
gv_vAlignTable['u844'] = 'bottom';
var u845 = document.getElementById('u845');

var u846 = document.getElementById('u846');
gv_vAlignTable['u846'] = 'top';
var u847 = document.getElementById('u847');
gv_vAlignTable['u847'] = 'top';
var u848 = document.getElementById('u848');

var u849 = document.getElementById('u849');
gv_vAlignTable['u849'] = 'top';
var u1216 = document.getElementById('u1216');

var u1217 = document.getElementById('u1217');
gv_vAlignTable['u1217'] = 'center';
var u1218 = document.getElementById('u1218');

var u1219 = document.getElementById('u1219');
gv_vAlignTable['u1219'] = 'center';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'center';
var u81 = document.getElementById('u81');

var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'center';
var u83 = document.getElementById('u83');

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'center';
var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'top';
var u86 = document.getElementById('u86');

var u87 = document.getElementById('u87');

var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'top';
var u89 = document.getElementById('u89');

u89.style.cursor = 'pointer';
if (bIE) u89.attachEvent("onclick", Clicku89);
else u89.addEventListener("click", Clicku89, true);
function Clicku89(e)
{

if (true) {

	SetPanelStateu86("pd0u86");

}

}
gv_vAlignTable['u89'] = 'top';
var u588 = document.getElementById('u588');

var u589 = document.getElementById('u589');
gv_vAlignTable['u589'] = 'top';
var u1120 = document.getElementById('u1120');

if (bIE) u1120.attachEvent("onmouseover", MouseOveru1120);
else u1120.addEventListener("mouseover", MouseOveru1120, true);
function MouseOveru1120(e)
{
if (!IsTrueMouseOver('u1120',e)) return;
if (true) {

}

}

if (bIE) u1120.attachEvent("onmouseout", MouseOutu1120);
else u1120.addEventListener("mouseout", MouseOutu1120, true);
function MouseOutu1120(e)
{
if (!IsTrueMouseOut('u1120',e)) return;
if (true) {

}

}
gv_vAlignTable['u1120'] = 'top';
var u850 = document.getElementById('u850');

var u851 = document.getElementById('u851');
gv_vAlignTable['u851'] = 'top';
var u852 = document.getElementById('u852');

var u853 = document.getElementById('u853');

var u854 = document.getElementById('u854');
gv_vAlignTable['u854'] = 'center';
var u855 = document.getElementById('u855');

u855.style.cursor = 'pointer';
if (bIE) u855.attachEvent("onclick", Clicku855);
else u855.addEventListener("click", Clicku855, true);
function Clicku855(e)
{

if (true) {

ApplyImageAndTextStyles('o', 'u859', 'u860', '', false);
ApplyImageAndTextStyles('s', 'u855', 'u856', sJsonu856, false);
ApplyImageAndTextStyles('o', 'u863', 'u864', '', false);
ApplyImageAndTextStyles('o', 'u867', 'u868', '', false);
ApplyImageAndTextStyles('o', 'u871', 'u872', '', false);
ApplyImageAndTextStyles('o', 'u875', 'u876', '', false);
ApplyImageAndTextStyles('o', 'u879', 'u880', '', false);
ApplyImageAndTextStyles('o', 'u883', 'u884', '', false);
ApplyImageAndTextStyles('o', 'u887', 'u888', '', false);
ApplyImageAndTextStyles('o', 'u891', 'u892', '', false);
ApplyImageAndTextStyles('o', 'u899', 'u900', '', false);
ApplyImageAndTextStyles('o', 'u895', 'u896', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Youth Extra Small'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u856 = document.getElementById('u856');
gv_vAlignTable['u856'] = 'center';
var u857 = document.getElementById('u857');

var u858 = document.getElementById('u858');
gv_vAlignTable['u858'] = 'center';
var u859 = document.getElementById('u859');

u859.style.cursor = 'pointer';
if (bIE) u859.attachEvent("onclick", Clicku859);
else u859.addEventListener("click", Clicku859, true);
function Clicku859(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u859', 'u860', sJsonu860, false);
ApplyImageAndTextStyles('o', 'u855', 'u856', '', false);
ApplyImageAndTextStyles('o', 'u863', 'u864', '', false);
ApplyImageAndTextStyles('o', 'u871', 'u872', '', false);
ApplyImageAndTextStyles('o', 'u867', 'u868', '', false);
ApplyImageAndTextStyles('o', 'u875', 'u876', '', false);
ApplyImageAndTextStyles('o', 'u879', 'u880', '', false);
ApplyImageAndTextStyles('o', 'u883', 'u884', '', false);
ApplyImageAndTextStyles('o', 'u887', 'u888', '', false);
ApplyImageAndTextStyles('o', 'u891', 'u892', '', false);
ApplyImageAndTextStyles('o', 'u895', 'u896', '', false);
ApplyImageAndTextStyles('o', 'u899', 'u900', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Youth Small'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u1226 = document.getElementById('u1226');

var u1227 = document.getElementById('u1227');
gv_vAlignTable['u1227'] = 'center';
var u1228 = document.getElementById('u1228');
gv_vAlignTable['u1228'] = 'top';
var u1229 = document.getElementById('u1229');

u1229.style.cursor = 'pointer';
if (bIE) u1229.attachEvent("onclick", Clicku1229);
else u1229.addEventListener("click", Clicku1229, true);
function Clicku1229(e)
{

if (true) {

	BringToFront("u0");

	SetPanelVisibilityu0("");

	SetPanelStateu3("pd4u3");

	SetPanelStateu148("pd2u148");

}

}
gv_vAlignTable['u1229'] = 'top';
var u90 = document.getElementById('u90');

var u91 = document.getElementById('u91');

var u92 = document.getElementById('u92');

var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'top';
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

var u599 = document.getElementById('u599');
gv_vAlignTable['u599'] = 'top';
var u860 = document.getElementById('u860');
gv_vAlignTable['u860'] = 'center';
var u861 = document.getElementById('u861');

var u862 = document.getElementById('u862');
gv_vAlignTable['u862'] = 'center';
var u863 = document.getElementById('u863');

u863.style.cursor = 'pointer';
if (bIE) u863.attachEvent("onclick", Clicku863);
else u863.addEventListener("click", Clicku863, true);
function Clicku863(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u863', 'u864', sJsonu864, false);
ApplyImageAndTextStyles('o', 'u855', 'u856', '', false);
ApplyImageAndTextStyles('o', 'u859', 'u860', '', false);
ApplyImageAndTextStyles('o', 'u867', 'u868', '', false);
ApplyImageAndTextStyles('o', 'u871', 'u872', '', false);
ApplyImageAndTextStyles('o', 'u875', 'u876', '', false);
ApplyImageAndTextStyles('o', 'u879', 'u880', '', false);
ApplyImageAndTextStyles('o', 'u899', 'u900', '', false);
ApplyImageAndTextStyles('o', 'u895', 'u896', '', false);
ApplyImageAndTextStyles('o', 'u891', 'u892', '', false);
ApplyImageAndTextStyles('o', 'u887', 'u888', '', false);
ApplyImageAndTextStyles('o', 'u883', 'u884', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Youth Medium'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u864 = document.getElementById('u864');
gv_vAlignTable['u864'] = 'center';
var u865 = document.getElementById('u865');

var u866 = document.getElementById('u866');
gv_vAlignTable['u866'] = 'center';
var u867 = document.getElementById('u867');

u867.style.cursor = 'pointer';
if (bIE) u867.attachEvent("onclick", Clicku867);
else u867.addEventListener("click", Clicku867, true);
function Clicku867(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u867', 'u868', sJsonu868, false);
ApplyImageAndTextStyles('o', 'u855', 'u856', '', false);
ApplyImageAndTextStyles('o', 'u859', 'u860', '', false);
ApplyImageAndTextStyles('o', 'u871', 'u872', '', false);
ApplyImageAndTextStyles('o', 'u879', 'u880', '', false);
ApplyImageAndTextStyles('o', 'u863', 'u864', '', false);
ApplyImageAndTextStyles('o', 'u875', 'u876', '', false);
ApplyImageAndTextStyles('o', 'u883', 'u884', '', false);
ApplyImageAndTextStyles('o', 'u887', 'u888', '', false);
ApplyImageAndTextStyles('o', 'u891', 'u892', '', false);
ApplyImageAndTextStyles('o', 'u895', 'u896', '', false);
ApplyImageAndTextStyles('o', 'u899', 'u900', '', false);
SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

SetGlobalVariableValue('$Size1', PopulateVariables('Youth Large'));

}

}

var u868 = document.getElementById('u868');
gv_vAlignTable['u868'] = 'center';
var u869 = document.getElementById('u869');

var u1236 = document.getElementById('u1236');
gv_vAlignTable['u1236'] = 'center';
var u1237 = document.getElementById('u1237');

u1237.style.cursor = 'pointer';
if (bIE) u1237.attachEvent("onclick", Clicku1237);
else u1237.addEventListener("click", Clicku1237, true);
function Clicku1237(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Opens facebook so you can post a link to this page to your wall."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}
gv_vAlignTable['u1237'] = 'top';
var u1238 = document.getElementById('u1238');

u1238.style.cursor = 'pointer';
if (bIE) u1238.attachEvent("onclick", Clicku1238);
else u1238.addEventListener("click", Clicku1238, true);
function Clicku1238(e)
{

if (true) {

	BringToFront("u0");

	SetPanelVisibilityu0("");

	SetPanelStateu3("pd4u3");

	SetPanelStateu148("pd1u148");

}

}
gv_vAlignTable['u1238'] = 'top';
var u1239 = document.getElementById('u1239');

u1239.style.cursor = 'pointer';
if (bIE) u1239.attachEvent("onclick", Clicku1239);
else u1239.addEventListener("click", Clicku1239, true);
function Clicku1239(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Opens twitter so you can tweet with this link"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}
gv_vAlignTable['u1239'] = 'top';
var u1111 = document.getElementById('u1111');

var u1112 = document.getElementById('u1112');
gv_vAlignTable['u1112'] = 'top';
var u1113 = document.getElementById('u1113');

var u1114 = document.getElementById('u1114');
gv_vAlignTable['u1114'] = 'center';
var u1115 = document.getElementById('u1115');
gv_vAlignTable['u1115'] = 'top';
var u1116 = document.getElementById('u1116');
gv_vAlignTable['u1116'] = 'top';
var u870 = document.getElementById('u870');
gv_vAlignTable['u870'] = 'center';
var u871 = document.getElementById('u871');

u871.style.cursor = 'pointer';
if (bIE) u871.attachEvent("onclick", Clicku871);
else u871.addEventListener("click", Clicku871, true);
function Clicku871(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u871', 'u872', sJsonu872, false);
ApplyImageAndTextStyles('o', 'u855', 'u856', '', false);
ApplyImageAndTextStyles('o', 'u859', 'u860', '', false);
ApplyImageAndTextStyles('o', 'u863', 'u864', '', false);
ApplyImageAndTextStyles('o', 'u867', 'u868', '', false);
ApplyImageAndTextStyles('o', 'u875', 'u876', '', false);
ApplyImageAndTextStyles('o', 'u879', 'u880', '', false);
ApplyImageAndTextStyles('o', 'u883', 'u884', '', false);
ApplyImageAndTextStyles('o', 'u887', 'u888', '', false);
ApplyImageAndTextStyles('o', 'u891', 'u892', '', false);
ApplyImageAndTextStyles('o', 'u895', 'u896', '', false);
ApplyImageAndTextStyles('o', 'u899', 'u900', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Youth Extra Large'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u872 = document.getElementById('u872');
gv_vAlignTable['u872'] = 'center';
var u873 = document.getElementById('u873');

var u874 = document.getElementById('u874');
gv_vAlignTable['u874'] = 'center';
var u875 = document.getElementById('u875');

u875.style.cursor = 'pointer';
if (bIE) u875.attachEvent("onclick", Clicku875);
else u875.addEventListener("click", Clicku875, true);
function Clicku875(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u875', 'u876', sJsonu876, false);
ApplyImageAndTextStyles('o', 'u855', 'u856', '', false);
ApplyImageAndTextStyles('o', 'u859', 'u860', '', false);
ApplyImageAndTextStyles('o', 'u863', 'u864', '', false);
ApplyImageAndTextStyles('o', 'u867', 'u868', '', false);
ApplyImageAndTextStyles('o', 'u871', 'u872', '', false);
ApplyImageAndTextStyles('o', 'u879', 'u880', '', false);
ApplyImageAndTextStyles('o', 'u883', 'u884', '', false);
ApplyImageAndTextStyles('o', 'u891', 'u892', '', false);
ApplyImageAndTextStyles('o', 'u895', 'u896', '', false);
ApplyImageAndTextStyles('o', 'u887', 'u888', '', false);
ApplyImageAndTextStyles('o', 'u899', 'u900', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Small'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u876 = document.getElementById('u876');
gv_vAlignTable['u876'] = 'center';
var u877 = document.getElementById('u877');

var u878 = document.getElementById('u878');
gv_vAlignTable['u878'] = 'center';
var u879 = document.getElementById('u879');

u879.style.cursor = 'pointer';
if (bIE) u879.attachEvent("onclick", Clicku879);
else u879.addEventListener("click", Clicku879, true);
function Clicku879(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u879', 'u880', sJsonu880, false);
ApplyImageAndTextStyles('o', 'u855', 'u856', '', false);
ApplyImageAndTextStyles('o', 'u859', 'u860', '', false);
ApplyImageAndTextStyles('o', 'u867', 'u868', '', false);
ApplyImageAndTextStyles('o', 'u875', 'u876', '', false);
ApplyImageAndTextStyles('o', 'u863', 'u864', '', false);
ApplyImageAndTextStyles('o', 'u871', 'u872', '', false);
ApplyImageAndTextStyles('o', 'u883', 'u884', '', false);
ApplyImageAndTextStyles('o', 'u895', 'u896', '', false);
ApplyImageAndTextStyles('o', 'u891', 'u892', '', false);
ApplyImageAndTextStyles('o', 'u887', 'u888', '', false);
ApplyImageAndTextStyles('o', 'u899', 'u900', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Medium'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u1149 = document.getElementById('u1149');
gv_vAlignTable['u1149'] = 'bottom';
var u1247 = document.getElementById('u1247');
gv_vAlignTable['u1247'] = 'top';
var u1248 = document.getElementById('u1248');

u1248.style.cursor = 'pointer';
if (bIE) u1248.attachEvent("onclick", Clicku1248);
else u1248.addEventListener("click", Clicku1248, true);
function Clicku1248(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("This will display this page with a summary of the items for which you signed up."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u1249 = document.getElementById('u1249');
gv_vAlignTable['u1249'] = 'bottom';
var u1121 = document.getElementById('u1121');
gv_vAlignTable['u1121'] = 'top';
var u1122 = document.getElementById('u1122');
gv_vAlignTable['u1122'] = 'top';
var u880 = document.getElementById('u880');
gv_vAlignTable['u880'] = 'center';
var u881 = document.getElementById('u881');

var u882 = document.getElementById('u882');
gv_vAlignTable['u882'] = 'center';
var u883 = document.getElementById('u883');

u883.style.cursor = 'pointer';
if (bIE) u883.attachEvent("onclick", Clicku883);
else u883.addEventListener("click", Clicku883, true);
function Clicku883(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u883', 'u884', sJsonu884, false);
ApplyImageAndTextStyles('o', 'u855', 'u856', '', false);
ApplyImageAndTextStyles('o', 'u859', 'u860', '', false);
ApplyImageAndTextStyles('o', 'u871', 'u872', '', false);
ApplyImageAndTextStyles('o', 'u875', 'u876', '', false);
ApplyImageAndTextStyles('o', 'u879', 'u880', '', false);
ApplyImageAndTextStyles('o', 'u863', 'u864', '', false);
ApplyImageAndTextStyles('o', 'u867', 'u868', '', false);
ApplyImageAndTextStyles('o', 'u891', 'u892', '', false);
ApplyImageAndTextStyles('o', 'u899', 'u900', '', false);
ApplyImageAndTextStyles('o', 'u895', 'u896', '', false);
ApplyImageAndTextStyles('o', 'u887', 'u888', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Large'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u884 = document.getElementById('u884');
gv_vAlignTable['u884'] = 'center';
var u885 = document.getElementById('u885');

var u886 = document.getElementById('u886');
gv_vAlignTable['u886'] = 'center';
var u887 = document.getElementById('u887');

u887.style.cursor = 'pointer';
if (bIE) u887.attachEvent("onclick", Clicku887);
else u887.addEventListener("click", Clicku887, true);
function Clicku887(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u887', 'u888', sJsonu888, false);
ApplyImageAndTextStyles('o', 'u855', 'u856', '', false);
ApplyImageAndTextStyles('o', 'u859', 'u860', '', false);
ApplyImageAndTextStyles('o', 'u867', 'u868', '', false);
ApplyImageAndTextStyles('o', 'u875', 'u876', '', false);
ApplyImageAndTextStyles('o', 'u863', 'u864', '', false);
ApplyImageAndTextStyles('o', 'u871', 'u872', '', false);
ApplyImageAndTextStyles('o', 'u879', 'u880', '', false);
ApplyImageAndTextStyles('o', 'u883', 'u884', '', false);
ApplyImageAndTextStyles('o', 'u891', 'u892', '', false);
ApplyImageAndTextStyles('o', 'u899', 'u900', '', false);
ApplyImageAndTextStyles('o', 'u895', 'u896', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Extra Large'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u888 = document.getElementById('u888');
gv_vAlignTable['u888'] = 'center';
var u889 = document.getElementById('u889');

var u1256 = document.getElementById('u1256');

var u1159 = document.getElementById('u1159');

var u1258 = document.getElementById('u1258');

var u1259 = document.getElementById('u1259');
gv_vAlignTable['u1259'] = 'center';
var u1200 = document.getElementById('u1200');
gv_vAlignTable['u1200'] = 'top';
var u1201 = document.getElementById('u1201');
gv_vAlignTable['u1201'] = 'top';
var u1202 = document.getElementById('u1202');

var u1203 = document.getElementById('u1203');
gv_vAlignTable['u1203'] = 'center';
var u1204 = document.getElementById('u1204');
gv_vAlignTable['u1204'] = 'top';
var u1205 = document.getElementById('u1205');

var u890 = document.getElementById('u890');
gv_vAlignTable['u890'] = 'center';
var u891 = document.getElementById('u891');

u891.style.cursor = 'pointer';
if (bIE) u891.attachEvent("onclick", Clicku891);
else u891.addEventListener("click", Clicku891, true);
function Clicku891(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u891', 'u892', sJsonu892, false);
ApplyImageAndTextStyles('o', 'u855', 'u856', '', false);
ApplyImageAndTextStyles('o', 'u859', 'u860', '', false);
ApplyImageAndTextStyles('o', 'u863', 'u864', '', false);
ApplyImageAndTextStyles('o', 'u867', 'u868', '', false);
ApplyImageAndTextStyles('o', 'u875', 'u876', '', false);
ApplyImageAndTextStyles('o', 'u871', 'u872', '', false);
ApplyImageAndTextStyles('o', 'u895', 'u896', '', false);
ApplyImageAndTextStyles('o', 'u887', 'u888', '', false);
ApplyImageAndTextStyles('o', 'u899', 'u900', '', false);
ApplyImageAndTextStyles('o', 'u883', 'u884', '', false);
ApplyImageAndTextStyles('o', 'u879', 'u880', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('2XL'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u892 = document.getElementById('u892');
gv_vAlignTable['u892'] = 'center';
var u893 = document.getElementById('u893');

var u894 = document.getElementById('u894');
gv_vAlignTable['u894'] = 'center';
var u895 = document.getElementById('u895');

u895.style.cursor = 'pointer';
if (bIE) u895.attachEvent("onclick", Clicku895);
else u895.addEventListener("click", Clicku895, true);
function Clicku895(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u895', 'u896', sJsonu896, false);
ApplyImageAndTextStyles('o', 'u855', 'u856', '', false);
ApplyImageAndTextStyles('o', 'u859', 'u860', '', false);
ApplyImageAndTextStyles('o', 'u867', 'u868', '', false);
ApplyImageAndTextStyles('o', 'u863', 'u864', '', false);
ApplyImageAndTextStyles('o', 'u871', 'u872', '', false);
ApplyImageAndTextStyles('o', 'u875', 'u876', '', false);
ApplyImageAndTextStyles('o', 'u891', 'u892', '', false);
ApplyImageAndTextStyles('o', 'u887', 'u888', '', false);
ApplyImageAndTextStyles('o', 'u883', 'u884', '', false);
ApplyImageAndTextStyles('o', 'u879', 'u880', '', false);
ApplyImageAndTextStyles('o', 'u899', 'u900', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('3XL'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u896 = document.getElementById('u896');
gv_vAlignTable['u896'] = 'center';
var u897 = document.getElementById('u897');

var u898 = document.getElementById('u898');
gv_vAlignTable['u898'] = 'center';
var u899 = document.getElementById('u899');

u899.style.cursor = 'pointer';
if (bIE) u899.attachEvent("onclick", Clicku899);
else u899.addEventListener("click", Clicku899, true);
function Clicku899(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u899', 'u900', sJsonu900, false);
ApplyImageAndTextStyles('o', 'u855', 'u856', '', false);
ApplyImageAndTextStyles('o', 'u895', 'u896', '', false);
ApplyImageAndTextStyles('o', 'u887', 'u888', '', false);
ApplyImageAndTextStyles('o', 'u891', 'u892', '', false);
ApplyImageAndTextStyles('o', 'u883', 'u884', '', false);
ApplyImageAndTextStyles('o', 'u879', 'u880', '', false);
ApplyImageAndTextStyles('o', 'u875', 'u876', '', false);
ApplyImageAndTextStyles('o', 'u871', 'u872', '', false);
ApplyImageAndTextStyles('o', 'u867', 'u868', '', false);
ApplyImageAndTextStyles('o', 'u863', 'u864', '', false);
ApplyImageAndTextStyles('o', 'u859', 'u860', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('4XL'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u1139 = document.getElementById('u1139');
gv_vAlignTable['u1139'] = 'top';
var u1168 = document.getElementById('u1168');

if (bIE) u1168.attachEvent("onblur", LostFocusu1168);
else u1168.addEventListener("blur", LostFocusu1168, true);
function LostFocusu1168(e)
{

if (true) {

SetGlobalVariableValue('$YourNote', GetWidgetFormText('u1168'));

}

}

var u1169 = document.getElementById('u1169');

var u1269 = document.getElementById('u1269');

var u1210 = document.getElementById('u1210');

if (bIE) u1210.attachEvent("onmouseover", MouseOveru1210);
else u1210.addEventListener("mouseover", MouseOveru1210, true);
function MouseOveru1210(e)
{
if (!IsTrueMouseOver('u1210',e)) return;
if (true) {

}

}

if (bIE) u1210.attachEvent("onmouseout", MouseOutu1210);
else u1210.addEventListener("mouseout", MouseOutu1210, true);
function MouseOutu1210(e)
{
if (!IsTrueMouseOut('u1210',e)) return;
if (true) {

}

}
gv_vAlignTable['u1210'] = 'top';
var u1211 = document.getElementById('u1211');
gv_vAlignTable['u1211'] = 'top';
var u1212 = document.getElementById('u1212');
gv_vAlignTable['u1212'] = 'top';
var u1213 = document.getElementById('u1213');

if (bIE) u1213.attachEvent("onmouseover", MouseOveru1213);
else u1213.addEventListener("mouseover", MouseOveru1213, true);
function MouseOveru1213(e)
{
if (!IsTrueMouseOver('u1213',e)) return;
if (true) {

}

}

if (bIE) u1213.attachEvent("onmouseout", MouseOutu1213);
else u1213.addEventListener("mouseout", MouseOutu1213, true);
function MouseOutu1213(e)
{
if (!IsTrueMouseOut('u1213',e)) return;
if (true) {

}

}
gv_vAlignTable['u1213'] = 'top';
var u1214 = document.getElementById('u1214');

var u1215 = document.getElementById('u1215');
gv_vAlignTable['u1215'] = 'center';
var u1303 = document.getElementById('u1303');

var u1304 = document.getElementById('u1304');
gv_vAlignTable['u1304'] = 'center';
var u1270 = document.getElementById('u1270');
gv_vAlignTable['u1270'] = 'top';
var u1271 = document.getElementById('u1271');
gv_vAlignTable['u1271'] = 'top';
var u1272 = document.getElementById('u1272');
gv_vAlignTable['u1272'] = 'top';
var u1273 = document.getElementById('u1273');
gv_vAlignTable['u1273'] = 'top';
var u1174 = document.getElementById('u1174');

var u1175 = document.getElementById('u1175');
gv_vAlignTable['u1175'] = 'top';
var u1176 = document.getElementById('u1176');

var u1177 = document.getElementById('u1177');
gv_vAlignTable['u1177'] = 'top';
var u927 = document.getElementById('u927');
gv_vAlignTable['u927'] = 'center';
var u928 = document.getElementById('u928');

u928.style.cursor = 'pointer';
if (bIE) u928.attachEvent("onclick", Clicku928);
else u928.addEventListener("click", Clicku928, true);
function Clicku928(e)
{

if ((GetGlobalVariableValue('$Qty1')) != (PopulateVariables('Youth Large'))) {

ApplyImageAndTextStyles('s', 'u928', 'u929', sJsonu929, false);
ApplyImageAndTextStyles('o', 'u916', 'u917', '', false);
ApplyImageAndTextStyles('o', 'u920', 'u921', '', false);
ApplyImageAndTextStyles('o', 'u932', 'u933', '', false);
ApplyImageAndTextStyles('o', 'u940', 'u941', '', false);
ApplyImageAndTextStyles('o', 'u924', 'u925', '', false);
ApplyImageAndTextStyles('o', 'u936', 'u937', '', false);
ApplyImageAndTextStyles('o', 'u944', 'u945', '', false);
ApplyImageAndTextStyles('o', 'u948', 'u949', '', false);
ApplyImageAndTextStyles('o', 'u952', 'u953', '', false);
ApplyImageAndTextStyles('o', 'u956', 'u957', '', false);
ApplyImageAndTextStyles('o', 'u960', 'u961', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('Youth Large'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$NumCount', PopulateVariables('2'));

ApplyImageAndTextStyles('o', 'u916', 'u917', '', false);
ApplyImageAndTextStyles('o', 'u920', 'u921', '', false);
ApplyImageAndTextStyles('o', 'u924', 'u925', '', false);
ApplyImageAndTextStyles('s', 'u928', 'u929', sJsonu929, false);
ApplyImageAndTextStyles('o', 'u932', 'u933', '', false);
ApplyImageAndTextStyles('o', 'u936', 'u937', '', false);
ApplyImageAndTextStyles('o', 'u944', 'u945', '', false);
ApplyImageAndTextStyles('o', 'u940', 'u941', '', false);
ApplyImageAndTextStyles('o', 'u952', 'u953', '', false);
ApplyImageAndTextStyles('o', 'u956', 'u957', '', false);
ApplyImageAndTextStyles('o', 'u948', 'u949', '', false);
ApplyImageAndTextStyles('o', 'u960', 'u961', '', false);
}

}

var u929 = document.getElementById('u929');
gv_vAlignTable['u929'] = 'center';
var u1220 = document.getElementById('u1220');
gv_vAlignTable['u1220'] = 'top';
var u1221 = document.getElementById('u1221');

var u1222 = document.getElementById('u1222');
gv_vAlignTable['u1222'] = 'center';
var u1127 = document.getElementById('u1127');

var u1224 = document.getElementById('u1224');

var u1225 = document.getElementById('u1225');
gv_vAlignTable['u1225'] = 'top';
var u1180 = document.getElementById('u1180');

var u1181 = document.getElementById('u1181');
gv_vAlignTable['u1181'] = 'top';
var u1182 = document.getElementById('u1182');

var u1183 = document.getElementById('u1183');
gv_vAlignTable['u1183'] = 'top';
var u1150 = document.getElementById('u1150');

var u1286 = document.getElementById('u1286');
gv_vAlignTable['u1286'] = 'center';
var u1186 = document.getElementById('u1186');

var u1187 = document.getElementById('u1187');
gv_vAlignTable['u1187'] = 'top';
var u1188 = document.getElementById('u1188');

var u1155 = document.getElementById('u1155');

if (bIE) u1155.attachEvent("onblur", LostFocusu1155);
else u1155.addEventListener("blur", LostFocusu1155, true);
function LostFocusu1155(e)
{

if (true) {

SetGlobalVariableValue('$yourEmail', GetWidgetFormText('u1155'));

}

}

var u1230 = document.getElementById('u1230');
gv_vAlignTable['u1230'] = 'top';
var u1231 = document.getElementById('u1231');

var u1232 = document.getElementById('u1232');

var u1233 = document.getElementById('u1233');
gv_vAlignTable['u1233'] = 'center';
var u1234 = document.getElementById('u1234');
gv_vAlignTable['u1234'] = 'top';
var u1235 = document.getElementById('u1235');

var u1192 = document.getElementById('u1192');

var u1193 = document.getElementById('u1193');
gv_vAlignTable['u1193'] = 'top';
var u1194 = document.getElementById('u1194');

u1194.style.cursor = 'pointer';
if (bIE) u1194.attachEvent("onclick", Clicku1194);
else u1194.addEventListener("click", Clicku1194, true);
function Clicku1194(e)
{

if (true) {

}

}
gv_vAlignTable['u1194'] = 'top';
var u1195 = document.getElementById('u1195');

var u1196 = document.getElementById('u1196');
gv_vAlignTable['u1196'] = 'top';
var u1299 = document.getElementById('u1299');

u1299.style.cursor = 'pointer';
if (bIE) u1299.attachEvent("onclick", Clicku1299);
else u1299.addEventListener("click", Clicku1299, true);
function Clicku1299(e)
{

if (true) {

	SetPanelStateu262("pd2u262");

	SetPanelStateu1293("pd0u1293");

}

}
gv_vAlignTable['u1299'] = 'top';
var u1240 = document.getElementById('u1240');

var u1241 = document.getElementById('u1241');
gv_vAlignTable['u1241'] = 'center';
var u1242 = document.getElementById('u1242');

var u1243 = document.getElementById('u1243');
gv_vAlignTable['u1243'] = 'center';
var u1244 = document.getElementById('u1244');

var u1245 = document.getElementById('u1245');
gv_vAlignTable['u1245'] = 'center';
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

var u1251 = document.getElementById('u1251');
gv_vAlignTable['u1251'] = 'top';
var u1252 = document.getElementById('u1252');

var u1253 = document.getElementById('u1253');
gv_vAlignTable['u1253'] = 'center';
var u1254 = document.getElementById('u1254');
gv_vAlignTable['u1254'] = 'top';
var u381 = document.getElementById('u381');
gv_vAlignTable['u381'] = 'top';
var u382 = document.getElementById('u382');

var u383 = document.getElementById('u383');
gv_vAlignTable['u383'] = 'top';
var u384 = document.getElementById('u384');

var u915 = document.getElementById('u915');
gv_vAlignTable['u915'] = 'center';
var u925 = document.getElementById('u925');
gv_vAlignTable['u925'] = 'center';
var u926 = document.getElementById('u926');

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

u8.style.cursor = 'pointer';
if (bIE) u8.attachEvent("onclick", Clicku8);
else u8.addEventListener("click", Clicku8, true);
function Clicku8(e)
{

if (true) {

	SetPanelVisibilityu0("hidden");

	SetPanelVisibilityu209("");

	BringToFront("u209");

}

}
gv_vAlignTable['u8'] = 'top';
var u9 = document.getElementById('u9');

var u12 = document.getElementById('u12');

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
gv_vAlignTable['u606'] = 'top';
var u607 = document.getElementById('u607');
gv_vAlignTable['u607'] = 'top';
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
gv_vAlignTable['u614'] = 'top';
var u615 = document.getElementById('u615');
gv_vAlignTable['u615'] = 'top';
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
gv_vAlignTable['u622'] = 'top';
var u623 = document.getElementById('u623');
gv_vAlignTable['u623'] = 'top';
var u624 = document.getElementById('u624');
gv_vAlignTable['u624'] = 'top';
var u625 = document.getElementById('u625');
gv_vAlignTable['u625'] = 'top';
var u626 = document.getElementById('u626');
gv_vAlignTable['u626'] = 'top';
var u627 = document.getElementById('u627');
gv_vAlignTable['u627'] = 'top';
var u628 = document.getElementById('u628');
gv_vAlignTable['u628'] = 'top';
var u629 = document.getElementById('u629');
gv_vAlignTable['u629'] = 'top';
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
gv_vAlignTable['u1003'] = 'center';
var u1009 = document.getElementById('u1009');
gv_vAlignTable['u1009'] = 'center';
var u630 = document.getElementById('u630');
gv_vAlignTable['u630'] = 'top';
var u631 = document.getElementById('u631');
gv_vAlignTable['u631'] = 'top';
var u632 = document.getElementById('u632');
gv_vAlignTable['u632'] = 'top';
var u633 = document.getElementById('u633');
gv_vAlignTable['u633'] = 'top';
var u634 = document.getElementById('u634');
gv_vAlignTable['u634'] = 'top';
var u635 = document.getElementById('u635');
gv_vAlignTable['u635'] = 'top';
var u636 = document.getElementById('u636');
gv_vAlignTable['u636'] = 'top';
var u637 = document.getElementById('u637');
gv_vAlignTable['u637'] = 'top';
var u638 = document.getElementById('u638');
gv_vAlignTable['u638'] = 'top';
var u639 = document.getElementById('u639');
gv_vAlignTable['u639'] = 'top';
var u1006 = document.getElementById('u1006');

var u1007 = document.getElementById('u1007');
gv_vAlignTable['u1007'] = 'center';
var u1008 = document.getElementById('u1008');

u1008.style.cursor = 'pointer';
if (bIE) u1008.attachEvent("onclick", Clicku1008);
else u1008.addEventListener("click", Clicku1008, true);
function Clicku1008(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u1008', 'u1009', sJsonu1009, false);
ApplyImageAndTextStyles('o', 'u972', 'u973', '', false);
ApplyImageAndTextStyles('o', 'u976', 'u977', '', false);
ApplyImageAndTextStyles('o', 'u980', 'u981', '', false);
ApplyImageAndTextStyles('o', 'u984', 'u985', '', false);
ApplyImageAndTextStyles('o', 'u992', 'u993', '', false);
ApplyImageAndTextStyles('o', 'u988', 'u989', '', false);
ApplyImageAndTextStyles('o', 'u1012', 'u1013', '', false);
ApplyImageAndTextStyles('o', 'u1004', 'u1005', '', false);
ApplyImageAndTextStyles('o', 'u1016', 'u1017', '', false);
ApplyImageAndTextStyles('o', 'u1000', 'u1001', '', false);
ApplyImageAndTextStyles('o', 'u996', 'u997', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('2XL'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u900 = document.getElementById('u900');
gv_vAlignTable['u900'] = 'center';
var u901 = document.getElementById('u901');

var u902 = document.getElementById('u902');

var u903 = document.getElementById('u903');
gv_vAlignTable['u903'] = 'center';
var u904 = document.getElementById('u904');

var u905 = document.getElementById('u905');
gv_vAlignTable['u905'] = 'center';
var u906 = document.getElementById('u906');

u906.style.cursor = 'pointer';
if (bIE) u906.attachEvent("onclick", Clicku906);
else u906.addEventListener("click", Clicku906, true);
function Clicku906(e)
{

if (true) {

	SetPanelStateu814("pd0u814");

	SetPanelStateu809("pd0u809");

}

}

var u907 = document.getElementById('u907');

u907.style.cursor = 'pointer';
if (bIE) u907.attachEvent("onclick", Clicku907);
else u907.addEventListener("click", Clicku907, true);
function Clicku907(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Not enabled for this test"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}
gv_vAlignTable['u907'] = 'top';
var u908 = document.getElementById('u908');

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

var u641 = document.getElementById('u641');
gv_vAlignTable['u641'] = 'center';
var u642 = document.getElementById('u642');

var u643 = document.getElementById('u643');
gv_vAlignTable['u643'] = 'top';
var u644 = document.getElementById('u644');

var u645 = document.getElementById('u645');
gv_vAlignTable['u645'] = 'top';
var u646 = document.getElementById('u646');
gv_vAlignTable['u646'] = 'top';
var u647 = document.getElementById('u647');

var u648 = document.getElementById('u648');
gv_vAlignTable['u648'] = 'top';
var u649 = document.getElementById('u649');

var u1016 = document.getElementById('u1016');

u1016.style.cursor = 'pointer';
if (bIE) u1016.attachEvent("onclick", Clicku1016);
else u1016.addEventListener("click", Clicku1016, true);
function Clicku1016(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u1016', 'u1017', sJsonu1017, false);
ApplyImageAndTextStyles('o', 'u972', 'u973', '', false);
ApplyImageAndTextStyles('o', 'u1012', 'u1013', '', false);
ApplyImageAndTextStyles('o', 'u1004', 'u1005', '', false);
ApplyImageAndTextStyles('o', 'u1008', 'u1009', '', false);
ApplyImageAndTextStyles('o', 'u1000', 'u1001', '', false);
ApplyImageAndTextStyles('o', 'u996', 'u997', '', false);
ApplyImageAndTextStyles('o', 'u992', 'u993', '', false);
ApplyImageAndTextStyles('o', 'u988', 'u989', '', false);
ApplyImageAndTextStyles('o', 'u984', 'u985', '', false);
ApplyImageAndTextStyles('o', 'u980', 'u981', '', false);
ApplyImageAndTextStyles('o', 'u976', 'u977', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('4XL'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u1017 = document.getElementById('u1017');
gv_vAlignTable['u1017'] = 'center';
var u1018 = document.getElementById('u1018');

var u910 = document.getElementById('u910');
gv_vAlignTable['u910'] = 'center';
var u911 = document.getElementById('u911');

var u912 = document.getElementById('u912');
gv_vAlignTable['u912'] = 'center';
var u913 = document.getElementById('u913');
gv_vAlignTable['u913'] = 'top';
var u914 = document.getElementById('u914');

var u380 = document.getElementById('u380');

var u916 = document.getElementById('u916');

u916.style.cursor = 'pointer';
if (bIE) u916.attachEvent("onclick", Clicku916);
else u916.addEventListener("click", Clicku916, true);
function Clicku916(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('Youth Extra Small'))) {

ApplyImageAndTextStyles('o', 'u920', 'u921', '', false);
ApplyImageAndTextStyles('s', 'u916', 'u917', sJsonu917, false);
ApplyImageAndTextStyles('o', 'u924', 'u925', '', false);
ApplyImageAndTextStyles('o', 'u928', 'u929', '', false);
ApplyImageAndTextStyles('o', 'u932', 'u933', '', false);
ApplyImageAndTextStyles('o', 'u936', 'u937', '', false);
ApplyImageAndTextStyles('o', 'u940', 'u941', '', false);
ApplyImageAndTextStyles('o', 'u944', 'u945', '', false);
ApplyImageAndTextStyles('o', 'u948', 'u949', '', false);
ApplyImageAndTextStyles('o', 'u952', 'u953', '', false);
ApplyImageAndTextStyles('o', 'u960', 'u961', '', false);
ApplyImageAndTextStyles('o', 'u956', 'u957', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('Youth Extra Small'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

ApplyImageAndTextStyles('s', 'u916', 'u917', sJsonu917, false);
ApplyImageAndTextStyles('o', 'u920', 'u921', '', false);
ApplyImageAndTextStyles('o', 'u924', 'u925', '', false);
ApplyImageAndTextStyles('o', 'u928', 'u929', '', false);
ApplyImageAndTextStyles('o', 'u932', 'u933', '', false);
ApplyImageAndTextStyles('o', 'u940', 'u941', '', false);
ApplyImageAndTextStyles('o', 'u944', 'u945', '', false);
ApplyImageAndTextStyles('o', 'u936', 'u937', '', false);
ApplyImageAndTextStyles('o', 'u956', 'u957', '', false);
ApplyImageAndTextStyles('o', 'u960', 'u961', '', false);
ApplyImageAndTextStyles('o', 'u948', 'u949', '', false);
ApplyImageAndTextStyles('o', 'u952', 'u953', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$NumCount', PopulateVariables('2'));

}

}

var u917 = document.getElementById('u917');
gv_vAlignTable['u917'] = 'center';
var u918 = document.getElementById('u918');

var u919 = document.getElementById('u919');
gv_vAlignTable['u919'] = 'center';
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
gv_vAlignTable['u651'] = 'top';
var u652 = document.getElementById('u652');
gv_vAlignTable['u652'] = 'top';
var u653 = document.getElementById('u653');

var u654 = document.getElementById('u654');
gv_vAlignTable['u654'] = 'top';
var u655 = document.getElementById('u655');
gv_vAlignTable['u655'] = 'top';
var u656 = document.getElementById('u656');
gv_vAlignTable['u656'] = 'top';
var u657 = document.getElementById('u657');

var u658 = document.getElementById('u658');
gv_vAlignTable['u658'] = 'top';
var u659 = document.getElementById('u659');
gv_vAlignTable['u659'] = 'top';
var u1023 = document.getElementById('u1023');
gv_vAlignTable['u1023'] = 'center';
var u1024 = document.getElementById('u1024');

var u1025 = document.getElementById('u1025');
gv_vAlignTable['u1025'] = 'center';
var u920 = document.getElementById('u920');

u920.style.cursor = 'pointer';
if (bIE) u920.attachEvent("onclick", Clicku920);
else u920.addEventListener("click", Clicku920, true);
function Clicku920(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('Youth Small'))) {

ApplyImageAndTextStyles('s', 'u920', 'u921', sJsonu921, false);
ApplyImageAndTextStyles('o', 'u916', 'u917', '', false);
ApplyImageAndTextStyles('o', 'u924', 'u925', '', false);
ApplyImageAndTextStyles('o', 'u932', 'u933', '', false);
ApplyImageAndTextStyles('o', 'u928', 'u929', '', false);
ApplyImageAndTextStyles('o', 'u936', 'u937', '', false);
ApplyImageAndTextStyles('o', 'u940', 'u941', '', false);
ApplyImageAndTextStyles('o', 'u944', 'u945', '', false);
ApplyImageAndTextStyles('o', 'u948', 'u949', '', false);
ApplyImageAndTextStyles('o', 'u952', 'u953', '', false);
ApplyImageAndTextStyles('o', 'u956', 'u957', '', false);
ApplyImageAndTextStyles('o', 'u960', 'u961', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('Youth Small'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$NumCount', PopulateVariables('2'));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

ApplyImageAndTextStyles('o', 'u916', 'u917', '', false);
ApplyImageAndTextStyles('s', 'u920', 'u921', sJsonu921, false);
ApplyImageAndTextStyles('o', 'u928', 'u929', '', false);
ApplyImageAndTextStyles('o', 'u932', 'u933', '', false);
ApplyImageAndTextStyles('o', 'u924', 'u925', '', false);
ApplyImageAndTextStyles('o', 'u936', 'u937', '', false);
ApplyImageAndTextStyles('o', 'u944', 'u945', '', false);
ApplyImageAndTextStyles('o', 'u940', 'u941', '', false);
ApplyImageAndTextStyles('o', 'u948', 'u949', '', false);
ApplyImageAndTextStyles('o', 'u952', 'u953', '', false);
ApplyImageAndTextStyles('o', 'u960', 'u961', '', false);
ApplyImageAndTextStyles('o', 'u956', 'u957', '', false);
}

}

var u921 = document.getElementById('u921');
gv_vAlignTable['u921'] = 'center';
var u922 = document.getElementById('u922');

var u923 = document.getElementById('u923');
gv_vAlignTable['u923'] = 'center';
var u924 = document.getElementById('u924');

u924.style.cursor = 'pointer';
if (bIE) u924.attachEvent("onclick", Clicku924);
else u924.addEventListener("click", Clicku924, true);
function Clicku924(e)
{

if ((GetGlobalVariableValue('$Qty1')) != (PopulateVariables('Youth Medium'))) {

ApplyImageAndTextStyles('s', 'u924', 'u925', sJsonu925, false);
ApplyImageAndTextStyles('o', 'u916', 'u917', '', false);
ApplyImageAndTextStyles('o', 'u920', 'u921', '', false);
ApplyImageAndTextStyles('o', 'u928', 'u929', '', false);
ApplyImageAndTextStyles('o', 'u932', 'u933', '', false);
ApplyImageAndTextStyles('o', 'u936', 'u937', '', false);
ApplyImageAndTextStyles('o', 'u940', 'u941', '', false);
ApplyImageAndTextStyles('o', 'u960', 'u961', '', false);
ApplyImageAndTextStyles('o', 'u956', 'u957', '', false);
ApplyImageAndTextStyles('o', 'u952', 'u953', '', false);
ApplyImageAndTextStyles('o', 'u948', 'u949', '', false);
ApplyImageAndTextStyles('o', 'u944', 'u945', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('Youth Medium'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$NumCount', PopulateVariables('2'));

ApplyImageAndTextStyles('o', 'u916', 'u917', '', false);
ApplyImageAndTextStyles('o', 'u920', 'u921', '', false);
ApplyImageAndTextStyles('o', 'u928', 'u929', '', false);
ApplyImageAndTextStyles('s', 'u924', 'u925', sJsonu925, false);
ApplyImageAndTextStyles('o', 'u932', 'u933', '', false);
ApplyImageAndTextStyles('o', 'u940', 'u941', '', false);
ApplyImageAndTextStyles('o', 'u944', 'u945', '', false);
ApplyImageAndTextStyles('o', 'u936', 'u937', '', false);
ApplyImageAndTextStyles('o', 'u948', 'u949', '', false);
ApplyImageAndTextStyles('o', 'u952', 'u953', '', false);
ApplyImageAndTextStyles('o', 'u956', 'u957', '', false);
ApplyImageAndTextStyles('o', 'u960', 'u961', '', false);
}

}

var u390 = document.getElementById('u390');

var u391 = document.getElementById('u391');
gv_vAlignTable['u391'] = 'top';
var u392 = document.getElementById('u392');

var u393 = document.getElementById('u393');
gv_vAlignTable['u393'] = 'center';
var u394 = document.getElementById('u394');

var u395 = document.getElementById('u395');

var u396 = document.getElementById('u396');
gv_vAlignTable['u396'] = 'top';
var u397 = document.getElementById('u397');

var u398 = document.getElementById('u398');
gv_vAlignTable['u398'] = 'top';
var u399 = document.getElementById('u399');

var u660 = document.getElementById('u660');
gv_vAlignTable['u660'] = 'top';
var u661 = document.getElementById('u661');

var u662 = document.getElementById('u662');
gv_vAlignTable['u662'] = 'top';
var u663 = document.getElementById('u663');
gv_vAlignTable['u663'] = 'top';
var u664 = document.getElementById('u664');

var u665 = document.getElementById('u665');
gv_vAlignTable['u665'] = 'top';
var u666 = document.getElementById('u666');
gv_vAlignTable['u666'] = 'top';
var u667 = document.getElementById('u667');

var u668 = document.getElementById('u668');
gv_vAlignTable['u668'] = 'top';
var u669 = document.getElementById('u669');
gv_vAlignTable['u669'] = 'top';
var u1032 = document.getElementById('u1032');
gv_vAlignTable['u1032'] = 'top';
var u1033 = document.getElementById('u1033');
gv_vAlignTable['u1033'] = 'top';
var u1034 = document.getElementById('u1034');

var u930 = document.getElementById('u930');

var u931 = document.getElementById('u931');
gv_vAlignTable['u931'] = 'center';
var u932 = document.getElementById('u932');

u932.style.cursor = 'pointer';
if (bIE) u932.attachEvent("onclick", Clicku932);
else u932.addEventListener("click", Clicku932, true);
function Clicku932(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('Youth Extra Large'))) {

ApplyImageAndTextStyles('s', 'u932', 'u933', sJsonu933, false);
ApplyImageAndTextStyles('o', 'u916', 'u917', '', false);
ApplyImageAndTextStyles('o', 'u920', 'u921', '', false);
ApplyImageAndTextStyles('o', 'u924', 'u925', '', false);
ApplyImageAndTextStyles('o', 'u928', 'u929', '', false);
ApplyImageAndTextStyles('o', 'u936', 'u937', '', false);
ApplyImageAndTextStyles('o', 'u940', 'u941', '', false);
ApplyImageAndTextStyles('o', 'u944', 'u945', '', false);
ApplyImageAndTextStyles('o', 'u948', 'u949', '', false);
ApplyImageAndTextStyles('o', 'u952', 'u953', '', false);
ApplyImageAndTextStyles('o', 'u956', 'u957', '', false);
ApplyImageAndTextStyles('o', 'u960', 'u961', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('Youth Extra Large'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$NumCount', PopulateVariables('2'));

ApplyImageAndTextStyles('o', 'u916', 'u917', '', false);
ApplyImageAndTextStyles('o', 'u924', 'u925', '', false);
ApplyImageAndTextStyles('o', 'u920', 'u921', '', false);
ApplyImageAndTextStyles('o', 'u928', 'u929', '', false);
ApplyImageAndTextStyles('s', 'u932', 'u933', sJsonu933, false);
ApplyImageAndTextStyles('o', 'u936', 'u937', '', false);
ApplyImageAndTextStyles('o', 'u944', 'u945', '', false);
ApplyImageAndTextStyles('o', 'u940', 'u941', '', false);
ApplyImageAndTextStyles('o', 'u960', 'u961', '', false);
ApplyImageAndTextStyles('o', 'u956', 'u957', '', false);
ApplyImageAndTextStyles('o', 'u952', 'u953', '', false);
ApplyImageAndTextStyles('o', 'u948', 'u949', '', false);
}

}

var u933 = document.getElementById('u933');
gv_vAlignTable['u933'] = 'center';
var u934 = document.getElementById('u934');

var u935 = document.getElementById('u935');
gv_vAlignTable['u935'] = 'center';
var u936 = document.getElementById('u936');

u936.style.cursor = 'pointer';
if (bIE) u936.attachEvent("onclick", Clicku936);
else u936.addEventListener("click", Clicku936, true);
function Clicku936(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('Small'))) {

ApplyImageAndTextStyles('s', 'u936', 'u937', sJsonu937, false);
ApplyImageAndTextStyles('o', 'u916', 'u917', '', false);
ApplyImageAndTextStyles('o', 'u920', 'u921', '', false);
ApplyImageAndTextStyles('o', 'u924', 'u925', '', false);
ApplyImageAndTextStyles('o', 'u928', 'u929', '', false);
ApplyImageAndTextStyles('o', 'u932', 'u933', '', false);
ApplyImageAndTextStyles('o', 'u940', 'u941', '', false);
ApplyImageAndTextStyles('o', 'u944', 'u945', '', false);
ApplyImageAndTextStyles('o', 'u952', 'u953', '', false);
ApplyImageAndTextStyles('o', 'u956', 'u957', '', false);
ApplyImageAndTextStyles('o', 'u948', 'u949', '', false);
ApplyImageAndTextStyles('o', 'u960', 'u961', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('Small'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$NumCount', PopulateVariables('2'));

ApplyImageAndTextStyles('o', 'u916', 'u917', '', false);
ApplyImageAndTextStyles('o', 'u920', 'u921', '', false);
ApplyImageAndTextStyles('o', 'u928', 'u929', '', false);
ApplyImageAndTextStyles('o', 'u924', 'u925', '', false);
ApplyImageAndTextStyles('o', 'u932', 'u933', '', false);
ApplyImageAndTextStyles('s', 'u936', 'u937', sJsonu937, false);
ApplyImageAndTextStyles('o', 'u944', 'u945', '', false);
ApplyImageAndTextStyles('o', 'u940', 'u941', '', false);
ApplyImageAndTextStyles('o', 'u948', 'u949', '', false);
ApplyImageAndTextStyles('o', 'u952', 'u953', '', false);
ApplyImageAndTextStyles('o', 'u960', 'u961', '', false);
ApplyImageAndTextStyles('o', 'u956', 'u957', '', false);
}

}

var u937 = document.getElementById('u937');
gv_vAlignTable['u937'] = 'center';
var u938 = document.getElementById('u938');

var u939 = document.getElementById('u939');
gv_vAlignTable['u939'] = 'center';
var u670 = document.getElementById('u670');

var u671 = document.getElementById('u671');
gv_vAlignTable['u671'] = 'top';
var u672 = document.getElementById('u672');
gv_vAlignTable['u672'] = 'top';
var u673 = document.getElementById('u673');

var u674 = document.getElementById('u674');
gv_vAlignTable['u674'] = 'top';
var u675 = document.getElementById('u675');
gv_vAlignTable['u675'] = 'top';
var u676 = document.getElementById('u676');

var u677 = document.getElementById('u677');
gv_vAlignTable['u677'] = 'top';
var u678 = document.getElementById('u678');
gv_vAlignTable['u678'] = 'top';
var u679 = document.getElementById('u679');

var u1046 = document.getElementById('u1046');
gv_vAlignTable['u1046'] = 'center';
var u1040 = document.getElementById('u1040');
gv_vAlignTable['u1040'] = 'center';
var u1041 = document.getElementById('u1041');

u1041.style.cursor = 'pointer';
if (bIE) u1041.attachEvent("onclick", Clicku1041);
else u1041.addEventListener("click", Clicku1041, true);
function Clicku1041(e)
{

if (true) {

ApplyImageAndTextStyles('o', 'u1045', 'u1046', '', false);
ApplyImageAndTextStyles('s', 'u1041', 'u1042', sJsonu1042, false);
ApplyImageAndTextStyles('o', 'u1049', 'u1050', '', false);
ApplyImageAndTextStyles('o', 'u1053', 'u1054', '', false);
ApplyImageAndTextStyles('o', 'u1057', 'u1058', '', false);
ApplyImageAndTextStyles('o', 'u1061', 'u1062', '', false);
ApplyImageAndTextStyles('o', 'u1065', 'u1066', '', false);
ApplyImageAndTextStyles('o', 'u1069', 'u1070', '', false);
ApplyImageAndTextStyles('o', 'u1073', 'u1074', '', false);
ApplyImageAndTextStyles('o', 'u1077', 'u1078', '', false);
ApplyImageAndTextStyles('o', 'u1085', 'u1086', '', false);
ApplyImageAndTextStyles('o', 'u1081', 'u1082', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Youth Extra Small'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u940 = document.getElementById('u940');

u940.style.cursor = 'pointer';
if (bIE) u940.attachEvent("onclick", Clicku940);
else u940.addEventListener("click", Clicku940, true);
function Clicku940(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('Medium'))) {

ApplyImageAndTextStyles('s', 'u940', 'u941', sJsonu941, false);
ApplyImageAndTextStyles('o', 'u916', 'u917', '', false);
ApplyImageAndTextStyles('o', 'u920', 'u921', '', false);
ApplyImageAndTextStyles('o', 'u928', 'u929', '', false);
ApplyImageAndTextStyles('o', 'u936', 'u937', '', false);
ApplyImageAndTextStyles('o', 'u924', 'u925', '', false);
ApplyImageAndTextStyles('o', 'u932', 'u933', '', false);
ApplyImageAndTextStyles('o', 'u944', 'u945', '', false);
ApplyImageAndTextStyles('o', 'u956', 'u957', '', false);
ApplyImageAndTextStyles('o', 'u952', 'u953', '', false);
ApplyImageAndTextStyles('o', 'u948', 'u949', '', false);
ApplyImageAndTextStyles('o', 'u960', 'u961', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('Medium'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$NumCount', PopulateVariables('2'));

ApplyImageAndTextStyles('o', 'u916', 'u917', '', false);
ApplyImageAndTextStyles('o', 'u920', 'u921', '', false);
ApplyImageAndTextStyles('o', 'u924', 'u925', '', false);
ApplyImageAndTextStyles('o', 'u932', 'u933', '', false);
ApplyImageAndTextStyles('o', 'u928', 'u929', '', false);
ApplyImageAndTextStyles('o', 'u944', 'u945', '', false);
ApplyImageAndTextStyles('s', 'u940', 'u941', sJsonu941, false);
ApplyImageAndTextStyles('o', 'u936', 'u937', '', false);
ApplyImageAndTextStyles('o', 'u948', 'u949', '', false);
ApplyImageAndTextStyles('o', 'u952', 'u953', '', false);
ApplyImageAndTextStyles('o', 'u956', 'u957', '', false);
ApplyImageAndTextStyles('o', 'u960', 'u961', '', false);
}

}

var u941 = document.getElementById('u941');
gv_vAlignTable['u941'] = 'center';
var u942 = document.getElementById('u942');

var u943 = document.getElementById('u943');
gv_vAlignTable['u943'] = 'center';
var u944 = document.getElementById('u944');

u944.style.cursor = 'pointer';
if (bIE) u944.attachEvent("onclick", Clicku944);
else u944.addEventListener("click", Clicku944, true);
function Clicku944(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('Large'))) {

ApplyImageAndTextStyles('s', 'u944', 'u945', sJsonu945, false);
ApplyImageAndTextStyles('o', 'u916', 'u917', '', false);
ApplyImageAndTextStyles('o', 'u920', 'u921', '', false);
ApplyImageAndTextStyles('o', 'u932', 'u933', '', false);
ApplyImageAndTextStyles('o', 'u936', 'u937', '', false);
ApplyImageAndTextStyles('o', 'u940', 'u941', '', false);
ApplyImageAndTextStyles('o', 'u924', 'u925', '', false);
ApplyImageAndTextStyles('o', 'u928', 'u929', '', false);
ApplyImageAndTextStyles('o', 'u952', 'u953', '', false);
ApplyImageAndTextStyles('o', 'u960', 'u961', '', false);
ApplyImageAndTextStyles('o', 'u956', 'u957', '', false);
ApplyImageAndTextStyles('o', 'u948', 'u949', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('Large'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$NumCount', PopulateVariables('2'));

ApplyImageAndTextStyles('o', 'u916', 'u917', '', false);
ApplyImageAndTextStyles('o', 'u920', 'u921', '', false);
ApplyImageAndTextStyles('o', 'u928', 'u929', '', false);
ApplyImageAndTextStyles('o', 'u932', 'u933', '', false);
ApplyImageAndTextStyles('o', 'u924', 'u925', '', false);
ApplyImageAndTextStyles('o', 'u936', 'u937', '', false);
ApplyImageAndTextStyles('o', 'u940', 'u941', '', false);
ApplyImageAndTextStyles('o', 'u948', 'u949', '', false);
ApplyImageAndTextStyles('o', 'u952', 'u953', '', false);
ApplyImageAndTextStyles('s', 'u944', 'u945', sJsonu945, false);
ApplyImageAndTextStyles('o', 'u960', 'u961', '', false);
ApplyImageAndTextStyles('o', 'u956', 'u957', '', false);
}

}

var u945 = document.getElementById('u945');
gv_vAlignTable['u945'] = 'center';
var u946 = document.getElementById('u946');

var u947 = document.getElementById('u947');
gv_vAlignTable['u947'] = 'center';
var u948 = document.getElementById('u948');

u948.style.cursor = 'pointer';
if (bIE) u948.attachEvent("onclick", Clicku948);
else u948.addEventListener("click", Clicku948, true);
function Clicku948(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('Extra Large'))) {

ApplyImageAndTextStyles('s', 'u948', 'u949', sJsonu949, false);
ApplyImageAndTextStyles('o', 'u916', 'u917', '', false);
ApplyImageAndTextStyles('o', 'u920', 'u921', '', false);
ApplyImageAndTextStyles('o', 'u928', 'u929', '', false);
ApplyImageAndTextStyles('o', 'u936', 'u937', '', false);
ApplyImageAndTextStyles('o', 'u924', 'u925', '', false);
ApplyImageAndTextStyles('o', 'u932', 'u933', '', false);
ApplyImageAndTextStyles('o', 'u940', 'u941', '', false);
ApplyImageAndTextStyles('o', 'u944', 'u945', '', false);
ApplyImageAndTextStyles('o', 'u952', 'u953', '', false);
ApplyImageAndTextStyles('o', 'u960', 'u961', '', false);
ApplyImageAndTextStyles('o', 'u956', 'u957', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('Extra Large'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$NumCount', PopulateVariables('2'));

ApplyImageAndTextStyles('o', 'u916', 'u917', '', false);
ApplyImageAndTextStyles('o', 'u924', 'u925', '', false);
ApplyImageAndTextStyles('o', 'u920', 'u921', '', false);
ApplyImageAndTextStyles('o', 'u932', 'u933', '', false);
ApplyImageAndTextStyles('o', 'u936', 'u937', '', false);
ApplyImageAndTextStyles('o', 'u940', 'u941', '', false);
ApplyImageAndTextStyles('o', 'u928', 'u929', '', false);
ApplyImageAndTextStyles('o', 'u944', 'u945', '', false);
ApplyImageAndTextStyles('s', 'u948', 'u949', sJsonu949, false);
ApplyImageAndTextStyles('o', 'u956', 'u957', '', false);
ApplyImageAndTextStyles('o', 'u952', 'u953', '', false);
ApplyImageAndTextStyles('o', 'u960', 'u961', '', false);
}

}

var u949 = document.getElementById('u949');
gv_vAlignTable['u949'] = 'center';
var u680 = document.getElementById('u680');
gv_vAlignTable['u680'] = 'top';
var u681 = document.getElementById('u681');
gv_vAlignTable['u681'] = 'top';
var u682 = document.getElementById('u682');

var u683 = document.getElementById('u683');
gv_vAlignTable['u683'] = 'top';
var u684 = document.getElementById('u684');
gv_vAlignTable['u684'] = 'top';
var u685 = document.getElementById('u685');

var u686 = document.getElementById('u686');
gv_vAlignTable['u686'] = 'top';
var u687 = document.getElementById('u687');
gv_vAlignTable['u687'] = 'top';
var u688 = document.getElementById('u688');

var u689 = document.getElementById('u689');
gv_vAlignTable['u689'] = 'top';
var u1056 = document.getElementById('u1056');
gv_vAlignTable['u1056'] = 'center';
var u1057 = document.getElementById('u1057');

u1057.style.cursor = 'pointer';
if (bIE) u1057.attachEvent("onclick", Clicku1057);
else u1057.addEventListener("click", Clicku1057, true);
function Clicku1057(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u1057', 'u1058', sJsonu1058, false);
ApplyImageAndTextStyles('o', 'u1041', 'u1042', '', false);
ApplyImageAndTextStyles('o', 'u1045', 'u1046', '', false);
ApplyImageAndTextStyles('o', 'u1049', 'u1050', '', false);
ApplyImageAndTextStyles('o', 'u1053', 'u1054', '', false);
ApplyImageAndTextStyles('o', 'u1061', 'u1062', '', false);
ApplyImageAndTextStyles('o', 'u1065', 'u1066', '', false);
ApplyImageAndTextStyles('o', 'u1069', 'u1070', '', false);
ApplyImageAndTextStyles('o', 'u1073', 'u1074', '', false);
ApplyImageAndTextStyles('o', 'u1077', 'u1078', '', false);
ApplyImageAndTextStyles('o', 'u1081', 'u1082', '', false);
ApplyImageAndTextStyles('o', 'u1085', 'u1086', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Youth Extra Large'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u1058 = document.getElementById('u1058');
gv_vAlignTable['u1058'] = 'center';
var u950 = document.getElementById('u950');

var u951 = document.getElementById('u951');
gv_vAlignTable['u951'] = 'center';
var u952 = document.getElementById('u952');

u952.style.cursor = 'pointer';
if (bIE) u952.attachEvent("onclick", Clicku952);
else u952.addEventListener("click", Clicku952, true);
function Clicku952(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('2XL'))) {

ApplyImageAndTextStyles('s', 'u952', 'u953', sJsonu953, false);
ApplyImageAndTextStyles('o', 'u916', 'u917', '', false);
ApplyImageAndTextStyles('o', 'u920', 'u921', '', false);
ApplyImageAndTextStyles('o', 'u924', 'u925', '', false);
ApplyImageAndTextStyles('o', 'u928', 'u929', '', false);
ApplyImageAndTextStyles('o', 'u936', 'u937', '', false);
ApplyImageAndTextStyles('o', 'u932', 'u933', '', false);
ApplyImageAndTextStyles('o', 'u956', 'u957', '', false);
ApplyImageAndTextStyles('o', 'u948', 'u949', '', false);
ApplyImageAndTextStyles('o', 'u960', 'u961', '', false);
ApplyImageAndTextStyles('o', 'u944', 'u945', '', false);
ApplyImageAndTextStyles('o', 'u940', 'u941', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('2XL'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

ApplyImageAndTextStyles('o', 'u916', 'u917', '', false);
ApplyImageAndTextStyles('o', 'u920', 'u921', '', false);
ApplyImageAndTextStyles('o', 'u924', 'u925', '', false);
ApplyImageAndTextStyles('o', 'u928', 'u929', '', false);
ApplyImageAndTextStyles('o', 'u936', 'u937', '', false);
ApplyImageAndTextStyles('o', 'u932', 'u933', '', false);
ApplyImageAndTextStyles('o', 'u940', 'u941', '', false);
ApplyImageAndTextStyles('o', 'u944', 'u945', '', false);
ApplyImageAndTextStyles('o', 'u948', 'u949', '', false);
ApplyImageAndTextStyles('s', 'u952', 'u953', sJsonu953, false);
ApplyImageAndTextStyles('o', 'u956', 'u957', '', false);
ApplyImageAndTextStyles('o', 'u960', 'u961', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$NumCount', PopulateVariables('2'));

}

}

var u953 = document.getElementById('u953');
gv_vAlignTable['u953'] = 'center';
var u954 = document.getElementById('u954');

var u955 = document.getElementById('u955');
gv_vAlignTable['u955'] = 'center';
var u956 = document.getElementById('u956');

u956.style.cursor = 'pointer';
if (bIE) u956.attachEvent("onclick", Clicku956);
else u956.addEventListener("click", Clicku956, true);
function Clicku956(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('3XL'))) {

ApplyImageAndTextStyles('s', 'u956', 'u957', sJsonu957, false);
ApplyImageAndTextStyles('o', 'u916', 'u917', '', false);
ApplyImageAndTextStyles('o', 'u920', 'u921', '', false);
ApplyImageAndTextStyles('o', 'u928', 'u929', '', false);
ApplyImageAndTextStyles('o', 'u924', 'u925', '', false);
ApplyImageAndTextStyles('o', 'u932', 'u933', '', false);
ApplyImageAndTextStyles('o', 'u936', 'u937', '', false);
ApplyImageAndTextStyles('o', 'u952', 'u953', '', false);
ApplyImageAndTextStyles('o', 'u948', 'u949', '', false);
ApplyImageAndTextStyles('o', 'u944', 'u945', '', false);
ApplyImageAndTextStyles('o', 'u940', 'u941', '', false);
ApplyImageAndTextStyles('o', 'u960', 'u961', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('3XL'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

ApplyImageAndTextStyles('o', 'u916', 'u917', '', false);
ApplyImageAndTextStyles('o', 'u924', 'u925', '', false);
ApplyImageAndTextStyles('o', 'u920', 'u921', '', false);
ApplyImageAndTextStyles('o', 'u928', 'u929', '', false);
ApplyImageAndTextStyles('o', 'u932', 'u933', '', false);
ApplyImageAndTextStyles('o', 'u936', 'u937', '', false);
ApplyImageAndTextStyles('o', 'u944', 'u945', '', false);
ApplyImageAndTextStyles('o', 'u940', 'u941', '', false);
ApplyImageAndTextStyles('o', 'u948', 'u949', '', false);
ApplyImageAndTextStyles('o', 'u952', 'u953', '', false);
ApplyImageAndTextStyles('o', 'u960', 'u961', '', false);
ApplyImageAndTextStyles('s', 'u956', 'u957', sJsonu957, false);
SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$NumCount', PopulateVariables('2'));

}

}

var u957 = document.getElementById('u957');
gv_vAlignTable['u957'] = 'center';
var u958 = document.getElementById('u958');

var u959 = document.getElementById('u959');
gv_vAlignTable['u959'] = 'center';
var u1100 = document.getElementById('u1100');

var u1104 = document.getElementById('u1104');
gv_vAlignTable['u1104'] = 'top';
var u690 = document.getElementById('u690');
gv_vAlignTable['u690'] = 'top';
var u691 = document.getElementById('u691');

var u692 = document.getElementById('u692');
gv_vAlignTable['u692'] = 'top';
var u693 = document.getElementById('u693');
gv_vAlignTable['u693'] = 'top';
var u694 = document.getElementById('u694');

var u695 = document.getElementById('u695');
gv_vAlignTable['u695'] = 'top';
var u696 = document.getElementById('u696');
gv_vAlignTable['u696'] = 'top';
var u697 = document.getElementById('u697');

var u698 = document.getElementById('u698');
gv_vAlignTable['u698'] = 'top';
var u699 = document.getElementById('u699');
gv_vAlignTable['u699'] = 'top';
var u1066 = document.getElementById('u1066');
gv_vAlignTable['u1066'] = 'center';
var u1067 = document.getElementById('u1067');

var u1068 = document.getElementById('u1068');
gv_vAlignTable['u1068'] = 'center';
var u960 = document.getElementById('u960');

u960.style.cursor = 'pointer';
if (bIE) u960.attachEvent("onclick", Clicku960);
else u960.addEventListener("click", Clicku960, true);
function Clicku960(e)
{

if ((GetGlobalVariableValue('$Size1')) != (PopulateVariables('4XL'))) {

ApplyImageAndTextStyles('s', 'u960', 'u961', sJsonu961, false);
ApplyImageAndTextStyles('o', 'u916', 'u917', '', false);
ApplyImageAndTextStyles('o', 'u956', 'u957', '', false);
ApplyImageAndTextStyles('o', 'u948', 'u949', '', false);
ApplyImageAndTextStyles('o', 'u952', 'u953', '', false);
ApplyImageAndTextStyles('o', 'u944', 'u945', '', false);
ApplyImageAndTextStyles('o', 'u940', 'u941', '', false);
ApplyImageAndTextStyles('o', 'u936', 'u937', '', false);
ApplyImageAndTextStyles('o', 'u932', 'u933', '', false);
ApplyImageAndTextStyles('o', 'u928', 'u929', '', false);
ApplyImageAndTextStyles('o', 'u924', 'u925', '', false);
ApplyImageAndTextStyles('o', 'u920', 'u921', '', false);
SetGlobalVariableValue('$Size2', PopulateVariables('4XL'));

SetGlobalVariableValue('$Qty2', PopulateVariables('1'));

}
else
if (true) {

ApplyImageAndTextStyles('o', 'u916', 'u917', '', false);
ApplyImageAndTextStyles('o', 'u924', 'u925', '', false);
ApplyImageAndTextStyles('o', 'u920', 'u921', '', false);
ApplyImageAndTextStyles('o', 'u928', 'u929', '', false);
ApplyImageAndTextStyles('o', 'u936', 'u937', '', false);
ApplyImageAndTextStyles('o', 'u940', 'u941', '', false);
ApplyImageAndTextStyles('o', 'u944', 'u945', '', false);
ApplyImageAndTextStyles('o', 'u948', 'u949', '', false);
ApplyImageAndTextStyles('o', 'u932', 'u933', '', false);
ApplyImageAndTextStyles('o', 'u952', 'u953', '', false);
ApplyImageAndTextStyles('o', 'u956', 'u957', '', false);
ApplyImageAndTextStyles('s', 'u960', 'u961', sJsonu961, false);
SetGlobalVariableValue('$Size2', PopulateVariables(''));

SetGlobalVariableValue('$Qty2', PopulateVariables('0'));

SetGlobalVariableValue('$NumCount', PopulateVariables('2'));

}

}

var u961 = document.getElementById('u961');
gv_vAlignTable['u961'] = 'center';
var u962 = document.getElementById('u962');

u962.style.cursor = 'pointer';
if (bIE) u962.attachEvent("onclick", Clicku962);
else u962.addEventListener("click", Clicku962, true);
function Clicku962(e)
{

if (true) {

	SetPanelStateu793("pd0u793");

	SetPanelStateu1018("pd0u1018");

;

}

}

var u963 = document.getElementById('u963');
gv_vAlignTable['u963'] = 'top';
var u964 = document.getElementById('u964');
gv_vAlignTable['u964'] = 'top';
var u965 = document.getElementById('u965');

var u966 = document.getElementById('u966');
gv_vAlignTable['u966'] = 'top';
var u967 = document.getElementById('u967');

var u968 = document.getElementById('u968');
gv_vAlignTable['u968'] = 'top';
var u969 = document.getElementById('u969');

var u1070 = document.getElementById('u1070');
gv_vAlignTable['u1070'] = 'center';
var u1071 = document.getElementById('u1071');

var u1072 = document.getElementById('u1072');
gv_vAlignTable['u1072'] = 'center';
var u1073 = document.getElementById('u1073');

u1073.style.cursor = 'pointer';
if (bIE) u1073.attachEvent("onclick", Clicku1073);
else u1073.addEventListener("click", Clicku1073, true);
function Clicku1073(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u887', 'u888', sJsonu888, false);
	SetPanelStateu1027("pd0u1027");

SetGlobalVariableValue('$Size1', PopulateVariables('Extra Large'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

	SetPanelVisibilityu1027("hidden");

	MoveWidgetTo('u1027',0,800);

}

}

var u1074 = document.getElementById('u1074');
gv_vAlignTable['u1074'] = 'center';
var u1075 = document.getElementById('u1075');

var u1076 = document.getElementById('u1076');
gv_vAlignTable['u1076'] = 'center';
var u1077 = document.getElementById('u1077');

u1077.style.cursor = 'pointer';
if (bIE) u1077.attachEvent("onclick", Clicku1077);
else u1077.addEventListener("click", Clicku1077, true);
function Clicku1077(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u1077', 'u1078', sJsonu1078, false);
ApplyImageAndTextStyles('o', 'u1041', 'u1042', '', false);
ApplyImageAndTextStyles('o', 'u1045', 'u1046', '', false);
ApplyImageAndTextStyles('o', 'u1049', 'u1050', '', false);
ApplyImageAndTextStyles('o', 'u1053', 'u1054', '', false);
ApplyImageAndTextStyles('o', 'u1061', 'u1062', '', false);
ApplyImageAndTextStyles('o', 'u1057', 'u1058', '', false);
ApplyImageAndTextStyles('o', 'u1081', 'u1082', '', false);
ApplyImageAndTextStyles('o', 'u1073', 'u1074', '', false);
ApplyImageAndTextStyles('o', 'u1085', 'u1086', '', false);
ApplyImageAndTextStyles('o', 'u1069', 'u1070', '', false);
ApplyImageAndTextStyles('o', 'u1065', 'u1066', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('2XL'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u1078 = document.getElementById('u1078');
gv_vAlignTable['u1078'] = 'center';
var u970 = document.getElementById('u970');

var u971 = document.getElementById('u971');
gv_vAlignTable['u971'] = 'center';
var u972 = document.getElementById('u972');

u972.style.cursor = 'pointer';
if (bIE) u972.attachEvent("onclick", Clicku972);
else u972.addEventListener("click", Clicku972, true);
function Clicku972(e)
{

if (true) {

ApplyImageAndTextStyles('o', 'u976', 'u977', '', false);
ApplyImageAndTextStyles('s', 'u972', 'u973', sJsonu973, false);
ApplyImageAndTextStyles('o', 'u980', 'u981', '', false);
ApplyImageAndTextStyles('o', 'u984', 'u985', '', false);
ApplyImageAndTextStyles('o', 'u988', 'u989', '', false);
ApplyImageAndTextStyles('o', 'u992', 'u993', '', false);
ApplyImageAndTextStyles('o', 'u996', 'u997', '', false);
ApplyImageAndTextStyles('o', 'u1000', 'u1001', '', false);
ApplyImageAndTextStyles('o', 'u1004', 'u1005', '', false);
ApplyImageAndTextStyles('o', 'u1008', 'u1009', '', false);
ApplyImageAndTextStyles('o', 'u1016', 'u1017', '', false);
ApplyImageAndTextStyles('o', 'u1012', 'u1013', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Youth Extra Small'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u973 = document.getElementById('u973');
gv_vAlignTable['u973'] = 'center';
var u974 = document.getElementById('u974');

var u975 = document.getElementById('u975');
gv_vAlignTable['u975'] = 'center';
var u976 = document.getElementById('u976');

u976.style.cursor = 'pointer';
if (bIE) u976.attachEvent("onclick", Clicku976);
else u976.addEventListener("click", Clicku976, true);
function Clicku976(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u976', 'u977', sJsonu977, false);
ApplyImageAndTextStyles('o', 'u972', 'u973', '', false);
ApplyImageAndTextStyles('o', 'u980', 'u981', '', false);
ApplyImageAndTextStyles('o', 'u988', 'u989', '', false);
ApplyImageAndTextStyles('o', 'u984', 'u985', '', false);
ApplyImageAndTextStyles('o', 'u992', 'u993', '', false);
ApplyImageAndTextStyles('o', 'u996', 'u997', '', false);
ApplyImageAndTextStyles('o', 'u1000', 'u1001', '', false);
ApplyImageAndTextStyles('o', 'u1004', 'u1005', '', false);
ApplyImageAndTextStyles('o', 'u1008', 'u1009', '', false);
ApplyImageAndTextStyles('o', 'u1012', 'u1013', '', false);
ApplyImageAndTextStyles('o', 'u1016', 'u1017', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Youth Small'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u977 = document.getElementById('u977');
gv_vAlignTable['u977'] = 'center';
var u978 = document.getElementById('u978');

var u979 = document.getElementById('u979');
gv_vAlignTable['u979'] = 'center';
var u1080 = document.getElementById('u1080');
gv_vAlignTable['u1080'] = 'center';
var u1081 = document.getElementById('u1081');

u1081.style.cursor = 'pointer';
if (bIE) u1081.attachEvent("onclick", Clicku1081);
else u1081.addEventListener("click", Clicku1081, true);
function Clicku1081(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u1081', 'u1082', sJsonu1082, false);
ApplyImageAndTextStyles('o', 'u1041', 'u1042', '', false);
ApplyImageAndTextStyles('o', 'u1045', 'u1046', '', false);
ApplyImageAndTextStyles('o', 'u1053', 'u1054', '', false);
ApplyImageAndTextStyles('o', 'u1049', 'u1050', '', false);
ApplyImageAndTextStyles('o', 'u1057', 'u1058', '', false);
ApplyImageAndTextStyles('o', 'u1061', 'u1062', '', false);
ApplyImageAndTextStyles('o', 'u1077', 'u1078', '', false);
ApplyImageAndTextStyles('o', 'u1073', 'u1074', '', false);
ApplyImageAndTextStyles('o', 'u1069', 'u1070', '', false);
ApplyImageAndTextStyles('o', 'u1065', 'u1066', '', false);
ApplyImageAndTextStyles('o', 'u1085', 'u1086', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('3XL'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u1082 = document.getElementById('u1082');
gv_vAlignTable['u1082'] = 'center';
var u1083 = document.getElementById('u1083');

var u1084 = document.getElementById('u1084');
gv_vAlignTable['u1084'] = 'center';
var u1085 = document.getElementById('u1085');

u1085.style.cursor = 'pointer';
if (bIE) u1085.attachEvent("onclick", Clicku1085);
else u1085.addEventListener("click", Clicku1085, true);
function Clicku1085(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u1085', 'u1086', sJsonu1086, false);
ApplyImageAndTextStyles('o', 'u1041', 'u1042', '', false);
ApplyImageAndTextStyles('o', 'u1081', 'u1082', '', false);
ApplyImageAndTextStyles('o', 'u1073', 'u1074', '', false);
ApplyImageAndTextStyles('o', 'u1077', 'u1078', '', false);
ApplyImageAndTextStyles('o', 'u1069', 'u1070', '', false);
ApplyImageAndTextStyles('o', 'u1065', 'u1066', '', false);
ApplyImageAndTextStyles('o', 'u1061', 'u1062', '', false);
ApplyImageAndTextStyles('o', 'u1057', 'u1058', '', false);
ApplyImageAndTextStyles('o', 'u1053', 'u1054', '', false);
ApplyImageAndTextStyles('o', 'u1049', 'u1050', '', false);
ApplyImageAndTextStyles('o', 'u1045', 'u1046', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('4XL'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u1086 = document.getElementById('u1086');
gv_vAlignTable['u1086'] = 'center';
var u1087 = document.getElementById('u1087');

var u1088 = document.getElementById('u1088');

var u980 = document.getElementById('u980');

u980.style.cursor = 'pointer';
if (bIE) u980.attachEvent("onclick", Clicku980);
else u980.addEventListener("click", Clicku980, true);
function Clicku980(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u980', 'u981', sJsonu981, false);
ApplyImageAndTextStyles('o', 'u972', 'u973', '', false);
ApplyImageAndTextStyles('o', 'u976', 'u977', '', false);
ApplyImageAndTextStyles('o', 'u984', 'u985', '', false);
ApplyImageAndTextStyles('o', 'u988', 'u989', '', false);
ApplyImageAndTextStyles('o', 'u992', 'u993', '', false);
ApplyImageAndTextStyles('o', 'u996', 'u997', '', false);
ApplyImageAndTextStyles('o', 'u1016', 'u1017', '', false);
ApplyImageAndTextStyles('o', 'u1012', 'u1013', '', false);
ApplyImageAndTextStyles('o', 'u1008', 'u1009', '', false);
ApplyImageAndTextStyles('o', 'u1004', 'u1005', '', false);
ApplyImageAndTextStyles('o', 'u1000', 'u1001', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Youth Medium'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u981 = document.getElementById('u981');
gv_vAlignTable['u981'] = 'center';
var u982 = document.getElementById('u982');

var u983 = document.getElementById('u983');
gv_vAlignTable['u983'] = 'center';
var u984 = document.getElementById('u984');

u984.style.cursor = 'pointer';
if (bIE) u984.attachEvent("onclick", Clicku984);
else u984.addEventListener("click", Clicku984, true);
function Clicku984(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u984', 'u985', sJsonu985, false);
ApplyImageAndTextStyles('o', 'u972', 'u973', '', false);
ApplyImageAndTextStyles('o', 'u976', 'u977', '', false);
ApplyImageAndTextStyles('o', 'u988', 'u989', '', false);
ApplyImageAndTextStyles('o', 'u996', 'u997', '', false);
ApplyImageAndTextStyles('o', 'u980', 'u981', '', false);
ApplyImageAndTextStyles('o', 'u992', 'u993', '', false);
ApplyImageAndTextStyles('o', 'u1000', 'u1001', '', false);
ApplyImageAndTextStyles('o', 'u1004', 'u1005', '', false);
ApplyImageAndTextStyles('o', 'u1008', 'u1009', '', false);
ApplyImageAndTextStyles('o', 'u1012', 'u1013', '', false);
ApplyImageAndTextStyles('o', 'u1016', 'u1017', '', false);
SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

SetGlobalVariableValue('$Size1', PopulateVariables('Youth Large'));

}

}

var u985 = document.getElementById('u985');
gv_vAlignTable['u985'] = 'center';
var u986 = document.getElementById('u986');

var u987 = document.getElementById('u987');
gv_vAlignTable['u987'] = 'center';
var u988 = document.getElementById('u988');

u988.style.cursor = 'pointer';
if (bIE) u988.attachEvent("onclick", Clicku988);
else u988.addEventListener("click", Clicku988, true);
function Clicku988(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u988', 'u989', sJsonu989, false);
ApplyImageAndTextStyles('o', 'u972', 'u973', '', false);
ApplyImageAndTextStyles('o', 'u976', 'u977', '', false);
ApplyImageAndTextStyles('o', 'u980', 'u981', '', false);
ApplyImageAndTextStyles('o', 'u984', 'u985', '', false);
ApplyImageAndTextStyles('o', 'u992', 'u993', '', false);
ApplyImageAndTextStyles('o', 'u996', 'u997', '', false);
ApplyImageAndTextStyles('o', 'u1000', 'u1001', '', false);
ApplyImageAndTextStyles('o', 'u1004', 'u1005', '', false);
ApplyImageAndTextStyles('o', 'u1008', 'u1009', '', false);
ApplyImageAndTextStyles('o', 'u1012', 'u1013', '', false);
ApplyImageAndTextStyles('o', 'u1016', 'u1017', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Youth Extra Large'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u989 = document.getElementById('u989');
gv_vAlignTable['u989'] = 'center';
var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'top';
var u1091 = document.getElementById('u1091');

var u1092 = document.getElementById('u1092');
gv_vAlignTable['u1092'] = 'center';
var u173 = document.getElementById('u173');

u173.style.cursor = 'pointer';
if (bIE) u173.attachEvent("onclick", Clicku173);
else u173.addEventListener("click", Clicku173, true);
function Clicku173(e)
{

if (true) {

	SetPanelStateu148("pd0u148");

}

}

var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'center';
var u1095 = document.getElementById('u1095');

var u1096 = document.getElementById('u1096');

var u1097 = document.getElementById('u1097');
gv_vAlignTable['u1097'] = 'center';
var u1098 = document.getElementById('u1098');

u1098.style.cursor = 'pointer';
if (bIE) u1098.attachEvent("onclick", Clicku1098);
else u1098.addEventListener("click", Clicku1098, true);
function Clicku1098(e)
{

if (true) {

	SetPanelStateu793("pd1u793");

	SetPanelStateu814("pd0u814");

	SetPanelStateu1018("pd1u1018");

}

}
gv_vAlignTable['u1098'] = 'top';
var u990 = document.getElementById('u990');

var u991 = document.getElementById('u991');
gv_vAlignTable['u991'] = 'center';
var u992 = document.getElementById('u992');

u992.style.cursor = 'pointer';
if (bIE) u992.attachEvent("onclick", Clicku992);
else u992.addEventListener("click", Clicku992, true);
function Clicku992(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u992', 'u993', sJsonu993, false);
ApplyImageAndTextStyles('o', 'u972', 'u973', '', false);
ApplyImageAndTextStyles('o', 'u976', 'u977', '', false);
ApplyImageAndTextStyles('o', 'u980', 'u981', '', false);
ApplyImageAndTextStyles('o', 'u984', 'u985', '', false);
ApplyImageAndTextStyles('o', 'u988', 'u989', '', false);
ApplyImageAndTextStyles('o', 'u996', 'u997', '', false);
ApplyImageAndTextStyles('o', 'u1000', 'u1001', '', false);
ApplyImageAndTextStyles('o', 'u1008', 'u1009', '', false);
ApplyImageAndTextStyles('o', 'u1012', 'u1013', '', false);
ApplyImageAndTextStyles('o', 'u1004', 'u1005', '', false);
ApplyImageAndTextStyles('o', 'u1016', 'u1017', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Small'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u993 = document.getElementById('u993');
gv_vAlignTable['u993'] = 'center';
var u994 = document.getElementById('u994');

var u995 = document.getElementById('u995');
gv_vAlignTable['u995'] = 'center';
var u996 = document.getElementById('u996');

u996.style.cursor = 'pointer';
if (bIE) u996.attachEvent("onclick", Clicku996);
else u996.addEventListener("click", Clicku996, true);
function Clicku996(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u996', 'u997', sJsonu997, false);
ApplyImageAndTextStyles('o', 'u972', 'u973', '', false);
ApplyImageAndTextStyles('o', 'u976', 'u977', '', false);
ApplyImageAndTextStyles('o', 'u984', 'u985', '', false);
ApplyImageAndTextStyles('o', 'u992', 'u993', '', false);
ApplyImageAndTextStyles('o', 'u980', 'u981', '', false);
ApplyImageAndTextStyles('o', 'u988', 'u989', '', false);
ApplyImageAndTextStyles('o', 'u1000', 'u1001', '', false);
ApplyImageAndTextStyles('o', 'u1012', 'u1013', '', false);
ApplyImageAndTextStyles('o', 'u1008', 'u1009', '', false);
ApplyImageAndTextStyles('o', 'u1004', 'u1005', '', false);
ApplyImageAndTextStyles('o', 'u1016', 'u1017', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Medium'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u997 = document.getElementById('u997');
gv_vAlignTable['u997'] = 'center';
var u998 = document.getElementById('u998');

var u999 = document.getElementById('u999');
gv_vAlignTable['u999'] = 'center';
var u1260 = document.getElementById('u1260');

u1260.style.cursor = 'pointer';
if (bIE) u1260.attachEvent("onclick", Clicku1260);
else u1260.addEventListener("click", Clicku1260, true);
function Clicku1260(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Opens facebook so you can post a link to this page to your wall."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}
gv_vAlignTable['u1260'] = 'top';
var u1261 = document.getElementById('u1261');

u1261.style.cursor = 'pointer';
if (bIE) u1261.attachEvent("onclick", Clicku1261);
else u1261.addEventListener("click", Clicku1261, true);
function Clicku1261(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Opens a blank email form so you can send a link to this page to a friend or family member."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}
gv_vAlignTable['u1261'] = 'top';
var u1262 = document.getElementById('u1262');

var u1263 = document.getElementById('u1263');
gv_vAlignTable['u1263'] = 'center';
var u1264 = document.getElementById('u1264');
gv_vAlignTable['u1264'] = 'top';
var u1265 = document.getElementById('u1265');

var u1266 = document.getElementById('u1266');
gv_vAlignTable['u1266'] = 'top';
var u1267 = document.getElementById('u1267');
gv_vAlignTable['u1267'] = 'top';
var u1268 = document.getElementById('u1268');
gv_vAlignTable['u1268'] = 'top';
var u1178 = document.getElementById('u1178');

var u1179 = document.getElementById('u1179');
gv_vAlignTable['u1179'] = 'top';
var u1274 = document.getElementById('u1274');

var u1275 = document.getElementById('u1275');
gv_vAlignTable['u1275'] = 'top';
var u1276 = document.getElementById('u1276');
gv_vAlignTable['u1276'] = 'top';
var u1277 = document.getElementById('u1277');

u1277.style.cursor = 'pointer';
if (bIE) u1277.attachEvent("onclick", Clicku1277);
else u1277.addEventListener("click", Clicku1277, true);
function Clicku1277(e)
{

if (true) {

	SetPanelStateu1274("pd1u1274");

}

}
gv_vAlignTable['u1277'] = 'top';
var u1278 = document.getElementById('u1278');
gv_vAlignTable['u1278'] = 'top';
var u1279 = document.getElementById('u1279');
gv_vAlignTable['u1279'] = 'top';
var u1189 = document.getElementById('u1189');
gv_vAlignTable['u1189'] = 'top';
var u1300 = document.getElementById('u1300');

u1300.style.cursor = 'pointer';
if (bIE) u1300.attachEvent("onclick", Clicku1300);
else u1300.addEventListener("click", Clicku1300, true);
function Clicku1300(e)
{

if (true) {

	SetPanelStateu262("pd2u262");

	SetPanelStateu1293("pd0u1293");

}

}
gv_vAlignTable['u1300'] = 'top';
var u1301 = document.getElementById('u1301');

var u1302 = document.getElementById('u1302');
gv_vAlignTable['u1302'] = 'center';
var u1223 = document.getElementById('u1223');

var u1280 = document.getElementById('u1280');

var u1281 = document.getElementById('u1281');

var u1282 = document.getElementById('u1282');

u1282.style.cursor = 'pointer';
if (bIE) u1282.attachEvent("onclick", Clicku1282);
else u1282.addEventListener("click", Clicku1282, true);
function Clicku1282(e)
{

if (true) {

	SetPanelStateu1274("pd0u1274");

}

}

var u1283 = document.getElementById('u1283');
gv_vAlignTable['u1283'] = 'center';
var u1284 = document.getElementById('u1284');
gv_vAlignTable['u1284'] = 'top';
var u1285 = document.getElementById('u1285');

var u1287 = document.getElementById('u1287');
gv_vAlignTable['u1287'] = 'top';
var u1288 = document.getElementById('u1288');
gv_vAlignTable['u1288'] = 'top';
var u1289 = document.getElementById('u1289');

var u1290 = document.getElementById('u1290');
gv_vAlignTable['u1290'] = 'center';
var u1291 = document.getElementById('u1291');
gv_vAlignTable['u1291'] = 'top';
var u1292 = document.getElementById('u1292');
gv_vAlignTable['u1292'] = 'top';
var u1293 = document.getElementById('u1293');

var u1294 = document.getElementById('u1294');

u1294.style.cursor = 'pointer';
if (bIE) u1294.attachEvent("onclick", Clicku1294);
else u1294.addEventListener("click", Clicku1294, true);
function Clicku1294(e)
{

if (true) {

	SetPanelStateu1293("pd1u1293");

}

}
gv_vAlignTable['u1294'] = 'top';
var u1295 = document.getElementById('u1295');

var u1296 = document.getElementById('u1296');
gv_vAlignTable['u1296'] = 'center';
var u1297 = document.getElementById('u1297');

u1297.style.cursor = 'pointer';
if (bIE) u1297.attachEvent("onclick", Clicku1297);
else u1297.addEventListener("click", Clicku1297, true);
function Clicku1297(e)
{

if (true) {

	SetPanelStateu262("pd0u262");

	SetPanelStateu1293("pd0u1293");

}

}
gv_vAlignTable['u1297'] = 'top';
var u1298 = document.getElementById('u1298');

u1298.style.cursor = 'pointer';
if (bIE) u1298.attachEvent("onclick", Clicku1298);
else u1298.addEventListener("click", Clicku1298, true);
function Clicku1298(e)
{

if (true) {

	SetPanelStateu262("pd1u262");

	SetPanelStateu1293("pd0u1293");

}

}
gv_vAlignTable['u1298'] = 'top';
var u706 = document.getElementById('u706');
gv_vAlignTable['u706'] = 'top';
var u707 = document.getElementById('u707');

var u715 = document.getElementById('u715');
gv_vAlignTable['u715'] = 'top';
var u716 = document.getElementById('u716');
gv_vAlignTable['u716'] = 'top';
var u717 = document.getElementById('u717');
gv_vAlignTable['u717'] = 'top';
var u718 = document.getElementById('u718');
gv_vAlignTable['u718'] = 'top';
var u719 = document.getElementById('u719');
gv_vAlignTable['u719'] = 'top';
var u725 = document.getElementById('u725');
gv_vAlignTable['u725'] = 'top';
var u726 = document.getElementById('u726');
gv_vAlignTable['u726'] = 'top';
var u727 = document.getElementById('u727');
gv_vAlignTable['u727'] = 'top';
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
gv_vAlignTable['u113'] = 'top';
var u114 = document.getElementById('u114');

var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'top';
var u116 = document.getElementById('u116');

u116.style.cursor = 'pointer';
if (bIE) u116.attachEvent("onclick", Clicku116);
else u116.addEventListener("click", Clicku116, true);
function Clicku116(e)
{

if (true) {

}

}
gv_vAlignTable['u116'] = 'top';
var u117 = document.getElementById('u117');

var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'top';
var u119 = document.getElementById('u119');

var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'top';
var u121 = document.getElementById('u121');

var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'top';
var u123 = document.getElementById('u123');

var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'top';
var u125 = document.getElementById('u125');

u125.style.cursor = 'pointer';
if (bIE) u125.attachEvent("onclick", Clicku125);
else u125.addEventListener("click", Clicku125, true);
function Clicku125(e)
{

if (true) {

}

}
gv_vAlignTable['u125'] = 'top';
var u126 = document.getElementById('u126');

var u127 = document.getElementById('u127');

var u128 = document.getElementById('u128');

u128.style.cursor = 'pointer';
if (bIE) u128.attachEvent("onclick", Clicku128);
else u128.addEventListener("click", Clicku128, true);
function Clicku128(e)
{

if (true) {

	SetPanelVisibilityu0("hidden");

	SetPanelVisibilityu209("");

	BringToFront("u209");

	SetPanelStateu217("pd1u217");

	MoveWidgetTo('u261',11,246);

}

}

var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'center';
var u130 = document.getElementById('u130');

u130.style.cursor = 'pointer';
if (bIE) u130.attachEvent("onclick", Clicku130);
else u130.addEventListener("click", Clicku130, true);
function Clicku130(e)
{

if (true) {

	SetPanelVisibilityu3("hidden");

	SetPanelVisibilityu209("");

	BringToFront("u209");

	NewWindow("Resources/Other.html#other=" + encodeURI("If you close this window without sending your list, your data entries will not be saved.&nbsp; "), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'bottom';
var u132 = document.getElementById('u132');

var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'top';
var u134 = document.getElementById('u134');

u134.style.cursor = 'pointer';
if (bIE) u134.attachEvent("onclick", Clicku134);
else u134.addEventListener("click", Clicku134, true);
function Clicku134(e)
{

if (true) {

	SetPanelVisibilityu0("hidden");

	SetPanelVisibilityu209("");

	BringToFront("u209");

}

}
gv_vAlignTable['u134'] = 'top';
var u135 = document.getElementById('u135');

var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'center';
var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'top';
var u138 = document.getElementById('u138');

var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'center';
var u400 = document.getElementById('u400');
gv_vAlignTable['u400'] = 'top';
var u401 = document.getElementById('u401');

var u402 = document.getElementById('u402');
gv_vAlignTable['u402'] = 'top';
var u403 = document.getElementById('u403');

var u404 = document.getElementById('u404');
gv_vAlignTable['u404'] = 'top';
var u405 = document.getElementById('u405');

var u406 = document.getElementById('u406');
gv_vAlignTable['u406'] = 'top';
var u407 = document.getElementById('u407');

var u408 = document.getElementById('u408');
gv_vAlignTable['u408'] = 'top';
var u409 = document.getElementById('u409');

var u140 = document.getElementById('u140');

var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'center';
var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'top';
var u143 = document.getElementById('u143');

var u144 = document.getElementById('u144');

var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'center';
var u146 = document.getElementById('u146');

u146.style.cursor = 'pointer';
if (bIE) u146.attachEvent("onclick", Clicku146);
else u146.addEventListener("click", Clicku146, true);
function Clicku146(e)
{

if (true) {

	BringToFront("u209");

}

}

var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'center';
var u148 = document.getElementById('u148');

var u149 = document.getElementById('u149');

var u410 = document.getElementById('u410');
gv_vAlignTable['u410'] = 'top';
var u411 = document.getElementById('u411');

var u412 = document.getElementById('u412');
gv_vAlignTable['u412'] = 'top';
var u413 = document.getElementById('u413');

var u414 = document.getElementById('u414');
gv_vAlignTable['u414'] = 'top';
var u415 = document.getElementById('u415');

var u416 = document.getElementById('u416');
gv_vAlignTable['u416'] = 'top';
var u417 = document.getElementById('u417');

var u418 = document.getElementById('u418');
gv_vAlignTable['u418'] = 'top';
var u419 = document.getElementById('u419');

var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'center';
var u151 = document.getElementById('u151');

var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'center';
var u153 = document.getElementById('u153');

u153.style.cursor = 'pointer';
if (bIE) u153.attachEvent("onclick", Clicku153);
else u153.addEventListener("click", Clicku153, true);
function Clicku153(e)
{

if (true) {

SetWidgetFormText('u153', PopulateVariables(''));

}

}

var u154 = document.getElementById('u154');

var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'top';
var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'top';
var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'top';
var u158 = document.getElementById('u158');

var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'center';
var u420 = document.getElementById('u420');
gv_vAlignTable['u420'] = 'top';
var u421 = document.getElementById('u421');

var u422 = document.getElementById('u422');
gv_vAlignTable['u422'] = 'top';
var u423 = document.getElementById('u423');

var u424 = document.getElementById('u424');
gv_vAlignTable['u424'] = 'top';
var u425 = document.getElementById('u425');

var u426 = document.getElementById('u426');
gv_vAlignTable['u426'] = 'top';
var u427 = document.getElementById('u427');

var u428 = document.getElementById('u428');
gv_vAlignTable['u428'] = 'top';
var u429 = document.getElementById('u429');

var u160 = document.getElementById('u160');

u160.style.cursor = 'pointer';
if (bIE) u160.attachEvent("onclick", Clicku160);
else u160.addEventListener("click", Clicku160, true);
function Clicku160(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("open popup of privacy policy"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u161 = document.getElementById('u161');

var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'center';
var u163 = document.getElementById('u163');

u163.style.cursor = 'pointer';
if (bIE) u163.attachEvent("onclick", Clicku163);
else u163.addEventListener("click", Clicku163, true);
function Clicku163(e)
{

if (true) {

	BringToFront("u209");

}

}

var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'center';
var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'top';
var u166 = document.getElementById('u166');

var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'center';
var u168 = document.getElementById('u168');

u168.style.cursor = 'pointer';
if (bIE) u168.attachEvent("onclick", Clicku168);
else u168.addEventListener("click", Clicku168, true);
function Clicku168(e)
{

if (true) {

SetWidgetFormText('u168', PopulateVariables(''));

}

}

var u169 = document.getElementById('u169');

var u430 = document.getElementById('u430');
gv_vAlignTable['u430'] = 'top';
var u431 = document.getElementById('u431');

var u432 = document.getElementById('u432');
gv_vAlignTable['u432'] = 'top';
var u433 = document.getElementById('u433');

var u434 = document.getElementById('u434');
gv_vAlignTable['u434'] = 'top';
var u435 = document.getElementById('u435');

var u436 = document.getElementById('u436');
gv_vAlignTable['u436'] = 'top';
var u437 = document.getElementById('u437');

var u438 = document.getElementById('u438');
gv_vAlignTable['u438'] = 'top';
var u439 = document.getElementById('u439');

var u700 = document.getElementById('u700');

var u701 = document.getElementById('u701');
gv_vAlignTable['u701'] = 'top';
var u702 = document.getElementById('u702');
gv_vAlignTable['u702'] = 'top';
var u703 = document.getElementById('u703');
gv_vAlignTable['u703'] = 'top';
var u704 = document.getElementById('u704');

var u705 = document.getElementById('u705');
gv_vAlignTable['u705'] = 'top';
var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'top';
var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'top';
var u708 = document.getElementById('u708');
gv_vAlignTable['u708'] = 'top';
var u709 = document.getElementById('u709');
gv_vAlignTable['u709'] = 'top';
var u175 = document.getElementById('u175');

u175.style.cursor = 'pointer';
if (bIE) u175.attachEvent("onclick", Clicku175);
else u175.addEventListener("click", Clicku175, true);
function Clicku175(e)
{

if (true) {

	BringToFront("u209");

}

}

var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'center';
var u177 = document.getElementById('u177');

u177.style.cursor = 'pointer';
if (bIE) u177.attachEvent("onclick", Clicku177);
else u177.addEventListener("click", Clicku177, true);
function Clicku177(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("open popup of privacy policy"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'top';
var u179 = document.getElementById('u179');

var u440 = document.getElementById('u440');
gv_vAlignTable['u440'] = 'top';
var u441 = document.getElementById('u441');

var u442 = document.getElementById('u442');
gv_vAlignTable['u442'] = 'top';
var u443 = document.getElementById('u443');

var u444 = document.getElementById('u444');
gv_vAlignTable['u444'] = 'top';
var u445 = document.getElementById('u445');

var u446 = document.getElementById('u446');
gv_vAlignTable['u446'] = 'top';
var u447 = document.getElementById('u447');

var u448 = document.getElementById('u448');
gv_vAlignTable['u448'] = 'top';
var u449 = document.getElementById('u449');

var u710 = document.getElementById('u710');

var u711 = document.getElementById('u711');
gv_vAlignTable['u711'] = 'top';
var u712 = document.getElementById('u712');
gv_vAlignTable['u712'] = 'top';
var u713 = document.getElementById('u713');
gv_vAlignTable['u713'] = 'top';
var u714 = document.getElementById('u714');
gv_vAlignTable['u714'] = 'top';
var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'center';
var u181 = document.getElementById('u181');

u181.style.cursor = 'pointer';
if (bIE) u181.attachEvent("onclick", Clicku181);
else u181.addEventListener("click", Clicku181, true);
function Clicku181(e)
{

if (true) {

SetWidgetFormText('u181', PopulateVariables(''));

}

}

var u182 = document.getElementById('u182');

var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'top';
var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'top';
var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'top';
var u186 = document.getElementById('u186');

u186.style.cursor = 'pointer';
if (bIE) u186.attachEvent("onclick", Clicku186);
else u186.addEventListener("click", Clicku186, true);
function Clicku186(e)
{

if (true) {

	SetPanelStateu148("pd3u148");

}

}

var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'center';
var u188 = document.getElementById('u188');

u188.style.cursor = 'pointer';
if (bIE) u188.attachEvent("onclick", Clicku188);
else u188.addEventListener("click", Clicku188, true);
function Clicku188(e)
{

if (true) {

	BringToFront("u209");

}

}

var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'center';
var u450 = document.getElementById('u450');
gv_vAlignTable['u450'] = 'top';
var u451 = document.getElementById('u451');

var u452 = document.getElementById('u452');
gv_vAlignTable['u452'] = 'top';
var u453 = document.getElementById('u453');

var u454 = document.getElementById('u454');
gv_vAlignTable['u454'] = 'top';
var u455 = document.getElementById('u455');

var u456 = document.getElementById('u456');
gv_vAlignTable['u456'] = 'top';
var u457 = document.getElementById('u457');

var u458 = document.getElementById('u458');
gv_vAlignTable['u458'] = 'top';
var u459 = document.getElementById('u459');

var u1004 = document.getElementById('u1004');

u1004.style.cursor = 'pointer';
if (bIE) u1004.attachEvent("onclick", Clicku1004);
else u1004.addEventListener("click", Clicku1004, true);
function Clicku1004(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u1004', 'u1005', sJsonu1005, false);
ApplyImageAndTextStyles('o', 'u972', 'u973', '', false);
ApplyImageAndTextStyles('o', 'u976', 'u977', '', false);
ApplyImageAndTextStyles('o', 'u984', 'u985', '', false);
ApplyImageAndTextStyles('o', 'u992', 'u993', '', false);
ApplyImageAndTextStyles('o', 'u980', 'u981', '', false);
ApplyImageAndTextStyles('o', 'u988', 'u989', '', false);
ApplyImageAndTextStyles('o', 'u996', 'u997', '', false);
ApplyImageAndTextStyles('o', 'u1000', 'u1001', '', false);
ApplyImageAndTextStyles('o', 'u1008', 'u1009', '', false);
ApplyImageAndTextStyles('o', 'u1016', 'u1017', '', false);
ApplyImageAndTextStyles('o', 'u1012', 'u1013', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Extra Large'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u1000 = document.getElementById('u1000');

u1000.style.cursor = 'pointer';
if (bIE) u1000.attachEvent("onclick", Clicku1000);
else u1000.addEventListener("click", Clicku1000, true);
function Clicku1000(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u1000', 'u1001', sJsonu1001, false);
ApplyImageAndTextStyles('o', 'u972', 'u973', '', false);
ApplyImageAndTextStyles('o', 'u976', 'u977', '', false);
ApplyImageAndTextStyles('o', 'u988', 'u989', '', false);
ApplyImageAndTextStyles('o', 'u992', 'u993', '', false);
ApplyImageAndTextStyles('o', 'u996', 'u997', '', false);
ApplyImageAndTextStyles('o', 'u980', 'u981', '', false);
ApplyImageAndTextStyles('o', 'u984', 'u985', '', false);
ApplyImageAndTextStyles('o', 'u1008', 'u1009', '', false);
ApplyImageAndTextStyles('o', 'u1016', 'u1017', '', false);
ApplyImageAndTextStyles('o', 'u1012', 'u1013', '', false);
ApplyImageAndTextStyles('o', 'u1004', 'u1005', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Large'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u1001 = document.getElementById('u1001');
gv_vAlignTable['u1001'] = 'center';
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

u190.style.cursor = 'pointer';
if (bIE) u190.attachEvent("onclick", Clicku190);
else u190.addEventListener("click", Clicku190, true);
function Clicku190(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("open popup of privacy policy"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'top';
var u192 = document.getElementById('u192');

var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'center';
var u194 = document.getElementById('u194');

var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'center';
var u196 = document.getElementById('u196');

var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'center';
var u198 = document.getElementById('u198');

u198.style.cursor = 'pointer';
if (bIE) u198.attachEvent("onclick", Clicku198);
else u198.addEventListener("click", Clicku198, true);
function Clicku198(e)
{

if (true) {

SetWidgetFormText('u198', PopulateVariables(''));

}

}

var u199 = document.getElementById('u199');

var u460 = document.getElementById('u460');
gv_vAlignTable['u460'] = 'top';
var u461 = document.getElementById('u461');

var u462 = document.getElementById('u462');
gv_vAlignTable['u462'] = 'top';
var u463 = document.getElementById('u463');

var u464 = document.getElementById('u464');
gv_vAlignTable['u464'] = 'top';
var u465 = document.getElementById('u465');

var u466 = document.getElementById('u466');
gv_vAlignTable['u466'] = 'top';
var u467 = document.getElementById('u467');

var u468 = document.getElementById('u468');
gv_vAlignTable['u468'] = 'top';
var u469 = document.getElementById('u469');

var u1012 = document.getElementById('u1012');

u1012.style.cursor = 'pointer';
if (bIE) u1012.attachEvent("onclick", Clicku1012);
else u1012.addEventListener("click", Clicku1012, true);
function Clicku1012(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u1012', 'u1013', sJsonu1013, false);
ApplyImageAndTextStyles('o', 'u972', 'u973', '', false);
ApplyImageAndTextStyles('o', 'u976', 'u977', '', false);
ApplyImageAndTextStyles('o', 'u984', 'u985', '', false);
ApplyImageAndTextStyles('o', 'u980', 'u981', '', false);
ApplyImageAndTextStyles('o', 'u988', 'u989', '', false);
ApplyImageAndTextStyles('o', 'u992', 'u993', '', false);
ApplyImageAndTextStyles('o', 'u1008', 'u1009', '', false);
ApplyImageAndTextStyles('o', 'u1004', 'u1005', '', false);
ApplyImageAndTextStyles('o', 'u1000', 'u1001', '', false);
ApplyImageAndTextStyles('o', 'u996', 'u997', '', false);
ApplyImageAndTextStyles('o', 'u1016', 'u1017', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('3XL'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u1011 = document.getElementById('u1011');
gv_vAlignTable['u1011'] = 'center';
var u1010 = document.getElementById('u1010');

var u730 = document.getElementById('u730');
gv_vAlignTable['u730'] = 'top';
var u731 = document.getElementById('u731');
gv_vAlignTable['u731'] = 'top';
var u732 = document.getElementById('u732');
gv_vAlignTable['u732'] = 'top';
var u733 = document.getElementById('u733');
gv_vAlignTable['u733'] = 'top';
var u734 = document.getElementById('u734');
gv_vAlignTable['u734'] = 'top';
var u735 = document.getElementById('u735');
gv_vAlignTable['u735'] = 'top';
var u736 = document.getElementById('u736');
gv_vAlignTable['u736'] = 'top';
var u737 = document.getElementById('u737');
gv_vAlignTable['u737'] = 'top';
var u738 = document.getElementById('u738');
gv_vAlignTable['u738'] = 'top';
var u739 = document.getElementById('u739');
gv_vAlignTable['u739'] = 'top';
var u1106 = document.getElementById('u1106');
gv_vAlignTable['u1106'] = 'center';
var u1107 = document.getElementById('u1107');

var u1108 = document.getElementById('u1108');
gv_vAlignTable['u1108'] = 'center';
var u1109 = document.getElementById('u1109');
gv_vAlignTable['u1109'] = 'top';
var u470 = document.getElementById('u470');
gv_vAlignTable['u470'] = 'top';
var u471 = document.getElementById('u471');

var u472 = document.getElementById('u472');
gv_vAlignTable['u472'] = 'top';
var u473 = document.getElementById('u473');

var u474 = document.getElementById('u474');
gv_vAlignTable['u474'] = 'top';
var u475 = document.getElementById('u475');

var u476 = document.getElementById('u476');
gv_vAlignTable['u476'] = 'top';
var u477 = document.getElementById('u477');

var u478 = document.getElementById('u478');
gv_vAlignTable['u478'] = 'top';
var u479 = document.getElementById('u479');

var u740 = document.getElementById('u740');
gv_vAlignTable['u740'] = 'top';
var u741 = document.getElementById('u741');
gv_vAlignTable['u741'] = 'top';
var u742 = document.getElementById('u742');
gv_vAlignTable['u742'] = 'top';
var u743 = document.getElementById('u743');
gv_vAlignTable['u743'] = 'top';
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

var u1028 = document.getElementById('u1028');

var u1029 = document.getElementById('u1029');
gv_vAlignTable['u1029'] = 'center';
var u480 = document.getElementById('u480');
gv_vAlignTable['u480'] = 'top';
var u481 = document.getElementById('u481');

var u482 = document.getElementById('u482');
gv_vAlignTable['u482'] = 'top';
var u483 = document.getElementById('u483');

var u484 = document.getElementById('u484');
gv_vAlignTable['u484'] = 'top';
var u485 = document.getElementById('u485');

var u486 = document.getElementById('u486');
gv_vAlignTable['u486'] = 'top';
var u487 = document.getElementById('u487');

var u488 = document.getElementById('u488');
gv_vAlignTable['u488'] = 'top';
var u489 = document.getElementById('u489');

var u750 = document.getElementById('u750');
gv_vAlignTable['u750'] = 'top';
var u751 = document.getElementById('u751');
gv_vAlignTable['u751'] = 'top';
var u752 = document.getElementById('u752');
gv_vAlignTable['u752'] = 'top';
var u753 = document.getElementById('u753');

var u754 = document.getElementById('u754');
gv_vAlignTable['u754'] = 'center';
var u755 = document.getElementById('u755');

var u756 = document.getElementById('u756');
gv_vAlignTable['u756'] = 'center';
var u757 = document.getElementById('u757');

var u758 = document.getElementById('u758');
gv_vAlignTable['u758'] = 'center';
var u759 = document.getElementById('u759');
gv_vAlignTable['u759'] = 'top';
var u1035 = document.getElementById('u1035');
gv_vAlignTable['u1035'] = 'top';
var u1036 = document.getElementById('u1036');

var u1037 = document.getElementById('u1037');
gv_vAlignTable['u1037'] = 'top';
var u1038 = document.getElementById('u1038');

var u1039 = document.getElementById('u1039');

var u490 = document.getElementById('u490');
gv_vAlignTable['u490'] = 'top';
var u491 = document.getElementById('u491');

var u492 = document.getElementById('u492');
gv_vAlignTable['u492'] = 'top';
var u493 = document.getElementById('u493');

var u494 = document.getElementById('u494');
gv_vAlignTable['u494'] = 'top';
var u495 = document.getElementById('u495');

var u496 = document.getElementById('u496');
gv_vAlignTable['u496'] = 'top';
var u497 = document.getElementById('u497');

var u498 = document.getElementById('u498');
gv_vAlignTable['u498'] = 'top';
var u499 = document.getElementById('u499');

var u1101 = document.getElementById('u1101');
gv_vAlignTable['u1101'] = 'center';
var u1102 = document.getElementById('u1102');

var u1103 = document.getElementById('u1103');
gv_vAlignTable['u1103'] = 'center';
var u760 = document.getElementById('u760');

if (bIE) u760.attachEvent("onmouseover", MouseOveru760);
else u760.addEventListener("mouseover", MouseOveru760, true);
function MouseOveru760(e)
{
if (!IsTrueMouseOver('u760',e)) return;
if (true) {

}

}

if (bIE) u760.attachEvent("onmouseout", MouseOutu760);
else u760.addEventListener("mouseout", MouseOutu760, true);
function MouseOutu760(e)
{
if (!IsTrueMouseOut('u760',e)) return;
if (true) {

}

}
gv_vAlignTable['u760'] = 'top';
var u761 = document.getElementById('u761');
gv_vAlignTable['u761'] = 'top';
var u762 = document.getElementById('u762');
gv_vAlignTable['u762'] = 'top';
var u763 = document.getElementById('u763');
gv_vAlignTable['u763'] = 'top';
var u764 = document.getElementById('u764');

if (bIE) u764.attachEvent("onmouseover", MouseOveru764);
else u764.addEventListener("mouseover", MouseOveru764, true);
function MouseOveru764(e)
{
if (!IsTrueMouseOver('u764',e)) return;
if (true) {

}

}

if (bIE) u764.attachEvent("onmouseout", MouseOutu764);
else u764.addEventListener("mouseout", MouseOutu764, true);
function MouseOutu764(e)
{
if (!IsTrueMouseOut('u764',e)) return;
if (true) {

}

}
gv_vAlignTable['u764'] = 'top';
var u765 = document.getElementById('u765');

var u766 = document.getElementById('u766');

var u767 = document.getElementById('u767');
gv_vAlignTable['u767'] = 'center';
var u768 = document.getElementById('u768');

u768.style.cursor = 'pointer';
if (bIE) u768.attachEvent("onclick", Clicku768);
else u768.addEventListener("click", Clicku768, true);
function Clicku768(e)
{

if (true) {

}

}

var u769 = document.getElementById('u769');
gv_vAlignTable['u769'] = 'center';
var u1048 = document.getElementById('u1048');
gv_vAlignTable['u1048'] = 'center';
var u1042 = document.getElementById('u1042');
gv_vAlignTable['u1042'] = 'center';
var u1043 = document.getElementById('u1043');

var u1044 = document.getElementById('u1044');
gv_vAlignTable['u1044'] = 'center';
var u1045 = document.getElementById('u1045');

u1045.style.cursor = 'pointer';
if (bIE) u1045.attachEvent("onclick", Clicku1045);
else u1045.addEventListener("click", Clicku1045, true);
function Clicku1045(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u1045', 'u1046', sJsonu1046, false);
ApplyImageAndTextStyles('o', 'u1041', 'u1042', '', false);
ApplyImageAndTextStyles('o', 'u1049', 'u1050', '', false);
ApplyImageAndTextStyles('o', 'u1057', 'u1058', '', false);
ApplyImageAndTextStyles('o', 'u1053', 'u1054', '', false);
ApplyImageAndTextStyles('o', 'u1061', 'u1062', '', false);
ApplyImageAndTextStyles('o', 'u1065', 'u1066', '', false);
ApplyImageAndTextStyles('o', 'u1069', 'u1070', '', false);
ApplyImageAndTextStyles('o', 'u1073', 'u1074', '', false);
ApplyImageAndTextStyles('o', 'u1077', 'u1078', '', false);
ApplyImageAndTextStyles('o', 'u1081', 'u1082', '', false);
ApplyImageAndTextStyles('o', 'u1085', 'u1086', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Youth Small'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u1047 = document.getElementById('u1047');

var u1049 = document.getElementById('u1049');

u1049.style.cursor = 'pointer';
if (bIE) u1049.attachEvent("onclick", Clicku1049);
else u1049.addEventListener("click", Clicku1049, true);
function Clicku1049(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u1049', 'u1050', sJsonu1050, false);
ApplyImageAndTextStyles('o', 'u1041', 'u1042', '', false);
ApplyImageAndTextStyles('o', 'u1045', 'u1046', '', false);
ApplyImageAndTextStyles('o', 'u1053', 'u1054', '', false);
ApplyImageAndTextStyles('o', 'u1057', 'u1058', '', false);
ApplyImageAndTextStyles('o', 'u1061', 'u1062', '', false);
ApplyImageAndTextStyles('o', 'u1065', 'u1066', '', false);
ApplyImageAndTextStyles('o', 'u1085', 'u1086', '', false);
ApplyImageAndTextStyles('o', 'u1081', 'u1082', '', false);
ApplyImageAndTextStyles('o', 'u1077', 'u1078', '', false);
ApplyImageAndTextStyles('o', 'u1073', 'u1074', '', false);
ApplyImageAndTextStyles('o', 'u1069', 'u1070', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Youth Medium'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u1110 = document.getElementById('u1110');

var u770 = document.getElementById('u770');

u770.style.cursor = 'pointer';
if (bIE) u770.attachEvent("onclick", Clicku770);
else u770.addEventListener("click", Clicku770, true);
function Clicku770(e)
{

if (true) {

}

}

var u771 = document.getElementById('u771');
gv_vAlignTable['u771'] = 'center';
var u772 = document.getElementById('u772');

var u773 = document.getElementById('u773');
gv_vAlignTable['u773'] = 'center';
var u774 = document.getElementById('u774');

var u775 = document.getElementById('u775');
gv_vAlignTable['u775'] = 'center';
var u776 = document.getElementById('u776');

u776.style.cursor = 'pointer';
if (bIE) u776.attachEvent("onclick", Clicku776);
else u776.addEventListener("click", Clicku776, true);
function Clicku776(e)
{

if (true) {

	BringToFront("u0");

	SetPanelStateu3("pd2u3");

	SetPanelVisibilityu0("");

}

}

var u777 = document.getElementById('u777');

u777.style.cursor = 'pointer';
if (bIE) u777.attachEvent("onclick", Clicku777);
else u777.addEventListener("click", Clicku777, true);
function Clicku777(e)
{

if (true) {

	SetPanelStateu3("pd0u3");

	SetPanelStateu9("pd2u9");

	SetPanelVisibilityu0("");

	BringToFront("u0");

}

}

var u778 = document.getElementById('u778');

u778.style.cursor = 'pointer';
if (bIE) u778.attachEvent("onclick", Clicku778);
else u778.addEventListener("click", Clicku778, true);
function Clicku778(e)
{

if (true) {

	BringToFront("u0");

	SetPanelVisibilityu0("");

	SetPanelStateu3("pd1u3");

}

}

var u779 = document.getElementById('u779');

var u1146 = document.getElementById('u1146');

var u1147 = document.getElementById('u1147');

u1147.style.cursor = 'pointer';
if (bIE) u1147.attachEvent("onclick", Clicku1147);
else u1147.addEventListener("click", Clicku1147, true);
function Clicku1147(e)
{

if ((GetGlobalVariableValue('$fruit')) == (PopulateVariables('apple'))) {

	SetPanelStateu261("pd1u261");

}
else
if (true) {

	SetPanelStateu789("pd0u789");

	SetPanelStateu261("pd1u261");

}

}
gv_vAlignTable['u1147'] = 'top';
var u1059 = document.getElementById('u1059');

var u1050 = document.getElementById('u1050');
gv_vAlignTable['u1050'] = 'center';
var u1051 = document.getElementById('u1051');

var u1052 = document.getElementById('u1052');
gv_vAlignTable['u1052'] = 'center';
var u1053 = document.getElementById('u1053');

u1053.style.cursor = 'pointer';
if (bIE) u1053.attachEvent("onclick", Clicku1053);
else u1053.addEventListener("click", Clicku1053, true);
function Clicku1053(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u1053', 'u1054', sJsonu1054, false);
ApplyImageAndTextStyles('o', 'u1041', 'u1042', '', false);
ApplyImageAndTextStyles('o', 'u1045', 'u1046', '', false);
ApplyImageAndTextStyles('o', 'u1057', 'u1058', '', false);
ApplyImageAndTextStyles('o', 'u1065', 'u1066', '', false);
ApplyImageAndTextStyles('o', 'u1049', 'u1050', '', false);
ApplyImageAndTextStyles('o', 'u1061', 'u1062', '', false);
ApplyImageAndTextStyles('o', 'u1069', 'u1070', '', false);
ApplyImageAndTextStyles('o', 'u1073', 'u1074', '', false);
ApplyImageAndTextStyles('o', 'u1077', 'u1078', '', false);
ApplyImageAndTextStyles('o', 'u1081', 'u1082', '', false);
ApplyImageAndTextStyles('o', 'u1085', 'u1086', '', false);
SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

SetGlobalVariableValue('$Size1', PopulateVariables('Youth Large'));

}

}

var u1054 = document.getElementById('u1054');
gv_vAlignTable['u1054'] = 'center';
var u1055 = document.getElementById('u1055');

var u780 = document.getElementById('u780');
gv_vAlignTable['u780'] = 'center';
var u781 = document.getElementById('u781');

var u782 = document.getElementById('u782');
gv_vAlignTable['u782'] = 'center';
var u783 = document.getElementById('u783');
gv_vAlignTable['u783'] = 'top';
var u784 = document.getElementById('u784');

var u785 = document.getElementById('u785');
gv_vAlignTable['u785'] = 'center';
var u786 = document.getElementById('u786');

var u787 = document.getElementById('u787');
gv_vAlignTable['u787'] = 'center';
var u788 = document.getElementById('u788');
gv_vAlignTable['u788'] = 'top';
var u789 = document.getElementById('u789');

var u1128 = document.getElementById('u1128');
gv_vAlignTable['u1128'] = 'center';
var u1129 = document.getElementById('u1129');

var u1158 = document.getElementById('u1158');

var u1069 = document.getElementById('u1069');

u1069.style.cursor = 'pointer';
if (bIE) u1069.attachEvent("onclick", Clicku1069);
else u1069.addEventListener("click", Clicku1069, true);
function Clicku1069(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u1069', 'u1070', sJsonu1070, false);
ApplyImageAndTextStyles('o', 'u1041', 'u1042', '', false);
ApplyImageAndTextStyles('o', 'u1045', 'u1046', '', false);
ApplyImageAndTextStyles('o', 'u1057', 'u1058', '', false);
ApplyImageAndTextStyles('o', 'u1061', 'u1062', '', false);
ApplyImageAndTextStyles('o', 'u1065', 'u1066', '', false);
ApplyImageAndTextStyles('o', 'u1049', 'u1050', '', false);
ApplyImageAndTextStyles('o', 'u1053', 'u1054', '', false);
ApplyImageAndTextStyles('o', 'u1077', 'u1078', '', false);
ApplyImageAndTextStyles('o', 'u1085', 'u1086', '', false);
ApplyImageAndTextStyles('o', 'u1081', 'u1082', '', false);
ApplyImageAndTextStyles('o', 'u1073', 'u1074', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Large'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u1060 = document.getElementById('u1060');
gv_vAlignTable['u1060'] = 'center';
var u1061 = document.getElementById('u1061');

u1061.style.cursor = 'pointer';
if (bIE) u1061.attachEvent("onclick", Clicku1061);
else u1061.addEventListener("click", Clicku1061, true);
function Clicku1061(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u1061', 'u1062', sJsonu1062, false);
ApplyImageAndTextStyles('o', 'u1041', 'u1042', '', false);
ApplyImageAndTextStyles('o', 'u1045', 'u1046', '', false);
ApplyImageAndTextStyles('o', 'u1049', 'u1050', '', false);
ApplyImageAndTextStyles('o', 'u1053', 'u1054', '', false);
ApplyImageAndTextStyles('o', 'u1057', 'u1058', '', false);
ApplyImageAndTextStyles('o', 'u1065', 'u1066', '', false);
ApplyImageAndTextStyles('o', 'u1069', 'u1070', '', false);
ApplyImageAndTextStyles('o', 'u1077', 'u1078', '', false);
ApplyImageAndTextStyles('o', 'u1081', 'u1082', '', false);
ApplyImageAndTextStyles('o', 'u1073', 'u1074', '', false);
ApplyImageAndTextStyles('o', 'u1085', 'u1086', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Small'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u1062 = document.getElementById('u1062');
gv_vAlignTable['u1062'] = 'center';
var u1063 = document.getElementById('u1063');

var u1064 = document.getElementById('u1064');
gv_vAlignTable['u1064'] = 'center';
var u1065 = document.getElementById('u1065');

u1065.style.cursor = 'pointer';
if (bIE) u1065.attachEvent("onclick", Clicku1065);
else u1065.addEventListener("click", Clicku1065, true);
function Clicku1065(e)
{

if (true) {

ApplyImageAndTextStyles('s', 'u1065', 'u1066', sJsonu1066, false);
ApplyImageAndTextStyles('o', 'u1041', 'u1042', '', false);
ApplyImageAndTextStyles('o', 'u1045', 'u1046', '', false);
ApplyImageAndTextStyles('o', 'u1053', 'u1054', '', false);
ApplyImageAndTextStyles('o', 'u1061', 'u1062', '', false);
ApplyImageAndTextStyles('o', 'u1049', 'u1050', '', false);
ApplyImageAndTextStyles('o', 'u1057', 'u1058', '', false);
ApplyImageAndTextStyles('o', 'u1069', 'u1070', '', false);
ApplyImageAndTextStyles('o', 'u1081', 'u1082', '', false);
ApplyImageAndTextStyles('o', 'u1077', 'u1078', '', false);
ApplyImageAndTextStyles('o', 'u1073', 'u1074', '', false);
ApplyImageAndTextStyles('o', 'u1085', 'u1086', '', false);
SetGlobalVariableValue('$Size1', PopulateVariables('Medium'));

SetGlobalVariableValue('$Qty1', PopulateVariables('1'));

}

}

var u1105 = document.getElementById('u1105');

var u790 = document.getElementById('u790');

var u791 = document.getElementById('u791');
gv_vAlignTable['u791'] = 'center';
var u792 = document.getElementById('u792');
gv_vAlignTable['u792'] = 'top';
var u793 = document.getElementById('u793');

var u794 = document.getElementById('u794');

u794.style.cursor = 'pointer';
if (bIE) u794.attachEvent("onclick", Clicku794);
else u794.addEventListener("click", Clicku794, true);
function Clicku794(e)
{

if (true) {

	SetPanelVisibilityu209("");

	BringToFront("u209");

}

}

var u795 = document.getElementById('u795');
gv_vAlignTable['u795'] = 'bottom';
var u796 = document.getElementById('u796');

var u797 = document.getElementById('u797');

u797.style.cursor = 'pointer';
if (bIE) u797.attachEvent("onclick", Clicku797);
else u797.addEventListener("click", Clicku797, true);
function Clicku797(e)
{

if (((GetGlobalVariableValue('$Qty1')) == (PopulateVariables('1'))) && ((GetGlobalVariableValue('$Size2')) == (PopulateVariables('')))) {

	SetPanelStateu261("pd2u261");

SetWidgetRichText('u1163', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:12px;">1 [[Size1]] </span>'));

}

}

var u798 = document.getElementById('u798');
gv_vAlignTable['u798'] = 'bottom';
var u799 = document.getElementById('u799');
gv_vAlignTable['u799'] = 'top';
var u1135 = document.getElementById('u1135');

u1135.style.cursor = 'pointer';
if (bIE) u1135.attachEvent("onclick", Clicku1135);
else u1135.addEventListener("click", Clicku1135, true);
function Clicku1135(e)
{

if (true) {

	MoveWidgetTo('u1027',0,0);

	SetPanelVisibilityu1027("");

	SetPanelStateu1027("pd0u1027");

}

}
gv_vAlignTable['u1135'] = 'top';
var u1136 = document.getElementById('u1136');

u1136.style.cursor = 'pointer';
if (bIE) u1136.attachEvent("onclick", Clicku1136);
else u1136.addEventListener("click", Clicku1136, true);
function Clicku1136(e)
{

if (true) {

	MoveWidgetTo('u1027',0,0);

	SetPanelVisibilityu1027("");

	SetPanelStateu1027("pd1u1027");

}

}
gv_vAlignTable['u1136'] = 'top';
var u1137 = document.getElementById('u1137');

var u1138 = document.getElementById('u1138');
gv_vAlignTable['u1138'] = 'center';
var u1079 = document.getElementById('u1079');

var u1117 = document.getElementById('u1117');

var u1118 = document.getElementById('u1118');
gv_vAlignTable['u1118'] = 'center';
var u1119 = document.getElementById('u1119');
gv_vAlignTable['u1119'] = 'top';
var u1170 = document.getElementById('u1170');

var u1171 = document.getElementById('u1171');
gv_vAlignTable['u1171'] = 'top';
var u1172 = document.getElementById('u1172');

var u1173 = document.getElementById('u1173');
gv_vAlignTable['u1173'] = 'top';
var u1140 = document.getElementById('u1140');

var u1141 = document.getElementById('u1141');
gv_vAlignTable['u1141'] = 'center';
var u1142 = document.getElementById('u1142');

var u1143 = document.getElementById('u1143');
gv_vAlignTable['u1143'] = 'center';
var u1144 = document.getElementById('u1144');
gv_vAlignTable['u1144'] = 'top';
var u1145 = document.getElementById('u1145');
gv_vAlignTable['u1145'] = 'top';
var u1089 = document.getElementById('u1089');
gv_vAlignTable['u1089'] = 'center';
var u1148 = document.getElementById('u1148');

u1148.style.cursor = 'pointer';
if (bIE) u1148.attachEvent("onclick", Clicku1148);
else u1148.addEventListener("click", Clicku1148, true);
function Clicku1148(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("If you close this window without sending your list, your data entries will not be saved.&nbsp; "), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u1123 = document.getElementById('u1123');
gv_vAlignTable['u1123'] = 'top';
var u1124 = document.getElementById('u1124');

if (bIE) u1124.attachEvent("onmouseover", MouseOveru1124);
else u1124.addEventListener("mouseover", MouseOveru1124, true);
function MouseOveru1124(e)
{
if (!IsTrueMouseOver('u1124',e)) return;
if (true) {

}

}

if (bIE) u1124.attachEvent("onmouseout", MouseOutu1124);
else u1124.addEventListener("mouseout", MouseOutu1124, true);
function MouseOutu1124(e)
{
if (!IsTrueMouseOut('u1124',e)) return;
if (true) {

}

}
gv_vAlignTable['u1124'] = 'top';
var u1125 = document.getElementById('u1125');

var u1126 = document.getElementById('u1126');
gv_vAlignTable['u1126'] = 'center';
var u1090 = document.getElementById('u1090');

var u1184 = document.getElementById('u1184');

var u1185 = document.getElementById('u1185');
gv_vAlignTable['u1185'] = 'top';
var u1093 = document.getElementById('u1093');

var u1094 = document.getElementById('u1094');
gv_vAlignTable['u1094'] = 'center';
var u1151 = document.getElementById('u1151');
gv_vAlignTable['u1151'] = 'top';
var u1152 = document.getElementById('u1152');
gv_vAlignTable['u1152'] = 'top';
var u1153 = document.getElementById('u1153');

u1153.style.cursor = 'pointer';
if (bIE) u1153.attachEvent("onclick", Clicku1153);
else u1153.addEventListener("click", Clicku1153, true);
function Clicku1153(e)
{

if (true) {

}

}

if (bIE) u1153.attachEvent("onblur", LostFocusu1153);
else u1153.addEventListener("blur", LostFocusu1153, true);
function LostFocusu1153(e)
{

if (true) {

SetGlobalVariableValue('$YourName', GetWidgetFormText('u1153'));

}

}

var u1154 = document.getElementById('u1154');
gv_vAlignTable['u1154'] = 'top';
var u1099 = document.getElementById('u1099');

var u1156 = document.getElementById('u1156');

u1156.style.cursor = 'pointer';
if (bIE) u1156.attachEvent("onclick", Clicku1156);
else u1156.addEventListener("click", Clicku1156, true);
function Clicku1156(e)
{

if (((GetGlobalVariableValue('$Qty1')) == (PopulateVariables('1'))) && (((GetGlobalVariableValue('$Size2')) == (PopulateVariables(''))) && ((GetGlobalVariableValue('$NumCount')) != (PopulateVariables('2'))))) {

	SetPanelStateu261("pd3u261");

	SetPanelStateu217("pd1u217");

	SetPanelStateu1231("pd0u1231");

SetWidgetRichText('u234', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0066CC; font-size:13px;">Thank you [[YourName]] for signing up!&nbsp; </span>'));

SetWidgetRichText('u245', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0066CC; font-size:13px;">You\'ll receive a confirmation email shortly at [[yourEmail]] with a summary of your list.&nbsp; If you have any questions or need to change your list, please contact Alice Jones.</span>'));

;

SetWidgetRichText('u731', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:12px;">Name: [[Name1]] , Number: [[Num1]] <br>Name: [[Name2]] , Number:&nbsp; [[Num2]]</span>'));

SetWidgetRichText('u532', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:12px;">&quot;[[YourNote]]&quot;</span>'));

SetWidgetRichText('u531', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#515151; font-size:12px;">[[YourName]]</span></b><span style=" font-family:\'Helvetica\'; color:#515151; font-size:12px;"> is ordering <span style=" font-family:\'Helvetica\'; color:#515151; font-size:12px;"><b>2 shirts</span></b><span style=" font-family:\'Helvetica\'; color:#515151; font-size:12px;">.</span></span>'));

	SetPanelVisibilityu217("");

	SetPanelVisibilityu1231("");

	MoveWidgetTo('u261',20,410);

}
else
if ((GetGlobalVariableValue('$NumCount')) == (PopulateVariables('2'))) {

	SetPanelStateu261("pd3u261");

	SetPanelStateu217("pd1u217");

	SetPanelStateu1231("pd0u1231");

;

SetWidgetRichText('u234', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0066CC; font-size:13px;">Thank you [[YourName]] for signing up!&nbsp; </span>'));

SetWidgetRichText('u245', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0066CC; font-size:13px;">You\'ll receive a confirmation email shortly at [[yourEmail]] with a summary of your list.&nbsp; If you have any questions or need to change your list, please contact Alice Jones.</span>'));

SetWidgetRichText('u731', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:12px;">Name: [[Name1]] , Number: [[Num1]] <br>Name: [[Name2]] , Number:&nbsp; [[Num2]]</span>'));

SetWidgetRichText('u532', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:12px;">&quot;[[YourNote]]&quot;</span>'));

SetWidgetRichText('u531', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#515151; font-size:12px;">[[YourName]] </span></b><span style=" font-family:\'Helvetica\'; color:#515151; font-size:12px;">is ordering <span style=" font-family:\'Helvetica\'; color:#515151; font-size:12px;"><b>2 shirts.</span></b></span>'));

	SetPanelVisibilityu217("");

	SetPanelVisibilityu1231("");

	MoveWidgetTo('u261',20,410);

}
else
if (true) {

	SetPanelStateu261("pd3u261");

	SetPanelStateu217("pd1u217");

	SetPanelStateu1231("pd0u1231");

;

SetWidgetRichText('u245', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0066CC; font-size:13px;">You\'ll receive a confirmation email shortly at [[yourEmail]] with a summary of your list.&nbsp; If you have any questions or need to change your list, please contact Alice Jones.</span>'));

SetWidgetRichText('u234', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#0066CC; font-size:13px;">Thank you [[YourName]] for signing up!&nbsp; </span>'));

SetWidgetRichText('u731', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:12px;">Name: [[Name1]] , Number: [[Num1]] <br>Name: [[Name2]] , Number:&nbsp; [[Num2]]</span>'));

SetWidgetRichText('u532', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:12px;">&quot;[[YourNote]]&quot;</span>'));

SetWidgetRichText('u531', PopulateVariables('<b><span style=" font-family:\'Helvetica\'; color:#515151; font-size:12px;">[[YourName]]</span></b><span style=" font-family:\'Helvetica\'; color:#515151; font-size:12px;"> is ordering <span style=" font-family:\'Helvetica\'; color:#515151; font-size:12px;"><b>2 shirts</span></b><span style=" font-family:\'Helvetica\'; color:#515151; font-size:12px;">.</span></span>'));

	SetPanelVisibilityu217("");

	SetPanelVisibilityu1231("");

	MoveWidgetTo('u261',20,410);

}

}

var u1157 = document.getElementById('u1157');
gv_vAlignTable['u1157'] = 'bottom';
var u1190 = document.getElementById('u1190');

var u1191 = document.getElementById('u1191');
gv_vAlignTable['u1191'] = 'top';
var u1130 = document.getElementById('u1130');
gv_vAlignTable['u1130'] = 'center';
var u1131 = document.getElementById('u1131');
gv_vAlignTable['u1131'] = 'top';
var u1132 = document.getElementById('u1132');

var u1133 = document.getElementById('u1133');
gv_vAlignTable['u1133'] = 'center';
var u1134 = document.getElementById('u1134');

u1134.style.cursor = 'pointer';
if (bIE) u1134.attachEvent("onclick", Clicku1134);
else u1134.addEventListener("click", Clicku1134, true);
function Clicku1134(e)
{

if (true) {

	MoveWidgetTo('u1027',0,800);

	SetPanelVisibilityu1027("hidden");

}

}
gv_vAlignTable['u1134'] = 'top';
var u1197 = document.getElementById('u1197');

var u1198 = document.getElementById('u1198');
gv_vAlignTable['u1198'] = 'top';
var u1199 = document.getElementById('u1199');
gv_vAlignTable['u1199'] = 'top';
var u1160 = document.getElementById('u1160');
gv_vAlignTable['u1160'] = 'top';
var u1161 = document.getElementById('u1161');

var u1162 = document.getElementById('u1162');
gv_vAlignTable['u1162'] = 'top';
var u1163 = document.getElementById('u1163');
gv_vAlignTable['u1163'] = 'top';
var u1164 = document.getElementById('u1164');
gv_vAlignTable['u1164'] = 'top';
var u1165 = document.getElementById('u1165');
gv_vAlignTable['u1165'] = 'top';
var u1166 = document.getElementById('u1166');

u1166.style.cursor = 'pointer';
if (bIE) u1166.attachEvent("onclick", Clicku1166);
else u1166.addEventListener("click", Clicku1166, true);
function Clicku1166(e)
{

if ((GetCheckState('u1166')) == (true)) {

SetGlobalVariableValue('$YourNote', PopulateVariables(''));

}
else
if (true) {

SetGlobalVariableValue('$YourNote', GetWidgetFormText('u1168'));

}

}

var u1167 = document.getElementById('u1167');
gv_vAlignTable['u1167'] = 'top';
var u511 = document.getElementById('u511');

var u512 = document.getElementById('u512');
gv_vAlignTable['u512'] = 'top';
var u513 = document.getElementById('u513');

var u514 = document.getElementById('u514');
gv_vAlignTable['u514'] = 'top';
var u515 = document.getElementById('u515');

var u516 = document.getElementById('u516');
gv_vAlignTable['u516'] = 'top';
var u517 = document.getElementById('u517');

var u1255 = document.getElementById('u1255');
gv_vAlignTable['u1255'] = 'top';
var u1257 = document.getElementById('u1257');
gv_vAlignTable['u1257'] = 'center';
var u520 = document.getElementById('u520');
gv_vAlignTable['u520'] = 'top';
var u521 = document.getElementById('u521');

var u522 = document.getElementById('u522');
gv_vAlignTable['u522'] = 'top';
var u523 = document.getElementById('u523');

var u524 = document.getElementById('u524');
gv_vAlignTable['u524'] = 'top';
var u525 = document.getElementById('u525');

var u526 = document.getElementById('u526');
gv_vAlignTable['u526'] = 'top';
var u527 = document.getElementById('u527');

var u530 = document.getElementById('u530');
gv_vAlignTable['u530'] = 'center';
var u531 = document.getElementById('u531');
gv_vAlignTable['u531'] = 'top';
var u532 = document.getElementById('u532');
gv_vAlignTable['u532'] = 'top';
var u533 = document.getElementById('u533');

var u534 = document.getElementById('u534');
gv_vAlignTable['u534'] = 'top';
var u535 = document.getElementById('u535');

var u536 = document.getElementById('u536');
gv_vAlignTable['u536'] = 'top';
var u537 = document.getElementById('u537');

var u540 = document.getElementById('u540');
gv_vAlignTable['u540'] = 'top';
var u541 = document.getElementById('u541');

var u542 = document.getElementById('u542');
gv_vAlignTable['u542'] = 'top';
var u543 = document.getElementById('u543');
gv_vAlignTable['u543'] = 'top';
var u544 = document.getElementById('u544');
gv_vAlignTable['u544'] = 'top';
var u545 = document.getElementById('u545');

var u546 = document.getElementById('u546');
gv_vAlignTable['u546'] = 'top';
var u547 = document.getElementById('u547');
gv_vAlignTable['u547'] = 'top';
var u550 = document.getElementById('u550');
gv_vAlignTable['u550'] = 'top';
var u551 = document.getElementById('u551');
gv_vAlignTable['u551'] = 'top';
var u552 = document.getElementById('u552');

var u553 = document.getElementById('u553');
gv_vAlignTable['u553'] = 'top';
var u554 = document.getElementById('u554');
gv_vAlignTable['u554'] = 'top';
var u555 = document.getElementById('u555');

var u556 = document.getElementById('u556');
gv_vAlignTable['u556'] = 'top';
var u557 = document.getElementById('u557');
gv_vAlignTable['u557'] = 'top';
var u560 = document.getElementById('u560');
gv_vAlignTable['u560'] = 'top';
var u561 = document.getElementById('u561');

var u562 = document.getElementById('u562');
gv_vAlignTable['u562'] = 'top';
var u563 = document.getElementById('u563');
gv_vAlignTable['u563'] = 'top';
var u564 = document.getElementById('u564');

var u565 = document.getElementById('u565');
gv_vAlignTable['u565'] = 'top';
var u566 = document.getElementById('u566');
gv_vAlignTable['u566'] = 'top';
var u567 = document.getElementById('u567');

var u805 = document.getElementById('u805');
gv_vAlignTable['u805'] = 'center';
var u806 = document.getElementById('u806');
gv_vAlignTable['u806'] = 'top';
var u807 = document.getElementById('u807');

var u808 = document.getElementById('u808');
gv_vAlignTable['u808'] = 'center';
var u809 = document.getElementById('u809');

var u570 = document.getElementById('u570');

var u571 = document.getElementById('u571');
gv_vAlignTable['u571'] = 'top';
var u572 = document.getElementById('u572');
gv_vAlignTable['u572'] = 'top';
var u573 = document.getElementById('u573');

var u574 = document.getElementById('u574');
gv_vAlignTable['u574'] = 'top';
var u575 = document.getElementById('u575');
gv_vAlignTable['u575'] = 'top';
var u576 = document.getElementById('u576');

var u577 = document.getElementById('u577');
gv_vAlignTable['u577'] = 'top';
var u815 = document.getElementById('u815');

u815.style.cursor = 'pointer';
if (bIE) u815.attachEvent("onclick", Clicku815);
else u815.addEventListener("click", Clicku815, true);
function Clicku815(e)
{

if (true) {

	SetPanelVisibilityu209("");

	BringToFront("u209");

}

}

var u816 = document.getElementById('u816');
gv_vAlignTable['u816'] = 'bottom';
var u817 = document.getElementById('u817');

var u818 = document.getElementById('u818');

u818.style.cursor = 'pointer';
if (bIE) u818.attachEvent("onclick", Clicku818);
else u818.addEventListener("click", Clicku818, true);
function Clicku818(e)
{

if (((GetGlobalVariableValue('$Qty1')) == (PopulateVariables('1'))) && (((GetGlobalVariableValue('$Size2')) == (PopulateVariables(''))) && ((GetGlobalVariableValue('$NumCount')) != (PopulateVariables('2'))))) {

	SetPanelStateu261("pd2u261");

SetWidgetRichText('u1163', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#1B1B1B; font-size:12px;">1 [[Size1]]</span>'));

}
else
if (((GetGlobalVariableValue('$NumCount')) == (PopulateVariables('2'))) && ((GetGlobalVariableValue('$Size2')) == (PopulateVariables('')))) {

	SetPanelStateu261("pd2u261");

SetWidgetRichText('u1163', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:12px;">2 [[Size1]]</span>'));

}
else
if (true) {

	SetPanelStateu261("pd2u261");

SetWidgetRichText('u1163', PopulateVariables('<span style=" font-family:\'Helvetica\'; color:#515151; font-size:12px;">1 [[Size1]], 1 [[Size2]]</span>'));

}

}

var u819 = document.getElementById('u819');
gv_vAlignTable['u819'] = 'bottom';
var u580 = document.getElementById('u580');
gv_vAlignTable['u580'] = 'top';
var u581 = document.getElementById('u581');
gv_vAlignTable['u581'] = 'top';
var u582 = document.getElementById('u582');

var u583 = document.getElementById('u583');
gv_vAlignTable['u583'] = 'top';
var u584 = document.getElementById('u584');
gv_vAlignTable['u584'] = 'top';
var u585 = document.getElementById('u585');

var u586 = document.getElementById('u586');
gv_vAlignTable['u586'] = 'top';
var u587 = document.getElementById('u587');
gv_vAlignTable['u587'] = 'top';
var u825 = document.getElementById('u825');

var u826 = document.getElementById('u826');
gv_vAlignTable['u826'] = 'center';
var u827 = document.getElementById('u827');

var u828 = document.getElementById('u828');
gv_vAlignTable['u828'] = 'center';
var u829 = document.getElementById('u829');

var u590 = document.getElementById('u590');
gv_vAlignTable['u590'] = 'top';
var u591 = document.getElementById('u591');
gv_vAlignTable['u591'] = 'top';
var u592 = document.getElementById('u592');

var u593 = document.getElementById('u593');
gv_vAlignTable['u593'] = 'top';
var u594 = document.getElementById('u594');
gv_vAlignTable['u594'] = 'top';
var u595 = document.getElementById('u595');

var u596 = document.getElementById('u596');
gv_vAlignTable['u596'] = 'top';
var u597 = document.getElementById('u597');
gv_vAlignTable['u597'] = 'top';
if (window.OnLoad) OnLoad();
