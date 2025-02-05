import "./AboutUs.css";

export default function AboutUs() {
  return <section className="about-us">
     <h1 className="about-us">Our Mission</h1>
        <div className="about-us_top">
          <p>Foster learning and building meaningful relationships within Baltimore&apos;s tech community.</p>
        </div>
    
        <h2 className="about-us contributor-title">Web Team Contributors</h2>

        <div className=" gallery-container">
        {/*First Row*/ }
          <div className="row-1">
            <div className="gallery-item1">
                <img src="src/assets/memberphotos/HeadValentineO-2.jpg" alt="Valentine Okundaye"/>
                <div className="name">Valentine Okundaye</div>
                <div className="name">Organizer</div>
            </div>
            <div className="gallery-item1">
                <img src="src/assets/memberphotos/HeadJaeY.jpeg" alt="Jae Yoo"/>
                <div className="name">Jae Yoo</div>
                <div className="name">Organizer</div>
            </div>
            <div className="gallery-item1">
                <img src="src/assets/memberphotos/HeadBrentG-2.jpg" alt="Brent Gauthier"/>
                <div className="name">Brent Gauthier</div>
            </div>
            
          </div>

          {/*Second Row*/ }
          <div className="row-2">
            <div className="gallery-item2">
                <img src="src/assets/memberphotos/HeadBricesonR-2.jpg" alt="Briceson Roy"/>
                <div className="name">Briceson Roy</div>
            </div>
            <div className="gallery-item2">
                <img src="src/assets/memberphotos/HeadMark.jpg" alt="Mark Reed"/>
                <div className="name">Mark Reed</div>
            </div>
            <div className="gallery-item2">
                <img src="src/assets/memberphotos/HeadTannerA.jpeg" alt="Tanner An"/>
                <div className="name">Tanner An</div>
            </div>
            <div className="gallery-item2">
                <img src="src/assets/memberphotos/HeadBezaM.jpg" alt="Beza Mogese"/>
                <div className="name">Beza Mogese</div>
            </div>
            
          </div>
        </div>    
    
  </section>;
}

