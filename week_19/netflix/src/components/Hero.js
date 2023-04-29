import Email from './Email';

function Hero(){
    return(
        <>
        <section className="Hero">

            <div className="col-md-8" style={{textAlign:"center"}}>
                <h1 className="info">Unlimited movies, TV shows, and more.</h1>
                <h3 className='infop'>Plans now start at US$2.99/month.</h3>
                <h5 style={{paddingTop:"10px"}}>Ready to watch? Enter your email to create or restart your membership.</h5>
                <Email/>
            </div>
            

        </section>
        </>
    );
}

export default Hero;