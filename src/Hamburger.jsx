import React from 'react';
import { FaBars } from 'react-icons/fa';

export default function Hamburger() {

    const [click, setClick] = React.useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className="nav__icon__div">
            <a className="nav__icon"><FaBars/></a>
        </div>
    )
}