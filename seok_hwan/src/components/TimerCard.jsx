import { useEffect } from "react";

function TimerCard({ seconds }) {
  useEffect(() => {
    const startTime = Date.now();

    return () => {
      const duration = Math.floor((Date.now() - startTime) / 1000);
      console.log(`타이머가 작동된 시간: ${duration}초`);
    };
  }, []);

  return (
    <div className="mt-4 w-[90%] max-w-[320px] rounded-2xl bg-white p-4 text-left shadow-[0_12px_30px_rgba(15,23,42,0.12)]">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-sm">
          ⏳
        </div>

        <div>
          <h2 className="text-xs font-extrabold text-slate-900">카운트다운</h2>
          <p className="text-[10px] text-slate-400">
            10초부터 0초까지 감소합니다.
          </p>
        </div>
      </div>

      <div className="flex h-16 items-center justify-center rounded-xl bg-slate-50">
        {seconds > 0 ? (
          <p className="text-2xl font-extrabold text-blue-600">{seconds}초</p>
        ) : (
          <p className="text-xl font-extrabold text-slate-900">시간 종료!</p>
        )}
      </div>
    </div>
  );
}

export default TimerCard;
