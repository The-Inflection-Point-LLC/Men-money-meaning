"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/public/assets/Hero.svg";
import MainHeroImage from "/assets/Groupofmen.jpeg";
import HeroSection from "./components/HeroSection";
import InterestingSection from "./components/InterestingSection";
import EnhancedByAI from "@/public/assets/winning-the-race-silhouette.jpg";
import {
    DEMO_INTERESTING_SNIPPETS,
    DEMO_WHAT_MAKES_DIFFERENT,
    DEMO_HELP_QUESTIONS,
    DEMO_SERVICES,
    DEMO_TESTIMONIES,
    DEMO_DOCKETS,
    DEMO_WHO_WE_ARE,
    DUMMY_FAMILIES_DATA,
    DUMMY_PERSONAL_GROWTH_DATA,
    DUMMY_RI_DATA,
} from "@/data/MockData";
import WhatMakesDifferentSection from "./components/WhatMakesDifferentSection";
import WhatIDOSection from "./components/WhatIDoSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import DocketSection from "./components/DocketSection";
import SuggestionBox from "./components/SuggestionBox";
import WhoSection from "./components/WhoSection";
import GetInTouchSection from "./components/GetInTouchSection";
import ToolsAndTech from "./components/ToolsAndTech";
import CardsComponent from "./components/CardsComponent";
import Footer from "./components/Footer";
import Section3 from "./components/Section";
import Section4 from "./components/Section4";

export default function Home() {
    return (
        // bg-[#F4EADF]
        <div className="bg-white min-h-screen"> 
            <Navbar brandName="Men <Money>" />

            <HeroSection

                title={`A place for <men> to`}
                //desc={`Our sole purpose is to provide you with the knowledge, skills and experiences to create stronger relationships!`}
                //title2={`Our point of view`}
                desc2={`<t>Connect</t>\n<t>Have fun</t>\n<t>Take on life challenges</t>\n`}
                img={MainHeroImage}
                // btns={[{ btnText: "Learn More", type: "video", link: "2g811Eo7K8U", title: "Random" }]}
            />

            {/* <WhatIDOSection data={DEMO_HELP_QUESTIONS} title="Our point of view" /> */}

            {/* <InterestingSection
                title={`This might be <interesting/ relevant> for you because`}
                description={`This is where visitors actually do something. They try a widget, use a tool, or complete a form. In each case they will get feedback in the form of a report. This is where we create the DESIRE for the product/service.`}
                data={DEMO_INTERESTING_SNIPPETS}
            /> */}

            {/* <ServicesSection services={DEMO_SERVICES} title={`What we do`} /> */}

            {/* <CardsComponent
                header={`What we do`}
                title={`<Families> – beautiful, fragile, messy`}
                sectionDetails={{
                    btnText: "Tiers, format & pricing",
                    link: "/assets/pdfs/TiersFormatsPricing.pdf",
                    type: "pdf",
                }}
                // tagline="The crucible of identity"
                data={DUMMY_FAMILIES_DATA}
            />*/}

            {/* <CardsComponent
                title={`Personal <Growth>`}
                // tagline={`Mastery required`}
                data={DUMMY_PERSONAL_GROWTH_DATA}
            />*/}          

            {/* <CardsComponent
                title={`<Relational Intelligence> Groups and Workshop Series`}
                // tagline={`Mastery required`}
                data={DUMMY_RI_DATA}
            /> */}

            <Section3
                title1={`This is <WHATEVER> you make it`}
                text1={`A business for you\nA hang out for many\nA lab for life’s messiness\nAn ecosystem for discovery`}
                /*btn1={{
                text: "Learn more",
                type: "text",
                link: `This is a big ask for a bigger result. An all hands-on-deck experience.\nTwelve people make a larger commitment within themselves and to each other.\n\nAnd make real progress on the biggest issues in their lives. The saving several times the cost of this.\n\n\nAt work\n<t>Acquiring power and influence and learning how to use it</t>\n<t>Defining and employing your greatest talents, and offloading your weaknesses</t>\n<t>Dealing with the persnickety politics that could sink you</t>\n<t>How do I know if/when I should leave my current position</t>\n\nAt home\n<t>What's it worth to be the husband and father you need to be</t>\n<t>What sucked about your growing up, and how can you nip that in the bud here and now</t>\n<t>What's really uncomfortable for me and my family – who am I worried about what can I do about it</t>\n\nDo you have 1¼ hours a week? Out of the 40-60 hours you will work this week?\nDo you have time to do something that will save you 4x that much time each week?\n\nFormat\n<t>Weekly group meetings, in person or hybrid</t>\n<t>Access to your personal portal</t>\n<t>Weekly 20-30 minute virtual group check-in</t>\n<t>Additional resources, gatherings, tools, meetings as needed</t>\nCost: $6,000 for the year\n<t>Equals the cost of a decent executive coach for one day.</t>\n<t>If the cost in time or money is prohibitive, don't do it.</t>\n<t>Because this is for those who are ready.</t>`,
                }}*/
                title2={`Or whatever <you want>`}
                image={EnhancedByAI}                
                //text2={`1.  Traditional diagnosis-based treatment of mental health conditions\n2.  Prescribe medications\n3.  Handle emergency situations`}
            />

            
            {/* <Section4
                title="Service Formats"
                tagline={{ title: `Tiers, formats and pricing`, btnTxt: "Learn more", link: "/assets/pdfs/Tiers.pdf" }}
                pyramid={{
                    title1: `Tier 1 – Scalable self-help`,
                    text1: `Inch deep and a mile wide.\nMostly free.\nLeverages tools, ideas & worksheets.`,
                    title2: `Tier 2 – Crucial skills and topics`,
                    text2: `Cost-effective personal insights.\nLeverages assessments, webinars, workshops & micro training.`,
                    title3: `Tier 3 – Small groups`,
                    text3: `Where the rubber meets the road.\nExpect real change in groups of 5-12 people.`,
                    title4: `Tier 4 – One-on-one`,
                    text4: `Higher-priced.\nPrivate and personalized.`,
                }}
            /> */}

            {/* <TestimonialsSection testimonies={DEMO_TESTIMONIES} /> */}

            {/* <DocketSection dockets={DEMO_DOCKETS} title={`What's on the <Docket?>`} /> */}

            {/* <SuggestionBox
                title={`Suggestion box`}
                desc={`<What do you want?>`}
                disclaimer={`Where there is interest, we will create something for you. \nPlease note that these services are not therapy and not designed for people with mental health issues.`}
            /> */}

            {/* <WhatMakesDifferentSection
                title={`What makes this <different?>`}
                desc={`With so many others out there,\nwhy work with Mitch`}
                data={DEMO_WHAT_MAKES_DIFFERENT}
                // btn={{ btnTxt: "See Formats and Pricing", type: "pdf", link: "/assets/pdfs/Pricing2.pdf" }}
            /> */}

            <ToolsAndTech
                title="And it starts with a call with <Mitch>"
                desc={`Who is Mitch?`}
            /> 

            {/*<WhoSection title={`Who is <Mitch Dickey?>`} /> */}

            <GetInTouchSection title={`What do <you want?>`} />

            <Footer/>
        </div>
    );
}
