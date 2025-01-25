
export function Card({ Brand, Location, Sponsor, Reward, children }) {
    return (
        <div className="bg-white text-neutral-600 card">
            <div className="card-body">
                {Brand && <h3 className="text-neutral-900 card-title">{Brand}</h3>}
                {Reward && <p>{Reward}</p>}
                {Location && Sponsor && <p>{Sponsor}, {Location}</p>}
                {children}
            </div>
        </div>
    );
}
