function Button(props){

    const [count, setCount] = React.useState(0);


    return (
    <a 
        className="btn btn-success"
        onClick={()=>{setCount(count+1); /*props.handler();*/ }}
        data-id={props.id}
    >
        {props.title} {count % 2 ? <Smile1 /> : <Smile2 />}
    </a>)

}


function Smile1(){
    return <span>🤓</span>;
}

function Smile2(){
    return <span>🤗</span>;
}