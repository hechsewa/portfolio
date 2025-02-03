import * as React from "react"
import {useEffect} from 'react'

import Layout from "../components/layout"
import Seo from "../components/seo"
import Button from "../components/Button/button.js"
import useDarkMode from '../components/useDarkMode'
import '../components/index.css'
import ProjectTab from '../components/ProjectTab/projecttab.js'
import TestimonialTab from "../components/TestimonialTab/TestimonialTab"
import scribb from '../images/projects/scribb/cover.webp'
import logoplan_cover from '../images/projects/logoplan/cover.webp'
import kocwa from '../images/testimonials/kocwa.webp'
import doma from '../images/testimonials/doma.webp'
import resume from '../images/hechsman_resume_eng.pdf'
import headimg from '../images/head-img.webp'
import pikto_cover from "../images/projects/piktopharm/cover.webp"
import arch_cover from "../images/projects/archdesk/cover.webp"
/*logos*/
import logoplan from '../images/logos/logoplan.webp'
import drkimchi from '../images/logos/drkimchi.webp'
import synth from '../images/logos/synthetify.webp'
import inhub from '../images/logos/inhub.webp'
import diagly from '../images/logos/diagly.webp'
import codenauts from '../images/logos/codenauts.webp'
import pikto from '../images/logos/piktopharm.webp'
import archdesk from '../images/logos/archdesk.webp'
import LogoCard from "../components/LogoCard/logocard.js"

const IndexPage = () =>{
  const [theme, toggleTheme] = useDarkMode();

  /*
  const handleClick = (e) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'click', {
        'click_place': e.target.id,
      });
    }
  };*/

  useEffect(() => {
    var bdy = document.getElementsByTagName('body')[0];
    if (theme==='dark') {
      bdy.className='';
    } else {
      bdy.className='darkmode';
    }
    console.log(theme);
  });

return (
  <Layout theme={theme} setTheme={toggleTheme}>
    <Seo title="Projects | Ewa Hechsman Portfolio" />
    <div className='head-main'>
      <div className='head-text'>
        <div className='head-hello'>
          <h1>I’m Ewa Hechsman, <mark>Product Designer</mark> focused on delivering intuitive end products</h1>
        </div>
        <div className='head-desc'>
          <p><b>5 years</b> of experience in hands-on work with startups and commercial clients, and mentoring young designers 💚</p>
        </div>
      </div>
      <div className='head-img'>
        <img src={headimg} alt={'Ewa Hechsman Smiling at you :)'} />
      </div>
    </div>
    <div className='projects'>
      <h2>Selected Projects</h2>
      <div className='projects-gallery'>
        <ProjectTab 
          theme={theme}
          img={logoplan_cover}
          title={'Logoplan - management platform for speech therapists'}
          chip1={'MedTech'}
          chip2={'Web app'}
          chip4={'Mobile app'}
          chip3={'Landing Page'}
          href={'/portfolio/playair'}
          desc={'Logoplan’s mission is to make speech therapy management easier for therapists. The aim was to create fun, interactive mini games for kids accessible on mobile, to help digitlize speech therapy.'}
        />
         <ProjectTab 
          theme={theme}
          img={scribb}
          title={'Scribb - Interactive AI Book Generator'}
          chip1={'Mobile app'}
          chip2={'IOS+Android'}
          chip3={'AI'}
          href={'/portfolio/scribb'}
          desc={'Mobile application that lets users create personalized interactive stories with AI assistance. By selecting characters, genres, and story details, users shape their own narratives, making storytelling accessible and creative for everyone.'}
        />
        <ProjectTab 
          theme={theme}
          img={arch_cover}
          title={'Archdesk - managing all business aspects in a single SaaS platform'}
          chip1={'Web app'}
          chip3={'SaaS'}
          chip2={'redesign'}
          chip4={'FinTech'}
          href={'/portfolio/archdesk'}
          desc={'Archdesk is a modular based software that allows business owners and workers to operate complicated company processes, ie. Invoicing, CRM or Scheduling. The challenge was to reshape the application and work closely with developers to establish brand style, design system and new visuals.'}
        />
        <ProjectTab 
          theme={theme}
          img={pikto_cover}
          chip1={'MedTech'}
          chip2={'Desktop app'}
          chip4={'Web app'}
          chip3={'Landing Page'}
          title={'Piktopharm - professional information for the pharmacy front desk'}
          href={'/portfolio/piktopharm'}
          desc={'Support pharmacists in their daily job. Create a desktop application to help pharmacists get the information about medicine faster, aiming for the app to support Piktopharm’s physical products - Lekolepki - which are informational medication stickers.'}
        />
      </div>
      <Button theme={theme} href='/portfolio/visuals/' label='More in Visuals' type='secondary'/>
    </div>
    <div className='testimonials'>
      <div className='testimonials-content'>
        <div className='testimonial-text'>
          <h2>Kind words 💬</h2>
        </div>
      <div className='testimonial-gallery'>
        <TestimonialTab 
          theme={theme}
          img={kocwa}
          name={'Paweł Kocwa'}
          role={'Chief Technology Officer @ play.air'}
          quote={'I had an opportunity to work with Ewa during a process of creating the Logoplan application, as well as logos for a few projects.\
        Ewa was always very well prepared, her ideas on point and very well corelated\
        to our needs at the given stage of work. Working with Ewa is a pleasure.'}
        />
        <TestimonialTab 
          theme={theme}
          img={doma}
          name={'Dominika Kwiatkowska'}
          role={'Design Lead @ Archdesk'}
          quote={'Working with Ewa was a blast. She was a quick learner, creative soul with a technical background - what better combination could you expect? We worked together on web design projects mostly, but we brought a lot of creative design ideas to life - for example illustrations to our Blog section, creative campaigns (Women in construction). I highly recommend Ewa as an excellent worker in the field of design!'}
        />
      </div>
      </div>
    </div>
    <div className='clients'>
      <h2>Worked with</h2>
      <div className='clients-gallery'>
        <LogoCard theme={theme} img={logoplan} name='Logoplan' desc='Play.air creates more engaging experiences for patients and specialists of speech therapy #MedTech'/>
        <LogoCard theme={theme} img={archdesk} name='Archdesk' desc='Archdesk provides construction companies with SaaS project & business management platform #ConTech' />
        <LogoCard theme={theme} img={diagly} name='Diagly' desc='sa startup focused on helping doctors generate better medical notes with the help of AI #MedTech' />
        <LogoCard theme={theme} img={inhub} name='Innovations Hub Foundation' desc='Innovations Hub Foundation is an incubator and accelerator for European startups'/>
        <LogoCard theme={theme} img={pikto} name='Piktopharm' desc='Pikopharm`s mission is to provide patients and pharmacists with fast and clear meds information #MedTech' />
        <LogoCard theme={theme} img={drkimchi} name='Dr Kimchi' desc='Germany based company crafting their kimchi-based products for a better gut-heath'/>
        <LogoCard theme={theme} img={synth} name='Synthetify' desc='Cryptocurrency startup allowing to trade, store and buy cryptocurrencies, offers crypto-wallets #FinTech' />
        <LogoCard theme={theme} img={codenauts} name='Codenauts' desc='Software house providing clients with a variety of implementation services' />
        </div>
    </div>
    <div className='skills'>
      <div className='skills-left'>
      <h2>Skills</h2>
      <p>After studying Computer Science, I gained solid technical skills that help me communicate with developers and quickly pick up new tools. Previous experience as a graphic designer,  sharpened my eye for detail and gave me a strong understanding of color, typography, and aesthetics. Over the years, I’ve built my UX/UI skills through courses and hands-on work with clients in industries like medTech, finTech, blockchain, and SaaS.</p>
      </div>
      <div className='skills-right'>
        <div className='skills-column'>
            <h3>Design</h3>
            <p>
            Visual Design<br/>
            Wireframing, Prototyping<br/>
            UX Research, Testing & Design<br/>
            Design Thinking<br/>
            Visual Hierarchy<br/>
            Branding<br/>
            Drawing<br/>
            </p>
        </div>
        <div className='skills-column'>
            <h3>Tools</h3>
            <p>
            Figma <br/>
            Adobe XD, Sketch<br/>
            Adobe Photoshop<br/>
            Adobe Illustrator<br/>
            Adobe After Effects<br/>
            Affinity Designer<br/>
            GitHub, Jira<br/>
            HTML, CSS, JS
            </p>
        </div>
        <div className='skills-column'>
            <h3>Soft skills</h3>
            <p>
            Analitical Thinking<br/>
            Commitment<br/>
            Proactivity<br/>
            Punctuality<br/>
            Creativity<br/>
            Teamwork<br/>
            </p>
        </div>
      </div>
    </div>
    <div className='contact-me'>
      <h2>Let's work together!</h2>
      <p>Feel free to email me about freelance projects, full time jobs<br/>or just to say hi! 👋</p>
      <div className='contact-btns'>
        <Button theme={theme} type='primary' label='Resume' href={resume}/>
        <Button theme={theme} type='secondary' label='E-mail me' href='mailto:ewahechsman@gmail.com'/>
      </div>
    </div>
  </Layout>
)
};

export default IndexPage
