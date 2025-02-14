import "./AboutUs.css";
import { useEffect, useState } from 'react';
import supabase from "../../utils/supabaseClient.js";

export default function AboutUs() {
  const [members, setMembers] = useState([]);

  // Fetch members from Supabase
  useEffect(() => {
    const fetchMembers = async () => {
      const { data, error } = await supabase.from('member').select('id, first_name, last_name');

      if (error) {
        console.error('Error fetching members:', error);
      } else {
        console.log('Fetched members:', data);
        setMembers(data);
      }
    };

    fetchMembers();
  }, []);

  // Helper function to get a member's full name by ID
  const getMemberName = (id) => {
    const member = members.find(member => member.id == id);
    return member ? `${member.first_name} ${member.last_name}` : 'Loading...';
  };

  return (
    <section className="about-us">
      <h1 className="about-us">Our Mission</h1>
      <div className="about-us_top">
        <p>Foster learning and building meaningful relationships within Baltimore&apos;s tech community.</p>
      </div>
      <div className="gallery-container">
        {/* First Row */}
        <div className="row-1">
          <h2 className="about-us contributor-title">Our Team</h2>
          <div className="gallery-items-container">
            <div className="gallery-item1">
              <img src="src/assets/memberphotos/HeadValentineO-2.jpg" alt="Valentine Okundaye"/>
              <div className="namelink">
                <div id="1" className="name">{getMemberName(1)}</div>
                <div className="role">Organizer</div>
                <a href="https://www.linkedin.com/in/valentine-okundaye-290893174" target="_blank" rel="noopener noreferrer">
                  Profile
                </a>
              </div>
            </div>
            <div className="gallery-item1">
              <img src="src/assets/memberphotos/HeadJaeY.jpeg" alt="Jae Yoo"/>
              <div className="namelink" id="jae-namelink">
                <div id="2" className="name">{getMemberName(2)}</div>
                <div className="role">Organizer</div>
                <a href="https://www.linkedin.com/in/jaewoong-yoo-7a28a152/" target="_blank" rel="noopener noreferrer">
                  Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="row-2">
          <h2 className="about-us contributor-title">Web Team Contributors</h2>
          <div className="gallery-items-container">
            <div className="gallery-item2">
              <img src="src/assets/memberphotos/HeadBricesonR-2.jpg" alt="Briceson Roy"/>
              <div className="namelink2" id="brice-namelink">
                <div id="5" className="name">{getMemberName(5)}</div>
                <div className="role">Contributor</div>
                <a href="https://www.linkedin.com/in/bricesonroy/" target="_blank" rel="noopener noreferrer">
                  Profile
                </a>
              </div>
            </div>
            <div className="gallery-item2">
              <img src="src/assets/memberphotos/HeadMark.jpg" alt="Mark Reed"/>
              <div className="namelink2" id="mark-namelink">
                <div id="4" className="name">{getMemberName(4)}</div>
                <div className="role">Contributor</div>
                <a href="https://www.linkedin.com/in/mark-reed-958750172/" target="_blank" rel="noopener noreferrer">
                  Profile
                </a>
              </div>
            </div>
            <div className="gallery-item2">
              <img src="src/assets/memberphotos/HeadTannerA.jpeg" alt="Tanner An"/>
              <div className="namelink2" id="tanner-namelink">
                <div id="6" className="name">{getMemberName(6)}</div>
                <div className="role">Contributor</div>
                <a href="https://www.linkedin.com/in/huiyian/" target="_blank" rel="noopener noreferrer">
                  Profile
                </a>
              </div>
            </div>
            <div className="gallery-item2">
              <img src="src/assets/memberphotos/HeadBezaM2.png" alt="Beza Mogese"/>
              <div className="namelink2" id="beza-namelink">
                <div id="7" className="name">{getMemberName(7)}</div>
                <div className="role">Contributor</div>
                <a href="https://www.linkedin.com/in/beza-mogese/" target="_blank" rel="noopener noreferrer">
                  Profile
                </a>
              </div>
            </div>
            <div className="gallery-item2">
              <img src="src/assets/memberphotos/HeadBrentG-2.jpg" alt="Brent Gauthier"/>
              <div className="namelink2" id="brent-namelink">
                <div id="3" className="name">{getMemberName(3)}</div>
                <div className="role">Contributor</div>
                <a href="https://www.linkedin.com/in/brentgauthier/" target="_blank" rel="noopener noreferrer">
                  Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}