function convert() {
    var d= document.getElementById("date").value;
    mon=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
    d2=d.split("-");
    m=""
    for (let i = 0; i <mon.length; i++) {
        if(d2[1].substring(0,3).toLowerCase()==mon[i]){
            m=i+1
            break
        }
    }
    if (m<10) {
        m="0"+m
    }
    if (d2[0]<10) {
        d2[0]="0"+d2[0]
    }
    if (d2[0].length==3) {
        d2[0]=d2[0].substring(1)
    }
    if (d2[2].length<=3) {
        if (d2[2]>=0 && d2[2]<50) {
            d2[2]="20"+d2[2]
        }else{
            d2[2]="19"+d2[2]
        }
    }
    res=m+"/"+d2[0]+"/"+d2[2]
    document.getElementById("result").innerHTML = res
}