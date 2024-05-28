"use strict";exports.id=562,exports.ids=[562],exports.modules={2562:(e,t,T)=>{function n(e){for(var t={},T=e.split(" "),n=0;n<T.length;++n)t[T[n]]=!0;return t}T.r(t),T.d(t,{ttcnCfg:()=>R});let E={name:"ttcn-cfg",keywords:n("Yes No LogFile FileMask ConsoleMask AppendFile TimeStampFormat LogEventTypes SourceInfoFormat LogEntityName LogSourceInfo DiskFullAction LogFileNumber LogFileSize MatchingHints Detailed Compact SubCategories Stack Single None Seconds DateTime Time Stop Error Retry Delete TCPPort KillTimer NumHCs UnixSocketsEnabled LocalAddress"),fileNCtrlMaskOptions:n("TTCN_EXECUTOR TTCN_ERROR TTCN_WARNING TTCN_PORTEVENT TTCN_TIMEROP TTCN_VERDICTOP TTCN_DEFAULTOP TTCN_TESTCASE TTCN_ACTION TTCN_USER TTCN_FUNCTION TTCN_STATISTICS TTCN_PARALLEL TTCN_MATCHING TTCN_DEBUG EXECUTOR ERROR WARNING PORTEVENT TIMEROP VERDICTOP DEFAULTOP TESTCASE ACTION USER FUNCTION STATISTICS PARALLEL MATCHING DEBUG LOG_ALL LOG_NOTHING ACTION_UNQUALIFIED DEBUG_ENCDEC DEBUG_TESTPORT DEBUG_UNQUALIFIED DEFAULTOP_ACTIVATE DEFAULTOP_DEACTIVATE DEFAULTOP_EXIT DEFAULTOP_UNQUALIFIED ERROR_UNQUALIFIED EXECUTOR_COMPONENT EXECUTOR_CONFIGDATA EXECUTOR_EXTCOMMAND EXECUTOR_LOGOPTIONS EXECUTOR_RUNTIME EXECUTOR_UNQUALIFIED FUNCTION_RND FUNCTION_UNQUALIFIED MATCHING_DONE MATCHING_MCSUCCESS MATCHING_MCUNSUCC MATCHING_MMSUCCESS MATCHING_MMUNSUCC MATCHING_PCSUCCESS MATCHING_PCUNSUCC MATCHING_PMSUCCESS MATCHING_PMUNSUCC MATCHING_PROBLEM MATCHING_TIMEOUT MATCHING_UNQUALIFIED PARALLEL_PORTCONN PARALLEL_PORTMAP PARALLEL_PTC PARALLEL_UNQUALIFIED PORTEVENT_DUALRECV PORTEVENT_DUALSEND PORTEVENT_MCRECV PORTEVENT_MCSEND PORTEVENT_MMRECV PORTEVENT_MMSEND PORTEVENT_MQUEUE PORTEVENT_PCIN PORTEVENT_PCOUT PORTEVENT_PMIN PORTEVENT_PMOUT PORTEVENT_PQUEUE PORTEVENT_STATE PORTEVENT_UNQUALIFIED STATISTICS_UNQUALIFIED STATISTICS_VERDICT TESTCASE_FINISH TESTCASE_START TESTCASE_UNQUALIFIED TIMEROP_GUARD TIMEROP_READ TIMEROP_START TIMEROP_STOP TIMEROP_TIMEOUT TIMEROP_UNQUALIFIED USER_UNQUALIFIED VERDICTOP_FINAL VERDICTOP_GETVERDICT VERDICTOP_SETVERDICT VERDICTOP_UNQUALIFIED WARNING_UNQUALIFIED"),externalCommands:n("BeginControlPart EndControlPart BeginTestCase EndTestCase"),multiLineStrings:!0};var C,N=E.keywords,r=E.fileNCtrlMaskOptions,I=E.externalCommands,i=E.multiLineStrings,o=!1!==E.indentStatements,_=/[\|]/;function A(e,t,T,n,E){this.indented=e,this.column=t,this.type=T,this.align=n,this.prev=E}function O(e,t,T){var n=e.indented;return e.context&&"statement"==e.context.type&&(n=e.context.indented),e.context=new A(n,t,T,null,e.context)}function U(e){var t=e.context.type;return(")"==t||"]"==t||"}"==t)&&(e.indented=e.context.indented),e.context=e.context.prev}let R={name:"ttcn",startState:function(){return{tokenize:null,context:new A(0,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,t){var T=t.context;if(e.sol()&&(null==T.align&&(T.align=!1),t.indented=e.indentation(),t.startOfLine=!0),e.eatSpace())return null;C=null;var n=(t.tokenize||function(e,t){var T=e.next();if('"'==T||"'"==T)return t.tokenize=function(e,t){for(var n,E=!1,C=!1;null!=(n=e.next());){if(n==T&&!E){var N=e.peek();N&&("b"==(N=N.toLowerCase())||"h"==N||"o"==N)&&e.next(),C=!0;break}E=!E&&"\\"==n}return(C||!(E||i))&&(t.tokenize=null),"string"},t.tokenize(e,t);if(/[:=]/.test(T))return C=T,"punctuation";if("#"==T)return e.skipToEnd(),"comment";if(/\d/.test(T))return e.eatWhile(/[\w\.]/),"number";if(_.test(T))return e.eatWhile(_),"operator";if("["==T)return e.eatWhile(/[\w_\]]/),"number";e.eatWhile(/[\w\$_]/);var n=e.current();return N.propertyIsEnumerable(n)?"keyword":r.propertyIsEnumerable(n)?"atom":I.propertyIsEnumerable(n)?"deleted":"variable"})(e,t);if("comment"==n)return n;if(null==T.align&&(T.align=!0),(";"==C||":"==C||","==C)&&"statement"==T.type)U(t);else if("{"==C)O(t,e.column(),"}");else if("["==C)O(t,e.column(),"]");else if("("==C)O(t,e.column(),")");else if("}"==C){for(;"statement"==T.type;)T=U(t);for("}"==T.type&&(T=U(t));"statement"==T.type;)T=U(t)}else C==T.type?U(t):o&&(("}"==T.type||"top"==T.type)&&";"!=C||"statement"==T.type&&"newstatement"==C)&&O(t,e.column(),"statement");return t.startOfLine=!1,n},languageData:{indentOnInput:/^\s*[{}]$/,commentTokens:{line:"#"}}}}};