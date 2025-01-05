import AddressIcon from "@/assets/icons/address-icon";
import EmailIcon from "@/assets/icons/email-icon";
import WhatsappIcon from "@/assets/icons/whatsapp-icon";
import PhoneIcon from "@/assets/icons/phone-icon";
import InstagramIcon from "@/assets/icons/instagram-icon";
import Linkedin2Icon from "@/assets/icons/linkedin-black-icon";
import YoutubeIcon from "@/assets/icons/youtube-icon";

export const englishMessages = {
  home: {
    title: (
      <>
        We Discover
        <br /> <span className="text-yellow-500">The Code </span>of
        <br />
        new <span className="text-yellow-500">Enzymes</span>
      </>
    ),
    subtitle:
      "Accelerating biotechnological innovation through synthetic biology and cutting-edge technology.",
    buttonLabel: "Let's Talk",
    buttonLabel2: "Explore",
    alt: "Image of a plant",
  },
  ourServices: {
    title: (
      <>
        Discover what we
        <br /> can do for you
      </>
    ),
    preTitle: "Our Services",
    ourPipeline: "Our Pipeline",
    services_1: {
      title: "Protein Discovery Platform",
      description:
        "Through combination of Synthetic Biology, Metagenomics, Computing and Automation we enhance the efficiency and accelerate your biological product development.",
      steps: [
        {
          number: "1",
          title: "Protein Screening",
          description:
            "Harnessing the power of AI and high-performance computing to screen billions of proteins and identify promising candidates.",
          image: 'bg-card-1.png',
          alt: "Image of a protein",
        },
        {
          number: "2",
          title: "Target Identification",
          description:
            "Using data-driven insights to prioritize and select targets based on specific characteristics and market needs.",
          image: 'bg-card-2.png',
          alt: "Image of a target",
        },
        {
          number: "3",
          title: "Gene Synthesis",
          description:
            "Rapid gene synthesis and optimization techniques to design genes with enhanced performance and functionality.",
          image: 'bg-card-3.png',
          alt: "Image of a DNA",
        },
        {
          number: "4",
          title: "Pilot-Scale Production",
          description:
            "Offering pilot-scale production services to bring early-stage bioproducts from concept to reality.",
          image: 'bg-card-4.png',
          alt: "Image of a scientific apparatus",
        },
      ],
    },
    service_2: {
      title: "Metabolomic Services",
      steps: {
        number: "0",
        title: "Microbial Metabolomics",
        description:
          "We provide targeted and untargeted analysis of microbial metabolites produced during fermentation, offering deep insights into metabolic profiles during bioprocesses for industries and academy.",
        image: 'bg-card-5.png',
        alt: "Image of a virus",
      },
    },
  },
  goals: {
    preTitle: "Find out more",
    title: "About Us",
    description:
      "Founded in 2021 as a spin-off of ByMyCell, BlackGenn is a Brazilian biotechnology Startup that offers solutions to accelerate the development of new biotechnological products. By integrating advanced techniques in Synthetic Biology, Metagenomics, Automation, and Cloud Computing, the company develops technologies for prospecting and engineering of microorganisms, focusing on the efficient creation of new agricultural bioproducts.",
    goalsList: [
      {
        title: "Experts in SynBiol",
        description:
          "We are experts in synthetic biology, using genomics, metagenomics, cloud computing, AI to decode genomes and engineer microbes",
        image:  'goal-1.png',
      },
      {
        title: "Revolutionize Biotechnology",
        description:
          "Our mission is to revolutionize biotechnology by accelerating the discovery and development of new bioproducts",
        image:  'goal-2.png',
      },
      {
        title: "Accelerating Innovation",
        description:
          "We seek to accelerate biotechnology through our platform for genome decoding, protein screening and microbial engineering",
        image:  'goal-3.png',
      },
    ],
    buttonLabel: "Talk to Us",
  },
  technologicalStack: {
    title: "Technological Stack",
    preTitle: "Learn more about our",
    technologies: [
      {
        title: "Genomics",
        description:
          "Leveraging advanced genomics to decode genomes and unlock new possibilities.",
        image: 'technological-stack-1.webp',
        imageDesktop: 'technological-1.webp',
        alt: "Image of DNA strands",
        modalDescription:
          "Exploring microbial genomic data can reveal unique biosynthetic gene clusters that are responsible for producing valuable bioactive compounds, thereby unlocking the vast potential of selected microorganisms for diverse biotechnological applications. This approach also facilitates the engineering of microorganisms for optimized production of biomolecules, accelerating the discovery of innovative solutions for biotech industries.",
      },
      {
        title: "Metagenomics",
        description:
          "Exploring the vast microbial world through metagenomics to identify novel bioproducts.",
        image: 'technological-stack-2.webp',
        imageDesktop: 'technological-2.webp',
        alt: "Image of a researcher",
        modalDescription:
          "Metagenomics provides a powerful approach to investigating the DNA of complex microbial communities, enabling the detection of previously uncharacterized genes and biosynthetic pathways associated with the production of valuable compounds, such as antimicrobial agents and enzymes. By facilitating the study of microbial interactions and the functional capacities of these organisms, metagenomics significantly enhances the discovery of new bioproducts.",
      },
      {
        title: "Cloud Computing",
        description:
          "Harnessing the power of cloud computing to process and analyze massive amounts of data. ",
        image: 'technological-stack-3.webp',
        imageDesktop: 'technological-3.webp',
        alt: "Image of a technological cloud",

        modalDescription:
          "Cloud computing is at the forefront of omics data analysis, harnessing its powerful capabilities to efficiently process, analyze and store vast amounts of biological information. This technology facilitates the application of advanced analytical techniques, AI models, and data integration processes that uncover valuable insights into complex biological systems, including genomic and metagenomic data.",
      },
      {
        title: "Artifical Intelligence",
        description:
          " Artificial Intelligence Employing AI and genetic algorithms to accelerate the discovery and optimization of bioproducts.",
        image: 'technological-stack-4.webp',
        imageDesktop: 'technological-4.webp',
        alt: "Image of a chip written AI",

        modalDescription:
          "The powerful integration of artificial intelligence (AI), including machine learning (ML) and deep learning (DL) tools, alongside genetic algorithms can accelerate expressively the discovery and development of bioproducts by enabling researchers to explore multiple variables and efficiently optimize experimental conditions improving the yield and effectiveness of production of innovative bioproducts.",
      },
    ],
    learnMore: "Leran more +",
  },
  team: {
    title: "Meet Our Team",
    employees: [
      {
        name: "Rafael Silva Rocha",
        position: "Founder",
        image: 'rafael.webp',
        alt: "Photo of Rafael Silva",
        urlLinkedin: "https://www.linkedin.com/in/rafael-silva-rocha-5312b835/",
      },
      {
        name: "Tânia Petta",
        position: "Co-Founder",
        image: 'tania.webp',
        alt: "Photo of Tânia Petta",
        urlLinkedin: "https://www.linkedin.com/in/t%C3%A2nia-petta-8b39b961/",
      },
      {
        name: "Stela Virgílio",
        position: "Administrative Director",
        image: 'stela.webp',
        alt: "Photo of Stela Virgílio",
        urlLinkedin: "https://www.linkedin.com/in/stela-virgilio-250267212/",
      },
      {
        name: "Adriano Gomes",
        position: "Cloud Engineer",
        image: 'adriano.webp',
        alt: "Photo of Adriano Gomes",
        urlLinkedin: "https://www.linkedin.com/in/adriano-gomes-silva/",
      },
      {
        name: "Nicolas Morazotti",
        position: "ML-DL Developer",
        image: 'nicolas.webp',
        alt: "Photo of Nicolas Morazotti",
        urlLinkedin: "https://www.linkedin.com/in/nmorazotti/?locale=pt_BR",
      },
    ],
  },
  contact: {
    title: "Contact",
    description:
      "Contact our team to find out more about BlackGenn and how we can help you achieve your goals.",
    contactButton: "Get in Touch",
    h6Label: "Contact Us",
    form: {
      name: { label: "Name", placeholder: "Enter your name",  messageError: "Please, enter your name." },
      email: { label: "Email", placeholder: "Enter your email", messageError: "Please, enter your email." },
      phone: { label: "Phone", placeholder: "Enter your phone number", messageError: "Please, enter your phone number." },
      message: { label: "Message", placeholder: "Type your message", messageError: "Please, type your message." },
      buttonLabel: "Send Message",
      buttonLabelLoading: 'Sending Message'
    },
    description2:
      "By the end of 2023, BlackGenn received its first Seed investment, enabling the establishment of its own workplace and the strengthening of its organizational structure. With a strong commitment with research and development focused on agribusiness, in focused in science and sustainability, BlackGenn aims to contribute to the advancement of the national and global bioeconomy.",
    contactInformations: [
      {
        icon: <PhoneIcon className="fill-white min-w-5 min-h-5 h-5 w-5" />,
        value: "+55 (16) 99749 9974",
      },
      {
        icon: <EmailIcon className="fill-white min-w-5 min-h-5 h-5 w-5" />,
        value: "contato@blackgenn.com",
      },
      {
        icon: <WhatsappIcon className="fill-white w-5 h-5" />,
        value: "+55 (16) 99749 9974",
      },
      {
        icon: <AddressIcon className="fill-white  min-w-5 min-h-5 h-5 w-5" />,
        value: "Rua Martinico Prado, nº 555, Vila Tibério, CEP: 14050-050",
      },
    ],
  },
  footer: {
    items: [
      {
        icon: <WhatsappIcon className="w-5 h-5 fill-white" />,
        url: "https://wa.me/5516997499974",
      },
      {
        icon: <InstagramIcon />,
        url: "https://www.instagram.com/blackgenn_/",
      },
      {
        icon: <Linkedin2Icon />,
        url: "https://www.linkedin.com/company/blackgenn/",
      },
      {
        icon: <YoutubeIcon />,
        url: "https://www.youtube.com/channel/UCEZL-xQ9J6LgGtvvo8q5zxg",
      },
    ],
    socialMedia: 'See our social networks',
    description:
      "Founded in 2021 as a spin-off of ByMyCell, BlackGenn is a Brazilian biotechnology Startup that offers solutions to accelerate the development of new biotechnological products. By integrating advanced techniques in Synthetic Biology, Metagenomics, Automation, and Cloud Computing, the company develops technologies for prospecting and engineering of microorganisms, focusing on the efficient creation of new agricultural bioproducts.",
  },
  sideMenu: {
    sections: [
      { label: "Home", id: "home" },
      { label: "Services", id: "our-services" },
      { label: "Technological Stack", id: "technological-stack" },
      { label: "About us", id: "goals" },
      { label: "Team", id: "team" },
      { label: "Contact", id: "contact" },
    ],
  },
};
