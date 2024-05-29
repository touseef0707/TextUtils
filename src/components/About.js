import React from 'react'

export default function About(props) {

    let style = {
        backgroundColor: '#ffffff',
        color: '#000000'
    }

    if (props.mode === 'dark') {
        style = {
            backgroundColor: '#141414',
            color: '#ffffff'
        }
    }
    else if (props.mode === 'blue') {
        style = {
            backgroundColor: '#042430',
            color: '#ffffff'
        }
    }
    else if (props.mode === 'green') {
        style = {
            backgroundColor: '#043025',
            color: '#ffffff'
        }
    }
    else if (props.mode === 'grey') {
        style = {
            backgroundColor: '#43484a',
            color: '#ffffff'
        }
    }
    if (props.mode === 'light'){
        style = {
            backgroundColor: '#ffffff',
            color: '#000000'
        }
    }

    return (
        <div className='container px-3 py-2 my-5' style={style}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button" type="button" style={style}  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>1. Analyze your text</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body"  style={style} >
                            Text analysis involves examining written data to extract meaningful insights and improve overall quality. Techniques like grammar and spell checking, readability scoring, sentiment analysis, keyword density checks, and plagiarism detection are essential. Tools like Grammarly, Hemingway, and Yoast SEO help ensure your text is clear, accessible, and optimized for your audience.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" style={style} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>2. Free to use</strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={style} >
                            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit. TextUtils is a one-stop solution for character count online, word count online, and character count tool for SEO.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" style={style}  data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>3. Browser compatible</strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={style} >
                        This tools provide the convenience of accessing powerful writing aids directly through your web browser. Extensions and web-based tools like Grammarly, Hemingway Editor, ProWritingAid, and Google Docs ensure that you can analyze and improve your text in real-time from any device, streamlining the writing process.
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
