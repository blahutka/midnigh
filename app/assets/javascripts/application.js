//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require vendors/jquery.scrollTo-1.4.3.1-min
//= require vendors/jquery.nav
//= require vendors/slimbox2
//= require_self

$(document).ready(function () {

    var getHash = function (link) {
        return link.attr('href').split('#')[1];
    }


    $('a.local').click(function (e) {
        var hash_id = getHash($(this))
        $.scrollTo('#' + hash_id, 1400, {offset:-50});
        window.location.hash = hash_id;
        e.preventDefault();
    })


    $(".thumbnails a, a.lightbox").slimbox();

})
