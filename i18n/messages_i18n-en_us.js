// Internationalization Messages
// OSHMI/Open Substation HMI - Copyright (c) 2008-2019 - Ricardo L. Olsen

var Msg =
{
NomeProduto: 'OSHMI',
VersaoProduto: '6.9',

NomeVisorTelas:       'Screen Viewer',
NomeVisorEventos:     'Events Viewer',
NomeVisorHistorico:   'Events Viewer - Hist',
NomeVisorTabular:     'Tabular Viewer', 
NomeVisorAnormais:    'Alarms Viewer',
NomeVisorTendencias:  'Trend Viewer',  
NomeVisorCurvas:      'Curves Viewer',  
NomeDialogoInfo:      'Point Info',  
NomeDialogoCmd:       'Command',  

FalhaWebserver:  'Webserver fail!',

// websage.js
BlqAnot:     'Command blocked by annotation.',
AcessCmd:    'Push to have access to command dialog.',
EstadoAtual: 'current state',
ConfNSuport: 'Unsupported configuration!',
BrowserNSup: 'Unsupported browser!',
Qualific:    'Qualifier',
QFalhado:    'FAILED',
QSubst:      'SUBSTITUTED',
QCalculado:  'CALCULATED',
QManual:     'MANUAL',
QNuncaAtu:   'NEVER_UPDATED',
QAlarmado:   'ALARMED',
QAnotacao:   'ANOTATION',
QAlmInib:    'INHIBITED_ALARM',
QNaoNormal:  'PERSISTENT_ALARM',
QLimiteViol: 'VIOLATED_LIMIT',
QCongelado:  'FROZEN',
QNormal:     'NORMAL',
QDPIntermed: 'INTERMEDIARY',
QDPInvalido: 'INVALID',
QValor:      'value',
SELTELA_OPC1:'Choose a screen ...',

// Events.html
Eventos:       'Events',
ModoNormal:    'Normal Mode',
ModoAgregado:  'Aggregated Mode',
ModoPanico:    'Panic Mode',
ModoCongelado: 'Frozen!',
ModoHistorico: 'Historical',
HIST:          '>Historical Events',
SPDATAINI:     'Date: ',
SPHORAINI:     'Initial Time: ',
SPFILTRO:      'Filter: ',
btBuscaHist:   'Find',
EveNomesColunas: 'Date,Time,ms,point#,ID,Subst.,Description,Event,Flags,Qualif.',
ConfirmaSaida: 'Close Events Viewer?',
EveFiltradosSE:'FILTERED',

// tabular.html
SPCOMANDAVEIS: 'Commandable',
SPANORMAIS:    'Alarms',
SPSUBEST:      'Substation',
SPMODULO:      'Bay',
SPFILTROID:    'Filter (ID)',
SELSE:         'Choose substation',
SELMOD:        'Choose bay',
Filtro:        'Filter by ID', 
TabNomesColunas: 'Point#,ID,Subst.,Descript.,Curr.St/Val,Flg,Cmd,Qualif.,Nor,Alarm time',
SelectAll:     'Select All',
UnselectAll:   'Unselect All',

// dlginfo.html
TENDTXT:     '>Follow Measure',
TABULARTXT:  '>Bay Tabular Screen',
CURVTXT:     '>Open in Curves Viewer',
ANOTACAOTXT: 'Annotation:',
DESBLOQTXT:  'Unblock Command',
COMANDAR:    'COMMAND',
CBMOREINFO:  '+ Other Options',
SPPONTOSUP:  'Supervised Point:',
ALRINTXT:    'Inhibited Alarm',
SPLIMSUP:    'Superior Limit',
SPLIMINF:    'Inferior Limit',
SPLIMHIS:    'Hysteresis',
SPALTVALOR:  'Change Value',
SAIR:        'EXIT',
CANCELAR:    'CANCEL',
FSINFO:      'Point Info',
FSBLKANNOT:  'Blocking Annotation',
FSANNOT:     'Annotation',
FSOPTION:    'Options',

// dlgcomando.html
SPPASSO2:    'Choose a function and click the command button.',
CMDMOREINFO: '+ More Info',
SPPONTOCMD:  'Command Point:',
FSCMDINFO:   'Command Info',
FSCMDACTION: 'Command Action',
FSCMDOPTION: 'Options',

// trend.html
yaxisleft:    'Show smaller values[up arrow]',
yaxisright:   'Show larger values [down arrow]',
yaxiszoomout: 'Less zoom [-]',
yaxiszoomin:  'More zoom [+]',
yaxisminus:   'Shorter [1]',
yaxisplus:    'Taller [2]',
yaxiscolor:   'Change color [3]',
xaxisleft:    'Backward [left arrow]',
xaxisright:   'Forward [right arrow]',
xaxiszoomout: 'Less zoom [/]',
xaxiszoomin:  'More zoom [*]',
xaxisminus:   'Smaller [<]',
xaxisplus:    'Larger [>]',
plotreset:    'Reset Options [0] [Num 5]',
ValorAtual:   'Current Value',

Fim: ""
};

var Titles =
{
// screen.html
ZOOMIN_ID :  'More Zoom [Num +]',
ZOOMOUT_ID:  'Less Zoom [Num -]',
ZPSobe:      'Up [Num 8]',
ZPDesce:     'Down [Num 2]',
ZPEsq:       'Left [Num 4]',
ZPCentro:    'Centralize [Num 5]',
ZPDir:       'Right [Num 6]',
PRODUTO_ID:  ( Msg.NomeVisorTelas + ' - ' + Msg.NomeProduto ),
TELAS_ID:    'Screens -->',
SELTELA:     'Choose Screen: [<]=previous, [>]=next, [1]=first, [2]=second, ..., [0]=tenth ',
CORFUNDO_ID: 'Click to change background color.',
AJUDA_ID:    'Help',
HORA_ATU:    'Time of last update. If old press [F5]!',
ANORM_ID:    'Show Alarms (unacknowledged and persistent alarms)',
SILENCIA_ID: 'Sicence beep! [F9]',
SP_ALARMES:  'There are new events! Click to open Events Viewer.',
VENTOINHA:   'If fan stopped, press [F5]!',
PROXTELAID:  'Next screen',
ANTETELAID:  'Previous screen',
PLAY_ID:     'Play Slideshow',
PAUSE_ID:    'Pause Slideshow',
TIMEMACHINE_ID: 'Time Machine',
TIMEMACHINECLOSE_ID: 'Close Time Machine',

// dlginfo.html
VALOR_HID:   'current value',
ESTADO_HID:  'current state',
SPQUALIF:    'Point qualifiers',
SPDESCR_SUP: 'Point descriptor',
SPCMDINTERTRAV: 'INTERLOCKED COMMAND!', 
IMGANOT:     'Annotation',
ANOTACAO:    'Annotation Text',
TABULAR:     'Open bay tabular screen.',
TENDENCIAS:  'Open in Trend Viewer.',
DIVBLKCMD:   'Mark to unblock command (blocked by annotation).',
COMANDAR:    'Push to have access to command dialog.',
CBMOREINFO:  'Click to show more info and options.',
NPONTO_SUP:  'Point number and ID.',
VLRNORCTRLS: 'Allows to change the normal state.',
DIVINIB:     'When marked inhibits the alarms for this point.',
LIMCTRLS:    'Configures limits for bounds checking alarms.',
LIMSUP:      'Upper threshold for alarm.',
LIMINF:      'lower threshold for alarm.',
HISTER:      'Minimal change to generate a new alarm.',
DIVALTVALOR: 'Allows change point value.',

// dlgcomando.html
COMANDO:     'Select the desired command action.',
EXECUTAR:    'Execute the command!',
CANCELAR:    'Cancel command.',

// events.html
IMGEVENTOS:       ( Msg.NomeVisorEventos + ' - ' + Msg.NomeProduto +  ' - ' + '\nQualifiers: 0-9=Priority F=Failed X=Never updated K=Commandable A=Annotation L=Alarmed I=Inhibited alarm C=Calculated M=Manual S=Subtituted U=Freezed Y=Interlocked command \n+number=Number of additional hidden events when aggegated.\nClick to show/hide point number and ID.' ),
imgNormal:        'Normal Mode: show all events. [1]',
imgAgregar:       'Aggregated Mode: only last event shown for each point. [2]',
imgPanico:        'Panic Mode: aggregate and show only the most important events. [3]',
imgCongelar:      'Freezed Mode: do not update events for easier reading. [4]',
imgHistorico:     'Historical Mode: review older, acknowledged and erased events. [5]',
imgFontSizeUp:    'Bigger font. [+]',
imgFontSizeDown:  'Smaller font. [-]',
imgReconheceTudo: 'Acknowledge all events! [F8]. Use [CTRL] + Click to acknowledge one specific event.',
imgEliminaTudo:   'Erase all events! [F2]',
imgAlarmes:       'There are new events!',
HDATAINI:         'Date for seach of events. [6]=Current Date',
HHORAINI:         'Initial time to search [7]=Reset time',
HFILTRO:          'Filter to search events, e.g.: SUBST1 = search events of SUBST1. [8]=Erase',
imgGpsOnEsc:      'GPS time for events. Click to to show local time.',
imgGpsOffEsc:     'Local time for events. Click to to show GPS time.',
imgGpsOnFx:       'GPS time for events.',
imgGpsOffFx:      'Local time for events.',
imgFilter:        'Substation Filter. Mark what to show.',
imgClipboard:     'Copy to Clipboard.',

// tabular.html
LEGQUAL_ID:       '\nQualifiers: 0-9=Priority F=Failed X=Never updated K=Commandable A=Annotated L=Alarmed I=Inhibited Alarm P=Persistent Alarm C=Calculated M=Manual S=Subtituted U=Freezed Y=Interlocked Command \nClick to show/hide point number and ID',
IMGTABULAR:       ( Msg.NomeVisorTabular + ' - ' + Msg.NomeProduto +  ' - ' + '\nQualifiers: 0-9=Priority F=Failed X=Never updated K=Commandable A=Annotated L=Alarmed I=Inhibited Alarm C=Calculated P=Persistent Alarm M=Manual S=Subtituted U=Freezed Y=Interlocked Command \nClick to show/hide point number and ID' ),
cbMostraCmd:      'Mark to show only commandable points. [1]',
cbForaNormal:     'Mark to show only alarmed points. [2]',

Fim: ""
};
