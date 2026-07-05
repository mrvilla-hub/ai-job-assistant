import {
    Home,
    Briefcase,
    FileText,
    User
} from "lucide-react";

export default function Sidebar() {
    return (
        <div className="w-64 h-screen bg-slate-900 text-white">

            <div className="p-6 text-2xl font-bold">
                Dashboard
            </div>

            <div className="space-y-6 p-6">

                <div className="flex gap-3 items-center">
                    <Home size={20} />
                    Dashboard
                </div>

                <div className="flex gap-3 items-center">
                    <Briefcase size={20} />
                    Jobs
                </div>

                <div className="flex gap-3 items-center">
                    <FileText size={20} />
                    Resume
                </div>

                <div className="flex gap-3 items-center">
                    <User size={20} />
                    Profile
                </div>

            </div>

        </div>
    )
}