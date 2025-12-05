"use client";

export interface ImageCardProps {
  image: string;
  title: string;
  description: string;
  titleBgColor?: string;
  titleTextColor?: string;
}

export function ImageCard({
  image,
  title,
  description,
  titleBgColor = "bg-red-600",
  titleTextColor = "text-white",
}: ImageCardProps) {
  return (
    <div className="space-y-0">
      <div className="relative overflow-hidden h-[296px]">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className={`${titleBgColor} ${titleTextColor} text-center py-2 font-semibold`}>
        {title}
      </div>

      <p className="text-gray-600 text-justify [text-justify:inter-word] hyphens-none mt-4">
        {description}
      </p>
    </div>
  );
}

