function GetCount() {
  dateNow = new Date, amount = dateFuture.getTime() - dateNow.getTime() + 5, delete dateNow, amount < 0 ? (out = "<div class='days'>0</div><div class='hours'>0</div><div class='mins'>0</div><div class='secs'>0</div>", document.getElementById("timer").innerHTML = out) : (days = 0, hours = 0, mins = 0, secs = 0, out = "", amount = Math.floor(amount / 1e3), days = Math.floor(amount / 86400), amount %= 86400, hours = Math.floor(amount / 3600), amount %= 3600, mins = Math.floor(amount / 60), amount %= 60, secs = Math.floor(amount), days < 10 && (days = "0" + days), hours < 10 && (hours = "0" + hours), mins < 10 && (mins = "0" + mins), secs < 10 && (secs = "0" + secs), out = "<div>" + hours + "</div><p class='dots'>:</p><div>" + mins + "</div><p class='dots'>:</p><div>" + secs + "</div>", document.getElementById("timer").innerHTML = out, setTimeout("GetCount()", 1e3))
}

function changeSelectPack(a) {
  a.closest(".item").addClass("active").siblings().removeClass("active"), $("body").find(".js_changer").removeClass("active"), a.addClass("active"), $('.change-package-selector [value="' + a.attr("data-package-id") + '"]').prop("selected", !0), "function" == typeof set_package_prices && set_package_prices(a.attr("data-package-id"))
}
var year = 2222,
  month = 4,
  day = 4,
  hour = 0,
  min = 0,
  sec = 0;
dateFuture = new Date(year, month - 1, day, hour, min, sec);
var slider;
$(document).ready(function(){
	GetCount();
	$('a[href*=#]:not([href=#])').on('touchend, click', function(e){
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname){
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
	});
});