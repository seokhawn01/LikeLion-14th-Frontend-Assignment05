import { useEffect, useState } from "react";
import TabButtons from "./components/TabButtons";
import ViewStatus from "./components/ViewStatus";
import ClockCard from "./components/ClockCard";
import TimerCard from "./components/TimerCard";

function App() {
  const [mode, setMode] = useState("clock");
  const [time, setTime] = useState(new Date());
  const [timerSeconds, setTimerSeconds] = useState(10);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    if (mode !== "timer") return;

    const timerId = setInterval(() => {
      setTimerSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timerId);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [mode]);

  const formattedTime = time.toLocaleTimeString("ko-KR", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    /* 화면 전체를 flex 컨테이너로 만들고, 중앙 정렬을 한 후, 브라운 대각선 그라데이션 배경을 깐다. */
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#4b2e1f] via-[#7a5230] to-[#d2b48c] px-4 py-8">
      {/* 메인 카드는 최대 너비 제한한했고 flex방향을 세로로 변경했습니다. 동일하게 그라데이션 적용 */}
      <main className="flex w-full max-w-xl flex-col items-center rounded-3xl bg-gradient-to-b from-[#deab78] to-[#f1dfcf] px-6 py-10 text-center shadow-2xl">
        {/* 텍스트도 브라운으로 맞춰서 통일감 줬습니다 */}
        <p className="text-xs font-bold text-[#7a5230]">useEffect 타이머 예제</p>

        {/* 제목이라서 더 진한 컬러와 폰트 컬러를 줬습니다 */}
        <h1 className="mt-2 text-xl font-extrabold text-[#4b2e1f]">
          실시간 시계 & 카운트다운 타이머
        </h1>
        
        <p className="mt-3 text-sm text-[#6b4f3a]">
          마운트, 언마운트, cleanup 동작을 확인할 수 있는 예제입니다.
        </p>

        <TabButtons mode={mode} setMode={setMode} />
        <ViewStatus mode={mode} />

        {mode === "clock" ? (
          <ClockCard time={formattedTime} />
        ) : (
          <TimerCard seconds={timerSeconds} />
        )}
      </main>
    </div>
  );
}

export default App;
