	
	function $(ele){
		return new jQuery(ele);
	}

	function jQuery(ele){
		//console.log(ele)
		this.eleName = ele;
		this.eleArr = [];
		switch(this.eleName[0]){
			case "#":
			this.eleArr.push(document.getElementById(this.eleName.substring(1)));
			break;
			case "." :
			this.eleNode = document.getElementsByClassName(this.eleName.substring(1));
			for(var i = 0;i < this.eleNode.length;i++){
				this.eleArr.push(this.eleNode[i]);
			};
			break;
		}
	}
	
	jQuery.prototype = {
		"css":function(json){
			for(var i = 0;i < this.eleArr.length;i++){
				for(var j in json){
					this.eleArr[i].style[j]=json[j];
				}
			}
			return this;
		},
		"width":function(num){
			for(var i = 0; i < this.eleArr.length;i++){
				this.eleArr[i].style.width = num + 'px';
			}
			//this.eleArr[0].style.width = num + "px";
			return this;
		},
		"height":function(num){
			for(var i = 0; i < this.eleArr.length;i++){
				this.eleArr[i].style.height = num + 'px';
			}
			return this;
		}
	}
	
	$('.kkk').css({
		"height":"500px",
		"float":"left",
		"width":"300px",
		"background":"black",
		
	})
	//$('.kkk').height(200);
	
	//$('#mmmm').width(300);

