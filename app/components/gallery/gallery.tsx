import GalleryItem from "./galleryItem";

type PropsOfGallery = {
  userId?: string;
};

export default function Gallery({ userId }: PropsOfGallery) {
  console.log(userId);
  // TEMPORARY
  const items = [
    {
      id: 1,
      media: "/pins/pin1.jpeg",
      width: 1260,
      height: 1000,
    },
    {
      id: 2,
      media: "/pins/pin2.jpeg",
      width: 1260,
      height: 1400,
    },
    {
      id: 3,
      media: "/pins/pin3.jpeg",
      width: 1260,
      height: 1400,
    },
    {
      id: 4,
      media: "/pins/pin4.jpeg",
      width: 1260,
      height: 1000,
    },
    {
      id: 5,
      media: "/pins/pin5.jpeg",
      width: 1260,
      height: 1243,
    },
    {
      id: 6,
      media: "/pins/pin6.jpeg",
      width: 1260,
      height: 1568,
    },
    {
      id: 7,
      media: "/pins/pin7.jpeg",
      width: 1260,
      height: 1234,
    },
    {
      id: 8,
      media: "/pins/pin8.jpeg",
      width: 1260,
      height: 1400,
    },
    {
      id: 9,
      media: "/pins/pin9.jpeg",
      width: 1260,
      height: 1000,
    },
    {
      id: 10,
      media: "/pins/pin10.jpeg",
      width: 1260,
      height: 1000,
    },
    {
      id: 11,
      media: "/pins/pin11.jpeg",
      width: 1260,
      height: 1000,
    },
    {
      id: 12,
      media: "/pins/pin12.jpeg",
      width: 1260,
      height: 1400,
    },
    {
      id: 13,
      media: "/pins/pin13.jpeg",
      width: 1260,
      height: 1400,
    },
    {
      id: 14,
      media: "/pins/pin14.jpeg",
      width: 1260,
      height: 1600,
    },
    {
      id: 15,
      media: "/pins/pin15.jpeg",
      width: 1260,
      height: 1000,
    },
    {
      id: 16,
      media: "/pins/pin16.jpeg",
      width: 1260,
      height: 1260,
    },
    {
      id: 17,
      media: "/pins/pin17.jpeg",
      width: 1260,
      height: 1000,
    },
    {
      id: 18,
      media: "/pins/pin18.jpeg",
      width: 1260,
      height: 1260,
    },
    {
      id: 19,
      media: "/pins/pin19.jpeg",
      width: 1260,
      height: 1400,
    },
    {
      id: 20,
      media: "/pins/pin20.jpeg",
      width: 1260,
      height: 1260,
    },
    {
      id: 21,
      media: "/pins/pin21.jpeg",
      width: 1260,
      height: 1400,
    },
    {
      id: 22,
      media: "/pins/pin22.jpeg",
      width: 1260,
      height: 1890,
    },
    {
      id: 23,
      media: "/pins/pin23.jpeg",
      width: 1260,
      height: 1260,
    },
    {
      id: 24,
      media: "/pins/pin24.jpeg",
      width: 1260,
      height: 1260,
    },
    {
      id: 25,
      media: "/pins/pin25.jpeg",
      width: 1260,
      height: 1260,
    },
  ];

  return (
    <div className="grid grid-cols-[repeat(7,1fr)] gap-[16px] auto-rows-[10px] xsm:grid-cols-[repeat(1,1fr)] sm:grid-cols-[repeat(2,1fr)] md:grid-cols-[repeat(3,1fr)] lg:grid-cols-[repeat(4,1fr)] xl:grid-cols-[repeat(5,1fr)] xxl:grid-cols-[repeat(6,1fr)]">
      {items.map((item, index) => (
        <GalleryItem item={item} key={index} />
      ))}
    </div>
  );
}
