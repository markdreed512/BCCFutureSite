import "./AboutUs.css";
import { useEffect, useState } from 'react';
import supabase from "../../utils/supabaseClient.js";

export default function AboutUs() {
  const [members, setMembers] = useState([]);
  const [teamRoles, setTeamRoles] = useState([]);

  // Fetching members and team roles from Supabase
  useEffect(() => {
    const fetchData = async () => {
      // members
      const { data: memberData, error: memberError } = await supabase
        .from('member')
        .select('id, first_name, last_name, profile_link');

      // team roles
      const { data: roleData, error: roleError } = await supabase
        .from('team_roles')
        .select('id, role');

      if (memberError || roleError) {
        console.error('Error fetching data:', memberError || roleError);
      } else {
        console.log('Fetched members:', memberData);
        console.log('Fetched team roles:', roleData);
        setMembers(memberData);
        setTeamRoles(roleData);
      }
    };

    fetchData();
  }, []);

  // Helper function to get a member's full name, profile link, and role by ID
  const getMemberInfo = (id) => {
    const member = members.find(member => member.id == id);
    const role = teamRoles.find(role => role.id == id)?.role || 'Loading...';

    return member ? { 
      fullName: `${member.first_name} ${member.last_name}`, 
      profileLink: member.profile_link,
      role: role
    } : { 
      fullName: 'Loading...', 
      profileLink: '#',
      role: 'Loading...'
    };
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
                <div id="1" className="name">{getMemberInfo(1).fullName}</div>
                <div className="role">{getMemberInfo(1).role}</div>
                <a href={getMemberInfo(1).profileLink} target="_blank" rel="noopener noreferrer">
                  Profile
                </a>
              </div>
            </div>
            <div className="gallery-item1">
              <img src="src/assets/memberphotos/HeadJaeY.jpeg" alt="Jae Yoo"/>
              <div className="namelink" id="jae-namelink">
                <div id="2" className="name">{getMemberInfo(2).fullName}</div>
                <div className="role">{getMemberInfo(2).role}</div>
                <a href={getMemberInfo(2).profileLink} target="_blank" rel="noopener noreferrer">
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
                <div id="5" className="name">{getMemberInfo(5).fullName}</div>
                <div className="role">{getMemberInfo(5).role}</div>
                <a href={getMemberInfo(5).profileLink} target="_blank" rel="noopener noreferrer">
                  Profile
                </a>
              </div>
            </div>
            <div className="gallery-item2">
              <img src="src/assets/memberphotos/HeadMark.jpg" alt="Mark Reed"/>
              <div className="namelink2" id="mark-namelink">
                <div id="4" className="name">{getMemberInfo(4).fullName}</div>
                <div className="role">{getMemberInfo(4).role}</div>
                <a href={getMemberInfo(4).profileLink} target="_blank" rel="noopener noreferrer">
                  Profile
                </a>
              </div>
            </div>
            <div className="gallery-item2">
              <img src="src/assets/memberphotos/HeadTannerA.jpeg" alt="Tanner An"/>
              <div className="namelink2" id="tanner-namelink">
                <div id="6" className="name">{getMemberInfo(6).fullName}</div>
                <div id="tanner-role" className="role">{getMemberInfo(6).role}</div>
                <a href={getMemberInfo(6).profileLink} target="_blank" rel="noopener noreferrer">
                  Profile
                </a>
              </div>
            </div>
            <div className="gallery-item2">
              <img src="src/assets/memberphotos/HeadBezaM2.png" alt="Beza Mogese"/>
              <div className="namelink2" id="beza-namelink">
                <div id="7" className="name">{getMemberInfo(7).fullName}</div>
                <div className="role">{getMemberInfo(7).role}</div>
                <a href={getMemberInfo(7).profileLink} target="_blank" rel="noopener noreferrer">
                  Profile
                </a>
              </div>
            </div>
            <div className="gallery-item2">
              <img src="src/assets/memberphotos/HeadBrentG-2.jpg" alt="Brent Gauthier"/>
              <div className="namelink2" id="brent-namelink">
                <div id="3" className="name">{getMemberInfo(3).fullName}</div>
                <div className="role">{getMemberInfo(3).role}</div>
                <a href={getMemberInfo(3).profileLink} target="_blank" rel="noopener noreferrer">
                  Profile
                </a>
              </div>
            </div>
            <div className="gallery-item2">
              <img src="src\assets\memberphotos\HeadJohnB.jpeg" alt="John Bidlack"/>
              <div className="namelink2" id="john-namelink">
                <div id="8" className="name">{getMemberInfo(8).fullName}</div>
                <div className="role">{getMemberInfo(8).role}</div>
                <a href={getMemberInfo(8).profileLink} target="_blank" rel="noopener noreferrer">
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