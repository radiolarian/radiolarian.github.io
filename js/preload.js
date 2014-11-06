function preload(images) {
    if (document.images) {
        var i = 0;
        var imageArray = new Array();
        imageArray = images.split(',');
        var imageObj = new Image();
        for(i=0; i<=imageArray.length-1; i++) {
            imageObj.src=imageArray[i];
        }
    }
}

preload('../image/abouth.png, ../image/arth.png, ../image/star-titleh.png, ../image/travelh.png, ../image/cath.png, ../image/noonh.png');