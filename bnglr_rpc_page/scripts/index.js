/**
 * 
 */

$(function() {
  // Handler for .ready() called.
	
	$('#registerButtonSubmit').on('click',function(){
		
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($("#emailToRegister").val()))
		{
			alert('Your email is registered successfully.');
		}
		else{
			$('#emailToRegister').popover();
			$('#emailToRegister').popover('show');
		}
	});	
	
	
});

$('#emailToRegister').keypress(function(){
	if(event.which == 13){
		$( "#registerButtonSubmit" ).trigger( "click" );
	}
});