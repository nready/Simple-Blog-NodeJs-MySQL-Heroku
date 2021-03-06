$(document).ready(function () {

    /* Sidebar height set */
    //$('.sidebar').css('min-height',$(document).height());

    /* Secondary contact links */
    var scontacts = $('#contact-list-secondary');
    var contact_list = $('#contact-list');

    scontacts.hide();

    contact_list.mouseenter(function () {
        scontacts.fadeIn();
    });

    contact_list.mouseleave(function () {
        scontacts.fadeOut();
    });

    $('#summernote').summernote({
        //placeholder: 'your comment here...',
        minHeight: 50, // set minimum height of editor
        maxHeight: null, // set maximum height of editor
        focus: true // set focus to editable area after initializing summernote
        
    });

    $("#submit").on("submit", function (e) {
        e.preventDefault();
        if (!$('#summernote').summernote('isEmpty')) {
            $("#cmm").val($('#summernote').summernote('code'));

            $.post("http://localhost:5000/post/comment/", $(this).serialize(), function (data) {
                    //console.log(data);
                })
                .done(function () {
                    document.location.reload();
                })
                .fail(function () {
                    //alert("error");
                });
        }
    });
});