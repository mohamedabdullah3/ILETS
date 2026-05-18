## IELTS Readiness Coach MVP

### Run locally
1. `npm install`
2. `npm run dev`
3. Open `http://localhost:3000`

### Content editing
- Reading passage/questions: `data/readingQuestions.ts`
- Vocabulary questions: `data/vocabularyQuestions.ts`

### Future extension points
- OpenAI Writing correction integration: add API call flow in `lib/scoring.ts` and `components/WritingSection.tsx` (placeholder comments already included).
- Supabase database integration: start from `lib/storage.ts`, replace localStorage with repository/service functions.
- Payment integration: start from `components/CTASection.tsx` action buttons and add checkout flow.

### Suggested next features
- Listening practice
- Real AI Writing correction
- Student dashboard
- Full mock tests
- Teacher/admin dashboard
