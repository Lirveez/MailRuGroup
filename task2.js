var init_str = process.argv[2].replace(/['"]+/g, '');
var res_str = process.argv[3].replace(/['"]+/g, '');
var l_moves = 0;
var r_moves = 0;
var flag = 0;
var init_index ;
var res_index ;
for(var i=0;i<=init_str.length;i++){
    init_index = 0;
    res_index = 0;
    while(init_index<init_str.length){
        if(init_str[(init_index+i)%init_str.length]===res_str[res_index]){
            flag=1;

        }
        else{

            flag=0;

            break;
        }
        init_index++;
        res_index++;
    }
    if(flag===1){
        l_moves=i;
        break;
    }
}
for(var i=0;i<=init_str.length;i++){

    init_index = 0;
    res_index = 0;
    while(init_index<init_str.length){

        if(init_str[(init_str.length+init_index-i)%init_str.length]===res_str[res_index]) {
            flag = 1;
        }
        else{
            flag=0;
            break;
        }

        init_index++;
        res_index++;
    }
    if(flag===1){
        r_moves=i;
        break;
    }
}
if((flag===0)||(res_str.length!=init_str.length)){
    console.log(-1)
}
else if(r_moves<=l_moves)
    console.log(r_moves);
else if(l_moves<r_moves)
    console.log(l_moves);