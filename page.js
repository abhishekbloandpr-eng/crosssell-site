
"use client";
import { useState } from "react";

const initialProducts = [
  {
    id:1,
    title:"Adjustable Dumbbells",
    price:"₹4,999",
    image:"https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=800",
    link:"#"
  },
  {
    id:2,
    title:"Protein Shaker Bottle",
    price:"₹399",
    image:"https://images.unsplash.com/photo-1605296867424-35fc25c9212a?q=80&w=800",
    link:"#"
  }
];

export default function Home() {
  const [products]=useState(initialProducts);
  return (
    <div style={{padding:20}}>
      <h1>Prime Picks India</h1>
      <p>Your curated cross-sell fitness deals</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:20}}>
        {products.map(p=>(
          <div key={p.id} style={{background:"#fff",padding:10,borderRadius:8}}>
            <img src={p.image} style={{width:"100%",borderRadius:6}}/>
            <h3>{p.title}</h3>
            <p>{p.price}</p>
            <a href={p.link} target="_blank">
              <button>View on Amazon</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
