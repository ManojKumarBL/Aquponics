import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <div className="text-center">
            <h2>Welcome to RVCE AQUAPONICS</h2>
            <p textAlign="center">According to a joint report from the Food And Agriculture Organization and SmartFish, aquaponics is the cultivation of plants and aquatic animals in a recirculating environment.

Aquaponics is a cooperation between plants and fish and the term originates from the two words aquaculture (the growing of fish in a closed environment) and hydroponics (the growing of plants usually in a soil-less environment).

Aquaponic systems come in various sizes from small indoor units to large commercial units. and they can be either freshwater systems or contain salt or brackish water.

In other words, according to the Aquaponics Gardening Community, cited by Thorarinsdottir, aquaponics is the cultivation of fish and plants together in a constructed, recirculating ecosystem utilizing natural bacterial cycles to convert fish waste to plant nutrition. This is an environmentally friendly, natural food-growing method that harnesses the best attributes of aquaculture and hydroponics without the need to discard any water or filtrate or add chemical fertilizers.</p>

            <Link to="/pH">
                <button className="primary-button">Dashboard</button>
            </Link>
        </div>
    )
}
