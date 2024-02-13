'use client';
import { Card } from "../Card/Card";

export default function Team(prop) {
    return(
    <section>
        <header className="team__header">
            <h2 className="team__title">{prop.title}</h2>
        </header>
        <section className="team__content">
            <h1 className="team__heading">{prop.subtitle}</h1>
            <p className="team__description">{prop.text}</p>
        </section>
        <ul className="gallery">
            {prop.employees.map((member, index) => (
                <li key={index} className="gallery__pic">
                    <Card  name={member.name} image={member.image} role={member.role} />
                </li>
            ))}
        </ul>
    </section>
    )
}