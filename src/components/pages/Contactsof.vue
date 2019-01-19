<template>
<div>
      <!-- <Header class="header sticky" :title="title"></Header> -->
      <header class="header sticky">
          <a @click="backHandler" class="calcfont calc-fanhui left" id="back"></a>
          <h1 class="mui-title">{{title||''}}</h1>
      </header>

      <div id="page-content" class="page-content">

          <div class="add-btn-div">
                <div class="add-div" @click="goInfoPage()">
                    <span class="calcfont calc-add"></span>
                    <span class="add-text">Add Contact</span>
                </div>
          </div>

          <div class="List">
                <div class="group-item" @click="goInfoPage(1)">
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
                <div class="group-item" @click="goInfoPage(1)">
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
                <div class="group-item" @click="goInfoPage(1)">
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
                <div class="group-item" @click="goInfoPage(1)">
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
                <div class="group-item" @click="goInfoPage(1)">
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





</div>
</template>



<script>
export default {
      data (){
        return {
            title:'Contacts',

            isFirstEnter:false, // 是否第一次进入，默认false


        }
      },

      beforeRouteEnter:function(to, from, next){
            // if(from.name == 'contactsinfo' || from.name == 'selectlist'){
            //     to.meta.isBack = true;
            // }
            next();
      },
      mounted:function(){
      },
      methods: {
          backHandler: function () {
              this.$router.back(-1);
          },
          //点击去详情页
          goInfoPage:function(id){
              var _self = this,
                  url = "";
              if(id === undefined){
                id = '';
              }

              if(_self.showPage == 0){
                  url = '/organizationsinfo/{"AutoID":"'+ id +'"}';
              }else{
                  url = '/contactsinfo/{"AutoID":"'+ id +'"}';
              }
                _self.$router.push(url);
          },

      }




}
</script>




<style scoped>
/*页面头部style*/
header {
  position: fixed; width: 100%;
  top: 0; left: 0; z-index: 99;
  line-height: 0.2rem;
  background: #f8f2dc;
}
.mui-title{
    display: inline-block;
    overflow: hidden;
    width: auto;
    max-width: 75%;
    font-size: 0.34rem;
    margin: 0 0 0 -10px;
    text-overflow: ellipsis;
    padding: 0;
    text-align: center;
    white-space: nowrap;
    line-height: 0.88rem;
}
.header .calcfont{
    font-size: 0.48rem;
    text-align: center;
    padding: 0.2rem 10px;
    position: relative;
    z-index: 20;
    display: inline-block;
    text-decoration: none;
    line-height: 1;
}
header .mui-title,header a {color: #333;font-weight: 400;}



.page-content{ padding-top: 0.88rem;}

/*增加按钮*/
.add-btn-div{text-align: center;}
.add-div{height:38px;line-height:38px;text-align: center;display:inline-block;margin: 0 auto;padding:0 15px;}
.add-div .calcfont{color:#ff5a21;}
.add-div .add-text{vertical-align: middle;color:#ff5a21;}


/*list----style----*/
.group-item{background:#fff;position:relative;}
.item-block{padding:5px 10px 5px 0.8rem;}
.group-item::after{content:'';display:block;height: 1px;background:#e5f0f4;width:100%;left:0;
top:0px;position:absolute;}
.item-div{font-size: 0.25rem;line-height: 0.4rem;}
.item-first-div{font-weight: 600;color:#ff5a21;padding-top:5px;}

/*Contacts list  style*/
.item-user-icon{display: inline-block;width: 0.8rem;height:0.8rem;line-height:0.8rem;text-align:center;border: 1px solid #3cadf9;position: absolute;top:10px;left:0.25rem;border-radius: 5px;font-size:0.6rem;color:#3cadf9;}
.contacts-item-block{padding:5px 10px 5px 1.3rem;}

</style>
