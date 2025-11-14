import Link from "next/link";
import { ReactNode } from "react";

interface HTMLContentProps {
    content: string;
    className?: string;
}

export function HTMLContent({ content, className = "" }: HTMLContentProps) {
    const parseHTML = (html: string): ReactNode[] => {
        if (!html.includes("<a") || !html.includes("</a>")) {
            return [html];
        }

        const parts: ReactNode[] = [];
        let lastIndex = 0;
        
        const regex = /<a\s+([^>]*?)>(.*?)<\/a>/gi;
        let match;
        let keyIndex = 0;

        while ((match = regex.exec(html)) !== null) {
            if (match.index > lastIndex) {
                const textBefore = html.substring(lastIndex, match.index);
                if (textBefore) {
                    parts.push(textBefore);
                }
            }

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
                parts.push(linkContent);
            }

            lastIndex = regex.lastIndex;
        }

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

