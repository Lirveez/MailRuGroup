var n=Math.abs(process.argv[2]);
var m=Math.abs(process.argv[3]);
var temp;
while (m != 0) {
    temp = m;
    m = n % m;
    n = temp;
}
console.log(n);