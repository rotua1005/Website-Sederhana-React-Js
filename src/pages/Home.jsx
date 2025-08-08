import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer"; 
import "../styles/Home.css"; 
import { HomeSection } from "../data/HomeSection";
import parse from 'html-react-parser';
import { coursesSection } from "../data/CourseSection";
import { tutorSection, tutorsList } from "../data/TutorSection";
import Tutors from "../components/Tutors"; 
import { partnersSection, partnersList } from "../data/PartnersSection";
import Partners from "../components/Partners";
import { contactSection } from "../data/ContactSection";
import Contact from "../components/Contact";




function Home() {
  return (
    <>
    <Navbar />
    <div className="wrapper">
      {/* Home Section */}
      <section id="home">
    <img src={HomeSection.image} />
<div className="kolom">
  {parse(HomeSection.content)}
</div>
</section>

{/* Courses Section */}
<section id="courses">
  <div className="wrapper">
  {parse(coursesSection.content)}
</div>
 <img src={coursesSection.image}/>
</section>

{/* Tutors Section */}
<section id="tutors">
  <div className="tengah">
    <div className="kolom">
      {parse(tutorSection.content)}
    </div>
    <Tutors tutorsList={tutorsList} />
  </div>
    </section>

    {/* Partners Section */}
    <section id="partners">
  <div className="tengah">
    <div className="kolom">
      {parse(partnersSection.content)}
    </div>
  <Partners partnersList={partnersList} />
  </div>
    </section>

    {/* Contact Section */}
<section id="contact">
  <div className="tengah">
    <div className="kolom">
    <Contact contactSection={contactSection} />
    </div>
  </div>
    </section>




   </div>
    <Footer />
    </>
  )
}

export default Home
