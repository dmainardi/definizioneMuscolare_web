/**
 *Copyright 2019 Ketan Mistry (@ketanumistry)
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 **/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Check for cookies consent on page load.
		$(document).ready(function() {
			$body.ihavecookies({
				title: "Cookie",
				fixedCookieTypeLabel: "Necessari",
				message: "Questo sito web utilizza i cookie per fornirti una migliore esperienza.",
				expires: 2,
				acceptBtnLabel: "Ok",
				moreInfoLabel: "Approfondisci",
				advancedBtnLabel: "Gestisci",
				cookieTypesTitle: "Seleziona ciò che vuoi accettare",
				link: "privacyPolicy.html#facebookPixel",
				cookieTypes: [{
				    type: "Marketing",
					value: "marketing",
					description: "Cookie di profilazione: ad esempio newsletter, social media, ecc..."
				}],
				onAccept: function() {
					!0 === $.fn.ihavecookies.preference("marketing") && fb_code()
				}
			});
		});
})(jQuery);
