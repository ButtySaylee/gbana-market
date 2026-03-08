"use client";

import { useState } from "react";
import { Loader2, Pencil } from "lucide-react";
import { CATEGORIES } from "@/types";

interface SellerEditOnDetailProps {
  listingId: string;
  currentTitle: string;
  currentDescription: string;
  currentPrice: string;
  currentCategory: string;
}

export default function SellerEditOnDetail({
  listingId,
  currentTitle,
  currentDescription,
  currentPrice,
  currentCategory,
}: SellerEditOnDetailProps) {
  const [open, setOpen] = useState(false);
  const [whatsapp, setWhatsapp] = useState("");
  const [sellerPin, setSellerPin] = useState("");
  const [title, setTitle] = useState(currentTitle);
  const [description, setDescription] = useState(currentDescription);
  const [price, setPrice] = useState(currentPrice);
  const [category, setCategory] = useState(currentCategory);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function handleSave() {
    setError(null);
    const waClean = whatsapp.replace(/\s/g, "");
    const pin = sellerPin.trim();

    if (!/^\+?[0-9]{7,15}$/.test(waClean)) {
      setError("Enter your listing WhatsApp number in correct format.");
      return;
    }

    if (!/^\d{4,8}$/.test(pin)) {
      setError("Enter your seller PIN (4-8 digits).");
      return;
    }

    if (!title.trim() || !description.trim() || !price.trim()) {
      setError("Title, description, and price are required.");
      return;
    }

    setBusy(true);
    try {
      const res = await fetch("/api/listings/seller-update", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          listing_id: listingId,
          seller_whatsapp: waClean,
          seller_pin: pin,
          title: title.trim(),
          description: description.trim(),
          price: price.trim(),
          category,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error ?? "Failed to update listing.");

      setSuccess(true);
      setTimeout(() => window.location.reload(), 800);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  if (success) {
    return (
      <div className="w-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-center py-3 rounded-xl text-sm font-semibold mt-3">
        Listing updated!
      </div>
    );
  }

  return (
    <div className="w-full mt-3">
      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="w-full flex items-center justify-center gap-2 border border-slate-300 text-slate-600 hover:text-[#002147] hover:border-slate-400 bg-white font-semibold py-2.5 rounded-xl text-sm transition-colors"
        >
          <Pencil className="w-4 h-4" />
          {"I'm the seller \u2022 Edit Listing"}
        </button>
      ) : (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
          <p className="text-xs font-semibold text-slate-600">
            Enter your WhatsApp number and PIN to edit this listing
          </p>

          <div className="grid grid-cols-2 gap-2">
            <input
              type="tel"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              placeholder="+231777123456"
              className="border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#25D366]"
            />
            <input
              type="password"
              value={sellerPin}
              onChange={(e) => setSellerPin(e.target.value)}
              placeholder="Seller PIN"
              inputMode="numeric"
              maxLength={8}
              className="border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#25D366]"
            />
          </div>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#25D366]"
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            rows={3}
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#25D366] resize-none"
          />

          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price (e.g. $50)"
              className="border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#25D366]"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#25D366] bg-white"
            >
              {CATEGORIES.filter((c) => c !== "All").map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {error && <p className="text-xs text-red-500">{error}</p>}

          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleSave}
              disabled={busy}
              className="flex-1 flex items-center justify-center gap-2 bg-[#002147] hover:bg-[#003580] disabled:opacity-60 text-white font-semibold py-2 rounded-lg text-sm transition-colors"
            >
              {busy ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </button>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setError(null);
              }}
              className="px-4 py-2 rounded-lg border border-slate-300 text-slate-600 text-sm font-semibold hover:bg-slate-100 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
