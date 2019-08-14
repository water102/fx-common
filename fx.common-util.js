class FxCommonUtil {
  loopWithTimeout(items, cb, timeout) {
    if (items.length === 0) return;
    const clearEvent = setTimeout(() => {
      clearTimeout(clearEvent);
      const item = items[0];
      items.shift();
      cb(item);
      this.loopWithTimeout(items, cb, timeout);
    }, timeout);
  }

  checkScriptRuningOnNode() {
    const isNode =
      typeof global !== 'undefined' &&
      {}.toString.call(global) == '[object global]';
    return isNode;
  }

  getRootObject() {
    this.checkScriptRuningOnNode() ? global : window;
  }

  createGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  async uniqueCode(
    prefix = '',
    characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'
  ) {
    const { default: shortid } = await import('shortid');
    shortid.characters(characters);
    return `${prefix}${shortid.generate()}`;
  }

  randomString(
    length = 8,
    chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  ) {
    let result = '';
    for (let i = length; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }

  parseBoolean(val) {
    if (this.isNullOrEmpty(val)) return false;
    val = val.toLowerCase();
    const bool = (() => {
      switch (false) {
        case val !== 'true':
        case val !== '1':
          return true;
        case val !== 'false':
        case val !== '0':
          return false;
      }
    })();
    if (typeof bool === 'boolean') {
      return bool;
    }
    return void 0;
  }

  wait(checkFunc) {
    return new Promise((resolve, reject) => {
      const intervalHandle = setInterval(() => {
        if (!checkFunc()) return;
        clearInterval(intervalHandle);
        resolve();
      }, 100);
    });
  }

  hashCode(val) {
    let hash = 0,
      i,
      chr;
    if (val.length === 0) return hash;
    for (i = 0; i < val.length; i++) {
      chr = val.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  }

  numberFormat(
    value,
    lengthOfDecimal = 3,
    lengthOfWholePart = 3,
    sectionsDelimiter = ',',
    decimalDelimiter = '.'
  ) {
    if (this.isNullOrEmpty(value)) return '';
    if (typeof value == 'string') {
      value = Number(value);
    }
    const num = value.toFixed(Math.max(0, ~~lengthOfDecimal));
    const re =
      '\\d(?=(\\d{' +
      (lengthOfWholePart || 3) +
      '})+' +
      (lengthOfDecimal > 0 ? '\\D' : '$') +
      ')';
    let result = (decimalDelimiter
      ? num.replace('.', decimalDelimiter)
      : num
    ).replace(new RegExp(re, 'g'), '$&' + sectionsDelimiter);
    const results = result.split(decimalDelimiter);
    if (results.length > 1) {
      const {
        [0]: valBeforeDecimalDelimiter,
        [1]: valAfterDecimalDelimiter
      } = results;
      result = `${valBeforeDecimalDelimiter}${decimalDelimiter}${valAfterDecimalDelimiter.replace(
        /0+$/,
        ''
      )}`;
      const regex = new RegExp('\\' + decimalDelimiter + '$', 'i');
      result = result.replace(regex, '');
    }
    return result;
  }

  deNumberFormat(displayVal, sectionsDelimiter = ',', decimalDelimiter = '.') {
    if (typeof displayVal == 'number') return displayVal;
    let val = displayVal.toString();
    const re = new RegExp('[' + sectionsDelimiter + ']');
    do {
      val = val.replace(re, '');
    } while (val.indexOf(sectionsDelimiter) > -1);
    val = val.replace(new RegExp('[' + decimalDelimiter + ']'), '.');
    return Number(val);
  }

  roundDecimalPlaces(val, lengthOfDecimal = 2) {
    const t = Math.pow(10, lengthOfDecimal);
    return Math.round(val * t) / t;
  }

  setByPath(obj, path, value) {
    const parts = path.split('.');
    let o = obj;
    if (parts.length > 1) {
      for (let i = 0; i < parts.length - 1; i++) {
        if (!o[parts[i]]) {
          o[parts[i]] = {};
        }
        o = o[parts[i]];
      }
    }

    o[parts[parts.length - 1]] = value;
  }

  isNullOrUndefined(val) {
    return val === undefined || val === null;
  }

  isNullOrEmpty(val) {
    return this.isNullOrUndefined(val) || /^[\s]*$/.test(val);
  }

  isEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  isArray(input) {
    return (
      input instanceof Array ||
      Object.prototype.toString.call(input) === '[object Array]'
    );
  }

  isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return (
      input != null &&
      Object.prototype.toString.call(input) === '[object Object]'
    );
  }

  isObjectEmpty(obj) {
    var k;
    for (k in obj) {
      // even if its not own property I'd still call it non-empty
      return false;
    }
    return true;
  }

  isNumber(input) {
    return (
      typeof input === 'number' ||
      Object.prototype.toString.call(input) === '[object Number]'
    );
  }

  isDate(input) {
    return (
      input instanceof Date ||
      Object.prototype.toString.call(input) === '[object Date]'
    );
  }

  isMobileNumber(mobileNumber) {
    let flag = false;
    mobileNumber = mobileNumber.replace(/[^\d]/g, '');

    if (
      !fxCommonUtil.isNullOrEmpty(mobileNumber) ||
      mobileNumber.length === 10
    ) {
      const firstNumber = Number(mobileNumber.substring(1, 3));
      const listMobileFirstNumber = [
        32, // Viettel
        33, // Viettel
        34, // Viettel
        35, // Viettel
        36, // Viettel
        37, // Viettel
        38, // Viettel
        39, // Viettel
        52, // Vietnamobile
        56, // Vietnamobile
        58, // Vietnamobile
        59, // Gmobile
        80, // Mã mạng Cục Bưu điện Trung ương
        81, // Vinaphone
        82, // Vinaphone
        83, // Vinaphone
        84, // Vinaphone
        85, // Vinaphone
        86, // Viettel
        87, // Indochina Telecom
        88, // Vinaphone
        89, // MobiFone
        90, // MobiFone
        91, // Vinaphone
        92, // Vietnamobile
        93, // MobiFone
        94, // Vinaphone
        95, // Gmobile
        96, // Viettel
        97, // Viettel
        98, // Viettel
        99 // Gmobile
      ];
      flag = listMobileFirstNumber.indexOf(firstNumber) !== -1;
    }
    return flag;
  }

  removeEmptyProperties(obj) {
    for (let i in obj) {
      if (this.isNullOrEmpty(obj[i])) {
        delete obj[i];
      }
    }
    return obj;
  }

  isExternalLink(menu) {
    const link = menu.Link || menu.link;
    return !this.isNullOrUndefined(link) && /^https?:\/\//.test(link);
  }

  handleValueChange(value, owner, names) {
    this.setByPath(owner.state, names, value);
    owner.setState(owner.state);
  }

  capitalizeFirstLetter(val) {
    return val.charAt(0).toUpperCase() + val.slice(1);
  }

  equal(obj1, obj2) {
    const typeOfObj1 = typeof obj1;
    const typeOfObj2 = typeof obj2;
    if (
      typeOfObj1 === typeOfObj2 &&
      (typeOfObj1 == 'number' ||
        typeOfObj1 == 'string' ||
        typeOfObj1 == 'boolean')
    ) {
      return obj1 == obj2;
    }

    //Loop through properties in object 1
    for (let p in obj1) {
      //Check property exists on both objects
      if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p)) {
        return false;
      }

      switch (typeof obj1[p]) {
        //Deep compare objects
        case 'object':
          if (!Object.compare(obj1[p], obj2[p])) return false;
          break;
        //Compare function code
        case 'function':
          if (
            typeof obj2[p] == 'undefined' ||
            (p != 'compare' && obj1[p].toString() != obj2[p].toString())
          )
            return false;
          break;
        //Compare values
        default:
          if (obj1[p] != obj2[p]) {
            return false;
          }
      }
    }

    //Check object 2 for any extra properties
    for (let p in obj2) {
      if (typeof obj1[p] == 'undefined') continue;
      return false;
    }
    return true;
  }

  makeCancelablePromise(action) {
    let hasCanceled = false;

    const promise = new Promise((resolve, reject) => {
      const warpperResolve = val =>
        hasCanceled
          ? reject({
              isCanceled: true
            })
          : resolve(val);
      action(warpperResolve, reject);
    });

    return {
      then(cb) {
        promise.then(cb).catch(fxLogger.error);
        return this;
      },
      catch(cb) {
        promise.catch(cb);
        return this;
      },
      cancel() {
        hasCanceled = true;
      }
    };
  }

  deepFind(obj, path) {
    let paths = path.split('.'),
      current = obj,
      i;

    for (let i = 0; i < paths.length; ++i) {
      if (current[paths[i]] == undefined) {
        return undefined;
      } else {
        current = current[paths[i]];
      }
    }
    return current;
  }

  flattenJson(source) {
    const serialize = (source, desc, prefix) => {
      for (let i in source) {
        const key = prefix === undefined ? i : prefix + '.' + i;
        if (typeof source[i] === 'object') {
          desc = serialize(source[i], desc, key);
        } else {
          desc[key] = source[i];
        }
      }
      return desc;
    };
    return serialize(source, []);
  }

  getLanguageResource(jsonPath, defaultText) {
    const val =
      allLanguageResources[jsonPath] ||
      this.deepFind(allLanguageResources, jsonPath) ||
      defaultText;
    return val;
  }

  convertToSlug(text) {
    return text
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
  }
}
export const fxCommonUtil = new FxCommonUtil();
