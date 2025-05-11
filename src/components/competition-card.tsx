import { SiWhatsapp } from "@icons-pack/react-simple-icons";

export type CompetitionCardProps = {
  title: string;
  description: string;
  contact: string;
  name: string;
};

export const CompetitionCard = (props: CompetitionCardProps) => {
  return (
    <div className="bg-back-50 border-styled flex w-full max-w-sm flex-col items-center rounded-lg p-6 text-center">
      <h2 className="text-2xl font-bold">{props.title}</h2>
      <p className="mt-2 text-gray-700">{props.description}</p>
      <a
        href={props.contact}
        className="mt-4 flex items-center rounded-lg bg-[#25D366] px-4 py-3 font-bold text-white transition duration-200 hover:bg-[#25D366]/50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiWhatsapp className="mr-2 inline-block" />
        CP ({props.name})
      </a>
    </div>
  );
};
