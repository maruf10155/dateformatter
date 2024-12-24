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
// 19970130 1 20240802 12College Algebra
function clep() {
    var clep = document.getElementById("clep").value
    var score = document.getElementById("score").value
    var res=clep.substring(19,clep.length)+", "+clep.substring(13,15)+"/"+clep.substring(15,17)+"/"+clep.substring(9,13)+ ", "+score
    document.getElementById("result2").innerHTML = res
    var dob=clep.substring(4,6)+"/"+clep.substring(6,8)+"/"+clep.substring(0,4)
    document.getElementById("dob").innerHTML = dob

}