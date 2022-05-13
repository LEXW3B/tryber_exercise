const a  = 2;
const b  = 4;
const c  = -8;

if((a+b)>c && (a+c)>b && (b+c)>a){
    console.log("true");
}else if(a<0 || b<0 || c<0){
    console.log("ERROR");
}else{
    console.log('false');
}
