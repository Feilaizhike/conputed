
var Expression = document.getElementById("Expression"),
    result = document.getElementById("result");

function onclickNum(e){
    if(result.innerHTML !== ""){
        Expression.innerHTML ="";
        result.innerHTML = "";
    }
    Expression.innerHTML += e;
}
function onclickClear(e){
    Expression.innerHTML = "";
    result.innerHTML = "";
}
function onclickResult(e){
    result.innerHTML=eval(Expression.textContent);
}
function onclickA(){
    Expression.innerHTML="��ܰ��ʾ��С����ͳ�����̫����";
}
