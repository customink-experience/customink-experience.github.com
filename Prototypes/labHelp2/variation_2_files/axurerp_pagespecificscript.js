
var PageName = 'variation 2';
var PageId = 'pd6e6c25bf7e04658a3a2c095eaa1d1b0'
var PageUrl = 'variation_2.html'
document.title = 'variation 2';

if (top.location != self.location)
{
	if (parent.HandleMainFrameChanged) {
		parent.HandleMainFrameChanged();
	}
}

var $OnLoadVariable = '';

var $tabSelected = '';

var $pathName = '';

var $IIPrice = '';

var $VAtax = '';

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
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&tabSelected=' + encodeURIComponent($tabSelected) + '&pathName=' + encodeURIComponent($pathName) + '&IIPrice=' + encodeURIComponent($IIPrice) + '&VAtax=' + encodeURIComponent($VAtax) + '&CSUM=1';
}

function PopulateVariables(value) {
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[tabSelected\]\]/g, $tabSelected);
  value = value.replace(/\[\[pathName\]\]/g, $pathName);
  value = value.replace(/\[\[IIPrice\]\]/g, $IIPrice);
  value = value.replace(/\[\[VAtax\]\]/g, $VAtax);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  return value;
}

function OnLoad(e) {

}

eval(GetDynamicPanelScript('u0', 2));

eval(GetDynamicPanelScript('u36', 1));

eval(GetDynamicPanelScript('u18', 2));

var u80 = document.getElementById('u80');

u80.style.cursor = 'pointer';
if (bIE) u80.attachEvent("onclick", Clicku80);
else u80.addEventListener("click", Clicku80, true);
function Clicku80(e)
{

if (true) {

	parent.location.href = "Saved.html" + GetQuerystring();

SetGlobalVariableValue('$OnLoadVariable', PopulateVariables('nopurch'));

}

}

var u81 = document.getElementById('u81');

u81.style.cursor = 'pointer';
if (bIE) u81.attachEvent("onclick", Clicku81);
else u81.addEventListener("click", Clicku81, true);
function Clicku81(e)
{

if (true) {

	parent.location.href = "Saved.html" + GetQuerystring();

}

}

var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'center';
var u83 = document.getElementById('u83');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'top';
var u11 = document.getElementById('u11');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'top';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
var u15 = document.getElementById('u15');

u15.style.cursor = 'pointer';
if (bIE) u15.attachEvent("onclick", Clicku15);
else u15.addEventListener("click", Clicku15, true);
function Clicku15(e)
{

if ((GetGlobalVariableValue('$VAtax')) == (PopulateVariables('$0.00'))) {

SetGlobalVariableValue('$VAtax', PopulateVariables('$9.06'));

SetGlobalVariableValue('$IIPrice', PopulateVariables('$190.32'));

SetWidgetRichText('u15', PopulateVariables('<span style=" font-family:\'Calibri\'; color:#003399; font-size:11px;"><u>Remove VA tax</u></span>'));

SetWidgetRichText('u17', PopulateVariables('<div style="text-align:right"><span style=" font-family:\'Calibri\'; color:#6B6B6B; font-size:12px;">[[VAtax]]</span></div>'));

SetWidgetRichText('u20', PopulateVariables('<div style="text-align:right"><b><span style=" font-family:\'Calibri\'; color:#CC3300; font-size:13px;">[[IIPrice]]</span></b></div>'));

SetWidgetRichText('u28', PopulateVariables('<div style="text-align:right"><b><span style=" font-family:\'Calibri\'; color:#CC3300; font-size:13px;">[[IIPrice]]</span></b></div>'));

}
else
if (true) {

SetGlobalVariableValue('$IIPrice', PopulateVariables('$181.26'));

SetGlobalVariableValue('$VAtax', PopulateVariables('$0.00'));

SetWidgetRichText('u17', PopulateVariables('<div style="text-align:right"><span style=" font-family:\'Calibri\'; color:#6B6B6B; font-size:12px;">$0.00</span></div>'));

SetWidgetRichText('u20', PopulateVariables('<div style="text-align:right"><b><span style=" font-family:\'Calibri\'; color:#CC3300; font-size:13px;">$181.26</span></b></div>'));

SetWidgetRichText('u28', PopulateVariables('<div style="text-align:right"><b><span style=" font-family:\'Calibri\'; color:#CC3300; font-size:13px;">$181.26</span></b></div>'));

}

}
gv_vAlignTable['u15'] = 'top';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'top';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'top';
var u18 = document.getElementById('u18');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u21 = document.getElementById('u21');

var u22 = document.getElementById('u22');

u22.style.cursor = 'pointer';
if (bIE) u22.attachEvent("onclick", Clicku22);
else u22.addEventListener("click", Clicku22, true);
function Clicku22(e)
{

if (true) {

	SetPanelStateu18("pd1u18");

	SetPanelStateu0("pd1u0");

	MoveWidgetBy('u36',0,50);

}

}
gv_vAlignTable['u22'] = 'top';
var u23 = document.getElementById('u23');

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u25 = document.getElementById('u25');

u25.style.cursor = 'pointer';
if (bIE) u25.attachEvent("onclick", Clicku25);
else u25.addEventListener("click", Clicku25, true);
function Clicku25(e)
{

if ((GetCheckState('u25')) == (true)) {

SetWidgetRichText('u35', PopulateVariables('<div style="text-align:right"><span style=" font-family:\'Calibri\'; color:#FFFFFF; font-size:12px;">$0.00</span></div>'));

SetWidgetRichText('u28', PopulateVariables('<div style="text-align:right"><b><span style=" font-family:\'Calibri\'; color:#CC3300; font-size:13px;">$181.26</span></b></div>'));

}
else
if (true) {

SetWidgetRichText('u35', PopulateVariables('<div style="text-align:right"><span style=" font-family:\'Calibri\'; color:#282828; font-size:12px;">$45.31</span></div>'));

SetWidgetRichText('u28', PopulateVariables('<div style="text-align:right"><b><span style=" font-family:\'Calibri\'; color:#CC3300; font-size:13px;">$226.57</span></b></div>'));

}

}

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
var u29 = document.getElementById('u29');

var u30 = document.getElementById('u30');

u30.style.cursor = 'pointer';
if (bIE) u30.attachEvent("onclick", Clicku30);
else u30.addEventListener("click", Clicku30, true);
function Clicku30(e)
{

if ((GetCheckState('u25')) == (false)) {

	SetPanelStateu0("pd0u0");

	SetPanelStateu18("pd0u18");

	MoveWidgetBy('u36',0,-50);

}

}
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

	NewWindow("http://www.customink.com/pricing/super_rush" + "", "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}
gv_vAlignTable['u33'] = 'top';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u36 = document.getElementById('u36');

var u37 = document.getElementById('u37');

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u39 = document.getElementById('u39');

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u44 = document.getElementById('u44');

var u45 = document.getElementById('u45');

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u47 = document.getElementById('u47');

var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u49 = document.getElementById('u49');

var u0 = document.getElementById('u0');

var u1 = document.getElementById('u1');

var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'center';
var u3 = document.getElementById('u3');

var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
var u5 = document.getElementById('u5');

var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u7 = document.getElementById('u7');

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'top';
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

u69.style.cursor = 'pointer';
if (bIE) u69.attachEvent("onclick", Clicku69);
else u69.addEventListener("click", Clicku69, true);
function Clicku69(e)
{

if (true) {

	self.location.href="Purchase_path.html" + GetQuerystring();

}

}
gv_vAlignTable['u69'] = 'top';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'top';
var u72 = document.getElementById('u72');

u72.style.cursor = 'pointer';
if (bIE) u72.attachEvent("onclick", Clicku72);
else u72.addEventListener("click", Clicku72, true);
function Clicku72(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Display Add art tab content"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}
gv_vAlignTable['u72'] = 'top';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'top';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'top';
var u75 = document.getElementById('u75');

u75.style.cursor = 'pointer';
if (bIE) u75.attachEvent("onclick", Clicku75);
else u75.addEventListener("click", Clicku75, true);
function Clicku75(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Display Swap Product in lab"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}
gv_vAlignTable['u75'] = 'top';
var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'top';
var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'top';
var u78 = document.getElementById('u78');

u78.style.cursor = 'pointer';
if (bIE) u78.attachEvent("onclick", Clicku78);
else u78.addEventListener("click", Clicku78, true);
function Clicku78(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("show popup with logo sample and option to add logo.&nbsp; Should show price reduction."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}
gv_vAlignTable['u78'] = 'top';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
if (window.OnLoad) OnLoad();
