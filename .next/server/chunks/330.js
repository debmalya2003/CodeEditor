"use strict";exports.id=330,exports.ids=[330],exports.modules={3330:(e,t,n)=>{function r(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0;return t}n.r(t),n.d(t,{asn1:()=>s});let i={keywords:r("DEFINITIONS OBJECTS IF DERIVED INFORMATION ACTION REPLY ANY NAMED CHARACTERIZED BEHAVIOUR REGISTERED WITH AS IDENTIFIED CONSTRAINED BY PRESENT BEGIN IMPORTS FROM UNITS SYNTAX MIN-ACCESS MAX-ACCESS MINACCESS MAXACCESS REVISION STATUS DESCRIPTION SEQUENCE SET COMPONENTS OF CHOICE DistinguishedName ENUMERATED SIZE MODULE END INDEX AUGMENTS EXTENSIBILITY IMPLIED EXPORTS"),cmipVerbs:r("ACTIONS ADD GET NOTIFICATIONS REPLACE REMOVE"),compareTypes:r("OPTIONAL DEFAULT MANAGED MODULE-TYPE MODULE_IDENTITY MODULE-COMPLIANCE OBJECT-TYPE OBJECT-IDENTITY OBJECT-COMPLIANCE MODE CONFIRMED CONDITIONAL SUBORDINATE SUPERIOR CLASS TRUE FALSE NULL TEXTUAL-CONVENTION"),status:r("current deprecated mandatory obsolete"),tags:r("APPLICATION AUTOMATIC EXPLICIT IMPLICIT PRIVATE TAGS UNIVERSAL"),storage:r("BOOLEAN INTEGER OBJECT IDENTIFIER BIT OCTET STRING UTCTime InterfaceIndex IANAifType CMIP-Attribute REAL PACKAGE PACKAGES IpAddress PhysAddress NetworkAddress BITS BMPString TimeStamp TimeTicks TruthValue RowStatus DisplayString GeneralString GraphicString IA5String NumericString PrintableString SnmpAdminString TeletexString UTF8String VideotexString VisibleString StringStore ISO646String T61String UniversalString Unsigned32 Integer32 Gauge Gauge32 Counter Counter32 Counter64"),modifier:r("ATTRIBUTE ATTRIBUTES MANDATORY-GROUP MANDATORY-GROUPS GROUP GROUPS ELEMENTS EQUALITY ORDERING SUBSTRINGS DEFINED"),accessTypes:r("not-accessible accessible-for-notify read-only read-create read-write"),multiLineStrings:!0};function s(e){var t,n=e.keywords||i.keywords,r=e.cmipVerbs||i.cmipVerbs,s=e.compareTypes||i.compareTypes,E=e.status||i.status,a=e.tags||i.tags,o=e.storage||i.storage,I=e.modifier||i.modifier,T=e.accessTypes||i.accessTypes,S=e.multiLineStrings||i.multiLineStrings,u=!1!==e.indentStatements,l=/[\|\^]/;function A(e,t,n,r,i){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=i}function N(e,t,n){var r=e.indented;return e.context&&"statement"==e.context.type&&(r=e.context.indented),e.context=new A(r,t,n,null,e.context)}function p(e){var t=e.context.type;return(")"==t||"]"==t||"}"==t)&&(e.indented=e.context.indented),e.context=e.context.prev}return{name:"asn1",startState:function(){return{tokenize:null,context:new A(-2,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,i){var A=i.context;if(e.sol()&&(null==A.align&&(A.align=!1),i.indented=e.indentation(),i.startOfLine=!0),e.eatSpace())return null;t=null;var m=(i.tokenize||function(e,i){var u=e.next();if('"'==u||"'"==u)return i.tokenize=function(e,t){for(var n,r=!1,i=!1;null!=(n=e.next());){if(n==u&&!r){var s=e.peek();s&&("b"==(s=s.toLowerCase())||"h"==s||"o"==s)&&e.next(),i=!0;break}r=!r&&"\\"==n}return(i||!(r||S))&&(t.tokenize=null),"string"},i.tokenize(e,i);if(/[\[\]\(\){}:=,;]/.test(u))return t=u,"punctuation";if("-"==u&&e.eat("-"))return e.skipToEnd(),"comment";if(/\d/.test(u))return e.eatWhile(/[\w\.]/),"number";if(l.test(u))return e.eatWhile(l),"operator";e.eatWhile(/[\w\-]/);var A=e.current();return n.propertyIsEnumerable(A)?"keyword":r.propertyIsEnumerable(A)?"variableName":s.propertyIsEnumerable(A)?"atom":E.propertyIsEnumerable(A)?"comment":a.propertyIsEnumerable(A)?"typeName":o.propertyIsEnumerable(A)||I.propertyIsEnumerable(A)||T.propertyIsEnumerable(A)?"modifier":"variableName"})(e,i);if("comment"==m)return m;if(null==A.align&&(A.align=!0),(";"==t||":"==t||","==t)&&"statement"==A.type)p(i);else if("{"==t)N(i,e.column(),"}");else if("["==t)N(i,e.column(),"]");else if("("==t)N(i,e.column(),")");else if("}"==t){for(;"statement"==A.type;)A=p(i);for("}"==A.type&&(A=p(i));"statement"==A.type;)A=p(i)}else t==A.type?p(i):u&&(("}"==A.type||"top"==A.type)&&";"!=t||"statement"==A.type&&"newstatement"==t)&&N(i,e.column(),"statement");return i.startOfLine=!1,m},languageData:{indentOnInput:/^\s*[{}]$/,commentTokens:{line:"--"}}}}}};