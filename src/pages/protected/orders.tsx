import { useSelector } from "react-redux"
import { selectRestaurant } from "../../redux/slice/restaurantSlice"
import { useNavigate } from 'react-router-dom'

export default function Orders() {
    const navigate = useNavigate()
    const restaurant = useSelector(selectRestaurant)
    return (
        <>

        </>
    )
}

