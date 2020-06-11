/*!
 * project-name v0.0.1
 * A description for your project.
 * (c) 2020 
 * MIT License
 * http://link-to-your-git-repo.com
 */

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