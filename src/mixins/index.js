import commoninfo from '../components/common/commoninfo'
export default{

    'PAGE_LIST':{
        created:function(){
            this.isFirstEnter = true;
        },
        mounted:function(){
            lanTool.updateLanVersion();
            eventBus.$on('showRightPanel',this.panelToggle);

        },
        activated:function(){

            if(!this.$route.meta.isBack || this.isFirstEnter || this.$route.meta.fromSave){

              //通知Screen组件清空筛选数据
               eventBus.$emit('clearScreenData');

               //通知Sortscreen组件重置排序条件
               eventBus.$emit('resetSort');

              //  eventBus.$emit('commonlistGetDataEvent');

            }
            this.$route.meta.isBack = false;
            this.$route.meta.fromSave = false;
            this.isFirstEnter = false;

        },
        methods:{


        },
        beforeDestroy:function(){
          eventBus.$off('showRightPanel');
      }
    },

    'PAGE_INFO':{

        created:function(){
            var $this = this;
            $this.isFirstEnter = true;

            //保存事件出发,准备数据
            eventBus.$on('save',$this.assembleData);

            //处理Picker组件回传的值
            eventBus.$on('updataPicker',function(data){
                    $this.moduleData[data.field] = data.value.value;
            })

            //处理dataPicker组件回传的值
            eventBus.$on('updataDatePicker',function(data){
                    $this.moduleData[data.field] = data.value || '';
            })

            $this.scrollTop = 0;
        },

        mounted:function(){
            lanTool.updateLanVersion();
            var _self = this;
            this.$nextTick(function(){
                    //将textarea设置为高度自适应
                    $("textarea").each(function(index,cur){
                        tool.autoTextarea(cur);
                    });
            })

            //监听滚动条
            // $('.scroll-div').on('scroll',function(){
            //     _self.scrollTop = $(this).scrollTop();
            // });
        },

        methods:{
            //组装数据
            assembleData:function(){
                var $this = this;
                commoninfo.assembleData($this.id, $this.moduleData, $this.saveOrUpdateUrl ,$this);
            },

            //点击调起列表组件
            selectList:function(event){
                commoninfo.callSelectList(event , this);
            }

        },

        activated:function(){
            var $this = this;

            //处理Selectlist组件回传的值(必须是从selectlist回来才处理)
            commoninfo.handleSelectlist($this);

            //获取ID
            commoninfo.getIdFromUrl($this);

            //进入新增页面
            if($this.id == ''){

                //  除 新增状态从selectlist回来 以外都清楚数据
                if(!$this.$route.meta.isBack || $this.isFirstEnter){
                    //清空数据
                    commoninfo.clearObj($this.moduleData);
                    if('assigned_user_id' in $this.moduleData){
                        $this.moduleData.assigned_user_id = {
                            text:tool.getSessionStorageItem(tool.cache_UserRealName) || "",
                            value:tool.getSessionStorageItem(tool.cache_UserId) || ""
                        }
                    }

                    $this.pageTitle = lanTool.lanContent("217_新增");
                    $this.isAdd = true;

                    eventBus.$emit('initDatePickerEvent',$this.isAdd);
                    eventBus.$emit('initPickerEvent',$this.isAdd);

                }

            }else{

                //需要请求数据                                        //上传文件成功后回来（在编辑中用到）
                if(!$this.$route.meta.isBack || $this.isFirstEnter || $this.$route.meta.fromSave){
                    //先清空数据
                    commoninfo.clearObj($this.moduleData);
                    $this.pageTitle = '';
                    eventBus.$emit('initDatePickerEvent',true);
                    eventBus.$emit('initPickerEvent',true);

                    commoninfo.requeryData($this.id, $this.querySingleUrl, $this.moduleData, eventBus,function(){

                        $this.$nextTick(function(){
                             $this.isAdd = false;
                             eventBus.$emit('initDatePickerEvent',$this.isAdd);
                             eventBus.$emit('initPickerEvent',$this.isAdd);
                        })

                    });


                }
            }

            $this.$route.meta.isBack = false;
            $this.isFirstEnter = false;

            if($this.$route.meta.fromSave != undefined){
                $this.$route.meta.fromSave = false;
            }

            //设置滚动条位置
            // if($this.scrollTop > 0){
            //     $('.scroll-div').scrollTop($this.scrollTop);
            // }
        },

        beforeDestroy:function(){
            eventBus.$off('save');
            eventBus.$off('setPageTitle');
            eventBus.$off('updataPicker');
            eventBus.$off('updataDatePicker');
            eventBus.$off('showRightPanel');

        }
    }
  };
