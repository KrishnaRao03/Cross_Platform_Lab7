export async function fetchAllProducts(){
  // Minimal stub data so app renders even without network
  return [
    { id:1, title:"Phone",    price:699.99, description:"A nice phone",   image:"https://via.placeholder.com/150" },
    { id:2, title:"Laptop",   price:999.99, description:"A fast laptop",  image:"https://via.placeholder.com/150" },
    { id:3, title:"Headset",  price:199.99, description:"Great audio",    image:"https://via.placeholder.com/150" }
  ];
}
