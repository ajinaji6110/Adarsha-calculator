function buttonclick(val)
{
    console.log(val)
    document.getElementById("screen").value=document.getElementById("screen").value+val;
}
function c(){
    document.getElementById("screen").value=""
    console.log("clear")

}
function equalClick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    console.log(result)
    document.getElementById("screen").value=result
}