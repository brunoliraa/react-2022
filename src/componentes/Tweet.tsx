
type TweetProps = { 
    text: String;
}

export function Tweet(props: TweetProps){

    return (
        <div>
        {props.text}
        </div>
    )
}