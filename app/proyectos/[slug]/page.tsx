import SharedLayout from "../../../src/components/SharedLayout"
import BeamsBackground from "../../../src/components/BeamsBackground"
import Footer from "../../../src/components/Footer"
import ProjectClient from "./ProjectClient"

// 👇 slugs que existen (build estático)
export function generateStaticParams() {
    return [
        { slug: "chatbot-consorcios" },
        { slug: "servilimp" },
        { slug: "bar-berlin" },
        { slug: "cabral-asociados" },
        { slug: "instituto-juan-pablo-ii" },
        { slug: "icasescobar" },
    ]
}

export default function ProjectPage({
    params,
}: {
    params: { slug: string }
}) {
    return (
        <SharedLayout>
            <BeamsBackground intensity="medium">
                <div className="relative z-10 min-h-screen">
                    <ProjectClient slug={params.slug} />
                    <Footer />
                </div>
            </BeamsBackground>
        </SharedLayout>
    )
}
