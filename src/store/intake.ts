import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { PracticeAreaId } from "@/lib/firm";

export type IntakeRequest = {
  id: string;
  createdAt: string;
  area: PracticeAreaId;
  summary: string;
  name: string;
  phone: string;
  email: string;
};

type IntakeState = {
  area: PracticeAreaId | null;
  summary: string;
  name: string;
  phone: string;
  email: string;
  requests: IntakeRequest[];
  setArea: (area: PracticeAreaId) => void;
  setSummary: (summary: string) => void;
  setName: (name: string) => void;
  setPhone: (phone: string) => void;
  setEmail: (email: string) => void;
  submit: () => IntakeRequest | null;
};

export const useIntake = create<IntakeState>()(
  persist(
    (set, get) => ({
      area: null,
      summary: "",
      name: "",
      phone: "",
      email: "",
      requests: [],
      setArea: (area) => set({ area }),
      setSummary: (summary) => set({ summary }),
      setName: (name) => set({ name }),
      setPhone: (phone) => set({ phone }),
      setEmail: (email) => set({ email }),
      submit: () => {
        const { area, summary, name, phone, email, requests } = get();
        if (!area || !summary.trim() || !name.trim() || !phone.trim()) return null;
        const item: IntakeRequest = {
          id: crypto.randomUUID(),
          createdAt: new Date().toISOString(),
          area,
          summary: summary.trim(),
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
        };
        set({
          requests: [item, ...requests],
          area: null,
          summary: "",
          name: "",
          phone: "",
          email: "",
        });
        return item;
      },
    }),
    { name: "sm-intake-v2" },
  ),
);
