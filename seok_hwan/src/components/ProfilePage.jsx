import { act, useState } from "react";
import Image from "../assets/practice.jpg"

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState("about");

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8">

                <div className="flex items-center gap-6">
                    <div className="relative">
                        <img 
                        src={Image}
                        alt="profile"
                        className="w-32 h-32 rounded-full object-cover ring-4 ring-gray-200 hover:scale-105"
                        />

                        <span className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-green-500 border-2 border-white">

                        </span>
                        </div>
                        <div>
                            <h1 className="text-3xl font-extrabold text-gray-900">
                                본인 이름
                            </h1>
                            <p className="text-lg text-gray-600">
                                Frontend Developer
                            </p>

                            <div className="flex gap-2 mt-2">
                                <span className="px-3 py-1 rounded-full text-xs bg-blue-50 text-blue-600 border border-blue-200">
                                    React
                                </span>
                                <span className="px-3 py-1 rounded-full text-xs bg-purple-50 text-purple-600 border border-purple-200">
                                   Tailwind
                                 </span>
                                <span className="px-3 py-1 rounded-full text-xs bg-emerald-50 text-emerald-600 border border-emerald-200">
                                    UI/UX
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 border-b border-gray-200 flex gap-6">
                    {["about","projects","contact"].map((tab)=>(
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-2 text-sm font-medium transition-colors ${
                                activeTab === tab
                                ? "text-blue-600 border-b-2 border-blue-600"
                                : "text-gray-500 hover:text-gray-800"
                            }`}
                            >
                                {tab.toUpperCase()}
                            </button>
                    ))}
                </div>

                <div className="mt-6 min-h-30">

                    {activeTab === "about" && (
                        <p className="text-gray-700 leading-relaxed">
                            안녕하세요 김석환입니다
                        </p>
                    )}
                </div>
                </div>
            </div>
    )
}