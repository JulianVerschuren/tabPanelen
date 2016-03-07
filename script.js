$('.buttons').each( function(){
//hey
var activated = $(this);

var buttonActivated = activated.find('li.metterDaad');

var hyperLink = buttonActivated.find('a');

var panelActivated = $(hyperLink.attr('href'));

activated.on('click' , 'a', function(e) {

e.preventDefault();

var hyperLink = $(this);
var bezichtigID = this.hash;


if(bezichtigID && !hyperLink.parent().is('.metterDaad')){

panelActivated.removeClass('metterDaad');
buttonActivated.removeClass('metterDaad');


panelActivated = $(bezichtigID).addClass('metterDaad');
buttonActivated = hyperLink.parent().addClass('metterDaad');


}

	
	
	})

});

$('.page').css('display','none')