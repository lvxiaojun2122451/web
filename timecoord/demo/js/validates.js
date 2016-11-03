/**
 * Created by Administrator on 2016/11/2.
 */







//
(function($) {
    $.extend($.fn, {
        validateDelegate: function( delegate, type, handler ) {
            return this.on(type, function( event ) {
                var target = $(event.target);
                if ( target.is(delegate) ) {
                    return handler.apply(target, arguments);
                }
            });
        }
    });
}(jQuery));