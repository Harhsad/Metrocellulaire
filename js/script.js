jQuery(document).ready(function(){
//*****your address page query*****//
 jQuery('.setdefault').click(function(){
	jQuery('.set-as-default').addClass('active');
	 jQuery('.address-box-account').removeClass('default-active');	
	 jQuery(this).parents('.address-box-account').addClass('default-active');	 
	  jQuery('.set-as-default').addClass('active');
	 jQuery('.setdefault').show();
	 jQuery(this).hide();
  });
			
	jQuery('.close').click(function(){
    jQuery('.set-as-default').removeClass('active');
});	

//*****payment options page jquery*****//
jQuery('#change').click(function(){
	jQuery('.step2').css("display","block");
	jQuery('.step1').css("display","none");
 });
jQuery('#usethisadd').click(function(){
	jQuery('.step2').css("display","none");
	jQuery('.step1').css("display","block");
 });
jQuery('#addanadd').click(function(){
	jQuery('.step2').css("display","none");
	jQuery('.step1').css("display","none");
	jQuery('.step3').css("display","block");
 });
jQuery('#back-step2').click(function(){
	jQuery('.step2').css("display","block");
	jQuery('.step1').css("display","none");
	jQuery('.step3').css("display","none");
 });
jQuery('#usethis-step1').click(function(){
	jQuery('.step2').css("display","none");
	jQuery('.step1').css("display","block");
	jQuery('.step3').css("display","none");
 });
jQuery('.form-check-input').click(function(){
	 jQuery('.form-check').removeClass('bg-light');
	 jQuery(this).parents('.form-check').addClass('bg-light');
 });
	
/*free sim card page*/
	 $("button.publicmobile-card").click(function(){
    $(".publicmobile-plan").addClass("active");
	  $(".luckymobile-plan").removeClass("active");
		 $("button.publicmobile-card").addClass("active");
		 $("button.luckymobile-card").removeClass("active");
  });
	 $("button.luckymobile-card").click(function(){    
	$(".luckymobile-plan").addClass("active");
		 $(".publicmobile-plan").removeClass("active");
		  $("button.luckymobile-card").addClass("active");
		  $("button.publicmobile-card").removeClass("active");
  });
	
	/*top up vochers page*/
	$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
	$('#example').tooltip(options)
			
});
