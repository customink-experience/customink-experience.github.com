
var PageName = 'Home';
var PageId = 'pb689829d50d24199a97fad18be30267e'
var PageUrl = 'Home.html'
document.title = 'Home';

if (top.location != self.location)
{
	if (parent.HandleMainFrameChanged) {
		parent.HandleMainFrameChanged();
	}
}

var $OnLoadVariable = '';

var $designName = '';

var $linksel = '';

var $email = '';

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
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&designName=' + encodeURIComponent($designName) + '&linksel=' + encodeURIComponent($linksel) + '&email=' + encodeURIComponent($email) + '&CSUM=1';
}

function PopulateVariables(value) {
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[designName\]\]/g, $designName);
  value = value.replace(/\[\[linksel\]\]/g, $linksel);
  value = value.replace(/\[\[email\]\]/g, $email);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  return value;
}

function OnLoad(e) {

}

eval(GetDynamicPanelScript('u6', 2));

var u20 = document.getElementById('u20');

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u22 = document.getElementById('u22');

u22.style.cursor = 'pointer';
if (bIE) u22.attachEvent("onclick", Clicku22);
else u22.addEventListener("click", Clicku22, true);
function Clicku22(e)
{

if (true) {

SetWidgetFormText('u22', PopulateVariables(' '));

}

}

var u23 = document.getElementById('u23');

u23.style.cursor = 'pointer';
if (bIE) u23.attachEvent("onclick", Clicku23);
else u23.addEventListener("click", Clicku23, true);
function Clicku23(e)
{

if (true) {

SetWidgetFormText('u23', PopulateVariables(''));

}

}

var u24 = document.getElementById('u24');

var u25 = document.getElementById('u25');

u25.style.cursor = 'pointer';
if (bIE) u25.attachEvent("onclick", Clicku25);
else u25.addEventListener("click", Clicku25, true);
function Clicku25(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("Display current confirmation of Send"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u26 = document.getElementById('u26');

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u28 = document.getElementById('u28');

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u30 = document.getElementById('u30');

u30.style.cursor = 'pointer';
if (bIE) u30.attachEvent("onclick", Clicku30);
else u30.addEventListener("click", Clicku30, true);
function Clicku30(e)
{

if ((GetGlobalVariableValue('$linksel')) == (PopulateVariables('2screen'))) {

	SetPanelStateu6("pd0u6");

}
else
if (true) {

	self.location.href="Page_1.html" + GetQuerystring();

}

}

var u31 = document.getElementById('u31');

u31.style.cursor = 'pointer';
if (bIE) u31.attachEvent("onclick", Clicku31);
else u31.addEventListener("click", Clicku31, true);
function Clicku31(e)
{

if (true) {

SetGlobalVariableValue('$linksel', PopulateVariables('1screen'));

SetWidgetRichText('u31', PopulateVariables('<span style=" font-family:\'Arial\'; color:#333333; font-size:13px;">single screen</span>'));

SetWidgetRichText('u32', PopulateVariables('<span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>2 screen</u></span>'));

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

SetGlobalVariableValue('$linksel', PopulateVariables('2screen'));

SetWidgetRichText('u32', PopulateVariables('<span style=" font-family:\'Arial\'; color:#333333; font-size:13px;">2 screen</span>'));

SetWidgetRichText('u31', PopulateVariables('<span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>single screen</u></span>'));

}

}
gv_vAlignTable['u32'] = 'top';
var u0 = document.getElementById('u0');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u2 = document.getElementById('u2');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u4 = document.getElementById('u4');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u6 = document.getElementById('u6');

var u7 = document.getElementById('u7');

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u9 = document.getElementById('u9');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u11 = document.getElementById('u11');

var u12 = document.getElementById('u12');

var u13 = document.getElementById('u13');

u13.style.cursor = 'pointer';
if (bIE) u13.attachEvent("onclick", Clicku13);
else u13.addEventListener("click", Clicku13, true);
function Clicku13(e)
{

if (true) {

SetGlobalVariableValue('$designName', GetWidgetFormText('u11'));

SetGlobalVariableValue('$email', GetWidgetFormText('u12'));

SetWidgetRichText('u29', PopulateVariables('<span style=" font-family:\'Arial\'; color:#000066; font-size:11px;">Design <b>&quot;[[designName]]&quot;</b> saved.&nbsp; Check your email for a link to the design.</span>'));

	self.location.href="Page_1.html" + GetQuerystring();

}

}

var u14 = document.getElementById('u14');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u16 = document.getElementById('u16');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u18 = document.getElementById('u18');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
if (window.OnLoad) OnLoad();
