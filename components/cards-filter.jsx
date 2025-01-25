'use client';

import { useState } from 'react';
import { CardsGrid } from 'components/cards-grid';

const select_prop_text = "Select to filter cards by property";
let select_value_text = "Select";

export function CardsFilter({cardinfo}) {
    const [property, setProperty] = useState('');
    const [value, setValue] = useState('');

    const props = [select_prop_text].concat(Object.keys(cardinfo[0]).filter(k => k != "CardID"));
    let values = !property ? null : ListValues(cardinfo, property);

    const carddisplay = FilterCards(cardinfo, property, value);

    let property_selector = <select className="rounded p-2" value={property} key="properties" onChange={(e) => { setProperty(e.target.value); setValue('') }}>
        {props.map(prop => <option key={prop} value={prop}>{prop}</option>)}
    </select>

    let values_selector = !values ? null : 
        <div>
            <select className="rounded p-2" key="values" onChange={(e) => setValue(e.target.value)}>
                {values.map(v => (<option key={v} value={v}>{v}</option>)) }
            </select>
            <button
                    onClick={(e) => { setProperty(select_prop_text) }}
                    className="btn btn-sm btn-primary"
                >
                    Clear Filters
            </button>
        </div>;

    return <div className="w-500">
        <section className="gap-8 my-4" style={{ "min-height": "150px"}}>
            <h2 className="p-3">Filter Options</h2>
            {property_selector} 
            {values_selector}
        </section>
        <section className="flex-col gap-4">
            <h2 className="p-3">Available Cards</h2>
            {carddisplay}

        </section>
    </div>;
}

function ListValues(cards, prop) {
    if (prop == select_prop_text) {
        return null;
    }
    
    select_value_text = "Select " + prop;
    let values = [select_value_text];
    cards.forEach(card => {
        const val = card[prop];
        if (!values.find(v => v == val)) {
            values.push(val);
        }
    });
    return values;
}

function FilterCards(cardinfo, prop, value) {
    let filtered = cardinfo;
    if (!(prop == select_prop_text) && !!value && !(value == select_value_text))
        filtered = cardinfo.filter(crd => crd[prop] == value);

    return !!filtered?.length && <CardsGrid cards={filtered} />;
}