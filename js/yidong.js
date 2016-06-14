$(function(){
	var ld=$(".login-drop")[0];
	var dropdown=$(".dropdown")[0];
	var yyt=$(".yyt")[0];
	var yytdown=$(".yytdown")[0];
	var caption=$(".caption")[0];
	var morecap=$(".morecap")[0];
	var body=$("body")

    //登录下拉单
	var loginz=$(".top-right2")[0];
	var ul=$(".ul")[0]
    var li1=$(".li1");
    	loginz.onmouseover=function(){
    		ul.style.display="block";
        }
        ul.onmouseover=function(){
        	ul.style.display="block";
        }
        ul.onmouseout=function(){
        	ul.style.display="none";
        }
    	loginz.onmouseout=function(){
    		ul.style.display="none";
    	}

	//手机营业厅下拉单
	// yyt.onmouseover=function(){
	// 	yytdown.style.display="block"
	// }
	// yyt.onmouseout=function(){
	// 	yytdown.style.display="none"
	// }
	 //开始关于中国移动
    var  guanyu1=$(".guanyu1")[0];
    var  guanyu2=$(".guanyu2")[0];
    guanyu1.onmouseover=function(){
    	guanyu2.style.display="block";
    }
    guanyu2.onmouseover=function(){
        	guanyu2.style.display="block";
        }
    guanyu2.onmouseout=function(){
        	guanyu2.style.display="none";
        }
    guanyu1.onmouseout=function(){
    		guanyu2.style.display="none";
    	}
	//地区下拉单

	//banner滚动
	var boss=$(".tu")[0];
	var imgs=$(".pic")
	var lis=$(".circle")
	var l=$(".bleft")[0];
	var r=$(".bright")[0];
	var flag="true";
	var n=0;
	var next=0;
	var t=setInterval(move,1000);
	function move(){
		if(!flag){
			return;
		}
		flag=false;
		next=n+1;
		if(next>=imgs.length){
			next=0;
		}
		for(var i=0;i<imgs.length;i++){
			lis[i].style.background="silver";
			imgs[i].style.zIndex=0;
			imgs[i].style.opacity=0;
		}
		    lis[next].style.background="#E8278B";
		    imgs[next].style.zIndex=1;
		    imgs[next].style.opacity=0;
		    animate(imgs[n],{opacity:0},400);
		    animate(imgs[next],{opacity:1},400,function(){flag=true});
		n=next;
	}
	function move1(){
		if(!flag){
			return;
		}
		flag=false;
		next=n-1;
		if(next<0){
			next=imgs.length-1;
		}
		for(var i=0;i<imgs.length;i++){
			lis[i].style.background="silver";
			imgs[i].style.zIndex=0;
	        imgs[i].style.opacity=0;
		}
		lis[next].style.background="#E8278B";
		imgs[next].style.opacity=0
		imgs[next].style.zIndex=1;
		animate(imgs[n],{opacity:0},400);
		animate(imgs[next],{opacity:1},400,function(){
			flag=true;
		});
		n=next;
	}
	boss.onmouseover=function(){
		clearInterval(t);
	}
	boss.onmouseout=function(){
		t=setInterval(move,1000);
	}
	l.onclick=function(){
		move();
	}
	r.onclick=function(){
		move1();
	}
	for(var i=0;i<imgs.length;i++){
		lis[i].index=i;
		lis[i].onmouseover=function(){
			for(var i=0;i<imgs.length;i++){
			  lis[i].style.background="silver";
			}
			    lis[this.index].style.background="#E8278B";
				imgs[this.index].style.opacity=0;
			    animate(imgs[n],{opacity:0},400);
			    animate(imgs[this.index],{opacity:1},400,function(){flag=true});
				n=this.index;
				next=this.index;
			}
		}


	//导航下拉单
	var nl01=$(".nl01")[0];
	var buy=$(".buy")[0];
	nl01.onmouseover=function(){
		buy.style.display="block"
	}
	nl01.onmouseout=function(){
		buy.style.display="none"
	}

	var nl02=$(".nl02")[0];
	var buy2=$(".buy2")[0];
	nl02.onmouseover=function(){
		buy2.style.display="block"
	}
	nl02.onmouseout=function(){
		buy2.style.display="none"
	}
	var nl03=$(".nl03")[0];
	var buy3=$(".buy3")[0];
	nl03.onmouseover=function(){
		buy3.style.display="block"
	}
	nl03.onmouseout=function(){
		buy3.style.display="none"
	}
	var nl04=$(".nl04")[0];
	var buy4=$(".buy4")[0];
	nl04.onmouseover=function(){
		buy4.style.display="block"
	}
	nl04.onmouseout=function(){
		buy4.style.display="none"
	}


	//小轮播
	var box2 = $(".lunbo")[0];
	var bo = $(".lunbodt2")[0];
	var zui = $(".zul")[0];
	var tusm = $(".img")[0];
	var l = $(".xixi")[0];
	var r = $(".yuyu")[0];
	var sign = true;
	var n2 = 0;
	var next2 = 0;
	var t2 = setInterval(dong, 2000);

	function dong() {
		if (!sign) {
			return;
		}
		sign = false;
		next2 = n2 + 1;
		var tusm =getFirst(zui);
		animate(zui, {
			left: -265
		}, 500, function() {
			zui.appendChild(tusm);
			zui.style.left =0;
			sign = true;
			n2=next
		})
	}
	function dong1() {
		if (!sign) {
			return;
		}
		sign = false;
		next2 = n2 -1;
		var tusm = getFirst(zui);
		animate(zui, {
			left: 265
		}, 500, function() {
			zui.appendChild(tusm);
			zui.style.left =0;
			sign = true;
			n2=next

		})
	}
	box2.onmouseover = function() {
		clearInterval(t);
	}
	box2.onmouseout = function() {     
		t = setInterval(move, 1000);
	}
	r.onclick = function(){   
		dong1(); 
	}
	l.onclick = function(){  
		dong();
	}



	var boss=$(".tu")[0];
	var imgs=$(".pic")
	var lis=$(".circle")
	var l=$(".bleft")[0];
	var r=$(".bright")[0];
	var flag="true";
	var n=0;
	var next=0;
	var t=setInterval(move,1000);
	function move(){
		if(!flag){
			return;
		}
		flag=false;
		next=n+1;
		if(next>=imgs.length){
			next=0;
		}
		for(var i=0;i<imgs.length;i++){
			lis[i].style.background="silver";
			imgs[i].style.zIndex=0;
			imgs[i].style.opacity=0;
		}
		    lis[next].style.background="#E8278B";
		    imgs[next].style.zIndex=1;
		    imgs[next].style.opacity=0;
		    animate(imgs[n],{opacity:0},400);
		    animate(imgs[next],{opacity:1},400,function(){flag=true});
		n=next;
	}
	function move1(){
		if(!flag){
			return;
		}
		flag=false;
		next=n-1;
		if(next<0){
			next=imgs.length-1;
		}
		for(var i=0;i<imgs.length;i++){
			lis[i].style.background="silver";
			imgs[i].style.zIndex=0;
	        imgs[i].style.opacity=0;
		}
		lis[next].style.background="#E8278B";
		imgs[next].style.opacity=0
		imgs[next].style.zIndex=1;
		animate(imgs[n],{opacity:0},400);
		animate(imgs[next],{opacity:1},400,function(){
			flag=true;
		});
		n=next;
	}
	boss.onmouseover=function(){
		clearInterval(t);
	}
	boss.onmouseout=function(){
		t=setInterval(move,1000);
	}
	l.onclick=function(){
		move();
	}
	r.onclick=function(){
		move1();
	}
	for(var i=0;i<imgs.length;i++){
		lis[i].index=i;
		lis[i].onmouseover=function(){
			for(var i=0;i<imgs.length;i++){
			  lis[i].style.background="silver";
			}
			    lis[this.index].style.background="#E8278B";
				imgs[this.index].style.opacity=0;
			    animate(imgs[n],{opacity:0},400);
			    animate(imgs[this.index],{opacity:1},400,function(){flag=true});
				n=this.index;
				next=this.index;
			}
		}
//开始五楼
})
