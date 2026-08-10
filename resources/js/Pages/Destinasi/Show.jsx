import DestinationLayout from "@/Layouts/DestinationLayout";

export default function Show({ title, destination, destinations }) {
    return (
        <DestinationLayout
            title={title}
            heroImage={destination.heroImage}
            heroHeadline={destination.heroHeadline || destination.name}
            body={destination.body}
            hours={destination.hours}
            price={destination.price}
            priceNote={destination.priceNote}
            facilities={destination.facilities ?? []}
            destinations={destinations ?? []}
        />
    );
}
