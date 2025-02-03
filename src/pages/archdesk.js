import * as React from "react"
import {useEffect} from 'react'

import Layout from "../components/layout"
import Seo from "../components/seo"
import useDarkMode from '../components/useDarkMode.js'
import '../components/archdesk.css'
import ProjectHead from '../components/ProjectHead/projecthead.js'
import Button from "../components/Button/button.js"
/* images */
import cover from '../images/projects/archdesk/cover.webp'
import overview from '../images/projects/archdesk/overview.webp'
import incons from '../images/projects/archdesk/Inconsistent.webp'
import outd from '../images/projects/archdesk/Outdated.webp'
import slow from '../images/projects/archdesk/Slow.webp'
import ds from '../images/projects/archdesk/ds.webp'
import dms_details from '../images/projects/archdesk/dms-details.webp'
import dms_compare from '../images/projects/archdesk/dms-compare.webp'
import scheduler_details from '../images/projects/archdesk/scheduler-details.webp'
import scheduler_compare from '../images/projects/archdesk/scheduler-compare.webp'
import tender_add from '../images/projects/archdesk/tender-1.webp'
import tender_add_details from '../images/projects/archdesk/tender_add.webp'
import tender_offer_details from '../images/projects/archdesk/tender_choose.webp'
import tender_offer from '../images/projects/archdesk/tender-2.webp'
import tender_compare from '../images/projects/archdesk/tender-3.webp'
import dash from '../images/projects/archdesk/Dashboard.webp'
import processes from '../images/projects/archdesk/Processes.webp'
import mobile_1 from '../images/projects/archdesk/mobile-1.webp'
import mobile_2 from '../images/projects/archdesk/mobile-2.webp'

const Archdesk = () => {
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
    <Seo title="Archdesk - managing all business aspects in single SaaS platform" />
    <div className='project-page'>
    <ProjectHead 
      theme={theme}
      title={'Archdesk - managing all business aspects in single SaaS platform'}
      img={cover}
      chip1={'Web app'}
      chip2={'SaaS'}
      chip3={'Redesign'}
      chip4 = {'FinTech'}
      desc={'Archdesk is a modular based software that allows business owners and workers to operate complicated company processes, ie. Invoicing, CRM or Scheduling. The challenge was to reshape the application and work closely with developers to establish brand style, design system and new visuals.'}
      date={'approx. 4 years'}
      role={'In-house UI/UX Designer'}
      deliverables={'Design System, UI designs, Prototypes, Landing Pages, In-depth Interviews'}
      tools={'Figma, Zoom, Adobe Photoshop'}/>
    </div>
    <div className='project_sec'>
      <div className='project_in_txt'>
        <div className='project_text text_arch'>
    <h2>Overview</h2>
    <p>When I joined the Archdesk team, the web platform did not have a design system and was composed of material design and IOS components styled by the developers. The system <b>lacked visual consistency, branding and looked outdated</b>. Archdesk formed a DUX (Design & User Experience Team) which consisted of the Design & UX Head - Ilona, and myself. Together we embarked on a journey close to improssible, to redesign the beast of the system that is Archdesk. Our main aim was to make Archdesk <b>more intuitive, faster and to listen to the clients.</b></p>
    <p>We redesigned several already existing modules, as well as introduced a few new features, requested by the users. In this case study, <b>2 redesigned modules and 1 new module</b> will be shown.</p>    
          <h3>Results</h3>
          <p>In the 4 years, we made a huge positive impact on how the system was perceived by the users. Most users declared the system is more intuitive and faster to use.</p>
          <div className='results'>
            <div className='result-number'>
              <h4>90%</h4>
              <p><b>faster Time-to-Interaction</b>, the system responses felt instant</p>
            </div>
            <div className='result-number'>
              <h4>64%</h4>
              <p>(9/14) of interviewed users declared Archdesk guarantees <b>better data flow</b></p>
            </div>
            <div className='result-number'>
              <h4>80%</h4>
              <p>(4/5) of interviewed users declared Archdesk has <b>positive user experience</b></p>
            </div>
          </div>
          </div>
          <div className='project_img_big overview_img'><img src={overview} alt={'Archdesk manager with Archdesk system, business man'} /></div>
        </div>
      </div>
 
    <div className='project_sec project_sec_alt'>
        <h2 className='arch_h2'>Problems</h2>
        <p>We identified 3 main problems with the exitising SaaS web system.</p>
        <div className='imgs_column_sec'>
           <div className='img_column'>
            <img src={incons} alt={'Reader with mug and book'} />
            <h3>Inconsistent</h3>
            <p>Inconsistent designs for similar functions left users confused and frustrated, often unsure of what to click or where to look. This not only caused disorientation but also made Archdesk feel less professional and trustworthy.</p>
           </div>
           <div className='img_column'>
            <img src={outd} alt={'Reader with mug and book'} />
            <h3>Outdated</h3>
            <p>Outdated design elements made the system feel clunky and unappealing, lacking the modern polish users expect from a professional platform. This not only impacted usability but also left users questioning its reliability.</p>
           </div>
           <div className='img_column'>
            <img src={slow} alt={'Reader with mug and book'} />
            <h3>Slow</h3>
            <p>Slow loading times for pages and tables left users waiting, disrupting their workflow and making the system feel inefficient. This significantly impacted the overall user experience and satisfaction.</p>
           </div>
        </div>
        <h2 className='arch_h2'>Goals</h2>
        <p>We converted the problems into opportunities to solve during redesigns and designs of upcoming new features.</p>
        <div className='imgs_column_sec'>
           <div className='img_column'>
            <h3><mark className='lined'>Inconsistent</mark> Consistent</h3>
            <p>By building a unified design system with reusable components and collaborating closely with developers, we will ensure consistency across the platform. This will create a more intuitive and visually cohesive experience, boosting user confidence and enabling them to navigate and complete tasks effortlessly.</p>
           </div>
           <div className='img_column'>
            <h3><mark className='lined'>Outdated</mark> Modern</h3>
            <p>By redesigning layouts to be simpler and less cluttered, incorporating more white space for better readability, and using accent colors to guide user focus, we will create a modern and visually appealing interface. This will enhance usability, reduce cognitive load, and provide a more enjoyable experience for our users.</p>
           </div>
           <div className='img_column'>
            <h3><mark className='lined'>Slow</mark> Fast</h3>
            <p>By upgrading to the latest Angular framework, collaborating with developers to optimize performance, and utilizing ready-made components, we will significantly reduce loading times. Identifying and addressing key areas for improvement will ensure a faster, smoother experience, allowing users to work efficiently without delays.</p>
           </div>
        </div>
    </div>

    <div className='project_sec'>
    <h2>Archdesk Design system</h2>
    <p>The backbone for all our designs and redesigns consisted of creating a design system. The extensive components allowed us to work with developers on achieving more intuitive layouts.</p>
    <div className='project_img_big'><img src={ds} alt={'Archdesk Design System'} /></div>
    </div>

    <div className='project_sec project_sec_alt'>
    <p className='stage'>Redesign</p>
    <h2>Document Management System (DMS)</h2>
    <p>Document Management System module in Archdesk was not heavily used by the users, because the users pointed out they either <b>do not feel the need to store documents in Archdesk</b> system, as they are using a third-party software, or the DMS is <b>lacking in functionalities</b>, ie. bulk actions or drag and drop. Our goal during this redesign was to make the DMS module usable, intuivie and visually similar to softwares that the users were familiar with ie. Sharepoint. </p>

    <h3>Improved functionalities</h3>
    <p>To the new DMS design, we introduced:
        <ul>
             <li>Drag & drop upload - faster and more intuitive upload;</li>
             <li>Breadcrumbs - better navigation in folder structures;</li>
            <li>Bulk actions - change multiple files at once;</li>
            <li>History log - track changes and approvals of the file;</li>
            <li>Share permissions - view, grant or revoke access to the file.</li>
        </ul>
    </p>
    <div className='project_img_full'><img src={dms_details} alt={'DMS screens of redesigned module'} /></div>
    <h3 className='arch_h3'>Old vs New Design</h3>
    <div className='project_img_full'><img src={dms_compare} alt={'DMS compare to the old design'} /></div>
    <h3>User Interviews</h3>
    <p>After the designs were ready, we performed a series of In-depth interviews (IDIs) with Archdesk users to ensure the layouts were understandable and intuitive. We separated <b>2 main usability tasks:</b>
    <ul>
        <li>Drag & drop - change the position of the folder, by drag & drop on another folder - <b>was completed by 4/5 users (80%)</b></li>
        <li>Upload a new file - upload and fill information about a new file - <b>was completed by 4/5 users (80%)</b>.</li>
    </ul></p>
    <p><b>Share permission layer</b> and <b>new visuals</b> were perceived positively. The designs were partially implemented soon after the IDIs and DMS is one of the most used modules in the system currently.</p>
    <div className='results'>
            <div className='result-number'>
              <h4>100%</h4>
              <p>of users said the new visuals <b>looked familiar</b>, which was what we aimed for</p>
            </div>
            <div className='result-number'>
              <h4>~94 users</h4>
              <p>monthly, using the DMS Archdesk module</p>
            </div>
            <div className='result-number'>
              <h4>80%</h4>
              <p>(4/5) of interviewed users performed both usability task, indicating the module is intuitive</p>
            </div>
          </div>
    </div>

    <div className='project_sec'>
    <p className='stage'>Redesign</p>
    <h2>Scheduler</h2>
    <p>Scheduler is a module in Archdesk that allows to see events for each user. This module is tightly connected to <b>Programme of Works</b>, because it allows the user to see Project Tasks for employees. In Scheduler, the user can see <b>4 types of events:</b> Project Task, Time off, Meeting and Holiday. </p>

    <h3>Improved functionalities</h3>
    <p>To the new Scheduler design, we introduced:
        <ul>
             <li><b>Event drawers</b> - opened on top of the calendar, does not disturb the user's workflow and allows to quickly check and edit event details;</li>
             <li><b>Color & icon coded event types</b> - better readability of the calendar at a glance, icons guarantee accessibilty for color-blind;</li>
            <li><b>Clear toggle</b> - switch between Assets and Employees with a clear toggle;</li>
            <li><b>Event tooltips</b> - quickly check necessary event details on hover, reduce number of clicks;</li>
            <li><b>Hour/day line</b> - marking present time or day on the calendar;</li>
            <li><b>Improved visuals & branding</b> - consistent with Archdesk DS, more white space and better navigation. </li>
        </ul>
    </p>
    <div className='project_img_full'><img src={scheduler_details} alt={'Scheduler screens of redesigned module'} /></div>
    <h3 className='arch_h3'>Old vs New Design</h3>
    <div className='project_img_full'><img src={scheduler_compare} alt={'Scheduler compare to the old design'} /></div>
    <h3>Results</h3>
    <p>The redesigned Scheduler was initially introduced as a Beta feature alongside the old module. Its <b>high adoption rate</b> enabled us to fully transition to the new version, allowing us to disable the old module entirely. This not only reduced system loading times but also provided users with a faster, more efficient tool that received overwhelmingly positive feedback.</p>
    <div className='results'>
            <div className='result-number'>
              <h4>~90%</h4>
              <p>adoption rate of the re-designed Scheduler module</p>
            </div>
            <div className='result-number'>
              <h4>~350 users</h4>
              <p>monthly, using the Scheduler module</p>
            </div>
            <div className='result-number'>
              <h4>~1000</h4>
              <p>events created monthly by the users</p>
            </div>
          </div>
    </div>

    <div className='project_sec project_sec_alt'>
    <p className='stage'>New module</p>
    <h2>Tender Awardees</h2>
    <p>Tendering process is one of the most beneficials to the system users.
        It allows the user to manage their tenders by adding participants,
        sending out e-mail invitations, receiving and comparing offers, helps
        the user evaulate and choose the winners.</p>

    <h3>Add Tender Participant</h3>
    <p>The first page we addressed was the process of adding a tender participant.
        The business requirement was clear: a tender participant represented a company,
        but each company often had multiple contacts (representatives) associated with it.
        To ensure seamless communication, only one contact could be assigned to the tender.
        This required designing a page that allowed for selecting multiple companies while
        enabling single-contact selection for each, which initially presented a significant challenge.
    </p>
    <div className='project_img_big'><img src={tender_add_details} alt={'Tender Adding Participant Page Details'} /></div>
    <div className='project_img_full'><img src={tender_add} alt={'Tender Adding Participant Mockup'} /></div>
    </div>
    <div className='project_sec'>
    <h3>Choose Tender Winner</h3>
    <p>After adding the tender participant feature, we aimed to provide Archdesk users with the
        ability to <b>compare offers from different companies</b>. Each tender could include multiple
        items, and the key objective was to allow users to <b>mix and match offers for individual items</b>
         to achieve the best overall value. To make the process faster, we introduced an option to 
        <b>automatically select the lowest-priced offer</b> for each item, aligning with the most commonly used user criteria.
    </p>
    <div className='project_img_big'><img src={tender_offer_details} alt={'Tender Choosing Winner Page Details'} /></div>
    <div className='project_img_full'><img src={tender_offer} alt={'Tender Choose Winner Mockup'} /></div>
    <div className='project_img_full'><img src={tender_compare} alt={'Tender Choose Winner Selected Mockup'} /></div>
    <h3 className='arch_h3'>Results</h3>
    <p>The new and improved Tendering process received overwhelmingly positive feedback from Archdesk clients and became a <b>valuable asset in securing new deals.</b> Usage of the feature steadily increased from the day of its release. To enhance client awareness, we also prepared a Newsletter and Changelog to accompany the launch of this feature.</p>
    <div className='results'>
            <div className='result-number'>
              <h4>~881 users</h4>
              <p>monthly, adding new tender participant</p>
            </div>
            <div className='result-number'>
              <h4>~517 users</h4>
              <p>monthly, comparing offers from tender participants</p>
            </div>
            <div className='result-number'>
              <h4>~120 users</h4>
              <p>monthly, choosing tender winners for items</p>
            </div>
          </div>
    </div>

    <div className='project_sec_alt project_sec'>
        <h2>Other modules & projects</h2>
        <p>During my time at Archdesk, we redesigned numerous system elements to make the platform more user-friendly and intuitive. While clients appreciated Archdesk for its modularity and flexibility, the system's complexity occasionally posed challenges for less tech-savvy users. To address this, we sometimes opted to limit functionalities. For example, in the mobile application, only selected modules are available, simplifying use for on-site construction workers. We also prioritized large tap areas to ensure the app could be easily used, even while wearing gloves.
        </p>
        <p>Some other examples of redesigned modules are Dashboards and Processes.</p>
        <div className='project_img_full'><img src={dash} alt={'Dashboard Redesign Comparison'} /></div>
        <div className='project_img_full'><img src={processes} alt={'Processes Redesign Comparison'} /></div>
        <h3>Mobile Application</h3>
        <div className='project_in'>
        <div className='project_img_big'><img src={mobile_1} alt={'Mobile Application Mockup'} /></div>
        <div className='project_img_big'><img src={mobile_2} alt={'Mobile Application Screens Mockup'} /></div>
        </div>
    </div>

      <div className='button-project-btm'>
        <Button theme={theme} label={'Back to Projects'} href={'/portfolio/'} type={'secondary'} />
      </div>
  </Layout>
)};

export default Archdesk
