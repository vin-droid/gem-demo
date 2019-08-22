$( document ).on('turbolinks:load', function () {
    Lobibox.notify.DEFAULTS = $.extend({}, Lobibox.notify.DEFAULTS, {
        soundPath: 'https://github.com/arboshiki/lobibox/raw/master/sounds/',
        position: "bottom right",
        iconSource: 'fontAwesome'
    });

    (function () {
        $('#basicInfo').click(function () {
            Lobibox.notify('info', {
                msg: 'Lorem ipsum dolor sit amet against apennine any created, spend loveliest, building stripes.'
            });
        });
        $('#basicWarning').click(function () {
            Lobibox.notify('warning', {
                msg: 'Lorem ipsum dolor sit amet against apennine any created, spend loveliest, building stripes.'
            });
        });
        $('#basicError').click(function () {
            Lobibox.notify('error', {
                msg: 'Lorem ipsum dolor sit amet against apennine any created, spend loveliest, building stripes.'
            });
        });
        $('#basicSuccess').click(function () {
            Lobibox.notify('success', {
                msg: 'Lorem ipsum dolor sit amet against apennine any created, spend loveliest, building stripes.'
            });
        });
    })();
});