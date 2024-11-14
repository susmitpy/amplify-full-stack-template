"use client"

import { useState } from "react";
import Service from "./service";

export default function Home() {
  const { testApi } = Service();
  const [res, setRes] = useState<any>(null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-6xl font-bold">Welcome to the Amplify React App</h1>
        <p className="text-2xl mt-4">This is a sample page to demonstrate how to use the Amplify API module</p>
        <button onClick={async () => {
          const res = await testApi();
          console.log(res);
          setRes(res);
        }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">Test API</button>
      </div>

      {res && (
        <div className="mt-2">
          <h2 className="text-3xl font-bold">API Response</h2>
          <pre className="mt-4">{JSON.stringify(res)}</pre>
        </div>
      )}
    </main>
  );
}
