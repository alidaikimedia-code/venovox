import { motion } from "framer-motion";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title?: string;
  description?: string;
  icon?: LucideIcon;
  link?: string;
  className?: string;
}

export function ServiceCard({ 
  title, 
  description, 
  icon: Icon, 
  link,
  className = "" 
}: ServiceCardProps) {
  return (
    <motion.div
      className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow ${className}`}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center mb-4">
        {Icon && <div className="bg-red-600 p-3 rounded-full mr-4 flex-shrink-0">
          <Icon className="text-white w-7 h-7" />
        </div>}
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      </div>

      <p className="text-gray-700 text-justify leading-relaxed">
        {description}
      </p>
      
      {link && (
        <Link 
          href={link} 
          className="text-red-600 hover:text-red-600 font-medium mt-4 inline-flex items-center"
        >
          Learn more →
        </Link>
      )}
    </motion.div>
  );
}
