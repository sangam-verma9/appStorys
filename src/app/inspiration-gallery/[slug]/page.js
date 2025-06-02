import React from 'react';
import { notFound } from 'next/navigation';
import { Satisfy } from "next/font/google";
import { FaArrowRight } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import Link from 'next/link';
const satisfy = Satisfy({ subsets: ["latin"], weight: ["400"] });
const cardsData = [
    {
        "name": "Zomato",
        "tags": ["Adoption"],
        "video": "/inspiration/videos/Zomato using Stories.mp4",
        "logo": "/inspiration/logos/zomato_logo.png",
        "why_this_works_heading": "Why It Feels Effortless",
        "why_this_works_content": ["Stories tap into muscle memory. Users instinctively know how to interact with them tap to progress, swipe to skip. Zomato smartly adapts this behavior to a utility-first context, turning passive scrolling into active exploration. ", "The format is bite- sized and visually rich, which lowers cognitive load while maximizing impact.Whether showcasing Zomato Gold perks, flash discounts, or curated food guides, Stories act as subtle prompts that encourage deeper engagement without feeling intrusive.", "By merging social media familiarity with app utility, Zomato solves the age - old problem of feature blindness.It ensures users don’t just use the app  they explore it.The result is a delightful, high - engagement experience that feels more like discovery and less like promotion."],
        "main_content_heading": "How Zomato Uses Stories to Drive Feature Discovery and Engagement",
        "main_content": ["Zomato, one of India’s leading food delivery platforms, has seamlessly integrated Instagram-style Stories into its app experience to boost user engagement and highlight key features. These stories are positioned prominently at the top of the homepage a prime visibility zone  where they immediately capture attention.", " Instead of relying on static banners or hidden menus, Zomato delivers dynamic, tappable cards that auto- advance, feel intuitive, and mimic the swipe - friendly behavior users are already accustomed to on social media platforms.This familiar format reduces friction, enabling users to effortlessly explore everything the app has to offer  from trending restaurants and seasonal specials to exclusive deals, loyalty benefits, and new product launches."],
        "link": "/inspiration-gallery/zomato",
        "background_color": "#FF3044",
        "text_color": "#ffffff"
    },
    {
        "name": "Zepto",
        "tags": ["Conversion"],
        "video": "/inspiration/videos/Zepto using Bottomsheet.mp4",
        "logo": "/inspiration/logos/zepto_logo.png",
        "why_this_works_heading": "Why It Feels Effortless",
        "why_this_works_content": ["Bottom sheets work so well because they reduce friction while preserving momentum. By keeping interactions in the user’s line of sight and within easy reach, Zepto turns complex tasks into smooth micro-interactions. ", "The design supports glanceable decisions, maintains context, and mirrors familiar UX patterns from other everyday apps making everything feel natural, efficient, and interruption- free.It’s not just good UX; it’s frictionless flow."],
        "main_content_heading": "Zepto improves UX with Bottom Sheets",
        "main_content": ["Zepto, India’s breakneck-fast grocery delivery app, relies on mobile-native bottom sheets to surface additional details without ever disrupting the user flow. Instead of forcing users to navigate to new screens or endure full-screen modals, Zepto elegantly slides up contextual panels from the bottom of the screen", "These sheets keep the main interface visible in the background, reinforcing spatial awareness and preserving the user’s place in the journey.Whether it’s selecting item variants, confirming substitutions, picking a delivery slot, or applying a discount code, bottom sheets keep all actions lightweight, intuitive, and thumb- friendly. ", "This approach enables one - handed usage, progressive disclosure of relevant options, and fluid gesture - based navigation all within a modern, swipeable design pattern that users instantly understand."],
        "link": "/inspiration-gallery/zepto",
        "background_color": "#3E0067",
        "text_color": "#ffffff"
    },
    {
        "name": "Urban Company",
        "tags": ["Feedback"],
        "video": "/inspiration/videos/Uber Using CSAT.mp4",
        "logo": "/inspiration/logos/urbancompany_logo.png",
        "why_this_works_heading": "Why It Feels Effortless",
        "why_this_works_content": ["The CSAT prompt is perfectly timed to capture emotions at their peak right after the service concludes leading to more accurate and relevant responses. The emoji-based scale mirrors familiar social gestures, requiring almost no cognitive effort to engage with. Because it's built into the flow, users can rate their experience in under five seconds without navigating away from their service summary.", " Each rating is immediately routed to both the professional and Urban Company’s internal quality team, turning quick taps into real-time action. Customers see their input reflected in pro ratings and future service standards, reinforcing a sense of accountability and care. By keeping feedback native, instant, and low-effort, Urban Company transforms a chore into a moment of meaningful connection—one that builds trust without interrupting the user journey"],
        "main_content_heading": "Urban Company gathers feedback using CSAT",
        "main_content": ["Urban Company, India’s leading home-services marketplace, has seamlessly embedded lightweight CSAT prompts into its app flow to collect feedback at the most relevant moments. Right after a service be it a massage, plumbing job, or home cleaning is marked complete, users are presented with a simple, emoji-based rating scale accompanied by an optional text box.", " This frictionless, in-app prompt appears before users exit the order screen, ensuring the experience is still fresh and feedback is detailed and meaningful. There’s no need to dig through emails or browse history tabs the feedback form is right where and when it matters."],
        "link": "/inspiration-gallery/urbanCompany",
        "background_color": "#ffffff",
        "text_color": "#000000"
    },
    {
        "name": "Unacademy",
        "tags": ["Activation"],
        "video": "/inspiration/videos/Unacademy using Tooltips.mp4",
        "logo": "/inspiration/logos/unacademy_logo.png",
        "why_this_works_heading": "Why It Feels Effortless",
        "why_this_works_content": ["Unacademy’s tooltips feel more like friendly nudges than instructions. They show up at exactly the right moment  when a user taps on an unfamiliar tab or lands on a key feature for the first time  so the learning feels natural, not forced. Because tooltips are visually lightweight and easy to dismiss, they don’t interrupt flow or cause friction.", " They reduce cognitive load by offering one piece of helpful information at a time, helping users build comfort gradually. And since learners come to Unacademy with different goals  from cracking exams to picking up new skills  these dynamic tooltips personalize guidance based on behavior, not assumptions. The result is an onboarding experience that feels approachable, intuitive, and self-paced  setting users up for success from their very first tap."],
        "main_content_heading": "Unacademy simplifies onboarding using Tooltips",
        "main_content": ["Unacademy, one of India’s most prominent online learning platforms, has thoughtfully embedded interactive tooltips into its onboarding journey to help new users navigate the app with ease. From the moment learners sign in, smart, contextual cues guide them through key features  like finding top educators, joining live classes, setting learning goals, or exploring structured courses  all without overwhelming the experience.", "Instead of using lengthy tutorials or static help pages, Unacademy breaks down guidance into short, digestible steps that appear just when needed. Tooltips appear as minimal, focused pop-ups  often with a single sentence and a clear CTA like “Try now” or “Swipe to continue.” This progressive, in-context approach gives users just the right amount of direction at each step, allowing them to explore with confidence."],
        "link": "/inspiration-gallery/unacademy",
        "background_color": "#FFFFFF",
        "text_color": "#000000"
    },
    {
        "name": "Uber",
        "tags": ["Feedback"],
        "video": "/inspiration/videos/Uber Using CSAT.mp4",
        "logo": "/inspiration/logos/uber_logo.png",
        "why_this_works_heading": "Why It Feels Effortless",
        "why_this_works_content": ["The feedback prompt leverages familiar UX patterns  star ratings, quick-select tags, and optional comments  to make the process feel intuitive and non-intrusive. Because it appears while the user is still engaged and in context, it doesn’t interrupt or delay the next action.", " The flow is optimized for speed: just one tap is enough to share a meaningful signal. Behind the scenes, this data powers real-time interventions, such as flagging poor service, auto-sending apologies, or adding praise to a driver’s profile. By embedding CSAT within the natural rhythm of the ride experience, Uber turns a simple tap into a feedback loop that drives platform trust, safety, and satisfaction  all without asking users to do anything extra"],
        "main_content_heading": "Uber collects real-time feedback with CSAT",
        "main_content": ["Uber, the global ride-hailing giant, has seamlessly woven real-time CSAT prompts into the post-ride experience to continuously monitor quality and user sentiment. The moment a ride concludes, users are instantly prompted to rate their driver on a 1–5 star scale with optional tags like “Clean Car” or “Safe Driving”  and a text box to leave detailed feedback if desired. It’s quick, familiar, and requires almost no thought, making it effortless for riders to share their experience while it’s still fresh.", "Instead of relying on follow-up emails or infrequent surveys, Uber keeps feedback capture tightly integrated within the ride flow itself. The prompt appears just as the ride ends, when riders are still in the app confirming the fare or booking their next trip. This timing ensures high response rates, accurate insights, and actionable signals for Uber’s platform to continuously improve service quality, reward top drivers, and address issues in real time."],
        "link": "/inspiration-gallery/uber",
        "background_color": "#0A0A0A",
        "text_color": "#ffffff"
    },
    {
        "name": "Swiggy",
        "tags": ["Adoption"],
        "video": "/inspiration/videos/Swiggy using Floater.mp4",
        "logo": "/inspiration/logos/Swiggy_logo.png",
        "why_this_works_heading": "Why It Feels Effortless",
        "why_this_works_content": ["Swiggy’s floating tips blend into the experience like friendly suggestions rather than formal instructions. They appear at just the right moment  triggered by user behavior or new feature releases so they always feel timely and relevant. Their floating, animated nature draws attention without being jarring, making them easy to notice but just as easy to dismiss.", " Each tip focuses on one simple action, keeping decisions clear and cognitive load low. By embedding guidance in this lightweight, visual way, Swiggy turns learning into doing  helping users discover more without ever losing their place. The result is a more confident, engaged user who feels guided not overwhelmed  every step of the way."],
        "main_content_heading": "Swiggy guides users with Floating Tips",
        "main_content": ["Swiggy, one of India’s leading food and grocery delivery platforms, uses floating tips to offer seamless, real-time guidance throughout the app. These subtle, animated cues often anchored near new or complex features  help users discover options like group ordering, scheduled delivery, or Swiggy One benefits without needing to search or dig through FAQs. Floating tips appear just when they’re needed, enhancing exploration without interrupting flow.", "Instead of relying on heavy onboarding screens or static tooltips buried in settings, Swiggy deploys floating tips contextually  for example, nudging a user to apply a coupon, explore a new tab, or activate tracking on a live order. These micro-guides float lightly over the UI, using simple language and minimal design, so users can take action with a single tap or swipe. The experience is highly visual and designed for mobile-native behavior, where attention spans are short and time is limited."],
        "link": "/inspiration-gallery/swiggy1",
        "background_color": "#FC5A20",
        "text_color": "#ffffff"
    },
    {
        "name": "Zomato",
        "tags": ["Engagement"],
        "video": "/inspiration/videos/Zomato Using Modals.mp4",
        "logo": "/inspiration/logos/zomato_logo.png",
        "why_this_works_heading": "Why It Feels Effortless",
        "why_this_works_content": "Modals capture user attention in a focused, distraction-free frame. Zomato uses them with restraint and precision, turning what could feel like interruptions into moments of relevance. By surfacing personalized offers, upsells (like free delivery with Gold), or context-aware nudges (like reminding users about expiring coupons), modals drive real-time decisions. They reduce the need for users to dig through menus or miss value hidden deeper in the app. The key is timing and relevance. Zomato’s modals aren't generic  they’re behaviorally triggered and visually compelling. That makes them feel like concierge guidance rather than pop-up noise. Zomato blends thoughtful UX with business outcomes, using modals to increase conversions, highlight underutilized features, and keep users progressing seamlessly through the app  all without breaking flow.",
        "main_content_heading": "Zomato enhances user interaction through Modals",
        "main_content": "Zomato, India’s premier food delivery platform, leverages modals, those brief, focused overlays  to streamline user journeys and surface high-priority content at just the right moment. Whether it's nudging users toward a limited-time offer, highlighting a new feature, or prompting action like adding items to cart, Zomato uses modals as contextual touchpoints that feel helpful, not intrusive. These pop-ups are visually clean, mobile-optimized, and behaviorally intelligent. They appear when user intent is clearest  right after a search, during checkout, or on first app open  and they often include simple visuals, quick CTAs, and a clear path forward. Zomato’s modals don’t interrupt; they inform, guide, and convert.",
        "link": "/inspiration-gallery/zomato",
        "background_color": "#FF3044",
        "text_color": "#ffffff"
    },
    {
        "name": "Zepto",
        "tags": ["Activation"],
        "video": "/inspiration/videos/Zepto using Modals.mp4",
        "logo": "/inspiration/logos/zepto_logo.png",
        "why_this_works_heading": "Why It Feels Effortless",
        "why_this_works_content": ["Modals capture user attention in a focused, distraction-free frame. Zomato uses them with restraint and precision, turning what could feel like interruptions into moments of relevance.", "By surfacing personalized offers, upsells (like free delivery with Gold), or context-aware nudges (like reminding users about expiring coupons), modals drive real-time decisions. They reduce the need for users to dig through menus or miss value hidden deeper in the app.", "The key is timing and relevance. Zomato’s modals aren't generic  they’re behaviorally triggered and visually compelling. That makes them feel like concierge guidance rather than pop-up noise.", "Zomato blends thoughtful UX with business outcomes, using modals to increase conversions, highlight underutilized features, and keep users progressing seamlessly through the app  all without breaking flow."],
        "main_content_heading": "Zepto streamlines communication using Modals",
        "main_content": ["Zomato, India’s premier food delivery platform, leverages modals, those brief, focused overlays  to streamline user journeys and surface high-priority content at just the right moment. Whether it's nudging users toward a limited-time offer, highlighting a new feature, or prompting action like adding items to cart, Zomato uses modals as contextual touchpoints that feel helpful, not intrusive.", "These pop-ups are visually clean, mobile-optimized, and behaviorally intelligent. They appear when user intent is clearest  right after a search, during checkout, or on first app open  and they often include simple visuals, quick CTAs, and a clear path forward. Zomato’s modals don’t interrupt; they inform, guide, and convert."],
        "link": "/inspiration-gallery/zepto",
        "background_color": "#3E0067",
        "text_color": "#ffffff"
    },
    {
        "name": "Spotify",
        "tags": ["Conversion"],
        "video": "/inspiration/videos/Spotify using In-app modals.mp4",
        "logo": "/inspiration/logos/spotify_logo.png",
        "why_this_works_heading": " Why It Feels Effortless",
        "why_this_works_content": ["Spotify’s in-app modals are designed to be moment-aware and minimally disruptive. They appear during idle moments or transitions like finishing a playlist or opening the app after a long break ensuring they feel timely, not intrusive. Their layout is simple and visually engaging, using familiar Spotify branding to create instant recognition.", " By limiting each modal to one key message with a straightforward action, the platform minimizes decision fatigue and maximizes user clarity. Whether showcasing a new feature or simply alerting users to design changes, Spotify treats modals as helpful nudges rather than hard sells. The result is a user experience that feels personal, informed, and effortlessly guided helping users get the most from Spotify without ever missing a beat."],
        "main_content_heading": "Spotify delivers updates via In-App Modals",
        "main_content": ["Spotify, the world’s most popular music streaming platform, uses sleek in-app modals to keep users informed about new features, personalized playlists, and product changes without breaking the flow of listening. Whether it’s highlighting a fresh Spotify Wrapped experience, introducing a new AI DJ, or nudging users to explore collaborative playlists, these modals are strategically placed to appear between interactions never mid-song.", "Instead of cluttering the homepage with banners or relying solely on email updates, Spotify delivers visually clean, mobile-first modals that are easy to absorb and dismiss. Typically appearing as overlays during app launches or post-interaction pauses, they use bold visuals, brief copy, and a single, clear call-to-action like “Try Now” or “Dismiss.” This keeps the user experience fluid while ensuring that important updates don’t get lost in menus or overlooked in app stores."],
        "link": "/inspiration-gallery/spotify",
        "background_color": "#1ED760",
        "text_color": "#000000"
    },
    {
        "name": "Swiggy",
        "tags": ["Feedback"],
        "video": "/inspiration/videos/Swiggy using CSAT.mp4",
        "logo": "/inspiration/logos/Swiggy_logo.png",
        "why_this_works_heading": " Why It Feels Effortless",
        "why_this_works_content": ["The timing is perfect: feedback is requested at the “fresh bite” moment when satisfaction is clearest, so users don’t have to recall details later. The emoji style scale taps into familiar social gestures, making rating instinctive and practically friction-free. Because everything happens inside the app no email surveys, no redirects customers stay in context and can complete the task in under five seconds. Pre filled tags reduce typing, while optional comments keep the door open for nuance without forcing it.", " Behind the scenes, Swiggy turns each tap into immediate actions auto-crediting riders, adjusting restaurant quality scores, or triggering refunds so users see tangible results from their feedback. By keeping the ask tiny, timely, and transparently useful, Swiggy transforms a simple rating into a trust-building micro-interaction that never slows the journey to the next order."],
        "main_content_heading": "Swiggy measures satisfaction using CSAT",
        "main_content": ["Swiggy, India’s iconic orange-branded food-delivery app, bakes a lightweight CSAT check into the very last step of every order. The moment a delivery partner marks an order “delivered,” a compact sheet slides up on the live-tracking screen with a five-point smiley scale and a few quick-select tags like “Packaging,” “Temperature,” or “Delivery Time.” A single tap logs the rider restaurant combo’s score, a second tap lets customers add a short note or photo if something needs attention.", " Because the prompt appears while the customer is still looking at the order details checking bill totals or confirming cutlery, the experience feels like a natural part of the flow, not an extra chore. Swiggy pipes these instant ratings to restaurant dashboards, delivery-partner scorecards, and its own quality control engine closing the feedback loop in real time and allowing the platform to reward stellar service or step in when things go wrong."],
        "link": "/inspiration-gallery/swiggy2",
        "background_color": "#FC5A20",
        "text_color": "#ffffff"
    },
    {
        "name": "Porter",
        "tags": ["Feedback"],
        "video": "/inspiration/videos/Porter using CSAT.mp4",
        "logo": "/inspiration/logos/porter_logo.png",
        "why_this_works_heading": "Why It Feels Effortless",
        "why_this_works_content": ["Porter’s timing hits the “delivery high”  while memories are vivid, yielding honest, actionable insights. The emoji scale echoes everyday chat reactions, so sharing sentiment takes under five seconds and virtually zero thought. Pre-filled tags curb typing, while optional comments keep the door open for nuance without forcing it."," Because the survey lives inside the same screen that shows trip cost and driver details, users stay in context and never juggle browser links or email forms. Behind the scenes, every tap fuels instant interventions auto-crediting drivers for great service, flagging consignments for review, or triggering proactive support calls. By keeping the survey tiny, timely, and transparently useful, Porter turns feedback into a trust-building micro-interaction that actually makes the next booking better."],
        "main_content_heading": "Porter improves service with CSAT surveys",
        "main_content": ["Porter, India’s go-to logistics platform for on-demand mini-truck and two-wheeler deliveries, has embedded lightning-quick CSAT surveys at the very end of every trip. The moment a package is marked “delivered,” a slim survey sheet slides up in-app, showing a familiar five-emoji scale plus quick-select tags like “Driver Courtesy,” “Timeliness,” or “Package Handling.” ", " One tap locks in the score  a second tap lets shippers add a short note or photo if something needs attention. Because the ask appears while the customer is still viewing fare details or tracking proofs, feedback feels like a natural last step never an extra chore. Porter pipes each rating straight to driver dashboards, city-level ops teams, and its real-time quality engine, so stellar partners get rewarded and issues are addressed within minutes, not days."],
        "link": "/inspiration-gallery/porter",
        "background_color": "#FFFFFF",
        "text_color": "#000000"
    },
    {
        "name": "Paytm",
        "tags": ["Engagement"],
        "video": "/inspiration/videos/Paytm using Scratchcards.mp4",
        "logo": "/inspiration/logos/paytm_logo.png",
        "why_this_works_heading": "Why It Feels Effortless",
        "why_this_works_content": ["Scratchcards tap into familiar game mechanics that users instinctively understand scratch to reveal rewards, tap to claim. Paytm smartly adapts this to a payments context, turning routine transactions into moments of delight and anticipation.", " The format is bite-sized and visually engaging, which lowers cognitive load while maximizing the thrill of winning. Whether offering cashback, discounts, or exclusive vouchers, Scratchcards act as subtle incentives that encourage deeper app usage without feeling pushy.", " By blending familiar gaming elements with practical rewards, Paytm solves the challenge of user disengagement. It ensures users don’t just complete transactions they look forward to what comes next. The result is a joyful, high-engagement experience that feels more like winning and less like spending."],
        "main_content_heading": "Paytm delights users with Scratchcards",
        "main_content": ["Paytm, one of India’s leading digital payment platforms, has creatively integrated Scratchcards into its app experience to boost user engagement and reward loyal customers. These Scratchcards appear prominently after transactions in a prime visibility zone where they immediately catch the user’s eye.", " Instead of relying on traditional cashback or static offers, Paytm delivers interactive, tappable Scratchcards that feel playful and rewarding. This gamified format taps into users’ curiosity and excitement, encouraging them to engage actively rather than passively scrolling through deals or wallet balances."],
        "link": "/inspiration-gallery/paytm",
        "background_color": "#E9F7FD",
        "text_color": "#000000"
    },
    {
        "name": "Mudrex",
        "tags": ["Engagement"],
        "video": "/inspiration/videos/Mudrex using Modals.mp4",
        "logo": "/inspiration/logos/mudrex_logo.png",
        "why_this_works_heading": "Why It Feels Effortless",
        "why_this_works_content": ["Modals tap into users’ natural decision-making flow. They appear at contextually relevant moments, prompting action with clear choices and benefits. Mudrex smartly uses this to reduce hesitation, turning browsing into conversion without breaking the experience.", " The format is concise and visually clear, which lowers cognitive load while maximizing urgency. Whether showcasing limited-time offers, educational tips, or personalized investment options, Modals act as subtle nudges encouraging deeper engagement without feeling pushy.", " By blending timely prompts with useful content, Mudrex solves the challenge of user drop-off. It ensures users don’t just explore investment opportunities  they commit. The result is a smooth, high-conversion experience that feels more like helpful guidance and less like interruption."],
        "main_content_heading": "Mudrex drives conversions using Modals",
        "main_content": ["Mudrex, a leading platform for crypto investment, has effectively integrated Modals into its user experience to drive conversions and spotlight core features and initiatives. These Modals appear strategically during the user journey in high-impact zones, capturing attention at crucial decision points.", " Rather than relying on static banners or scattered notifications, Mudrex employs dynamic, focused Modals that encourage users to take meaningful actions — from signing up for new strategies to exploring exclusive investment opportunities. One standout example shown in the video is the Mudrex Premier League, where users participate in a competitive battle between Delhi and Mumbai. This engaging campaign is seamlessly promoted through Modals, making the experience feel interactive and compelling. The targeted approach ensures users are guided through complex decisions with clarity and purpose, all while enhancing engagement in a fun and timely way"],
        "link": "/inspiration-gallery/mudrex",
        "background_color": "#F1E2FB",
        "text_color": "#000000"
    },
    {
        "name": "Furlenco",
        "tags": ["Adoption", "Conversion"],
        "video": "/inspiration/videos/Furlenco using In App Widgets.mp4",
        "logo": "/inspiration/logos/furlenco_icon.png",
        "why_this_works_heading": "Why It Feels Effortless",
        "why_this_works_content": [" Widgets tap into users’ expectation for personalized, bite-sized content. Users instinctively know how to interact with these modular components  tap to explore, swipe to refresh. Furlenco smartly adapts this behavior to a utility-first context, turning passive browsing into active discovery.", " The format is visually engaging and contextually relevant, which lowers cognitive load while maximizing impact. Whether showcasing trending furniture styles, limited-time offers, or curated rental bundles, widgets act as subtle prompts that encourage deeper engagement without feeling intrusive. ", "By merging personalization with app utility, Furlenco solves the challenge of user overwhelm. It ensures users don’t just scroll  they find exactly what fits their style and needs. The result is a smooth, high-engagement experience that feels more like a personal shopping assistant and less like a sales pitch."],
        "main_content_heading": "Furlenco personalizes experience with In-App Widgets",
        "main_content": ["Furlenco, a leading furniture rental platform, has seamlessly integrated In-App Widgets into its app experience to boost user engagement and highlight personalized offerings. These widgets are positioned strategically across the app in prime visibility zones where they immediately capture attention.", " Instead of relying on generic menus or static product listings, Furlenco delivers dynamic, interactive widgets that update in real-time, feel intuitive, and mirror the personalized feeds users are familiar with from other apps. This familiar format reduces friction, enabling users to effortlessly discover tailored furniture suggestions, exclusive deals, and flexible rental "],
        "link": "/inspiration-gallery/furlenco",
        "background_color": "#009BAD",
        "text_color": "#ffffff"
    },
    {
        "name": "coinDCX",
        "tags": ["Activation"],
        "video": "/inspiration/videos/Coin DCX using tooltips.mp4",
        "logo": "/inspiration/logos/coindcx_logo.png",
        "why_this_works_heading": "Why It Feels Effortless",
        "why_this_works_content": [" Tooltips tap into muscle memory. Users instinctively know they can hover or tap for a hint, then dismiss with a swipe. CoinDCX smartly adapts this behavior to a high-stakes context, turning potential confusion into confident action.", " The format is micro, timed, and visually light, which lowers cognitive load while maximizing clarity. Whether decoding jargon, highlighting new features, or surfacing security tips, Tooltips act as subtle coaches that boost mastery without feeling intrusive.", " By merging real-time education with transactional flow, CoinDCX solves the age-old problem of crypto intimidation. It ensures users don’t just trade  they learn. The result is a reassuring, high-engagement experience that feels more like guided discovery and less like guesswork."],
        "main_content_heading": "CoinDCX educates users through Tooltips",
        "main_content": ["CoinDCX, one of India’s leading crypto-investment platforms, has seamlessly woven bite-sized Tooltips into its app experience to guide users and demystify complex concepts. These smart hints pop up context-fully beside buttons, charts, and order forms prime visibility zones where they immediately catch the eye when a user needs help most.", " Instead of relying on long FAQs or hidden help centers, CoinDCX delivers dynamic, tappable bubbles that surface plain-language explanations, key stats, and quick links to deeper learning. This on-the-spot guidance reduces friction, empowering users to explore everything the app offers from setting stop-loss orders and understanding funding rates to comparing staking yields and tracking tax summaries."],
        "link": "/inspiration-gallery/coinDCX",
        "background_color": "#ffffff",
        "text_color": "#000000"
    },
    {
        "name": "Blinkit",
        "tags": ["Adoption", "Conversion"],
        "video": "/inspiration/videos/Blinkit using Banners.mp4",
        "logo": "/inspiration/logos/blinkit_logo.png",
        "why_this_works_heading": "Why It Feels Effortless",
        "why_this_works_content": ["Banners tap into familiar web and mobile design cues. Users instantly recognize them as clickable content  swipe to view more, tap to engage. Blinkit smartly aligns this behavior with its rapid delivery promise, turning browsing into instant decision-making.", " The format is large, colorful, and visually rich, which lowers the need for reading while maximizing visual impact. Whether showcasing festival bundles, grocery combos, or express delivery promotions, Banners act as visual anchors that guide users deeper into the shopping experience without disrupting flow.", " By combining visual clarity with smart placement, Blinkit solves the challenge of choice overload. It ensures users don’t just scroll  they stop, engage, and convert. The result is a fluid, high-engagement experience that feels more like discovery and less like a sales push."],
        "main_content_heading": "Blinkit captures attention using Banners",
        "main_content": ["Blinkit, one of India’s fastest-growing quick-commerce platforms, has seamlessly integrated vibrant Banners into its app experience to boost user engagement and surface high-value content. These banners are positioned prominently on the homepage  a prime visibility zone  where they instantly draw attention.", " Instead of depending on passive product listings or static menus, Blinkit delivers bold, tappable banners that spotlight trending items, time-sensitive deals, and seasonal essentials. The format is visually impactful and feels intuitive, giving users a clear and immediate path to explore new offers and top categories."],
        "link": "/inspiration-gallery/blinkit",
        "background_color": "#F8CB46",
        "text_color": "#000000"
    },
    {
        "name": "Airtel",
        "tags": ["Activation"],
        "video": "/inspiration/videos/Airtel using Tooltips.mp4",
        "logo": "/inspiration/logos/airtel_logo.png",
        "why_this_works_heading": "Why It Feels Effortless",
        "why_this_works_content": ["Tooltips tap into intuitive behavior. Users instinctively recognize these subtle prompts tap for help, swipe to dismiss. Airtel smartly adapts this pattern to a utility-first environment, turning potential uncertainty into confident action.", " The format is lightweight and focused, which lowers cognitive load while delivering just the right amount of context. Whether clarifying recharge options, explaining account settings, or introducing new features, Tooltips act as micro-assistants that educate without overwhelming.", " By embedding real-time support within the user journey, Airtel solves the problem of feature overload. It ensures users don’t just navigate the app  they understand it. The result is a smooth, high-confidence experience that feels more like guided empowerment and less like trial and error."],
        "main_content_heading": "Airtel improves user guidance with Tooltips",
        "main_content": ["Airtel, one of India’s largest telecom providers, has seamlessly integrated Tooltips into its app experience to enhance user guidance and simplify complex features. These helpful hints are placed contextually beside key actions  in prime visibility zones where they instantly support user decisions.", " Instead of relying on external help centers or buried FAQs, Airtel delivers real-time, tappable Tooltips that surface concise, relevant information exactly when and where users need it. This guided approach reduces confusion, making it easier to navigate everything from bill payments and plan upgrades to data usage insights and service requests."],
        "link": "/inspiration-gallery/airtel",
        "background_color": "#E90000",
        "text_color": "#ffffff"
    },
    {
        "name": "Zyadashop",
        "tags": ["Activation", "Adoption"],
        "video": "/inspiration/videos/Zyadashop using Coachmarks.mp4",
        "logo": "/inspiration/logos/zyadashop_logo.png",
        "why_this_works_heading": "Why It Feels Effortless",
        "why_this_works_content": ["Coachmarks tap into action-based learning. Users instinctively follow visual cues tap here, try this, next step. Zyadashop smartly adapts this behavior to a commerce context, turning first-time confusion into confident exploration. ", "The format is minimal and contextual, which lowers cognitive load while maximizing clarity.Whether introducing limited- time deals, showcasing category filters, or guiding users through payment flows, Coachmarks act as invisible guides that help users unlock value without disruption.", "By blending real - time instruction with interactive design, Zyadashop solves the challenge of first - time user drop - off.It ensures users don’t just land in the app they learn how to use it.The result is a frictionless, high - engagement experience that feels more like onboarding through doing and less like learning through reading."],
        "main_content_heading": "Zyadashop using Coachmarks",
        "main_content": ["Zyadashop, a fast-growing e-commerce platform, has seamlessly integrated Coachmarks into its app experience to onboard users and highlight key features. These interactive guides appear contextually across the interface in prime visibility zones  where they immediately capture attention.", " Instead of relying on lengthy tutorials or static onboarding screens, Zyadashop delivers dynamic, step- by - step Coachmarks that point out important elements in real time.This approach feels intuitive and mirrors the guidance style users are familiar with from modern productivity and design tools.It reduces friction, enabling users to effortlessly navigate the app  from discovering trending collections and applying coupons to tracking orders and managing returns."],
        "link": "/inspiration-gallery/zyadashop",
        "background_color": "#3C329D",
        "text_color": "#ffffff"
    }
];

export async function generateStaticParams() {
    return cardsData.map(card => {
        const slug = card.link.split('/').pop();
        return { slug };
    });
}

export default async function InspirationDetail({ params }) {
    const { slug } = await params;

    const card = cardsData.find(item => item.link.endsWith(slug));
    const threerand = Array.from({ length: 3 }, () => Math.floor(Math.random() * 18));
    const filteredCards = [];
    threerand.forEach((ele) => {
        filteredCards.push(cardsData[ele]);
    })
    if (!card) return notFound();

    return (
        <div className="min-h-screen p-6 w-full flex justify-center">
            <div className='max-w-[1200px]'>
                <div className='flex flex-col md:flex-row justify-between mt-[20px] md:mt-[50px] mb-[30px] md:mb-0'>
                    <div className='w-full md:w-2/3 md:pr-[60px]'>
                        <h4 className={`${satisfy.className} text-orange-500 text-xl sm:text-2xl font-normal mb-3 sm:mb-4`}>
                            Inspiration Gallery
                        </h4>
                        <h1 className="md:text-[50px] text-3xl font-bold md:mb-6 mb-4">{card.main_content_heading}</h1>
                        {card.main_content.map((ele, ind) => {
                            return (
                                <p className="mb-4 md:text-[20px] text-[18px]">{card.main_content[ind]}</p>
                            )
                        })}

                    </div>
                    <div className='w-full md:w-1/3 flex flex-col justify-center '>
                        <div className='w-full flex justify-center'>
                            <img src={card.logo} alt={card.name} className="h-16 rounded-3xl px-4 py-2 mb-4 w-[150px] object-contain" style={{ backgroundColor: `${card.background_color}` }} />
                        </div>
                        <div className='flex w-full justify-center'>
                            <div className="w-[250px] h-[500px] bg-gray-800 rounded-2xl p-1 flex-shrink-0 overflow-hidden ">
                                <div className="w-full h-full bg-white rounded-xl flex items-center justify-center overflow-hidden">
                                    <video className={`text-xl font-semibold mb-4 rounded-2xl}`} src={card.video} autoPlay muted loop playsInline />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full mb-[30px] mb:mb-[70px]" >
                    <h2 className="md:text-[50px] text-3xl font-bold mb-4 ">{card.why_this_works_heading}</h2>
                    {card.why_this_works_content.map((ele, ind) => {
                        return (
                            <p className=' mb-4 md:text-[20px] text-[18px]'>{card.why_this_works_content[ind]}</p>
                        )
                    })}

                </div>
                <div className='bg-[#FFF7F3] rounded-lg p-2'>
                    <h2 className='text-center text-[#FD5F03] text-4xl font-semibold mb-[30px] md:mb-0 p-5'>Browse more inspirations</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
                        {filteredCards.map((card, index) => (
                            <div
                                key={index}
                                className="rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-[485px] border border-white"
                                style={{ backgroundColor: card.background_color }}
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={card.logo}
                                            alt={`${card.name} logo`}
                                            className="w-auto max-w-[120px] h-auto rounded-lg object-contain"
                                        />
                                    </div>

                                    <div className="w-[100px] h-[200px] bg-gray-800 rounded-2xl p-1 flex-shrink-0 overflow-hidden ">
                                        <div className="w-full h-full bg-white rounded-xl flex items-center justify-center overflow-hidden">
                                            <video className={`text-xl font-semibold mb-4 rounded-2xl}`} src={card.video} autoPlay muted loop playsInline />
                                        </div>
                                    </div>
                                </div>

                                <div className='h-[170px]'>
                                    <h5 className={`text-lg font-medium mb-2 `} style={{ color: `${card.text_color}` }}>
                                        {card.main_content_heading}
                                    </h5>

                                    <p className={`text-sm mb-6 leading-relaxed `} style={{ color: `${card.text_color}` }}>
                                        {card.main_content[0].length > 120
                                            ? `${card.main_content[0].substring(0, 120)}...`
                                            : card.main_content[0]}
                                    </p>

                                </div>
                                <Link
                                    href={card.link}
                                    className={`inline-flex items-center gap-2 px-5 py-2 rounded-lg font-medium transition-all duration-200 text-black shadow border border-gray-400 bg-white`}
                                >
                                    Read More
                                    <FaArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className='w-full flex justify-center my-5'>
                        <Link href={"/blogs"} className=' h-[40px] py-4 px-5 bg-[#FD5F03]  text-white rounded-xl flex items-center'>
                            View all <FaAngleRight className='ml-1' />
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}
