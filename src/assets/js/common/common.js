/*
 * 系统拓展方法
 */
;
(function ($, window, undefined) {
	// NEW selector
	jQuery.expr[':'].lowerCaseContains = function (a, i, m) {
		return jQuery(a).text().toLowerCase()
			.indexOf(m[3].toLowerCase()) >= 0;
	};

	//是否包含指定字符串，忽略大小写
	String.prototype.indexOfIgnoreCase = function () {
		var bi = arguments[arguments.length - 1];
		var thisObj = this;
		var idx = 0;

		if (typeof (arguments[arguments.length - 2]) == 'number') {
			idx = arguments[arguments.length - 2];
			thisObj = this.substr(idx);
		}

		var re = new RegExp(arguments[0], (bi ? 'i' : ''));
		var r = thisObj.match(re);
		return r == null ? -1 : r.index + idx;
	};

	//是否包含指定字符串
	String.prototype.contains = function (obj, isCaseSensitive) {
		//默认大小写敏感
		if (isCaseSensitive === undefined) {
			isCaseSensitive = true;
		}

		return isCaseSensitive ? this.indexOf(obj) >= 0 : this.indexOfIgnoreCase(obj) >= 0;
	}

	//扩展 string.format
	String.prototype.format = function () {
		var args = arguments;
		var reg = /\{(\d+)\}/g;
		return this.replace(reg, function (g0, g1) {
			return args[+g1];
		});
	};

	//是否为正整数
	String.prototype.isDigit = function () {
		var s = this.trim();
		return (s != '' && s.replace(/\d/g, "").length == 0);
	};

	// 检查是否为数字 (含正负符号和小数点)
	String.prototype.isNumber = function () {
		var s = this.trim();
		return (s.search(/^[+-]?[0-9.]*$/) >= 0);
	};

	//字符转换成整数
	String.prototype.toInt = function () {
		return parseInt(this.trim());
	};

	//字符转换成浮点数字
	String.prototype.toFloat = function () {
		return parseFloat(this.trim());
	};

	//去掉所有的html标记
	String.prototype.delHtmlTag = function () {
		return this.replace(/<[^>]+>/g, '');
	};

	/*
	 * 时间格式化
	 */
	Date.prototype.FormatNew = function (dateTimeFormatStr) {
		var date = this;
		/*
		函数：填充0字符
		参数：value-需要填充的字符串, length-总长度
		返回：填充后的字符串
		*/
		var zeroize = function (value, length) {
			if (!length) {
				length = 2;
			}
			value = new String(value);
			for (var i = 0, zeros = ''; i < (length - value.length); i++) {
				zeros += '0';
			}
			return zeros + value;
		};

		return dateTimeFormatStr.replace(/"[^"]*"|'[^']*'|\b(?:d{1,4}|M{1,4}|yy(?:yy)?|([hHmstT])\1?|[lLZ])\b/g, function ($0) {
			switch ($0) {
				case 'd':
					return date.getDate();
				case 'dd':
					return zeroize(date.getDate());
				case 'ddd':
					return ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'][date.getDay()];
				case 'dddd':
					return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()];
				case 'M':
					return date.getMonth() + 1;
				case 'MM':
					return zeroize(date.getMonth() + 1);
				case 'MMM':
					return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][date.getMonth()];
				case 'MMMM':
					return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][date.getMonth()];
				case 'yy':
					return new String(date.getFullYear()).substr(2);
				case 'yyyy':
					return date.getFullYear();
				case 'h':
					return date.getHours() % 12 || 12;
				case 'hh':
					return zeroize(date.getHours() % 12 || 12);
				case 'H':
					return date.getHours();
				case 'HH':
					return zeroize(date.getHours());
				case 'm':
					return date.getMinutes();
				case 'mm':
					return zeroize(date.getMinutes());
				case 's':
					return date.getSeconds();
				case 'ss':
					return zeroize(date.getSeconds());
				case 'l':
					return date.getMilliseconds();
				case 'll':
					return zeroize(date.getMilliseconds());
				case 'tt':
					return date.getHours() < 12 ? 'am' : 'pm';
				case 'TT':
					return date.getHours() < 12 ? 'AM' : 'PM';
			}
		});
	};

	/*
	 * 将时间字符串格式化成通用时间格式
	 * 如：17/Aug/2017=>2017/Aug/17
	 */
	String.prototype.DateTimeStrFormat = function (dateTimeFormatStr) {
		var dateStr = this;
		var yearIndex = -1;
		var monthIndex = -1;
		var dayIndex = -1;
		var hourIndex = -1;
		var minuteIndex = -1;
		var secondIndex = -1;

		//分割时间格式化-,/,空格,:
		var dateTimeFormatStrArray = dateTimeFormatStr.split(/-|:|\/|\s/g);

		//获取时间格式各个部分的索引
		for (var i = 0; i < dateTimeFormatStrArray.length; i++) {
			if (dateTimeFormatStrArray[i] == "yyyy" || dateTimeFormatStrArray[i] == "yy") {
				yearIndex = i;
			} else if (dateTimeFormatStrArray[i] == "M" || dateTimeFormatStrArray[i] == "MM" || dateTimeFormatStrArray[i] == "MMM" || dateTimeFormatStrArray[i] == "MMMM") {
				monthIndex = i;
			} else if (dateTimeFormatStrArray[i] == "d" || dateTimeFormatStrArray[i] == "dd" || dateTimeFormatStrArray[i] == "ddd" || dateTimeFormatStrArray[i] == "dddd") {
				dayIndex = i;
			} else if (dateTimeFormatStrArray[i] == "h" || dateTimeFormatStrArray[i] == "hh" || dateTimeFormatStrArray[i] == "H" || dateTimeFormatStrArray[i] == "HH") {
				hourIndex = i;
			} else if (dateTimeFormatStrArray[i] == "m" || dateTimeFormatStrArray[i] == "mm") {
				minuteIndex = i;
			} else if (dateTimeFormatStrArray[i] == "s" || dateTimeFormatStrArray[i] == "ss") {
				secondIndex = i;
			} else {
				continue;
			}
		}

		//分割时间
		var dateStrArray = dateStr.split(/-|:|\/|\s/g);
		if (yearIndex <= -1) {
			return dateStr;
		}

		if (hourIndex <= -1) {
			return dateStrArray[yearIndex] + "/" + dateStrArray[monthIndex] + "/" + dateStrArray[dayIndex];
		} else {
			return dateStrArray[yearIndex] + "/" + dateStrArray[monthIndex] + "/" + dateStrArray[dayIndex] + " " + dateStrArray[hourIndex] + ":" + dateStrArray[minuteIndex] + ":" + dateStrArray[secondIndex];
		}
	};

}(jQuery, window));


/**
 * 公共方法
 **/
;
(function (tool, $) {

	/*
	 * 配置文件路径
	 */
	tool.configFilePath = "/static/configfile/config.json";
	/*
	 * ajaxUrl:请求的api地址
	 */
	tool.config_ajaxUrl = "ajaxUrl";
	/*
	 * 多语言查询接口地址
	 */
	tool.LanguageVersionsHandle_Query = "LanguageVersionsHandle_Query";
	/*
	 * 用户登陆接口
	 */
	tool.Api_UserLogin = "Api_UserLogin";
	/*
	 * 公司分组接口
	 */
	tool.Api_OrganizationsHandle_Group = "Api_OrganizationsHandle_Group";
	/*
	 * 公司分组内部数据接口
	 */
	tool.Api_OrganizationsHandle_GroupInnerData = "Api_OrganizationsHandle_GroupInnerData";

	/*
	 * currentLanguageVersion:当前语言版本
	 */
	tool.config_currentLanguageVersion = "currentLanguageVersion";
	/*
	 * refreshSessionTime:刷新Session时间
	 */
	tool.config_refreshSessionTime = "refreshSessionTime";

	/*
	 * lanData:多语言数据
	 */
	tool.config_lanData = "lanData";
	/*
	 * lanData:类型数据
	 */
	tool.config_allTypesData = "allTypesData";
	/*
	 * 配置参数在缓存中的Key名称
	 */
	tool.cache_Config = "Config";
	/*
	 * cache_RegisterCode:注册码在缓存中的Key
	 */
	tool.cache_RegisterCode = "_RegisterCode";
	/*
	 * cache_UserName:用户名在缓存中的Key
	 */
	tool.cache_UserName = "_UserName";
	/*
	 * cache_CurUser:当前用户在缓存中的Key
	 */
	tool.cache_CurUser = "_CurUser";
	/*
	 * cache_loginUserName:loginUserName在缓存中的Key
	 */
	tool.cache_loginUserName = "CRMloginUserName";
	/*
	 * cache_loginPwd:loginPwd 在缓存中的Key
	 */
	tool.cache_loginPwd = "CRMloginPwd";

	/*
	 * PageSize:每页记录数
	 */
	tool.PageSize = 20;

	/*请求的公共入口地址*/
	tool.AjaxBaseUrl = function () {
		return tool.getConfigValue(tool.config_ajaxUrl) || "";
	}

	/*判断传入值是否为空*/
	tool.isNull = function (content) {
		return (content == "" || content == undefined || content == null);
	};

	/*格式化成Json对象*/
	tool.jObject = function (data) {
		try {
			data = typeof (data) == "string" ? eval('(' + data + ')') : data;
		} catch (err) {
			console.log("Json format error!");
			data = {};
		}

		return data;
	};

	/*获取应用存储区中保存的键值对的个数*/
	tool.getStorageLength = function () {
		if (tool.isNull(keyName)) {
			return "";
		}

		//	        var isRunInPlus = mui.os.plus;
		//	        var sysStorage = isRunInPlus ? plus.storage : localStorage;

		var sysStorage = localStorage;
		return sysStorage.getLength();
	};

	/*通过键(key)检索获取应用存储的值*/
	tool.getStorageItem = function (keyName) {
		if (tool.isNull(keyName)) {
			return "";
		}

		//var isRunInPlus = mui.os.plus;
		//var sysStorage = isRunInPlus ? plus.storage : localStorage;
		var sysStorage = localStorage;

		return sysStorage.getItem(keyName);
	};

	/*修改或添加键值(key-value)对数据到应用数据存储中*/
	tool.setStoragItem = function (keyName, value) {
		if (tool.isNull(keyName)) {
			return false;
		}

		//var isRunInPlus = mui.os.plus;
		//var sysStorage = isRunInPlus ? plus.storage : localStorage;
		var sysStorage = localStorage;

		sysStorage.setItem(keyName, value);
		return true;
	};

	/*通过key值删除键值对存储的数据*/
	tool.removeStoragItem = function (keyName) {
		if (tool.isNull(keyName)) {
			return false;
		}

		//var isRunInPlus = mui.os.plus;
		//var sysStorage = isRunInPlus ? plus.storage : localStorage;
		var sysStorage = localStorage;

		sysStorage.removeItem(keyName);
		return true;
	};

	/*通过key值删除键值对存储的数据*/
	tool.clearStoragItem = function () {
		//var isRunInPlus = mui.os.plus;
		//var sysStorage = isRunInPlus ? plus.storage : localStorage;
		var sysStorage = localStorage; console.log('clearStoragItem');

		sysStorage.clear();
		return true;
	};

	//	sessionStorage
	/*通过键(key)检索获取应用存储sessionStorage的值*/
	tool.getSessionStorageItem = function (keyName) {
		if (tool.isNull(keyName)) {
			return "";
		}
		return sessionStorage.getItem(keyName);
	};

	/*修改或添加键值(key-value)对数据到应用数据存储sessionStorage中*/
	tool.setSessionStorageItem = function (keyName, value) {
		if (tool.isNull(keyName)) {
			return false;
		}
		sessionStorage.setItem(keyName, value);
		return true;
	};

	/*通过key值删除键值对存储的数据*/
	tool.clearSessionStorageItem = function () {
		sessionStorage.clear();
		return true;
	};

	/*生成随机数  min ≤ r ≤ max*/
	tool.RandomNumBoth = function (min, max) {
		var rangeTemp = max - min;
		var rand = Math.random();
		var num = min + Math.round(rand * rangeTemp); //四舍五入
		return num;
	};

	/*
	 * 浏览器跨域处理
	 */
	tool.CorsHandle = function (isSupportCors) {
		if (isSupportCors) {
			jQuery.support.cors = true;
		} else {
			jQuery.support.cors = false;
		}
	};

	/*
	 * 生成指定长度的随机字符串
	 * len:指定长度
	 */
	var NoceCharArray = [
		'0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
		'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
		'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
	];
	tool.GernerateNonce = function (len) {
		if (tool.isNull(len)) {
			len = 6;
		}

		var nonceStr = "";
		for (var i = 0; i < len; i++) {
			nonceStr = nonceStr + NoceCharArray[Math.floor(RandomNumBoth(0, NoceCharArray.length - 1))];
		}

		return nonceStr;
	};

	/*
	 * 生成时间戳
	 */
	tool.GernerateTimeStamp = function () {
		return new Date().getTime();
	};

	/*Json对象按照Key名称排序*/
	tool.SortJObjectByKey = function (jObject) {
		if (tool.isNull(jObject)) {
			return {};
		}

		//先用Object内置类的keys方法获取要排序对象的属性名，
		//再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
		var newkeyArray = Object.keys(jObject).sort();

		//创建一个新的对象，用于存放排好序的键值;
		var newJObject = {};
		for (var i = 0, len = newkeyArray.length; i < len; i++) {
			//遍历newkey数组
			//向新创建的对象中按照排好的顺序依次增加键值对
			newJObject[newkeyArray[i]] = jObject[newkeyArray[i]];
		}

		return newJObject;
	};

	/*
	 * 读取系统配置文件,返回JSON对象
	 */
	tool.getConfigJSON = function () {
		var jsonTemp = {};

		//从缓存读取配置数据
		jsonTemp = tool.getStorageItem(tool.cache_Config);

		if (!tool.isNullOrEmptyObject(jsonTemp)) {
			jsonTemp = tool.jObject(jsonTemp);
			return jsonTemp;
		}

		$.ajaxSettings.async = false;

		try {
			$.getJSON(tool.configFilePath, function (data) {
				if (tool.isNullOrEmptyObject(data)) {
					return jsonTemp;
				}

				jsonTemp = tool.jObject(data);
				//写入缓存
				tool.setStoragItem(tool.cache_Config, JSON.stringify(jsonTemp));
			});
		} catch (err) {
			console.log(err);
		} finally {
			$.ajaxSettings.async = true;
			return jsonTemp;
		}
	};

	/*
	 * 根据Key获取配置值
	 */
	tool.getConfigValue = function (keyName) {

		if (tool.isNull(keyName)) {
			return "";
		}

		var configJSON = tool.getConfigJSON();

		if (tool.isNull(configJSON)) {
			return "";
		}

		return configJSON[keyName] || "";
	};

	/*
	 * 设置参数值
	 */
	tool.setConfigValue = function (keyName, keyValue) {
		if (tool.isNull(keyName)) {
			return false;
		}

		var configJSON = tool.getConfigJSON();
		if (tool.isNull(configJSON)) {
			return false;
		}

		configJSON[keyName] = keyValue;

		//写入缓存
		tool.setStoragItem(tool.cache_Config, JSON.stringify(configJSON));
	}

	/*
	 * 设置配置缓存
	 */
	tool.setConfig = function (cfgJSON) {
		cfgJSON = tool.jObject(cfgJSON);
		//写入缓存
		tool.setStoragItem(tool.cache_Config, JSON.stringify(cfgJSON));
	}

	/*
	 * 路径合并
	 */
	tool.combineRequestUrl = function (baseUrl, remainUrl) {
		if (tool.isNull(baseUrl) || tool.isNull(remainUrl)) {
			return "";
		}

		//移除最后的斜杆
		if (baseUrl.lastIndexOf('/') == (baseUrl.length - 1)) {
			baseUrl = baseUrl.substring(0, baseUrl.length - 1);
		}

		//移除开头的斜杆
		if (remainUrl.indexOf('/') == 0) {
			remainUrl = remainUrl.substring(1);
		}
		//移除最后的斜杆
		if (remainUrl.lastIndexOf('/') == (remainUrl.length - 1)) {
			remainUrl = remainUrl.substring(0, remainUrl.length - 1);
		}

		//合并地址
		return baseUrl + '/' + remainUrl;
	};

	/*
	 * 获取当前时间
	 * isFormat:是否需要格式化。False:返回Date类型的值；True：返回格式化后的字符串。
	 * dateTimeFormatStr:格式化字符串。
	 */
	tool.GetCurrentDate = function (isFormat, dateTimeFormatStr) {
		var currentDate = new Date();
		return FormateDate(currentDate, isFormat, dateTimeFormatStr);
	}

	/*
	 * 时间格式化
	 * isFormat:是否需要格式化。False:返回Date类型的值；True：返回格式化后的字符串。
	 * dateTimeFormatStr:格式化字符串。
	 */
	tool.FormateDate = function (dateTime, isFormat, dateTimeFormatStr) {
		if (isFormat == null || isFormat == undefined || !isFormat) {
			return dateTime;
		}

		if (dateTimeFormatStr == null || dateTimeFormatStr == "" || dateTimeFormatStr == undefined) {
			dateTimeFormatStr = 'yyyy-MM-dd';
		}

		return dateTime.FormatNew(dateTimeFormatStr);
	}

	/*
	 * 设置时间
	 * date:待操作的时间。
	 * year:需要增加的年数。
	 * month:需要增加的月数。
	 * day:需要增加的天数。
	 * isFormat:是否需要格式化。False:返回Date类型的值；True：返回格式化后的字符串。
	 * dateTimeFormatStr:格式化字符串。
	 */
	tool.SetDate = function (handleDate, year, month, day, isFormat, dateTimeFormatStr) {
		if (handleDate == null || handleDate == undefined) {
			return null;
		}

		if (year != null && year != undefined) {
			handleDate.setFullYear(handleDate.getFullYear() + year);
		}

		if (month != null && month != undefined) {
			handleDate.setMonth(handleDate.getMonth() + month);
		}

		if (day != null && day != undefined) {
			handleDate.setDate(handleDate.getDate() + day);
		}

		return FormateDate(handleDate, isFormat, dateTimeFormatStr);
	}

	/*
	 * 计算时间差值。
	 * isDateTimeString:相减的时间是否字符串。
	 * isFormat:是否需要格式化。False:返回Date类型的值；True：返回格式化后的字符串。
	 * dateTimeFormatStr:格式化字符串。
	 */
	tool.DateDiff = function (isDateTimeString, isFormat, startTimeStr, endTimeStr, diffType) {
		var sTime;
		var eTime;
		if (isDateTimeString) {
			startTimeStr = startTimeStr.DateTimeStrFormat('yyyy-MM-dd HH:mm:ss');
			endTimeStr = endTimeStr.DateTimeStrFormat('yyyy-MM-dd HH:mm:ss');

			sTime = new Date(startTimeStr); //开始时间
			eTime = new Date(endTimeStr); //结束时间
		} else {
			sTime = startTimeStr;
			eTime = endTimeStr;
		}

		//是否需要格式化
		if (isFormat) {
			sTime = new Date(sTime.FormatNew('yyyy-MM-dd'));
			eTime = new Date(eTime.FormatNew('yyyy-MM-dd'));
		}

		diffType = diffType.toLowerCase();

		//除数变量
		var timeType = 1;

		switch (diffType) {
			case "second":
				timeType = 1000;
				break;
			case "minute":
				timeType = 1000 * 60;
				break;
			case "hour":
				timeType = 1000 * 3600;
				break;
			case "day":
				timeType = 1000 * 3600 * 24;
				break;
			default:
				timeType = 1;
				break;
		}

		return parseInt(
			(eTime.getTime() - sTime.getTime()) / parseInt(timeType)
		);
	}

	//是否为正整数
	tool.isPositiveInteger = function (s) {
		var re = /^[0-9]+$/;
		return re.test(s);
	};

	//判断两个对象是否相等,只能判断对象中的是简单值，还不能判断对象的值中还是对象的问题
	tool.isObjectValueEqual = function (a, b) {
		// Of course, we can do it use for in
		// Create arrays of property names
		var aProps = Object.getOwnPropertyNames(a);
		var bProps = Object.getOwnPropertyNames(b);

		// If number of properties is different,
		// objects are not equivalent
		if (aProps.length != bProps.length) {
			return false;
		}

		for (var i = 0; i < aProps.length; i++) {
			var propName = aProps[i];

			// If values of same property are not equal,
			// objects are not equivalent
			if (a[propName] !== b[propName]) {
				return false;
			}
		}

		// If we made it this far, objects
		// are considered equivalent
		return true;
	};

	/**
	 * 是否为空对象，包括null,undefined,空数组,没有任何属性的空对象
	 * @param {object}           任意对象
	 * @return {boolean}         如果为空对象，返回true
	 */
	tool.isNullOrEmptyObject = function (obj) {
		var flag = false;
		if (obj === null || obj === undefined || obj === '') {
			flag = true;
		} else if ($.type(obj) === 'string') {
			obj = obj.trim();
			if (obj === '') {
				flag = true;
			} else {
				obj = obj.toUpperCase();
				if (obj === 'NULL' || obj === 'UNDEFINED' || obj === '{}') {
					flag = true;
				}
			}
		} else if ($.type(obj) === 'array') {
			flag = obj.length === 0;
		} else if ($.type(obj) === 'object') {
			flag = $.isEmptyObject(obj);
		} else {
			flag = false;
		}
		return flag;
	};

	//首字母大写
	tool.firstWordToUpperCase = function (str) {
		if (!tools.isNullOrEmptyObject(str)) return '';
		str = str.toString();
		return str.substring(0, 1).toUpperCase() + str.substring(1, str.length);
	};

	// 判断是否是 NaN
	// NaN 是唯一的一个 `自己不等于自己` 的 number 类型
	tool.isNaN = function (obj) {
		return $.type(obj) === 'number' && obj !== +obj;
	};

	//全局唯一的GUID值
	tool.guid = function () {
		var d = new Date().getTime();
		var guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			var r = (d + Math.random() * 16) % 16 | 0;
			d = Math.floor(d / 16);
			return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
		});
		return guid;
	};

	//该文件类型是否可以在线预览
	tool.IsCanPreviewOnline = function (fileType) {
		var officeArr = ['doc', 'docx', 'xlsx', 'xls', 'ppt', 'pptx', 'txt', 'pdf'];
		var imgArr = ["bmp", "jpg", "jpeg", "png", "gif"];
		return $.inArray(fileType.toLowerCase(), officeArr) > -1 || $.inArray(fileType.toLowerCase(), imgArr) > -1
	};

	/**
	 * 是否为emoji字符
	 * @param {string}  substring  要检测的字符串
	 * @return {boolean}  返回true/false
	 */
	tool.isEmojiCharacter = function (substring) {
		for (var i = 0; i < substring.length; i++) {
			var hs = substring.charCodeAt(i);
			if (0xd800 <= hs && hs <= 0xdbff) {
				if (substring.length > 1) {
					var ls = substring.charCodeAt(i + 1);
					var uc = ((hs - 0xd800) * 0x400) + (ls - 0xdc00) + 0x10000;
					if (0x1d000 <= uc && uc <= 0x1f77f) {
						return true;
					}
				}
			} else if (substring.length > 1) {
				var ls = substring.charCodeAt(i + 1);
				if (ls == 0x20e3) {
					return true;
				}
			} else {
				if (0x2100 <= hs && hs <= 0x27ff) {
					return true;
				} else if (0x2B05 <= hs && hs <= 0x2b07) {
					return true;
				} else if (0x2934 <= hs && hs <= 0x2935) {
					return true;
				} else if (0x3297 <= hs && hs <= 0x3299) {
					return true;
				} else if (hs == 0xa9 || hs == 0xae || hs == 0x303d || hs == 0x3030 ||
					hs == 0x2b55 || hs == 0x2b1c || hs == 0x2b1b ||
					hs == 0x2b50) {
					return true;
				}
			}
		}
		return false;
	}

	//若对象为null则返回空字符串
	tool.objToString = function (obj) {
		if (tool.isNullOrEmptyObject(obj)) {
			return '';
		}

		return obj;
	};

	//将文件的字节数转化为其它合适的单位数量
	tool.fileSizeFormat = function (size) {
		size = size || 0;
		size = Number(size);

		var unit = 'B';
		var ks = size;
		if (size < 1024) {
			return size + unit;
		}
		var ks = size / 1024;
		unit = 'KB';
		if (ks >= 1024) {
			ks = ks / 1024;
			unit = 'M';
		}
		if (ks >= 1024) {
			ks = ks / 1024;
			unit = 'G';
		}
		return ks.toFixed(2) + unit;
	};

	//数组是否包含指定对象
	tool.contains = function (arr, obj) {
		var arrLen = arr.length;
	};

	//获取文件后缀
	//fileName:文件名或文件路径
	tool.getFileExtension = function (fileName) {
		var fileExtension = "";
		if (tool.isNullOrEmptyObject(fileName)) {
			return fileExtension;
		}
		if (fileName.lastIndexOf('.') < 0) {
			return fileExtension;
		}

		fileName = $.trim(fileName);
		fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length);
		return fileExtension;
	};

	//判断当前文件是否支持在线查看
	tool.canPreviewOnline = function (fileName) {
		if (tool.isNullOrEmptyObject(fileName)) {
			return false;
		}
		var fileExtension = tool.getFileExtension(fileName);
		if (tool.isNullOrEmptyObject(fileExtension)) {
			return false;
		}
		var docArr = ['doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'txt', 'pdf'];
		var imgArr = ["bmp", "jpg", "jpeg", "png", "gif"];

		return
		$.inArray(fileExtension.toLowerCase(), docArr) > -1 ||
			$.inArray(fileExtension.toLowerCase(), imgArr) > -1
	};

	//当前文件是否图片
	tool.isFileImage = function (fileName) {
		if (tool.isNullOrEmptyObject(fileName)) {
			return false;
		}
		var fileExtension = tool.getFileExtension(fileName);
		if (tool.isNullOrEmptyObject(fileExtension)) {
			return false;
		}

		var imgArr = ["bmp", "jpg", "jpeg", "png", "gif"];
		return $.inArray(fileExtension.toLowerCase(), imgArr) > -1;
	};

	tool.isFileVideo = function (fileName) {
		if (tool.isNullOrEmptyObject(fileName)) {
			return false;
		}
		var fileExtension = tool.getFileExtension(fileName);
		if (tool.isNullOrEmptyObject(fileExtension)) {
			return false;
		}
		var imgArr = ["Ogg", "MPEG4", "WebM", "mp4", "MOV", "AVI", "WMV", "3GP", "MKV", "FLV", "RMVB"];

		return $.inArray(fileExtension, imgArr) > -1;
	};

	//获取用户系统是 android 还是 ios
	tool.getSystem = function () {

		var u = navigator.userAgent;
		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
		var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
		if (isAndroid) {
			return 'android';
		}
		if (isiOS) {
			return 'ios';
		}
	};

	tool.autoTextarea = function (elem, extra, maxHeight) {
		extra = extra || 0;
		var isFirefox = !!document.getBoxObjectFor || 'mozInnerScreenX' in window,
			isOpera = !!window.opera && !!window.opera.toString().indexOf('Opera'),
			addEvent = function (type, callback) {
				elem.addEventListener ?
					elem.addEventListener(type, callback, false) :
					elem.attachEvent('on' + type, callback);
			},
			getStyle = elem.currentStyle ? function (name) {
				var val = elem.currentStyle[name];
				if (name === 'height' && val.search(/px/i) !== 1) {
					var rect = elem.getBoundingClientRect();
					return rect.bottom - rect.top -
						parseFloat(getStyle('paddingTop')) -
						parseFloat(getStyle('paddingBottom')) + 'px';
				};
				return val;
			} : function (name) {
				return getComputedStyle(elem, null)[name];
			},
			minHeight = parseFloat(getStyle('height'));
		elem.style.resize = 'none';
		var change = function () {
			var scrollTop, height,
				padding = 0,
				style = elem.style;
			if (elem._length === elem.value.length) return;
			elem._length = elem.value.length;
			if (!isFirefox && !isOpera) {
				padding = parseInt(getStyle('paddingTop')) + parseInt(getStyle('paddingBottom'));
			};
			scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
			elem.style.height = minHeight + 'px';
			if (elem.scrollHeight > minHeight) {
				if (maxHeight && elem.scrollHeight > maxHeight) {
					height = maxHeight - padding;
					style.overflowY = 'auto';
				} else {
					height = elem.scrollHeight - padding;
					style.overflowY = 'hidden';
				};
				style.height = height + extra + 'px';
				scrollTop += parseInt(style.height) - elem.currHeight;
				document.body.scrollTop = scrollTop;
				document.documentElement.scrollTop = scrollTop;
				elem.currHeight = parseInt(style.height);
			};
		};
		addEvent('propertychange', change);
		addEvent('input', change);
		addEvent('focus', change);
		change();
	};

	tool.getWeekDayStr = function (dateStr) {
		if (!dateStr) {
			return "";
		}
		dateStr = dateStr.DateTimeStrFormat("yyyy-MM-dd");
		var dateTemp = new Date(dateStr);
		if (!dateTemp) {
			return "";
		}
		var lv = lanTool.currentLanguageVersion || 1;
		var weekdayArray = new Array();
		if (lv == 1) {
			weekdayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		} else {
			weekdayArray = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
		}

		return weekdayArray[dateTemp.getDay()];
	};

	//根据当前语言版本获取返回对象的消息
	tool.getMessage = function (data) {
		var lv = Number(lanTool.currentLanguageVersion) || 1;
		var message = "";
		switch (lv) {
			case 2:
				message = data._MessageCN || "";
				break;
			case 3:
				message = data._MessageTD || "";
				break;

			case 1:
			default:
				message = data._MessageEN || "";
				break;
		}

		return message;
	};

	//纯文本
	tool.showText = function (msg) {
		if (tool.isNullOrEmptyObject(msg)) {
			return;
		}
		$.toast(msg, "text");
	};
	//成功
	tool.showSuccess = function (msg) {
		if (tool.isNullOrEmptyObject(msg)) {
			return;
		}
		$.toast(msg);
	};
	//失败
	tool.showError = function (msg) {
		if (tool.isNullOrEmptyObject(msg)) {
			return;
		}
		$.toast(msg, "cancel");
	};
	//显示确认框
	tool.showConfirm = function (content, okCallBack, cancelCallBack) {
		if (tool.isNullOrEmptyObject(content)) {
			return;
		}
		var title = lanTool.lanContent("586_提示");
		var btnTextArr = [lanTool.lanContent("570_取消"), lanTool.lanContent("545_确定")];
		$.confirm(content, title, okCallBack, cancelCallBack, btnTextArr);
	};
	//显示等待
	tool.showLoading = function (msg) {
		msg = msg || lanTool.lanContent("770_加载中...");
		$.showLoading(msg);
	};
	//隐藏等待
	tool.hideLoading = function () {
		$.hideLoading();
	};

	//当前登陆对象
	tool.CurUser = function () {
		var curUserStr = tool.getStorageItem(tool.cache_CurUser);
		if (tool.isNullOrEmptyObject(curUserStr)) {
			return {};
		}
		return tool.jObject(curUserStr);
	}
	//注册码
	tool.RegisterCode = function () {
		return tool.getStorageItem(tool.cache_RegisterCode) || "";
	}
	//用户名
	tool.UserName = function () {
		return tool.getStorageItem(tool.cache_UserName) || "";
	}

	//模板
	tool.meetingTemplate =
		`<div class="list-group-div group-div">
		<div class="date-div">
			<span class="calcfont calc-rili1" ></span><span class="group-name">meetinggroup1</span><span class="right">(1)</span>
			  </div>
		<div class="occupy-div"></div>
		<div class="group-item-list meeting-list">
			<div class="data-events-item f12" data-url="/meetinginfo/12" >
				<div class="item-title">Meeting with Eastern Airlines</div>
				<div class="item-time f12">
				  <span class="calcfont calc-gengxinshijian"></span>
				  <span class="time-text">14:30-17:00</span>
				</div>
				<div class="item-address">China Eastern Airlines</div>
				<div class="item-initiator">Niki (Fleet Planning Manager)</div>
			</div>
		</div>
	</div>
	`;

	tool.tripTemplate =
		`<div class="list-group-div group-div">
		  <div class="date-div" ><span class="calcfont calc-rili1" ></span><span class="group-name">Alirline1</span><span class="right">(1)</span></div>
		  <div class="occupy-div"></div>
		  <div class="group-item-list trip-list" >
			  <div class=" data-events-item f12" data-url="/tripinfo/12">
				  <div class="item-title">
					<span>1115-1116东航会议出差上海</span>
					<span class="right">审批已通过</span>
				  </div>
				  <div class="item-time f12">
					<span class="time-text trip-time-text">15/Nov - 16/Nov</span>
				  </div>
				  <div class="item-div">香港 - 上海（MU726   31/Dec 07:40 - 31/Dec 09:30）</div>
				  <div class="item-div">上海 - 香港（HX235   4/Jan 09:10 - 4/Jan 11:55）</div>
				  <div class="item-div">31/Dec - 04/Jan  4晚  上海</div>
			  </div>
		  </div>
	  </div>
	`;


	tool.dealPipelineTemplate =
		`<div class="list-group-div group-div">
		  <div class="date-div" >
			  <span class="calcfont calc-lianxiren1" ></span><span class="group-name">Alirline1</span><span class="right">(1)</span>
		  </div>
		  <div class="occupy-div"></div>
		  <div class="group-item-list dealPipeline-list" >
			  <div class=" group-item f14" data-url="/opportunitiesinfo/12">
				  <div class="item-stars-icon calcfont calc-shoucang"></div>
				  <div class="item-block">
					<div class="item-div item-first-div blue-color">
						A320-200 sales project2 for
					</div>
					<div class="item-div padding-top-5">测试交易，注意事项，跟进交易，其他备忘信息，其他备忘信息，其他备忘信息。</div>
					<div class="item-div blue-color padding-bottom-5">
						<span>In Progress</span>
					</div>
					<div class="item-div">
						<div class="item-new">new</div>
						<span class="itme-div-span">First Proposal discussion</span>
					</div>
					<div class="item-div dete-div">
					  <span>01/Jan/2019</span>
					</div>
				  </div>
			  </div>
		  </div>
	</div>
	`;
	tool.opportunitiesTemplate =
		`<div class="list-group-div group-div">
		  <div class="date-div" >
			  <span class="calcfont calc-lianxiren1" ></span><span class="group-name">Alirline1</span><span class="right">(1)</span>
		  </div>
		  <div class="occupy-div"></div>
		  <div class="group-item-list opportunities-list" >
			  <div class="group-item f14" data-url="/opportunitiesinfo/12">
				  <div class="item-stars-icon calcfont calc-shoucang"></div>
				  <div class="item-block">
					  <div class="item-div item-first-div blue-color">
						  A320-200 sales project2 for
					  </div>
					  <div class="item-div blue-color padding-bottom-5 padding-top-5">
						  <span>In Progress</span>
					  </div>
					  <div class="item-div">测试交易，注意事项，跟进交易，其他备忘信息，其他备忘信息，其他备忘信息。</div>
				  </div>
			  </div>
		  </div>
	  </div>
	`;
	// tool.organizationsTemplate =
	// `<div class="list-group-div group-div">
	//   <div class="date-div" >
	// 	  <span class="calcfont calc-business" ></span><span class="group-name" data-groupID="{GroupID}">{GroupName}</span><span class="right">{GroupRowCount}</span>
	//   </div>
	//   <div class="occupy-div"></div>
	//   <div class="group-item-list organizations-list">
	// 	  <div class=" group-item" data-url="/organizationsinfo/12">
	// 		  <div class="item-stars-icon calcfont calc-shoucang"></div>
	// 		  <div class="item-block">
	// 			<div class="item-div item-first-div">
	// 				<span>Todd Scott</span><span class="right">UEA</span>
	// 			</div>
	// 			<div class="item-div">
	// 				<span>Alirlines</span><span class="right">Jessie Zhao</span>
	// 			</div>
	// 			<div class="item-div">
	// 			  <span>China</span><span class="right">Asia Pacific</span>
	// 			</div>
	// 		  </div>
	// 	  </div>
	//   </div>
	// </div>
	// `;
	tool.organizationsGroupTemplate =
		`<div class="list-group-div group-div">
	  <div class="date-div" >
		  <span class="calcfont calc-business" ></span><span class="group-name" data-groupID="{GroupID}">{GroupName}</span><span class="right">（{GroupRowCount}）</span>
	  </div>
	</div>
	`;
	tool.contactsTemplate =
		`<div class="list-group-div group-div">
	  <div class="date-div" >
		  <span class="calcfont calc-business" ></span><span class="group-name">Alirline1</span><span class="right">(1)</span>
	  </div>
	  <div class="occupy-div"></div>
	  <div class="group-item-list contacts-list" >
		  <div class="  group-item" data-url="/contactsinfo/12">
			  <div class="item-user-icon calcfont calc-fuzeren1"></div>
			  <div class="item-block contacts-item-block">
				<div class="item-div item-first-div">Todd Scott</div>
				<div class="item-div">Fleet Planning Manager</div>
				<div class="item-div"><span>Air China</span><span class="right">China</span></div>
				<div class="item-div">
				  <span>tsott@up12359s.com</span><span class="right">502-29-3118</span>
				</div>
				<div class="item-div">Airlines, Computer info Services</div>
			  </div>
		  </div>
	  </div>
	</div>
	`;

	/*
	*fromType:模块名
	*containerObj:容器jquery对象
	*noData:是否无数据
	*myCallBack:回调函数
	*/
	tool.InitiateGroupList = function (fromType, containerObj, myCallBack) {
		//清空容器内容
		containerObj.html('');

		if (tool.isNullOrEmptyObject(containerObj) || tool.isNullOrEmptyObject(fromType)) {
			return;
		}

		var template = "";
		var controlName = "";
		var contentHtmlStr = "";
		switch (fromType) {
			case "meeting":
				template = tool.meetingTemplate;
				controlName = "";
				break;
			case "trip":
				template = tool.tripTemplate;
				controlName = "";
				break;
			case "dealPipeline":
				template = tool.dealPipelineTemplate;
				controlName = "";
				break;
			case "opportunities":
				template = tool.opportunitiesTemplate;
				controlName = "";
				break;
			case "organizations":
				template = tool.organizationsGroupTemplate;
				controlName = tool.Api_OrganizationsHandle_Group;
				break;
			case "contacts":
				template = tool.contactsTemplate;
				controlName = "";
				break;
		}

		//查询分组数据
		//请求地址
		var urlTemp = tool.AjaxBaseUrl();
		//传入参数
		var jsonDatasTemp = {
			CurrentLanguageVersion: lanTool.currentLanguageVersion,
			UserName: tool.UserName(),
			_ControlName: controlName,
			_RegisterCode: tool.RegisterCode(),
			QueryCondiction: []
		};
		tool.showLoading();

		$.ajax({
			async: true,
			type: "post",
			url: urlTemp,
			data: jsonDatasTemp,
			success: function (data) {
				data = tool.jObject(data);
				if (data._ReturnStatus == false) {
					tool.showText(tool.getMessage(data));
					console.log(tool.getMessage(data));
					return;
				}

				data = data._OnlyOneData.Rows || [];
				//无数据
				if (data.length <= 0) {
					return;
				}

				//渲染组数据
				for (var i = 0; i < data.length; i++) {
					var tempStr = template;
					for (var key in data[i]) {
						tempStr = tempStr.replace("{" + key + "}", (data[i][key] || ""));
					}

					contentHtmlStr += tempStr;
				}

				//console.log(contentHtmlStr);

				//追加数据
				containerObj.append(contentHtmlStr);
				if (!tool.isNullOrEmptyObject(myCallBack)) {
					myCallBack(containerObj);
				}

				return;
			},
			error: function (jqXHR, type, error) {
				console.log(error);
				tool.hideLoading();
				return;
			},
			complete: function () {
				tool.hideLoading();
				//隐藏虚拟键盘
				document.activeElement.blur();
			}
		});

	};

	/*
	*fromType:模块名
	*containerObj:容器jquery对象
	*noData:是否无数据
	*myCallBack:回调函数
	*/
	tool.InitiateInnerDataList = function (fromType, groupID, containerObj, myCallBack) {
		// console.log(fromType);
		// console.log(groupID);
		// console.log(containerObj);
		if (tool.isNullOrEmptyObject(fromType) || tool.isNullOrEmptyObject(groupID) || tool.isNullOrEmptyObject(containerObj)) {
			return;
		}

		var parentContainerObj = containerObj.parents("div.group-div:first");
		// console.log(parentContainerObj);
		if (tool.isNullOrEmptyObject(parentContainerObj)) {
			return;
		}
		//清空容器内容
		parentContainerObj.find("div.occupy-div,div.group-item-list").remove();

		var outerTemplate = "";
		var innerTemplate = "";
		var controlName = "";
		var contentHtmlStr = "";
		switch (fromType) {
			case "meeting":
				outerTemplate = tool.meetingTemplate;
				controlName = "";
				break;
			case "trip":
				outerTemplate = tool.tripTemplate;
				controlName = "";
				break;
			case "dealPipeline":
				outerTemplate = tool.dealPipelineTemplate;
				controlName = "";
				break;
			case "opportunities":
				outerTemplate = tool.opportunitiesTemplate;
				controlName = "";
				break;
			case "organizations":
				controlName = tool.Api_OrganizationsHandle_GroupInnerData;
				outerTemplate = `<div class="occupy-div"></div>
				<div class="group-item-list organizations-list">
				{InnerList}
				</div>`;
				innerTemplate = `<div class=" group-item" data-url="/organizationsinfo/{AutoID}">
				<div class="item-stars-icon calcfont calc-shoucang"></div>
				<div class="item-block">
				  <div class="item-div item-first-div">
					  <span>{ShortName}</span><span class="right">{ICAOCode}</span>
				  </div>
				  <div class="item-div">
					  <span>{BusinessType}</span><span class="right">{AccountManager}</span>
				  </div>
				  <div class="item-div">
					<span>{CountryName}</span><span class="right">{CityName}</span>
				  </div>
				</div>
			</div>`;
				break;
			case "contacts":
				outerTemplate = tool.contactsTemplate;
				controlName = "";
				break;
		}

		//请求地址
		var urlTemp = tool.AjaxBaseUrl();
		//传入参数
		var jsonDatasTemp = {
			CurrentLanguageVersion: lanTool.currentLanguageVersion,
			UserName: tool.UserName(),
			_ControlName: controlName,
			GroupID: groupID,
			_RegisterCode: tool.RegisterCode(),
			QueryCondiction: []
		};
		tool.showLoading();

		$.ajax({
			async: true,
			type: "post",
			url: urlTemp,
			data: jsonDatasTemp,
			success: function (data) {
				data = tool.jObject(data);
				// console.log(data);
				if (data._ReturnStatus == false) {
					tool.showText(tool.getMessage(data));
					console.log(tool.getMessage(data));
					return;
				}

				data = data._OnlyOneData.Rows || [];
				//无数据
				if (data.length <= 0) {
					return;
				}

				//渲染组数据
				 for (var i = 0; i < data.length; i++) {
					var tempStr = innerTemplate;
					for (var key in data[i]) {
						tempStr = tempStr.replace("{" + key + "}", (data[i][key] || ""));
					}

					contentHtmlStr += tempStr;
				}
				outerTemplate = outerTemplate.replace("{InnerList}", contentHtmlStr);
				//console.log(contentHtmlStr);

				//追加数据
				parentContainerObj.append(outerTemplate);
				if (!tool.isNullOrEmptyObject(myCallBack)) {
					myCallBack(containerObj);
				}

				return;
			},
			error: function (jqXHR, type, error) {
				console.log(error);
				tool.hideLoading();
				return;
			},
			complete: function () {
				tool.hideLoading();
				//隐藏虚拟键盘
				document.activeElement.blur();
			}
		});
	};

}(top.window.tool = {}, jQuery));


// /* 
// *加载操作
// */
// ; (function (loading, $) {
// 	/*
// 	  loading
// 	  type:loading类型（1，2，3） 
// 	  message:显示文字
// 	*/
// 	loading.show = function (message, type) {

// 		if ($('.weui-mask_transparent').length > 0) {
// 			return;
// 		}

// 		type = tool.isNullOrEmptyObject(type) ? 2 : type;
// 		var html = '';
// 		message = tool.isNullOrEmptyObject(message) ? "Loading..." : message;

// 		if (type == 2) {
// 			html += '<div class="weui-loadmore loadmore-position">';
// 			html += '<div class="no_bg_loading">';
// 			html += '<i class="weui-loading"></i><span class="weui-loadmore__tips">' + message + '</span>';
// 			html += '</div>';

// 		} else if (type == 3) {
// 			html += '<div class="weui-loadmore loadmore-position">';
// 			html += '<div class="bg_black_loading">';
// 			html += '<i class="weui-loading"></i>';
// 			html += '<div><span class="weui-loadmore__tips">' + message + '</span></div>';
// 			html += '</div></div>';

// 		} else {
// 			html += '<div class="weui-loadmore loadmore-position">';
// 			html += '<div class="bg_black_loading"><i class="weui-loading"></i></div>';
// 			html += '</div>';
// 		}

// 		$("<div class='weui-mask_transparent'></div>").appendTo(document.body);
// 		var dialog = $(html).appendTo(document.body);
// 		dialog.show();
// 	},

// 		loading.hidden = function () {
// 			$(".weui-mask_transparent,.loadmore-position").remove();
// 		}

// })(top.window.loading = {}, jQuery)

/*
 * 多语言
 */
;
(function (win, lan, $) {

	//当前多语言本
	lan.currentLanguageVersion = tool.getConfigValue(tool.config_currentLanguageVersion) || 1;

	//多语言数据
	lan.Data = [];

	//多语言加载完成对象
	lan.ready = $.Deferred();

	//获取多语言数据
	lan.waitExcute = function (isFromCache, isRefreshCache, myCallBack) {
		var def = lan.ready;

		isFromCache = ((isFromCache == undefined || isFromCache == null) ? false : isFromCache);
		isRefreshCache = ((isRefreshCache == undefined || isRefreshCache == null) ? true : isRefreshCache);

		//构造传入参数
		var jsonTemp = {
			CurrentLanguageVersion: (lan.currentLanguageVersion || 1),
			IsFromCache: isFromCache,
			IsRefreshCache: isRefreshCache,
			_ControlName: tool.LanguageVersionsHandle_Query
		};

		//请求地址
		var urlTemp = tool.AjaxBaseUrl();

		if (lan.Data == undefined || lan.Data == null || lan.Data.length <= 0 || !isFromCache || isRefreshCache) {
			tool.showLoading();

			$.ajax({
				url: urlTemp,
				async: true,
				type: "post",
				cache: false,
				data: jsonTemp,
				success: function (data) {
					tool.hideLoading();

					data = tool.jObject(data);
					if (data._ReturnStatus == false) {
						lan.Data = [];
						return;
					} else {
						lan.Data = data._OnlyOneData;
						var configJSONTemp = tool.getConfigJSON();
						configJSONTemp[tool.config_currentLanguageVersion] = lan.currentLanguageVersion;
						// configJSONTemp[tool.config_lanData] = lan.Data;
						tool.setConfig(configJSONTemp);

						//console.log(lan.Data);
					}

					//执行回调函数
					if (!tool.isNullOrEmptyObject(myCallBack)) {
						myCallBack();
					}

					def.resolve();
				},
				error: function (jqXHR, type, error) {
					tool.hideLoading();
					console.log(jqXHR.responseText);
					console.log(jqXHR.status);
					console.log(jqXHR.readyState);
					console.log(jqXHR.statusText);
					console.log('type:' + type);
					console.log('error:' + error);
				},
				complete: function () {

				}
			});
		} else {
			setTimeout(function () {
				def.resolve();
			});
		}

		return def;
	};

	//根据多语言自动别名获取当前语言内容
	win.lanContent = lan.lanContent = function (id) {

		// console.log("lan.lanContent");
		// console.log(lan.Data);

		if (tool.isNullOrEmptyObject(id)) {
			return '';
		}
		for (var i = 0, dataLen = lan.Data.length; i < dataLen; i++) {
			if (tool.isPositiveInteger(id)) {
				if (lan.Data[i].id !== id) {
					continue;
				}
			} else {
				if (("_" + lan.Data[i].AliasNameAuto).indexOf("_" + id) < 0) {
					continue;
				}
			}

			switch (parseInt(lan.currentLanguageVersion)) {
				case 2:
					return lan.Data[i].SimplifiedChinese;
				case 3:
					return lan.Data[i].TraditionalChinese;
				case 1:
				default:
					return lan.Data[i].English;
			}
		}
		return "";
	};

	//切换多语言
	lan.setLan = function (curVersion, myCallBack) {
		if (lan.currentLanguageVersion == curVersion) {
			return;
		}

		//设置当前语言版本
		lan.currentLanguageVersion = curVersion;
		tool.setConfigValue(tool.config_currentLanguageVersion, lan.currentLanguageVersion);

		//执行回调函数
		if (!tool.isNullOrEmptyObject(myCallBack)) {
			myCallBack();
		}
	};

	//更新当前语言版本
	lan.updateLanVersion = function ($parent) {
		// console.log("lan.updateLanVersion");
		// console.log("lan.currentLanguageVersion:"+lan.currentLanguageVersion);
		if (!lan.currentLanguageVersion) {
			return;
		}

		if (lan.currentLanguageVersion) {
			// console.log($(".lanText").length);

			//text
			$(".lanText", $parent || $('body')).each(function () {
				$(this).text(
					lan.lanContent($(this).attr("data-lanid"))
				);
			});
			//placeholder
			$(".lanInputPlaceHolder").each(function () {
				$(this).attr('placeholder', lan.lanContent($(this).attr("data-lanid")));
			});
			//title
			$(".lanTitle").each(function () {
				$(this).attr('title', lan.lanContent($(this).attr("data-lanid")));
			});
		}
	};

	//多语言读取完毕后再更新页面显示的多语言
	lan.ready.done(lan.updateLanVersion);

	//获取和设置当前APP配置
	// var curLV = tool.getConfigValue(tool.config_currentLanguageVersion);
	// if (!curLV) {
	// 	lan.waitExcute(false, true);
	// } else {
	// 	lan.currentLanguageVersion = curLV;
	// 	lan.Data = tool.getConfigValue(tool.config_lanData);
	// 	//手动改变deferred对象的运行状态为"已完成"，从而立即触发done()方法。
	// 	lan.ready.resolve();
	// };

	if (lan.Data == undefined || lan.Data == null || lan.Data.length <= 0) {
		console.log("lan.Data is null");
		$.when(lan.waitExcute(false, true));
	} else {
		//手动改变deferred对象的运行状态为"已完成"，从而立即触发done()方法。
		console.log("lan.Data is not null");
		lan.ready.resolve();
	};
}(window, window.lanTool = {}, jQuery));


/*
 * 下拉数据
 */
;
(function (allTypeList) {
	//tool.clearStoragItem();
	//所有类型数据
	allTypeList.Data = [];

	//查询下拉数据
	allTypeList.Query = function (isFromCache, isRefreshCache) {
		return [];

		//若缓存有数据，则返回缓存的数据
		var cacheDataStr = tool.getStorageItem(tool.config_allTypesData);
		if (!tool.isNullOrEmptyObject(cacheDataStr)) {
			allTypeList.Data = tool.jObject(cacheDataStr);
			return true;
		}

		isFromCache = ((isFromCache == undefined || isFromCache == null) ? false : isFromCache);
		isRefreshCache = ((isRefreshCache == undefined || isRefreshCache == null) ? true : isRefreshCache);
		//构造传入参数
		var jsonTemp = {
			CurrentLanguageVersion: (lanTool.currentLanguageVersion || 1),
			IsFromCache: isFromCache,
			IsRefreshCache: isRefreshCache
		};

		//请求地址
		var urlTemp =
			tool.combineRequestUrl(
				tool.getConfigValue(tool.config_ajaxUrl),
				tool.getConfigValue(tool.ajaxUrl_AllTypes_Query)
			);

		if (allTypeList.Data.length <= 0) {
			setTimeout(function () {
				$.ajax({
					async: true,
					type: "post",
					url: urlTemp,
					data: {
						jsonDatas: JSON.stringify(jsonTemp)
					},
					dataType: 'json',
					success: function (funResult) {
						allTypeList.Data = [];

						funResult = tool.jObject(funResult);
						if (funResult.Result != 1) {
							allTypeList.Data = [];
							return false;
						}

						allTypeList.Data = funResult.Data;

						//写入缓存
						tool.setStoragItem(tool.config_allTypesData, JSON.stringify(allTypeList.Data));
						return true;
					},
					error: function (jqXHR, type, error) {
						console.log(jqXHR.responseText);
						console.log(jqXHR.status);
						console.log(jqXHR.readyState);
						console.log(jqXHR.statusText);
						console.log('type:' + type);
						console.log('error:' + error);
						return false;
					}
				});
			}, 10);
		}
	};
	//执行查询动作
	allTypeList.Query(false, true);

	//根据父级的TypeValue查询子项的数据(父级的TypeValue一般就是字段名)
	allTypeList.QueryChildItemsByPTypeValue = function (typeValue) {
		return [];

		var childItems = [];
		if (tool.isNullOrEmptyObject(typeValue) || allTypeList.Data.length <= 0) {
			return childItems;
		}
		var parentItem = {};
		for (var i = 0, len = allTypeList.Data.length; i < len; i++) {
			if (typeValue == allTypeList.Data[i]["TypeValue"]) {
				parentItem = allTypeList.Data[i];
				break;
			}
		}
		if (parentItem["AutoID"] == undefined || parentItem["AutoID"] == null || parentItem["AutoID"] == "") {
			return childItems;
		}

		for (var i = 0, len = allTypeList.Data.length; i < len; i++) {
			if (allTypeList.Data[i]["ParentID"] != undefined && parentItem["AutoID"] == allTypeList.Data[i]["ParentID"]) {
				childItems.push(allTypeList.Data[i]);
				continue;
			}
		}

		//统一处理成mui.PopPicker需要的数据格式
		var showDataArray = [];
		for (var i = 0, len = childItems.length; i < len; i++) {
			var textTemp = "";

			switch (parseInt(lanTool.currentLanguageVersion)) {
				case 2:
					textTemp = childItems[i]["SimplifiedNameChinese"] || "";
					break;

				case 3:
					textTemp = childItems[i]["TraditionalNameChinese"] || "";
					break;

				case 1:
				default:
					textTemp = childItems[i]["TypeNameEnglish"] || "";
					break;
			}
			var objNew = {
				"value": childItems[i]["TypeValue"] || "",
				"text": textTemp,
			};
			showDataArray.push(objNew);
		}

		return showDataArray;
	}
}(window.allTypeList = {}));

/*
* 控件初始化
*/
; (function (initial, $) {

	//初始化picker组件
	initial.initPicker = function () {

		$('.picker').each(function () {
			var _self = $(this);
			var filedName = _self.attr("data-field");

			//根据字段名查询数据
			var dataArray = allTypeList.QueryChildItemsByPTypeValue(filedName);
			var items = [];
			$.each(dataArray, function (index, item) {
				items.push(item.text);
			});

			_self.picker({
				fromId: _self.attr("id") || "",
				jqueryObj: _self,
				toolbarCloseText: lanTool.lanContent('191_确认'),
				toolbarCancleText: lanTool.lanContent('199_取消'),
				cols: [
					{
						textAlign: 'center',
						values: items
					},
				],
				onOpen: function (data) {
					var valueTemp = _self.attr("data-val") || "";
					if (valueTemp == "") {
						if (data.params != undefined && data.params.cols != undefined && data.params.cols.length >= 1 && data.params.cols[0].values != undefined && data.params.cols[0].values.length >= 1) {
							valueTemp = data.params.cols[0].values[0];
						}
					}

					_self.text(valueTemp);
					_self.attr('data-val', valueTemp);
					_self.picker("setValue", [valueTemp]);
				},
				onChange: function (data, value) {
					_self.text(data.value[0] || "");
					_self.attr('data-val', data.value[0] || "");
					_self.picker("setValue", data.value);
				}
			});
		});
	},

		//根据text值在一个数组对象中找出value
		initial.findValueByText = function (arr, text) {
			if (isNullOrEmptyObject(arr)) return '';
			$.each(arr, function (index, item) {
				if (item.text === text) {
					return item.value;
				}
			})
			return '';
		},


		//初始化datePicker组件
		initial.initDatePicker = function () {

			$('.datepicker').each(function (index, cur) {
				var _self = $(this);

				// var filedName = _self.attr("data-field");
				var showMinute = _self.attr("data-minute");
				var times = function () {
					return [];
				};
				if (showMinute === 'true') {
					times = function () {
						return [  // 自定义的时间
							{
								values: (function () {
									var hours = [];
									for (var i = 0; i < 24; i++) hours.push(initial.formatNumber(i));
									return hours;
								})()
							},
							{
								divider: true,  // 这是一个分隔符
								content: ':'
							},
							{
								values: (function () {
									var minutes = [];
									for (var i = 0; i < 60; i++) minutes.push(initial.formatNumber(i));
									return minutes;
								})()
							}
						];
					};
				}
				_self.datetimePicker({
					fromId: _self.attr("id") || "",
					jqueryObj: _self,
					toolbarCloseText: lanTool.lanContent('191_确认'),
					toolbarCancleText: lanTool.lanContent('199_取消'),
					years: initial.yearArray(50),
					// value:valueTemp,
					times: times,
					onOpen: function (data) {

						//写入当前选中的记录
						var valueTemp = _self.attr("data-val") || "";
						if (valueTemp == "") {
							var arr = [];
							var date = new Date;

							arr.push(date.getFullYear());
							arr.push(date.getMonth());
							arr.push(date.getDate());
							if (showMinute === 'true') {
								arr.push(date.getHours());
								arr.push(date.getMinutes());
								// arr.push(getSeconds());
							}
							_self.picker("setValue", arr);

						}

					},
					onChange: function (picker, values, displayValues) {
						var value = initial.returndateString(picker.value);
						_self.text(value);
						_self.attr('data-val', value);
						_self.picker("setValue", picker.value);
					}
				})
			})
		},

		initial.formatNumber = function (n) {
			return n < 10 ? "0" + n : n;
		},
		initial.returndateString = function (arr) {
			if (arr.length <= 0) return;
			if (arr.length == 3) {
				return arr[0] + '-' + arr[1] + '-' + arr[2];
			} else if (arr.length == 5) {
				return arr[0] + '-' + arr[1] + '-' + arr[2] + ' ' + arr[3] + ':' + arr[4];
			}
		},
		//返回 从当前年份一直往后的 n 年的年份数组 n默认为10
		initial.yearArray = function (n) {
			if (n == undefined || n == null) n = 10;

			var currentYear = new Date().getFullYear();
			var arr = [];
			for (var i = 0; i < n; i++) {
				arr.push(currentYear + i);
			}
			return arr;
		}

}(window.initial = {}, jQuery));