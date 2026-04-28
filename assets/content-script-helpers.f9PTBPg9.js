import { c as commonjsGlobal, g as getDefaultExportFromCjs } from './jquery.3Hs3vqLI.js';
import { c as commonjsRequire } from './jszip.BBGmtqMN.js';

var url_min = {exports: {}};

url_min.exports;

(function (module) {
	!function(t){var y=/^[a-z]+:/,d=/[-a-z0-9]+(\.[-a-z0-9])*:\d+/i,v=/\/\/(.*?)(?::(.*?))?@/,r=/^win/i,g=/:$/,m=/^\?/,q=/^#/,w=/(.*\/)/,A=/^\/{2,}/,I=/(^\/?)/,e=/'/g,o=/%([ef][0-9a-f])%([89ab][0-9a-f])%([89ab][0-9a-f])/gi,n=/%([cd][0-9a-f])%([89ab][0-9a-f])/gi,i=/%([0-7][0-9a-f])/gi,s=/\+/g,a=/^\w:$/,C=/[^/#?]/;var p,S="undefined"==typeof window&&"undefined"!=typeof commonjsGlobal&&"function"==typeof commonjsRequire,b=!S&&t.navigator&&t.navigator.userAgent&&~t.navigator.userAgent.indexOf("MSIE"),x=S?t.require:null,j={protocol:"protocol",host:"hostname",port:"port",path:"pathname",query:"search",hash:"hash"},z={ftp:21,gopher:70,http:80,https:443,ws:80,wss:443};function E(){return S?p=p||"file://"+(process.platform.match(r)?"/":"")+x("fs").realpathSync("."):"about:srcdoc"===document.location.href?self.parent.document.location.href:document.location.href}function h(t,r,e){var o,n,i;r=r||E(),S?o=x("url").parse(r):(o=document.createElement("a")).href=r;var a,s,p=(s={path:true,query:true,hash:true},(a=r)&&y.test(a)&&(s.protocol=true,s.host=true,d.test(a)&&(s.port=true),v.test(a)&&(s.user=true,s.pass=true)),s);for(n in i=r.match(v)||[],j)p[n]?t[n]=o[j[n]]||"":t[n]="";if(t.protocol=t.protocol.replace(g,""),t.query=t.query.replace(m,""),t.hash=F(t.hash.replace(q,"")),t.user=F(i[1]||""),t.pass=F(i[2]||""),t.port=z[t.protocol]==t.port||0==t.port?"":t.port,!p.protocol&&C.test(r.charAt(0))&&(t.path=r.split("?")[0].split("#")[0]),!p.protocol&&e){var h=new L(E().match(w)[0]),u=h.path.split("/"),c=t.path.split("/"),f=["protocol","user","pass","host","port"],l=f.length;for(u.pop(),n=0;n<l;n++)t[f[n]]=h[f[n]];for(;".."===c[0];)u.pop(),c.shift();t.path=("/"!==r.charAt(0)?u.join("/"):"")+"/"+c.join("/");}t.path=t.path.replace(A,"/"),b&&(t.path=t.path.replace(I,"/")),t.paths(t.paths()),t.query=new U(t.query);}function u(t){return encodeURIComponent(t).replace(e,"%27")}function F(t){return (t=(t=(t=t.replace(s," ")).replace(o,function(t,r,e,o){var n=parseInt(r,16)-224,i=parseInt(e,16)-128;if(0==n&&i<32)return t;var a=(n<<12)+(i<<6)+(parseInt(o,16)-128);return 65535<a?t:String.fromCharCode(a)})).replace(n,function(t,r,e){var o=parseInt(r,16)-192;if(o<2)return t;var n=parseInt(e,16)-128;return String.fromCharCode((o<<6)+n)})).replace(i,function(t,r){return String.fromCharCode(parseInt(r,16))})}function U(t){for(var r=t.split("&"),e=0,o=r.length;e<o;e++){var n=r[e].split("="),i=decodeURIComponent(n[0].replace(s," "));if(i){var a=void 0!==n[1]?F(n[1]):null;void 0===this[i]?this[i]=a:(this[i]instanceof Array||(this[i]=[this[i]]),this[i].push(a));}}}function L(t,r){h(this,t,!r);}U.prototype.toString=function(){var t,r,e="",o=u;for(t in this){var n=this[t];if(!(n instanceof Function||void 0===n))if(n instanceof Array){var i=n.length;if(!i){e+=(e?"&":"")+o(t)+"=";continue}for(r=0;r<i;r++){var a=n[r];void 0!==a&&(e+=e?"&":"",e+=o(t)+(null===a?"":"="+o(a)));}}else e+=e?"&":"",e+=o(t)+(null===n?"":"="+o(n));}return e},L.prototype.clearQuery=function(){for(var t in this.query)this.query[t]instanceof Function||delete this.query[t];return this},L.prototype.queryLength=function(){var t=0;for(var r in this.query)this.query[r]instanceof Function||t++;return t},L.prototype.isEmptyQuery=function(){return 0===this.queryLength()},L.prototype.paths=function(t){var r,e="",o=0;if(t&&t.length&&t+""!==t){for(this.isAbsolute()&&(e="/"),r=t.length;o<r;o++)t[o]=!o&&a.test(t[o])?t[o]:u(t[o]);this.path=e+t.join("/");}for(o=0,r=(t=("/"===this.path.charAt(0)?this.path.slice(1):this.path).split("/")).length;o<r;o++)t[o]=F(t[o]);return t},L.prototype.encode=u,L.prototype.decode=F,L.prototype.isAbsolute=function(){return this.protocol||"/"===this.path.charAt(0)},L.prototype.toString=function(){return (this.protocol&&this.protocol+"://")+(this.user&&u(this.user)+(this.pass&&":"+u(this.pass))+"@")+(this.host&&this.host)+(this.port&&":"+this.port)+(this.path&&this.path)+(this.query.toString()&&"?"+this.query)+(this.hash&&"#"+u(this.hash))},t[t.exports?"exports":"Url"]=L;}(module.exports?module:window); 
} (url_min));

var url_minExports = url_min.exports;
const Url$1 = /*@__PURE__*/getDefaultExportFromCjs(url_minExports);

const timeStringToSeconds = {
  methods: {
    timeStringToSeconds: function(string) {
      if ( string && string.match(/\d/) ) {
        
        // This is a little janky and very specific to
        // the progress and length time format in Audible
        const hasMinutes = string.match(/[0-9]( ?)+(m|min|分)/);
        const numbers = string.match(/\d+/g);
        const v = {};
        const hoursToSec = function(n) {
          return +n * 60 * 60;
        };
        const minsToSec = function(n) {
          return +n * 60;
        };
        // If the matched array contains 2 groups of numbers,
        // then we the array must contain hours and minutes
        if (numbers.length === 2) {
          v.h = numbers[0];
          v.m = numbers[1];
          v.numbers = hoursToSec(v.h) + minsToSec(v.m);
        }
        // If there's only one group of numbers and it doesn't
        // contain the word 'min', it will be treated as hours
        else if (!hasMinutes) {
          v.h = numbers[0];
          v.numbers = hoursToSec(v.h);
        }
        // Again... If there's only one group of numbers but it
        // contains the word 'min', then it will be treated as minutes
        else {
          v.m = numbers[0];
          v.numbers = minsToSec(v.m);
        }
        return v.numbers;
        
      }
      else { return 0; }
    }
  }
};

const secondsToTimeString = {
  methods: {
    secondsToTimeString: function(s, delimCharacters) {
      var pad = function(num, size) {
          return delimCharacters ? num : ("000" + num).slice(size * -1);
        },
        time = parseFloat(s).toFixed(3),
        hours = Math.floor(time / 60 / 60),
        minutes = Math.floor(time / 60) % 60;
        time.slice(-3);
      var h =
        (hours.toString().length > 1 ? hours : pad(hours, 2)) +
        (delimCharacters ? "h " : ".");
      var m = pad(minutes, 2) + (delimCharacters ? "m " : "");
      if (delimCharacters && !hours) h = "";
      return h + m;
    }
  }
};

/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */


/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */
const millisecondsInWeek = 604800000;

/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */
const millisecondsInDay = 86400000;

/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */
const millisecondsInMinute = 60000;

/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */
const millisecondsInHour = 3600000;

/**
 * @constant
 * @name constructFromSymbol
 * @summary Symbol enabling Date extensions to inherit properties from the reference date.
 *
 * The symbol is used to enable the `constructFrom` function to construct a date
 * using a reference date and a value. It allows to transfer extra properties
 * from the reference date to the new date. It's useful for extensions like
 * [`TZDate`](https://github.com/date-fns/tz) that accept a time zone as
 * a constructor argument.
 */
const constructFromSymbol = Symbol.for("constructDateFrom");

/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * Starting from v3.7.0, it allows to construct a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from "./constructFrom/date-fns";
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date>(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use constructor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   );
 * }
 */
function constructFrom(date, value) {
  if (typeof date === "function") return date(value);

  if (date && typeof date === "object" && constructFromSymbol in date)
    return date[constructFromSymbol](value);

  if (date instanceof Date) return new date.constructor(value);

  return new Date(value);
}

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * Starting from v3.7.0, it clones a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument, context) {
  // [TODO] Get rid of `toDate` or `constructFrom`?
  return constructFrom(context || argument, argument);
}

let defaultOptions = {};

function getDefaultOptions() {
  return defaultOptions;
}

/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  const _date = toDate(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds(),
    ),
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}

function normalizeDates(context, ...dates) {
  const normalize = constructFrom.bind(
    null,
    dates.find((date) => typeof date === "object"),
  );
  return dates.map(normalize);
}

/**
 * The {@link startOfDay} function options.
 */

/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date, options) {
  const _date = toDate(date, options?.in);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

/**
 * The {@link differenceInCalendarDays} function options.
 */

/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - The options object
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );

  const laterStartOfDay = startOfDay(laterDate_);
  const earlierStartOfDay = startOfDay(earlierDate_);

  const laterTimestamp =
    +laterStartOfDay - getTimezoneOffsetInMilliseconds(laterStartOfDay);
  const earlierTimestamp =
    +earlierStartOfDay - getTimezoneOffsetInMilliseconds(earlierStartOfDay);

  // Round the number of days to the nearest integer because the number of
  // milliseconds in a day is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round((laterTimestamp - earlierTimestamp) / millisecondsInDay);
}

const helpers = {
  methods: {
    shortenLength: function(string) {
      if ( string ) {
        string = DOMPurify.sanitize( string.trimToColon().trimAll() );
        if ( string.match(/\d/) ) {
          const lengthInSeconds = this.timeStringToSeconds(string);
          return this.secondsToTimeString(lengthInSeconds, true);
        }
        else { return null; }
      }
      else { return null; }
    },

    getSummary: function(el) {
      if ( !el ) return "";
      
      el.removeAttribute("class");
      var children = el.querySelectorAll("*");
      $.each(children, function() {
        this.removeAttribute("class");
      });

      return DOMPurify.sanitize(el.outerHTML.trimAll());
    },

    fixDates: function( source ) {
      
      var date = (typeof source === 'object') ? DOMPurify.sanitize( source.textContent.trimToColon() ) : DOMPurify.sanitize( source );
      if ( source && date ) {
        
        const domainExtension = this.domainExtension;

        const regionalDateFormats = {
          ".com":    ["m-d-y", "MM-dd-yyyy"],
          ".ca":     ["y-m-d", "yyyy-MM-dd"],
          ".co.uk":  ["d-m-y", "dd-MM-yyyy"],
          ".de":     ["d-m-y", "dd-MM-yyyy"],
          ".fr":     ["d-m-y", "dd-MM-yyyy"],
          ".it":     ["d-m-y", "dd-MM-yyyy"],
          ".com.au": ["d-m-y", "dd-MM-yyyy"],
          ".in":     ["d-m-y", "dd-MM-yyyy"],
          // ".jp":     ["y-m-d", "yyyy-MM-dd"], // Looked at the audible.co.jp date format (book release date) and I'm pretty sure there is no point in me touching that.
        };

        const formatString = regionalDateFormats[domainExtension] ? regionalDateFormats[domainExtension][0] : null;
        let splitDate = date.split("-");
        
        // Only try to fix date if we know the region and its date format...
        // Or if the values are not separated by a dash
        
        if ( !formatString || !date.match(/\-/) || splitDate.length !== 3 ) {
          return date;
        }
        else {
          const formatSplit = formatString.split("-");
  
          const newDate = {
            y: null,
            m: null,
            d: null
          };
          $.each(splitDate, function(i, date) {
            newDate[formatSplit[i]] = date;
          });
          date = null;
          // Some audible sites display all years in two digits,
          // which is very difficult to transform to 4 digits.
          // For example, if the year is 20, is it 1920, 2020, or 1420?
          // This conversion to 4 digits is not bulletproof, but better than nothing.
          if (newDate.y.length <= 2) {
            if (newDate.y >= 95 && newDate.y <= 99) {
              newDate.y = "19" + newDate.y;
            } else if (newDate.y < 95) {
              newDate.y = "20" + newDate.y;
            }
          }
          const ISO8601 = [newDate.y, newDate.m, newDate.d];
          // const originalFormat = regionalDateFormats[domainExtension][1] || regionalDateFormats['.com'][1];
  
          // This was just an idea to be a bit more flexible with how it shows up in the gallery, but it's not so simple
          // What if the person viewing it is not from the same country? The only proper way to do it I feel would be to
          // Show visitors whatever format is dominant in their country... but that seems too much work, so: "year-month-day" it is for now at least
          // return {
          //   value: dateFns.format(new Date(ISO8601[0], ISO8601[1] - 1, ISO8601[2]), 'yyyy-MM-dd'),
          //   original: dateFns.format(new Date(ISO8601[0], ISO8601[1] - 1, ISO8601[2]), originalFormat),
          // };
          return dateFormat( new Date(ISO8601[0], ISO8601[1] - 1, ISO8601[2]), "yyyy-MM-dd");
        }
        
      } else {
        return null;
      }
    },

    getSeries: function(element, params = {}) {
      
      const series = [];
      if (element) {
        const html = DOMPurify.sanitize( $(element).html() );
        let elements = html.trimAll().trimToColon();
            elements = $.parseHTML(elements);
        
        $.each(elements, function(index, object) {
          
          var string    = _.get(object, 'textContent', '' ).trim().replace(/^,/, "").trimAll() || "";
          var titleRow  = _.get(object, 'href');
          var numberRow = !titleRow && string.match(/\d/);
          
          if ( titleRow ) {
            
            let url = new Url( titleRow );
            series.push({
              name: string,
              ...(params.getUrl && { url: url.path }), // This should be discarded later....
              asin: params.reverse ? url.query.asin : url.path.substring(url.path.lastIndexOf("/") + 1),
            });
            
          } 
          else if ( numberRow ) {
            // Trims text from the front: ("Book ", removes trailing comma, and splits numbers separated by commas
            var numbers = string.replace(/^[^0-9]*/, "").replace(/,$/, "").replace(/;$/, "").trim().split(",");
            // Numbers are added to the previous item
            var lastItem = _.last(series);
            lastItem.bookNumbers = $.map(numbers, function(n) {
              return "" + n.trim(); // Every number is handled as a string to avoid issues with book ranges
            });
          }
          
        });
      }
      
      // Return nothing
      if (!series.length) return null;
      
      // Sort
      if ( params.reverse ) series.reverse();
      // Return series
      return series;
      
    },

    getArray: function(elements) {
      const objArray = [];
      $(elements).each(function() {
        const url = new Url( DOMPurify.sanitize( $(this).attr("href") ), true);
        let searchAuthor;
        let searchNarrator;
        let searchProvider;
        if (url.query.searchAuthor) searchAuthor = url.query.searchAuthor;
        if (url.query.searchNarrator) searchNarrator = url.query.searchNarrator;
        if (url.query.searchProvider) searchProvider = url.query.searchProvider;
        url.clearQuery();
        if (searchAuthor) url.query.searchAuthor = searchAuthor;
        if (searchNarrator) url.query.searchNarrator = searchNarrator;
        if (searchProvider) url.query.searchProvider = searchProvider;
        searchNarrator = null;
        searchProvider = null;

        let obj = {
          name: DOMPurify.sanitize( $(this).text().trim() )
        };
        const minifiedUrl = minifyUrl(url.toString());
        if (minifiedUrl) obj.url = minifiedUrl;
        
        objArray.push(obj);
      });
      return objArray.length > 0 ? objArray : null;

      function minifyUrl(url) {
        if (url.match(/^\/cat\//) || url.match(/^\/author\//)) {
          // When the data is rendered the url is formed using the parent key + the asin
          return url.substring(url.lastIndexOf("/") + 1);
        } else if (
          url.match(/^\/search\?searchAuthor/) ||
          url.match(/^\/search\?searchNarrator/) ||
          url.match(/^\/search\?searchProvider/)
        ) {
          return null; // When the data is rendered, the url is formed using the name prop
        } else {
          return url;
        }
      }
    },

    // Since the added date is no longer available in the Audible library or store pages,
    // I'm adding a prop called "added", which obviously isn't the same as the date it was added,
    // but can be sorted in the same fashion... given that the array is in that same order,
    // which it should be. Old at the bottom (low number), new at the top (high number).
    addedOrder: function(books) {
      let id = books.length + 1;
      _.each(books, function(book) {
        --id;
        book.added = id;
      });
    },

    makeFrenchFries: function(hotpotato) {
      hotpotato.extras = hotpotato.extras || {};
      hotpotato.extras['domain-extension'] = hotpotato.extras['domain-extension'] || this.domainExtension;

      hotpotato.chunks = [];
      _.each(hotpotato, function(item, key) {
        if (key !== "chunks" && _.isArray(item)) {
          const chunks = _.chunk(item, 50);
          hotpotato.chunks.push(key);
          hotpotato[key + "-chunk-length"] = chunks.length;
          _.each(chunks, function(chunk, i) {
            hotpotato[key + "-chunk-" + i] = chunk;
          });
          delete hotpotato[key]; // The original array is not needed anymore
          
        }
      });
    },

    // It's vegan glue... Don't worry about it...
    glueFriesBackTogether: function(data) {
      if (data && _.isEmpty(data)) {
        return null;
      } else {
        _.each(data.chunks, function(chunkName) {
          const chunksLength = data[chunkName + "-chunk-length"];
          const chunkNumbers = _.range(0, chunksLength);
          data[chunkName] = [];
          _.each(chunkNumbers, function(n) {
            data[chunkName] = data[chunkName].concat(
              data[chunkName + "-chunk-" + n]
            );
            delete data[chunkName + "-chunk-" + n];
          });
          delete data[chunkName + "-chunk-length"];
        });
        delete data.chunks;
      }
    },
    
    // - Remove books no longer in the library 
    // - Remove series if it no longer has any books in it.
    removeFromSeries: function( potatoSeries, removedBooks ) {
      
      _.each( removedBooks, function( book ) {
        
        if ( book.series ) {
          _.each( book.series, function( bookSeries ) {
            
            let targetSeries = _.find( potatoSeries, { asin: bookSeries.asin });
            // Remove book from series
            _.remove( targetSeries.books, function( asin ) { return asin === book.asin; });
            if ( targetSeries.books.length < 1 ) {
              // Remove series from potato series because it's empty, yo! WWooooOOOOO!!!
              _.remove( potatoSeries, function( o ) { return o.asin === bookSeries.asin; });
            }
            
          });
        }
        
      });
      
    },
    
    // - Remove book from collections if it was removed from the library
    removeFromCollections: function( potatoCollections, removedBooks ) {
      
      potatoCollections = _.compact( potatoCollections );
      _.each( potatoCollections, function( collection ) {
        if ( collection.books.length > 0 ) {
          _.each( removedBooks, function( book ) {
            const bookInCollection = _.includes( collection.books, book.asin );
            // Remove book from collection...
            if ( bookInCollection ) _.remove( collection.books, function( asin ) { return asin === book.asin; });
            if ( collection.books.length < 1 ) {
              // Remove collection if it's empty... 
              _.remove( potatoCollections, function( o ) { return o.id === collection.id; });
            }
          });
        }
        
      });
      
    },
    
  }
};

export { Url$1 as U, millisecondsInMinute as a, timeStringToSeconds as b, constructFrom as c, differenceInCalendarDays as d, millisecondsInWeek as e, getDefaultOptions as g, helpers as h, millisecondsInHour as m, normalizeDates as n, secondsToTimeString as s, toDate as t };
