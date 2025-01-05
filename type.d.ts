type Language = "pt" | "en";

interface TForm {
  name: string;
  email: string;
  message: string;
  phone: string;
}
type AlertType = "success" | "error" | undefined;

interface GoalCardProps {
  title: string;
  description: string;
  image: string;
}

interface OurServicesCardProps {
  number: string;
  cardTitle: string;
  cardDescription: string;
  image: string;
  alt: string;
}

interface ServiceProps {
  serviceTitle: string;
  serviceDescription?: string;
}

interface TeamCard {
  name: string;
  position: string;
  image: string;
  urlLinkedin: string;
  alt: string;
}

interface TechnologicalStackCardProps {
  title: string;
  description: string;
  image: string;
  modalDescription: string;
  alt: string;
}

interface TechnologicalStackDesktopCard {
  title: string;
  text: string;
  image: string;
  alt: string;
}

interface TechnologicalStackDialogProps {
  title: string;
  description: string;
  label: string;
}
