$(function(){
    $('#zoom').imageZoom();

    $('#zoom1').imageZoom({
        zoomSize: 180,
        borderSize: 8,
        borderColor: '#0d0'
    });

    $('#raw').imageZoom({
        zoomSize: 180,
        borderSize: 0,
        borderColor: '#fff',
        imageSrc: "/images/imageZoom/raw.jpg"
    });
});