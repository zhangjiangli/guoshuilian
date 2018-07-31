$(function () {
	//滚动
	var htmlScrollTop = $("html,body").scrollTop()
	var scrollstatu = 0; //0在顶部，1滚动
	console.log(htmlScrollTop);
	if (htmlScrollTop > 100) {
		headTransparent()
	} else {
		headwhite()
	}
	$(window).on('scroll', function () {
		var scrollTop = $(this).scrollTop()

		if (scrollTop > 100) {
			scrollstatu = 1
			headTransparent()
		} else {
			scrollstatu = 0
			headwhite()
		}
	})

	function headTransparent() {
		$('.list-left li').css({
			'color': 'black'
		})
		$('.nav-list>li>a').css({
			'color': 'black'
		})
		$('.login').css({
			'background-color': '#0081cc',
			'color': 'white'
		})
		$('.header-top,.head-list').css({
			'border-top': '1px solid #f1f1f2',
			'border-bottom': '1px solid #f1f1f2',
		})
		$('.head-list,.header-top').css({
			'background-color': 'white'
		})
		$('.registered').css({
			'border': '1px solid #cccccc'
		})
		$('.list-right label').css({
			'background-color': '#f9f9f9'
			/* ,
						'border':'1px solid #c3c5c6' */
		})
		$('.search').attr('src', 'img/search1.png')
		$('.drop-down').attr('src', 'img/drop-down1.png')
		$('.logo-header img').attr('src', 'img/logo1.png')
		$('.navbar-link img').attr('src', 'img/cart1.png')
	}

	function headwhite() {
		$('.list-left li').css({
			'color': 'white'
		})
		$('.nav-list>li>a').css({
			'color': 'white'
		})
		$('.login').css({
			'background-color': 'rgba(255,255,255,.1)',
			'color': 'white'
		})
		$('.list-right label').css({
			'background-color': 'rgba(255,255,255,.2)'
			// 'border':'1px solid transparent'
		})
		$('.header-top,.head-list').css({
			'background-color': 'rgba(0,0,0,.1)'

		})
		$('.head-list').css({
			'border-top': '1px solid #2e2a60',
			'border-bottom': '1px solid #2e2a60',
		})

		$('.registered').css({
			'border': '1px solid rgba(255,255,255,.1)'
		})
		$('.search').attr('src', 'img/search.png')
		$('.drop-down').attr('src', 'img/drop-down.png')
		$('.logo-header img').attr('src', 'img/logo.png')
		$('.navbar-link img').attr('src', 'img/cart.png')
	}
	

	//移入
	$('.list-left ul a').on('mouseenter', function (e) {
		e.stopPropagation();
		e.preventDefault();
		var index = $(this).index();
		if (index == 0) {
			$(this).children('li').css({
				'background-color': '#0081cc',
				'color': 'white',
			})
			$('.drop-down').attr('src', 'img/drop-down.png')
		} else {
			$('.list-left ul a').find('.active').removeClass('active');
			$(this).children('li').addClass('active')
		}
	})
	//移除
	$('.list-left ul a').on('mouseleave', function (e) {
		e.stopPropagation();
		e.preventDefault();
		var index = $(this).index();
		if (index == 0) {
			if (scrollstatu == 0) {
				$(this).children('li').css({
					'background-color': 'transparent',
					'color': 'white',
				})
				$('.drop-down').attr('src', 'img/drop-down.png')
			} else {
				$(this).children('li').css({
					'background-color': 'transparent',
					'color': 'black',
				})
				$('.drop-down').attr('src', 'img/drop-down1.png')
			}

		} else {

		}
	})

	//多级分类
	$(".hot_a").on("mouseover", function () {
		$(".tab").show()
		$(".tab_nav a").on("mouseover", function () {
			$(".tab").show()
			$(this).css("background", "#fff").siblings().css("background", "#f5f5f5")
			//让最后一级的li隐藏
			$(".grade2").hide()
			var index = $(this).index();
			// console.log(index);
			$(".grade_box .grade1").show();
			$(".grade_box .grade1 ul").eq(index).show().siblings().hide()
			//选设备时候
			$(".grade1 .device_list li").on("mouseover", function () {
				$(this).addClass("li_style").siblings().removeClass("li_style")
				$(this).children("span").addClass("span_style")
				$(this).siblings().children("span").removeClass("span_style")
				$(".grade_box .grade2").show()
				$(".grade_box .grade2 .grade2_1").show().siblings().hide()
				var liIndex1 = $(this).index();
				$(".grade2_1 ul").eq(liIndex1).show().siblings().hide()
				// console.log(liIndex);
				// $(".grade2 ul")

			})
			$(".grade1 .part_list li").on("mouseover", function () {
				$(this).addClass("li_style").siblings().removeClass("li_style")
				$(this).children("span").addClass("span_style")
				$(this).siblings().children("span").removeClass("span_style")
				$(".grade_box .grade2").show()
				$(".grade_box .grade2 .grade2_2").show().siblings().hide()
				var liIndex2 = $(this).index();
				$(".grade2_2 ul").eq(liIndex2).show().siblings().hide()
				// console.log(liIndex);
				// $(".grade2 ul")

			})

			$(".grade2 ul li").on("mouseover", function () {
				$(this).addClass("li_style").siblings().removeClass("li_style")
			})
			//鼠标移开时候隐藏
			$(".grade2").on("mouseleave", function () {
				$(this).hide()

			})
			$(".tab").on("mouseleave", function () {
				$(".tab").hide()
			})
			/* $(".tab").on("mouseout", function () {
				console.log("7676");
				
			}) */
		})
	})

	$(".hot_a").on("mouseleave", function () {
		$(".tab").hide()
	})

	//



})