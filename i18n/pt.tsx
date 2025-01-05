import AddressIcon from "@/assets/icons/address-icon";
import EmailIcon from "@/assets/icons/email-icon";
import WhatsappIcon from "@/assets/icons/whatsapp-icon";
import PhoneIcon from "@/assets/icons/phone-icon";
import InstagramIcon from "@/assets/icons/instagram-icon";
import Linkedin2Icon from "@/assets/icons/linkedin-black-icon";
import YoutubeIcon from "@/assets/icons/youtube-icon";

export const portugueseMessages = {
  home: {
    title: (
      <>
        Nós Desvendamos
        <br /> <span className="text-yellow-500">O Código </span>de
        <br />
        novas <span className="text-yellow-500">Enzimas</span>
      </>
    ),
    subtitle:
      "Acelerando a inovação biotecnológica através da biologia sintética e tecnologia de ponta.",
    buttonLabel: "Vamos Conversar",
    buttonLabel2: "Explorar",
    alt: 'Imagem de uma planta'
  },
  ourServices: {
    title: (
      <>
        Descubra o que nós
        <br /> podemos fazer por você
      </>
    ),
    preTitle: 'Nossos Serviços',
    ourPipeline: 'Nossa Pipeline',
    services_1: {
      title: "Plataforma de Descoberta de Proteínas",
      description:
        "Através da combinação entre Biologia Sintética, Metagenômica, Computação e Automação, aumentamos a eficiência e aceleramos o desenvolvimento do seu produto biológico.",
      steps: [
        {
          number: "1",
          title: "Triagem de Proteínas",
          description:
            "Aproveitamos a capacidade da IA e da computação de alto desempenho para examinar bilhões de proteínas e identificar os candidatos mais promissores.",
          image: 'bg-card-1.png',
          alt: 'Imagem de uma Proteína'
        },
        {
          number: "2",
          title: "Identificação de Alvos",
          description:
            "Utilizamos insights orientados por dados para priorizar e selecionar alvos com base em características específicas e nas demandas do mercado.",
          image: 'bg-card-2.png',
             alt: 'Imagem de um Alvo'
        },
        {
          number: "3",
          title: "Síntese de Genes",
          description:
            "Aplicamos técnicas rápidas de síntese e otimização genética para desenhar genes com desempenho e funcionalidade aprimoradas.",
          image: 'bg-card-3.png',
           alt: 'Imagem de um DNA'
        },
        {
          number: "4",
          title: "Produção em Escala Piloto",
          description:
            "Oferecemos serviços de produção em escala piloto, levando os bioprodutos em estágio inicial de desenvolvimento do conceito à realidade.",
          image: 'bg-card-4.png',
           alt: 'Imagem de um aparelho científico'
        },
      ],
    },
    service_2: {
      title: "Serviços Metabolômicos",
      steps: {
        number: "0",
        title: "Metabolômica Microbiana",
        description:
          "Oferecemos análises direcionadas e não-direcionadas de metabólitos em fermentações microbianas, proporcionando insights detalhados sobre perfis metabólicos em bioprocessos para profissionais da indústria e da academia.",
        image: 'bg-card-5.png',
        alt: 'Imagem de um vírus'
      },
    },
  },
  goals: {
    preTitle: "Saiba mais",
    title: 'Sobre Nós',
    description: "Fundada em 2021 como uma spin-off da ByMyCell, a BlackGenn é uma startup brasileira de biotecnologia que oferece soluções para acelerar o desenvolvimento de novos produtos de interesse biotecnológico. Através da integração entre ferramentas avançadas em Biologia Sintética, Metagenômica, Automação e Computação em Nuvem, a empresa desenvolve tecnologias para a prospecção e engenharia de microrganismos, visando a criação de novos bioinsumos agrícolas de forma mais eficiente.",
    goalsList: [
      {
        title: "Especialistas em SynBiol",
        description:
          "Somos especialistas em biologia sintética, usando genômica, metagenômica, computação em nuvem e IA para decodificar genomas e projetar micróbios",
        image: 'goal-1.png',
      },
      {
        title: "Revolucionar a Biotecnologia",
        description:
          "Nossa missão é revolucionar a biotecnologia acelerando a descoberta e o desenvolvimento de novos bioprodutos",
        image: 'goal-2.png',
      },
      {
        title: "Acelerando a Inovação",
        description:
          "Buscamos acelerar a biotecnologia por meio de nossa plataforma de decodificação de genoma, triagem de proteínas e engenharia microbiana",
        image: 'goal-3.png',
      },
    ],
    buttonLabel: "Fale com a Gente",
  },
  technologicalStack: {
    title: ' Technological Stack',
    preTitle: 'Descubra mais sobre nossa',
    technologies: [
      {
        title: "Genômica",
        description:
          "Aproveitando a genômica avançada para decodificar genomas e desbloquear novas possibilidades.",
        image: 'technological-stack-1.webp',
        imageDesktop: 'technological-1.webp',
        alt: 'Imagem de fitas de DNA',
        modalDescription:
          "Explorar dados genômicos microbianos pode revelar clusters de genes biossintéticos únicos que são responsáveis pela produção de compostos bioativos valiosos, desbloqueando assim o vasto potencial de microrganismos de interesse para diversas aplicações biotecnológicas. Essa abordagem também facilita a engenharia de microrganismos para a produção otimizada de biomoléculas, acelerando a descoberta de soluções inovadoras para as indústrias de biotecnologia.",
      },
      {
        title: "Metagenômica",
        description:
          "Explorando o vasto mundo microbiano por meio da metagenômica para identificar novos bioprodutos.",
        image: 'technological-stack-2.webp',
        imageDesktop: 'technological-2.webp',
        alt: 'Imagem de uma pesquisadora',
        modalDescription:
          " A metagenômica oferece uma abordagem poderosa para investigar o DNA de comunidades microbianas complexas, possibilitando a detecção de genes e vias biossintéticas previamente não caracterizados e associadas à produção de compostos promissores, como agentes antimicrobianos e enzimas. Ao facilitar o estudo das interações microbianas e das capacidades funcionais desses organismos, a metagenômica pode aumentar significativamente a descoberta de novos bioprodutos.",
      },
      {
        title: "Computação em Nuvem",
        description:
          "Aproveitando o poder da computação em nuvem para processar e analisar quantidades massivas de dados.",
        image: 'technological-stack-3.webp',
        imageDesktop: 'technological-3.webp',
        alt: 'Imagem de uma nuvem técnologica',
        modalDescription:
          "A computação em nuvem está na vanguarda da análise de dados ômicos, aproveitando suas capacidades poderosas para processar, analisar e armazenar de forma eficiente grandes quantidades de informações biológicas. Esta tecnologia facilita a aplicação de técnicas analíticas avançadas, modelos de IA e processos de integração de dados que revelam insights preciosos sobre sistemas biológicos complexos, como dados genômicos e metagenômicos.",
      },
      {
        title: "Inteligência Artifical",
        description:
          "Empregando IA e algoritmos genéticos para acelerar a descoberta e otimização de bioprodutos.",
        image: 'technological-stack-4.webp',
        imageDesktop: 'technological-4.webp',
        alt: 'Imagem de um chip escrito AI',
        modalDescription:
          "A poderosa integração da inteligência artificial (IA), como ferramentas de aprendizado de máquina (ML) e aprendizado profundo (DL), juntamente com algoritmos genéticos, pode acelerar expressivamente a descoberta e o desenvolvimento de bioprodutos, permitindo que os pesquisadores explorem múltiplas variáveis e otimizem eficientemente as condições experimentais, melhorando o rendimento e a eficácia da produção de bioprodutos inovadores.",
      },
    ],
    learnMore: "Saiba mais +",
  },
  team: {
    title: "Conheça Nosso Time",
    employees: [
      {
        name: "Rafael Silva Rocha",
        position: "Fundador",
        image: 'rafael.webp',
        alt: 'Foto do Rafael Silva',
        urlLinkedin: "https://www.linkedin.com/in/rafael-silva-rocha-5312b835/",
      },
      {
        name: "Tânia Petta",
        position: "Co-Fundadora",
        alt: 'Foto da Tânia Petta',
        image: 'tania.webp',
        urlLinkedin: "https://www.linkedin.com/in/t%C3%A2nia-petta-8b39b961/",
      },
      {
        name: "Stela Virgílio",
        position: "Diretora Administrativa",
        image: 'stela.webp',
        alt: "Photo of Stela Virgílio",
        urlLinkedin: "https://www.linkedin.com/in/stela-virgilio-250267212/",
      },
      {
        name: "Adriano Gomes",
        position: "Engenheiro de Cloud",
        image: 'adriano.webp',
        alt: 'Foto do Adriano Gomes',
        urlLinkedin: "https://www.linkedin.com/in/adriano-gomes-silva/",
      },
      {
        name: "Nicolas Morazotti",
        position: "Desenvolvedor ML-DL",
        image: 'nicolas.webp',
        alt: 'Foto do Nicolas Morazotti',
        urlLinkedin: "https://www.linkedin.com/in/nmorazotti/?locale=pt_BR",
      },
    ],
  },
  contact: {
    title: "Contato",
    description:
      "Entre em contato com nossa equipe para saber mais sobre a BlackGenn e como podemos ajudar você a alcançar seus objetivos.",
    contactButton: 'Entre em Contato',
    h6Label: 'Contate-nos',
    form: {
      name: { label: "Nome", placeholder: "Digite seu nome", messageError: "Por favor, digite seu nome." },
      email: { label: "Email", placeholder: "Digite seu email", messageError: "Por favor, digite seu email." },
      phone: {
        label: "Telefone",
        placeholder: "Digite seu número de telefone",
         messageError: "Por favor, digite seu telefone."
      },
      message: { label: "Mensagem", placeholder: "Digite sua mensagem", messageError: "Por favor, digite sua mensagem." },
      buttonLabel: 'Enviar mensagem',
      buttonLabelLoading: 'Enviando mensagem'
    },
    description2: 'No final de 2023, a BlackGenn recebeu seu primeiro investimentoseed, o que possibilitou o estabelecimento em uma sede própria e o fortalecimento da estrutura organizacional. Com um compromisso sólido com a pesquisa e o desenvolvimento voltados para o agronegócio, pautada na ciência e na sustentabilidade, a BlackGenn visa contribuir para o avanço da bioeconomia nacional e global.',
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
        icon: <InstagramIcon/>,
        url: "https://www.instagram.com/blackgenn_/",
      },
      {
        icon: <Linkedin2Icon/>,
        url: "https://www.linkedin.com/company/blackgenn/",
      },
      {
        icon: <YoutubeIcon/>,
        url: "https://www.youtube.com/channel/UCEZL-xQ9J6LgGtvvo8q5zxg",
      },
    ],
    socialMedia: 'Veja nossas redes sociais',
    description:
      "Fundada em 2021 como uma spin-off da ByMyCell, a BlackGenn é uma startup brasileira de biotecnologia que oferece soluções para acelerar o desenvolvimento de novos produtos de interesse biotecnológico. Através da integração entre ferramentas avançadas em Biologia Sintética, Metagenômica, Automação e Computação em Nuvem, a empresa desenvolve tecnologias para a prospecção e engenharia de microrganismos, visando a criação de novos bioinsumos agrícolas de forma mais eficiente. ",
  },
  sideMenu: {
    sections: [
      { label: "Home", id: "home" },
      { label: "Serviços", id: "our-services" },
      { label: "Technological Stack", id: "technological-stack" },
      { label: "Sobre nós", id: "goals" },
      { label: "Time", id: "team" },
      { label: "Contato", id: "contact" },
    ],
  },
};
