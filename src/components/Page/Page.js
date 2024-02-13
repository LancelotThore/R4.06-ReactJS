import { Card } from './Card/Card';

export function Page(props) {
    return (
        <section>

            <div class="offer">
                <div class="offer-section">
                    <h2 class="offer-section__title">{props.title}</h2>
                    <p class="offer-section__description">{props.subtitle}</p>
                    <div class="box">
                        <ul class="offer-box">
                            <Card />
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    )
}