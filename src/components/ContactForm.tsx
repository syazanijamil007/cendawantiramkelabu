"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Send, MessageCircle, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/config";

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const initial: FormState = { name: "", email: "", phone: "", subject: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const set = (key: keyof FormState) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((er) => ({ ...er, [key]: undefined }));
  };

  function validate(): Errors {
    const er: Errors = {};
    if (!form.name.trim()) er.name = "Sila masukkan nama anda.";
    if (!form.email.trim()) er.email = "Sila masukkan emel anda.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = "Format emel tidak sah.";
    if (form.phone.trim() && !/^[+\d][\d\s-]{7,}$/.test(form.phone.trim()))
      er.phone = "Format nombor telefon tidak sah.";
    if (!form.subject) er.subject = "Sila pilih subjek pertanyaan.";
    if (!form.message.trim()) er.message = "Sila masukkan mesej anda.";
    else if (form.message.trim().length < 10) er.message = "Mesej terlalu pendek (minimum 10 aksara).";
    return er;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const er = validate();
    if (Object.keys(er).length > 0) {
      setErrors(er);
      return;
    }
    setSending(true);

    const text = [
      `Halo ${siteConfig.name},`,
      ``,
      `Saya ingin membuat pertanyaan:`,
      ``,
      `Nama: ${form.name}`,
      `Emel: ${form.email}`,
      form.phone.trim() ? `Telefon: ${form.phone}` : null,
      `Subjek: ${form.subject}`,
      ``,
      `Mesej:`,
      form.message.trim(),
      ``,
      `Terima kasih.`,
    ]
      .filter(Boolean)
      .join("\n");

    // Buka WhatsApp dengan mesej pra-isi — ini adalah saluran penghantaran sebenar.
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");

    // Tunjukkan mesej jujur: borang ini menghantar melalui WhatsApp.
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm(initial);
    }, 600);
  }

  if (sent) {
    return (
      <div className="card flex flex-col items-center p-10 text-center">
        <CheckCircle2 className="h-14 w-14 text-brand-green" />
        <h3 className="mt-4 text-xl font-bold text-brand-ink">Mesej Anda Telah Disediakan!</h3>
        <p className="mt-2 max-w-md text-brand-muted">
          Mesej anda telah dibuka dalam WhatsApp. Sila tekan <strong>hantar</strong> pada tetingkap
          WhatsApp untuk melengkapkan penghantaran. Kami akan membalas secepat mungkin.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="btn-secondary mt-6 px-6 py-2.5 text-sm"
        >
          Hantar mesej lain
        </button>
      </div>
    );
  }

  const subjects = [
    "Pertanyaan Produk",
    "Tempahan / Pesanan",
    "Bekalan Borong / Restoran",
    "Kerjasama Perniagaan",
    "Lain-lain",
  ];

  return (
    <form onSubmit={handleSubmit} noValidate className="card space-y-5 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="label">Nama Penuh *</label>
          <input
            id="cf-name"
            type="text"
            className={`input ${errors.name ? "border-red-400" : ""}`}
            placeholder="Nama anda"
            value={form.name}
            onChange={set("name")}
          />
          {errors.name && <Err msg={errors.name} />}
        </div>
        <div>
          <label htmlFor="cf-email" className="label">Emel *</label>
          <input
            id="cf-email"
            type="email"
            className={`input ${errors.email ? "border-red-400" : ""}`}
            placeholder="nama@contoh.com"
            value={form.email}
            onChange={set("email")}
          />
          {errors.email && <Err msg={errors.email} />}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-phone" className="label">Nombor Telefon</label>
          <input
            id="cf-phone"
            type="tel"
            className={`input ${errors.phone ? "border-red-400" : ""}`}
            placeholder="+60 19-958 1262"
            value={form.phone}
            onChange={set("phone")}
          />
          {errors.phone && <Err msg={errors.phone} />}
        </div>
        <div>
          <label htmlFor="cf-subject" className="label">Subjek *</label>
          <select
            id="cf-subject"
            className={`input ${errors.subject ? "border-red-400" : ""}`}
            value={form.subject}
            onChange={set("subject")}
          >
            <option value="">Pilih subjek…</option>
            {subjects.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.subject && <Err msg={errors.subject} />}
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className="label">Mesej *</label>
        <textarea
          id="cf-message"
          rows={5}
          className={`input resize-none ${errors.message ? "border-red-400" : ""}`}
          placeholder="Tulis pertanyaan atau butiran tempahan anda di sini…"
          value={form.message}
          onChange={set("message")}
        />
        {errors.message && <Err msg={errors.message} />}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" disabled={sending} className="btn-primary flex-1 px-6 py-3.5">
          {sending ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <Send className="h-5 w-5" />
          )}
          {sending ? "Menyediakan…" : "Hantar Mesej"}
        </button>
        <p className="flex items-center gap-1.5 text-xs text-brand-muted">
          <MessageCircle className="h-4 w-4 text-[#25D366]" />
          Mesej dihantar melalui WhatsApp kami ({siteConfig.whatsappDisplay}).
        </p>
      </div>
    </form>
  );
}

function Err({ msg }: { msg: string }) {
  return (
    <p className="mt-1.5 flex items-center gap-1 text-xs font-medium text-red-500">
      <AlertCircle className="h-3.5 w-3.5" /> {msg}
    </p>
  );
}
