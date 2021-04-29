$(document).ready(function(){
function m_enter(){
            	$(this).find('.img').stop().animate({'top': '0'},400);
   				$(this).find('.cc_submenu').stop().animate({'bottom': '0'},300);
            }
            function m_leave(){
            	$(this).find('.img').stop().animate({'top': '-600px'},400);
   				$(this).find('.cc_submenu').stop().animate({'bottom': '-350px'},300);
            }
$(".cc_item").bind ('mouseenter',m_enter);
$(".cc_item").bind('mouseleave',m_leave);
	$(".cc_title").click(function(){
   		var id =  $(this).attr('class');
   		var d = $(this).closest('.cc_item');
   		$(d).unbind('mouseenter mouseleave');
   				$(".cc_item").not(d).animate({'margin-left': '-150px'},600, function(){
   					$(".cc_content").animate({'left': '150px'},300);
   					$(".cc_content").find('div').hide();
   					$(".cc_content").find('.'+id.slice(9,21)).show();
   		});
   	});
   	$(".cc_back").click(function(){
   		$(".cc_content").animate({'left': '-750px'},300);
   		$(".cc_item").animate({'margin-left': '0'},500)
   					.bind('mouseenter', m_enter)
   					.bind('mouseleave', m_leave);
   		$(".cc_item").find('.cc_submenu').animate({'bottom': '-350px'},300);
   		$(".cc_item").find('.img').stop().animate({'top': '-600px'},200);
   	});
});