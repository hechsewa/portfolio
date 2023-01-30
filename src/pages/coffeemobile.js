import * as React from "react"
import {useEffect} from 'react'

import Layout from "../components/layout"
import Seo from "../components/seo"
import useDarkMode from '../components/useDarkMode.js'
import '../components/coffeemobile.css'
import ProjectHead from '../components/ProjectHead/projecthead.js'
/* images */
import coffee_head from '../images/projects/coffee_mobile/project_head_hype4.png'
import designsystem from '../images/projects/coffee_mobile/design_system.jpg'
import personas from '../images/projects/coffee_mobile/userpersonas.jpg'
import screens from '../images/projects/coffee_mobile/screens.jpg'
import uiboost from '../images/projects/coffee_mobile/ui-boost.jpg'
import uiexp from '../images/projects/coffee_mobile/ui-exp.jpg'
import uimain2 from '../images/projects/coffee_mobile/ui-main-2.jpg'
import uimain from '../images/projects/coffee_mobile/ui-main.jpg'
import uimain3 from '../images/projects/coffee_mobile/ui-main-3.jpg'
import testing from '../images/projects/coffee_mobile/usability_testing.jpg'
import flow from '../images/projects/coffee_mobile/user_flow.jpg'
import goal from '../images/projects/coffee_mobile/goal.png'
import logo_dark from '../images/projects/logos/coffee-logo-dark.png'
import logo_light from '../images/projects/logos/coffe-logo-light.png'

const CoffeeMobile = () => {
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
    <Seo title="Coffee | Ewa Hechsman Portfolio" />
    <div className='project-page'>
    <ProjectHead 
      theme={theme}
      title={'Mobile App for Ordering Coffee'}
      logo={theme==='dark'? logo_dark : logo_light}
      logoalt={'Coffee Time Logo'}
      headimg={coffee_head}
      ux={true}
      ill={false}
      brand={false}
      desc={'Coffee Station is a mobile application to help you find the next perfect location for your morning cup of coffee. Among other things, the app includes ordering products and rating the locations.'}
      date={'august 2021'}
      role={'UI/UX designer'}
      deliverables={'mobile app'}
      tools={'Affinity Designer, Figma'}
      problem={''}
      solution={''} />
    </div>
    <div className='project_sec project_sec_alt'>
        <div className='project_in_txt'>
          <div className='project_text'>
          <h3>Goal</h3>
          <p>Goal was to design an application that helps the users to find best locations for coffee beak
            and helps them order a product without getting up from a table.</p>
          </div>
          <div className='project_img_big'><img src={goal} alt={'User Personas'} /></div>
        </div>
      </div>
    <div className=' project_sec'>
        <h3>UX Research</h3>
        <h4>User Personas</h4>
          <p>First step involved creating user personas, to better identify pontential application users.
            Main target group of the application was young and middle-aged people, who were fluent with
            using their smartphone. Amongst these group, two personas have been chosen.
          </p>
          <div className='project_img_big'><img src={personas} alt={'User Personas'} /></div>
        <h4>User Flow</h4>
        <p>The state diagram below shows user flows in the application and the main actions the user can take in the app.</p>
        <div className='project_img_big'><img src={flow} alt={'User Flow Diagram'} /></div>
      </div>
      <div className='project_sec project_sec_alt'>
        <h3>Designing the Application</h3>
        <p>There was a simplified version of the design system introducted to the project.
          Included, basic font hierarchy, icons, and color pallete.
        </p>
        <div className='project_img_big'><img src={designsystem} alt={'Basic Design System'} /></div>
        <h4>Application Screens</h4>
        <p>There were 21 application screens perapred. Including:
          <ul>
            <li><p><b>Sign In, Sign Up, Forgot Password</b> - alongside with success/error scenarios and password checker,</p></li>
            <li><p><b>Map View</b> - with location pins, showing coffee shops locations with possibility to search,</p></li>
            <li><p><b>Product Categories List View</b> - easy navigation between products & product categories,</p></li>
            <li><p><b>Location Card View</b>  - browse coffee places faster and look at the photos to get the feel of a place,</p></li>
            <li><p><b>Product List View</b>  - with chips panel for filtering, a button to add to cart for faster purchase,</p></li>
            <li><p><b>History</b>  - a view of all previous purchases to check what you ordered,</p></li>
            <li><p><b>Product View, Location View</b>  - all the details and ratings about product/location,</p></li>
            <li><p><b>Profile View</b>  - update your avatar, background picture, check loyalty program points, and more,</p></li>
            <li><p><b>Confirmation Dialog</b>  - confirm you want to sign out, extends the user's stay in the app.</p></li>
          </ul>
        </p>
        <div className='project_img_big'><img src={screens} alt={'Application screens'} /></div>
        <div className='project_img_big'><img src={uiboost} alt={'Application screens'} /></div>
        <div className='project_img_big'><img src={uiexp} alt={'Application screens'} /></div>
        <p></p>
      </div>
      <div className='project_sec'>
        <h3>Usability Testing</h3>
        <p>Clickable prototypes of the application were created, that allowed testing the application on a test group of users. 
        <br/><br/>
        4 users took part in the research. The test was executed indirectly, the users received clear instructions and a link to a prototype over the email. Then they completed the test themselves and emailed back the screen recording of them performing the assigned task in the app.
        <br/><br/>
        The tasks involved logging into the app, finding a coffee place and ordering a chosen product.</p>
        <div className='project_img_big'><img src={testing} alt={'Application screens'} /></div>
        <h4>Results</h4>
        <p><b>100% of the users</b> were able to figure out how to navigate the app and found the desired coffee place on the map.
<br/><br/>
<b>75% of the users</b> were able to navigate to the white coffee category in the products view and were able to filter the products by “lactose-free” tag. One user missed filtering the products and skipped directly to picking the product from the list, and saying they didn’t see the filtering tags. 
<br/><br/>
<b>100% of the users</b> were able to add their favorite coffee to bag, but all of them said they were confused by the process of finding a coffee from a specific coffee place in the list of favorites.</p>
<div className='project_in'>
        <div className='project_img'><img src={uimain} alt={'Application screens'} /></div>
        <div className='project_img'><img src={uimain2} alt={'Application screens'} /></div>
        </div>
      </div>
      <div className='project_sec project_sec_alt'>
        <h3>Next steps</h3>
        <p>Research and designing a better way of displaying the filtering tags in the products list, to make sure the users won’t miss them. 
<br/><br/>
Additionally, providing filtering by coffee place in the Favorites screen, to help the user navigate to their favorite coffee product faster.</p>
        <div className='project_img_big'><img src={uimain3} alt={'Application screens'} /></div>
      </div>
      <div className={theme==='dark'? 'go-back dark' : 'go-back'}>
        <a href="/portfolio/"><p>{"<"} Go back to projects</p></a>
      </div>
  </Layout>
)};

export default CoffeeMobile
