function Card({ name, image, role }) {
    return (
        <li className="gallery__pic">
            <img src={image} alt={role} className="gallery__image" />
            <div className="gallery__div">
                <img src="bgshapes.svg" alt="Background shape" />
                <div className="gallery__txt">
                    <h2>{name}</h2>
                    <h3 className="gallery__work">{role}</h3>
                </div>
            </div>
        </li>
    );
}

export default function Page() {
    const Team = [
        { name: "Édouard Jérémie", image: "edouard.jpg", role: "CEO"},
        { name: "Amélie Christelle", image: "amelie.avif", role: "Directeur des recherche"},
        { name: "Gilles Damien", image: "gilles.jpg", role: "Directeur commercial"}
    ]

    return (
        <section>
            <header className="team__header">
                <h2 className="team__title">Notre équipe</h2>
            </header>
            <section className="team__content">
                <h1 className="team__heading">Présentation de notre formidable équipe</h1>
                <p className="team__description">Découvrez les esprits créatifs qui propulsent Auto Innovation vers de nouveaux sommets dans le monde de la conduite à hydrogène.</p>
            </section>
            <ul className="gallery">
                {Team.map((member, index) => (
                    <Card key={index} name={member.name} image={member.image} role={member.role} />
                ))}
            </ul>
        </section>
    );
}