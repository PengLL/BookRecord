export default{
    push(node,remDistance){
        let startX=0,
            startY=0,
            positionX=0,
            positionY=0,
            endX=0,
            distanceX=0,
            distanceY=0,
            rem=window.rem;
        let pxDistance=rem*remDistance;
        node.addEventListener("touchstart",function(event){
            let nodeLeft=parseInt(node.style.left.slice(0,-2));
            startX=event.touches[0].pageX;
            startY=event.touches[0].pageY;
            if(nodeLeft==-pxDistance){
                node.style.transition="left 0.15s linear";
                node.style.left="0px";
                setTimeout(function(){
                        node.style.transition="left 0s linear";
                    },150);
            }
        });
        node.addEventListener("touchmove",function(event){
            let nodeLeft=parseInt(node.style.left.slice(0,-2));
            positionX=event.touches[0].pageX;
            positionY=event.touches[0].pageY;
            distanceX=positionX-startX;
            distanceY=positionY-startY;
            if(distanceX<=0&&distanceX>-pxDistance){
                node.style.left=distanceX+"px";
            }     
        });
        node.addEventListener("touchend",function(event){
            endX=event.changedTouches[0].pageX;
            let finalDistance=endX-startX;
            if(finalDistance<0){
                 node.style.transition="left 0.1s linear";
                if(-finalDistance>pxDistance/2){
                    node.style.left=-pxDistance+"px";
                    setTimeout(function(){
                        node.style.transition="left 0s linear";
                    },100);
                }
                else{
                    node.style.left="0px";
                    setTimeout(function(){
                        node.style.transition="left 0s linear";
                    },100)
                }
            }
        });
    }
}