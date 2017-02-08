$(function () {
    $("#includedHeader").load("header.html");
    $("#includedNavigation").load("navigation.html");
    $("#includedFooter").load("footer.html");
    $("#includedQualidade").load("qualidades.html");
});

$(document).ready(function () {
    $.getScript("js/dropdown-menu.js", function (data, textStatus, jqxhr) {
        console.log(data); // Data returned
        console.log(textStatus); // Success
        console.log(jqxhr.status); // 200
        //console.log("Load was performed.");
    });

    $.getScript("js/sticky-header.js", function (data, textStatus, jqxhr) {
        console.log(data); // Data returned
        console.log(textStatus); // Success
        console.log(jqxhr.status); // 200
        //console.log("Load was performed.");
    });

    var url = window.location.href;
    var urlSplit = url.split("/");
    var pagina = urlSplit[urlSplit.length - 1];
    pagina = pagina.replace("#", "")

    var currentLink = $('a[href*="' + pagina + '"]');
    var liParent = $('a[href*="' + pagina + '"]').closest('li[class^="parent"]');
    //alert(liParent);
    $('a[href*="' + pagina + '"]').closest('li[class^="parent"]').addClass("active");
});