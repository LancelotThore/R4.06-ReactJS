'use client';

export function Card({ name, image, role }) {
    return (
        <div>
            <img src={image} alt={role} className="gallery__image" />
            <div className="gallery__div">
                <img src="bgshapes.svg" alt="Background shape" />
                <div className="gallery__txt">
                    <h2>{name}</h2>
                    <h3 className="gallery__work">{role}</h3>
                </div>
            </div>
        </div>
    );
}