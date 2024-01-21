import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';
import News_model from './News_model'
import Footer from './Footer';


function App() {
  let [articles, setArticles] = useState([]);
  let [search,setSearch]= useState('health care');

  useEffect(() => {

    axios.get("https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=9cb709aa7e8e4bf19a3456eacc60537a")
      .then(res => {
        console.log(res.data.articles)
        setArticles([...res.data.articles])
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])
  return (
    <div className="App">
      <input type='search'  onChange={(e)=>{
        if(e.target.value!==""){

          setSearch(e.target.value)
          console(e.target.value)
        }
        else
        {
          setSearch=('health')
        }
      }} placeholder='Search for Disease' width="20vw"
      height="25vh"/>

      <section className='collage'>
        {
          articles.length!==0?
          articles.map((articles) => (

            <News_model key={Math.floor(Math.random()*10)} imgurl={articles.urlToImage} description={articles.description} title={articles.title} url={articles.url} />


          ))
          :
          <h2>No Blog Found</h2>

        }
      </section>
      <Footer/>
    </div>
  )
}

export default App
