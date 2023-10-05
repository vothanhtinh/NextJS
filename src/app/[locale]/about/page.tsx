"use client";

import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("Index");
  return (
    <div className="min-h-screen">
      <p>{t("title")}</p>
    </div>
  );
}
