function TabButtons({ mode, setMode }) {
  return (
    <div className="mt-6 flex items-center gap-2 rounded-xl bg-white p-1 shadow-sm">
      <button
        onClick={() => setMode("clock")}
        className={
          mode === "clock"
            ? "rounded-lg bg-[#7a5230] px-5 py-2 text-xs font-bold text-white shadow-sm"
            // 선택되지 않은 버튼은 배경 없이 두고, 회색 텍스트와 hover 효과만 준다.
            : "rounded-lg px-5 py-2 text-xs font-bold text-slate-500 hover:bg-[#f3e6d8]"
        }
      >
        시계 보기
      </button>

      <button
        onClick={() => setMode("timer")}
        className={
          // 타이머 탭이 선택되면 동일한 브라운 강조 스타일을 적용한다.
          mode === "timer"
            ? "rounded-lg bg-[#7a5230] px-5 py-2 text-xs font-bold text-white shadow-sm"
            
            : "rounded-lg px-5 py-2 text-xs font-bold text-slate-500 hover:bg-[#f3e6d8]"
        }
      >
        타이머 보기
      </button>
    </div>
  );
}

export default TabButtons;
