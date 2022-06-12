// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

//= require jquery3
//= require jquery_ujs
//= require_tree .

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
Rails.start()
Turbolinks.start()
require("@rails/activestorage").start()
require('jquery')



///////////////////////////////////////////////////////////////////////////////
// Set up for the footer.
///////////////////////////////////////////////////////////////////////////////

window.addEventListener('load', function(event) {
    
    // Define the function used to setup the footer.
    var positionFooter = function () {
        // Ensure the footer's width matches the window's width.
        $('#footer').css("width", $(window).width());

        // Calculate element heights.
        var windowHeight = $(window).height();
        var footerHeight = $('#footer').height();

        // Get the doc height, and remove the footer from the doc height, if it is not absolute.
        var docHeight = $('body').outerHeight(true);        
        if($('#footer').css("position") != "absolute") {
            docHeight = docHeight - footerHeight;
        }        
        
        // Check whether a bottom navbar exists.        
        var margin = 0;
        var bottomNavbar = $('.navbar-fixed-bottom');
        if(bottomNavbar.length > 0) {
            margin = bottomNavbar.height();
        }

        // Check how much space we have for the footer. If enough move it to the bottom by making it absolute. 
        // If not, make if drop down to the hidden bottom of the page by making it relative. 
        var spaceForFooter = windowHeight - docHeight - margin;
        //console.log('Win: ' + windowHeight + ' Foot: ' + footerHeight + ' Cont: ' + docHeight +' Diff: ' + spaceForFooter);
        if (spaceForFooter >= footerHeight) {
            // Abslute to prevent footer going up.
            $('#footer').css("position", "absolute");
            $('#footer').css("bottom", margin);
            $('#footer').css("left", 0);
        }
        else {
            // Relative to make footer go down the page.
            $('#footer').css("position", "relative");
            $('#footer').css("bottom", "");
            $('#footer').css("left", "");                  
        }
        return;
    };    
    
    // Code to be executed every time a document is loaded.
    $(document).ready(function () {
        // Setup the footer.
        positionFooter();
        
        // Make the footer re-arrange itself if the window resizes.
        $(window).resize(function() {
            positionFooter();
        });
        
        // Make the footer re-arrange itself when we scroll, if there is need to.
        $(window).on('scroll', function(){
                positionFooter();
        });          
        
        // Make the footer re-arrange itself if an editor loads.
        if(typeof(CKEDITOR) != 'undefined') {
            CKEDITOR.on('instanceReady',function(){
                positionFooter();
            });
        }            
        
        // Make the footer re-arrange itself if an accordion is toggled.
        $('.accordion').on('shown', function(){
            positionFooter();
        });
        
        // Make the footer re-arrange itself if an accordion is toggled.
        $('.accordion').on('hidden', function(){
                positionFooter();
        });               
    });
}, true);


window.addEventListener('resize', function(event) {
    
    // Define the function used to setup the footer.
    var positionFooter = function () {
        // Ensure the footer's width matches the window's width.
        $('#footer').css("width", $(window).width());

        // Calculate element heights.
        var windowHeight = $(window).height();
        var footerHeight = $('#footer').height();

        console.log(`Window height: ${windowHeight}`);

        // Get the doc height, and remove the footer from the doc height, if it is not absolute.
        var docHeight = $('body').outerHeight(true);        
        if($('#footer').css("position") != "absolute") {
            docHeight = docHeight - footerHeight;
        }        
        
        // Check whether a bottom navbar exists.        
        var margin = 0;
        var bottomNavbar = $('.navbar-fixed-bottom');
        if(bottomNavbar.length > 0) {
            margin = bottomNavbar.height();
        }

        // Check how much space we have for the footer. If enough move it to the bottom by making it absolute. 
        // If not, make if drop down to the hidden bottom of the page by making it relative. 
        var spaceForFooter = windowHeight - docHeight - margin;
        //console.log('Win: ' + windowHeight + ' Foot: ' + footerHeight + ' Cont: ' + docHeight +' Diff: ' + spaceForFooter);
        if (spaceForFooter >= footerHeight) {
            // Abslute to prevent footer going up.
            $('#footer').css("position", "absolute");
            $('#footer').css("bottom", margin);
            $('#footer').css("left", 0);
        }
        else {
            // Relative to make footer go down the page.
            $('#footer').css("position", "relative");
            $('#footer').css("bottom", "");
            $('#footer').css("left", "");                  
        }
        return;
    };    
    
    // Code to be executed every time a document is loaded.
    $(document).ready(function () {
        // Setup the footer.
        positionFooter();
        
        // Make the footer re-arrange itself if the window resizes.
        $(window).resize(function() {
            positionFooter();
        });
        
        // Make the footer re-arrange itself when we scroll, if there is need to.
        $(window).on('scroll', function(){
                positionFooter();
        });          
        
        // Make the footer re-arrange itself if an editor loads.
        if(typeof(CKEDITOR) != 'undefined') {
            CKEDITOR.on('instanceReady',function(){
                positionFooter();
            });
        }            
        
        // Make the footer re-arrange itself if an accordion is toggled.
        $('.accordion').on('shown', function(){
            positionFooter();
        });
        
        // Make the footer re-arrange itself if an accordion is toggled.
        $('.accordion').on('hidden', function(){
                positionFooter();
        });               
    });
}, true);


