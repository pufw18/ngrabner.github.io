$(document).ready(function() {
    $("#footer-to-top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
$('[data-fancybox="images"]').fancybox({
	// Options will go here
});
