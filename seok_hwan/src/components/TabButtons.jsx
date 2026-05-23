function TabButtons({mode,setMode}) {
    return (
        <div className="mt-6 flex items-center gap-2 rounded-xl bg-white p-1 shadow-sm">
            {/* 시계보기 버튼 */}
            <button 
            onClick={() => setMode("clock")}
            className={
          mode === "clock"
            ? "rounded-lg bg-amber-900-600 px-5 py-2 text-xs font-bold text-white shadow-sm"
            : "rounded-lg px-5 py-2 text-xs font-bold text-slate-500 hover:bg-white"
        }
        >
            시계 보기
        </button>

        {/* 타이머 보기 버튼 */}
        <button
            onClick={() => setMode("timer")}
            className={
             mode === "timer"
            ? "rounded-lg bg-amber-900-600 px-5 py-2 text-xs font-bold text-white shadow-sm"
            : "rounded-lg px-5 py-2 text-xs font-bold text-slate-500 hover:bg-white"
        }
        >
            타이머 보기
        </button>
    </div>
    )
}