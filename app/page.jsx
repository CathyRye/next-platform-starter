import { CardsFilter } from 'components/cards-filter'

const cardinfo = [
  {
    "CardID": "CARD001",
    "Brand": "EcoGear",
    "Location": "USA",
    "Sponsor": "EarthFirst",
    "Reward": "10% Discount"
  }, {
    "CardID": "CARD002",
    "Brand": "GreenFuture",
    "Location": "Canada",
    "Sponsor": "ClimateCare",
    "Reward": "Free Reusable Bag"
  }, {
    "CardID": "CARD003",
    "Brand": "SustainaHome",
    "Location": "USA",
    "Sponsor": "EarthFirst",
    "Reward": "10 Plant Points"
  }, {
    "CardID": "CARD004",
    "Brand": "OceanSave",
    "Location": "UK",
    "Sponsor": "SeaGuard",
    "Reward": "10% Discount"
  }, {
    "CardID": "CARD005",
    "Brand": "EcoGrow",
    "Location": "Germany",
    "Sponsor": "BioLife",
    "Reward": "Free Seed Pack"
  }
];

export default function Page() {
  return (
    <main className="flex flex-col gap-8 sm:gap-16">
      <section className="flex flex-col items-start gap-3 sm:gap-4">
        <h1 className="mb-0" style={{"width": "720px"}} >EverClime Cards Demo</h1>
      </section>
      <section className="flex flex-col gap-4">
        <section className="flex flex-row gap-4">
            <CardsFilter cardinfo={cardinfo} />
        </section>
      </section>
    </main>
  );
}

