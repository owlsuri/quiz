export default function Day2Quiz02Document(){

function onClickAuth(){
    let authNum = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
    document.getElementById('auth').innerText = authNum
}

    return(
    <div>
        <div id="auth">000000</div>
        <button onClick={onClickAuth}>인증번호전송</button>
    </div>
    )
}