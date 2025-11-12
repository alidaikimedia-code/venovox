"use client";

import { motion } from "framer-motion";

interface CaseStudyData {
    title: string;
    heroImage: string;
    heroImageAlt: string;
    introduction: string;
    situation: {
        heading: string;
        paragraphs: string[];
    };
    approach: {
        heading: string;
        paragraphs: string[];
    };
    result: {
        heading: string;
        paragraphs: string[];
        image: string;
        imageAlt: string;
    };
    conclusion: {
        heading: string;
        paragraphs: string[];
    };
}

interface CaseStudyLayoutProps {
    data: CaseStudyData;
}

export default function CaseStudyLayout({ data }: CaseStudyLayoutProps) {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-black text-white overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative container mx-auto px-6 py-2">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px] mt-20">
                        {/* Left Side - Image */}
                        <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="relative overflow-hidden rounded-2xl shadow-2xl transition-shadow duration-300 w-[600px] h-[400px]"
                            >
                                <img
                                    src={data.heroImage}
                                    alt={data.heroImageAlt}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </motion.div>
                        </div>
                        {/* Right Side - Text */}
                        <div className="space-y-8 order-1 lg:order-2">
                            <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-5xl lg:text-6xl font-bold leading-tight"
                            >
                            {(() => {
                                const title = data.title.trim();
                                const words = title.split(" ");

                                // Decide how many words should be in the red part
                                const redWordCount = 5;

                                const splitIndex = Math.max(words.length - redWordCount, 0);
                                const firstHalf = words.slice(0, splitIndex).join(" ");
                                const secondHalf = words.slice(splitIndex).join(" ");

                                return (
                                <>
                                    <span className="text-white">{firstHalf} </span>
                                    <span className="text-red-600">{secondHalf}</span>
                                </>
                                );
                            })()}
                            </motion.h1>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <main className="container mx-auto px-6 py-20">
                {/* Introduction */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-16"
                >
                    <p className="text-lg text-gray-600 leading-relaxed text-justify">
                        {data.introduction}
                    </p>
                </motion.section>

                {/* The Situation */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-12"
                >
                    <h2 className="text-4xl font-bold text-black text-center mb-12 leading-tight">
                        {data.situation.heading}
                    </h2>
                    {data.situation.paragraphs.map((paragraph, index) => (
                        <div
                            key={index}
                            className={`text-lg text-gray-600 leading-relaxed text-justify ${index > 0 ? 'mt-4' : ''}`}
                            dangerouslySetInnerHTML={{ __html: paragraph }}
                        />
                    ))}
                </motion.section>

                {/* Venovox's Approach */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-4xl font-bold text-black text-center mb-12 leading-tight">
                        {data.approach.heading}
                    </h2>
                    {data.approach.paragraphs.map((paragraph, index) => (
                        <div
                            key={index}
                            className={`text-lg text-gray-600 leading-relaxed text-justify ${index > 0 ? 'mt-4' : ''}`}
                            dangerouslySetInnerHTML={{ __html: paragraph }}
                        />
                    ))}
                </motion.section>

                {/* The Result */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mb-20"
                >
                    <h2 className="text-4xl font-bold mb-12 text-black text-center leading-tight">
                        {data.result.heading}
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Text */}
                        <div className="space-y-6">
                            {data.result.paragraphs.map((paragraph, index) => (
                                <div
                                    key={index}
                                    className="text-lg text-gray-600 leading-relaxed text-justify"
                                    dangerouslySetInnerHTML={{ __html: paragraph }}
                                />
                            ))}
                        </div>
                        {/* Right Side - Image */}
                        <div className="flex justify-center">
                            <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-shadow duration-300">
                                <img
                                    src={data.result.image}
                                    alt={data.result.imageAlt}
                                    width={500}
                                    height={350}
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Conclusion */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="mb-20"
                >
                    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-12 rounded-2xl shadow-2xl">
                        <h2 className="text-3xl font-bold mb-6 leading-tight">
                            {data.conclusion.heading}
                        </h2>
                        {data.conclusion.paragraphs.map((paragraph, index) => (
                            <p
                                key={index}
                                className={`text-lg leading-relaxed text-justify opacity-95 ${index > 0 ? 'mt-4' : ''}`}
                                dangerouslySetInnerHTML={{ __html: paragraph }}
                            />
                        ))}
                    </div>
                </motion.section>
            </main>
        </div>
    );
}

