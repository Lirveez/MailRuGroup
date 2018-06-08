var inc_str = process.argv[2];
var res_str = "";
for (var i=0;i<inc_str.length;i++){
    if((inc_str[i].toUpperCase()!=='Р')&&
        (inc_str[i].toUpperCase()!=='К')&&
         (inc_str[i].toUpperCase()!=='Н'))
        res_str+=inc_str[i];
}
console.log(res_str);
