var a,b,c,d,e;
a=[1,3,5,7,9,11,12,14,16,18,20];
b=[];
c=[];
d=0;
e=0;
for(i=0;i<a.length;i++){
    if(a[i]%2==0){
        b[d]=a[i]
        d++
    }
    else{
        c[e]=a[i]
        e++
    }
    
}
document.write(b +"<br>");
    document.write(c)