import { AssessmentResult, StudentProfile } from "@/types";

export type WritingSprintRequest = {
  studentName: string;
  targetBand: string;
  taskType: "IELTS Task 1" | "IELTS Task 2" | "General Writing";
  essay: string;
  wordCount: number;
  mainConcern: "Grammar" | "Vocabulary" | "Structure" | "Ideas" | "Not sure";
  createdAt: string;
};

export const STORAGE_KEYS = {
  profile: "ielts_profile",
  draft: "ielts_assessment_draft",
  result: "ielts_result",
  lead: "ielts_lead",
  writingSprintRequests: "writingSprintRequests",
  trainingPlanStarted: "trainingPlanStarted",
  trainingPlanStartDate: "trainingPlanStartDate",
  retakeReminderDate: "retakeReminderDate",
};

const safeSet = (key: string, value: unknown) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(value));
};

const safeGet = <T,>(key: string): T | null => {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(key);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
};

const safeRemove = (key: string) => {
  if (typeof window === "undefined") return;
  localStorage.removeItem(key);
};

export const saveProfile = (profile: StudentProfile) => safeSet(STORAGE_KEYS.profile, profile);
export const getProfile = () => safeGet<StudentProfile>(STORAGE_KEYS.profile);
export const saveDraft = (draft: unknown) => safeSet(STORAGE_KEYS.draft, draft);
export const getDraft = <T,>() => safeGet<T>(STORAGE_KEYS.draft);
export const saveResult = (result: AssessmentResult) => safeSet(STORAGE_KEYS.result, result);
export const getResult = () => safeGet<AssessmentResult>(STORAGE_KEYS.result);
export const saveLead = (lead: { email: string; whatsapp: string }) => safeSet(STORAGE_KEYS.lead, lead);

export const saveWritingSprintRequest = (request: WritingSprintRequest) => {
  const existing = safeGet<WritingSprintRequest[]>(STORAGE_KEYS.writingSprintRequests) ?? [];
  safeSet(STORAGE_KEYS.writingSprintRequests, [request, ...existing]);
};

export const startTrainingPlan = (isoDate: string) => {
  safeSet(STORAGE_KEYS.trainingPlanStarted, true);
  safeSet(STORAGE_KEYS.trainingPlanStartDate, isoDate);
};

export const getTrainingPlanStatus = () => ({
  started: safeGet<boolean>(STORAGE_KEYS.trainingPlanStarted) ?? false,
  startDate: safeGet<string>(STORAGE_KEYS.trainingPlanStartDate),
});

export const saveRetakeReminderDate = (isoDate: string) => safeSet(STORAGE_KEYS.retakeReminderDate, isoDate);
export const getRetakeReminderDate = () => safeGet<string>(STORAGE_KEYS.retakeReminderDate);

export const clearAssessmentSession = () => {
  safeRemove(STORAGE_KEYS.draft);
  safeRemove(STORAGE_KEYS.result);
};
