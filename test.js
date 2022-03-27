
function func(timeStr){
    //     var timeStrArray = timeStr;
        var count = 0;
        var [year,month,day,hour,min,miao]= ['','','','','',''];
        var res = "";
        for(var i = 0; i < timeStr.length;i++){
            // console.log(timeStrArray[i])
            if(count <= 3){
                year += timeStr[i];
            }else if(count <= 5){
                month += timeStr[i];
            }else if(count <= 7){
                day += timeStr[i];
            }else if(count <= 9){
                hour += timeStr[i];
            }else if(count <= 11){
                min += timeStr[i];
            }else if(count <= 13){
                miao += timeStr[i];
            }
            count ++;
        }
        res = year+'/'+month+'/'+day+' '+hour+':'+min+':'+miao;
        console.log(res);
        
    }
    func([2,0,2,2,1,0,1,0,1,0,1,0,1,0])