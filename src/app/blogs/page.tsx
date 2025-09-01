import Link from "next/link";
import { blogData } from "@/data/blogsData";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog Posts | Venovox",
    description: "Discover insights, tips, and expert advice to help you stay ahead in the digital world.",
    alternates: {
        canonical: "https://venovox.com/blogs",
    },
}
export default function BlogsPage() {
    return (
        <>

            <div className="bg-white">
                <section className="relative bg-black text-white overflow-hidden">
                    <div className="absolute inset-0 bg-black opacity-20"></div>
                    <div className="relative container mx-auto px-6 pt-32 pb-12 ">
                        <div className="text-center space-y-8 py-12">
                            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                                <span className="text-white">Our Latest </span>
                                <span className="text-red-600">Blog Posts</span>
                            </h1>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                Discover insights, tips, and expert advice to help you stay ahead in the digital world.
                            </p>
                            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full mx-auto"></div>
                        </div>
                    </div>
                </section>

                <main className="container mx-auto px-6 py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogData.map((blog) => (
                            <article
                                key={blog.slug}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group hover:-translate-y-1"
                            >

                                <div className="relative overflow-hidden">
                                    <img
                                        src={blog.featuredImage}
                                        alt={blog.altTag}
                                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>


                                <div className="p-6 space-y-4">
                                    <h2 className="text-xl font-bold text-gray-900 leading-tight line-clamp-2 group-hover:text-red-600 transition-colors duration-300">
                                        {blog.h1}
                                    </h2>

                                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                                        {blog.seo.metaDescription}
                                    </p>

                                    <div className="pt-4 flex items-center justify-between">
                                        {/* Left side: Read More button */}
                                        <Link
                                            href={`/blogs/${blog.slug}`}
                                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-md hover:shadow-lg group"
                                        >
                                            Read More
                                            <svg
                                                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </Link>

                                        {/* Right side: Static Author section with link */}
                                        <Link href="/author" className="flex items-center gap-2 text-right cursor-pointer">
                                            {/* Avatar */}
                                            <img
                                                src="/author.jpg"
                                                alt="Author"
                                                className="w-10 h-10 rounded-full object-cover border"
                                            />

                                            {/* Name + Short description */}
                                            <div className="hidden sm:block">
                                                <h4 className="text-sm font-semibold">Dato' Venodevan</h4>
                                                <p className="text-xs text-gray-500 line-clamp-1">
                                                    Risk is an opportunity
                                                </p>
                                            </div>
                                        </Link>
                                    </div>


                                </div>
                            </article>
                        ))}
                    </div>

                    {/* If no blogs found */}
                    {blogData.length === 0 && (
                        <div className="text-center py-20">
                            <div className="space-y-4">
                                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                                    <svg
                                        className="w-10 h-10 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">No Blog Posts Yet</h3>
                                <p className="text-gray-600 max-w-md mx-auto">
                                    We're working on creating amazing content for you. Check back soon!
                                </p>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </>
    );
}