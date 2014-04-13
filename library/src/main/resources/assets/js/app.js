

$(":button").click(function() {
	var isbn = this.id;
	alert('About to report lost on ISBN ' + isbn);
	var url = "/library/v1/books/"+ isbn +"?status=lost";

	var ajax = $.ajax({
	    url: url,
	    type: "PUT",
	    dataType: "json",
	    contentType:"application/json",
	    success: function(response) {
	    	location.reload();
	        $('#'+isbn+'bookStatus').html("lost");
	        $('#'+isbn).prop("disabled",true);
	    }

	});
	alert( 'Book with ISBN ' + isbn + ' has been reported lost.');
});
$(document).ready(function() {
	$('#book tr').each(function(){
	$this = $(this);
	var bookStatus = $this.find("td:nth-child(5)").html();
	if (bookStatus=="lost")
	{
	var isbnId = $this.find("td:nth-child(6)").html();
	document.getElementById(isbnId).disabled = true;
	}
	});
	});
