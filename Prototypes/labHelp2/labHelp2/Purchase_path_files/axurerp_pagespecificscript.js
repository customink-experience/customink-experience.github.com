
var PageName = 'Purchase path';
var PageId = 'p2ccfab1df0194797a469c83478509b28'
var PageUrl = 'Purchase_path.html'
document.title = 'Purchase path';

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

if (true) {

SetGlobalVariableValue('$pathName', PopulateVariables('old'));

SetGlobalVariableValue('$IIPrice', PopulateVariables('$181.26'));

SetGlobalVariableValue('$VAtax', PopulateVariables('$0.00'));

}

}

eval(GetDynamicPanelScript('u4', 8));

eval(GetDynamicPanelScript('u8', 3));

var u20 = document.getElementById('u20');

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u22 = document.getElementById('u22');

var u23 = document.getElementById('u23');

var u24 = document.getElementById('u24');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u26 = document.getElementById('u26');

var u27 = document.getElementById('u27');

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
var u29 = document.getElementById('u29');

var u30 = document.getElementById('u30');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u32 = document.getElementById('u32');

var u33 = document.getElementById('u33');

var u34 = document.getElementById('u34');

var u35 = document.getElementById('u35');

u35.style.cursor = 'pointer';
if (bIE) u35.attachEvent("onclick", Clicku35);
else u35.addEventListener("click", Clicku35, true);
function Clicku35(e)
{

if (true) {

SetGlobalVariableValue('$pathName', PopulateVariables('old'));

SetGlobalVariableValue('$pathName', PopulateVariables('old'));

SetWidgetRichText('u35', PopulateVariables('<span style=" font-family:\'Calibri\'; color:#282828; font-size:12px;">&gt; current path</span>'));

SetWidgetRichText('u36', PopulateVariables('<span style=" font-family:\'Calibri\'; color:#0000FF; font-size:12px;"><u>&nbsp;&nbsp; sans preview</u></span>'));

SetWidgetRichText('u37', PopulateVariables('<span style=" font-family:\'Calibri\'; color:#0000FF; font-size:12px;"><u>&nbsp;&nbsp; new path1</u></span>'));

SetWidgetRichText('u38', PopulateVariables('<span style=" font-family:\'Calibri\'; color:#0000FF; font-size:12px;"><u>&nbsp;&nbsp; new path2</u></span>'));

SetWidgetRichText('u39', PopulateVariables('<span style=" font-family:\'Calibri\'; color:#0000FF; font-size:12px;"><u>&nbsp;&nbsp; new path3</u></span>'));

	SetPanelStateu4("pd0u4");

}

}
gv_vAlignTable['u35'] = 'top';
var u36 = document.getElementById('u36');

u36.style.cursor = 'pointer';
if (bIE) u36.attachEvent("onclick", Clicku36);
else u36.addEventListener("click", Clicku36, true);
function Clicku36(e)
{

if (true) {

SetGlobalVariableValue('$pathName', PopulateVariables('old2'));

SetWidgetRichText('u35', PopulateVariables('<span style=" font-family:\'Calibri\'; color:#282828; font-size:12px;">&nbsp;&nbsp; </span><span style=" font-family:\'Calibri\'; color:#0000FF; font-size:12px;"><u>current path</u></span>'));

SetWidgetRichText('u36', PopulateVariables('<span style=" font-family:\'Calibri\'; color:#363636; font-size:12px;">&gt;&nbsp; sans preview</span>'));

SetWidgetRichText('u37', PopulateVariables('<span style=" font-family:\'Calibri\'; color:#0000FF; font-size:12px;"><u>&nbsp;&nbsp; new path1</u></span>'));

SetWidgetRichText('u38', PopulateVariables('<span style=" font-family:\'Calibri\'; color:#0000FF; font-size:12px;"><u>&nbsp;&nbsp; new path2</u></span>'));

SetWidgetRichText('u39', PopulateVariables('<span style=" font-family:\'Calibri\'; color:#0000FF; font-size:12px;"><u>&nbsp;&nbsp; new path3</u></span>'));

	SetPanelStateu4("pd0u4");

}

}
gv_vAlignTable['u36'] = 'top';
var u37 = document.getElementById('u37');

u37.style.cursor = 'pointer';
if (bIE) u37.attachEvent("onclick", Clicku37);
else u37.addEventListener("click", Clicku37, true);
function Clicku37(e)
{

if (true) {

SetGlobalVariableValue('$pathName', PopulateVariables('new1'));

SetWidgetRichText('u35', PopulateVariables('<span style=" font-family:\'Calibri\'; color:#0000FF; font-size:12px;"><u>&nbsp;&nbsp; current path</u></span>'));

SetWidgetRichText('u36', PopulateVariables('<span style=" font-family:\'Calibri\'; color:#0000FF; font-size:12px;"><u>&nbsp;&nbsp; sans preview</u></span>'));

SetWidgetRichText('u37', PopulateVariables('<span style=" font-family:\'Calibri\'; color:#282828; font-size:12px;">&gt;&nbsp; new path1</span>'));

SetWidgetRichText('u38', PopulateVariables('<span style=" font-family:\'Calibri\'; color:#0000FF; font-size:12px;"><u>&nbsp;&nbsp; new path2</u></span>'));

SetWidgetRichText('u39', PopulateVariables('<span style=" font-family:\'Calibri\'; color:#0000FF; font-size:12px;"><u>&nbsp;&nbsp; new path3</u></span>'));

	SetPanelStateu4("pd0u4");

}

}
gv_vAlignTable['u37'] = 'top';
var u38 = document.getElementById('u38');

u38.style.cursor = 'pointer';
if (bIE) u38.attachEvent("onclick", Clicku38);
else u38.addEventListener("click", Clicku38, true);
function Clicku38(e)
{

if (true) {

SetGlobalVariableValue('$pathName', PopulateVariables('new2'));

SetWidgetRichText('u35', PopulateVariables('<span style=" font-family:\'Calibri\'; color:#282828; font-size:12px;">&nbsp;&nbsp; </span><span style=" font-family:\'Calibri\'; color:#0000FF; font-size:12px;"><u>current path</u></span>'));

SetWidgetRichText('u36', PopulateVariables('<span style=" font-family:\'Calibri\'; color:#0000FF; font-size:12px;"><u>&nbsp;&nbsp; sans preview</u></span>'));

SetWidgetRichText('u37', PopulateVariables('<span style=" font-family:\'Calibri\'; color:#0000FF; font-size:12px;"><u>&nbsp;&nbsp; new path1</u></span>'));

SetWidgetRichText('u38', PopulateVariables('<span style=" font-family:\'Calibri\'; color:#282828; font-size:12px;">&gt;&nbsp; new path2</span>'));

SetWidgetRichText('u39', PopulateVariables('<span style=" font-family:\'Calibri\'; color:#0000FF; font-size:12px;"><u>&nbsp;&nbsp; new path3</u></span>'));

	SetPanelStateu4("pd0u4");

}

}
gv_vAlignTable['u38'] = 'top';
var u39 = document.getElementById('u39');

u39.style.cursor = 'pointer';
if (bIE) u39.attachEvent("onclick", Clicku39);
else u39.addEventListener("click", Clicku39, true);
function Clicku39(e)
{

if (true) {

SetGlobalVariableValue('$pathName', PopulateVariables('new3'));

SetWidgetRichText('u35', PopulateVariables('<span style=" font-family:\'Calibri\'; color:#282828; font-size:12px;">&nbsp;&nbsp; </span><span style=" font-family:\'Calibri\'; color:#0000FF; font-size:12px;"><u>current path</u></span>'));

SetWidgetRichText('u36', PopulateVariables('<span style=" font-family:\'Calibri\'; color:#0000FF; font-size:12px;"><u>&nbsp;&nbsp; sans preview</u></span>'));

SetWidgetRichText('u37', PopulateVariables('<span style=" font-family:\'Calibri\'; color:#0000FF; font-size:12px;"><u>&nbsp;&nbsp; new path1</u></span>'));

SetWidgetRichText('u38', PopulateVariables('<span style=" font-family:\'Calibri\'; color:#0000FF; font-size:12px;"><u>&nbsp;&nbsp; new path2</u></span>'));

SetWidgetRichText('u39', PopulateVariables('<span style=" font-family:\'Calibri\'; color:#282828; font-size:12px;">&gt;&nbsp; new path3</span>'));

	SetPanelStateu4("pd0u4");

}

}
gv_vAlignTable['u39'] = 'top';
var u0 = document.getElementById('u0');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u2 = document.getElementById('u2');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u4 = document.getElementById('u4');

var u5 = document.getElementById('u5');

var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u7 = document.getElementById('u7');

u7.style.cursor = 'pointer';
if (bIE) u7.attachEvent("onclick", Clicku7);
else u7.addEventListener("click", Clicku7, true);
function Clicku7(e)
{

if ((GetGlobalVariableValue('$pathName')) == (PopulateVariables('old'))) {

	SetPanelStateu4("pd2u4");

}
else
if ((GetGlobalVariableValue('$pathName')) == (PopulateVariables('old2'))) {

	SetPanelStateu4("pd3u4");

}
else
if ((GetGlobalVariableValue('$pathName')) == (PopulateVariables('new1'))) {

	SetPanelStateu4("pd1u4");

	SetPanelStateu8("pd0u8");

}
else
if ((GetGlobalVariableValue('$pathName')) == (PopulateVariables('new2'))) {

	SetPanelStateu4("pd1u4");

	SetPanelStateu8("pd1u8");

}
else
if ((GetGlobalVariableValue('$pathName')) == (PopulateVariables('new3'))) {

	SetPanelStateu4("pd1u4");

	SetPanelStateu8("pd2u8");

}

}

var u8 = document.getElementById('u8');

var u9 = document.getElementById('u9');

var u10 = document.getElementById('u10');

var u11 = document.getElementById('u11');

var u12 = document.getElementById('u12');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u14 = document.getElementById('u14');

u14.style.cursor = 'pointer';
if (bIE) u14.attachEvent("onclick", Clicku14);
else u14.addEventListener("click", Clicku14, true);
function Clicku14(e)
{

if (true) {

	SetPanelStateu4("pd3u4");

}

}

var u15 = document.getElementById('u15');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u17 = document.getElementById('u17');

u17.style.cursor = 'pointer';
if (bIE) u17.attachEvent("onclick", Clicku17);
else u17.addEventListener("click", Clicku17, true);
function Clicku17(e)
{

if (true) {

	SetPanelStateu4("pd4u4");

}

}

var u18 = document.getElementById('u18');

u18.style.cursor = 'pointer';
if (bIE) u18.attachEvent("onclick", Clicku18);
else u18.addEventListener("click", Clicku18, true);
function Clicku18(e)
{

if (true) {

	SetPanelStateu4("pd6u4");

}

}

var u19 = document.getElementById('u19');

u19.style.cursor = 'pointer';
if (bIE) u19.attachEvent("onclick", Clicku19);
else u19.addEventListener("click", Clicku19, true);
function Clicku19(e)
{

if (true) {

	SetPanelStateu4("pd0u4");

}

}

if (window.OnLoad) OnLoad();
