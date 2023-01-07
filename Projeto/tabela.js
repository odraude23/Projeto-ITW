// JavaScript source code
$('.hero-select .level .content').click(function () {
	$('.hero-select .level').removeClass('selected');
	$(this).parents('.level').addClass('selected').find('input').prop('checked', true);
	$(this).parents('.hero-select').siblings('.start-donation').addClass('show');
	localStorage.setItem('rnr-sj-hero-level', $(this).data('level'));
	localStorage.setItem('rnr-sj-hero', "true");
	localStorage.setItem('rnr-sj-hero-commitment', $(this).data('commitment'));
});

$('.hero-select .level').hover(function () {
	$('.hero-select .level').removeClass('hovered');
	$(this).addClass('hovered');
	var details = $('.hero-select .level-detail.' + $(this).data('level'));
	$('.hero-select .level-detail').hide();
	details.show();
	$('.hero-select .level-details').addClass('expanded');
}, function () {
	// $(this).removeClass('hovered');
});
