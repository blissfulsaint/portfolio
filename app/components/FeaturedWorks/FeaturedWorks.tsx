'use client';
import { CardLink } from "blisskit-ui";

// function testFunction() {
//   console.log('Test worked');
// }

export default function FeaturedWorks() {
    return (
        <>
            <h3 className="font-semibold mb-6 text-center">Featured Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
                <CardLink href="https://github.com/blissfulsaint/blisskit-ui" title="BlissKit-UI" textClassName="bg-primaryColor" imgSrc="/blisskit-ui.png" />
                <CardLink href="https://github.com/blissfulsaint/valleymusicclub" title="Valley Music Club" textClassName="bg-primaryColor" imgSrc='/vmc.jpeg' />
                <CardLink href="https://github.com/blissfulsaint/stylestage-sass" title="Style Stage SASS" textClassName="bg-primaryColor" imgSrc="/stylestage.png" />
            </div>
        </>
    )
}