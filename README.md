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
    * ```
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
* TODO need a max-width on body text
    * maybe 570px/35.625em?
* TODO ~~our small-screen viewport is floaty horizontally~~ Mon Dec 22 14:02:18 CST 2014
* Our Typekit [colophon](https://typekit.com/colophons/vdi5qvx)
* PageSpeed on eo-build: 57/100 mobile Mon Dec 22 16:42:44 CST 2014

### Tue Dec 23 06:18:02 CST 2014
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

* TODO we lost our figcaption --> needs a **container** mixin
* TODO wrap our ads in a link

* pagespeed: 57 mobile

* so, on mediumish views, having the thin white column on the left is kinda jarring

