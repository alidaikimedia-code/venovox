import Link from "next/link";
import { ReactNode } from "react";

interface HTMLContentProps {
    content: string;
    className?: string;
}

export function HTMLContent({ content, className = "" }: HTMLContentProps) {
    // Parse HTML and convert anchor tags to Next.js Link components
    const parseHTML = (html: string): ReactNode[] => {
        // Check if content contains HTML anchor tags
        if (!html.includes("<a") || !html.includes("</a>")) {
            // No links found, return as plain text (preserve newlines with whitespace: pre-wrap)
            return [html];
        }

        const parts: ReactNode[] = [];
        let lastIndex = 0;
        
        // Match anchor tags with their attributes and content
        const regex = /<a\s+([^>]*?)>(.*?)<\/a>/gi;
        let match;
        let keyIndex = 0;

        while ((match = regex.exec(html)) !== null) {
            // Add text before the link
            if (match.index > lastIndex) {
                const textBefore = html.substring(lastIndex, match.index);
                if (textBefore) {
                    parts.push(textBefore);
                }
            }

            // Extract href and content from anchor tag
            const attributes = match[1];
            const linkContent = match[2];
            const hrefMatch = attributes.match(/href=["']([^"']+)["']/i);
            
            if (hrefMatch) {
                const href = hrefMatch[1];
                const isExternal = href.startsWith("http://") || 
                                  href.startsWith("https://") || 
                                  href.startsWith("mailto:") || 
                                  href.startsWith("tel:");
                
                if (isExternal) {
                    // External link - use regular anchor tag
                    parts.push(
                        <a
                            key={`ext-link-${keyIndex++}`}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-red-600 hover:text-red-700 underline font-medium transition-colors"
                        >
                            {linkContent}
                        </a>
                    );
                } else {
                    // Internal link - use Next.js Link
                    parts.push(
                        <Link
                            key={`int-link-${keyIndex++}`}
                            href={href}
                            className="text-red-600 hover:text-red-700 underline font-medium transition-colors"
                        >
                            {linkContent}
                        </Link>
                    );
                }
            } else {
                // If no href found, just add the content as plain text
                parts.push(linkContent);
            }

            lastIndex = regex.lastIndex;
        }

        // Add remaining text after last link
        if (lastIndex < html.length) {
            const textAfter = html.substring(lastIndex);
            if (textAfter) {
                parts.push(textAfter);
            }
        }

        return parts.length > 0 ? parts : [html];
    };

    const parsedContent = parseHTML(content);

    return (
        <div className={className}>
            {parsedContent}
        </div>
    );
}

