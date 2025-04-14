// app/ui/fonts.ts
import { Lusitana } from "next/font/google";

export const lusitana: ReturnType<typeof Lusitana> = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});
