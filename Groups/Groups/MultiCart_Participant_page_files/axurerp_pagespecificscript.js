
var PageName = 'MultiCart Participant page';
var PageId = 'pb58d9ab85056466fa5fb94b9c0a954c9'
var PageUrl = 'MultiCart_Participant_page.html'
document.title = 'MultiCart Participant page';

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
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&price1=' + encodeURIComponent($price1) + '&price2=' + encodeURIComponent($price2) + '&GroupName=' + encodeURIComponent($GroupName) + '&YourName=' + encodeURIComponent($YourName) + '&groupPrice=' + encodeURIComponent($groupPrice) + '&contanctName=' + encodeURIComponent($contanctName) + '&yourEmail=' + encodeURIComponent($yourEmail) + '&closeDate=' + encodeURIComponent($closeDate) + '&CSUM=1';
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
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  return value;
}

function OnLoad(e) {

}

eval(GetDynamicPanelScript('u0', 1));

eval(GetDynamicPanelScript('u224', 5));

var u270 = document.getElementById('u270');
gv_vAlignTable['u270'] = 'top';
var u271 = document.getElementById('u271');
gv_vAlignTable['u271'] = 'top';
var u272 = document.getElementById('u272');
gv_vAlignTable['u272'] = 'top';
var u273 = document.getElementById('u273');
gv_vAlignTable['u273'] = 'top';
var u274 = document.getElementById('u274');

var u275 = document.getElementById('u275');

var u276 = document.getElementById('u276');

var u277 = document.getElementById('u277');
gv_vAlignTable['u277'] = 'top';
var u278 = document.getElementById('u278');

var u279 = document.getElementById('u279');
gv_vAlignTable['u279'] = 'center';
var u280 = document.getElementById('u280');
gv_vAlignTable['u280'] = 'top';
var u281 = document.getElementById('u281');

var u282 = document.getElementById('u282');

var u283 = document.getElementById('u283');
gv_vAlignTable['u283'] = 'center';
var u284 = document.getElementById('u284');
gv_vAlignTable['u284'] = 'top';
var u285 = document.getElementById('u285');
gv_vAlignTable['u285'] = 'top';
var u286 = document.getElementById('u286');
gv_vAlignTable['u286'] = 'top';
var u287 = document.getElementById('u287');

var u288 = document.getElementById('u288');
gv_vAlignTable['u288'] = 'center';
var u289 = document.getElementById('u289');
gv_vAlignTable['u289'] = 'top';
var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'top';
var u102 = document.getElementById('u102');

var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'center';
var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'top';
var u105 = document.getElementById('u105');

var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'center';
var u107 = document.getElementById('u107');

var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'center';
var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'top';
var u297 = document.getElementById('u297');
gv_vAlignTable['u297'] = 'top';
var u298 = document.getElementById('u298');
gv_vAlignTable['u298'] = 'top';
var u299 = document.getElementById('u299');
gv_vAlignTable['u299'] = 'top';
var u392 = document.getElementById('u392');
gv_vAlignTable['u392'] = 'top';
var u9 = document.getElementById('u9');

var u110 = document.getElementById('u110');

var u111 = document.getElementById('u111');

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u113 = document.getElementById('u113');

var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'top';
var u115 = document.getElementById('u115');

var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'top';
var u117 = document.getElementById('u117');

var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'top';
var u119 = document.getElementById('u119');

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u33 = document.getElementById('u33');

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u35 = document.getElementById('u35');

var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'top';
var u121 = document.getElementById('u121');

var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'top';
var u123 = document.getElementById('u123');

var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'top';
var u125 = document.getElementById('u125');

var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'top';
var u127 = document.getElementById('u127');

var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u129 = document.getElementById('u129');

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

var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u141 = document.getElementById('u141');

var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'top';
var u143 = document.getElementById('u143');

var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'top';
var u145 = document.getElementById('u145');

var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'top';
var u147 = document.getElementById('u147');

var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'top';
var u149 = document.getElementById('u149');

var u10 = document.getElementById('u10');

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'top';
var u13 = document.getElementById('u13');

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u15 = document.getElementById('u15');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'top';
var u18 = document.getElementById('u18');

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

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u21 = document.getElementById('u21');

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u23 = document.getElementById('u23');

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u25 = document.getElementById('u25');

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u27 = document.getElementById('u27');

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
var u29 = document.getElementById('u29');

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

var u203 = document.getElementById('u203');

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u31 = document.getElementById('u31');

var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'top';
var u207 = document.getElementById('u207');

var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'center';
var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'top';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u37 = document.getElementById('u37');

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u39 = document.getElementById('u39');

var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'top';
var u171 = document.getElementById('u171');

var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'top';
var u173 = document.getElementById('u173');

var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'top';
var u175 = document.getElementById('u175');

var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'top';
var u177 = document.getElementById('u177');

var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'top';
var u179 = document.getElementById('u179');

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u41 = document.getElementById('u41');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
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

var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'top';
var u181 = document.getElementById('u181');

var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'top';
var u183 = document.getElementById('u183');

var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'top';
var u185 = document.getElementById('u185');

var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'top';
var u187 = document.getElementById('u187');

var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'top';
var u189 = document.getElementById('u189');

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

var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'top';
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

var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
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

var u80 = document.getElementById('u80');

var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'top';
var u82 = document.getElementById('u82');

var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'top';
var u84 = document.getElementById('u84');

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'top';
var u86 = document.getElementById('u86');

var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'top';
var u88 = document.getElementById('u88');

var u89 = document.getElementById('u89');

var u90 = document.getElementById('u90');

var u91 = document.getElementById('u91');

var u92 = document.getElementById('u92');

var u93 = document.getElementById('u93');

var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'top';
var u95 = document.getElementById('u95');

var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'center';
var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'top';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'top';
var u400 = document.getElementById('u400');

var u401 = document.getElementById('u401');
gv_vAlignTable['u401'] = 'top';
var u402 = document.getElementById('u402');
gv_vAlignTable['u402'] = 'top';
var u403 = document.getElementById('u403');
gv_vAlignTable['u403'] = 'top';
var u404 = document.getElementById('u404');

var u405 = document.getElementById('u405');
gv_vAlignTable['u405'] = 'center';
var u406 = document.getElementById('u406');
gv_vAlignTable['u406'] = 'top';
var u407 = document.getElementById('u407');

var u408 = document.getElementById('u408');
gv_vAlignTable['u408'] = 'top';
var u409 = document.getElementById('u409');

var u410 = document.getElementById('u410');
gv_vAlignTable['u410'] = 'center';
var u411 = document.getElementById('u411');

var u412 = document.getElementById('u412');
gv_vAlignTable['u412'] = 'center';
var u413 = document.getElementById('u413');
gv_vAlignTable['u413'] = 'top';
var u414 = document.getElementById('u414');
gv_vAlignTable['u414'] = 'top';
var u415 = document.getElementById('u415');
gv_vAlignTable['u415'] = 'top';
var u416 = document.getElementById('u416');
gv_vAlignTable['u416'] = 'top';
var u417 = document.getElementById('u417');
gv_vAlignTable['u417'] = 'top';
var u418 = document.getElementById('u418');
gv_vAlignTable['u418'] = 'top';
var u419 = document.getElementById('u419');

u419.style.cursor = 'pointer';
if (bIE) u419.attachEvent("onclick", Clicku419);
else u419.addEventListener("click", Clicku419, true);
function Clicku419(e)
{

if (true) {

	SetPanelStateu224("pd1u224");

}

}

if (bIE) u419.attachEvent("onmouseout", MouseOutu419);
else u419.addEventListener("mouseout", MouseOutu419, true);
function MouseOutu419(e)
{
if (!IsTrueMouseOut('u419',e)) return;
if (true) {

SetWidgetRichText('u99', PopulateVariables('<span style=" font-family:\'Chalkboard\'; color:#FF6600; font-size:11px;">White: YM - 1</span>'));

SetWidgetRichText('u238', PopulateVariables('<span style=" font-family:\'Casual\'; color:#515151; font-size:13px;">1 item </span>'));

SetWidgetRichText('u12', PopulateVariables('<span style=" font-family:\'Chalkboard\'; color:#FF6600; font-size:11px;">You\'ve added: </span>'));

SetWidgetRichText('u270', PopulateVariables('<span style=" font-family:\'Casual\'; color:#006699; font-size:13px;"><u>Gildan Ultra Cotton Short Sleeve T-Shirt</u></span>'));

SetWidgetRichText('u271', PopulateVariables('<div style="text-align:right"><span style=" font-family:\'Casual\'; color:#515151; font-size:13px;">1 @ $12.00</span></div>'));

SetWidgetRichText('u273', PopulateVariables('<div style="text-align:right"><span style=" font-family:\'Casual\'; color:#515151; font-size:13px;">Total order $12.00</span></div>'));

}

}
gv_vAlignTable['u419'] = 'top';
var u420 = document.getElementById('u420');
gv_vAlignTable['u420'] = 'top';
var u421 = document.getElementById('u421');
gv_vAlignTable['u421'] = 'top';
var u422 = document.getElementById('u422');

if (bIE) u422.attachEvent("onkeyup", KeyUpu422);
else u422.addEventListener("keyup", KeyUpu422, true);
function KeyUpu422(e)
{

if ((GetWidgetFormText('u422')) == (PopulateVariables('1'))) {

	SetPanelStateu224("pd1u224");

SetWidgetRichText('u12', PopulateVariables('<span style=" font-family:\'Chalkboard\'; color:#FF6600; font-size:11px;">You\'ve added: </span>'));

SetWidgetRichText('u99', PopulateVariables('<span style=" font-family:\'Chalkboard\'; color:#FF6600; font-size:11px;">White: YM - 1 </span>'));

SetWidgetRichText('u269', PopulateVariables('<span style=" font-family:\'Casual\'; color:#515151; font-size:13px;">1 item </span>'));

SetWidgetRichText('u270', PopulateVariables('<span style=" font-family:\'Casual\'; color:#006699; font-size:13px;"><u>Gildan Ultra Cotton Short Sleeve T-Shirt</u></span>'));

SetWidgetRichText('u271', PopulateVariables('<div style="text-align:right"><span style=" font-family:\'Casual\'; color:#515151; font-size:13px;">1 @ $12.00</span></div>'));

SetWidgetRichText('u273', PopulateVariables('<div style="text-align:right"><span style=" font-family:\'Casual\'; color:#515151; font-size:13px;">Total order $12.00</span></div>'));

}

}

var u423 = document.getElementById('u423');

var u424 = document.getElementById('u424');

var u425 = document.getElementById('u425');

var u426 = document.getElementById('u426');

var u427 = document.getElementById('u427');

var u428 = document.getElementById('u428');

var u429 = document.getElementById('u429');

var u290 = document.getElementById('u290');

var u291 = document.getElementById('u291');
gv_vAlignTable['u291'] = 'top';
var u292 = document.getElementById('u292');

var u293 = document.getElementById('u293');
gv_vAlignTable['u293'] = 'center';
var u294 = document.getElementById('u294');
gv_vAlignTable['u294'] = 'top';
var u295 = document.getElementById('u295');
gv_vAlignTable['u295'] = 'top';
var u296 = document.getElementById('u296');
gv_vAlignTable['u296'] = 'top';
var u430 = document.getElementById('u430');

var u431 = document.getElementById('u431');

var u432 = document.getElementById('u432');

var u433 = document.getElementById('u433');

var u434 = document.getElementById('u434');

var u435 = document.getElementById('u435');

var u436 = document.getElementById('u436');

var u437 = document.getElementById('u437');

var u438 = document.getElementById('u438');

if (bIE) u438.attachEvent("onkeyup", KeyUpu438);
else u438.addEventListener("keyup", KeyUpu438, true);
function KeyUpu438(e)
{

if ((GetWidgetFormText('u438')) == (PopulateVariables('1'))) {

	SetPanelStateu224("pd1u224");

SetWidgetRichText('u12', PopulateVariables('<span style=" font-family:\'Chalkboard\'; color:#FF6600; font-size:11px;">You\'ve added: </span>'));

SetWidgetRichText('u99', PopulateVariables('<span style=" font-family:\'Chalkboard\'; color:#FF6600; font-size:11px;">White: YM - 1, L - 1 </span>'));

SetWidgetRichText('u269', PopulateVariables('<span style=" font-family:\'Casual\'; color:#515151; font-size:13px;">2 items</span>'));

SetWidgetRichText('u270', PopulateVariables('<span style=" font-family:\'Casual\'; color:#006699; font-size:13px;"><u>Gildan Ultra Cotton Short Sleeve T-Shirt</u></span>'));

SetWidgetRichText('u271', PopulateVariables('<div style="text-align:right"><span style=" font-family:\'Casual\'; color:#515151; font-size:13px;">2 @ $12.00</span></div>'));

SetWidgetRichText('u273', PopulateVariables('<div style="text-align:right"><span style=" font-family:\'Casual\'; color:#515151; font-size:13px;">Total order $24.00</span></div>'));

}

}

var u439 = document.getElementById('u439');

if (bIE) u439.attachEvent("onkeyup", KeyUpu439);
else u439.addEventListener("keyup", KeyUpu439, true);
function KeyUpu439(e)
{

if ((GetWidgetFormText('u439')) == (PopulateVariables('1'))) {

	SetPanelStateu224("pd1u224");

SetWidgetRichText('u12', PopulateVariables('<span style=" font-family:\'Chalkboard\'; color:#FF6600; font-size:11px;">You\'ve added: </span>'));

SetWidgetRichText('u100', PopulateVariables('<span style=" font-family:\'Chalkboard\'; color:#FF6600; font-size:11px;">Gray: XL - 1 </span>'));

SetWidgetRichText('u269', PopulateVariables('<span style=" font-family:\'Casual\'; color:#515151; font-size:13px;">3 items</span>'));

SetWidgetRichText('u270', PopulateVariables('<span style=" font-family:\'Casual\'; color:#006699; font-size:13px;"><u>Gildan Ultra Cotton Short Sleeve T-Shirt</u></span>'));

SetWidgetRichText('u271', PopulateVariables('<div style="text-align:right"><span style=" font-family:\'Casual\'; color:#515151; font-size:13px;">3 @ $12.00</span></div>'));

SetWidgetRichText('u273', PopulateVariables('<div style="text-align:right"><span style=" font-family:\'Casual\'; color:#515151; font-size:13px;">Total order $36.00</span></div>'));

}

}

var u440 = document.getElementById('u440');
gv_vAlignTable['u440'] = 'top';
var u441 = document.getElementById('u441');

var u442 = document.getElementById('u442');
gv_vAlignTable['u442'] = 'center';
var u443 = document.getElementById('u443');

var u444 = document.getElementById('u444');

var u445 = document.getElementById('u445');

var u446 = document.getElementById('u446');

var u447 = document.getElementById('u447');

var u448 = document.getElementById('u448');

var u449 = document.getElementById('u449');

var u450 = document.getElementById('u450');

var u451 = document.getElementById('u451');

var u452 = document.getElementById('u452');

var u453 = document.getElementById('u453');

var u454 = document.getElementById('u454');

var u455 = document.getElementById('u455');

var u456 = document.getElementById('u456');

var u457 = document.getElementById('u457');

var u458 = document.getElementById('u458');

var u459 = document.getElementById('u459');

var u460 = document.getElementById('u460');

var u461 = document.getElementById('u461');

var u462 = document.getElementById('u462');

var u463 = document.getElementById('u463');

var u464 = document.getElementById('u464');

var u465 = document.getElementById('u465');

var u466 = document.getElementById('u466');

var u467 = document.getElementById('u467');

var u468 = document.getElementById('u468');

if (bIE) u468.attachEvent("onkeyup", KeyUpu468);
else u468.addEventListener("keyup", KeyUpu468, true);
function KeyUpu468(e)
{

if ((GetWidgetFormText('u468')) == (PopulateVariables('1'))) {

	SetPanelStateu224("pd3u224");

SetWidgetRichText('u104', PopulateVariables('<span style=" font-family:\'Chalkboard\'; color:#FF6600; font-size:11px;">You\'ve added:</span>'));

SetWidgetRichText('u210', PopulateVariables('<span style=" font-family:\'Chalkboard\'; color:#FF6600; font-size:11px;">Gray with blue ink: L-1</span>'));

SetWidgetRichText('u348', PopulateVariables('<span style=" font-family:\'Casual\'; color:#515151; font-size:13px;">4 items </span>'));

SetWidgetRichText('u355', PopulateVariables('<div style="text-align:right"><span style=" font-family:\'Casual\'; color:#515151; font-size:13px;">1 @ $22.00</span></div>'));

SetWidgetRichText('u352', PopulateVariables('<div style="text-align:right"><span style=" font-family:\'Casual\'; color:#515151; font-size:13px;">Total order $58.00</span></div>'));

}

}

var u469 = document.getElementById('u469');

if (bIE) u469.attachEvent("onkeyup", KeyUpu469);
else u469.addEventListener("keyup", KeyUpu469, true);
function KeyUpu469(e)
{

if ((GetWidgetFormText('u469')) == (PopulateVariables('1'))) {

	SetPanelStateu224("pd3u224");

SetWidgetRichText('u104', PopulateVariables('<span style=" font-family:\'Chalkboard\'; color:#FF6600; font-size:11px;">You\'ve added:</span>'));

SetWidgetRichText('u211', PopulateVariables('<span style=" font-family:\'Chalkboard\'; color:#FF6600; font-size:11px;">Navy with white ink: XL - 1</span>'));

SetWidgetRichText('u348', PopulateVariables('<span style=" font-family:\'Casual\'; color:#515151; font-size:13px;">5 items </span>'));

SetWidgetRichText('u355', PopulateVariables('<div style="text-align:right"><span style=" font-family:\'Casual\'; color:#515151; font-size:13px;">2 @ $22.00</span></div>'));

SetWidgetRichText('u352', PopulateVariables('<div style="text-align:right"><span style=" font-family:\'Casual\'; color:#515151; font-size:13px;">Total order $80.00</span></div>'));

}

}

var u470 = document.getElementById('u470');
gv_vAlignTable['u470'] = 'top';
var u204 = document.getElementById('u204');

var u300 = document.getElementById('u300');

var u301 = document.getElementById('u301');
gv_vAlignTable['u301'] = 'center';
var u302 = document.getElementById('u302');
gv_vAlignTable['u302'] = 'top';
var u303 = document.getElementById('u303');

var u304 = document.getElementById('u304');
gv_vAlignTable['u304'] = 'center';
var u305 = document.getElementById('u305');
gv_vAlignTable['u305'] = 'top';
var u306 = document.getElementById('u306');
gv_vAlignTable['u306'] = 'top';
var u307 = document.getElementById('u307');
gv_vAlignTable['u307'] = 'top';
var u308 = document.getElementById('u308');
gv_vAlignTable['u308'] = 'top';
var u309 = document.getElementById('u309');
gv_vAlignTable['u309'] = 'top';
var u310 = document.getElementById('u310');
gv_vAlignTable['u310'] = 'top';
var u311 = document.getElementById('u311');

var u312 = document.getElementById('u312');

var u313 = document.getElementById('u313');

var u314 = document.getElementById('u314');
gv_vAlignTable['u314'] = 'center';
var u315 = document.getElementById('u315');
gv_vAlignTable['u315'] = 'top';
var u316 = document.getElementById('u316');

var u317 = document.getElementById('u317');
gv_vAlignTable['u317'] = 'center';
var u318 = document.getElementById('u318');
gv_vAlignTable['u318'] = 'top';
var u319 = document.getElementById('u319');

var u320 = document.getElementById('u320');
gv_vAlignTable['u320'] = 'top';
var u321 = document.getElementById('u321');
gv_vAlignTable['u321'] = 'top';
var u322 = document.getElementById('u322');
gv_vAlignTable['u322'] = 'top';
var u323 = document.getElementById('u323');

var u324 = document.getElementById('u324');
gv_vAlignTable['u324'] = 'center';
var u325 = document.getElementById('u325');
gv_vAlignTable['u325'] = 'top';
var u326 = document.getElementById('u326');

var u327 = document.getElementById('u327');
gv_vAlignTable['u327'] = 'top';
var u328 = document.getElementById('u328');

var u329 = document.getElementById('u329');
gv_vAlignTable['u329'] = 'center';
var u330 = document.getElementById('u330');

var u331 = document.getElementById('u331');
gv_vAlignTable['u331'] = 'center';
var u332 = document.getElementById('u332');
gv_vAlignTable['u332'] = 'top';
var u333 = document.getElementById('u333');
gv_vAlignTable['u333'] = 'top';
var u334 = document.getElementById('u334');
gv_vAlignTable['u334'] = 'top';
var u335 = document.getElementById('u335');
gv_vAlignTable['u335'] = 'top';
var u336 = document.getElementById('u336');
gv_vAlignTable['u336'] = 'top';
var u337 = document.getElementById('u337');

var u338 = document.getElementById('u338');
gv_vAlignTable['u338'] = 'center';
var u339 = document.getElementById('u339');
gv_vAlignTable['u339'] = 'top';
var u340 = document.getElementById('u340');
gv_vAlignTable['u340'] = 'top';
var u341 = document.getElementById('u341');

u341.style.cursor = 'pointer';
if (bIE) u341.attachEvent("onclick", Clicku341);
else u341.addEventListener("click", Clicku341, true);
function Clicku341(e)
{

if (true) {

	SetPanelStateu224("pd4u224");

}

}
gv_vAlignTable['u341'] = 'top';
var u342 = document.getElementById('u342');

var u343 = document.getElementById('u343');
gv_vAlignTable['u343'] = 'center';
var u344 = document.getElementById('u344');
gv_vAlignTable['u344'] = 'top';
var u345 = document.getElementById('u345');

u345.style.cursor = 'pointer';
if (bIE) u345.attachEvent("onclick", Clicku345);
else u345.addEventListener("click", Clicku345, true);
function Clicku345(e)
{

if (false) {

	SetPanelVisibilityu0("");

	BringToFront("u0");

}

}

var u346 = document.getElementById('u346');
gv_vAlignTable['u346'] = 'center';
var u347 = document.getElementById('u347');
gv_vAlignTable['u347'] = 'top';
var u348 = document.getElementById('u348');
gv_vAlignTable['u348'] = 'top';
var u349 = document.getElementById('u349');
gv_vAlignTable['u349'] = 'top';
var u350 = document.getElementById('u350');
gv_vAlignTable['u350'] = 'top';
var u351 = document.getElementById('u351');
gv_vAlignTable['u351'] = 'top';
var u352 = document.getElementById('u352');
gv_vAlignTable['u352'] = 'top';
var u353 = document.getElementById('u353');

var u354 = document.getElementById('u354');

var u355 = document.getElementById('u355');
gv_vAlignTable['u355'] = 'top';
var u356 = document.getElementById('u356');

var u357 = document.getElementById('u357');
gv_vAlignTable['u357'] = 'top';
var u358 = document.getElementById('u358');
gv_vAlignTable['u358'] = 'top';
var u359 = document.getElementById('u359');

var u360 = document.getElementById('u360');

var u361 = document.getElementById('u361');
gv_vAlignTable['u361'] = 'top';
var u362 = document.getElementById('u362');

var u363 = document.getElementById('u363');
gv_vAlignTable['u363'] = 'center';
var u364 = document.getElementById('u364');
gv_vAlignTable['u364'] = 'top';
var u365 = document.getElementById('u365');

var u366 = document.getElementById('u366');

var u367 = document.getElementById('u367');
gv_vAlignTable['u367'] = 'center';
var u368 = document.getElementById('u368');
gv_vAlignTable['u368'] = 'top';
var u369 = document.getElementById('u369');
gv_vAlignTable['u369'] = 'top';
var u370 = document.getElementById('u370');
gv_vAlignTable['u370'] = 'top';
var u371 = document.getElementById('u371');

var u372 = document.getElementById('u372');
gv_vAlignTable['u372'] = 'center';
var u373 = document.getElementById('u373');
gv_vAlignTable['u373'] = 'top';
var u374 = document.getElementById('u374');

var u375 = document.getElementById('u375');
gv_vAlignTable['u375'] = 'top';
var u376 = document.getElementById('u376');

var u377 = document.getElementById('u377');
gv_vAlignTable['u377'] = 'center';
var u378 = document.getElementById('u378');
gv_vAlignTable['u378'] = 'top';
var u379 = document.getElementById('u379');
gv_vAlignTable['u379'] = 'top';
var u380 = document.getElementById('u380');
gv_vAlignTable['u380'] = 'top';
var u381 = document.getElementById('u381');
gv_vAlignTable['u381'] = 'top';
var u382 = document.getElementById('u382');
gv_vAlignTable['u382'] = 'top';
var u383 = document.getElementById('u383');
gv_vAlignTable['u383'] = 'top';
var u384 = document.getElementById('u384');

var u385 = document.getElementById('u385');
gv_vAlignTable['u385'] = 'center';
var u386 = document.getElementById('u386');
gv_vAlignTable['u386'] = 'top';
var u387 = document.getElementById('u387');

var u388 = document.getElementById('u388');
gv_vAlignTable['u388'] = 'center';
var u389 = document.getElementById('u389');
gv_vAlignTable['u389'] = 'top';
var u200 = document.getElementById('u200');

var u201 = document.getElementById('u201');

var u202 = document.getElementById('u202');

var u390 = document.getElementById('u390');
gv_vAlignTable['u390'] = 'top';
var u391 = document.getElementById('u391');
gv_vAlignTable['u391'] = 'top';
var u205 = document.getElementById('u205');

var u393 = document.getElementById('u393');
gv_vAlignTable['u393'] = 'top';
var u394 = document.getElementById('u394');

var u395 = document.getElementById('u395');

var u396 = document.getElementById('u396');
gv_vAlignTable['u396'] = 'top';
var u397 = document.getElementById('u397');

var u398 = document.getElementById('u398');
gv_vAlignTable['u398'] = 'center';
var u399 = document.getElementById('u399');
gv_vAlignTable['u399'] = 'top';
var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'top';
var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'top';
var u212 = document.getElementById('u212');

var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'center';
var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'top';
var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'top';
var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'top';
var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'top';
var u218 = document.getElementById('u218');

var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'center';
var u220 = document.getElementById('u220');

var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'center';
var u222 = document.getElementById('u222');

var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'center';
var u224 = document.getElementById('u224');

var u225 = document.getElementById('u225');

var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'center';
var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'top';
var u228 = document.getElementById('u228');

var u229 = document.getElementById('u229');

var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'center';
var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'top';
var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'top';
var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'top';
var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'top';
var u235 = document.getElementById('u235');

var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'center';
var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'top';
var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'top';
var u239 = document.getElementById('u239');
gv_vAlignTable['u239'] = 'top';
var u240 = document.getElementById('u240');

var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'top';
var u242 = document.getElementById('u242');

var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'center';
var u244 = document.getElementById('u244');

var u245 = document.getElementById('u245');

var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'center';
var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'top';
var u248 = document.getElementById('u248');

var u249 = document.getElementById('u249');
gv_vAlignTable['u249'] = 'top';
var u250 = document.getElementById('u250');

var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'center';
var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'top';
var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'top';
var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'top';
var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'top';
var u256 = document.getElementById('u256');
gv_vAlignTable['u256'] = 'top';
var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'top';
var u258 = document.getElementById('u258');

var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'center';
var u0 = document.getElementById('u0');

var u1 = document.getElementById('u1');

var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'center';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'top';
var u4 = document.getElementById('u4');

u4.style.cursor = 'pointer';
if (bIE) u4.attachEvent("onclick", Clicku4);
else u4.addEventListener("click", Clicku4, true);
function Clicku4(e)
{

if (true) {

	BringToFront("u224");

	SetPanelVisibilityu0("hidden");

}

}

var u5 = document.getElementById('u5');

u5.style.cursor = 'pointer';
if (bIE) u5.attachEvent("onclick", Clicku5);
else u5.addEventListener("click", Clicku5, true);
function Clicku5(e)
{

if (true) {

	BringToFront("u224");

	SetPanelStateu224("pd2u224");

	SetPanelVisibilityu0("hidden");

}

}

var u6 = document.getElementById('u6');

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'top';
var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'top';
var u261 = document.getElementById('u261');

var u262 = document.getElementById('u262');
gv_vAlignTable['u262'] = 'center';
var u263 = document.getElementById('u263');
gv_vAlignTable['u263'] = 'top';
var u264 = document.getElementById('u264');

var u265 = document.getElementById('u265');
gv_vAlignTable['u265'] = 'top';
var u266 = document.getElementById('u266');

u266.style.cursor = 'pointer';
if (bIE) u266.attachEvent("onclick", Clicku266);
else u266.addEventListener("click", Clicku266, true);
function Clicku266(e)
{

if ((GetWidgetFormText('u264')) == (PopulateVariables('dupe@dupemail.com'))) {

	SetPanelVisibilityu0("");

	BringToFront("u0");

}

}

var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'center';
var u268 = document.getElementById('u268');
gv_vAlignTable['u268'] = 'top';
var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'top';
if (window.OnLoad) OnLoad();
