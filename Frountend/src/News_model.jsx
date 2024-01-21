
function News_model({imgurl, title, description, url}) {
// function News_model({props}) {
     function change() {
        return (
          <div id="app">
            <a href="url" target="_blank" >
            </a>
         </div>
        )
    }
    return(
        <div className="container">
            <div className="image">    
                <img src={imgurl}/>
             </div>
            <h2 className="title">Title : {title}</h2>
            <p className="discription">{description}</p>
            <button className="read more" onClick={change}>Read more...</button>
        </div>
    )
}
export default News_model

