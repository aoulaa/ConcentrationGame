import React from 'react'
import NavBar from '../components/Layout/NavBar'

export default function AboutPage() {
    return (
        <NavBar>
            <div className=" is-flex section is-flex-direction-column
                is-align-items-center has-text-centered">
                <div className="column is-5">
                    <h1 className="is-size-1 is-size-3-mobile">about page!</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus suscipit est non
                        nibh mollis, sit amet dictum sem malesuada. Duis ornare sed mauris eget ullamcorper.
                        Nulla placerat efficitur turpis, at ullamcorper elit sagittis at. Suspendisse eu magna
                        arcu. Duis eu tincidunt purus. Nulla in mi ac mi bibendum dapibus. Etiam massa nunc,
                        auctor sed velit non, mollis pharetra mauris. Vestibulum id convallis purus. Integer
                        posuere magna lectus, non tincidunt est pellentesque nec. Proin feugiat a sem eget placerat.
                        In porttitor turpis sit amet augue maximus, vitae rutrum est aliquam.

                        Vivamus venenatis sed lacus ut posuere. Nam vestibulum ante nec turpis lobortis,
                        id ultricies diam semper. Integer egestas, sem ac ultricies tristique, eros justo
                        efficitur elit, ac cursus ligula felis quis mauris. Pellentesque fringilla neque ligula,
                        in egestas metus cursus at. Sed nec lectus quis augue ultrices tincidunt in ac dolor.
                        Ut facilisis turpis sem, eu interdum nibh lacinia in. Quisque vehicula erat id tincidunt
                        dictum. Vivamus commodo metus vitae dictum sollicitudin. Sed pretium sit amet diam id dictum.
                        Cras ut elementum odio, non consectetur ipsum. Nullam convallis, tortor vel auctor posuere,
                        lorem lorem aliquet dolor, at placerat odio diam placerat enim. Nulla ac commodo erat. Sed
                        porta ut orci ac aliquet.

                    </p>
                </div>
            </div>

        </NavBar>
    )
}
