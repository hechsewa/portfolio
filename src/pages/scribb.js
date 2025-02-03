import * as React from "react"
import {useEffect} from 'react'

import Layout from "../components/layout"
import Seo from "../components/seo"
import useDarkMode from '../components/useDarkMode.js'
import '../components/scribb.css'
import ProjectHead from '../components/ProjectHead/projecthead.js'
import Button from "../components/Button/button.js"
/* images */
import cover from '../images/projects/scribb/cover.webp'
import overview from '../images/projects/scribb/problem.webp'
import usera from '../images/projects/scribb/persona-1.webp'
import userb from '../images/projects/scribb/persona-2.webp'
import journey from '../images/projects/scribb/journey-map.webp'
import userflow from '../images/projects/scribb/userflows.webp'
import wireframes from '../images/projects/scribb/wireframes.webp'
import ds from '../images/projects/scribb/designsystem.webp'
import core from '../images/projects/scribb/core-functions.webp'
import screens1 from '../images/projects/scribb/ui.webp'
import screens2 from '../images/projects/scribb/ui2.webp'
import mockups from '../images/projects/scribb/mockups.webp'
import result from '../images/projects/scribb/quiz.webp'

const Scribb = () => {
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
    <Seo title="Scribb - Interactive AI Book Generator" />
    <div className='project-page'>
    <ProjectHead 
      theme={theme}
      title={'Scribb - Interactive AI Book Generator'}
      img={cover}
      chip1={'Mobile app'}
      chip2={'IOS+Android'}
      chip3={'AI'}
      desc={'Main goal was to create a mobile application that lets users create personalized interactive stories with AI assistance. By selecting characters, genres, and story details, users shape their own narratives, making storytelling accessible and creative for everyone.'}
      date={'july 2024 - approx. 4 weeks'}
      role={'Product Designer'}
      deliverables={'UX Processes, Design System, UI design, Prototypes'}
      tools={'Figma, FigJam'}/>
    </div>
    <div className='project_sec'>
        <div className='project_in_txt'>
          <div className='project_text text_scribb'>
          <h3>Problem</h3>
          <p>Traditional books often struggle to capture the attention of modern readers accustomed to dynamic, interactive digital experiences. With <b>decreasing attention spans</b> and the rise of personalized content, many people find <b>books predictable and less engaging</b>. Readers today seek experiences where they can actively participate, influence outcomes, and feel connected to the narrative. This gap highlighted the need for a storytelling format that merges creativity, interactivity, and personalization to redefine how stories are experienced.</p>
          <h3>Solution</h3>
          <p>Scribb was developed as a mobile application to revolutionize storytelling by <b>combining AI technology</b> with user-driven creativity. The app empowers readers to craft personalized interactive stories by selecting characters, genres, and pivotal story elements. Through AI-generated dialogue and narrative pathways,<b>users' choices dynamically shape the plot</b>, creating a unique and engaging story every time. By transforming readers into co-creators, Scribb makes storytelling immersive, adaptable, and captivating, perfectly aligning with the modern need for interactivity and personalization.</p>
          </div>
          <div className='project_img_big'><img src={overview} alt={'Reader with mug and book'} /></div>
        </div>
      </div>

      <div className='project_sec project_sec_alt'>
      <p className='stage'>Empathise & Define</p>
      <h3>Research and define a problem</h3>
      <p>Following the Design Thinking process, I started with conducting a research. The project was fast paced and the time for research limited, so most of the research was done through
      analysis of goodreads.com, various facebook.com reader groups and polish site for readers - lubimyczytac.pl.</p>
      <p>Our research revealed two key users: Krisha, a social media manager who loves creative, unpredictable stories
        she can share, and Elena, a retired teacher who wants simple tools to create heartfelt,
        personal narratives. Both struggle with traditional books feeling predictable and other apps being
        too complicated.</p>
      <h4>User Personas</h4>  
      <div className='project_img_big'><img src={usera} alt={'User Persona Young Krisha'} /></div>
      <div className='project_img_big'><img src={userb} alt={'User Persona Middle-aged Elena'} /></div>
      <h4>Journey map</h4>
      <p>To even better understand how the users might navigate the application, the journey map was defined.
        It shows Krisha's actions, emotions, and pain points across key stages.
        By pinpointing these moments, the journey map provides valuable insights
        that guide the problem definition and highlight opportunities for improvement.</p>
      <p>The problem faced: <b>"Modern readers find traditional books predictable and disengaging. They desire personalized, interactive experiences that make them active participants in storytelling."</b></p> 
      <div className='project_img_big'><img src={journey} alt={'Journey Map of user persona Krisha'} /></div>
    </div>

    <div className='project_sec'>
        <p className='stage'>ideate</p>
        <h3>Defining user flows</h3>
        <p>After the problem was clear, we met up with the client and developers to brainstorm ideas and processes of the application. On the Meets call, we've started to
            come up with detailed features we would like to have in the app. We focused on simplicity and how the function would solve the problem.
            A few interesting ideas emerged:
            <ul>
                <li>quiz to help define the user preferences for each book,</li>
                <li>quiz to help define the character based on the user profile,</li>
                <li>for each story choose yourself or a new character,</li>
                <li>show book cover that is AI generated art</li>
            </ul>    
        </p>
        <p>We also defined application features and mapped a user flow for each:
        <ul>
            <li>Registration/Log In</li>
            <li>Profile View</li>
            <li>Create New Book</li>
            <li>Open Existing Book</li>
            <li>Settings</li>
        </ul></p>
        <div className='project_img_full'><img src={userflow} alt={'User flow examples'} /></div>
      </div>

      <div className='project_sec project_sec_alt'>
        <p className='stage'>Prototype</p>
        <h3>Wireframes</h3>
        <p>The main focus of the app was the interactive funtions, so I've come up with several ways of interacting with the book
            through AI and designed it on the wireframes. The user could <b>interact with the book</b> by:
            <ul>
                <li>writing dialogue in response to character in the book,</li>
                <li>choosing a written option as a decision ie. which character to talk to,</li>
                <li>choosing an image option as a decision ie. what type of weapon to use.</li>
            </ul>
           I had some concerns the user might find the quiz <b>too lengthy</b>, so I added a progress tracker to make sure the user knew how many questions were left.
           To make the app more interesting to browse, I included <b>profile statistics and book statistics</b>, so the user could also learn
           what their favorite genre is, or how long the book is. Having the books AI generated makes your <b>book library 100% unique.</b>
           If the user co-creates with AI a book so good, they can <b>share it with their friends</b> or the world on social media. 
        </p>
        <div className='project_img_full'><img src={wireframes} alt={'Wireframes of mobile app scribb'} /></div>
      </div>
      
      <div className='project_sec'>
        <p className='stage'>Prototype</p>
        <h3>UI Design</h3>
        <h4>Design system</h4>
        <p>First and continous step of the UI phase, was defining a design system. The system consisted of typography, colors and several neceassary components ie. buttons, toasts, inputs, quiz choices, cards.
            <b>The typography</b> was especially important because the <b>book reading experience</b> needed to be comfortable for the users. The increased line height, big margins, serif font and no other UI elements made it
            a good reading experience.
        </p>
        <div className='project_img_big'><img src={ds} alt={'Design System'} /></div>
        <h4>Core functions</h4>
        <div className='project_img_big'><img src={core} alt={'Core screens of the mobile application'} /></div>
        <h4>Chosen screens</h4>
        <div className='project_img_full'><img src={screens1} alt={'Chosen screens of the mobile app'} /></div>
        <div className='project_img_full'><img src={screens2} alt={'Another screens of the mobile app'} /></div>
        <h4>Mockups</h4>
        <div className='project_img_big'><img src={mockups} alt={'Mockups of the mobile app'} /></div>
        <h4>Prototype</h4>
        <iframe title='Prototype' width="800" height="450" src="https://embed.figma.com/proto/C2OwZXczbRhqEOxUqfPQhK/Scribb-App?node-id=169-851&p=f&scaling=scale-down&content-scaling=fixed&page-id=1%3A3&starting-point-node-id=153%3A371&embed-host=share" allowfullscreen></iframe>
      </div>

      <div className='project_sec project_sec_alt'>
        <div className='project_in_txt'>
          <div className='project_text text_scribb'>
          <p className='stage'>Test</p>
          <h3>Results & takeaways</h3>
          <p>We've sent the prototype to 5 people to gather feedback about the functions. Most users were happy to test
            the app and expressed the engagement in the AI functions. Here are some findings from the test:
          </p>
          <div className='results'>
            <div className='result-number'>
              <h4>80%</h4>
              <p>(4/5) of participants found the book creating quiz engaging</p>
            </div>
            <div className='result-number'>
              <h4>80%</h4>
              <p>(4/5) of participants expressed the need for a bookmark feature</p>
            </div>
            <div className='result-number'>
              <h4>~1min</h4>
              <p>average time to complete the registration process</p>
            </div>
          </div>
          <p>Thanks to the test we were able to detect and improve following features:
          <ul>
            <li>bookmarking a book,</li>
            <li>limiting number of quiz questions,</li>
            <li>limiting some features so the app is not overwhelming in the first use,</li>
            <li>ability to gain features by upgrading to the premium plan.</li>
          </ul>
          The Scribb's application was a fun project using AI that definitely made an impact on the users that were testing it.
          I found it uplifing they were not sceptical about the AI generated books. The communication with the client and
          the developer was seamless and we supported each other in many ways. The project is now being implemented 
          and we hope it reaches many people hungry for ✨book experiences✨.</p>
          </div>
          <div className='project_img_big'><img src={result} alt={'Mobile app mockup'} /></div>
        </div>
      </div>
 
      <div className='button-project-btm'>
        <Button theme={theme} label={'Back to Projects'} href={'/portfolio/'} type={'secondary'} />
      </div>
  </Layout>
)};

export default Scribb
