export default {
    //深拷贝
    deepClone:function(obj){
        if (!this.isObject(obj)) {
            throw new Error('obj 不是一个对象！')
        }

        let isArray = Array.isArray(obj)
        let cloneObj = isArray ? [] : {}
        for (let key in obj) {
            cloneObj[key] = this.isObject(obj[key]) ? this.deepClone(obj[key]) : obj[key]
        }
        return cloneObj;
        
    },
    // 判断是否为对象
    isObject:function(o) {
        return (typeof o === 'object' || typeof o === 'function') && o !== null
    },
    
    requeryData:function(id, querySingleUrl, moduleData, eventBusObj,fun){ 

        loading.show(3,lanTool.lanContent("172_加载中..."));
        $.when(this.ajaxData(id,querySingleUrl))
        .done(function(data){
            loading.hidden();
            
            data = tool.jObject(data);
            if(data.Result != 1) {
                toast.show(data.Msg);
                return false;
            }
            eventBusObj.$emit('setPageTitle', data.Data);
            //回填数据
            $.each(data.Data,function(key,value){ 
                if(moduleData[key] != undefined){
                    moduleData[key] = value;
                }
            })   
            
            if(typeof fun === 'function'){ 
                fun();
            }
            
        })
        .fail(function (jqXHR, type, error) {
            loading.hidden();
            console.log(jqXHR);
        })

    },
    ajaxData:function(id,queryUrl){
        if(id == undefined || id == '') return;
        if(queryUrl == '') return;

        //请求地址 
		var urlTemp =
            tool.combineRequestUrl(
                tool.getConfigValue(tool.config_ajaxUrl),
                tool.getConfigValue(queryUrl)
            );
        //请求的传入参数
        var jsonDatasTemp = {
            "CurrentLanguageVersion": lanTool.currentLanguageVersion,
            "id": id,
            "SessionName": tool.getSessionStorageItem(tool.cache_SessionName) || "",
            "TimeZoneValue": tool.getSessionStorageItem(tool.cache_TimeZoneValue) || ""
        };
        return $.ajax({
			async: true,
			type: "post",
			url: urlTemp,
			data: {
				jsonDatas: JSON.stringify(jsonDatasTemp)
			},
			dataType: 'json',
        })     
    },

    //组装数据处理
    assembleData:function(id, moduleData, saveOrUpdateUrl, o){ 
        // var copyData = this.deepClone(moduleData);
        var jsonDatasTemp = {};
        jsonDatasTemp["SessionName"] = tool.getSessionStorageItem(tool.cache_SessionName) || "";
        jsonDatasTemp["id"] = id || "";
        jsonDatasTemp["TimeZoneValue"] = tool.getSessionStorageItem(tool.cache_TimeZoneValue) || "";
                
        //从子组件获取填到原来的数据模型中，获取每个子组件的value属性
        $.each(moduleData,function(key,val){
            if(key == 'Documents')
                return true;
            if(typeof val === 'object'){ 
                jsonDatasTemp[key] = val.value; 
            }else{
                jsonDatasTemp[key] = val;
            }
        })
        // console.log(jsonDatasTemp);
        this.SaveOrUpdate(jsonDatasTemp , saveOrUpdateUrl , o);
        
    },
    SaveOrUpdate:function(jsonDatasTemp, saveOrUpdateUrl, o) {
        //请求地址 
        var urlTemp =
        tool.combineRequestUrl(
            tool.getConfigValue(tool.config_ajaxUrl),
            tool.getConfigValue(saveOrUpdateUrl)
        );
       
        loading.show(3,lanTool.lanContent("172_加载中..."));
        $.ajax({
            async: true,
            type: "post",
            url: urlTemp,
            data: {
                jsonDatas: JSON.stringify(jsonDatasTemp)
            },
            dataType: 'json',
            success: function(data) {
                loading.hidden();
    
                if(data.Result != 1) {
                    toast.show(data.Msg);
                    return false;
                }
                                               
                //把列表页路由参数isBack改为fase（使上一页刷新）,并返回上一页
                var routeName = o.$route.name;
                
                var routers = o.$router.options.routes;

                var calendarRoute = null;
                $.each(routers,function(index,item){

                    if(item.name === 'calendar'){
                        calendarRoute = item;
                    }
                    
                    if(item.name+'info' == routeName){
                        item.meta.fromSave = true;
                        
                        //特殊处理一下返回 Calendar 页面也刷新
                        if(routeName === 'calendarlistinfo'){ 
                            calendarRoute.meta.fromSave = true;
                        }
                        o.$router.back(-1);
                    }
                })
                
                               
            },
            error: function(jqXHR, type, error) {
                loading.hidden();
                toast.show('error');
            }
        });
        
        
    },

    //详情页调起Selectlist组件
    callSelectList:function(event,o){
        
        var el = event.target,
            self = o;
            document.activeElement.blur();
        var url = $(el).attr('data-url') || '';
        var dataLinkfrom = $(el).attr('data-linkfrom') || '';
            if(dataLinkfrom){
                url = o.moduleData[dataLinkfrom];   
            }
        var field = $(el).attr('data-field') || '',
            parameter = {
                'field':field,
                'url':url,
                'title':self.languageData[field],
                'data':self.moduleData[field]
            };

            self.$router.push({
                            path: '/selectlist',
                            query: parameter
            })

    },
    
    //处理从selectlist返回来的值
    handleSelectlist:function(obj){
        var $this = obj;
        var sData = eventBus.selectListData;
            if(!tool.isNullOrEmptyObject(sData)){
                $this.moduleData[sData.field] = sData.value;
                eventBus.selectListData = null;
            }
    
    },

    //清空object对象
    clearObj:function(o){
            var self = this;
            if(typeof o !== 'object') return ;   
            $.each(o,function(key,value){
                if(typeof value === 'object'){
                    self.clearObj(value);
                }else{
                    o[key] = '';
                }
            })
            return o;
    },

    //获取详情页url中的AutoID
    getIdFromUrl:function(obj){
        var $this = obj;
        var paramStr = $this.$route.params.id || '';
        paramStr = paramStr.replace(/[\']/g, "\"");
        $this.id = JSON.parse(paramStr)["AutoID"] || "";
    }
   
}


