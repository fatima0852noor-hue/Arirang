// app/Bouquet/[id]/page.tsx
"use client";
import { useParams } from "next/navigation";
import { Bouquet } from "@/app/data/productdata"; // Data file se Bouquet array import kiya
import Link from "next/link";

export default function BouquetDetailPage() {
  const params = useParams();
  const productId = Number(params.id);

  // Bouquet data array mein se product match karna
  const product = Bouquet.find((item) => item.id === productId);

  if (!product) {
    return (
      <div style={{ padding: "40px", textAlign: "center", fontFamily: "sans-serif" }}>
        <h2>Product Not Found!</h2>
        <Link href="/Bouquet" style={{ color: "#0070f3" }}>Go back to Bouquet Collection</Link>
      </div>
    );
  }

  // WhatsApp Configuration (Apna real Active number yahan country code ke sath likhein)
  const myWhatsAppNumber = "923000000000"; 
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const message = `Hello, I want to order this product:\n\n*Name:* ${product.name}\n*Price:* Rs. ${product.price}\n*Link:* ${currentUrl}`;
  const whatsappUrl = `https://wa.me{myWhatsAppNumber}?text=${encodeURIComponent(message)}`;

  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px", fontFamily: "sans-serif" }}>
      
      <Link href="/Bouquet" style={{ textDecoration: "none", color: "#666", display: "inline-block", marginBottom: "30px", fontWeight: "500" }}>
        ← Back to Bouquet Collection
      </Link>

      <div style={{ display: "flex", gap: "50px", flexWrap: "wrap" }}>
        
        {/* Left Side: Product Image Only */}
        <div style={{ flex: "1 1 450px" }}>
          <img 
            src={product.image} 
            alt={product.name} 
            style={{ width: "100%", maxHeight: "550px", objectFit: "contain", borderRadius: "8px", border: "1px solid #eaeaea", backgroundColor: "#fafafa" }} 
          />
        </div>

        {/* Right Side: Product Details */}
        <div style={{ flex: "1 1 450px", display: "flex", flexDirection: "column", gap: "24px" }}>
          <h1 style={{ fontSize: "28px", margin: 0, color: "#111", lineHeight: "1.3" }}>{product.name}</h1>
          <h2 style={{ fontSize: "24px", color: "#222", margin: 0, fontWeight: "600" }}>Rs. {product.price.toLocaleString()}</h2>
          
          {/* WhatsApp Direct Order Button */}
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              backgroundColor: "#25D366", 
              color: "white",
              padding: "16px 32px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "16px",
              textAlign: "center",
              boxShadow: "0 4px 12px rgba(37, 211, 102, 0.2)"
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.411 0 11.981 0c3.184.001 6.177 1.242 8.426 3.496 2.248 2.253 3.487 5.244 3.484 8.425-.004 6.581-5.356 11.93-11.925 11.93-1.999-.001-3.957-.502-5.69-1.462L0 24zm6.59-4.846c1.6.95 3.198 1.451 4.79 1.453 5.312 0 9.634-4.32 9.637-9.63.002-2.573-1.002-4.994-2.83-6.824-1.829-1.83-4.253-2.831-6.828-2.831-5.316 0-9.638 4.32-9.64 9.632-.001 1.705.469 3.374 1.356 4.848l-.997 3.642 3.734-.979z"/>
            </svg>
            Order via WhatsApp
          </a>

          <hr style={{ border: "none", borderTop: "1px solid #eee", margin: "5px 0" }} />

          {/* Description Section */}
          <div>
            <h3 style={{ fontSize: "14px", textTransform: "uppercase", marginBottom: "12px", color: "#888", letterSpacing: "1px" }}>Description</h3>
            <p style={{ whiteSpace: "pre-line", color: "#444", lineHeight: "1.7", margin: 0, fontSize: "16px" }}>
              {product.description}
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
