"use client";
import { FaWhatsapp } from "react-icons/fa";

type Props = {
  phone?: string;
  message?: string;
  label?: string;
  className?: string;
  iconOnly?: boolean;
};

export default function WhatsAppButton({
  phone = "03014781858",
  message = "Hi, I want to know more about your products",
  label = "Chat",
  className = "",
  iconOnly = false,
}: Props) {
  const encodedMessage = encodeURIComponent(message);

  const url = `https://wa.me/${phone}?text=${encodedMessage}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition ${className}`}
    >
      <FaWhatsapp size={18} />
      {!iconOnly && label}
    </a>
  );
}