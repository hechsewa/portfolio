import * as React from "react"
import {useEffect} from 'react'
import {useState} from 'react'

import Layout from "../components/layout"
import Seo from "../components/seo"
import useDarkMode from '../components/useDarkMode.js'
import '../components/playair.css'
import ProjectHead from '../components/ProjectHead/projecthead.js'
/* images */
import logoplan_cover from '../images/projects/logoplan/cover.webp'
import overview from '../images/projects/logoplan/Overview.webp'
import process from '../images/projects/logoplan/DesignProcess.webp'
import idis from '../images/projects/logoplan/Interviews.webp'
import lofi from '../images/projects/logoplan/Lofi.webp'
import affinity from '../images/projects/logoplan/Affinity.webp'
import hifi from '../images/projects/logoplan/Hifi.webp'
import mobilechange from '../images/projects/logoplan/ImproveMobile.webp'
import desktopchange from '../images/projects/logoplan/ImproveDesktop.webp'
import ds from '../images/projects/logoplan/DesignSystem.webp'
import mobile from '../images/projects/logoplan/Mobile.webp'
import mobile2 from '../images/projects/logoplan/Mobile 2.webp'
import web from '../images/projects/logoplan/Desktop.webp'
import landing from '../images/projects/logoplan/Landing.webp'
import social from '../images/projects/logoplan/Social-Media.webp'
import Button from "../components/Button/button.js"


const Playair = () => {
  const [theme, toggleTheme] = useDarkMode();

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
    <Seo title="Logoplan - management platform for speech therapists" />
    <div className='project-page'>
    <ProjectHead 
      theme={theme}
      title={'Logoplan - management platform for speech therapists'}
      img={logoplan_cover}
      chip1={'UI Design'}
      chip2={'MedTech'}
      chip3={'UX Design'}
      chip4={'Research'}
      desc={'Logoplan’s mission is to make speech therapy management easier for therapists. The aim was to create fun, interactive mini games for kids accessible on mobile, to help digitlize speech therapy.'}
      date={'may 2023'}
      role={'Product designer'}
      deliverables={'UX Processes, Interview scripts, UI design, Prototypes, Landing Page, Social Graphics'}
      tools={'Figma, Affinity Designer'}/>
    </div>
    <div className='project_sec'>
        <div className='project_in_txt'>
          <div className='project_text'>
          <h3>Problem</h3>
          <p>Speech Therapists are <b>missing digital tools</b> to manage their practices. They use printable memo cards as exercises for kids, which today is <b>not stimulating enough</b> to keep the kids engaged. They keep notes and events in planners or Google Calendar and their needs are not supported enough.</p>
          <h3>Solution</h3>
          <p>Developed mobile application helps <b>keep kids engaged</b> in their exercises. Therapists have access to a web platform where they can track progress, take notes, schedule appointments, and communicate with parents. This project <b>centralizes therapists' workflows</b> and motivates kids to stay active in their speech therapy.</p>
          </div>
          <div className='project_img_big'><img src={overview} alt={'Mobile application for kids with video exercises'} /></div>
        </div>
      </div>

      <div className='project_sec project_sec_alt'>
        <h3>Design process</h3>
        <p>The project was quickly paced and was  developed with constant support and feedback from speech therapists. 
          The web application was tested and created based on speech therapists processes, so the end product is very user-centered. We followed
          an iterative Design Thinking process.</p>
        <div className='project_img_big'><img src={process} alt={'Moodboard of kids app screens and bright colors'} /></div>
      </div>

      <div className='project_sec'>
        <div className='project_in_txt'>
          <div className='project_text'>
          <p className='stage'>Empathize</p>
          <h3>In-depth interviews with speech therapists</h3>
          <p>3 speech therapists of different specializations were taking part in the IDI interviews. They brought into my attention specific needs for this area, deeply focused on speech exercises and the correct naming of speech impediments.</p>
          <h4>Some quotes from IDIs</h4>
          <p className='quote'>“It would be good to also see animations or videos of how the lips should be shaped when making the eo-eo noise”</p>
          <p className='quote'>“We should mark if the exercise was done after the deadline, but we shouldn’t take away the possibility to do the exercise after the deadline. The kid should be allow to play with the app by themselves.”</p>
          </div>
          <div className='project_img_big'><img src={idis} alt={'Video screenshot of Ewa and the script of IDI'} /></div>
        </div>
      </div>

      <div className='project_sec project_sec_alt'>
        <p className='stage'>Define</p>
        <h3>Define the problems & key features</h3>
        <p>For the Logoplan project, we used <b>affinity mapping</b> to identify key challenges faced by speech therapists and explore features to address them. This process helped us group problems into areas like exercises, engagement, and scheduling. We then brainstormed targeted solutions, focusing on improving efficiency for therapists and making exercises engaging for kids.
        By organizing insights visually, we prioritized features that directly address user needs, ensuring a more effective and user-friendly product.</p>
        <div className='project_img_big'><img src={affinity} alt={'Affinity map for logoplan'} /></div>
      </div>

      <div className='project_sec'>
        <p className='stage'>Ideate</p>
        <h3>Lo-fi wireframes</h3>
        <p>The most important part of the mobile app are interactive game mechanisms.
          They need to keep kids engaged. I’ve come up with 5 mechanisms based on the
          familiar exercises speech therapists are using now as printable paper sheets.
          One game was redesigned for the mobile to take advantage of digitalization.
          Gamification element was introduced and paired up with fun raccoon illustrations
          does a good job at keeping kids entertained and focused.</p>
        <div className='project_img_big'><img src={lofi} alt={'Lofi wireframes of game mechanisms'} /></div>
      </div>

      <div className='project_sec'>
        <p className='stage'>Prototype</p>
        <h3>Hi-fi wireframes</h3>
        <p>During mobile app and web app wireframes design process, chosen speech therapists were consulted to verify proposed solutions. When creating hi-fi wireframes for mobile games, I noticed I overlooked some elements and I added few extra elements to make the games even more interactive. After consultation, I introduced video content to the games to help the kids visualise exercises.</p>
        <div className='project_img_full'><img src={hifi} alt={'Hifi wireframes'} /></div>
      </div>

      <div className='project_sec project_sec_alt'>
      <p className='stage'>Test</p>
      <h3>Changes after interview</h3>
      <p>Speech therapists were heavily consulted during all stages of the process, which allowed us to quickly introduce changes to wireframes, without the cost of implementation.</p>
      <div className='project_in_txt'>
          <div className='project_text'>
          <h4>Mobile Application</h4>
          <p>After interviews, I decided to introduce categorizations to the mini games. The application would be used by patients of different ages and speech developments. Some of the patients would not be able to read, so there was a need to differentiate mechanisms based on the fact if the user was able to read or not. Only pictures might not be challenging enough for the older users. </p>
          <p><b>Most impactful changes:</b></p>
          <ul>
            <li><p><b>Added categorization</b> to help make mini games impactful for more users</p></li>
            <li><p><b>Enhanced the games mechanism</b> by using words and syllabes</p></li>
            <li><p><b>Improved gamification</b> added encouragement screens after each exercise</p></li>
          </ul>
          </div>
          <div className='project_img_big'><img src={mobilechange} alt={'Mobile application changes'} /></div>
        </div>
        <div className='project_in_txt'>
          <div className='project_text'>
          <h4>Web Application</h4>
          <p>Interviews revealed that users needed contextual information, such as patient details and event notes, easily accessible. Therapists often verified a patient’s age or speech impediment when writing notes, scheduling appointments, or assigning exercises. Another key insight was the need for role-based access, as both practice owners and therapists required different levels of information. Sharing patient details among therapists, especially for substitutes, was also a common need.</p>
          <p><b>Most impactful changes:</b></p>
          <ul>
            <li><p>Support for organizations - added roles and substitutions</p></li>
            <li><p>Provided information context - moved notes and appointment details to modals</p></li>
            <li><p>Improved exercises assignment - added assigning exercises for particular days</p></li>
          </ul>
          </div>
          <div className='project_img_big'><img src={desktopchange} alt={'Web application changes'} /></div>
        </div>
        </div>

        <div className='project_sec'>
        <div className='project_in_txt'>
          <div className='project_text'>
          <h3>Design System</h3>
          <p>Created extensive design system with components visually cohesive with the brand ID of Logoplan. The design system included cards, inputs, modals, icons, buttons, navigation and many more.</p>
          </div>
          <div className='project_img_big'><img src={ds} alt={'Design system'} /></div>
        </div>
      </div>

      <div className='project_sec'>
      <h3>Mobile Application</h3>
      <div className='project_img_full'><img src={mobile} alt={'Mobile app mockups'} /></div>
    </div>

    <div className='project_sec'>
        <h3>Web Application</h3>
        <div className='project_img_full'><img src={web} alt={'Web app mockups'} /></div>
      </div>
      <div className='project_sec'>
        <h3>Landing Page</h3>
        <div className='project_img_full'><img src={landing} alt={'Landing Page mockups'} /></div>
      </div>
      <div className='project_sec'>
        <h3>Social Media</h3>
        <div className='project_img_full'><img src={social} alt={'Social Media Posts mockups'} /></div>
      </div>

      <div className='project_sec project_sec_alt'>
        <div className='project_in_txt'>
          <div className='project_text'>
          <h3>Results & takeaways</h3>
          <p>The Logoplan project was a user-centered design challenge that emphasized gamification, accessibility, and efficient workflows. By leveraging research insights and iterative testing, we delivered a solution that significantly improved both user engagement and operational efficiency.</p>
          <div className='results'>
            <div className='result-number'>
              <h4>20min</h4>
              <p>per patient, reduced session prep time for therapists</p>
            </div>
            <div className='result-number'>
              <h4>-35%</h4>
              <p>decresed time spent on administrative tasks</p>
            </div>
            <div className='result-number'>
              <h4>90%</h4>
              <p>of therapists reported increased patient engagement</p>
            </div>
          </div>
          <h4>Quote from a speech therapist</h4>
          <p className='quote'>“I'm very satisfied with Logoplan. I really appreciate the automatic SMS feature for clients and the ability to customize message templates. The automatic completion of details when adding sessions is also fantastic. Overall, Logoplan is incredibly helpful in my daily work.”</p>
          </div>
          <div className='project_img_big'><img src={mobile2} alt={'Mobile app mockup'} /></div>
        </div>
      </div>
      <div className='button-project-btm'>
        <Button theme={theme} label={'Back to Projects'} href={'/portfolio/'} type={'secondary'} />
      </div>
  </Layout>
)};

export default Playair
