$('.nav').localScroll();

var $btnCollapseExpand01 = $('.btn-collapse-expand01');
var $panel01 = $('.panel01');

$btnCollapseExpand01.on('mouseover', function (){
	$panel01.toggleClass ('js-collapse-expand01');
})

$btnCollapseExpand01.on('mouseout', function (){
	$panel01.toggleClass ('js-collapse-expand01');
})

var $btnCollapseExpand02 = $('.btn-collapse-expand02');
var $panel02 = $('.panel02');

$btnCollapseExpand02.on('mouseover', function (){
	$panel02.toggleClass ('js-collapse-expand02');
})

$btnCollapseExpand02.on('mouseout', function (){
	$panel02.toggleClass ('js-collapse-expand02');
})

var $btnCollapseExpand03 = $('.btn-collapse-expand03');
var $panel03 = $('.panel03');

$btnCollapseExpand03.on('mouseover', function (){
	$panel03.toggleClass ('js-collapse-expand03');
})

$btnCollapseExpand03.on('mouseout', function (){
	$panel03.toggleClass ('js-collapse-expand03');
})

var $contactSection = $('.contact-section')
var $blackPolygon = $('#blackpolygon')

$contactSection.waypoint(function (direction) {

	if (direction == 'down') {
	$blackPolygon.attr('class', 'js-active');
	} else {
	$blackPolygon.removeAttr('class');
	}

}, {offset:'75%'});

