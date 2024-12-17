// https://github.com/n3r4zzurr0/svg-spinners
"use client";
export default function SpinnerDemo() {
  return (
    <div className="flex justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="4" width="6" height="14" opacity="1"><animate id="spinner_rQ7m" begin="0;spinner_2dMV.end-0.25s" attributeName="opacity" dur="0.75s" values="1;.2" fill="freeze"/></rect><rect x="9" y="4" width="6" height="14" opacity=".4"><animate begin="spinner_rQ7m.begin+0.15s" attributeName="opacity" dur="0.75s" values="1;.2" fill="freeze"/></rect><rect x="17" y="4" width="6" height="14" opacity=".3"><animate id="spinner_2dMV" begin="spinner_rQ7m.begin+0.3s" attributeName="opacity" dur="0.75s" values="1;.2" fill="freeze"/></rect></svg>
    </div>
  );
}
