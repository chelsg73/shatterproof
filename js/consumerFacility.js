/*!
 * project-name v0.0.1
 * A description for your project.
 * (c) 2020 
 * MIT License
 * http://link-to-your-git-repo.com
 */

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