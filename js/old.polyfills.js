/*!
 * project-name v0.0.1
 * A description for your project.
 * (c) 2020 
 * MIT License
 * http://link-to-your-git-repo.com
 */

console.log('another-file.js file loaded');
$(document).ready((function(){
    
    $('.btnHov')
    .on('mouseenter', (function(e) {
        var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find('span').css({top:relY, left:relX})
      }))

      .on('mouseout', (function(e) {
        var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find('span').css({top:relY, left:relX})
      }));
      
  }));


$(document).ready((function(){

  $('.cardBtn').click((function(){

    var allHeader = $('.cardBtn').parents('.card-header');

    var thisHead = $(this).parents('.card-header');

    if((thisHead).hasClass('true')){

      //remove all False classes and ensure all have a true class
      $(allHeader).removeClass('false');
      $(allHeader).addClass('true');

      //if THIS has a true class, remove it and add a false class
      $(thisHead).removeClass('true');
      $(thisHead).addClass('false');

    } else if((thisHead).hasClass('false')){

      //remove all false classes and ensure all have a true class
      $(allHeader).removeClass('false');
      $(allHeader).addClass('true');

      //if THIS has a false class, remove it and add a true class
      $(thisHead).removeClass('false');
      $(thisHead).addClass('true');
    }


  }));

}));
$(document).ready((function(){

  $('#stateButton').click((function(){

    var child1 = $(this).children('.col-md-1');

    var child = $(child1).children('i.fas');
    

    if($(child).hasClass("off")) {

      $(child).removeClass("fa-plus").addClass("fa-minus");
      $(child).removeClass("off");

    } else {

      $(child).removeClass("fa-minus").addClass("fa-plus");
      $(child).addClass("off");
    }

  }));  

}));

$(document).ready((function(){

  $('.btn-link').click((function(){

    // var child1 = $(this).children(".col-md-2").children('i.fas');

    // var allChild = $('.btn-link').children(".col-md-2").children('i.fas');


    // if($(child1).hasClass('on')){

    //   $(child1).removeClass('on');
    //   $(child1).addClass("off");

    //   $(child1).removeClass("fa-minus").addClass("fa-plus");

    // } else if($('.btn-link').hasClass('collapsed')){

    //   $(child1).removeClass('off');
    //   $(child1).addClass("on");

    //   $(child1).removeClass("fa-plus").addClass("fa-minus");

      
    //   $('btn-link').addClass('collapsed');
    //   $(allChild).removeClass('on');
    //   $(allChild).removeClass("fa-minus").addClass("fa-plus");


  }));  

}));