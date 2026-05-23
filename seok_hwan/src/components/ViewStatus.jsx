function ViewStatus({ mode }) {
   return (
    <div className="mt-4 rounded-full bg-white px-4 py-1.5 text-[10px] font-semibold text-slate-500 shadow-sm">
      {/* 현재 선택된 모드 표시 */}
      현재 보기:{" "}
      <span className="text-blue-600">
        {mode === "clock" ? "시계" : "타이머"}
      </span>
    </div>
  );
}

export default ViewStatus;