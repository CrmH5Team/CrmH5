;onload = function() {
		var link = document.createElement('link');
		link.setAttribute('type', 'text/css');
		link.setAttribute('rel', 'stylesheet');
		link.setAttribute('href', 'https://at.alicdn.com/t/font_651046_51p5vj2jtvy.css');

		//link.setAttribute('href', '../fonts/iconfont1.css');
    document.head.appendChild(link);

}

// var oldback = mui.back;
// mui.back = function () {
// 	// 隐藏虚拟键盘
// 	document.activeElement.blur();

// 	oldback();// 要是返回不需要刷新的话，可以不要这句

// 	if(mui.os.ios){
// 		plus.webview.currentWebview().hide();
// 	}else{
// 		//todo 安卓版本这样处理有bug,暂时用回以前的方法
// 		//plus.webview.currentWebview().hide();
// 		//oldback();
// 	}

// 	return true;
// }

//打开具体的页面
/*
$(".modelmainpage").off().on('tap', function() {
	event.stopPropagation();

	var _self = $(this);
	var _url = _self.attr('url') || "";
	var _id = _self.attr("id") || "";

	if(tool.isNullOrEmptyObject(_url) || tool.isNullOrEmptyObject(_id)) {
		return false;
	}

	// mui.openWindow({
	// 	url: _url,
	// 	id: _id,
	// 	name: _id,
	// 	show: {},
	// 	styles: {
	// 		top: '0',
	// 		bottom: '0'
	// 	},
	// 	extras: {},
	// 	createNew:true
	// });

});
*/
