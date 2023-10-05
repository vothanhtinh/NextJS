"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import { ChangeEvent, useTransition } from "react";

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <div className="relative text-gray-400 transition-opacity">
      <select
        className="inline-flex  p-2"
        value={locale}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {["en", "vi"].map((cur) => (
          <option key={cur} value={cur}>
            {cur === "en" ? "EN" : "VI"}
          </option>
        ))}
      </select>
    </div>
  );
}
