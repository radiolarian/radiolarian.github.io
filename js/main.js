// for kerning
    $(document).ready(function() {
        $(".name").lettering();
        $(".lastname").lettering();
    
        //for hair
        var isColored = false;
        var color1 = '#323336';
        var color2 = '#323336';
        var color3 = '#78bf8d';
        var msg = $(".last-par").html();

        $(".last-par").on('click', '#change-hair', function() {
            console.log("hi");
            isColored = (isColored ? false : true);
            console.log(isColored);
            if (isColored) {
                $('.name > span').each(function () { $(this).css('color', color1); });
                // $(".name > .char3").css('color', color2);
                $(".name > .char4").css('color', color3);
                $(".name > .char5").css('color', color2);
                $(".name > .char6").css('color', color2);
                $(".name > .char7").css('color', color2);
                $('.lastname > span').each(function () { $(this).css('color', color3); });
                $(".lastname > .char2").css('color', color2);
            }
            else {
                $('.name > span').each(function () { $(this).css('color', '#333333'); });
                $('.lastname > span').each(function () { $(this).css('color', '#333333'); });
            }

            //add text on small viewports
            var width = $(window).width();
            if (width <= 1024) {
                console.log("small port");
                $(".last-par").html(msg + " You need to expand the sidebar to see the changes. ");
            } else {
                console.log("normal");
                $(".last-par").html(msg);
            }

            return false;
        });

    });