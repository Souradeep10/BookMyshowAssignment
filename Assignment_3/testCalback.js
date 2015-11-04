function TestFun(callback){
//var MyClass = (function()
//{
//return function(){
//alert("1");

	this.count = 0;
    this._callback = callback;
    this.fun_list = [];
    this.RegisterFunction = function(fun){
	
        this.fun_list.push(fun);
		
    };
	
//alert("Number of registered function  :  " + this.fun_list.length);
    
    this.Start = function(){
	//alert("start");
        for(var i=0; i <this.fun_list.length ;i++){
		//alert("inside start for");
		this.fun_list[i]();
		this.markDone("Function"+(i+1));
           
        }
       
    };
	
	this.markDone=function(fun)
        {
		alert(fun + " is done");
            this.count++;
			//alert(this.count);
            if(this.count==this.fun_list.length)
            {
                alert("all function executed,calling callback now");
                this._callback();
            }

        };

    

    
	};





function finalFun(){
    alert("Inside callback...all functions executed" );
}

