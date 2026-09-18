"use client";
import { useState } from "react";
import Image from "next/image";
import { supabase } from "../../../../config/supabase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faTrash, faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function ProductForm({ initialData, onSubmit, submitLabel }) {
  const [form, setForm] = useState({
    produto: initialData?.produto ?? "",
    shortdescription: initialData?.shortdescription ?? "",
    valor: initialData?.valor ?? "",
    imagens: initialData?.imagens ?? [],
    ativo: initialData?.ativo ?? true,
  });
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError("");

    const path = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.\-_]/g, "")}`;
    const { error: uploadError } = await supabase.storage.from("produtos").upload(path, file);

    if (uploadError) {
      setError("Erro ao enviar imagem: " + uploadError.message);
      setUploading(false);
      return;
    }

    const { data } = supabase.storage.from("produtos").getPublicUrl(path);
    setForm((f) => ({ ...f, imagens: [...f.imagens, data.publicUrl] }));
    setUploading(false);
  };

  const removeImage = (url) => {
    setForm((f) => ({ ...f, imagens: f.imagens.filter((img) => img !== url) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.imagens.length === 0) {
      setError("Adicione pelo menos uma foto do produto.");
      return;
    }

    setSaving(true);
    await onSubmit({ ...form, valor: Number(form.valor) });
    setSaving(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex max-w-xl flex-col gap-5">
      <div>
        <label className="text-sm font-medium text-primary">Nome do produto</label>
        <input
          required
          name="produto"
          value={form.produto}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-cardBorder bg-white px-4 py-2.5 outline-none focus:border-gold"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-primary">Descrição curta</label>
        <input
          name="shortdescription"
          value={form.shortdescription}
          onChange={handleChange}
          placeholder='Ex: "Queijo premiado na França em 2023"'
          className="mt-1 w-full rounded-lg border border-cardBorder bg-white px-4 py-2.5 outline-none focus:border-gold"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-primary">Preço (R$)</label>
        <input
          required
          type="number"
          step="0.01"
          min="0"
          name="valor"
          value={form.valor}
          onChange={handleChange}
          className="mt-1 w-40 rounded-lg border border-cardBorder bg-white px-4 py-2.5 outline-none focus:border-gold"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-primary">Fotos</label>
        <div className="mt-2 flex flex-wrap gap-3">
          {form.imagens.map((img) => (
            <div key={img} className="relative h-20 w-20 overflow-hidden rounded-lg border border-cardBorder">
              <Image src={img} alt="Foto do produto" fill sizes="80px" className="object-cover" />
              <button
                type="button"
                onClick={() => removeImage(img)}
                className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/90 text-xs text-cream"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          ))}
          <label className="flex h-20 w-20 cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border border-dashed border-cardBorder text-primary/50 hover:border-gold hover:text-terracotta">
            {uploading ? <FontAwesomeIcon icon={faSpinner} className="animate-spin" /> : <FontAwesomeIcon icon={faUpload} />}
            <span className="text-[10px]">{uploading ? "Enviando..." : "Adicionar"}</span>
            <input type="file" accept="image/*" onChange={handleUpload} disabled={uploading} className="hidden" />
          </label>
        </div>
      </div>

      <label className="flex items-center gap-2 text-sm text-primary">
        <input type="checkbox" name="ativo" checked={form.ativo} onChange={handleChange} />
        Produto ativo (visível na loja)
      </label>

      {error && <p className="text-sm text-terracotta">{error}</p>}

      <button type="submit" disabled={saving || uploading} className="btn-primary self-start disabled:opacity-60">
        {saving ? "Salvando..." : submitLabel}
      </button>
    </form>
  );
}
