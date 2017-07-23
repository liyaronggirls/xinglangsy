$(function(){
	//头部横向下拉菜单
	$(".leftNav>li").hover(function(){
		$(this).find("div").stop().slideDown();
	
	},function(){
		$(this).find("div").stop().slideUp();
	})
	//教育/培训/招生/出国
	$('.tab_title>li').click(function(){
		$('.tab_title>li').removeClass('active');
		$(this).parent().next().children(".item").removeClass('show')
		$(this).addClass('active');
		$(this).parent().next().children(".item").eq($(this).index()).addClass('show');
	})
	//底部游戏，新网游，新手卡等
	$('.contNav_item').click(function(){
		$('.contNav_item').removeClass('active');
		$(this).parent().next().children(".tabs_item").removeClass('show')
		$(this).addClass('active');
		$(this).parent().next().children(".tabs_item").eq($(this).index()).addClass('show');
	})
	function run(tab){
		$(tab).click(function(){
			$(tab).removeClass('active');
			$(this).parent().parent().next().children(".tabs_item").removeClass('show')
			$(this).addClass('active');
			$(this).parent().parent().next().children(".tabs_item").eq($(this).index()).addClass('show');
	
		})
	}
	//今日，明日
	run('.day a');
	//(视频,综艺)(体育，NBA，体育视频)(汽车，新车，购车)(娱乐，八卦，大片)(财经，股票，理财)(我要看图，猜你喜欢)（读书，小说）（科技，探索）（手机，数码）
	run('.comTitle_tabs>li');
	//全选
	$(".check-all").click(function(){
			$(".check-one").prop("checked",$(".check-all").prop("checked"));
	})
	//反选
	$(".back").click(function(){
			var arr=$(":checkbox");
			for(var i=0;i<arr.length;i++){
				arr[i].checked=!arr[i].checked;
			}
		})
	//不选
	$(".no").click(function(){
			$(":checkbox").prop("checked","");
		})

})
