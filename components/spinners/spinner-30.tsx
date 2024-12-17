// https://github.com/n3r4zzurr0/svg-spinners
"use client";
export default function SpinnerDemo() {
  return (
    <div className="flex justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="0"><animate id="spinner_0Nme" begin="0;spinner_ITag.begin+0.4s" attributeName="r" calcMode="spline" dur="1.2s" values="0;11" keySplines=".52,.6,.25,.99" fill="freeze"/><animate begin="0;spinner_ITag.begin+0.4s" attributeName="opacity" calcMode="spline" dur="1.2s" values="1;0" keySplines=".52,.6,.25,.99" fill="freeze"/></circle><circle cx="12" cy="12" r="0"><animate id="spinner_f83A" begin="spinner_0Nme.begin+0.4s" attributeName="r" calcMode="spline" dur="1.2s" values="0;11" keySplines=".52,.6,.25,.99" fill="freeze"/><animate begin="spinner_0Nme.begin+0.4s" attributeName="opacity" calcMode="spline" dur="1.2s" values="1;0" keySplines=".52,.6,.25,.99" fill="freeze"/></circle><circle cx="12" cy="12" r="0"><animate id="spinner_ITag" begin="spinner_0Nme.begin+0.8s" attributeName="r" calcMode="spline" dur="1.2s" values="0;11" keySplines=".52,.6,.25,.99" fill="freeze"/><animate begin="spinner_0Nme.begin+0.8s" attributeName="opacity" calcMode="spline" dur="1.2s" values="1;0" keySplines=".52,.6,.25,.99" fill="freeze"/></circle></svg>
    </div>
  );
}
