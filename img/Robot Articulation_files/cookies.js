function cookieConsent() {
  window.cookieconsent.initialise({
      "palette": {
        "popup": {
          "background": "#eaf7f7",
          "text": "#5c7291"
        },
        "button": {
          "background": "#0079ff",
          "text": "#ffffff"
        }
      },
      "theme": "classic",
      "type": "opt-in"
    });
}

function setCookie(days, title){
	var date = new Date();
	var minutes = 60 * 24 * days; //3 days 
	date.setTime(date.getTime() + (minutes * 60 * 1000));
	/* set cookie */
	$.cookie(title, "close", {
	  expires: date
	});
}

function getCookie(title){
  if (cookieExists(title)) {
      return $.cookie(title);
  }
}

function cookieExists(title){
	if ($.cookie(title) === null || 
			$.cookie(title) === "" || 
			$.cookie(title) === "null" || 
			$.cookie(title) === undefined) {
			/* no cookie found */
      return false;
  } else {
      return true;
  }
}

function removeCookie(title){
	$.cookie(title, {
	  expires: "01 Jan 1970 00:00:01 GMT;"
	});
}