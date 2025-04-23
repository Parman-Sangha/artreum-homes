import Script from "next/script";

export default function StructuredData({ property }) {
  if (!property) return null;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: property.title || "Artreum Homes Property",
    description:
      property.description || "Luxury real estate property by Artreum Homes",
    image: property.images?.[0]?.url || "/images/og-image.jpg",
    url: property.url || "https://artreumhomes.com",
    offers: {
      "@type": "Offer",
      price: property.price || "Contact for pricing",
      priceCurrency: "CAD",
      availability:
        property.status === "available"
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: property.address?.street || "",
      addressLocality: property.address?.city || "Calgary",
      addressRegion: property.address?.province || "Alberta",
      postalCode: property.address?.postalCode || "",
      addressCountry: "CA",
    },
    numberOfRooms: property.bedrooms || 0,
    numberOfBathroomsTotal: property.bathrooms || 0,
    floorSize: {
      "@type": "QuantitativeValue",
      value: property.squareFootage || 0,
      unitCode: "FTK",
    },
  };

  return (
    <Script
      id="property-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
