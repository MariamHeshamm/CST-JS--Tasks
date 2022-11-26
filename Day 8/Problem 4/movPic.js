    var timer;
    var dir = 1;//0 up //1 down
    var leftP1= 1;//1 mov to left 0 move to right
    var rightP2 = 1; //1 mov right 0 mov left
    function reset()
    {
        //debugger;
        var img3 = document.getElementById("img3");
        var img2 = document.getElementById("img2");
        var img1 = document.getElementById("img1");
        
        img3.style.top="15px";
        img2.style.right="850px";
        img1.style.left="15px";

        dir = 1;//0 up //1 down
        leftP1= 1;//1 mov to left 0 move to right
        rightP2 = 1; //1 mov right 0 mov left
    }

    function moveImg()
    {
       // debugger;
        var img3 = document.getElementById("img3");
        var img2 = document.getElementById("img2");
        var img1 = document.getElementById("img1");
        
        var p3 = getComputedStyle(img3).top;
        var p2 = getComputedStyle(img2).right;
        var p1 = getComputedStyle(img1).left;

        p3 = p3.substring(0,p3.length-2);
        p2 = p2.substring(0,p2.length-2);//ely 3lshemal
        p1 = p1.substring(0,p1.length-2);//ely 3lymen

     //   console.log(p3);
        var i = parseInt(p3);
        var j = parseInt(p1);
       // console.log(j);
        var k = parseInt(p2);

        if(i <= 380 && dir == 1)
        {
            i+=1;
            img3.style.top = i+"px";
            if(i == 380){dir = 0;}
        }
        if(dir == 0) 
        {       
            i-=1;
            img3.style.top = i+"px";
            if(i == 15){dir = 1;}
        }
     //   debugger;
        if(j <= 380 && leftP1 == 1) //move left
        {
            j+=1;
            img1.style.left = j+"px";
            if(j==380){leftP1 = 0;}
        }
        if(leftP1 == 0)
        {
            j-=1;
            img1.style.left = j+"px";
            if(j==15){leftP1 = 1;}
        }
//debugger;
        if(k <= 1220 && rightP2 == 1)
        {
            k+=1;
            img2.style.right = k+"px";
            if(k==1220){rightP2 = 0;}
            console.log("K");
            console.log(k);
            console.log(rightP2);
        }

        if(rightP2 == 0)
        {
            //debugger;
            k-=1;
            img2.style.right = k+"px";
            if(k==850){rightP2 = 1;}
        }    
        document.getElementById("p1").innerText="Image 1 Left: " + j;   
        document.getElementById("p2").innerText="Image 2 Right: " + k;   
    }

    function fireTimer()
    {
        if(window.document.getElementById("goBtn").innerText=="go")
        {
            window.document.getElementById("goBtn").innerText = "stop";
            timer = setInterval(moveImg, 10);
        }
        else if(window.document.getElementById("goBtn").innerText=="stop")
        {
            clearInterval(timer);
            window.document.getElementById("goBtn").innerText = "go";
        }     
    }