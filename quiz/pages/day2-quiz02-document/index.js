export default function Day2Quiz02Document(){

function onClickCounter(){
    let counter = Number(document.getElementById('count').innerText)+1
    document.getElementById('count').innerText = counter
}

    return(
    <div>
        <div id="count">0</div>
        <button onClick={onClickCounter}>카운트증가</button>
    </div>
    )
}