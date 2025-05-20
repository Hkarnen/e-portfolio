import React from "react";

/** Page-specific <title> and meta tags */
export function meta() {
    return [
        { title: "Houston Karnen – Home" },
        {
        name: "description",
        content:
            "Final-year MIT student specialising in distributed systems & full-stack development.",
        },
    ];
}

export default function Home() {
    return (
        <section className="text-center max-w-6xl mx-auto px-4 space-y-10">
            <h1>Houston Karnen</h1>
            <div className="text-xl mb-4">
                Final-year MIT student · Software Engineer · Distributed-Systems Enthusiast
            </div>

            {/* résumé button */}
            <a
                href="/Karnen_Houston_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
                View My Resume (PDF)
            </a>
        </section>
    );
}