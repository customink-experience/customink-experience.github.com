
var PageName = 'Bulk';
var PageId = '86d7b38c53e6418eb3c3f97171e9bcef'
var PageUrl = 'Bulk.html'
document.title = 'Bulk';
var PageNotes = 
{
"pageName":"Bulk",
"showNotesNames":"False"}
var $OnLoadVariable = '';

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
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&CSUM=1';
}

function PopulateVariables(value) {
    var d = new Date();
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  value = value.replace(/\[\[GenDay\]\]/g, '20');
  value = value.replace(/\[\[GenMonth\]\]/g, '5');
  value = value.replace(/\[\[GenMonthName\]\]/g, 'May');
  value = value.replace(/\[\[GenDayOfWeek\]\]/g, 'Friday');
  value = value.replace(/\[\[GenYear\]\]/g, '2011');
  value = value.replace(/\[\[Day\]\]/g, d.getDate());
  value = value.replace(/\[\[Month\]\]/g, d.getMonth() + 1);
  value = value.replace(/\[\[MonthName\]\]/g, GetMonthString(d.getMonth()));
  value = value.replace(/\[\[DayOfWeek\]\]/g, GetDayString(d.getDay()));
  value = value.replace(/\[\[Year\]\]/g, d.getFullYear());
  return value;
}

function OnLoad(e) {

}

var u154 = document.getElementById('u154');

u154.style.cursor = 'pointer';
if (bIE) u154.attachEvent("onclick", Clicku154);
else u154.addEventListener("click", Clicku154, true);
function Clicku154(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u116', 'pd2u116','none','',500,'none','',500);

	SetPanelState('u46', 'pd3u46','none','',500,'none','',500);

	SetPanelState('u74', 'pd2u74','none','',500,'none','',500);

	SetPanelState('u86', 'pd2u86','none','',500,'none','',500);

	SetPanelState('u100', 'pd2u100','none','',500,'none','',500);

	MoveWidgetTo('u45', 9,195,'none',500);

	MoveWidgetTo('u73', 0,50,'none',500);

	MoveWidgetTo('u29', 10,480,'none',500);

SetWidgetRichText('u43', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:11px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">* Please note: It can take UPS some time to update their system, so tracking information may not be available for a few hours</span></p>');

}

}
gv_vAlignTable['u154'] = 'top';
var u155 = document.getElementById('u155');

u155.style.cursor = 'pointer';
if (bIE) u155.attachEvent("onclick", Clicku155);
else u155.addEventListener("click", Clicku155, true);
function Clicku155(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u116', 'pd2u116','none','',500,'none','',500);

	SetPanelState('u46', 'pd3u46','none','',500,'none','',500);

	SetPanelState('u74', 'pd2u74','none','',500,'none','',500);

	SetPanelState('u86', 'pd2u86','none','',500,'none','',500);

	SetPanelState('u100', 'pd1u100','none','',500,'none','',500);

	MoveWidgetTo('u45', 9,195,'none',500);

	MoveWidgetTo('u73', 0,50,'none',500);

	MoveWidgetTo('u29', 10,480,'none',500);

SetWidgetRichText('u43', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:11px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">* Please note: It can take UPS some time to update their system, so tracking information may not be available for a few hours</span></p>');

}

}
gv_vAlignTable['u155'] = 'top';
var u156 = document.getElementById('u156');

u156.style.cursor = 'pointer';
if (bIE) u156.attachEvent("onclick", Clicku156);
else u156.addEventListener("click", Clicku156, true);
function Clicku156(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u116', 'pd2u116','none','',500,'none','',500);

	SetPanelState('u46', 'pd1u46','none','',500,'none','',500);

	SetPanelState('u74', 'pd0u74','none','',500,'none','',500);

	SetPanelState('u86', 'pd0u86','none','',500,'none','',500);

	SetPanelState('u100', 'pd0u100','none','',500,'none','',500);

	MoveWidgetTo('u116', 9,150,'none',500);

	MoveWidgetTo('u45', 9,200,'none',500);

	MoveWidgetTo('u73', 0,100,'none',500);

	MoveWidgetTo('u29', 10,480,'none',500);

SetWidgetRichText('u65', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#797979;">Print production cannot proceed until you approve the final artwork. Please </span><span style="font-family:Helvetica;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#003399;">review your proofs now</span><span style="font-family:Helvetica;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#797979;">.</span></p>');

SetWidgetRichText('u40', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#003366;">(</span><span style="font-family:Helvetica;font-size:13px;font-weight:normal;font-style:italic;text-decoration:none;color:#003366;">Credit Card)</span></p>');

SetWidgetRichText('u43', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:11px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">&nbsp; </span></p>');

}

}
gv_vAlignTable['u156'] = 'top';
var u157 = document.getElementById('u157');

u157.style.cursor = 'pointer';
if (bIE) u157.attachEvent("onclick", Clicku157);
else u157.addEventListener("click", Clicku157, true);
function Clicku157(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u116', 'pd3u116','none','',500,'none','',500);

	SetPanelState('u46', 'pd0u46','none','',500,'none','',500);

	SetPanelState('u74', 'pd0u74','none','',500,'none','',500);

	SetPanelState('u86', 'pd0u86','none','',500,'none','',500);

	SetPanelState('u100', 'pd0u100','none','',500,'none','',500);

	MoveWidgetTo('u45', 9,250,'none',500);

	MoveWidgetTo('u73', 0,100,'none',500);

	MoveWidgetTo('u116', 9,150,'none',500);

	MoveWidgetTo('u29', 10,550,'none',500);

SetWidgetRichText('u40', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#FF0000;">(</span><span style="font-family:Helvetica;font-size:13px;font-weight:normal;font-style:italic;text-decoration:none;color:#FF0000;">Pending Form of Payment)</span></p>');

SetWidgetRichText('u134', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#6B6B6B;">There is an open balance on your order which must be resolved before we can proceed with production.&nbsp; Please contact us at&nbsp; </span><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#6B6B6B;">866-485-8160 to resolve payment.</span></p>');

SetWidgetRichText('u43', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:11px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">&nbsp; </span></p>');

}

}
gv_vAlignTable['u157'] = 'top';
var u158 = document.getElementById('u158');

u158.style.cursor = 'pointer';
if (bIE) u158.attachEvent("onclick", Clicku158);
else u158.addEventListener("click", Clicku158, true);
function Clicku158(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u116', 'pd4u116','none','',500,'none','',500);

	SetPanelState('u46', 'pd0u46','none','',500,'none','',500);

	SetPanelState('u74', 'pd0u74','none','',500,'none','',500);

	SetPanelState('u86', 'pd0u86','none','',500,'none','',500);

	SetPanelState('u100', 'pd0u100','none','',500,'none','',500);

	MoveWidgetTo('u45', 9,250,'none',500);

	MoveWidgetTo('u73', 0,100,'none',500);

	MoveWidgetTo('u116', 9,150,'none',500);

	MoveWidgetTo('u29', 10,550,'none',500);

SetWidgetRichText('u40', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#003366;">(</span><span style="font-family:Helvetica;font-size:13px;font-weight:normal;font-style:italic;text-decoration:none;color:#003366;">Credit Card)</span></p>');

SetWidgetRichText('u134', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#6B6B6B;">There is a question about your order that must be answered before we can proceed with production.&nbsp; Please call us at </span><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#6B6B6B;">866-485-8160.</span></p>');

SetWidgetRichText('u43', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:11px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">&nbsp; </span></p>');

}

}
gv_vAlignTable['u158'] = 'top';
var u159 = document.getElementById('u159');

u159.style.cursor = 'pointer';
if (bIE) u159.attachEvent("onclick", Clicku159);
else u159.addEventListener("click", Clicku159, true);
function Clicku159(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u116', 'pd2u116','none','',500,'none','',500);

	SetPanelState('u46', 'pd3u46','none','',500,'none','',500);

	SetPanelState('u74', 'pd1u74','none','',500,'none','',500);

	SetPanelState('u86', 'pd0u86','none','',500,'none','',500);

	SetPanelState('u100', 'pd0u100','none','',500,'none','',500);

	MoveWidgetTo('u45', 9,200,'none',500);

	MoveWidgetTo('u73', 0,60,'none',500);

	MoveWidgetTo('u29', 10,480,'none',500);

SetWidgetRichText('u43', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:11px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">&nbsp; </span></p>');

SetWidgetRichText('u40', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#003366;">(</span><span style="font-family:Helvetica;font-size:13px;font-weight:normal;font-style:italic;text-decoration:none;color:#003366;">Credit Card)</span></p>');

}

}
gv_vAlignTable['u159'] = 'top';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'top';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'top';
var u82 = document.getElementById('u82');

var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'center';
var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'top';
var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'top';
var u86 = document.getElementById('u86');

var u87 = document.getElementById('u87');

var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'center';
var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u160 = document.getElementById('u160');

u160.style.cursor = 'pointer';
if (bIE) u160.attachEvent("onclick", Clicku160);
else u160.addEventListener("click", Clicku160, true);
function Clicku160(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u116', 'pd0u116','none','',500,'none','',500);

	SetPanelState('u46', 'pd0u46','none','',500,'none','',500);

	SetPanelState('u74', 'pd0u74','none','',500,'none','',500);

	SetPanelState('u86', 'pd0u86','none','',500,'none','',500);

	SetPanelState('u100', 'pd0u100','none','',500,'none','',500);

	MoveWidgetTo('u45', 10,200,'none',500);

	MoveWidgetTo('u73', 0,100,'none',500);

SetWidgetRichText('u43', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:11px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">&nbsp;&nbsp; </span></p>');

SetWidgetRichText('u40', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#003366;">(</span><span style="font-family:Helvetica;font-size:13px;font-weight:normal;font-style:italic;text-decoration:none;color:#003366;">Credit Card)</span></p>');

}

}
gv_vAlignTable['u160'] = 'top';
var u161 = document.getElementById('u161');

var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'center';
var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'top';
var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'top';
var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'top';
var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u91 = document.getElementById('u91');

u91.style.cursor = 'pointer';
if (bIE) u91.attachEvent("onclick", Clicku91);
else u91.addEventListener("click", Clicku91, true);
function Clicku91(e)
{
windowEvent = e;


if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Open new window with tracking info"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}
gv_vAlignTable['u91'] = 'top';
var u92 = document.getElementById('u92');

var u10 = document.getElementById('u10');

var u11 = document.getElementById('u11');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u13 = document.getElementById('u13');

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u15 = document.getElementById('u15');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'top';
var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'center';
var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'top';
var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u113 = document.getElementById('u113');

u113.style.cursor = 'pointer';
if (bIE) u113.attachEvent("onclick", Clicku113);
else u113.addEventListener("click", Clicku113, true);
function Clicku113(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u116', 'pd3u116','none','',500,'none','',500);

	SetPanelState('u74', 'pd0u74','none','',500,'none','',500);

	SetPanelState('u86', 'pd0u86','none','',500,'none','',500);

	SetPanelState('u100', 'pd0u100','none','',500,'none','',500);

	SetPanelState('u46', 'pd0u46','none','',500,'none','',500);

	MoveWidgetTo('u45', 9,250,'none',500);

	MoveWidgetTo('u73', 0,100,'none',500);

	MoveWidgetTo('u116', 9,150,'none',500);

	MoveWidgetTo('u29', 10,550,'none',500);

SetWidgetRichText('u134', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#6B6B6B;">We are waiting for a faxed copy of your purchase order before we can proceed with production.&nbsp; Our fax number is 703-935-0080.</span></p>');

SetWidgetRichText('u40', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#FF0000;">Pending receipt of fax copy of PO.</span></p>');

SetWidgetRichText('u43', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:11px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">&nbsp;</span></p>');

SetWidgetRichText('u68', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:16px;font-weight:bold;font-style:normal;text-decoration:none;color:#000000;">Approval</span></p>');

}

}
gv_vAlignTable['u113'] = 'top';
var u114 = document.getElementById('u114');

u114.style.cursor = 'pointer';
if (bIE) u114.attachEvent("onclick", Clicku114);
else u114.addEventListener("click", Clicku114, true);
function Clicku114(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u116', 'pd2u116','none','',500,'none','',500);

	SetPanelState('u46', 'pd1u46','none','',500,'none','',500);

	SetPanelState('u74', 'pd0u74','none','',500,'none','',500);

	SetPanelState('u86', 'pd0u86','none','',500,'none','',500);

	SetPanelState('u100', 'pd0u100','none','',500,'none','',500);

	MoveWidgetTo('u116', 9,150,'none',500);

	MoveWidgetTo('u45', 9,200,'none',500);

	MoveWidgetTo('u73', 0,100,'none',500);

	MoveWidgetTo('u29', 10,480,'none',500);

SetWidgetRichText('u65', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#797979;">Your approval is required on </span><span style="font-family:Helvetica;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#868686;">the final artwork</span><span style="font-family:Helvetica;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#949494;">&nbsp;</span><span style="font-family:Helvetica;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#797979;">before proceeding with production.&nbsp; </span></p><p style="text-align:left;"><span style="font-family:Helvetica;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#797979;">Please look for an email from our Production Department with final proofs attached or </span><span style="font-family:Helvetica;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#003399;">review your proofs now</span><span style="font-family:Helvetica;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#797979;">.</span></p>');

SetWidgetRichText('u40', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#003366;">(</span><span style="font-family:Helvetica;font-size:13px;font-weight:normal;font-style:italic;text-decoration:none;color:#003366;">Credit Card)</span></p>');

SetWidgetRichText('u43', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:11px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">&nbsp; </span></p>');

}

}
gv_vAlignTable['u114'] = 'top';
var u115 = document.getElementById('u115');

u115.style.cursor = 'pointer';
if (bIE) u115.attachEvent("onclick", Clicku115);
else u115.addEventListener("click", Clicku115, true);
function Clicku115(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u116', 'pd5u116','none','',500,'none','',500);

	SetPanelState('u46', 'pd2u46','none','',500,'none','',500);

	SetPanelState('u74', 'pd0u74','none','',500,'none','',500);

	SetPanelState('u86', 'pd0u86','none','',500,'none','',500);

	SetPanelState('u100', 'pd0u100','none','',500,'none','',500);

	MoveWidgetTo('u116', 9,150,'none',500);

	MoveWidgetTo('u45', 9,200,'none',500);

	MoveWidgetTo('u73', 0,100,'none',500);

	MoveWidgetTo('u29', 10,480,'none',500);

SetWidgetRichText('u40', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#003366;">(</span><span style="font-family:Helvetica;font-size:13px;font-weight:normal;font-style:italic;text-decoration:none;color:#003366;">Credit Card)</span></p>');

SetWidgetRichText('u43', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:11px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">* Please note: It can take UPS some time to update their system, so tracking information may not be available for a few hours</span></p>');

}

}
gv_vAlignTable['u115'] = 'top';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u21 = document.getElementById('u21');

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u23 = document.getElementById('u23');

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u25 = document.getElementById('u25');

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u27 = document.getElementById('u27');

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
var u29 = document.getElementById('u29');

var u100 = document.getElementById('u100');

var u101 = document.getElementById('u101');

var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'center';
var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'top';
var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'top';
var u105 = document.getElementById('u105');

var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'center';
var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'top';
var u109 = document.getElementById('u109');

var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'top';
var u128 = document.getElementById('u128');

var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'center';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u31 = document.getElementById('u31');

var u32 = document.getElementById('u32');

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'center';
var u34 = document.getElementById('u34');

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u36 = document.getElementById('u36');

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'center';
var u38 = document.getElementById('u38');

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'center';
var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'top';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'top';
var u96 = document.getElementById('u96');

var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'center';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'top';
var u116 = document.getElementById('u116');

var u117 = document.getElementById('u117');

var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'center';
var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'top';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u41 = document.getElementById('u41');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u44 = document.getElementById('u44');

var u45 = document.getElementById('u45');

var u46 = document.getElementById('u46');

var u47 = document.getElementById('u47');

var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'center';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'top';
var u121 = document.getElementById('u121');

var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'center';
var u123 = document.getElementById('u123');

var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'center';
var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'top';
var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'top';
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
gv_vAlignTable['u6'] = 'top';
var u7 = document.getElementById('u7');

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'top';
var u50 = document.getElementById('u50');

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u53 = document.getElementById('u53');

var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'center';
var u55 = document.getElementById('u55');

var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'center';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u58 = document.getElementById('u58');

var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'center';
var u130 = document.getElementById('u130');

var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'center';
var u132 = document.getElementById('u132');

var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'center';
var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'top';
var u135 = document.getElementById('u135');

var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'center';
var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'top';
var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'top';
var u139 = document.getElementById('u139');

var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u61 = document.getElementById('u61');

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'center';
var u63 = document.getElementById('u63');

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u66 = document.getElementById('u66');

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'center';
var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'top';
var u142 = document.getElementById('u142');

var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'center';
var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'top';
var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'top';
var u146 = document.getElementById('u146');

var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'center';
var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'top';
var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'top';
var u70 = document.getElementById('u70');

var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u73 = document.getElementById('u73');

var u74 = document.getElementById('u74');

var u75 = document.getElementById('u75');

var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'center';
var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'top';
var u78 = document.getElementById('u78');

var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'center';
var u150 = document.getElementById('u150');

u150.style.cursor = 'pointer';
if (bIE) u150.attachEvent("onclick", Clicku150);
else u150.addEventListener("click", Clicku150, true);
function Clicku150(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u116', 'pd1u116','none','',500,'none','',500);

	SetPanelState('u46', 'pd0u46','none','',500,'none','',500);

	SetPanelState('u74', 'pd0u74','none','',500,'none','',500);

	SetPanelState('u86', 'pd0u86','none','',500,'none','',500);

	SetPanelState('u100', 'pd0u100','none','',500,'none','',500);

	MoveWidgetTo('u45', 10,200,'none',500);

	MoveWidgetTo('u73', 0,100,'none',500);

	MoveWidgetTo('u29', 10,480,'none',500);

SetWidgetRichText('u43', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:11px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">&nbsp;&nbsp; </span></p>');

SetWidgetRichText('u40', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#003366;">(</span><span style="font-family:Helvetica;font-size:13px;font-weight:normal;font-style:italic;text-decoration:none;color:#003366;">Credit Card)</span></p>');

}

}
gv_vAlignTable['u150'] = 'top';
var u151 = document.getElementById('u151');

u151.style.cursor = 'pointer';
if (bIE) u151.attachEvent("onclick", Clicku151);
else u151.addEventListener("click", Clicku151, true);
function Clicku151(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u116', 'pd2u116','none','',500,'none','',500);

	SetPanelState('u46', 'pd1u46','none','',500,'none','',500);

	SetPanelState('u74', 'pd0u74','none','',500,'none','',500);

	SetPanelState('u86', 'pd0u86','none','',500,'none','',500);

	SetPanelState('u100', 'pd0u100','none','',500,'none','',500);

	MoveWidgetTo('u45', 9,200,'none',500);

	MoveWidgetTo('u73', 0,100,'none',500);

	MoveWidgetTo('u29', 10,480,'none',500);

SetWidgetRichText('u43', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:11px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">&nbsp; </span></p>');

SetWidgetRichText('u40', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#003366;">(</span><span style="font-family:Helvetica;font-size:13px;font-weight:normal;font-style:italic;text-decoration:none;color:#003366;">Credit Card)</span></p>');

}

}
gv_vAlignTable['u151'] = 'top';
var u152 = document.getElementById('u152');

u152.style.cursor = 'pointer';
if (bIE) u152.attachEvent("onclick", Clicku152);
else u152.addEventListener("click", Clicku152, true);
function Clicku152(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u116', 'pd2u116','none','',500,'none','',500);

	SetPanelState('u46', 'pd3u46','none','',500,'none','',500);

	SetPanelState('u74', 'pd1u74','none','',500,'none','',500);

	SetPanelState('u86', 'pd0u86','none','',500,'none','',500);

	SetPanelState('u100', 'pd0u100','none','',500,'none','',500);

	MoveWidgetTo('u45', 9,200,'none',500);

	MoveWidgetTo('u73', 0,60,'none',500);

	MoveWidgetTo('u29', 10,480,'none',500);

SetWidgetRichText('u43', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:11px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">&nbsp; </span></p>');

}

}
gv_vAlignTable['u152'] = 'top';
var u153 = document.getElementById('u153');

u153.style.cursor = 'pointer';
if (bIE) u153.attachEvent("onclick", Clicku153);
else u153.addEventListener("click", Clicku153, true);
function Clicku153(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u116', 'pd2u116','none','',500,'none','',500);

	SetPanelState('u46', 'pd3u46','none','',500,'none','',500);

	SetPanelState('u74', 'pd2u74','none','',500,'none','',500);

	SetPanelState('u86', 'pd1u86','none','',500,'none','',500);

	SetPanelState('u100', 'pd0u100','none','',500,'none','',500);

SetWidgetRichText('u43', '<p style="text-align:left;"><span style="font-family:Helvetica;font-size:11px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">&nbsp;&nbsp; </span></p>');

	MoveWidgetTo('u45', 9,195,'none',500);

	MoveWidgetTo('u73', 0,50,'none',500);

	MoveWidgetTo('u29', 10,480,'none',500);

}

}
gv_vAlignTable['u153'] = 'top';
if (window.OnLoad) OnLoad();
