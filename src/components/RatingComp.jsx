import React from 'react'
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

export default function RatingComp({rating}) {
   

    return <Rating style={{ maxWidth: 200 }} value={rating} readOnly />
}
