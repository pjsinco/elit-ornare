#notes so yeah

###Thu Dec 11 19:31:09 CST 2014###
* **Use Parallels**
    * http://macbookpro is equivalent to http://localhost  
    * See: [Connecting Parallels VMs to your Mac localhost file for testing](http://www.toddvachon.com/2013/04/connecting-parallels-vms-to-your-mac-localhost-file-for-testing/349)
* a lot of time setting up icon system  
    * started with c. coyier's defs/use system  
    * moved to grunticon, which uses background images  
    * so that's where we're at now; back to defs/use at some point?  

###Fri Dec 12 09:20:37 CST 2014
* installed svgo  
```sudo npm install svgo -g```  
    * ran it on a folder of svg files  
    ```svgo -f svg/```
* trying defs/use again  
* email from Ilya re: ads:  
> As far as responsive design we can take smaller size for mobile. 
> Would you be able to accommodate 320x50? In addition please make 
> sure you don’t just hide the elements that contain ad units when 
> dealing with responsive design. Simply hiding doesn’t stop ad 
> delivery which generates fake impressions. Use below wrapper examples 
> in relation to your responsive breaking points. Let me know if you 
> have questions aboit it.

    ```
    // Desktop ads
    var ehs_width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (ehs_width>767) {
    …ADCODE…
    }
     
    // Mobile ads
    var ehs_width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (ehs_width<=767) {
    …ADCODE…
    }>)
    ```

* using adobe edge inspect on my android 2.3 phone, I see that svg defs/use doesn't work. so back to background system?

###Wed Dec 17 10:13:09 CST 2014
* deploys icon-font
* [icon fonts on css-tricks](http://css-tricks.com/examples/IconFont/)
* [@font-face + base64 syntax](http://sosweetcreative.com/2613/font-face-and-base64-data-uri)
* [base64 encoder](http://www.opinionatedgeek.com/dotnet/tools/Base64Encode/)
* [pattern for our nav](http://codepen.io/bradfrost/pen/sHvaz)

###Thu Dec 18 11:30:58 CST 2014


###Fri Dec 19 08:24:30 CST 2014
* should we switch form [hamburger to "menu"](https://econsultancy.com/blog/65511-hamburger-menus-for-mobile-navigation-do-they-work)?
* [Breakpoint wiki](https://github.com/at-import/breakpoint/wiki)
* First swing at extracting assets from photoshop
    1. Name layer with what we want the file to be called (ex., caudle-omed)
    2. Right-click on that layer and choose "Extract Assets ..."
    3. Try these for suffixes:
        * @.25 
        * @.33
        * @.50
        * @.75  
    4. Example resulting filename: caudle-omed@.33.jpg
    
* We can [add straight html into jade](http://stackoverflow.com/questions/16094423/is-it-considered-bad-practise-to-use-html-in-jade)
* In twentythirteen, check out the .search-field:focus for an on-demand search bar
* Better than than .container: .context?
* [Picturefill!](http://scottjehl.github.io/picturefill/)


###Sat Dec 20 06:28:16 CST 2014
* Good [article](http://www.zell-weekeat.com/context-with-susy/) about Susy contexts
* [Possible sticker hover animation](http://www.git-tower.com/learn/)
* good candidates for minor breakpoints: 
    * **584px** That's when the body text column starts to get wider 
      than the default desktop measure of 552px

###Sun Dec 21 06:02:38 CST 2014
* Thumbnail size: 140px x 93px
* **related** module
    * uses default thumbnail size 140pxx93px
* Our viewport is scrollable horizontally for the moment because the leaderboard ad is sticking out
* Adds new repo for deploying build: eo-build
    * so now we have a repo within a repo
    * added a robots meta tag to prevent searching enginges from searching the web page
    * deploying on [eo-build.10rempatrick.com](http://eo-build.10rempatrick.com) 
        * done: Sun Dec 21 10:14:21 CST 2014
* EHS tag config script contains this beauty. 
    ```
    document.write('<scr'+'ipt type="text/javascript" src="'+ehs_tagsrc+'"></scr'+'ipt>');
    ```
    * How to avoid it?
        * maybe this way: [How to fix document.write](http://www.feedthebot.com/pagespeed/avoid-document-write.html)
* [AppendAround](https://github.com/filamentgroup/AppendAround) for moving content around based on viewport size
    * [demo](http://filamentgroup.github.io/AppendAround/)
* PageSpeed on eo-build: 57/100 mobile speed Sun Dec 21 11:36:48 CST 2014

### Mon Dec 22 04:19:33 CST 2014
* Hide pull quotes in smallest screens?
    * Might be a good place for an ad
* git commit from within vim
```
:! git add % ; git commit -m "mods readme"
```
* [ Hmmm ](http://stackoverflow.com/questions/1675464/how-can-i-combine-these-git-commands):
    > I say this: Don't do ```git add .```  

    > Instead do ```git add -u```. Even better, skip the add stage and do ```git commit -a -m"blah"```
* [pandoc](http://johnmacfarlane.net/pandoc/demos.html)
```pandoc -s -c pandoc.css README.md -o readme.html```
    *  ```-s``` standalone
    *  ```-c``` link to stylsheet
    *  ```-o``` output
* TODO ~~need a max-width on body text~~
    * maybe 570px/35.625em?
* TODO ~~our small-screen viewport is floaty horizontally~~ Mon Dec 22 14:02:18 CST 2014
* Our Typekit [colophon](https://typekit.com/colophons/vdi5qvx)
* PageSpeed on eo-build: 57/100 mobile Mon Dec 22 16:42:44 CST 2014

###Tue Dec 23 06:18:02 CST 2014
* susy grids 
    * [example](http://sassmeister.com/gist/8381773), [zell](http://www.zell-weekeat.com/tag/susy/)
* TODO ~~we need a fat gutter between our main column and secondary column on article page, without breaking our rhythm~~ Tue Dec 23 09:19:09 CST 2014
    * OK: 
        * we set up a $gridpage
        ```
        $gridpage: (
          global-box-sizing: border-box,
          columns: 12,
          container: 62em, // that'll give us a med-rect ad in the secondary column with a fat gutter
          gutters: .25,
        );
        ```

        * the main column
        ```
        @include span(8 of $gridpage);
        ```

        * the secondary column
        ```
        /* this % value will give us our fat gutter and hold a med-rect ad */
        @include span(30% last); 
        ```

        * see grid-play.html and _grid-play.scss

* picturefill: how many versions, and what sizes, of the image to use?
    * here's what we're working with now:
        ```
                  default --> 410px (image size)
        @min-width: 410px --> 620px
        @min-width: 652px --> 930px
        ```
    * this is working well so far

* don't forget sometimes we need to ```grunt compile-jade``` after switching branches 
    * shortcut: ```grcj```

* TODO ~~more outside padding on medium screens~~2014-23-12

* maybe we don't need a page wrapper?
    * but the nice thing is we can set a ```position: relative;``` on it
    * maybe we can set it on .content
    * so we're flying w/out a wrapper *Tue Dec 23 16:30:30 CST 2014*

* so we break into our 2/3, 1/3 page grid on an article, right now, at 896px ($large-minor-start)
    * otherwise, we're 1 col on those smaller screens

* **TODAY** Blueprints + girders -- focusing on structure, markup as clear and simple as possible

* so our **story** module has a 95% ```container``` to start
    * otherwise it would bleed to the edges, so that's how we're controlling our outside spacing
    * *w-w-w-wait:* our **story** should ```span(8 of 12)```, no? not be a ```container```?

* TODO ~~we lost our figcaption --> needs a **container** mixin~~Wed Dec 24 10:18:18 2014 CST 
* TODO ~~wrap our ads in a link~~ Sat Dec 27 15:48:20 2014 CST

* pagespeed: 57 mobile

* so, on mediumish views, having the thin white column on the left is kinda jarring

###Wed Dec 24 06:27:07 2014 CST
* let's move **related** to the story footer in small, med screens?
    * disruptive otherwise, esp. with ads running in
* TODO ~~fix .story bpoint on $large-minor-start~~Wed Dec 24 11:06:22 2014 CST 
    * set the max width
        * max-width on .story should be 40.9824375em
            * that's its width at desktop
    * what if we set the max-width on .story as the same width of the leaderboard?
        * so that'd be 45.5em

* @890px width:
    * .story is 728px wide --> same as leaderboard

* let's let med-rects run into the story at some wider views
    * OK! Wed Dec 24 11:05:58 2014 CST 

* Wed Dec 24 11:06:37 2014 CST our breakpoints on article are finally looking decent

###Fri Dec 26 08:44:27 2014 CST
* TODO ~~add ```$screen``` to all breakpoints~~ Sat Dec 27 15:34:04 2014 CST
* TODO ```span``` in .site-branding--beta needs a class
* no ```input[placeholder]``` in ie9 and below
    * let's [not worry about it](http://html5please.com/#placeholder)

        > A properly implemented form should have labels and any placeholders 
        > should be supplementary. As such, they are not required for successful 
        > completion of a form
* search placeholder is janky in ie10
    * it only appears, fleetingly, on the blur off transition
    * here's a workaround--[hide it in ie](http://msdn.microsoft.com/en-us/library/ie/hh772745%28v=vs.85%29.aspx):
        ```
        &:-ms-input-placeholder {
          color: transparent;
        }
        ```
* **TODAY** site nav stylin

###Sat Dec 27 15:24:16 2014 CST
* pagespeed 57 mobile

###Sun Dec 28 08:42:00 2014 CST
* adelle semibold is font-weight: 600

* ["Make sure list items don't have padding, but links do"](http://css-tricks.com/keep-margins-out-of-link-lists/)

* [centering](http://css-tricks.com/centering-css-complete-guide/)

* ~~TODO email icon is a little big~~ Sun Dec 28 16:38:59 2014 CST

* TODO slight boost to byline, date on bigger screens

* TODO remove bottom margin when top social goes vertical

* so, we're styling story__body-text's p tag in _base and h2, drop cap in _story
    * we should prolly keep in the same place

* TODO email icon is *still* a little big

* **TODAY** lotta story styling

* should social icons be gray?

* do we need adelle's font-weight: normal?
    * would our resources be better used on adelle black for pull quotes?

* how would line-height: 1.5 look on the body?

* TODO ~~we need some more bottom margin on figcaption in the body~~

* our measure today, at biggest screen, is 72 chars
    * 1.125em / 1.4
    * at its widest, our measure tops out at 94 chars
        * too wide?

###Mon Dec 29 05:14:25 2014 CST
* **related** module is a rover candidate
    * run into story at larger screens
    * put at bottom of smaller screens

* [wp -- tags with commas inside them](http://blog.foobored.com/all/wordpress-tags-with-commas/)

* TODO our arrow icons aren't showing up right in ie, ios safari

* TODO ~~Our vertical rule in **story-nav**'s **prev-next** is a problem~~ Tue Dec 30 12:42:25 2014 CST
    * ideally, it should be as tall as the higher of the two columns

* **TODAY** marking up, styling **story-nav**

###Tue Dec 30 08:34:33 2014 CST
* do we need the word *topics*?

* we're gonna redo some markup and style in **story-nav**

* [how] can we track locations, schools (, specialties) mentioned in stories?
    * then somewhere serve up all stories that mention OSU-COM or New Mexico or radiology?
    * this would be extracurricular to tags

* [wp debugging](http://nacin.com/2010/04/23/5-ways-to-debug-wordpress/)
    * also: [this one](http://wptavern.com/query-monitor-a-remarkably-comprehensive-debugging-plugin-for-wordpress)

* is 'newer' better than 'next' and 'older' better than 'previous'?
    * seems like it
        * 'next': next in what? you might wonder
        * 'newer' sounds more enticing?

* very cool how we got our vertical rule in **prev-next** to always line up with top of the words *OLDER, NEWER*
    * ```height: calc(100% - 43px);```
    * learned here: [A couple of use cases for calc()](http://css-tricks.com/a-couple-of-use-cases-for-calc/)

* our author bio photo is 95px x 95px

* **TODAY** gets bottom-of-story nav looking good across all screens

* [the daily beast](http://www.thedailybeast.com/articles/2014/12/30/russia-s-rebel-in-chief-escapes-house-arrest.html)

* our leaderboard ad, and smaller-screen versions, should prolly go above our banner, huh?

* our mobile nav is displaying at too-large screens

* pagespeed mobile 57

###Wed Dec 31 09:23:40 2014 CST
* [nice html tidier](http://www.dirtymarkup.com/)

* TODO ~~our **prev-next** needs more padding~~

* **TODAY** comments--markup, styling

###Thu Jan  1 06:21:13 2015 CST
* dropcap isn't positioned correctly in firefox

* logo 
    * font possibles: ff enzo. beau sans. museo sans rounded. ff cocon web pro. anca. anisette std petite. parisine plus std sombre. adrianna.
    * stitches, embroidered; subtle wrinkle ripple; sovba font.
    * Dr.ing

* **TODAY** markup, start to style widgets

* **prev-next** is looking not good

###Fri Jan  2 04:59:41 2015 CST
* sticky stuff, hovers, etc.
    * [http://codepen.io/philsinatra/pen/AfkuJ](http://codepen.io/philsinatra/pen/AfkuJ)
    * [sticky header](http://codepen.io/iest/pen/mKpzA)
    * [sticky on scroll up](http://codepen.io/tcmulder/pen/blzrc)
    * [nav](http://codepen.io/TimRuby/pen/kLGic)
    * [http://tympanus.net/Development/SelectInspiration/index8.html](http://tympanus.net/Development/SelectInspiration/index8.html)
    * [hovers](http://tympanus.net/Development/HoverEffectIdeas/)

* [Ms. Soueidan + svg](http://24ways.org/2014/an-overview-of-svg-sprite-creation-techniques/)
    
* TODO ~~banner looks funny in ie9~~ Fri Jan  2 17:44:02 2015 CST

###Sun Jan  4 08:26:32 2015 CST
* [nice responsive form pattern](http://codepen.io/chriscoyier/pen/DmnlJ?editors=110)

* super image
    * min height is about 478px on 992px wide

* **TODAY** front-page super, featured

###Mon Jan  5 08:53:30 2015 CST
* **TODAY** refining front-page featured stories

###Tue Jan  6 04:59:39 2015 CST
* [equal-sized columns](http://webdesign.tutsplus.com/tutorials/quick-tip-solving-the-equal-height-column-conundrum--cms-20403)

* **TODAY** styling more-stories on front page

###Wed Jan  7 08:30:47 2015 CST
* **TODAY** styling row-of-fourths, row-of-thirds on front page

###Thu Jan  8 05:57:15 2015 CST
* TODO what if we use color: inherit on all our icons? let's try it

* [hover on pseudo elements](http://stackoverflow.com/questions/8874326/how-to-make-a-hover-effect-for-pseudo-elements)

###Fri Jan  9 04:42:06 2015 CST
* TODO we need vert and maybe horiz rules on our fourths row on medium screens

* secondary colors?
    * something light, cool, subtle
        * slategrey, paleturqoise, mintcream, lightyellow, lightsteelblue, lightslategrey, lightskyblue, lightcyan, ivory, **aliceblue**, azure, deepskyblue, ghostwhite, honeydew
    * but do we really need a second color?

* try async for ehs-head-tag.js

* TODO comments need more padding

* article: mobile pagespeed
    * before adding ehs tags: 57
    * after adding ehs tags: 41 (**!!!**)
        * Ilya's response to whether we can get do anything about that perf hit
            ```
            Unfortunately not at the moment, but we’re working on the 
            async version of the ad tag that should not affect the page 
            load. I don’t have an ETA right now, but we’ll definitely 
            distribute it when ready.
            ```


* **TODAY** starting to style curated social; verified ehs ads will rove;

###Sat Jan 10 07:37:32 2015 CST
* [word wrapping in css](http://css-tricks.com/snippets/css/prevent-long-urls-from-breaking-out-of-container/)

* we should show "follow us ..." in social pick on small screens

* **TODAY** more on social-pick, front-page ads roving

###Sun Jan 11 07:32:30 2015 CST
* we don't have a 'follow us' on the article page
    * put it in the footer?

* D3
    * [responsive d3](http://stackoverflow.com/questions/9400615/whats-the-best-way-to-make-a-d3-js-visualisation-layout-responsive)
    * [responsive d3](http://stackoverflow.com/questions/11942500/how-to-make-force-layout-graph-in-d3-js-responsive-to-screen-browser-size?lq=1)
    * [dummy bar chart](http://bl.ocks.org/Caged/6476579)

* [AHRF data](http://ahrf.hrsa.gov/categories.htm)

* Do we need the rule below the super on the front page?

###Mon Jan 12 13:53:00 2015 CST
* twitter-pick: @mplified, Heartbeat, Pulse, BPM

* [oocss + grids](https://github.com/stubbornella/oocss/wiki/Grids)

* [margins in one direction only](http://csswizardry.com/2012/06/single-direction-margin-declarations/)
    > This means always use margin-bottom to push items down the page, 
    > and margin-left to push them across the page.

* [styles for hr](http://css-tricks.com/examples/hrs/)

* **TODAY** refactoring front-page css

* use susy's [gallery mixin](http://susydocs.oddbird.net/en/latest/toolkit/?highlight=last#gallery) for displaying .size-1-of-4 (.size-1-of-3?) on medium screens!
    * no need for ```&--last```

* maybe use susy's [bleed mixin](http://susy.readthedocs.org/en/latest/toolkit/#bleed) for bleeding left and right?

###Tue Jan 13 05:36:47 2015 CST
* [save all windows in vim](http://stackoverflow.com/questions/4429368/save-all-windows-tabs-in-gvim)

* [honeypot](http://solutionfactor.net/blog/2014/02/01/honeypot-technique-fast-easy-spam-prevention/)

* **TODAY** finished refactoring front-page

###Wed Jan 14 10:36:07 2015 CST
* ~~["coming soon" as a story teaser]~~(http://www.niemanlab.org/2015/01/how-do-you-get-millennials-to-care-about-local-news-the-charlotte-observer-is-testing-out-one-idea/)

###Thu Jan 15 09:02:09 2015 CST
* YouTube embed responsive:
    * [this](http://help.hubspot.com/articles/KCS_Article/COS-Pages-Editor/How-do-I-make-my-embedded-YouTube-video-responsive) vs. [fitvids](http://fitvidsjs.com/)

* [customize youtube embed](http://vidiseo.com/embedding-youtube-videos/)

###Fri Jan 16 08:34:10 2015 CST
* [**picture** element in wp](http://terrificwebdesign.net/use-case/)

* nice: mailchimp's [pattern library](http://ux.mailchimp.com/patterns/typography)

* [responsive tables](http://dbushell.com/2012/01/05/responsive-tables-2/)

* more hover effects
    * [data attributes](http://tympanus.net/codrops/2013/07/05/using-custom-data-attributes-and-pseudo-elements/)
    * [hover.css](http://ianlunn.github.io/Hover/)

* here's [how to stop](https://github.com/IanLunn/Hover/wiki/Hacks-Explained) the weird 1px-ish line from drawing around an element using a transform:
    ```box-shadow: 0 0 1px rgba(0, 0, 0, 0)```

* [owl carousel](http://owlgraphic.com/owlcarousel/)

* **TODO** make headlines in front-page popular-widget like rest of headlines on page

* **TODO** hide 'More stories' on smallish screens

* **TODO** see how to looks to show twitter author's picture, maybe clipped in a circle, in social-pick**
    * [see here](http://www.git-tower.com/learn/)

###Sat Jan 17 10:11:38 2015 CST
* [wp theme unit test](http://codex.wordpress.org/Theme_Unit_Test)

* [deploying wp w/ git](http://culttt.com/2013/04/08/how-to-deploy-wordpress-themes-with-git/)

* [livereload + grunt + wp](http://robandlauren.com/2014/02/05/live-reload-grunt-wordpress/)

* [The Definitive Guide to adding Javascript & CSS to WordPress](http://pressing-matters.io/the-definitive-guide-to-adding-javascript-css-to-wordpress/)

* steps for tooling + wp--let's see how they work ```(so far so good)```
    1. steps for grunt, compass, susy in wp
    
        ```
        sudo npm init
        sudo npm install grunt --save-dev
        sudo npm install grunt-contrib-compass --save-dev
        sudo gem install susy
        sudo gem install compass-normalize
        ```
    
    2. here's my config.rb, in theme dir
        ```
        require 'susy'
        require 'compass-normalize'
        http_path = '/'
        css_dir = '.'
        #fonts_dir = 'builds/dev/fonts'
        sass_dir = 'sass'
        javascripts_dir = 'js'
        output_style = :nested
        #images_dir = 'builds/dev/img'
        relative_assets = true
        line_comments = true
        ```

    3. enqueue livereload in functions.php 
        ```
        wp_enqueue_script('eo-play-livereload', 'http://localhost:35729/livereload.js', array(), '', true);
        ```

    4. set up Gruntfile.js to livereload
        ```
        module.exports = function(grunt) {
        
          grunt.loadNpmTasks("grunt-contrib-watch");
          grunt.loadNpmTasks("grunt-contrib-compass");
        
          grunt.initConfig({
        
            compass: {
              dev: {
                options: {
                  config: 'config.rb'
                }
              }
            },
        
        
            watch: {
              options: {
                livereload: true
              },
              
              sass: {
                files: ['sass/**/*.scss'],
                tasks: ['compass:dev'] 
              },
        
              php: {
                files: ['**/*.php'],
                options: {
                  livereload: 35729
                }
              },
            
            } // watch
        
          }); // initConfig
          
          grunt.registerTask('compile-sass', ['compass:dev']);
          grunt.registerTask('default', ['watch']);
        
        }; // exports
        ```

###Sun Jan 18 09:12:46 2015 CST
* [css shapes](http://css-tricks.com/examples/ShapesOfCSS/)

* [twitter api -- profile image sizes](https://dev.twitter.com/overview/general/user-profile-images-and-banners)

* [multiple bgrounds and borders with :before, :after](http://nicolasgallagher.com/multiple-backgrounds-and-borders-with-css2/)
    * [and on css-tricks](http://css-tricks.com/pseudo-element-roundup/)

* [css stripes](http://css-tricks.com/stripes-css/)

###Mon Jan 19 11:02:01 2015 CST
* made a demo icon set on [fontello](http://fontello.com/)

###Tue Jan 20 05:15:34 2015 CST

###Wed Jan 21 09:40:14 2015 CST
* [animating svg](http://css-tricks.com/animating-svg-css/)

* [glyphs ref](http://css-tricks.com/snippets/html/glyphs/)

* [scaling SVGs in ie](https://gist.github.com/larrybotha/7881691)

###Thu Jan 22 06:48:30 2015 CST

* [make a link easier to click](http://stackoverflow.com/questions/8457298/anchor-tag-under-list-in-horizontal-menu-bar-and-its-block-behaviour)
    ```
    Adding display:block to the <a> element is not mendatory, but one advantage of it is it will take the full size of his parent (<li>) if you specify one (specially the height).
    ```
* [edit hosts file on a mac](http://www.tekrevue.com/tip/edit-hosts-file-mac-os-x/)

###Fri Jan 23 06:57:43 2015 CST
* do we need a tagline by our flag?

* [down triangles with css](http://jhaurawachsman.com/2013/css-triangles-border-stroke/)

* possible bground for social-pick
    ```
    background: repeating-linear-gradient(45deg, #F4543B , #F4543B 10px, #ef3f23 10px, #ef3f23 20px);
    ```
###Wed Jul 22 08:31:38 2015 CDT
* Smashing Magazine: [Smarter Grids With Sass And Susy](http://www.smashingmagazine.com/2015/07/smarter-grids-with-sass-and-susy/)
