import Email from './Email';

function Tile5(){
    return(
        <section className="container">
            <div className="row Tile5">
            <div className="col-md-12  col-xs-12 Faq" >
                    <h1 className='tileh1'>Frequently Asked Questions</h1>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item my-3 py-2 faqinfo">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed text-white fs-3 faqinfo" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                What is Netflix ?
            </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">

            <div className="accordion-body text-start text-white fs-4">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
            <br />
            <br />
            You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</div>
            </div>
        </div>

        <div className="accordion-item my-3 py-2 faqinfo">
            <h2 className="accordion-header ">
            <button className="accordion-button collapsed faqinfo text-white fs-3 border-0 outline-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                How much does Netflix cost ?
            </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">

            <div className="accordion-body text-start text-white fs-4">Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from US$2.99 to US$9.99 a month. No extra costs, no contracts.
            </div>
            </div>
        </div>

        <div className="accordion-item my-3 py-2 faqinfo">
            <h2 className="accordion-header ">
            <button className="accordion-button collapsed faqinfo text-white fs-3 border-0 outline-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Where can I watch ?
            </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">

            <div className="accordion-body text-start text-white fs-4">
                <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
                <p>You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
            </div>
            </div>
        </div>

        
        <div className="accordion-item my-3 py-2 faqinfo">
            <h2 className="accordion-header ">
            <button className="accordion-button collapsed faqinfo text-white fs-3 border-0 outline-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                How do I cancel ?
            </button>
            </h2>
            <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">

            <div className="accordion-body text-start text-white fs-4">
                <p>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime..</p>
            </div>
            </div>
        </div>

        <div className="accordion-item my-3 py-2 faqinfo">
            <h2 className="accordion-header ">
            <button className="accordion-button collapsed faqinfo text-white fs-3 border-0 outline-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
               What can I watch on Netflix?
            </button>
            </h2>
            <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">

            <div className="accordion-body text-start text-white fs-4">
                <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
            </div>
            </div>
        </div>

        <div className="accordion-item my-3 py-2 faqinfo">
            <h2 className="accordion-header ">
            <button className="accordion-button collapsed faqinfo text-white fs-3 border-0 outline-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
              Is Netflix good for kids?
            </button>
            </h2>
            <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">

            <div className="accordion-body text-start text-white fs-4">
                <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.</p>
                <p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                </p>
            </div>
            </div>
        </div>

        
    </div>
               
            </div>
            </div>
            <div className="row Tile5-1" >
                <div className="col-md-12 Faq">
                    <p className="ready">Ready to watch? Enter your email to create or restart your membership.</p>
                    <Email/>

                </div>
                

            </div>
            
        </section>
    );
}

export default Tile5;

{/* <div className="faqbox">
<div className="faqsub">
    <div className="faqinfo">What is Netflix?</div>
    <i className='bx bx-plus'></i>
</div>
<div className="faqsub">
    <div className="faqinfo">How much does Netflix cost?</div>
    <i className='bx bx-plus'></i>
</div>             
<div className="faqsub">
    <div className="faqinfo">Where can I watch?</div>
    <i className='bx bx-plus'></i>
</div>                 <div className="faqsub">
<div className="faqinfo">How do I cancel?</div>
<i className='bx bx-plus'></i>
</div>               
<div className="faqsub">
  <div className="faqinfo">What can I watch on Netflix??</div>
  <i className='bx bx-plus'></i>
</div>
<div className="faqsub">
    <div className="faqinfo">What is Netflix?</div>
    <i className='bx bx-plus'></i>                
  </div>
</div> */}