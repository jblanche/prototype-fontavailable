/* fontAvailable Prototype Plugin, v1.0
 *
 * Copyright (c) 2009, Jonathan Blanchet
 * Licensed under the MIT License
 * http://github.com/jblanche/prototype-fontavailable/tree/master
 * 
 * Based on jQuery fontAvailable plugin:
 * http://code.google.com/p/jquery-fontavailable/
 */

var fontAvailable =  function(fontName){
	var width, height ;
	
	// prepare element, and append to DOM
	element = $( document.createElement( 'span' )).setStyle({
		visibility: 'hidden',
	  position: 'absolute',
	  top: '-10000px',
	  left: '-10000px'
	}).update( 'abcdefghijklmnopqrstuvwxyz') ; 
  	
	document.body.appendChild(element);
	
  // get the width/height of element after applying a fake font
  width = element
      .setStyle({ 'fontFamily': '__FAKEFONT__'})
      .getWidth();
  height = element.getHeight();
  
  // set test font
  element.setStyle({ 'fontFamily': fontName});
  
  is_available =  width !== element.getWidth() || height !== element.getHeight();
	
	element.remove();
	
	return is_available ;
}