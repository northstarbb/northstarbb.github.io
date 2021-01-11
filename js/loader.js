window.onscroll = function() {
    scrollFunction()
};

mainNav1 = document.getElementById("js-menu1");   
navBarToggle1 = document.getElementById("js-navbar-toggle1");
mainNav2 = document.getElementById("js-menu2");
navBarToggle2 = document.getElementById("js-navbar-toggle2");

navBarToggle1.addEventListener("click", function() {
    mainNav1.classList.toggle("active");
});

mainNav1.addEventListener("click", function() {
    mainNav1.classList.toggle("active");
});

navBarToggle2.addEventListener("click", function() {
    mainNav2.classList.toggle("active");
});

mainNav2.addEventListener("click", function() {
    mainNav2.classList.toggle("active");
});

var slideIndex = 0;

function plusSlides(e) {
    showSlides(slideIndex += e)
}

function showSlides(e) {
    var n, o = document.getElementsByClassName("mySlides");
    for (e > o.length && (slideIndex = 1), e < 1 && (slideIndex = o.length), n = 0; n < o.length; n++) o[n].style.display = "none";
    o[slideIndex - 1].style.display = "block"
}

function carousel() {
    var e, n = document.getElementsByClassName("mySlides");
    for (e = 0; e < n.length; e++) n[e].style.display = "none";
    ++slideIndex > n.length && (slideIndex = 1), n[slideIndex - 1].style.display = "block", setTimeout(carousel, 4400)
}

function scrollFunction() {
    document.documentElement.scrollTop > 20 ? document.getElementById("to-top").style.display = "block" : document.getElementById("to-top").style.display = "none";

    if (document.documentElement.scrollTop > 20){
        document.getElementById("whiteline").style.borderBottom = "none";
    } else if (document.documentElement.scrollTop < 20){
        document.getElementById("whiteline").style.borderBottom = "3px solid white";
    } else {
        return false;
    }

    let currentWindowHeight = window.innerHeight;
    let stickyNavbar = document.getElementsByClassName("nav-wrap-sticky")[0];
    if (document.documentElement.scrollTop >= currentWindowHeight - 76){
        mainNav1.classList.remove("active");
        stickyNavbar.style.display = "block";
    }
    else {
        mainNav2.classList.remove("active");
        stickyNavbar.style.display = "none";
    }
}

function toTop() {
    document.body.scrollTop = 0, document.documentElement.scrollTop = 0;
}
carousel();

function setUpLearnMoreModal() {
    let openModal = document.getElementById("learnmore");
    let closeModal = document.getElementById("learnmore-close");
    let modal = document.getElementById("learnmore-modal");

    openModal.addEventListener("click", function() {
        modal.style.display = "block";
        document.documentElement.style.overflow = "hidden"; 
        

    });
    closeModal.addEventListener("click", function()  {
        modal.style.display = "none";
        document.documentElement.style.overflow = ""; 
    });
}
setUpLearnMoreModal();

function setUpHvrBoxModal() {
    let openModalElements = document.getElementsByClassName("hvrbox");
    let closeModal = document.getElementById("hvrbox-close");
    let modal = document.getElementById("hvrbox-modal");

    let modalTitle = document.getElementById("hvrbox-modal-content-title");
    let modalSubtitle = document.getElementById("hvrbox-modal-content-subtitle");
    let modalChallengeText = document.getElementById("hvrbox-modal-content-info-left-section-challenge-content");
    let modalApproachText = document.getElementById("hvrbox-modal-content-info-left-section-approach-content");
    let modalResultText = document.getElementById("hvrbox-modal-content-info-left-section-result-content");
    let modalImg = document.getElementById("hvrbox-modal-content-info-img");
    let modalFooter = document.getElementById("hvrbox-modal-content-footer");
    console.log(modalFooter);
    for(let el of openModalElements) {
        el.addEventListener("click", function() {
            modal.style.display = "block";
            document.documentElement.style.overflow = "hidden"; 

            //workName which comes from the image alt attribute
            let workName = el.children[0].alt;
            let workImg = el.children[0].src;
            modalTitle.innerHTML = workName;
            // do if statement for all your work elements, must match image alt attribute
            if(workName === "Red Vines*") {
                //subtitle
                modalSubtitle.innerHTML = "Repositioning / Relaunch / Innovation";
                //challenge text
                modalChallengeText.innerHTML = "Competing against a well-known brand managed by a Fortune 500 company, Red Vines was facing significant competitive headwinds. However, the brand still had goals of expanding outside of its core markets and realize its vision of growing market share.";
                //apprach text
                modalApproachText.innerHTML = "To assist, we developed an overarching strategy to defend share by re-positioning and relaunching the brand, basing the new direction on key consumer insights. In conjunction, we developed a robust innovation strategy that included the launch of a new sub-brand to meet the needs of consumers as Red Vines expands distribution outside of its core markets.";
                //result text
                modalResultText.innerHTML = "The brand re-launch was hugely successful and resulted in notable share and distribution gains.";
                //img src
                modalImg.src = workImg;
                //img alt 
                modalImg.alt = workName;
                //footer
                modalFooter.innerHTML = "Completed by Stephanie Louie during her tenure as Brand Manager at Red Vines.";
            }
            else if(workName === "Global Grub") {
                //subtitle
                modalSubtitle.innerHTML = "Repositioning & Consumer Research";
                //challenge text
                modalChallengeText.innerHTML = "Global Grub’s DIY cooking kits eliminate all the hassles that adventurous cooks face as they “travel the culinary world”.  After successfully growing its B2B and wholesale business, Global Grub set out to expand its direct-to-consumer business, but first wanted to refine its positioning and better understand the needs of its current consumers.";
                //apprach text
                modalApproachText.innerHTML = "After a high-level category and competitive assessment, we developed three different positioning options for Global Grub.  We then conducted 12 in-depth interviews to gather key consumer insights on the use of cooking kits and their experience with Global Grub, as well as get feedback on the proposed positioning options.";
                //result text
                modalResultText.innerHTML = "The results of the research were instrumental in defining Global Grub’s positioning around cooking adventure memories, and helped the company raise additional funding to pursue its direct-to-consumer growth strategy.";
                //img src
                modalImg.src = workImg;
                //img alt 
                modalImg.alt = workName;

                modalFooter.innerHTML = "";
            }
            else if(workName === "Booksy") {
                //subtitle
                modalSubtitle.innerHTML = "Brand Strategy / Insights Gathering";
                //challenge text
                modalChallengeText.innerHTML = "A global SaaS start-up in the beauty industry had made great strides growing its marketplace in the US, but was struggling to get customers to book their appointments online after they researched various vendors. Understanding why this was happening was critical in order to determine future growth strategies.";
                //apprach text
                modalApproachText.innerHTML = "We conducted an in-depth analysis to arrive at hypotheses for the low conversion and then conducted 14 in-depth interviews in a key market to understand the most important considerations in making beauty booking decisions.";
                //result text
                modalResultText.innerHTML = "The customer research helped confirm our hypotheses on key drivers and also provided insight into how the drivers were similar, or different, by customer segment, arming the team with the information needed to finalize future growth strategies.";
                //img src
                modalImg.src = workImg;
                //img alt 
                modalImg.alt = workName;

                modalFooter.innerHTML = "";
            }
            else if(workName === "NortonLifeLock") {
                //subtitle
                modalSubtitle.innerHTML = "Industry Benchmarking";
                //challenge text
                modalChallengeText.innerHTML = "As its portfolio of products and services continued to expand, the E-Services team realized that continuing to efficiently provide superior customer service would be difficult. Developing an omni-channel support system for its customers would be key, and one component would be the use of communities where people could help one another.";
                //apprach text
                modalApproachText.innerHTML = "​To arrive at the optimal design, we first reviewed the communities for five industry analogs, evaluating the overall purpose, user experience, and perks provided to members for participating in the community.  We then evaluated the current state of the client’s community to determine key implications and next steps to optimize it further.";
                //result text
                modalResultText.innerHTML = "The benchmarking work provided inspiration and lay the foundation for the design of the final community.";
                //img src
                modalImg.src = workImg;
                //img alt 
                modalImg.alt = workName;

                modalFooter.innerHTML = "";
            }
            else if(workName === "Raybern Grilled Cheese") {
                //subtitle
                modalSubtitle.innerHTML = "Messaging / Consumer Research";
                //challenge text
                modalChallengeText.innerHTML = "Raybern's was in the process of launching a new line of grilled melt sandwiches, but was debating how to communicate the new products to consumers. In addition, the company wanted to get additional feedback on both the product and packaging.";
                //apprach text
                modalApproachText.innerHTML = "We leveraged social media to recruit and screen potential consumers to talk to, and brought them all together for focus groups that we moderated to get feedback on the product, packaging and messaging.";
                //result text
                modalResultText.innerHTML = "The session helped pinpoint that the ideal message was one that communicated the emotional benefits vs. product attributes. And, it led to consumer testimonials the team could use in future marketing communications.";
                //img src
                modalImg.src = workImg;
                //img alt 
                modalImg.alt = workName;

                modalFooter.innerHTML = "";
            }
            else if(workName === "Norton LifeLock") {
                //subtitle
                modalSubtitle.innerHTML = "Consumer Insights & Ideation";
                //challenge text
                modalChallengeText.innerHTML = "Facing increasing competitive pressures, NortonLifeLock wanted to develop a best-in-class loyaltyprogram that would increase customer engagement and value perception, and drive greater retention andrevenue.";
                //apprach text
                modalApproachText.innerHTML = "We partnered with the client on a multi-phase project that first involved a review of other best-in-classloyalty programs for inspiration. We then conducted 12 in-depth interviews with the client’s customers togather insights on loyalty program expectations. With the information gathered, we then designed andmoderated two full-day ideation sessions to create key elements of the program, including the name,rewards structure, and benefits to be earned, ensuring that all output tied back to what their customersdesired in a loyalty program.";
                //result text
                modalResultText.innerHTML = "The overall project lay the foundation for the loyalty program and was shared with the cross-functionalteam for development of the creative and design of the functionality.";
                //img src
                modalImg.src = workImg;
                //img alt 
                modalImg.alt = workName;

                modalFooter.innerHTML = "";
            }
            else if(workName === "KitchenTown") {
                //subtitle
                modalSubtitle.innerHTML = "Innovation Strategy";
                //challenge text
                modalChallengeText.innerHTML = "One of KitchenTown’s key clients wanted to create a line of innovative products with maca as a key ingredient, given the many benefits of this plant.  However, significant strategy and research was needed to define the innovation strategy and proposition prior to product development.";
                //apprach text
                modalApproachText.innerHTML = "We conducted a thorough situation assessment that included a review of overall macro trends and food trends.  We then analyzed consumer perceptions towards maca, reviewed the key benefits of this ingredient and analyzed the different maca products currently in market, focusing on the brand positioning and personality, messaging and claims.";
                //result text
                modalResultText.innerHTML = "The thorough work completed in the initial discovery phase led to the realization that many innovation platforms could be created and dictated the need for an additional round of research to validate potential concepts before product development.";
                //img src
                modalImg.src = workImg;
                //img alt 
                modalImg.alt = workName;

                modalFooter.innerHTML = "";
            }
            else if(workName === "Berkeley Haas") {
                //subtitle
                modalSubtitle.innerHTML = "Creative / Sales Materials";
                //challenge text
                modalChallengeText.innerHTML = "UC Berkeley’s Haas School of Business is one of the leading business schools in the United States and the world, but competition among the top 10 schools is strong.  So, marketing materials used during all admissions-related events need to be highly effective and impactful in order to connect with prospective students.";
                //apprach text
                modalApproachText.innerHTML = "We first conducted a high-level competitive assessment, and then met with key stakeholders to get their input on the main points to include in all of the materials.  We then drafted a creative brief for alignment and developed the initial content and story.  Once done,  we visualized all of the marketing materials for a cohesive look and feel.";
                //result text
                modalResultText.innerHTML = "With the new marketing materials, Berkeley Haas was able to better highlight its point of difference vs. other top 10 schools, while also including additional selling points to reach a broader set of prospective students. Final impact will be seen after enrollment figures are available for the next full-time MBA class.";
                //img src
                modalImg.src = workImg;
                //img alt 
                modalImg.alt = workName;

                modalFooter.innerHTML = "";
            }
            else if(workName === "Grace Health") {
                //subtitle
                modalSubtitle.innerHTML = "Brand Re-Launch";
                //challenge text
                modalChallengeText.innerHTML = "With roots in the cannabis industry, Grace Health & Wellness was looking to increase sales and revenue, while also building the case for future clinical trials as a a bio-tech start-up.  However, to be successful, the company needed an impactful go-to-market strategy, one that also included an overall marketing plan and key messaging.";
                //apprach text
                modalApproachText.innerHTML = "To arrive at a final strategy and set the stage for a brand re-launch, we first led the Founders through a series of strategic work sessions to solidify its vision and mission, align on its long-term goals, and determine key points of differentiation vs. competition.  We then redefined the brand positioning and developed a comprehensive go-to-market strategy and marketing plan for the next 12 months, before kicking off redesign efforts for the website and packaging.";
                //result text
                modalResultText.innerHTML = "The overall project helped set the strategic direction for future growth and the new brand positioning, redesigned packaging and website will launch in 2021.";
                //img src
                modalImg.src = workImg;
                //img alt 
                modalImg.alt = workName;

                modalFooter.innerHTML = "";
            }
            else if(workName === "Silicon Valley Bank") {
                //subtitle
                modalSubtitle.innerHTML = "Competitive Review & Messaging";
                //challenge text
                modalChallengeText.innerHTML = "Silicon Valley Bank saw much success with its new credit card launch, but a new player entered the marketplace targeting the same end customer and soon became a key competitor.  So, the bank needed to review its existing positioning & messaging, and determine to what extent the messaging needed to be updated and refreshed.";
                //apprach text
                modalApproachText.innerHTML = "We first conducted a thorough situation assessment to understand positioning and messaging for its key competitors.  Then, we developed messaging options to help solidify that the credit card offering occupied a unique position with its target customer, ensuring that the messaging pillars and proof points were clearly communicated across different channels.";
                //result text
                modalResultText.innerHTML = "The output of the project and key messages developed were used in an out-of-home ad test and subsequent marketing campaign that helped the credit card regain its position as the number one card among its target customer.";
                //img src
                modalImg.src = workImg;
                //img alt 
                modalImg.alt = workName;

                modalFooter.innerHTML = "";
            }
            else if(workName === "JM Smucker*") {
                //subtitle
                modalSubtitle.innerHTML = "Innovation / Ideation";
                //challenge text
                modalChallengeText.innerHTML = "The JM Smucker Company identified the pet specialty channel as a key growth opportunity and decided to leverage the extreme loyalty of consumers in that channel to increase overall market share.";
                //apprach text
                modalApproachText.innerHTML = "We partnered with the company to select the richest strategic growth opportunity areas and developed three innovation platforms to inspire ideation and stretch thinking. We then designed and moderated a full-day ideation workshop, utilizing the design-thinking concepts of diverge, converge and iterate.";
                //result text
                modalResultText.innerHTML = "The ideation resulted in over 35 ideas, of which multiple concepts were fully developed for consumer validation.";
                //img src
                modalImg.src = workImg;
                //img alt 
                modalImg.alt = workName;

                modalFooter.innerHTML = "Completed by Stephanie Louie during her tenure as Senior Director Brand Strategy at Anthem Worldwide";
            }
            else if(workName === "Tech Start-Up") {
                //subtitle
                modalSubtitle.innerHTML = "Positioning";
                //challenge text
                modalChallengeText.innerHTML = "A B2B tech start-up had developed a unique technology to help customers recharge their many devices, including cell phones, laptops, and scooters.  However, they had trouble pitching their technology to manufacturers and communicating their unique point of differentiation.";
                //apprach text
                modalApproachText.innerHTML = "We developed three overarching brand positionings to help guide future communications, and each included a driving insight, functional and emotional benefits, and overarching personality.  Each positioning was then developed into an accompanying brand story that could be used in sales decks to manufacturers and pitch decks to investors.";
                //result text
                modalResultText.innerHTML = "The brand has successfully raised 3x more capital than initially anticipated as a result of the defined brand story and positioning, and they are on a path to revolutionize how people stay connected to one another as their technology is adopted by more manufacturers.";
                //img src
                modalImg.src = workImg;
                //img alt 
                modalImg.alt = workName;
            }
        });
    }
  
    closeModal.addEventListener("click", function()  {
        modal.style.display = "none";
        document.documentElement.style.overflow = ""; 
    });
}
setUpHvrBoxModal();

$(function() {
    var e = -1;
    slideCount = 5,
        function n() {
            setTimeout(function() {
                $("#quote" + e).animate({
                    right: "120%"
                }, 2e3), ++e > slideCount - 1 && (e = 0), $("#quote" + e).css("right", "-60%"), $("#quote" + e).animate({
                    right: "20%"
                }, 2e3), n()
            }, 7e3)
        }()
});