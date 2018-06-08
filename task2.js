var init_str = process.argv[2];
var res_str = process.argv[3];
var moves = 0;
var flag = 0;
var init_index ;
var res_index ;
if(init_str.length!==res_str.length){
    moves=-1;
    flag=1;
}
if(flag!==1)
    for(var i=1;i<=init_str.length/2;i++){
        init_index = 0;
        res_index = 1;
        while(init_index<init_str.length){
            if(init_str[(init_index+i)%init_str.length]==="'"){
                init_index ++;
                continue;
            }
            else if(init_str[(init_index+i)%init_str.length]===res_str[res_index])
                flag=1;
            else{
                flag=0;
                break;
            }
            init_index++;
            res_index++;
        }
        if(flag===1){
            moves=i-1;
            break;
        }
    }
if(flag!==1)
    for(var i=1;i<=init_str.length/2;i++){
        init_index = 0;
        res_index = 1;
        while(init_index<init_str.length){
            if(init_str[(init_str.length+init_index-i)%init_str.length]==="'"){
                init_index ++;
                continue;
            }
            else if(init_str[(init_str.length+init_index-i)%init_str.length]===res_str[res_index])
                flag=1;
            else{
                flag=0;
                break;
            }
            init_index++;
            res_index++;
        }
        if(flag===1){
            moves=i-1;
            break;
        }
    }
if(flag===0){
    moves=-1;
    console.log(moves)
}
else
    console.log(moves);