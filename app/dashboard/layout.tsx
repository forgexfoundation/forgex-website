import { redirect } from "next/navigation"
import { supabase } from "@/lib/supabase"

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    const {
        data: { session },
    } = await supabase.auth.getSession()

    if (!session) redirect("/join")

    return <>{children}</>
}
