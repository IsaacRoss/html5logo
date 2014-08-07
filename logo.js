'use strict';
(function(doc){
    var ctx,
        fontFamily = "65px 'Gill Sans Ultra Bold', sans-serif",
        factorValue = 1;

    doc.addEventListener('DOMContentLoaded', function(){
        init();
    })

    function init(){
        ctx = doc.getElementById('canvas').getContext('2d');
        ctx.font = fontFamily;
        ctx.save();
        drawLogo();
    }

    function drawLogo(){
        var offsetY = 80; //specify amount to adjust the coordintates to draw the shield
        ctx.restore();
        ctx.save();
        ctx.clearRect(0, 0, 600, 400);
        ctx.scale(factorValue, factorValue);
        ctx.fillText("HTML", 31, 60);
        ctx.translate(0, offsetY);

        // 5 sided orange bg
        ctx.fillStyle = '#E34C26';
        ctx.beginPath();
        ctx.moveTo(39,250); //move to position on lower left
        ctx.lineTo(17, 0); //up and to the left
        ctx.lineTo(262, 0); //straight to the right
        ctx.lineTo(239, 250); //down and left slightly
        ctx.lineTo(139, 278); //line to middle, low point of shield
        ctx.closePath();
        ctx.fill();

        //right hand lighter orange part of the background
        ctx.fillStyle = '#F06529';
        ctx.beginPath();
        ctx.moveTo(139, 257);
        ctx.lineTo(220, 234);
        ctx.lineTo(239, 20);
        ctx.lineTo(139, 20);
        ctx.closePath();
        ctx.fill();
    }


})(document);

