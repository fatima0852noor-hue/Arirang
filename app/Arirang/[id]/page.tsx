// app/Arirang/[id]/page.tsx
"use client";
import { useParams } from "next/navigation";
import {  Arirang} from "@/app/data/productdata"; // '@' aapke root folder ko point karta hai
import Link from "next/link";

export default function ProductDetailPage() {
  const params = useParams();
  
  // URL se id nikal kar number mein convert kar rahe hain kyunke aapki id data mein number hai
  const productId = Number(params.id);

  // Arirang array mein se product dhoondain
  const product = Arirang.find((item) => item.id === productId);

  // Agar product na mile
  if (!product) {
    return <div style={{ padding: "40px", textAlign: "center" }}>Product not found!</div>;
  }

  // WhatsApp Configuration
  const myWhatsAppNumber = "923000000000";
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const message = `Hello, I want to order this product:\n\n*Name:* ${product.name}\n*Price:* Rs. ${product.price}\n*Link:* ${currentUrl}`;
  const whatsappUrl = `https://wa.me/${myWhatsAppNumber}?text=${encodeURIComponent(message)}`;

  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px", fontFamily: "sans-serif" }}>
      
      {/* Back Button */}
      <Link href="/Arirang" style={{ textDecoration: "none", color: "#555", display: "inline-block", marginBottom: "20px" }}>
        ← Back to Arirang
      </Link>

      <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
        
        {/* Left Side: Product Image Only */}
        <div style={{ flex: "1 1 450px" }}>
          <img 
            src={product.image} 
            alt={product.name} 
            style={{ width: "100%", maxHeight: "600px", objectFit: "contain", borderRadius: "8px", border: "1px solid #eee" }} 
          />
        </div>

        {/* Right Side: Product Details */}
        <div style={{ flex: "1 1 450px", display: "flex", flexDirection: "column", gap: "20px" }}>
          <h1 style={{ fontSize: "28px", margin: 0, color: "#111" }}>{product.name}</h1>
          <h2 style={{ fontSize: "24px", color: "#333", margin: 0 }}>Rs. {product.price}</h2>
          
          {/* WhatsApp Button (No Quantity Box Here) */}
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              backgroundColor: "#25D366", // WhatsApp Green
              color: "white",
              padding: "15px 30px",
              borderRadius: "4px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "16px",
              textAlign: "center",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
            }}
          >
            {/* Simple Inline SVG WhatsApp Icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.411 0 11.981 0c3.184.001 6.177 1.242 8.426 3.496 2.248 2.253 3.487 5.244 3.484 8.425-.004 6.581-5.356 11.93-11.925 11.93-1.999-.001-3.957-.502-5.69-1.462L0 24zm6.59-4.846c1.6.95 3.198 1.451 4.79 1.453 5.312 0 9.634-4.32 9.637-9.63.002-2.573-1.002-4.994-2.83-6.824-1.829-1.83-4.253-2.831-6.828-2.831-5.316 0-9.638 4.32-9.64 9.632-.001 1.705.469 3.374 1.356 4.848l-.997 3.642 3.734-.979z"/>
            </svg>
            Order via WhatsApp
          </a>

          <hr style={{ border: "none", borderTop: "1px solid #eee", margin: "10px 0" }} />

          {/* Description Section */}
          <div>
            <h3 style={{ fontSize: "16px", textTransform: "uppercase", marginBottom: "10px", color: "#555" }}>Description</h3>
            <p style={{ whiteSpace: "pre-line", color: "#666", lineHeight: "1.6", margin: 0 }}>
              {product.description}
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
