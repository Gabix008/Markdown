import React from "react";

const Toolbar = ({insertText})=>{

    return(
        <div className="toolbar">
            <h2>Documents</h2>
            <button onClick={() => insertText("# ", "")}>h1</button>
            <button onClick={() => insertText("## ", "")}>h2</button>
            <button onClick={() => insertText("**", "**")}>Bold</button>
            <button onClick={() => insertText("*", "*")}>italic</button>
            <button onClick={() => insertText("[", "](https://)")}>Link</button>
            <button onClick={() => insertText("```", "```")}>Code block</button>
            <button onClick={() => insertText("- ", "")}>List Item</button>
            <button onClick={() => insertText("\n---\n ", "")}>Horizontal Line</button>
            <button onClick={() => insertText("~~", "~~")}>Tachado</button>
        </div>

    )
    
}
export default Toolbar;