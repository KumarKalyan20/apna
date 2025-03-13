function handleClick(event) {
    console.log("Hello!");
    console.log(event);
}
 
 function handleMouseOver() {
    console.log("bye!");
 }

 function handleDblClick() {
    console.log("you double clicked");
 }


export default function Button() {
    return (
   <div>
    <button onClick={handleClick}>Click Me!</button>
    <p onMouseOver={handleMouseOver}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Laboriosam iste molestias eos dolores doloribus velit iusto labore officiis quidem? 
        Expedita veritatis earum labore sit explicabo non,
         consequuntur alias nisi eum!
        </p>
         <button onDoubleClick={handleDblClick}>double click me!</button>
    </div>
    );
}