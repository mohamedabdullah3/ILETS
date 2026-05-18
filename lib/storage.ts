import { AssessmentResult, StudentProfile } from "@/types";

export const STORAGE_KEYS = {
  profile: "ielts_profile",
  draft: "ielts_assessment_draft",
  result: "ielts_result",
  lead: "ielts_lead",
};

const safeSet = (key: string, value: unknown) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(value));
};

const safeGet = <T,>(key: string): T | null => {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(key);
  if (!raw) return null;
  try { return JSON.parse(raw) as T; } catch { return null; }
};

export const saveProfile = (profile: StudentProfile) => safeSet(STORAGE_KEYS.profile, profile);
export const getProfile = () => safeGet<StudentProfile>(STORAGE_KEYS.profile);
export const saveDraft = (draft: unknown) => safeSet(STORAGE_KEYS.draft, draft);
export const getDraft = <T,>() => safeGet<T>(STORAGE_KEYS.draft);
export const saveResult = (result: AssessmentResult) => safeSet(STORAGE_KEYS.result, result);
export const getResult = () => safeGet<AssessmentResult>(STORAGE_KEYS.result);
export const saveLead = (lead: { email: string; whatsapp: string }) => safeSet(STORAGE_KEYS.lead, lead);
