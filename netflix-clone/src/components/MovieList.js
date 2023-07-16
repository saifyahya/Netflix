import Movie from "./Movie"
function MovieList(props) {
    return(

        <div className = 'cards' style={{display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between"}}>
        {
        props.data.map((obj,i)=> {
           return <Movie  data={obj} key={i}/>
        })
        }
        </div>
    )
}

export default MovieList