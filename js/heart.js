function Heart(otp){
	for(var k in otp){
		this[k] = otp[k];
	}
};

Heart.prototype = {
	constructor: Heart,
	
	parentId : "wrap",//容器id
	marginVal : 2, 	  //砖块的margin值
	width : 16,		  //砖块的宽
	triangleH : 8,	  //下方三角形的高（即砖块数，通过此参数控制心形的大小）
	color : [		  //砖块的颜色值数组，随机取
				"#F580CC", 
				"#F9C912",
				"#FEEF92",
				"#F19F05",
				"#C15C02",
				"#FFBFBF", 
				"#F29BE7",
				"#B491FF",
				"#4DA6BD",
				"#3AA647"
	],		  
	
	getMarginRight : function(count){//获取最右边砖块的margin-right
		return (this.width + 2 * this.marginVal) * count + this.marginVal;
	},
	
	getRectangleH : function(){//获取中部矩形的高
		return Math.floor((this.triangleH - 1) / 2);
	},
	
	getHumpH : function(){//获取驼峰的高度
		return Math.floor((this.triangleH - 2) / 2);
	},
	
	getMaxHumpW : function(){//获取驼峰底部的宽
		return (this.getTriangleW() - 3) / 2;
	},
	
	getTriangleW : function(){//获取三角形的宽度
		return 1 + (this.triangleH - 1) * 2;
	},
	
	getRdmColor : function(){//获取随机颜色值
		var len = this.color.length;
		if(len == 0) return "#F29C9C";
		var idx = parseInt(Math.random() * len);
		return this.color[idx];
	},
	
	getBlockStyle : function(marginRight){//获取砖块样式
		var add = marginRight ? ('margin-right:' + marginRight + 'px;') : '';
		return    'width:' + this.width + 'px;'
				+ 'height:' + this.width + 'px;'
				+ 'background-color:' + this.getRdmColor() + ';'
				+ 'margin:' + this.marginVal + 'px;'
				+ 'float:right;'
				+ 'display:inline-block;'
				+ add;
	},
	
	getLineStyle : function(){//获取行样式
		return   'display:block;'
				+'height:' + (this.width + 2 * this.marginVal) + 'px;'
	},
	
	init : function(){
		var html = [], 
			rowHtml = [], 
			columnCount = 1, 
			triangleW = this.getTriangleW();
		for(var i=0; i<this.triangleH; i++){//先构建底部的等腰三角形
			var halfW = (triangleW - columnCount) / 2;
			marginRight = this.getMarginRight(halfW);
			 
			rowHtml.unshift('</div>');
			for(var j=1; j<columnCount; j++){
				rowHtml.unshift('<div style="' + this.getBlockStyle() + '"></div>');
			}
			rowHtml.unshift('<div style="' + this.getBlockStyle(marginRight) + '"></div>');
			rowHtml.unshift('<div style="' + this.getLineStyle() + '">');
			
			var row = rowHtml.join('');
			html.unshift(row);
			
			columnCount = columnCount + 2;
			rowHtml = [];
		}
		
		var rectangleH = this.getRectangleH();
			columnCount = columnCount - 2;
		for(var i=0; i<rectangleH-1; i++){//构建矩形
			marginRight = this.getMarginRight(0);
			 
			rowHtml.unshift('</div>');
			for(var j=1; j<columnCount; j++){
				rowHtml.unshift('<div style="' + this.getBlockStyle() + '"></div>');
			}
			rowHtml.unshift('<div style="' + this.getBlockStyle(marginRight) + '"></div>');
			rowHtml.unshift('<div style="' + this.getLineStyle() + '">');
			
			var row = rowHtml.join('');
			html.unshift(row);
			
			rowHtml = [];
		}
		
		var humpH = this.getHumpH(),
			humpCount = 0,
			rightCount = 1,
			middleCount = 1;
		for(var l=0; l<humpH; l++){//构建驼峰
			
			var maxHumpW = this.getMaxHumpW() - humpCount;
			if(this.triangleH > 8 && maxHumpW < 3) break;//驼峰修正
			rowHtml.unshift('</div>');
			
			marginRight = this.getMarginRight(middleCount);
			for(var m=1; m<maxHumpW; m++){
				rowHtml.unshift('<div style="' + this.getBlockStyle() + '"></div>');
			}
			rowHtml.unshift('<div style="' + this.getBlockStyle(marginRight) + '"></div>');
			
			marginRight = this.getMarginRight(rightCount);
			for(var m=1; m<maxHumpW; m++){
				rowHtml.unshift('<div style="' + this.getBlockStyle() + '"></div>');
			}
			rowHtml.unshift('<div style="' + this.getBlockStyle(marginRight) + '"></div>');
			rowHtml.unshift('<div style="' + this.getLineStyle() + '">');
			html.unshift(rowHtml.join(''));
			
			rightCount = rightCount + 1;
			middleCount = middleCount + 2;
			humpCount = humpCount + 2;
			rowHtml = [];
		}
		
		var container = document.getElementById(this.parentId);
		container.innerHTML = html.join("");
		html = [];
	}
};


$(function(){
	var opt = {
		parentId: "wrap",
		triangleH: 10,
		color: [
			"#FF443E"
		]
	};
	var heart = new Heart(opt);
	heart.init();
	
	animate();
	$(".wrap>div>div").click(animate).mouseover(function(){
		$(this).css({"background-color":"#fff"});
	}).mouseout(function(){
		$(this).css({"background-color":"#FF443E"});
	});
});
function animate(){
	$('.wrap>div>div').each(function(id){
		$(this).css({
			position: 'relative',
			top: '-200px',
			opacity: 0
		});
		var wait = Math.floor((Math.random()*3000)+1);
		$(this).delay(wait).animate({
			top: '0px',
			opacity: 1
		},1000);
	});
})