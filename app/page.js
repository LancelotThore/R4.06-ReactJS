import Team from "./components/Team/Team";

export default function Page() {
    const data = {
        title: "Notre équipe",
        subtitle: "Présentation de notre formidable équipe",
        text: "Découvrez les esprits créatifs qui propulsent Auto Innovation vers de nouveaux sommets dans le monde de la conduite à hydrogène.",
        employees: [
            { name: "Édouard Jérémie", image: "edouard.jpg", role: "CEO" },
            { name: "Amélie Christelle", image: "amelie.avif", role: "Directeur des recherche" },
            { name: "Gilles Damien", image: "gilles.jpg", role: "Directeur commercial" }
        ]
    };

    return (
        <>
            <Team {...data}/>
        </>
    );
}