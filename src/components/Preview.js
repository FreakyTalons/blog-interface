import React from 'react';
import parse from 'html-react-parser'

export default function Preview ({blogSections})
{

    console.log(blogSections);
    const displaySections = (section) =>
    {
        switch(section.type) 
        {
            case "title":
                {
                    return(<h1>{section.content}</h1>)
                }
            case "text":
                {
                    return(parse(section.content))
                }
            case "image":
                {
                    return(<img src={sessionStorage.getItem(section.strgKey)} className="ImagePreview--img" alt={""}/>)
                }
            case "gif":
                {
                    return(<img src={section.content} className="ImagePreview--img" alt={""} />)
                }
        }
    }

    return(
        <div className='Preview--div'> 
            {(blogSections.length !== 0)?blogSections.map(displaySections):<div className='Preview--emptyErr'>
            <i class="submitIcon fa-solid fa-triangle-exclamation fa-3x"></i>
            <br/><br/><br/>
            Nothing to show here!<br/> Go back to the Editor and whip up some great content.🔮
            </div>}
        </div>
      
    )

}