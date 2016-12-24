// ==UserScript==
// @name         Fur Affinity Experimental UI (Complete)
// @namespace    FurAffinity
// @version      3.4.1
// @description  Original concept art by Mailylion. Replaces the landing page with a new theme.
// @author       ItsNix (https://www.furaffinity.net/user/itsnix/) (Additional Coding by JaysonHusky)
// @match        https://www.furaffinity.net/
// @match        https://www.furaffinity.net/browse/
// @match        https://www.furaffinity.net/staff/
// @match        https://www.furaffinity.net/msg/others/*
// @match        https://www.furaffinity.net/msg/pms*
// @match        https://www.furaffinity.net/controls/*
// @match        https://www.furaffinity.net/login
// @match        https://www.furaffinity.net/user/*
// @match        https://www.furaffinity.net/journals/*
// @grant        none
// @run-at       document-end
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    var st = document.createElement('link');
    $(st).attr('href', 'https://fonts.googleapis.com/icon?family=Material+Icons');
    $(st).attr('rel', 'stylesheet');
    document.getElementsByTagName('head')[0].appendChild(st);
    var st2 = document.createElement('link');
    $(st2).attr('href', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
    $(st2).attr('rel', 'stylesheet');
    document.getElementsByTagName('head')[0].appendChild(st2);
    var st3 = document.createElement('script');
    $(st3).attr('src', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js');
    document.getElementsByTagName('head')[0].appendChild(st3);


    var sections = $('.section-divider');
    $('<i class="material-icons">&#xE43C;</i>').prependTo($(sections[0]).children('h2'));
    $('<i class="material-icons">&#xE865;</i>').prependTo($(sections[1]).children('h2'));
    $('<i class="material-icons">&#xE030;</i>').prependTo($(sections[2]).children('h2'));
    $('<i class="material-icons">&#xE91D;</i>').prependTo($(sections[3]).children('h2'));
    $(sections[3]).attr('style', 'padding-bottom: 60px;');
    $.each(sections, function(i) {
        $(sections[i]).children('h2').addClass('nix-header');
        $(sections[i]).children('div').addClass('nix-content');
    });

    var stories = $($('div.nix-content')[1]).children().children().children()
        .children().children().children('img[width=50][height=50]');
    stories.attr('src', 'https://i.imgur.com/pfRQMJa.png');
    stories.attr('height', 113);
    stories.attr('width', 113);

    var music = $($('div.nix-content')[2]).children().children().children()
        .children().children().children('img[width=50][height=50]');
    music.attr('src', 'https://i.imgur.com/qlPp13W.png');
    music.attr('height', 113);
    music.attr('width', 113);

    $('<div id="nix-footer" class="p10"><div class="nix-footerleft"></div><div class="nix-footerright"></div></div>')
        .prependTo('#footer');
    var logo = $('img.falogo');
    logo.appendTo('.nix-footerleft');
    $('<br/><span id="nix-footertext"></span>').appendTo('.nix-footerleft');
    $('#ad-extra-submission-square').hide();
    $('#footer').children('div.p10t').children('strong').appendTo('#nix-footertext');
    //
    $('.ads').first().prependTo('#controlpanelnav');
    //
    
    $('.ads').last().appendTo('.nix-footerright');
    $('<br/>').appendTo('.nix-footerleft');
    $('.online-stats').appendTo('.nix-footerleft');
    $(' \\| ').appendTo('#nix-footertext');
    $('#footer').children('div.p10t').children().appendTo('#nix-footertext');
    $('#footer').children('.p10t').remove();

    
    
    var jq = document.createElement('style');
    var newContent = document.createTextNode(`

	.dropdown:hover .dropdown-menu {
		display: block;
	}


        #ddmenu ul { background-color: #272727; padding-top: 10px; padding-bottom: 10px; }
        #ddmenu ul li { text-align: left; }
        #ddmenu .top-heading { margin-left: 10px; }
        #ddmenu, .border-bot { border-bottom: none; }
        #ddmenu .nav-bar-logo { padding-left: 20px; }
        #searchbox input[type=search] { background-color: #272727; }
        #ddmenu .menubar_icon_resize { padding-right: 15px; }
        .section-divider { background-color: #323232; margin-top: 20px; padding-left: 0; padding-right: 0; }
        html, body, .submission-area, .frontpage-content { background-color: #323232; }
        #footer { border-top: 3px solid #969696; background-color: #272727; }
        .falogo { padding-bottom: 10px; }
        #nix-footer { height: 240px; padding-top: 30px; }
        .nix-header {
                display: inline; margin-left: 60px; margin-bottom: 5px; line-height: 32px;
                color: #000; text-transform: uppercase; font-size: 14pt; font-weight: 500;
                background-color: #fda936; padding: 15px 25px 4px 25px; }
        .nix-content { border-top: 3px solid #969696; background-color: #272727; }
        .nix-footerleft { float: left; text-align: left; color:white;}
        .nix-footerright { float: right; text-align: right; }
        .online-stats, #nix-footertext { text-align: left; padding-left: 50px; }
        .material-icons { top: 4px; margin-right: 10px;  position: relative; }
        center.flow.frontpage.twolines { margin-top: 30px; margin-bottom: 30px; padding-left: 30px; padding-right: 30px; }
        center.flow.frontpage.threelines { margin-top: 30px; margin-bottom: 30px; padding-left: 30px; padding-right: 30px; }

		// JaysonHusky's Tweaks (Updates Navigation to work with MailyLion's Concept & ItsNix's Script)
		.nixfix {clear:both;}
		.ads img {    vertical-align: baseline; margin-left: -20px;}
		#ad-10 img {display: inline;position: relative;left: -35px; }
#ad-extra-submission-square {display:none;}
		.navbar-fixed-top{ background: #2c2c2c; color: white; font-family:"Open Sans"!important; text-transform: uppercase; }
		.navbar-fixed-top a:hover{ color: #fda938; text-decoration:none; }
		.dropdown-item a:hover { background: #4c4c4c !important; }
		.bg1{ margin-top: 85px; }
		.navbar-default { background: #2c2c2c; border-color:#2c2c2c; text-transform: uppercase; }
		#useravatar  {	height: 80px;	width: 80px;	padding: 5px;	margin-right: -40px; }
		#set1 {margin-left: 44px; color: white;}
		#set1 li {	display: inline;}
		#set2 {width: 600px;}
		#set2 li {display:inline;}
		.unn {padding: 3px; }
		#username {	display:block;    color: #cfcfcf;	margin-top: 10px;	margin-left: 50px;}
		#newnews{	background: #fda936;	padding: 5px;	display:block;	color: black; text-align: center; width: 427px;}
		#newnews a { color: black; }
		form {display:inline; }
		.dropdown-menu>li>a:hover { background: #4c4c4c; }
		h3.dropdown-header { margin-top: 1px; margin-bottom: 1px;}
		.support-dropdown-menu { margin-left: -100px; background: #2c2c2c; color: white !important; }
		.settings-dropdown-menu { margin-left: 200px; background: #2c2c2c; color: white !important; }
		.myfa-dropdown-menu { background: #2c2c2c; color: white !important; }
		.dropdown-menu li a{ color: white !important; } .mobile-message-item { display: inline-block; height: 10px; line-height: 0px; flex-grow: 1;   flex-shrink: 0; }
		.fa-brand-logo { height: 70px; width: 130px; margin-top: -10px; margin-left: -30px;}
		.mobilemenu {display:none;}
#nix-footertext { color: white; }
@media only screen and (max-width: 768px) {    
        		.fa-brand-logo { height: 30px; width: 50px; margin-top: -5px; margin-left: 5px;}
				.mobilemenu {display:block;} .desktopmenu {display:none;}
}

		}
		@media only screen and (max-width: 500px) {    
        		.fa-brand-logo { height: 30px; width: 50px; margin-top: -5px; margin-left: 5px;}
				.mobilemenu {display:block;} .desktopmenu {display:none;}
		}
 `);
		jq.appendChild(newContent);
		document.getElementsByTagName('body')[0].appendChild(jq);
    

    
    function browse_plugin(){
        var smi=document.createElement('style');
        var sbm=document.createTextNode(`.sidebar-static { position: fixed;top: 70px;bottom: 0px;right: -290px;z-index: 1000000;background: rgba(1,0,0,0.6);transition: 0.5s all;height: 800px;}.sidebar-static:hover  {position: absolute;top: 50px;bottom: 0px;right: 0px;z-index: 1000000;background: rgba(1,0,0,0.9);transition: 0.5s all;height: 800px;}`);
		smi.appendChild(sbm);
		document.getElementsByTagName('body')[0].appendChild(smi);
    }
    
    function experimental_navigation_jth(){
        var new_news;
        if (document.cookie.indexOf('n') > -1 ){new_news = "No News";$('#newnews').css('background-color','#2c2c2c');}else { new_news =  $('#news').html(); }
        var message_centre = $('.mobile-messages').html();
        var imgavatarsrc = $('img.menubar_icon_resize').attr('src');
        var loggedinuser = $('img.menubar_icon_resize').attr('alt');
        var nav_desktop = `<nav class="navbar navbar-default navbar-fixed-top">
		<div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#top"><img src="/themes/beta/img/banners/fa_logo.png" class="fa-brand-logo" alt="FA logo"></a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <div id="upper-nav">
				<ul id="set2">
					<li class="unn"><a class="top-heading" href="/browse/"><div class="sprite-paw menu-space-saver hideonmobile"></div>Browse</a></li>
					<li class="unn"><a class="top-heading hideondesktop" href="/search/">Search</a></li>
					<li class="unn"><a class="top-heading" href="/submit/"><div class="sprite-upload menu-space-saver hideonmobile"></div> Upload </a></li>
					<li class="dropdown">
						<a class="top-heading" href="#" data-toggle="dropdown" ><div class="sprite-news menu-space-saver hideonmobile"></div>Support</a>
						<i class="caret" data-toggle="dropdown" ></i>
							<ul class="dropdown-menu support-dropdown-menu">
							<h3 class="dropdown-header">Community</h3>
							<li><a class="dropdown-item" href="/journals/fender">News & Updates</a></li>
							<li><a class="dropdown-item" href="http://forums.furaffinity.net">Forums</a></li>
							<li><a class="dropdown-item" href="http://www.facebook.com/furaffinity">Facebook</a></li>
							<li><a class="dropdown-item" href="http://twitter.com/furaffinity">Twitter</a></li>
							<li><a class="dropdown-item" href="/advertising.html">Advertising</a></li>
							<h3 class="dropdown-header">Support</h3>
							<li><a class="dropdown-item" href="/staff/">Fur Affinity Staff</a></li>
							<li><a class="dropdown-item" href="/help">Help & FAQ</a></li>
							<h3 class="dropdown-header">Rules & Policies</h3>
							<li><a class="dropdown-item" href="/tos">Terms of Service</a></li>
							<li><a class="dropdown-item" href="/coc">Code of Conduct</a></li>
							<li><a class="dropdown-item" href="/aup">Upload Policy</a></li>
						</ul>
					</li>
					<li>
						<form id="searchbox" method="post" action="/search/">
							<input type="search" name="q" placeholder="Search" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Search'">
						</form>
					</li>
				</ul>
			</div>
			<div id="lower-nav">
				<span id="newnews">
					`+new_news+`
				</span>
			</div>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><img src="`+imgavatarsrc+`" id="useravatar"></li>
            <li>
				<span id="username" class="dropdown">
<ul class="dropdown-menu myfa-dropdown-menu">
<h3 class="dropdown-header">Profile Information</h3>
<li class="dropdown-item"><a href="/user/`+loggedinuser+`/"><span class="hideondesktop">My Userpage</span></a></li>
<li class="dropdown-item"><a href="/msg/pms/">My Notes</a></li>
<li class="dropdown-item"><a href="/controls/journal/">My Journals</a></li>
<li class="dropdown-item"><a href="/commissions/`+loggedinuser+`/">My Commission Info</a></li>
<li class="dropdown-item"><a href="/controls/avatar/">My Avatar</a></li>
</ul>
~`+loggedinuser+`</span>
				<ul id="set1">
					`+message_centre+`
					<br>
						&nbsp;&nbsp;&nbsp;<li class="dropdown"><a class="top-heading" href="#">Settings</a>
						<i class="caret"></i>
							<ul class="dropdown-menu settings-dropdown-menu">
								<h3 class="dropdown-header">Account Information</h3>
								<li class="dropdown-item"><a href="/controls/settings/">Account Settings</a></li>
								<li class="dropdown-item"><a href="/controls/site-settings/">Global Site Settings</a></li>
								<li class="dropdown-item"><a href="/controls/user-settings/">User Settings</a></li>
								<h3 class="dropdown-header">User Profile</h3>
								<li class="dropdown-item"><a href="/controls/profile/">Edit User Page Info</a></li>
								<li class="dropdown-item"><a href="/controls/contacts/">Contacts and Social Media</a></li>
								<li class="dropdown-item"><a href="/controls/avatar/">Avatar Management</a></li>
								<h3 class="dropdown-header">Content Management</h3>
								<li class="dropdown-item"><a href="/controls/submissions/">Manage My Submissions</a></li>
								<li class="dropdown-item"><a href="/controls/folders/submissions/">Manage My Folders</a></li>
								<li class="dropdown-item"><a href="/controls/journal/">Manage My Journals</a></li>
								<li class="dropdown-item"><a href="/controls/favorites/">Manage My Favorites</a></li>
								<li class="dropdown-item"><a href="/controls/buddylist/">Manage My Watches</a></li>
								<li class="dropdown-item"><a href="/controls/shouts/">Manage My Shouts</a></li>
								<h3 class="dropdown-header">Security</h3>
								<li class="dropdown-item"><a href="/controls/sessions/logins/">Active Sessions</a></li>
								<li class="dropdown-item"><a href="/controls/sessions/logs/">Activity Log</a></li>
								<li class="dropdown-item"><a href="/controls/sessions/labels/">Browser Labels</a></li>
								<h3 class="dropdown-header">Site Support</h3>
								<li class="dropdown-item"><a href="/controls/troubletickets/">Trouble Tickets</a></li>
							</ul>
						</li> | 
						<li class="sfw-toggle">
							<a href="?" title="Toggle to hide Mature and Adult submissions. Effective starting next page load.">SFW</a>
						</li> | 
						<li>
							<a id="logout-link" class="logout-link" href="/logout/">Log Out</a>
						</li>
					</ul>
				</li>
			</ul>
			</div><!--/.nav-collapse -->
		</div>
	</nav>`;
        $('#header').html(nav_desktop);
        //$('#nix-footertext').append($('.online-stats').html());
    }
    function fix_plugin() {
        var pathx = window.location.pathname;
        if(~pathx.indexOf("/controls/")){
            $('.sidebar').hide();
        }
        switch (pathx){
            case "/user/fender/":    // Temporary until wildcard fix is ready
                $('.user-nav-content-base').css('color','grey');
                $('h2.inline').css('margin-left','20px');
                $('.user-nav-content-base strong').css('margin-left','30px');
                $('.userpage-layout-profile').css('color','lightgrey');
                $('h2').css('color','lightgrey');
                break;
             case "/journals/fender":    
                $('.user-nav-content-base').css('color','grey');
                $('h2.inline').css('margin-left','20px');
                $('.user-nav-content-base strong').css('margin-left','30px');
                $('.userpage-layout-profile').css('color','lightgrey');
                $('h2').css('color','lightgrey');
                $('div.inline').css('color','lightgrey');
                $('.journal-preview-body').css('color','lightgrey');
                $('.journal-date-floater').css('color','lightgrey');
                $('.fontsize12').css('color','lightgrey');
                $("[id^=jid]").css('margin-top','-60px');
                break;
            case "/staff":
                $('.sidebar').hide();
                $('.nix-header').first().hide();
                $('.content a').first().hide();
                $('.staffright i').css('color','white');
                $('.flex-item-staff').css('width','25%');
                $('.flex-item-staff').css('margin-left','7%');
                $('.flex-container').css('margin-bottom','30px');
                break;
            case "/msg/others/":
                $('.info span').css('color','white');
                $('ul.message-stream li').css('color','white');
                $('div#messagecenter-other ul.message-stream li input').css('margin-left','50px');
                $('.section-divider').css('margin-top','0px');
                break;
            case "/controls/sessions/logins/":
                $('#sessions-form').css('color','white');
                break;
            case "/controls/site-settings/":
                $('.control-panel-option').css('color','white');
                $('.control-panel-option').css('padding','5px');
                break;
            case "/controls/settings/":
                $('.control-panel-option').css('color','white');
                break;
            case "/controls/user-settings/":
                $('.control-panel-option').css('color','white');
                break;
            case "/controls/profile/":
                $('.flex-item').css('color','white');
                $('.control-panel-option').css('color','white');
                $('.control-panel-option').css('padding','5px');
                break;
            case "/controls/submissions/":
                $('.t-image span').css('color','white');
                break;
            case "/controls/avatar/":
                $('#controlpanel').css('color','white');
                break;
            case "/login/":
                $('.p20b').css('color','white');
                break;
            case "/controls/journal/":
                $('.sidebar').show();
                break;
            case "/controls/troubletickets/":
                $('.ttguideline').css('color','white');
                $('select').css('color','white');
                $('.textbox').css('color','white');
                $('table.auto_link').css('color','white');
                $('.floatleft').css('color','white');
                $('.section-divider form').css('color','white');
                $('.section-divider form').css('display','block');
                break;
            case "/browse/":
                $('.sidebar').css('color','white');
                //$('.sidebar').css('background','#5d6069');
                $('.section-divider').css('margin-bottom','-20px');
                $('.section-divider').css('margin-top','-20px');
                $('.section-divider').css('overflow','hidden');
                $('.button').css('border-radius','0px');
                $('.nix-content').css('margin-top','3px');
                break;
            // Leave this blank!
            default:
                break;
        }
    }
    experimental_navigation_jth(); // redesigned navigation
    browse_plugin(); // Sidebar modifications
    fix_plugin(); // Small addon to enable tweaks for individual pages
})();