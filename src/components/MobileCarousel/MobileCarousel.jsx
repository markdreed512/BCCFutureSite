import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import { uid } from 'uid'
import Options from './MobileCarouselOptions'
import './MobileCarousel.css'

function MobileCarousel({CardType, slides}) {


    if (!Array.isArray(slides)) {
        return <div>No sponsors available.</div>; // Render a fallback message if slides isn't an array
    }
    return ( 
        <div className="mobile-carousel">
            <Splide hasTrack={false} aria-label="Image Carousel"  options={Options}>
                <SplideTrack>
                        {
                            slides.map(slide => {
                                return (
                                    <SplideSlide key={uid()}>
                                        <CardType content={slide}/>
                                    </SplideSlide>
                                )
                            })
                        }
                    
                </SplideTrack>
            </Splide>
        </div>
    );
}

export default MobileCarousel