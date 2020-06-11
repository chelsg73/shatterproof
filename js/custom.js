/*!
 * project-name v0.0.1
 * A description for your project.
 * (c) 2020 
 * MIT License
 * http://link-to-your-git-repo.com
 */

$( '#accordionExample a[data-toggle]').on('click', (function (e) {
  $( e.target ).text( $( e.target ).text() === '+ more' ? '- less' : '+ more' );
//  var styles = $( e.target ).text() === 'see more' ? {color: '#61BDB0'} : {color: 'inherit'};
//  $( e.target ).css( styles );
}));
