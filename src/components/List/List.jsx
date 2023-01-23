
import React from "react";

import style from './List.module.css'

export function List() {

    const data = [
        {
            title: 'Duis lobortis, velit vitae tristique?',
            body: 'Etiam viverra sed lorem vitae finibus. Nullam ac tincidunt ante, quis hendrerit odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse convallis in nisi eget rutrum. Etiam efficitur, erat sed ultrices eleifend, elit purus interdum dolor, ac vehicula.',
        },
        {
            title: 'Aenean nec dui scelerisque?',
            body: 'Fusce congue eros accumsan, pulvinar erat quis, pharetra felis. Vestibulum non turpis euismod, vulputate nisl non, elementum nulla. Proin eget enim neque. Proin vehicula faucibus nisl. Donec tincidunt neque turpis, sed bibendum nunc accumsan et. Aenean nec dui scelerisque, congue orci ac, scelerisque diam. Phasellus consectetur fringilla condimentum.',
        },
        {
            title: 'Nullam ac tincidunt ante?',
            body: 'Phasellus gravida maximus metus, et consequat nulla aliquam eu. <br /><img src="https://toppng.com/uploads/preview/react-logo-icon-11609374122d9vkbptqap.png" alt="react"/><br /><br />Suspendisse nec dolor scelerisque tellus aliquet hendrerit. Vestibulum sed tempus nunc. Mauris at efficitur orci, eget vehicula urna. Aliquam blandit elit ut nunc congue, eget iaculis sem tempor.',
        },
        {
            title: 'Etiam vestibulum congue. Suspendisse eu interdum diam?',
            body: 'Vestibulum sed tempus nunc. Mauris at efficitur orci, eget vehicula urna. Aliquam blandit elit ut nunc congue, eget iaculis sem tempor. Suspendisse sit amet suscipit elit. Quisque tincidunt ante ac mauris tristique hendrerit. Proin mollis lectus et nisl dignissim ullamcorper.',
        },
    ]

    const list = data.map((data, index) =>
    (<li className={style.li} key={index} >
        <details>
            <summary>{data.title}</summary>
            {data.body}
        </details>
    </li>))

    return (
        <ul className={style.ul} >
            {list}
        </ul>
    )
}