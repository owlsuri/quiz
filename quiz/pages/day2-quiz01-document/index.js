export default function Day2Quiz01State(){

function onClickHi(){
    document.getElementById('hi').innerText = "반갑습니다"
}

    return(
        <button id="hi" onClick={onClickHi}>안녕하세요</button>
    )
}