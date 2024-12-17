// https://github.com/n3r4zzurr0/svg-spinners
"use client";
export default function SpinnerDemo() {
  return (
    <div className="flex justify-center">
        <svg className="fill-cyan-400" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,21L15.6,16.2C14.6,15.45 13.35,15 12,15C10.65,15 9.4,15.45 8.4,16.2L12,21" opacity="0"><animate id="spinner_id3C" begin="0;spinner_8AQx.end+0.2s" attributeName="opacity" dur="0.25s" values="0;1" fill="freeze"/><animate id="spinner_8AQx" begin="spinner_mMCl.end+0.5s" attributeName="opacity" dur="0.1s" values="1;0" fill="freeze"/></path><path d="M12,9C9.3,9 6.81,9.89 4.8,11.4L6.6,13.8C8.1,12.67 9.97,12 12,12C14.03,12 15.9,12.67 17.4,13.8L19.2,11.4C17.19,9.89 14.7,9 12,9Z" opacity="0"><animate id="spinner_J1bT" begin="spinner_id3C.end" attributeName="opacity" dur="0.25s" values="0;1" fill="freeze"/><animate begin="spinner_mMCl.end+0.5s" attributeName="opacity" dur="0.1s" values="1;0" fill="freeze"/></path><path d="M12,3C7.95,3 4.21,4.34 1.2,6.6L3,9C5.5,7.12 8.62,6 12,6C15.38,6 18.5,7.12 21,9L22.8,6.6C19.79,4.34 16.05,3 12,3" opacity="0"><animate id="spinner_mMCl" begin="spinner_J1bT.end" attributeName="opacity" dur="0.25s" values="0;1" fill="freeze"/><animate begin="spinner_mMCl.end+0.5s" attributeName="opacity" dur="0.1s" values="1;0" fill="freeze"/></path></svg>
    </div>
  );
}
