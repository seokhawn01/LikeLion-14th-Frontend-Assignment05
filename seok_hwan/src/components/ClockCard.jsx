import { useEffect } from "react";

function ClockCard({ time }) {
  useEffect(() => {
    console.log("시계보기 시작!");
    const startTime = Date.now();

    return () => {
      const duration = Math.floor((Date.now() - startTime) / 1000);
      console.log(`시계가 작동된 시간: ${duration}초`);
    };
  }, []);

  return (
    <div className="mt-4 w-[90%] max-w-[320px] rounded-2xl bg-white p-4 text-left shadow-[0_12px_30px_rgba(15,23,42,0.12)]">
      <div className="mb-3 flex items-center gap-3">
        <div
          className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm leading-none"
        >
          🕘
        </div>

        <div>
          <h2 className="text-xs font-extrabold text-slate-900">현재 시각</h2>
          <p className="text-[10px] text-slate-400">
            1초마다 시간이 업데이트됩니다.
          </p>
        </div>
      </div>

      <div className="flex h-16 items-center justify-center rounded-xl bg-slate-50">
        <p className="text-2xl font-extrabold text-blue-600">
          {time}
        </p>
      </div>
    </div>
  );
}

export default ClockCard;
