'use client';
import { CardLink, CardLinkGrid } from "blisskit-ui";

// function testFunction() {
//   console.log('Test worked');
// }

export default function FeaturedWorks() {
    return (
        <>
            <h3 className="font-semibold mb-6 text-center">Featured Projects</h3>
            <CardLinkGrid>
                <CardLink href="https://github.com/blissfulsaint/blisskit-ui" title="BlissKit-UI" textClassName="bg-primaryColor" imgSrc="/blisskit-ui.png" />
                <CardLink href="https://github.com/blissfulsaint/valleymusicclub" title="Valley Music Club" textClassName="bg-primaryColor" imgSrc='/vmc.jpeg' />
                <CardLink href="https://github.com/blissfulsaint/stylestage-sass" title="Style Stage SASS" textClassName="bg-primaryColor" imgSrc="/stylestage.png" />
            </CardLinkGrid>
        </>
    )
}