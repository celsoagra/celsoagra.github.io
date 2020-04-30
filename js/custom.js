$("#container").mousemove(function(e) {
    var $this = $("body");
    var $target = $(".logo");
    var move = -15;
    var adjustY = 20;

    var x = e.pageX - $this.offset().left;
    var y = e.pageY - $this.offset().top;

    var movY = (y - $this.height() / 2) / $this.height() * move;
    var movX = (x - $this.width() / 2) / $this.width() * move;

    $target.css('background-position-x', movX);
    $target.css('background-position-y', movY - adjustY);
});