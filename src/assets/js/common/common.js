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

	//把fromStr替换成toStr
	String.prototype.ReplaceAll=function(fromStr,toStr){
		var reg=new RegExp(fromStr,"g"); //创建正则RegExp对象
		return this.replace(reg,toStr);
	}

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
	 * 单点登陆接口
	 */
	tool.Api_SingleSignOn = "Api_SingleSignOn";

	/*
	 * 刷新用户注册码
	 */
	tool.Api_RefreshRegisterCode = "Api_RefreshRegisterCode";
	/*
	 * 公司分组接口
	 */
	tool.Api_OrganizationsHandle_Group = "Api_OrganizationsHandle_Group";
	/*
	 * 公司分组内部数据接口
	 */
	tool.Api_OrganizationsHandle_GroupInnerData = "Api_OrganizationsHandle_GroupInnerData";
	/*
	 * 查询公司明细数据接口
	 */
	tool.Api_OrganizationsHandle_QuerySingle = "Api_OrganizationsHandle_QuerySingle";
	/*
	 * 公司保存/修改接口
	 */
	tool.Api_OrganizationsHandle_SaveOrUpdate = "Api_OrganizationsHandle_SaveOrUpdate";
	/*
	 * 添加/取消关注接口
	 */
	tool.Api_OrganizationsHandle_UserFollow = "Api_OrganizationsHandle_UserFollow";
	/*
	 * 公司删除注接口
	 */
	tool.Api_OrganizationsHandle_Delete = "Api_OrganizationsHandle_Delete";

	/*
	 * 联系人分组接口
	 */
	tool.Api_ContactsHandle_Group = "Api_ContactsHandle_Group";
	/*
	 * 联系人分组内部数据接口
	 */
	tool.Api_ContactsHandle_GroupInnerData = "Api_ContactsHandle_GroupInnerData";
	/*
	 * 查询联系人明细数据接口
	 */
	tool.Api_ContactsHandle_QuerySingle = "Api_ContactsHandle_QuerySingle";
	/*
	 * 联系人保存/修改接口
	 */
	tool.Api_ContactsHandle_SaveOrUpdate = "Api_ContactsHandle_SaveOrUpdate";
	/*
	 * 联系人删除接口
	 */
	tool.Api_ContactsHandle_Delete = "Api_ContactsHandle_Delete";

	/*
	 * 查询数据分享接口
	 */
	tool.Api_DataShareInfHandle_Query = "Api_DataShareInfHandle_Query";
	/*
	 * 数据分享接口
	 */
	tool.Api_DataShareInfHandle_SaveOrUpdate = "Api_DataShareInfHandle_SaveOrUpdate";
	/*
	 * 是否当前记录的负责人
	 */
	tool.Api_DataShareInfHandle_HasInitiator = "Api_DataShareInfHandle_HasInitiator";

	/*
	 * 下拉数据接口
	 */
	tool.CommonDataServiceHandle_Query = "CommonDataServiceHandle_Query";

	/*
	 * 查询日历事件节点接口
	 */
	tool.Api_MeetingHandle_QueryCalendarMonthEventNode = "Api_MeetingHandle_QueryCalendarMonthEventNode";
	/*
	 * 根据传入的时间获取当天的会议记录接口
	 */
	tool.Api_MeetingHandle_QueryCalendarGetMeetingByDate = "Api_MeetingHandle_QueryCalendarGetMeetingByDate";
	/*
	 * 保存/修改会议接口
	 */
	tool.Api_MeetingHandle_SaveOrUpdate = "Api_MeetingHandle_SaveOrUpdate";
	/*
	 * 删除会议接口
	 */
	tool.Api_MeetingHandle_Delete = "Api_MeetingHandle_Delete";
	/*
	 * 查询会议详情接口
	 */
	tool.Api_MeetingHandle_QuerySingle = "Api_MeetingHandle_QuerySingle";
	/*
	 * 查询会议分组接口
	 */
	tool.Api_MeetingHandle_Group = "Api_MeetingHandle_Group";
	/*
	 * 查询会议展开列表接口
	 */
	tool.Api_MeetingHandle_GroupInnerData = "Api_MeetingHandle_GroupInnerData";
	/*
	 * 查询未上传会议记录的会议数量
	 */
	tool.Api_MeetingHandle_QueryNoUploadRecordCount = "Api_MeetingHandle_QueryNoUploadRecordCount";
	/*
	 * 查询未上传会议记录的会议列表
	 */
	tool.Api_MeetingHandle_QueryNoUploadRecord = "Api_MeetingHandle_QueryNoUploadRecord";

	/*
	 * 销售机会分组接口
	 */
	tool.Api_OpportunityHandle_Group = "Api_OpportunityHandle_Group";
	/*
	 * 销售机会分组详情数据接口
	 */
	tool.Api_OpportunityHandle_GroupInnerData = "Api_OpportunityHandle_GroupInnerData";
	/*
	 * 销售机会详情接口
	 */
	tool.Api_OpportunityHandle_QuerySingle = "Api_OpportunityHandle_QuerySingle";
	/*
	 * 根据Opp的ID查询会议记录列表
	 */
	tool.Api_OpportunityHandle_QueryMeetingNoteListByOppID = "Api_OpportunityHandle_QueryMeetingNoteListByOppID";
	/*
	 * 销售机会保存接口
	 */
	tool.Api_OpportunityHandle_SaveOrUpdate = "Api_OpportunityHandle_SaveOrUpdate";
	/*
	 * 销售机添加/删除关注接口
	 */
	tool.Api_OpportunityHandle_UserFollow = "Api_OpportunityHandle_UserFollow";
	/*
	 * 销售机删除接口
	 */
	tool.Api_OpportunityHandle_Delete = "Api_OpportunityHandle_Delete";
	/*
	 * 关闭销售机会接口
	 */
	tool.Api_OpportunityHandle_Close = "Api_OpportunityHandle_Close";

	/*
	 * 查询会议记录明细
	 */
	tool.Api_MeetingNoticeHandle_QuerySingle = "Api_MeetingNoticeHandle_QuerySingle";
	/*
	 * 保存会议记录
	 */
	tool.Api_MeetingNoticeHandle_SaveOrUpdate = "Api_MeetingNoticeHandle_SaveOrUpdate";
	/*
	 * 删除会议记录
	 */
	tool.Api_MeetingNoticeHandle_Delete = "Api_MeetingNoticeHandle_Delete";

	/*
	 * 上传文档
	 */
	tool.Api_DocumentsHandle_UploadDocuments2DMS = "Api_DocumentsHandle_UploadDocuments2DMS";
	/*
	 * 查询文档
	 */
	tool.Api_DocumentsHandle_Query = "Api_DocumentsHandle_Query";
	/*
	 * 文档下载
	 */
	tool.Api_DocumentsHandle_DownloadFileFromDMS = "Api_DocumentsHandle_DownloadFileFromDMS";
	/*
	 * 文档删除
	 */
	tool.Api_DocumentsHandle_Delete = "Api_DocumentsHandle_Delete";

	/*
	 * 消息数量接口
	 */
	tool.Api_MessagesToUserHandle_QueryCount = "Api_MessagesToUserHandle_QueryCount";
	/*
	 * 消息列表接口
	 */
	tool.Api_MessagesToUserHandle_Query = "Api_MessagesToUserHandle_Query";
	/*
	 * 设置已读(支持批量操作)接口
	 */
	tool.Api_MessagesToUserHandle_SetRead = "Api_MessagesToUserHandle_SetRead";
	/*
	 * 清除消息(支持批量操作)接口
	 */
	tool.Api_MessagesToUserHandle_SetDisabled = "Api_MessagesToUserHandle_SetDisabled";


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
	/*
	 * FileMaxSiz:最大可上传的文件大小(20M)
	 */
	tool.FileMaxSiz = 20971520;
	/*
	 * RefreshRegisterCodeInternal:刷新注册码的间隔时长(3600000毫秒)
	 */
	tool.RefreshRegisterCodeInternal = 3600000;

	//loadingIndexClassName
	tool.loadingIndexClassName = "loadingIndex_";

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

	//localStorage
	//localStorage的生命周期是永久性的。假若使用localStorage存储数据，即使关闭浏览器，也不会让数据消失，除非主动的去删除数据
	// /*获取应用存储区中保存的键值对的个数*/
	// tool.getStorageLength = function () {
	// 	if (tool.isNull(keyName)) {
	// 		return "";
	// 	}

	// 	var sysStorage = localStorage;
	// 	return sysStorage.getLength();
	// };

	// /*通过键(key)检索获取应用存储的值*/
	// tool.getStorageItem = function (keyName) {
	// 	if (tool.isNull(keyName)) {
	// 		return "";
	// 	}

	// 	var sysStorage = localStorage;
	// 	return sysStorage.getItem(keyName);
	// };

	// /*修改或添加键值(key-value)对数据到应用数据存储中*/
	// tool.setStoragItem = function (keyName, value) {
	// 	if (tool.isNull(keyName)) {
	// 		return false;
	// 	}

	// 	var sysStorage = localStorage;
	// 	sysStorage.setItem(keyName, value);
	// 	return true;
	// };

	// /*通过key值删除键值对存储的数据*/
	// tool.removeStoragItem = function (keyName) {
	// 	if (tool.isNull(keyName)) {
	// 		return false;
	// 	}

	// 	var sysStorage = localStorage;
	// 	sysStorage.removeItem(keyName);
	// 	return true;
	// };

	// /*通过key值删除键值对存储的数据*/
	// tool.clearStoragItem = function () {
	// 	var sysStorage = localStorage;
	// 	//console.log('clearStoragItem');
	// 	sysStorage.clear();
	// 	return true;
	// };

	//sessionStorage
	//sessionStorage 的生命周期是在浏览器关闭前。也就是说，在整个浏览器未关闭前，其数据一直都是存在的
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
	tool.removeSessionStoragItem = function (keyName) {
		if (tool.isNull(keyName)) {
			return false;
		}
		sessionStorage.removeItem(keyName);
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
		jsonTemp = tool.getSessionStorageItem(tool.cache_Config);

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
				tool.setSessionStorageItem(tool.cache_Config, JSON.stringify(jsonTemp));
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
		tool.setSessionStorageItem(tool.cache_Config, JSON.stringify(configJSON));
	};

	/*
	 * 设置配置缓存
	 */
	tool.setConfig = function (cfgJSON) {
		cfgJSON = tool.jObject(cfgJSON);
		//写入缓存
		tool.setSessionStorageItem(tool.cache_Config, JSON.stringify(cfgJSON));
	};

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

	//拼装url参数
	tool.getUrlParam = function(paramJObject){
			var urlParam = "";
			if(tool.isNullOrEmptyObject(paramJObject)){
				return urlParam;
			}
			urlParam = "?";
			for(var key in paramJObject){
				urlParam = urlParam + key + "=" + (paramJObject[key] || "") + "&";
			}
			urlParam = urlParam.substring(0,urlParam.length - 1);
			return urlParam;
		};

	/*
	 * 获取当前时间
	 * isFormat:是否需要格式化。False:返回Date类型的值；True：返回格式化后的字符串。
	 * dateTimeFormatStr:格式化字符串。
	 */
	tool.GetCurrentDate = function (isFormat, dateTimeFormatStr) {
		var currentDate = new Date();
		return FormateDate(currentDate, isFormat, dateTimeFormatStr);
	};

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
	};

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
	};

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
	};

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

	//拼接文件Base64字符串
	tool.combineBase64StrWithFileType = function(base64Str,fileName){
		if(tool.isNullOrEmptyObject(fileName)){
			return base64Str;
		}

		var base64Pre = "data:{BigType}/{FileTypeNew};base64,{base64Str}";

		var fileType = tool.getFileExtension(fileName);
		if(tool.isNullOrEmptyObject(fileType)){
			return base64Str;
		}
		fileType = fileType.toLowerCase();

		var bigType = "";
		var fileTypeNew = "";
		switch(fileType){
			// case "mov":
			// bigType = "video";
			// fileTypeNew = "quicktime";
			// break;

			// case "movie":
			// bigType = "video";
			// fileTypeNew = "x-sgi-movie";
			// break;

			// case "mp3":
			// bigType = "audio";
			// fileTypeNew = "x-mpeg";
			// break;

			// case "mp4":
			// bigType = "video";
			// fileTypeNew = "mp4";
			// break;

			// case "mpeg":
			// case "mpg":
			// bigType = "video";
			// fileTypeNew = "mpeg";
			// break;
			// case "mpg4":
			// bigType = "video";
			// fileTypeNew = "mp4";
			// break;

			// case "3gp":
			// bigType = "video";
			// fileTypeNew = "3gpp";
			// break;

			case "gif":
				bigType = "image";
				fileTypeNew = "gif";
			break;

			case "jpe":
			case "jpeg":
			case "jpg":
			case "jpz":
				bigType = "image";
				fileTypeNew = "jpeg";
			break;

			case "png":
				bigType = "image";
				fileTypeNew = "png";
			break;

			default:
			return base64Str;
		}
		//"data:{BigType}/{FileTypeNew};base64,{base64Str}";
		base64Pre = base64Pre.ReplaceAll("{BigType}",bigType);
		base64Pre = base64Pre.ReplaceAll("{FileTypeNew}",fileTypeNew);
		base64Pre = base64Pre.ReplaceAll("{base64Str}",base64Str);

		return base64Pre;
	}

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

	//当前文件是否视频
	tool.isFileVideo = function (fileName) {
		if (tool.isNullOrEmptyObject(fileName)) {
			return false;
		}
		var fileExtension = tool.getFileExtension(fileName);
		fileExtension = fileExtension.toLowerCase();
		if (tool.isNullOrEmptyObject(fileExtension)) {
			return false;
		}
		var imgArr = ["ogg", "mpeg4", "webm", "mp4", "mov", "avi", "wmv", "3gp", "mkv", "flv", "rmvb"];

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
			// console.log("autoTextarea");
			var scrollTop, height,
				padding = 0,
				style = elem.style;
			// elem._length = 0;
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
		addEvent('change', change);
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

	//合并JSON对象
	tool.combineJObject = function(jObject1,jObjct2){
		if(tool.isNullOrEmptyObject(jObject1)){
			jObject1 = {};
		}
		if(tool.isNullOrEmptyObject(jObjct2)){
			jObjct2 = {};
		}

		for(var key in jObject1){
			jObjct2[key] = jObject1[key]||"";
		}

		return jObjct2;
	}

	//合并数组
	tool.combineArray = function(arr1,arr2,uniqueKey){
		var allArr = [];
		// console.log(arr1);
		// console.log(arr2);

		if(tool.isNullOrEmptyObject(arr1)){
			arr1 = [];
		}
		if(tool.isNullOrEmptyObject(arr2)){
			arr2 = []
		}
		var arr1KeyArray = [];
		for(var i = 0;i<arr1.length;i++){
			var valTemp = arr1[i][uniqueKey] || "";
			if(tool.isNullOrEmptyObject(valTemp)){
				continue;
			}
			arr1KeyArray.push(valTemp);
			allArr.push(arr1[i]);
		}
		// console.log(arr1KeyArray);

		for(var i=0;i<arr2.length;i++){
			var uniqueKeyValue = arr2[i][uniqueKey]||"";
			// console.log(uniqueKeyValue);
			if(tool.isNullOrEmptyObject(uniqueKeyValue)){
				continue;
			}
			//是否存在相同的值
			var index = $.inArray(uniqueKeyValue, arr1);
			//不存在
			if(index <= 0){
				allArr.push(arr2[i]);
			}
		}

		return allArr;
	}

	/*
    *修改时间格式
    */
   tool.ChangeTimeFormat = function (value,newFormat,oldFormat) {
		if (tool.isNullOrEmptyObject(value) || tool.isNullOrEmptyObject(newFormat)) {
			return "";
		}

		oldFormat = oldFormat || "yyyy-MM-dd HH:mm:ss";

		//value = new Date(value.DateTimeStrFormat("yyyy-MM-dd HH:mm:ss")).FormatNew("d/MMM/yyyy HH:mm");
		value = new Date(value.DateTimeStrFormat(oldFormat)).FormatNew(newFormat);
		return value;
   }

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
		var loadingIndexClassName = $.showLoading(msg);
		return loadingIndexClassName;
	};
	//隐藏等待
	tool.hideLoading = function (loadingIndexClassName,myCallBack) {
		$.hideLoading(myCallBack,loadingIndexClassName);
	};
	//顶部成功提示
	tool.topTipSuccess = function(msg,myCallBack){
		if (tool.isNullOrEmptyObject(msg)) {
			return;
		}
		$.toptip(msg, 1000, 'success',myCallBack);
	};
	//顶部失败提示
	tool.topTipError = function(msg,myCallBack){
		if (tool.isNullOrEmptyObject(msg)) {
			return;
		}
		$.toptip(msg, 1000, 'error',myCallBack);
	};

	//当前登陆对象
	tool.CurUser = function () {
		var curUserStr = tool.getSessionStorageItem(tool.cache_CurUser);
		if (tool.isNullOrEmptyObject(curUserStr)) {
			return {};
		}
		return tool.jObject(curUserStr);
	}
	//注册码
	tool.RegisterCode = function () {
		return tool.getSessionStorageItem(tool.cache_RegisterCode) || "";
	}
	//用户名
	tool.UserName = function () {
		return tool.getSessionStorageItem(tool.cache_UserName) || "";
	}

	//模板
  tool.meetingGroupTemplate =
  `<div class="list-group-div group-div">
      <div class="date-div" >
        <span class="calcfont calc-rili1" ></span><span class="group-name" data-groupID="{GroupID}">{GroupName}</span><span class="right">（{GroupRowCount}）</span>
      </div>
      <div class="occupy-div"></div>
    </div>
  `;
  tool.tripGroupTemplate =
    `<div class="list-group-div group-div">
        <div class="date-div" >
          <span class="calcfont calc-rili1" ></span><span class="group-name" data-groupID="{GroupID}">{GroupName}</span><span class="right">（{GroupRowCount}）</span>
        </div>
        <div class="occupy-div"></div>
      </div>
  `;
  tool.dealPipelineGroupTemplate =
    `<div class="list-group-div group-div">
        <div class="date-div" >
          <span class="calcfont calc-lianxiren1" ></span><span class="group-name" data-groupID="{GroupID}">{GroupName}</span><span class="right">（{GroupRowCount}）</span>
        </div>
        <div class="occupy-div"></div>
      </div>
  `;
  tool.opportunitiesGroupTemplate =
  `<div class="list-group-div group-div">
  <div class="date-div" >
	<span class="calcfont calc-lianxiren1" ></span><span class="group-name" data-groupID="{GroupID}">{GroupName}</span><span class="right">（{GroupRowCount}）</span>
  </div>
  <div class="occupy-div"></div>
</div>
`;
	tool.organizationsGroupTemplate =
		`<div class="list-group-div group-div">
	  <div class="date-div" >
		  <span class="calcfont calc-business" ></span><span class="group-name" data-groupID="{GroupID}">{GroupName}</span><span class="right">（{GroupRowCount}）</span>
    </div>
    <div class="occupy-div"></div>
	</div>
	`;
  tool.contactsGroupTemplate =
		`<div class="list-group-div group-div">
      <div class="date-div" >
    	  <span class="calcfont calc-gongsixinxi" ></span><span class="group-name" data-groupID="{GroupID}">{GroupName}</span><span class="right">（{GroupRowCount}）</span>
      </div>
      <div class="occupy-div"></div>
    </div>
	`;

	/*
	*fromType:模块名
	*containerObj:容器jquery对象
	*noData:是否无数据
	*myCallBack:回调函数
	*/
	tool.InitiateGroupList = function (fromType, containerObj, queryCondiction,myCallBack) {
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
				template = tool.meetingGroupTemplate;
				controlName = tool.Api_MeetingHandle_Group;
				break;
			case "trip":
				template = tool.tripGroupTemplate;
				//controlName = tool.Api_TripHandle_Group;
				controlName = "";
				break;
			case "dealPipeline":
				template = tool.dealPipelineGroupTemplate;
				controlName = tool.Api_OpportunityHandle_Group;
				var queryCondictionObj =
				{
					Field:"BusinessTypes",
					Type:"string",
					Format:"",
					Relation:"and",
					Value:"29",
					Comparison:"="
				};
				queryCondiction.push(queryCondictionObj);
				break;
			case "opportunities":
				template = tool.opportunitiesGroupTemplate;
				controlName = tool.Api_OpportunityHandle_Group;
				var queryCondictionObj =
				{
					Field:"BusinessTypes",
					Type:"string",
					Format:"",
					Relation:"and",
					Value:"30",
					Comparison:"="
				};
				queryCondiction.push(queryCondictionObj);
				break;
			case "organizations":
				template = tool.organizationsGroupTemplate;
				controlName = tool.Api_OrganizationsHandle_Group;
				break;
			case "contacts":
				template = tool.contactsGroupTemplate;
				controlName = tool.Api_ContactsHandle_Group;
				break;
		}

		console.log("common_InitiateGroupList");
		console.log(queryCondiction);

		//查询分组数据
		//请求地址
		var urlTemp = tool.AjaxBaseUrl();
		//传入参数
		var jsonDatasTemp = {
			CurrentLanguageVersion: lanTool.currentLanguageVersion,
			UserName: tool.UserName(),
			_ControlName: controlName,
			_RegisterCode: tool.RegisterCode(),
			QueryCondiction: JSON.stringify(queryCondiction)
		};
		var loadingIndexClassName = tool.showLoading();

		$.ajax({
			async: true,
			type: "post",
			url: urlTemp,
			data: jsonDatasTemp,
			success: function (data) {
				tool.hideLoading(loadingIndexClassName);
				data = tool.jObject(data);
				if (data._ReturnStatus == false) {
					tool.showText(tool.getMessage(data));
					console.log(tool.getMessage(data));
					return;
				}

				data = data._OnlyOneData.Rows || [];
				//无数据
				if (data.length <= 0) {
					if (!tool.isNullOrEmptyObject(myCallBack)) {
						myCallBack(containerObj);
					}
					return;
				}

				//渲染组数据
				for (var i = 0; i < data.length; i++) {
					var tempStr = template;
					for (var key in data[i]) {

						// if(key == "GroupRowCount"){
						// 	console.log(data[i][key] || "");
						// }

						tempStr = tempStr.replace("{" + key + "}", data[i][key]);
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
				tool.hideLoading(loadingIndexClassName);
				return;
			},
			complete: function () {
				//tool.hideLoading();
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
	tool.InitiateInnerDataList = function (fromType, groupID, containerObj,queryCondiction, myCallBack) {
		// console.log(fromType);
		// console.log(groupID);
		// console.log(containerObj);
		// console.log("common_InitiateInnerDataList");
		console.log(queryCondiction);

		if (tool.isNullOrEmptyObject(fromType) || tool.isNullOrEmptyObject(groupID) || tool.isNullOrEmptyObject(containerObj)) {
			return;
		}

		var parentContainerObj = containerObj.parents("div.group-div:first");
		// console.log(parentContainerObj);
		if (tool.isNullOrEmptyObject(parentContainerObj)) {
			return;
		}
		//清空容器内容
		parentContainerObj.find("div.group-item-list").remove();

		var outerTemplate = "";
		var innerTemplate = "";
		var controlName = "";
		var contentHtmlStr = "";
		switch (fromType) {
      case "meeting":
		//controlName = tool.Api_MeetingHandle_GroupInnerData;
		controlName = tool.Api_MeetingHandle_GroupInnerData;
        outerTemplate = `
        <div class="group-item-list meeting-list">
        {InnerList}
        </div>`;
        innerTemplate = `<div class="data-events-item f14" data-url="/meetinginfo/{AutoID}" >
                            <div class="item-title">{MeetingTitle}</div>
                            <div class="item-time f12">
                              <span class="calcfont calc-gengxinshijian"></span>
                              <span class="time-text">{BeginTime}~{EndTime}</span>
                              <span class="right-text">{Realname}</span>
                            </div>
                            <div class="item-address">{CompanyID}</div>
                            <div class="item-initiator">{ContactsID}{Title}</div>
                        </div>`;
				break;
		case "trip":
		// controlName = tool.Api_TripHandle_GroupInnerData;
		controlName = "";
        outerTemplate = `
        <div class="group-item-list trip-list">
        {InnerList}
        </div>`;
        innerTemplate = `<div class=" data-events-item f12" data-url="/tripinfo/12">
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
                        </div>`;
				break;
		case "dealPipeline":
		// controlName = tool.Api_DealpipelineHandle_GroupInnerData;
		controlName = tool.Api_OpportunityHandle_GroupInnerData;
		var queryCondictionObj =
		{
			Field:"BusinessTypes",
			Type:"string",
			Format:"",
			Relation:"and",
			Value:"29",
			Comparison:"="
		};
		queryCondiction.push(queryCondictionObj);
        outerTemplate = `
        <div class="group-item-list dealPipeline-list">
        {InnerList}
        </div>`;
        innerTemplate = `<div class=" group-item f14" data-url="/opportunitiesinfo/{AutoID}">
                            <div class="item-stars-icon calcfont {IsFollow}" data-autoid={AutoID}></div>
                            <div class="item-block">
                                <div class="item-div item-first-div blue-color">
                                {TheName}
                                </div>
                                <div class="item-div line-clamp2">{Memo}</div>
                                <div class="item-div f12 green-color padding-bottom-3 padding-top-3">
                                  <span class="{className}">{CurrentState}</span>
                                </div>
                                {MeetingInfo}
                            </div>
                        </div>`;
				break;
		case "opportunities":
		// controlName = tool.Api_OpportunitiesHandle_GroupInnerData;
		controlName = tool.Api_OpportunityHandle_GroupInnerData;
		var queryCondictionObj =
		{
			Field:"BusinessTypes",
			Type:"string",
			Format:"",
			Relation:"and",
			Value:"30",
			Comparison:"="
		};
		queryCondiction.push(queryCondictionObj);
        outerTemplate = `
        <div class="group-item-list opportunities-list">
        {InnerList}
        </div>`;
        innerTemplate = `<div class=" group-item f14" data-url="/opportunitiesinfo/{AutoID}">
                            <div class="item-stars-icon calcfont {IsFollow}" data-autoid={AutoID}></div>
                            <div class="item-block">
                                <div class="item-div item-first-div blue-color">
                                {TheName}
                                </div>
                                <div class="item-div f12 green-color padding-bottom-3 padding-top-3">
                                  <span class="{className}">{CurrentState}</span>
                                </div>
                                <div class="item-div line-clamp2">{Memo}</div>
                                {MeetingInfo}
                            </div>
                        </div>`;
				break;
		case "organizations":
			controlName = tool.Api_OrganizationsHandle_GroupInnerData;
			outerTemplate = `
			<div class="group-item-list organizations-list">
			{InnerList}
			</div>`;
			innerTemplate = `<div class="group-item" data-url="/organizationsinfo/{AutoID}">
						<div class="item-stars-icon calcfont {IsFollow}" data-autoid={AutoID}></div>
						<div class="item-block f14">
						<div class="item-div item-first-div">
							<span class="left-text">{ShortName}</span>
							<span class="right-text right">{ICAOCode}</span>
						</div>
						<div class="item-div">
							<span class="left-text">{BusinessType}</span>
							<span class="right-text right">{AccountManager}</span>
						</div>
						<div class="item-div">
							<span class="left-text">{CountryName}</span>
							<span class="right-text right">{CityName}</span>
						</div>
						</div>
					</div>`;
			break;
      case "contacts":
        controlName = tool.Api_ContactsHandle_GroupInnerData;
		outerTemplate = `
        <div class="group-item-list contacts-list" >
        {InnerList}
        </div>`;
        innerTemplate = `<div class="group-item f14" data-url="/contactsinfo/{AutoID}">
                            <div class="item-user-icon calcfont calc-fuzeren1" data-autoid={AutoID}></div>
                            <div class="item-block contacts-item-block">
                                <div class="item-div item-first-div">{EnglishName}</div>
                                <div class="item-div">{Title}</div>
                                <div class="item-div"><span class="left-text max60">{CompanyID}</span><span class="right-text max35">{CountryName}</span></div>
                                <div class="item-div">
                                  <span class="left-text">{Email}</span><span class="right-text">{TelPhone}</span>
                                </div>
                                <div class="item-div">{BusinessType},{DepartmentName}</div>
                            </div>
                        </div>`;
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
			QueryCondiction: JSON.stringify(queryCondiction)
		};
		var loadingIndexClassName = tool.showLoading();
		$.ajax({
			async: true,
			type: "post",
			url: urlTemp,
			data: jsonDatasTemp,
			success: function (data) {
				data = tool.jObject(data);
				// console.log(data);
				tool.hideLoading(loadingIndexClassName);
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

						if(fromType == "meeting"){
						var valTemp = tool.FormatMeetingFieldVal(key,data[i][key]);
						tempStr = tempStr.ReplaceAll("{" + key + "}", (valTemp || ""));

						}else{

							tempStr = tempStr.ReplaceAll("{" + key + "}", (data[i][key] || ""));
						}
					}

					//若是dealPipeline
					if(fromType == "dealPipeline" || fromType == "opportunities"){
              var className = '';
              if(data[i].CurrentState == lanTool.lanContent("955_已关闭")){
                  className = 'closed'
              }
              tempStr = tempStr.ReplaceAll("{className}",className);
						  tempStr = tool.FormatOppMeetingFieldValHtml(data[i],tempStr);
					}

					contentHtmlStr += tempStr;
				}
				outerTemplate = outerTemplate.replace("{InnerList}", contentHtmlStr);

				//追加数据
				parentContainerObj.append(outerTemplate);
				if (!tool.isNullOrEmptyObject(myCallBack)) {
					myCallBack(containerObj);
				}

				return;
			},
			error: function (jqXHR, type, error) {
				console.log(error);
				tool.hideLoading(loadingIndexClassName);
				return;
			},
			complete: function () {
				//tool.hideLoading();
				//隐藏虚拟键盘
				document.activeElement.blur();
			}
		});
  };

  //获取会议记录字段值
  tool.FormatMeetingFieldVal = function(fieldName,fieldVal){
    if(tool.isNull(fieldName) || tool.isNullOrEmptyObject(fieldVal)){
        return"";
    }

    if(fieldName == "BeginTime" || fieldName == "EndTime"){
      var format = "d/MMM/yyyy HH:mm";
      fieldVal = fieldVal.ReplaceAll("T", " ");
      fieldVal = tool.ChangeTimeFormat(fieldVal, format);
    }else if(fieldName == "ContactsID"){
      fieldVal = fieldVal + " ";
    }else if(fieldName == "Title"){
      fieldVal = "(" + fieldVal + ")";
    }
    else{
      return fieldVal || "";
    }

    return fieldVal;
  };

  // tool.OppMeetingInfoTemplate =
  // `<div class="item-div-box">
  //   <div class="item-new f12">
  //       <div class="item-new-text">new</div>
  //   </div>
  //   <div>
  //     <div class="item-div">
  //       <span class="itme-div-span">{MeetingTitle}</span>
  //     </div>
  //     <div class="item-div dete-div padding-top-3 f12">
  //       <span>{BeginTime}</span>
  //     </div>
  //   </div>
  // </div>`;

  tool.OppMeetingInfoTemplate =
  `<div class="item-div-box">
        <div class="item-new-text">{MeetingSysmbol}</div>

    <div class="new-right">
      <div class="item-div">
        <span class="itme-div-span">{MeetingTitle}</span>
      </div>
      <div class="item-div dete-div f12">
        <span>{BeginTime}</span>
      </div>
    </div>
  </div>`;
  //获取销售机会会议记录字段值
  tool.FormatOppMeetingFieldValHtml = function(data,tempStr){
			// <div class=" group-item f14" data-url="/opportunitiesinfo/{AutoID}">
			// <div class="item-stars-icon calcfont calc-shoucang"></div>
			// <div class="item-block">
			// 	<div class="item-div item-first-div blue-color">
			// 	{TheName}
			// 	</div>
			// 	<div class="item-div padding-top-5">{Memo}</div>
			// 	<div class="item-div blue-color padding-bottom-5">
			// 		<span>{CurrentState}</span>
			// 	</div>
			// 	{MeetingInfo}
			// </div>
			// </div>

		if(tool.isNullOrEmptyObject(data) || tool.isNullOrEmptyObject(tempStr)){
			return tempStr;
		}

		var templateTemp = tool.OppMeetingInfoTemplate;
		var isMeetingExist = data["IsMeetingExist"] || "false";

		if(isMeetingExist.toLowerCase()=="false"){
			tempStr = tempStr.ReplaceAll("{MeetingInfo}","");
			return tempStr;
		}

    var meetingTitle = data["MeetingTitle"]||"";

		var beginTime = data["BeginTime"]||"";
		var format = "d/MMM/yyyy HH:mm";
		beginTime = beginTime.ReplaceAll("T", " ");
    beginTime = tool.ChangeTimeFormat(beginTime, format);

    var meetingSysmbol = lanTool.lanContent("1000001_最新的会议") || "new";

		templateTemp = templateTemp.ReplaceAll("{MeetingTitle}",meetingTitle);
    templateTemp = templateTemp.ReplaceAll("{BeginTime}",beginTime);
    templateTemp = templateTemp.ReplaceAll("{MeetingSysmbol}",meetingSysmbol);

		tempStr = tempStr.ReplaceAll("{MeetingInfo}",templateTemp);
		return tempStr;
  };

	/*
	* 清空控件数据
	*/
	tool.ClearControlData = function (myCallBack) {
		$("[data-fieldControlType='textareaInput']").val("");
		$("[data-fieldControlType='picker']").val("").attr("data-fieldVal", "").trigger('change');
		$("[data-fieldControlType='dateTimePicker']").val("").trigger('change');
		$("[data-fieldControlType='selectList']").text("").attr("data-fieldVal", "");
		$("[data-fieldControlType='groupSelectList']").text("").attr("data-fieldVal", "");
		$("[data-fieldControlType='linkSelectList']").text("").attr("data-fieldVal", "");
		$("[data-fieldControlType='linkedPage']").text("").attr("data-fieldVal", "");
		$("[data-fieldControlType='divText']").text("");
		$("[data-fieldControlType='icon']").each(function(index,curObj){
			var _curObj = $(this);
			if (tool.isNullOrEmptyObject(_curObj)) {
				return true;
			}
			//icon类型对象
			var dataValObj = _curObj.attr("data-fieldVal") || "{}";
			dataValObj = tool.jObject(dataValObj);

			//获取应该显示的icon
			var fieldVal = _curObj.attr["data-defaultVal"] || "";
			fieldVal = fieldVal.toLowerCase();
			var iconClass = dataValObj[fieldVal] || "";
			if (tool.isNullOrEmptyObject(iconClass)) {
				return true;
			}

			//移除其他class
			for (var key in dataValObj) {
				if (key == fieldVal) {
					continue;
				}

				var classNameTemp = dataValObj[key] || "";
				_curObj.removeClass(classNameTemp);
			}

			//添加class
			_curObj.addClass(iconClass);
		});
		if (!tool.isNullOrEmptyObject(myCallBack)) {
			myCallBack();
		}
	};
	/*
	*渲染控件
	*/
	tool.InitiateInfoPageControl = function (self,id,myCallBack) {
		// console.log("id:"+id);
		// console.log("InitiateInfoPageControl");
		//1>渲染picker
		$("[data-fieldControlType='picker']").each(function (index, obj) {
			var _curObj = $(this);
			// console.log(_curObj);
			var fromId = _curObj.attr("data-field") || "";
			if (tool.isNullOrEmptyObject(fromId)) {
				return true;
			}

			var urlTemp = tool.AjaxBaseUrl();
			var controlName = tool.CommonDataServiceHandle_Query;
			var code = _curObj.attr("Code") || "";
			var typeValue = _curObj.attr("TypeValue") || "";

			if (tool.isNullOrEmptyObject(code)) {
				return true;
			}

			//传入参数
			var jsonDatasTemp = {
				CurrentLanguageVersion: lanTool.currentLanguageVersion,
				UserName: tool.UserName(),
				_ControlName: controlName,
				_RegisterCode: tool.RegisterCode(),
				Code: code,
				TypeValue: typeValue
			};
			var loadingIndexClassName = tool.showLoading();
			// console.log(loadingIndexClassName);
			$.ajax({
				async: true,
				type: "post",
				url: urlTemp,
				data: jsonDatasTemp,
				success: function (data) {
					tool.hideLoading(loadingIndexClassName);
					//console.log(JSON.stringify(data));
					data = tool.jObject(data);
					//console.log(data);
					if (data._ReturnStatus == false) {
						tool.showText(tool.getMessage(data));
						console.log(tool.getMessage(data));
						return true;
					}

					data = data._OnlyOneData || [];
					//var pickervalues = [];
					var pickerDisplays = [];
					for (var i = 0; i < data.length; i++) {
						if (tool.isNullOrEmptyObject(data[i])) {
							continue;
						}
						//pickervalues.push(data[i]["id"]);
						pickerDisplays.push(data[i]["text"]);
					}

					setTimeout(() => {
						//写入标题
						var titleVal = lanTool.lanContent(_curObj.attr("data-lanid") ||"");

						//渲染下拉数据
						_curObj.picker({
							sourceDataObj: data,
							fromId: fromId,
							jqueryObj: _curObj,
							title: titleVal,//标题
							toolbarCloseText: lanTool.lanContent('569_确认'),//确认
							toolbarCancleText: lanTool.lanContent('570_取消'),//取消
							cols: [
								{
									textAlign: 'center',
									//values: pickervalues,
									//displayValues:pickerDisplays
									values: pickerDisplays
								},
							],
							onOpen: function (data) {
								// console.log("picker:"+data);
								//收起键盘
								document.activeElement.blur();
								//var valueTemp = _curObj.attr("data-fieldval") ||"";
								var displayTemp = _curObj.val() || "";
								//console.log("displayTemp:"+displayTemp);
								_curObj.picker("setValue", [displayTemp]);
							},
							onChange: function (data, valueTemp, displayTemp) {
								//console.log(data);
								//console.log("valueTemp:"+valueTemp);
								//console.log("displayTemp:"+displayTemp);

								// _curObj.val(displayTemp);
								// _curObj.attr('data-fieldVal', valueTemp);
								// _curObj.picker("setValue", displayTemp);

								var valueTemp = "";
								var displayTemp = data.displayValue[0] || "";
								for (var i = 0; i < data.params.sourceDataObj.length; i++) {
									if (displayTemp == data.params.sourceDataObj[i]["text"]) {
										valueTemp = data.params.sourceDataObj[i]["id"];
										break;
									}
								}

								_curObj.val(displayTemp);
								_curObj.attr('data-fieldVal', valueTemp);
							}
						});

					}, 100);

				},
				error: function (jqXHR, type, error) {
					console.log(error);
					tool.hideLoading(loadingIndexClassName);
					return true;
				},
				complete: function () {
					//tool.hideLoading();
					//隐藏虚拟键盘
					document.activeElement.blur();
				}
			});

		});

		//2>渲染selectList
		//2-1>同一行的selectList
		$("[data-fieldControlType='selectList']").attr("readonly","readonly").off('click').on('click',function(){
			var _curObj = $(this);
			if(typeof(_curObj.attr("data-clickObj")) != "undefined"){
				return;
			}
			// console.log(_curObj);
			var dataField = _curObj.attr("data-field") ||"";
			var code = _curObj.attr("Code") ||"";
			var filter = _curObj.attr("Filter") ||"";
			var typeValue = _curObj.attr("TypeValue") ||"";
			var value = _curObj.attr("data-fieldVal") ||"";
			var selectType = _curObj.attr("data-selectType") ||"";
			var title = lanTool.lanContent(_curObj.attr("data-lanid") ||"");

			var parameter = {
				'field':dataField,
				'code':code,
				"typeValue":typeValue,
				'title':title,
				'value':value,//已经选择的值
				'selectType':selectType,
				"filter":filter
			};
			self.$router.push({
				path: '/selectlist',
				query: parameter
			});
		});
		//2-2>不同一行的selectList
		//console.log($("#"+$("[data-fieldControlType='selectList'][data-clickObj]").attr("data-clickObj")).length);
		$("#"+$("[data-fieldControlType='selectList'][data-clickObj]").attr("data-clickObj")).off('click').on('click',function(){
			//查找子类
			var _curObjTextdataFieldName = ($(this).attr('id') || "").ReplaceAll("ClickObj","");
			var _curObj = $("[data-field='"+ _curObjTextdataFieldName +"']:first");
			if(tool.isNullOrEmptyObject(_curObj)){
				return;
			}
			// console.log(_curObj);

			var dataField = _curObj.attr("data-field") ||"";
			var code = _curObj.attr("Code") ||"";
			var filter = _curObj.attr("Filter") ||"";
			var typeValue = _curObj.attr("TypeValue") ||"";
			var value = _curObj.attr("data-fieldVal") ||"";
			var selectType = _curObj.attr("data-selectType") ||"";
			var title = lanTool.lanContent(_curObj.attr("data-lanid") ||"");

			var parameter = {
				'field':dataField,
				'code':code,
				"typeValue":typeValue,
				'title':title,
				'value':value,//已经选择的值
				'selectType':selectType,
				"filter":filter
			};
			self.$router.push({
				path: '/selectlist',
				query: parameter
			});
		});

		//3>渲染textarea
		// $("textarea").each(function (index, cur) {
		// 	tool.autoTextarea(cur);
		// });

		//4>渲染groupSelectList
		//4-1>同一行的groupSelectList
		$("[data-fieldControlType='groupSelectList']").attr("readonly","readonly").off('click').on('click',function(){
			var _curObj = $(this);
			if(typeof(_curObj.attr("data-clickObj")) != "undefined"){
				return;
			}
			// console.log(_curObj);
			var dataField = _curObj.attr("data-field") ||"";
			var code = _curObj.attr("Code") ||"";
			var filter = _curObj.attr("Filter") ||"";
			var typeValue = _curObj.attr("TypeValue") ||"";
			var value = _curObj.attr("data-fieldVal") ||"";
			var selectType = _curObj.attr("data-selectType") ||"";
			var title = lanTool.lanContent(_curObj.attr("data-lanid") ||"");
			var fromType = _curObj.attr("data-fromType") ||"";

			console.log("fromType:"+fromType);

			var parameter = {
				'field':dataField,
				'code':code,
				"typeValue":typeValue,
				'title':title,
				'value':value,//已经选择的值
				'selectType':selectType,
				'fromType':fromType,
				'fromID':id,
				"filter":filter
			};
			self.$router.push({
				path: '/groupselectlist',
				query: parameter
			});
		});
		//4-2>不同一行的groupSelectList
		$("#"+$("[data-fieldControlType='groupSelectList'][data-clickObj]").attr("data-clickObj")).off('click').on('click',function(){
			//查找子类
			var _curObjTextdataFieldName = ($(this).attr('id') || "").ReplaceAll("ClickObj","");
			var _curObj = $("[data-field='"+ _curObjTextdataFieldName +"']:first");
			if(tool.isNullOrEmptyObject(_curObj)){
				return;
			}
			// console.log(_curObj);

			var dataField = _curObj.attr("data-field") ||"";
			var code = _curObj.attr("Code") ||"";
			var filter = _curObj.attr("Filter") ||"";
			var typeValue = _curObj.attr("TypeValue") ||"";
			var value = _curObj.attr("data-fieldVal") ||"";
			var selectType = _curObj.attr("data-selectType") ||"";
			var title = lanTool.lanContent(_curObj.attr("data-lanid") ||"");
			var fromType = _curObj.attr("data-fromType") ||"";

			var parameter = {
				'field':dataField,
				'code':code,
				"typeValue":typeValue,
				'title':title,
				'value':value,//已经选择的值
				'selectType':selectType,
				'fromType':fromType,
				'fromID':id,
				"filter":filter
			};
			self.$router.push({
				path: '/groupselectlist',
				query: parameter
			});
		});

		//5>渲染linkedPage
		//5-1>同一行的linkedPage
		$("[data-fieldControlType='linkedPage']").attr("readonly","readonly").off('click').on('click',function(){
			var _curObj = $(this);
			if(typeof(_curObj.attr("data-clickObj")) != "undefined"){
				return;
			}
			console.log(_curObj);
			var dataField = _curObj.attr("data-field") ||"";
			var code = _curObj.attr("Code") ||"";
			var filter = _curObj.attr("Filter") ||"";
			var typeValue = _curObj.attr("TypeValue") ||"";
			var value = _curObj.attr("data-fieldVal") ||"";
			var selectType = _curObj.attr("data-selectType") ||"";
			var title = lanTool.lanContent(_curObj.attr("data-lanid") ||"");

			var parameter = {
				'field':dataField,
				'code':code,
				"typeValue":typeValue,
				'title':title,
				'value':value,//已经选择的值
				'selectType':selectType,
				"filter":filter
			};
			self.$router.push({
				path: '/linkedpage',
				query: parameter
			});
		});
		//5-2>不同一行的linkedPage
		//console.log($("#"+$("[data-fieldControlType='linkedPage'][data-clickObj]").attr("data-clickObj")).length);
		$("#"+$("[data-fieldControlType='linkedPage'][data-clickObj]").attr("data-clickObj")).off('click').on('click',function(){
			//查找子类
			var _curObjTextdataFieldName = ($(this).attr('id') || "").ReplaceAll("ClickObj","");
			// console.log(_curObjTextdataFieldName);
			var _curObj = $("[data-field='"+ _curObjTextdataFieldName +"']:first");
			if(tool.isNullOrEmptyObject(_curObj)){
				return;
			}
			// console.log(_curObj);

			var dataField = _curObj.attr("data-field") ||"";
			var code = _curObj.attr("Code") ||"";
			var filter = _curObj.attr("Filter") ||"";
			var typeValue = _curObj.attr("TypeValue") ||"";
			var value = _curObj.attr("data-fieldVal") ||"";
			var selectType = _curObj.attr("data-selectType") ||"";
			var title = lanTool.lanContent(_curObj.attr("data-lanid") ||"");

			var parameter = {
				'field':dataField,
				'code':code,
				"typeValue":typeValue,
				'title':title,
				'value':value,//已经选择的值
				'selectType':selectType,
				"filter":filter
			};
			// console.log(parameter);
			self.$router.push({
				path: '/linkedpage',
				query: parameter
			});
		});

		//6>渲染dateTimePicker
		$("[data-fieldControlType='dateTimePicker']").each(function (index, obj) {
			var _curObj = $(this);
			// console.log(_curObj);
			var fromId = _curObj.attr("data-field") || "";
			if (tool.isNullOrEmptyObject(fromId)) {
				return true;
			}
			var titleVal = lanTool.lanContent(_curObj.attr("data-lanid") ||"");
			var timeType = _curObj.attr("data-TimeType") ||"date";

			//配置年数据
			var yearConfigArr = [];
			//默认前后50年可选
			var unitYear = 50;
			var currentYear = new Date().getFullYear();
			var starIndex = currentYear - unitYear;
			var endIndex = currentYear + unitYear;
			for(var i = starIndex;i <= endIndex;i++){
				yearConfigArr.push(i);
			}

			//若是时间类型，则需要配置时间
			var timeConfigArr = function () {
				return [];
			};
			if(timeType == "dateTime"){
				timeConfigArr = function(){
					return [  // 自定义的时间
						{
							values: (function () {
								var hours = [];
								for (var i = 0; i < 24; i++) {
									hours.push(initial.formatNumber(i));
								}
								return hours;
							})()
						},
						{
							divider: true, //分隔符
							content: ':'
						},
						{
							values: (function () {
								//var minutes = [];
                //for (var i = 0; i < 60; i++) minutes.push(initial.formatNumber(i));
                var minutes = ['00','15','30','45'];
								return minutes;
							})()
						}
					];
				};
			}
			self.$nextTick(function(){
				_curObj.datetimePicker({
					fromId: fromId,
					jqueryObj: _curObj,
					title: titleVal,//标题
					toolbarCloseText: lanTool.lanContent('569_确认'),//确认
					toolbarCancleText: lanTool.lanContent('570_取消'),//取消
					times:timeConfigArr,//HH:mm
					years:yearConfigArr,//年
					onOpen: function (pickerTemp,val1,val2) {
						//隐藏虚拟键盘
				         document.activeElement.blur();
						if(tool.isNullOrEmptyObject(pickerTemp) || tool.isNullOrEmptyObject(pickerTemp.value) || pickerTemp.value.length<=0){
							return;
						}
						var valNew = "";
						if(pickerTemp.value.length == 5){
							valNew = pickerTemp.value[0] + "-" + pickerTemp.value[1] + "-" + pickerTemp.value[2] + " " + pickerTemp.value[3] + ":" +  pickerTemp.value[4];
						}else{
							valNew = pickerTemp.value[0] + "-" + pickerTemp.value[1] + "-" + pickerTemp.value[2];
						}
						_curObj.val(valNew);
					},
				});
			});

		});

		//7>渲染hideDivText
		$("[data-fieldControlType='hideDivText']").each(function (index, obj) {
			var _curObj = $(this);
			_curObj.hide();
		});

		//执行回调函数
		if (!tool.isNullOrEmptyObject(myCallBack)) {
			myCallBack();
		}
	};

	/*
	* 渲染数据
	*/
	tool.IniInfoData = function (fromType, autoID, myCallBack) {
		// console.log(fromType);
		// console.log(autoID);

		if (tool.isNullOrEmptyObject(fromType) || tool.isNullOrEmptyObject(autoID)) {
			return;
		}
		//新增的情况下id=-1
		if (Number(autoID) <= 0) {
			return;
		}

		var urlTemp = tool.AjaxBaseUrl();
		var controlName = "";
		if (fromType == "Organizationsinfo") {
			controlName = tool.Api_OrganizationsHandle_QuerySingle;
		} else if (fromType == "Contactsinfo") {
			controlName = tool.Api_ContactsHandle_QuerySingle;
		} else if (fromType == "Meetinginfo") {
			controlName = tool.Api_MeetingHandle_QuerySingle;
		} else if (fromType == "Tripinfo") {
			controlName = "";
		} else if (fromType == "MeetingNoteinfo") {
			controlName = tool.Api_MeetingNoticeHandle_QuerySingle;
		} else if (fromType == "Opportunitiesinfo") {
			controlName = tool.Api_OpportunityHandle_QuerySingle;
		} else {
			return;
		}
		//console.log("controlName:"+controlName);

		//传入参数
		var jsonDatasTemp = {
			CurrentLanguageVersion: lanTool.currentLanguageVersion,
			UserName: tool.UserName(),
			_ControlName: controlName,
			_RegisterCode: tool.RegisterCode(),
			AutoID: autoID
		};
		var loadingIndexClassName = tool.showLoading();
		// console.log(loadingIndexClassName);
		$.ajax({
			async: true,
			type: "post",
			url: urlTemp,
			data: jsonDatasTemp,
			success: function (data) {
				data = tool.jObject(data);
				// console.log(data);
				if (data._ReturnStatus == false) {
					tool.hideLoading(loadingIndexClassName);
					tool.showText(tool.getMessage(data));
					console.log(tool.getMessage(data));
					return true;
				}

				data = data._OnlyOneData || [];

				try {
					//控件赋值操作
					//1>picker
					$("[data-fieldControlType='picker']").each(function (index, obj) {
						var _curObj = $(this);
						if (tool.isNullOrEmptyObject(_curObj)) {
							return true;
						}
						var dataField = _curObj.attr("data-field") || "";
						if (tool.isNullOrEmptyObject(dataField)) {
							return true;
						}

						var fieldVal = data[dataField] || "";
						var fieldDisplay = data[dataField + "_Name"] || "";

						_curObj.val(fieldDisplay);
						_curObj.attr("data-fieldVal", fieldVal);
						_curObj.trigger('change');
					});
					//2>selectList
					$("[data-fieldControlType='selectList']").each(function (index, obj) {
						var _curObj = $(this);
						if (tool.isNullOrEmptyObject(_curObj)) {
							return true;
						}
						var dataField = _curObj.attr("data-field") || "";
						if (tool.isNullOrEmptyObject(dataField)) {
							return true;
						}

						var fieldVal = data[dataField] || "";
						var fieldDisplay = data[dataField + "_Name"] || "";

						_curObj.text(fieldDisplay);
						_curObj.attr("data-fieldVal", fieldVal);
					});
					//3>groupSelectList
					$("[data-fieldControlType='groupSelectList']").each(function (index, obj) {
						var _curObj = $(this);
						if (tool.isNullOrEmptyObject(_curObj)) {
							return true;
						}
						var dataField = _curObj.attr("data-field") || "";
						if (tool.isNullOrEmptyObject(dataField)) {
							return true;
						}

						var fieldVal = data[dataField] || "";
						var fieldDisplay = data[dataField + "_Name"] || "";

						_curObj.text(fieldDisplay);
						_curObj.attr("data-fieldVal", fieldVal);
					});
					//4>linkSelectList
					$("[data-fieldControlType='linkSelectList']").each(function (index, obj) {
						var _curObj = $(this);
						if (tool.isNullOrEmptyObject(_curObj)) {
							return true;
						}
						var dataField = _curObj.attr("data-field") || "";
						if (tool.isNullOrEmptyObject(dataField)) {
							return true;
						}

						var fieldVal = data[dataField] || "";
						var fieldDisplay = data[dataField + "_Name"] || "";

						_curObj.text(fieldDisplay);
						_curObj.attr("data-fieldVal", fieldVal);
					});
					//5>linkedPage
					$("[data-fieldControlType='linkedPage']").each(function (index, obj) {
						var _curObj = $(this);
						if (tool.isNullOrEmptyObject(_curObj)) {
							return true;
						}
						var dataField = _curObj.attr("data-field") || "";
						if (tool.isNullOrEmptyObject(dataField)) {
							return true;
						}

						var fieldVal = data[dataField] || "";
						var fieldDisplay = data[dataField + "_Name"] || "";

						_curObj.text(fieldDisplay);
						_curObj.attr("data-fieldVal", fieldVal);
					});
					//6>textareaInput
					$("[data-fieldControlType='textareaInput']").each(function (index, obj) {
						var _curObj = $(this);
						if (tool.isNullOrEmptyObject(_curObj)) {
							return true;
						}
						var dataField = _curObj.attr("data-field") || "";
						if (tool.isNullOrEmptyObject(dataField)) {
							return true;
						}
						var fieldVal = data[dataField] || "";
						_curObj.val(fieldVal);
					});
					//7>divText
					$("[data-fieldControlType='divText']").each(function (index, obj) {
						var _curObj = $(this);
						if (tool.isNullOrEmptyObject(_curObj)) {
							return true;
						}
						var dataField = _curObj.attr("data-field") || "";
						if (tool.isNullOrEmptyObject(dataField)) {
							return true;
						}

						var fieldVal = data[dataField] || "";

						//数据格式化
						var formatType = _curObj.attr("data-formatType") || "";
						var format = _curObj.attr("data-format") || "";
						// console.log("formatType");
						if(!tool.isNullOrEmptyObject(format) && !tool.isNullOrEmptyObject(fieldVal)){
							//时间格式化
							if(formatType.toLowerCase() == "datetime" || formatType.toLowerCase() == "date"){
								fieldVal = fieldVal.ReplaceAll("T"," ");
								fieldVal = tool.ChangeTimeFormat(fieldVal,format);
							}else{
								//数字格式化
							}
						}

						_curObj.text(fieldVal);
					});
					//8>icon
					$("[data-fieldControlType='icon']").each(function (index, obj) {
						var _curObj = $(this);
						if (tool.isNullOrEmptyObject(_curObj)) {
							return true;
						}
						var dataField = _curObj.attr("data-field") || "";
						if (tool.isNullOrEmptyObject(dataField)) {
							return true;
						}
						//icon对象
						var dataValObj = _curObj.attr("data-fieldVal") || "{}";
						dataValObj = tool.jObject(dataValObj);

						//获取应该显示的icon
						var fieldVal = data[dataField] || "";
						fieldVal = fieldVal.toLowerCase();
						var iconClass = dataValObj[fieldVal] || "";
						if (tool.isNullOrEmptyObject(iconClass)) {
							return true;
						}

						//移除其他class
						for (var key in dataValObj) {
							if (key == fieldVal) {
								continue;
							}

							var classNameTemp = dataValObj[key] || "";
							_curObj.removeClass(classNameTemp);
						}
						//添加class
						_curObj.addClass(iconClass);

					});
					//9>dateTimePicker
					$("[data-fieldControlType='dateTimePicker']").each(function (index, obj) {
						var _curObj = $(this);
						if (tool.isNullOrEmptyObject(_curObj)) {
							return true;
						}
						var dataField = _curObj.attr("data-field") || "";
						if (tool.isNullOrEmptyObject(dataField)) {
							return true;
						}

						var fieldVal = data[dataField] || "";
						var format = _curObj.attr("data-format") || "";
						if(!tool.isNullOrEmptyObject(format) && !tool.isNullOrEmptyObject(fieldVal)){
							fieldVal = fieldVal.ReplaceAll("T"," ");
							fieldVal = tool.ChangeTimeFormat(fieldVal,format);
						}

						_curObj.val(fieldVal);
						_curObj.trigger('change');
					});
					if (!tool.isNullOrEmptyObject(myCallBack)) {
						myCallBack(data);
					}
				} catch (err) {
					console.log(err);
				} finally {
					tool.hideLoading(loadingIndexClassName);
				}
			},
			error: function (jqXHR, type, error) {
				console.log(error);
				tool.hideLoading(loadingIndexClassName);
				return true;
			},
			complete: function () {
				//tool.hideLoading();
				//隐藏虚拟键盘
				document.activeElement.blur();
			}
		});
	};

	/*
	* 保存/修改详情页数据
	*/
	tool.SaveOrUpdateData = function (fromType, autoID, _self,myCallBack,isGoBack) {
		// console.log("fromType:" + fromType);
		// console.log("autoID:" + autoID);

		if (tool.isNullOrEmptyObject(fromType) || tool.isNullOrEmptyObject(autoID)) {
			return;
		}
		//新增的情况下id=-1
		if (Number(autoID) <= 0) {
			autoID = "";
		}

		var urlTemp = tool.AjaxBaseUrl();
		var controlName = "";
		if (fromType == "Organizationsinfo") {
			controlName = tool.Api_OrganizationsHandle_SaveOrUpdate;
		} else if (fromType == "Contactsinfo") {
			controlName = tool.Api_ContactsHandle_SaveOrUpdate;
		} else if (fromType == "Meetinginfo") {
			controlName = tool.Api_MeetingHandle_SaveOrUpdate;
		} else if (fromType == "Tripinfo") {
			controlName = "";
		} else if (fromType == "MeetingNoteinfo") {
			controlName = tool.Api_MeetingNoticeHandle_SaveOrUpdate;
		} else if (fromType == "Opportunitiesinfo") {
			controlName = tool.Api_OpportunityHandle_SaveOrUpdate;
		} else {
			return;
		}
		// console.log("controlName:" + controlName);

		//获取控件字段值
		var jObject = {};
		//1>picker
		$("[data-fieldControlType='picker']").each(function (index, obj) {
			var _curObj = $(this);
			if (tool.isNullOrEmptyObject(_curObj)) {
				return true;
			}
			var dataField = _curObj.attr("data-field") || "";
			if (tool.isNullOrEmptyObject(dataField)) {
				return true;
			}

			var fieldVal = _curObj.attr("data-fieldVal") || "";
			jObject[dataField] = fieldVal;
		});
		//2>selectList
		$("[data-fieldControlType='selectList']").each(function (index, obj){
			var _curObj = $(this);
			if (tool.isNullOrEmptyObject(_curObj)) {
				return true;
			}
			var dataField = _curObj.attr("data-field") || "";
			if (tool.isNullOrEmptyObject(dataField)) {
				return true;
			}

			var fieldVal = _curObj.attr("data-fieldVal") || "";
			jObject[dataField] = fieldVal;
		});
		//3>groupSelectList
		$("[data-fieldControlType='groupSelectList']").each(function (index, obj){
			var _curObj = $(this);
			if (tool.isNullOrEmptyObject(_curObj)) {
				return true;
			}
			var dataField = _curObj.attr("data-field") || "";
			if (tool.isNullOrEmptyObject(dataField)) {
				return true;
			}

			var fieldVal = _curObj.attr("data-fieldVal") || "";
			jObject[dataField] = fieldVal;
		});
		//4>linkSelectList
		$("[data-fieldControlType='linkSelectList']").each(function (index, obj){
			var _curObj = $(this);
			if (tool.isNullOrEmptyObject(_curObj)) {
				return true;
			}
			var dataField = _curObj.attr("data-field") || "";
			if (tool.isNullOrEmptyObject(dataField)) {
				return true;
			}

			var fieldVal = _curObj.attr("data-fieldVal") || "";
			jObject[dataField] = fieldVal;
		});
		//5>linkedPage
		$("[data-fieldControlType='linkedPage']").each(function (index, obj){
			var _curObj = $(this);
			if (tool.isNullOrEmptyObject(_curObj)) {
				return true;
			}
			var dataField = _curObj.attr("data-field") || "";
			if (tool.isNullOrEmptyObject(dataField)) {
				return true;
			}

			var fieldVal = _curObj.attr("data-fieldVal") || "";
			jObject[dataField] = fieldVal;
		});
		//5>textareaInput
		$("[data-fieldControlType='textareaInput']").each(function (index, obj) {
			var _curObj = $(this);
			if (tool.isNullOrEmptyObject(_curObj)) {
				return true;
			}
			var dataField = _curObj.attr("data-field") || "";
			if (tool.isNullOrEmptyObject(dataField)) {
				return true;
			}
			var fieldVal = _curObj.val() || "";
			jObject[dataField] = fieldVal;
		});
		//6>dateTimePicker
		$("[data-fieldControlType='dateTimePicker']").each(function (index, obj) {
			var _curObj = $(this);
			if (tool.isNullOrEmptyObject(_curObj)) {
				return true;
			}
			var dataField = _curObj.attr("data-field") || "";
			if (tool.isNullOrEmptyObject(dataField)) {
				return true;
			}

			var fieldVal = _curObj.val() || "";
			jObject[dataField] = fieldVal;
		});
		//7>hideDivText
		$("[data-fieldControlType='hideDivText']").each(function (index, obj) {
			var _curObj = $(this);
			if (tool.isNullOrEmptyObject(_curObj)) {
				return true;
			}
			var dataField = _curObj.attr("data-field") || "";
			if (tool.isNullOrEmptyObject(dataField)) {
				return true;
			}
			var fieldVal = _curObj.text() || "";
			jObject[dataField] = fieldVal;
		});
		//传入参数
		var jsonDatasTemp = {
			CurrentLanguageVersion: lanTool.currentLanguageVersion,
			UserName: tool.UserName(),
			_ControlName: controlName,
			_RegisterCode: tool.RegisterCode(),
			AutoID: autoID
		};
		//合并数据
		jsonDatasTemp = tool.combineJObject(jsonDatasTemp,jObject);
		//console.log(jsonDatasTemp);
		//return;
		var loadingIndexClassName = tool.showLoading();
		$.ajax({
			async: true,
			type: "post",
			url: urlTemp,
			data: jsonDatasTemp,
			success: function (data) {
				tool.hideLoading(loadingIndexClassName);
				data = tool.jObject(data);
				// console.log(data);
				if (data._ReturnStatus == false) {
					tool.showText(tool.getMessage(data));
					console.log(tool.getMessage(data));
					return true;
				}
				//data = data._OnlyOneData || [];
				//保存成功后刷新当前页面
				var routeName = _self.$route.name;
				var routers = _self.$router.options.routes;
				var curRouter;
				//保存成功后跳转到列表页面
				for(var i = 0;i<routers.length;i++){
					if(routeName == routers[i].name){
						curRouter = routers[i];
						break;
					}
				}
				if(tool.isNullOrEmptyObject(curRouter)){
					return;
				}
				routeName = curRouter.meta.listName;
				for(var i = 0;i<routers.length;i++){
					if(routeName == routers[i].name){
						routers[i].meta.fromSave = true;
						break;
					}
				}
				if (!tool.isNullOrEmptyObject(myCallBack)) {
					myCallBack(data);
				}

				isGoBack = (isGoBack == undefined || isGoBack == null) ? true : isGoBack;

				//需要返回
				if(isGoBack){
					//返回到上一页
					_self.$router.back(-1);
				}
			},
			error: function (jqXHR, type, error) {
				tool.hideLoading(loadingIndexClassName);
				console.log(error);
				return true;
			},
			complete: function () {
				//tool.hideLoading();
				//隐藏虚拟键盘
				document.activeElement.blur();
			}
		});
	};

	/*
	* 删除数据
	*/
	tool.DeleteData = function(fromType, autoID, _self,myCallBack){
		// console.log("DeleteData");
		if (tool.isNullOrEmptyObject(fromType) || tool.isNullOrEmptyObject(autoID)) {
			return;
		}
		//新增的情况下id=-1
		if (Number(autoID) <= 0) {
			return;
		}

		var urlTemp = tool.AjaxBaseUrl();
		var controlName = "";
		if (fromType == "Organizationsinfo") {
			controlName = tool.Api_OrganizationsHandle_Delete;
		} else if (fromType == "Contactsinfo") {
			controlName = tool.Api_ContactsHandle_Delete;
		} else if (fromType == "Meetinginfo") {
			controlName = tool.Api_MeetingHandle_Delete;
		} else if (fromType == "Tripinfo") {
			controlName = "";
		} else if (fromType == "MeetingNoteinfo") {
			controlName = "";
		} else if (fromType == "Opportunitiesinfo") {
			controlName = tool.Api_OpportunityHandle_Delete;
		} else {
			return;
		}

		console.log(controlName);

		var idArr = [];
		idArr.push(autoID);

		//传入参数
		var jsonDatasTemp = {
			CurrentLanguageVersion: lanTool.currentLanguageVersion,
			UserName: tool.UserName(),
			_ControlName: controlName,
			_RegisterCode: tool.RegisterCode(),
			AutoID: JSON.stringify(idArr)
		};

		tool.showConfirm(
			lanTool.lanContent("593_您确定要删除数据吗？"),
			function() {
				var loadingIndexClassName = tool.showLoading();

				$.ajax({
					async: true,
					type: "post",
					url: urlTemp,
					data: jsonDatasTemp,
					success: function (data) {
						tool.hideLoading(loadingIndexClassName);
						data = tool.jObject(data);
						// console.log(data);
						if (data._ReturnStatus == false) {
							tool.showText(tool.getMessage(data));
							console.log(tool.getMessage(data));
							return true;
						}

						//data = data._OnlyOneData || [];
						//删除成功后跳转到列表页面
						var routeName = _self.$route.name;
						var routers = _self.$router.options.routes;
						var curRouter;
						for(var i = 0;i<routers.length;i++){
							if(routeName == routers[i].name){
								curRouter = routers[i];
								break;
							}
						}
						if(tool.isNullOrEmptyObject(curRouter)){
							return;
						}
						routeName = curRouter.meta.listName;
						for(var i = 0;i<routers.length;i++){
							if(routeName == routers[i].name){
								routers[i].meta.fromSave = true;
								break;
							}
						}
						if (!tool.isNullOrEmptyObject(myCallBack)) {
							myCallBack();
						}

						//返回到上一页
						_self.$router.back(-1);
					},
					error: function (jqXHR, type, error) {
						console.log(error);
						tool.hideLoading(loadingIndexClassName);
						return true;
					},
					complete: function () {
						//tool.hideLoading();
						//隐藏虚拟键盘
						document.activeElement.blur();
					}
				});

			},
			function() {}
		  );
	};

	/*
	* 添加/取消关注
	*/
	tool.UserFollow = function(fromType,autoID,actionType,myCallBack){
		console.log("fromType:" + fromType);
		console.log("autoID:" + autoID);
		console.log("actionType:" + actionType);

		if (tool.isNullOrEmptyObject(fromType) || tool.isNullOrEmptyObject(autoID) || tool.isNullOrEmptyObject(actionType)) {
			return;
		}

		var urlTemp = tool.AjaxBaseUrl();
		var controlName = "";
		if (fromType == "Organizationsinfo") {
			controlName = tool.Api_OrganizationsHandle_UserFollow;
		} else if (fromType == "Contactsinfo") {
			controlName = "";
		} else if (fromType == "Meetinginfo") {
			controlName = "";
		} else if (fromType == "Tripinfo") {
			controlName = "";
		} else if (fromType == "MeetingNoteinfo") {
			controlName = "";
		} else if (fromType == "dealPipeline" || fromType == "opportunities") {
			controlName = tool.Api_OpportunityHandle_UserFollow;
		} else {
			return;
		}

		//传入参数
		var jsonDatasTemp = {
			CurrentLanguageVersion: lanTool.currentLanguageVersion,
			UserName: tool.UserName(),
			_ControlName: controlName,
			_RegisterCode: tool.RegisterCode(),
			AutoID: autoID,
			ActionType:actionType
		};
		var loadingIndexClassName = tool.showLoading();

		$.ajax({
			async: true,
			type: "post",
			url: urlTemp,
			data: jsonDatasTemp,
			success: function (data) {
				tool.hideLoading(loadingIndexClassName);
				data = tool.jObject(data);
				// console.log(data);
				if (data._ReturnStatus == false) {
					tool.showText(tool.getMessage(data));
					console.log(tool.getMessage(data));
					return true;
				}

				if (!tool.isNullOrEmptyObject(myCallBack)) {
					myCallBack();
				}
			},
			error: function (jqXHR, type, error) {
				tool.hideLoading(loadingIndexClassName);
				console.log(error);
				return true;
			},
			complete: function () {
				//tool.hideLoading();
				//隐藏虚拟键盘
				document.activeElement.blur();
			}
		});
	};

	/*
	* 构造综合查询条件
	*/
	tool.ConstructQueryCondiction = function(_self,myCallBack){
		var queryCondiction = [];
		//构造查询条件
		//1>picker
		$("[data-fieldControlType='picker']").each(function (index, obj) {
			var _curObj = $(this);
			if(tool.isNullOrEmptyObject(_curObj)){
				return true;
			}
			var value = _curObj.attr("data-fieldval") || "";
			if(tool.isNullOrEmptyObject(value)){
				return true;
			}
			var queryCondictionObj =
			{
				Field:_curObj.attr("data-field") || "",
				Type:_curObj.attr("data-querytype") || "",
				Format:_curObj.attr("data-queryformat") || "",
				Relation:_curObj.attr("data-queryrelation") || "",
				Value:value,
        Comparison:_curObj.attr("data-querycomparison") || "",
        DisplayValue:_curObj.val()||""
			};
			queryCondiction.push(queryCondictionObj);
		});
		//2>selectList
		$("[data-fieldControlType='selectList']").each(function (index, obj){
			var _curObj = $(this);
			if(tool.isNullOrEmptyObject(_curObj)){
				return true;
			}
			var value = _curObj.attr("data-fieldval") || "";
			if(tool.isNullOrEmptyObject(value)){
				return true;
			}
			var queryCondictionObj =
			{
				Field:_curObj.attr("data-field") || "",
				Type:_curObj.attr("data-querytype") || "",
				Format:_curObj.attr("data-queryformat") || "",
				Relation:_curObj.attr("data-queryrelation") || "",
				Value:value,
        Comparison:_curObj.attr("data-querycomparison") || "",
        DisplayValue:_curObj.text()||""
			};
			queryCondiction.push(queryCondictionObj);
		});
		//3>groupSelectList
		$("[data-fieldControlType='groupSelectList']").each(function (index, obj){
			var _curObj = $(this);
			if(tool.isNullOrEmptyObject(_curObj)){
				return true;
			}
			var value = _curObj.attr("data-fieldval") || "";
			if(tool.isNullOrEmptyObject(value)){
				return true;
			}
			var queryCondictionObj =
			{
				Field:_curObj.attr("data-field") || "",
				Type:_curObj.attr("data-querytype") || "",
				Format:_curObj.attr("data-queryformat") || "",
				Relation:_curObj.attr("data-queryrelation") || "",
				Value:value,
        Comparison:_curObj.attr("data-querycomparison") || "",
        DisplayValue:_curObj.text()||""
			};
			queryCondiction.push(queryCondictionObj);
		});
		//4>linkSelectList
		$("[data-fieldControlType='linkSelectList']").each(function (index, obj){
			var _curObj = $(this);
			if(tool.isNullOrEmptyObject(_curObj)){
				return true;
			}
			var value = _curObj.attr("data-fieldval") || "";
			if(tool.isNullOrEmptyObject(value)){
				return true;
			}
			var queryCondictionObj =
			{
				Field:_curObj.attr("data-field") || "",
				Type:_curObj.attr("data-querytype") || "",
				Format:_curObj.attr("data-queryformat") || "",
				Relation:_curObj.attr("data-queryrelation") || "",
				Value:value,
        Comparison:_curObj.attr("data-querycomparison") || "",
        DisplayValue:_curObj.text()||""
			};
			queryCondiction.push(queryCondictionObj);
		});
		//5>textareaInput
		$("[data-fieldControlType='textareaInput']").each(function (index, obj) {
			var _curObj = $(this);
			if(tool.isNullOrEmptyObject(_curObj)){
				return true;
			}
			var value = _curObj.val()||"";
			if(tool.isNullOrEmptyObject(value)){
				return true;
			}
			var queryCondictionObj =
			{
				Field:_curObj.attr("data-field") || "",
				Type:_curObj.attr("data-querytype") || "",
				Format:_curObj.attr("data-queryformat") || "",
				Relation:_curObj.attr("data-queryrelation") || "",
				Value:value,
				Comparison:_curObj.attr("data-querycomparison") || "",
			};
			queryCondiction.push(queryCondictionObj);
		});
		//6>dateTimePicker
		$("[data-fieldControlType='dateTimePicker']").each(function (index, obj) {
			var _curObj = $(this);
			if(tool.isNullOrEmptyObject(_curObj)){
				return true;
			}
			var value = _curObj.val()||"";
			if(tool.isNullOrEmptyObject(value)){
				return true;
			}
			var queryCondictionObj =
			{
				Field:_curObj.attr("data-field") || "",
				Type:_curObj.attr("data-querytype") || "",
				Format:_curObj.attr("data-queryformat") || "",
				Relation:_curObj.attr("data-queryrelation") || "",
				Value:value,
        Comparison:_curObj.attr("data-querycomparison") || "",
        DisplayValue:_curObj.val()||""
			};
			queryCondiction.push(queryCondictionObj);
		});


		//console.log(queryCondiction);
		//执行回调函数
		if(!tool.isNullOrEmptyObject(myCallBack)){
			myCallBack(queryCondiction);
		}
	};

	//获取Public对象
	tool.GetPublicObj = function(){
		var curLV = lanTool.currentLanguageVersion;
		var textTemp =  lanTool.lanContent("811_公开的");
		var idTemp = 23;
		var obj = {
			id : idTemp,
			text : textTemp
		};

		return obj;
	};

	/*
	* 是否指定记录的负责人
	*/
	tool.IsHasInitiator = function(fromType,fromID,myCallBack){
		if(tool.isNullOrEmptyObject(fromType) || tool.isNullOrEmptyObject(fromID) ){
			return;
		}

		var urlTemp = tool.AjaxBaseUrl();
		var controlName = tool.Api_DataShareInfHandle_HasInitiator;

		//传入参数
		var jsonDatasTemp = {
			CurrentLanguageVersion: lanTool.currentLanguageVersion,
			UserName: tool.UserName(),
			_ControlName: controlName,
			_RegisterCode: tool.RegisterCode(),
			FromType: fromType,
			FromID: fromID
		};

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
					return true;
				}

				data = data._OnlyOneData || false;
				if (!tool.isNullOrEmptyObject(myCallBack)) {
					myCallBack(data);
				}
			},
			error: function (jqXHR, type, error) {
				console.log(error);
				return true;
			},
			complete: function () {
				//隐藏虚拟键盘
				document.activeElement.blur();
			}
		});
  };

  /*
   * 辅助方法（给数字前面补0，n为返回的长度）
   */
  tool.PrefixInteger = function(num, n){
    n = (n==undefined) ? 2 : n;
    return (Array(n).join(0) + num).slice(-n);
  };

  /*
  * 获取当前时间
  * special特殊处理分钟，输出分钟值只有['00','15','30','45']
  * 返回时间数组，如['年'，'月','日','时','分','秒']
  */
  tool.GetTimeArray = function(special){
      var date = new Date();
      var value = [];
      value.push(date.getFullYear().toString());
      value.push(tool.PrefixInteger(date.getMonth()+1).toString());
      value.push(tool.PrefixInteger(date.getDate()).toString());
      value.push(tool.PrefixInteger(date.getHours()).toString());
      //特殊处理分钟的展示
      if(!tool.isNullOrEmptyObject(special)){
        var minutes = date.getMinutes();
        if(minutes == 0 ){
            minutes = '00';
        }else if(minutes > 0 && minutes <= 15){
            minutes = '15';
        }else if(minutes >15 && minutes <= 30){
            minutes = '30';
        }else if(minutes >30 && minutes <= 45){
            minutes = '45';
        }else if(minutes >45 && minutes < 60){
            minutes = '00';
        }
        value.push(minutes);
      }else{
        value.push(tool.PrefixInteger(date.getMinutes()).toString());
      }
      value.push(tool.PrefixInteger(date.getSeconds()).toString());

      return value;
  };



}(top.window.tool = {}, jQuery));


/*
 * 多语言
 */
;
(function (win, lan, $) {

	//当前多语言本
	lan.currentLanguageVersion = tool.getConfigValue(tool.config_currentLanguageVersion) || 1;

	//多语言数据
	lan.Data = tool.getConfigValue(tool.config_lanData) || [];

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
			//var loadingIndexClassName = tool.showLoading();

			$.ajax({
				url: urlTemp,
				async: true,
				type: "post",
				cache: false,
				data: jsonTemp,
				success: function (data) {
					//tool.hideLoading(loadingIndexClassName);

					data = tool.jObject(data);
					if (data._ReturnStatus == false) {
						lan.Data = [];
						return;
					} else {
						lan.Data = data._OnlyOneData;
						var configJSONTemp = tool.getConfigJSON();
						configJSONTemp[tool.config_currentLanguageVersion] = lan.currentLanguageVersion;
						configJSONTemp[tool.config_lanData] = lan.Data;
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
					//tool.hideLoading(loadingIndexClassName);
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

		// console.log(id);
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
		//console.log("lan.updateLanVersion");
		//console.log("lan.currentLanguageVersion:"+lan.currentLanguageVersion);
		if (!lan.currentLanguageVersion) {
			return;
		}

		if (lan.currentLanguageVersion) {
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
		var cacheDataStr = tool.getSessionStorageItem(tool.config_allTypesData);
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
						tool.setSessionStorageItem(tool.config_allTypesData, JSON.stringify(allTypeList.Data));
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
                  //var minutes = [0,15,30,45];
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
