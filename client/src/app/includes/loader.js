
export default function Loader({value}){
    return(
        <section className="pre-loader" style={value ? value : {}}> 
            <img src="assets/images/ajax-loader.gif" className="img-fluid" alt="loader"/>
        </section>
    )
}