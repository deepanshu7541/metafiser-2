import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import YouTube from '../components/you-tube'
import Testimonal from '../components/testimonal'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Active Online Software Page</title>
        <meta property="og:title" content="Active Online Software Page" />
      </Helmet>
      <section className="home-hero">
        <div className="home-menu">
          <div id="mobile-menu" className="home-mobile-navigation">
            <img
              alt="pastedImage"
              src="/pastedimage-no9b-1500h.png"
              className="home-logo"
            />
            <div className="home-links">
              <span className="Link">Solutions</span>
              <span className="Link">How it works</span>
              <span className="Link">Prices</span>
            </div>
            <div id="close-mobile-menu" className="home-close-mobile-menu">
              <svg viewBox="0 0 804.5714285714286 1024" className="home-icon">
                <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
              </svg>
            </div>
          </div>
          <div className="home-desktop-navigation">
            <Navbar></Navbar>
          </div>
          <div>
            <div className="home-container02">
              <Script
                html={`<script>
/*
Mobile menu - Code Embed
*/

// Mobile menu
mobileMenu = document.querySelector("#mobile-menu")

// Buttons
closeButton = document.querySelector("#close-mobile-menu")
openButton = document.querySelector("#open-mobile-menu")

// On openButton click, set the mobileMenu position left to -100vw
openButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(0%)"
})

// On closeButton click, set the mobileMenu position to 0vw
closeButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(100%)"
})
</script>`}
              ></Script>
            </div>
          </div>
        </div>
        <header className="home-header">
          <h1 className="home-text03">
            Empowering Tomorrow with Machine Learning and Artificial
            Intelligence Excellence
          </h1>
          <p className="home-text04">
            Experienced professional with broad industry knowledge adaptable to
            changing environments; valuable asset to any team or organization.
          </p>
          <div className="home-get-started">
            <span className="home-text05">Get started</span>
          </div>
        </header>
        <div className="home-dashboard-preview">
          <div className="home-outline">
            <img
              alt="pastedImage"
              src="/external/pastedimage-d96r-600h.png"
              loading="eager"
              className="home-pasted-image"
            />
          </div>
        </div>
      </section>
      <section className="home-features">
        <div className="home-title"></div>
        <span className="home-text06">
          <span className="home-text07">Our Industries</span>
          <br></br>
        </span>
        <span className="home-text09">
          We build on the IT domain expertise and industry knowledge to design
          sustainable technology solutions.
        </span>
        <div className="home-cards">
          <div className="home-container03">
            <div className="card">
              <img
                alt="pastedImage"
                src="/pastedimage-fii6m-200h.png"
                className="home-icon02"
              />
              <span className="home-text10">Advertising</span>
              <span className="home-text11">
                A concise, catchy phrase used with consistency across brand and
                marketing materials to position the brand
              </span>
            </div>
            <div className="home-publish card">
              <img
                alt="pastedImage"
                src="/pastedimage-mimg-200h.png"
                className="home-icon03"
              />
              <span className="home-text12">Fintech</span>
              <span className="home-text13">
                Experienced professional with broad industry knowledge adaptable
                to changing environments; valuable asset to any team or
                organization.
              </span>
            </div>
          </div>
          <div className="home-container04">
            <div className="card home-analyze">
              <img
                alt="pastedImage"
                src="/pastedimage-l6p-200h.png"
                className="home-icon04"
              />
              <span className="home-text14">Entertainment</span>
              <span className="home-text15">
                Experienced professional with broad industry knowledge adaptable
                to changing environments; valuable asset to any team or
                organization.
              </span>
            </div>
            <div className="card">
              <img
                alt="pastedImage"
                src="/pastedimage-vyi5-200h.png"
                className="home-icon05"
              />
              <span className="home-text16">Healthcare</span>
              <span className="home-text17">
                Experienced professional with broad industry knowledge adaptable
                to changing environments; valuable asset to any team or
                organization.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="home-quote-container">
        <div className="home-quote">
          <span className="home-message">
            We are dedicated to producing only quality work. We put ourselves in
            your real-life environment, and we help discover new ways to make
            your business work more efficiently and effectively with digital
            upgrades.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <div className="home-author">
            <img
              alt="pastedImage"
              src="/external/pastedimage-j5wu-200h.png"
              className="home-pasted-image01"
            />
            <span className="home-quote1">CEO, Metafiser</span>
          </div>
        </div>
      </section>
      <section className="home-statistics">
        <div className="home-container05">
          <h1 className="home-text18">
            <span className="home-text19">500+</span>
            <br className="home-text20"></br>
            <span className="home-text21">
              -Students
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="home-text22"></br>
            <span className="home-text23">  mentored</span>
            <br></br>
          </h1>
          <h1 className="home-text25">
            <span>20+</span>
            <br></br>
            <span>-Teaching</span>
            <br></br>
            <span>   professionals </span>
            <br></br>
          </h1>
          <h1 className="home-text32">
            <span className="home-text33">100+</span>
            <br className="home-text34"></br>
            <span className="home-text35">-Placed </span>
            <br className="home-text36"></br>
            <span className="home-text37">  students</span>
            <br></br>
          </h1>
        </div>
      </section>
      <section className="home-banners">
        <div className="home-banner-manage">
          <div className="home-container06">
            <div className="home-left">
              <span className="home-text39 title">
                Access all your content from anywhere
              </span>
              <span className="home-text40">
                Seamlessly navigate through our courses, ensuring you can
                explore and engage with our content from any location, at your
                convenience.
              </span>
              <div className="home-get-started1 template-button">
                <span className="home-text41">Get started</span>
              </div>
            </div>
            <div className="home-image-container">
              <img
                alt="pastedImage"
                src="/external/pastedimage-elg-1200w.png"
                className="home-pasted-image02"
              />
            </div>
          </div>
        </div>
        <div className="home-banner-advanced-analytics">
          <div className="home-centered-container">
            <div className="home-image-container1">
              <img
                alt="pastedImage"
                src="/test-1200w.png"
                className="home-cards-image"
              />
            </div>
            <div className="home-right">
              <h2 className="home-text42 title">Analyse your progress</h2>
              <div className="home-category">
                <span className="home-text43">
                  Conduct a detailed analysis of your progress to understand
                  what&apos;s working well and areas that need attention. This
                  insightful evaluation guides strategic adjustments for
                  continued growth and success.
                </span>
              </div>
              <div className="home-category1">
                <span className="home-text44">
                  <span className="home-text45">
                    Take a proactive approach to success by consistently
                    analyzing your progress. Identify patterns, leverage
                    successes, and refine strategies for continuous improvement
                    on your journey towards your goals.
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-integrations">
        <div className="home-centered-container1">
          <div className="home-heading">
            <span className="title">Alumni Network</span>
          </div>
          <div className="home-pills-container">
            <div className="home-pills">
              <div className="home-container07">
                <YouTube></YouTube>
                <YouTube pastedImageSrc="/logos/layer1-200h.png"></YouTube>
                <img
                  alt="pastedImage"
                  src="/external/pastedimage-huo9-200h.png"
                  className="home-pasted-image03"
                />
                <img
                  alt="pastedImage"
                  src="/external/pastedimage-f2iq-200h.png"
                  className="home-pasted-image04"
                />
                <img
                  alt="pastedImage"
                  src="/external/pastedimage-57cc-200h.png"
                  className="home-pasted-image05"
                />
                <img
                  alt="pastedImage"
                  src="/external/pastedimage-sqgp-300w.png"
                  className="home-pasted-image06"
                />
                <img
                  alt="pastedImage"
                  src="/external/pastedimage-5yc-200h.png"
                  className="home-pasted-image07"
                />
                <img
                  alt="pastedImage"
                  src="/external/pastedimage-sfgi-400w.png"
                  className="home-pasted-image08"
                />
                <img
                  alt="pastedImage"
                  src="/external/pastedimage-2r07-200h.png"
                  className="home-pasted-image09"
                />
                <img
                  alt="pastedImage"
                  src="/external/pastedimage-214-200h.png"
                  className="home-pasted-image10"
                />
              </div>
              <div className="home-container08">
                <YouTube pastedImageSrc="/logos/pinterest%20logo-200h.png"></YouTube>
                <YouTube pastedImageSrc="/logos/group%201014-200h.png"></YouTube>
                <YouTube pastedImageSrc="/logos/group%201015-200h.png"></YouTube>
                <YouTube pastedImageSrc="/logos/group%201017-200h.png"></YouTube>
                <img
                  alt="pastedImage"
                  src="/external/pastedimage-avra-300w.png"
                  className="home-pasted-image11"
                />
                <img
                  alt="pastedImage"
                  src="/external/pastedimage-huws-200h.png"
                  className="home-pasted-image12"
                />
                <img
                  alt="pastedImage"
                  src="/external/pastedimage-0htn-300w.png"
                  className="home-pasted-image13"
                />
                <img
                  alt="pastedImage"
                  src="/external/pastedimage-1d5o-300w.png"
                  className="home-pasted-image14"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-pricing">
        <div className="home-centered-container2">
          <div className="home-heading1">
            <span className="home-text48 title">OUR PROGRAMS</span>
            <span className="home-text49">
              Experience excellence in education with our thoughtfully designed
              programs, fostering innovation and shaping the leaders of
              tomorrow.
            </span>
          </div>
          <div className="home-cards1">
            <div className="home-card">
              <span className="home-text50">Free courses</span>
              <span className="home-text51">
                Empower yourself at no cost, discover valuable insights.
              </span>
              <div className="home-get-started2 template-button">
                <span className="home-text52">Explore</span>
              </div>
              <span className="home-text53">What&apos;s included</span>
              <div className="home-bullet-points">
                <div className="home-point">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon06"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text54">Access to recorded videps</span>
                </div>
                <div className="home-point1">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon08"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text55">Doubt support</span>
                </div>
              </div>
            </div>
            <div className="home-card1">
              <span className="home-text56">Paid courses</span>
              <span className="home-text57">
                Expert-led courses for a rewarding learning journey.
              </span>
              <div className="home-get-started3 template-button">
                <span className="home-text58">
                  <span>Explore</span>
                  <br></br>
                </span>
              </div>
              <span className="home-text61">What&apos;s included</span>
              <div className="home-bullet-points1">
                <div className="home-point2">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon10"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text62">Premium content</span>
                </div>
                <div className="home-point3">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon12"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text63">Access to live classes</span>
                </div>
                <div className="home-point4">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon14"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text64">Live doubt solving</span>
                </div>
                <div className="home-point5">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon16"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text65">Exclusive features</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-testimonals">
        <div className="home-left1">
          <span className="home-text66">Testimonals</span>
          <span className="home-text67 title">
            What people say about Active
          </span>
        </div>
        <div className="home-right1">
          <div className="home-column">
            <Testimonal
              from="Course:Power BI"
              name="Pratiksha Salveka"
              quote='"This session was something I was really looking forward to. It was very effective to build logical approach and most important error solving.'
            ></Testimonal>
            <Testimonal
              from="Course:Python"
              name="Abhishek Rai"
              quote="It was AWESOME,FABULOUS, OUTSTANDING,MINDBLOWING to gain the knowledge from VASEEM SIR and his team.Sir and his team helped alot to clear our doubts and to make feel us confidence of what we are learning ."
              avatarSrc="/image312912-mvsg-200h.png"
            ></Testimonal>
            <Testimonal
              from="BeMe"
              name="Logan Boy"
              quote="“Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo..”"
              avatarSrc="/image502912-6wy-200h.png"
            ></Testimonal>
            <Testimonal
              from="Hello W."
              name="Laraine Summers"
              quote="“Rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.”"
              avatarSrc="/image202912-zekh-200h.png"
            ></Testimonal>
          </div>
          <div className="home-column1">
            <Testimonal
              from="Handsly"
              name="William McPau"
              quote='"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”'
              avatarSrc="/image572912-0d3-200h.png"
            ></Testimonal>
            <Testimonal
              from="Share"
              name="Mariah Mae"
              quote="“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”"
              avatarSrc="/image632913-swij-200h.png"
            ></Testimonal>
            <Testimonal
              from="Gather"
              name="John Finati"
              quote='"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”'
              avatarSrc="/image102913-x4z8-200h.png"
            ></Testimonal>
            <Testimonal
              from="Zigo"
              name="Mary Pau"
              quote='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ”'
              avatarSrc="/image562913-ycff-200h.png"
            ></Testimonal>
          </div>
        </div>
        <span className="home-text68">
          <span>Show more</span>
          <br></br>
        </span>
      </section>
      <section className="home-action-bar">
        <div className="home-action">
          <div className="home-heading2">
            <span className="home-text71 title">
              CPD UK Certification Program
            </span>
            <span className="home-text72">
              Explore our all new certification programs.
            </span>
            <div className="home-get-started4 template-button">
              <span className="home-text73">
                <span>Explore now</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-images"></div>
          <img
            alt="pastedImage"
            src="/external/pastedimage-4uys-400h.png"
            className="home-pasted-image15"
          />
        </div>
      </section>
      <section className="home-faq">
        <div className="home-heading3">
          <span className="home-text76 title">Frequently asked questions</span>
          <span className="home-text77">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
          </span>
        </div>
        <div className="home-accordion">
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header1">
              <span className="home-text78">
                — What is sit amet, consectetur adipiscing elit, sed do?
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text79">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <div className="accordionContainer">
            <div className="home-header2">
              <span className="home-text80">
                — Why is dolore magna aliqua excepteur sint
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text81">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header3">
              <span className="home-text82">
                — Is excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum?
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text83">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header4">
              <span className="home-text84">
                — Who quasi architecto beatae vitae dicta sunt explicabo. Nemo
                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                fugit, sed quia consequuntur magni
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text85">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header5">
              <span className="home-text86">
                — Is minim veniam quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat.
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text87">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="home-container10">
            <Script
              html={`<script>
// Accordion - Code Embed

accordionContainers = document.querySelectorAll(".accordionContainer"); // All accordion containers
accordionContents = document.querySelectorAll(".accordionContent"); // All accordion content
accordionIcons = document.querySelectorAll(".accordionIcon"); // All accordion icons

accordionContents.forEach((accordionContent) => {
    accordionContent.style.display = "none"; //Hides all accordion contents
});

accordionContainers.forEach((accordionContainer, index) => {
    accordionContainer.addEventListener("click", () => {
        accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
        });

        accordionIcons.forEach((accordionIcon) => {
            accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
        });

        if (accordionContainer.classList.contains("accordion-open")) { // Checks if this container has class "accordion-open"
            accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open"
        } else {
            accordionContainers.forEach((accordionContainer) => {
                accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open" from all containers
            });

            accordionContainer.classList.add("accordion-open"); // Adds class "accordion-open" to this container
            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        }
    });
});

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
            ></Script>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default Home
