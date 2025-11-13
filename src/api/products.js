// Returns products with imageSrc (remote images). You can switch to local images later.
export async function fetchAllProducts() {
  return [
    { id:1, title:"Phone",   price:699.99, description:"A nice phone",   imageSrc:{uri:"https://picsum.photos/seed/phone/200"} },
    { id:2, title:"Laptop",  price:999.99, description:"A fast laptop",  imageSrc:{uri:"https://picsum.photos/seed/laptop/200"} },
    { id:3, title:"Headset", price:199.99, description:"Great audio",    imageSrc:{uri:"https://picsum.photos/seed/headset/200"} },
    { id:4, title:"Watch",   price:299.99, description:"Tracks fitness", imageSrc:{uri:"https://picsum.photos/seed/watch/200"} },
    { id:5, title:"Tablet",  price:549.99, description:"10-inch display",imageSrc:{uri:"https://picsum.photos/seed/tablet/200"} }
  ];
}
