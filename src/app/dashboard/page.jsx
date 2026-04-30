import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const DashboardPage = async() => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    console.log("Session data in Dashboard Page", session)

    const user = session?.user;

    if(!user){
        redirect('/auth/signin')
        return <div>Please Login</div>
    }
    return (
        <div>
                <h2>THis is dashboard page</h2>
        </div>
    );
};

export default DashboardPage;