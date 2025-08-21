
import type { ReactNode } from "react";

interface InfoCardProps {
    icon: ReactNode;
    title: string;
    children: ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, children }) => (
    <div className="bg-secondary/50 rounded-lg p-4 mt-4">
        <h3 className="font-headline text-lg flex items-center gap-2 mb-2">
            {icon}
            {title}
        </h3>
        {children}
    </div>
);

export default InfoCard;

    