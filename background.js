/*
 * Doot adds extra functionality to Reddit.
 * Dickbutt.
 */

var modInputDom = "<form class=\"modDoot dootForm\"><input type=\"text\" autofocus focus></form>";
var modHelp = "<div class=\"linkinfo modDoot dootHelp\"><div class=\"date\"><b>Updoot for Reddit Help</b><p></p><ul><li>SHIFT + S: Search</li><li>SHIFT + L: Login/Logout</li><li>SHIFT + F: Frontpage</li><li>SHIFT + C: Comment</li><li>SHIFT + I: Goto Inbox</li><li>SHIFT + K: Temporarily change Karma score</li><li>SHIFT + D: Change all images on page to Dickbutts</li><li>SHIFT + X: Dyslexic Mode</li><li>SHIFT + Q: All font is Comic Sans</li><li>SHIFT + H: Hide Subreddit</li><li>SHIFT + P: New Post</li><li>SHIFT + U: Search User</li><li>SHIFT + R: Goto Subreddit</li><li>SHIFT + Up Arrow Key: Upvote</li><li>SHIFT + Down Arrow Key: Downvote</li><li>SHIFT + Right Arrow Key: Next Page</li><li>SHIFT + Left Arrow Key: Previous Page</li><li>SHIFT + M: Compose Message</li><li>SHIFT + A: Goto Author Account (@jakobitz)</li><li>SHIFT + ?: Help</li></ul><p></p></div></div>";

var doot = {

	bootstrap:function() {
		var that = this;

		that.launcher = {
			83: that.modSearch,
			76: that.modLoginOut,
			39: that.modNextPage,
			37: that.modPrevPage,
			70: that.modFrontPage,
			67: that.modAddComment,
			73: that.modGotoInbox,
			75: that.modFakeKarma,
			68: that.modAllDickButt,
			81: that.modComicSans,
			88: that.modDyslexia,
			72: that.modHideSub,
			80: that.modPost,
			85: that.modGotoUser,
			82: that.modGotoSub,
			38: that.modUpVote,
			40: that.modDownVote,
			77: that.modComposeMessage,
			65: that.modJakobitz,
			191:that.modHelp,
		};

		that.combo();
	},

	put:function(element) {
		var that = this;
		$('body').remove('.modDoot').append(element);
	},

	modHelp:function() {
		var that = this;
		var sidebar = 'body > .side';
		var help = '.modDoot.dootHelp';
		console.log('running modHelp');

		if($(sidebar).length) {
			if($(sidebar).find(help).length) {
				$(help).remove();
			} else {
				$(sidebar).prepend(modHelp);
			}
		}
	},

	modPost:function() {
		var that = this;
		var post = '.sidebox.submit.submit-link a.login-required.access-required';
		console.log('running modPost');

		if($(post).length) {
			$(post)[0].click();
		}
	},

	modComicSans:function() {
		var that = this;
		var html = 'html';
		var comic = 'doot-comic-sans';
		console.log('running modComicSans');

		if($(html).hasClass(comic)) {
			$(html).removeClass(comic);
		} else {
			$(html).addClass(comic);
		}
	},

	modDyslexia:function() {
		var that = this;
		var body = 'body';
		var dsx = 'doot-dx';
		console.log('running modDyslexia');

		if($(body).hasClass(dsx)) {
			$(body).removeClass(dsx);
		} else {
			$(body).addClass(dsx);
		}
	},

	modNextPage:function() {
		var that = this;
		var next = 'a[rel="nofollow next"]';
		console.log('running modNextPage');

		if($(next).length) {
			$(next)[0].click();
		}
	},


	modUpVote:function() {
		var that = this;
		var midcol = '.sitetable .midcol';
		var upvote = '.sitetable .midcol > div[aria-label="upvote"]';
		var upMod = 'upmod';
		var likes = 'likes';
		console.log('running modUpVote');

		if($(upvote).length) {
			$(upvote)[0].click();
			$(upvote).addClass(upMod);
			$(midcol).addClass(likes);
		}
	},

	modComposeMessage:function() {
		var that = this;
		var compose = 'https://www.reddit.com/message/compose/';
		console.log('running modComposeMessage');
		window.location = compose;
	},

	modDownVote:function() {
		var that = this;
		var midcol = '.sitetable .midcol';
		var downvote = '.sitetable .midcol > div[aria-label="downvote"]';
		var downMod = 'downmod';
		var dislikes = 'dislikes';
		console.log('running modDownVote');

		if($(downvote).length) {
			$(downvote)[0].click();
			$(downvote).addClass(downMod);
			$(midcol).addClass(dislikes);
		}
	},

	modAllDickButt:function() {
		var that = this;
		var dickbutt = 'http://i.imgur.com/CE4r5vR.jpg';
		var img = 'img';
		console.log('running modAllDickButt');

		if($(img).length) {
			$(img).each(function(e) {
				$(this).attr('src', dickbutt);
			});
		}
	},

	modFakeKarma:function() {
		var that = this;
		var el = '.modDoot.dootForm';
		var karma = 'span.userkarma';

		console.log('running modFakeKarma');

		$(window).on('keydown', $(el), function(e) {
			if(e.which == 13 && !e.shiftKey) {
				e.preventDefault();
				if($(karma).length) {
					$(karma).text(e.target.value);
					$(el).remove();
				}
			}
		});

		if($(el).length) {
			$(el).remove();
		} else {
			doot.put(modInputDom);
		}
	},

	modAddComment:function() {
		var that = this;
		var comment = '.usertext > .usertext-edit';
		console.log('running modAddComment');

		if($(comment).length) {
			$('html, body').animate({
		        scrollTop: $(comment).offset().top
		    }, 1000);
		}
	},

	modFrontPage:function() {
		var that = this;
		var frontpage = "https://www.reddit.com/";
		console.log('running modFrontPage');

		window.location = frontpage;
	},

	modJakobitz:function() {
		var that = this;
		var frontpage = "https://www.reddit.com/u/jakobitz";
		console.log('running modJakobitz');

		window.location = frontpage;
	},

	modPrevPage:function() {
		var that = this;
		var prev = 'a[rel="nofollow prev"]';
		console.log('running modPrevPage');

		if($(prev).length) {
			$(prev)[0].click();
		}
	},

	modLoginOut:function() {
		var that = this;
		var logout = '.logout > a';
		var login = 'a[href="https://www.reddit.com/login"]';
		console.log('running modLoginOut');

		if($(logout).length) {
			$(logout)[0].click();
		} else {
			if($(login).length) {
				$(login)[0].click();
			}
		}
	},

	modGotoInbox:function() {
		var that = this;
		var inbox = 'https://www.reddit.com/message/inbox/';
		console.log('running modGotoInbox');

		window.location = inbox;
	},

	modHideSub:function() {
		var that = this;
		var sub = '.subreddit';
		var hide = 'hide';
		console.log('running modHideSub');

		if($(sub).hasClass(hide)) {
			$(sub).removeClass(hide);
		} else {
			$(sub).addClass(hide);
		}
	},

	modGotoSub:function() {
		var that = this;
		var el = '.modDoot.dootForm';
		var sub = "https://www.reddit.com/r/";
		console.log('running modGotoSub');

		$(window).on('keydown', $(el), function(e) {
			if(e.which == 13 && !e.shiftKey) {
				e.preventDefault();
				window.location = sub + e.target.value;
			}
		});

		if($(el).length) {
			$(el).remove();
		} else {
			doot.put(modInputDom);
		}
	},

	modGotoUser:function() {
		var that = this;
		var el = '.modDoot.dootForm';
		var sub = "https://www.reddit.com/u/";
		console.log('running modGotoUser');

		$(window).on('keydown', $(el), function(e) {
			if(e.which == 13 && !e.shiftKey) {
				e.preventDefault();
				window.location = sub + e.target.value;
			}
		});

		if($(el).length) {
			$(el).remove();
		} else {
			doot.put(modInputDom);
		}
	},

	modSearch:function() {
		var that = this;
		var el = '.modDoot.dootForm';
		var sub = "https://www.reddit.com/search?q=";
		console.log('running modSearch');

		$(window).on('keydown', $(el), function(e) {
			if(e.which == 13 && !e.shiftKey) {
				e.preventDefault();
				window.location = sub + e.target.value;
			}
		});

		if($(el).length) {
			$(el).remove();
		} else {
			doot.put(modInputDom);
		}
	},

	combo:function() {
		var that = this;
		$(window).on('keydown', function(e) {
			if(e.shiftKey 
				&& !e.ctrlKey
				&& that.launcher[e.keyCode]
				&& window.location.host == "www.reddit.com"
				&& e.target.localName !== "input"
				&& e.target.localName !== "textarea") {
				that.launcher[e.keyCode]();
			}
		});
	}
};

doot.bootstrap();

