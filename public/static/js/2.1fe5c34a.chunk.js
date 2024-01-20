(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[2],{1474:function(t,e,n){"use strict";function a(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}n.d(e,"a",(function(){return a}))},1706:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n(1474),r=n(263),i=n(132);function o(t,e){Object(i.a)(1,arguments);var n=e||{},o=n.locale,u=o&&o.options&&o.options.weekStartsOn,c=null==u?0:Object(a.a)(u),s=null==n.weekStartsOn?c:Object(a.a)(n.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=Object(r.a)(t),f=d.getUTCDay(),h=(f<s?7:0)+f-s;return d.setUTCDate(d.getUTCDate()-h),d.setUTCHours(0,0,0,0),d}},1707:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n(263),r=n(132);function i(t){Object(r.a)(1,arguments);var e=1,n=Object(a.a)(t),i=n.getUTCDay(),o=(i<e?7:0)+i-e;return n.setUTCDate(n.getUTCDate()-o),n.setUTCHours(0,0,0,0),n}},1738:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var a=n(1474),r=n(263),i=n(1706),o=n(132);function u(t,e){Object(o.a)(1,arguments);var n=Object(r.a)(t,e),u=n.getUTCFullYear(),c=e||{},s=c.locale,d=s&&s.options&&s.options.firstWeekContainsDate,f=null==d?1:Object(a.a)(d),h=null==c.firstWeekContainsDate?f:Object(a.a)(c.firstWeekContainsDate);if(!(h>=1&&h<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(u+1,0,h),l.setUTCHours(0,0,0,0);var m=Object(i.a)(l,e),g=new Date(0);g.setUTCFullYear(u,0,h),g.setUTCHours(0,0,0,0);var b=Object(i.a)(g,e);return n.getTime()>=m.getTime()?u+1:n.getTime()>=b.getTime()?u:u-1}},1929:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n(263),r=n(132);function i(t){Object(r.a)(1,arguments);var e=Object(a.a)(t);return!isNaN(e)}},1930:function(t,e,n){"use strict";function a(t){return function(e){var n=e||{},a=n.width?String(n.width):t.defaultWidth;return t.formats[a]||t.formats[t.defaultWidth]}}n.d(e,"a",(function(){return a}))},1931:function(t,e,n){"use strict";function a(t){return function(e,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=r.width?String(r.width):i;a=t.formattingValues[o]||t.formattingValues[i]}else{var u=t.defaultWidth,c=r.width?String(r.width):t.defaultWidth;a=t.values[c]||t.values[u]}return a[t.argumentCallback?t.argumentCallback(e):e]}}n.d(e,"a",(function(){return a}))},1932:function(t,e,n){"use strict";function a(t){return function(e,n){var a=String(e),r=n||{},i=a.match(t.matchPattern);if(!i)return null;var o=i[0],u=a.match(t.parsePattern);if(!u)return null;var c=t.valueCallback?t.valueCallback(u[0]):u[0];return{value:c=r.valueCallback?r.valueCallback(c):c,rest:a.slice(o.length)}}}n.d(e,"a",(function(){return a}))},1933:function(t,e,n){"use strict";function a(t){return function(e,n){var a=String(e),r=n||{},i=r.width,o=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],u=a.match(o);if(!u)return null;var c,s=u[0],d=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth];return c="[object Array]"===Object.prototype.toString.call(d)?function(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}(d,(function(t){return t.test(s)})):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}(d,(function(t){return t.test(s)})),c=t.valueCallback?t.valueCallback(c):c,{value:c=r.valueCallback?r.valueCallback(c):c,rest:a.slice(s.length)}}}n.d(e,"a",(function(){return a}))},1934:function(t,e,n){"use strict";function a(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function r(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}var i={p:r,P:function(t,e){var n,i=t.match(/(P+)(p+)?/),o=i[1],u=i[2];if(!u)return a(t,e);switch(o){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",a(o,e)).replace("{{time}}",r(u,e))}};e.a=i},1935:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return u}));var a=["D","DD"],r=["YY","YYYY"];function i(t){return-1!==a.indexOf(t)}function o(t){return-1!==r.indexOf(t)}function u(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}},1936:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n(263),r=n(1707),i=n(132);function o(t){Object(i.a)(1,arguments);var e=Object(a.a)(t),n=e.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(n+1,0,4),o.setUTCHours(0,0,0,0);var u=Object(r.a)(o),c=new Date(0);c.setUTCFullYear(n,0,4),c.setUTCHours(0,0,0,0);var s=Object(r.a)(c);return e.getTime()>=u.getTime()?n+1:e.getTime()>=s.getTime()?n:n-1}},1937:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));function a(t){return t.getTime()%6e4}function r(t){var e=new Date(t.getTime()),n=Math.ceil(e.getTimezoneOffset());return e.setSeconds(0,0),6e4*n+(n>0?(6e4+a(e))%6e4:a(e))}},1941:function(t,e,n){"use strict";var a={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};var r=n(1930),i={date:Object(r.a)({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:Object(r.a)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:Object(r.a)({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},o={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};var u=n(1931);var c={ordinalNumber:function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:Object(u.a)({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:Object(u.a)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:Object(u.a)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:Object(u.a)({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:Object(u.a)({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},s=n(1932),d=n(1933),f={code:"en-US",formatDistance:function(t,e,n){var r;return n=n||{},r="string"===typeof a[t]?a[t]:1===e?a[t].one:a[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:i,formatRelative:function(t,e,n,a){return o[t]},localize:c,match:{ordinalNumber:Object(s.a)({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:Object(d.a)({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:Object(d.a)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Object(d.a)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Object(d.a)({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:Object(d.a)({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};e.a=f},1945:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var a=n(1474),r=n(263),i=n(132);function o(t,e){Object(i.a)(2,arguments);var n=Object(r.a)(t).getTime(),o=Object(a.a)(e);return new Date(n+o)}function u(t,e){Object(i.a)(2,arguments);var n=Object(a.a)(e);return o(t,-n)}},1947:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n(263),r=n(1706),i=n(1474),o=n(1738),u=n(132);function c(t,e){Object(u.a)(1,arguments);var n=e||{},a=n.locale,c=a&&a.options&&a.options.firstWeekContainsDate,s=null==c?1:Object(i.a)(c),d=null==n.firstWeekContainsDate?s:Object(i.a)(n.firstWeekContainsDate),f=Object(o.a)(t,e),h=new Date(0);h.setUTCFullYear(f,0,d),h.setUTCHours(0,0,0,0);var l=Object(r.a)(h,e);return l}function s(t,e){Object(u.a)(1,arguments);var n=Object(a.a)(t),i=Object(r.a)(n,e).getTime()-c(n,e).getTime();return Math.round(i/6048e5)+1}},1948:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n(263),r=n(1707),i=n(1936),o=n(132);function u(t){Object(o.a)(1,arguments);var e=Object(i.a)(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var a=Object(r.a)(n);return a}function c(t){Object(o.a)(1,arguments);var e=Object(a.a)(t),n=Object(r.a)(e).getTime()-u(e).getTime();return Math.round(n/6048e5)+1}},2205:function(t,e,n){"use strict";n.d(e,"a",(function(){return Y}));var a=n(1929),r=n(1941),i=n(1945),o=n(263);function u(t,e){for(var n=t<0?"-":"",a=Math.abs(t).toString();a.length<e;)a="0"+a;return n+a}var c={y:function(t,e){var n=t.getUTCFullYear(),a=n>0?n:1-n;return u("yy"===e?a%100:a,e.length)},M:function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):u(n+1,2)},d:function(t,e){return u(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.toUpperCase();case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(t,e){return u(t.getUTCHours()%12||12,e.length)},H:function(t,e){return u(t.getUTCHours(),e.length)},m:function(t,e){return u(t.getUTCMinutes(),e.length)},s:function(t,e){return u(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,a=t.getUTCMilliseconds();return u(Math.floor(a*Math.pow(10,n-3)),e.length)}},s=n(132);var d=n(1948),f=n(1936),h=n(1947),l=n(1738),m="midnight",g="noon",b="morning",w="afternoon",v="evening",y="night";function O(t,e){var n=t>0?"-":"+",a=Math.abs(t),r=Math.floor(a/60),i=a%60;if(0===i)return n+String(r);var o=e||"";return n+String(r)+o+u(i,2)}function p(t,e){return t%60===0?(t>0?"-":"+")+u(Math.abs(t)/60,2):T(t,e)}function T(t,e){var n=e||"",a=t>0?"-":"+",r=Math.abs(t);return a+u(Math.floor(r/60),2)+n+u(r%60,2)}var M={G:function(t,e,n){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var a=t.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return c.y(t,e)},Y:function(t,e,n,a){var r=Object(l.a)(t,a),i=r>0?r:1-r;return"YY"===e?u(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):u(i,e.length)},R:function(t,e){return u(Object(f.a)(t),e.length)},u:function(t,e){return u(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return u(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return u(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){var a=t.getUTCMonth();switch(e){case"M":case"MM":return c.M(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return u(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){var r=Object(h.a)(t,a);return"wo"===e?n.ordinalNumber(r,{unit:"week"}):u(r,e.length)},I:function(t,e,n){var a=Object(d.a)(t);return"Io"===e?n.ordinalNumber(a,{unit:"week"}):u(a,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):c.d(t,e)},D:function(t,e,n){var a=function(t){Object(s.a)(1,arguments);var e=Object(o.a)(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var a=e.getTime(),r=n-a;return Math.floor(r/864e5)+1}(t);return"Do"===e?n.ordinalNumber(a,{unit:"dayOfYear"}):u(a,e.length)},E:function(t,e,n){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){var r=t.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return u(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){var r=t.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return u(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){var a=t.getUTCDay(),r=0===a?7:a;switch(e){case"i":return String(r);case"ii":return u(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){var a=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){var a,r=t.getUTCHours();switch(a=12===r?g:0===r?m:r/12>=1?"pm":"am",e){case"b":case"bb":case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){var a,r=t.getUTCHours();switch(a=r>=17?v:r>=12?w:r>=4?b:y,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var a=t.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return c.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):c.H(t,e)},K:function(t,e,n){var a=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):u(a,e.length)},k:function(t,e,n){var a=t.getUTCHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):u(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):c.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):c.s(t,e)},S:function(t,e){return c.S(t,e)},X:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return p(r);case"XXXX":case"XX":return T(r);case"XXXXX":case"XXX":default:return T(r,":")}},x:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"x":return p(r);case"xxxx":case"xx":return T(r);case"xxxxx":case"xxx":default:return T(r,":")}},O:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+O(r,":");case"OOOO":default:return"GMT"+T(r,":")}},z:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+O(r,":");case"zzzz":default:return"GMT"+T(r,":")}},t:function(t,e,n,a){var r=a._originalDate||t;return u(Math.floor(r.getTime()/1e3),e.length)},T:function(t,e,n,a){return u((a._originalDate||t).getTime(),e.length)}},j=n(1934),C=n(1937),x=n(1935),P=n(1474),D=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,U=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,k=/^'([^]*?)'?$/,S=/''/g,W=/[a-zA-Z]/;function Y(t,e,n){Object(s.a)(2,arguments);var u=String(e),c=n||{},d=c.locale||r.a,f=d.options&&d.options.firstWeekContainsDate,h=null==f?1:Object(P.a)(f),l=null==c.firstWeekContainsDate?h:Object(P.a)(c.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=d.options&&d.options.weekStartsOn,g=null==m?0:Object(P.a)(m),b=null==c.weekStartsOn?g:Object(P.a)(c.weekStartsOn);if(!(b>=0&&b<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!d.localize)throw new RangeError("locale must contain localize property");if(!d.formatLong)throw new RangeError("locale must contain formatLong property");var w=Object(o.a)(t);if(!Object(a.a)(w))throw new RangeError("Invalid time value");var v=Object(C.a)(w),y=Object(i.a)(w,v),O={firstWeekContainsDate:l,weekStartsOn:b,locale:d,_originalDate:w},p=u.match(U).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,j.a[e])(t,d.formatLong,O):t})).join("").match(D).map((function(n){if("''"===n)return"'";var a=n[0];if("'"===a)return E(n);var r=M[a];if(r)return!c.useAdditionalWeekYearTokens&&Object(x.b)(n)&&Object(x.c)(n,e,t),!c.useAdditionalDayOfYearTokens&&Object(x.a)(n)&&Object(x.c)(n,e,t),r(y,n,d.localize,O);if(a.match(W))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return n})).join("");return p}function E(t){return t.match(k)[1].replace(S,"'")}}}]);