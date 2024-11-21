import { useState, useEffect } from 'react'
import supabase from '../../config/supabaseClient'
import { uid } from 'uid'
import SponsorCard from '../SponsorCard/SponsorCard'
import './Sponsors.css'

function Sponsors() {
    const [ fetchError, setFetchError ] = useState(null)
    const [ sponsors, setSponsors ] = useState([])

    useEffect(() => {
        const fetchSponsors = async () => {
            const { data, error } = await supabase
                .from('sponsors')
                .select()
            console.log("data:", data)
            if(error){
                setFetchError("Could not fetch sponsors")
                setSponsors(null)
                console.error(error)
            }
            if(data){
                setSponsors(data)
                setFetchError(null)
            }
        }
        fetchSponsors()
    },[])
    return ( 
        <div className="sponsors">
            <h2>Sponsors</h2>
            <p className="sponsors__description">Partner with Us to Grow Your Brand and Support the Tech Community</p>
            <div className="sponsors__tiles">
                {sponsors.map(sponsor => {
                    return (
                        <SponsorCard sponsor={sponsor} key={uid()}/>
                    )
                })}
            </div>
            <a href="emailto:test@example.com" className="sponsors__partner-link">Partner With Us</a>
        </div>
     );
}

export default Sponsors;